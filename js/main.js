/* ══════════════════════════════════════════════
   BONY Portfolio — main.js
   Handles: Navigation, Scroll animations,
            Smooth scroll, Card interactions
   ══════════════════════════════════════════════ */

'use strict';

/* ─────────────────────────────────────────────
   Wait for the DOM to be fully loaded
───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {

  initNavigation();
  initScrollAnimations();
  initSmoothScroll();
  initCategoryCards();
  initScrollHeader();

});


/* ─────────────────────────────────────────────
   1. NAVIGATION — hamburger menu
───────────────────────────────────────────── */
function initNavigation() {
  const toggle   = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when any nav link is clicked
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Close menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('is-open')) {
      navLinks.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
}


/* ─────────────────────────────────────────────
   2. STICKY HEADER — add shadow on scroll
───────────────────────────────────────────── */
function initScrollHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Run once on load
}


/* ─────────────────────────────────────────────
   3. SCROLL ANIMATIONS — fade-in elements
   Uses IntersectionObserver (no library needed)
───────────────────────────────────────────── */
function initScrollAnimations() {
  // Respect users who prefer reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Make everything visible immediately
    document.querySelectorAll('[data-animate]').forEach(el => {
      el.classList.add('is-visible');
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Respect any delay set on the element
          const delay = entry.target.dataset.delay
            ? parseInt(entry.target.dataset.delay, 10)
            : 0;

          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, delay);

          observer.unobserve(entry.target); // Animate only once
        }
      });
    },
    {
      threshold: 0.12,  // Trigger when 12% of element is visible
      rootMargin: '0px 0px -40px 0px' // Slight offset from bottom
    }
  );

  // Observe all animatable elements
  document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
  });

  // Also animate hero elements immediately (they're in the viewport on load)
  document.querySelectorAll('.hero [data-animate]').forEach((el, i) => {
    setTimeout(() => el.classList.add('is-visible'), 150 + i * 100);
  });
}


/* ─────────────────────────────────────────────
   4. SMOOTH SCROLL — for anchor links
───────────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"], .scroll-link').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#') || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      // Close mobile menu if open
      const navLinks = document.getElementById('nav-links');
      const toggle = document.getElementById('nav-toggle');
      if (navLinks && navLinks.classList.contains('is-open')) {
        navLinks.classList.remove('is-open');
        toggle?.setAttribute('aria-expanded', 'false');
      }

      const headerHeight = document.getElementById('site-header')?.offsetHeight || 70;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: 'smooth'
      });
    });
  });
}


/* ─────────────────────────────────────────────
   5. CATEGORY CARDS — keyboard & click nav
───────────────────────────────────────────── */
function initCategoryCards() {
  document.querySelectorAll('.cat-card[data-href]').forEach(card => {
    const href = card.dataset.href;
    if (!href) return;

    // Click navigation
    card.addEventListener('click', () => {
      if (href.includes('digital-art.html') || href.includes('social-ads.html') || href.includes('ai-visualizing.html')) {
        window.location.href = href;
        return;
      }
      // Other pages don't exist yet — show a friendly notice
      showComingSoonToast(card.querySelector('.cat-title')?.textContent?.trim() || 'This category');
    });

    // Keyboard navigation (Enter / Space)
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });
}



/* ─────────────────────────────────────────────
   7. TOAST NOTIFICATION — "Coming Soon"
   A lightweight, accessible status message
───────────────────────────────────────────── */
function showComingSoonToast(itemName) {
  // Remove any existing toast
  const existing = document.querySelector('.bony-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'bony-toast';
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');

  toast.innerHTML = `
    <span class="toast-icon">✦</span>
    <span><strong>${itemName}</strong> page is coming soon!</span>
    <button class="toast-close" aria-label="Close notification">✕</button>
  `;

  // Inject toast styles if not already added
  if (!document.getElementById('bony-toast-styles')) {
    const style = document.createElement('style');
    style.id = 'bony-toast-styles';
    style.textContent = `
      .bony-toast {
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%) translateY(120%);
        background: var(--burgundy);
        color: var(--cream);
        font-family: var(--font-body);
        font-size: 0.95rem;
        padding: 0.9rem 1.6rem;
        border-radius: var(--radius-sm);
        border: 3px solid var(--black);
        box-shadow: 6px 6px 0 var(--black);
        display: flex;
        align-items: center;
        gap: 0.75rem;
        z-index: 9999;
        transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        max-width: calc(100vw - 2rem);
        white-space: nowrap;
      }
      .bony-toast.is-visible {
        transform: translateX(-50%) translateY(0);
      }
      .toast-icon {
        color: var(--yellow);
        font-size: 1.2rem;
        flex-shrink: 0;
      }
      .toast-close {
        background: none;
        border: none;
        color: var(--rose-pink);
        font-size: 0.85rem;
        cursor: pointer;
        padding: 0.1em 0.3em;
        margin-left: auto;
        flex-shrink: 0;
        line-height: 1;
        transition: color 0.2s;
      }
      .toast-close:hover { color: var(--white); }
    `;
    document.head.appendChild(style);
  }

  document.body.appendChild(toast);

  // Animate in
  requestAnimationFrame(() => {
    requestAnimationFrame(() => toast.classList.add('is-visible'));
  });

  // Close button
  toast.querySelector('.toast-close').addEventListener('click', () => {
    dismissToast(toast);
  });

  // Auto-dismiss after 3.5 seconds
  setTimeout(() => dismissToast(toast), 3500);
}

function dismissToast(toast) {
  if (!toast) return;
  toast.classList.remove('is-visible');
  toast.addEventListener('transitionend', () => toast.remove(), { once: true });
}


/* ─────────────────────────────────────────────
   8. ACTIVE NAV LINK — based on scroll position
───────────────────────────────────────────── */
(function initActiveNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const id = entry.target.getAttribute('id');

        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      });
    },
    {
      rootMargin: '-40% 0px -55% 0px' // Trigger near vertical center
    }
  );

  sections.forEach(section => observer.observe(section));
})();
