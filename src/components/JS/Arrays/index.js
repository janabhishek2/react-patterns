// getUserMedia

const startStreamButton = document.getElementById("startStreamButton");

startStreamButton.addEventListener("click", async function() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        });
        if(!document.querySelector("video")) {
            const videoElement = document.createElement("video");
            videoElement.setAttribute("height", "100%");
            videoElement.setAttribute("zIndex", 2);
            videoElement.srcObject = stream;
            videoElement.style.margin = "auto";
            videoElement.setAttribute("width", "50%")
            const container = document.getElementsByClassName("container")[0];
            container.appendChild(videoElement);
        }

    } catch(err) {
        console.log(err);
    }
});

const getDevices = async () => {
    try{
        const availableDevices = await navigator.mediaDevices.enumerateDevices();
        console.log(availableDevices);
    } catch(err) {
        console.log(err);
    }
}

getDevices();

