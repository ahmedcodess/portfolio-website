// Mobile nav
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll + close mobile menu
document.querySelectorAll('.nav-links a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    navLinks?.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

// Reveal-on-scroll
const revealEls = document.querySelectorAll('.reveal, .card');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// Theme toggle (persisted)
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme) document.documentElement.dataset.theme = savedTheme;
const setIcon = () => themeToggle && (themeToggle.textContent =
  document.documentElement.dataset.theme === 'dark' ? '☾' : '☀︎');
setIcon();
themeToggle?.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('theme', next);
  setIcon();
});