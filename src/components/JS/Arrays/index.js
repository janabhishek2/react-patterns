// Logical assignment

// logical: && , || , ??

// nullish coalescing assignment

const person = {
    name: null
};

person.name ??= "Abhishek";
// person.name ?? (person.name = "Abhishek")

console.log(person);

function doSetup(object = {}) {
    object.timeout ??= 3000;
    object.retries ??= 5;

    return object;
}

const ans = doSetup();
console.log(ans); 

// sets timeout and retries to 3000 and 5.