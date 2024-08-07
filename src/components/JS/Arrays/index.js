// Timers...

function showNotification(message, duration) {
    const alertMessage = document.createElement("div");
    alertMessage.classList.add('notification');
    alertMessage.textContent = message;
    document.body.insertAdjacentElement("beforebegin", alertMessage);

    function removeNotification() {
        alertMessage.remove();
    };

    setTimeout(() => {
        removeNotification();
    }, duration);
}

showNotification("Hello there !! ", 3000);
