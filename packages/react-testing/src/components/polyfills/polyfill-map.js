// const arr = [1, 2, 3];

// const newArr = arr.map((item) => item * 2);

// console.log(newArr);

// Method1

/**
 * customMap(cb) — the simplest possible Array.prototype.map() polyfill.
 *
 * Iterates with the built-in forEach, applies `cb` to each element, and
 * collects the results into a new array (the original is untouched).
 *
 * Unlike the index-based versions in the sibling files, this relies on
 * forEach, so it naturally skips holes but does not preserve their positions.
 */
const customMap = function(cb){
    const newArr = [];
    this.forEach((item) => {
        const output = cb(item);
        newArr.push(output);
    })
    return newArr;
}

Array.prototype.customMap = customMap;

const arr = [1, 2, 3];
const func = (item) => item * 109;

const ans = arr.customMap(func);

console.log(ans);
