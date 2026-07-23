'use strict';

/* Mobile nav toggle */
const navToggle = document.querySelector('[data-nav-toggle]');
const navLinksBox = document.querySelector('[data-nav-links]');

if (navToggle) {
  navToggle.addEventListener('click', function () {
    navLinksBox.classList.toggle('open');
  });
}

/* Close mobile menu after clicking a link */
const navLinks = document.querySelectorAll('[data-nav-link]');
navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    navLinksBox.classList.remove('open');
  });
});

/* Scroll-spy: highlight active section link while scrolling */
const sections = document.querySelectorAll('main section[id], main article[id]');

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(function (link) {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
);

sections.forEach(function (section) {
  observer.observe(section);
});
