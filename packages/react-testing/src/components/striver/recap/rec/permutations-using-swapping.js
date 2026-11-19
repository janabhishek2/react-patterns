const arr = [1, 2, 3];

const generatePermutations = (arr) => {
    const n = arr.length;

    function getPermutations(index, temp) {
        if(index === n){
            console.log(temp);
            return;
        }

        // for each index from index->n swap one by one

        for(let i=index; i<n; i++) {
            let currArray = [...temp];
            // swap index with i

            let tempVar = currArray[index];
            currArray[index] = currArray[i];
            currArray[i] = tempVar;

            // recursively call for index+1

            getPermutations(index + 1, currArray);
        }
    }

    getPermutations(0, arr);
};

generatePermutations(arr);