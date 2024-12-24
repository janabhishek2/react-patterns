// fetch api

const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

const getData = () => {
    fetch(apiUrl)
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(response => {
        console.log(response);
    })
};

getData();