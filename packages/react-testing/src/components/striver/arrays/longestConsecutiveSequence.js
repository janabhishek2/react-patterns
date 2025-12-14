const arr = [100, 102, 100, 101, 101, 4, 3, 2, 3, 2, 1, 1, 1, 2];

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
            currLongest++;
        } else {
            base = arr[i];
            longest = max(longest, currLongest)
            currLongest = 1;
        }
    }

    return longest;

}

const ans = getLongestSequence(arr);

console.log(ans);
