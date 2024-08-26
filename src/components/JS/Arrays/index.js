// Intersection observer: api which can track when an element gets in and out of the viewport

let adVisibleStartTime = undefined;
let adVisibleTimes = [];
let observer = null;

(() => {
    let start = 0;
    observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            const { isIntersecting } = entry;
            if(isIntersecting) {
                start = Date.now();
            } else if(start) {
                const viewedTime = Date.now() - start;
                adVisibleTimes.push(viewedTime);
            }
        });
        console.log(adVisibleTimes);
    }, {
        threshold: 0.5
    });
})()

const ad = document.querySelector(".ad");
observer.observe(ad);

