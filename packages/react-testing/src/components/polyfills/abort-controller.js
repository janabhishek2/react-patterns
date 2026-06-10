let timeoutId = null;
const controller = new AbortController();
const signal = controller.signal;

const startTimeout = () => {
    timeoutId = setTimeout(() => {
        console.log("Timeout started!!");
    }, 3000);
}

signal.addEventListener("abort", () => {
    cancelTimeout();
    console.log("Aborted");
})

const cancelTimeout = () => {
    clearTimeout(timeoutId);
}

startTimeout();

setTimeout(() => {
    controller.abort();
}, 1000);