// scope chain

// 1. Look in local scope
// 2. Look in ext functions
// 3. Look in global scope --> can be accessed from console directly

let age = 10;

function outer() {
    let age = "ageless";
    function inner() {
        // age = "internal age";
        function superInner() {
            console.log("Super inner age is: ", age);
        }
        superInner();
        console.log("Inner age is: ", age);
    }
    inner();
    console.log("Outer age is: ", age);
}

outer();
console.log("global age", age);


// if age is not found in local scope; js will look for outer functions else global scope for age variable.
