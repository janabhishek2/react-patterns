const arr = [-2, -3, 4, -1, -2, 1, 5, -3];

const getMaxSubArraySum = (arr) => {

    const n = arr.length;

    let sum = 0;
    let max_sum = -Infinity;

    for(let i=0; i < n; i++) {
        sum += arr[i];

        if(sum > max_sum) {
            max_sum = sum;
        }

        if(sum < 0) sum = 0;
    }

    return max_sum;
}

const ans = getMaxSubArraySum(arr);
console.log(ans);
