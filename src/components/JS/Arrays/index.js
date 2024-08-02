// Logical assignment

// logical: && , || , ??

const person = {
    name: "Abhishek"
};

// if person name exists(truthy) then set it it rocky
person.name &&= "Rocky";

console.log(person);
