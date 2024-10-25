// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Play button interaction (if video is included)
document.querySelector('.play-btn').addEventListener('click', function() {
    alert('Play video functionality can be added here.');
});
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in, .fade-up');
    const windowHeight = window.innerHeight;

    elements.forEach(function(element) {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 150) {
            element.classList.add('visible');
        }
    });
});
/// Scroll-triggered Animation for Portfolio Items
const portfolioItems = document.querySelectorAll('.portfolio-item');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 1.2; // Trigger point for animation
    
    portfolioItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top; // Get position of the item
        
        if (itemTop < triggerBottom) {
            item.style.opacity = '1'; // Make the item visible
            item.style.visibility = 'visible'; // Ensure visibility
            item.style.transform = 'translateY(0)'; // Reset the transform
        }
    });
});


