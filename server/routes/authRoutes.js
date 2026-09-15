import express from 'express';
import jwt from 'jsonwebtoken';
import { query } from '../config/db.js';
import { requireAdminAuth } from '../middleware/auth.js';

const router = express.Router();

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password, passcode } = req.body;
    const enteredPass = (password || passcode || '').trim();

    // Query admin settings from PostgreSQL
    let expectedPass = process.env.ADMIN_PASSWORD || 'admin123';
    let adminEmail = email || process.env.ADMIN_EMAIL || 'admin@pykube.com';

    try {
      const adminRes = await query('SELECT * FROM admin_settings LIMIT 1');
      if (adminRes.rows.length > 0) {
        expectedPass = adminRes.rows[0].passcode;
        adminEmail = adminRes.rows[0].email || adminEmail;
      }
    } catch (dbErr) {
      console.warn('⚠️ Could not query admin_settings table, checking fallback:', dbErr.message);
    }

    if (enteredPass === expectedPass) {
      const secret = process.env.JWT_SECRET || 'pykube_default_jwt_secret_key_2026';
      const token = jwt.sign(
        { email: adminEmail, role: 'admin' },
        secret,
        { expiresIn: '7d' }
      );

      return res.json({
        success: true,
        token,
        admin: { email: adminEmail, role: 'admin' },
        message: 'Login successful',
      });
    }

    return res.status(401).json({
      success: false,
      error: 'Invalid passcode or credentials. Please try again.',
    });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ success: false, error: 'Internal server error during login' });
  }
});

// GET /api/auth/me (Verify session)
router.get('/me', requireAdminAuth, (req, res) => {
  return res.json({
    success: true,
    authenticated: true,
    admin: req.admin,
  });
});

// POST /api/auth/change-passcode
router.post('/change-passcode', requireAdminAuth, async (req, res) => {
  try {
    const { currentPasscode, newPasscode } = req.body;
    if (!newPasscode || newPasscode.length < 4) {
      return res.status(400).json({ success: false, error: 'New passcode must be at least 4 characters.' });
    }

    const adminRes = await query('SELECT * FROM admin_settings LIMIT 1');
    const existing = adminRes.rows.length > 0 ? adminRes.rows[0].passcode : (process.env.ADMIN_PASSWORD || 'admin123');

    if (currentPasscode !== existing) {
      return res.status(400).json({ success: false, error: 'Current passcode is incorrect.' });
    }

    if (adminRes.rows.length > 0) {
      await query(
        'UPDATE admin_settings SET passcode = $1, updated_at = NOW() WHERE id = $2',
        [newPasscode, adminRes.rows[0].id]
      );
    } else {
      await query(
        'INSERT INTO admin_settings (email, passcode, updated_at) VALUES ($1, $2, NOW())',
        [process.env.ADMIN_EMAIL || 'admin@pykube.com', newPasscode]
      );
    }

    return res.json({ success: true, message: 'Passcode updated successfully.' });
  } catch (err) {
    console.error('Change passcode error:', err);
    return res.status(500).json({ success: false, error: 'Failed to update passcode: ' + err.message });
  }
});

export default router;
