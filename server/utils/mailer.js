import nodemailer from 'nodemailer';

let cachedTransporter = null;

/**
 * Creates or returns an optimized, pooled Nodemailer transporter
 */
export const createTransporter = () => {
  if (cachedTransporter) return cachedTransporter;

  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (user && pass) {
    // Optimized Gmail Connection with pooling
    if (host.includes('gmail') || user.includes('@gmail.com')) {
      cachedTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user, pass },
        pool: true,
        maxConnections: 5,
        maxMessages: 100,
        rateDelta: 1000,
        rateLimit: 10,
      });
    } else {
      cachedTransporter = nodemailer.createTransport({
        host,
        port: Number(process.env.SMTP_PORT) || 465,
        secure: process.env.SMTP_SECURE === 'true' || true,
        auth: { user, pass },
        pool: true,
      });
    }
    return cachedTransporter;
  }

  // Development Fallback: Logs emails to console safely
  return {
    sendMail: async (options) => {
      console.log('----------------------------------------------------');
      console.log('📧 [MOCK EMAIL DISPATCH] (SMTP credentials not provided in .env)');
      console.log(`From: ${options.from}`);
      console.log(`BCC (${options.bcc ? options.bcc.length : 0} recipients):`, options.bcc);
      console.log(`Subject: ${options.subject}`);
      console.log(`Preview Text: ${options.text ? options.text.substring(0, 120) : ''}...`);
      console.log('----------------------------------------------------');
      return { messageId: `mock-${Date.now()}`, accepted: options.bcc || [options.to] };
    },
  };
};

/**
 * Processes image input into either CID inline attachment or public URL
 */
export const processEmailImage = (imageUrl) => {
  if (!imageUrl) return { imageSrc: null, attachments: [] };

  // If base64 data URL: convert to inline CID attachment so Gmail displays it
  if (imageUrl.startsWith('data:image/')) {
    const match = imageUrl.match(/^data:(image\/[a-zA-Z+]+);base64,(.+)$/);
    if (match) {
      const contentType = match[1];
      const ext = contentType.split('/')[1] || 'png';
      const buffer = Buffer.from(match[2], 'base64');
      const cid = 'announcement_banner_img';

      return {
        imageSrc: `cid:${cid}`,
        attachments: [
          {
            filename: `banner.${ext}`,
            content: buffer,
            cid: cid,
            contentType,
          },
        ],
      };
    }
  }

  // Public HTTP/HTTPS URL
  return {
    imageSrc: imageUrl,
    attachments: [],
  };
};

/**
 * Builds responsive, clean HTML email template for PyKube
 */
export const buildHtmlEmail = ({ subject, message, imageSrc, senderName }) => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1e293b;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f1f5f9; padding: 30px 15px;">
    <tr>
      <td align="center">
        <table width="100%" max-width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.06);">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #0f1c3f 0%, #1e3a8a 100%); padding: 32px 24px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">PyKube Technologies</h1>
              <p style="color: #93c5fd; margin: 6px 0 0; font-size: 13px; letter-spacing: 0.5px;">US IT BOOTCAMPS &amp; CAREER EXCELLENCE</p>
            </td>
          </tr>

          ${imageSrc ? `
          <!-- Image Banner -->
          <tr>
            <td style="padding: 0; line-height: 0;">
              <img src="${imageSrc}" alt="Announcement Banner" style="width: 100%; max-height: 300px; object-fit: cover; display: block; border: 0;" />
            </td>
          </tr>
          ` : ''}

          <!-- Body Content -->
          <tr>
            <td style="padding: 36px 32px;">
              <h2 style="color: #0f1c3f; font-size: 20px; font-weight: 700; margin: 0 0 18px; line-height: 1.3;">${subject}</h2>
              <div style="font-size: 15px; line-height: 1.7; color: #334155; white-space: pre-wrap;">${message}</div>

              <!-- CTA Button -->
              <div style="margin-top: 32px; text-align: center;">
                <a href="https://pykube.com" style="display: inline-block; background-color: #2563eb; color: #ffffff; font-weight: 700; font-size: 14px; text-decoration: none; padding: 13px 28px; border-radius: 8px; box-shadow: 0 4px 12px rgba(37,99,235,0.3);">
                  Explore PyKube Bootcamps &rarr;
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 24px 32px; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="margin: 0 0 8px; font-size: 13px; color: #64748b; font-weight: 600;">Sent with ❤️ by ${senderName || 'PyKube Admissions Team'}</p>
              <p style="margin: 0; font-size: 11px; color: #94a3b8; line-height: 1.5;">
                PyKube Technologies LLC • 2332 Covey Ct, Little Elm TX 75068, USA<br/>
                <a href="https://pykube.com" style="color: #3b82f6; text-decoration: none;">Visit Website</a> • 
                <a href="mailto:hr@pykube.net" style="color: #3b82f6; text-decoration: none;">Contact Support</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};
