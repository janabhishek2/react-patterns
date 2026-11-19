const arr = [1, 2, 3, 4];

// Reducer callback: sum the accumulator and the current element.
const reduceArr = (acc, curr) => {
    return acc + curr;
};

/**
 * myReduce(callbackFn, init) — a polyfill of Array.prototype.reduce().
 *
 * Folds the array into a single value by repeatedly calling
 * callbackFn(accumulator, currentElement).
 *
 * Initial-value handling (matching native reduce):
 *   - If `init` is provided, start from it and begin at index 0.
 *   - If `init` is omitted, use the first element as the seed and start at
 *     index 1 (so the first element isn't fed through the callback twice).
 *   - Reducing an empty array with no init throws — reproduced here.
 *
 * Object.hasOwn(this, k) skips holes in sparse arrays.
 *
 * CAVEAT: the check uses `init` truthiness (`init ? ...`), so a falsy seed such
 * as 0 or "" is treated as "no init". Native reduce checks argument presence
 * instead. It happens to work in this demo because the array's first element
 * is 1.
 */
Array.prototype.myReduce = function(callbackFn, init) {
    if(this.length === 0) throw new Error("Can not call on empty array! ");
    const initialValue = init || this[0];
    const startIndex = init ? 0 : 1;

    let reducedValue = initialValue;

    let k = startIndex;
    while(k < this.length) {
        if(Object.hasOwn(this, k)) {
            reducedValue = callbackFn(reducedValue, this[k]);
        }
        k++;
    }

    return reducedValue;
}

const result = arr.myReduce(reduceArr, 0);

console.log(result);
