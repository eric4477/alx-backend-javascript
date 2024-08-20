const fs = require('fs');

/**
 * Reads a CSV file asynchronously and counts students in each field.
 * @param {string} path - The path to the CSV file.
 * @returns {Promise<void>} - A promise that resolves when the file is processed.
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read the file asynchronously
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split the file content by new lines and filter out empty lines
      const lines = data.trim().split('\n');

      if (lines.length === 0) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Extract the data rows, ignoring the header row
      const rows = lines.slice(1).filter((line) => line.trim() !== '');

      // Count the number of students
      console.log(`Number of students: ${rows.length}`);

      // Create a dictionary to store students by field
      const fieldCounts = {};

      rows.forEach((row) => {
        const student = row.split(',');
        const field = student[3];
        const firstName = student[0];

        if (!fieldCounts[field]) {
          fieldCounts[field] = [];
        }
        fieldCounts[field].push(firstName);
      });

      // Print the number of students in each field
      for (const [field, students] of Object.entries(fieldCounts)) {
        console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }

      resolve();
    });
  });
}

// Export the function
module.exports = countStudents;
