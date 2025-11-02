function ClassA() {
    this.show = function() {
        console.log("Class A");
    }
    this.parentResult = 10
};

function ClassB() {
    ClassA.call(this);
    this.show = function() {
        const parentPrototype = Object.getPrototypeOf(this);
        console.log(parentObject.parentResult);
    }
}

ClassB.prototype = Object.create(ClassA.prototype);
ClassB.prototype.constructor = ClassB;

const objB = new ClassB();

objB.show();

