const list = document.querySelector("ul");

const newLi = document.createElement("li");
newLi.textContent = "New Li";

// replace firstChild Element with newLi

const firstChild = list.firstElementChild;

// deletes the first elementChild and inserts newLi in its place.
firstChild.replaceWith(newLi);

// true is passed to deep clone the children of the parent node; default is false to make shallow copy
const newLi2 = newLi.cloneNode(true);

// moves the newLi to last and appends newLi2 to it.
list.append(newLi, newLi2);
