let data = null;

const controller = new AbortController();
const signal = controller.signal;

function fetchApi(url) {
    fetch(url, { signal })
    .then((res) => {
        controller.abort();
        return res.json()
    })
    .then((data) => {
        data = data;
        console.log("Resolved now");
    })
}

const API_1 = "https://jsonplaceholder.typicode.com/todos/1";
const API_2 = "https://jsonplaceholder.typicode.com/todos/2"

fetchApi(API_1);

setTimeout(() => {
    fetchApi(API_2);
}, 20)
