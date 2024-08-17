const todoApi = `https://jsonplaceholder.typicode.com/todos`;

// fetch never rejects the promise; except when network is down!
// we need to check if promise gave positive status code using ok flag.
const fetchTodos = async function() {
    try{
        const response = await fetch(todoApi);
        if(!response.ok) {
            throw new Error("Error found!");
        }
        const data = await response.json();
    } catch(err) {
        console.log(err);
    }
}

fetchTodos();
