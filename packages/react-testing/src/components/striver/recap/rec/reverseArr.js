function reverseArr(arr) {
    if(arr.length === 0) return []; 

    let lastEl = arr.pop();

    return [lastEl, ...reverseArr(arr)];
}

const arr = [1, 2, 3, 4];
const ans = reverseArr(arr);

console.log(ans);
