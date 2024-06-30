class Counter {
    constructor(initCount, buttonElement) {
        this.count = initCount;
        this.btnElement = buttonElement;
        this.btnElement.addEventListener("click", this.incrementCount.bind(this));
    }

    incrementCount() {
        console.log(this.count);
        this.count = this.count + 1;
    }
};

const btnElement = document.querySelector("#clickMe");

const counter = new Counter(0, btnElement);
