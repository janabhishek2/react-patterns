class Circle {
    // private class fields begin with #
    #radius = 3;

    constructor(radius) {
        this.#radius = radius;
    }

}

const circle = new Circle(3);
console.log(circle);