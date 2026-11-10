// Custom Cursor
const dot = document.getElementById('cursor-dot');
const outline = document.getElementById('cursor-outline');
document.addEventListener('mousemove', (e) => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    setTimeout(() => {
        outline.style.left = e.clientX + 'px';
        outline.style.top = e.clientY + 'px';
    }, 50);
});

// Scroll Reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
