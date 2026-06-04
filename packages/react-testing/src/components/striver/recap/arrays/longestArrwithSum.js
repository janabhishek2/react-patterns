const arr = [1, 2, 3, 4, 5, 6];

function max(...args) {
    return Math.max(...args);
}
function findLongestLengthSubArray(arr, sum) {
    const n = arr.length;

    // 2 maps: one for sum at a given index
    // other for index for a given sum

    let sumAtIndex= {};
    let indexAtSum = {};
    let tempSum = 0;
    for(let i = 0; i<arr.length; i++) {
        tempSum += arr[i];
        sumAtIndex[i] = tempSum;
        indexAtSum[tempSum] = i;
    }

    delete tempSum;

    let maxLen = 0;

    for(let i = 0; i < n; i++) {
        let diff = sumAtIndex[i] - sum;
        let startIndex = -1;
        let endIndex = -1;
        if(diff > 0 && !isNaN(indexAtSum[diff]) && indexAtSum[diff] >=0 ) {
            startIndex = indexAtSum[String(diff)];
            endIndex = i;

            // console.log('Diff', startIndex, endIndex);
            maxLen = Math.max(maxLen,(endIndex - startIndex));
        }
    }

    return maxLen;
}

const ans = findLongestLengthSubArray(arr, 9);
console.log(ans);