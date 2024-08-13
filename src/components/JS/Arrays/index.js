// Composition: passing return values of 1 funciton to other funciton

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

const ans = add(2, multiply(10,3));

const square = (a) => a * a;

const addAndSquare = (a, b) => square(add(a,b));

console.log(addAndSquare(3,4));