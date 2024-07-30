function Dog(name, breed) {
    this._name = name;
    this._breed = breed;

    this.__proto__.bark = function() {
        console.log(`${this._name} says woof!`);
    }
};

const dog = new Dog("Test name", "Test Breed");

console.log(dog);
