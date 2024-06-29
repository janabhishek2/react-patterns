class Cat {
    constructor(name) {
        this.name = name;
    }
    dance() {
        console.log(`I am ${this.name}  and I like to dance...`);
    }
};

const cat = new Cat("fluffy");

const fDance = cat.dance;

// Value of this is: undefined
fDance();