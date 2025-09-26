// Function to load Google Fonts dynamically
function loadGoogleFonts() {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Georgia&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
}

// Call the function to load fonts when the script runs
loadGoogleFonts();

// Basic interactivity (e.g., smooth scrolling)
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        // Handle the special case for the anchor within the #about section
        const selector = targetId === '#about-birdie-anchor' ? targetId : targetId.startsWith('#') ? targetId : `#${targetId}`;
        const targetElement = document.querySelector(selector);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// You can add more interactive features here as needed.
// For example, a simple "read more" toggle for book descriptions,
// or a modal for book details.