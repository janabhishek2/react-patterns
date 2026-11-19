// Grab the search input the debounced handler will listen to.
const input = document.getElementById("searchIp");

/**
 * debouncedFn(fn, interval = 3000) — a debounce higher-order function.
 *
 * Debouncing delays running `fn` until the user has stopped triggering the
 * event for `interval` ms. Every call clears the previously scheduled timeout
 * and schedules a fresh one, so rapid-fire events (e.g. keystrokes) collapse
 * into a single call after the pause.
 *
 * `timeoutId` lives in the closure so it persists across calls of the
 * returned function. `...args` are forwarded so the original event object
 * reaches `fn`.
 */
function debouncedFn(fn, interval = 3000) {
    let timeoutId = null;

    return function(...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            fn.call({}, ...args)
        }, interval);
    }
}

let search = "";

// The actual work we want to debounce: reading the input's current value.
function handleSearch (inp) {
    console.log("Searchin", inp.target.value);
}

// Wrap handleSearch so it only fires once typing pauses for the interval.
const debouncedSearch = debouncedFn(handleSearch);

input.addEventListener("input", debouncedSearch)
