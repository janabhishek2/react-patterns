// memoisation

const input = 12;

const getValue = () => {
    // use variables of outer function to act like cache
    let cache = {};
    return function(input) {
       if(input in cache) {
        return cache[input];
       }
       else {
        return cache[input] = input + 10;
       }
    }
};

const computeValue = getValue();
console.log(computeValue(30));
console.log(computeValue(30));
console.log(computeValue(40));
console.log(computeValue(50));