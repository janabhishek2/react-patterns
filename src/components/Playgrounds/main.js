class Circle {
    static allowedColors = new Set(["red", "green", "blue"]);
    constructor(radius, color) {
        this._radius = radius;
        this.setColor(color);
    }

    get radius() {
        return this._radius;
    }

    setColor(color) {
        if(Circle.allowedColors.has(color)) {
            this._color = color;
        } else {
            throw new Error("Color not allowed");
        }
    }

    get color() {
        return this._color;
    }

    set radius(rad) {
        if(rad < 0) {
            throw new Error('radius can not be less than 0');
        } else {
            this._radius = rad;
        }
    }

    set color(col) {
       this.setColor(col);
    }
}
