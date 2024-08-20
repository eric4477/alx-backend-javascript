const http = require('http');
const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.trim().split('\n');
    const headers = lines[0].split(',');

    if (lines.length <= 1) {
      resolve('No students found');
      return;
    }

    const students = lines.slice(1).map((line) => {
      const values = line.split(',');
      const student = {};
      headers.forEach((header, index) => {
        student[header.trim()] = values[index].trim();
      });
      return student;
    });

    const numberOfStudents = students.length;
    const fields = {};

    students.forEach((student) => {
      const { field } = student;
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(student.firstname);
    });

    let response = `Number of students: ${numberOfStudents}\n`;
    Object.entries(fields).forEach(([field, students]) => {
      response += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
    });

    resolve(response.trim());
  });
});

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const databasePath = process.argv[2];
    if (!databasePath) {
      res.end('Database path is not provided.');
      return;
    }

    try {
      const studentsList = await countStudents(databasePath);
      res.end(`This is the list of our students\n${studentsList}`);
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.end('Invalid endpoint');
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
