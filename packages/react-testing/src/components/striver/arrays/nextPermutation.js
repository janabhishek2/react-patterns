const arr = [1, 2, 4, 3];;

// Time: O(n! * n)
// Space: (O(n))

const dictionaryPermutations = (arr) => {
    const n = arr.length;
    let answers = [];

    const generatePermutations = (index, temp, remainingArr) => {

        // base
        if(index >= n){
            answers.push(temp.toString());
        }

        // for index generate all possible ways of selecting a number
        for(let i = 0; i<remainingArr.length; i++) {
            let newRemainingArray = [...remainingArr];

            // push arr[i] to temp
            temp.push(remainingArr[i]);

            // update remainingArray to remove arr[i];
            newRemainingArray.splice(i,1);

            // recursively call for new remainingArray and new temp
            generatePermutations(index+1, temp, newRemainingArray);

            // remove arr[i] from temp
            temp.pop();
        }
    }

    generatePermutations(0, [], arr);
   
    answers.sort((a,b) => {
        let aArray = a.split("");
        let bArray = b.split("");

        for(let [index] of aArray.entries()) {
            if(aArray[index] != bArray[index]){
                return (aArray[index]).charCodeAt() - (bArray[index]).charCodeAt();
            }
        }
        return -1;
    });
    return answers;
};

function getNextPermutation(arr) {
    const allPermutations = dictionaryPermutations(arr);
    // console.log(allPermutations);
    const currPermutation = arr.toString();
    const indexOfCurrPermutation = allPermutations.findIndex((item) => item === currPermutation);

    const newIndex = (indexOfCurrPermutation + 1) % (allPermutations.length);
    return allPermutations[newIndex];
}

console.log(dictionaryPermutations(arr));
