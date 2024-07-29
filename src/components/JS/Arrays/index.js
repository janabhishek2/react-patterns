function Dog(name, breed) {
    this._name = name;
    this._breed = breed;

    console.log(this);
}

// this refers to window
// window._name = "abcd";
const p = Dog("abcd", "Efg");

// this creates a new object with keys _name and _breed
const dog = new Dog("Test", "Breed");

