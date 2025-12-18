const arr = [1, 2, 3, 4, 5];

const findIndex = (arr, toFind) => {
    const n = arr.length;
    let low = 0;
    let high = n - 1;
    for(low,high; low<=high; ) {
        const mid = Math.floor((low+high)/2);
        if(arr[mid] === toFind) {
            return mid;
        } else if(arr[mid] < toFind ) {
            low = mid + 1;
        } else {
            high = mid-1;
        }
    }
    return -1;
};

const findIndexRecursive = (arr, low, high, num) => {
    if(low > high) return -1;

    const mid = Math.floor((low+high)/2);
    if(arr[mid] < num) {
        return findIndexRecursive(arr, mid+1, high, num);
    } else if( arr[mid] < num) {
        return findIndexRecursive(arr, low, mid-1, num);
    } else if(arr[mid] === num) {
        return mid;
    } else {
        return -1;
    }

}

const index = findIndexRecursive(arr, 0, arr.length-1, 4);

console.log(index)