class Dog {
    constructor(name, breed) {
        this._name = name;
        this._breed = breed;
    }

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

    this.bark = function() {
        console.log(`${this._name} says woof !`);
    }
}

const elton = new Dog("Elton", "Breed1");
const woofy = new Doggy("Woofy", "Breed2");

console.log(woofy.bark === elton.bark);
