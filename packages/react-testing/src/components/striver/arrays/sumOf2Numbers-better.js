const arr = [1, 2, 3, 4, 5];
const sum = 5;

function sumOf2Numbers(arr, sum) {
    let n = arr.length;
    let variablesMap = new Map();

    // populate hash map
    for(let i=0; i<n; i++) {
        variablesMap.set(arr[i], i);
    }

    // loop over array and find if there is any index that can give you the answer.
    let ans = null;

    for(let i=0; i<n; i++) {
        let remSum = sum - arr[i];
        if(variablesMap.has(remSum)) {
            ans = {
                index1: i,
                index2: variablesMap.get(remSum)
            }
        }
    }

    return ans;
};

const ans = sumOf2Numbers(arr, 5);
console.log(ans);

