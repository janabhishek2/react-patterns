const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the left and right nodes ? ", (input) => {
    console.log("Hello, ", input);
    rl.close();
})