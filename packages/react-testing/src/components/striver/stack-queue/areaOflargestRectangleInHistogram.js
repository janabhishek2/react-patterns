const { pseIndexes, nseIndexes } = require("./pse-nse-indices");

const histogram = [2, 1, 5, 6, 2, 3];

const computeMaxArea = (arr) => {
    let maxArea = -1;
    const n = arr.length;

    const pse = pseIndexes(arr);
    const nse = nseIndexes(arr);


    for(let i=0; i<n; i++) {
        maxArea = Math.max(((i-pse[i] + nse[i] - i - 1) * arr[i]), maxArea);
        
    }

    return maxArea;
};

const ans = computeMaxArea(histogram);
console.log(ans);
