// Composition: passing return values of 1 funciton to other funciton

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

const ans = add(2, multiply(10,3));

console.log(ans);
