function createButtonEventListener(id) {
    let button = document.getElementById(id);

    let count = 0;
    button.addEventListener("click", function() {
        button.textContent = `You clicked ${++count} times!`;
    });
    return;
}

createButtonEventListener("btn1");
createButtonEventListener("btn2");
createButtonEventListener("btn3");
