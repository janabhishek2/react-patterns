// Timers...

function showNotification(message, duration) {
    const alertMessage = document.createElement("div");
    alertMessage.style.margin = "auto";
    alertMessage.style.width = "60%";
    alertMessage.style.padding = "12px";
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
