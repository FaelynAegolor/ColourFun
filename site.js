// Shared header behaviour: the Menu button opens and closes the page links on narrow screens.
(function () {
  var head = document.querySelector('.site-head');
  if (!head) return;
  var btn = head.querySelector('.menu-btn');
  if (!btn) return;

  function setOpen(open) {
    head.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  btn.addEventListener('click', function () { setOpen(!head.classList.contains('open')); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && head.classList.contains('open')) { setOpen(false); btn.focus(); }
  });
  document.addEventListener('click', function (e) {
    if (head.classList.contains('open') && !head.contains(e.target)) setOpen(false);
  });
})();
