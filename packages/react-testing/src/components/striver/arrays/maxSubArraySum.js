// Kadanes algo

const arr = [-2, -3, 4, -1, -2, 1, 5, -3];

function maxSubArraySum(arr) {
    let maxSum = Number.MIN_SAFE_INTEGER;
    let currSum = 0;

    const n = arr.length;

    for(let i = 0; i<n ;i++) {
        currSum = currSum + arr[i];

        if(currSum > maxSum) {
            maxSum = currSum; 
        }
        
        if(currSum < 0) {
            currSum = 0;
        }
    }

    return maxSum;
}

const ans = maxSubArraySum(arr);

console.log(ans);
