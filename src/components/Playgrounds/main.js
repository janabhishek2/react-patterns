class Cat {
    constructor(firstName) {
        this.firstName = firstName;
    }

    dance(type = "tango") {
        console.log(`THis is ${this.firstName} and I like to dance... ${type}`);
    }
}

const cat = new Cat("fluffy");

const kitty = new Cat("Kitty");

const dance = cat.dance;
dance.call(kitty, "rfc");

