const arr = [1, 2, 3, 4];

// currying

const predicate = (num) => num%2 === 0;
// function filter(predicate) {
//     return function(arr) {
//         return arr.filter(predicate);
//     }
// }

const customFilter = (predicate) => (arr) => arr.filter(predicate);

const customFilter1 = (arr) => (predicate) => arr.filter(predicate);

console.log(customFilter1(arr));