// Useful prototype methods

// Object.create(obj1): used to create an object with prototype obj1

const person = {
    sing() {
        console.log(`${this.name} sings... zzZZZ`);
    }
};

const raman = Object.create(person);
raman.name = "Raman";

raman.sing();
