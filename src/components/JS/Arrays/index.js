// Timers...

const queryApi = (value) => {
    console.log("Making an api request...", value);
};

const searchInput = document.querySelector("#search");

// debounced search

let timeoutId = null;

searchInput.addEventListener("input", (e) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        queryApi(e.target.value);
    }, 1000);
});
