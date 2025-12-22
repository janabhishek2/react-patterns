const arr = [2, 3, 5, 7, 11];

const firstAndLastOccurence = (arr, num) => {
    let n = arr.length - 1;

    let lb = n;
    let ub = -1;

    function computeLB(arr, low, high) {
        if(low > high) return;
        const mid = Math.floor((low+high)/2);
        if(arr[mid] >= num) {
            lb = mid;
            high = mid-1;
            computeLB(arr, low, high);
        } else {
            low = mid + 1;
            computeLB(arr, low, high);
        }
    }

    computeLB(arr, 0, n);
    const lowerBoundEl = lb != n ? arr[lb]: 0;

    function computeUb(arr, low, high) {
        if(low > high) return;

        const mid = Math.floor((low+high)/2);
        if(arr[mid] > num) {
            ub = mid;
            high = mid - 1;
            computeUb(arr, low, high);
        } else {
            low = mid + 1;
            computeUb(arr, low, high);
        }
    }

    if(lowerBoundEl === num) {
        computeUb(arr, 0, n);

        return [lb, ub-1];
    }

    return [-1, -1];

};

const ans = firstAndLastOccurence(arr, 8);
console.log(ans);

