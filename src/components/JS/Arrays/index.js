// Intersection observer: api which can track when an element gets in and out of the viewport

let adVisibleStartTime = undefined;
let adVisibleTimes = [];

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        const { isIntersecting } = entry;
        if(isIntersecting) {
            adVisibleStartTime = Date.now();
        } else if(adVisibleStartTime) {
            const viewedTime = Date.now() - adVisibleStartTime;
            adVisibleTimes.push(viewedTime);
            adVisibleStartTime = undefined;  
        }
        console.log(adVisibleTimes);

    })
}, {
    threshold: 0.5
});

const ad = document.querySelector(".ad");
observer.observe(ad);

