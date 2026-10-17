// Shared kit for the step-by-step chaos drawings.
// - Adds hidden SVG <defs> (pencil grain, ink wobble, hatching and stipple patterns) to the page once.
// - DrawingKit.render(svg, steps, upTo, animate) draws steps 0..upTo into an <svg viewBox="0 0 400 400">.
// Step format: { t: 'instruction', e: [markup | { l: 'b' | 'f', s: markup }], erase?: true }
//   'b' = background layer, 'f' = fill/shading layer, plain strings = line layer (on top).
//   Elements in the current step animate (see lesson.css: .ln/.hl draw on, .sh wipes, .cn/.fd fade).
(function () {
  const DEFS = `
<svg id="dk-defs" width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>
  <!-- Graphite / colour-pencil grain: slight wobble plus a speckled, broken stroke -->
  <filter id="grain" x="-5%" y="-5%" width="110%" height="110%">
    <feTurbulence type="fractalNoise" baseFrequency=".04" numOctaves="2" seed="2" result="w"/>
    <feDisplacementMap in="SourceGraphic" in2="w" scale="2.2" result="d"/>
    <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="1" seed="7" result="n"/>
    <feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.1 1.32" result="na"/>
    <feComposite in="d" in2="na" operator="in"/>
  </filter>
  <!-- Ink / marker: a gentle hand-drawn wobble, no grain -->
  <filter id="wobble" x="-5%" y="-5%" width="110%" height="110%">
    <feTurbulence type="fractalNoise" baseFrequency=".035" numOctaves="2" seed="5" result="w"/>
    <feDisplacementMap in="SourceGraphic" in2="w" scale="1.8"/>
  </filter>
  <!-- Marker: streaky flat colour -->
  <filter id="marker" x="-3%" y="-3%" width="106%" height="106%">
    <feTurbulence type="fractalNoise" baseFrequency=".9 .02" numOctaves="1" seed="3" result="s"/>
    <feColorMatrix in="s" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -.5 1.15" result="sa"/>
    <feComposite in="SourceGraphic" in2="sa" operator="in"/>
  </filter>
  <!-- Pencil hatching tones, transparent between strokes: ph1 lightest .. ph4 darkest -->
  <pattern id="ph1" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(40)"><line x1="1" y1="0" x2="1" y2="7" stroke="#6b6b6b" stroke-opacity=".35" stroke-width="1.1"/></pattern>
  <pattern id="ph2" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(40)"><line x1="1" y1="0" x2="1" y2="5" stroke="#555" stroke-opacity=".5" stroke-width="1.2"/></pattern>
  <pattern id="ph3" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(40)"><line x1="1" y1="0" x2="1" y2="4" stroke="#3c3c3c" stroke-opacity=".6" stroke-width="1.3"/><line x1="0" y1="1" x2="4" y2="1" stroke="#3c3c3c" stroke-opacity=".35" stroke-width="1"/></pattern>
  <pattern id="ph4" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(40)"><line x1="1" y1="0" x2="1" y2="3" stroke="#222" stroke-opacity=".75" stroke-width="1.4"/><line x1="0" y1="1" x2="3" y2="1" stroke="#222" stroke-opacity=".55" stroke-width="1.2"/></pattern>
  <!-- Fineliner hatching: ih1 open .. ih3 dense, ix1/ix2 cross-hatching -->
  <pattern id="ih1" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="1" y1="0" x2="1" y2="7" stroke="#111" stroke-width=".7"/></pattern>
  <pattern id="ih2" width="4.5" height="4.5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="1" y1="0" x2="1" y2="4.5" stroke="#111" stroke-width=".8"/></pattern>
  <pattern id="ih3" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="1" y1="0" x2="1" y2="3" stroke="#111" stroke-width=".9"/></pattern>
  <pattern id="ix1" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="1" y1="0" x2="1" y2="5" stroke="#111" stroke-width=".8"/><line x1="0" y1="1" x2="5" y2="1" stroke="#111" stroke-width=".8"/></pattern>
  <pattern id="ix2" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="1" y1="0" x2="1" y2="3" stroke="#111" stroke-width=".9"/><line x1="0" y1="1" x2="3" y2="1" stroke="#111" stroke-width=".9"/></pattern>
  <!-- Stipple: st1 sparse .. st3 dense -->
  <pattern id="st1" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r=".9" fill="#111"/><circle cx="7" cy="7.5" r=".9" fill="#111"/></pattern>
  <pattern id="st2" width="6" height="6" patternUnits="userSpaceOnUse"><circle cx="1.5" cy="1.5" r=".9" fill="#111"/><circle cx="4.5" cy="4" r=".9" fill="#111"/><circle cx="2" cy="5" r=".7" fill="#111"/></pattern>
  <pattern id="st3" width="4" height="4" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".9" fill="#111"/><circle cx="3" cy="2.6" r=".9" fill="#111"/><circle cx="1.6" cy="3.4" r=".7" fill="#111"/></pattern>
</defs></svg>`;
  function ensureDefs() {
    if (document.getElementById('grain')) return;
    document.body.insertAdjacentHTML('afterbegin', DEFS);
  }
  // The same drawing can be on the page more than once (card, player, print). Give every id
  // defined in the markup a per-render suffix so url(#…) always points at its own copy,
  // even when another copy is hidden (hidden gradients, clips and filters stop working).
  let renderCount = 0;
  function uniqueIds(markup) {
    const ids = [...new Set([...markup.matchAll(/\sid=["']([^"']+)["']/g)].map(m => m[1]))];
    if (!ids.length) return markup;
    const sfx = '-r' + (++renderCount);
    const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp('(id=["\']|url\\(["\']?#|href=["\']#)(' + ids.map(esc).join('|') + ')(?=["\'\\)])', 'g');
    return markup.replace(re, (m, a, id) => a + id + sfx);
  }
  function render(svg, steps, upTo, animate) {
    ensureDefs();
    let erased = -1;
    steps.slice(0, upTo + 1).forEach((st, k) => { if (st.erase) erased = k; });
    const out = { b: '', f: '', l: '' };
    steps.slice(0, upTo + 1).forEach((st, k) => {
      const cur = k === upTo && animate !== false;
      const cls = cur ? 'now' : k < erased ? (erased === upTo && animate !== false ? 'rub' : 'gone') : '';
      st.e.forEach((el, n) => {
        const it = typeof el === 'string' ? { l: 'l', s: el } : el;
        out[it.l] += '<g' + (cls ? ' class="' + cls + '"' : '') + (cur ? ' style="--i:' + n + '"' : '') + '>' + it.s + '</g>';
      });
    });
    svg.innerHTML = uniqueIds('<rect width="400" height="400" fill="#fffefa"/><g>' + out.b + '</g><g>' + out.f + '</g><g>' + out.l + '</g>');
  }
  window.DrawingKit = { render, ensureDefs };
  window.DRAWINGS = window.DRAWINGS || {};
})();
