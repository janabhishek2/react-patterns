const fruits = [3, 3, 3, 1, 1, 1, 2, 3, 3, 4];

const maxFruitsOfSameType = (fruits) => {
    const fruitsMap = {};

    const n = fruits.length;
    let maxFruits = 0;

    let l = 0;
    let r = 0;

    const hasMap2Entries = (map) => {
        return Object.keys(map).length <= 2;
    }

    const collectedFruits = (map) => {
        return Object.values(map).reduce((acc, curr) => acc+curr, 0);
    };

    while(r < n) {
        // pick fruits[r] and populate map
        fruitsMap[fruits[r]] = (fruitsMap?.[fruits[r]] || 0) + 1;
        // remove fruites[l] till map contain 2 entries

        while(!hasMap2Entries(fruitsMap)) {
            fruitsMap[fruits[l]] = fruitsMap[fruits[l]] - 1;
            if(fruitsMap[fruits[l]] === 0) {
                delete fruitsMap[fruits[l]];
            }
            l++;
        }
        // check for max fruits

        const collected = collectedFruits(fruitsMap);
        maxFruits = Math.max(collected, maxFruits);

        // r++;
        r++;
    }

    return maxFruits;
}

const ans = maxFruitsOfSameType(fruits);
console.log(ans);