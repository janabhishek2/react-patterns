const button = document.querySelector("button");
const section = document.querySelector("section");

const div = document.querySelector("div");

// all children of div are re-rendered.
div.innerHTML += "<p>Hello world</p>";
