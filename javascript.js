// Scroll smoothly to section when clicking on the navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.querySelector(event.target.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
