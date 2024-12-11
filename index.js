const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Basic routes
app.get('/', (req, res) => {
    res.send('Welcome to the Express API!');
});

// Start the server
app.listen(port, () => {
    console.log(`API is running`);
});
