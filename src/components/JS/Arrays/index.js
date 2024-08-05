// Using IIFE to create a counter instance

const counterInstance = (function counter() {
    // counter is a private variable when we invoke counter() function we only get access to
    // increment, decrement and getCounter
    let counter = 0;
    function increment() {
        ++counter;
    }
    function decrement() {
        return --counter;
    }
    function getCounter() {
        return counter;
    }
    return {
        increment, decrement, getCounter
    }
})();

counterInstance.increment();
counterInstance.increment();
console.log(counterInstance.getCounter());