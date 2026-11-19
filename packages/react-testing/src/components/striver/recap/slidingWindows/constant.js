const arr = [11, -2, 10, 14];

const windowSize = 3;

const getMaxSum = (arr, windowSize) => {
    const n = arr.length;

    let l = 0;
    let r = windowSize-1;

    let maxSum = -100;
    let sum = 0;
    
    for(let i=l; i<=r; i++) {
        sum+= arr[i];
    };
    if(sum > maxSum) maxSum = sum;

    while(r < n) {
       
        // remove arr[l-1] and add arr[r];
        sum-=arr[l];
        l++;
        r++;
        sum+=arr[r];
        
        if(sum > maxSum) maxSum = sum;
        
        
    }

    return maxSum;

}

const ans = getMaxSum(arr, windowSize);
console.log(ans);
