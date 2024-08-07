// Timers...

const h1 = document.getElementById("timer");
let secondsRemaining = 3;
h1.textContent = secondsRemaining;

const intervalId = setInterval(function() {
    if(secondsRemaining > 0) {
        h1.textContent = secondsRemaining;
        secondsRemaining -= 1;
    } else {
        h1.textContent = "Time is UPP!";
        // inner function gets access to outer variable intervalid via closure
        clearInterval(intervalId);
    }
}, 1000);

