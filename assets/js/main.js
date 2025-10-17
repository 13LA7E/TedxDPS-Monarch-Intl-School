// Mobile menu and form validation
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('nav ul');

  // Toggle mobile menu
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      const isVisible = nav.style.display === 'flex';
      nav.style.display = isVisible ? 'none' : 'flex';
      
      if (window.innerWidth <= 800 && !isVisible) {
        nav.style.flexDirection = 'column';
        nav.style.position = 'fixed';
        nav.style.top = '80px';
        nav.style.left = '50%';
        nav.style.transform = 'translateX(-50%)';
        nav.style.width = 'calc(100% - 32px)';
        nav.style.maxWidth = 'calc(var(--maxw) - 48px)';
        nav.style.background = 'rgba(15, 23, 32, 0.95)';
        nav.style.backdropFilter = 'blur(20px) saturate(180%)';
        nav.style.padding = '16px';
        nav.style.borderRadius = '12px';
        nav.style.border = '1px solid rgba(255, 255, 255, 0.1)';
        nav.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4)';
        nav.style.zIndex = '998';
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 800 && !menuBtn.contains(e.target) && !nav.contains(e.target)) {
        nav.style.display = 'none';
      }
    });
  }

  // Form validation (apply page)
  const applyForm = document.getElementById('applyForm');
  if (applyForm) {
    applyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const topic = document.getElementById('topic').value.trim();

      if (!name || !email || !topic) {
        alert('Please fill all required fields.');
        return;
      }

      // In production, send to your backend/Formspree
      alert('Application submitted! (Demo mode)');
      applyForm.reset();
    });
  }
});
