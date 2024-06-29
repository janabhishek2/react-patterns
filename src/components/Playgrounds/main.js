class Circle {
    // private class fields begin with #
    #radius = 3;

    constructor(radius) {
        this.#radius = radius;
    }

    get radius(){
        return this.#radius;
    }

}

const circle = new Circle(3);
console.log(circle.radius);