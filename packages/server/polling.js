const http = require('http');

let latestMessage = '';

setTimeout(() => {
    latestMessage = "New Message"
}, 10000);

const PORT = 4000;

http.createServer((req, res) => {
    if(req.url === "/short-polling") {
        res.writeHead(200, {
            "Content-type": "application/json",
            "access-control-allow-credentials": true,
            "access-control-allow-origin": "*"
        });

        res.end(JSON.stringify({ message: latestMessage }))
        return;
    }

    if(req.url === "/long-polling") {
         res.writeHead(200, {
            "Content-type": "application/json",
            "access-control-allow-credentials": true,
            "access-control-allow-origin": "*"
        });

        setTimeout(() => {
            res.end(JSON.stringify({ message: latestMessage }))
        }, 3000)
        return;
    }

    res.end(JSON.stringify({
        message: "Wrong input"
    }))
}).listen(PORT, () => {
    console.log("Listening on port: ", PORT);
})
