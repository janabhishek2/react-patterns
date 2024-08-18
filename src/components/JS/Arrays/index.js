const todoURL = "https://jsonplaceholder.typicode.com/todos";

const headers = new Headers({
    'content-type': "application/json",
    "authorization": "Bearer TEST"
});

const postTodo = async function(body = {}) {
    const payload = {
        ...body,
        testParam: 1
    };

    try {
        const response = await fetch(todoURL, {
            headers,
            method: "POST",
            // use JSON.stringigy to convert payload to json string and send in the body parameter
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        console.log(data);
    } catch(err) {
        console.log(err);
    }
}

postTodo();
