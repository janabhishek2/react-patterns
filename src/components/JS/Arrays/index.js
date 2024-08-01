// Logical assignment

// logical: && , || , ??

const person = {
    name: "Abhishek",
    father: "abcd"
};

// if person.father is not set then set it to tesst
person.father ||= "Tesst";

console.log(person);
