// HOISTING

// var keyword defs are moved to the top of scope chain: function/global scope only and set to undefined.
// they are assigned values when they are interpreted by code.

// we don't get the undefined error while using var keyword; this is not true with let/const.
console.log(food); // returns undefined
var food = "pizza";
