document.addEventListener('DOMContentLoaded', () => {

  // ── MOBILE MENU ──
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('mobileOverlay');

  if (hamburger && overlay) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      overlay.classList.toggle('open');
      document.body.style.overflow = overlay.classList.contains('open') ? 'hidden' : '';
    });

    overlay.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ── MOBILE SERVICES DROPDOWN ──
  const mobileToggle = document.querySelector('.mobile-dropdown-toggle');
  const mobileDropdownParent = document.querySelector('.mobile-has-dropdown');

  if (mobileToggle && mobileDropdownParent) {
    mobileToggle.addEventListener('click', () => {
      mobileDropdownParent.classList.toggle('open');
    });
  }

  // ── HIDE NAV ON SCROLL DOWN, SHOW ON SCROLL UP ──
  const nav = document.querySelector('nav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    if (current > lastScroll && current > 80) {
      nav.classList.add('nav-hidden');
    } else {
      nav.classList.remove('nav-hidden');
    }
    lastScroll = current;
  }, { passive: true });

  // ── SCROLL REVEAL ──
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => io.observe(el));

});
