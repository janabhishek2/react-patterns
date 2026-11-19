// Main-thread side of the Web Worker demo. Pairs with worker.js.
// Spawns the background worker that will run the heavy computation.
const worker = new Worker("worker.js");

// Two buttons: one triggers the expensive computation, the other toggles a
// colour class. The point of the demo: even while the worker crunches numbers,
// the colour-toggle button stays responsive because the work is off the main
// thread.
const computeSumBtn = document.getElementById("computeSum");
const toggleButtonColorChange = document.getElementById("changeColor");

toggleButtonColorChange.addEventListener("click", handleColorChange);
computeSumBtn.addEventListener("click", handleComputeSum);

/**
 * handleColorChange() — toggles a CSS class on <body>. Purely a UI action used
 * to prove the main thread isn't blocked while the worker runs.
 */
function handleColorChange() {
    const body = document.body;
    body.classList.toggle("green");
}

/**
 * handleComputeSum() — hands the heavy work off to the worker by posting it a
 * message. Returns immediately; the result arrives asynchronously below.
 */
function handleComputeSum() {
    worker.postMessage("Hello Worker!!");
}

/**
 * worker.onmessage — receives the computed result from worker.js and renders
 * it into a new <div> appended to the page.
 */
worker.onmessage = (message) => {
    let div = document.createElement("div");
    div.innerText = `Computed ${message.data}`;

    document.body.appendChild(div);
}
