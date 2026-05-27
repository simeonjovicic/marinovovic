/* =================================================================
   Navigation – mobile Toggle, scroll-state, sanftes Scrollen
   ================================================================= */
(function () {
  'use strict';

  // Markiere <html> als js-aktiv, damit CSS-Fallbacks (.no-js) greifen können
  document.documentElement.classList.remove('no-js');

  var header     = document.getElementById('siteHeader');
  var toggle     = document.getElementById('navToggle');
  var nav        = document.getElementById('primaryNav');

  /* ---------- Mobile Toggle ---------- */
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Navigation schließen' : 'Navigation öffnen');
    });

    // Beim Klick auf einen Nav-Link Mobile-Menü schließen
    nav.addEventListener('click', function (e) {
      var target = e.target;
      if (target && target.tagName === 'A' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Navigation öffnen');
      }
    });
  }

  /* ---------- Schatten/Border am Header bei Scroll ---------- */
  if (header) {
    var setScrolled = function () {
      if (window.scrollY > 8) header.classList.add('is-scrolled');
      else header.classList.remove('is-scrolled');
    };
    setScrolled();
    window.addEventListener('scroll', setScrolled, { passive: true });
  }

  /* ---------- Sanftes Scrollen (Fallback für ältere Browser) ---------- */
  // CSS scroll-behavior:smooth deckt moderne Browser ab.
  // Hier nur sicherstellen, dass Sprungziele den Fokus erhalten (a11y).
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = link.getAttribute('href');
      if (!id || id === '#') return;
      var el = document.querySelector(id);
      if (!el) return;
      // Standardbrowser-Scroll erledigt das Scrollen, wir setzen den Fokus.
      // setTimeout, damit der Scroll abgeschlossen ist, bevor Fokus springt.
      setTimeout(function () {
        if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
        el.focus({ preventScroll: true });
      }, 400);
    });
  });

  /* ---------- Footer-Jahr ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
