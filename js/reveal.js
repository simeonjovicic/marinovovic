/* =================================================================
   Dezente Scroll-Reveal-Animation via IntersectionObserver
   Respektiert prefers-reduced-motion (siehe CSS).
   ================================================================= */
(function () {
  'use strict';

  var els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  // Wenn IntersectionObserver fehlt (sehr alte Browser): alles sofort zeigen
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -8% 0px',
    threshold: 0.08
  });

  els.forEach(function (el) { io.observe(el); });
})();
