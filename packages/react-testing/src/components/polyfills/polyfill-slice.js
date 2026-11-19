const arr = [1, 2, 3, 4];

// slice(start, end)
// start not avalilable, end not available
// start available, end not available

// Index not available: sparse array

/**
 * mySlice(startIndex, endIndex) — a polyfill of Array.prototype.slice().
 *
 * Returns a shallow copy of a portion of the array from `start` up to (but not
 * including) `end`, without mutating the original.
 *
 * Argument handling:
 *   - No args → returns the whole array.
 *   - Missing end → defaults to the array length; end past the length is
 *     clamped to the length.
 *   - Negative start/end → treated as offsets from the end (the while loops
 *     add the length until the index becomes non-negative).
 *
 * Object.hasOwn(this, k) skips holes so sparse arrays stay sparse-safe.
 *
 * CAVEAT: the guard `if(!startIndex && !endIndex)` treats a real 0 argument as
 * "not provided", and `start = startIndex % arrLength` behaves oddly for
 * positive starts. It's a teaching implementation, not spec-exact.
 */
Array.prototype.mySlice = function(startIndex, endIndex) {
    const arr = Array.from(this);
    if(!Array.isArray(arr)) throw new Error("Not an array!");

    if(!startIndex && !endIndex) return this;

    const arrLength = this.length;

    let start = startIndex % arrLength;
    let end = !endIndex ? arrLength : ( endIndex > arrLength ? arrLength : endIndex);

    // start is negative
    if(start < 0) {
        while(start < 0) {
            start+=this.length;
        }
    }

    if(end < 0) {
        while(end < 0) {
            end += this.length;
        }
    }
    console.log(end);

    let k = start;
    const newArray = [];

    while(k < end) {
        if(Object.hasOwn(this, k)) {
            newArray.push(this[k]);
        }
        k++;
    }

    return newArray;
};

// end = -1 → normalised to length-1 (3), so this copies indices 0..2 → [1,2,3].
const sliced = arr.mySlice(0, -1);
