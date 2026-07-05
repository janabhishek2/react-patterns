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

function isPalindrome(str) {
    let arr = Array.from(str);
    const n = arr.length;
    let l = 0;
    let r = n-1;

    const compute = (arr, l, r) => {
        if(l > r) return true;
        else {
            return (arr[l] === arr[r]) && compute(arr, l+1, r-1);
        }
    }

    return compute(arr, l, r);
}

const str = "abbac";
const ans = isPalindrome(str);

console.log(ans);
