// Useful prototype methods

// Object.getProtoTypeof(obj): to get the prototpye of obj

const person = {
    name: "Abhishek",
};

const prototypeOfPerson = Object.getPrototypeOf(person);

const personParent = {
    species: "animals"
};

// Used to set prototype of person to other object.
Object.setPrototypeOf(person, personParent);

// obj1.isPrototypeOf(obj2) to check if a obj2 is a prototype of obj1
// true
console.log({personParent}.isPrototypeOf(person));