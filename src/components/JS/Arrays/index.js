// Compose functions

const compose = function(func1, func2, func3) {
    return function(value) {
        return func1(func2(func3(value)));
    }
};

const convertToLowercase = (str) => str.toLowerCase();
const splitWords = (str) => str.split(" ");
const joinWithDashes = args => args.join("-");

const lowerCaseJoinedWithDashes = compose(joinWithDashes, splitWords, convertToLowercase);

const ans = lowerCaseJoinedWithDashes("Abhishek Jan");
console.log(ans);