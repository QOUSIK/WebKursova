
function animateOnScroll() {
    const aboutSection = document.querySelector('.about-section');
    if (!aboutSection) return; 
    
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        aboutSection.classList.add('animated');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // const aboutSection = document.querySelector('.about-section');
    // aboutSection.style.opacity = '0';
    // aboutSection.style.transform = 'translateY(50px)';
    // aboutSection.style.transition = 'all 0.8s ease';
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});