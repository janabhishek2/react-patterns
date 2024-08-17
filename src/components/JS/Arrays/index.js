const flip = function(func) {
    return function(...args) {
        return func(...args.reverse())
    }
};

const subtract = (a, b) => a - b;
const flippedSubtract = flip(subtract);

const ans = flippedSubtract(3, 4);
console.log(ans);