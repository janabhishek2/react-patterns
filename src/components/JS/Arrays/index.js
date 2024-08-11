// JS functions are first class objects/citizens : functions can be treated the same way as any other variable.
// we can assign functions to vars, pass functions to functions/return from functions etc.

const funcs = [
    function(name) {
        console.log(`I love you.. ${name}`);
    },
    function(name) {
        console.log(`I hate you..., ${name}`)
    }
];

funcs[1]("Shweta");