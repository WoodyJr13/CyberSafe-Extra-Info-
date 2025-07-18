document.addEventListener('DOMContentLoaded', function() {

    // 1. Header scroll effect (remains on all pages)
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Scenario Game Logic has been moved to scenarios.html
});
