// Intersection observer: api which can track when an element gets in and out of the viewport

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        console.log("INTERSECTION OBSERVED !!");
        // entry has properties like isIntersecting which tells if the element is in the viewport/not in the viewport
        const { isIntersecting } = entry;
        if(isIntersecting) {
            console.log("It is visible !");
        } else {
            console.log("It is not visible !");
        }
    })
});

const adElement = document.getElementsByClassName("ad")[0];
observer.observe(adElement);
