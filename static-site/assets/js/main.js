// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  const navOverlay = document.querySelector('.nav-overlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

  function toggleMenu() {
    menuBtn.classList.toggle('active');
    mobileNav.classList.toggle('active');
    navOverlay.classList.toggle('active');
    document.body.style.overflow = menuBtn.classList.contains('active') ? 'hidden' : '';
  }

  function closeMenu() {
    menuBtn.classList.remove('active');
    mobileNav.classList.remove('active');
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', toggleMenu);
  }

  if (navOverlay) {
    navOverlay.addEventListener('click', closeMenu);
  }

  // Close menu when clicking a link
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Highlight active page in navigation
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a, .mobile-nav a').forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || 
        (currentPage === 'index.html' && linkPage === '/') ||
        (currentPage === '' && linkPage === '/')) {
      link.classList.add('active');
    }
  });
});

// Countdown Timer
function initCountdown() {
  const countdownContainer = document.getElementById('countdown');
  if (!countdownContainer) return;

  const countdownDate = new Date('December 13, 2025 15:00:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
      countdownContainer.innerHTML = `
        <div class="countdown-item">
          <span class="countdown-number">00</span>
          <span class="countdown-label">Days</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-number">00</span>
          <span class="countdown-label">Hours</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-number">00</span>
          <span class="countdown-label">Minutes</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-number">00</span>
          <span class="countdown-label">Seconds</span>
        </div>
      `;
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownContainer.innerHTML = `
      <div class="countdown-item">
        <span class="countdown-number">${String(days).padStart(2, '0')}</span>
        <span class="countdown-label">Days</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-number">${String(hours).padStart(2, '0')}</span>
        <span class="countdown-label">Hours</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-number">${String(minutes).padStart(2, '0')}</span>
        <span class="countdown-label">Minutes</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-number">${String(seconds).padStart(2, '0')}</span>
        <span class="countdown-label">Seconds</span>
      </div>
    `;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// Initialize countdown when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCountdown);
} else {
  initCountdown();
}
