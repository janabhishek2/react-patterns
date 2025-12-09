// function sum(n, currSum) {
//     if(n === 0) return currSum;

//     return sum(n-1, currSum + n);
// }

function iterativeSum(i, sum) {
    if(i < 1) {
        console.log(sum);
        return;
    }

    iterativeSum(i-1, sum + i);
}

function recursiveSum(n) {
    if(n === 0) return 0;
    else return n + recursiveSum(n-1);
}

const n = 10;
const ans = recursiveSum(10);

console.log(ans);
