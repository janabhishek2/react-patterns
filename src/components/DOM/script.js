const listItems = document.getElementsByTagName("li");

for(const listItemEl of listItems) {
    listItemEl.textContent += " (changed)";
    listItemEl.style['backgroundColor'] = "pink";
}
