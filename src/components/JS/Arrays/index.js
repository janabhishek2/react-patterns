// Throttling...

// Throttling: to make sure a function is called at most 1 time in a duration.

const palette = [
    "#FFADAD",
    "#FFC3A0",
    "#FF677D",
    "#392F5A",
    "#31A2AC",
    "#61C0BF",
    "#6B4226",
    "#D9BF77",
    "#ACD8AA",
    "#FFE156",
    "#6A0572",
    "#AB83A1",
];

const getRandomColorFromPalette = () => {
    const index = Math.floor(Math.random() * palette.length);
    return palette[index];
};

function loadMoreItems() {
    if(document.body.scrollHeight - (window.scrollY + window.innerHeight) < 200) {
        console.log('Loading...');
        const content = document.getElementById("content");
        content.style.height = '100%';
        document.body.style.height = '100%';
    
        for(let i=0 ;i<10; i++) {
            const item = document.createElement("div");
            item.classList.add("item");
            item.style.backgroundColor = getRandomColorFromPalette();
            item.textContent = `Item ${content.childElementCount + 1}`;
    
            content.appendChild(item);
        }
    }
}

let isThrottled = false;
window.addEventListener("scroll", () => {
    // if isThrottled is false then call the loadItems.
    if(!isThrottled) {
        loadMoreItems();
        // after loading set throttle to true and set a timeout to open the throttle
        isThrottled = true;
        setTimeout(() => {
            isThrottled = false;
        }, 1000);
    }
})

loadMoreItems();
