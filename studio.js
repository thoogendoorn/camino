/* Camino — Phase 5: speaking and writing studio.
   Daily one-minute talk, pronunciation drills, DELE oral tasks, writing portfolio by text type,
   corrections that feed the review deck and the mistake notebook. Everything works without AI;
   AI feedback is an optional extra (claude.ai or your own key). */
(function (G) {
  'use strict';
  const { $, $$, esc, shuffle } = C;
  const ST = G.STUDIO = {};
  const CM = G.CAMINO || {};
  const S = () => C.S;
  const A = () => G.App;
  const LV = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const DAY = 864e5;
  const GOAL_TALKS = 30, GOAL_TEXTS = 10;

  // ---------- content ----------
  ST.TALKS = (CM.talks || []).slice().sort((a, b) => LV.indexOf(a.level) - LV.indexOf(b.level));
  ST.TALK = {}; ST.TALKS.forEach(t => { ST.TALK[t.id] = t; });
  ST.WTYPES = (CM.wtypes || []).slice().sort((a, b) => LV.indexOf(a.level) - LV.indexOf(b.level));
  ST.WTYPE = {}; ST.WTASK = {};
  ST.WTYPES.forEach(w => { ST.WTYPE[w.id] = w; (w.tasks || []).forEach(t => { ST.WTASK[t.id] = { t, w }; }); });
  ST.PRON = CM.pron || []; ST.PRONS = {}; ST.PRON.forEach(p => { ST.PRONS[p.id] = p; });

  const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  const lvl = () => { try { return C.currentLevel(); } catch (e) { return 'A1'; } };
  const wc = s => (String(s || '').match(/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+/g) || []).length;
  const list = k => { const s = S(); if (!Array.isArray(s[k])) s[k] = []; return s[k]; };
  const clean = s => String(s || '').replace(/\s+/g, ' ').trim();
  const fmt = s => Math.floor(s / 60) + ':' + String(Math.max(0, s) % 60).padStart(2, '0');
  const fdate = t => new Date(t).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  const lvSeg = (cur, attr, levels) => `<div class="seg" role="tablist" aria-label="Level">${(levels || LV).map(l => `<button class="${l === cur ? 'on' : ''}" ${attr}="${l}">${l}</button>`).join('')}</div>`;
  const addTime = sec => { const d = C.dayRec(); d.t = (d.t || 0) + Math.max(0, Math.min(3600, Math.round(sec))); };

  // ---------- state of this page (in memory) ----------
  let tab = 'hablar', talkLv = null, talkPick = null, session = null;
  let wv = { v: 'home' }, draft = null, review = null, pr = null, timer = null, saveT = null;
  ST.busy = () => (location.hash || '').slice(1) === 'studio' && !!(session || (draft && draft.open) || review || (pr && pr.run));
  G.addEventListener('hashchange', () => { if (draft && draft.open) { try { saveDraft(); } catch (e) { } } if (session && (location.hash || '').slice(1) !== 'studio') { ST.stop(); session = null; } });
  ST.stop = () => {
    clearInterval(timer); timer = null; clearTimeout(saveT);
    if (C.dict) { try { C.dict.stop(); } catch (e) { } }
    C.dictOn({}); C.stopSpeak();
  };
  ST.setTab = t => { tab = t; };

  // ---------- error tags (shared with the mistake notebook) ----------
  const GENERIC = ['Ortografía y acentos', 'Concordancia (género y número)', 'Preposiciones', 'Vocabulario y expresiones', 'Orden de palabras y conectores', 'Registro'];
  ST.tagList = lv => {
    const li = LV.indexOf(lv || lvl());
    const t = [...new Set((C.PRACTICE || []).filter(b => LV.indexOf(b.level) <= li + 1).map(b => b.tag))];
    return t.concat(GENERIC.filter(g => !t.includes(g)));
  };
  const allTags = () => { const t = [...new Set((C.PRACTICE || []).map(b => b.tag))]; return t.concat(GENERIC, ['Otros errores']); };
  const tagSelect = (sel, lv) => `<select class="fx-tag" aria-label="Grammar point">${ST.tagList(lv).concat(['Otros errores']).map(t => `<option ${t === sel ? 'selected' : ''}>${esc(t)}</option>`).join('')}</select>`;

  // A correction becomes: a record (for trends), a mistake-notebook point and, if short enough, a review card in My words.
  ST.addFixes = (items, src, ref) => {
    const L = list('fixes'), tags = allTags(); let cards = 0, n = 0;
    (items || []).forEach(f => {
      const wrong = clean(f.wrong), right = clean(f.right).replace(/^[«"“]|[»"”]$/g, '');
      if (!right || wrong.toLowerCase() === right.toLowerCase()) return;
      const tag = tags.includes(f.tag) ? f.tag : 'Otros errores';
      L.unshift({ id: uid(), ts: Date.now(), src, ref: ref || '', wrong, right, why: clean(f.why).slice(0, 200), tag });
      C.noteTag(tag, false); n++;
      if (f.review !== false && wc(right) <= 12 && G.READER && G.READER.addMyWord(right, '✎ ' + (wrong ? '«' + wrong + '»' : 'correction') + (f.why ? ' — ' + clean(f.why) : ''), '', 'fix')) cards++;
    });
    if (L.length > 1500) L.length = 1500;
    C.save();
    return { n, cards };
  };
  ST.fixIds = () => (S().mywords || []).filter(w => w.src === 'fix').map(w => C.vid(w.es)).filter(id => C.ITEMS[id]);
  const fixSrc = () => ({ id: 'my-fixes', title: 'My corrections', vids: ST.fixIds() });

  // manual corrections editor (the no-AI way to feed the notebook)
  const fxEditor = (id, lv) => `<div class="fxed" id="${id}"><div class="fxrows"></div><button type="button" class="btn small ghost" data-fxadd="${id}">+ Add a correction</button></div>`;
  const fxRow = (lv, f = {}) => `<div class="fxrow"><input class="fx-w" lang="es" placeholder="What I said / wrote" value="${esc(f.wrong || '')}"><span aria-hidden="true">→</span><input class="fx-r" lang="es" placeholder="Correct version" value="${esc(f.right || '')}"><input class="fx-y" placeholder="Why (optional)" value="${esc(f.why || '')}">${tagSelect(f.tag, lv)}<button type="button" class="btn icon small ghost fx-x" aria-label="Remove">×</button></div>`;
  const bindFx = (root, lv) => {
    $$('[data-fxadd]', root).forEach(b => b.onclick = () => { const box = $('#' + b.dataset.fxadd + ' .fxrows', root); box.insertAdjacentHTML('beforeend', fxRow(lv)); bindRows(box); const last = $$('.fxrow', box).pop(); if (last) $('.fx-w', last).focus(); });
    const bindRows = box => $$('.fx-x', box).forEach(x => x.onclick = () => x.closest('.fxrow').remove());
  };
  const realFix = f => clean(f.right) && clean(f.wrong).toLowerCase() !== clean(f.right).toLowerCase();
  const readFx = (root, id) => $$('#' + id + ' .fxrow', root).map(r => ({ wrong: $('.fx-w', r).value, right: $('.fx-r', r).value, why: $('.fx-y', r).value, tag: $('.fx-tag', r).value })).filter(f => clean(f.right));

  // ---------- AI (optional) ----------
  ST.parseJSON = txt => {
    const m = String(txt || '').match(/\{[\s\S]*\}/); if (!m) return null;
    try { return JSON.parse(m[0]); } catch (e) { try { return JSON.parse(m[0].replace(/,\s*([}\]])/g, '$1')); } catch (e2) { return null; } }
  };
  const clampBands = (b, crit) => { const o = {}; crit.forEach(([k]) => { const v = Math.round(+((b || {})[k])); if (v >= 0 && v <= 3) o[k] = v; }); return o; };
  const RUB = skill => (G.EXAMS && G.EXAMS.RUBRIC && G.EXAMS.RUBRIC[skill]) || [];
  const BANDN = ['not yet', 'weak', 'adequate', 'good'];
  ST.aiFeedback = async ({ skill, level, task, text, extra, max }) => {
    const crit = RUB(skill), tags = ST.tagList(level);
    const what = skill === 'speaking' ? 'a ONE-MINUTE SPOKEN monologue, transcribed by speech recognition (ignore punctuation, capital letters and obvious transcription errors)' : 'a WRITTEN text';
    const prompt = `You are an experienced, kind teacher of Castilian Spanish (Spain norms: vosotros, Spain vocabulary). Assess ${what} by a learner at CEFR ${level}.
Task: ${task}
${extra || ''}
Learner's ${skill === 'speaking' ? 'transcript' : 'text'}:
"""${text}"""

Return ONLY one JSON object, with no text before or after it, in exactly this shape:
{"bands": {${crit.map(c => `"${c[0]}": 0-3`).join(', ')}},
 "comments": {${crit.map(c => `"${c[0]}": "one sentence in English"`).join(', ')}},
 "summary": "two sentences in English: what went well and the main thing to improve",
 "corrections": [{"wrong": "the exact short phrase the learner used", "right": "the corrected Spanish phrase", "why": "very short English reason", "tag": "one tag from the list below"}],
 "next": "one concrete thing to practise next, in English"}
Bands: 3 = good for ${level}, 2 = adequate, 1 = weak, 0 = not achieved. Criteria: ${crit.map(c => c[1] + ' (' + c[2] + ')').join('; ')}.
Give at most ${max || 3} corrections: the most useful ones for this learner, each a short phrase, never whole paragraphs. If there are no real errors, return an empty list.
Tags (choose the closest): ${tags.join(' | ')}`;
    const r = await C.ai.ask(prompt, { tier: 'default', cache: false, max: 1500 });
    const j = ST.parseJSON(r.text);
    if (!j) return { raw: r.text };
    return { bands: clampBands(j.bands, crit), comments: j.comments || {}, summary: clean(j.summary), next: clean(j.next), corrections: (Array.isArray(j.corrections) ? j.corrections : []).slice(0, max || 3).filter(c => c && c.right).map(c => ({ wrong: clean(c.wrong), right: clean(c.right), why: clean(c.why), tag: clean(c.tag) })) };
  };
  const fbHtml = (fb, skill, withPick) => {
    if (!fb) return '';
    if (fb.raw) return `<div class="ai-box">${C.md(fb.raw)}</div>`;
    const crit = RUB(skill);
    return `<div class="ai-box fb"><table class="bandtab"><tbody>${crit.map(([k, n]) => fb.bands[k] == null ? '' : `<tr><th>${esc(n)}</th><td><span class="bandpill b${fb.bands[k]}">${fb.bands[k]} · ${BANDN[fb.bands[k]]}</span></td><td>${esc((fb.comments || {})[k] || '')}</td></tr>`).join('')}</tbody></table>
      ${fb.summary ? `<p>${esc(fb.summary)}</p>` : ''}
      ${fb.corrections && fb.corrections.length ? `<h4>Corrections</h4><ul class="fxlist">${fb.corrections.map((c, i) => `<li>${withPick ? `<label class="chk"><input type="checkbox" data-fxpick="${i}" checked> ` : ''}<s lang="es">${esc(c.wrong)}</s> → <b lang="es">${esc(c.right)}</b>${c.why ? ` <span class="muted">· ${esc(c.why)}</span>` : ''}${c.tag ? ` <small class="tagchip">${esc(c.tag)}</small>` : ''}${withPick ? '</label>' : ''}</li>`).join('')}</ul>${withPick ? '<p class="muted small">Ticked corrections go into your review deck (My words) and your mistake notebook when you save.</p>' : ''}` : '<p class="muted">No corrections: well done.</p>'}
      ${fb.next ? `<p><b>Next:</b> ${esc(fb.next)}</p>` : ''}</div>`;
  };
  ST.fbHtml = (fb, skill, pick) => fbHtml(fb, skill, pick);
  const bandsOf = x => (x && x.ai && x.ai.bands && Object.keys(x.ai.bands).length ? x.ai.bands : (x && x.self) || {});
  const bandSum = (b, skill) => { const crit = RUB(skill), ks = crit.map(c => c[0]).filter(k => b[k] != null); return ks.length ? ks.reduce((s, k) => s + b[k], 0) + '/' + ks.length * 3 : '—'; };
  const selfBands = (skill, cur) => `<div class="rubric">${RUB(skill).map(([k, n, d]) => `<div class="crit" data-k="${k}"><div><b>${esc(n)}</b><small>${esc(d)}</small></div><div class="bands">${[0, 1, 2, 3].map(i => `<button type="button" class="rband" data-b="${i}" aria-pressed="${cur && cur[k] === i}">${i}<small>${BANDN[i]}</small></button>`).join('')}</div></div>`).join('')}</div>`;
  const bindBands = (root, store) => $$('.crit', root).forEach(cd => $$('.rband', cd).forEach(b => b.onclick = () => { store[cd.dataset.k] = +b.dataset.b; $$('.rband', cd).forEach(x => x.setAttribute('aria-pressed', x === b)); }));

  // ---------- progress: talks, texts, error trends ----------
  ST.summary = () => {
    const talks = list('talks'), port = list('portfolio').filter(p => p.status === 'final'), fixes = list('fixes');
    const days = new Set(talks.map(t => C.dayKey(t.ts)));
    let streak = 0; for (let k = days.has(C.today()) ? 0 : 1; k < 3650; k++) { if (days.has(C.dayKey(Date.now() - k * DAY))) streak++; else break; }
    const now = Date.now();
    const words = (a, b) => talks.filter(t => t.ts > now - b && t.ts <= now - a).reduce((s, t) => s + (t.words || 0), 0) + port.filter(p => p.ts > now - b && p.ts <= now - a).reduce((s, p) => s + (p.words || 0), 0);
    const cnt = (tag, a, b) => fixes.filter(f => f.tag === tag && f.ts > now - b && f.ts <= now - a).length;
    const recent = {}; fixes.filter(f => f.ts > now - 90 * DAY).forEach(f => { recent[f.tag] = (recent[f.tag] || 0) + 1; });
    const w1 = words(0, 30 * DAY), w0 = words(30 * DAY, 60 * DAY);
    const top = Object.entries(recent).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([tag, n]) => {
      const now1 = cnt(tag, 0, 30 * DAY), prev = cnt(tag, 30 * DAY, 60 * DAY);
      const r1 = w1 ? now1 / w1 * 1000 : null, r0 = w0 ? prev / w0 * 1000 : null;
      return { tag, n, now: now1, prev, r1, r0, trend: r1 == null || r0 == null ? null : r1 < r0 ? 'down' : r1 > r0 ? 'up' : 'flat' };
    });
    return { talks: talks.length, today: days.has(C.today()), streak, texts: port.length, fixes: fixes.length, top, w1, w0 };
  };
  const summaryHtml = () => {
    const s = ST.summary(), done = s.talks >= GOAL_TALKS && s.texts >= GOAL_TEXTS;
    const r = x => x == null ? '—' : (Math.round(x * 10) / 10).toLocaleString('en-GB');
    return `<div class="kpis st-kpis"><div><b>${s.talks}<small>/${GOAL_TALKS}</small></b><span>one-minute talks${s.today ? ' · today ✓' : ''}</span></div><div><b>${s.streak}</b><span>day speaking streak</span></div><div><b>${s.texts}<small>/${GOAL_TEXTS}</small></b><span>portfolio texts</span></div><div><b>${s.fixes}</b><span>corrections collected</span></div></div>
      ${s.top.length ? `<div class="trend"><p class="muted">Your most frequent errors (last 90 days), per 1,000 words you produced: previous 30 days → last 30 days.</p><ul>${s.top.map(t => `<li><b>${esc(t.tag)}</b>: ${t.n}× · ${r(t.r0)} → ${r(t.r1)} <span class="tr ${t.trend || ''}">${t.trend === 'down' ? '▼ improving' : t.trend === 'up' ? '▲ more often' : t.trend === 'flat' ? '= steady' : 'not enough data yet'}</span></li>`).join('')}</ul></div>` : ''}
      ${done ? '<p class="note">Phase goal reached: 30 talks and 10 portfolio texts. Keep going: the error trends above are the real measure.</p>' : `<p class="muted small">Goal: ${GOAL_TALKS} daily talks and ${GOAL_TEXTS} portfolio texts, with your three most frequent errors trending down.</p>`}`;
  };

  // ======================================================================
  // 1. DAILY ONE-MINUTE TALK
  // ======================================================================
  const timesDone = id => list('talks').filter(t => t.topic === id).length;
  ST.todayTopic = lv => {
    lv = lv || lvl();
    const pool = ST.TALKS.filter(t => t.level === lv); if (!pool.length) return null;
    const today = list('talks').find(t => C.dayKey(t.ts) === C.today());
    if (today && ST.TALK[today.topic] && ST.TALK[today.topic].level === lv) return ST.TALK[today.topic];
    const minN = Math.min(...pool.map(t => timesDone(t.id)));
    const fresh = pool.filter(t => timesDone(t.id) === minN);
    const seed = [...C.today()].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
    return fresh[seed % fresh.length];
  };
  const talkTabHtml = () => {
    const lv = talkLv || (LV.includes(lvl()) ? lvl() : 'A1');
    const t = (talkPick && ST.TALK[talkPick] && ST.TALK[talkPick].level === lv) ? ST.TALK[talkPick] : ST.todayTopic(lv);
    if (!t) return '<p>No topics yet.</p>';
    const pool = ST.TALKS.filter(x => x.level === lv), mine = list('talks');
    return `<p class="lead">One minute of speaking a day: 30 seconds to prepare, then talk without stopping. The microphone writes down what you say${C.dict ? '' : ' (not available in this browser: speak aloud and mark yourself)'}; you compare with a model answer, mark yourself, and collect your corrections. AI feedback is optional.</p>
      ${lvSeg(lv, 'data-tlv', LV.filter(l => ST.TALKS.some(x => x.level === l)))}
      <div class="panel talk-today"><p class="kicker">${talkPick ? 'Chosen topic' : 'Today\'s topic'} · ${lv}${timesDone(t.id) ? ' · done ' + timesDone(t.id) + '×' : ''}</p>
        <h2 lang="es">${esc(t.es)}</h2><p class="muted">${esc(t.en)}</p>
        <h3>Useful phrases</h3><ul class="phrases" lang="es">${t.ph.map(p => `<li>${esc(p)}</li>`).join('')}</ul>
        <div class="row wrap"><button class="btn primary" id="tstart" data-t="${t.id}">Start: 30 seconds to prepare</button><button class="btn" id="tnow" data-t="${t.id}">Start speaking now</button><button class="btn ghost" id="tother">Another topic</button></div></div>
      <details class="topics"><summary>All ${pool.length} topics at ${lv}</summary><ul class="tlist">${pool.map(x => { const n = timesDone(x.id); return `<li><button class="linkish" data-tpick="${x.id}" lang="es">${esc(x.es)}</button>${n ? ` <small class="muted">✓ ${n}×</small>` : ''}</li>`; }).join('')}</ul></details>
      <h3>Your talks</h3>${mine.length ? `<ul class="talklog">${mine.slice(0, 12).map(x => { const tp = ST.TALK[x.topic]; return `<li><button class="linkish" data-tview="${x.id}">${fdate(x.ts)} · <span lang="es">${esc(tp ? tp.es : x.topic)}</span></button> <small class="muted">${x.words || 0} words · ${x.wpm || 0} wpm · ${bandSum(bandsOf(x), 'speaking')}${x.ai ? ' · AI' : ''}</small></li>`; }).join('')}</ul>` : '<p class="muted">None yet. Your first talk is above.</p>'}
      ${fixSection()}`;
  };
  const fixSection = () => {
    const ids = ST.fixIds(), learned = ids.filter(C.has).length;
    return `<h3>My corrections</h3>${ids.length ? `<p class="muted">${ids.length} corrections in your review deck (${learned} learned). They show the mistake and ask for the correct version.</p><div class="row wrap">${learned < ids.length ? `<button class="btn small primary" data-fixlearn>Learn new corrections</button>` : ''}${learned ? `<button class="btn small" data-fixprac>Practise corrections</button>` : ''}<a class="btn small ghost" href="#gym">Mistake notebook</a></div>` : '<p class="muted">Corrections you save from talks, texts and tutor chats appear here and in your reviews.</p>'}`;
  };

  // the talk session (rendered into #stbody; no full re-render while it runs)
  const startTalk = (id, prep) => {
    const t = ST.TALK[id]; if (!t) return;
    ST.stop();
    session = { t, phase: prep ? 'prep' : 'talk', left: prep ? 30 : 60, heard: '', partial: '', started: 0, spoke: 0 };
    renderSession(); if (session.phase === 'talk') beginTalk(); else tick();
  };
  const tick = () => {
    clearInterval(timer);
    timer = setInterval(() => {
      if (!session) { clearInterval(timer); return; }
      session.left--; const el = $('#ttm'); if (!el) { ST.stop(); session = null; return; }
      el.textContent = fmt(session.left);
      if (session.left <= 0) { if (session.phase === 'prep') beginTalk(); else endTalk(); }
    }, 1000);
  };
  const beginTalk = () => {
    session.phase = 'talk'; session.left = 60; session.started = Date.now(); renderSession();
    if (C.dict) {
      C.dictOn({
        partial: ({ text }) => { if (!session) return; session.partial = text; const h = $('#theard'); if (h) h.textContent = (session.heard + ' ' + text).trim(); },
        final: ({ text }) => { if (!session) return; session.heard = (session.heard + ' ' + text).trim(); session.partial = ''; const h = $('#theard'); if (h) h.textContent = session.heard; },
        state: ({ state }) => { if (session && session.phase === 'talk' && state !== 'listening') { try { C.dict.start().catch(() => { }); } catch (e) { } } }
      });
      C.dict.start().catch(() => { const m = $('#tmsg'); if (m) m.textContent = 'Microphone not available: speak aloud anyway, then mark yourself.'; });
    }
    tick();
  };
  const endTalk = () => {
    if (!session) return;
    const s = session;
    if (s.phase === 'talk') s.spoke = Math.min(60, Math.max(1, Math.round((Date.now() - s.started) / 1000)));
    clearInterval(timer); timer = null;
    if (C.dict) { try { C.dict.stop(); } catch (e) { } }
    C.dictOn({});
    if (s.partial) s.heard = (s.heard + ' ' + s.partial).trim();
    s.phase = 'review'; s.self = {}; s.fb = null; renderSession();
  };
  const talkStats = (text, sec, t) => {
    const words = wc(text), toks = (C.norm(text).match(/[a-záéíóúüñ]+/g) || []);
    const uniq = new Set(toks).size, wpm = sec >= 10 ? Math.round(words / sec * 60) : 0;
    const low = ' ' + C.norm(text) + ' ';
    const used = t.ph.filter(p => { const core = C.norm(p.split(/[…(/]/)[0]).trim(); return core.length > 2 && low.includes(' ' + core.split(' ').slice(0, 3).join(' ')); });
    return { words, uniq, wpm, used };
  };
  const renderSession = () => {
    const box = $('#stbody'); if (!box || !session) return;
    const s = session, t = s.t;
    if (s.phase !== 'review') {
      box.innerHTML = `<div class="panel talk-run"><p class="kicker">${s.phase === 'prep' ? 'Prepare · make notes in your head' : 'Speak now · keep going until the timer ends'}</p><h2 lang="es">${esc(t.es)}</h2>
        <ul class="phrases" lang="es">${t.ph.map(p => `<li>${esc(p)}</li>`).join('')}</ul>
        <div class="speakbox"><div class="big-timer" id="ttm">${fmt(s.left)}</div><div class="muted" id="tmsg">${s.phase === 'prep' ? 'Preparation' : C.dict ? 'The microphone is listening.' : 'Speech recognition is not available in this browser: speak out loud.'}</div><div class="heard" id="theard" aria-live="polite" lang="es">${esc(s.heard)}</div></div>
        <div class="row"><button class="btn primary" id="tgo">${s.phase === 'prep' ? 'Start speaking now' : 'I\'ve finished'}</button><button class="btn ghost" id="tquit">Cancel</button></div></div>`;
      $('#tgo').onclick = () => { if (s.phase === 'prep') beginTalk(); else endTalk(); };
      $('#tquit').onclick = () => { ST.stop(); session = null; A().render(); };
      return;
    }
    const st = talkStats(s.heard, s.spoke, t);
    box.innerHTML = `<div class="panel talk-rev"><p class="kicker">Your minute · ${t.level}</p><h2 lang="es">${esc(t.es)}</h2>
      <h3>What the microphone heard</h3><p class="muted small">Fix obvious recognition errors if you like (not your own mistakes: those are what you want to find).</p>
      <textarea id="ttext" rows="5" lang="es" placeholder="${C.dict ? 'Nothing was recognised. You can type roughly what you said.' : 'Optional: type roughly what you said.'}">${esc(s.heard)}</textarea>
      <div class="stats" id="tstats">${statsHtml(st, s.spoke, t)}</div>
      <details class="model"><summary>Model answer</summary><div class="reading small" lang="es">${esc(t.model)}</div></details>${C.canSpeak() ? '<button class="btn small" id="tmodel">▶ Listen to the model answer</button>' : ''}
      <h3>Mark yourself</h3>${selfBands('speaking', s.self)}
      <h3>My corrections</h3><p class="muted small">Compare with the model and the phrases. Write what you said and how it should be: each correction becomes a review card and a point in your mistake notebook.</p>${fxEditor('tfx', t.level)}
      ${C.ai.available() ? `<div class="row"><button class="btn" id="tai">Optional: AI feedback</button></div><div id="taiout"></div>` : `<p class="muted small">AI feedback is optional and off. <a href="#prefs">Set it up in Settings</a> if you want it.</p>`}
      <div class="foot"><button class="btn ghost" id="tagain">Try the topic again</button><button class="btn primary" id="tsave">Save this talk</button></div></div>`;
    bindBands(box, s.self); bindFx(box, t.level);
    const ta = $('#ttext'); ta.oninput = () => { $('#tstats').innerHTML = statsHtml(talkStats(ta.value, s.spoke, t), s.spoke, t); };
    const ml = $('#tmodel'); if (ml) ml.onclick = () => C.speak(t.model);
    $('#tagain').onclick = () => startTalk(t.id, false);
    const ai = $('#tai'); if (ai) ai.onclick = async () => {
      const text = ta.value.trim(); const out = $('#taiout');
      if (wc(text) < 5) { out.innerHTML = '<p class="muted">The tutor needs a transcript of at least a few words.</p>'; return; }
      ai.disabled = true; out.innerHTML = '<p class="muted">Listening to your minute…</p>';
      try { const st2 = talkStats(text, s.spoke, t); s.fb = await ST.aiFeedback({ skill: 'speaking', level: t.level, task: t.es + ' (' + t.en + ')', text, extra: `Spoken for ${s.spoke} seconds, about ${st2.wpm} words per minute.`, max: 3 }); out.innerHTML = fbHtml(s.fb, 'speaking', true); }
      catch (e) { out.innerHTML = `<p class="muted">${esc(C.ai.errText(e))}</p>`; ai.disabled = false; }
    };
    $('#tsave').onclick = () => {
      const text = ta.value.trim(), st2 = talkStats(text, s.spoke, t);
      const picked = s.fb && s.fb.corrections ? s.fb.corrections.filter((c, i) => { const cb = $(`[data-fxpick="${i}"]`, box); return !cb || cb.checked; }) : [];
      const manual = readFx(box, 'tfx');
      const rec = { id: uid(), ts: Date.now(), topic: t.id, level: t.level, sec: s.spoke, text: text.slice(0, 3000), words: st2.words, uniq: st2.uniq, wpm: st2.wpm, used: st2.used.length, self: Object.assign({}, s.self), ai: s.fb && !s.fb.raw ? { bands: s.fb.bands, summary: s.fb.summary, next: s.fb.next, comments: s.fb.comments } : null, fixes: picked.concat(manual).filter(realFix).map(f => ({ wrong: f.wrong, right: f.right, why: f.why, tag: f.tag })) };
      list('talks').unshift(rec); if (list('talks').length > 400) list('talks').length = 400;
      addTime((s.spoke || 60) + 120);
      const r = ST.addFixes(rec.fixes, 'talk', rec.id);
      C.save(); session = null; talkPick = null;
      C.toast(`Talk saved${r.n ? ` · ${r.n} correction${r.n > 1 ? 's' : ''}${r.cards ? `, ${r.cards} new review card${r.cards > 1 ? 's' : ''}` : ''}` : ''}.`);
      C.checkBadges && C.checkBadges(); A().render();
    };
  };
  const statsHtml = (st, sec, t) => `<span><b>${sec}</b> s spoken</span><span><b>${st.words}</b> words</span><span><b>${st.wpm || '–'}</b> words/min</span><span><b>${st.uniq}</b> different words</span><span><b>${st.used.length}</b>/${t.ph.length} useful phrases</span>`;
  const talkDetail = id => {
    const x = list('talks').find(r => r.id === id); if (!x) return '';
    const tp = ST.TALK[x.topic];
    return `<div class="panel"><p class="kicker">${fdate(x.ts)} · ${x.level} · ${x.sec || 0} s · ${x.words || 0} words · ${x.wpm || 0} words/min</p><h2 lang="es">${esc(tp ? tp.es : x.topic)}</h2>
      ${x.text ? `<div class="reading small" lang="es">${esc(x.text)}</div>` : '<p class="muted">No transcript.</p>'}
      <p>Bands: ${RUB('speaking').map(([k, n]) => `${esc(n)} <b>${bandsOf(x)[k] != null ? bandsOf(x)[k] : '–'}</b>`).join(' · ')} ${x.ai ? '<small class="muted">(AI)</small>' : '<small class="muted">(self-marked)</small>'}</p>
      ${x.ai && x.ai.summary ? `<p>${esc(x.ai.summary)}</p>` : ''}${x.ai && x.ai.next ? `<p><b>Next:</b> ${esc(x.ai.next)}</p>` : ''}
      ${x.fixes && x.fixes.length ? `<ul class="fxlist">${x.fixes.map(c => `<li><s lang="es">${esc(c.wrong)}</s> → <b lang="es">${esc(c.right)}</b>${c.why ? ` <span class="muted">· ${esc(c.why)}</span>` : ''}</li>`).join('')}</ul>` : ''}
      <div class="row"><button class="btn small" data-tagain="${esc(x.topic)}">Do this topic again</button><button class="btn small ghost" data-tback>Back</button></div></div>`;
  };

  // ======================================================================
  // 2. PRONUNCIATION
  // ======================================================================
  const pnorm = s => String(s || '').toLowerCase().replace(/[¿¡?!.,;:"«»“”…—–\-]/g, ' ').replace(/\s+/g, ' ').trim();
  const pronScore = id => S().pron && S().pron[id] || {};
  const pronHomeHtml = () => `<p class="lead">Short drills for the sounds that change meaning in Spanish. Listen and choose trains your ear and works everywhere; Say it uses the microphone (Chrome, Edge or Safari).</p>
    <div class="story-grid">${ST.PRON.map(p => { const sc = pronScore(p.id); return `<button class="story-card" data-pset="${p.id}"><span class="sc-k">${p.level} · ${esc(p.sound)}</span><b lang="es">${esc(p.title)}</b><span class="sc-m">${sc.listen != null ? 'Ear ' + sc.listen + '%' : ''}${sc.say != null ? (sc.listen != null ? ' · ' : '') + 'Say ' + sc.say + '%' : ''}${sc.listen == null && sc.say == null ? 'Not tried yet' : ''}</span></button>`; }).join('')}</div>`;
  const pronSetHtml = p => {
    const words = [].concat(...(p.groups || [])).concat(p.words || []);
    return `<p class="kicker"><button class="linkish" data-pback>Pronunciation</button> · ${esc(p.sound)}</p><h2 lang="es">${esc(p.title)}</h2>
      <div class="panel small"><p>${p.tips}</p></div>
      ${words.length ? `<h3>Listen</h3><div class="pwords" lang="es">${(p.groups || []).map(g => `<span class="pgroup">${g.map(w => `<button class="btn small pword" data-psay="${esc(w)}">${esc(w)}</button>`).join('')}</span>`).join('')}${(p.words || []).map(w => `<button class="btn small ghost pword" data-psay="${esc(w)}">${esc(w)}</button>`).join('')}</div><p class="muted small">Click a word to hear it at slow speed.</p>` : ''}
      ${p.twisters ? `<h3>Tongue twisters</h3><ol class="twl" lang="es">${p.twisters.map((tw, i) => `<li><span>${esc(tw)}</span> <button class="btn small ghost" data-psay="${esc(tw)}">▶ Slow</button>${C.dict ? ` <button class="btn small" data-ptw="${i}">🎙 Say it</button>` : ''}<div class="twout" id="tw${i}"></div></li>`).join('')}</ol>` : ''}
      <div class="row wrap">${p.groups && p.groups.length ? '<button class="btn primary" data-prun="listen">Listen and choose (10)</button>' : ''}${C.dict && words.length ? '<button class="btn" data-prun="say">Say it (10)</button>' : ''}</div>
      ${!C.dict ? '<p class="muted small">Say it needs speech recognition, which this browser does not offer. Listen and choose works here.</p>' : ''}`;
  };
  const savePron = (id, kind, pct) => {
    const P = S().pron = S().pron || {}; const r = P[id] = P[id] || {};
    r[kind] = Math.max(r[kind] || 0, pct); r.n = (r.n || 0) + 1; r.last = Date.now(); r.lastPct = pct; C.save();
  };
  const listenOnce = (heard, onText) => {
    if (!C.dict) return;
    let got = '';
    C.dictOn({ final: ({ text }) => { got = (got + ' ' + text).trim(); }, state: ({ state }) => { if (state !== 'listening') { C.dictOn({}); onText(got); } } });
    C.dict.start().catch(() => { C.dictOn({}); onText(null); });
  };
  const pronRunHtml = () => {
    const r = pr.run, p = ST.PRONS[pr.set];
    if (r.i >= r.items.length) {
      const pct = Math.round(r.score / r.items.length * 100);
      return `<div class="panel"><p class="kicker">${esc(p.title)} · ${r.kind === 'listen' ? 'Listen and choose' : 'Say it'}</p><h2>${r.score} / ${r.items.length}</h2><p>${pct >= 90 ? 'Excellent ear.' : pct >= 70 ? 'Good. Listen to the pairs again and try once more.' : 'This one takes practice. Listen to each pair slowly, then repeat.'}</p>
        ${r.misses.length ? `<p>To review: ${r.misses.map(w => `<button class="btn small ghost" data-psay="${esc(w)}" lang="es">${esc(w)}</button>`).join(' ')}</p>` : ''}
        <div class="row"><button class="btn primary" data-prun="${r.kind}">Again</button><button class="btn ghost" data-pdone>Back to the set</button></div></div>`;
    }
    const it = r.items[r.i];
    if (r.kind === 'listen') return `<div class="panel"><p class="kicker">${esc(p.title)} · ${r.i + 1}/${r.items.length}</p><h2>Which word do you hear?</h2>
      <div class="row"><button class="btn" data-preplay>▶ Play again</button><button class="btn ghost" data-pslow>▶ Slowly</button></div>
      <div class="opts" lang="es">${it.group.map(w => `<button class="opt" data-pans="${esc(w)}">${esc(w)}</button>`).join('')}</div><div class="pfb" id="pfb" aria-live="polite"></div></div>`;
    return `<div class="panel"><p class="kicker">${esc(p.title)} · ${r.i + 1}/${r.items.length}</p><h2>Say this word</h2><p class="big-word" lang="es">${esc(it.word)}</p>
      <div class="row"><button class="btn" data-psay="${esc(it.word)}">▶ Listen first</button><button class="btn primary" data-pmic>🎙 Say it</button><button class="btn ghost" data-pskip>Skip</button></div><div class="pfb" id="pfb" aria-live="polite">${it.tries ? `Try ${it.tries + 1} of 3` : ''}</div></div>`;
  };
  const startPron = kind => {
    const p = ST.PRONS[pr.set]; let items;
    if (kind === 'listen') { const gs = p.groups || []; items = Array.from({ length: 10 }, (_, k) => { const g = gs[k % gs.length]; return { group: g, word: g[Math.floor(Math.random() * g.length)] }; }); items = shuffle(items); }
    else { const ws = shuffle([].concat(...(p.groups || [])).concat(p.words || [])); items = Array.from({ length: Math.min(10, ws.length) }, (_, k) => ({ word: ws[k], tries: 0 })); }
    pr.run = { kind, items, i: 0, score: 0, misses: [] };
    renderPron();
    if (kind === 'listen') setTimeout(() => C.speak(items[0].word), 250);
  };
  const renderPron = () => {
    const box = $('#stbody'); if (!box) return;
    const p = pr && pr.set && ST.PRONS[pr.set];
    box.innerHTML = !p ? pronHomeHtml() : pr.run ? pronRunHtml() : pronSetHtml(p);
    bindPron(box);
  };
  const bindPron = box => {
    $$('[data-pset]', box).forEach(b => b.onclick = () => { pr = { set: b.dataset.pset, run: null }; renderPron(); });
    $$('[data-pback]', box).forEach(b => b.onclick = () => { pr = null; renderPron(); });
    $$('[data-psay]', box).forEach(b => b.onclick = () => C.speak(b.dataset.psay, { slow: true }));
    $$('[data-prun]', box).forEach(b => b.onclick = () => startPron(b.dataset.prun));
    $$('[data-pdone]', box).forEach(b => b.onclick = () => { pr.run = null; renderPron(); });
    const r = pr && pr.run; if (!r || r.i >= r.items.length) {
      if (r && r.i >= r.items.length && !r.saved) { r.saved = true; savePron(pr.set, r.kind, Math.round(r.score / r.items.length * 100)); }
      $$('[data-ptw]', box).forEach(b => b.onclick = () => twister(+b.dataset.ptw, b));
      return;
    }
    const it = r.items[r.i];
    const next = () => { r.i++; renderPron(); if (r.kind === 'listen' && r.i < r.items.length) setTimeout(() => C.speak(r.items[r.i].word), 300); };
    if (r.kind === 'listen') {
      $('[data-preplay]', box).onclick = () => C.speak(it.word);
      $('[data-pslow]', box).onclick = () => C.speak(it.word, { slow: true });
      $$('[data-pans]', box).forEach(b => b.onclick = () => {
        const ok = b.dataset.pans === it.word; if (ok) r.score++; else r.misses.push(it.word);
        $$('[data-pans]', box).forEach(x => { x.disabled = true; if (x.dataset.pans === it.word) x.classList.add('right'); else if (x === b) x.classList.add('wrong'); });
        $('#pfb', box).innerHTML = `${ok ? '✓ Right.' : `✗ It was <b lang="es">${esc(it.word)}</b>.`} ${it.group.map(w => `<button class="btn small ghost" data-psay2="${esc(w)}" lang="es">▶ ${esc(w)}</button>`).join(' ')} <button class="btn small primary" data-pnext>Next</button>`;
        $$('[data-psay2]', box).forEach(x => x.onclick = () => C.speak(x.dataset.psay2, { slow: true }));
        $('[data-pnext]', box).onclick = next; $('[data-pnext]', box).focus();
      });
    } else {
      $('[data-pskip]', box).onclick = () => { r.misses.push(it.word); next(); };
      $('[data-pmic]', box).onclick = e => {
        const b = e.currentTarget; b.disabled = true; b.textContent = 'Listening…';
        listenOnce(true, heard => {
          const fb = $('#pfb'); if (!fb || !pr || pr.run !== r) return;
          b.disabled = false; b.textContent = '🎙 Say it';
          if (heard == null) { fb.textContent = 'Microphone not available.'; return; }
          const toks = pnorm(heard).split(' '), target = pnorm(it.word);
          const ok = toks.includes(target) || pnorm(heard) === target;
          if (ok) { r.score++; fb.innerHTML = `✓ Heard «<b lang="es">${esc(heard)}</b>». <button class="btn small primary" data-pnext>Next</button>`; }
          else { it.tries++; fb.innerHTML = `✗ The microphone heard «<b lang="es">${esc(heard || '…')}</b>». ${it.tries >= 3 ? `<button class="btn small primary" data-pnext>Next</button>` : 'Listen and try again.'}`; if (it.tries >= 3) r.misses.push(it.word); }
          const nb = $('[data-pnext]'); if (nb) nb.onclick = next;
        });
      };
    }
  };
  const twister = (i, btn) => {
    const p = ST.PRONS[pr.set], tw = p.twisters[i], out = $('#tw' + i); if (!out) return;
    btn.disabled = true; out.textContent = 'Listening… say the whole phrase.';
    listenOnce(true, heard => {
      btn.disabled = false; if (!$('#tw' + i)) return;
      if (heard == null) { out.textContent = 'Microphone not available.'; return; }
      const pool = pnorm(heard).split(' ').filter(Boolean), want = pnorm(tw).split(' ').filter(Boolean);
      const bag = {}; pool.forEach(w => { bag[w] = (bag[w] || 0) + 1; });
      let ok = 0; const marks = want.map(w => { const hit = bag[w] > 0; if (hit) { bag[w]--; ok++; } return `<span class="tw-w ${hit ? 'ok' : 'miss'}">${esc(w)}</span>`; });
      const pct = Math.round(ok / want.length * 100);
      out.innerHTML = `<div lang="es">${marks.join(' ')}</div><small class="muted">${pct}% of the words recognised${pct === 100 ? ' · ¡perfecto!' : ''}</small>`;
      savePron(p.id, 'say', pct);
    });
  };

  // ======================================================================
  // 3. DELE ORAL TASKS AND TUTOR MODES
  // ======================================================================
  const oralHtml = () => {
    const li = LV.indexOf(lvl());
    const mocks = (C.MOCKS || []).filter(m => m.papers && m.papers.speaking && Math.abs(LV.indexOf(m.level) - li) <= 1);
    const ai = C.ai.available();
    return `<p class="lead">Exam-style speaking: the monologue, the conversation about a picture or situation and the negotiation, timed as in the DELE. You get preparation time, then speak; the microphone takes notes and you mark yourself against the criteria and a model answer.</p>
      ${mocks.length ? mocks.map(m => `<div class="panel small"><b>${esc(m.title)}</b> <small class="muted">${m.level}</small><ul class="tasks">${m.papers.speaking.tasks.map((t, i) => `<li><span>${esc(t.title)} <small class="muted">· ${t.prep || 1} min preparation · ${t.talk || 2} min speaking</small></span><button class="btn small" data-oral="${m.id}" data-i="${i}">Practise</button></li>`).join('')}</ul></div>`).join('') : '<p class="muted">No speaking tasks at your level yet.</p>'}
      <h3>Conversation practice with the tutor${ai ? '' : ' (needs AI)'}</h3>
      <p class="muted">${ai ? 'Each mode ends with feedback on the criteria and corrections you can add to your review.' : 'These modes use the AI tutor, which is optional. The talks, pronunciation drills and portfolio above work without it.'}</p>
      <div class="story-grid">${TUTOR_MODES.map(([k, n, d]) => `<a class="story-card" href="#tutor" data-tmode="${k}"><span class="sc-k">Tutor</span><b>${esc(n)}</b><span class="sc-s">${esc(d)}</span></a>`).join('')}</div>`;
  };
  const TUTOR_MODES = [
    ['debate', 'Debate partner', 'Pick a motion; the tutor argues the other side (best from B2).'],
    ['interview', 'Job interview', 'A formal interview with usted, one question at a time.'],
    ['phone', 'Phone call', 'Call a doctor\'s surgery, a landlord or a restaurant: no gestures to help you.'],
    ['retell', 'Explain it back', 'Retell a story from the Library in your own words, then answer questions.']
  ];
  ST.TUTOR_MODES = TUTOR_MODES;

  // ======================================================================
  // 4. WRITING PORTFOLIO
  // ======================================================================
  const entries = () => list('portfolio');
  const entryBy = id => entries().find(e => e.id === id);
  const upsert = e => { const L = entries(), i = L.findIndex(x => x.id === e.id); if (i >= 0) L[i] = e; else L.unshift(e); };
  const taskText = e => e.task || (ST.WTASK[e.taskId] ? ST.WTASK[e.taskId].t.es : '');
  const writeHomeHtml = () => {
    const lv = lvl(), L = entries(), finals = L.filter(e => e.status === 'final'), drafts = L.filter(e => e.status === 'draft');
    const stage = Object.entries(S().writing || {}).filter(([, w]) => w && w.text);
    return `<p class="lead">Write one text a week in the text type of your level. Each type has a checklist, useful phrases and a model. You mark yourself on the DELE criteria (task, coherence, accuracy, range) and write down your corrections; AI marking is optional. Every text is kept here, so you can see your writing improve.</p>
      ${drafts.length ? `<h3>Drafts</h3><ul class="talklog">${drafts.map(e => `<li><button class="linkish" data-wcont="${e.id}">${esc((ST.WTYPE[e.type] || {}).title || 'Text')} · <span lang="es">${esc(taskText(e).slice(0, 90))}</span></button> <small class="muted">${e.words || 0} words · ${fdate(e.ts)}</small> <button class="btn small ghost" data-wdel="${e.id}">Delete</button></li>`).join('')}</ul>` : ''}
      <h3>Portfolio</h3>${finals.length ? `<table class="ptab"><thead><tr><th>Date</th><th>Type</th><th>Task</th><th>Words</th><th>Bands</th></tr></thead><tbody>${finals.map(e => `<tr><td>${fdate(e.created || e.ts)}</td><td>${esc((ST.WTYPE[e.type] || {}).title || 'Free')} <small class="muted">${e.level}</small>${e.version > 1 ? ` <small class="muted">v${e.version}</small>` : ''}</td><td><button class="linkish" data-wview="${e.id}" lang="es">${esc(taskText(e).slice(0, 70))}</button></td><td>${e.words}</td><td>${bandSum(bandsOf(e), 'writing')}${e.ai ? ' <small class="muted">AI</small>' : ''}</td></tr>`).join('')}</tbody></table>` : '<p class="muted">No texts yet. Choose a text type below.</p>'}
      <h3>Write a new text</h3><div class="story-grid">${ST.WTYPES.map(w => `<button class="story-card ${w.level === lv ? 'here' : ''}" data-wtype="${w.id}"><span class="sc-k">${w.level}${w.level === lv ? ' · your level' : ''}</span><b>${esc(w.title)}</b><span class="sc-s">${esc(w.en)} · ${w.words[0]}–${w.words[1]} words</span><span class="sc-m">${w.tasks.length} tasks · ${finals.filter(e => e.type === w.id).length} written</span></button>`).join('')}</div>
      ${stage.length ? `<h3>From the stages</h3><p class="muted small">Short texts you wrote in the Write step of each stage.</p><ul class="talklog">${stage.map(([uid2, w]) => { const u = C.UNIT && C.UNIT[uid2]; return `<li><a href="#unit-${esc(uid2)}">${esc(u ? u.title : uid2)}</a> <small class="muted">${wc(w.text)} words${w.ts ? ' · ' + fdate(w.ts) : ''}${w.fb ? ' · AI feedback' : ''}</small></li>`; }).join('')}</ul>` : ''}`;
  };
  const typeHtml = w => `<p class="kicker"><button class="linkish" data-wback>Writing</button> · ${w.level}</p><h2>${esc(w.title)} <small class="muted">${esc(w.en)}</small></h2>
    <p>${w.words[0]}–${w.words[1]} words.</p>
    <div class="two"><div><h3>Checklist</h3><ul class="checklist">${w.checklist.map(c => `<li lang="es">${esc(c)}</li>`).join('')}</ul></div><div><h3>Useful phrases</h3><ul class="phrases" lang="es">${w.phrases.map(p => `<li>${esc(p)}</li>`).join('')}</ul></div></div>
    <details class="model"><summary>Model text: ${esc(w.model.task)}</summary><div class="reading small" lang="es">${esc(w.model.text).replace(/\n/g, '<br>')}</div></details>
    <h3>Tasks</h3><ul class="tasks">${w.tasks.map(t => { const n = entries().filter(e => e.taskId === t.id && e.status === 'final').length; return `<li><span lang="es">${esc(t.es)}${n ? ` <small class="muted">✓ ${n}×</small>` : ''}</span><button class="btn small primary" data-wtask="${t.id}">Write</button></li>`; }).join('')}
      <li><span>Your own topic, in this text type</span><button class="btn small" data-wfree="${w.id}">Write</button></li></ul>`;
  const editorHtml = d => {
    const w = ST.WTYPE[d.type], n = wc(d.text), [lo, hi] = w ? w.words : [0, 0];
    return `<p class="kicker"><button class="linkish" data-wclose>Writing</button> · ${w ? esc(w.title) + ' · ' + w.level : 'Free text'}${d.version > 1 ? ' · version ' + d.version : ''}</p>
      ${d.taskId || d.task ? `<div class="instr-box" lang="es">${esc(taskText(d))}${d.points && d.points.length ? `<ul>${d.points.map(p => `<li>${esc(p)}</li>`).join('')}</ul>` : ''}</div>` : `<label class="lbl">Your topic <input id="wtopic" lang="es" value="${esc(d.task || '')}" placeholder="¿Sobre qué escribes?"></label>`}
      <textarea id="wtx" rows="14" lang="es" spellcheck="false" placeholder="Escribe aquí…">${esc(d.text)}</textarea>
      <div class="foot"><span class="muted" id="wcnt">${n} words${lo ? ` · aim for ${lo}–${hi}` : ''}</span><span class="muted small" id="wsaved">${d.ts ? 'Draft saved' : ''}</span><button class="btn ghost" data-wclose>Save draft and close</button><button class="btn primary" id="wfin">Finish and review</button></div>
      ${w ? `<details><summary>Checklist and phrases</summary><div class="two"><ul class="checklist">${w.checklist.map(c => `<li lang="es">${esc(c)}</li>`).join('')}</ul><ul class="phrases" lang="es">${w.phrases.map(p => `<li>${esc(p)}</li>`).join('')}</ul></div></details>` : ''}`;
  };
  const reviewHtml = d => {
    const w = ST.WTYPE[d.type];
    return `<p class="kicker">Review · ${w ? esc(w.title) + ' · ' + w.level : 'Free text'}</p><h2>Check your text</h2>
      <div class="instr-box small" lang="es">${esc(taskText(d))}</div>
      <div class="reading small" lang="es">${esc(d.text).replace(/\n/g, '<br>')}</div><p class="muted">${wc(d.text)} words${w ? ` (aim: ${w.words[0]}–${w.words[1]})` : ''}</p>
      ${w ? `<h3>Checklist: tick what your text does</h3><ul class="checks">${w.checklist.map((c, i) => `<li><label class="chk"><input type="checkbox" data-wchk="${i}" ${review.checks.includes(i) ? 'checked' : ''}> <span lang="es">${esc(c)}</span></label></li>`).join('')}</ul>
        <details class="model"><summary>Compare with the model</summary><div class="reading small" lang="es">${esc(w.model.text).replace(/\n/g, '<br>')}</div></details>` : ''}
      <h3>Mark yourself</h3>${selfBands('writing', review.self)}
      <h3>My corrections</h3><p class="muted small">Reread slowly: verb endings, gender, accents, ser/estar, por/para. Write each mistake and its correction.</p>${fxEditor('wfx', d.level)}
      ${C.ai.available() ? `<div class="row"><button class="btn" id="wai">Optional: AI marking</button></div><div id="waiout">${review.fb ? fbHtml(review.fb, 'writing', true) : ''}</div>` : '<p class="muted small">AI marking is optional and off.</p>'}
      <div class="foot"><button class="btn ghost" id="wedit">Back to the text</button><button class="btn primary" id="wsave">Save to portfolio</button></div>`;
  };
  const entryHtml = e => {
    const w = ST.WTYPE[e.type], b = bandsOf(e);
    return `<p class="kicker"><button class="linkish" data-wback>Writing</button> · ${fdate(e.created || e.ts)} · ${w ? esc(w.title) : 'Free'} · ${e.level}${e.version > 1 ? ' · version ' + e.version : ''}</p>
      <div class="instr-box small" lang="es">${esc(taskText(e))}</div>
      <div class="reading" lang="es">${esc(e.text).replace(/\n/g, '<br>')}</div><p class="muted">${e.words} words</p>
      <table class="bandtab"><tbody>${RUB('writing').map(([k, n]) => `<tr><th>${esc(n)}</th><td>${b[k] != null ? `<span class="bandpill b${b[k]}">${b[k]} · ${BANDN[b[k]]}</span>` : '–'}</td><td>${esc(((e.ai || {}).comments || {})[k] || '')}</td></tr>`).join('')}</tbody></table>
      <p class="muted small">${e.ai ? 'Bands from the AI marker' + (e.self && Object.keys(e.self).length ? '; your own marks: ' + bandSum(e.self, 'writing') : '') : 'Self-marked'}.</p>
      ${e.ai && e.ai.summary ? `<p>${esc(e.ai.summary)}</p>` : ''}${e.ai && e.ai.next ? `<p><b>Next:</b> ${esc(e.ai.next)}</p>` : ''}
      ${e.fixes && e.fixes.length ? `<h3>Corrections</h3><ul class="fxlist">${e.fixes.map(c => `<li><s lang="es">${esc(c.wrong)}</s> → <b lang="es">${esc(c.right)}</b>${c.why ? ` <span class="muted">· ${esc(c.why)}</span>` : ''}${c.tag ? ` <small class="tagchip">${esc(c.tag)}</small>` : ''}</li>`).join('')}</ul>` : ''}
      ${versionsHtml(e)}
      <div class="row wrap"><button class="btn primary" data-wrewrite="${e.id}">Rewrite (new version)</button><button class="btn ghost" data-wdel="${e.id}">Delete</button><button class="btn ghost" data-wback>Back</button></div>`;
  };
  const versionsHtml = e => {
    const root = e.parent || e.id;
    const fam = entries().filter(x => x.status === 'final' && (x.id === root || x.parent === root)).sort((a, b) => (a.version || 1) - (b.version || 1));
    if (fam.length < 2) return '';
    return `<h3>Versions</h3><ul class="talklog">${fam.map(x => `<li>${x.id === e.id ? '<b>' : `<button class="linkish" data-wview="${x.id}">`}Version ${x.version || 1} · ${fdate(x.ts)} · ${x.words} words · ${bandSum(bandsOf(x), 'writing')}${x.id === e.id ? '</b>' : '</button>'}</li>`).join('')}</ul>`;
  };
  const newDraft = (typeId, taskId, extra = {}) => {
    const w = ST.WTYPE[typeId], tk = taskId && ST.WTASK[taskId] ? ST.WTASK[taskId].t : null;
    return Object.assign({ id: uid(), created: Date.now(), ts: 0, status: 'draft', type: typeId || '', taskId: taskId || '', task: tk ? tk.es : '', points: tk ? tk.points : [], level: w ? w.level : lvl(), text: '', words: 0, sec: 0, version: 1, parent: '', open: true }, extra);
  };
  const saveDraft = () => {
    if (!draft) return; const ta = $('#wtx'); if (ta) draft.text = ta.value; const tp = $('#wtopic'); if (tp) draft.task = tp.value;
    if (draft.t0) { draft.sec = (draft.sec || 0) + Math.round((Date.now() - draft.t0) / 1000); draft.t0 = Date.now(); }
    draft.words = wc(draft.text);
    if (!draft.text.trim() && !draft.ts) return;
    draft.ts = Date.now();
    const e = Object.assign({}, draft); delete e.open; delete e.t0; upsert(e); C.save();
    const m = $('#wsaved'); if (m) m.textContent = 'Draft saved';
  };
  const renderWrite = () => {
    const box = $('#stbody'); if (!box) return;
    if (review && draft) box.innerHTML = reviewHtml(draft);
    else if (draft && draft.open) box.innerHTML = editorHtml(draft);
    else if (wv.v === 'type' && ST.WTYPE[wv.id]) box.innerHTML = typeHtml(ST.WTYPE[wv.id]);
    else if (wv.v === 'entry' && entryBy(wv.id) && entryBy(wv.id).status === 'final') box.innerHTML = entryHtml(entryBy(wv.id));
    else { wv = { v: 'home' }; box.innerHTML = writeHomeHtml(); }
    bindWrite(box);
  };
  const bindWrite = box => {
    $$('[data-wtype]', box).forEach(b => b.onclick = () => { wv = { v: 'type', id: b.dataset.wtype }; renderWrite(); scrollTo(0, 0); });
    $$('[data-wback]', box).forEach(b => b.onclick = () => { wv = { v: 'home' }; renderWrite(); });
    $$('[data-wview]', box).forEach(b => b.onclick = () => { wv = { v: 'entry', id: b.dataset.wview }; renderWrite(); scrollTo(0, 0); });
    $$('[data-wtask]', box).forEach(b => b.onclick = () => { const x = ST.WTASK[b.dataset.wtask]; draft = newDraft(x.w.id, x.t.id, { t0: Date.now() }); renderWrite(); });
    $$('[data-wfree]', box).forEach(b => b.onclick = () => { draft = newDraft(b.dataset.wfree, '', { t0: Date.now() }); renderWrite(); });
    $$('[data-wcont]', box).forEach(b => b.onclick = () => { const e = entryBy(b.dataset.wcont); if (!e) return; draft = Object.assign({}, e, { open: true, t0: Date.now() }); renderWrite(); });
    $$('[data-wrewrite]', box).forEach(b => b.onclick = () => {
      const e = entryBy(b.dataset.wrewrite); if (!e) return;
      const root = e.parent || e.id, v = Math.max(...entries().filter(x => x.id === root || x.parent === root).map(x => x.version || 1)) + 1;
      draft = newDraft(e.type, e.taskId, { task: e.task, points: e.points || [], level: e.level, text: e.text, parent: root, version: v, t0: Date.now() }); renderWrite(); scrollTo(0, 0);
    });
    $$('[data-wdel]', box).forEach(b => b.onclick = () => {
      if (b.dataset.sure !== '1') { b.dataset.sure = '1'; b.textContent = 'Click again to delete'; b.classList.add('danger'); return; }
      const e = entryBy(b.dataset.wdel); if (e) { e.status = 'deleted'; e.text = ''; e.fixes = []; e.ts = Date.now(); }
      C.save(); wv = { v: 'home' }; A().render();
    });
    const ta = $('#wtx', box);
    if (ta) {
      const w = ST.WTYPE[draft.type], [lo, hi] = w ? w.words : [0, 0];
      ta.oninput = () => { const n = wc(ta.value); $('#wcnt').textContent = n + ' words' + (lo ? ` · aim for ${lo}–${hi}` : ''); $('#wsaved').textContent = ''; clearTimeout(saveT); saveT = setTimeout(saveDraft, 900); };
      $$('[data-wclose]', box).forEach(b => b.onclick = () => { saveDraft(); draft = null; wv = { v: 'home' }; renderWrite(); });
      $('#wfin', box).onclick = () => {
        saveDraft();
        if (wc(draft.text) < 15) { C.toast('Write a little more first (at least 15 words).'); return; }
        if (!draft.task && !draft.taskId) { C.toast('Add your topic at the top.'); return; }
        review = { self: {}, checks: [], fb: null }; renderWrite(); scrollTo(0, 0);
      };
      ta.focus();
    }
    if (review && draft) {
      bindBands(box, review.self); bindFx(box, draft.level);
      $$('[data-wchk]', box).forEach(c => c.onchange = () => { const i = +c.dataset.wchk; review.checks = review.checks.filter(x => x !== i); if (c.checked) review.checks.push(i); });
      $('#wedit', box).onclick = () => { review = null; draft.open = true; draft.t0 = Date.now(); renderWrite(); };
      const ai = $('#wai', box); if (ai) ai.onclick = async () => {
        const w = ST.WTYPE[draft.type], out = $('#waiout'); ai.disabled = true; out.innerHTML = '<p class="muted">Marking your text…</p>';
        try { review.fb = await ST.aiFeedback({ skill: 'writing', level: draft.level, task: taskText(draft) + (draft.points && draft.points.length ? ' Points to cover: ' + draft.points.join('; ') + '.' : ''), text: draft.text, extra: w ? `Text type: ${w.title} (${w.en}), ${w.words[0]}–${w.words[1]} words. The text has ${wc(draft.text)} words.` : '', max: 8 }); out.innerHTML = fbHtml(review.fb, 'writing', true); }
        catch (e) { out.innerHTML = `<p class="muted">${esc(C.ai.errText(e))}</p>`; ai.disabled = false; }
      };
      $('#wsave', box).onclick = () => {
        const fb = review.fb && !review.fb.raw ? review.fb : null;
        const picked = fb ? fb.corrections.filter((c, i) => { const cb = $(`[data-fxpick="${i}"]`, box); return !cb || cb.checked; }) : [];
        const fixes = picked.concat(readFx(box, 'wfx')).filter(realFix).map(f => ({ wrong: f.wrong, right: f.right, why: f.why, tag: f.tag }));
        const e = Object.assign({}, draft, { status: 'final', ts: Date.now(), words: wc(draft.text), self: Object.assign({}, review.self), checks: review.checks.slice(), ai: fb ? { bands: fb.bands, comments: fb.comments, summary: fb.summary, next: fb.next } : null, fixes });
        delete e.open; delete e.t0;
        upsert(e); addTime(Math.min(e.sec || 0, 3600));
        const r = ST.addFixes(fixes, 'write', e.id);
        C.save(); draft = null; review = null; wv = { v: 'entry', id: e.id };
        C.toast(`Saved to your portfolio${r.n ? ` · ${r.n} correction${r.n > 1 ? 's' : ''} to your notebook` : ''}.`);
        C.checkBadges && C.checkBadges(); A().render(); scrollTo(0, 0);
      };
    }
  };

  // ======================================================================
  // PAGE
  // ======================================================================
  const TABS = [['hablar', 'Daily talk'], ['pron', 'Pronunciation'], ['escribir', 'Writing portfolio'], ['oral', 'Exam speaking & tutor']];
  ST.view = () => {
    ST.stop(); session = null;
    if (draft && draft.open && tab !== 'escribir') { saveDraft(); draft = null; review = null; }
    return `<section class="band story-head"><h1>Hablar y escribir</h1>${summaryHtml()}
      <div class="seg libtabs" role="tablist">${TABS.map(([k, n]) => `<button class="${k === tab ? 'on' : ''}" data-sttab="${k}">${n}</button>`).join('')}</div></section>
      <section class="band" id="stbody">${tab === 'hablar' ? talkTabHtml() : tab === 'pron' ? (pr && pr.set ? '' : pronHomeHtml()) : tab === 'escribir' ? '' : oralHtml()}</section>`;
  };
  ST.bind = () => {
    const main = $('#main');
    $$('[data-sttab]', main).forEach(b => b.onclick = () => { if (draft && draft.open) { saveDraft(); draft = null; } review = null; pr = null; tab = b.dataset.sttab; A().render(); });
    const box = $('#stbody'); if (!box) return;
    if (tab === 'hablar') {
      $$('[data-tlv]', box).forEach(b => b.onclick = () => { talkLv = b.dataset.tlv; talkPick = null; A().render(); });
      const st = $('#tstart', box); if (st) st.onclick = () => startTalk(st.dataset.t, true);
      const nw = $('#tnow', box); if (nw) nw.onclick = () => startTalk(nw.dataset.t, false);
      const ot = $('#tother', box); if (ot) ot.onclick = () => { const lv = talkLv || lvl(), pool = ST.TALKS.filter(x => x.level === lv), cur = (talkPick && ST.TALK[talkPick]) || ST.todayTopic(lv); const rest = pool.filter(x => x !== cur); const minN = Math.min(...rest.map(x => timesDone(x.id))); const c = rest.filter(x => timesDone(x.id) === minN); talkPick = c[Math.floor(Math.random() * c.length)].id; A().render(); };
      $$('[data-tpick]', box).forEach(b => b.onclick = () => { talkPick = b.dataset.tpick; A().render(); scrollTo(0, 0); });
      $$('[data-tview]', box).forEach(b => b.onclick = () => { box.innerHTML = talkDetail(b.dataset.tview); bindDetail(box); scrollTo(0, box.offsetTop - 20); });
      bindFixButtons(box);
    } else if (tab === 'pron') renderPron();
    else if (tab === 'escribir') renderWrite();
    else {
      $$('[data-oral]', box).forEach(b => b.onclick = () => { const m = C.MOCK[b.dataset.oral]; if (m && G.EXAMS) G.EXAMS.practiseTask(m, 'speaking', +b.dataset.i); });
      $$('[data-tmode]', box).forEach(a => a.onclick = () => { A().tutorMode = a.dataset.tmode; });
    }
  };
  const bindDetail = box => {
    $$('[data-tback]', box).forEach(b => b.onclick = () => A().render());
    $$('[data-tagain]', box).forEach(b => b.onclick = () => startTalk(b.dataset.tagain, true));
  };
  const bindFixButtons = box => {
    const l = $('[data-fixlearn]', box); if (l) l.onclick = () => A().learn(fixSrc(), 'My corrections');
    const p = $('[data-fixprac]', box); if (p) p.onclick = () => EX.run({ title: 'Practice · My corrections', items: EX.wordPractice(ST.fixIds().filter(C.has), 20), onDone: () => A().render() });
  };
  ST.todayLine = () => {
    const t = ST.todayTopic(); if (!t) return '';
    const s = ST.summary();
    return `<p class="note studio-today">🎙 <b>${s.today ? 'Today\'s talk done ✓' : 'Today\'s one-minute talk'}:</b> <a href="#studio" lang="es">${esc(t.es)}</a> · ${s.talks}/${GOAL_TALKS} talks · ${s.texts}/${GOAL_TEXTS} portfolio texts</p>`;
  };
})(window);
