// Implementing inheritance using prototype chain

const grandParent = {
    prop3: "prop3"
};

const parent = {
    prop2: "prop2",
    __proto__: grandParent
}

const child = {
    prop1: "prop1",
    __proto__: parent
};

// child inherits parent and parent inherits gparent.
console.log(child.prop3);
