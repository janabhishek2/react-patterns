const arr = [1, 2, 3, 4, 101, 102, 103, 104, 105, 105, 106];

function max(a, b) {
    return a > b ? a : b;
}

const getLongestSequence = (ar) => {
    const arr = [...ar];
    const n = arr.length;

    arr.sort((a,b) => a-b);

    let longest = -1;
    let base = arr[0];
    let currLongest = 1;

    for(let i=1;i<n;i++) {
        if(arr[i] === base+1) {
            base = arr[i];
            currLongest++;
        } else if(arr[i] !== base) {
            base = arr[i]; 
            longest = max(longest, currLongest)
            currLongest = 1;
        } else {
            null;
        }
    }
    
    longest = max(longest, currLongest);

    return longest;

}

const ans = getLongestSequence(arr);

console.log(ans);
