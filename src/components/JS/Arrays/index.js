// Intersection observer: api which can track when an element gets in and out of the viewport

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        const percentage = Math.round(entry.intersectionRatio * 100, 2);
        if(entry.isIntersecting) {
            console.log(`${percentage}% of the ad is visible !`);
        } else {
            console.log('Ad is not visible!');
        }
    })
}, {
    // This property triggers the above callback when % of the element is visible.
    threshold: [0, 0.25, 0.5, 0.75, 1]
});

const adElement = document.getElementsByClassName("ad")[0];
observer.observe(adElement);
