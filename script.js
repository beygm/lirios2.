/* =========================================================
   TEXTOS: cambia aquí las palabras por las tuyas.
   - flowers: las 5 flores del ramo (label y text, mejor menos de 140 caracteres).
   - letter.pages: cada bloque [ ... ] es una página de la carta (puede haber más de tres).
   Todo lo que aparece ahora son textos de ejemplo.
   ========================================================= */
window.CARTA = {
  name: 'Jaro',
  introLead: 'Hay personas que llegan y, sin darse cuenta, hacen florecer todo a su alrededor.',
  bouquetTitle: 'Cada flor guarda algo de lo que siento por ti',
  flowers: [
    { label: 'Tu sonrisa', text: 'Esa sonrisa que ilumina todo, incluso mis días más grises llenando todo mi ser.' },
    { label: 'Tu ternura', text: 'como haces todo con tanto amor y cuidado tratando todo con tu perfecion :3.' },
    { label: 'Tu fuerza', text: 'Admiro tu valentía, incluso cuando tú no la ves. Me enseñas y me muestras lo mucho que te esfuerzas .' },
    { label: 'Nuestros sueños', text: 'En cada plan que tenemos o cada charla que tenemos veo como seremos felicis teniendonos a los dos.' },
    { label: 'Nuestra historia', text: 'no somos perfectos pero hacemos todo desde el amor, la confianza y el respeto.te amare cada dia de los años que pasemos juntos.' }
  ],
  ribbonLead: 'Es una carta desde mi corazón, para ti, Jaro. Espero que la leas con la misma ilusión con la que la escribo.',
  letter: {
    greeting: 'Mi Jaro,',
    pages: [
      [
        'Desde que llegaste a mi vida, todo se siente diferente. No sé cómo explicarlo, pero es como si todo hubiera florecido en un momento.',
        'donde no tenia nada y derepente todo lo que tenia se convirtio en algo hermoso, y todo eso es gracias a ti, a tu amor, a tu ternura y a tu forma de ser.',
        'te deseo lo mejor de lo mejor, y que todo lo que nos propongamos se cumpla, porque te lo mereces, se que no soy el mejor pero ten por seguro que cada dia lucho por nuestro amor por darte todo de mi :3'
      ],
      [
        'Me encanta la forma en la que me apoyas, cómo siempre estás ahí, cómo me motivas a ser mejor y cómo, con solo estar presente, haces que todo se sienta más libiano.',
        'No importa la distancia, el tiempo o los obstáculos, siempre voy a elegirte a estar contigo. Porque contigo todo es más bonito, más real y más especial. "te buscaria en esta y 30mil vidad mas"',
        'Quiero un futuro a tu lado, lleno de sueños, proyectos, viajes, risas y muchos momentos que solo nosotros vamos a entender.'
      ],
      [
        'Quiero seguir escribiendo esta hermosa historia contigo y que cada capítulo de nuestra vida sea aún más bonito que el anterior aunque no sea perfecto que cada dia sea mejor que el anterior.',
        'Gracias por ser mi Jarito, por confiar en mí y por hacer de mi vida un lugar tan increíble. Te amo, hoy, mañana y siempre.',
        'FELIZZZZZ CUMPLEEEE MIIIII jAROOOOOOO'
      ]
    ],
    closing: 'Con todo mi amor,',
    signed: 'Tu Bey ♡'
  },
  final: {
    title: 'Gracias por florecer a mi lado, Mi jarito.',
    text: 'Y prometo cuidar este jardín contigo, todos los días.',
    note: 'Hoy, mañana y siempre ♡'
  }
};

(function () {
  'use strict';
  var C = window.CARTA;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var TAU = Math.PI * 2;
  function rnd(a, b) { return a + Math.random() * (b - a); }
  function mulberry(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; var t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

  /* ---------- Static copy ---------- */
  $('#nameH').textContent = C.name;
  $('#introLead').textContent = C.introLead;
  $('#bouquetTitle').textContent = C.bouquetTitle;
  $('#ribbonLead').textContent = C.ribbonLead;
  $('#finalTitle').textContent = C.final.title;
  $('#finalText').textContent = C.final.text;

  /* ---------- Lily builder ---------- */
  var uidN = 0;
  var P_OUT = 'M0 0C-18-16-32-60-15-97C-9-109-3-116 0-124C3-116 9-109 15-97C32-60 18-16 0 0Z';
  var P_IN = 'M0 0C-26-18-44-62-24-98C-14-112-4-118 0-124C4-118 14-112 24-98C44-62 26-18 0 0Z';
  function lilyMarkup() {
    var u = 'l' + (++uidN), r = mulberry(uidN * 7919 + 13), h = '', i;
    h += '<svg class="lily" viewBox="-130 -130 260 260" aria-hidden="true" focusable="false"><defs>' +
      '<linearGradient id="pf' + u + '" gradientUnits="userSpaceOnUse" x1="-34" y1="0" x2="34" y2="0"><stop offset="0" stop-color="#fff5f9"/><stop offset=".3" stop-color="#ffb6d6"/><stop offset=".5" stop-color="#f06aa8"/><stop offset=".7" stop-color="#ffb6d6"/><stop offset="1" stop-color="#fff5f9"/></linearGradient>' +
      '<linearGradient id="pfi' + u + '" gradientUnits="userSpaceOnUse" x1="-46" y1="0" x2="46" y2="0"><stop offset="0" stop-color="#fff5f9"/><stop offset=".3" stop-color="#ffc0dc"/><stop offset=".5" stop-color="#f27bb2"/><stop offset=".7" stop-color="#ffc0dc"/><stop offset="1" stop-color="#fff5f9"/></linearGradient>' +
      '<linearGradient id="pg' + u + '" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="-70"><stop offset="0" stop-color="#e2f2a0" stop-opacity=".95"/><stop offset="1" stop-color="#e2f2a0" stop-opacity="0"/></linearGradient>' +
      '<linearGradient id="st' + u + '" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="-112"><stop offset="0" stop-color="#b01e6b" stop-opacity=".95"/><stop offset=".8" stop-color="#d63f8f" stop-opacity=".7"/><stop offset="1" stop-color="#e86aa5" stop-opacity=".2"/></linearGradient>' +
      '<radialGradient id="bg' + u + '"><stop offset="0" stop-color="#f5f9b8"/><stop offset=".55" stop-color="#e1f096" stop-opacity=".6"/><stop offset="1" stop-color="#e1f096" stop-opacity="0"/></radialGradient>' +
      '<linearGradient id="bd' + u + '" gradientUnits="userSpaceOnUse" x1="0" y1="72" x2="0" y2="-114"><stop offset="0" stop-color="#7fb35a"/><stop offset=".45" stop-color="#cfe3a0"/><stop offset=".8" stop-color="#f4c3da"/><stop offset="1" stop-color="#f08cb9"/></linearGradient>' +
      '</defs><g class="spinner"><g class="petals">';
    [0, 2, 4, 1, 3, 5].forEach(function (n) {
      var inner = n % 2 === 1, d = inner ? P_IN : P_OUT, g = inner ? 'pfi' : 'pf', k;
      h += '<g class="petal" style="--a:' + (n * 60) + 'deg;--dl:' + (inner ? 0.28 : 0.08) + 's"><g class="shape">';
      h += '<path d="' + d + '" fill="url(#' + g + u + ')"/>';
      h += '<path d="' + d + '" fill="url(#pg' + u + ')"/>';
      h += '<path d="M0-8C2-44 1-84 0-114" fill="none" stroke="url(#st' + u + ')" stroke-width="' + (inner ? 6 : 5) + '" stroke-linecap="round"/>';
      h += '<path d="M-7-16C-9-50-6-86-2-108M7-16C9-50 6-86 2-108" fill="none" stroke="rgba(176,42,115,.22)" stroke-width=".9"/>';
      for (k = 0; k < 15; k++) {
        var y = -(16 + r() * 66), x = (r() - 0.5) * (10 + (-y) * 0.1);
        h += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="' + (0.8 + r() * 0.9).toFixed(1) + '" fill="#9b1d5e" opacity=".7"/>';
      }
      h += '<path d="' + d + '" fill="none" stroke="rgba(255,255,255,.7)" stroke-width="1.1"/>';
      h += '</g></g>';
    });
    h += '</g><circle r="26" fill="url(#bg' + u + ')"/><g class="stamens">';
    [[-36, 60], [-20, 68], [-6, 74], [8, 70], [22, 66], [36, 58]].forEach(function (s, idx) {
      h += '<g class="stamen" style="--a:' + s[0] + 'deg;--dl:' + (0.5 + idx * 0.06).toFixed(2) + 's"><path d="M0 0L0-' + s[1] + '" stroke="#bcd58a" stroke-width="1.6" stroke-linecap="round"/><ellipse cx="0" cy="-' + s[1] + '" rx="3.4" ry="9.5" fill="#9a2430"/><ellipse cx="-1" cy="-' + (s[1] + 1) + '" rx="1" ry="5.5" fill="rgba(255,255,255,.28)"/></g>';
    });
    h += '<g class="stamen" style="--a:6deg;--dl:.7s"><path d="M0 0L0-84" stroke="#c7e19b" stroke-width="2" stroke-linecap="round"/><circle cx="0" cy="-86" r="3.6" fill="#e6c75a"/></g>';
    h += '</g></g><g class="bud"><path d="M0 72C-36 44-42-40 0-114C42-40 36 44 0 72Z" fill="url(#bd' + u + ')"/><path d="M0 70C-6 20-6-50 0-108" fill="none" stroke="rgba(255,255,255,.38)" stroke-width="1.4"/><path d="M-16 58C-24 10-20-50-3-102" fill="none" stroke="rgba(255,255,255,.22)" stroke-width="1.2"/></g></svg>';
    return h;
  }
  function mount(host, opts) {
    host.innerHTML = lilyMarkup();
    var s = host.firstChild;
    if (opts && opts.spin) s.classList.add('spin');
    return s;
  }
  function center(el) { var b = el.getBoundingClientRect(); return { x: b.left + b.width / 2, y: b.top + b.height / 2 }; }
  function bloom(l) { l.classList.add('open'); }
  function unbloom(l) { l.classList.remove('open'); }

  /* ---------- Petals and pollen (canvas) ---------- */
  var fxC = $('#fx'), fx = fxC.getContext('2d'), W = 0, H = 0, DPR = Math.min(window.devicePixelRatio || 1, 2);
  var parts = [], ambTarget = 14, lastT = 0;
  var COLS = ['#f7a8c9', '#f28bb8', '#fde1ee', '#e86aa5', '#ffc2da'];
  function mkPetal(x, y, vx, vy, life, amb) {
    return { k: 'p', x: x, y: y, vx: vx, vy: vy, drag: amb ? 1.1 : 1.7, grav: amb ? 38 : 80, sa: rnd(14, 34), sf: rnd(0.8, 1.8), ph: rnd(0, TAU), rot: rnd(0, TAU), vr: rnd(-1.6, 1.6), fl: rnd(0, TAU), vf: rnd(1.2, 3.4), s: rnd(7, 13), col: COLS[(Math.random() * COLS.length) | 0], a: amb ? rnd(0.55, 0.85) : 1, life: life, age: 0, amb: amb };
  }
  function mkDot(x, y, vx, vy, life, amb) {
    return { k: 'd', x: x, y: y, vx: vx, vy: vy, drag: amb ? 0.6 : 2.2, grav: amb ? -8 : 0, sa: rnd(6, 16), sf: rnd(0.6, 1.4), ph: rnd(0, TAU), s: rnd(1, 2.4), a: amb ? rnd(0.5, 0.9) : 1, life: life, age: 0, amb: amb };
  }
  function sizeFx() {
    W = window.innerWidth; H = window.innerHeight;
    fxC.width = Math.round(W * DPR); fxC.height = Math.round(H * DPR); fx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }
  function ensureAmbient() {
    var np = 0, nd = 0;
    parts.forEach(function (p) { if (p.amb) { if (p.k === 'p') np++; else nd++; } });
    while (np < ambTarget) { parts.push(mkPetal(rnd(0, W), rnd(-H * 0.2, H), rnd(-10, 10), rnd(15, 35), Infinity, true)); np++; }
    while (nd < 14) { parts.push(mkDot(rnd(0, W), rnd(0, H), rnd(-6, 6), rnd(-18, -6), Infinity, true)); nd++; }
  }
  function burst(x, y, np, nd) {
    if (reduce) return;
    var i, a, sp;
    for (i = 0; i < np; i++) { a = rnd(0, TAU); sp = rnd(90, 260); parts.push(mkPetal(x, y, Math.cos(a) * sp, Math.sin(a) * sp - 60, rnd(2.6, 4), false)); }
    for (i = 0; i < nd; i++) { a = rnd(0, TAU); sp = rnd(30, 130); parts.push(mkDot(x, y, Math.cos(a) * sp, Math.sin(a) * sp, rnd(0.9, 1.7), false)); }
  }
  function tick(t) {
    requestAnimationFrame(tick);
    var dt = Math.min(0.05, (t - lastT) / 1000 || 0); lastT = t;
    if (reduce) return;
    fx.clearRect(0, 0, W, H);
    var np = 0, i, p, a;
    for (i = 0; i < parts.length; i++) if (parts[i].amb && parts[i].k === 'p') np++;
    for (i = parts.length - 1; i >= 0; i--) {
      p = parts[i]; p.age += dt;
      p.vx += -p.vx * p.drag * dt; p.vy += (p.grav - p.vy * p.drag) * dt;
      p.x += (p.vx + Math.sin(p.age * p.sf + p.ph) * p.sa) * dt; p.y += p.vy * dt;
      if (p.k === 'p') { p.rot += p.vr * dt; p.fl += p.vf * dt; }
      a = p.a;
      if (p.life !== Infinity) { var left = p.life - p.age; if (left <= 0) { parts.splice(i, 1); continue; } a *= Math.min(1, left / (p.life * 0.35)); }
      if (p.amb) {
        if (p.k === 'p' && p.y > H + 24) { if (np > ambTarget) { parts.splice(i, 1); np--; continue; } p.y = -20; p.x = rnd(0, W); p.vy = rnd(20, 40); }
        if (p.k === 'd') { if (p.y < -10) { p.y = H + 10; p.x = rnd(0, W); } a *= 0.55 + 0.45 * Math.sin(p.age * 2 + p.ph); }
      } else if (p.y > H + 60 || p.y < -400) { parts.splice(i, 1); continue; }
      if (p.k === 'p') {
        fx.save(); fx.translate(p.x, p.y); fx.rotate(p.rot); fx.scale(Math.abs(Math.cos(p.fl)) * 0.85 + 0.15, 1);
        fx.globalAlpha = a; fx.fillStyle = p.col; var s = p.s;
        fx.beginPath(); fx.moveTo(0, -s); fx.bezierCurveTo(s * 0.95, -s * 0.5, s * 0.75, s * 0.7, 0, s); fx.bezierCurveTo(-s * 0.75, s * 0.7, -s * 0.95, -s * 0.5, 0, -s); fx.fill();
        fx.globalAlpha = a * 0.5; fx.strokeStyle = 'rgba(168,40,106,.55)'; fx.lineWidth = 0.6; fx.beginPath(); fx.moveTo(0, -s * 0.8); fx.lineTo(0, s * 0.8); fx.stroke();
        fx.restore();
      } else {
        fx.globalAlpha = a * 0.22; fx.fillStyle = '#f0b84e'; fx.beginPath(); fx.arc(p.x, p.y, p.s * 3, 0, TAU); fx.fill();
        fx.globalAlpha = a; fx.fillStyle = '#ffd66b'; fx.beginPath(); fx.arc(p.x, p.y, p.s, 0, TAU); fx.fill();
      }
    }
    fx.globalAlpha = 1;
  }
  sizeFx(); if (!reduce) ensureAmbient();
  window.addEventListener('resize', sizeFx);

  /* ---------- Screens ---------- */
  var screens = $$('.screen'), stepEls = $$('.stepper li'), current = 'welcome';
  function go(name) {
    current = name;
    screens.forEach(function (s) {
      var on = s.id === 's-' + name;
      s.hidden = !on; s.classList.remove('enter');
      if (on) { void s.offsetWidth; s.classList.add('enter'); }
    });
    var el = $('#s-' + name), step = +el.dataset.step;
    stepEls.forEach(function (li, i) {
      li.classList.toggle('active', i === step); li.classList.toggle('done', i < step);
      if (i === step) li.setAttribute('aria-current', 'step'); else li.removeAttribute('aria-current');
    });
    ambTarget = name === 'letter' ? 6 : 14;
    if (!reduce) ensureAmbient();
    window.scrollTo(0, 0);
    try { el.focus({ preventScroll: true }); } catch (e) {}
    if (hooks[name]) hooks[name]();
  }
  $$('[data-go]').forEach(function (b) { b.addEventListener('click', function () { go(b.dataset.go); }); });

  /* ---------- Welcome ---------- */
  var introBtn = $('#introLily'), introLily = mount($('#introHost')), introDone = false;
  introBtn.addEventListener('click', function () {
    if (introDone) return; introDone = true;
    bloom(introLily); introBtn.classList.add('done'); introBtn.setAttribute('aria-label', 'Flor abierta');
    $('#introHint').hidden = true;
    var c = center(introLily); burst(c.x, c.y, 16, 24);
    setTimeout(function () { var r = $('#introReveal'); r.hidden = false; r.classList.add('fade-in'); }, reduce ? 0 : 1700);
  });

  /* ---------- Bouquet ---------- */
  var FL = [{ x: 50, y: 19, w: 35, d: 0 }, { x: 21, y: 40, w: 31, d: 0.8 }, { x: 79, y: 40, w: 31, d: 1.6 }, { x: 31, y: 63, w: 30, d: 2.4 }, { x: 69, y: 63, w: 30, d: 3.2 }];
  (function buildStems() {
    var rr = mulberry(42), h = '', i;
    for (i = 0; i < 15; i++) {
      var tx = 18 + rr() * 64, ty = 30 + rr() * 32, bx = 50 + (tx - 50) * 0.1;
      h += '<path d="M' + bx.toFixed(1) + ' 118L' + bx.toFixed(1) + ' 100C' + bx.toFixed(1) + ' 90 ' + tx.toFixed(1) + ' ' + (ty + 24).toFixed(1) + ' ' + tx.toFixed(1) + ' ' + ty.toFixed(1) + '" fill="none" stroke="#5a9a63" stroke-width=".4"/>';
      for (var k = 0; k < 4; k++) h += '<circle cx="' + (tx + (rr() - 0.5) * 3.4).toFixed(1) + '" cy="' + (ty + (rr() - 0.5) * 3.4).toFixed(1) + '" r="' + (0.8 + rr() * 0.7).toFixed(1) + '" fill="' + (k % 2 ? '#f7a8c9' : '#ffd1e4') + '"/>';
    }
    h += '<path d="M49 98C40 80 26 70 14 68C24 84 38 92 49 98Z" fill="#2f6b45"/><path d="M51 98C60 80 74 70 86 68C76 84 62 92 51 98Z" fill="#2a6a40"/><path d="M50 100C44 86 34 80 24 78C32 90 42 96 50 100Z" fill="#3f8a55"/><path d="M50 100C56 86 66 80 76 78C68 90 58 96 50 100Z" fill="#3a824f"/>';
    FL.forEach(function (f) {
      var bx = 50 + (f.x - 50) * 0.1, ty = f.y + f.w * 0.26;
      h += '<path d="M' + bx + ' 118L' + bx + ' 100C' + bx + ' 88 ' + f.x + ' ' + (ty + 26) + ' ' + f.x + ' ' + ty + '" fill="none" stroke="#3d7a4c" stroke-width="1.05" stroke-linecap="round"/>';
    });
    $('#stemsG').innerHTML = h;
  })();
  var lilies = [], btns = [], seen = [], seenCount = 0;
  FL.forEach(function (f, i) {
    var b = document.createElement('button'); b.type = 'button'; b.className = 'lily-btn';
    b.style.cssText = '--w:' + f.w + '%;left:' + f.x + '%;top:' + (f.y / 125 * 100) + '%;--d:' + f.d + 's';
    b.setAttribute('aria-label', C.flowers[i].label + ', flor cerrada');
    var ring = document.createElement('span'); ring.className = 'ring'; b.appendChild(ring);
    var host = document.createElement('span'); host.className = 'lh'; b.appendChild(host);
    $('#bInner').appendChild(b); btns.push(b); lilies.push(mount(host));
    b.addEventListener('click', function () { openFlower(i); });
  });
  function updateCounter() { $('#counter').textContent = seenCount + ' de ' + FL.length + ' flores abiertas'; }
  function openFlower(i) {
    var first = !seen[i];
    if (first) { seen[i] = true; seenCount++; bloom(lilies[i]); btns[i].classList.add('done'); btns[i].setAttribute('aria-label', C.flowers[i].label + ', flor abierta'); var c = center(lilies[i]); burst(c.x, c.y, 7, 14); }
    var m = $('#msg'); m.innerHTML = '';
    var box = document.createElement('div'), t = document.createElement('h3'), x = document.createElement('p');
    t.className = 'm-title'; t.textContent = C.flowers[i].label; x.className = 'm-text'; x.textContent = C.flowers[i].text;
    box.appendChild(t); box.appendChild(x); m.appendChild(box);
    updateCounter();
    if (first && seenCount === FL.length) setTimeout(function () { var n = $('#bouquetNext'); n.hidden = false; n.classList.add('fade-in'); var c2 = center(lilies[0]); burst(c2.x, c2.y, 22, 28); }, reduce ? 0 : 900);
  }
  $('#bouquetNext').addEventListener('click', function () { go('ribbon'); });
  updateCounter();

  /* ---------- Ribbon ---------- */
  var giftLily = mount($('#giftHost')), untied = false, giftBtn = $('#gift');
  function untie() {
    if (untied) return; untied = true;
    giftBtn.classList.add('undone'); $('#untie').disabled = true;
    var c = center(giftBtn); burst(c.x, c.y, 14, 18);
    setTimeout(function () { go('letter'); }, reduce ? 0 : 1500);
  }
  giftBtn.addEventListener('click', untie); $('#untie').addEventListener('click', untie);

  /* ---------- Letter ---------- */
  var L = C.letter, pagesEl = $('#pages'), page = 0, paperLily = mount($('#paperHost'), { spin: true });
  (function buildPages() {
    var total = 0;
    L.pages.forEach(function (ps) { ps.forEach(function (t) { total += t.split(/\s+/).length; }); });
    var step = Math.min(0.055, 4.2 / Math.max(total / L.pages.length, 1));
    L.pages.forEach(function (paras, pi) {
      var d = document.createElement('div'), idx = 0; d.className = 'pg'; d.style.setProperty('--st', step.toFixed(3) + 's');
      function words(el, text) {
        var ws = text.split(/\s+/);
        ws.forEach(function (w, j) {
          var s = document.createElement('span'); s.className = 'w'; s.style.setProperty('--i', idx++); s.textContent = w; el.appendChild(s);
          if (j < ws.length - 1) el.appendChild(document.createTextNode(' '));
        });
      }
      if (pi === 0) { var g = document.createElement('h2'); g.className = 'greeting'; words(g, L.greeting); d.appendChild(g); }
      paras.forEach(function (t) { var p = document.createElement('p'); words(p, t); d.appendChild(p); });
      if (pi === L.pages.length - 1) {
        var sg = document.createElement('p'); sg.className = 'sign'; words(sg, L.closing);
        var b = document.createElement('b'); words(b, L.signed); sg.appendChild(b); d.appendChild(sg);
      }
      pagesEl.appendChild(d);
    });
  })();
  var prevB = $('#prevPage'), nextB = $('#nextPage');
  function setPage(n) {
    page = Math.max(0, Math.min(L.pages.length - 1, n));
    $$('.pg').forEach(function (d, i) { d.classList.toggle('on', i === page); });
    $('#pageNo').textContent = (page + 1) + ' / ' + L.pages.length;
    var last = page === L.pages.length - 1;
    prevB.style.visibility = page === 0 ? 'hidden' : 'visible';
    nextB.classList.toggle('heart', last);
    nextB.setAttribute('aria-label', last ? 'Llegar al final' : 'Página siguiente');
    nextB.querySelector('use').setAttribute('href', last ? '#i-heart' : '#i-chev');
  }
  function turn(d) {
    var c = center(d > 0 ? nextB : prevB); burst(c.x, c.y, 5, 6);
    if (d > 0 && page === L.pages.length - 1) go('final'); else setPage(page + d);
  }
  prevB.addEventListener('click', function () { turn(-1); });
  nextB.addEventListener('click', function () { turn(1); });
  document.addEventListener('keydown', function (e) {
    if (current !== 'letter') return;
    if (e.key === 'ArrowRight') turn(1);
    if (e.key === 'ArrowLeft' && page > 0) turn(-1);
  });
  setPage(0);

  /* ---------- Final ---------- */
  var finalLily = mount($('#finalHost'), { spin: true });
  $('#loveBtn').addEventListener('click', function (e) {
    var n = $('#loveNote'); n.textContent = C.final.note; n.hidden = false;
    var c = center(e.currentTarget); burst(c.x, c.y, 44, 44);
  });
  $('#replay').addEventListener('click', function () {
    introDone = false; unbloom(introLily); introBtn.classList.remove('done'); introBtn.setAttribute('aria-label', 'Tocar la flor para que se abra');
    $('#introHint').hidden = false; $('#introReveal').hidden = true; $('#introReveal').classList.remove('fade-in');
    seen = []; seenCount = 0; lilies.forEach(function (l, i) { unbloom(l); btns[i].classList.remove('done'); btns[i].setAttribute('aria-label', C.flowers[i].label + ', flor cerrada'); });
    $('#msg').innerHTML = '<p class="msg-hint">Toca una flor para abrirla</p>'; updateCounter(); $('#bouquetNext').hidden = true; $('#bouquetNext').classList.remove('fade-in');
    untied = false; giftBtn.classList.remove('undone'); $('#untie').disabled = false; unbloom(giftLily);
    unbloom(paperLily); unbloom(finalLily); $('#loveNote').hidden = true; setPage(0);
    go('welcome');
  });

  /* ---------- Per-screen entrances ---------- */
  var hooks = {
    ribbon: function () { setTimeout(function () { if (current === 'ribbon') { bloom(giftLily); var c = center(giftLily); burst(c.x, c.y, 6, 12); } }, reduce ? 0 : 700); },
    letter: function () { setPage(0); setTimeout(function () { if (current === 'letter') bloom(paperLily); }, reduce ? 0 : 300); },
    final: function () { setTimeout(function () { if (current === 'final') { bloom(finalLily); var c = center(finalLily); burst(c.x, c.y, 24, 30); } }, reduce ? 0 : 500); }
  };

  go('welcome');
  requestAnimationFrame(tick);
})();
