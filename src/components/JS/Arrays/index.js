class Dog {
    constructor(name, breed) {
        this._name = name;
        this._breed = breed;
    }

    testFunc() {
        console.log("This is a test fn");
    }
    // here bark is bound to prototype of object created by new keyword.

    // dog1.func === dog2.func is true as same method is used for all objects
    bark() {
        console.log(`${this.name} says woof !`);
    }
    sleep() {
        console.log(`${this._name} sleeps... zzZZzzZZ`);
    }
}

function Doggy(name, breed) {
    this._name = name;
    this._breed = breed;

    // here bark is bound to object created from constructor function

    // because every object this contains its own copy of method sleep/bark.
    // dogg1.func === doggy2.func is false
    this.bark = function() {
        console.log(`${this._name} says woof !`);
    }
}

const elton = new Dog("Elton", "Breed1");
const woofy = new Doggy("Woofy", "Breed2");

console.log(elton);