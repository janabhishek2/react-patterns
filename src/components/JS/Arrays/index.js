function add(a, b, c) {
    return a + b + c;
};

function addCurry(a) {
    return function(b) {
        return function(c) {
            // variables a and b accesible via closure
            return a+b+c;
        }
    }
};

const curry = addCurry(3)(4)(5);

console.log(curry);
