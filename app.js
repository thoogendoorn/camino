/* Camino — views and routing. */
(function (G) {
  'use strict';
  const { $, $$, esc } = C;
  const S = () => C.S;
  const A = G.App = {};
  const ROUTES = ['today', 'camino', 'grammar', 'review', 'gym', 'exams', 'decks', 'verbs', 'library', 'tutor', 'progress', 'prefs', 'about'];
  let unitStep = {}; // remembered open step per unit (in memory)
  let readTab = {};  // remembered reading tab per unit

  G.ICON = {
    speaker: '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>',
    turtle: '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M3 15c0-4 3.6-7 8-7s8 3 8 7z" fill="currentColor"/><circle cx="20.5" cy="13" r="2" fill="currentColor"/><path d="M6 15v3M16 15v3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M7 12l2-3M11 11V8M15 12l-2-3" stroke="var(--bg)" stroke-width="1.4"/></svg>',
    mic: '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" fill="currentColor"/><path d="M6 11a6 6 0 0 0 12 0M12 17v4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>',
    arrow: '<svg viewBox="0 0 40 24" width="40" height="24" aria-hidden="true"><path d="M2 12h26M20 4l10 8-10 8" stroke="currentColor" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    shell: '<svg viewBox="0 0 40 40" aria-hidden="true"><g stroke="#f5b700" stroke-width="2.4" stroke-linecap="round" fill="none"><path d="M20 35L4 14M20 35L9 9M20 35L15 6M20 35V5M20 35L25 6M20 35L31 9M20 35L36 14"/><path d="M4 14C8 6 14 4 20 4s12 2 16 10"/></g></svg>',
    lock: '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2" fill="currentColor"/><path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" stroke-width="2" fill="none"/></svg>',
    check: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M5 12l5 5 9-10" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  // ---------- routing ----------
  A.route = () => { const h = (location.hash || '').slice(1); if (/^unit-[a-z0-9-]+$/.test(h)) return h; return ROUTES.includes(h) ? h : 'today'; };
  A.go = r => { if (location.hash.slice(1) === r) A.render(); else location.hash = r; };
  addEventListener('hashchange', () => { if (!EX.isActive()) A.render(); window.scrollTo(0, 0); });

  const views = () => ({ today: viewToday, camino: viewCamino, grammar: () => G.GRAM.view(), review: viewReview, gym: viewGym, exams: () => G.EXAMS.view(), decks: viewDecks, verbs: viewVerbs, library: viewLibrary, tutor: viewTutor, progress: viewProgress, prefs: viewSettings, about: viewAbout });
  A.render = () => {
    const r = A.route();
    $$('#nav a').forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + r || (r.startsWith('unit-') && a.getAttribute('href') === '#camino')));
    const main = $('#main');
    if (!C.UNITS.length) { const miss = (G.CAMINO_MISSING || []); main.innerHTML = `<section class="band"><h1>The course files didn't load</h1><p class="lead">Camino started, but found no lessons. ${miss.length ? 'These files are missing or could not be loaded:' : 'The <code>data</code> folder is probably missing.'}</p>${miss.length ? `<ul>${miss.map(f => `<li><code>${esc(f)}</code></li>`).join('')}</ul>` : ''}<p>Make sure the <code>data</code> folder (with all its files) sits next to <code>index.html</code>, then reload. On GitHub, drag the whole <code>data</code> folder from your file manager onto the upload page; the "choose your files" button can't select folders.</p></section>`; return; }
    try {
      main.innerHTML = r.startsWith('unit-') ? viewUnit(r.slice(5)) : views()[r]();
      (binders[r.startsWith('unit-') ? 'unit' : r] || (() => { }))(r.slice(5));
    } catch (e) { console.error(e); main.innerHTML = `<section class="band"><h1>Something went wrong</h1><pre>${esc(e.stack || e)}</pre></section>`; }
    syncBadge();
  };
  const syncBadge = () => { const el = $('#syncstate'); if (el) { el.textContent = C.syncLabel(); el.dataset.s = C.syncState(); } };
  const binders = { grammar: () => G.GRAM.bind() };
  const link = (r, label, cls = 'btn') => `<a class="${cls}" href="#${r}">${label}</a>`;
  const minutesToday = () => { const d = C.dayRec(); return (d.t || 0) / 60 + (d.i || 0); };
  const nextStep = u => { const st = C.uState(u.id).steps; return C.STEPS.find(([k]) => !st[k]) || C.STEPS[8]; };
  const bar = (frac, cls = '') => `<div class="pbar ${cls}"><i style="width:${Math.round(100 * Math.min(1, frac))}%"></i></div>`;
  const sayBtn = text => C.canSpeak() ? `<button class="btn icon say" data-say="${esc(text)}" aria-label="Listen">${G.ICON.speaker}</button>` : '';
  const bindSay = root => $$('[data-say]', root).forEach(b => b.onclick = () => C.speak(b.dataset.say, { slow: !!b.dataset.slow }));
  const exHtml = v => { const x = C.exOf(v); if (!x) return ''; return x.target ? esc(x.pre) + '<b>' + esc(x.target) + '</b>' + esc(x.post) : esc(x.es); };
  const vocabTable = (src, opts = {}) => `<table class="vocab"><tbody>${src.vocab.map((v, i) => { const id = src.vids[i], c = S().cards[id]; const x = C.exOf(v); return `<tr class="${c ? (c.s >= 21 ? 'k' : 'l') : ''}"><td class="es">${esc(v[0])}</td><td>${esc(v[1])}${x ? `<div class="vex"><span lang="es">${exHtml(v)}</span><span class="muted"> · ${esc(x.en)}</span></div>` : ''}</td><td>${sayBtn(x ? x.es : v[0])}</td></tr>`; }).join('')}</tbody></table>`;
  // next deck to suggest: first unfinished deck at or below your level
  A.nextDeck = () => { const lv = C.lvIdx(C.currentLevel()); return C.DECKS.find(d => C.lvIdx(d.level) <= lv && C.learnedOf(d) < d.vids.length) || C.DECKS.find(d => C.learnedOf(d) < d.vids.length) || null; };
  A.learn = (src, title) => {
    const items = EX.learnItems(src);
    if (!items) { C.toast('All words here are learned. They come back in your reviews.'); return false; }
    if (C.newToday() >= (S().settings.newPerDay || 30)) C.toast('You\'ve passed today\'s new-word target. Fine to continue, but more reviews will follow tomorrow.');
    EX.run({ title, items, onDone: () => { C.checkBadges(); A.render(); } });
    return true;
  };

  // ---------- TODAY ----------
  function ring(frac, label, sub) {
    const r = 52, c = 2 * Math.PI * r, f = Math.min(1, frac);
    return `<svg class="ring" viewBox="0 0 140 140" role="img" aria-label="${esc(label + ' ' + sub)}"><circle cx="70" cy="70" r="${r}" class="ring-bg"/><circle cx="70" cy="70" r="${r}" class="ring-fg" stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - f)}" transform="rotate(-90 70 70)"/><text x="70" y="68" class="ring-num">${esc(label)}</text><text x="70" y="90" class="ring-sub">${esc(sub)}</text></svg>`;
  }
  function viewToday() {
    const u = C.currentUnit(), lv = C.LEVELS.find(l => l.id === u.level), due = C.dueCards().length, st = C.stats();
    const goal = S().settings.goal, done = minutesToday(), rec = C.dayRec();
    const [, sl, sd] = nextStep(u);
    const fresh = !Object.keys(S().cards).length;
    const hr = new Date().getHours(); const hi = hr < 13 ? 'Buenos días' : hr < 21 ? 'Buenas tardes' : 'Buenas noches';
    const inputT = Math.round(goal * 0.33), reviewMin = Math.min(30, Math.max(due ? 3 : 0, Math.round(due * 0.2)));
    const dk = A.nextDeck(), newT = S().settings.newPerDay || 30, newN = C.newToday();
    const backupDue = C.syncState() !== 'on' && Object.keys(S().cards).length > 50 && Date.now() - (S().lastBackup || S().created) > 14 * 864e5;
    return `<section class="hero band"><div class="hero-in">
      <div class="hero-text"><p class="kicker">${new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}${st.streak > 1 ? ` · 🔥 ${st.streak}-day streak` : ''}</p><h1>${hi}.</h1>
        <p class="lead">Stage ${u.n + 1} of ${C.UNITS.length} · <b>${esc(u.level)} ${esc(lv.name)}</b> · ${esc(lv.stage)}</p>
        <div class="mini-route" aria-hidden="true">${C.UNITS.map(x => `<i class="${C.isDone(x.id) ? 'd' : x.id === u.id ? 'c' : ''}"></i>`).join('')}</div></div>
      <div class="hero-ring">${ring(done / goal, Math.round(done) + '′', 'of ' + goal + ' min today')}</div></div></section>
    ${fresh ? `<section class="band welcome"><h2>Welcome to your Camino</h2><p>Every unit is a stage of the Camino de Santiago, from A1 in Roncesvalles to C2 in Santiago. A good 45-minute day: <b>clear your reviews</b>, <b>do one or two lesson steps</b>, <b>learn a batch of new words</b>, and <b>listen to real Spanish for ~15 minutes</b>. Already know some Spanish? <a href="#exams">Take the 15-minute placement test</a> and start at your level.</p></section>` : ''}
    ${backupDue ? `<section class="band"><p class="note">Your progress lives only in this browser. <a href="#prefs">Download a backup</a> or set up free sync so you never lose it.</p></section>` : ''}
    <section class="band plan"><h2>Today's plan</h2><div class="cards4">
      <a class="plan-card ${due ? 'hot' : ''}" href="#review"><span class="pc-k">1 · Review</span><span class="pc-big">${due}</span><span class="pc-s">${due ? 'cards due · about ' + reviewMin + ' min' : 'Nothing due. ' + (rec.n ? rec.n + ' reviewed today.' : 'Come back tomorrow.')}</span></a>
      <a class="plan-card" href="#unit-${u.id}"><span class="pc-k">2 · Lesson</span><span class="pc-big small">${esc(u.title)}</span><span class="pc-s">Next: <b>${esc(sl)}</b> · ${esc(sd)}</span></a>
      <a class="plan-card" href="#decks"><span class="pc-k">3 · New words</span><span class="pc-big">${newN}<small>/${newT}</small></span><span class="pc-s">${dk ? 'Suggested deck: <b>' + esc(dk.title) + '</b> · ' + C.learnedOf(dk) + '/' + dk.vids.length : 'All decks learned'}</span></a>
      <a class="plan-card" href="#library"><span class="pc-k">4 · Input</span><span class="pc-big">${Math.round(rec.i || 0)}<small>/${inputT} min</small></span><span class="pc-s">${esc((u.res[0] || {}).t || 'Listen to a podcast')}</span></a>
    </div>
    ${C.weakTags().length ? `<p class="note">Weak points this week: <b>${C.weakTags().slice(0, 3).map(t => esc(t.tag)).join('</b>, <b>')}</b>. <a href="#gym">Practise them for 10 minutes</a>.</p>` : ''}
    <div class="row wrap"><a class="btn primary" href="#unit-${u.id}">Continue stage ${u.n + 1}</a>${due ? '<a class="btn" href="#review">Start reviews</a>' : ''}<a class="btn" href="#gym">Extra practice</a>${C.ai.available() ? '<a class="btn" href="#tutor">Talk with the tutor</a>' : ''}</div></section>
    <section class="band"><h2>This week</h2>${weekStrip()}<div class="kpis">
      <div><b>${C.fmtN(st.known)}</b><span>words known long-term</span></div><div><b>${C.fmtN(st.words)}</b><span>words started of ${C.fmtN(C.VOCAB_TOTAL)}</span></div><div><b>${C.fmtMin(st.totalMin)}</b><span>total study</span></div><div><b>${st.unitsDone}/${C.UNITS.length}</b><span>stages complete</span></div><div><b>${Math.round(st.acc * 100)}%</b><span>review accuracy</span></div></div></section>`;
  }
  function weekStrip() {
    const goal = S().settings.goal; const days = [];
    for (let k = 6; k >= 0; k--) { const t = Date.now() - k * 864e5, d = S().days[C.dayKey(t)] || {}; days.push({ lab: new Date(t).toLocaleDateString('en-GB', { weekday: 'short' }), m: (d.t || 0) / 60 + (d.i || 0) }); }
    return `<div class="week">${days.map(d => `<div class="wd"><div class="wbar"><i style="height:${Math.min(100, 100 * d.m / goal)}%"></i></div><span>${esc(d.lab)}</span><small>${Math.round(d.m)}′</small></div>`).join('')}</div>`;
  }

  // ---------- CAMINO (path) ----------
  function viewCamino() {
    const cur = C.currentUnit();
    return `<section class="band camino-head"><h1>El Camino</h1><p class="lead">${C.UNITS.filter(u => C.isDone(u.id)).length} of ${C.UNITS.length} stages walked. Each level ends in a city of the Camino Francés.</p>${S().settings.freeRoam ? '<p class="muted">Free roam is on: every stage is open.</p>' : ''}</section>
    <div class="camino" id="camino">${C.LEVELS.map(lv => {
      const us = C.UNITS.filter(u => u.level === lv.id), p = C.levelProgress(lv.id);
      if (!us.length) return '';
      return `<section class="etapa" data-l="${lv.id}"><header class="etapa-h"><div class="lvl">${lv.id}</div><div><h2>Etapa ${lv.etapa} · ${esc(lv.stage)}</h2><p>${esc(lv.name)} · ${esc(lv.blurb)} <b>${p.done}/${p.total}</b></p></div></header>
      <ol class="stops">${us.map((u, k) => {
        const done = C.isDone(u.id), open = C.isUnlocked(u), here = u.id === cur.id;
        const steps = C.uState(u.id).steps, n = Object.keys(steps).length;
        return `<li class="stop ${done ? 'done' : here ? 'here' : open ? 'open' : 'locked'} ${k % 2 ? 'r' : 'l'}"><a href="#unit-${u.id}"><span class="dot">${done ? G.ICON.check : here ? G.ICON.arrow : open ? u.n + 1 : G.ICON.lock}</span><span class="st-t"><small>${u.n + 1} · ${u.level} · ${u.vocab.length} words</small>${esc(u.title)}</span>${!done && n ? `<span class="st-p">${n}/9 steps</span>` : ''}</a></li>`;
      }).join('')}</ol></section>`;
    }).join('')}<div class="santiago">${G.ICON.shell}<span>Santiago de Compostela: fluency, then a lifetime of reading and listening.</span></div></div>`;
  }
  binders.camino = () => {
    const box = $('#camino'); if (!box) return;
    const draw = () => {
      $$('.etapa', box).forEach(et => {
        $$('svg.trail', et).forEach(s => s.remove());
        const ol = $('.stops', et), r0 = ol.getBoundingClientRect();
        const pts = $$('.dot', ol).map(d => { const r = d.getBoundingClientRect(); return [r.left - r0.left + r.width / 2, r.top - r0.top + r.height / 2]; });
        if (pts.length < 2) return;
        let dpath = `M${pts[0][0]},${pts[0][1]}`;
        for (let i = 1; i < pts.length; i++) { const [x0, y0] = pts[i - 1], [x1, y1] = pts[i], my = (y0 + y1) / 2; dpath += ` C${x0},${my} ${x1},${my} ${x1},${y1}`; }
        const doneN = $$('.stop.done', ol).length;
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); svg.setAttribute('class', 'trail');
        svg.setAttribute('width', r0.width); svg.setAttribute('height', r0.height);
        svg.innerHTML = `<path d="${dpath}" class="trail-bg"/>${doneN ? `<path d="${dpath}" class="trail-done" pathLength="${pts.length - 1}" stroke-dasharray="${Math.min(doneN, pts.length - 1)} ${pts.length}"/>` : ''}`;
        ol.prepend(svg);
      });
    };
    draw(); const ro = new ResizeObserver(() => draw()); ro.observe(box);
    const here = $('.stop.here', box); if (here && !A._scrolled) { A._scrolled = true; setTimeout(() => here.scrollIntoView({ block: 'center', behavior: 'smooth' }), 120); }
  };

  // ---------- UNIT ----------
  function viewUnit(id) {
    const u = C.UNIT[id]; if (!u) return `<section class="band"><h1>Stage not found</h1>${link('camino', 'Back to the Camino')}</section>`;
    const us = C.uState(u.id), open = C.isUnlocked(u), lv = C.LEVELS.find(l => l.id === u.level);
    const cur = unitStep[u.id] || (open ? nextStep(u)[0] : 'check');
    const prev = C.UNITS[u.n - 1], next = C.UNITS[u.n + 1];
    const learned = C.learnedOf(u);
    return `<section class="band unit-head"><p class="kicker"><a href="#camino">El Camino</a> · Etapa ${lv.etapa} · ${u.level} ${esc(lv.name)} · Stage ${u.n + 1}</p><h1>${esc(u.title)}</h1>
      <ul class="cando">${u.goal.map(g => `<li>${esc(g)}</li>`).join('')}</ul>
      <p class="muted">${u.vocab.length} words (${learned} learned) · ${u.drills.length} grammar drills · ${u.sentences.length} key sentences · ${u.readings.length} reading${u.readings.length === 1 ? '' : 's'}</p>
      ${us.done ? `<p class="stamp">${G.ICON.shell} Stage complete · best checkpoint ${Math.round(us.best * 100)}%</p>` : !open ? `<p class="note">${G.ICON.lock} This stage opens when you finish stage ${u.n}. You can take its checkpoint now to skip ahead.</p>` : ''}</section>
    <div class="unit-grid"><nav class="steps" aria-label="Steps">${C.STEPS.map(([k, l, d], i) => `<button class="step ${us.steps[k] ? 'ok' : ''} ${cur === k ? 'cur' : ''}" data-step="${k}" ${!open && k !== 'check' ? 'disabled' : ''}><span class="sn">${us.steps[k] ? G.ICON.check : i + 1}</span><span><b>${l}</b><small>${d}</small></span></button>`).join('')}</nav>
    <div class="step-body" id="stepbody">${stepBody(u, open ? cur : 'check')}</div></div>
    <section class="band unit-nav">${prev ? `<a class="btn ghost" href="#unit-${prev.id}">← ${esc(prev.title)}</a>` : '<span></span>'}${next ? `<a class="btn ghost" href="#unit-${next.id}">${esc(next.title)} →</a>` : ''}</section>`;
  }
  function stepBody(u, k) {
    const us = C.uState(u.id);
    const head = (t, d) => `<h2>${t}</h2><p class="muted">${d}</p>`;
    if (k === 'learn') {
      const learned = C.learnedOf(u), total = u.vids.length, left = total - learned, b = S().settings.batch || 10;
      return head('Words', `${total} words and phrases, each with an example sentence. Learn them ${b} at a time: meet each word, recognise it, then recall it. Learned words join your daily review.`) +
        `<div class="learnbox">${bar(learned / total)}<p><b>${learned}</b> of ${total} learned${left ? ` · ${Math.ceil(left / b)} batch${Math.ceil(left / b) > 1 ? 'es' : ''} to go` : ' · all in your review deck'}</p>
        <div class="row wrap">${left ? `<button class="btn primary" data-learn="1">Learn ${Math.min(b, left)} new words</button>` : ''}${learned ? `<button class="btn ${left ? '' : 'primary'}" data-wp="1">Practise this stage's words</button>` : ''}</div></div>
        ${vocabTable(u)}`;
    }
    if (k === 'grammar') {
      let conj = '';
      if (u.conj) { const t = Verbs.TENSES.find(t => t.id === u.conj.t); conj = `<h3>${esc(t.es)}: model verbs</h3><div class="scroll"><table class="conj"><thead><tr><th></th>${u.conj.v.slice(0, 5).map(v => `<th>${esc(v)}</th>`).join('')}</tr></thead><tbody>${[0, 1, 2, 3, 4, 5].map(p => `<tr><th>${esc(u.conj.t.startsWith('imp') && u.conj.t !== 'impf' && u.conj.t !== 'impsubj' ? ['—', 'tú', 'usted', 'nosotros', 'vosotros', 'ustedes'][p] : Verbs.PERS[p])}</th>${u.conj.v.slice(0, 5).map(v => { let f = '—'; try { f = Verbs.conj(v, u.conj.t)[p] || '—'; } catch (e) { } return `<td>${esc(f)}</td>`; }).join('')}</tr>`).join('')}</tbody></table></div>`; }
      return `<p class="kicker">Step 1 · read this before the exercises</p><h2>${esc(u.grammar.t)}</h2><div class="grammar">${u.grammar.h}</div>${conj}<h3>In context</h3><ul class="examples">${u.sentences.map(([es, en]) => `<li><span class="es">${esc(es)}</span>${sayBtn(es)}<span class="en">${esc(en)}</span></li>`).join('')}</ul>
      <div class="row"><button class="btn primary" data-mark="grammar">${us.steps.grammar ? 'Read ✓ · on to the words' : 'Got it · on to the words'}</button><a class="btn ghost" href="#grammar">All rules</a>${u.conj ? '<a class="btn" href="#verbs">Drill these verbs</a>' : ''}</div>
      <h3>Worked examples (the drills of this stage, answered)</h3><ol class="drill-list">${u.drills.map(d => `<li><span lang="es">${esc(d[0]).replace(/_{3}(\s*_{3})*/, '<span class="gap">' + esc(d[1].split('|')[0]) + '</span>')}</span>${d[2] ? `<span class="muted"> · ${esc(d[2])}</span>` : ''}</li>`).join('')}</ol>`;
    }
    if (k === 'practice') return head('Practice', `${u.drills.length} grammar gaps (new ones first), ${u.conj ? 'conjugations, ' : ''}sentence building, translation, words in context, matching and el/la, plus cards from earlier stages. Every session is a fresh mix, so repeat it as often as you like.`) + `<div class="row wrap"><button class="btn primary" data-run="practice">${us.steps.practice ? 'Practise again' : 'Start practice'}</button><button class="btn" data-run="drills">All ${u.drills.length} grammar gaps</button></div>`;
    if (k === 'read') {
      if (!u.readings.length) return '<p>No reading for this stage.</p>';
      const ti = Math.min(readTab[u.id] || 0, u.readings.length - 1), r = u.readings[ti];
      return `<div class="seg rtabs" role="tablist">${u.readings.map((x, i) => `<button class="${i === ti ? 'on' : ''}" data-rt="${i}" role="tab">${us.reads[i] != null ? '✓ ' : ''}Text ${i + 1}</button>`).join('')}</div>
      <h2>${esc(r.t)}</h2><p class="muted">Read it once for the gist, then tap any word you don't know.</p>
      ${C.canSpeak() ? `<div class="row"><button class="btn" data-say="${esc(r.x)}">${G.ICON.speaker} Read aloud</button><button class="btn ghost" data-say="${esc(r.x)}" data-slow="1">${G.ICON.turtle} Slowly</button></div>` : ''}
      <div class="reading" lang="es">${r.x.split('\n').map(p => `<p>${p.split(/([A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)/).map((t, i) => i % 2 ? `<span class="w">${esc(t)}</span>` : esc(t)).join('')}</p>`).join('')}</div><div class="gloss" id="gloss" hidden></div>
      <h3>Comprehension</h3><div class="rq">${r.q.map((q, qi) => `<div class="q" data-q="${qi}"><p>${esc(q[0])}</p><div class="opts small">${q[1].map((o, i) => `<button class="opt" data-a="${i}">${esc(o)}</button>`).join('')}</div></div>`).join('')}</div>
      <p class="muted">${Object.keys(us.reads).length} of ${u.readings.length} texts done.</p>`;
    }
    if (k === 'listen') return head('Listen', 'Dictation trains your ear to split fast speech into words; listening quizzes check you understand words by sound alone. Use the slow button as often as you need.') + `<div class="row"><button class="btn primary" data-run="listen">Start listening</button></div>`;
    if (k === 'speak') return head('Speak', 'Shadowing: listen, then say the sentence aloud straight away, copying rhythm and intonation. ' + (C.dict ? 'Your microphone checks how well you were understood.' : 'Speech recognition needs Chrome, Edge or Safari; otherwise say it aloud and compare.')) + `<div class="row wrap"><button class="btn primary" data-run="speak">Start speaking</button>${C.ai.available() ? `<a class="btn" href="#tutor" data-talk="${u.id}">Role-play with the tutor</a>` : ''}</div><p class="note">Role-play idea: ${esc(u.talk)}</p>`;
    if (k === 'write') {
      const w = S().writing[u.id] || {};
      return `<h2>Write</h2><p class="prompt-w">${esc(u.write)}</p><textarea id="wtext" rows="9" lang="es" spellcheck="true" placeholder="Escribe aquí…">${esc(w.text || '')}</textarea>
      <div class="row wrap"><span class="muted" id="wcount"></span><button class="btn" id="wsave">Save</button>${C.ai.available() ? '<button class="btn primary" id="wfb">Get feedback</button>' : ''}</div>
      <div class="ai-box" id="wout">${w.fb ? C.md(w.fb) : ''}</div>${C.ai.available() ? '' : '<p class="note">For AI feedback, open this on claude.ai or add your own API key in <a href="#prefs">Settings</a>. Or ask a language-exchange partner to correct it.</p>'}`;
    }
    if (k === 'immerse') return head('Immerse', 'Comprehensible input is how fluency is built: listen to real Spanish that you mostly understand. Open an episode below, then log your minutes. They count towards your input hours.') +
      `<ul class="res">${u.res.map((r, i) => `<li><span class="rk ${r.k}">${r.k}</span><a href="${esc(r.u)}" target="_blank" rel="noopener">${esc(r.t)}</a><button class="btn small" data-log="${i}">Log ${r.m || 15} min</button></li>`).join('')}</ul>`;
    if (k === 'check') return head('Checkpoint', `20 mixed questions from this stage, no second chances. Score 80% or more to complete stage ${u.n + 1}${C.isUnlocked(u) ? '' : ' and skip ahead'}. Passing adds the stage's material to your reviews. Best so far: ${Math.round((us.best || 0) * 100)}%.`) + `<div class="row"><button class="btn primary" data-run="check">Take the checkpoint</button></div>`;
    return '';
  }
  binders.unit = id => {
    const u = C.UNIT[id]; if (!u) return;
    const body = $('#stepbody');
    $$('.step').forEach(b => b.onclick = () => { unitStep[u.id] = b.dataset.step; $$('.step').forEach(x => x.classList.toggle('cur', x === b)); body.innerHTML = stepBody(u, b.dataset.step); bindStep(u, b.dataset.step); if (innerWidth < 760) body.scrollIntoView({ behavior: 'smooth' }); });
    bindStep(u, unitStep[u.id] || (C.isUnlocked(u) ? nextStep(u)[0] : 'check'));
  };
  function advance(u, k) { C.markStep(u.id, k); const nx = nextStep(u); unitStep[u.id] = C.isDone(u.id) ? k : nx[0]; C.checkBadges(); A.render(); }
  function bindStep(u, k) {
    const body = $('#stepbody');
    bindSay(body);
    $$('[data-mark]', body).forEach(b => b.onclick = () => advance(u, b.dataset.mark));
    const lb = $('[data-learn]', body); if (lb) lb.onclick = () => {
      const items = EX.learnItems(u); if (!items) return;
      EX.run({ title: 'Words · ' + u.title, items, onDone: () => { if (C.learnedOf(u) >= u.vids.length) { advance(u, 'learn'); } else { unitStep[u.id] = 'learn'; A.render(); } } });
    };
    const wp = $('[data-wp]', body); if (wp) wp.onclick = () => EX.run({ title: 'Word practice · ' + u.title, items: EX.wordPractice(u.vids.filter(C.has), 25), onDone: () => A.render() });
    $$('[data-run]', body).forEach(run => run.onclick = () => {
      const m = run.dataset.run;
      const cfg = {
        practice: { title: 'Practice · ' + u.title, items: EX.practiceItems(u) },
        drills: { title: 'Grammar gaps · ' + u.title, items: C.shuffle(u.dids).map(EX.drillEx) },
        listen: { title: 'Listening · ' + u.title, items: EX.listenItems(u) },
        speak: { title: 'Speaking · ' + u.title, items: EX.speakItems(u), graded: false, requeue: false },
        check: { title: 'Checkpoint · ' + u.title, items: EX.checkItems(u), requeue: false }
      }[m];
      const pre = m !== 'check' && G.GRAM && G.GRAM.preface(u);
      if (pre) cfg.items = [pre].concat(cfg.items || []);
      EX.run(Object.assign(cfg, {
        onDone: r => {
          if (m === 'check') {
            const us = C.uState(u.id); us.best = Math.max(us.best || 0, r.pct);
            if (r.pct >= 0.8 && !r.early) {
              if (!us.done) { us.done = Date.now(); C.toast('Stage ' + (u.n + 1) + ' complete. ¡Buen Camino!'); }
              // a passed checkpoint puts the whole stage into spaced review
              u.vids.concat(u.sids, u.dids).forEach(id => { if (!S().cards[id]) C.grade(id, 3); });
              C.save(); advance(u, 'check');
            } else { C.save(); C.toast(r.early ? 'Checkpoint stopped.' : 'Not yet: ' + Math.round(r.pct * 100) + '%. Review the mistakes and try again.'); A.render(); }
          } else if (m === 'drills') { if (!r.early && u.dids.every(C.has)) C.markStep(u.id, 'practice'); A.render(); }
          else if (!r.early && (r.n || m === 'speak')) advance(u, m); else A.render();
        }
      }));
    });
    if (k === 'read' && u.readings.length) {
      const ti = Math.min(readTab[u.id] || 0, u.readings.length - 1), rd = u.readings[ti];
      $$('[data-rt]', body).forEach(b => b.onclick = () => { readTab[u.id] = +b.dataset.rt; body.innerHTML = stepBody(u, 'read'); bindStep(u, 'read'); });
      const gl = $('#gloss');
      $$('.reading .w', body).forEach(w => w.onclick = () => {
        $$('.reading .w.sel', body).forEach(x => x.classList.remove('sel')); w.classList.add('sel');
        const g = C.gloss(w.textContent);
        gl.hidden = false;
        gl.innerHTML = `<b lang="es">${esc(w.textContent)}</b> ${g ? '· ' + esc(g) : '· not in your word list'} <a href="https://www.wordreference.com/es/en/translation.asp?spen=${encodeURIComponent(w.textContent.toLowerCase())}" target="_blank" rel="noopener">WordReference</a>${C.canSpeak() ? ` <button class="btn icon say" aria-label="Listen">${G.ICON.speaker}</button>` : ''}`;
        const sb = $('.say', gl); if (sb) sb.onclick = () => C.speak(w.textContent);
        C.speak(w.textContent);
        const r = w.getBoundingClientRect(), pr = body.getBoundingClientRect();
        gl.style.top = (r.bottom - pr.top + 6) + 'px'; gl.style.left = Math.max(0, Math.min(pr.width - 260, r.left - pr.left)) + 'px';
      });
      let right = 0, answered = 0;
      $$('.rq .q', body).forEach(q => $$('.opt', q).forEach(b => b.onclick = () => {
        const qd = rd.q[+q.dataset.q]; const i = +b.dataset.a;
        $$('.opt', q).forEach((x, j) => { x.disabled = true; if (j === qd[2]) x.classList.add('right'); else if (j === i) x.classList.add('wrong'); });
        answered++; if (i === qd[2]) right++;
        if (answered === rd.q.length) {
          const us = C.uState(u.id); us.reads[ti] = right / answered; C.save();
          C.toast(right + ' of ' + answered + ' right.');
          setTimeout(() => {
            if (!body.isConnected || (readTab[u.id] || 0) !== ti) return; // user already moved on
            const nx = u.readings.findIndex((_, i) => us.reads[i] == null);
            if (nx < 0) advance(u, 'read'); else { readTab[u.id] = nx; body.innerHTML = stepBody(u, 'read'); bindStep(u, 'read'); body.scrollIntoView({ behavior: 'smooth' }); }
          }, 1100);
        }
      }));
    }
    if (k === 'write') {
      const ta = $('#wtext'), cnt = $('#wcount');
      const upd = () => { const n = (ta.value.match(/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+/g) || []).length; cnt.textContent = n + ' words'; return n; };
      upd(); ta.oninput = upd;
      const store = (extra = {}) => { S().writing[u.id] = Object.assign({}, S().writing[u.id] || {}, { text: ta.value, ts: Date.now() }, extra); C.save(); };
      $('#wsave').onclick = () => { store(); if (upd() >= 25) { C.markStep(u.id, 'write'); C.toast('Saved. Writing step done.'); advance(u, 'write'); } else C.toast('Saved. Write at least 25 words to complete this step.'); };
      const fbb = $('#wfb'); if (fbb) fbb.onclick = async () => {
        if (upd() < 5) { C.toast('Write a few sentences first.'); return; }
        store(); fbb.disabled = true; const out = $('#wout'); out.textContent = 'Reading your text…';
        try {
          const r = await C.ai.ask(`You are an encouraging Spanish teacher from Spain (Castilian norms: vosotros, Spain vocabulary). The student is at CEFR ${u.level}, unit "${u.title}" (grammar focus: ${u.grammar.t}).\nTask they were given: ${u.write}\nStudent's text:\n"""${ta.value}"""\n\nReply in English with these parts:\n**Corrected version** (Spanish, minimal changes, keep their style).\n**Mistakes** a short list: wrong → right, why (one line each). Max 8.\n**One thing you did well.**\n**Try next** one concrete suggestion to sound more natural, with an example sentence in Spanish.\nBe concise.`, { tier: 'default', onText: ({ text }) => { out.innerHTML = C.md(text); } });
          out.innerHTML = C.md(r.text); store({ fb: r.text }); C.markStep(u.id, 'write'); C.save();
        } catch (e) { out.textContent = C.ai.errText(e); }
        fbb.disabled = false;
      };
    }
    if (k === 'immerse') $$('[data-log]', body).forEach(b => b.onclick = () => { const r = u.res[+b.dataset.log]; logInput(r.m || 15, r.t, r.k); C.markStep(u.id, 'immerse'); b.textContent = 'Logged ✓'; b.disabled = true; setTimeout(() => advance(u, 'immerse'), 700); });
    const tk = $('[data-talk]', body); if (tk) tk.onclick = () => { A.tutorScenario = u.id; };
  }
  function logInput(m, t, k) { S().input.unshift({ id: C.uid(), ts: Date.now(), d: C.today(), m: +m, t: t || 'Listening', k: k || 'listen' }); C.dayRec().i = (C.dayRec().i || 0) + (+m); C.save(); C.checkBadges(); C.toast('Logged ' + m + ' min of input.'); }

  // ---------- REVIEW ----------
  function viewReview() {
    const due = C.dueCards(), n = Object.keys(S().cards).length;
    const soon = Object.values(S().cards).filter(c => c.due > Date.now() && c.due < Date.now() + 864e5).length;
    const byType = t => due.filter(k => k[0] === t).length;
    return `<section class="band"><h1>Repaso</h1><p class="lead">${due.length ? `<b>${due.length}</b> cards are due. Spaced repetition shows each card just before you'd forget it.` : n ? 'All caught up. ¡Enhorabuena!' : 'Your review deck fills up as you learn words in each stage and deck.'}</p>
      ${due.length ? `<div class="kpis"><div><b>${byType('v')}</b><span>words</span></div><div><b>${byType('s')}</b><span>sentences</span></div><div><b>${byType('d') + byType('p')}</b><span>grammar</span></div><div><b>${soon}</b><span>due in next 24 h</span></div></div>
      <div class="row wrap"><button class="btn primary" id="rstart">Review ${Math.min(due.length, S().settings.reviewCap)} cards</button>${due.length > 40 ? '<button class="btn" id="rshort">Quick 20</button>' : ''}</div>` : n ? `<div class="row wrap"><button class="btn" id="rahead">Practise 20 weakest cards</button><a class="btn" href="#gym">More practice</a></div>` : `<div class="row"><a class="btn primary" href="#unit-${C.currentUnit().id}">Go to your current stage</a></div>`}
      </section>${forecast()}`;
  }
  function forecast() {
    const days = [...Array(14)].map((_, k) => { const a = Date.now() + k * 864e5, b = a + 864e5; return { k, n: Object.values(S().cards).filter(c => k === 0 ? c.due < b : c.due >= a && c.due < b).length }; });
    const max = Math.max(1, ...days.map(d => d.n));
    return `<section class="band"><h2>Next two weeks</h2><div class="fc">${days.map(d => `<div class="fcd"><div class="fcb"><i style="height:${100 * d.n / max}%"></i></div><small>${d.k === 0 ? 'today' : new Date(Date.now() + d.k * 864e5).toLocaleDateString('en-GB', { weekday: 'narrow' })}</small><span>${d.n}</span></div>`).join('')}</div></section>`;
  }
  binders.review = () => {
    const go = n => { const ids = C.dueCards().slice(0, n); EX.run({ title: 'Repaso', items: interleave(ids.map(EX.reviewEx)), onDone: () => A.render() }); };
    const b = $('#rstart'); if (b) b.onclick = () => go(S().settings.reviewCap);
    const q = $('#rshort'); if (q) q.onclick = () => go(20);
    const ah = $('#rahead'); if (ah) ah.onclick = () => {
      const ids = Object.keys(S().cards).filter(k => C.ITEMS[k]).sort((a, b) => C.retrievability(S().cards[a]) - C.retrievability(S().cards[b])).slice(0, 20);
      EX.run({ title: 'Extra practice', items: C.shuffle(ids).map(EX.reviewEx), onDone: () => A.render() });
    };
  };
  function interleave(items) { const g = { mc: [], type: [], cloze: [], scramble: [] }; items.filter(Boolean).forEach(x => (g[x.type] || g.type).push(x)); const out = []; let any = true; while (any) { any = false; for (const k in g) if (g[k].length) { out.push(g[k].shift()); any = true; } } return out; }

  // ---------- GYM (free practice) ----------
  const WORKOUTS = [
    ['mixed', 'Mixed workout', 'Words, grammar, sentences and reading, weakest first', p => p.learnedV.length + p.drills.length],
    ['words', 'Word workout', '30 of your words in every format: typing, context, listening, matching', p => p.learnedV.length],
    ['context', 'Words in context', 'Complete real example sentences with the right word', p => p.learnedV.length],
    ['grammar', 'Grammar gaps', '25 fill-the-gap drills from every stage you have reached', p => p.drills.length],
    ['sentences', 'Sentence builder', 'Build and translate key sentences', p => p.sents.length],
    ['listen', 'Listening', 'Dictation and listening quizzes', p => p.sents.length],
    ['match', 'Matching blitz', 'Six rounds of quick pair matching', p => p.learnedV.length >= 5 ? p.learnedV.length : 0],
    ['gender', 'El o la', 'Noun genders, the classic learner trap', p => p.learnedV.length],
    ['reading', 'Reading quiz', 'Comprehension questions from the stage texts', p => p.readings.length],
    ['speak', 'Speaking', 'Shadow key sentences out loud', p => p.sents.length]
  ];
  function viewGym() {
    const p = EX.pools();
    return `<section class="band"><h1>Entreno</h1><p class="lead">Extra practice on everything you have reached so far: ${C.fmtN(p.learnedV.length)} words, ${p.drills.length} grammar drills, ${p.sents.length} key sentences and ${p.readings.length} texts. Every session is freshly mixed and updates your reviews.</p>
      <div class="gym">${WORKOUTS.map(([k, t, d, n]) => { const c = n(p); return `<button class="plan-card gymc" data-w="${k}" ${c ? '' : 'disabled'}><span class="pc-k">${esc(t)}</span><span class="pc-s">${esc(d)}</span>${c ? '' : '<span class="pc-s"><i>Learn some words first</i></span>'}</button>`; }).join('')}
      <a class="plan-card gymc" href="#verbs"><span class="pc-k">Verb drills</span><span class="pc-s">Conjugation in every tense, vosotros included</span></a></div></section>
    <section class="band"><h2>Grammar and skills</h2><p class="muted">New exercise types, up to your level (${C.LEVELS[PRAC.maxLv()].id}).</p><div class="gym">${PRAC.WORKOUTS.filter(w => w[0] !== 'weak').map(([k, t, d, n]) => { const c = n(PRAC.maxLv()); return `<button class="plan-card gymc" data-pw="${k}" ${c ? '' : 'disabled'}><span class="pc-k">${esc(t)}</span><span class="pc-s">${esc(d)}</span>${c && k !== 'speed' ? `<span class="pc-s"><b>${C.fmtN(c)}</b> ${k === 'tenses' ? 'texts' : k === 'dicto' ? 'paragraphs' : 'items'}</span>` : k === 'speed' && C.S.speedBest ? `<span class="pc-s">Best: <b>${C.S.speedBest}</b></span>` : ''}</button>`; }).join('')}</div></section>
    ${notebook()}`;
  }
  function notebook() {
    const w = C.weakTags().slice(0, 8);
    return `<section class="band"><h2>Mistake notebook</h2>${w.length ? `<p>The grammar points and word topics you get wrong most often, from every answer you give. Practising them moves them down the list.</p>
      <div class="nb">${w.map(t => `<div class="nbrow"><span class="nbt">${esc(t.tag)}</span><div class="lvbar"><i style="width:${Math.round(100 * t.w / t.n)}%"></i></div><small>${t.w} of ${t.n} wrong</small><button class="btn small ghost" data-wt="${esc(t.tag)}">Practise</button></div>`).join('')}</div>
      <div class="row"><button class="btn primary" data-pw="weak">10-minute weak-point session</button></div>` : '<p class="muted">Answer some questions first: every mistake is filed under its grammar point or word topic, and your weakest ones appear here.</p>'}</section>`;
  }
  binders.exams = () => G.EXAMS.bind();
  binders.gym = () => {
    $$('[data-pw]').forEach(b => b.onclick = () => { const k = b.dataset.pw, w = PRAC.WORKOUTS.find(x => x[0] === k); const items = PRAC.workout(k); EX.run({ title: w[1], items, requeue: k !== 'speed' && k !== 'tenses' && k !== 'dicto', graded: k !== 'speed', onDone: () => A.render() }); });
    $$('[data-wt]').forEach(b => b.onclick = () => EX.run({ title: b.dataset.wt, items: PRAC.tagItems(b.dataset.wt, 12), onDone: () => A.render() }));
    gymBind();
  };
  const gymBind = () => $$('[data-w]').forEach(b => b.onclick = () => {
    const k = b.dataset.w, w = WORKOUTS.find(x => x[0] === k);
    EX.run({ title: w[1], items: EX.workout(k), graded: k !== 'speak', requeue: k !== 'speak' && k !== 'reading', onDone: () => A.render() });
  });

  // ---------- DECKS ----------
  let deckOpen = null;
  function viewDecks() {
    const totalV = C.DECKS.reduce((n, d) => n + d.vids.length, 0), learned = C.DECKS.reduce((n, d) => n + C.learnedOf(d), 0);
    const lv = C.currentLevel(), nd = A.nextDeck();
    return `<section class="band"><h1>Barajas</h1><p class="lead">${C.DECKS.length} thematic decks with ${C.fmtN(totalV)} extra words, each with an example sentence. Together with the stages that makes ${C.fmtN(C.VOCAB_TOTAL)} words, from everyday A1 basics to the specialist and literary vocabulary of C1–C2. You have learned ${C.fmtN(learned)} deck words.</p>
      <p class="muted">Tip: learn one batch from a deck most days, alongside your stage. New-word target: ${S().settings.newPerDay || 30} a day (today ${C.newToday()}). Words shared with a stage count once.</p>
      ${nd ? `<div class="row"><button class="btn primary" data-dl="${nd.id}">Continue: ${esc(nd.title)}</button></div>` : ''}</section>
    ${C.LEVELS.filter(l => C.DECKS.some(d => d.level === l.id)).map(l => `<section class="band decks-l"><h2>${l.id} · ${esc(l.name)}${C.lvIdx(l.id) > C.lvIdx(lv) ? ' <small class="muted">(ahead of your level)</small>' : ''}</h2><div class="decks">${C.DECKS.filter(d => d.level === l.id).map(d => {
      const n = C.learnedOf(d), t = d.vids.length, done = n === t;
      return `<div class="deck ${done ? 'done' : ''}"><div class="deck-h"><div><b>${esc(d.title)}</b><small>${esc(d.desc || '')}</small></div><span class="deck-n">${n}/${t}</span></div>${bar(n / t)}
        <div class="row wrap">${done ? '' : `<button class="btn small primary" data-dl="${d.id}">Learn ${Math.min(S().settings.batch || 10, t - n)}</button>`}${n ? `<button class="btn small" data-dp="${d.id}">Practise</button>` : ''}<button class="btn small ghost" data-dw="${d.id}">${deckOpen === d.id ? 'Hide words' : 'Words'}</button></div>
        ${deckOpen === d.id ? vocabTable(d) : ''}</div>`;
    }).join('')}</div></section>`).join('')}`;
  }
  binders.decks = () => {
    $$('[data-dl]').forEach(b => b.onclick = () => { const d = C.DECK[b.dataset.dl]; A.learn(d, d.title); });
    $$('[data-dp]').forEach(b => b.onclick = () => { const d = C.DECK[b.dataset.dp]; EX.run({ title: 'Practice · ' + d.title, items: EX.wordPractice(d.vids.filter(C.has), 25), onDone: () => A.render() }); });
    $$('[data-dw]').forEach(b => b.onclick = () => { deckOpen = deckOpen === b.dataset.dw ? null : b.dataset.dw; const y = scrollY; A.render(); scrollTo(0, y); });
    bindSay($('#main'));
  };

  // ---------- VERBS ----------
  let vState = { tenses: ['pres'], verbs: 'core', verb: 'tener' };
  function viewVerbs() {
    if (!vState.picked) { const ok = Verbs.TENSES.filter(x => C.tenseTaught(x.id)).map(x => x.id); vState.tenses = ok.length ? ok.slice(-3) : ['pres']; }
    const lv = C.currentLevel(), order = C.LEVELS.map(l => l.id);
    const t = Verbs.TENSES, v = vState.verb;
    let table = '';
    try { table = `<div class="scroll"><table class="conj full"><thead><tr><th></th>${t.map(x => `<th title="${esc(x.en)}">${esc(x.es)}</th>`).join('')}</tr></thead><tbody>${[0, 1, 2, 3, 4, 5].map(p => `<tr><th>${esc(Verbs.PERS[p])}</th>${t.map(x => `<td>${esc(Verbs.conj(v, x.id)[p] || '—')}</td>`).join('')}</tr>`).join('')}</tbody></table></div><p class="muted">Gerundio <b>${esc(Verbs.gerund(v))}</b> · Participio <b>${esc(Verbs.participle(v))}</b>. Imperative rows: tú, usted, nosotros, vosotros, ustedes. Rare irregular verbs outside the core list may be off: check WordReference.</p>`; } catch (e) { table = '<p class="note">That doesn\'t look like a Spanish infinitive (-ar, -er, -ir).</p>'; }
    return `<section class="band"><h1>Verbos</h1><p class="lead">Conjugation is the backbone of Spanish. Drill the tenses you've met, with vosotros included.</p>
      <div class="panel"><h2>Drill</h2><div class="chips" id="vt">${t.map(x => { const ok = C.tenseTaught(x.id); return `<label class="chip ${ok ? '' : 'later'}" title="${ok ? 'You have met this tense' : 'Not taught in your stages yet: the drill starts with an explanation'}"><input type="checkbox" value="${x.id}" ${vState.tenses.includes(x.id) ? 'checked' : ''}> ${esc(x.es)} <small>${ok ? '✓' : 'new · ' + x.level}</small></label>`; }).join('')}</div>
      <p class="muted">Tenses marked <i>new</i> haven't come up in your stages yet: a drill on them starts with a short explanation of how the tense works. <a href="#grammar">How every tense works</a>.</p>
      <div class="row wrap"><label for="vset">Verbs</label><select id="vset"><option value="core" ${vState.verbs === 'core' ? 'selected' : ''}>Top 40 most frequent</option><option value="irr" ${vState.verbs === 'irr' ? 'selected' : ''}>Irregular & stem-changing</option><option value="all" ${vState.verbs === 'all' ? 'selected' : ''}>All ${Verbs.VERBS.length} verbs</option><option value="refl" ${vState.verbs === 'refl' ? 'selected' : ''}>Reflexive</option></select><select id="vn" aria-label="Number of questions"><option>20</option><option>40</option><option>60</option></select><button class="btn primary" id="vgo">Start drill</button></div></div>
      <div class="panel"><h2>Look up any verb</h2><div class="row"><input id="vq" list="vlist" value="${esc(v)}" lang="es" autocomplete="off" aria-label="Infinitive"><datalist id="vlist">${Verbs.VERBS.map(x => `<option value="${x[0]}">${esc(x[1])}</option>`).join('')}</datalist><button class="btn" id="vshow">Show</button></div>${table}</div></section>`;
  }
  binders.verbs = () => {
    $('#vshow').onclick = () => { vState.verb = $('#vq').value.trim().toLowerCase() || 'ser'; A.render(); };
    $('#vq').onkeydown = e => { if (e.key === 'Enter') $('#vshow').click(); };
    $('#vgo').onclick = () => {
      const tenses = $$('#vt input:checked').map(i => i.value); if (!tenses.length) { C.toast('Pick at least one tense.'); return; }
      vState.tenses = tenses; vState.picked = true; vState.verbs = $('#vset').value;
      const IRR = 'ser estar ir tener hacer poder decir ver dar saber querer poner venir salir pensar volver pedir dormir conocer seguir jugar empezar sentir traer conducir oír leer construir elegir preferir morir caber haber andar'.split(' ');
      let pool = Verbs.VERBS.map(x => x[0]);
      if (vState.verbs === 'core') pool = pool.slice(0, 40); else if (vState.verbs === 'irr') pool = pool.filter(v => IRR.includes(v)); else if (vState.verbs === 'refl') pool = pool.filter(v => /se$/.test(v));
      const items = tenses.map(t => G.GRAM.tensePreface(t)).filter(Boolean).concat([...Array(+$('#vn').value || 20)].map(() => { const v = pool[Math.floor(Math.random() * pool.length)], t = tenses[Math.floor(Math.random() * tenses.length)]; try { return EX.conjEx(v, t); } catch (e) { return null; } }));
      EX.run({ title: 'Verb drill', items, onDone: () => A.render() });
    };
  };

  // ---------- LIBRARY ----------
  function viewLibrary() {
    const lv = C.currentLevel(); const st = C.stats(); const hrs = st.inputMin / 60;
    const ladder = [[50, 'Starting to follow slow, clear speech'], [150, 'Understand most learner podcasts'], [300, 'Follow native conversation on familiar topics'], [600, 'Comfortable with native-speed TV and podcasts'], [1000, 'Comfortable with daily conversation'], [1500, 'Native-like comprehension for most purposes']];
    const order = C.LEVELS.map(l => l.id);
    const levels = order.slice(Math.max(0, order.indexOf(lv) - 1), order.indexOf(lv) + 2);
    return `<section class="band"><h1>Biblioteca</h1><p class="lead">Real Spanish, mostly from Spain, chosen for your level. Log what you listen to or read: input hours are the best predictor of comprehension.</p>
      <div class="ladder">${ladder.map(([h, d]) => `<div class="rung ${hrs >= h ? 'on' : ''}"><b>${h} h</b><span>${d}</span><i style="width:${Math.min(100, 100 * hrs / h)}%"></i></div>`).join('')}</div>
      <p class="muted">You have logged <b>${hrs.toFixed(1)} h</b> of input. Milestones follow the hour bands used by comprehensible-input programmes such as Dreaming Spanish.</p>
      <form class="panel logf" id="logf"><h2>Log listening or reading</h2><div class="row wrap"><input id="lt" placeholder="What did you listen to or read?" aria-label="Title"><select id="lk" aria-label="Type"><option value="listen">Podcast</option><option value="watch">Video / TV</option><option value="read">Reading</option><option value="speak">Conversation</option></select><input id="lm" type="number" min="1" max="600" value="15" aria-label="Minutes"><span>min</span><button class="btn primary">Log</button></div></form></section>
    ${levels.map(l => { const us = C.UNITS.filter(u => u.level === l); const seen = new Set(); const items = us.flatMap(u => u.res.map(r => Object.assign({ unit: u }, r))).filter(r => { if (seen.has(r.t)) return false; seen.add(r.t); return true; }); return items.length ? `<section class="band"><h2>${l} · ${esc(C.LEVELS.find(x => x.id === l).name)}</h2><ul class="res">${items.map(r => `<li><span class="rk ${r.k}">${r.k}</span><a href="${esc(r.u)}" target="_blank" rel="noopener">${esc(r.t)}</a><small>stage ${r.unit.n + 1}</small><button class="btn small ghost" data-lq="${esc(r.t)}" data-lm="${r.m || 15}" data-lk="${r.k}">Log ${r.m || 15} min</button></li>`).join('')}</ul></section>` : ''; }).join('')}
    <section class="band"><h2>Tools and partners</h2><ul class="res">${RES.global.map(r => `<li><span class="rk ${r.k}">${r.k}</span><a href="${esc(r.u)}" target="_blank" rel="noopener">${esc(r.t)}</a></li>`).join('')}</ul></section>
    <section class="band"><h2>Recent log</h2>${S().input.length ? `<table class="log"><tbody>${S().input.slice(0, 25).map(e => `<tr><td>${esc(e.d)}</td><td>${esc(e.t)}</td><td class="num">${e.m} min</td><td><button class="btn small ghost" data-del="${e.id}" aria-label="Delete">✕</button></td></tr>`).join('')}</tbody></table>` : '<p class="muted">Nothing logged yet.</p>'}</section>`;
  }
  binders.library = () => {
    $('#logf').onsubmit = e => { e.preventDefault(); const m = +$('#lm').value; if (!m) return; logInput(m, $('#lt').value.trim() || 'Input', $('#lk').value); A.render(); };
    $$('[data-lq]').forEach(b => b.onclick = () => { logInput(+b.dataset.lm, b.dataset.lq, b.dataset.lk); b.textContent = 'Logged ✓'; b.disabled = true; });
    $$('[data-del]').forEach(b => b.onclick = () => { const e = S().input.find(x => x.id === b.dataset.del); if (!e) return; S().input = S().input.filter(x => x !== e); const d = S().days[e.d]; if (d) d.i = Math.max(0, (d.i || 0) - e.m); C.save(); A.render(); });
  };

  // ---------- TUTOR ----------
  let chat = { mode: 'talk', scen: null, msgs: [], busy: false };
  function viewTutor() {
    if (!C.ai.available()) return `<section class="band"><h1>Tutor</h1><p class="lead">The AI tutor gives conversation practice, writing feedback and "Why?" explanations.</p>
      <p>It works in two ways: automatically when this page is opened on claude.ai, or anywhere (GitHub Pages, your own computer) with <b>your own API key</b> from Anthropic or OpenAI. Typical cost is a few cents per hour of chatting.</p>
      <div class="row"><a class="btn primary" href="#prefs">Set up the tutor</a></div>
      <p>Meanwhile, practise speaking with a real person:</p><ul class="res">${RES.global.filter(r => r.k === 'speak').map(r => `<li><a href="${esc(r.u)}" target="_blank" rel="noopener">${esc(r.t)}</a></li>`).join('')}</ul></section>`;
    const cur = C.currentUnit(); const avail = C.UNITS.filter(u => u.n <= cur.n || C.isUnlocked(u));
    if (A.tutorScenario) { chat.scen = A.tutorScenario; chat.msgs = []; chat.mode = 'talk'; A.tutorScenario = null; }
    if (!chat.scen || !C.UNIT[chat.scen]) chat.scen = cur.id;
    return `<section class="band tutor"><h1>Tutor</h1><p class="lead">Practise real conversation. Your tutor speaks Castilian Spanish at your level and corrects you gently. <small class="muted">Using: ${esc(C.ai.label())}</small></p>
      <div class="row wrap"><div class="seg" role="tablist">${[['talk', 'Role-play'], ['free', 'Free chat'], ['ask', 'Ask a question']].map(([k, l]) => `<button class="${chat.mode === k ? 'on' : ''}" data-mode="${k}">${l}</button>`).join('')}</div>
      ${chat.mode === 'talk' ? `<select id="scen" aria-label="Scenario">${avail.map(u => `<option value="${u.id}" ${u.id === chat.scen ? 'selected' : ''}>${u.n + 1}. ${esc(u.title)}</option>`).join('')}</select>` : ''}<button class="btn ghost" id="treset">New conversation</button></div>
      ${chat.mode === 'talk' ? `<p class="note">${esc(C.UNIT[chat.scen].talk)}</p>` : ''}
      <div class="chat" id="chat">${chat.msgs.map(m => `<div class="msg ${m.role}">${m.role === 'assistant' ? C.md(m.content) : esc(m.content)}${m.role === 'assistant' && C.canSpeak() ? `<button class="btn icon say" data-sayc="${esc(m.content.split(/\n\s*\n|Correc/)[0])}" aria-label="Listen">${G.ICON.speaker}</button>` : ''}</div>`).join('') || `<div class="msg assistant empty">${chat.mode === 'ask' ? 'Ask anything about Spanish grammar, words or culture.' : 'Press Start, or just say hola.'}</div>`}</div>
      <form class="chat-in" id="chatf"><textarea id="cin" rows="2" lang="es" placeholder="${chat.mode === 'ask' ? 'Your question…' : 'Escribe en español…'}"></textarea>${C.dict ? `<button type="button" class="btn icon" id="cmic" aria-label="Dictate">${G.ICON.mic}</button>` : ''}<button class="btn primary">${chat.msgs.length || chat.mode === 'ask' ? 'Send' : 'Start'}</button></form></section>`;
  }
  function tutorPrompt() {
    const cur = C.currentUnit(), lv = cur.level;
    const u = C.UNIT[chat.scen] || cur;
    const base = `You are "Lucía", a warm Spanish tutor from Madrid. Use Castilian Spanish (vosotros, Spain vocabulary, pretérito perfecto for today's events). The learner is a native Dutch/English speaker at CEFR ${lv}; they have studied up to "${cur.title}". Keep your Spanish at ${lv} level${['A1', 'A2'].includes(lv) ? ': short, simple sentences and present/near-past tenses' : ''}.`;
    if (chat.mode === 'ask') return base + ' The learner asks questions about Spanish. Answer in clear English with Spanish examples. Be concise and practical.';
    const scen = chat.mode === 'talk' ? `\nRole-play scenario: ${u.talk}\nTarget grammar: ${u.grammar.t}.\nUseful vocabulary: ${u.vocab.slice(0, 25).map(v => v[0]).join(', ')}.` : '\nHave a natural, friendly conversation on topics the learner chooses.';
    return base + scen + `\nRules: stay in character and reply in Spanish (2–4 sentences), always ending with a question to keep the conversation going. If the learner's last message had mistakes, add after a blank line: "Corrección:" then the corrected sentence(s) and a very short English explanation. If there were no mistakes, add nothing.`;
  }
  binders.tutor = () => {
    if (!C.ai.available()) return;
    const box = $('#chat'); if (box) box.scrollTop = box.scrollHeight;
    $$('[data-mode]').forEach(b => b.onclick = () => { chat.mode = b.dataset.mode; chat.msgs = []; A.render(); });
    const sc = $('#scen'); if (sc) sc.onchange = () => { chat.scen = sc.value; chat.msgs = []; A.render(); };
    $('#treset').onclick = () => { chat.msgs = []; A.render(); };
    $$('[data-sayc]').forEach(b => b.onclick = () => C.speak(b.dataset.sayc));
    const send = async () => {
      if (chat.busy) return;
      const txt = $('#cin').value.trim();
      if (!txt && chat.msgs.length) return;
      if (txt) chat.msgs.push({ role: 'user', content: txt });
      chat.busy = true; A.render();
      const sys = tutorPrompt(), list = chat.msgs.map(m => ({ role: m.role, content: m.content }));
      let msgs;
      if (!list.length) msgs = [{ role: 'user', content: sys + '\n\nBegin the conversation now with a greeting and a question.' }];
      else if (list[0].role === 'assistant') msgs = [{ role: 'user', content: sys + '\n\nBegin the conversation now with a greeting and a question.' }].concat(list);
      else msgs = [{ role: 'user', content: sys + '\n\nLearner: ' + list[0].content }].concat(list.slice(1));
      if (msgs[msgs.length - 1].role !== 'user') msgs.push({ role: 'user', content: '(continúa)' });
      const live = { role: 'assistant', content: '…' }; chat.msgs.push(live); A.render();
      try {
        const r = await C.ai.ask(msgs, { tier: 'default', cache: false, onText: ({ text }) => { live.content = text; const last = $$('#chat .msg.assistant').pop(); if (last) { last.innerHTML = C.md(text); $('#chat').scrollTop = 1e9; } } });
        live.content = r.text || '…';
        if (chat.mode !== 'ask') { S().tutorChats = (S().tutorChats || 0) + 1; C.save(); C.checkBadges(); }
        const sp = live.content.split(/\n\s*\n|Corrección/)[0]; if (C.S.settings.autoplay && chat.mode !== 'ask') C.speak(sp);
      } catch (e) { live.content = C.ai.errText(e); }
      chat.busy = false; A.render();
      const ci = $('#cin'); if (ci) ci.focus();
    };
    $('#chatf').onsubmit = e => { e.preventDefault(); send(); };
    $('#cin').onkeydown = e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } };
    const mic = $('#cmic'); if (mic) {
      const d = C.dict; let on = false; const ci = $('#cin');
      C.dictOn({ final: ({ text }) => { ci.value = (ci.value + ' ' + text).trim(); }, state: ({ state }) => { on = state === 'listening'; mic.classList.toggle('on', on); } });
      mic.onclick = () => { if (on) { d.stop().catch(() => { }); return; } d.start().catch(() => C.toast('Microphone unavailable.')); };
    }
  };

  // ---------- PROGRESS ----------
  function viewProgress() {
    const st = C.stats();
    const weeks = 26, cells = []; const start = new Date(); start.setHours(12, 0, 0, 0); start.setDate(start.getDate() - ((start.getDay() + 6) % 7) - (weeks - 1) * 7);
    const goal = S().settings.goal;
    for (let k = 0; k < weeks * 7; k++) { const t = start.getTime() + k * 864e5; const d = S().days[C.dayKey(t)] || {}; const m = (d.t || 0) / 60 + (d.i || 0); cells.push({ m, fut: t > Date.now(), lv: m === 0 ? 0 : m < goal * 0.33 ? 1 : m < goal * 0.66 ? 2 : m < goal ? 3 : 4, d: C.dayKey(t) }); }
    const last30 = [...Array(30)].map((_, k) => { const d = S().days[C.dayKey(Date.now() - (29 - k) * 864e5)] || {}; return { n: d.n || 0, a: d.n ? d.c / d.n : null, m: (d.t || 0) / 60 + (d.i || 0) }; });
    const maxM = Math.max(goal, ...last30.map(x => x.m));
    const vocabByLevel = C.LEVELS.map(l => { const ids = Object.values(C.ITEMS).filter(x => x.t === 'v' && x.src.level === l.id).map(x => x.id); return { l, total: ids.length, has: ids.filter(C.has).length, known: ids.filter(id => (S().cards[id] || {}).s >= 21).length }; }).filter(x => x.total);
    return `<section class="band"><h1>Progreso</h1><div class="kpis big"><div><b>${C.fmtMin(st.totalMin)}</b><span>total study (${C.fmtMin(st.appMin)} in app, ${C.fmtMin(st.inputMin)} input)</span></div><div><b>${C.fmtN(st.known)}</b><span>words known long-term · ${C.fmtN(st.learning)} still learning</span></div><div><b>${st.unitsDone}/${C.UNITS.length}</b><span>stages complete</span></div><div><b>${Math.round(st.acc * 100)}%</b><span>accuracy over ${C.fmtN(st.reviews)} reviews</span></div><div><b>${st.streak}</b><span>day streak · ${st.daysActive} days studied</span></div></div></section>
    <section class="band"><h2>Stages per level</h2><div class="levels">${C.LEVELS.map(l => { const p = C.levelProgress(l.id); return `<div class="lvrow"><b>${l.id}</b><span>${esc(l.name)}</span><div class="lvbar"><i style="width:${p.total ? 100 * p.done / p.total : 0}%"></i></div><small>${p.done}/${p.total}</small></div>`; }).join('')}</div></section>
    <section class="band"><h2>Vocabulary per level</h2><p class="muted">Dark: known long-term (stable for 3+ weeks). Light: started and still being reviewed.</p><div class="levels">${vocabByLevel.map(x => `<div class="lvrow"><b>${x.l.id}</b><span>${C.fmtN(x.total)} words</span><div class="lvbar two"><i style="width:${100 * x.known / x.total}%"></i><i class="lt" style="width:${100 * (x.has - x.known) / x.total}%"></i></div><small>${x.has}</small></div>`).join('')}</div></section>
    <section class="band"><h2>Last 26 weeks</h2><div class="scroll"><div class="heat" style="grid-template-rows:repeat(7,1fr)">${cells.map(c => `<i class="h${c.lv}${c.fut ? ' fut' : ''}" title="${c.d}: ${Math.round(c.m)} min"></i>`).join('')}</div></div><p class="muted">Each square is a day; darkest means you met your ${goal}-minute goal.</p></section>
    <section class="band"><h2>Minutes per day, last 30 days</h2><div class="bars30">${last30.map(x => `<div title="${Math.round(x.m)} min"><i style="height:${100 * x.m / maxM}%"></i></div>`).join('')}<div class="goal-line" style="bottom:${100 * goal / maxM}%"><span>goal</span></div></div></section>
    <section class="band"><h2>Credencial del peregrino</h2><p class="muted">Pilgrims collect stamps (sellos) along the Camino. So do you.</p><div class="stamps">${C.BADGES.map(([id, n, d]) => `<div class="sello ${S().badges[id] ? 'got' : ''}">${G.ICON.shell}<b>${esc(n)}</b><small>${esc(d)}</small>${S().badges[id] ? `<em>${new Date(S().badges[id]).toLocaleDateString('en-GB')}</em>` : ''}</div>`).join('')}</div></section>`;
  }

  // ---------- SETTINGS ----------
  const SQL = `create table public.camino_state (
  user_id uuid primary key references auth.users on delete cascade,
  data jsonb not null,
  updated_at timestamptz not null default now()
);
alter table public.camino_state enable row level security;
create policy "own row only" on public.camino_state
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
-- Supabase projects no longer grant API access to new tables automatically:
grant select, insert, update on public.camino_state to authenticated;`;
  function viewSettings() {
    const s = S().settings, vs = C.voices(), sb = C.secrets.sb || {}, cl = C.cloud;
    return `<section class="band"><h1>Ajustes</h1>
      <div class="panel"><h2>Daily goal and pace</h2><div class="row wrap"><label for="sg">Minutes per day</label><input id="sg" type="number" min="10" max="240" step="5" value="${s.goal}"><label for="np">New words per day</label><input id="np" type="number" min="5" max="100" step="5" value="${s.newPerDay}"><label for="bt">Batch size</label><select id="bt">${[5, 8, 10, 12, 15, 20].map(n => `<option ${n === s.batch ? 'selected' : ''}>${n}</option>`).join('')}</select><label for="rc">Max reviews per session</label><input id="rc" type="number" min="20" max="500" step="10" value="${s.reviewCap}"></div>
        <label class="chk"><input type="checkbox" id="fr" ${s.freeRoam ? 'checked' : ''}> Free roam: open every stage without checkpoints</label>
        <p class="muted">Each new word adds about 6–8 reviews over the next month. 20–30 new words a day suits 45 minutes of study.</p></div>
      <div class="panel"><h2>Audio</h2><div class="row wrap"><label for="sv">Voice</label><select id="sv"><option value="">Automatic (Spain Spanish if available)</option>${vs.map(v => `<option ${v.name === s.voice ? 'selected' : ''}>${esc(v.name)}</option>`).join('')}</select>
        <label for="tts">Engine</label><select id="tts"><option value="auto" ${s.tts === 'auto' ? 'selected' : ''}>Auto</option><option value="browser" ${s.tts === 'browser' ? 'selected' : ''}>Browser voice</option>${C.cap.tts ? `<option value="claude" ${s.tts === 'claude' ? 'selected' : ''}>Claude voice</option>` : ''}</select>
        <label for="sr">Speed</label><input id="sr" type="range" min="0.6" max="1.2" step="0.05" value="${s.rate}"><button class="btn" id="stest">${G.ICON.speaker} Test</button></div>
        <label class="chk"><input type="checkbox" id="sa" ${s.autoplay ? 'checked' : ''}> Play audio automatically</label>
        <p class="muted">Speech recognition: ${C.dict ? (C.dict.kind === 'claude' ? 'Claude dictation' : 'your browser (Web Speech)') : 'not available in this browser (use Chrome, Edge or Safari)'}.</p>
        ${vs.length ? '' : '<p class="note">No Spanish voice found in this browser. On Windows add "Spanish (Spain)" under Settings › Time & language › Speech; on macOS under System Settings › Accessibility › Spoken content; on Android install Google Speech Services.</p>'}</div>
      <div class="panel"><h2>Checking</h2><label class="chk"><input type="checkbox" id="sacc" ${s.strictAccents ? 'checked' : ''}> Count missing accents as wrong (otherwise "almost right")</label></div>
      <div class="panel" id="aip"><h2>AI tutor</h2><p>Now using: <b>${esc(C.ai.label())}</b>.</p>
        <div class="row wrap"><label for="aim">Source</label><select id="aim"><option value="auto" ${s.ai === 'auto' ? 'selected' : ''}>Automatic${C.cap.sample ? ' (Claude here)' : ''}</option><option value="key" ${s.ai === 'key' ? 'selected' : ''}>Always my own API key</option><option value="off" ${s.ai === 'off' ? 'selected' : ''}>Off</option></select>
        <label for="aip2">Provider</label><select id="aip2"><option value="anthropic" ${s.aiProv === 'anthropic' ? 'selected' : ''}>Anthropic (Claude)</option><option value="openai" ${s.aiProv === 'openai' ? 'selected' : ''}>OpenAI</option></select></div>
        <div class="row wrap"><label for="aik">API key</label><input id="aik" type="password" autocomplete="off" placeholder="${C.secrets.aiKey ? '•••••••• saved' : 'sk-…'}" style="flex:1;min-width:14em"><label for="aimd">Model</label><input id="aimd" value="${esc(s.aiModel)}" placeholder="${esc(C.AI_DEFAULTS[s.aiProv] || '')}"><button class="btn" id="aisave">Save</button><button class="btn ghost" id="aitest">Test</button>${C.secrets.aiKey ? '<button class="btn ghost" id="aidel">Remove key</button>' : ''}</div>
        <p class="muted">Your key is stored only in this browser (never in backups or sync) and sent only to the provider you pick. Create one at console.anthropic.com or platform.openai.com and set a monthly spending limit there. Anyone with access to this browser profile can use it.</p><div id="aiout"></div></div>
      <div class="panel"><h2>Saving and sync</h2><p><b>${esc(C.syncLabel())}</b>. Progress is always saved in this browser after every answer.</p>
        ${C.onClaude ? `<p>On claude.ai: ${C.sync.status === 'on' ? 'your progress syncs privately across devices where you open this page signed in.' : 'sync starts when you are signed in.'}</p>` : ''}
        <h3>Free cross-device sync with Supabase (optional)</h3>
        <p class="muted">Works anywhere, including GitHub Pages. Create a free project at supabase.com, run the SQL below once in its SQL editor, then paste the project URL and the publishable key (sb_publishable_…, never the secret key) here and create an account. See the README for step-by-step instructions.</p>
        <details><summary>SQL to run once</summary><pre class="code">${esc(SQL)}</pre><button class="btn small" id="sqlc">Copy SQL</button></details>
        ${C.builtInSync && sb.url === (G.CAMINO_CONFIG || {}).supabaseUrl ? `<p class="muted">Sync server built in via <code>config.js</code>: just sign in. <a href="#" id="sbedit">Use a different project</a></p>` : ''}
        <div class="row wrap" id="sbcfg" ${C.builtInSync && sb.url === (G.CAMINO_CONFIG || {}).supabaseUrl ? 'hidden' : ''}><input id="sbu" placeholder="https://xxxx.supabase.co" value="${esc(sb.url || '')}" style="flex:1;min-width:14em" aria-label="Project URL"><input id="sbk" placeholder="publishable key (sb_publishable_…)" value="${esc(sb.key || '')}" style="flex:1;min-width:14em" aria-label="Publishable key"></div>
        ${cl.signedIn() ? `<p>Signed in as <b>${esc(sb.email || '')}</b> · ${esc(cl.status === 'on' ? 'synced ' + (cl.lastSync ? new Date(cl.lastSync).toLocaleTimeString('en-GB') : '') : cl.status)}${cl.err ? ' · ' + esc(cl.err) : ''}</p><div class="row wrap"><button class="btn" id="sbnow">Sync now</button><button class="btn ghost" id="sbout">Sign out</button></div>`
        : `<div class="row wrap"><input id="sbe" type="email" placeholder="email" autocomplete="username" aria-label="Email"><input id="sbp" type="password" placeholder="password (8+ characters)" autocomplete="current-password" aria-label="Password"><button class="btn primary" id="sbin">Sign in</button><button class="btn" id="sbup">Create account</button></div>`}
        <div id="sbout2"></div>
        <h3>Backup file</h3><p class="muted">A backup holds your whole progress. Importing merges it with what's here, so you can also use backups to move between devices without any sync. Last backup: ${S().lastBackup ? new Date(S().lastBackup).toLocaleDateString('en-GB') : 'never'}.</p>
        <div class="row wrap"><button class="btn" id="exp">Download backup</button><label class="btn" for="impf">Import backup</label><input type="file" id="impf" accept=".json,application/json" hidden></div>
        <div id="expbox"></div></div>
      <div class="panel"><h2>Reported problems</h2>${(S().reports || []).length ? `<p>${S().reports.length} report${S().reports.length > 1 ? 's' : ''}. Copy them and send them to me (Claude) to get them fixed.</p><ul class="replist">${S().reports.slice(0, 8).map(r => `<li><b>${esc(r.item.prompt || r.where)}</b> → ${esc(r.item.answer || '')}<br><span class="muted">${esc(r.note || '(no note)')}</span></li>`).join('')}</ul><div class="row wrap"><button class="btn" id="repcopy">Copy all reports</button><button class="btn ghost" id="repclear">Clear</button></div>` : '<p class="muted">Use the ⚑ button at the top of any exercise to flag a wrong answer or a typo. Reports collect here.</p>'}</div>
      <div class="panel danger"><h2>Start over</h2><div id="resetbox"><button class="btn ghost" id="reset">Reset all progress…</button></div></div>
      <p><a href="#about">How Camino works, and how to run it yourself</a></p></section>`;
  }
  binders.prefs = () => {
    const s = S().settings;
    const bind = (id, k, f = v => v, rerender) => { $('#' + id).onchange = e => { s[k] = f(e.target.type === 'checkbox' ? e.target.checked : e.target.value); C.save(); if (rerender) A.render(); }; };
    bind('sg', 'goal', v => Math.max(10, +v || 45)); bind('rc', 'reviewCap', v => Math.max(20, +v || 150)); bind('np', 'newPerDay', v => Math.max(5, +v || 30)); bind('bt', 'batch', v => +v || 10);
    bind('fr', 'freeRoam'); bind('sv', 'voice'); bind('tts', 'tts'); bind('sr', 'rate', v => +v); bind('sa', 'autoplay'); bind('sacc', 'strictAccents');
    bind('aim', 'ai', v => v, true); bind('aip2', 'aiProv', v => v, true);
    $('#stest').onclick = () => C.speak('Hola, ¿qué tal? Vamos a aprender español juntos.');
    const out = $('#aiout');
    $('#aisave').onclick = () => { const k = $('#aik').value.trim(); if (k) C.secrets.aiKey = k; s.aiModel = $('#aimd').value.trim(); C.saveSecrets(); C.save(); C.toast('AI settings saved.'); A.render(); };
    $('#aitest').onclick = async () => { const k = $('#aik').value.trim(); if (k) { C.secrets.aiKey = k; C.saveSecrets(); } s.aiModel = $('#aimd').value.trim(); out.innerHTML = '<p class="muted">Testing…</p>'; try { const r = await C.ai.ask('Reply with one short friendly sentence in Castilian Spanish.', { max: 60, tier: 'quick' }); out.innerHTML = `<p class="note">✓ ${esc(C.ai.label())}: ${esc(r.text)}</p>`; } catch (e) { out.innerHTML = `<p class="note">✗ ${esc(C.ai.errText(e))}</p>`; } };
    const del = $('#aidel'); if (del) del.onclick = () => { delete C.secrets.aiKey; C.saveSecrets(); A.render(); };
    $('#sqlc').onclick = () => navigator.clipboard.writeText(SQL).then(() => C.toast('SQL copied.'), () => C.toast('Select the text and copy it.'));
    const sbOut = $('#sbout2');
    const saveCfg = () => { const url = $('#sbu').value.trim(), key = $('#sbk').value.trim(); C.secrets.sb = Object.assign(C.secrets.sb || {}, { url, key }); C.saveSecrets(); return url && key; };
    $('#sbu').onchange = saveCfg; $('#sbk').onchange = saveCfg;
    const sbe = $('#sbedit'); if (sbe) sbe.onclick = e => { e.preventDefault(); $('#sbcfg').hidden = false; sbe.parentNode.remove(); };
    const auth = async (fn) => {
      if (!saveCfg()) { sbOut.innerHTML = '<p class="note">Fill in the project URL and anon key first.</p>'; return; }
      const e = $('#sbe').value.trim(), p = $('#sbp').value; if (!e || p.length < 6) { sbOut.innerHTML = '<p class="note">Enter your email and a password.</p>'; return; }
      sbOut.innerHTML = '<p class="muted">Connecting…</p>';
      try { const r = await fn(e, p); if (r === 'confirm') sbOut.innerHTML = '<p class="note">Check your email to confirm the account, then come back and sign in. (Or turn off "Confirm email" under Authentication › Providers › Email in Supabase.)</p>'; else { C.toast('Sync is on.'); A.render(); } }
      catch (err) { sbOut.innerHTML = `<p class="note">✗ ${esc(err.message)}${/relation|camino_state|schema/i.test(err.message) ? ' · Did you run the SQL?' : ''}</p>`; }
    };
    const si = $('#sbin'); if (si) si.onclick = () => auth((e, p) => C.cloud.signIn(e, p));
    const su = $('#sbup'); if (su) su.onclick = () => auth((e, p) => C.cloud.signUp(e, p));
    const sn = $('#sbnow'); if (sn) sn.onclick = async () => { sn.disabled = true; try { await C.cloud.init(); C.toast(C.cloud.status === 'on' ? 'Synced.' : 'Sync failed: ' + C.cloud.err); } finally { A.render(); } };
    const so = $('#sbout'); if (so) so.onclick = () => { C.cloud.signOut(); A.render(); };
    $('#exp').onclick = async () => {
      const data = C.backupJSON(); const name = 'camino-backup-' + C.today() + '.json';
      const ok = await C.download(name, data);
      S().lastBackup = Date.now(); C.save();
      $('#expbox').innerHTML = `<p class="muted">${ok ? 'Download started. ' : ''}If no file appeared, <button class="btn small ghost" id="showtxt">show the backup as text</button> and save it yourself.</p>`;
      $('#showtxt').onclick = () => { $('#expbox').innerHTML = `<textarea rows="5" readonly>${esc(data)}</textarea><button class="btn" id="cpy">Copy</button>`; $('#cpy').onclick = () => navigator.clipboard.writeText(data).then(() => C.toast('Copied.'), () => { $('#expbox textarea').select(); }); };
    };
    $('#impf').onchange = async e => {
      const f = e.target.files[0]; if (!f) return;
      try { C.importBackup(JSON.parse(await f.text())); C.toast('Backup merged into your progress.'); A.render(); }
      catch (err) { C.toast('That file is not a Camino backup.'); }
    };
    const rc = $('#repcopy'); if (rc) rc.onclick = () => { const txt = S().reports.map(r => `[${new Date(r.ts).toISOString().slice(0, 10)}] ${r.where} | ${r.item.type}: ${r.item.prompt} → ${r.item.answer} | ${r.item.card} | note: ${r.note}`).join('\n'); navigator.clipboard.writeText(txt).then(() => C.toast('Copied ' + S().reports.length + ' reports.'), () => C.toast('Could not copy.')); };
    const rx = $('#repclear'); if (rx) rx.onclick = () => { S().reports = []; C.save(); A.render(); };
    $('#reset').onclick = () => {
      $('#resetbox').innerHTML = `<p><b>This deletes every card, stage and log${C.syncState() === 'on' ? ' (synced copies are overwritten too)' : ''}.</b> Download a backup first if unsure.</p><div class="row"><button class="btn ghost" id="rno">Cancel</button><button class="btn bad" id="ryes">Yes, delete everything</button></div>`;
      $('#rno').onclick = () => A.render();
      $('#ryes').onclick = () => { const keep = S().settings; C.S = Object.assign(C.blank(), { settings: keep, updated: Date.now() }); C.save({ now: true }); C.sync.push(); C.cloud.push(); C.toast('Progress reset.'); A.go('today'); };
    };
  };

  // ---------- ABOUT ----------
  function viewAbout() {
    const nV = C.VOCAB_TOTAL, nD = C.UNITS.reduce((n, u) => n + u.drills.length, 0), nR = C.UNITS.reduce((n, u) => n + u.readings.length, 0), nS = C.UNITS.reduce((n, u) => n + u.sentences.length, 0);
    return `<section class="band about"><h1>How Camino works</h1>
    <p class="lead">${C.UNITS.length} stages, ${C.DECKS.length} thematic decks, ${C.fmtN(nV)} words with example sentences, ${C.fmtN(nD)} grammar drills, ${nS} key sentences and ${nR} graded texts, from A1 to C2 in Castilian Spanish.</p>
    <h2>The method</h2><ul>
      <li><b>Spaced retrieval.</b> Every word, sentence and grammar gap becomes a card scheduled by FSRS, an open-source algorithm that predicts when you're about to forget. You see each card at roughly 90% recall probability, which gives maximum retention per minute.</li>
      <li><b>Small batches, then recall.</b> New words arrive ten at a time: meet, recognise, match, recall in context, then type from memory.</li>
      <li><b>Desirable difficulty.</b> As a memory strengthens, cards move from multiple choice to typing, listening and fill-in-the-sentence.</li>
      <li><b>Interleaving.</b> Practice sessions and the Entreno page mix material from every stage you've reached.</li>
      <li><b>Explicit grammar, then lots of input.</b> Each stage has a rule explanation, 20 drills, key sentences, three graded readings and real podcast episodes. Input hours are tracked because comprehension grows with them.</li>
      <li><b>Output.</b> Dictation, shadowing, writing with feedback and role-play conversations close the loop.</li>
      <li><b>Curriculum.</b> Stages follow the Instituto Cervantes Plan Curricular levels; vocabulary is sized to CEFR expectations (about 4,000 words by B2).</li></ul>
    <h2>A good daily routine (45 minutes)</h2><ol><li>Reviews first (10–20 min).</li><li>One or two lesson steps (10–15 min).</li><li>A batch of new words from the stage or a deck (5–10 min).</li><li>Listen to the stage's podcast or a video and log it (15+ min).</li><li>Twice a week: write a text or chat with the tutor. Use Entreno whenever you have spare minutes.</li></ol>
    <p>Realistic expectations: C1 typically takes well over 1,000 hours of total contact with the language. Keep the reviews running, read and listen every day, and the hours add up.</p>
    <h2>Running it yourself</h2><p>Camino is a plain folder of HTML and JavaScript with no build step and no server code. It runs:</p><ul>
      <li><b>From your computer:</b> unzip the folder and open <code>index.html</code> in Chrome, Edge, Firefox or Safari.</li>
      <li><b>As a free website:</b> upload the folder to a GitHub repository and switch on GitHub Pages (instructions in the README). Your phone and laptop can then open the same address.</li>
      <li><b>On claude.ai:</b> sync and the AI tutor work automatically.</li></ul>
    <p>Progress is stored in the browser you use. To use several devices, set up free Supabase sync or move backup files between them (Settings). Each address (claude.ai, your GitHub Pages site, a local file) keeps its own progress, so use backups to move between them.</p>
    <h2>Roadmap</h2><ul>
      <li><b>Done:</b> standalone mode, optional Supabase sync, your-own-key AI tutor, browser speech recognition, placement test, level exams and DELE-style mocks, ten practice types with a mistake notebook, all 87 stages from A1 to C2 at full depth (about 6,000 words), and rule-first teaching with a Grammar page and a 📖 Rule button in every exercise.</li>
      <li><b>Next:</b> graded stories library and longer listening, daily speaking and a writing portfolio, installable app with offline mode.</li></ul></section>`;
  }

  // ---------- boot ----------
  document.addEventListener('camino:caps', () => { if (!EX.isActive()) A.render(); });
  document.addEventListener('camino:synced', () => { if (!EX.isActive()) A.render(); });
  document.addEventListener('camino:sync', syncBadge);
  A.render();
  C.checkBadges();
})(window);
