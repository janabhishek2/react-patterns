// Find smallest index such that arr[index] >= num


const arr = [1, 2, 3, 3, 4, 5, 7, 8, 8, 8];
const toFind = 100;

const lowerBound = (arr, toFind) => {
    const n = arr.length - 1 ;
    let ans = n;

    const findLowerBound = (arr, low, high) => {
        if(low > high) return;

        const mid = Math.floor((low+high)/2);

        if(arr[mid] >= toFind) {
            high = mid-1;
            ans = mid;
            findLowerBound(arr, low, high);
        } else {
            low = mid + 1;
            findLowerBound(arr, low, high);
        }
    }

    findLowerBound(arr, 0, n);
    return ans;
}

const ans = lowerBound(arr, toFind);

console.log(ans);
