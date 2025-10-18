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

  // Form validation (registration form)
  const applyForm = document.getElementById('applyForm');
  if (applyForm) {
    applyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const affiliation = document.getElementById('affiliation')?.value;
      const guests = document.getElementById('guests')?.value;

      if (!name || !email) {
        alert('Please fill all required fields.');
        return;
      }

      if (affiliation && !affiliation) {
        alert('Please select your affiliation.');
        return;
      }

      if (guests && (guests < 1 || guests > 5)) {
        alert('Number of attendees must be between 1 and 5.');
        return;
      }

      // In production, send to your backend/Formspree
      alert('Registration successful! Check your email for confirmation. (Demo mode)');
      applyForm.reset();
    });
  }
});
