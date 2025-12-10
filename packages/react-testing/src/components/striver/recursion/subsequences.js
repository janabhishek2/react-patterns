const arr = [3, 1, 2];

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

printSubsequences(arr, 3);
