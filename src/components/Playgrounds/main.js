class Cat {
    constructor(name) {
        this.catName = name;
    }

    sleep() {
        console.log(this);
    }
}

const object = {
    name: "ABcd",
    func: function() {
        console.log(this.name);
    }
}

const classFn = (new Cat("Fluffy")).sleep;
const objectFn = object.func;

classFn(); // Here this refers to undefined
objectFn(); // this refers to window/global object.
