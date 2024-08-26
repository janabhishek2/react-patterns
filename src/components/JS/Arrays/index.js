// Intersection observer: api which can track when an element gets in and out of the viewport

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        const { isIntersecting } = entry;
        const { id } = entry.target;
        if(isIntersecting) {
            console.log(`${id} ad is visible!`);
        } else {
            console.log(`${id} ad is not visible`);
        }
    });
}, {
    threshold: 0.5
});

const divs = document.querySelectorAll(".ad");
divs.forEach(function(div) {
    observer.observe(div);
});
