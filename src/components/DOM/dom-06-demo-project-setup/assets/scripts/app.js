const body = document.body;

const addButton = body.querySelector("header button");
const addModalElement = document.getElementById("add-modal");
const backDropElement = document.body.firstElementChild;

const toggleMovieModal = (e) => {
    addModalElement.classList.toggle("visible");
    toggleBackDrop();
};

const toggleBackDrop = () => {
    backDropElement.classList.toggle("visible");
}

backDropElement.addEventListener("click", (e) => {
    toggleMovieModal();
});

addButton.addEventListener('click', toggleMovieModal);
