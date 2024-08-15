// Compose functions

function compose(...funcs) {
    return function(value) {
       let funcsLength = funcs.length;
       let interRes = funcs[funcsLength-1](value);
       for(let i = funcsLength - 2; i>=0; i--) {
            interRes = funcs[i](interRes);
       }
       return interRes;
    }
}

const convertToLowercase = str => str.toLowerCase();
const removeSpaces = str => {
    debugger;
    const ans = str.replace(/ /g, "");
    return ans;
};
const increaseBy1Character = (str) => {
    let temp = "";
    for(let i = 0; i< str.length; i++) {
        let currCharCode = str.charCodeAt(i);
        temp = temp + String.fromCharCode(currCharCode+1);
    }
    return temp;
}

const lowercaseAndRemoveSpaces = compose(increaseBy1Character, removeSpaces, convertToLowercase);

console.log(lowercaseAndRemoveSpaces("ABCD EF GH Ij"));
