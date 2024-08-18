// Localstorage

// localStorage object is available on window object.
// it has type Storage
// methods: getItem(key), setItem(key, value), removeItem(key), clear()
// max size: approx 5MB;

localStorage.setItem("color", "magenta");
localStorage.setItem("username", "Colt");

console.log(localStorage.length); //2

console.log(localStorage.getItem("username"));