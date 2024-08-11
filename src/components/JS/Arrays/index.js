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

// Pure addToarray
function pureAddToArray(arr, value) {
    const newArr = [...arr];
    newArr.push(value);
    return newArr;
}

const nums = [1, 2, 3];

const newNums = pureAddToArray(nums, 5);
console.log(nums, newNums);
