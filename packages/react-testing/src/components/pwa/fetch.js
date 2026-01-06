const url = "https://jsonplaceholder.typicode.com/todos";

fetch(url).then(response => {
    response.json().then((res) => {
        console.log(res);
    })
}).catch(err => {
    console.log(err);
})