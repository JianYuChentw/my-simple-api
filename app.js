// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/message', (req, res) => {
    res.json({ message: "Hello,我來更新你了！ Jenkins CI/CD!" });
});

module.exports = app;  // 只導出 app 實例，沒有啟動伺服器
