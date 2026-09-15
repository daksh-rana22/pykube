import express from 'express';
import { query } from '../config/db.js';
import { requireAdminAuth } from '../middleware/auth.js';

const router = express.Router();

// Helper to format DB subscriber row to frontend camelCase
const formatSubscriber = (row) => ({
  id: row.id,
  email: row.email,
  name: row.name || '',
  status: row.status,
  source: row.source,
  subscribedAt: row.subscribed_at ? new Date(row.subscribed_at).toISOString() : new Date().toISOString(),
});

// POST /api/subscribers/subscribe (Public endpoint for Footer/Forms/CTA)
router.post('/subscribe', async (req, res) => {
  try {
    const { email, name = '', source = 'Website Subscription' } = req.body;
    const cleanEmail = (email || '').trim().toLowerCase();

    if (!cleanEmail || !cleanEmail.includes('@')) {
      return res.status(400).json({ success: false, message: 'A valid email address is required.' });
    }

    // Check if email already exists
    const existingRes = await query('SELECT * FROM subscribers WHERE LOWER(email) = $1', [cleanEmail]);
    
    if (existingRes.rows.length > 0) {
      const existing = existingRes.rows[0];
      if (existing.status === 'Unsubscribed') {
        const updatedRes = await query(
          'UPDATE subscribers SET status = $1 WHERE id = $2 RETURNING *',
          ['Active', existing.id]
        );
        return res.json({
          success: true,
          message: 'Welcome back! You have been re-subscribed.',
          subscriber: formatSubscriber(updatedRes.rows[0]),
        });
      }
      return res.status(409).json({ success: false, message: 'This email is already subscribed!' });
    }

    const id = Date.now().toString();
    const cleanName = name.trim() || cleanEmail.split('@')[0];
    const now = new Date();

    const insertRes = await query(
      `INSERT INTO subscribers (id, email, name, status, source, subscribed_at)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [id, cleanEmail, cleanName, 'Active', source || 'Website Subscription', now]
    );

    return res.status(201).json({
      success: true,
      message: 'Thank you for subscribing to PyKube Newsletter!',
      subscriber: formatSubscriber(insertRes.rows[0]),
    });
  } catch (err) {
    console.error('Subscription error:', err);
    return res.status(500).json({ success: false, message: 'Internal server error while subscribing: ' + err.message });
  }
});

// GET /api/subscribers (Admin protected: get all with filter/search)
router.get('/', requireAdminAuth, async (req, res) => {
  try {
    const { search, status } = req.query;
    let sql = 'SELECT * FROM subscribers WHERE 1=1';
    const params = [];

    if (status && status !== 'All') {
      params.push(status);
      sql += ` AND LOWER(status) = LOWER($${params.length})`;
    }

    if (search) {
      params.push(`%${search.trim().toLowerCase()}%`);
      sql += ` AND (LOWER(email) LIKE $${params.length} OR LOWER(name) LIKE $${params.length})`;
    }

    sql += ' ORDER BY subscribed_at DESC';

    const result = await query(sql, params);
    const list = result.rows.map(formatSubscriber);

    return res.json({ success: true, subscribers: list, total: list.length });
  } catch (err) {
    console.error('Fetch subscribers error:', err);
    return res.status(500).json({ success: false, error: 'Failed to fetch subscribers from database.' });
  }
});

// POST /api/subscribers/add (Admin: manually add candidate/subscriber)
router.post('/add', requireAdminAuth, async (req, res) => {
  try {
    const { email, name = '', source = 'Admin Portal' } = req.body;
    const cleanEmail = (email || '').trim().toLowerCase();

    if (!cleanEmail) {
      return res.status(400).json({ success: false, message: 'Email address is required.' });
    }

    const existingRes = await query('SELECT * FROM subscribers WHERE LOWER(email) = $1', [cleanEmail]);
    if (existingRes.rows.length > 0) {
      return res.status(409).json({ success: false, message: 'Subscriber already exists with this email.' });
    }

    const id = Date.now().toString();
    const cleanName = name.trim() || cleanEmail.split('@')[0];
    const now = new Date();

    const insertRes = await query(
      `INSERT INTO subscribers (id, email, name, status, source, subscribed_at)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [id, cleanEmail, cleanName, 'Active', source, now]
    );

    return res.status(201).json({
      success: true,
      message: 'Subscriber added successfully.',
      subscriber: formatSubscriber(insertRes.rows[0]),
    });
  } catch (err) {
    console.error('Add subscriber error:', err);
    return res.status(500).json({ success: false, error: 'Failed to add subscriber: ' + err.message });
  }
});

// PATCH /api/subscribers/:id/status (Admin: toggle Active/Unsubscribed)
router.patch('/:id/status', requireAdminAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const findRes = await query('SELECT * FROM subscribers WHERE id = $1', [id]);

    if (findRes.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Subscriber not found.' });
    }

    const currentStatus = findRes.rows[0].status;
    const newStatus = currentStatus === 'Active' ? 'Unsubscribed' : 'Active';

    const updateRes = await query(
      'UPDATE subscribers SET status = $1 WHERE id = $2 RETURNING *',
      [newStatus, id]
    );

    return res.json({ success: true, subscriber: formatSubscriber(updateRes.rows[0]) });
  } catch (err) {
    console.error('Update subscriber status error:', err);
    return res.status(500).json({ success: false, error: 'Failed to update subscriber status.' });
  }
});

// DELETE /api/subscribers/:id (Admin: delete subscriber)
router.delete('/:id', requireAdminAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const deleteRes = await query('DELETE FROM subscribers WHERE id = $1 RETURNING id', [id]);

    if (deleteRes.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Subscriber not found.' });
    }

    return res.json({ success: true, message: 'Subscriber deleted successfully.' });
  } catch (err) {
    console.error('Delete subscriber error:', err);
    return res.status(500).json({ success: false, error: 'Failed to delete subscriber.' });
  }
});

export default router;
