function Dog(name, breed) {
    this._name = name;
    this._breed = breed;

    console.log(this);
}

// this refers to window
// window._name = "abcd";
const p = Dog("abcd", "Efg");

// this creates a new object with keys _name and _breed
// this is called a factory function / constructor function
// cf are used in conjunction with new keyword to create objects.
const dog = new Dog("Test", "Breed");

// new keyword: creates an empty object ; binds the this keyword to that object and returns it