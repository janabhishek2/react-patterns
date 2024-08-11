// Pure functions: allow us to write predictable code.

let value = 2;

// Impure: because value is mutated here.
function squareAndUpdateValue(num) {
    value = num * num;
    return value;
}