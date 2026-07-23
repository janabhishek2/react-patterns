const throttledFn = function(fn, interval) {
    let timeoutId = null;
    return function(...args) {
        if(timeoutId) return;

        timeoutId = setTimeout(() => {
            fn(...args);
            clearTimeout(timeoutId);
            timeoutId = null;
        }, interval);
    }
}

const fn = () => {
    console.log("hello");
}

const throttled = throttledFn(fn, 1000);

const handleScroll = () => {
    throttled();
}