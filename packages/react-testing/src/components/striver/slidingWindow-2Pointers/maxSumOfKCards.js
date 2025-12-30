// Get k cards such that sum of k numbers is max.

const getMaxCards = (arr, k) => {
    let l = 0;
    let r = k-1;

    let answer = {};
    let maxSum = -1;

    const n = arr.length;

    // // Get initial sum of k cards
    // let currSum = 0;
    // for(let i = l; i <= r; i++) {
    //     currSum += arr[i];
    // }
    // if(currSum > maxSum) maxSum = currSum;

    while(r < n) {
        let currSum = 0;

        for(let i = l; i<=r; i++) {
            currSum+= arr[i];
        }

        if(currSum > maxSum){
             maxSum = currSum; 
             answer.l = l;
             answer.r = r;
        }

        l++;
        r++;
    }

    return {
        maxSum,
        answer
    }
};

const arr = [6, 2, 3, 4, 7, 2, 1, 7, 1];
const k = 4;

const ans = getMaxCards(arr, k);
console.log(ans);
