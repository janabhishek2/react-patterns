const arr = [1,1,2 ];

const getUniqueSubsets = (arr) => {

    const n = arr.length;
    // take not take approach to gen subsets
    const subsets = (index, temp) => {
        if(index === n) {
            console.log(temp);
            return;
        }

        // take arr[index]
        temp.push(arr[index]);
        subsets(index+1, temp);

        // not take arr[index]
        temp.pop();
        subsets(index+1, temp);
    }

    const uniqueSubsets = (index, temp) => {
        // base
        if(index === n) {
            console.log(temp);
            return;
        }
        console.log(temp);
        // generate all cases from index -> n
        // check if new case is not same as prev
        // pop while returning;

        let prev = null;
        for(let i = index; i<n; i++ ){
            if(prev === arr[i]) continue;

            prev = arr[i];
            temp.push(arr[i]);
            uniqueSubsets(i+1, temp);
            temp.pop();
        }
    }

    uniqueSubsets(0, []);
};

getUniqueSubsets(arr);