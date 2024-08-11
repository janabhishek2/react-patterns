// JS functions are first class objects/citizens : functions can be treated the same way as any other variable.
// we can assign functions to vars, pass functions to functions/return from functions etc.

function callWithBlue(callback) {
    callback("blue");
}

function sayHi(name) {
    console.log(`Hello ! ${name}, how you doing ? `);
}

function hate(name) {
    console.log(`I hate you !!, ... ${name}`);
}

callWithBlue(sayHi);
callWithBlue(hate);
