// ── LOAD HEADER & FOOTER ──
async function loadIncludes() {
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');

  if (headerEl) {
    const res = await fetch('header.html');
    const html = await res.text();
    headerEl.innerHTML = html;
  }

  if (footerEl) {
    const res = await fetch('footer.html');
    const html = await res.text();
    footerEl.innerHTML = html;
  }

  initNav();
}

function initNav() {
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

  // ── MOBILE DROPDOWN ──
  const mobileToggle = document.querySelector('.mobile-dropdown-toggle');
  const mobileDropdownParent = document.querySelector('.mobile-has-dropdown');

  if (mobileToggle && mobileDropdownParent) {
    mobileToggle.addEventListener('click', () => {
      mobileDropdownParent.classList.toggle('open');
    });
  }

  // ── DESKTOP DROPDOWN: close on outside click ──
  document.addEventListener('click', (e) => {
    const dropdown = document.querySelector('.has-dropdown');
    if (dropdown && !dropdown.contains(e.target)) {
      dropdown.querySelector('.dropdown').style.pointerEvents = '';
    }
  });

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
}

document.addEventListener('DOMContentLoaded', loadIncludes);
