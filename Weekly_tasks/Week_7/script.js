document.addEventListener('DOMContentLoaded', function() {
    const themeDropdown = document.getElementById('theme-dropdown');
    const bgColorInput = document.getElementById('bg-color');
    const textColorInput = document.getElementById('text-color');
    const customThemeBtn = document.getElementById('apply-custom-theme');
    const increaseFontBtn = document.getElementById('increase-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    const underlineLinksBtn = document.getElementById('underline-links');
    const contrastBtn = document.getElementById('toggle-contrast');

    themeDropdown.addEventListener('change', function() {
        document.body.className = this.value + '-theme';
    });

    customThemeBtn.addEventListener('click', function() {
        document.body.style.backgroundColor = bgColorInput.value;
        document.body.style.color = textColorInput.value;
        document.body.className = ''; // Remove any existing theme classes
    });

    increaseFontBtn.addEventListener('click', function() {
        document.body.style.fontSize = 'larger';
    });

    decreaseFontBtn.addEventListener('click', function() {
        document.body.style.fontSize = 'smaller';
    });

    underlineLinksBtn.addEventListener('click', function() {
        const links = document.querySelectorAll('a');
        links.forEach(link => link.style.textDecoration = 'underline');
    });

    contrastBtn.addEventListener('click', function() {
        document.body.classList.toggle('high-contrast');
    });
});
