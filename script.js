// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// Apply Saved Theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
}

// Animated Progress Bars
document.querySelectorAll('.progress').forEach((progress) => {
    const value = progress.getAttribute('data-value');
    progress.style.background = `conic-gradient(#333 0% ${value}%, #ddd ${value}% 100%)`;
});
