// Timers...

const h1 = document.getElementById("timer");
let secondsRemaining = 10;
h1.textContent = secondsRemaining;

setInterval(function() {
    if(secondsRemaining) {
        secondsRemaining -= 1;
    }
    h1.textContent = secondsRemaining;
}, 1000);

