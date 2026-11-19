// Web Worker script — runs on a background thread, separate from the main UI
// thread. `self` is the worker's global scope.
//
// onmessage fires whenever the main thread calls worker.postMessage(...).
// Here we do a deliberately heavy CPU loop (17^8 ≈ 6.9 billion iterations) to
// simulate expensive work. Running it in the worker keeps the main thread — and
// therefore the page's UI — responsive during the computation.
//
// When done, postMessage(k) sends the result back to the main thread's
// worker.onmessage handler (see workers-practical.js).
self.onmessage = (message) => {

    let k = 0 ;
    for(let i = 0; i < Math.pow(17, 8); i++) k++;
    postMessage(k);
}
