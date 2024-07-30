class Dog {
    constructor(name, breed) {
        this._name = name;
        this._breed = breed;
    }

    bark() {
        console.log(`${this._name} says woof!`);
    }

    sleep() {
        console.log(`${this._name} sleeps zzz...zzzZZ`);
    }
}

class GuideDog extends Dog {
    constructor(name, breed, canGuide) {
        super(name, breed);
        this._canGuide = canGuide;
    }

    canGuide() {
        console.log(`${this._name} can ${!this._canGuide && "not"} guide`)
    }
}

const guideDog = new GuideDog("Test", "breed", true);

// guideDog.__proto__.__proto__.__proto__.__proto__ is null

// classes are syntatic sugar over contructor functions extending each other.