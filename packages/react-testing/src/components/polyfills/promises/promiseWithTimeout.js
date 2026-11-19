async function promiseWithTimeout(timeout) {

    const controller = new AbortController();

    setTimeout(() => {
        controller.abort();
    }, timeout);
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
            signal: controller.signal,
        },
    );
    const result = await response.json();
    return result;
}

const res = promiseWithTimeout(1000);
console.log(res);