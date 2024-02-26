const navLinkEls = document.querySelectorAll('.nav-link');
const sectionEls = document.querySelectorAll('section');

let currentSection = 'home';
window.addEventListener('scroll', () => {
    sectionEls.forEach((sectionEl) => {
        if (window.scrollY >= sectionEl.offsetTop - 60) {
            currentSection = sectionEl.id;
        }
    });

    navLinkEls.forEach((navLinkEl) => {
        navLinkEl.classList.remove('actives');
        if (navLinkEl.href.includes(currentSection)) {
            navLinkEl.classList.add('actives');
        }
    });
});
