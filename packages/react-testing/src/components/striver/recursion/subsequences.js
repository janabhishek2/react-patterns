const arr = [3, 1, 2];

const printSubsequences = (arr, providedSum) => {

    let temp = [];
    let index = 0;
    const n = arr.length;

    function subsequeces(index, temp, sum) {
        if(index >= (n)){
            if(sum === providedSum) {
                console.log(temp);
            }
            return;
        }
        // Take the index
        let newSum = sum + arr[index];
        temp.push(arr[index]);
        subsequeces(index+1, temp, newSum);

        // Not take the index
        newSum = newSum - arr[index];
        temp.pop();
        subsequeces(index+1, temp, newSum);
    }

    subsequeces(index, temp, 0);
};

printSubsequences(arr, 3);
