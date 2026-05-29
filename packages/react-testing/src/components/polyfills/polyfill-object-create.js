const animal = {
    name: "Default animal",
    type: "Default animal"
};

// const cheetah = Object.create(animal);

function myCreate(object) {
    const newObject = {};
    Object.setPrototypeOf(newObject, object);
    return newObject;
}

const cheetah = myCreate(animal);

console.log(cheetah);
