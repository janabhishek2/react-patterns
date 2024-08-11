function greet(greeting, name) {
    console.log(`${greeting}, ${name}`);
}

// Partial application: Baking in some args of the function using bind and returning new function and using that...
const aussieGreet = greet.bind(null, "G'day!");
const spiteGreet = greet.bind(null, 'I hate you! ');

aussieGreet("Elton");
spiteGreet("Elton");