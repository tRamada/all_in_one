const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname)));

// Serve index.html at the root (http://localhost:3000/)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'web', 'index.html'));
});

// Serve tools.html (http://localhost:3000/tools)
app.get('/tools', (req, res) => {
    res.sendFile(path.join(__dirname, 'web', 'tools', 'tools.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
