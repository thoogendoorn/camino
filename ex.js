/* Camino — exercises and sessions. */
(function (G) {
  'use strict';
  const { $, $$, esc, shuffle, pick } = C;
  const E = G.EX = {};
  const PERS = Verbs.PERS;
  const ACCENTS = ['á', 'é', 'í', 'ó', 'ú', 'ü', 'ñ', '¿', '¡'];
  const item = id => C.ITEMS[id];
  let EXAM = false;           // exam mode: no feedback, no colouring, straight to the next item
  E.renderers = {};          // extra exercise types (exams.js, practice.js)
  // grammar point / topic of a card, for the mistake notebook
  E.tagOf = id => { const x = id && C.ITEMS[id]; if (!x) return null; const s = x.src;
    if (x.t === 'p') return s.tag;
    if (x.t === 'v') return 'Vocabulario · ' + s.title;
    return s.grammar ? s.grammar.t : s.title; };
  E.isExam = () => EXAM;

  // ---------- builders (all take card ids) ----------
  const levelVocab = lvl => Object.values(C.ITEMS).filter(x => x.t === 'v' && (!lvl || x.src.level === lvl)).map(x => x.it);
  function distractors(correct, pool, n, key) {
    const seen = new Set([C.norm(correct)]); const out = [];
    for (const v of shuffle(pool)) { const val = v[key]; const k = C.norm(val); if (!seen.has(k)) { seen.add(k); out.push(val); } if (out.length >= n) break; }
    return out;
  }
  const poolFor = src => src.vocab.length >= 8 ? src.vocab : src.vocab.concat(levelVocab(src.level));
  E.vocabEx = (id, kind) => {
    const x = item(id); if (!x) return null; const v = x.it, [es, en] = v, src = x.src;
    const ex = C.exOf(v) || fallbackExample(src, es);
    const pool = poolFor(src);
    if (kind === 'intro') return { type: 'intro', es, en, ex };
    if (kind === 'mc-es') return { type: 'mc', card: id, prompt: es, say: es, sub: 'What does it mean?', options: shuffle([en].concat(distractors(en, pool, 3, 1))), answer: en, en };
    if (kind === 'mc-en') return { type: 'mc', card: id, prompt: en, sub: 'Choose the Spanish', options: shuffle([es].concat(distractors(es, pool, 3, 0))), answer: es, sayAnswer: true, en };
    if (kind === 'mc-listen') return C.canSpeak() ? { type: 'mc', card: id, listen: es, sub: 'Listen: what does it mean?', options: shuffle([en].concat(distractors(en, pool, 3, 1))), answer: en, reveal: es, en } : E.vocabEx(id, 'mc-es');
    if (kind === 'listen') return C.canSpeak() ? { type: 'type', card: id, listen: es, sub: 'Type the word you hear', answers: C.expand(es), show: es, en } : E.vocabEx(id, 'type');
    if (kind === 'context') {
      if (!ex || !ex.target) return E.vocabEx(id, 'type');
      const q = ex.pre + '___' + ex.post;
      return { type: 'cloze', card: id, q, answers: [ex.target], show: ex.target, en: ex.en, hint2: en, say: ex.es, sub: 'Complete the sentence' };
    }
    if (kind === 'gender') {
      const g = C.genderOf(es); if (!g) return E.vocabEx(id, 'type');
      const noun = es.replace(/^(el|la)\s+/, '');
      return { type: 'mc', prompt: noun, say: es, sub: 'El or la? · ' + en, options: ['el', 'la'], answer: g, sayAnswer: false, gender: true, show: es, en };
    }
    return { type: 'type', card: id, prompt: en, sub: 'Write it in Spanish', answers: C.expand(es), show: es, en };
  };
  function fallbackExample(src, es) {
    if (!src.sentences) return null;
    const w = (C.expand(es)[0] || '').replace(C.ART, '').split(' ')[0];
    if (!w || w.length < 3) return null;
    const re = new RegExp('(^|[^a-záéíóúñ])' + w.slice(0, Math.max(3, w.length - 1)), 'i');
    const s = src.sentences.find(s => re.test(s[0])); return s ? { es: s[0], en: s[1], target: null } : null;
  }
  E.drillEx = id => {
    const x = item(id); if (!x) return null; const [q, a, en] = x.it; const alts = a.split('|');
    return { type: 'cloze', card: id, q, answers: alts, show: alts[0], en, say: q.replace(/_{3}(\s*_{3})*/, alts[0]).replace(/\s*\([^)]*\)/g, '') };
  };
  E.sentEx = (id, kind) => {
    const x = item(id); if (!x) return null; const [es, en] = x.it;
    if (kind === 'scramble') return { type: 'scramble', card: id, es, en };
    if (kind === 'listen') return C.canSpeak() ? { type: 'type', card: id, listen: es, sub: 'Dictation: write what you hear', answers: [es], show: es, en, sentence: true } : E.sentEx(id, 'scramble');
    if (kind === 'speak') return { type: 'speak', es, en };
    return { type: 'type', card: id, prompt: en, sub: 'Translate into Spanish', answers: [es], show: es, en, sentence: true, long: true };
  };
  E.matchEx = ids => {
    ids = ids.filter(id => item(id) && item(id).t === 'v').slice(0, 5);
    const seenEn = new Set(); ids = ids.filter(id => { const k = C.norm(item(id).it[1]); if (seenEn.has(k)) return false; seenEn.add(k); return true; });
    if (ids.length < 3) return null;
    return { type: 'match', pairs: ids.map(id => ({ id, es: item(id).it[0], en: item(id).it[1] })) };
  };
  E.conjEx = (verb, tense, p) => {
    const forms = Verbs.conj(verb, tense);
    if (p == null) { const idx = forms.map((f, i) => f ? i : -1).filter(i => i >= 0); p = idx[Math.floor(Math.random() * idx.length)]; }
    const t = Verbs.TENSES.find(t => t.id === tense);
    const meaning = (Verbs.VERBS.find(v => v[0] === verb) || [])[1];
    const pl = tense === 'imp' || tense === 'impneg' ? ['—', 'tú', 'usted', 'nosotros', 'vosotros', 'ustedes'][p] : PERS[p];
    return { type: 'type', prompt: verb + (meaning ? ' · ' + meaning : ''), sub: t.es + ' · ' + pl, answers: [forms[p]], show: forms[p], conj: true, tag: 'Conjugación · ' + t.es };
  };
  const conjItems = (u, n) => u.conj ? pick(u.conj.v.flatMap(v => [0, 1, 2, 3, 4, 5].map(p => [v, p])).filter(([v, p]) => { try { return Verbs.conj(v, u.conj.t)[p]; } catch (e) { return false; } }), n).map(([v, p]) => E.conjEx(v, u.conj.t, p)) : [];
  // pick the right exercise for a card by memory strength (desirable difficulty)
  E.reviewEx = id => {
    const x = item(id); if (!x) return null;
    const c = C.S.cards[id]; const s = c ? c.s : 0; const r = Math.random();
    if (x.t === 'v') {
      const hasCtx = !!(C.exOf(x.it) || {}).target;
      const kind = s < 2 ? (r < 0.4 ? 'mc-es' : r < 0.7 ? 'mc-en' : 'mc-listen') : s < 8 ? (r < 0.4 ? 'type' : r < 0.75 && hasCtx ? 'context' : 'listen') : (r < 0.45 ? 'type' : r < 0.8 && hasCtx ? 'context' : 'listen');
      return E.vocabEx(id, kind);
    }
    if (x.t === 'd') return E.drillEx(id);
    if (x.t === 'p') return E.pEx ? E.pEx(id) : null;
    return E.sentEx(id, s < 3 ? (r < 0.6 ? 'scramble' : 'listen') : (r < 0.5 ? 'translate' : 'listen'));
  };

  // ---------- session runner ----------
  let active = null;
  E.run = ({ title, items, requeue = true, onDone, graded = true, exitLabel = 'Exit', exam = false, seconds = 0, more = null, noSummary = false }) => {
    items = items.filter(Boolean);
    if (more && !items.length) { const x = more([]); if (x) items.push(x); }
    if (!items.length) { C.toast('Nothing to practise here right now.'); return; }
    if (exam) { graded = false; requeue = false; }
    const root = $('#session'); root.hidden = false; document.body.classList.add('in-session');
    const st = { items, i: 0, results: [], total: items.length, exam };
    active = st; EXAM = exam;
    let timer = null, left = seconds, timeUp = false;
    root.innerHTML = `<div class="sess-top"><button class="btn ghost" id="sx">${esc(exitLabel)}</button><div class="sess-title">${esc(title)}</div><div class="sess-count"><span id="stimer" class="stimer" ${seconds ? '' : 'hidden'}></span> <span id="scount"></span> <button class="btn small ghost" id="srep" title="Report a problem with this question">⚑</button></div><div class="bar"><i id="sbar"></i></div><div id="repbox" hidden></div></div><div class="sess-body" id="sbody"></div>`;
    $('#sx').onclick = () => finish(true);
    $('#srep').onclick = () => reportBox(title);
    const tick = () => { const el = $('#stimer'); if (!el) return; el.textContent = Math.floor(left / 60) + ':' + String(left % 60).padStart(2, '0'); el.classList.toggle('warn', left <= 60); if (left <= 0) { timeUp = true; finish(false); } left--; };
    const startTimer = () => { if (seconds && !timer) { tick(); timer = setInterval(tick, 1000); } };
    const next = () => {
      if (st.i >= st.items.length && more) { const x = more(st.results); if (x) st.items.push(x); }
      if (st.i >= st.items.length) return finish(false);
      $('#sbar').style.width = (100 * st.i / Math.max(st.items.length, more ? st.i + 1 : 1)) + '%';
      $('#scount').textContent = more ? 'Question ' + (st.results.length + 1) : (st.i + 1) + ' / ' + st.items.length;
      const ex = st.items[st.i]; E._cur = ex;
      if (ex.type !== 'note') startTimer();
      $('#sbody').scrollTop = 0; root.scrollTop = 0;
      renderEx(ex, $('#sbody'), res => {
        if (ex.type !== 'intro' && ex.type !== 'speak' && ex.type !== 'note') {
          const pts = res.pts != null ? res.pts : (res.ok ? 1 : 0), max = res.max != null ? res.max : 1;
          st.results.push({ ex, ...res, pts, max });
          if (graded && ex.card) C.grade(ex.card, res.ok ? (res.close ? 2 : (res.easy ? 4 : 3)) : 1);
          if (!exam && !ex.retry) C.noteTag(ex.tag || E.tagOf(ex.card), !!res.ok);
          if (!res.ok && requeue && !ex.retry && ex.type !== 'match' && !E.renderers[ex.type]) { const copy = Object.assign({}, ex, { retry: true }); st.items.splice(Math.min(st.items.length, st.i + 4), 0, copy); }
        }
        st.i++; next();
      });
    };
    function finish(early) {
      if (active !== st) return;
      clearInterval(timer); C.stopSpeak(); active = null; EXAM = false; C.dictOn({});
      const scored = st.results.filter(r => !r.ex.retry);
      const ok = scored.filter(r => r.ok).length, n = scored.length;
      const pct = n ? ok / n : 1;
      const out = { pct, ok, n, early: early && !timeUp, timeUp, results: st.results, items: st.items };
      if (noSummary || (early && !st.results.length)) { close(); onDone && onDone(out); return; }
      $('#sbar').style.width = '100%';
      const wrong = st.results.filter(r => !r.ok && !r.ex.retry && r.ex.type !== 'match' && !E.renderers[r.ex.type]);
      $('#sbody').innerHTML = `<div class="ex done-card"><div class="big-num">${Math.round(pct * 100)}%</div><p class="lead">${ok} of ${n} correct${early ? ' (stopped early)' : ''}</p>
        ${wrong.length ? `<div class="mistakes"><h3>Worth another look</h3>${wrong.slice(0, 15).map(r => `<div class="mis"><span class="es">${esc(r.ex.show || r.ex.answer || r.ex.es || '')}</span><span class="en">${esc(r.ex.en || r.ex.prompt || '')}</span></div>`).join('')}</div>` : '<p>Clean run. ¡Muy bien!</p>'}
        <div class="row"><button class="btn primary" id="sdone">Continue</button></div></div>`;
      $('#sdone').onclick = () => { close(); onDone && onDone(out); };
      $('#sdone').focus();
      C.checkBadges();
    }
    function close() { root.hidden = true; root.innerHTML = ''; document.body.classList.remove('in-session'); G.App && G.App.render(); }
    next();
  };
  function reportBox(title) {
    const box = $('#repbox'); if (!box) return;
    if (!box.hidden) { box.hidden = true; return; }
    const ex = E._cur || {};
    box.hidden = false;
    box.innerHTML = `<div class="repbox"><label for="reptxt">What's wrong with this question?</label><textarea id="reptxt" rows="2" placeholder="e.g. the answer should also accept…"></textarea><div class="row"><button class="btn small primary" id="repsave">Save report</button><button class="btn small ghost" id="repno">Cancel</button></div></div>`;
    $('#repno').onclick = () => { box.hidden = true; };
    $('#repsave').onclick = () => {
      const what = { type: ex.type, prompt: ex.prompt || ex.q || ex.es || ex.listen || ex.title || '', answer: ex.show || ex.answer || (ex.answers || [])[0] || '', card: ex.card || ex.ref || '' };
      (C.S.reports = C.S.reports || []).unshift({ ts: Date.now(), where: title, note: $('#reptxt').value.trim(), item: what });
      C.save(); box.hidden = true; C.toast('Saved. Find your reports under Settings.');
    };
  }
  E.isActive = () => !!active;

  // ---------- exercise renderers ----------
  const speakBtn = (text, label = 'Listen') => C.canSpeak() ? `<button class="btn icon say" data-say="${esc(text)}" aria-label="${label}">${G.ICON.speaker}</button><button class="btn icon say slow" data-say="${esc(text)}" data-slow="1" aria-label="Listen slowly">${G.ICON.turtle}</button>` : '';
  E.speakBtn = speakBtn;
  function bindSay(root) { $$('[data-say]', root).forEach(b => b.onclick = () => C.speak(b.dataset.say, { slow: !!b.dataset.slow })); }
  const accentBar = () => `<div class="accents">${ACCENTS.map(a => `<button type="button" class="key" data-acc="${a}">${a}</button>`).join('')}</div>`;
  function bindAccents(root, input) { $$('[data-acc]', root).forEach(b => b.onclick = () => { const s = input.selectionStart ?? input.value.length, e = input.selectionEnd ?? s; input.value = input.value.slice(0, s) + b.dataset.acc + input.value.slice(e); input.focus(); input.setSelectionRange(s + 1, s + 1); }); }

  function feedback(root, ex, res, input, done) {
    if (EXAM) { done(res); return; }
    const fb = $('.fb', root);
    const correct = ex.show || ex.answer || ex.es || '';
    fb.className = 'fb ' + (res.ok ? (res.close ? 'close' : 'good') : 'bad');
    const whyTxt = ex.explain ? `<div class="why">${esc(ex.explain)}</div>` : '';
    const extra = whyTxt + (ex.reveal ? `<div><span class="es">${esc(ex.reveal)}</span> · ${esc(ex.en || '')}</div>` : ex.hint2 ? `<div class="en">${esc(ex.say || '')} · <i>${esc(ex.hint2)}</i></div>` : '');
    fb.innerHTML = res.ok
      ? `<b>${res.close ? 'Almost right' : 'Correct'}</b>${res.note ? `<div>${esc(res.note)}</div>` : ''}${ex.en && ex.listen && !ex.reveal ? `<div class="en">${esc(ex.en)}</div>` : ''}${extra}`
      : `<b>Not quite</b><div>Answer: <span class="es">${esc(correct)}</span></div>${input ? `<div class="you">You wrote: ${esc(input)}</div>` : ''}${ex.en && !ex.prompt && !ex.reveal && !ex.hint2 ? `<div class="en">${esc(ex.en)}</div>` : ''}${extra}`;
    const foot = $('.foot', root);
    foot.innerHTML = (res.ok && !res.close && ex.card ? `<button class="btn ghost" id="easy">Too easy</button>` : '') +
      (!res.ok && input ? `<button class="btn ghost" id="override">I was right</button>` : '') +
      (!res.ok && C.ai.available() && input ? `<button class="btn ghost" id="why">Why?</button>` : '') +
      `<button class="btn primary" id="cont">Continue</button>`;
    const sayText = ex.gender ? ex.show : (ex.say || correct);
    if (C.S.settings.autoplay && sayText && /[a-záéíóúñ]/i.test(sayText) && !ex.conj && !(ex.type === 'mc' && !ex.sayAnswer && !ex.say && !ex.listen && !ex.gender)) C.speak(ex.reveal || sayText);
    const go = r => { document.removeEventListener('keydown', key); done(r); };
    const key = e => { if (e.key === 'Enter' && !e.isComposing) { e.preventDefault(); go(res); } };
    setTimeout(() => document.addEventListener('keydown', key), 50);
    $('#cont', root).onclick = () => go(res);
    $('#cont', root).focus();
    const ez = $('#easy', root); if (ez) ez.onclick = () => go({ ...res, easy: true });
    const ov = $('#override', root); if (ov) ov.onclick = () => go({ ok: true, close: true, note: 'override' });
    const why = $('#why', root); if (why) why.onclick = async () => {
      why.disabled = true; const box = document.createElement('div'); box.className = 'ai-note'; box.textContent = 'Asking the tutor…'; fb.appendChild(box);
      try {
        const r = await C.ai.ask(`You are a concise Spanish (Spain) teacher. A learner at level ${C.currentLevel()} answered an exercise.\nTask: ${ex.sub || ''} ${ex.prompt || ex.q || ex.listen || ''}\nExpected: ${correct}\nLearner wrote: ${input}\nIn at most 3 short sentences in English, explain the mistake (or say if the learner's answer is also acceptable). No preamble.`, { tier: 'quick', max: 300 });
        box.innerHTML = C.md(r.text || '');
      } catch (e) { box.textContent = C.ai.errText(e); }
    };
  }

  function renderEx(ex, root, done) {
    C.stopSpeak();
    const t = ex.type;
    if (E.renderers[t]) return E.renderers[t](ex, root, done, { exam: EXAM, feedback });
    if (t === 'note') {
      root.innerHTML = `<div class="ex note-ex"><div class="sub">${esc(ex.kicker || '')}</div><h2>${esc(ex.title || '')}</h2><div class="note-body">${ex.html || ''}</div><div class="foot"><button class="btn primary" id="cont">${esc(ex.button || 'Start')}</button></div></div>`;
      $('#cont', root).onclick = () => done({}); $('#cont', root).focus();
      return;
    }
    if (t === 'intro') {
      root.innerHTML = `<div class="ex intro"><div class="sub">New word</div><div class="prompt es">${esc(ex.es)}</div><div class="say-row">${speakBtn(ex.es)}</div><div class="meaning">${esc(ex.en)}</div>
        ${ex.ex ? `<div class="example"><span class="es">${ex.ex.target ? esc(ex.ex.pre) + '<u>' + esc(ex.ex.target) + '</u>' + esc(ex.ex.post) : esc(ex.ex.es)}</span> ${speakBtn(ex.ex.es, 'Listen to example')}<span class="en">${esc(ex.ex.en)}</span></div>` : ''}
        <div class="foot"><button class="btn primary" id="cont">Got it</button></div></div>`;
      bindSay(root); if (C.S.settings.autoplay) C.speak(ex.es);
      const key = e => { if (e.key === 'Enter') { document.removeEventListener('keydown', key); done({}); } };
      setTimeout(() => document.addEventListener('keydown', key), 50);
      $('#cont', root).onclick = () => { document.removeEventListener('keydown', key); done({}); }; $('#cont', root).focus();
      return;
    }
    if (t === 'mc') {
      root.innerHTML = `<div class="ex"><div class="sub">${esc(ex.sub)}</div>${ex.listen ? `<div class="listen-big">${speakBtn(ex.listen)}</div>` : `<div class="prompt ${ex.say || ex.promptEs ? 'es' : ''} ${ex.promptEs && ex.prompt.length > 28 ? 'cloze' : ''}">${esc(ex.prompt)}</div>${ex.say && !ex.gender && !ex.hideSay ? `<div class="say-row">${speakBtn(ex.say)}</div>` : ''}`}
        <div class="opts ${ex.gender ? 'two' : ''}">${ex.options.map((o, i) => `<button class="opt" data-i="${i}"><span class="k">${i + 1}</span>${esc(o)}</button>`).join('')}</div><div class="fb" aria-live="polite"></div><div class="foot"></div></div>`;
      bindSay(root);
      if (ex.listen && C.S.settings.autoplay !== false) setTimeout(() => C.speak(ex.listen), 200);
      else if (ex.say && !ex.gender && !ex.hideSay && C.S.settings.autoplay) C.speak(ex.say);
      let answered = false;
      const choose = i => {
        if (answered) return; answered = true; document.removeEventListener('keydown', key);
        const val = ex.options[i], ok = val === ex.answer;
        $$('.opt', root).forEach((b, j) => { b.disabled = true; if (EXAM) return; if (ex.options[j] === ex.answer) b.classList.add('right'); else if (j === i) b.classList.add('wrong'); });
        feedback(root, Object.assign({}, ex, { show: ex.gender ? ex.show : ex.answer, say: ex.sayAnswer ? ex.answer : ex.say }), { ok }, null, done);
      };
      const key = e => { const n = +e.key; if (n >= 1 && n <= ex.options.length) choose(n - 1); };
      document.addEventListener('keydown', key);
      $$('.opt', root).forEach(b => b.onclick = () => choose(+b.dataset.i));
      return;
    }
    if (t === 'type' || t === 'cloze') {
      const clozeHtml = t === 'cloze' ? esc(ex.q).replace(/_{3}(\s*_{3})*/, '<span class="gap">…</span>') : '';
      const hint = t === 'cloze' ? [ex.en, ex.hint2 ? 'word: ' + ex.hint2 : ''].filter(Boolean).join(' · ') : '';
      root.innerHTML = `<div class="ex"><div class="sub">${esc(t === 'cloze' ? (ex.sub || 'Fill the gap') : ex.sub)}</div>
        ${ex.listen ? `<div class="listen-big">${speakBtn(ex.listen)}</div>` : t === 'cloze' ? `<div class="prompt es cloze">${clozeHtml}</div>${hint ? `<div class="hint">${esc(hint)}</div>` : ''}` : `<div class="prompt ${ex.promptEs ? 'es' : ''} ${ex.promptEs && ex.prompt.length > 28 ? 'cloze' : ''}" ${ex.promptEs ? 'lang="es"' : ''}>${esc(ex.prompt)}</div>`}
        <form class="answer" autocomplete="off">${ex.long ? `<textarea id="ans" rows="2" lang="es" spellcheck="false" autocapitalize="off" placeholder="Escribe aquí…"></textarea>` : `<input id="ans" lang="es" spellcheck="false" autocapitalize="off" autocomplete="off" placeholder="Escribe aquí…">`}${accentBar()}</form>
        <div class="fb" aria-live="polite"></div><div class="foot"><button class="btn ghost" id="skip">I don't know</button><button class="btn primary" id="chk">Check</button></div></div>`;
      bindSay(root);
      const inp = $('#ans', root); bindAccents(root, inp); inp.focus();
      if (ex.listen && C.S.settings.autoplay !== false) setTimeout(() => C.speak(ex.listen), 250);
      let answered = false;
      const check = (give) => {
        if (answered) return; answered = true;
        const v = give ? '' : inp.value; inp.disabled = true;
        const res = give ? { ok: false } : C.check(v, ex.answers, { sentence: !!ex.sentence });
        if (t === 'cloze' && !EXAM) { const g = $('.gap', root); if (g) { g.textContent = res.ok ? (v || ex.show) : ex.show; g.classList.add(res.ok ? 'gfill' : 'gbad'); } }
        feedback(root, ex, res, v, done);
      };
      $('form', root).onsubmit = e => { e.preventDefault(); check(); };
      inp.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey && !answered) { e.preventDefault(); e.stopPropagation(); check(); } });
      $('#chk', root).onclick = () => check(); $('#skip', root).onclick = () => check(true);
      return;
    }
    if (t === 'scramble') {
      const toks = ex.es.split(/\s+/); let order = shuffle(toks.map((w, i) => ({ w, i })));
      if (order.every((o, i) => o.i === i) && toks.length > 1) order.reverse();
      const built = [];
      root.innerHTML = `<div class="ex"><div class="sub">Build the sentence</div><div class="prompt">${esc(ex.en)}</div><div class="built" id="built" aria-live="polite"></div><div class="tiles" id="tiles"></div><div class="fb"></div><div class="foot"><button class="btn ghost" id="undo">Undo</button><button class="btn primary" id="chk">Check</button></div></div>`;
      const draw = () => {
        $('#built', root).innerHTML = built.map(o => `<span class="tile in">${esc(o.w)}</span>`).join('') || '<span class="ph">Tap the words in order</span>';
        $('#tiles', root).innerHTML = order.map((o, k) => built.includes(o) ? `<span class="tile used">${esc(o.w)}</span>` : `<button class="tile" data-k="${k}">${esc(o.w)}</button>`).join('');
        $$('#tiles [data-k]', root).forEach(b => b.onclick = () => { built.push(order[+b.dataset.k]); draw(); });
      };
      draw();
      $('#undo', root).onclick = () => { built.pop(); draw(); };
      $('#chk', root).onclick = () => {
        const v = built.map(o => o.w).join(' ');
        const res = C.norm(v) === C.norm(ex.es) ? { ok: true } : { ok: false };
        $('#undo', root).remove(); $$('#tiles button', root).forEach(b => b.disabled = true);
        feedback(root, Object.assign({}, ex, { show: ex.es }), res, v || '(empty)', done);
      };
      return;
    }
    if (t === 'match') {
      const left = shuffle(ex.pairs), right = shuffle(ex.pairs);
      const miss = {}; let sel = null, matched = 0;
      root.innerHTML = `<div class="ex"><div class="sub">Match the pairs</div><div class="match"><div class="mcol" id="ml">${left.map(p => `<button class="opt es" data-id="${esc(p.id)}" data-side="l">${esc(p.es)}</button>`).join('')}</div><div class="mcol" id="mr">${right.map(p => `<button class="opt" data-id="${esc(p.id)}" data-side="r">${esc(p.en)}</button>`).join('')}</div></div><div class="fb" aria-live="polite"></div><div class="foot"></div></div>`;
      const all = $$('.match .opt', root);
      all.forEach(b => b.onclick = () => {
        if (b.disabled) return;
        if (!sel || sel.dataset.side === b.dataset.side) { all.forEach(x => x.classList.remove('pick')); sel = b; b.classList.add('pick'); if (b.dataset.side === 'l') C.speak(b.textContent); return; }
        const a = sel; sel = null; a.classList.remove('pick');
        if (a.dataset.id === b.dataset.id) {
          [a, b].forEach(x => { x.disabled = true; x.classList.add('right'); });
          const p = ex.pairs.find(p => p.id === a.dataset.id); C.speak(p.es);
          matched++;
          if (matched === ex.pairs.length) {
            ex.pairs.forEach(p => { if (C.has(p.id)) C.grade(p.id, miss[p.id] ? 2 : 3); });
            const errs = Object.keys(miss).length;
            const fb = $('.fb', root); fb.className = 'fb ' + (errs ? 'close' : 'good'); fb.innerHTML = `<b>${errs ? 'Done, with ' + errs + ' slip' + (errs > 1 ? 's' : '') : 'All matched'}</b>`;
            $('.foot', root).innerHTML = '<button class="btn primary" id="cont">Continue</button>';
            const go = () => { document.removeEventListener('keydown', key); done({ ok: errs <= 1, close: errs === 1 }); };
            const key = e => { if (e.key === 'Enter') { e.preventDefault(); go(); } };
            setTimeout(() => document.addEventListener('keydown', key), 50);
            $('#cont', root).onclick = go; $('#cont', root).focus();
          }
        } else {
          miss[a.dataset.id] = 1; miss[b.dataset.id] = 1;
          [a, b].forEach(x => { x.classList.add('wrong'); setTimeout(() => x.classList.remove('wrong'), 450); });
        }
      });
      return;
    }
    if (t === 'speak') {
      const dict = C.dict;
      root.innerHTML = `<div class="ex"><div class="sub">Listen, then say it out loud</div><div class="prompt es">${esc(ex.es)}</div><div class="say-row">${speakBtn(ex.es)}</div><div class="hint">${esc(ex.en)}</div>
        ${dict ? `<div class="mic-row"><button class="btn mic" id="mic">${G.ICON.mic}<span>Tap and speak</span></button><div class="heard" id="heard" aria-live="polite"></div></div>` : `<p class="note">Speech recognition isn't available in this browser (it works in Chrome, Edge and Safari). Say it aloud, compare with the audio, and move on.</p>`}
        <div class="fb"></div><div class="foot"><button class="btn ghost" id="again">Repeat audio</button><button class="btn primary" id="cont">${dict ? 'Skip' : 'I said it'}</button></div></div>`;
      bindSay(root); if (C.S.settings.autoplay) C.speak(ex.es);
      $('#again', root).onclick = () => C.speak(ex.es);
      const finishSpeak = () => { C.dictOn({}); try { dict && dict.stop(); } catch (e) { } done({ ok: true }); };
      $('#cont', root).onclick = finishSpeak;
      if (dict) {
        let text = '', listening = false;
        const show = (partial = '') => { const h = $('#heard', root); if (h) h.textContent = (text + ' ' + partial).trim(); };
        const evaluate = () => {
          const sc = C.wordScore(text, ex.es); const fb = $('.fb', root); if (!fb) return;
          fb.className = 'fb ' + (sc >= 0.8 ? 'good' : sc >= 0.5 ? 'close' : 'bad');
          fb.innerHTML = `<b>${Math.round(sc * 100)}% match</b><div>${sc >= 0.8 ? '¡Muy bien! Clear and understandable.' : sc >= 0.5 ? 'Good try. Listen again and focus on the words you missed.' : 'Listen slowly and try again.'}</div>`;
          $('#cont', root).textContent = 'Continue';
        };
        C.dictOn({
          partial: ({ text: p }) => show(p),
          final: ({ text: f }) => { text = (text + ' ' + f).trim(); show(); },
          state: ({ state }) => { listening = state === 'listening'; const b = $('#mic', root); if (b) { b.classList.toggle('on', listening); b.querySelector('span').textContent = listening ? 'Listening… tap to stop' : 'Tap and speak'; } if (!listening && text) evaluate(); }
        });
        $('#mic', root).onclick = () => {
          if (listening) { dict.stop().catch(() => { }); return; }
          text = ''; show(); C.stopSpeak();
          dict.start().catch(e => { const fb = $('.fb', root); if (!fb) return; fb.className = 'fb close'; fb.textContent = e && e.code === 'not_granted' ? 'Microphone not allowed. Say it aloud and move on.' : 'Could not start the microphone.'; });
        };
      }
      return;
    }
    if (t === 'readq') {
      root.innerHTML = `<div class="ex"><div class="sub">Comprehension · ${esc(ex.title || '')}</div>${ex.text ? `<details class="rtext"><summary>Show the text</summary><div class="reading small" lang="es">${esc(ex.text).replace(/\n/g, '<br>')}</div></details>` : ''}<div class="prompt es cloze">${esc(ex.q)}</div><div class="opts">${ex.options.map((o, i) => `<button class="opt" data-i="${i}"><span class="k">${i + 1}</span>${esc(o)}</button>`).join('')}</div><div class="fb"></div><div class="foot"></div></div>`;
      $$('.opt', root).forEach(b => b.onclick = () => {
        const i = +b.dataset.i; $$('.opt', root).forEach((x, j) => { x.disabled = true; if (EXAM) return; if (j === ex.answer) x.classList.add('right'); else if (j === i) x.classList.add('wrong'); });
        feedback(root, Object.assign({}, ex, { show: ex.options[ex.answer], say: ex.options[ex.answer] }), { ok: i === ex.answer }, null, done);
      });
    }
  }

  // ---------- word learning (units and decks): small batches, intro → recognise → recall ----------
  E.newIds = src => src.vids.filter((id, i) => !C.has(id) && src.vids.indexOf(id) === i);
  E.learnItems = (src, n) => {
    n = n || C.S.settings.batch || 10;
    const fresh = E.newIds(src).slice(0, n);
    if (!fresh.length) return null;
    const items = [];
    for (let k = 0; k < fresh.length; k += 5) {
      const chunk = fresh.slice(k, k + 5);
      chunk.forEach(id => items.push(E.vocabEx(id, 'intro')));
      shuffle(chunk).forEach(id => items.push(E.vocabEx(id, 'mc-es')));
    }
    if (fresh.length >= 3) items.push(E.matchEx(shuffle(fresh)));
    shuffle(fresh).forEach((id, k) => items.push(E.vocabEx(id, k % 3 === 0 ? 'mc-en' : k % 3 === 1 ? 'context' : 'mc-listen')));
    shuffle(fresh).forEach(id => items.push(E.vocabEx(id, 'type')));
    return items;
  };
  E.wordPractice = (ids, n = 25) => {
    ids = shuffle(ids).slice(0, n); if (!ids.length) return [];
    const items = [];
    const m1 = E.matchEx(ids.slice(0, 5)); if (m1) items.push(m1);
    ids.forEach((id, k) => {
      const c = C.S.cards[id], s = c ? c.s : 0;
      const g = C.genderOf(item(id).it[0]);
      const kinds = s < 2 ? ['mc-en', 'mc-listen', 'context', 'type'] : ['type', 'context', 'listen', 'context'];
      items.push(E.vocabEx(id, g && k % 5 === 4 ? 'gender' : kinds[k % kinds.length]));
    });
    if (ids.length >= 10) { const m2 = E.matchEx(ids.slice(5, 10)); if (m2) items.splice(Math.floor(items.length / 2), 0, m2); }
    return items;
  };

  // ---------- unit session builders ----------
  function earlierCards(u, n) {
    const ids = Object.keys(C.S.cards).filter(k => { const x = item(k); return x && (x.src.deck || x.src.n < u.n); });
    const due = ids.filter(k => C.isDue(C.S.cards[k]));
    const weak = ids.slice().sort((a, b) => C.retrievability(C.S.cards[a]) - C.retrievability(C.S.cards[b])).slice(0, n * 3);
    return pick([...new Set(due.concat(weak))].slice(0, n * 3), n);
  }
  E.practiceItems = u => {
    const items = [];
    const fresh = u.dids.filter(id => !C.has(id)), seen = u.dids.filter(C.has);
    fresh.concat(shuffle(seen)).slice(0, 12).forEach(id => items.push(E.drillEx(id)));
    conjItems(u, 6).forEach(x => items.push(x));
    const si = shuffle(u.sids);
    si.slice(0, 3).forEach(id => items.push(E.sentEx(id, 'scramble')));
    si.slice(3, 5).forEach(id => items.push(E.sentEx(id, 'translate')));
    const known = u.vids.filter(C.has), vpool = known.length >= 5 ? known : u.vids;
    pick(vpool, 4).forEach(id => items.push(E.vocabEx(id, 'context')));
    pick(vpool.filter(id => C.genderOf(item(id).it[0])), 2).forEach(id => items.push(E.vocabEx(id, 'gender')));
    const m = E.matchEx(pick(vpool, 5)); if (m) items.push(m);
    earlierCards(u, 6).forEach(id => items.push(E.reviewEx(id)));
    if (G.PRAC) G.PRAC.forUnit(u).forEach(x => items.push(x));
    return shuffle(items);
  };
  E.listenItems = u => shuffle(u.sids.map(id => E.sentEx(id, 'listen')).concat(pick(u.vids, 4).map(id => E.vocabEx(id, 'listen')), pick(u.vids, 4).map(id => E.vocabEx(id, 'mc-listen'))));
  E.speakItems = u => u.sentences.map(s => ({ type: 'speak', es: s[0], en: s[1] })).concat(pick(u.vocab.map(C.exOf).filter(Boolean), 4).map(x => ({ type: 'speak', es: x.es, en: x.en })));
  E.readQ = (u, r) => r.q.map(q => ({ type: 'readq', q: q[0], options: q[1], answer: q[2], title: r.t, text: r.x }));
  E.checkItems = u => {
    const items = [];
    pick(u.vids, 7).forEach((id, k) => items.push(E.vocabEx(id, k % 3 === 0 ? 'mc-en' : k % 3 === 1 ? 'context' : 'type')));
    pick(u.dids, 5).forEach(id => items.push(E.drillEx(id)));
    conjItems(u, 2).forEach(x => items.push(x));
    const si = shuffle(u.sids);
    [['translate', 0], ['scramble', 1], ['listen', 2]].forEach(([k, i]) => si[i] && items.push(E.sentEx(si[i], k)));
    shuffle(u.readings.flatMap(r => E.readQ(u, r))).slice(0, 3).forEach(x => items.push(x));
    return shuffle(items).slice(0, 20);
  };

  // ---------- free practice (the gym): pools drawn from everything you've reached ----------
  E.pools = () => {
    const units = C.reachedUnits();
    const learnedV = Object.keys(C.S.cards).filter(id => id[0] === 'v' && item(id));
    return {
      units, learnedV,
      drills: units.flatMap(u => u.dids),
      sents: units.flatMap(u => u.sids),
      readings: units.flatMap(u => u.readings.map(r => [u, r]))
    };
  };
  E.workout = kind => {
    const p = E.pools();
    const weakest = (ids, n) => ids.slice().sort((a, b) => C.retrievability(C.S.cards[a] || {}) - C.retrievability(C.S.cards[b] || {})).slice(0, n);
    if (kind === 'mixed') {
      const v = E.wordPractice(weakest(p.learnedV, 30).concat(pick(p.learnedV, 10)).filter((x, i, a) => a.indexOf(x) === i), 12);
      const d = pick(p.drills, 8).map(E.drillEx);
      const s = pick(p.sents, 5).map((id, k) => E.sentEx(id, ['scramble', 'translate', 'listen'][k % 3]));
      const r = p.readings.length ? E.readQ(...pick(p.readings, 1)[0]).slice(0, 2) : [];
      return shuffle(v.concat(d, s, r));
    }
    if (kind === 'words') return E.wordPractice(weakest(p.learnedV, 40).concat(pick(p.learnedV, 20)).filter((x, i, a) => a.indexOf(x) === i), 30);
    if (kind === 'context') return pick(p.learnedV.filter(id => (C.exOf(item(id).it) || {}).target), 25).map(id => E.vocabEx(id, 'context'));
    if (kind === 'grammar') return pick(p.drills, 25).map(E.drillEx);
    if (kind === 'listen') return pick(p.sents, 12).map(id => E.sentEx(id, 'listen')).concat(pick(p.learnedV, 8).map(id => E.vocabEx(id, 'mc-listen')));
    if (kind === 'sentences') return pick(p.sents, 16).map((id, k) => E.sentEx(id, k % 2 ? 'translate' : 'scramble'));
    if (kind === 'match') { const ids = pick(p.learnedV, 30); const out = []; for (let k = 0; k + 3 <= ids.length && out.length < 6; k += 5) out.push(E.matchEx(ids.slice(k, k + 5))); return out; }
    if (kind === 'gender') return pick(p.learnedV.filter(id => C.genderOf(item(id).it[0])), 25).map(id => E.vocabEx(id, 'gender'));
    if (kind === 'reading') return shuffle(p.readings.flatMap(([u, r]) => E.readQ(u, r))).slice(0, 15);
    if (kind === 'speak') return pick(p.sents, 12).map(id => E.sentEx(id, 'speak'));
    return [];
  };
})(window);
