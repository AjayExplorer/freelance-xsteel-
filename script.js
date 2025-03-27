// Initialize Lucide icons
lucide.createIcons();

// DOM Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
const materialsGrid = document.getElementById('materialsGrid');
const contactForm = document.getElementById('contactForm');
const currentYear = document.getElementById('currentYear');

// Set current year in footer
currentYear.textContent = new Date().getFullYear();

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.setAttribute('data-lucide', 'x');
    } else {
        icon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
});

// Create material cards
function createMaterialCards() {
    materials.forEach(material => {
        const card = document.createElement('div');
        card.className = 'material-card';
        card.innerHTML = `
            <a href="materials/${material.id}.html" class="material-card-link">
                <img src="${material.image}" alt="${material.title}">
                <div class="material-card-content">
                    <h3>${material.title}</h3>
                    <p>${material.description}</p>
                </div>
            </a>
        `;
        materialsGrid.appendChild(card);
    });
}

// Handle contact form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    contactForm.reset();
    alert('Thank you for your message. We will get back to you soon!');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        }
    });
});

// Initialize material cards
createMaterialCards();