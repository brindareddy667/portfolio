// Open Modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
    // Prevent scrolling on the main body when modal is open
    document.body.style.overflow = "hidden";
}

// Close Modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
    // Restore scrolling
    document.body.style.overflow = "auto";
}

// Close Modal if user clicks outside the content box
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// Optional: Hamburger Menu Toggle for Mobile
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

if (burger) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
        // Animate Links (Optional polish)
        nav.querySelectorAll('li').forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
}