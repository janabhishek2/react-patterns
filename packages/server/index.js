const express = require('express');
const { WebSocketServer } = require('ws');

const app = express();
const port = 8080;

const server = app.listen(port, () => {
    console.log("Server setup at: ", port);
});

const wss = new WebSocketServer({ server });

wss.on("connection", (stream) => {
    stream.on("message", (msg) => {
        const message = msg.toString();
        let res = "";
        console.log(message);
        switch(message) {
            
            case "Hello": {
                res = "Hello client!";
                break;
            }
            case "Bye": {
                res = "bye client";
                break;
            }
            default: {
                res = "Hi";
                break;
            }
        }
        stream.send(res);
    })
});


