// Importing the express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port on which the server will listen
const PORT = process.env.PORT || 3000;

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Another example route
app.get('/about', (req, res) => {
  res.send('This is a simple Node.js server using Express!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
