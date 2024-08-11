// Functional Programming

// TO sum 2 numbers there are 2 approaches
// Imperative

// using a state to manipulate
let sum = 0;
for(let i=1; i<=5; i++) {
    sum += i;
}

// FP approach

// we are using pure functions to manipulate data.
const ans = [1, 2, 3, 4, 5].reduce((acc, curr) => acc + curr, 0);
console.log(ans);
