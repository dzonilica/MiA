/* =========================================================
   MiA SKADARLIJA — interactions
   ========================================================= */

(function () {
  'use strict';

  /* ---------- LOADER ---------- */
  const loader = document.getElementById('loader');
  const minLoadTime = 2400; // give the bar time to fill
  const start = performance.now();

  function hideLoader() {
    const elapsed = performance.now() - start;
    const wait = Math.max(0, minLoadTime - elapsed);
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.style.overflow = '';
      // Remove from DOM after fade
      setTimeout(() => loader.remove(), 1000);
    }, wait);
  }

  document.body.style.overflow = 'hidden';

  if (document.readyState === 'complete') {
    hideLoader();
  } else {
    window.addEventListener('load', hideLoader);
    // Fallback in case 'load' is slow because of videos
    setTimeout(hideLoader, 4500);
  }

  /* ---------- NAV: scroll state + mobile toggle ---------- */
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScroll = y;
  });

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
    });
  }

  // Close mobile menu on link click
  document.querySelectorAll('.nav__menu a').forEach((a) => {
    a.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('open');
    });
  });

  /* ---------- SCROLL REVEAL ---------- */
  const targets = [
    '.story__visual', '.story__text',
    '.section-title', '.section-eyebrow',
    '.specialties__intro', '.specialties__footer',
    '.dish',
    '.atm-tile',
    '.visit__info', '.visit__card',
    '.detail',
    '.pillar',
    '.reels__header', '.reels__signature',
  ];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach((sel) => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = `${Math.min(i * 0.05, 0.4)}s`;
      observer.observe(el);
    });
  });

  // Stagger pillars + dishes specifically
  document.querySelectorAll('.story__pillars').forEach((el) => {
    el.classList.add('reveal-stagger');
    observer.observe(el);
  });
  document.querySelectorAll('.specialties__grid').forEach((el) => {
    el.classList.add('reveal-stagger');
    observer.observe(el);
  });
  document.querySelectorAll('.atmosphere__grid').forEach((el) => {
    el.classList.add('reveal-stagger');
    observer.observe(el);
  });
  document.querySelectorAll('.visit__details').forEach((el) => {
    el.classList.add('reveal-stagger');
    observer.observe(el);
  });

  /* ---------- ENSURE VIDEOS PLAY (iOS quirks) ---------- */
  document.querySelectorAll('video').forEach((v) => {
    v.muted = true;
    v.setAttribute('playsinline', '');
    v.setAttribute('webkit-playsinline', '');
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();
    v.addEventListener('canplay', tryPlay);
  });

  // Resume background hero on visibility change
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      document.querySelectorAll('video').forEach((v) => v.play().catch(() => {}));
    }
  });

  /* ---------- SUBTLE PARALLAX ON HERO TITLE ---------- */
  const heroTitle = document.querySelector('.hero__title');
  if (heroTitle && window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        heroTitle.style.transform = `translateY(${y * 0.18}px)`;
        heroTitle.style.opacity = String(1 - y / (window.innerHeight * 0.9));
      }
    }, { passive: true });
  }

  /* ---------- SMOOTH ANCHOR SCROLL OFFSET ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          const offset = 80;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  });

})();
