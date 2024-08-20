const fs = require('fs');

/**
 * Reads a CSV file and counts students in each field.
 * @param {string} path - The path to the CSV file.
 */
function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf-8');
    // Split the file content by new lines and filter out empty lines
    const lines = data.trim().split('\n');
    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }
    // Extract the data rows
    const rows = lines.slice(1).filter((line) => line.trim() !== '');
    // Count the number of students
    console.log(`Number of students: ${rows.length}`);
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
  } catch (error) {
    // Handle errors, like file not found
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
