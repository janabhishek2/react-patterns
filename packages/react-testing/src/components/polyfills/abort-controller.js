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

const controller = new AbortController();
const signal = controller.signal;

const pr = cancellablePromise(signal);

pr.then((res) => {
    console.log(res);
}).catch(err => {
    console.log("Err is: ", err);
}) 

controller.abort();