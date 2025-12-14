const arr = [1, 3, 4, 7];

function max(a, b) {
    return a > b ? a : b;
}

const getLongestSequence = (arr) => {

    // Create a set to prevent duplicates
    const set = new Set(arr);
    let longest = 1;
    let curr = 1;
    // for each element in set, check if a number less than it exists?
    for(let item of set) {
        // if yes; skip it.
        if(set.has(item-1)) {
            null
        } else {
            while(1) {
                if(set.has(item+curr)) {
                    curr++;
                } else {
                    longest = max(longest, curr);
                    curr = 1;
                    break;
                }
            }
        }
        // if no; check for numbers greater than it till a sequence is formed.
    }
    
   return longest;
}

const ans = getLongestSequence(arr);
console.log(ans);
