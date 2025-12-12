// Find a combination of subsequence in array so that sum is equal to k

// [2, 3, 4, 7] , sum: 7, [[2,2,3], [3,4], [7]]

const arr = [1, 1, 1, 2, 2];
const targetSum = 3;

const combinationSum = (arr, targetSum) => {
    let n = arr.length;

    function printCombinations(index, remSum, temp) {
        // base case
        if(index >= n) {
            if(remSum === 0) {
                console.log(temp);
            }
            return;
        }

        // Take and stay at index
        // Dec remSum
        // push to temp

        const newSum = remSum - arr[index];
        let isPushed = false;
        if(newSum >= 0) {
            isPushed = true;
            temp.push(arr[index]);
            printCombinations(index, newSum, temp)
        }

        // Not take and add index
        // Increment remSum
        // remove from temp

        isPushed && temp.pop();
        printCombinations(index+1, remSum, temp);
    }

    printCombinations(0, targetSum, [])
}

combinationSum(arr, targetSum);
