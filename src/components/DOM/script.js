const div = document.querySelector("div");

// all children of div are re-rendered.
let adjacentHtmlAfterbegin = "<p>Hello I am appended after begin</p>";
let adjacentHtmlBeforeEnd = "<p>Hello, I am appended before end</p>";

div.style.border = "1px solid black";
div.style.padding = "10px";

const button = document.querySelector("button");
button.textContent = "Insert after begin";

button.addEventListener("click", function(e) {
   console.log(e);
   div.insertAdjacentHTML("afterbegin", adjacentHtmlAfterbegin);
});
