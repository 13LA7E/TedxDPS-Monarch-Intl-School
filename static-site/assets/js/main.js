// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('mobileMenuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavOverlay = document.getElementById('mobileNavOverlay');
  const closeMobileNav = document.getElementById('closeMobileNav');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav a:not(.mobile-dropdown-toggle)');

  function openMenu() {
    if (mobileNav) mobileNav.classList.add('active');
    if (mobileNavOverlay) mobileNavOverlay.classList.add('active');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (mobileNav) mobileNav.classList.remove('active');
    if (mobileNavOverlay) mobileNavOverlay.classList.remove('active');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', openMenu);
  }

  if (closeMobileNav) {
    closeMobileNav.addEventListener('click', closeMenu);
  }

  if (mobileNavOverlay) {
    mobileNavOverlay.addEventListener('click', closeMenu);
  }

  // Close menu when clicking a link (not dropdown toggle)
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileNav && mobileNav.classList.contains('active')) {
      closeMenu();
    }
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

// Mobile Dropdown Toggle Function
function toggleMobileDropdown(event) {
  event.preventDefault();
  const toggle = event.currentTarget;
  const dropdownMenu = toggle.nextElementSibling;
  
  // Toggle the open class
  toggle.classList.toggle('open');
  if (dropdownMenu) {
    dropdownMenu.classList.toggle('open');
  }
}

// Countdown Timer - Optimized to reduce DOM thrashing
function initCountdown() {
  const countdownContainer = document.getElementById('countdown');
  if (!countdownContainer) return;

  const countdownDate = new Date('December 13, 2025 15:00:00').getTime();
  
  // Create elements once, then just update text content
  const daysEl = document.createElement('div');
  const hoursEl = document.createElement('div');
  const minsEl = document.createElement('div');
  const secsEl = document.createElement('div');
  
  [daysEl, hoursEl, minsEl, secsEl].forEach((el, i) => {
    el.className = 'countdown-item';
    el.innerHTML = `<span class="countdown-number">00</span><span class="countdown-label">${['Days', 'Hours', 'Minutes', 'Seconds'][i]}</span>`;
  });
  
  countdownContainer.innerHTML = '';
  countdownContainer.appendChild(daysEl);
  countdownContainer.appendChild(hoursEl);
  countdownContainer.appendChild(minsEl);
  countdownContainer.appendChild(secsEl);
  
  const daysNum = daysEl.querySelector('.countdown-number');
  const hoursNum = hoursEl.querySelector('.countdown-number');
  const minsNum = minsEl.querySelector('.countdown-number');
  const secsNum = secsEl.querySelector('.countdown-number');

  function updateCountdown() {
    const now = Date.now();
    const distance = countdownDate - now;

    if (distance < 0) {
      daysNum.textContent = '00';
      hoursNum.textContent = '00';
      minsNum.textContent = '00';
      secsNum.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysNum.textContent = String(days).padStart(2, '0');
    hoursNum.textContent = String(hours).padStart(2, '0');
    minsNum.textContent = String(minutes).padStart(2, '0');
    secsNum.textContent = String(seconds).padStart(2, '0');
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
