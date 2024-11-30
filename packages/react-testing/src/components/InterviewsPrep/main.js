const arr = [1, 2, 3, 1, 1];

// use math.min to find min value

const min = Math.min(...arr);

const filteredArray = arr.filter(item => item === min);
console.log(filteredArray.length);
