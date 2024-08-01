// nullish coalescing

const user = {
    name: "Abhishek",
    age: 0
};

// || operator checks for falsy values and sets the RHS.
// ?? useful if age is 0 or falsy and we need to set it to a LHS.

const age = user?.age ?? "unknown age";
console.log(age);
