function outerFunction() {
    let outerVariable = "outer";
    function innerFunction() {
        console.log("I am inner function");
        // inner function has access to outer variable
        console.log("Outer variable is: ", outerVariable);
    }
    return innerFunction;
}

// when we call inner function; it has access to its outer functions' variables.
const outer = outerFunction();
outer();