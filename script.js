// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Form validation
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = contactForm.querySelector('[name="name"]');
        const email = contactForm.querySelector('[name="email"]');
        const message = contactForm.querySelector('[name="message"]');

        // Perform form validation here (you can use a library like "validator.js")

        // If validation is successful, you can submit the form using AJAX or a server-side script
    });

    // Achievement image rotation
    const achievementBoxes = document.querySelectorAll('.achievement-box');

    let currentIndex = 0;
    setInterval(() => {
        achievementBoxes[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % achievementBoxes.length;
        achievementBoxes[currentIndex].classList.add('active');
    }, 3000); // Change image every 5 seconds (adjust as needed)
});
