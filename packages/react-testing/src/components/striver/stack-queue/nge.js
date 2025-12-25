// Find the next greater element for each element in array.

const { Stack } = require("./stack-arr");

const arr = [4, 3, 2, 1];
const stack = new Stack(arr.length);

// nge will [2, 3, 4, -1];

const getNge = (arr) => {
    let n = arr.length;
    let nge = new Array(n);
    for(let i=n-1 ; i >= 0; i--) {
        if(stack.isEmpty) {
            nge[i] = -1;
        } else if (stack.top() > arr[i]) {
            nge[i] = stack.top();
        } else if(stack.top() <= arr[i]) {
            while(!stack.isEmpty && stack.top() <= arr[i]) {
                stack.pop();
            }
            if(stack.isEmpty) {
                nge[i] = -1;
            } else {
                nge[i] = stack.top();
            }
        }
        stack.push(arr[i]);
    }

    return nge;
};

const getCircularNge = (arr) => {
    let newArr = [...arr, ...arr];
    return getNge(newArr);
}

const nge = getCircularNge(arr);
console.log(nge);
