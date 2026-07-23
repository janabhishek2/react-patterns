// The object we want new objects to inherit from (the prototype).
const animal = {
    name: "Default animal",
    type: "Default animal"
};

// const cheetah = Object.create(animal);

/**
 * myCreate(object, properties) — a polyfill of Object.create().
 *
 * Object.create builds a new object whose prototype is `object` and whose own
 * properties come from a property-descriptor map. This version:
 *   1. Creates an empty object.
 *   2. Applies the descriptor map via Object.defineProperties (each value is a
 *      descriptor like { value, writable, enumerable, configurable }).
 *   3. Links the prototype with setPrototypeOf so lookups fall through to
 *      `object` (e.g. cheetah.name resolves to "Default animal").
 *
 * NOTE: native Object.create sets the prototype at creation time; doing
 * defineProperties first then setPrototypeOf yields the same observable result
 * here.
 */
function myCreate(object, properties) {
    const newObject = {};
    Object.defineProperties(newObject, properties);
    Object.setPrototypeOf(newObject, object);
    return newObject;
}

// cheetah gets an own property "newValue" and inherits name/type from animal.
const cheetah = myCreate(animal, {
    "newValue": {
        value: "Abcd"
    }
});

console.log(cheetah);
