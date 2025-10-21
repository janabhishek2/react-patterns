const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
        if(entry.isIntersecting) observer.unobserve(entry.target);
    });
}, {
    threshold: 1
});

const lastCardObserver = new IntersectionObserver((entries) => {
    const lastCard = entries[0];
    if(lastCard.isIntersecting) {
        loadMoreCards();
        lastCardObserver.unobserve(lastCard.target);
        lastCardObserver.observe(document.querySelector(".card:last-child"));
    }
});

lastCardObserver.observe(document.querySelector(".card:last-child"));

const loadMoreCards = () => {
    const cardContainer = document.querySelector(".card-container");

    new Array(10).fill(1).forEach((item) => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.textContent = "New Card!";
        observer.observe(cardDiv);
        cardContainer.appendChild(cardDiv);
    })
};

const cards = document.querySelectorAll(".card") ?? [];
cards.forEach((card) => {
    card && observer.observe(card);
});
