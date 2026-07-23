// The commented block below is the original reference implementation kept for
// study — it shows a cancellable promise driven by an AbortController signal.
// function cancelablePromise(signal) {
//   return new Promise((resolve, reject) => {
//     // Handle already-aborted signal
//     if (signal.aborted) {
//       return reject(signal.reason);
//     }

//     const timeoutId = setTimeout(() => {
//       resolve("Operation completed");
//     }, 5000);

//     const onAbort = () => {
//       clearTimeout(timeoutId)
//       reject("Aborted");
//     };

//     signal.addEventListener("abort", onAbort, { once: true });
//   });
// }

// const controller = new AbortController();
// const signal = controller.signal;

// const p = cancelablePromise(signal);
// p.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log("Error is", err);
// })

// controller.abort();

/**
 * cancellablePromise(signal)
 * Wraps a long-running async task (here, a 3s timer) in a promise that can be
 * cancelled through an AbortSignal.
 *
 *  - If the signal is ALREADY aborted when we start, reject immediately with
 *    the abort reason (no point starting the work).
 *  - Otherwise start a 3s timer that resolves with `true` on completion.
 *  - We also subscribe to the signal's "abort" event: if it fires before the
 *    timer completes, we clear the pending timeout and reject instead —
 *    this is what makes the operation cancellable.
 */
function cancellablePromise(signal) {
    return new Promise((resolve, reject) => {
        if(signal.aborted) return reject(signal.reason);

        const timeoutId = setTimeout(() => {
            return resolve(true);
        }, 3000);
        signal.addEventListener("abort", () => {
            clearTimeout(timeoutId);
            reject("This has been aborted!");
        });
    })
}

// AbortController produces a `signal` we can pass around and an `.abort()`
// method that flips that signal to the aborted state.
const controller = new AbortController();
const signal = controller.signal;

const pr = cancellablePromise(signal);

pr.then((res) => {
    console.log(res);
}).catch(err => {
    console.log("Err is: ", err);
})

// Called synchronously right after — so the abort fires before the 3s timer,
// and the promise rejects with "This has been aborted!".
controller.abort();
