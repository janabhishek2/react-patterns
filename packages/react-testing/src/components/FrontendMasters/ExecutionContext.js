
function debounce(callback, delay) {
    let id = null;
    return function(...args) {
        let self = this;
        if(id) {
            clearTimeout(id);
        }
        id = setTimeout(() => {
            callback.apply(self, args);
        }, delay)
    }
}

const apiCallFn = (value) => {
    console.log("Api is called with", value);
}

const o = {
    a: 1,
    debouncedApiCall: debounce(apiCallFn, 2000)
}

const handleChange = (e) => {
    const inputElement = document.getElementById("fname");
    o.debouncedApiCall(inputElement.value);
}
