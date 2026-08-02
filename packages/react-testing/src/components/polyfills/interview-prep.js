/**
 * myRace(promises) — a polyfill of Promise.race().
 *
 * Returns a new promise that settles as soon as the FIRST input promise
 * settles: it resolves with that promise's value, or rejects with its error.
 *
 * How it works: we loop over every promise and await each in its own async
 * callback. The first one to finish calls resolve()/reject(); because a
 * promise can only settle once, all later settle calls are no-ops.
 *
 * NOTE: the `resolved` flag and `finally` block here don't actually gate
 * anything (they run per-iteration and `return` inside forEach is ignored),
 * but they're harmless — the real "first wins" behaviour comes from the
 * one-time settling of the outer promise.
 */
const myRace = function (promises) {
    let resolved = null;
    return new Promise((resolve, reject) => {
        promises.forEach(async (promise) => {
            if(resolved) return resolved;
            try {
                const res = await promise;
                resolve(res);
            } catch (err) {
                reject(err);
            } finally {
                resolved = this;
            }
        });
    });
};

// p1 resolves after 3s, p2 after 1s — so the race resolves with 2 (p2 wins).
const p1 = new Promise((resolve, _) => {
    setTimeout(() => {
        resolve(1);
    }, 3000);
});

const p2 = new Promise((resolve, _) => {
    setTimeout(() => {
        resolve(2);
    }, 1000);
});

myRace([p1, p2]).then((res) => {
    console.log(res);
});
