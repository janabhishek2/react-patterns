const box = document.getElementById("box");

box.style.backgroundColor = "red";



requestAnimationFrame(() => {
    box.style.backgroundColor = "black";
})

box.style.backgroundColor = "blue";