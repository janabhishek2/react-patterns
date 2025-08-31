// Throttling

const handleScroll1 = (e) => {
    console.log("Scroll is called");
}

const throttledFunction = (callback, interval) => {
    let updatedDate = new Date();
    return () => {
        const difference = Date.now() - updatedDate.getTime();
        if(difference >= interval) {
            callback();
            updatedDate = new Date();
        }
    }
}

const handleScroll = throttledFunction(handleScroll1, 1000);
