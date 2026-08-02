const arr = [1, 1, 1, 2, 2];
const sum = 4;

const getUniqueSubsequences = (arr, sum) => {

    const n = arr.length;
    function printSubsequences(index, currSum, temp) {
        // base case
        if(currSum <= 0 || index === n) {
            if(currSum === 0) {
                console.log(temp);
            }
            return;
        }

        // call all index -> n arr indices
        let prev = null;
        for(let i=index; i<n; i++) {
            const isPrevSame = prev === arr[i];
            
            if(isPrevSame) continue;

            prev = arr[i];
            temp.push(arr[i]);
            printSubsequences(i+1, currSum - arr[i], temp);
            temp.pop();
        }
    }

    printSubsequences(0, sum, []);
}

getUniqueSubsequences(arr, sum);