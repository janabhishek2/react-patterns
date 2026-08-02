// Demonstrates how the browser's paint pipeline vs. requestAnimationFrame
// interact — an event-loop timing exercise.
const box = document.getElementById("box");

// Synchronous style changes: the first (red) is immediately overwritten by the
// last (blue) within the same task, so the browser never paints red.
box.style.backgroundColor = "red";

// requestAnimationFrame runs its callback just BEFORE the next repaint, i.e.
// after the current synchronous task finishes. So even though this line is
// written before the "blue" assignment, its "black" runs later.
requestAnimationFrame(() => {
    box.style.backgroundColor = "black";
})

// Runs synchronously now → box is blue when the task ends. Then the rAF
// callback fires before paint and sets it to black, which is what renders.
box.style.backgroundColor = "blue";
