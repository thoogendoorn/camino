/* Camino — core: content index, state, persistence, sync, FSRS scheduler, speech, AI, answer checking. */
(function (G) {
  'use strict';
  const C = G.C = {};
  const LS_KEY = 'camino-v1';          // kept for continuity: v1 data is migrated in place
  const LS_SECRET = 'camino-secrets';  // API keys and sync tokens: never exported or synced
  const DAY = 864e5;

  // ---------- helpers ----------
  C.$ = (s, r = document) => r.querySelector(s);
  C.$$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  C.esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  C.dayKey = t => { const d = new Date(t); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
  C.today = () => C.dayKey(Date.now());
  C.shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  C.pick = (a, n) => C.shuffle(a).slice(0, n);
  C.uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  C.fmtMin = m => m < 60 ? Math.round(m) + ' min' : (m / 60).toFixed(m < 600 ? 1 : 0) + ' h';
  C.fmtN = n => n.toLocaleString('en-GB');
  const hash = (str, seed = 0) => { // cyrb53: stable 53-bit hash → short base36 id
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for (let i = 0; i < str.length; i++) { const ch = str.charCodeAt(i); h1 = Math.imul(h1 ^ ch, 2654435761); h2 = Math.imul(h2 ^ ch, 1597334677); }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
  };
  C.vid = es => 'v:' + hash(String(es).trim());
  C.sid = es => 's:' + hash(String(es).trim());
  C.did = q => 'd:' + hash(String(q).trim());

  // ---------- curriculum ----------
  C.LEVELS = [
    { id: 'A1', name: 'Acceso', stage: 'Roncesvalles → Pamplona', etapa: 1, blurb: 'Survive basic situations: introductions, ordering, directions, routines.' },
    { id: 'A2', name: 'Plataforma', stage: 'Pamplona → Logroño', etapa: 2, blurb: 'Everyday life abroad: shopping, housing, travel, the past.' },
    { id: 'B1', name: 'Umbral', stage: 'Logroño → Burgos', etapa: 3, blurb: 'Independent user: stories, opinions, plans, the subjunctive.' },
    { id: 'B2', name: 'Avanzado', stage: 'Burgos → León', etapa: 4, blurb: 'Fluent conversation: hypotheses, reported speech, nuance.' },
    { id: 'C1', name: 'Dominio', stage: 'León → Ponferrada', etapa: 5, blurb: 'Effective operational proficiency: register, idiom, argument.' },
    { id: 'C2', name: 'Maestría', stage: 'Ponferrada → Santiago', etapa: 6, blurb: 'Mastery: precision, style, variety, literature.' }
  ];
  const LORDER = C.LEVELS.map(l => l.id);
  C.lvIdx = l => LORDER.indexOf(l);
  const CM = G.CAMINO || { units: G.CAMINO_UNITS || [], decks: [] };
  const P = {
    V: CM.parseV || (s => []), D: CM.parseD || (s => []), S: CM.parseS || (s => []), Q: CM.parseQ || (s => [])
  };
  // example sentences: "¡{Hola}, Marta!" → { es: '¡Hola, Marta!', target: 'Hola', pre, post, en }
  C.exOf = v => {
    if (!v || !v[2]) return null; const m = v[2].match(/^(.*?)\{(.+?)\}(.*)$/);
    if (!m) return { es: v[2], en: v[3] || '', target: null };
    return { es: m[1] + m[2] + m[3], pre: m[1], target: m[2], post: m[3], en: v[3] || '' };
  };
  function normUnit(u) {
    if (u.V != null) {
      u.vocab = P.V(u.V); u.drills = P.D(u.D); u.sentences = P.S(u.S);
      u.readings = (u.R || []).map(r => ({ t: r.t, x: r.x, q: typeof r.q === 'string' ? P.Q(r.q) : (r.q || []) }));
    } else {
      u.vocab = u.vocab || []; u.drills = u.drills || []; u.sentences = u.sentences || [];
      u.readings = u.reading ? [u.reading] : [];
    }
    u.res = u.res || []; u.goal = u.goal || [];
  }
  // unit order = load order inside each level (data files load in course order)
  C.UNITS = (CM.units || []).map((u, i) => (u._o = i, u)).sort((a, b) => C.lvIdx(a.level) - C.lvIdx(b.level) || a._o - b._o);
  C.UNIT = {}; C.UNITS.forEach((u, i) => { normUnit(u); u.n = i; C.UNIT[u.id] = u; });
  C.DECKS = (CM.decks || []).slice().sort((a, b) => C.lvIdx(a.level) - C.lvIdx(b.level));
  C.DECK = {}; C.DECKS.forEach((d, i) => { d.vocab = P.V(d.V); d.n = i; d.deck = true; C.DECK[d.id] = d; });

  // item index: card id → { t, it, src }. First source wins, so a word shared by a unit and a deck is one card.
  C.ITEMS = {};
  const addItem = (id, t, it, src) => { if (!C.ITEMS[id]) C.ITEMS[id] = { id, t, it, src }; return id; };
  C.UNITS.forEach(u => {
    u.vids = u.vocab.map(v => addItem(C.vid(v[0]), 'v', v, u));
    u.sids = u.sentences.map(s => addItem(C.sid(s[0]), 's', s, u));
    u.dids = u.drills.map(d => addItem(C.did(d[0]), 'd', d, u));
  });
  C.DECKS.forEach(d => { d.vids = d.vocab.map(v => addItem(C.vid(v[0]), 'v', v, d)); });
  C.PRACTICE = (CM.practice || []).map((b, i) => {
    b.n = i; b.title = b.tag;
    b.rows = String(b.items || '').split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('#')).map(l => l.split(' | ').map(f => f.trim()));
    b.ids = b.rows.map(r => addItem('p:' + hash(b.kind + '|' + r[0] + '|' + r[1]), 'p', r, b));
    return b;
  });
  C.cardItem = id => C.ITEMS[id] || null;
  C.MOCKS = ((CM.mocks) || []).slice().sort((a, b) => C.lvIdx(a.level) - C.lvIdx(b.level) || String(a.id).localeCompare(b.id));
  C.MOCK = {}; C.MOCKS.forEach(m => C.MOCK[m.id] = m);
  C.VOCAB_TOTAL = Object.values(C.ITEMS).filter(x => x.t === 'v').length;

  C.STEPS = [
    ['learn', 'Words', 'Meet the new words in small batches'],
    ['grammar', 'Grammar', 'Explanation, tables and examples'],
    ['practice', 'Practice', 'Drills, sentences and mixed review'],
    ['read', 'Read', 'Graded texts with tap-to-translate'],
    ['listen', 'Listen', 'Dictation and listening quizzes'],
    ['speak', 'Speak', 'Shadow sentences out loud'],
    ['write', 'Write', 'A short text, with optional AI feedback'],
    ['immerse', 'Immerse', 'Real podcast episodes and videos'],
    ['check', 'Checkpoint', '80% to complete the stage']
  ];

  // ---------- state ----------
  const blankSettings = () => ({ goal: 45, rate: 0.95, voice: '', tts: 'auto', autoplay: true, strictAccents: false, reviewCap: 150, batch: 10, newPerDay: 30, freeRoam: false, ai: 'auto', aiProv: 'anthropic', aiModel: '' });
  const blank = () => ({ v: 2, updated: 0, created: Date.now(), settings: blankSettings(), units: {}, cards: {}, days: {}, input: [], writing: {}, badges: {}, tutorChats: 0, lastBackup: 0, exams: [], reports: [], tags: {}, speedBest: 0 });
  C.blank = blank;
  C.S = blank();
  function load() {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) { C.S = Object.assign(blank(), JSON.parse(raw)); C.S.settings = Object.assign(blankSettings(), C.S.settings); }
    } catch (e) { console.warn('local load failed', e); }
    migrate(C.S);
  }
  // v1 → v2: numbered stage ids and index-based card ids become slug ids and content-based ids
  C.migrateId = id => {
    if (id.indexOf('|') < 0) return id;
    const M = G.CAMINO_MIGRATE; const txt = M && M.c[id]; if (!txt) return null;
    const t = id[0]; return t === 'v' ? C.vid(txt) : t === 's' ? C.sid(txt) : C.did(txt);
  };
  const migUnit = id => { const M = G.CAMINO_MIGRATE; return (M && M.u[id]) || id; };
  function migrate(S) {
    if ((S.v || 1) >= 2) return;
    const cards = {};
    for (const id in S.cards) { const n = C.migrateId(id); if (n && (!cards[n] || (S.cards[id].last || 0) > (cards[n].last || 0))) cards[n] = S.cards[id]; }
    S.cards = cards;
    const units = {}; for (const id in S.units) units[migUnit(id)] = S.units[id]; S.units = units;
    const wr = {}; for (const id in S.writing) wr[migUnit(id)] = S.writing[id]; S.writing = wr;
    if (S.badges && S.badges.w850) { S.badges.w1000 = S.badges.w850; delete S.badges.w850; }
    S.v = 2;
  }
  C.migrateState = migrate;
  C.secrets = (() => { try { return JSON.parse(localStorage.getItem(LS_SECRET) || '{}'); } catch (e) { return {}; } })();
  { // built-in sync server from config.js (URL + publishable key), unless this browser has its own
    const K = G.CAMINO_CONFIG || {};
    if (K.supabaseUrl && K.supabaseKey && !(C.secrets.sb && C.secrets.sb.url && C.secrets.sb.key)) C.secrets.sb = Object.assign({}, C.secrets.sb || {}, { url: K.supabaseUrl, key: K.supabaseKey });
    C.builtInSync = !!(K.supabaseUrl && K.supabaseKey);
  }
  C.saveSecrets = () => { try { localStorage.setItem(LS_SECRET, JSON.stringify(C.secrets)); } catch (e) { } };
  let saveT = null;
  C.persist = () => { try { localStorage.setItem(LS_KEY, JSON.stringify(C.S)); return true; } catch (e) { return false; } };
  C.save = (opts = {}) => {
    C.S.updated = Date.now();
    clearTimeout(saveT);
    saveT = setTimeout(C.persist, opts.now ? 0 : 300);
    C.sync.schedule(); C.cloud.schedule();
  };
  C.dayRec = (k = C.today()) => (C.S.days[k] = C.S.days[k] || { t: 0, i: 0, n: 0, c: 0, w: 0 });
  load();
  addEventListener('pagehide', () => { clearTimeout(saveT); C.persist(); });

  // ---------- FSRS-4.5 scheduler ----------
  const W = [0.4872, 1.4003, 3.7145, 13.8206, 5.1618, 1.2298, 0.8975, 0.031, 1.6474, 0.1367, 1.0461, 2.1072, 0.0793, 0.3246, 1.587, 0.2272, 2.8755];
  const DECAY = -0.5, FACTOR = 19 / 81, RET = 0.9;
  const clampD = d => Math.min(10, Math.max(1, d));
  const D0 = g => clampD(W[4] - (g - 3) * W[5]);
  C.retrievability = (c, now = Date.now()) => c.last ? Math.pow(1 + FACTOR * ((now - c.last) / DAY) / c.s, DECAY) : 0;
  C.grade = (id, g) => { // g: 1 again, 2 hard, 3 good, 4 easy
    const now = Date.now();
    let c = C.S.cards[id];
    const rec = C.dayRec();
    rec.n++; if (g > 1) rec.c++;
    if (!c) {
      c = { d: D0(g), s: W[g - 1], r: 1, l: g === 1 ? 1 : 0, last: now };
      rec.w++; if (id[0] === 'v') rec.v = (rec.v || 0) + 1;
    } else {
      const R = C.retrievability(c, now);
      const elapsed = (now - (c.last || now)) / DAY;
      let d = c.d - W[6] * (g - 3);
      d = clampD(W[7] * D0(4) + (1 - W[7]) * d);
      let s;
      if (elapsed < 0.5 && c.r > 0) { // same-day re-review: short-term effect, gentle
        s = g === 1 ? Math.max(0.1, c.s * 0.5) : c.s * (g === 2 ? 1.0 : g === 3 ? 1.15 : 1.4);
      } else if (g === 1) {
        s = Math.min(c.s, W[11] * Math.pow(d, -W[12]) * (Math.pow(c.s + 1, W[13]) - 1) * Math.exp(W[14] * (1 - R)));
        c.l = (c.l || 0) + 1;
      } else {
        s = c.s * (Math.exp(W[8]) * (11 - d) * Math.pow(c.s, -W[9]) * (Math.exp(W[10] * (1 - R)) - 1) * (g === 2 ? W[15] : 1) * (g === 4 ? W[16] : 1) + 1);
      }
      c.d = d; c.s = Math.max(0.1, s); c.r = (c.r || 0) + 1; c.last = now;
    }
    const ivlDays = c.s / FACTOR * (Math.pow(RET, 1 / DECAY) - 1); // == s at 90% retention
    c.due = g === 1 ? now + 10 * 60e3 : now + Math.max(1, Math.round(ivlDays)) * DAY - 3 * 3600e3;
    C.S.cards[id] = c;
    C.save();
    return c;
  };
  C.isDue = (c, now = Date.now()) => c && c.due <= now;
  C.dueCards = () => { const now = Date.now(); return Object.keys(C.S.cards).filter(k => C.ITEMS[k] && C.S.cards[k].due <= now).sort((a, b) => C.S.cards[a].due - C.S.cards[b].due); };
  C.has = id => !!C.S.cards[id];
  // mistake notebook: wrong/total per grammar point or word topic; recent answers weigh more
  C.noteTag = (tag, ok) => {
    if (!tag) return; const T = (C.S.tags = C.S.tags || {}); const t = T[tag] || (T[tag] = { n: 0, w: 0, r: 0 });
    t.n++; if (!ok) t.w++; t.r = Math.round(((t.r || 0) * 0.8 + (ok ? 0 : 1)) * 1000) / 1000; t.last = Date.now();
  };
  C.weakTags = (min = 3) => Object.entries(C.S.tags || {}).filter(([, t]) => t.n >= min && t.w > 0).map(([k, t]) => ({ tag: k, n: t.n, w: t.w, rate: (t.w + 1) / (t.n + 2), recent: t.r || 0, last: t.last })).sort((a, b) => (b.rate + b.recent * 0.5) - (a.rate + a.recent * 0.5));
  C.newToday = () => C.dayRec().v || 0;

  // ---------- unit and deck progress ----------
  C.uState = id => { const s = (C.S.units[id] = C.S.units[id] || { steps: {}, best: 0, done: 0 }); s.reads = s.reads || {}; return s; };
  C.isDone = id => !!(C.S.units[id] && C.S.units[id].done);
  C.isUnlocked = u => C.S.settings.freeRoam || u.n === 0 || C.isDone(C.UNITS[u.n - 1].id) || C.isDone(u.id) || !!(C.S.units[u.id] && Object.keys(C.S.units[u.id].steps || {}).length);
  C.currentUnit = () => C.UNITS.find(u => !C.isDone(u.id)) || C.UNITS[C.UNITS.length - 1];
  C.markStep = (uid, step) => { const s = C.uState(uid); if (!s.steps[step]) { s.steps[step] = Date.now(); C.save(); } };
  C.levelProgress = lid => { const us = C.UNITS.filter(u => u.level === lid); return { done: us.filter(u => C.isDone(u.id)).length, total: us.length }; };
  C.currentLevel = () => C.currentUnit().level;
  C.learnedOf = src => src.vids.filter(C.has).length;
  C.reachedUnits = () => { const cur = C.currentUnit(); return C.UNITS.filter(u => u.n <= cur.n || C.isDone(u.id) || (C.S.units[u.id] && Object.keys(C.S.units[u.id].steps).length)); };

  // ---------- stats ----------
  C.stats = () => {
    const cards = Object.entries(C.S.cards).filter(([k]) => C.ITEMS[k]);
    const vocab = cards.filter(([k]) => k[0] === 'v');
    const known = vocab.filter(([, c]) => c.s >= 21).length;
    const learning = vocab.length - known;
    let appSec = 0, inputMin = 0, reviews = 0, correct = 0, daysActive = 0, streak = 0;
    for (const k in C.S.days) { const d = C.S.days[k]; appSec += d.t || 0; inputMin += d.i || 0; reviews += d.n || 0; correct += d.c || 0; if ((d.t || 0) > 120 || (d.i || 0) > 0 || (d.n || 0) > 0) daysActive++; }
    const active = k => { const d = C.S.days[k]; return d && ((d.t || 0) > 120 || (d.i || 0) > 0 || (d.n || 0) > 0); };
    for (let k = active(C.today()) ? 0 : 1; k < 3650; k++) { if (active(C.dayKey(Date.now() - k * DAY))) streak++; else break; }
    return { cards: cards.length, words: vocab.length, known, learning, appMin: appSec / 60, inputMin, totalMin: appSec / 60 + inputMin, reviews, acc: reviews ? correct / reviews : 0, daysActive, streak, unitsDone: C.UNITS.filter(u => C.isDone(u.id)).length };
  };

  // ---------- badges (credencial stamps) ----------
  C.BADGES = [
    ['first-step', 'Primer paso', 'Completed your first stage', s => s.unitsDone >= 1],
    ['a1', 'Pamplona', 'Level A1 complete', () => C.levelProgress('A1').done === C.levelProgress('A1').total],
    ['a2', 'Logroño', 'Level A2 complete', () => C.levelProgress('A2').done === C.levelProgress('A2').total],
    ['b1', 'Burgos', 'Level B1 complete', () => C.levelProgress('B1').done === C.levelProgress('B1').total],
    ['b2', 'León', 'Level B2 complete', () => C.levelProgress('B2').done === C.levelProgress('B2').total],
    ['c1', 'Ponferrada', 'Level C1 complete', () => C.levelProgress('C1').done === C.levelProgress('C1').total],
    ['c2', 'Santiago', 'Level C2 complete: ¡Buen Camino!', () => C.levelProgress('C2').done === C.levelProgress('C2').total],
    ['w100', '100 palabras', '100 words known long-term', s => s.known >= 100],
    ['w500', '500 palabras', '500 words known long-term', s => s.known >= 500],
    ['w1000', 'Mil palabras', '1,000 words known long-term', s => s.known >= 1000],
    ['w2000', 'Dos mil palabras', '2,000 words: most everyday conversation', s => s.known >= 2000],
    ['w3000', 'Tres mil palabras', '3,000 words known long-term', s => s.known >= 3000],
    ['wall', 'Todo el vocabulario', 'Every word in the course known long-term', s => s.known >= C.VOCAB_TOTAL * 0.98],
    ['deck1', 'Primera baraja', 'Learned every word of a thematic deck', () => C.DECKS.some(d => C.learnedOf(d) === d.vids.length)],
    ['s7', 'Racha de 7', '7-day streak', s => s.streak >= 7],
    ['s30', 'Racha de 30', '30-day streak', s => s.streak >= 30],
    ['s100', 'Racha de 100', '100-day streak', s => s.streak >= 100],
    ['d7', 'Una semana', 'Studied on 7 different days', s => s.daysActive >= 7],
    ['d30', 'Un mes', 'Studied on 30 different days', s => s.daysActive >= 30],
    ['d100', 'Cien días', 'Studied on 100 different days', s => s.daysActive >= 100],
    ['d365', 'Un año', 'Studied on 365 different days', s => s.daysActive >= 365],
    ['i10', '10 horas de input', '10 hours of podcasts/video logged', s => s.inputMin >= 600],
    ['i50', '50 horas de input', 'First comprehensible-input milestone', s => s.inputMin >= 3000],
    ['i150', '150 horas de input', 'Most everyday speech starts to click', s => s.inputMin >= 9000],
    ['i600', '600 horas de input', 'Comfortable with native-speed content', s => s.inputMin >= 36000],
    ['r1000', 'Mil repasos', '1,000 reviews done', s => s.reviews >= 1000],
    ['r10000', 'Diez mil repasos', '10,000 reviews done', s => s.reviews >= 10000],
    ['r50000', 'Cincuenta mil', '50,000 reviews done', s => s.reviews >= 50000],
    ['h100', '100 horas', '100 hours of total study', s => s.totalMin >= 6000],
    ['h500', '500 horas', '500 hours of total study', s => s.totalMin >= 30000],
    ['tutor', 'Primera charla', 'First conversation with the AI tutor', () => C.S.tutorChats > 0],
    ['placement', 'Punto de partida', 'Took the placement test', () => (C.S.exams || []).some(e => e.kind === 'placement')],
    ['lx-a1', 'Examen A1', 'Passed the A1 level exam', () => (C.S.exams || []).some(e => e.kind === 'level' && e.level === 'A1' && e.pass)],
    ['lx-a2', 'Examen A2', 'Passed the A2 level exam', () => (C.S.exams || []).some(e => e.kind === 'level' && e.level === 'A2' && e.pass)],
    ['lx-b1', 'Examen B1', 'Passed the B1 level exam', () => (C.S.exams || []).some(e => e.kind === 'level' && e.level === 'B1' && e.pass)],
    ['lx-b2', 'Examen B2', 'Passed the B2 level exam', () => (C.S.exams || []).some(e => e.kind === 'level' && e.level === 'B2' && e.pass)],
    ['lx-c1', 'Examen C1', 'Passed the C1 level exam', () => (C.S.exams || []).some(e => e.kind === 'level' && e.level === 'C1' && e.pass)],
    ['mock1', 'Simulacro', 'Completed a full mock exam', () => (C.S.exams || []).some(e => e.kind === 'mock' && e.full)],
    ['mockpass', 'Apto', 'Passed a full mock exam (30/50 in both groups)', () => (C.S.exams || []).some(e => e.kind === 'mock' && e.full && e.pass)]
  ];
  C.checkBadges = () => {
    const s = C.stats(); const fresh = [];
    for (const [id, name, , test] of C.BADGES) if (!C.S.badges[id] && test(s)) { C.S.badges[id] = Date.now(); fresh.push(name); }
    if (fresh.length) { C.save(); fresh.forEach(n => C.toast('New stamp in your credencial: ' + n)); }
  };

  // ---------- toast ----------
  C.toast = (msg) => {
    let t = C.$('#toast'); if (!t) { t = document.createElement('div'); t.id = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
    const el = document.createElement('div'); el.className = 'toast'; el.textContent = msg; t.appendChild(el);
    setTimeout(() => el.remove(), 4200);
  };

  // ---------- active time tracking ----------
  let lastAct = Date.now();
  ['pointerdown', 'keydown', 'scroll', 'touchstart'].forEach(e => addEventListener(e, () => lastAct = Date.now(), { passive: true }));
  setInterval(() => {
    if (document.visibilityState === 'visible' && Date.now() - lastAct < 90e3) {
      const r = C.dayRec(); r.t = (r.t || 0) + 5;
      if (r.t % 60 === 0) C.save(); else C.persist();
      if (r.t % 300 === 0) C.checkBadges();
    }
  }, 5000);

  // ---------- platform capabilities (claude.ai) ----------
  C.cap = { db: null, user: null, tts: null, dictation: null, sample: null, downloads: null };
  C.onClaude = !!(G.claude && G.claude.use);
  C.capReady = (async () => {
    await null; // let the rest of core.js define sync before this runs
    if (C.onClaude) {
      const get = async n => { try { return await G.claude.use(n); } catch (e) { return null; } };
      const [db, user, tts, dictation, sample, downloads] = await Promise.all(['db', 'user', 'tts', 'dictation', 'sample', 'downloads'].map(get));
      Object.assign(C.cap, { db, user, tts, dictation, sample, downloads });
    }
    initDictation();
    document.dispatchEvent(new CustomEvent('camino:caps'));
    C.sync.init(); C.cloud.init();
  })();

  // ---------- merge (shared by every sync route and backup import) ----------
  C.merge = (m, rc) => {
    const S = C.S;
    for (const rid in rc || {}) { const id = C.migrateId(rid); if (!id) continue; const l = S.cards[id], r = rc[rid]; if (!l || (r.last || 0) > (l.last || 0)) S.cards[id] = r; }
    const mu = id => (G.CAMINO_MIGRATE && G.CAMINO_MIGRATE.u[id]) || id;
    if (m.units) for (const rid in m.units) {
      const id = mu(rid), r = m.units[rid], l = S.units[id] || { steps: {}, best: 0, done: 0 };
      l.steps = Object.assign({}, r.steps || {}, l.steps || {}); l.reads = Object.assign({}, r.reads || {}, l.reads || {}); l.best = Math.max(l.best || 0, r.best || 0);
      l.done = (l.done && r.done) ? Math.min(l.done, r.done) : (l.done || r.done || 0); S.units[id] = l;
    }
    if (m.days) for (const k in m.days) { const r = m.days[k], l = S.days[k] || {}; S.days[k] = { t: Math.max(l.t || 0, r.t || 0), i: Math.max(l.i || 0, r.i || 0), n: Math.max(l.n || 0, r.n || 0), c: Math.max(l.c || 0, r.c || 0), w: Math.max(l.w || 0, r.w || 0), v: Math.max(l.v || 0, r.v || 0) }; }
    if (m.input) { const ids = new Set(S.input.map(e => e.id)); m.input.forEach(e => { if (!ids.has(e.id)) S.input.push(e); }); S.input.sort((a, b) => b.ts - a.ts); }
    if (m.badges) S.badges = Object.assign({}, m.badges, S.badges);
    if (m.writing) for (const rk in m.writing) { const k = mu(rk), r = m.writing[rk], l = S.writing[k]; if (!l || (r.ts || 0) > (l.ts || 0)) S.writing[k] = r; }
    if (m.settings && (m.updated || 0) > (S.updated || 0)) S.settings = Object.assign(S.settings, m.settings);
    S.tutorChats = Math.max(S.tutorChats || 0, m.tutorChats || 0);
    S.lastBackup = Math.max(S.lastBackup || 0, m.lastBackup || 0);
    if (m.created) S.created = Math.min(S.created || Date.now(), m.created);
    if (m.exams) { S.exams = S.exams || []; const ids = new Set(S.exams.map(e => e.id)); m.exams.forEach(e => { if (!ids.has(e.id)) S.exams.push(e); }); S.exams.sort((a, b) => b.ts - a.ts); }
    if (m.tags) { S.tags = S.tags || {}; for (const k in m.tags) { const r = m.tags[k], l = S.tags[k]; if (!l || (r.last || 0) > (l.last || 0)) S.tags[k] = r; } }
    S.speedBest = Math.max(S.speedBest || 0, m.speedBest || 0);
    if (m.reports) { S.reports = S.reports || []; const ks = new Set(S.reports.map(r => r.ts)); m.reports.forEach(r => { if (!ks.has(r.ts)) S.reports.push(r); }); }
  };
  C.metaOf = S => ({ units: S.units, days: S.days, input: S.input.slice(0, 1500), badges: S.badges, writing: S.writing, settings: S.settings, updated: S.updated, created: S.created, tutorChats: S.tutorChats, lastBackup: S.lastBackup, exams: (S.exams || []).slice(0, 300), reports: (S.reports || []).slice(0, 200), tags: S.tags || {}, speedBest: S.speedBest || 0 });

  // ---------- sync route 1: claude.ai artifact storage (private per person) ----------
  const SHARDS = 16;
  const shardOf = id => { let h = 0; for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) | 0; return Math.abs(h) % SHARDS; };
  const packCard = c => [Math.round(c.d * 100) / 100, Math.round(c.s * 1000) / 1000, c.due, c.last, c.r, c.l || 0];
  const unpackCard = a => ({ d: a[0], s: a[1], due: a[2], last: a[3], r: a[4], l: a[5] });
  C.packCards = cards => { const o = {}; for (const id in cards) o[id] = packCard(cards[id]); return o; };
  C.unpackCards = o => { const c = {}; for (const id in o || {}) c[id] = Array.isArray(o[id]) ? unpackCard(o[id]) : o[id]; return c; };
  C.sync = {
    status: 'off', uid: null, lastPushed: {}, timer: null, busy: false, lastSync: 0,
    refs() { const db = C.cap.db, base = 'data/users/' + this.uid + '/'; return { meta: db.doc(base + 'meta'), shard: k => db.doc(base + 'cards' + k), legacy: k => db.doc(base + 'cards' + k) }; },
    async init() {
      const { db, user } = C.cap; if (!db || !user) return;
      this.status = 'connecting'; C.emitSync();
      try {
        this.uid = await user.id(); if (!this.uid) { this.status = 'off'; C.emitSync(); return; }
        const r = this.refs();
        const timeout = new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), 15000));
        const snaps = await Promise.race([Promise.all([r.meta.get()].concat([...Array(SHARDS).keys()].map(k => r.shard(k).get()))), timeout]);
        const meta = snaps[0].exists ? snaps[0].data() : null;
        const remote = {};
        snaps.slice(1).forEach(sn => { if (sn.exists) Object.assign(remote, C.unpackCards((sn.data() || {}).c)); });
        if (meta || Object.keys(remote).length) C.merge(meta ? JSON.parse(meta.json || '{}') : {}, remote);
        this.status = 'on'; C.emitSync(); C.persist();
        await this.push();
        document.dispatchEvent(new CustomEvent('camino:synced'));
        addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') this.push(); });
      } catch (e) { console.warn('sync init', e); this.status = 'error'; C.emitSync(); }
    },
    schedule() { if (this.status !== 'on') return; clearTimeout(this.timer); this.timer = setTimeout(() => this.push(), 15000); },
    async push() {
      if (this.status !== 'on' || this.busy) return; this.busy = true;
      try {
        const r = this.refs(), S = C.S;
        const meta = { json: JSON.stringify(C.metaOf(S)) };
        const shards = [...Array(SHARDS)].map(() => ({ c: {} }));
        for (const id in S.cards) shards[shardOf(id)].c[id] = packCard(S.cards[id]);
        const jobs = [['meta', meta, r.meta]].concat(shards.map((s, k) => ['cards' + k, s, r.shard(k)]));
        for (const [name, body, ref] of jobs) {
          const str = JSON.stringify(body);
          if (this.lastPushed[name] === str) continue;
          await ref.set(body); this.lastPushed[name] = str;
        }
        this.lastSync = Date.now();
      } catch (e) {
        console.warn('sync push', e);
        if (e && (e.code === 'revoked' || e.code === 'invalid_argument' || e.code === 'quota_exceeded')) { this.status = 'error'; C.emitSync(); }
      } finally { this.busy = false; }
    }
  };

  // ---------- sync route 2: your own free Supabase project (works anywhere, e.g. GitHub Pages) ----------
  C.cloud = {
    status: 'off', timer: null, busy: false, lastSync: 0, err: '',
    cfg() { return C.secrets.sb || null; },
    configured() { const c = this.cfg(); return !!(c && c.url && c.key); },
    signedIn() { const c = this.cfg(); return !!(c && c.refresh && c.uid); },
    base() { return this.cfg().url.replace(/\/+$/, ''); },
    async api(path, opts = {}, auth = true) {
      const c = this.cfg(); const h = Object.assign({ apikey: c.key, 'Content-Type': 'application/json' }, opts.headers || {});
      if (auth) { await this.ensureToken(); h.Authorization = 'Bearer ' + this.cfg().access; }
      const res = await fetch(this.base() + path, Object.assign({}, opts, { headers: h }));
      const txt = await res.text(); let body = null; try { body = txt ? JSON.parse(txt) : null; } catch (e) { body = txt; }
      if (!res.ok) { const msg = (body && (body.msg || body.message || body.error_description || body.error)) || ('HTTP ' + res.status); const err = new Error(msg); err.status = res.status; throw err; }
      return body;
    },
    store(tok) { const c = this.cfg(); Object.assign(c, { access: tok.access_token, refresh: tok.refresh_token, exp: Date.now() + (tok.expires_in || 3600) * 1000 - 60e3, uid: tok.user && tok.user.id || c.uid, email: tok.user && tok.user.email || c.email }); C.saveSecrets(); },
    async ensureToken() { const c = this.cfg(); if (c.access && c.exp > Date.now()) return; const tok = await this.api('/auth/v1/token?grant_type=refresh_token', { method: 'POST', body: JSON.stringify({ refresh_token: c.refresh }) }, false); this.store(tok); },
    async signIn(email, password) {
      const tok = await this.api('/auth/v1/token?grant_type=password', { method: 'POST', body: JSON.stringify({ email, password }) }, false);
      this.store(tok); await this.init();
    },
    async signUp(email, password) {
      const r = await this.api('/auth/v1/signup', { method: 'POST', body: JSON.stringify({ email, password }) }, false);
      if (r && r.access_token) { this.store(r); await this.init(); return 'in'; }
      return 'confirm';
    },
    signOut() { const c = this.cfg(); if (c) { delete c.access; delete c.refresh; delete c.uid; C.saveSecrets(); } this.status = 'off'; C.emitSync(); },
    async init() {
      if (!this.configured() || !this.signedIn()) { this.status = 'off'; C.emitSync(); return; }
      this.status = 'connecting'; C.emitSync();
      try { await this.pull(); this.status = 'on'; this.err = ''; C.emitSync(); await this.push(true); document.dispatchEvent(new CustomEvent('camino:synced')); }
      catch (e) { console.warn('cloud init', e); this.err = e.message; this.status = 'error'; C.emitSync(); }
      if (!this._vis) { this._vis = true; addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') this.push(); else if (this.status === 'on') this.pull().then(() => document.dispatchEvent(new CustomEvent('camino:synced'))).catch(() => { }); }); }
    },
    async pull() {
      const rows = await this.api('/rest/v1/camino_state?select=data,updated_at&user_id=eq.' + encodeURIComponent(this.cfg().uid));
      if (rows && rows[0] && rows[0].data) { const d = rows[0].data; C.merge(d.meta || {}, C.unpackCards(d.cards)); C.persist(); }
      this.lastSync = Date.now();
    },
    schedule() { if (this.status !== 'on') return; clearTimeout(this.timer); this.timer = setTimeout(() => this.push(), 20000); },
    async push(force) {
      if ((this.status !== 'on' && !force) || this.busy) return; this.busy = true;
      try {
        const body = { user_id: this.cfg().uid, data: { v: 2, meta: C.metaOf(C.S), cards: C.packCards(C.S.cards) }, updated_at: new Date().toISOString() };
        const str = JSON.stringify(body.data); if (str === this._last) return;
        await this.api('/rest/v1/camino_state', { method: 'POST', headers: { Prefer: 'resolution=merge-duplicates,return=minimal' }, body: JSON.stringify(body) });
        this._last = str; this.lastSync = Date.now();
      } catch (e) { console.warn('cloud push', e); this.err = e.message; if (e.status === 401 || e.status === 403) { this.status = 'error'; C.emitSync(); } }
      finally { this.busy = false; }
    }
  };
  C.syncLabel = () => {
    const a = C.sync.status, b = C.cloud.status;
    if (a === 'on' && b === 'on') return 'Synced (claude.ai + Supabase)';
    if (a === 'on') return 'Synced across your devices';
    if (b === 'on') return 'Synced with your Supabase';
    if (a === 'connecting' || b === 'connecting') return 'Connecting to sync…';
    if (a === 'error' || b === 'error') return 'Sync paused (saved locally)';
    return 'Saved in this browser';
  };
  C.syncState = () => [C.sync.status, C.cloud.status].includes('on') ? 'on' : [C.sync.status, C.cloud.status].includes('error') ? 'error' : 'local';
  C.emitSync = () => document.dispatchEvent(new CustomEvent('camino:sync'));

  // ---------- backup files ----------
  C.backupJSON = () => JSON.stringify(Object.assign({}, C.S, { app: 'camino', exported: new Date().toISOString() }));
  C.download = async (name, data, type = 'application/json') => {
    if (C.cap.downloads) { try { await C.cap.downloads.save({ filename: name, data }); return true; } catch (e) { } }
    try {
      const url = URL.createObjectURL(new Blob([data], { type }));
      const a = document.createElement('a'); a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 4000); return true;
    } catch (e) { return false; }
  };
  C.importBackup = obj => {
    if (!obj || !obj.cards || !obj.units) throw new Error('format');
    const copy = JSON.parse(JSON.stringify(obj)); migrate(copy);
    C.merge(C.metaOf(Object.assign(blank(), copy)), copy.cards);
    C.save({ now: true });
  };

  // ---------- speech: text-to-speech ----------
  let voices = [];
  const loadVoices = () => { try { voices = speechSynthesis.getVoices().filter(v => /^es/i.test(v.lang)); } catch (e) { voices = []; } };
  if (G.speechSynthesis) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
  C.voices = () => voices;
  C.pickVoice = () => {
    const pref = C.S.settings.voice; if (pref) { const v = voices.find(v => v.name === pref); if (v) return v; }
    const es = voices.filter(v => /es[-_]ES/i.test(v.lang));
    return es.find(v => /google|natural|neural|premium|enhanced|monica|mónica|lucia|lucía|elvira|alvaro|álvaro/i.test(v.name)) || es[0] || voices[0] || null;
  };
  C.canSpeak = () => !!(G.speechSynthesis || C.cap.tts);
  C.speak = (text, opts = {}) => {
    text = String(text || '').replace(/[{}]/g, '');
    const rate = (opts.slow ? 0.7 : 1) * (C.S.settings.rate || 1);
    const useClaude = C.cap.tts && (C.S.settings.tts === 'claude' || (C.S.settings.tts === 'auto' && !C.pickVoice()));
    if (useClaude) {
      try { C.cap.tts.speak(text, { language: 'es-ES', rate: Math.min(1.5, Math.max(0.7, rate)) }).catch(() => { }); } catch (e) { }
      return;
    }
    if (G.speechSynthesis) {
      try {
        speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text); u.lang = 'es-ES'; u.rate = rate;
        const v = C.pickVoice(); if (v) u.voice = v;
        speechSynthesis.speak(u);
      } catch (e) { }
    }
  };
  // A script with speakers ("Carmen: …") is read line by line, alternating Spanish voices (or pitch, with one voice).
  C.parseScript = script => { const spk = []; return String(script).split('\n').map(l => l.trim()).filter(Boolean).map(l => { const m = l.match(/^([A-ZÁÉÍÓÚÑ][A-Za-zÁÉÍÓÚÑáéíóúñü .]{0,24}):\s+(.*)$/); if (!m) return { who: null, text: l }; if (!spk.includes(m[1])) spk.push(m[1]); return { who: m[1], v: spk.indexOf(m[1]), text: m[2] }; }); };
  C.speakScript = (script, opts = {}) => {
    const lines = C.parseScript(script);
    const rate = (opts.slow ? 0.75 : 1) * (C.S.settings.rate || 1);
    const useClaude = C.cap.tts && (C.S.settings.tts === 'claude' || (C.S.settings.tts === 'auto' && !C.pickVoice()));
    if (useClaude || !G.speechSynthesis) { C.speak(lines.map(l => l.text).join(' '), opts); return; }
    try {
      speechSynthesis.cancel();
      const es = voices.filter(v => /es[-_]ES/i.test(v.lang)), pool = es.length ? es : voices, base = C.pickVoice();
      const ordered = base ? [base].concat(pool.filter(v => v !== base)) : pool;
      lines.forEach((l, i) => {
        const u = new SpeechSynthesisUtterance(l.text); u.lang = 'es-ES'; u.rate = rate;
        const k = l.v == null ? 0 : l.v;
        if (ordered.length) u.voice = ordered[k % ordered.length];
        if (ordered.length < 2 && k % 2 === 1) u.pitch = 1.35; else if (ordered.length < 2 && k % 3 === 2) u.pitch = 0.8;
        if (i === lines.length - 1 && opts.onEnd) u.onend = opts.onEnd;
        speechSynthesis.speak(u);
      });
    } catch (e) { }
  };
  C.stopSpeak = () => { try { speechSynthesis.cancel(); } catch (e) { } try { C.cap.tts && C.cap.tts.stop(); } catch (e) { } };

  // ---------- speech: recognition (claude.ai dictation, or the browser's own Web Speech API) ----------
  const H = { partial: null, final: null, state: null };
  C.dict = null;
  function initDictation() {
    const d = C.cap.dictation;
    if (d) {
      try { d.onPartial(e => H.partial && H.partial(e)); d.onFinal(e => H.final && H.final(e)); d.onState(e => H.state && H.state(e)); } catch (e) { }
      C.dict = { kind: 'claude', start: () => d.start(), stop: () => d.stop() };
    } else {
      const SR = G.SpeechRecognition || G.webkitSpeechRecognition;
      if (SR) {
        let rec = null;
        C.dict = {
          kind: 'browser',
          start() {
            return new Promise((resolve, reject) => {
              try {
                rec = new SR(); rec.lang = 'es-ES'; rec.interimResults = true; rec.continuous = false; rec.maxAlternatives = 1;
                rec.onstart = () => { H.state && H.state({ state: 'listening' }); resolve(); };
                rec.onresult = ev => { let part = ''; for (let i = ev.resultIndex; i < ev.results.length; i++) { const r = ev.results[i]; if (r.isFinal) H.final && H.final({ text: r[0].transcript }); else part += r[0].transcript; } if (part) H.partial && H.partial({ text: part }); };
                rec.onerror = e => { const err = new Error(e.error); err.code = e.error === 'not-allowed' ? 'not_granted' : e.error; H.state && H.state({ state: 'idle' }); reject(err); };
                rec.onend = () => { H.state && H.state({ state: 'idle' }); };
                rec.start();
              } catch (e) { reject(e); }
            });
          },
          stop() { try { rec && rec.stop(); } catch (e) { } return Promise.resolve(); }
        };
      }
    }
  }
  C.dictOn = (h) => { H.partial = h.partial || null; H.final = h.final || null; H.state = h.state || null; };

  // ---------- AI: claude.ai built-in, or your own API key (Anthropic or OpenAI) ----------
  C.AI_DEFAULTS = { anthropic: 'claude-haiku-5-5', openai: 'gpt-4o-mini' };
  C.ai = {
    mode() {
      const s = C.S.settings, key = C.secrets.aiKey;
      if (C.cap.sample && s.ai !== 'key') return 'claude';
      if (key && s.ai !== 'off') return s.aiProv || 'anthropic';
      return null;
    },
    available() { return !!this.mode(); },
    label() { const m = this.mode(); return m === 'claude' ? 'Claude (built in)' : m === 'anthropic' ? 'Anthropic API (your key)' : m === 'openai' ? 'OpenAI API (your key)' : 'off'; },
    async ask(input, opts = {}) {
      const m = this.mode(); if (!m) { const e = new Error('AI is not set up'); e.code = 'not_granted'; throw e; }
      if (m === 'claude') return C.cap.sample(input, { modelTier: opts.tier || 'default', onText: opts.onText, cache: opts.cache });
      const msgs = typeof input === 'string' ? [{ role: 'user', content: input }] : input;
      const model = C.S.settings.aiModel || C.AI_DEFAULTS[m];
      let text = '';
      if (m === 'anthropic') {
        const r = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: { 'content-type': 'application/json', 'x-api-key': C.secrets.aiKey, 'anthropic-version': '2023-06-01', 'anthropic-dangerous-direct-browser-access': 'true' },
          body: JSON.stringify({ model, max_tokens: opts.max || 1200, messages: msgs })
        });
        const j = await r.json().catch(() => ({}));
        if (!r.ok) { const e = new Error((j.error && j.error.message) || 'HTTP ' + r.status); e.code = r.status === 429 ? 'rate_limited' : r.status === 401 ? 'bad_key' : 'error'; throw e; }
        text = (j.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
      } else {
        const r = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: { 'content-type': 'application/json', Authorization: 'Bearer ' + C.secrets.aiKey },
          body: JSON.stringify({ model, messages: msgs })
        });
        const j = await r.json().catch(() => ({}));
        if (!r.ok) { const e = new Error((j.error && j.error.message) || 'HTTP ' + r.status); e.code = r.status === 429 ? 'rate_limited' : r.status === 401 ? 'bad_key' : 'error'; throw e; }
        text = ((j.choices || [])[0] || {}).message?.content || '';
      }
      if (opts.onText) opts.onText({ text });
      return { text };
    },
    errText(e) { return e && e.code === 'rate_limited' ? 'The tutor is busy. Try again in a minute.' : e && e.code === 'not_granted' ? 'AI is turned off. Set it up in Settings › AI tutor.' : e && e.code === 'bad_key' ? 'Your API key was rejected. Check it in Settings › AI tutor.' : 'Could not reach the AI right now' + (e && e.message ? ' (' + e.message + ')' : '') + '.'; }
  };

  // ---------- answer checking ----------
  const ACC = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ü': 'u', 'ñ': 'n' };
  C.norm = s => String(s || '').toLowerCase().replace(/\([^)]*\)/g, ' ').replace(/[¿¡?!.,;:"«»“”…—–\-{}]/g, ' ').replace(/'/g, '').replace(/\s+/g, ' ').trim();
  C.deacc = s => s.replace(/[áéíóúüñ]/g, c => ACC[c]);
  C.lev = (a, b) => {
    if (a === b) return 0; const m = a.length, n = b.length; if (!m) return n; if (!n) return m;
    let prev = Array.from({ length: n + 1 }, (_, j) => j);
    for (let i = 1; i <= m; i++) { const cur = [i]; for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); prev = cur; }
    return prev[n];
  };
  // Expand vocab notation into acceptable answers: "el/la profesor/a", "alto / alta", "el/la juez/a", "¡diga! / ¿dígame?"
  C.expand = es => {
    const out = new Set();
    String(es).split(/\s+\/\s+|\s*,\s*(?=[a-záéíóúñ¿¡])/i).forEach(part => {
      const toks = part.replace(/…/g, '').trim().split(/\s+/);
      const masc = [], fem = [];
      toks.forEach(t => {
        const m = t.match(/^(.+)\/(a|as)$/);
        if (t === 'el/la') { masc.push('el'); fem.push('la'); }
        else if (t === 'los/las') { masc.push('los'); fem.push('las'); }
        else if (m) { masc.push(m[1]); fem.push(/[oe]s?$/.test(m[1]) && !/or$/.test(m[1]) ? m[1].replace(/[oe](s?)$/, '') + m[2] : m[1] + m[2]); }
        else { masc.push(t); fem.push(t); }
      });
      out.add(masc.join(' ')); out.add(fem.join(' '));
    });
    return [...out].map(C.norm).filter(Boolean);
  };
  // gender of a noun entry: 'el' / 'la' / null
  C.genderOf = es => { const m = String(es).match(/^(el|la)\s+(?!\S*\/)/); return m && !/\s\/\s/.test(es) ? m[1] : null; };
  const ART = /^(el|la|los|las|un|una|unos|unas)\s+/;
  C.ART = ART;
  // returns {ok, close, note}
  C.check = (input, answers, { sentence = false } = {}) => {
    const a = C.norm(input); if (!a) return { ok: false };
    const list = answers.map(C.norm), orig = i => answers[i];
    if (list.includes(a)) return { ok: true };
    const strict = C.S.settings.strictAccents;
    for (let i = 0; i < list.length; i++) { const t = list[i]; if (C.deacc(t) === C.deacc(a)) return strict ? { ok: false, note: 'Check the accents: ' + orig(i) } : { ok: true, close: true, note: 'Watch the accents: ' + orig(i) }; }
    for (let i = 0; i < list.length; i++) { const t = list[i]; if (ART.test(t) && t.replace(ART, '') === a) return { ok: true, close: true, note: 'Learn it with its article: ' + orig(i) }; }
    for (let i = 0; i < list.length; i++) {
      const t = list[i], d = C.lev(C.deacc(a), C.deacc(t)), L = t.length;
      if ((L >= 5 && d <= 1) || (L >= 12 && d <= 2) || (sentence && d <= Math.max(2, Math.round(L * 0.08)))) return { ok: true, close: true, note: 'Almost: ' + orig(i) };
    }
    if (sentence) {
      const best = Math.max(...list.map(t => C.wordScore(a, t)));
      if (best >= 0.86) return { ok: true, close: true, note: 'Close enough. Reference: ' + answers[0] };
    }
    return { ok: false };
  };
  C.wordScore = (a, b) => { // LCS over words / max length
    const x = C.deacc(C.norm(a)).split(' '), y = C.deacc(C.norm(b)).split(' ');
    const dp = Array.from({ length: x.length + 1 }, () => Array(y.length + 1).fill(0));
    for (let i = 1; i <= x.length; i++) for (let j = 1; j <= y.length; j++) dp[i][j] = x[i - 1] === y[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
    return dp[x.length][y.length] / Math.max(x.length, y.length);
  };

  // ---------- glossary for tap-to-translate ----------
  C.GLOSS = {};
  Object.values(C.ITEMS).forEach(({ t, it }) => {
    if (t !== 'v') return; const [es, en] = it;
    C.expand(es).forEach(f => { const k = f.replace(ART, ''); if (!C.GLOSS[k]) C.GLOSS[k] = en; if (!C.GLOSS[f]) C.GLOSS[f] = en; });
    const ex = C.exOf(it); if (ex && ex.target) { const k = C.norm(ex.target); if (k && !C.GLOSS[k] && k.split(' ').length <= 3) C.GLOSS[k] = en + (C.norm(es) !== k ? ' (' + es + ')' : ''); }
  });
  const FW = 'de:of, from|a:to, at|en:in, on|y:and|e:and (before i-)|o:or|u:or (before o-)|que:that, which; than|el:the|la:the; her, it|los:the; them|las:the; them|lo:it, him; the (neuter)|un:a, one|una:a, one|unos:some|unas:some|del:of the|al:to the|se:himself/herself/itself; one|me:me, myself|te:you, yourself|nos:us, ourselves|os:you all, yourselves|le:to him/her/you|les:to them|mi:my|mis:my|tu:your|tus:your|su:his, her, its, their, your (formal)|sus:his, her, their|yo:I|tú:you|él:he|ella:she|ellos:they|ellas:they (f)|usted:you (formal)|ustedes:you all|nosotros:we|vosotros:you all (Spain)|no:no, not|sí:yes|si:if|por:for, by, through|para:for, in order to|con:with|sin:without|sobre:on, about|entre:between, among|hasta:until, even|desde:from, since|hacia:towards|muy:very|más:more|menos:less|pero:but|porque:because|como:like, as; how|cuando:when|donde:where|también:also|ya:already|todavía:still, yet|aún:still|todo:all, everything|toda:all|todos:everyone, all|todas:all|este:this|esta:this|estos:these|estas:these|ese:that|esa:that|esos:those|esas:those|esto:this|eso:that|aquí:here|allí:there|ahí:there|hay:there is / are|es:is|son:are|está:is (state, place)|están:are|era:was|fue:was; went|ha:has|han:have|he:I have|tiene:has|tienen:have|hace:does, makes; ago|va:goes|van:go|muchos:many|muchas:many|mucho:a lot|mucha:much|poco:little|otro:another|otra:another|otros:others|algo:something|nada:nothing|nadie:nobody|alguien:somebody|siempre:always|nunca:never|bien:well|mal:badly|qué:what|quién:who|cómo:how|dónde:where|cuándo:when|cuánto:how much|cuál:which|así:like this, so|tan:so|tanto:so much|cada:each, every|ni:nor|después:after|antes:before|luego:then, later|ahora:now|hoy:today|mañana:tomorrow; morning|ayer:yesterday|vez:time (occasion)|veces:times|día:day|año:year|años:years|casa:house, home|gente:people|cosa:thing|cosas:things|bueno:good; well…|buena:good|gran:great|grande:big|pequeño:small'.split('|');
  const FWM = {}; FW.forEach(p => { const i = p.indexOf(':'); FWM[p.slice(0, i)] = p.slice(i + 1); });
  let VFORMS = null;
  const verbForms = () => {
    if (VFORMS) return VFORMS; VFORMS = {};
    const T = { pres: 'present', indef: 'preterite', impf: 'imperfect', fut: 'future', cond: 'conditional', subj: 'subjunctive', impsubj: 'imp. subjunctive' };
    for (const [inf, en] of Verbs.VERBS) { if (/se$/.test(inf)) continue; for (const t in T) { try { Verbs.conj(inf, t).forEach(f => { const k = C.norm(f); if (k && !VFORMS[k]) VFORMS[k] = inf + ' (' + en + '), ' + T[t]; }); } catch (e) { } }
      try { VFORMS[C.norm(Verbs.participle(inf))] = VFORMS[C.norm(Verbs.participle(inf))] || 'participle of ' + inf + ' (' + en + ')'; VFORMS[C.norm(Verbs.gerund(inf))] = 'gerund of ' + inf + ' (' + en + ')'; VFORMS[inf] = VFORMS[inf] || en; } catch (e) { } }
    return VFORMS;
  };
  C.gloss = w => {
    const k = C.norm(w); if (!k) return null;
    if (C.GLOSS[k]) return C.GLOSS[k];
    if (FWM[k]) return FWM[k];
    const vf = verbForms(); if (vf[k]) return vf[k];
    for (const cand of [k.replace(/es$/, ''), k.replace(/s$/, ''), k.replace(/a$/, 'o'), k.replace(/as$/, 'o'), k.replace(/os$/, 'o'), k.replace(/(me|te|se|lo|la|le|nos|os|los|las|les)$/, '')]) if (cand !== k && (C.GLOSS[cand] || FWM[cand] || vf[cand])) return C.GLOSS[cand] || FWM[cand] || vf[cand];
    return null;
  };

  // ---------- markdown-lite for AI replies ----------
  C.md = s => C.esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/(^|[^*])\*(?!\s)(.+?)\*/g, '$1<i>$2</i>').replace(/^#{1,4}\s*(.+)$/gm, '<b>$1</b>').replace(/^\s*[-•]\s+/gm, '• ').replace(/\n/g, '<br>');
})(window);
