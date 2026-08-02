const { Stack } = require("./stack-arr");

const arr = [4, 7, 1,1, 2, -3, -7, 17, 15, -16];

const asteroidCollisionFinalState = (arr) => {
    const n = arr.length;
    const stack = new Stack(n);

    for(let i=0; i<n; i++) {
        const asteroidValue = arr[i];
       
        if(stack.isEmpty) {
            stack.push(asteroidValue);
        } else if(asteroidValue > 0 && stack.top < 0) {
            // asteroid is positive, stack top is negative
            // pop while there are negative indices and abs < asteroid
            while(!stack.isEmpty && stack.top() < 0 && Math.abs(stack.top) < asteroidValue) {
                stack.pop();
            }
            if(!stack.isEmpty && Math.abs(stack.top()) === Math.abs(asteroidValue)) {
                stack.pop();
            }
            if(stack.isEmpty) {
            stack.push(asteroidValue);
            }
        } else if(asteroidValue < 0 && stack.top() < 0) {
            // asteroid is negative, stack top is neg
            stack.push(asteroidValue);
        } else if(asteroidValue > 0 && stack.top() > 0) {
            // asteroid is positive, stack top is pos
            stack.push(asteroidValue);
        } else if(asteroidValue < 0 && stack.top() > 0) {
            // asteroid is negative, stack top is positive
            while(!stack.isEmpty && stack.top() > 0 && stack.top() < Math.abs(asteroidValue)) {
                stack.pop();
            }
            if(!stack.isEmpty && Math.abs(stack.top()) === Math.abs(asteroidValue)) {
                stack.pop();
            }
            if(stack.isEmpty) {
                stack.push(asteroidValue);
            }
        } else null;
    }

    return stack;

};

const ans = asteroidCollisionFinalState(arr);

console.log(ans);