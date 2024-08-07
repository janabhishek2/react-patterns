// Timers...

const button = document.querySelector("button");

const timeoutId = setTimeout(() => {
    window.location.href = "https://www.google.com";
}, 5000);

function preventRedirect() {
    console.log("Redirection cancelled !!");
    clearTimeout(timeoutId);
}

button.addEventListener("click", preventRedirect);

// original link
// http://127.0.0.1:5500/src/components/JS/Arrays/index.html
