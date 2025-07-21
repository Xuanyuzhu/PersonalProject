// server.js
require('dotenv').config();
const express = require('express');
const path    = require('path');
const pool    = require('./models/db');
const app     = express();

app.use(express.json());

// put my-web
app.use(express.static(path.join(__dirname, '../my-web')));

// select front end
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../my-web/index.html'));
});

// test
app.get('/test-db', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT NOW() AS now');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Database connection error');
  }
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
