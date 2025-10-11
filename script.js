/* Year stamp (optional) */
document.getElementById('year').textContent = new Date().getFullYear();

/* Theme toggle (light is default; remembers choice) */
(function () {
  const root = document.documentElement;  // <html>
  const btn  = document.getElementById('theme-toggle');

  // Apply saved choice if present
  const saved = localStorage.getItem('theme'); // 'light' | 'dark' | null
  if (saved === 'dark' || saved === 'light') {
    root.setAttribute('data-theme', saved);
  }

  // Update button text to show next mode
  function updateButtonText() {
    const isDark = root.getAttribute('data-theme') === 'dark';
    btn.textContent = isDark ? '☀️ Light' : '🌙 Dark';
    btn.setAttribute('aria-pressed', String(isDark));
  }

  if (btn) updateButtonText();

  // Toggle + persist
  btn?.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateButtonText();
  });
})();