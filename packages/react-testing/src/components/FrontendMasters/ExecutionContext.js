// Set-timeout: used to schedule a callback, that gets added to task queue after specified time,
// Gets executed once call stack is empty.

// JS code always runs to completion before any DOM manipulation is done.
function demo() {
    const boxR = document.getElementsByClassName("box-r")[0];

    boxR.addEventListener('click', function(e) {
        requestAnimationFrame(() => {
            this.style.backgroundColor = "aqua";
        })
        this.style.backgroundColor = "purple";
    })
    // boxR.style.backgroundColor = "purple";
}

// RAF --> CSS calculation --> Layout --> Paint.

demo();