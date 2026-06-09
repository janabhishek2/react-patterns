const input = document.getElementById("searchIp");

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

function handleSearch (inp) {
    console.log("Searchin", inp.target.value);
}

const debouncedSearch = debouncedFn(handleSearch);

input.addEventListener("input", debouncedSearch)

