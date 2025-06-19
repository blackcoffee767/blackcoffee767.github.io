// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Initialize theme
const currentTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', currentTheme);
updateToggleIcon();

// Toggle theme
themeToggle.addEventListener('click', () => {
  const newTheme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateToggleIcon();
});

function updateToggleIcon() {
  themeToggle.textContent = body.getAttribute('data-theme') === 'dark' ? '🌞' : '🌓';
}

// Set active nav link
document.querySelectorAll('.nav-links a').forEach(link => {
  if(link.href === window.location.href) {
    link.classList.add('active');
  }
});
