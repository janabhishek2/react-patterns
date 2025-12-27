// if the height of various buildings are represented as numbers in an array
// Calculate the total water that can be stored between the buildings.

const heights = [1, 0, 3, 0, 3, 0, 1];

const min = (a, b) => a > b ? b: a;

const getTrappedWater = (arr) => {
    let n = arr.length;
    let prefixMax = new Array(n).fill(-1);
    let suffixMax = new Array(n).fill(-1);

    // Create prefix max
    for(let i=0; i<n; i++ ){
        let prevMax = i>0 ? prefixMax[i-1] : -1;
        if(arr[i] > prevMax) {
            prefixMax[i] = arr[i];
        } else {
            prefixMax[i] = prevMax;
        }
    }

    // Create suffix max
    for(let i=n-1; i>=0; i--) {
        let nextMax = i<n-1 ? suffixMax[i+1]: -1;
        if(arr[i] > nextMax) {
            suffixMax[i] = arr[i];
        } else {
            suffixMax[i] = nextMax;
        }
    }

    let totalWater = 0;

    for(let i = 0; i < n; i++) {
        // for each index, find the left max and right max, and if arr[i] is less then it will store water
        if(arr[i] < prefixMax[i] && arr[i] < suffixMax[i]) {
            totalWater+= min(prefixMax[i], suffixMax[i]) - arr[i];
        }
    }

    return totalWater;
}

const ans = getTrappedWater(heights);

console.log(ans);
