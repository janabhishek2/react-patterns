const multiply = function(a, b) {
    return a * b;
};

// pass 2 as param A;
const double = multiply.bind(null, 2);

console.log(double(3));