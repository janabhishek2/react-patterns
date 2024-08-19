const searchElement = document.getElementById("searchInput");
const searchKey = "search";

searchElement.addEventListener("input", (e) => {
    sessionStorage.setItem(searchKey, e.target.value);
});

const populateSearch = function() {
    searchElement.value = sessionStorage.getItem(searchKey) ?? "";
}

populateSearch();