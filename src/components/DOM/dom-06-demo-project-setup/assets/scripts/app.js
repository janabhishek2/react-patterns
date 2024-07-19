const body = document.body;

const addButton = body.querySelector("header button");
const addModalElement = document.getElementById("add-modal");
const backDropElement = document.getElementById("backdrop");

const toggleMovieModal = () => {
    addModalElement.classList.toggle("visible");
    backDropElement.classList.toggle("visible");
};

addButton.addEventListener('click', toggleMovieModal);
