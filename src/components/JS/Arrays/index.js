function createCounter() {
    let count = 0;
    function increment() {
        return ++count;
    }
    function decrement() {
        return --count;
    }
    function getCount() {
        return count;
    }
    return {
        increment, decrement, getCount
    };
}

const counter = createCounter();
const increment = counter.increment;
const getCount = counter.getCount;

increment(); // increments count to 1
increment(); // increments count to 2

console.log(getCount()); // print the count
