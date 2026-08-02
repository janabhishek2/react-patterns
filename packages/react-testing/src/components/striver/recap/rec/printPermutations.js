const arr = [1, 2, 3, 1];

const printPermutations = (arr) => {
    const n = arr.length;
    const freqMap = new Map();
    arr.forEach((item) => {
        freqMap.set(item, (freqMap.get(item) || 0) + 1);
    });

    function getPermutations(incomingMap, temp) {
        if(temp.length === n) {
            console.log(temp);
            return;
        }

        // Iterate over incoming map entries (don't modify during iteration)
        for(let [key, value] of incomingMap) {
            if(value === 0) continue;

            // Create a new map for this branch
            const newMap = new Map(incomingMap);
            newMap.set(key, value - 1);

            temp.push(key);
            getPermutations(newMap, temp);
            temp.pop();
        }
    }

    getPermutations(freqMap, []);
}

printPermutations(arr);
