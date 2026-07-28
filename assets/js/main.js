/* =================================================================
   ZenX MVP — Main interactions
   ================================================================= */

(function () {
  'use strict';

  // ---- Mobile nav toggle ----
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('is-open');
      links.classList.toggle('is-open');
    });
    // Close on link click (mobile)
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        if (window.innerWidth <= 900) {
          toggle.classList.remove('is-open');
          links.classList.remove('is-open');
        }
      });
    });
  }

  // ---- Smooth scroll for in-page anchors ----
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const target = a.getAttribute('href');
      if (target.length <= 1) return;
      const el = document.querySelector(target);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ---- Reveal on scroll ----
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-shown');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: just show all
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('is-shown');
    });
  }

  // ---- Contact form: graceful local handling (no backend) ----
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // For MVP without backend: show success message and reset.
      // When ready, replace this with fetch() to your form endpoint.
      const success = form.querySelector('.form-success');
      if (success) {
        success.classList.add('is-shown');
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
      setTimeout(function () {
        if (success) success.classList.remove('is-shown');
      }, 8000);
    });
  }

  // ---- Year in footer ----
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
