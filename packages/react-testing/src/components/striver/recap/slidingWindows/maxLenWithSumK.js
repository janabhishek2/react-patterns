const arr = [2, 5, 1, 7,1, 10];
const k = 14;

const findMaxLen = (arr, k) => {
    let l = 0;
    let r = 0;
    const n = arr.length;
    let sum = 0;
    let maxLen = -1;

    while(r < n) {
        sum+= arr[r];

        while(sum > k) {
            sum-=arr[l];
            l++;
        }

        let len = (r-l+1);

        maxLen = Math.max(len, maxLen);
        r++;
    }

    return maxLen;
}

const ans = findMaxLen(arr, k);
console.log(ans);
