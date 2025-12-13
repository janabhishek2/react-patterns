const arr = [1, 2, 3];

const permutations = (arr) => {

    let n = arr.length;
    const generatePermutations = (index, temp, remArray) => {
        
        // base
        if(index >= n) {
            console.log(temp);
            return;
        }

        // generate all possibilities
        for(let i = 0; i < remArray.length; i++) {

            // Get copy[i] for permutation
            const permutedValue = remArray[i];
            temp.push(permutedValue);

            const copy = [...remArray];
            // remove copy[i] from remArray
            copy.splice(i,1);

            // recursively call the function 
            generatePermutations(index+1, temp, copy);
            temp.pop();
        }
        
    }

    generatePermutations(0, [], arr);
};

permutations(arr);
