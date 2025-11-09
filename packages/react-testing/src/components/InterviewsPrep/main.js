const btn = document.querySelector("button");

function test() {
   console.log("jo")
}

btn.addEventListener("click", test);

btn.removeEventListener("click", test);

