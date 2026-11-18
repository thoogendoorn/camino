/* Camino — exams: placement test, level exams, DELE-style mock papers, section practice, results. */
(function (G) {
  'use strict';
  const { $, $$, esc, shuffle, pick } = C;
  const X = G.EXAMS = {};
  const LV = ['A1', 'A2', 'B1', 'B2', 'C1'];
  const PAPERS = [
    ['reading', 'Reading', 'Comprensión de lectura', 1],
    ['listening', 'Listening', 'Comprensión auditiva', 2],
    ['writing', 'Writing', 'Expresión e interacción escritas', 1],
    ['speaking', 'Speaking', 'Expresión e interacción orales', 2]
  ];
  const fmtDate = t => new Date(t).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  const r1 = x => Math.round(x * 10) / 10;

  // ---------- marking rubrics (DELE criteria; bands 0–3, "for this level") ----------
  const BANDS = ['Not done', 'Weak', 'Adequate', 'Good'];
  X.RUBRIC = {
    writing: [
      ['task', 'Task', 'Covers every point the task asks for, in the right text type and length'],
      ['coherence', 'Coherence', 'Clear order, paragraphs where needed, connectors that link ideas'],
      ['accuracy', 'Accuracy', 'Grammar and spelling, including accents, rarely get in the way'],
      ['range', 'Range', 'Varied words and structures for this level, not the same few repeated']
    ],
    speaking: [
      ['coherence', 'Coherence', 'Covers the points in a logical order, easy to follow'],
      ['fluency', 'Fluency', 'Keeps going with few long pauses or restarts'],
      ['accuracy', 'Accuracy', 'Grammar and pronunciation rarely get in the way'],
      ['range', 'Range', 'Varied words and structures for this level']
    ]
  };

  // ---------- extra exercise types ----------
  const QOPTS = (q, qi, ans) => `<div class="pq" data-q="${qi}"><p><b>${qi + 1}.</b> ${esc(q[0])}</p><div class="opts small">${q[1].map((o, i) => `<button class="opt" data-a="${i}" aria-pressed="${ans === i}">${esc(o)}</button>`).join('')}</div></div>`;
  // A reading text or a listening script with several questions on one screen.
  EX.renderers.passage = (ex, root, done, ctx) => {
    const answers = ex.q.map(() => null); let plays = 0; const maxPlays = ctx.exam ? 2 : 99;
    const listen = !!ex.script;
    root.innerHTML = `<div class="ex wide"><div class="sub">${esc(ex.kicker || '')}</div><h2 class="ptitle">${esc(ex.title || '')}</h2><p class="instr">${esc(ex.instr || '')}</p>
      ${listen ? `<div class="listen-row"><button class="btn primary" id="play">${G.ICON.speaker} <span>Play</span></button>${ctx.exam ? '' : `<button class="btn ghost" id="slow">${G.ICON.turtle} Slowly</button>`}<span class="muted" id="plays">${ctx.exam ? 'You can play it twice.' : ''}</span></div><details class="rtext" id="trans" ${ctx.exam ? 'hidden' : ''}><summary>Show the transcript</summary><div class="reading small" lang="es">${esc(ex.script).replace(/\n/g, '<br>')}</div></details>`
        : `<div class="reading small exam-text" lang="es">${esc(ex.text).split(/\n{2,}/).map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('')}</div>`}
      <div class="pqs">${ex.q.map((q, qi) => QOPTS(q, qi, null)).join('')}</div>
      <div class="fb" aria-live="polite"></div><div class="foot"><span class="muted" id="pcount">0 of ${ex.q.length} answered</span><button class="btn primary" id="psub">${ctx.exam ? 'Next' : 'Check'}</button></div></div>`;
    const upd = () => { $('#pcount', root).textContent = answers.filter(a => a != null).length + ' of ' + ex.q.length + ' answered'; };
    $$('.pq', root).forEach(qd => $$('.opt', qd).forEach(b => b.onclick = () => { if (b.disabled) return; const qi = +qd.dataset.q; answers[qi] = +b.dataset.a; $$('.opt', qd).forEach(x => x.setAttribute('aria-pressed', x === b)); upd(); }));
    if (listen) {
      const play = slow => { if (plays >= maxPlays && !slow) return; plays++; C.speakScript(ex.script, { slow }); if (ctx.exam) { $('#plays', root).textContent = plays >= maxPlays ? 'No plays left.' : 'One play left.'; if (plays >= maxPlays) $('#play', root).disabled = true; } };
      $('#play', root).onclick = () => play(false);
      const sl = $('#slow', root); if (sl) sl.onclick = () => play(true);
    }
    $('#psub', root).onclick = () => {
      const pts = ex.q.reduce((n, q, i) => n + (answers[i] === q[2] ? 1 : 0), 0);
      var res = { ok: pts === ex.q.length, close: pts > 0 && pts < ex.q.length, pts, max: ex.q.length, answers };
      if (ctx.exam) { C.stopSpeak(); done(res); return; }
      $$('.pq', root).forEach(qd => { const qi = +qd.dataset.q; $$('.opt', qd).forEach((x, j) => { x.disabled = true; if (j === ex.q[qi][2]) x.classList.add('right'); else if (j === answers[qi]) x.classList.add('wrong'); }); });
      const fb = $('.fb', root); fb.className = 'fb ' + (res.ok ? 'good' : pts >= ex.q.length / 2 ? 'close' : 'bad'); fb.innerHTML = `<b>${pts} of ${ex.q.length} right</b>${listen ? '<div>Open the transcript to see what you missed.</div>' : ''}`;
      if (listen) $('#trans', root).open = true;
      $('#psub', root).textContent = 'Continue';
      res = Object.assign({}, res);
      $('#psub', root).onclick = () => { C.stopSpeak(); done(res); };
    };
  };

  // shared self-marking screen for writing and speaking
  function rubricScreen(root, ex, skill, produced, done) {
    const crit = X.RUBRIC[skill], bands = {};
    root.innerHTML = `<div class="ex wide"><div class="sub">${esc(ex.kicker || '')} · mark your answer</div><h2 class="ptitle">How did it go?</h2>
      ${produced ? `<div class="yours"><h3>${skill === 'writing' ? 'Your text' : 'What the microphone heard'}</h3><div class="reading small" lang="es">${esc(produced).replace(/\n/g, '<br>')}</div></div>` : ''}
      ${ex.checklist && ex.checklist.length ? `<h3>Did you include…</h3><ul class="checklist">${ex.checklist.map(c => `<li>${esc(c)}</li>`).join('')}</ul>` : ''}
      <details class="model" open><summary>Model answer</summary><div class="reading small" lang="es">${esc(ex.model || '').replace(/\n/g, '<br>')}</div></details>
      <h3>Give yourself a band per criterion, for level ${esc(ex.level || '')}</h3>
      <div class="rubric">${crit.map(([k, n, d]) => `<div class="crit" data-k="${k}"><div><b>${n}</b><small>${esc(d)}</small></div><div class="bands">${BANDS.map((b, i) => `<button class="rband" data-b="${i}" aria-pressed="false">${i}<small>${b}</small></button>`).join('')}</div></div>`).join('')}</div>
      ${C.ai.available() && produced ? `<div class="row"><button class="btn" id="aimark">Optional: ask the AI tutor to mark it</button></div><div class="ai-box" id="aiout"></div>` : ''}
      <div class="foot"><span class="muted" id="rleft">Mark all ${crit.length} criteria</span><button class="btn primary" id="rdone" disabled>Save marks</button></div></div>`;
    $$('.crit', root).forEach(cd => $$('.rband', cd).forEach(b => b.onclick = () => { bands[cd.dataset.k] = +b.dataset.b; $$('.rband', cd).forEach(x => x.setAttribute('aria-pressed', x === b)); const left = crit.length - Object.keys(bands).length; $('#rleft', root).textContent = left ? 'Mark ' + left + ' more' : 'Total ' + Object.values(bands).reduce((a, c) => a + c, 0) + ' of ' + crit.length * 3; $('#rdone', root).disabled = !!left; }));
    $('#rdone', root).onclick = () => { const pts = Object.values(bands).reduce((a, c) => a + c, 0); done({ ok: pts >= crit.length * 2, pts, max: crit.length * 3, bands, text: produced }); };
    const am = $('#aimark', root); if (am) am.onclick = async () => {
      am.disabled = true; const out = $('#aiout', root); out.textContent = 'Marking…';
      try {
        const r = await C.ai.ask(`You are a strict but kind DELE examiner for Castilian Spanish. Level ${ex.level}. ${skill === 'writing' ? 'Written' : 'Spoken (transcribed by speech recognition, so ignore punctuation and minor transcription errors)'} task:\n${ex.instr}\n${ex.checklist ? 'It must include: ' + ex.checklist.join('; ') : ''}\nCandidate's answer:\n"""${produced}"""\n\nIn English: give a band 0–3 for each of ${crit.map(c => c[1]).join(', ')} (3 = good for ${ex.level}), one line each with the reason. Then list up to 6 corrections (wrong → right). Then one sentence on what to do to reach the next band. Be concise.`, { tier: 'default', max: 900 });
        out.innerHTML = C.md(r.text);
      } catch (e) { out.textContent = C.ai.errText(e); }
    };
  }
  EX.renderers.write = (ex, root, done) => {
    const [lo, hi] = ex.words || [0, 0];
    root.innerHTML = `<div class="ex wide"><div class="sub">${esc(ex.kicker || '')}</div><h2 class="ptitle">${esc(ex.title || '')}</h2><div class="instr-box" lang="es">${esc(ex.instr).replace(/\n/g, '<br>')}</div>
      ${lo ? `<p class="muted">Write ${lo}–${hi} words.</p>` : ''}<textarea id="wtx" rows="11" lang="es" spellcheck="false" placeholder="Escribe aquí…"></textarea>
      <div class="foot"><span class="muted" id="wc">0 words</span><button class="btn primary" id="wdone">Finish and mark</button></div></div>`;
    const ta = $('#wtx', root); ta.focus();
    const cnt = () => (ta.value.match(/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+/g) || []).length;
    ta.oninput = () => { const n = cnt(); $('#wc', root).textContent = n + ' words' + (lo && (n < lo || n > hi) ? ` (aim for ${lo}–${hi})` : ''); };
    $('#wdone', root).onclick = () => rubricScreen(root, ex, 'writing', ta.value.trim(), done);
  };
  EX.renderers.speaktask = (ex, root, done) => {
    const dict = C.dict; let heard = '', phase = 'prep', timer = null, left = Math.round((ex.prep || 1) * 60);
    const fmt = s => Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
    root.innerHTML = `<div class="ex wide"><div class="sub">${esc(ex.kicker || '')}</div><h2 class="ptitle">${esc(ex.title || '')}</h2><div class="instr-box" lang="es">${esc(ex.instr).replace(/\n/g, '<br>')}</div>
      ${ex.points && ex.points.length ? `<ul class="checklist" lang="es">${ex.points.map(p => `<li>${esc(p)}</li>`).join('')}</ul>` : ''}
      <div class="speakbox"><div class="big-timer" id="stm">${fmt(left)}</div><div class="muted" id="sph">Preparation time: make notes, then speak.</div><div class="heard" id="sheard" aria-live="polite"></div></div>
      <div class="foot"><button class="btn primary" id="snext">Start speaking now</button></div></div>`;
    const stop = () => { clearInterval(timer); timer = null; if (dict) { try { dict.stop(); } catch (e) { } } };
    const run = () => { clearInterval(timer); timer = setInterval(() => { left--; const el = $('#stm', root); if (!el) { clearInterval(timer); return; } el.textContent = fmt(Math.max(0, left)); if (left <= 0) { if (phase === 'prep') speak(); else finish(); } }, 1000); };
    const speak = () => {
      phase = 'talk'; left = Math.round((ex.talk || 2) * 60); $('#stm', root).textContent = fmt(left);
      $('#sph', root).textContent = dict ? 'Speak now. The microphone writes down what it hears.' : 'Speak now, out loud. (Speech recognition is not available in this browser.)';
      $('#snext', root).textContent = 'I\'ve finished';
      if (dict) {
        C.dictOn({ partial: ({ text }) => { const h = $('#sheard', root); if (h) h.textContent = (heard + ' ' + text).trim(); }, final: ({ text }) => { heard = (heard + ' ' + text).trim(); const h = $('#sheard', root); if (h) h.textContent = heard; }, state: ({ state }) => { if (state !== 'listening' && phase === 'talk' && timer) { try { dict.start().catch(() => { }); } catch (e) { } } } });
        dict.start().catch(() => { $('#sph', root).textContent = 'Microphone not available: speak out loud anyway.'; });
      }
      run();
    };
    const finish = () => { phase = 'done'; stop(); C.dictOn({}); rubricScreen(root, ex, 'speaking', heard, done); };
    $('#snext', root).onclick = () => { if (phase === 'prep') speak(); else finish(); };
    run();
  };

  // ---------- mock exams ----------
  const taskItem = (m, paper, t, i) => {
    const base = { kicker: `${m.title} · ${PAPERS.find(p => p[0] === paper)[2]} · Tarea ${i + 1}`, title: t.title, instr: t.instr, ref: m.id + '/' + paper + '/' + (t.id || i), level: m.level };
    if (paper === 'reading') return Object.assign(base, { type: 'passage', text: t.text, q: CAMINO.parseQ(t.q) });
    if (paper === 'listening') return Object.assign(base, { type: 'passage', script: t.script, q: CAMINO.parseQ(t.q) });
    if (paper === 'writing') return Object.assign(base, { type: 'write', words: t.words, model: t.model, checklist: t.checklist });
    return Object.assign(base, { type: 'speaktask', prep: t.prep, talk: t.talk, points: t.points, model: t.model, checklist: t.checklist });
  };
  const paperMax = (m, p) => p === 'reading' || p === 'listening' ? m.papers[p].tasks.reduce((n, t) => n + CAMINO.parseQ(t.q).length, 0) : m.papers[p].tasks.length * X.RUBRIC[p].length * 3;
  // DELE scoring: each paper → 25 points; group 1 = reading + writing, group 2 = listening + speaking; pass = 30/50 in each group.
  X.score = (papers) => {
    const s = {}; let total = 0;
    PAPERS.forEach(([p]) => { if (papers[p]) { s[p] = 25 * papers[p].pts / papers[p].max; total += s[p]; } });
    const g1 = (s.reading || 0) + (s.writing || 0), g2 = (s.listening || 0) + (s.speaking || 0);
    const full = PAPERS.every(([p]) => papers[p]);
    return { scaled: s, total, g1, g2, full, pass: full && g1 >= 30 && g2 >= 30 };
  };
  X.runMock = (m, only) => {
    const order = PAPERS.map(p => p[0]).filter(p => (!only || only === p) && m.papers[p]);
    const papers = {}; let k = 0;
    const nextPaper = () => {
      if (k >= order.length) return save();
      const p = order[k++], P = PAPERS.find(x => x[0] === p), pd = m.papers[p];
      const items = [{ type: 'note', kicker: m.title, title: `${P[2]} (${P[1].toLowerCase()})`, button: 'Start the timer', html: `<p>${pd.tasks.length} tasks · <b>${pd.minutes} minutes</b>. ${p === 'listening' ? 'Each recording can be played twice. Read the questions before you press Play.' : p === 'reading' ? 'You can change answers within a task until you press Next.' : p === 'writing' ? 'After each text you mark yourself against a checklist, the DELE criteria and a model answer.' : 'Each task has preparation time, then speaking time. If your browser supports it, the microphone writes down what you say.'}</p><p class="muted">Paper ${k} of ${order.length}. When the time runs out, unanswered questions score zero.</p>` }]
        .concat(pd.tasks.map((t, i) => taskItem(m, p, t, i)));
      EX.run({
        title: m.title + ' · ' + P[1], items, exam: true, seconds: pd.minutes * 60, noSummary: true, exitLabel: 'Stop exam', onDone: r => {
          if (r.early) { C.toast('Exam stopped. Nothing was saved.'); A().go('exams'); return; }
          papers[p] = { pts: r.results.reduce((n, x) => n + (x.pts || 0), 0), max: paperMax(m, p), timeUp: r.timeUp, answers: r.results.map(x => ({ ref: x.ex.ref, pts: x.pts, max: x.max, a: x.answers || x.bands || null, text: x.text || undefined })) };
          nextPaper();
        }
      });
    };
    const save = () => {
      const sc = X.score(papers);
      const att = { id: C.uid(), kind: 'mock', ref: m.id, level: m.level, ts: Date.now(), papers, total: r1(sc.total), full: sc.full, pass: sc.pass, only: only || null };
      (C.S.exams = C.S.exams || []).unshift(att); C.save(); C.checkBadges();
      X.showResult = att.id; A().go('exams'); A().render();
    };
    nextPaper();
  };
  X.practiseTask = (m, paper, i) => EX.run({ title: m.title + ' · practice', items: [taskItem(m, paper, m.papers[paper].tasks[i], i)], onDone: () => A().render() });

  // ---------- item pools from the course (placement and level exams) ----------
  const poolCache = {};
  X.pool = lv => {
    if (poolCache[lv]) return poolCache[lv];
    const units = C.UNITS.filter(u => u.level === lv);
    const vocab = Object.values(C.ITEMS).filter(x => x.t === 'v' && x.src.level === lv).map(x => x.id);
    const ctx = vocab.filter(id => (C.exOf(C.ITEMS[id].it) || {}).target);
    return (poolCache[lv] = {
      units, vocab, ctx,
      drills: units.flatMap(u => u.dids), sents: units.flatMap(u => u.sids),
      reads: units.flatMap(u => u.readings.filter(r => r.q && r.q.length).map(r => ({ u, r }))),
      conj: units.filter(u => u.conj)
    });
  };
  const readPassage = ({ u, r }, n, kicker) => ({ type: 'passage', kicker, title: r.t, instr: 'Lee el texto y responde a las preguntas.', text: r.x, q: shuffle(r.q).slice(0, n), ref: u.id + '/read' });
  const plain = (x, kicker) => x && Object.assign(x, { kicker, card: undefined, ref: x.card });

  // ---------- placement test: adaptive blocks of six, A1–C1 ----------
  X.runPlacement = () => {
    let lv = 1, block = 0, blockOk = 0, counted = 0, tries = {}; const passed = {}, failed = {}, used = new Set(); let stopAt = null, borderline = null;
    const nextItem = l => {
      const P = X.pool(LV[l]), k = block % 8, kick = 'Placement test';
      const fresh = arr => { const a = shuffle(arr.filter(x => !used.has(x))); const id = a[0]; if (id) used.add(id); return id; };
      if (k === 0 || k === 7) { const id = fresh(P.vocab); return plain(EX.vocabEx(id, 'mc-es'), kick); }
      if (k === 3) { const id = fresh(P.vocab); return plain(EX.vocabEx(id, 'mc-en'), kick); }
      if ((k === 1 || k === 4 || k === 5) && P.drills.length) { const id = fresh(P.drills); return plain(EX.drillEx(id), kick); }
      if (k === 2 && P.ctx.length) { const id = fresh(P.ctx); return plain(EX.vocabEx(id, 'context'), kick); }
      if (k === 6 && P.reads.length) { const rr = pick(P.reads, 1)[0]; return Object.assign(readPassage(rr, 1, kick), { title: 'Short reading' }); }
      const id = fresh(P.vocab); return plain(EX.vocabEx(id, 'mc-es'), kick);
    };
    const more = results => {
      while (counted < results.length) { const r = results[counted++]; blockOk += r.ok ? 1 : 0; block++; }
      if (results.length >= 64) { stopAt = stopAt || 'cap'; return null; }
      if (block > 0 && block % 8 === 0 && block / 8 > Object.values(tries).reduce((a, b) => a + b, 0)) {
        tries[lv] = (tries[lv] || 0) + 1;
        const acc = blockOk / 8; blockOk = 0;
        if (acc >= 0.875) { passed[lv] = true; if (lv === LV.length - 1 || failed[lv + 1]) { stopAt = 'top'; return null; } lv++; }
        else if (acc < 0.55) { failed[lv] = true; if (lv === 0 || passed[lv - 1]) { stopAt = 'found'; return null; } lv--; }
        else if (tries[lv] >= 2) { borderline = lv; stopAt = 'border'; return null; }
      }
      return nextItem(lv);
    };
    EX.run({
      title: 'Placement test', exam: true, noSummary: true, exitLabel: 'Stop', more,
      items: [{ type: 'note', kicker: 'About 15 minutes', title: 'Placement test', button: 'Begin', html: '<p>Questions get harder when you answer well and easier when you don\'t, from A1 to C1. There\'s no feedback until the end. If you don\'t know an answer, press <b>I don\'t know</b> rather than guessing: it makes the result more accurate.</p>' }],
      onDone: r => {
        if (r.early && r.results.length < 16) { C.toast('Placement stopped.'); A().render(); return; }
        const top = Object.keys(passed).map(Number).reduce((a, b) => Math.max(a, b), -1);
        let level, half = false;
        if (borderline != null) { level = borderline; half = true; }
        else level = Math.min(top + 1, LV.length);
        const lvName = level >= LV.length ? 'C1+' : LV[level];
        const units = level >= LV.length ? C.UNITS.filter(u => u.level === 'C2') : C.UNITS.filter(u => u.level === LV[level]);
        const start = units.length ? units[half ? Math.floor(units.length / 2) : 0] : C.UNITS[0];
        const ok = r.results.filter(x => x.ok).length;
        const att = { id: C.uid(), kind: 'placement', ts: Date.now(), level: lvName, half, start: start.id, total: Math.round(100 * ok / Math.max(1, r.results.length)), n: r.results.length, pass: true };
        (C.S.exams = C.S.exams || []).unshift(att); C.save(); C.checkBadges();
        X.showResult = att.id; A().go('exams'); A().render();
      }
    });
  };
  X.applyPlacement = att => {
    const u = C.UNIT[att.start]; if (!u) return;
    C.UNITS.filter(x => x.n < u.n).forEach(x => { const s = C.uState(x.id); if (!s.done) { s.done = Date.now(); s.placed = true; } });
    C.save(); C.toast('Stages before "' + u.title + '" are marked complete. Their words are still there to learn.');
    A().go('unit-' + u.id);
  };

  // ---------- level exams: 40 questions drawn from the whole level ----------
  X.levelItems = lv => {
    const P = X.pool(lv), kick = 'Level exam ' + lv, items = [];
    pick(P.vocab, 8).forEach((id, k) => items.push(plain(EX.vocabEx(id, ['mc-en', 'type', 'mc-es', 'type'][k % 4]), kick)));
    pick(P.ctx, 4).forEach(id => items.push(plain(EX.vocabEx(id, 'context'), kick)));
    pick(P.drills, 12).forEach(id => items.push(plain(EX.drillEx(id), kick)));
    pick(P.conj, 4).forEach(u => { try { const v = pick(u.conj.v, 1)[0]; items.push(Object.assign(EX.conjEx(v, u.conj.t), { kicker: kick })); } catch (e) { } });
    const ss = shuffle(P.sents);
    ss.slice(0, 2).forEach(id => items.push(plain(EX.sentEx(id, 'translate'), kick)));
    ss.slice(2, 5).forEach(id => items.push(plain(EX.sentEx(id, 'listen'), kick)));
    pick(P.vocab, 3).forEach(id => items.push(plain(EX.vocabEx(id, 'mc-listen'), kick)));
    const body = shuffle(items.filter(Boolean));
    pick(P.reads, 2).forEach(rr => body.push(readPassage(rr, 3, kick)));
    return body;
  };
  X.runLevel = lv => {
    const items = X.levelItems(lv);
    const max = items.reduce((n, x) => n + (x.type === 'passage' ? x.q.length : 1), 0);
    EX.run({
      title: 'Level exam ' + lv, exam: true, noSummary: true, seconds: 45 * 60, exitLabel: 'Stop exam',
      items: [{ type: 'note', kicker: '45 minutes · ' + max + ' points', title: 'Level exam ' + lv, button: 'Start the timer', html: `<p>Words, grammar, conjugation, listening and reading from every ${lv} stage. Score <b>75% or more</b> to pass: passing marks every ${lv} stage as complete and earns a stamp.</p><p class="muted">No feedback until the end. Each attempt draws new questions.</p>` }].concat(items),
      onDone: r => {
        if (r.early) { C.toast('Exam stopped. Nothing was saved.'); A().render(); return; }
        const pts = r.results.reduce((n, x) => n + (x.pts || 0), 0), pct = pts / max;
        const att = { id: C.uid(), kind: 'level', level: lv, ts: Date.now(), pts, max, total: Math.round(100 * pct), pass: pct >= 0.75, timeUp: r.timeUp, wrong: r.results.filter(x => !x.ok).slice(0, 40).map(x => ({ q: x.ex.prompt || (typeof x.ex.q === 'string' ? x.ex.q : '') || x.ex.listen || x.ex.title || '', a: x.ex.show || x.ex.answer || '', en: x.ex.en || '' })) };
        if (att.pass) C.UNITS.filter(u => u.level === lv).forEach(u => { const s = C.uState(u.id); if (!s.done) { s.done = Date.now(); s.placed = true; } });
        (C.S.exams = C.S.exams || []).unshift(att); C.save(); C.checkBadges();
        X.showResult = att.id; A().go('exams'); A().render();
      }
    });
  };

  // ---------- view ----------
  const A = () => G.App;
  const bandTxt = (v, max) => `${r1(v)}<small>/${max}</small>`;
  function resultCard(a) {
    if (a.kind === 'placement') {
      const u = C.UNIT[a.start];
      return `<div class="panel result"><p class="kicker">Placement test · ${fmtDate(a.ts)} · ${a.n} questions</p><h2>Your level: ${esc(a.level)}${a.half ? ' (partly)' : ''}</h2>
        <p>${a.half ? `You handle part of ${esc(a.level)} well. Start in the middle of it` : `Start at the beginning of ${esc(a.level)}`}: <b>stage ${u ? u.n + 1 : '?'}, ${esc(u ? u.title : '')}</b>.</p>
        <div class="row wrap">${u && u.n > 0 ? `<button class="btn primary" data-apply="${a.id}">Mark earlier stages complete and go there</button>` : ''}<a class="btn" href="#unit-${u ? u.id : ''}">Just open that stage</a></div>
        <p class="muted">Marking stages complete only opens the path; their words stay available to learn in each stage and in Decks.</p></div>`;
    }
    if (a.kind === 'level') return `<div class="panel result"><p class="kicker">Level exam ${a.level} · ${fmtDate(a.ts)}${a.timeUp ? ' · time ran out' : ''}</p><h2>${a.total}% · ${a.pass ? 'Passed' : 'Not yet'}</h2><p>${a.pts} of ${a.max} points. ${a.pass ? `Every ${a.level} stage is now complete.` : 'You need 75%. The questions below are a good place to start.'}</p>
      ${(a.wrong || []).length ? `<details><summary>Questions you missed (${a.wrong.length})</summary><div class="mistakes">${a.wrong.map(w => `<div class="mis"><span>${esc(w.q)}</span><span class="es">${esc(w.a)}</span></div>`).join('')}</div></details>` : ''}</div>`;
    const m = C.MOCK[a.ref]; const sc = X.score(a.papers);
    return `<div class="panel result"><p class="kicker">${esc(m ? m.title : a.ref)} · ${fmtDate(a.ts)}${a.only ? ' · single paper' : ''}</p><h2>${a.full ? r1(sc.total) + ' / 100 · ' + (sc.pass ? 'Apto (pass)' : 'No apto yet') : 'Paper score'}</h2>
      <div class="kpis">${PAPERS.filter(([p]) => a.papers[p]).map(([p, n]) => `<div><b>${bandTxt(sc.scaled[p], 25)}</b><span>${n}${a.papers[p].timeUp ? ' · time ran out' : ''}</span></div>`).join('')}</div>
      ${a.full ? `<p>Group 1 (reading + writing): <b>${r1(sc.g1)}</b>/50 · Group 2 (listening + speaking): <b>${r1(sc.g2)}</b>/50. The DELE pass mark is 30 in each group.</p>` : ''}
      ${m ? `<details><summary>Score per task</summary><table class="log"><tbody>${PAPERS.filter(([p]) => a.papers[p]).flatMap(([p, n]) => (a.papers[p].answers || []).map((x, i) => `<tr><td>${n}, task ${i + 1}</td><td class="num">${x.pts} / ${x.max}</td><td><button class="btn small ghost" data-pt="${m.id}|${p}|${i}">Practise</button></td></tr>`)).join('')}</tbody></table></details>` : ''}</div>`;
  }
  function chart(atts) {
    const pts = atts.filter(a => a.kind === 'mock' && a.full).slice(0, 12).reverse(); if (pts.length < 2) return '';
    const W = 640, H = 160, x = i => 40 + i * (W - 60) / Math.max(1, pts.length - 1), y = v => 20 + (100 - v) / 100 * (H - 40);
    return `<svg class="mchart" viewBox="0 0 ${W} ${H}" role="img" aria-label="Mock exam totals over time"><line x1="40" x2="${W - 20}" y1="${y(60)}" y2="${y(60)}" class="passline"/><text x="${W - 20}" y="${y(60) - 6}" text-anchor="end" class="cl">pass 60</text>${[0, 50, 100].map(v => `<text x="32" y="${y(v) + 4}" text-anchor="end" class="cl">${v}</text>`).join('')}<polyline points="${pts.map((a, i) => x(i) + ',' + y(a.total)).join(' ')}" class="mline"/>${pts.map((a, i) => `<circle cx="${x(i)}" cy="${y(a.total)}" r="4" class="${a.pass ? 'mp' : 'mf'}"><title>${esc((C.MOCK[a.ref] || {}).title || a.ref)}: ${a.total}</title></circle>`).join('')}</svg>`;
  }
  X.view = () => {
    const atts = C.S.exams || [], show = X.showResult && atts.find(a => a.id === X.showResult);
    const lastPl = atts.find(a => a.kind === 'placement');
    const best = (kind, key, val) => atts.filter(a => a.kind === kind && a[key] === val).reduce((b, a) => (!b || a.total > b.total) ? a : b, null);
    return `<section class="band"><h1>Exámenes</h1><p class="lead">Find your level, prove a level, and practise the four DELE papers: reading, listening, writing and speaking. Everything works without AI; writing and speaking are marked by you against a rubric and a model answer.</p>
      ${show ? resultCard(show) : ''}</section>
      <section class="band"><h2>Placement test</h2><p>About 15 minutes, adaptive from A1 to C1. ${lastPl ? `Last result: <b>${esc(lastPl.level)}</b> (${fmtDate(lastPl.ts)}).` : 'Take it first if you already know some Spanish.'}</p><div class="row"><button class="btn primary" id="xplace">${lastPl ? 'Take it again' : 'Start the placement test'}</button></div></section>
      <section class="band"><h2>Level exams</h2><p>40-odd questions from every stage of a level in 45 minutes. 75% passes the level and marks its stages complete. New questions each attempt.</p>
      <div class="xgrid">${LV.map(l => { const b = best('level', 'level', l); return `<div class="xcard ${b && b.pass ? 'done' : ''}"><b>${l}</b><span>${b ? 'Best ' + b.total + '%' + (b.pass ? ' · passed' : '') : 'Not taken'}</span><button class="btn small ${b && b.pass ? '' : 'primary'}" data-lx="${l}">${b ? 'Retake' : 'Take exam'}</button></div>`; }).join('')}</div></section>
      <section class="band"><h2>Mock exams (DELE-style)</h2><p>Full papers in the DELE task formats and timings, scored like the real exam: 25 points per paper, and a pass needs 30 of 50 in each group. Take the whole exam, one paper, or practise single tasks with feedback.</p>
      ${C.MOCKS.length ? `<div class="mocks">${C.MOCKS.map(m => { const b = best('mock', 'ref', m.id), mins = PAPERS.reduce((n, [p]) => n + (m.papers[p] ? m.papers[p].minutes : 0), 0); return `<div class="mock"><div class="deck-h"><div><b>${esc(m.title)}</b><small>${esc(m.blurb || '')} · about ${Math.round(mins / 5) * 5} min in total</small></div><span class="deck-n">${b && b.full ? r1(b.total) + '/100' : ''}</span></div>
        <div class="row wrap"><button class="btn small primary" data-mx="${m.id}">Full exam</button>${PAPERS.filter(([p]) => m.papers[p]).map(([p, n]) => `<button class="btn small" data-mx="${m.id}" data-only="${p}">${n}</button>`).join('')}</div>
        <details><summary>Practise single tasks</summary><ul class="tasks">${PAPERS.filter(([p]) => m.papers[p]).flatMap(([p, n]) => m.papers[p].tasks.map((t, i) => `<li><span>${n} ${i + 1}: ${esc(t.title)}</span><button class="btn small ghost" data-pt="${m.id}|${p}|${i}">Practise</button></li>`)).join('')}</ul></details></div>`; }).join('')}</div>` : '<p class="note">The mock exam files did not load.</p>'}</section>
      <section class="band"><h2>Your results</h2>${chart(atts)}${atts.length ? `<table class="log"><tbody>${atts.slice(0, 30).map(a => `<tr><td>${fmtDate(a.ts)}</td><td>${a.kind === 'placement' ? 'Placement test' : a.kind === 'level' ? 'Level exam ' + a.level : esc((C.MOCK[a.ref] || {}).title || a.ref) + (a.only ? ' · ' + a.only : '')}</td><td class="num">${a.kind === 'placement' ? esc(a.level) : a.kind === 'level' ? a.total + '%' : a.full ? r1(a.total) + '/100' : r1(X.score(a.papers).total) + '/' + 25 * Object.keys(a.papers).length}</td><td>${a.kind === 'placement' ? '' : a.pass ? '✓' : ''}</td><td><button class="btn small ghost" data-see="${a.id}">View</button></td></tr>`).join('')}</tbody></table>` : '<p class="muted">No exams taken yet.</p>'}</section>`;
  };
  X.bind = () => {
    $('#xplace').onclick = () => X.runPlacement();
    $$('[data-lx]').forEach(b => b.onclick = () => X.runLevel(b.dataset.lx));
    $$('[data-mx]').forEach(b => b.onclick = () => X.runMock(C.MOCK[b.dataset.mx], b.dataset.only || null));
    $$('[data-pt]').forEach(b => b.onclick = () => { const [m, p, i] = b.dataset.pt.split('|'); X.practiseTask(C.MOCK[m], p, +i); });
    $$('[data-see]').forEach(b => b.onclick = () => { X.showResult = b.dataset.see; A().render(); scrollTo(0, 0); });
    $$('[data-apply]').forEach(b => b.onclick = () => { const a = (C.S.exams || []).find(x => x.id === b.dataset.apply); if (a) X.applyPlacement(a); });
  };
})(window);
