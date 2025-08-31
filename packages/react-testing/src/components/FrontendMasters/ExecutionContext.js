// Throttling

const handleScroll1 = (e) => {
    console.log("Scroll is called");
}

const throttledFunction = (callback, interval) => {
    let timeoutId = false;
    return () => {
        if(!timeoutId) {
            timeoutId = setTimeout(() => {
                callback();
                timeoutId = null;
            }, interval);
        }
    }
}

const handleScroll = throttledFunction(handleScroll1, 1000);
