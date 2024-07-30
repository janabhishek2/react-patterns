class Dog {
    constructor(name, breed) {
        this._name = name;
        this._breed = breed;
    }

    bark() {
        console.log(`${this._name} says woof!!`);
    }
}

const dog = new Dog("DogName", "DogBreed");

// prototypes means the base class using which object was created.
console.log(dog.__proto__);