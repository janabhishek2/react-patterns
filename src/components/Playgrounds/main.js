class Cat {
    // public class fields
    static numCats = 0;
    numLegs = 4;
    constructor(name) {
        this.name = name;
        Cat.numCats++;
        console.log()
    }
}

const cat = new Cat("blue");
