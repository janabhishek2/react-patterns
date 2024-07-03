const ul = document.querySelector("ul");

// Get access to header element.

const headerElement = ul.previousElementSibling;

console.log(headerElement.textContent); // <h1>textContnet</h1>

// Get access to input field next sibling to ul.

const input = ul.nextElementSibling;

console.log(input.value);
