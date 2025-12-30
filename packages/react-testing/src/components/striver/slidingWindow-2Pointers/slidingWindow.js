const arr = [1, 2, 3, 4, 5, 6, -1, -2, -3, -1, -1, -1, 1, 200];
let k = 14;

// Find maxLength subarray with sum <= k;

const maxLengthSubarray = (arr, k) => {
    let currSum = 0;
    
    let maxLen = 0;
    let l = 0;
    let r = 0;

    let answer = {};


    let n = arr.length;

    while(r < n) {
        currSum += arr[r];

        while(currSum > k) {
            currSum = currSum-arr[l];
            l++;
        }

        if(currSum <= k) {
            if(r-l+1 > maxLen) {
                answer.l = l;
                answer.r = r;
            }
            maxLen = Math.max(maxLen, r-l+1);
        }
        r++;
    }

    return {maxLen, answer};
}

const ans = maxLengthSubarray(arr, k);
console.log(ans);
