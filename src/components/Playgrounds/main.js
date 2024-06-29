const person = {
    name: "Conan",
    city: "LA",
    sing: function() {
        // this refers to object
        console.log(`${this.name} sings LALALA`);
    }
};

// this will refer to undefined
const pSing = person.sing;

pSing();