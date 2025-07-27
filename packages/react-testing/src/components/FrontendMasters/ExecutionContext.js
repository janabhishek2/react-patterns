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

// Browsers take 16ms to update the DOM after the code is run.
// 60 frames are shown in 1000sec, 1 frame is shown in 1000/60 = 16ms.

// if a function takes more than 12-14ms, then it is considered slow.