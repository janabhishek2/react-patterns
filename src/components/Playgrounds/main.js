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

// Call the dance method on instance of cat.
cat.dance();
// Value of this is: undefined

// Call th dance method on : undefined
fDance();