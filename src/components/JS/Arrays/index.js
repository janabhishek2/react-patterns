// Geolocation

const geolocation = navigator.geolocation;

const getLocationButton = document.getElementById("getlocation");
const locationDisplay = document.getElementById("locationDisplay");

getLocationButton.addEventListener("click", function() {
    if(navigator.geolocation) {
        // watchPosition calls the callback when the sensor data is updated in browser.
        navigator.geolocation.watchPosition(function(position) {
            const { latitude, longitude } = position.coords;
            locationDisplay.textContent = `Latitude is ${latitude} and longitude is ${longitude}`;
        }, function(err) {
            locationDisplay.textContent = `Error: ${err.message}`;
        })
    }
});
