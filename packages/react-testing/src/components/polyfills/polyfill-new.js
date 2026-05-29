function Car(name) {
    this.name = name;
}

Car.prototype.driving = function() {
    console.log("Driving", this.name);
};

function myNew(ConstructorFn, ...args) {
    const newlyCreatedObject = {};

    // newProtoType to attach current object to.
    const newProtoType = {
        constructor: ConstructorFn
    };
    // Copy elements from prototype of Constructor fn.
    Object.keys(ConstructorFn.prototype).forEach((key) => {
        newProtoType[key] = ConstructorFn.prototype[key];
    });


    Object.setPrototypeOf(newlyCreatedObject, newProtoType);

    // Attach vars to newlyCreatedObject
    ConstructorFn.call(newlyCreatedObject, ...args);
    return newlyCreatedObject;
}

const car = myNew(Car, "BMW");
console.log(car);
