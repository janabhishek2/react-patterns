const firstLi = document.querySelector("li");

// parent node and parent element are always same because only parent elements can have child elements.
const parentNode = firstLi.parentNode;

parentNode.setAttribute("data-t", "x");

// Ancestors of a node

const bodyAncestor = firstLi.closest("body");
bodyAncestor.style.backgroundColor = 'grey';
