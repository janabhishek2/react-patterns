const arr = [1, 2, 2, 1, 4, 4, 5];

const numberWhichAppearOnce = function(arr) {
    let number = null;
    function findNum() {
        const object = {};
        arr.forEach((item) => {
            if(object[item]) {
                object[item]++;
            } else {
                object[item] = 1;
            }
        })
        Object.keys(object).map((key) => {
            if(object[key] === 1) {
                number = key;
            }
        })
    }
    findNum();
    return number;
}

const ans = numberWhichAppearOnce(arr);
console.log(ans);