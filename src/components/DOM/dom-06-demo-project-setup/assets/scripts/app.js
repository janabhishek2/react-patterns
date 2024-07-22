const body = document.body;

const addButton = body.querySelector("header button");
const addModalElement = document.getElementById("add-modal");
const backDropElement = document.body.firstElementChild;
const deleteModalElement = document.getElementById("delete-modal");

const userInputs = addModalElement.querySelectorAll("input");

const cancelButtonAddModal = addModalElement.querySelector(".btn--passive");
const cancelButtonDeleteModal = deleteModalElement.querySelector(".btn--passive");

const toggleBackDrop = () => {
    backDropElement.classList.toggle("visible");
}
// functions
const toggleMovieModal = (e) => {
    addModalElement.classList.toggle("visible");
    toggleBackDrop();
};

const toggleDeleteModal = () => {
    deleteModalElement.classList.toggle("visible");
    toggleBackDrop();
};

const closeDeleteModal = (selectedMovie) => {
    toggleDeleteModal();
};

const openDeleteModal = () => {
    deleteModalElement.classList.add("visible");
    toggleBackDrop();
}

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

let movies = [
    {
        "title": "JS-1",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        "rating": "1"
    },
    {
        "title": "JS-2",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        "rating": "2"
    },
    {
        "title": "JS-3",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        "rating": "3"
    }
];

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

const mainElement = document.body.getElementsByTagName("main")[0];
const noMoviesSection = document.getElementById("entry-text");

const updateUI = () => {
    const doMoviesExist = movies.length > 0 ;
    if(doMoviesExist) {
        noMoviesSection.remove();
        const ulElement = document.getElementById("movie-list");
    
        // clear the ul
        
        const liElementsLength = ulElement.children.length;
        for(let i=0; i<liElementsLength; i++) {
            ulElement.firstChild.remove();
        }
        // render new children
        const ulChilds = movies.map(({ title, imageUrl, rating }) => {
            const liElement = document.createElement("li");
            liElement.className = "movie-element";
            liElement.innerHTML = `
                <div class="movie-element__image">
                    <img src="${imageUrl}" alt="${title}">
                </div>
                <div class="movie-element__info">
                    <h2>${title}</h2>
                    <p>${rating}/5 stars</p>
                </div>
            `;
            liElement.style.cursor = "pointer";
            liElement.addEventListener("mouseover", () => {
                liElement.style.border = "1px solid green";
            });
            liElement.addEventListener("mouseleave", () => {
                liElement.style.border ='';
            })
            liElement.addEventListener("click", (e) => {
                openDeleteModal();
                deleteMovieHandler({e, selectedMovie: title });
            });
            return liElement;
        });
        ulElement.append(...ulChilds);
        return;
    } else {
        // bring the section back;
        mainElement.firstChild.before(noMoviesSection);

        // clear the ul
        const ul = document.getElementById("movie-list");
        for(let child of ul.children) {
            child.remove();
        }
    }
}

const handleMovieDelete = (selectedMovie) => {
    movies = movies.filter(movie => movie.title != selectedMovie.title);
    updateUI();
};

const deleteMovieHandler = ({ e, selectedMovie })=> {
    // show the delete confirmation modal

    // if yes selected then delete the movie and close modal
   
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

    document.getElementById("errorElement")?.remove();

    const movie = {
        title: title.value,
        imageUrl: imageUrl.value,
        rating: rating.value
    };

    movies.push(movie);

    toggleMovieModal();
    clearMovieInputs();
    updateUI();
}

// event listeners..

backDropElement.addEventListener("click", closeMovieModal);

cancelButtonAddModal.addEventListener("click", closeMovieModal);

addButton.addEventListener('click', openMovieModal);

deleteModalElement.querySelector(".btn--danger").addEventListener("click", () => {
    closeDeleteModal(selectedMovie);
    handleMovieDelete(selectedMovie);
});

cancelButtonDeleteModal.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e);
    

    closeDeleteModal(selectedMovie);
});

// apply checks when user clicks on add movie button.

const addMovieButton = cancelButtonAddModal.nextElementSibling;

addMovieButton.addEventListener("click", handleAddMovie);

updateUI();