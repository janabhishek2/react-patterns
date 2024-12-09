
const debouncedFunction = function(func, delay) {
    let timeout = null;
    return function(...args) {
        timeout && clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    }
}

const handleApiCall = (value) => {
    console.log(`api call for:`, value);
}
const debouncedApiCall = debouncedFunction(handleApiCall, 2000);

const handleChange = () => {
   const element = document.getElementById("name");
   debouncedApiCall(element.value);
}
