class Counter {
    #count;
    constructor() {
        this.#count = 0;
    }
    increment() {
        ++this.#count;
    }
    decrement() {
        --this.#count;
    }
    get count() {
        return this.#count;
    }
}

const counter = new Counter();
counter.increment();
console.log(counter.count);