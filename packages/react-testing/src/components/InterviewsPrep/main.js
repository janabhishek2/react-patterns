// request manager implementation

const fetchRequest = () => {
    // Init delay of 1000ms
    let delay = 0;
    return function fetchInternal(url, attempts = 1) {
        if(attempts > 0) {
            setTimeout(() => {
                return fetch(url, {
                    method: "GET"
                })
                .then(res => res.json())
                .catch((err) => {
                    attempts = attempts - 1;
                    delay += 1000;
                    fetchInternal(url, attempts);
                })
            }, delay);
        }
    }
};

const func = async function() {
    try{
        let getRequest = fetchRequest();
        const res = await getRequest('https://jsonplaceholder.typicode.com/todos', 10);
        console.log(res);
    } catch(err) {
        console.log(err.message);
    }
};

func();
