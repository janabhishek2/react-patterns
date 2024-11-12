import _ from "lodash";
import { add, subtract } from './functions';

console.log(subtract(add(3,4),6));
const items = ["apples", "oranges", "bananas"];

document.getElementById("btnElement").addEventListener("click", () => {
    const h1Element = document.getElementById("welcomeText");
    h1Element.textContent = "Text content changedss";

    const ulElement = document.getElementById("foodItems");
    _.forEach(items, (item) => {
        const liElement = document.createElement("li");
        liElement.textContent = item;
        ulElement.appendChild(liElement);
    });
});
