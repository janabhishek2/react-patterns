// fibonacci

const getFib = (n) => {
    if(n <= 1){
        return n;
    } else {
        return getFib(n-1) + getFib(n-2);
    }
}

const fib4 = getFib(4);
console.log(fib4);
