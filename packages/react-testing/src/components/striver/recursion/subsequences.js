const arr = [3, 1, -2];

const printSubsequences = (arr, providedSum) => {

    let temp = [];
    let index = 0;
    const n = arr.length;

    function subsequeces(index, temp, sum) {
        if(index >= (n)){
            if(sum === providedSum) {
                console.log(temp);
                return true
            }
            return false;
        }
        // Take the index
        let newSum = sum + arr[index];
        temp.push(arr[index]);
        const take = subsequeces(index+1, temp, newSum);
        if(take) return true;

        // Not take the index
        newSum = newSum - arr[index];
        temp.pop();
        const notTake = subsequeces(index+1, temp, newSum);
        if(notTake) return true;

        return false;
    }

    return subsequeces(index, temp, 0);
};

const countSubsequences = (arr, providedSum) => {

    let n = arr.length;

    const countSubsequencesWithGivenSum = (index, currSum) => {
        if(index >= n) {
            if(currSum === providedSum) {
                return 1;
            }
            return 0;
        }

        const l = countSubsequencesWithGivenSum(index + 1, currSum + arr[index]);
        const r = countSubsequencesWithGivenSum(index + 1, currSum);

        return l + r;
    }

    return countSubsequencesWithGivenSum(0, 0);
}

const ans = countSubsequences(arr, 1);
console.log(ans);

