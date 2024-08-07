// Timers...

const queryApi = (value) => {
    console.log("Making an api request...", value);
};

const searchInput = document.querySelector("#search");

// debounced search

function debounce(callback, delay) {
    let timeoutId;
    return function(input) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => { 
            callback(input);
        }, delay);
    }
}

const getDebounceQueryApi = debounce(queryApi, 1000);

searchInput.addEventListener("input", (e) => {
    getDebounceQueryApi(e.target.value);
});
