// Geolocation

const geolocation = navigator.geolocation;

const getLocationButton = document.getElementById("getlocation");
const locationDisplay = document.getElementById("locationDisplay");

getLocationButton.addEventListener("click", function() {
    if(navigator.geolocation) {
        // getCurrentPosition is the api used to fetch the user permission
        navigator.geolocation.getCurrentPosition(function(position) {
            const { latitude, longitude } = position.coords;
            locationDisplay.textContent = `Latitude is ${latitude} and longitude is ${longitude}`;
        }, function(err) {
            locationDisplay.textContent = `Error: ${err.message}`;
        })
    }
});
