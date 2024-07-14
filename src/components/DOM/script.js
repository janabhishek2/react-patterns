const list = document.querySelector("ul");

const newLi = document.createElement("li");
newLi.textContent = "Item 5";

list.prepend(newLi);
