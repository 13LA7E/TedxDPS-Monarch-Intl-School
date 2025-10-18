// Mobile Navigation Toggle with Hamburger Menu
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('nav');
  const navOverlay = document.querySelector('.nav-overlay');
  const navLinks = document.querySelectorAll('nav a');

  // Toggle menu function
  function toggleMenu() {
    menuBtn.classList.toggle('active');
    nav.classList.toggle('active');
    if (navOverlay) {
      navOverlay.classList.toggle('active');
    }
    
    // Prevent body scroll when menu is open
    if (nav.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  // Close menu function
  function closeMenu() {
    menuBtn.classList.remove('active');
    nav.classList.remove('active');
    if (navOverlay) {
      navOverlay.classList.remove('active');
    }
    document.body.style.overflow = '';
  }

  // Toggle on hamburger click
  if (menuBtn) {
    menuBtn.addEventListener('click', toggleMenu);
  }

  // Close on overlay click
  if (navOverlay) {
    navOverlay.addEventListener('click', closeMenu);
  }

  // Close menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
      closeMenu();
    }
  });

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
