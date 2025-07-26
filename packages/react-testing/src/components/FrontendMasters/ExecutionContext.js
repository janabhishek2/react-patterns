// Event loop

// JS is single threaded

// problems: if any heavy task is there then the thread is busy calculating response of it, and
// application / browser can get stuck.

// Call stack: The call stack is used to run the code and push functions as they are executed 
// The call stack represents the various func calls and their respective line numbers. ( LIFO ) 

debugger;
const a = 1;
const b = 2;
const c = a + b;
console.log(c);

one();
function one() {
    console.log("one");
    two();
}

function two() {
    console.log("two");
    three();
}

function three() {
    console.log("three");
}
