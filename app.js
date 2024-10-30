// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/message', (req, res) => {
    res.json({ message: "Hello, Jenkins CI/CD!" });
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});

module.exports = app;
