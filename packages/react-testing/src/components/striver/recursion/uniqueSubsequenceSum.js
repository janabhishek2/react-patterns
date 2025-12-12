const arr = [1, 1, 1, 1, 2, 2];
const sum = 4;

const getSumSequences = (arr, sum) => {
    const n = arr.length;

    const printSubsequences = (index, temp, remSum, allAnswers) => {

        // Base case
        if(index >= n) {
            if(remSum === 0 ) {
                allAnswers.add(temp.toString());
            }
            return;
        }

        // Take 
        temp.push(arr[index]);
        printSubsequences(index+1, temp, remSum-arr[index], allAnswers);

        // Not take
        temp.pop();
        printSubsequences(index+1, temp, remSum, allAnswers);
    }

    const set = new Set();
    printSubsequences(0, [], sum, set);

    return set;
}

const ans = getSumSequences(arr, sum);
console.log(ans);
