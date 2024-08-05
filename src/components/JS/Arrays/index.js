// Closures and factory functions

function createExpFunction(exp) {
    // this function has access to exp because of closure.
    return function(val) {
        return val ** exp;
    }
}

const square = createExpFunction(2);
const cube = createExpFunction(3);

console.log(square(4)); // 16