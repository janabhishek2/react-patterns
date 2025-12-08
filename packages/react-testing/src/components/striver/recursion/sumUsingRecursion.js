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

const n = 10;
iterativeSum(n, 0);
