// slice returns new copy of array

const arr = [1, 2, 3, 4];

// slice is used to copy arrays

const newArr = arr.slice();

// slice is used to get elements from start to end-1

const sliced = arr.slice(0, 2); // 0 and 1

// negative index

const sliced1 = arr.slice(-3, -1); // b > a

console.log(sliced1);
