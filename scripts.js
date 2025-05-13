document.addEventListener("DOMContentLoaded", function () {
    AOS.init();
});

const btn = document.querySelector('.contact-btn');
const modal = document.querySelector('.contact-modal');
const exitBtn = document.querySelector('.exit-form');

// Open modal
btn.addEventListener('click', function() {
    modal.style.display = 'block';
});

// Close modal via exit button
exitBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close modal by clicking outside the modal content
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
    }
});
