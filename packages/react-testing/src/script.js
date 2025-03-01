const arr = [1, 2, 3, [4, 5], [6, [7,8]]];

function flattenedArray(arr) {
  return arr.reduce((acc, curr) => {
    if(Array.isArray(curr)) {
      return acc.concat(flattenedArray(curr));
    } else {
      return acc.concat(curr);
    }
  }, []);
};

const flat = flattenedArray(arr);
console.log(flat);