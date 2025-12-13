const arr = [4, 5,5,  6];
const sum = 6;

const printUniqueSubsequences = (arr, givenSum) => {

    let n = arr.length;
    
    const generateSubsequences = (index, temp) => {

        // base
        if(index >= n) {
            return;
        }        

        // take the first index and set prev to index; print as well.
        let prev = null;
        // temp.push(arr[index]);
        // console.log(temp);

        // generateSubsequences(index + 1, temp);
        // for index+1 to n; check if prev index is taken; then skip; else take it for level 2 recursion.

        for(let i=index; i<n; i++) {
            if(arr[i] != prev) {
                
                prev = arr[i];
                
                temp.push(arr[i]);
                console.log(temp);

                // call recursively next
                generateSubsequences(i + 1, temp);

                // pop temp for next iteration
                temp.pop();
            }
        }

    }

    generateSubsequences(0, []);

};

printUniqueSubsequences(arr, sum);
