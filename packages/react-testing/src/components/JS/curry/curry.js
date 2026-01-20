const sum = (a, b) => {
    return a + b;
}

const curriedSum = (a) => {
    return function(b) {
        return a + b;
    }
};

const add3 = curriedSum(3);

console.log(add3(4));
