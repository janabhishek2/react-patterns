// memoisation

const input = 12;

const getValue = () => {
    let cache = null;
    return function(input) {
        // if it is in cache then return computed value;
        if(cache) {
            return cache;
        }
        // else set cache and return input+10
        cache = input + 10;
        return cache;
    }
};

const computeValue = getValue();
console.log(computeValue(80));
console.log(computeValue(30));
console.log(computeValue(40));
console.log(computeValue(50));