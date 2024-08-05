// Closures and factory functions

function Counter() {
    this.counter = 0;
    this.increment = function(){
        ++this.counter;
    }
    function decrement() {
        --this.counter;
    }
    function getCounter() {
        return this.counter;
    }
    this.decrement = decrement;
    this.getCounter = getCounter;
}

const counter = new Counter();
counter.increment();
counter.decrement();
counter.decrement();
console.log(counter.counter);