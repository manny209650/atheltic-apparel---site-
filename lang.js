/* ── TAGLINE LANGUAGE SYSTEM — Powered by Google Translate ── */

function tlGetLang() {
  var m = document.cookie.match(/googtrans=\/en\/([a-z]{2})/);
  if (m) return m[1];
  return localStorage.getItem('tl-lang') || 'en';
}

function tlSetLang(lang) {
  // Clear existing cookie first
  var domains = [location.hostname, '.' + location.hostname, ''];
  domains.forEach(function(d) {
    var base = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    document.cookie = d ? base + '; domain=' + d : base;
  });
  if (lang === 'es') {
    document.cookie = 'googtrans=/en/es; path=/';
    document.cookie = 'googtrans=/en/es; path=/; domain=.' + location.hostname;
    localStorage.setItem('tl-lang', 'es');
  } else {
    localStorage.setItem('tl-lang', 'en');
  }
  location.reload();
}

function tlUpdateButtons(lang) {
  document.querySelectorAll('.tl-lang-btn').forEach(function(btn) {
    btn.innerHTML = lang === 'es'
      ? '<span class="tl-flag">🇺🇸</span> English'
      : '<span class="tl-flag">🇲🇽</span> Español';
    btn.dataset.target = lang === 'es' ? 'en' : 'es';
    btn.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a Español');
  });
}

// Google Translate widget init (called by GT script)
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'es',
    autoDisplay: false
  }, 'google_translate_element');
}

// Boot
(function() {
  function run() {
    var lang = tlGetLang();
    tlUpdateButtons(lang);
    document.querySelectorAll('.tl-lang-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        tlSetLang(btn.dataset.target);
      });
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
