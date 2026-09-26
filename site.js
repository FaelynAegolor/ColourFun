// Shared header behaviour: the page-group dropdowns, and the Menu button that opens
// the page links on narrow screens.
(function () {
  var head = document.querySelector('.site-head');
  if (!head) return;
  var btn = head.querySelector('.menu-btn');
  var groups = Array.prototype.slice.call(head.querySelectorAll('.nav-group'));

  function setGroup(g, open) {
    g.classList.toggle('open', open);
    g.querySelector('.nav-toggle').setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  function closeGroups(except) { groups.forEach(function (g) { if (g !== except) setGroup(g, false); }); }
  function setMenu(open) {
    head.classList.toggle('open', open);
    if (btn) btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  groups.forEach(function (g) {
    if (g.querySelector('a[aria-current="page"]')) g.classList.add('has-current');
    g.querySelector('.nav-toggle').addEventListener('click', function () {
      var open = !g.classList.contains('open');
      closeGroups(g);
      setGroup(g, open);
    });
  });
  if (btn) btn.addEventListener('click', function () { setMenu(!head.classList.contains('open')); });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var open = groups.filter(function (g) { return g.classList.contains('open'); })[0];
    if (open) { setGroup(open, false); open.querySelector('.nav-toggle').focus(); }
    else if (head.classList.contains('open')) { setMenu(false); if (btn) btn.focus(); }
  });
  document.addEventListener('click', function (e) {
    groups.forEach(function (g) { if (!g.contains(e.target)) setGroup(g, false); });
    if (head.classList.contains('open') && !head.contains(e.target)) setMenu(false);
  });
})();
