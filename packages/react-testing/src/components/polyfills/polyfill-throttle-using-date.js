const throttledFn = function(fn, delay, options = {}) {
    let lastCalled = 0;
    let timeoutId = null;

    const { leading = false, trailing = true } = options;
    return function(...args) {

        if(lastCalled == 0 && !leading) lastCalled = Date.now();
        let diff = Date.now() - lastCalled;
        // leading call
        if(diff >= delay && leading) {
            // call the function
            console.log("Leading call");
            fn(...args);

            // set lastCalled to now
            lastCalled = Date.now();
        } 
        // Trailing
        else if(trailing && !timeoutId) {
            timeoutId = setTimeout(() => {
                console.log("Trailing call");
                fn(...args);
                clearTimeout(timeoutId);
                timeoutId = null;
            }, delay);
        }
    }
}

const fn = () => {
    console.log("hello");
}

const throttled = throttledFn(fn, 2000);

const handleScroll = () => {
    throttled();
}