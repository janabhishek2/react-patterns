import _ from "lodash";

const items = ["apples", "oranges", "bananas"];

document.getElementById("btnElement").addEventListener("click", () => {
    const h1Element = document.getElementById("welcomeText");
    h1Element.textContent = "Text content change";

    const ulElement = document.getElementById("foodItems");
    _.forEach(items, (item) => {
        const liElement = document.createElement("li");
        liElement.textContent = item;
        ulElement.appendChild(liElement);
    });
});
