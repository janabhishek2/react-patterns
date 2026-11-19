const Stack = require('./stackDS/stack');

const arr = [4, 5, 2, 10, 8];

const prevSmallerElement = (arr) => {
    const stack = new Stack();
    let pse = [];
    const n = arr.length;

    for(let i=0; i<n; i++) {
        if(stack.isEmpty()) {
            pse[i] = -1
        } else if(stack.top() < arr[i]) {
            pse[i] = stack.top()
        } else if(stack.top() >= arr[i]) {
            while(stack.top() >= arr[i] && !stack.isEmpty()) {
                stack.pop();
            }
            if(stack.isEmpty()) {
                pse[i] = -1;
            } else {
                pse[i] = stack.top();
            }
        }
        else null;

        stack.push(arr[i]);
    }

    return pse;
};

const ans = prevSmallerElement(arr);
console.log(ans);

module.exports = { 
    prevSmallerElement
}
