let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// creates new array does not modify existing arr
const newArr = arr1.concat(arr2);

// new array is created in this case
const newArr1 = [...arr1, ...arr2];

// arr1 is modified
// arr1.push(...arr2);