const person = {
    name: 'Abhishek',
    address: {
        street: "one"
    }
};

// Immutable approach to copy object : copies only level 1 keys
const newPerson = {...person};
newPerson.address.colony = "two";

console.log(person);