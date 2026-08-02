// const arr = [1, 2, 3];
// Predicate used for the demo: keep only even numbers.
const filterFn = function(num) {
    return num % 2 == 0;
};

// const filtered = arr.filter(filterFn);

// console.log(filtered);


/**
 * myFilter(callbackFn) — a polyfill of Array.prototype.filter().
 *
 * Walks the array by index and builds a new array containing only the elements
 * for which `callbackFn` returns a truthy value. The original array is not
 * mutated.
 *
 * The Object.hasOwn(this, k) check is what makes it SPARSE-array safe: holes
 * (missing indices, e.g. the gaps in [1, , 4]) are skipped rather than passed
 * to the callback — matching native filter's behaviour.
 */
const myFilter = function(callbackFn) {
    const newArr = [];
    let k = 0;
    while(k < this.length) {
        if(Object.hasOwn(this, k)) {
            const shouldBePushed = callbackFn(this[k])
            if(shouldBePushed) {
                newArr.push(this[k]);
            }
        }
        k++;
    }
    return newArr;
}

Array.prototype.myFilter = myFilter;

// Deliberately sparse array (holes at indices 3, 5, 6) to exercise the
// hole-skipping logic above. Result: [2, 4].
const arr = [1, 2, 3, , 4, , , 5];

const filtered = arr.myFilter(filterFn);

console.log(filtered);
