
const debouncedFunction = function(func, delay) {
    let timeout = null;
    return function() {
        timeout && clearTimeout(timeout);
        timeout = setTimeout(() => {
            func();
        }, delay);
    }
}


const greet = () => console.log("Hello");
const debouncedGreet = debouncedFunction(greet, 5000);

debouncedGreet();
debouncedGreet();
debouncedGreet();
debouncedGreet();