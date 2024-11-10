// remove all duplicates from arr

const arr = [1,3,1,1,1,1,2];

// Using includes and reduce

const newArr = arr.reduce((acc, element) => {
    // reduce returns acc at each iteration of array
   return acc.includes(element) ? acc : [...acc, element];
}, []);

console.log(newArr);
