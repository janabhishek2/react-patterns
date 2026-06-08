const str = "abc";

const getSubsequences = function(str) {
 
    function compute(str) {
        if(str.length === 0) return [""];

        const first = str[0];
        const sliced = str.slice(1);

        // all subsequences removing first
        const sub = compute(sliced);

        // take first
        const ans1 = sub.map((item) => {
            return `${first}${item}`;
        })

        // do not take

        return [...ans1, ...sub];
    }

    return compute(str);
}

const ans = getSubsequences(str);
console.log(ans);
