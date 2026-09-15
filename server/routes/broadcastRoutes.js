import express from 'express';
import { query } from '../config/db.js';
import { requireAdminAuth } from '../middleware/auth.js';
import { createTransporter, buildHtmlEmail, processEmailImage } from '../utils/mailer.js';

const router = express.Router();

// Helper to format DB broadcast row
const formatBroadcastLog = (row) => ({
  id: row.id,
  subject: row.subject,
  sender: row.sender,
  recipientsCount: row.recipients_count,
  sentAt: row.sent_at ? new Date(row.sent_at).toISOString() : new Date().toISOString(),
  status: row.status,
  hasImage: !!row.has_image,
  message: row.message,
  imageUrl: row.image_url,
});

// GET /api/broadcast/history (Admin: get sent broadcasts from PostgreSQL)
router.get('/history', requireAdminAuth, async (req, res) => {
  try {
    const result = await query(
      'SELECT * FROM broadcast_history ORDER BY sent_at DESC LIMIT 50'
    );
    const history = result.rows.map(formatBroadcastLog);
    return res.json({ success: true, history });
  } catch (err) {
    console.error('Fetch broadcast history error:', err);
    return res.status(500).json({ success: false, error: 'Failed to fetch broadcast history from database.' });
  }
});

// POST /api/broadcast/send (Admin: batch dispatch broadcast email)
router.post('/send', requireAdminAuth, async (req, res) => {
  try {
    const { subject, message, imageUrl, senderName, recipientFilter } = req.body;

    if (!subject || !message) {
      return res.status(400).json({ success: false, error: 'Subject and message are required.' });
    }

    // Query recipients from PostgreSQL
    let recipientSql = 'SELECT email FROM subscribers WHERE email IS NOT NULL';
    const params = [];

    if (recipientFilter === 'Active') {
      recipientSql += ' AND status = $1';
      params.push('Active');
    }

    const subResult = await query(recipientSql, params);
    const emailList = subResult.rows.map(r => r.email).filter(Boolean);

    if (emailList.length === 0) {
      return res.status(400).json({ success: false, error: 'No recipients found for the selected filter.' });
    }

    // Process image into inline CID attachment for Gmail or public URL
    const { imageSrc, attachments } = processEmailImage(imageUrl);

    const html = buildHtmlEmail({
      subject,
      message,
      imageSrc,
      senderName: senderName || 'PyKube Admissions Team',
    });

    const transporter = createTransporter();

    // Batch send via BCC with inline attachments
    await transporter.sendMail({
      from: `"PyKube Technologies" <${process.env.SMTP_USER || 'hr@pykube.net'}>`,
      bcc: emailList,
      subject,
      text: message,
      html,
      attachments: attachments && attachments.length > 0 ? attachments : undefined,
    });

    const isBase64 = imageUrl && imageUrl.startsWith('data:image/');
    const storedImageUrl = isBase64 ? 'embedded_inline_image' : (imageUrl || '');
    const broadcastId = `b-${Date.now()}`;
    const now = new Date();

    // Insert broadcast log into PostgreSQL
    const insertRes = await query(
      `INSERT INTO broadcast_history (id, subject, sender, recipients_count, status, has_image, message, image_url, sent_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       RETURNING *`,
      [
        broadcastId,
        subject,
        senderName || 'PyKube Admissions Team',
        emailList.length,
        'Completed',
        !!imageUrl,
        message,
        storedImageUrl,
        now,
      ]
    );

    const log = formatBroadcastLog(insertRes.rows[0]);

    return res.json({
      success: true,
      message: `Broadcast successfully dispatched to ${emailList.length} recipient(s)!`,
      log,
      recipientsCount: emailList.length,
    });
  } catch (err) {
    console.error('Broadcast send error:', err);
    return res.status(500).json({ success: false, error: 'Failed to dispatch email broadcast: ' + err.message });
  }
});

export default router;
