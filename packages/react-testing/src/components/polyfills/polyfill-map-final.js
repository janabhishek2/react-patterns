/**
 * mapPolyfill(callbackFn) — a polyfill of Array.prototype.map().
 *
 * Returns a NEW array of the same length where each element is the result of
 * callbackFn(element). Written to be called with any array-like `this`
 * (see the .call() usage below).
 *
 * Key details:
 *   - `new Array(this.length)` pre-sizes the result so holes are preserved at
 *     their original indices.
 *   - Object.hasOwn(this, k) skips holes, so sparse slots stay empty rather
 *     than being mapped — matching native map.
 */
const mapPolyfill = function(callbackFn) {
    const finalArr = new Array(this.length);
    let k = 0;
    while( k < this.length) {
        if(Object.hasOwn(this, k)){
            const value = callbackFn(this[k]);
            finalArr[k] = value;
        }
        k++;
    }
    return finalArr;
};

Array.prototype.myMap = mapPolyfill;

// An array-LIKE object (has length + indexed keys but isn't a real array).
// Only indices 0 and 1 exist; the other 18 slots are holes.
const arr = { length: 20, 0: 1, 1: 3};
const squared = function(num) {
    return num * num;
};

// Borrow myMap via .call so `this` inside it is the array-like object.
const squaredArray = Array.prototype.myMap.call(arr, squared);
console.log(squaredArray);
