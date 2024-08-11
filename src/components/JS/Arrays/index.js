// immutablity

const object = {
    name: 'ABhishek',
    age: 25,
    newObj: {
        test: '3'
    }
};

// Object.freeze will only freeze properties at level1 of the object. Inside objects can still be changed.
Object.freeze(object);

// will not change
object.age = "rami";

// will change
object.newObj.test = 44;

console.log(object);
