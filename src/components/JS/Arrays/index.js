// var variables are globally scoped except for functions

// let and const are block scoped

let y = 4;
if(true) {
    let x = 3;
    let y = 5;
}

// console.log(x); // x is not accessible here.

console.log(y);

// y will be 4
