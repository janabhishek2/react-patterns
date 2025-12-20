// Find a index such that arr[index] > number.

const upperBound = (arr, num) => {
    const n = arr.length - 1;
    let ans = n;

    const findUpperBound = (arr, low, high) => {
        if(low > high) return;
        const mid = Math.floor((low+high)/2);

        if(arr[mid] > num) {
            ans = mid;
            high = mid-1;
            findUpperBound(arr, low, high);
        }

        if(arr[mid] <= num) {
            low = mid + 1;
            findUpperBound(arr, low, high);
        }
    }

    findUpperBound(arr, 0, n);
    return ans;
}

const arr = [1, 3, 5, 7];

const toFindUpperBoundOf = 2;

const index = upperBound(arr, toFindUpperBoundOf);
console.log(index);

