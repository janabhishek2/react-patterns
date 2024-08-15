// Compose functions

const compose = (...funcs) => {
    return function(value) {
       const funcsArray = Array.from(funcs);
       let composedValue = funcsArray[funcsArray.length - 1](value);
       for(let i = funcsArray.length - 2; i>=0; i--) {
            composedValue *= funcs[i](composedValue);
       }
       return composedValue;
    }
};

const convertToLowercase = str => str.toLowerCase();
const removeSpaces = str => {
    debugger;
    const ans = str.replace(/ /g, "");
    return ans;
};

const lowercaseAndRemoveSpaces = compose(removeSpaces, convertToLowercase);

console.log(lowercaseAndRemoveSpaces("ABCD EF"));
