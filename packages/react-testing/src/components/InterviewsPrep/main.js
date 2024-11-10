// remove all duplicates from arr

const arr = [1,3,1,1,1,1,2];

const newArr = [...new Set(arr)];

console.log(newArr);
