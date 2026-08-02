const x = [1, 2, 3, 4];

/**
 * transformFn(item, index, arr) — sample callback squaring each item.
 * It logs `this` to show what the map polyfill binds the callback's `this` to
 * (here `null` is passed as thisArg below).
 */
const transformFn = (item, index, arr) => {
    console.log(this);
    return item * item;
}

/**
 * myMap(arr, callbackFn, thisArg) — a standalone (non-prototype) map polyfill.
 *
 * Takes the array explicitly as the first argument rather than via `this`.
 * For every index it invokes callbackFn using .call(thisArg, ...) so the
 * callback receives the standard (element, index, array) trio AND the caller
 * can control the callback's `this` binding through `thisArg`.
 */
function myMap(arr, callbackFn, thisArg) {
    let finalArr = [];

    for(let i=0; i<arr.length; i++) {
        const item = arr[i];
        const value = callbackFn.call(thisArg, item, i, arr);
        finalArr.push(value);
    }

    return finalArr;
}

// Array-like object (length + numeric keys) to show myMap isn't limited to
// real arrays.
const arrSupreme = {
    length: 2,
    0: 10,
    1: 20
};

const ans = myMap(arrSupreme, transformFn, null);

// Unrelated demo of Array.from with a mapper: builds [0,1,2,...,9].
console.log(Array.from({length: 10}, (_,i) => i ));
