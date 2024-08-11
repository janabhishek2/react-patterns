// Pure functions: allow us to write predictable code.

let value = 2;

// Impure: because value is mutated here.
// no mutation, no side effects for pure functions...
// same input: same output
function squareAndUpdateValue(num) {
    value = num * num;
    return value;
}

// Impure: because it updates nums array as well.
function addToArray(arr, val) {
    arr.push(val);
}

const nums = [1, 2, 3];
addToArray(nums, 4);
console.log(nums);