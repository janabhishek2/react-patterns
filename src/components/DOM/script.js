const list = document.querySelector("ul");

const listItems = list.children; // htmlCollection --> dynamic (old)
const listItems1 = list.querySelectorAll("li"); // nodelist --> static (new method)

const newLi = document.createElement("li");
newLi.textContent = "New lI";

list.append(newLi);

// all getXByY methods return live node-lists : htmlCollection
// querySelectorAll returns static node lists -> NodeList[];
