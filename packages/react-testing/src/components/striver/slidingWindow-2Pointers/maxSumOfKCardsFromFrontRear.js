const arr = [6, 2, 3, 4, 7, 2, 1, 7, 1];
let k = 4;

const getMaxFromStartEnd = (arr, k) => {
    let l = k-1;
    let r = 0;
    let n = arr.length;

    let lSum = 0;
    let rSum = 0;
    let maxSum = -1;

    for(let i=0; i<k; i++) {
        lSum+=arr[i];
    }
    maxSum = Math.max(maxSum, lSum + rSum);

    for(l = k-1, r=0; l>=0 && r>n-k-1; r--, l++) {
        lSum = lSum-arr[l];
        l--;

        rSum = rSum + arr[r];
        r--;

        maxSum = Math.max(maxSum, lSum + rSum)
    }

    return maxSum;
}

const ans = getMaxFromStartEnd(arr, k);
console.log(ans);
