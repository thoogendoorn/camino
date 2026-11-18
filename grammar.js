/* Camino — "rule first": grammar reference, rule sheet, form notes and what-has-been-taught tracking.
   Every exercise can show the rule it practises; new forms are explained before they are asked for. */
(function (G) {
  'use strict';
  const { $, $$, esc } = C;
  const GR = G.GRAM = {};
  const V = () => G.Verbs;

  // ---------- the verb tenses explained (shown before a tense is drilled) ----------
  GR.TENSES = {
    pres: { use: 'What happens now, habits and general truths, and (with a time word) the near future: <i>Trabajo en Madrid. Los sábados juego al tenis. Mañana voy al cine.</i>',
      form: 'Remove -ar/-er/-ir and add the endings below. Many common verbs change their stem in the stressed forms (all but nosotros and vosotros): <i>e→ie</i> (quiero), <i>o→ue</i> (puedo), <i>e→i</i> (pido). A few have an irregular yo form: <i>hago, tengo, salgo, conozco</i>. Fully irregular: <i>ser, estar, ir, haber</i>.' },
    pperf: { use: 'Finished actions inside a period that is still open (hoy, esta semana, este año, nunca, ya, todavía no), and life experience: <i>Hoy he comido paella. ¿Has estado en Sevilla?</i> This is the normal past for «today» in Spain.',
      form: '<b>haber</b> in the present (he, has, ha, hemos, habéis, han) + the participle: <i>-ar → -ado, -er/-ir → -ido</i>. Irregular participles: <i>hecho, dicho, visto, escrito, puesto, vuelto, abierto, roto, muerto</i>.' },
    indef: { use: 'Completed events at a finished time (ayer, el lunes, en 2019, hace dos años): <i>Ayer comí con Ana. En 2019 viví en Lisboa.</i> It moves a story forward.',
      form: '-ar: <i>-é, -aste, -ó, -amos, -asteis, -aron</i>; -er/-ir: <i>-í, -iste, -ió, -imos, -isteis, -ieron</i>. Strong irregular stems take unstressed endings: <i>tuve, estuve, hice, quise, pude, puse, vine, dije</i>. <i>ser</i> and <i>ir</i> share <i>fui, fuiste, fue…</i>' },
    impf: { use: 'Background, descriptions and habits in the past: <i>Cuando era niño, vivía en un pueblo. Hacía sol y la gente paseaba.</i> It sets the scene; the indefinido tells what happened.',
      form: '-ar: <i>-aba, -abas, -aba, -ábamos, -abais, -aban</i>; -er/-ir: <i>-ía, -ías, -ía, -íamos, -íais, -ían</i>. Only three irregulars: <i>ser (era), ir (iba), ver (veía)</i>.' },
    fut: { use: 'Future plans and predictions, and guesses about the present: <i>Mañana lloverá. ¿Dónde estará Juan?</i> (I wonder where Juan is). In speech, <i>ir a + infinitive</i> is more common for plans.',
      form: 'Add <i>-é, -ás, -á, -emos, -éis, -án</i> to the whole infinitive: <i>hablaré, comeré, viviré</i>. Irregular stems: <i>tendr-, saldr-, podr-, pondr-, vendr-, sabr-, querr-, har-, dir-, habr-, cabr-</i>.' },
    cond: { use: 'What would happen, polite requests and advice: <i>Me gustaría un café. Yo que tú, hablaría con ella.</i> Also guesses about the past: <i>Serían las diez.</i>',
      form: 'Add <i>-ía, -ías, -ía, -íamos, -íais, -ían</i> to the infinitive. Same irregular stems as the future: <i>tendría, haría, diría, podría</i>.' },
    imp: { use: 'Commands, instructions and invitations: <i>Habla más despacio. Pase, por favor. Escuchad.</i> Classroom phrases like <i>Lee el texto</i> and <i>Escribe tu nombre</i> use it.',
      form: '<b>tú</b> = the él form of the present: <i>habla, come, escribe</i> (irregular: <i>ten, ven, pon, sal, haz, di, ve, sé</i>). <b>vosotros</b> = infinitive with -d: <i>hablad</i>. <b>usted/ustedes/nosotros</b> = present subjunctive: <i>hable, hablen, hablemos</i>. Pronouns attach to the end: <i>siéntate, dímelo</i>.' },
    impneg: { use: 'Telling someone not to do something: <i>No hables tan alto. No toquéis eso.</i>',
      form: '<i>no</i> + the present subjunctive for every person: <i>no hables, no hable, no habléis, no hablen</i>. Pronouns go before the verb: <i>no te sientes, no me lo digas</i>.' },
    subj: { use: 'After wishes, emotions, doubt, purpose and many conjunctions when something is not (yet) a fact: <i>Quiero que vengas. Me alegra que estés aquí. Cuando llegues, llámame. Para que lo entiendas…</i>',
      form: 'Take the yo form of the present, drop -o and swap the vowel: -ar verbs take <i>-e</i> (hable), -er/-ir verbs take <i>-a</i> (coma, viva). So irregular yo forms carry over: <i>tengo → tenga, hago → haga</i>. Irregular: <i>sea, esté, vaya, haya, sepa, dé</i>.' },
    plusc: { use: 'An action that happened before another past action: <i>Cuando llegué, la película ya había empezado.</i>',
      form: '<b>haber</b> in the imperfect (había, habías, había, habíamos, habíais, habían) + participle: <i>había hablado</i>.' },
    impsubj: { use: 'The past of the subjunctive (after a past trigger: <i>Quería que vinieras</i>) and unreal conditions: <i>Si tuviera tiempo, viajaría.</i> Also <i>como si</i>: <i>Habla como si lo supiera todo.</i>',
      form: 'Take the ellos form of the indefinido, drop -ron and add <i>-ra, -ras, -ra, -ramos, -rais, -ran</i> (or the -se forms: <i>-se, -ses…</i>): <i>hablaron → hablara, tuvieron → tuviera</i>. The nosotros form takes an accent: <i>habláramos</i>.' },
    pperfsubj: { use: 'A completed action where the subjunctive is needed: <i>Me alegra que hayas venido. Espero que haya llegado bien.</i>',
      form: '<b>haber</b> in the present subjunctive (haya, hayas, haya, hayamos, hayáis, hayan) + participle.' },
    condperf: { use: 'What would have happened: <i>Yo no lo habría hecho. Con más tiempo, habríamos terminado.</i>',
      form: '<b>haber</b> in the conditional (habría, habrías…) + participle.' },
    pluscsubj: { use: 'Unreal past conditions and regrets: <i>Si lo hubiera sabido, no habría venido. Ojalá me lo hubieras dicho.</i>',
      form: '<b>haber</b> in the imperfect subjunctive (hubiera, hubieras… or hubiese…) + participle.' },
    futperf: { use: 'What will have happened by a point in the future, and guesses about the recent past: <i>Para junio habré terminado. Se habrá quedado dormido.</i>',
      form: '<b>haber</b> in the future (habré, habrás…) + participle.' }
  };
  const PL_IMP = ['—', 'tú', 'usted', 'nosotros', 'vosotros', 'ustedes'];
  const pers = (t, p) => (t === 'imp' || t === 'impneg' ? PL_IMP : V().PERS)[p];
  const tense = id => V().TENSES.find(t => t.id === id);

  // ---------- which stage teaches what ----------
  let TEACH = null;
  GR.teach = () => {
    if (TEACH) return TEACH; TEACH = {};
    C.UNITS.forEach(u => { if (u.conj && !TEACH[u.conj.t]) TEACH[u.conj.t] = u; });
    if (TEACH.imp && !TEACH.impneg) TEACH.impneg = TEACH.imp;
    // tenses without a model-verb table: the first stage whose explanation shows a sample form
    for (const t of V().TENSES) if (!TEACH[t.id]) {
      let sample = ''; try { sample = (V().conj('hablar', t.id)[2] || '').split(' ')[0]; } catch (e) { }
      const re = new RegExp(esc(t.es), 'i');
      TEACH[t.id] = C.UNITS.find(u => re.test(u.grammar.t + ' ' + u.grammar.h)) || (sample && C.UNITS.find(u => new RegExp('\\b' + sample + '\\b', 'i').test(u.grammar.h))) || null;
    }
    const find = re => C.UNITS.find(u => re.test(u.grammar.t)) || C.UNITS.find(u => re.test(u.grammar.h));
    TEACH.ger = find(/gerund/i); TEACH.part = TEACH.pperf || find(/particip/i);
    TEACH.gender = C.UNIT['a1-familia'] || find(/gender/i);
    return TEACH;
  };
  // a stage's rule counts as introduced once its Grammar step was read, the stage is done, or the learner is past it
  GR.ruleSeen = uid => {
    const u = C.UNIT[uid]; if (!u) return true;
    const s = C.S.units[uid]; if (s && (s.steps.grammar || s.done)) return true;
    if ((C.S.rulesRead || {})[uid]) return true;
    return u.n < C.currentUnit().n;
  };
  GR.markRead = uid => { (C.S.rulesRead = C.S.rulesRead || {})[uid] = Date.now(); C.markStep(uid, 'grammar'); };
  GR.tenseTaught = t => { const u = GR.teach()[t]; return !u || GR.ruleSeen(u.id) || !!(C.S.tensesRead || {})[t]; };
  GR.markTense = t => { (C.S.tensesRead = C.S.tensesRead || {})[t] = Date.now(); C.save(); };
  C.ruleSeen = GR.ruleSeen; C.tenseTaught = GR.tenseTaught;

  // ---------- what form of the headword does an example use? ----------
  const clean = s => String(s || '').toLowerCase().replace(/[¿?¡!.,…:;"«»()]/g, ' ').replace(/\s+/g, ' ').trim();
  const norm = s => C.deacc(C.norm(String(s || ''))).replace(/[¿?¡!.,…:;"«»()]/g, ' ').replace(/\s+/g, ' ').trim();
  const bases = hw => String(hw).split(' / ').map(x => clean(x.replace(/\(.*?\)/g, '')).replace(/^(el|la|los|las|un|una) /, ''));
  GR.formInfo = v => {
    const e = C.exOf(v); if (!e || !e.target) return null;
    const T = clean(e.target), B = bases(v[0]);
    if (B.includes(T) || B.some(b => b.replace(/ /g, '') === T.replace(/ /g, ''))) return null;
    const first = B[0].split(' ')[0];
    if (/(ar|er|ir)(se)?$/.test(first) && V()) {
      const toks = T.split(' '), hits = [];
      for (const t of V().TENSES) {
        let f; try { f = V().conj(first, t.id); } catch (err) { continue; }
        (f || []).forEach((x, p) => {
          if (!x) return; const n = clean(x), core = n.replace(/^(no )?(me|te|se|nos|os) /, '');
          if (n === T || core === T || toks.includes(core) || (T.startsWith(n + ' ') || T.startsWith(core + ' '))) hits.push({ t: t.id, p });
        });
      }
      try { if (toks.includes(clean(V().gerund(first)))) hits.push({ t: 'ger' }); } catch (err) { }
      try { if (toks.includes(clean(V().participle(first)))) hits.push({ t: 'part' }); } catch (err) { }
      if (hits.length) return { kind: 'verb', inf: first, target: e.target, hits };
    }
    return { kind: 'form', base: v[0], target: e.target };
  };
  const hitLabel = h => h.t === 'ger' ? 'gerund (-ando/-iendo)' : h.t === 'part' ? 'participle (-ado/-ido)' : (tense(h.t) ? tense(h.t).en.replace(/\s*\(.*\)/, '').toLowerCase() : h.t) + ', ' + pers(h.t, h.p);
  const stageLink = u => u ? `<a href="#unit-${u.id}" data-close-sheet>Stage ${u.n + 1} · ${esc(u.title)}</a>` : 'a later stage';
  GR.formTaught = fi => !fi || fi.kind !== 'verb' || fi.hits.some(h => GR.tenseTaught(h.t));
  // a short note for the "new word" card and the feedback after a gap
  GR.formNote = (v, html = true) => {
    const fi = GR.formInfo(v); if (!fi) return '';
    if (fi.kind === 'verb') {
      const seen = {}, labels = fi.hits.filter(h => { const k = hitLabel(h); return seen[k] ? false : (seen[k] = 1); }).slice(0, 3).map(hitLabel);
      const taught = GR.formTaught(fi);
      if (!html) return `${fi.target} = ${fi.inf}: ${labels.join(' or ')}`;
      return `<b lang="es">${esc(fi.target)}</b> is a form of <b lang="es">${esc(fi.inf)}</b>: ${esc(labels.join(' · or '))}.` +
        (taught ? '' : ` <span class="muted">You haven't met this form yet (${[...new Set(fi.hits.map(h => h.t))].slice(0, 2).map(t => { const u = GR.teach()[t]; return (tense(t) ? tense(t).es.toLowerCase() : t === 'ger' ? 'gerund' : 'participle') + ': ' + stageLink(u); }).join('; ')}). For now, learn the example as a set phrase.</span>`);
    }
    if (!html) return `${fi.target} (from ${fi.base})`;
    const g = GR.teach().gender;
    return `In this sentence the word appears as <b lang="es">${esc(fi.target)}</b> (dictionary form: <b lang="es">${esc(fi.base)}</b>).` + (g && !GR.ruleSeen(g.id) ? ` <span class="muted">Endings for plural and feminine are explained in ${stageLink(g)}.</span>` : '');
  };

  // ---------- rule content ----------
  GR.conjTable = (t, verbs) => {
    const th = verbs.map(v => `<th lang="es">${esc(v)}</th>`).join('');
    return `<div class="scroll"><table class="conj"><thead><tr><th></th>${th}</tr></thead><tbody>${[0, 1, 2, 3, 4, 5].filter(p => !(t === 'imp' || t === 'impneg') || p > 0).map(p => `<tr><th>${esc(pers(t, p))}</th>${verbs.map(v => { let f = '—'; try { f = V().conj(v, t)[p] || '—'; } catch (e) { } return `<td lang="es">${esc(f)}</td>`; }).join('')}</tr>`).join('')}</tbody></table></div>`;
  };
  GR.tenseHtml = t => {
    const T = tense(t), I = GR.TENSES[t]; if (!T || !I) return '';
    const u = GR.teach()[t];
    return `<p class="muted">${esc(T.es)} · ${esc(T.en)} · ${T.level}${u ? ` · taught in ${stageLink(u)}` : ''}</p><h3>When to use it</h3><p>${I.use}</p><h3>How to form it</h3><p>${I.form}</p>${GR.conjTable(t, ['hablar', 'comer', 'vivir'])}<p class="muted">Irregular examples</p>${GR.conjTable(t, t === 'pres' ? ['ser', 'tener', 'ir'] : ['ser', 'tener', 'hacer'])}`;
  };
  GR.unitHtml = u => {
    let conj = '';
    if (u.conj) conj = `<h3>${esc(tense(u.conj.t).es)}: model verbs</h3>${GR.conjTable(u.conj.t, u.conj.v.slice(0, 5))}`;
    return `<div class="grammar">${u.grammar.h}</div>${conj}`;
  };
  // the best rule for whatever is on screen
  GR.ruleFor = ex => {
    if (!ex) return null;
    if (ex.tense && GR.TENSES[ex.tense]) return { title: tense(ex.tense).es, html: GR.tenseHtml(ex.tense), tense: ex.tense };
    const x = ex.card && C.ITEMS[ex.card]; if (!x) return null;
    const src = x.src;
    let u = src && src.grammar ? src : null, extra = '';
    if (x.t === 'p' && src.unit) u = C.UNIT[src.unit];
    if (x.t === 'p' && !u) { // best match by the block's topic name among stages of that level
      const words = norm(src.tag).split(' ').filter(w => w.length > 3);
      const cands = C.UNITS.filter(c => c.level === src.level).map(c => [c, words.filter(w => norm(c.grammar.t + ' ' + c.title).includes(w)).length]).sort((a, b) => b[1] - a[1]);
      if (cands.length && cands[0][1]) u = cands[0][0];
    }
    if (x.t === 'v') { const note = GR.formNote(x.it); if (note) extra = `<div class="note">${note}</div>`; const fi = GR.formInfo(x.it); if (fi && fi.kind === 'verb' && GR.TENSES[fi.hits[0].t]) extra += `<h3>${esc(tense(fi.hits[0].t).es)}</h3>` + GR.tenseHtml(fi.hits[0].t); }
    if (!u && !extra) return null;
    return { title: u ? u.grammar.t : 'This word', html: extra + (u ? `<p class="muted">From ${stageLink(u)}</p>${GR.unitHtml(u)}` : ''), uid: u && u.id };
  };

  // ---------- the rule sheet (a panel over the page or the session) ----------
  GR.sheet = ({ title, html, onClose }) => {
    let el = $('#rulesheet');
    if (!el) { el = document.createElement('div'); el.id = 'rulesheet'; el.setAttribute('role', 'dialog'); el.setAttribute('aria-modal', 'true'); document.body.appendChild(el); }
    el.hidden = false;
    el.innerHTML = `<div class="rs-back" data-close-sheet></div><div class="rs-panel"><div class="rs-head"><h2>${esc(title)}</h2><button class="btn ghost" data-close-sheet aria-label="Close">Close</button></div><div class="rs-body">${html}</div></div>`;
    const close = () => { el.hidden = true; el.innerHTML = ''; document.removeEventListener('keydown', key); onClose && onClose(); };
    const key = e => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', key);
    $$('[data-close-sheet]', el).forEach(b => b.addEventListener('click', e => { if (b.tagName === 'A') { if (EX.isActive()) { e.preventDefault(); return; } } close(); }));
    $$('[data-say]', el).forEach(b => b.onclick = () => C.speak(b.dataset.say));
    $('.rs-panel button', el).focus();
  };

  // a "read the rule first" card placed in front of a session
  GR.preface = (u, why) => {
    if (!u || !u.grammar || GR.ruleSeen(u.id)) return null;
    return { type: 'note', kicker: 'Before you start · the rule', title: u.grammar.t, button: 'Got it, start', html: `<p class="muted">${esc(why || 'The questions that follow use this rule. Read it once; you can open it again at any time with the 📖 Rule button.')}</p>${GR.unitHtml(u)}`, onDone: () => GR.markRead(u.id) };
  };
  GR.tensePreface = t => {
    if (!GR.TENSES[t] || (C.S.tensesRead || {})[t]) return null;
    return { type: 'note', kicker: 'Before you start · how this tense works', title: tense(t).es, button: 'Got it, start', html: GR.tenseHtml(t), onDone: () => GR.markTense(t) };
  };

  // ---------- one-time "how this exercise works" tips ----------
  const TIPS = {
    cloze: ['Fill the gap', 'Type the missing word. If a word in brackets is given, put it in the form the sentence needs. Missing accents count as almost right.'],
    scramble: ['Build the sentence', 'Tap the words in the right order. Tap a word again to take it back.'],
    match: ['Match the pairs', 'Tap a Spanish word, then its meaning. Pairs disappear when they match.'],
    errhunt: ['Error hunt', 'Each sentence has one mistake. Tap the word that is wrong; then you see the corrected sentence and why.'],
    story: ['Tenses in a story', 'Choose the right past tense for each gap: indefinido for events, imperfecto for background and habits.'],
    dicto: ['Dictogloss', 'Listen to a short paragraph (you can play it twice), then write down as much as you can. Your text is compared word by word.'],
    speed: ['Speed round', 'Sixty seconds: answer as many words as you can. Speed matters, so trust your first instinct.'],
    speak: ['Speak', 'Listen, then say the sentence out loud. If your browser supports it, the microphone checks what you said; otherwise compare with the recording.']
  };
  GR.tipFor = ex => {
    const t = ex && (ex.conj ? 'conj' : ex.type);
    if (!t || !TIPS[t] || EX.isExam() || (C.S.tips || {})[t]) return null;
    (C.S.tips = C.S.tips || {})[t] = Date.now();
    return { type: 'note', kicker: 'New exercise type', title: TIPS[t][0], button: 'OK', html: `<p>${TIPS[t][1]}</p>` };
  };

  // ---------- the Grammar page ----------
  let q = '', openId = null;
  GR.view = () => {
    const T = GR.teach(), cur = C.currentUnit();
    const match = (u) => !q || norm(u.title + ' ' + u.grammar.t + ' ' + u.grammar.h.replace(/<[^>]+>/g, ' ')).includes(norm(q));
    const lvls = C.LEVELS.map(L => {
      const us = C.UNITS.filter(u => u.level === L.id && match(u)); if (!us.length) return '';
      return `<h2>${esc(L.id)} · ${esc(L.name || '')}</h2><div class="rules">${us.map(u => {
        const seen = GR.ruleSeen(u.id), isCur = u.id === cur.id;
        return `<details class="rule ${seen ? 'seen' : ''}" data-rule="${u.id}" ${openId === u.id ? 'open' : ''}><summary><span class="rn">${u.n + 1}</span><span class="rt"><b>${esc(u.grammar.t)}</b><small>${esc(u.title)}</small></span><span class="rs">${isCur ? 'current' : seen ? '✓ read' : 'not yet'}</span></summary>
          <div class="rule-body">${GR.unitHtml(u)}<div class="row wrap"><button class="btn primary" data-read="${u.id}">${seen ? 'Read ✓' : 'I\'ve read it'}</button><button class="btn" data-drill="${u.id}">Practise this rule (${u.drills.length} gaps)</button><a class="btn ghost" href="#unit-${u.id}">Open the stage</a></div></div></details>`;
      }).join('')}</div>`;
    }).join('');
    const tns = V().TENSES.filter(t => !q || norm(t.es + ' ' + t.en + ' ' + (GR.TENSES[t.id] || {}).use).includes(norm(q))).map(t => {
      const u = T[t.id], ok = GR.tenseTaught(t.id);
      return `<details class="rule ${ok ? 'seen' : ''}" data-tense="${t.id}" ${openId === t.id ? 'open' : ''}><summary><span class="rn">${t.level}</span><span class="rt"><b>${esc(t.es)}</b><small>${esc(t.en)}</small></span><span class="rs">${ok ? '✓ met' : u ? 'stage ' + (u.n + 1) : ''}</span></summary>
        <div class="rule-body">${GR.tenseHtml(t.id)}<div class="row wrap"><button class="btn primary" data-tdrill="${t.id}">Drill this tense</button></div></div></details>`;
    }).join('');
    return `<section class="band"><h1>Gramática</h1><p class="lead">Every rule in the course, in the order the stages teach it, plus all verb tenses with their endings. Rules you have read are ticked. Inside any exercise, the <b>📖 Rule</b> button opens the rule it practises.</p>
      <div class="row"><input id="gq" type="search" placeholder="Search rules: subjuntivo, por/para, ser…" value="${esc(q)}" aria-label="Search grammar" style="flex:1;max-width:520px"></div></section>
      <section class="band"><h2>Verb tenses</h2><div class="rules">${tns || '<p class="muted">No tense matches.</p>'}</div>${lvls || '<p class="muted">No rule matches your search.</p>'}</section>`;
  };
  GR.bind = () => {
    const inp = $('#gq'); if (inp) { inp.oninput = () => { q = inp.value; const pos = inp.selectionStart; G.App.render(); const n = $('#gq'); n.focus(); n.setSelectionRange(pos, pos); }; }
    $$('details.rule').forEach(d => d.addEventListener('toggle', () => { if (d.open) openId = d.dataset.rule || d.dataset.tense; }));
    $$('[data-read]').forEach(b => b.onclick = () => { GR.markRead(b.dataset.read); openId = b.dataset.read; G.App.render(); });
    $$('[data-drill]').forEach(b => b.onclick = () => { const u = C.UNIT[b.dataset.drill]; GR.markRead(u.id); EX.run({ title: 'Rule practice · ' + u.grammar.t, items: C.shuffle(u.dids).slice(0, 20).map(EX.drillEx), onDone: () => G.App.render() }); });
    $$('[data-tdrill]').forEach(b => b.onclick = () => {
      const t = b.dataset.tdrill; GR.markTense(t);
      const pool = V().VERBS.slice(0, 40).map(v => v[0]);
      const items = [...Array(20)].map(() => { try { return EX.conjEx(pool[Math.floor(Math.random() * pool.length)], t); } catch (e) { return null; } });
      EX.run({ title: 'Tense drill · ' + tense(t).es, items, onDone: () => G.App.render() });
    });
  };
})(window);
