// Toggle switch

const modeSwitch = document.getElementById("switch__mode");

function handleToggle() {
    const current = localStorage.getItem('mode');
    if(!current || current === "light-mode") {
        localStorage.setItem('mode', 'dark-mode');
        renderCorrectUI("dark-mode");
    } else {
        localStorage.setItem('mode', 'light-mode');
        renderCorrectUI("light-mode");
    }
};

function renderCorrectUI(mode) {
    if(mode==='dark-mode'){
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

modeSwitch.addEventListener("click", handleToggle);
renderCorrectUI(localStorage.getItem("mode"));