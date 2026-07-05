console.log("Hello");

const arr = [3, 1, -2];

const getSubsequencesWithSum = (arr, sum) => {
    // let sets = [];

    function getSubsequenceSum(arr, sum) {
        if(arr.length === 1) return arr[0] === sum;
        if(arr.length === 0) return false;
        // Do not take
        let totalSumWithTakingFirst = getSubsequenceSum(arr.slice(1), sum - arr[0]);
        let totalSumWithoutTakingFrist = getSubsequenceSum(arr.slice(1), sum);

        return totalSumWithTakingFirst || totalSumWithoutTakingFrist ;
    }
    return getSubsequenceSum(arr, sum);
};

const printSubsequences = (arr) => {
    let n = arr.length;
    let temp = [];
    let i = 0;

    function printSubsequences(i, temp) {
        // if i is n-1 print and return;
        if( i === n - 1) return;

        // push arr[i] in temp and call recursion
    }
}

const ans = getSubsequencesWithSum(arr, 20);
console.log(ans);