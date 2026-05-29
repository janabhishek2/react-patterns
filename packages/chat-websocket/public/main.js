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

    const outMsgElement = document.createElement("div");
    outMsgElement.innerHTML = createMessage(messageObject, "outgoing");
    msgContainer.appendChild(outMsgElement.firstChild);

    socket.emit('message', messageObject);
}

function createMessage(msg, type) {
const { sender, message, time } = msg;
    return `<li class=${type === "incoming" ? "message-left" : "message-right"}>
          <p class="message">
            ${sender}
            <span>${message} ● ${time.toString()}</span>
          </p>
    </li>`;
}

const handleIncomingMessage = function(inMessage) {
    const newMessage = document.createElement("div");
    newMessage.innerHTML = createMessage(inMessage, "incoming");
    msgContainer.appendChild(newMessage.firstChild);
    return true;
}

socket.on('message', handleIncomingMessage)
