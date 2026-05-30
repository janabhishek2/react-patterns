const animal = {
    name: "Default animal",
    type: "Default animal"
};

// const cheetah = Object.create(animal);

function myCreate(object, properties) {
    const newObject = {};
    Object.defineProperties(newObject, properties);
    Object.setPrototypeOf(newObject, object);
    return newObject;
}

const cheetah = myCreate(animal, {
    "newValue": {
        value: "Abcd"
    }
});

console.log(cheetah);
