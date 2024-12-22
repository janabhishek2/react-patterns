// fibonacci

const fibonacchiNthTermGen = () => {
    let cache = {};
    return function Fib(n) {
        if(n <= 1){
            return n;
        }
        // if item is in cache then return it, else save it to cache and return it
        else if(cache?.[n]) return cache?.[n];
        else {
            return cache[n] = Fib(n-1) + Fib(n-2);
        }
    }
}

const getFib = fibonacchiNthTermGen();

const fib1 = getFib(6);
console.log(fib1);