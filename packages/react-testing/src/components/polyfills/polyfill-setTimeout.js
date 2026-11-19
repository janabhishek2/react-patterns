/**
 * mySetTimeout(callbackFn, interval, ...args) — a polyfill of setTimeout built
 * on requestIdleCallback rather than the native timer.
 *
 * Assigns an incrementing id (window.timeoutId), stores a descriptor
 * { id, exec, args, interval, timeToRun } in the window.timeouts registry,
 * starts the polling loop, and returns the id so it can be cleared later.
 */
const mySetTimeout = function(callbackFn, interval, ...args) {
    let timeoutId = window.timeoutId;
    if(!timeoutId) {
        timeoutId = window.timeoutId = 0;
    } else {
        timeoutId = ++window.timeoutId;
    }

    const newTimeout = {
        id: timeoutId,
        exec: callbackFn,
        args,
        interval,
        timeToRun: Date.now() + interval,
    }

    if(!window.timeouts) {
        window.timeouts = [];
    }

    window.timeouts.push(newTimeout);
    runCallbacks();

    return timeoutId;
}

/**
 * clearMyTimeout(timeoutId) — a polyfill of clearTimeout. Removes the matching
 * descriptor from the registry so its callback never fires.
 */
const clearMyTimeout = function(timeoutId) {
    const newTimeouts = window.timeouts.filter((item) => item?.id !== timeoutId);

    window.timeouts = newTimeouts;
}

/**
 * runCallbacks() — the polling driver.
 *
 * Scans every pending timeout: if its due time has passed, it runs the
 * callback once and removes it (one-shot, unlike setInterval). Otherwise it
 * re-schedules the scan via requestIdleCallback so the browser re-checks
 * during idle time until each timeout comes due.
 */
const runCallbacks = function() {
    const timeouts = window.timeouts;

    timeouts.forEach((timeout) => {
        const { exec, args, timeToRun, id } = timeout;
        if(Date.now() >= timeToRun) {
            exec(...args);
            clearMyTimeout(id);
        } else {
            requestIdleCallback(runCallbacks)
        }
    })
}

// Schedule a one-shot callback ~1s out and inspect the registry before/after.
const id = mySetTimeout(function(){
    console.log("Hi");
}, 1000);

console.log(window.timeouts);
setTimeout(() => {
    console.log(window.timeouts);
}, 5000);
