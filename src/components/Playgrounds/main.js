const person = {
    name: "Conan",
    city: "LA",
    sing: function() {
        // this refers to object
        console.log("LALALA", this);
    }
};

person.sing();