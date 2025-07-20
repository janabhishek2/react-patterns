function getMemoisedFunction(fn) {
    let result = {};
    return function(...args) {
        if(result[args]) {
            return result[args];
        }
        return result[args] = fn(...args);
    }
}

const fibonacci = (n) => {
    if(n<=1) return n;
    else return fibonacci(n-1) + fibonacci(n-2);
}

const memoisedFib = getMemoisedFunction(fibonacci);

console.log(memoisedFib(10));
console.log(memoisedFib(10));
console.log(memoisedFib(10));