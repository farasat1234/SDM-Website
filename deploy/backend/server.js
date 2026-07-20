require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const contactRouter = require('./routes/contact');
const chatRouter = require('./routes/chat');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  methods: ['GET', 'POST'],
}));

app.use(bodyParser.json());

app.get('/health', (req, res) => res.json({ status: 'SDM backend running' }));

app.use('/api/contact', contactRouter);
app.use('/api/chat', chatRouter);

app.listen(PORT, () => {
  console.log(`SDM backend running on http://localhost:${PORT}`);
});
