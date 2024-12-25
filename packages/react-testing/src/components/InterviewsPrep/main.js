// parallel async funcitons

const asyncFunc = (callback) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => callback(json))
};

const promisifyAndRemoveCallback = (asyncFunc) => {
    return new Promise((resolve) => {
        asyncFunc((data) => {
            resolve(data);
        });
    })
}

const test = async () => {
    const newMethod = await promisifyAndRemoveCallback(asyncFunc);
    console.log(newMethod);
};

test();
