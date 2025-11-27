// ========================================
// FADE & SLIDE TEXT ANIMATION
// ========================================
const typingText = document.getElementById('typingText');
const phrases = [
    'Building the Future, One Line at a Time',
    'Full-Stack Developer',
    'AI & ML Enthusiast',
    'Cloud Computing Explorer'
];

let phraseIndex = 0;

function fadeSlideEffect() {
    // Fade out and slide up
    typingText.style.opacity = '0';
    typingText.style.transform = 'translateY(-20px)';

    setTimeout(() => {
        // Change text
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingText.textContent = phrases[phraseIndex];

        // Reset position for slide up from bottom
        typingText.style.transform = 'translateY(20px)';

        // Fade in and slide to original position
        setTimeout(() => {
            typingText.style.opacity = '1';
            typingText.style.transform = 'translateY(0)';
        }, 50);
    }, 500);
}

// Start animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    typingText.textContent = phrases[0];
    typingText.style.opacity = '1';
    typingText.style.transform = 'translateY(0)';

    // Change phrase every 3 seconds
    setInterval(fadeSlideEffect, 3000);
});

// ========================================
// SCROLL ANIMATIONS
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ========================================
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            // Update active nav link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// ========================================
// ACTIVE NAVIGATION ON SCROLL
// ========================================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// ========================================
// INITIALIZE ANIMATIONS ON PAGE LOAD
// ========================================
window.addEventListener('load', () => {
    // Trigger fade-in animations for hero section
    setTimeout(() => {
        document.querySelectorAll('.hero .fade-in').forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('visible');
            }, index * 200);
        });
    }, 300);
});

// ========================================
// PORTFOLIO TAB SWITCHING - PHASE 3
// ========================================
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to clicked button
        button.classList.add('active');

        // Show corresponding content
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');

        // Reset to project grid view when switching tabs
        if (tabId === 'projects') {
            hideProjectDetail();
        }

        // Trigger fade-in animations for the active tab content
        setTimeout(() => {
            document.querySelectorAll(`#${tabId} .fade-in`).forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('visible');
                }, index * 100);
            });
        }, 100);
    });
});

// ========================================
// PROJECT DETAIL VIEW NAVIGATION
// ========================================
function showProjectDetail(projectId) {
    // Hide the projects grid
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.style.display = 'none';

    // Show the specific project detail
    const detailView = document.getElementById(projectId + '-detail');
    detailView.classList.add('active');
}

function hideProjectDetail() {
    // Hide all detail views
    document.querySelectorAll('.project-detail-view').forEach(view => {
        view.classList.remove('active');
    });

    // Show the projects grid
    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        projectsGrid.style.display = 'grid';
    }
}

// ========================================
// VIEW CERTIFICATIONS FUNCTION - PHASE 7
// ========================================
function viewCertifications() {
    // Navigate to portfolio section
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Wait for scroll, then switch to certificates tab
    setTimeout(() => {
        // Click the certificates tab button
        const certTab = document.querySelector('[data-tab="certificates"]');
        if (certTab) {
            certTab.click();
        }
    }, 800);
}