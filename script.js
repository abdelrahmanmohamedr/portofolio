// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        const offsetTop = document.querySelector(href).offsetTop - 70;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Responsive Navigation Menu Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close nav menu when a link is clicked (mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Highlight Active Navigation Link on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach((section) => {
        if (
            section.offsetTop - 80 <= scrollPos &&
            section.offsetTop + section.offsetHeight - 80 > scrollPos
        ) {
            navLinks.forEach((link) => {
                link.classList.remove('active');
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Collapsible Sections for Projects and Certifications
const collapsibleHeaders = document.querySelectorAll('.collapsible-header');

collapsibleHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const collapsibleContent = header.nextElementSibling;
        const parent = header.parentElement;

        parent.classList.toggle('open');

        if (parent.classList.contains('open')) {
            collapsibleContent.style.maxHeight = collapsibleContent.scrollHeight + 'px';
            header.querySelector('i:last-child').classList.replace('fa-chevron-down', 'fa-chevron-up');
        } else {
            collapsibleContent.style.maxHeight = 0;
            header.querySelector('i:last-child').classList.replace('fa-chevron-up', 'fa-chevron-down');
        }
    });
});