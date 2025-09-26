// Polyfill of set-timeout

// Use requestIdleCallback to mimic the functionality of setTimeout. It creates a low priority callback.
//  The callback will be run when main thread is empty.

window.timerId = 1231;
window.setTimeout = function(callback, delay, ...args) {
    const timerId = window.timerId++;
    const time = Date.now() + delay;
    window.timers = {
        ...window.timers,
        [timerId] : {
            callback,
            time,
            args: [...args]
        }
    }

    if(Object.keys(window.timers).length === 1) {
        requestIdleCallback(processTimers);
    }
}

function processTimers() {
    const executeTimer = function(timerId) {
        const { callback, time, args } = window.timers[timerId];
        if(Date.now() >= time) {
            callback(...args)
            delete window.timers[timerId];
        } else {
           requestIdleCallback(processTimers);
        }
    }
    Object.keys(window.timers).forEach(executeTimer);
};

window.clearTimeout = function(id) {
    delete window.timers?.[id];
}

window.setTimeout(function(name) {
    console.log(name);
}, 1000, "silver surfer");

window.setTimeout(function(name) {
    console.log(name);
}, 2000, "silver surfer 1");

window.setTimeout(function(name) {
    console.log(name);
}, 3000, "silver surfer 2");
