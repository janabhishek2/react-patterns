const hobbies = ["singing", "dancing"];

// splice: (startindex, elements to delete, new element(s) to insert..)
hobbies.splice(0, 0, "Good food");

const ulElement = document.querySelector("ul");
ulElement.innerHTML = "";

for(let hobby of hobbies) {
    const liChild = document.createElement("li");
    liChild.textContent = hobby;

    ulElement.appendChild(liChild);
};

console.log(ulElement);