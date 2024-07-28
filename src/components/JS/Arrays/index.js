// Exercise 1

const nums = [3, 5, 7, 9, 111, 15];

const numsGreaterThan5 = nums.filter(num => num >5);

const mappedNums = nums.map(num => ({ num }));

const reducedNums = nums.reduce((prev, curr) => {
    return prev + curr;
}, 0);
