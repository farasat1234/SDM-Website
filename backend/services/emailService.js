const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: { rejectUnauthorized: false },
});

transporter.verify((err) => {
  if (err) {
    console.error('❌ Email config error:', err.message);
    console.error('   Check SMTP_USER and SMTP_PASS in backend/.env');
  } else {
    console.log('✅ Email transporter ready — sending to:', process.env.FEEDBACK_EMAIL);
  }
});

async function sendContactEmail(data) {
  const { name, company, email, phone, service, details, attachment } = data;
  const mailOptions = {
    from: `"SDM Website" <${process.env.SMTP_USER}>`,
    to: process.env.FEEDBACK_EMAIL,
    replyTo: email,
    subject: `New Enquiry: ${service} — ${name}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #ddd;border-radius:8px;overflow:hidden;">
        <div style="background:#0f1829;padding:24px;text-align:center;">
          <h2 style="color:#c9952a;margin:0;font-size:22px;">SDM — New Website Enquiry</h2>
        </div>
        <div style="padding:28px;background:#fff;">
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#666;width:140px;"><strong>Name</strong></td><td style="padding:8px 0;color:#333;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#666;"><strong>Company</strong></td><td style="padding:8px 0;color:#333;">${company || '—'}</td></tr>
            <tr><td style="padding:8px 0;color:#666;"><strong>Email</strong></td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#c9952a;">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#666;"><strong>Phone</strong></td><td style="padding:8px 0;color:#333;">${phone || '—'}</td></tr>
            <tr><td style="padding:8px 0;color:#666;"><strong>Service</strong></td><td style="padding:8px 0;color:#333;">${service}</td></tr>
          </table>
          <div style="margin-top:20px;padding:16px;background:#f5f5f5;border-radius:6px;">
            <strong style="color:#666;">Project Details:</strong>
            <p style="color:#333;margin:8px 0 0;">${details || '—'}</p>
          </div>
          ${attachment ? `<p style="margin-top:16px;color:#666;font-size:13px;">📎 Attachment: <strong>${attachment.originalname}</strong></p>` : ''}
        </div>
        <div style="background:#0f1829;padding:14px;text-align:center;">
          <p style="color:#888;font-size:12px;margin:0;">System Dies and Mould | C-47, SITE, Super Highway, Karachi</p>
        </div>
      </div>
    `,
  };
  if (attachment) {
    mailOptions.attachments = [{ filename: attachment.originalname, content: attachment.buffer }];
  }
  await transporter.sendMail(mailOptions);
}

async function sendChatSummaryEmail(userMessage, botReply, visitorInfo) {
  await transporter.sendMail({
    from: `"SDM Chatbot" <${process.env.SMTP_USER}>`,
    to: process.env.FEEDBACK_EMAIL,
    subject: `Chat Lead: "${userMessage.substring(0, 60)}..."`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #ddd;border-radius:8px;overflow:hidden;">
        <div style="background:#0f1829;padding:24px;text-align:center;">
          <h2 style="color:#c9952a;margin:0;font-size:22px;">SDM — Chatbot Conversation</h2>
        </div>
        <div style="padding:28px;background:#fff;">
          <p style="color:#666;margin:0 0 6px;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Visitor asked:</p>
          <div style="background:#f0f4ff;padding:14px;border-radius:6px;margin-bottom:18px;">
            <p style="color:#333;margin:0;">${userMessage}</p>
          </div>
          <p style="color:#666;margin:0 0 6px;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Bot replied:</p>
          <div style="background:#fff8e8;padding:14px;border-radius:6px;border-left:3px solid #c9952a;">
            <p style="color:#333;margin:0;">${botReply}</p>
          </div>
          <p style="color:#aaa;font-size:12px;margin-top:18px;">Time: ${new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' })}</p>
        </div>
        <div style="background:#0f1829;padding:14px;text-align:center;">
          <p style="color:#888;font-size:12px;margin:0;">System Dies and Mould | C-47, SITE, Super Highway, Karachi</p>
        </div>
      </div>
    `,
  });
}

module.exports = { sendContactEmail, sendChatSummaryEmail };
