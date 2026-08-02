const unflattened = [1, 2, [3, 4, [5, 6, [7,8]]]];

/**
 * flattenArray(arr, depth = 100) — a polyfill of Array.prototype.flat().
 *
 * Recursively flattens nested arrays up to `depth` levels deep.
 *
 * Base cases:
 *   - an empty array returns []
 *   - a non-array value is returned as-is (defensive guard)
 *
 * Recursive step: for each item, if it's an array AND we still have depth
 * budget, flatten it one level down (depth - 1) and spread the result into the
 * accumulator; otherwise push the item unchanged. Decrementing depth is what
 * stops the recursion at the requested level.
 */
function flattenArray(arr, depth = 100) {
    const isArray = Array.isArray(arr);
    const flattened = [];
    if(isArray && arr.length == 0) return [];

    if(!isArray) return arr;

    arr.forEach((item) => {
        if(Array.isArray(item) && depth > 0) {
            const flattenedTemp = flattenArray(item, depth-1);
            flattened.push(...flattenedTemp);
        } else {
            flattened.push(item);
        }
    });

    return flattened;
}

// Expose it on the prototype so it can be called as arr.flattenArray().
Array.prototype.flattenArray = flattenArray;

// depth = 1 → only one level is flattened: [1, 2, 3, 4, [5, 6, [7, 8]]]
const flattened = flattenArray(unflattened, 1);

console.log(flattened);

// Trick to convert unflattened array to flattened.
// const flat1 = unflattened.toString();
// console.log(flat1.split(",").map(Number));
