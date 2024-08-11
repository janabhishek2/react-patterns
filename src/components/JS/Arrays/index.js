// HOF
// Function recives another function as an arg, returns a function or does both..

function doTwice(func) {
    func();
    func();
}

doTwice(() => console.log("Hiii"));

// factory functions 

// HOF: returns a function 
function multiplyBy(factor) {
    return function(number) {
        return number * factor;
    }
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(3));
console.log(triple(5));
