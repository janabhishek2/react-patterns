class Dog {
    constructor(name, breed) {
        this._name = name;
        this._breed = breed;
    }

    // here bark is bound to prototype of object created by new keyword.
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
    this.bark = function() {
        console.log(`${this._name} says woof !`);
    }
}

const elton = new Dog("Elton", "Breed1");
const woofy = new Doggy("Woofy", "Breed2");

console.log(woofy.bark === elton.bark);
