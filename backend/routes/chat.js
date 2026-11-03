const express = require('express');
const router = express.Router();
const { getBotReply } = require('../services/chatService');
const { sendChatSummaryEmail } = require('../services/emailService');

router.post('/', async (req, res) => {
  const { message, history } = req.body;

  if (!message || !message.trim()) {
    return res.status(400).json({ error: 'Message is required.' });
  }

  const safeHistory = Array.isArray(history)
    ? history
        .filter((h) => h && (h.role === 'user' || h.role === 'assistant') && typeof h.content === 'string')
        .slice(-10)
    : [];

  const reply = await getBotReply(message.trim(), safeHistory);

  sendChatSummaryEmail(message.trim(), reply).catch((err) =>
    console.error('Chat email error:', err.message)
  );

  res.json({ reply });
});

module.exports = router;
