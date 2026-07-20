const express = require('express');
const router = express.Router();
const { getBotReply } = require('../services/chatService');
const { sendChatSummaryEmail } = require('../services/emailService');

router.post('/', async (req, res) => {
  const { message } = req.body;

  if (!message || !message.trim()) {
    return res.status(400).json({ error: 'Message is required.' });
  }

  const reply = getBotReply(message.trim());

  sendChatSummaryEmail(message.trim(), reply).catch((err) =>
    console.error('Chat email error:', err.message)
  );

  res.json({ reply });
});

module.exports = router;
