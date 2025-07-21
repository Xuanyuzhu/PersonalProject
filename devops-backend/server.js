// server.js
require('dotenv').config();
const express = require('express');
const path    = require('path');
const pool    = require('./models/db');
const app     = express();

app.use(express.json());

// —— 新增：把 my-web 文件夹当作静态资源目录 —— 
app.use(express.static(path.join(__dirname, '../my-web')));

// —— 可选：明确定义根路由返回 index.html —— 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../my-web/index.html'));
});

// 测试路由
app.get('/test-db', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT NOW() AS now');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Database connection error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
