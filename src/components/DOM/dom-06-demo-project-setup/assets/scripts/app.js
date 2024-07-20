const body = document.body;

const addButton = body.querySelector("header button");
const addModalElement = document.getElementById("add-modal");
const backDropElement = document.body.firstElementChild;

const userInputs = addModalElement.querySelectorAll("input");

const cancelButtonAddModal = addModalElement.querySelector(".btn--passive");

const toggleBackDrop = () => {
    backDropElement.classList.toggle("visible");
}
// functions
const toggleMovieModal = (e) => {
    addModalElement.classList.toggle("visible");
    toggleBackDrop();
};

const clearMovieInputs = () => {
    for(const input of userInputs) {
        input.value = '';
    }
    return;
};

const closeMovieModal = () => {
    toggleMovieModal();
    clearMovieInputs();
}

const openMovieModal = () => {
    toggleMovieModal();
}

const isEmpty = (str) => {
    return str.length === 0;
}

const movies = [];

const validate = (...arguments) => {
    let hasError = false;

    arguments.forEach((arg, index) => {
        if(arg.value.trim().length === 0 || (index ===2 && (+arg.value.trim() < 0 ||  +arg.value.trim() > 5))) {
            hasError = true;
            arg.classList.add("error");
        } else {
            arg.classList.remove("error");
        }
    });
    
    return hasError;
}

const handleAddMovie = () => {

    const modalBody = document.getElementsByClassName("modal__content")[0];

    const title = modalBody.querySelector("#title");
    const imageUrl = modalBody.querySelector("#image-url");
    const rating = modalBody.querySelector("#rating");

    const hasError = validate(title, imageUrl, rating);

    const errorElement = document.createElement("div");
    if(hasError && !document.getElementById("errorElement")) {
        errorElement.style.color = "red";
        errorElement.style.fontWeight = 400;
        errorElement.style.textAlign = "center";
        errorElement.style.marginTop = "1rem";
        errorElement.id = "errorElement";
        errorElement.textContent = "There is an error";
        modalBody.append(errorElement);
        return;
    }

    document.getElementById("errorElement").remove();

    const movie = {
        title: title.value,
        imageUrl: imageUrl.value,
        rating: rating.value
    };

    movies.push(movie);

    console.log(movies);

    toggleMovieModal();
    clearMovieInputs();
}

// event listeners..

backDropElement.addEventListener("click", closeMovieModal);

cancelButtonAddModal.addEventListener("click", closeMovieModal);

addButton.addEventListener('click', openMovieModal);

// apply checks when user clicks on add movie button.

const addMovieButton = cancelButtonAddModal.nextElementSibling;

addMovieButton.addEventListener("click", handleAddMovie);
