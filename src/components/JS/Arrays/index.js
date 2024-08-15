const compose = (...funcs) => {
    return function(data) {
        // reduce all functions from right side of funcs[]
        return funcs.reduceRight(((value, func) => func(value)), data)
    }
};

const lowerCaseString = str => str.toLowerCase();
const replaceS = str => str.replaceAll("s", "$");

const lowerCaseRepacedS = compose(replaceS, lowerCaseString);

const ans = lowerCaseRepacedS("sorry for sucking at js");

console.log(ans);
