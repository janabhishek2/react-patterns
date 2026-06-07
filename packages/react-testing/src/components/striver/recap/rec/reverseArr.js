function reverseArr(arr) {
    if(arr.length === 0) return []; 

    let lastEl = arr.pop();

    return [lastEl, ...reverseArr(arr)];
}

function reverseSecond(arr, l, r) {
    if(l > r) return arr;
    else {
        // reverse items at l and r;
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;


        return reverseSecond(arr, l+1, r-1);
    }
}

const arr = [1, 2, 3, 4, 5];
const ans = reverseSecond(arr, 0, arr.length - 1);

console.log(ans);
