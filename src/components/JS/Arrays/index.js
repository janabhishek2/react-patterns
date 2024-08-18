// Localstorage

// Everything in localstorage are treated as strings
// To store objects/array convert them to string using JSON.stringigy, convert to obejcts/arrays using JSON.parse
const arr = [1, 2, 3];

localStorage.setItem('nums', JSON.stringify(arr));

console.log(localStorage.getItem('nums'));
