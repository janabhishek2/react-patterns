class Circle {
    // private class fields begin with #

    // class field means declaring all variables that will be used in the class before-hand.
    // for private fields and public fields, we declare class fields.
    // for private methods we do not need class fields.

    #radius = 3;

    // declare a private method starting with pound sign. (#)
    #getDiameter() {
        return this.#radius * 2;
    }

    constructor(radius) {
        this.#radius = radius;
    }

    get radius(){
        return this.#radius;
    }

    get diameter() {
        // using private method inside a function of class.
        return this.#getDiameter();
    }

}

const circle = new Circle(3);
console.log(circle.diameter);
