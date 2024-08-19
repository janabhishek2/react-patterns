// SessionStorage

// Session storage persists data for the session. ( per tab basis )
// localStorage persist data for session/tabs/windows and binds it to the domain and protocol.
// sessionStorage has same api as localStorage, same size as localStorage ... approx 5MB

// Example: show alert banner only once in a session/tab

const SHOW_ALERT_KEY = 'SHOW_ALERT_KEY'
const showAlert = function() {
    // this message shows only once when user opens the tab once.
    if(!sessionStorage.getItem(SHOW_ALERT_KEY)) {
        alert("We are shutting down the website!!");
    }
    sessionStorage.setItem(SHOW_ALERT_KEY, "true");
}

showAlert();