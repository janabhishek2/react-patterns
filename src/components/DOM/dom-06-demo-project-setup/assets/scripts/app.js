const body = document.body;

const addButton = body.querySelector("header button");
const addModalElement = document.getElementById("add-modal");
const backDropElement = document.body.firstElementChild;

const cancelButtonAddModal = addModalElement.querySelector(".btn--passive");

const toggleMovieModal = (e) => {
    addModalElement.classList.toggle("visible");
    toggleBackDrop();
};

const toggleBackDrop = () => {
    backDropElement.classList.toggle("visible");
}

backDropElement.addEventListener("click", toggleMovieModal);

cancelButtonAddModal.addEventListener("click", toggleMovieModal);

addButton.addEventListener('click', toggleMovieModal);
