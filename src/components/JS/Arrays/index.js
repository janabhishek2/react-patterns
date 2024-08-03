// scope chain

// 1. Look in local scope
// 2. Look in ext functions
// 3. Look in global scope

let age = 10;

function outer() {
    let age = "ageless";
    function inner() {
        let age = "eternal";
        console.log(age);
    }
    inner();
}

// if age is not found in local scope; js will look for outer functions else global scope for age variable.
