// let and const using hoisting

function test() {
    // JS hoists let/const variables to this zone; variables are not accessible unless they are defined.
    // temporal dead zone
    // x = undefined but not accessible in the function before initialisation
    console.log(x); // gives error
    let x = 3;

    // temporal dead zone
}
test();