// async function which executes a callback after completing async tasks

const asyncFunction = async (callback) => {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 2000);
    });
    callback();
};

const callback = function() {
    console.log("Print the callback!");
};

asyncFunction(callback);