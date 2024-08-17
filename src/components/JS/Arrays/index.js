const todoApi = `https://jsonplaceholder.typicode.com/todos`;

const fetchTodos = async function() {
    const response = await fetch(todoApi);
    const data = await response.json();
    console.log(data);
}

fetchTodos();
