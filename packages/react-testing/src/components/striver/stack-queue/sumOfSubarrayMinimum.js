const { pseIndexes, nseIndexes } = require("./pse-nse-indices");

const arr = [3, 1, 2, 4];

const sumOfSubArrayMin = (arr) => {
    let sum = 0;
    let nse, pse;
    const n = arr.length;

    pse = pseIndexes(arr);
    nse = nseIndexes(arr);

    for(let i = 0; i<n; i++) {
        sum += (i-pse[i])*(nse[i] - i) * arr[i];
    }
    return sum;
};

const ans = sumOfSubArrayMin(arr);
console.log(ans);
