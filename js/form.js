/* =================================================================
   Kontaktformular: Validierung + Versand-Platzhalter
   =================================================================
   Aktuell wird das Formular NICHT verschickt — der Submit-Handler
   simuliert nur eine Erfolgsmeldung.

   Um echten Versand zu aktivieren:
   1) SUBMIT_ENDPOINT auf eine gültige URL setzen (Formspree, eigene API,
      Vercel Function /api/contact, o. Ä.)
   2) Bei Bedarf METHOD / Header anpassen.
   ================================================================= */
(function () {
  'use strict';

  // ⬇⬇⬇  Hier echten Endpoint eintragen, um Versand zu aktivieren  ⬇⬇⬇
  var SUBMIT_ENDPOINT = '';   // z. B. "https://formspree.io/f/xxxxxxx"
  var SUBMIT_METHOD   = 'POST';

  var form   = document.getElementById('contactForm');
  if (!form) return;

  var status = document.getElementById('form-status');
  var fields = {
    name:    form.querySelector('#name'),
    email:   form.querySelector('#email'),
    message: form.querySelector('#message')
  };

  /* ---------- Helpers ---------- */
  function setError(input, hasError) {
    var wrap = input.closest('.field');
    if (!wrap) return;
    wrap.classList.toggle('has-error', !!hasError);
    input.setAttribute('aria-invalid', hasError ? 'true' : 'false');
  }

  function setStatus(msg, type) {
    if (!status) return;
    status.textContent = msg || '';
    status.classList.remove('is-error', 'is-ok');
    if (type === 'error') status.classList.add('is-error');
    if (type === 'ok')    status.classList.add('is-ok');
  }

  function isValidEmail(v) {
    // einfache, robuste Prüfung (keine RFC-Vollabdeckung nötig)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  function validate() {
    var ok = true;

    if (!fields.name.value.trim()) {
      setError(fields.name, true);  ok = false;
    } else setError(fields.name, false);

    if (!isValidEmail(fields.email.value.trim())) {
      setError(fields.email, true); ok = false;
    } else setError(fields.email, false);

    if (fields.message.value.trim().length < 10) {
      setError(fields.message, true); ok = false;
    } else setError(fields.message, false);

    return ok;
  }

  /* ---------- Submit ---------- */
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    setStatus('', null);

    if (!validate()) {
      setStatus('Bitte alle Felder korrekt ausfüllen (Nachricht: mind. 10 Zeichen).', 'error');
      return;
    }

    var submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;
    setStatus('Wird gesendet …', null);

    var payload = {
      name:    fields.name.value.trim(),
      email:   fields.email.value.trim(),
      message: fields.message.value.trim()
    };

    /* ---------- Kein Endpoint konfiguriert: Platzhalter ---------- */
    if (!SUBMIT_ENDPOINT) {
      // TODO: Endpoint oben setzen, um echten Versand zu aktivieren.
      console.info('[Kontaktformular] Kein SUBMIT_ENDPOINT gesetzt – Versand simuliert.', payload);
      setTimeout(function () {
        setStatus('Vielen Dank! (Demo: Versand ist noch nicht angebunden.)', 'ok');
        form.reset();
        if (submitBtn) submitBtn.disabled = false;
      }, 500);
      return;
    }

    /* ---------- Echter Versand ---------- */
    fetch(SUBMIT_ENDPOINT, {
      method: SUBMIT_METHOD,
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.json().catch(function () { return {}; });
      })
      .then(function () {
        setStatus('Vielen Dank — Ihre Nachricht ist angekommen.', 'ok');
        form.reset();
      })
      .catch(function () {
        setStatus('Senden fehlgeschlagen. Bitte später erneut versuchen oder per E-Mail kontaktieren.', 'error');
      })
      .then(function () {
        if (submitBtn) submitBtn.disabled = false;
      });
  });

  // Live-Validierung: Fehler ausblenden, sobald getippt wird
  Object.keys(fields).forEach(function (key) {
    var input = fields[key];
    input.addEventListener('input', function () {
      setError(input, false);
    });
  });
})();
