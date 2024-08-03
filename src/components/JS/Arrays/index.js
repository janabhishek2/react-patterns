let animal = "lion";

function printAnimal() {
    console.log("Animal is: ", animal);
}

function alsoPrintAnimal() {
    let animal = "tiger";
    printAnimal(); // prints lion

    // in few languages animal is bound to printAnimal() function and hence tiger is printed.
    // however this is not the case for JS.
}

alsoPrintAnimal(); 

// Js is lexically scoped meaning it takes the scope of variables as where the function is defined;
// it looks for var in local scope, then outer function scopes and then global scope.
