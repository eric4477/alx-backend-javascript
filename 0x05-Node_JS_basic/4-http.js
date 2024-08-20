const http = require('http');

/**
 * Creates a small HTTP server.
 * The server listens on port 1245 and responds with "Hello Holberton School!".
 */
const app = http.createServer((req, res) => {
  // Set the response header content-type to text/plain
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body "Hello Holberton School!"
  res.end('Hello Holberton School!');
});

// The server listens on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app variable
module.exports = app;
