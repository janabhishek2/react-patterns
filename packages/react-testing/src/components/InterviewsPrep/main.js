const s = "unicorns and rainbows and cupcakes";
// $1 means the first capture group; $0 means whole capture group
const newStr = s.replace(/([aeiou])/g, "$1$1");

console.log(newStr);
