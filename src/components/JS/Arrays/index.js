function Dog(name, breed) {
    this._name = name;
    this._breed = breed;
};

Dog.prototype.bark = function() {
    console.log(`${this._name} says woof!`);
};

// every function has prototype method
// Dog.prototype.constructor refers to the same dog function.

const dog = new Dog.prototype.constructor("Yet", "n");

// this can also be accessed via __proto__ on dog.

const newDog = new dog.__proto__.constructor("Test", "3");



