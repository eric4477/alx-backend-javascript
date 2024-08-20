const express = require('express');
const fs = require('fs');
const path = require('path');

// Create an instance of an Express application
const app = express();

// Read the CSV filename from command-line arguments
const csvFile = process.argv[2];
if (!csvFile) {
  console.error('Please provide the path to the CSV file as a command-line argument.');
  process.exit(1);
}

// Root endpoint that returns a welcome message
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Students endpoint that returns the list of students
app.get('/students', (req, res) => {
  // Resolve the absolute path to the CSV file
  const databaseFile = path.resolve(__dirname, csvFile);

  // Function to read and process the database file asynchronously
  function countStudents(filePath) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
          reject(new Error('Cannot load the database'));
        } else {
          const lines = data.trim().split('\n').filter(Boolean);
          const students = lines.slice(1); // Skip the header line
          const numberOfStudents = students.length;
          const fields = {};

          students.forEach((student) => {
            const [firstName, , , field] = student.split(',');
            if (!fields[field]) {
              fields[field] = [];
            }
            fields[field].push(firstName);
          });

          let response = `Number of students: ${numberOfStudents}\n`;

          for (const field in fields) {
            if (Object.prototype.hasOwnProperty.call(fields, field)) {
              response += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
            }
          }

          resolve(response.trim());
        }
      });
    });
  }

  countStudents(databaseFile)
    .then((studentData) => {
      res.send(`This is the list of our students\n${studentData}`);
    })
    .catch((error) => {
      console.error(error); // Log the error for debugging
      res.send('This is the list of our students\nCannot load the database');
    });
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app
module.exports = app;
