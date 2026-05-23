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

const myClearInterval = (id) => {
    window.myIntervals = window.myIntervals.filter((interval) => interval.id !== id);
};

const randomFn = () => {
    console.log("Hello there");
};

// mySetInterval(randomFn, 1000);