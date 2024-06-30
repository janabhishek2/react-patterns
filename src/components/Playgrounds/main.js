class Counter {
    constructor(startingNum = 0, increment = 1) {
        this.count = startingNum;
        this.increment = increment;
    }

    start() {
        // we need to bind setInterval to Counter instance; by default the callback is bound to window.
        setInterval(function() {
            console.log("Value is: ", this.count);
            this.count += this.increment;
        }.bind(this), 1000)
    }
};

const counter = new Counter();
counter.start();
