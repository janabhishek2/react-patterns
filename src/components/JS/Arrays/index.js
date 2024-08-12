// Writing partial functions

function partial(func, ...fixed) {
    return func.bind(null, ...fixed);
}

const multiply = (a, b, c) => {
    return a * b * c;
};

const double = partial(multiply, 5);

console.log(double(3, 4));
