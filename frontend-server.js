const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001; // Frontend runs on 3001

// Serve static files from current directory
app.use(express.static(__dirname));

// Redirect root to homepage.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'homepage.html'));
});

app.listen(PORT, () => {
  console.log(`Frontend server running at http://localhost:${PORT}`);
});

