// Mobile Navigation
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('main-nav');
  if (!toggle || !nav) return;

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    nav.classList.toggle('is-open', open);
  }
  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) { setOpen(false); toggle.focus(); }
  });
  window.matchMedia('(min-width: 861px)').addEventListener('change', function (m) {
    if (m.matches) setOpen(false);
  });
})();

// Jahr im Footer
document.querySelectorAll('[data-year]').forEach(function (el) {
  el.textContent = new Date().getFullYear();
});

// Galerie-Filter nach Kategorie
(function () {
  var chips = document.querySelectorAll('.filter-chips .chip');
  var tiles = document.querySelectorAll('.gallery .tile');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var f = chip.getAttribute('data-filter');
      chips.forEach(function (c) { c.setAttribute('aria-pressed', String(c === chip)); });
      tiles.forEach(function (t) {
        t.hidden = !(f === '*' || t.getAttribute('data-cat') === f);
      });
      document.querySelector('.gallery').classList.toggle('is-filtered', f !== '*');
    });
  });
})();
