// Initialize IntersectionObserver
let observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
};

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            // Trigger animation or style changes
            entry.target.style.transform = 'translateX(0px)';
        }
    });
}, observerOptions);

document.querySelectorAll('.story-part').forEach((section) => {
    observer.observe(section); // Observe each story part
});

// Function to scroll to specific part of the story
function scrollToPart(partId) {
    document.getElementById(partId).scrollIntoView({behavior: "smooth", inline: "start"});
}

// Implement horizontal scrolling
document.getElementById('storyContainer').addEventListener('wheel', (e) => {
    e.preventDefault();
    window.scrollBy({ left: e.deltaY > 0 ? 100 : -100, behavior: 'smooth' });
});
