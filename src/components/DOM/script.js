const list = document.querySelector("ul");

const secondLi = list.children[1];

const newElement = document.createElement("li");
newElement.textContent = "newly created item";

// Use this method in place of after: for better browser support
secondLi.insertAdjacentElement("afterend", newElement);
