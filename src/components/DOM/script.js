const button = document.querySelector("button");
const section = document.querySelector("section");

button.addEventListener("click", () => {
    const sectionClasses = section.className;
    if(sectionClasses.includes("invisible")) {
        section.className = 'red-bg visible';
    } else {
        section.className = 'red-bg invisible';
    }
})