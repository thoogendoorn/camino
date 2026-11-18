/* Camino — Phase 2 practice types: transformation, error hunt, contrast pairs, collocations, register,
   word building, conjugation in context, tenses in a story, dictogloss, speed round; weak-point sessions. */
(function (G) {
  'use strict';
  const { $, $$, esc, shuffle, pick } = C;
  const E = G.EX, P = G.PRAC = {};
  const item = id => C.ITEMS[id];
  const lvOK = (lv, max) => C.lvIdx(lv) <= max;

  // ---------- builders for hand-written practice items ----------
  P.KINDS = {
    transform: ['Transform', 'Rewrite the sentence following the cue'],
    errors: ['Error hunt', 'Find the mistake, then see the fix'],
    contrast: ['Contrast pairs', 'ser/estar, por/para, indicative/subjunctive and other traps'],
    colloc: ['Collocations', 'Which word goes with which'],
    register: ['Register', 'Formal, neutral and colloquial alternatives'],
    wordbuild: ['Word building', 'Nouns, verbs and adjectives from the same root']
  };
  E.pEx = id => {
    const x = item(id); if (!x) return null; const r = x.it, b = x.src, tag = b.tag;
    if (b.kind === 'transform') {
      const alts = r[2].split('|');
      return { type: 'type', card: id, tag, prompt: r[1], promptEs: true, sub: 'Transform · ' + r[0], answers: alts, show: alts[0], sentence: true, long: true, say: alts[0] };
    }
    if (b.kind === 'errors') return { type: 'errhunt', card: id, tag, wrong: r[0], right: r[1], explain: r[2] || '', show: r[1] };
    if (b.kind === 'contrast') {
      const m = r[0].match(/\[([^\]]+)\]/); if (!m) return null;
      const opts = m[1].split('/').map(s => s.trim());
      const ans = r[1].trim();
      return { type: 'mc', card: id, tag, prompt: r[0].replace(m[0], '___'), promptEs: true, sub: 'Choose: ' + opts.join(' or '), options: opts, answer: ans, hideSay: true, explain: r[2] || '', say: r[0].replace(m[0], ans), show: r[0].replace(m[0], ans), en: r[2] || '' };
    }
    if (b.kind === 'colloc' || b.kind === 'register') {
      const alts = r[1].split('|'), ans = alts.join(' / '), ds = (r[2] || '').split(';').map(s => s.trim()).filter(Boolean);
      const full = /___/.test(r[0]) ? r[0].replace('___', alts[0]) : alts[0];
      return { type: 'mc', card: id, tag, prompt: r[0], promptEs: true, sub: (b.kind === 'colloc' ? 'Which word fits?' : 'Choose the right register') + (r[3] ? ' · ' + r[3] : ''), options: shuffle([ans].concat(ds)), answer: ans, hideSay: true, say: full, sayAnswer: false, show: full, en: r[3] || '' };
    }
    if (b.kind === 'wordbuild') {
      const alts = r[1].split('|');
      return { type: 'type', card: id, tag, prompt: r[0], promptEs: true, sub: 'Word building' + (r[2] ? ' · ' + r[2] : ''), answers: alts, show: alts[0], en: r[2] || '' };
    }
    return null;
  };
  // error hunt: tap the wrong word; the words that differ from the corrected sentence count as right taps
  const toks = s => s.split(/\s+/).filter(Boolean);
  const diffIdx = (a, b) => {
    const x = a.map(t => C.deacc(C.norm(t))), y = b.map(t => C.deacc(C.norm(t)));
    const dp = Array.from({ length: x.length + 1 }, () => Array(y.length + 1).fill(0));
    for (let i = x.length - 1; i >= 0; i--) for (let j = y.length - 1; j >= 0; j--) dp[i][j] = x[i] === y[j] && C.norm(a[i]) === C.norm(b[j]) ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    const keep = new Set(); let i = 0, j = 0;
    while (i < x.length && j < y.length) { if (x[i] === y[j] && C.norm(a[i]) === C.norm(b[j])) { keep.add(i); i++; j++; } else if (dp[i + 1][j] >= dp[i][j + 1]) i++; else j++; }
    const bad = a.map((_, k) => k).filter(k => !keep.has(k));
    return bad.length ? bad : [Math.max(0, a.length - 1)];
  };
  E.renderers.errhunt = (ex, root, done, ctx) => {
    const w = toks(ex.wrong), bad = diffIdx(w, toks(ex.right));
    root.innerHTML = `<div class="ex"><div class="sub">Error hunt · tap the word that's wrong</div><div class="eh" lang="es">${w.map((t, i) => `<button class="tile" data-i="${i}">${esc(t)}</button>`).join(' ')}</div><div class="fb" aria-live="polite"></div><div class="foot"><button class="btn ghost" id="ehno">I can't find it</button></div></div>`;
    const finish = i => {
      $$('.eh .tile', root).forEach(b => { b.disabled = true; const k = +b.dataset.i; if (bad.includes(k)) b.classList.add('in'); if (k === i && !bad.includes(k)) b.classList.add('wrongt'); });
      const ok = i != null && bad.includes(i);
      ctx.feedback(root, Object.assign({}, ex, { show: ex.right, say: ex.right }), { ok }, i == null ? '' : null, done);
    };
    $$('.eh .tile', root).forEach(b => b.onclick = () => finish(+b.dataset.i));
    $('#ehno', root).onclick = () => finish(null);
  };

  // ---------- verb-form index (built once; only forms that belong to a single verb) ----------
  let VF = null;
  const TN = { pres: 'presente', indef: 'pretérito indefinido', impf: 'pretérito imperfecto', fut: 'futuro', cond: 'condicional', subj: 'presente de subjuntivo', impsubj: 'imperfecto de subjuntivo' };
  const NOTVERB = new Set('anda vaya venga oye oiga mira toma vale como entre sobre bajo vino parte cambio trabajo camino paseo baile casa caso cuenta nada río sal ve vi fue fui fuimos fueron fuera fueras fuéramos fueran fuese era eres es son soy hay ha he han has hemos haya hayas hayan está están estás esta estas este sea seas sean da dé di diste dio vale cara para pena siento libro baja llama llamas peso pesa canto copa toma tome come comes como bebo vivo frío seco limpio claro junto cambio cierre corte cruce cuento final hecho juego lucha marca mira miras pasa pasas regalo resto viaje vuelta medio media'.split(' '));
  P.verbForms = () => {
    if (VF) return VF; VF = {}; const seen = {};
    for (const [inf] of Verbs.VERBS) { if (/se$/.test(inf)) continue; for (const t in TN) { let f; try { f = Verbs.conj(inf, t); } catch (e) { continue; } f.forEach((form, p) => { if (!form || / /.test(form)) return; const k = C.norm(form); (seen[k] = seen[k] || new Set()).add(inf); if (!VF[k]) VF[k] = { inf, t, p }; else if (VF[k].inf === inf && VF[k].t !== t) VF[k].amb = true; else if (VF[k].inf === inf && VF[k].p !== p) VF[k].ambP = true; }); } }
    for (const k in seen) if (seen[k].size > 1 || NOTVERB.has(k) || VF[k].amb) delete VF[k];
    return VF;
  };
  const PERS = ['yo', 'tú', 'él/ella', 'nosotros', 'vosotros', 'ellos'];
  // conjugation in context: example sentences whose {target} is a single conjugated verb form
  const memo = (fn) => { const c = {}; return m => c[m] || (c[m] = fn(m)); };
  P.conjCtx = memo(maxLv => {
    const vf = P.verbForms(), out = [];
    for (const x of Object.values(C.ITEMS)) {
      if (x.t !== 'v' || !lvOK(x.src.level, maxLv) || C.ART.test(x.it[0]) || / \/ /.test(x.it[0])) continue;
      const e = C.exOf(x.it); if (!e || !e.target || / /.test(e.target)) continue;
      const k = C.norm(e.target), v = vf[k]; if (!v || k === v.inf) continue;
      out.push({ id: x.id, e, v });
    }
    return out;
  });
  P.conjCtxEx = o => ({ type: 'cloze', card: o.id, q: o.e.pre + '___' + o.e.post, answers: [o.e.target], show: o.e.target, en: o.e.en, hint2: o.v.inf, say: o.e.es, sub: 'Conjugate in context · ' + o.v.inf + ' (' + TN[o.v.t] + (o.v.ambP ? '' : ', ' + PERS[o.v.p]) + ')', tag: 'Conjugación · ' + TN[o.v.t] });

  // ---------- tenses in a story: past verbs gapped in the graded readings ----------
  P.stories = memo(maxLv => {
    const vf = P.verbForms(), out = [];
    C.UNITS.filter(u => lvOK(u.level, maxLv) && C.lvIdx(u.level) >= 1).forEach(u => u.readings.forEach((r, ri) => {
      const parts = r.x.split(/([A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)/);
      const gaps = [];
      parts.forEach((t, i) => { if (i % 2) { const v = vf[C.norm(t)]; if (v && (v.t === 'indef' || v.t === 'impf') && t.length > 2 && !/^[A-ZÁÉÍÓÚÑ]/.test(t)) gaps.push({ i, form: t, v }); } });
      if (gaps.length >= 4) out.push({ u, r, ri, parts, gaps: gaps.slice(0, 10), ref: u.id + '/story/' + ri });
    }));
    return out;
  });
  P.storyEx = s => ({ type: 'story', title: s.r.t, parts: s.parts, gaps: s.gaps, tag: 'Indefinido o imperfecto', ref: s.ref });
  E.renderers.story = (ex, root, done, ctx) => {
    const gi = {}; ex.gaps.forEach((g, k) => gi[g.i] = k);
    const html = ex.parts.map((t, i) => gi[i] != null ? `<span class="sgap"><input data-k="${gi[i]}" lang="es" autocomplete="off" spellcheck="false" aria-label="${esc(ex.gaps[gi[i]].v.inf)}" size="${Math.max(6, ex.gaps[gi[i]].form.length + 1)}"><small>${esc(ex.gaps[gi[i]].v.inf)}</small></span>` : esc(t).replace(/\n/g, '<br>')).join('');
    root.innerHTML = `<div class="ex wide"><div class="sub">Tenses in a story · preterite or imperfect?</div><h2 class="ptitle">${esc(ex.title)}</h2><p class="instr">Write each verb in the right past tense.</p><div class="reading small exam-text story" lang="es">${html}</div><div class="fb" aria-live="polite"></div><div class="foot"><button class="btn primary" id="stchk">Check</button></div></div>`;
    const ins = $$('.story input', root); if (ins[0]) ins[0].focus();
    ins.forEach((inp, k) => inp.onkeydown = e => { if (e.key === 'Enter') { e.preventDefault(); (ins[k + 1] || $('#stchk', root)).focus(); } });
    $('#stchk', root).onclick = () => {
      let pts = 0;
      ins.forEach(inp => { const g = ex.gaps[+inp.dataset.k]; const r = C.check(inp.value, [g.form]); inp.disabled = true; const ok = r.ok; if (ok) pts++; inp.classList.add(ok ? 'gok' : 'gbad'); if (!ok) { const s = document.createElement('b'); s.className = 'gfix'; s.textContent = g.form; inp.after(s); } });
      const res = { ok: pts >= ex.gaps.length * 0.8, close: pts >= ex.gaps.length * 0.5 && pts < ex.gaps.length * 0.8, pts, max: ex.gaps.length };
      if (ctx.exam) { done(res); return; }
      const fb = $('.fb', root); fb.className = 'fb ' + (res.ok ? 'good' : res.close ? 'close' : 'bad'); fb.innerHTML = `<b>${pts} of ${ex.gaps.length} right</b><div>Preterite for completed events in sequence; imperfect for background, description and habits.</div>`;
      $('#stchk', root).textContent = 'Continue'; $('#stchk', root).onclick = () => done(res);
    };
  };

  // ---------- dictogloss: hear a paragraph twice, write it down ----------
  P.paragraphs = memo(maxLv => {
    const out = [];
    C.UNITS.filter(u => lvOK(u.level, maxLv)).forEach(u => u.readings.forEach((r, ri) => {
      const sents = r.x.replace(/\n+/g, ' ').match(/[^.!?…]+[.!?…]+/g) || [];
      let buf = '';
      for (const s of sents) { const nb = (buf + ' ' + s).trim(); if (nb.split(/\s+/).length > 45) break; buf = nb; if (buf.split(/\s+/).length >= 18) break; }
      const n = buf.split(/\s+/).length; if (n >= 12 && n <= 45 && !/—|«/.test(buf)) out.push({ text: buf, title: r.t, level: u.level, ref: u.id + '/dicto/' + ri });
    }));
    return out;
  });
  P.dictoEx = p => ({ type: 'dicto', text: p.text, title: p.title, tag: 'Comprensión auditiva', ref: p.ref });
  E.renderers.dicto = (ex, root, done, ctx) => {
    let plays = 0;
    root.innerHTML = `<div class="ex wide"><div class="sub">Dictogloss · ${esc(ex.title)}</div><p class="instr">Listen twice, then write the paragraph as closely as you can. Meaning first, then grammar and spelling.</p><div class="listen-row"><button class="btn primary" id="dplay">${G.ICON.speaker} <span>Play</span></button><button class="btn ghost" id="dslow">${G.ICON.turtle} Slowly</button><span class="muted" id="dplays">Two listens recommended</span></div><textarea id="dtx" rows="6" lang="es" spellcheck="false" placeholder="Escribe lo que has oído…"></textarea><div class="fb" aria-live="polite"></div><div class="foot"><button class="btn primary" id="dchk">Check</button></div></div>`;
    const play = slow => { const el = $('#dplays', root); if (!el) return; plays++; C.speak(ex.text, { slow }); el.textContent = 'Played ' + plays + '×'; };
    $('#dplay', root).onclick = () => play(false); $('#dslow', root).onclick = () => play(true);
    if (C.S.settings.autoplay) setTimeout(() => play(false), 300);
    $('#dchk', root).onclick = () => {
      const v = $('#dtx', root).value, sc = C.wordScore(v, ex.text);
      const res = { ok: sc >= 0.75, close: sc >= 0.5 && sc < 0.75, pts: Math.round(sc * 10) / 10, max: 1 };
      C.stopSpeak();
      const fb = $('.fb', root); fb.className = 'fb ' + (res.ok ? 'good' : res.close ? 'close' : 'bad');
      fb.innerHTML = `<b>${Math.round(sc * 100)}% of the words in the right order</b><div class="es" lang="es">${esc(ex.text)}</div>`;
      $('#dtx', root).disabled = true; $('#dchk', root).textContent = 'Continue'; $('#dchk', root).onclick = () => done(res);
    };
  };

  // ---------- speed round: 60 seconds of quick recognition ----------
  E.renderers.speed = (ex, root, done) => {
    const pool = ex.ids.slice(); let score = 0, seen = 0, left = 60, cur = null, timer = null, over = false;
    root.innerHTML = `<div class="ex"><div class="sub">Speed round · 60 seconds</div><div class="speedbar"><span class="big-timer" id="spt">60</span><span class="spscore">Score <b id="sps">0</b> · best ${C.S.speedBest || 0}</span></div><div class="prompt es" id="spq"></div><div class="opts" id="spo"></div><div class="fb"></div><div class="foot"></div></div>`;
    const next = () => {
      if (!pool.length) pool.push(...shuffle(ex.ids));
      const id = pool.shift(); cur = E.vocabEx(id, Math.random() < 0.5 ? 'mc-es' : 'mc-en'); if (!cur) return next();
      $('#spq', root).textContent = cur.prompt; $('#spo', root).innerHTML = cur.options.map((o, i) => `<button class="opt" data-i="${i}"><span class="k">${i + 1}</span>${esc(o)}</button>`).join('');
      $$('#spo .opt', root).forEach(b => b.onclick = () => choose(+b.dataset.i));
    };
    const choose = i => { if (over) return; seen++; if (cur.options[i] === cur.answer) { score++; $('#sps', root).textContent = score; } else { const b = $$('#spo .opt', root)[i]; b.classList.add('wrong'); } setTimeout(next, cur.options[i] === cur.answer ? 60 : 350); };
    const key = e => { const n = +e.key; if (n >= 1 && n <= 4 && cur) choose(n - 1); };
    document.addEventListener('keydown', key);
    const end = () => {
      over = true; clearInterval(timer); document.removeEventListener('keydown', key);
      const best = score > (C.S.speedBest || 0); if (best) { C.S.speedBest = score; C.save(); }
      root.innerHTML = `<div class="ex done-card"><div class="big-num">${score}</div><p class="lead">${score} right out of ${seen} in 60 seconds.${best ? ' New record!' : ' Your best: ' + C.S.speedBest + '.'}</p><div class="row"><button class="btn primary" id="spdone">Continue</button></div></div>`;
      $('#spdone', root).onclick = () => done({ ok: true, pts: score, max: Math.max(1, seen) });
    };
    timer = setInterval(() => { left--; const el = $('#spt', root); if (el) el.textContent = left; if (left <= 0) end(); }, 1000);
    next();
  };

  // ---------- pools and workouts ----------
  P.maxLv = () => Math.min(4, C.lvIdx(C.currentLevel()) + (C.S.settings.freeRoam ? 1 : 0));
  P.blocks = (kind, maxLv) => C.PRACTICE.filter(b => b.kind === kind && lvOK(b.level, maxLv));
  P.ids = (kind, maxLv) => P.blocks(kind, maxLv).flatMap(b => b.ids);
  P.weakFirst = (ids, n) => {
    const fresh = ids.filter(id => !C.has(id)), due = ids.filter(id => C.has(id) && C.isDue(C.S.cards[id])), seen = ids.filter(id => C.has(id) && !C.isDue(C.S.cards[id])).sort((a, b) => C.retrievability(C.S.cards[a]) - C.retrievability(C.S.cards[b]));
    return shuffle(due).concat(shuffle(fresh), seen).slice(0, n);
  };
  P.WORKOUTS = [
    ['weak', 'Weak points', 'A 10-minute session on the five grammar points and topics you miss most', () => C.weakTags().length],
    ['transform', 'Transformations', 'Rewrite sentences: tense changes, reported speech, passive, subjunctive', m => P.ids('transform', m).length],
    ['errors', 'Error hunt', 'Spot the one mistake in each sentence', m => P.ids('errors', m).length],
    ['contrast', 'Contrast pairs', 'ser/estar, por/para, indicative/subjunctive: with the reason why', m => P.ids('contrast', m).length],
    ['tenses', 'Tenses in a story', 'Preterite or imperfect in real texts from the course', m => P.stories(m).length],
    ['conjctx', 'Conjugation in context', 'The right verb form inside a real sentence', m => P.conjCtx(m).length],
    ['colloc', 'Collocations', 'tomar, hacer or dar una decisión? Natural word partners', m => P.ids('colloc', m).length],
    ['wordbuild', 'Word building', 'cambiar → el cambio: nouns, verbs, adjectives from one root', m => P.ids('wordbuild', m).length],
    ['register', 'Register', 'Formal and colloquial alternatives', m => P.ids('register', m).length],
    ['dicto', 'Dictogloss', 'Hear a paragraph, write it down', m => P.paragraphs(m).length],
    ['speed', 'Speed round', '60 seconds, as many words as you can', () => Object.keys(C.S.cards).filter(id => id[0] === 'v' && item(id)).length >= 8 ? 1 : 0]
  ];
  P.workout = k => {
    const m = P.maxLv();
    if (['transform', 'errors', 'contrast', 'colloc', 'wordbuild', 'register'].includes(k)) return P.weakFirst(P.ids(k, m), 20).map(E.pEx);
    if (k === 'tenses') return pick(P.stories(m), 3).map(P.storyEx);
    if (k === 'conjctx') return pick(P.conjCtx(m), 20).map(P.conjCtxEx);
    if (k === 'dicto') return pick(P.paragraphs(m), 5).map(P.dictoEx);
    if (k === 'speed') return [{ type: 'speed', ids: shuffle(Object.keys(C.S.cards).filter(id => id[0] === 'v' && item(id))) }];
    if (k === 'weak') return P.weakItems(5, 24);
    return [];
  };
  // items for a tag (grammar point or word topic)
  P.tagItems = (tag, n) => {
    const out = [];
    if (/^Conjugación · /.test(tag)) {
      const tn = tag.replace('Conjugación · ', ''), T = Verbs.TENSES.find(t => t.es === tn);
      const ctx = P.conjCtx(4).filter(o => 'Conjugación · ' + TN[o.v.t] === tag);
      pick(ctx, Math.ceil(n / 2)).forEach(o => out.push(P.conjCtxEx(o)));
      if (T) { const vs = Verbs.VERBS.slice(0, 60).map(v => v[0]); for (let i = out.length; i < n; i++) { try { out.push(E.conjEx(vs[Math.floor(Math.random() * vs.length)], T.id)); } catch (e) { } } }
      return out;
    }
    if (tag === 'Indefinido o imperfecto') return pick(P.stories(4), 2).map(P.storyEx);
    const ids = Object.values(C.ITEMS).filter(x => E.tagOf(x.id) === tag).map(x => x.id);
    return P.weakFirst(ids, n).map(id => E.reviewEx(id) || E.pEx(id)).filter(Boolean);
  };
  P.weakItems = (k, n) => {
    const tags = C.weakTags().slice(0, k); if (!tags.length) return [];
    const per = Math.max(3, Math.ceil(n / tags.length));
    return shuffle(tags.flatMap(t => P.tagItems(t.tag, per))).slice(0, n);
  };
  // a few new-type items for a stage's own practice session
  P.forUnit = u => {
    const out = [], li = C.lvIdx(u.level);
    const ctx = P.conjCtx(li).filter(o => item(o.id).src === u); pick(ctx, 2).forEach(o => out.push(P.conjCtxEx(o)));
    const kinds = ['transform', 'errors', 'contrast', 'colloc', 'wordbuild'];
    kinds.forEach(kd => { const ids = C.PRACTICE.filter(b => b.kind === kd && b.level === u.level).flatMap(b => b.ids); pick(ids, 1).forEach(id => out.push(E.pEx(id))); });
    return out.filter(Boolean);
  };
})(window);
