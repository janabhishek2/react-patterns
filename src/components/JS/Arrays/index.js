const person = {
    name: 'Abhishek',
    address: {
        street: "one"
    }
};

// Immutable approach to copy object : copies only level 1 keys

// Copy full object for complete copy
const newPerson = {...person, address: {
    ...person.address
}};

newPerson.address.colony = "two";

console.log(person);