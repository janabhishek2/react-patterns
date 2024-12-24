// parallel async funcitons

const async1 = (callback) => {
    console.log('run1');
    setTimeout(() => {
        callback(1);
    }, 3000);
}
const async2 = (callback) => {
    console.log('run2');
    setTimeout(() => {
        callback(2);
    }, 2000);
}
const async3 = (callback) => {
    console.log('run3');
    setTimeout(() => {
        callback(3);
    }, 1000);
}

const parallelAsync = (asyncFuncs = [], callback) => {
    let resultsArray = new Array(asyncFuncs.length);
    let resultsCount = 0;
    asyncFuncs.forEach(async (func, index) => {
        await func((value) => {
            resultsArray[index] = value;
            resultsCount++;
            // Wait for all results to be resolved then execute callback;
            if(resultsCount >= asyncFuncs.length) {
                callback(resultsArray);
            }
        });
    })
};

const callback = (arr) => {
    console.log(arr);
}

parallelAsync([async1, async2, async3], callback);