const list = document.querySelector("ul");

const newLi = document.createElement("li");
newLi.textContent = "Item 5";

const lastLi = list.lastElementChild;
console.log(lastLi);

lastLi.before(newLi);
