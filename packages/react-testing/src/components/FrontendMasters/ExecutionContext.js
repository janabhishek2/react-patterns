
function debounce(callback, delay) {
    let id = null;
    return function(...args) {
        if(id) {
            clearTimeout(id);
        }
        id = setTimeout(() => {
            callback(...args);
        }, delay)
    }
}

const apiCallFn = (value) => {
    console.log("Api is called with", value);
}

const debouncedApiCall = debounce(apiCallFn, 2000);

const handleChange = (e) => {
    const inputElement = document.getElementById("fname");
    debouncedApiCall(inputElement.value);
}
