// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-times');
    } else {
        icon.classList.replace('fa-times', 'fa-bars');
    }
});

navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.querySelector('i').classList.replace('fa-times', 'fa-bars');
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});


// =============================================
// Scroll-In Animations (Intersection Observer)
// =============================================
const animateElements = document.querySelectorAll('.animate-on-scroll');

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, { root: null, rootMargin: '0px', threshold: 0.12 });

animateElements.forEach(el => scrollObserver.observe(el));


// =============================================
// Skill Progress Bar Animation on Scroll
// =============================================
const progressFills = document.querySelectorAll('.skill-progress-fill');

const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fill = entry.target;
            const targetWidth = fill.style.width; // already set inline
            fill.style.width = '0'; // reset
            // Small delay before animating for a polished feel
            setTimeout(() => {
                fill.style.width = targetWidth;
            }, 100);
            progressObserver.unobserve(fill);
        }
    });
}, { threshold: 0.3 });

progressFills.forEach(bar => {
    // Store width, reset to 0 to prepare for animation
    bar.dataset.target = bar.style.width;
    bar.style.width = '0';
    progressObserver.observe(bar);
});


// =============================================
// Skills Filter Tab Logic
// =============================================
const filterBtns = document.querySelectorAll('#skillsFilter .filter-btn');
const skillCards = document.querySelectorAll('.skill-adv-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        skillCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// =============================================
// Projects Filter Tab Logic
// =============================================
const projFilterBtns = document.querySelectorAll('#projectFilter .filter-btn');
const projCards = document.querySelectorAll('.proj-card');

projFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        projFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        projCards.forEach(card => {
            const categories = card.dataset.category || '';
            if (filter === 'all' || categories.includes(filter)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// =============================================
// Resume Filter Tab Logic
// =============================================
const resumeBtns = document.querySelectorAll('#resumeFilter .filter-btn');
const resumeLists = document.querySelectorAll('.resume-list');

resumeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active from all buttons
        resumeBtns.forEach(b => b.classList.remove('active'));
        // Add active to clicked button
        btn.classList.add('active');
        
        const targetId = btn.dataset.filter;
        
        // Hide all lists, show target list
        resumeLists.forEach(list => {
            if(list.id === targetId) {
                list.classList.remove('hidden');
            } else {
                list.classList.add('hidden');
            }
        });
    });
});


// =============================================
// Contact Form Submit Handler
// =============================================
function handleFormSubmit(event) {
    event.preventDefault();
    const btn = event.target.querySelector('.btn-send');
    const originalText = btn.innerHTML;

    // Visual success feedback
    btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
    btn.style.background = 'linear-gradient(135deg, #00e5b0, #39d353)';
    btn.disabled = true;

    // Reset after 3 seconds
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        btn.disabled = false;
        event.target.reset();
    }, 3000);
}
