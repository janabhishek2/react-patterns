// Throttling

const handleScroll1 = (e) => {
    console.log("Scroll is called");
}

const throttledFunction = (callback, interval, options = {}) => {
    let updatedDate = 0;
    let timeoutId = null;
    const { leading = true, trailing = true } = options;
    return () => {
        // First invocation
        if(!leading && updatedDate == 0) {
            updatedDate = Date.now();
        }
        const difference = Date.now() - updatedDate;
        if(difference >= interval) {
            callback();
            updatedDate = Date.now();
        } else if(trailing && !timeoutId) {
            timeoutId = setTimeout(() => {
                callback();
                timeoutId = null;
            }, interval);
        }
    }
}

const handleScroll = throttledFunction(handleScroll1, 1000);
