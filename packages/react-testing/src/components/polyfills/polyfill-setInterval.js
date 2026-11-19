/**
 * mySetInterval(callbackFn, interval, ...args) — a polyfill of setInterval
 * built on top of requestIdleCallback instead of the native timer.
 *
 * It assigns each interval a monotonically increasing id (stored on
 * window.myIntervalId), records a descriptor { id, exec, timeToRun, interval,
 * args }, registers it, and kicks off the polling loop via runCallback.
 *
 * NOTE: there are typos in the registry bookkeeping — it writes to
 * `window.myIntevals` (misspelt) on first use but reads `window.myIntervals`
 * elsewhere, so registration/clearing are inconsistent. Left as-is; flagged
 * for awareness.
 */
const mySetInterval = function(callbackFn, interval, ...args) {
    let intervalId = window.myIntervalId;
    if(!intervalId) {
        intervalId = window.myIntervalId = 0;
    } else {
        intervalId = ++window.myIntervalId;
    }

    const newInterval = {
        id: intervalId,
        exec: callbackFn,
        timeToRun: interval + Date.now(),
        interval,
        args
    }

    if(!window?.myIntervals) {
        window.myIntevals = [newInterval]
    } else {
        window.myIntervals.push(newInterval);
    }

    runCallback(newInterval);
}

// 1000ms
// 10:00 -> 10:01
/**
 * runCallback(data) — the recurring driver for one interval.
 *
 * On each tick it checks whether the due time (timeToRun) has passed; if so it
 * runs the callback and schedules the next due time one `interval` later. It
 * then re-queues itself with requestIdleCallback, which runs the check during
 * the browser's idle periods — approximating a repeating timer.
 *
 * NOTE: because timeToRun is a local copy, the recomputed value must be passed
 * forward on each recursion (as done here) for the interval to advance.
 */
function runCallback(data) {
    let { exec, interval, args, timeToRun } = data;
    if(Date.now() >= timeToRun) {
        exec(...args);
        timeToRun = Date.now() + interval;
    }
    requestIdleCallback(() => {
            runCallback({
                exec,
                timeToRun,
                args,
                interval
            })
    })
}

/**
 * myClearInterval(id) — cancels an interval by removing its descriptor from
 * the registry so runCallback stops finding/executing it.
 */
const myClearInterval = (id) => {
    window.myIntervals = window.myIntervals.filter((interval) => interval.id !== id);
};

const randomFn = () => {
    console.log("Hello there");
};

const randomFn2 = (name) => {
    console.log("Bye there")
}

// mySetInterval(randomFn, 1000);
