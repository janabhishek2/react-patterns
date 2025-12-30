const arr = [1, 2, 3, 4, 5, -1, -2];
const k = 4;

// find the subarray with length k such that sum of elements is max

const findSubarray = (arr, k) =>{
    let l = 0;
    let n = arr.length;
    let r = l+k-1;

    let maxSum = 0;
    let currSum = 0;

    for(let t = l; t<=r; t++) {
        currSum+=arr[t];
        if(currSum > maxSum) maxSum = currSum;
    }

    while(r<n) {
        currSum = currSum - arr[l];
        l++;
        r++;
        currSum = currSum + arr[r];
        if(currSum > maxSum) {
            maxSum = currSum;
        }
    }

    return maxSum;
}

const ans = findSubarray(arr, k);
console.log(ans);
