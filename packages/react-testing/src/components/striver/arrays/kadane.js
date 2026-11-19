const arr = [-2, -3, 4, -1, -2, 1, 5, -3];
// Get max sum of subarray inside this array


const getMaxSum = (arr) => {
    // maintain vars sum and maxSum,
    // is sum < 0 reset it
    // else keep it and keep comparing it with maxSum

    const n = arr.length;
    let maxi = 0;
    let sum = 0;

    for(let i = 0; i < n; i++) {
        sum += arr[i];

        // compare sum to maxi
        if(sum > maxi) {
            maxi = sum;
        }

        // if sum < 0, reset it, else continue
        if(sum < 0) {
            sum = 0;
        }
    }

    return maxi;
};

const ans = getMaxSum(arr);
console.log(ans);
