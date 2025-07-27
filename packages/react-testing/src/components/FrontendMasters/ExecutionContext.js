console.log(1);

setTimeout(() => {
    console.log(2);
}, 1000);

console.log(3);

// apis are just a medium in which 2 different systems communicate with each other using a fixed syntax.
// WebApis are used to connect JS runtime with browser.
// Webapi: take complex task like setTimeout etc from JS runtime to browser, and then put the callbacks in task queue.
// Browsers run the code via webapis and return code to the task queue ( not call stack )
// The JS runtime will schedule a time to take up process from task queue and execute it.

// Browsers run on multiple threads, JS can not..