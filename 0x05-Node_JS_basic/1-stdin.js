// Import the readline module to handle input from the command line
const readline = require('readline');

// Create an interface to read from stdin (standard input) and write to stdout (standard output)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display the welcome message and prompt the user for their name
console.log('Welcome to Holberton School, what is your name?');

// Listen for the user input
rl.on('line', (input) => {
  console.log(`Your name is: ${input}`);

  // Close the readline interface to end the program
  rl.close();
});

// Display a message when the program is closing
rl.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
