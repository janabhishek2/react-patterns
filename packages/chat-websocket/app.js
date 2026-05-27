const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
    console.log("Listening at ", port);
});

app.use(express.static(path.join(__dirname, 'public')));

const io = require('socket.io')(server);
let socketsConnected = new Set();
io.on('connection', onConnected);

function onConnected (socket) {
    socketsConnected.add(socket.id);

    io.emit('clients-total', socketsConnected.size);

    socket.on('disconnect', () => { 
        socketsConnected.delete(socket.id);
        io.emit('clients-total', socketsConnected.size);
    })

    const handleMessageReceive = function(message) {
        // broadcast this message to all sockets
        socket.broadcast.emit('message', message);
    }

    // receive message from any client
    socket.on('message', handleMessageReceive);
}