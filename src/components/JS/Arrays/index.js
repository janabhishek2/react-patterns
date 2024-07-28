// Exercise 1

const nums = [3, -5, 7, 9, 111, 15];

const numsGreaterThan5 = nums.filter(num => num >5);

const mappedNums = nums.map(num => ({ num }));

const reducedNums = nums.reduce((prev, curr) => {
    return prev + curr;
}, 0);

// Assignment 2

const findMax = (...args) => {
    let max = args[0];
    let min = args[0];
    for(let item of args) {
        if(item > max) {
            max = item;
        }
        if(item < min) {
            min = item;
        }
    }
    return [min, max];
}

// assignment 3
const [min, max] = findMax(...nums);

console.log(min, max);

// assignment4

const list = new Set();
list.add(3);
list.add(3);

for(let item of list) {
    console.log(item);
}