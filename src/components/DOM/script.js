const list = document.querySelector("ul");

const newLi = document.createElement("li");
newLi.textContent = "acd";

const firstLi = list.firstElementChild;

firstLi.replaceWith(newLi);