document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const menuIcon = document.getElementById('menu-icon');

    if (mobileMenuBtn && navMenu && menuIcon) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Change Icon
            if (navMenu.classList.contains('active')) {
                menuIcon.className = 'fa-solid fa-xmark';
            } else {
                menuIcon.className = 'fa-solid fa-bars';
            }
        });

        // Close Menu when clicking Nav Link (For better UX on mobile)
        const navLinks = document.querySelectorAll('.nav-item a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuIcon.className = 'fa-solid fa-bars';
            });
        });
    }

    // 2. Sticky Header scroll styling
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // 3. Tab switching logic for Philosophy section
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');

            // Remove active classes
            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active classes
            btn.classList.add('active');
            const targetEl = document.getElementById(targetTab);
            if (targetEl) {
                targetEl.classList.add('active');
            }
        });
    });

    // 4. Scroll Animation Observer
    const animateElements = document.querySelectorAll('.animate-on-scroll, .section-header');
    
    const observerOptions = {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animateElements.forEach(el => {
        observer.observe(el);
    });
});
