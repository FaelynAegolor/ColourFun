// Simple password screen for the whole site. Loaded in <head> of every page, before anything
// is shown. The password itself isn't stored, only its SHA-256 hash. Once entered correctly,
// this browser remembers it.
// Note: this keeps casual visitors out; it is not real security (the site is static and public).
(function () {
  var HASH = '8c234210f8e1e19a755bc66dc46f91a8d7df6ff253d545fa60302ee80b55e7f6';
  var KEY = 'colourfunUnlocked';
  var ok = false;
  try { ok = localStorage.getItem(KEY) === HASH; } catch (e) { /* storage unavailable */ }
  if (ok) return;

  // Hide the page until unlocked
  var hide = document.createElement('style');
  hide.id = 'gate-hide';
  hide.textContent = 'body > *:not(#gate) { display: none !important; }';
  document.head.appendChild(hide);

  // Small SHA-256 (works without crypto.subtle, e.g. when opened from a file)
  function sha256(str) {
    function rr(n, x) { return (x >>> n) | (x << (32 - n)); }
    var K = [], H = [], p = 2, n = 0;
    while (n < 64) {
      var prime = true;
      for (var d = 2; d * d <= p; d++) if (p % d === 0) { prime = false; break; }
      if (prime) { if (n < 8) H[n] = (Math.pow(p, 1 / 2) * 4294967296) | 0; K[n] = (Math.pow(p, 1 / 3) * 4294967296) | 0; n++; }
      p++;
    }
    var bytes = unescape(encodeURIComponent(str)), l = bytes.length, words = [];
    for (var i = 0; i < l; i++) words[i >> 2] |= bytes.charCodeAt(i) << (24 - (i % 4) * 8);
    words[l >> 2] |= 0x80 << (24 - (l % 4) * 8);
    words[((l + 8) >> 6 << 4) + 15] = l * 8;
    for (var z = 0; z < words.length; z++) words[z] = words[z] | 0;
    for (var j = 0; j < words.length; j += 16) {
      var w = words.slice(j, j + 16), a = H.slice(0);
      for (var t = 0; t < 64; t++) {
        if (t >= 16) {
          var w15 = w[t - 15], w2 = w[t - 2];
          w[t] = (w[t - 16] + (rr(7, w15) ^ rr(18, w15) ^ (w15 >>> 3)) + w[t - 7] + (rr(17, w2) ^ rr(19, w2) ^ (w2 >>> 10))) | 0;
        }
        var t1 = a[7] + (rr(6, a[4]) ^ rr(11, a[4]) ^ rr(25, a[4])) + ((a[4] & a[5]) ^ (~a[4] & a[6])) + K[t] + (w[t] | 0);
        var t2 = (rr(2, a[0]) ^ rr(13, a[0]) ^ rr(22, a[0])) + ((a[0] & a[1]) ^ (a[0] & a[2]) ^ (a[1] & a[2]));
        a = [(t1 + t2) | 0].concat(a);
        a[4] = (a[4] + t1) | 0;
        a.pop();
      }
      for (var k = 0; k < 8; k++) H[k] = (H[k] + a[k]) | 0;
    }
    var out = '';
    for (var m = 0; m < 8; m++) out += ('00000000' + (H[m] >>> 0).toString(16)).slice(-8);
    return out;
  }

  function show() {
    var box = document.createElement('div');
    box.id = 'gate';
    box.innerHTML =
      '<style>#gate{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:#f1efe9;font-family:Archivo,Helvetica,Arial,sans-serif;z-index:9999;padding:16px}' +
      '#gate form{background:#fff;color:#141414;border:1px solid #d8d4cb;border-radius:16px;padding:28px 26px;width:min(360px,100%);box-shadow:0 10px 30px rgba(0,0,0,.12);text-align:center}' +
      '#gate h1{margin:6px 0 4px;font-size:20px;letter-spacing:.08em;text-transform:uppercase}#gate p{margin:0 0 16px;color:#5f5d58;font-size:14px}' +
      '#gate input{width:100%;min-height:46px;font:inherit;font-size:16px;padding:8px 12px;border:2px solid #d8d4cb;border-radius:10px;box-sizing:border-box}' +
      '#gate input:focus{outline:3px solid #1F5FBF;outline-offset:1px}#gate button{margin-top:10px;width:100%;min-height:46px;border:0;border-radius:10px;background:#1F5FBF;color:#fff;font:inherit;font-weight:700;font-size:15px;cursor:pointer}' +
      '#gate .err{color:#D2402A;font-size:13px;font-weight:700;min-height:1.3em;margin:8px 0 0}' +
      '@media (prefers-color-scheme:dark){#gate{background:#161616}#gate form{background:#242424;color:#f2f0ea;border-color:#464646}#gate p{color:#b4b0a6}#gate input{background:#161616;color:#f2f0ea;border-color:#464646}}</style>' +
      '<form autocomplete="off"><svg viewBox="0 0 26 26" width="34" height="34" aria-hidden="true"><path d="M13 13V1a12 12 0 0 1 10.4 6z" fill="#E4252C"/><path d="M13 13l10.4-6a12 12 0 0 1 0 12z" fill="#F7941D"/><path d="M13 13l10.4 6A12 12 0 0 1 13 25z" fill="#FFE600"/><path d="M13 13v12a12 12 0 0 1-10.4-6z" fill="#3AAA35"/><path d="M13 13L2.6 19a12 12 0 0 1 0-12z" fill="#1F5FBF"/><path d="M13 13L2.6 7A12 12 0 0 1 13 1z" fill="#7B3F99"/></svg>' +
      '<h1>ColourFun</h1><p>Enter the password to continue.</p>' +
      '<label for="gate-pw" style="position:absolute;left:-9999px">Password</label><input id="gate-pw" type="password" required autofocus>' +
      '<button type="submit">Enter</button><p class="err" id="gate-err" role="alert"></p></form>';
    document.body.appendChild(box);
    var input = document.getElementById('gate-pw');
    setTimeout(function () { input.focus(); }, 50);
    box.querySelector('form').addEventListener('submit', function (e) {
      e.preventDefault();
      if (sha256(input.value.trim().toLowerCase()) === HASH) {
        try { localStorage.setItem(KEY, HASH); } catch (err) { /* remember for this visit only */ }
        box.remove();
        hide.remove();
      } else {
        document.getElementById('gate-err').textContent = 'That password isn’t right. Try again.';
        input.select();
      }
    });
  }
  if (document.body) show(); else document.addEventListener('DOMContentLoaded', show);
})();
