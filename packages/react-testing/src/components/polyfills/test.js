// Quick sanity check of native Promise chaining (baseline for the MyPromise
// polyfill in promises-polyfill.js).
//
// The promise resolves synchronously with 3. The first .then logs "Res1 3" and
// returns 1; because .then returns a new promise resolved with that return
// value, the second .then receives 1 and logs "res2 1". Both callbacks run as
// microtasks, after the surrounding synchronous code.
const p = new Promise((resolve, reject) => {
    resolve(3);
})

p.then((res) => {
    console.log("Res1", res);
    return 1;
}).then((res) => {
    console.log('res2', res);
})
