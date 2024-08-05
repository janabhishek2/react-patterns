// Closures and event listeners

const buttonElement = document.querySelector("button");

// add event listener

buttonElement.addEventListener("click", (() => {
    let count = 0;
    // below function has access to count variable hence we don't need to define and keep it outside.
    return function() {
        buttonElement.textContent = `Clicked the button ${++count} times`;
    }
})());