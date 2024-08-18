const todoApi = `https://jsonplaceholder.typicode.com/todos`;

// Use new Headers() constructor to create new headers object which has keys auto-formatted.

const headers = new Headers({
    'content-TYpe': "application/json",
    "testing-header": "1234"
});

// List all header keys and their values;

// for(let key of headers.keys()) {
//     console.log(key, headers.get(key));
// }

const fetchTodos = async function() {
    try{
        const response = await fetch(todoApi, {
            headers
        });
        if(!response.ok) {
            throw new Error("Error found!");
        }
        const data = await response.json();
    } catch(err) {
        console.log(err);
    }
}

fetchTodos();
