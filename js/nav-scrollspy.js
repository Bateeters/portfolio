const navLinks = Array.from(document.querySelectorAll('.section-nav-link, .mobile-section-nav-link'));
const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);
const mobileMenuEl = document.getElementById('mobileSectionNavMenu');

function setActiveLink(sectionId) {
    navLinks.forEach((link) => {
        const isMatch = link.getAttribute('href') === `#${sectionId}`;
        link.classList.toggle('is-active', isMatch);
        link.classList.toggle('active', isMatch);
        if (isMatch) {
            link.setAttribute('aria-current', 'true');
        } else {
            link.removeAttribute('aria-current');
        }
    });
}

function getCurrentSection() {
    const offset = window.innerHeight * 0.35;

    let current = sections[0];
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= offset) {
            current = section;
        }
    });

    return current;
}

function updateActiveNav() {
    const currentSection = getCurrentSection();
    if (currentSection?.id) {
        setActiveLink(currentSection.id);
    }
}

updateActiveNav();
window.addEventListener('scroll', updateActiveNav, { passive: true });
window.addEventListener('resize', updateActiveNav);

if (mobileMenuEl) {
    const mobileCollapse = new bootstrap.Collapse(mobileMenuEl, { toggle: false });
    document.querySelectorAll('.mobile-section-nav-link').forEach((link) => {
        link.addEventListener('click', () => {
            if (mobileMenuEl.classList.contains('show')) {
                mobileCollapse.hide();
            }
        });
    });
}
