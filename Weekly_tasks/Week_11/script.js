
// script.js
// Initial animations as before
anime({
    targets: '#main-heading',
    translateX: 250,
    duration: 800,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine'
});

anime({
    targets: '#description',
    opacity: [0, 1],
    duration: 2000,
    easing: 'linear'
});

// Button click animation
document.getElementById('trigger-animation').addEventListener('click', function() {
    anime({
        targets: '.box',
        translateX: 250,
        rotate: '1turn',
        backgroundColor: '#3f51b5',
        duration: 2000,
        loop: true
    });
});

// Hover animations
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('mouseover', function() {
        anime({
            targets: box,
            scale: 1.5,
            easing: 'easeInOutQuad'
        });
    });

    box.addEventListener('mouseout', function() {
        anime({
            targets: box,
            scale: 1,
            easing: 'easeInOutQuad'
        });
    });
});
