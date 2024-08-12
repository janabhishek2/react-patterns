// Writing partial functions

function partial(func, ...fixedArgs) {
    return function(...remainingArgs) {
        return func(...fixedArgs, ...remainingArgs);
    }
};

const multiply = (a, b) => {
    return a * b;
};

const double = partial(multiply, 2, 3);
