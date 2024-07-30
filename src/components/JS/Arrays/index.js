function Dog(name, breed) {
    this._name = name;
    this._breed = breed;
};

Dog.prototype.bark = function() {
    console.log(`${this._name} says woof!`);
};

const dog = new Dog("Test name", "Test Breed");

