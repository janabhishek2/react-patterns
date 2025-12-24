// check if paranthese are baale
const {Stack} = require("./stack-arr");
const parantheses = "[{()}]";
const notBalanced = "((}}";

const checkBalancedParantheses = (arr) => {
    let n = arr.length;

    const stack = new Stack(n);
    for(let i = 0; i < n; i++) {
        if(arr[i] === "[" || arr[i] === "{" || arr[i] === "(") {
            stack.push(arr[i]);
        }
        if(arr[i] === "]") {
            if(stack.top() === "[") {
                stack.pop();
            } else {
                return false;
            }
        }
        if(arr[i] === "}") {
            if(stack.top() === "{") {
                stack.pop();
            } else {
                return false;
            }
        }
        if(arr[i] === ")") {
            if(stack.top() === "(") {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    if(stack.isEmpty) return true;
    return false;
}

const isBalanced = checkBalancedParantheses(notBalanced);
console.log(isBalanced);