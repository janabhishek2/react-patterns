const arr = [1, 2, 3, 4, 5, 6];
const sum = 7;

const getAllSubsequences = (arr, sum) => {

    const n = arr.length;
    function printSub(index, temp) {
        // base case
        if(index === n) {
            // check for sum
            let tempSum = temp.reduce((acc, curr) => {
                return acc + curr;
            }, 0);
            if(tempSum === sum) {
                // print
                console.log(temp);
            }
            return;
            // else return
        }
        // take
        temp.push(arr[index]);
        printSub(index+1, temp);

        // not take
        temp.pop();
        printSub(index+1, temp);
        return;
    }

    printSub(0, []);
}

getAllSubsequences(arr, sum);