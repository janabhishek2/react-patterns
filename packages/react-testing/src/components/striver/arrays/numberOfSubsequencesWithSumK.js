let arr = [1, 2, 3,3, 4, 5, 6, 7, 8];
let k = 6;

function numberOfSubSequencesWithSumK(arr, k) {
    let sumMap = new Map();
    let n = arr.length;
    let sum = 0;
    for(let i=0; i<n; i++) {
        sum+=arr[i];
        sumMap.set(sum, i);
    }
    let subsequences = [];
    for(let [prefixSum, assocIndex] of sumMap) {
       const remSum = prefixSum - k;
        if(remSum === 0) {
            subsequences.push({
                start: 0,
                end: assocIndex
            })
        }
       if(sumMap.has(remSum)) {
            const startIndex = sumMap.get(remSum) + 1;
            subsequences.push({
                start: startIndex,
                end: assocIndex
            })
       }
    }
    return subsequences;
}

const ans = numberOfSubSequencesWithSumK(arr, k);
console.log(ans);
