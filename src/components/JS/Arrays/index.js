// Lazy load images

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(async function(entry) {
        if(entry.isIntersecting) {
            try{
                const response = await fetch('https://loremflickr.com/200/200');
                entry.target.src = response.url;
                observer.unobserve(entry.target);
            }
            catch(e){ 
                console.log(e);
            }
        }
    });
}, {
    threshold: 0.5
});

const images = document.querySelectorAll("img.lazy");
for(let image of images) {
    observer.observe(image);
}