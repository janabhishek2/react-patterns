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

const clearMyTimeout = function(timeoutId) {
    const newTimeouts = window.timeouts.filter((item) => item?.id !== timeoutId);

    window.timeouts = newTimeouts;
}

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

const id = mySetTimeout(function(){
    console.log("Hi");
}, 1000);

console.log(window.timeouts);
setTimeout(() => {
    console.log(window.timeouts);
}, 5000);