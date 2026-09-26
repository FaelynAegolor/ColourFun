// Animated step-by-step drawing guide shared by the lesson pages.
//
// Stepper(guides) wires up the guide markup already on the page (#gTabs, #gsvg with
// #gBack/#gFill/#gLine layers, #gCount, #gText, #gDots and the #gPrev/#gNext/#gPlay/#gAgain
// buttons). guides = { key: { name, steps: [{ t: text, e: [elements], erase?: true }] } }.
// An element is an SVG markup string (drawn on the line layer) or { l: 'b' | 'f', s: markup }
// for the cast-shadow and shading layers. A step with erase: true rubs out the dashed
// construction lines (.cn) from the steps before it.
window.Stepper = function (guides, first) {
  const $ = id => document.getElementById(id);
  const G = { key: first || Object.keys(guides)[0], i: 0, timer: 0 };
  const tabs = $('gTabs');

  Object.entries(guides).forEach(([key, g]) => {
    const t = document.createElement('button');
    t.type = 'button'; t.className = 'tbtn'; t.setAttribute('role', 'tab'); t.textContent = g.name;
    t.setAttribute('aria-selected', String(key === G.key));
    t.addEventListener('click', () => {
      stopPlay(); G.key = key; G.i = 0;
      tabs.querySelectorAll('.tbtn').forEach(x => x.setAttribute('aria-selected', String(x === t)));
      draw();
    });
    tabs.appendChild(t);
  });

  function draw() {
    const steps = guides[G.key].steps;
    let erased = -1;
    steps.slice(0, G.i + 1).forEach((st, k) => { if (st.erase) erased = k; });
    const out = { b: '', f: '', l: '' };
    steps.slice(0, G.i + 1).forEach((st, k) => {
      const cur = k === G.i;
      const cls = cur ? 'now' : k < erased ? (erased === G.i ? 'rub' : 'gone') : '';
      st.e.forEach((el, n) => {
        const it = typeof el === 'string' ? { l: 'l', s: el } : el;
        out[it.l] += '<g' + (cls ? ' class="' + cls + '"' : '') + (cur ? ' style="--i:' + n + '"' : '') + '>' + it.s + '</g>';
      });
    });
    $('gBack').innerHTML = out.b; $('gFill').innerHTML = out.f; $('gLine').innerHTML = out.l;
    $('gCount').textContent = 'Step ' + (G.i + 1) + ' of ' + steps.length;
    $('gText').textContent = steps[G.i].t;
    $('gPrev').disabled = G.i === 0;
    $('gNext').disabled = G.i === steps.length - 1;
    const dots = $('gDots');
    dots.innerHTML = '';
    steps.forEach((_, k) => {
      const d = document.createElement('button');
      d.type = 'button'; d.textContent = k + 1;
      d.setAttribute('aria-label', 'Step ' + (k + 1));
      if (k === G.i) d.setAttribute('aria-current', 'step'); else if (k < G.i) d.className = 'done';
      d.addEventListener('click', () => { stopPlay(); G.i = k; draw(); });
      dots.appendChild(d);
    });
  }

  function stopPlay() { clearTimeout(G.timer); G.timer = 0; $('gPlay').textContent = 'Play all'; }
  $('gPrev').addEventListener('click', () => { stopPlay(); if (G.i > 0) { G.i--; draw(); } });
  $('gNext').addEventListener('click', () => { stopPlay(); if (G.i < guides[G.key].steps.length - 1) { G.i++; draw(); } });
  $('gAgain').addEventListener('click', draw);
  $('gPlay').addEventListener('click', () => {
    if (G.timer) { stopPlay(); return; }
    const steps = guides[G.key].steps;
    $('gPlay').textContent = 'Pause';
    G.i = 0; draw();
    const next = () => {
      if (G.i >= steps.length - 1) { stopPlay(); return; }
      G.i++; draw();
      G.timer = setTimeout(next, 3200);
    };
    G.timer = setTimeout(next, 3200);
  });
  draw();
};
