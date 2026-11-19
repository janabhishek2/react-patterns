// A sample constructor + prototype method to exercise the `new` polyfill.
function Car(name) {
    this.name = name;
}

Car.prototype.driving = function() {
    console.log("Driving", this.name);
};

/**
 * myNew(ConstructorFn, ...args) — a polyfill of the `new` operator.
 *
 * The `new` operator does four things, which this function reproduces:
 *   1. Create a fresh empty object.
 *   2. Link that object's prototype to the constructor's prototype (so
 *      instances inherit methods like Car.prototype.driving). Here we build a
 *      `newProtoType` that carries a `constructor` back-reference and copies
 *      the constructor's own prototype keys, then setPrototypeOf links it.
 *   3. Run the constructor with `this` bound to the new object (via .call),
 *      passing the forwarded args — this is what sets instance fields.
 *   4. Return the new object.
 *
 * NOTE: Object.keys only copies ENUMERABLE OWN keys, so inherited/non-enumerable
 * prototype members wouldn't be picked up. Real `new` just links the prototype
 * directly (Object.setPrototypeOf(obj, ConstructorFn.prototype)) instead of copying.
 */
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
