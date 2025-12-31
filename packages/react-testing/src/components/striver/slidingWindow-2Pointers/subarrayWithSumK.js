const arr = [0,1, 0, 0, 1, 1, 1, 3];
const requiredSum = 4;

const getLongestSubarray = (arr, requiredSum) => {
    let maxLen = 0;
    let l = 0;
    let r = 0;
    let n = arr.length;

    let currSum = 0;
    let ans = {};
    while( r < n ) {
        currSum += arr[r];
        
        while(currSum > requiredSum) {
            currSum = currSum - arr[l];
            l++;
        }

        if(currSum === requiredSum) {

            if(r-l+1 > maxLen) {
                ans = {
                    l,r
                }
            }

            maxLen = Math.max(maxLen, r-l+1);
        }

        r++;
    } 

    return {maxLen, ans};
}

const ans = getLongestSubarray(arr, requiredSum);
console.log(ans);
