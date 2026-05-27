const socket = io();

// receive total clients via this event
socket.on('clients-total', (val) => {
    console.log(val);
    const clientTotalDiv = document.getElementsByClassName("clients-total")[0];
    clientTotalDiv.innerText = 'Total Clients ' + val;
})

const nameInput = document.getElementById("name-input");

const msgContainer = document.getElementById("message-container");

const msgForm = document.getElementById("message-form");
const msgInput = document.getElementById("message-input");

msgForm.onsubmit = function(e) {
    e.preventDefault();
    sendMessage();

    // socket.emit('message', data)
}

function sendMessage() {
    const sender = nameInput.value;
    const message = msgInput.value;

    const messageObject = {
        sender,
        message,
        time: new Date()
    };

    const outMsgElement = createMessage(messageObject, "outgoing");
    msgContainer.appendChild(outMsgElement);

    socket.emit('message', messageObject);
}

function createMessage(msg, type) {
const { sender, message, time } = msg;
    // new message li element
    const newMessageElement = document.createElement("li");
    // styles
    if(type == "incoming") {
        newMessageElement.className = "message-left";
    } else {
        newMessageElement.className = "message-right";
    }
   
    // new message P element
    const innerParaElement = document.createElement("p");
    innerParaElement.className = "message";
    
    newMessageElement.appendChild(innerParaElement);

    // Set content of innerParaElement
    innerParaElement.textContent = `${sender} ${message} ${time.toString()}`

    return newMessageElement;
}

const handleIncomingMessage = function(inMessage) {
    const newMessage = createMessage(inMessage, "incoming");
    msgContainer.appendChild(newMessage);
    return true;
}

socket.on('message', handleIncomingMessage)
