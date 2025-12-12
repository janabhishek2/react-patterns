const arr = [2, 3, 5];

const printAllSubsetSums = (arr) => {

    let sums = [];
    const n = arr.length;

    function computeSums(index, currSum, sums) {
        // base
        if(index >= n) {
            sums.push(currSum);
            return;
        }
        // Take the index
        computeSums(index+1, currSum+arr[index], sums);

        // Do not take the index
        computeSums(index+1, currSum, sums);
    }

    computeSums(0, 0, sums);
    return sums.sort();
    
};

const allSubArraysSum = (arr) => {
    let sums = [];
    let n = arr.length;

    for(let i = 0; i < n; i++ ){
        for(let j=i; j<n; j++) {
            let currSum = 0;
            for(let k = i; k<=j; k++) {
                currSum += arr[k];
            }
            sums.push(currSum);
        }
    }
    
    return sums.sort((a, b) => a-b);
}

const ans = allSubArraysSum(arr);

console.log(ans);
