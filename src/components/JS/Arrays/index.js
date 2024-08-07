// Timers...

const queryApi = () => {
    console.log("Making an api request...");
};

const searchInput = document.querySelector("#search");

// live search
searchInput.addEventListener("input", queryApi);
