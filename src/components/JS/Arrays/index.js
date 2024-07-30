function Dog(name, breed) {
    this._name = name;
    this._breed = breed;
};

Dog.prototype.bark = function() {
    console.log(`${this._name} barks woof!`);
}

function GuideDog(name, breed, canguide) {
    this.__proto__ = new Dog(name, breed);
    this._guide = canguide;

    this.canGuide = function() {
        console.log(`${this._name} can ${!this._guide && "not"} guide`);
    }
};

const guideDog = new GuideDog("Moku", "pomerian", false);

// Prototypes are objects which inherit the base object; they share common functionality
// with the base object.