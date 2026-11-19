// Demonstrates cancelling an in-flight fetch() request using AbortController.
let data = null;

// A single controller/signal pair shared by every fetchApi call below.
const controller = new AbortController();
const signal = controller.signal;

/**
 * fetchApi(url)
 * Fires a fetch for `url`, passing the shared `signal` so the request can be
 * aborted. On the first response it calls controller.abort() — which cancels
 * any OTHER in-flight request tied to the same signal — then parses the JSON.
 *
 * NOTE (bug worth flagging): the inner `data = data` on line below assigns the
 * parameter to itself; it does not update the outer `data` variable because
 * the parameter shadows it. Also, once a signal is aborted it stays aborted,
 * so later fetches with the same signal will reject immediately.
 */
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

// Kick off the first request immediately...
fetchApi(API_1);

// ...and a second one shortly after. Whichever resolves first aborts the other.
setTimeout(() => {
    fetchApi(API_2);
}, 20)
