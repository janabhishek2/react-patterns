// scoping for var

// accessible globally
var x = 1;

function blah() {
    var y = 2;
}

if(true) {
    var z = 3;
}

console.log('hi');
console.log(x); // 1
// console.log(y); --> not available
console.log(z); // 3

// var variables defined in function block are scoped to function only.