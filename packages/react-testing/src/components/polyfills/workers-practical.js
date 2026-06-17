const worker = new Worker("worker.js");

const computeSumBtn = document.getElementById("computeSum");
const toggleButtonColorChange = document.getElementById("changeColor");

toggleButtonColorChange.addEventListener("click", handleColorChange);
computeSumBtn.addEventListener("click", handleComputeSum);

function handleColorChange() {
    const body = document.body;
    body.classList.toggle("green");
}

function handleComputeSum() {
    worker.postMessage("Hello Worker!!");
}

worker.onmessage = (message) => {
    let div = document.createElement("div");
    div.innerText = `Computed ${message.data}`;

    document.body.appendChild(div);
}