const express = require('express');
const cors = require('cors');
const geminiRoutes = require('./routes/geminiRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/chat', geminiRoutes);

module.exports = app;
