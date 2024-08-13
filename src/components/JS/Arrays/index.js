// Composition: passing return values of 1 funciton to other funciton

const lowercaseStr = str => str.toLowerCase();
const split = (str) => str.split(" ");
const joinWithDash = (arr) => arr.join("-");

const result = joinWithDash(split(lowercaseStr("My Testing String"))); 

console.log(result);
