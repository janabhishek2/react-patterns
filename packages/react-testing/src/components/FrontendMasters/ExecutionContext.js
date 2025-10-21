const box = document.querySelector(".box");

const resizeCallback = (entries) => {
    const boxElement = entries[0];
    const isSmall = boxElement.contentRect.width < 800;
    boxElement.target.style.backgroundColor = isSmall ? "blue" : "red";
}
const resizeObserver = new ResizeObserver(resizeCallback);

resizeObserver.observe(box);

