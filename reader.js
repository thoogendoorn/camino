/* Camino — Phase 4: graded reader, listening player, Living in Spain modules, My words, native word recordings.
   Stories and modules are plain data (data/reader-*.js, data/culture*.js); this file turns them into pages. */
(function (G) {
  'use strict';
  const { $, $$, esc, shuffle } = C;
  const R = G.READER = {};
  const CM = G.CAMINO || {};
  const S = () => C.S;
  const LV = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const norm = w => C.norm(String(w || '')).replace(/[^a-záéíóúüñ ]/g, '').trim();

  // ---------- content ----------
  const WPM = { A1: 60, A2: 75, B1: 95, B2: 115, C1: 135, C2: 150 }; // comfortable reading speed of a learner at that level
  const parseGl = s => { const m = {}; String(s || '').split('\n').map(l => l.trim()).filter(Boolean).forEach(l => { const i = l.indexOf(' = '); if (i > 0) m[norm(l.slice(0, i))] = l.slice(i + 3).trim(); }); return m; };
  R.STORIES = (CM.stories || []).map((s, i) => (s._o = i, s)).sort((a, b) => LV.indexOf(a.level) - LV.indexOf(b.level) || a._o - b._o);
  R.STORY = {};
  R.STORIES.forEach((s, i) => {
    s.n = i; s.qs = CM.parseQ(s.q || ''); s.glossMap = parseGl(s.gl);
    s.words = String(s.x).split(/\s+/).filter(w => /[a-záéíóúñ]/i.test(w)).length;
    s.min = Math.max(2, Math.round(s.words / (WPM[s.level] || 90)));
    R.STORY[s.id] = s;
  });
  R.SERIES = {};
  R.STORIES.forEach(s => { if (s.series) (R.SERIES[s.series] = R.SERIES[s.series] || []).push(s); });
  Object.values(R.SERIES).forEach(list => list.sort((a, b) => (a.ch || 0) - (b.ch || 0)));
  R.CULTURE = C.CULTURE || [];
  R.CULTURE.forEach(m => { m.glossMap = parseGl(m.gl); m.words = String(m.x).split(/\s+/).length; m.min = Math.max(2, Math.round(m.words / (WPM[m.level] || 90))); });
  // story glossaries also help tap-to-translate everywhere else
  R.STORIES.concat(R.CULTURE).forEach(s => { for (const k in s.glossMap) if (!C.GLOSS[k] && !/·/.test(s.glossMap[k])) C.GLOSS[k] = s.glossMap[k]; });

  const st = id => (S().stories = S().stories || {})[id] || null;
  R.isRead = id => !!(st(id) && st(id).done);

  // ---------- My words ----------
  R.registerMyWords = () => {
    const list = S().mywords || [];
    C.MY.level = C.currentLevel ? C.currentLevel() : 'A1';
    C.MY.vocab = []; C.MY.vids = [];
    list.forEach(w => {
      const row = [w.es, w.en || '—', w.ex || '', w.tr || ''];
      const id = C.vid(w.es);
      if (!C.ITEMS[id]) C.addItem(id, 'v', row, C.MY);
      C.MY.vocab.push(C.ITEMS[id].it); C.MY.vids.push(id);
    });
  };
  R.hasMyWord = es => (S().mywords || []).some(w => w.es === es) || C.has(C.vid(es));
  R.addMyWord = (es, en, sentence, src) => {
    es = String(es || '').trim(); if (!es) return false;
    const list = S().mywords = S().mywords || [];
    if (list.some(w => w.es === es)) return false;
    let ex = '';
    if (sentence) { const re = new RegExp('(^|[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ])(' + es.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')(?![A-Za-zÁÉÍÓÚÜÑáéíóúüñ])', 'i'); ex = sentence.replace(re, '$1{$2}'); if (!/\{/.test(ex)) ex = ''; }
    list.unshift({ es, en: en || '', ex, tr: '', src: src || '', ts: Date.now() });
    R.registerMyWords(); C.save();
    return true;
  };
  R.registerMyWords();
  document.addEventListener('camino:synced', R.registerMyWords);

  // ---------- native recordings of single words (Lingua Libre on Wikimedia Commons, CC BY-SA) ----------
  const LL_KEY = 'camino-ll';
  let llCache = null;
  const llLoad = () => { if (!llCache) { try { llCache = JSON.parse(localStorage.getItem(LL_KEY) || '{}'); } catch (e) { llCache = {}; } } return llCache; };
  const llSave = () => { try { localStorage.setItem(LL_KEY, JSON.stringify(llCache)); } catch (e) { } };
  R.nativeOn = () => !!S().settings.nativeAudio;
  // Lingua Libre files are named "LL-Q1321 (spa)-<speaker>-<word>.wav"
  R.findNative = async word => {
    const w = String(word || '').trim().toLowerCase(); if (!w || / /.test(w)) return null;
    const cache = llLoad(); if (w in cache) return cache[w];
    const api = 'https://commons.wikimedia.org/w/api.php?origin=*&format=json&action=query';
    let hit = null;
    try {
      const q = await fetch(api + '&list=search&srnamespace=6&srlimit=30&srsearch=' + encodeURIComponent('intitle:"LL-Q1321 (spa)" intitle:"' + w + '"')).then(r => r.json());
      const re = new RegExp('^File:LL-Q1321 \\(spa\\)-([^-]+)-' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\.wav$', 'i');
      const titles = ((q.query || {}).search || []).map(x => x.title).filter(t => re.test(t));
      if (titles.length) {
        const info = await fetch(api + '&prop=imageinfo&iiprop=url&titles=' + encodeURIComponent(titles[0])).then(r => r.json());
        const page = Object.values((info.query || {}).pages || {})[0];
        const url = page && page.imageinfo && page.imageinfo[0] && page.imageinfo[0].url;
        if (url) hit = { url, who: titles[0].match(re)[1], page: 'https://commons.wikimedia.org/wiki/' + encodeURIComponent(titles[0].replace(/ /g, '_')) };
      }
    } catch (e) { return null; } // offline or blocked: don't cache, try again next time
    cache[w] = hit; llSave();
    return hit;
  };
  R.playNative = async (word, btn) => {
    if (btn) { btn.disabled = true; btn.dataset.l = btn.textContent; btn.textContent = '…'; }
    const hit = await R.findNative(word);
    if (btn) { btn.disabled = false; btn.textContent = btn.dataset.l; }
    if (!hit) { C.toast('No native recording found for «' + word + '». Playing the browser voice.'); C.speak(word); return null; }
    try { new Audio(hit.url).play(); } catch (e) { C.speak(word); }
    return hit;
  };
  R.nativeBtn = word => R.nativeOn() && !/ /.test(String(word).trim()) ? `<button class="btn small ghost" data-native="${esc(word)}" title="Recording by a native speaker (Lingua Libre, CC BY-SA)">🎙 Native</button>` : '';
  R.bindNative = root => $$('[data-native]', root).forEach(b => b.onclick = async () => {
    const hit = await R.playNative(b.dataset.native, b);
    if (hit) { const c = document.createElement('small'); c.className = 'muted credit'; c.innerHTML = ` Recording: ${esc(hit.who)} · <a href="${esc(hit.page)}" target="_blank" rel="noopener">Lingua Libre, CC BY-SA 4.0</a>`; if (!b.nextElementSibling || !b.nextElementSibling.classList.contains('credit')) b.after(c); }
  });

  // ---------- turning a text into tappable sentences ----------
  const WORD = /([A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)/;
  const splitSent = p => p.split(/(?<![0-9]\.)(?<=[.!?…»"])\s+(?=[¿¡«"—A-ZÁÉÍÓÚÑ0-9])/).filter(s => s.trim());
  R.paras = text => String(text).split(/\n\s*\n|\n(?=[A-ZÁÉÍÓÚÑ][\wáéíóúñ .]{0,22}: )|\n(?=\d+\. )|\n(?=—)/).map(p => p.trim()).filter(Boolean).map(p => {
    const m = p.match(/^([A-ZÁÉÍÓÚÑ][A-Za-zÁÉÍÓÚÑáéíóúñü .]{0,22}):\s+([\s\S]*)$/);
    return m ? { who: m[1], sents: splitSent(m[2].replace(/\n/g, ' ')) } : { who: null, sents: splitSent(p.replace(/\n/g, ' ')) };
  });
  R.textHtml = (text, opts = {}) => {
    let si = 0; const speakers = [];
    const html = R.paras(text).map(p => {
      if (p.who && !speakers.includes(p.who)) speakers.push(p.who);
      const body = p.sents.map(s => `<span class="sent" data-si="${si++}" data-v="${p.who ? speakers.indexOf(p.who) % 2 + 1 : 0}">${s.split(WORD).map((t, i) => i % 2 ? `<span class="w">${esc(t)}</span>` : esc(t)).join('')}</span>`).join(' ');
      return `<p${p.who ? ' class="dlg"' : ''}>${p.who ? `<b class="who">${esc(p.who)}:</b> ` : ''}${body}</p>`;
    }).join('');
    return `<div class="reading story-text" lang="es"${opts.hidden ? ' hidden' : ''}>${html}</div>`;
  };

  // ---------- the player: sentence by sentence, speed control, repeat (one per text block) ----------
  const voicesES = () => { try { const vs = speechSynthesis.getVoices(); const es = vs.filter(v => /^es[-_]ES/i.test(v.lang)); return es.length ? es : vs.filter(v => /^es/i.test(v.lang)); } catch (e) { return []; } };
  const rate = () => +(S().settings.readerRate || 0.9);
  const chained = () => !!(G.speechSynthesis && voicesES().length);
  let ACT = null; // the player the keyboard controls
  const players = [];
  R.stop = () => { players.forEach(p => { p.on = false; }); C.stopSpeak(); players.forEach(p => p.mark && p.mark()); };
  R.playerHtml = (sfx = '') => C.canSpeak() ? `<div class="player" role="group" aria-label="Audio">
    <button class="btn primary" data-p="play${sfx}">▶ Play</button><button class="btn" data-p="rep${sfx}" title="Repeat the sentence (R or ←)">⟲ Repeat</button><button class="btn" data-p="next${sfx}" title="Next sentence (→)">→</button>
    <label class="prate">Speed <select data-p="rate${sfx}">${[0.6, 0.75, 0.9, 1, 1.15].map(r => `<option value="${r}" ${Math.abs(r - rate()) < 0.01 ? 'selected' : ''}>${r === 1 ? 'normal' : r + '×'}</option>`).join('')}</select></label>
    <span class="muted" data-p="count${sfx}"></span><small class="muted keys">Space play/pause · R or ← repeat · → next</small></div>` : '<p class="note">Your browser has no Spanish voice, so the audio player is unavailable here. Chrome, Edge and Safari include one.</p>';
  R.bindPlayer = (root, text, sfx = '', onEnd) => {
    const btn = k => root.querySelector(`[data-p="${k}${sfx}"]`);
    const P = { list: [], i: 0, on: false, root, listened: false };
    const paras = R.paras(text), sp = [...new Set(paras.filter(x => x.who).map(x => x.who))];
    paras.forEach(p => p.sents.forEach(s => P.list.push({ text: s, v: p.who ? sp.indexOf(p.who) % 2 + 1 : 0 })));
    const textEl = () => root.querySelector('.story-text');
    P.mark = () => {
      $$('.sent.on', root).forEach(x => x.classList.remove('on'));
      const el = textEl() && textEl().querySelector(`.sent[data-si="${P.i}"]`);
      if (el && (P.on || P.hold)) { el.classList.add('on'); if (!el.closest('[hidden]')) el.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }
      const c = btn('count'); if (c) c.textContent = (P.i + 1) + ' / ' + P.list.length;
      const pb = btn('play'); if (pb) pb.textContent = P.on ? '❚❚ Pause' : '▶ Play';
    };
    const sayOne = (i, then) => {
      const s = P.list[i]; if (!s) return;
      if (chained()) {
        try {
          speechSynthesis.cancel();
          const u = new SpeechSynthesisUtterance(s.text); u.lang = 'es-ES'; u.rate = rate();
          const vs = voicesES(), base = C.pickVoice && C.pickVoice();
          const ordered = base ? [base].concat(vs.filter(v => v !== base)) : vs;
          if (ordered.length) u.voice = ordered[(s.v === 2 ? 1 : 0) % ordered.length];
          u.onend = () => then && then(); u.onerror = () => then && then();
          speechSynthesis.speak(u); return;
        } catch (e) { }
      }
      C.speak(s.text);
    };
    P.play = () => {
      if (!P.list.length) return;
      players.forEach(o => { if (o !== P) { o.on = false; o.mark(); } });
      ACT = P;
      if (!chained()) { C.speak(P.list.map(s => s.text).join(' ')); P.listened = true; onEnd && onEnd(); return; }
      P.on = true;
      const step = () => { if (!P.on) return; P.mark(); sayOne(P.i, () => { if (!P.on) return; if (P.i < P.list.length - 1) { P.i++; step(); } else { P.on = false; P.hold = false; P.listened = true; P.i = 0; P.mark(); onEnd && onEnd(); } }); };
      step();
    };
    P.pause = () => { P.on = false; C.stopSpeak(); P.mark(); };
    P.repeat = () => { ACT = P; const was = P.on; P.on = false; C.stopSpeak(); setTimeout(() => { if (was) P.play(); else { P.hold = true; P.mark(); sayOne(P.i); } }, 60); };
    P.move = d => { ACT = P; const was = P.on; P.on = false; C.stopSpeak(); P.i = Math.max(0, Math.min(P.list.length - 1, P.i + d)); setTimeout(() => { if (was) P.play(); else { P.hold = true; P.mark(); sayOne(P.i); } }, 60); };
    players.push(P); if (players.length > 4) players.shift();
    const pb = btn('play'); if (!pb) return P;
    pb.onclick = () => P.on ? P.pause() : P.play();
    btn('rep').onclick = P.repeat; btn('next').onclick = () => P.move(1);
    btn('rate').onchange = e => { S().settings.readerRate = +e.target.value; C.save(); $$('select[data-p^="rate"]').forEach(x => x.value = e.target.value); if (P.on) P.repeat(); };
    $$('.sent', textEl() || root).forEach(el => el.addEventListener('dblclick', () => { P.i = +el.dataset.si; P.on = true; P.repeat(); }));
    if (!ACT || !document.body.contains(ACT.root)) ACT = P;
    P.mark();
    return P;
  };
  document.addEventListener('keydown', e => {
    const P = ACT; if (!P || !document.body.contains(P.root) || EX.isActive() || /INPUT|TEXTAREA|SELECT|BUTTON/.test((e.target || {}).tagName || '') && e.key === ' ') return;
    if (/INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || '')) return;
    if (e.key === ' ') { e.preventDefault(); P.on ? P.pause() : P.play(); }
    else if (e.key === 'r' || e.key === 'R' || e.key === 'ArrowLeft') { e.preventDefault(); P.repeat(); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); P.move(1); }
  });
  addEventListener('hashchange', () => R.stop());

  // ---------- tap-to-translate with "add to My words" ----------
  R.glossFor = (w, src) => (src && src.glossMap && src.glossMap[norm(w)]) || C.gloss(w);
  R.bindGloss = (root, src) => {
    const gl = $('#gloss', root); if (!gl) return;
    $$('.story-text .w', root).forEach(w => w.onclick = e => {
      e.stopPropagation();
      $$('.story-text .w.sel', root).forEach(x => x.classList.remove('sel')); w.classList.add('sel');
      const word = w.textContent, low = word.toLowerCase(), g = R.glossFor(word, src);
      const sent = w.closest('.sent') ? w.closest('.sent').textContent : '';
      const have = R.hasMyWord(low);
      gl.hidden = false;
      gl.innerHTML = `<div><b lang="es">${esc(word)}</b> ${g ? '· ' + esc(g) : '<span class="muted">· not in the course word list</span>'}</div>
        <div class="row wrap">${C.canSpeak() ? `<button class="btn small" data-gsay>${G.ICON ? '🔊' : '🔊'} Listen</button>` : ''}${R.nativeBtn(low)}<a class="btn small ghost" href="https://www.wordreference.com/es/en/translation.asp?spen=${encodeURIComponent(low)}" target="_blank" rel="noopener">WordReference</a></div>
        <div class="row wrap addrow">${have ? '<span class="muted">✓ In your review</span>' : g ? `<button class="btn small primary" data-add>+ My words</button>` : `<input id="gmean" placeholder="Meaning in English" aria-label="Meaning"><button class="btn small primary" data-add>+ My words</button>`}</div>`;
      const sb = $('[data-gsay]', gl); if (sb) sb.onclick = () => C.speak(word);
      R.bindNative(gl);
      const ad = $('[data-add]', gl); if (ad) ad.onclick = () => {
        const mean = g || ($('#gmean', gl) || {}).value || '';
        if (!mean.trim()) { C.toast('Type a meaning first.'); return; }
        R.addMyWord(low, mean.trim(), sent, src && src.title);
        ad.parentNode.innerHTML = '<span class="muted">✓ Added to My words (Decks page)</span>';
      };
      C.speak(word);
      const r = w.getBoundingClientRect(), pr = root.getBoundingClientRect();
      gl.style.top = (r.bottom - pr.top + 6) + 'px'; gl.style.left = Math.max(0, Math.min(pr.width - 300, r.left - pr.left)) + 'px';
    });
    root.addEventListener('click', e => { if (!gl.contains(e.target) && !e.target.classList.contains('w')) { gl.hidden = true; $$('.w.sel', root).forEach(x => x.classList.remove('sel')); } });
  };

  // ---------- logging input automatically ----------
  R.log = (min, title, kind) => { if (G.App && G.App.logInput) G.App.logInput(min, title, kind, true); };

  // ---------- library (Lecturas · Escuchar · Vivir en España) ----------
  let libLv = null, libTab = 'stories';
  R.setTab = t => { libTab = t; };
  R.tab = () => libTab;
  const lvl = () => (C.currentLevel ? C.currentLevel() : 'A1');
  const card = s => {
    const x = st(s.id), done = x && x.done;
    return `<a class="story-card ${done ? 'done' : ''}" href="#story-${s.id}"><span class="sc-k">${s.level} · ${esc(s.genre || '')}${s.series ? ' · cap. ' + s.ch : ''}</span><b>${esc(s.title)}</b><span class="sc-s">${esc(s.blurb || '')}</span><span class="sc-m">${s.words} words · ~${s.min} min${done ? ` · ✓ read${x.score != null ? ' · ' + x.score + '/' + s.qs.length : ''}` : ''}</span></a>`;
  };
  R.nextFor = level => R.STORIES.find(s => s.level === level && !R.isRead(s.id) && (!s.series || (R.SERIES[s.series][0] === s || R.isRead(R.SERIES[s.series][R.SERIES[s.series].indexOf(s) - 1].id))));
  // Input available at a level: reading time (WPM) + one listening pass with the player (TTS_WPM), stories plus culture modules.
  const TTS_WPM = { A1: 130, A2: 135, B1: 140, B2: 145, C1: 150, C2: 155 };
  R.inputAt = L => {
    const st = R.STORIES.filter(s => s.level === L), cm = R.CULTURE.filter(m => m.level === L);
    let read = 0, listen = 0, left = 0;
    st.concat(cm).forEach(x => { const r = x.words / (WPM[L] || 90), l = x.words / (TTS_WPM[L] || 140); read += r; listen += l; if (!R.isRead(x.culture ? 'c:' + x.id : x.id)) left += r + l; });
    return { texts: st.length, mods: cm.length, read: Math.round(read), listen: Math.round(listen), total: Math.round(read + listen), left: Math.round(left) };
  };
  R.fmtMin = m => m < 60 ? m + ' min' : Math.floor(m / 60) + ' h' + (m % 60 ? ' ' + (m % 60) + ' min' : '');
  R.storiesHtml = () => {
    const cur = lvl(); const L = libLv || (LV.slice(0, 5).includes(cur) ? cur : 'C1');
    const tiers = LV.slice(0, 5).filter(l => R.STORIES.some(s => s.level === l));
    const here = R.STORIES.filter(s => s.level === L);
    const series = [...new Set(here.filter(s => s.series).map(s => s.series))];
    const solo = here.filter(s => !s.series);
    const next = R.nextFor(L);
    const readN = R.STORIES.filter(s => R.isRead(s.id)).length;
    const hrs = R.inputAt(L);
    return `<p class="lead">Original stories written for each level, from short scenes to serial novels. Tap any word for its meaning and add it to your review; listen with the player; answer the questions at the end. Reading time is logged as input automatically.</p>
      <div class="seg" role="tablist" aria-label="Level">${tiers.map(l => `<button class="${l === L ? 'on' : ''}" data-lib-lv="${l}">${l} <small>${R.STORIES.filter(s => s.level === l && R.isRead(s.id)).length}/${R.STORIES.filter(s => s.level === l).length}</small></button>`).join('')}</div>
      <p class="muted" id="libhours"><b>${L}:</b> ${hrs.texts} texts${hrs.mods ? ` and ${hrs.mods} Living in Spain module${hrs.mods > 1 ? "s" : ""}` : ''}, about ${R.fmtMin(hrs.total)} of reading and listening (${R.fmtMin(hrs.read)} reading, ${R.fmtMin(hrs.listen)} listening)${hrs.left < hrs.total ? `; ${R.fmtMin(hrs.left)} still new to you` : ''}.</p>
      <p class="muted">${readN} of ${R.STORIES.length} texts read.${next ? ` Next at ${L}: <a href="#story-${next.id}">${esc(next.title)}</a>.` : ''}</p>
      ${series.map(sr => { const list = R.SERIES[sr]; const nd = list.filter(s => R.isRead(s.id)).length; return `<div class="series"><h3>${esc(sr)} <small class="muted">· serial in ${list.length} chapters · ${nd}/${list.length} read</small></h3><div class="story-grid">${list.map(card).join('')}</div></div>`; }).join('')}
      ${solo.length ? `<h3>Stories, portraits and easy news</h3><div class="story-grid">${solo.map(card).join('')}</div>` : ''}`;
  };
  R.cultureHtml = () => `<p class="lead">${R.CULTURE.length} short modules for everyday life in Spain: a text, 15 words, a model conversation to listen to and shadow, a role-play, and a checklist of real tasks to try.</p>
    <div class="story-grid">${R.CULTURE.map(m => { const t = (S().cultureTasks || {})[m.id] || {}; const nd = Object.values(t).filter(Boolean).length; return `<a class="story-card ${R.isRead('c:' + m.id) ? 'done' : ''}" href="#culture-${m.id}"><span class="sc-k">${m.level} · Vivir en España</span><b>${esc(m.title)}</b><span class="sc-s">${esc(m.blurb || '')}</span><span class="sc-m">${m.tasks.length} real tasks · ${nd} done${R.isRead('c:' + m.id) ? ' · ✓ read' : ''}</span></a>`; }).join('')}</div>`;
  R.listenHtml = () => {
    const cur = lvl(); const L = LV.indexOf(cur);
    const picks = R.STORIES.filter(s => Math.abs(LV.indexOf(s.level) - L) <= 1).slice(0, 60);
    return `<p class="lead">Listen first, read later: the text stays hidden until you've answered the questions. Use the speed control and repeat any sentence with R or ←.</p>
      <h3>Listen first: stories at your level</h3><div class="story-grid">${picks.map(s => `<a class="story-card ${st(s.id) && st(s.id).listened ? 'done' : ''}" href="#story-${s.id}" data-listen-first="1"><span class="sc-k">${s.level} · ${esc(s.genre || '')}</span><b>${esc(s.title)}</b><span class="sc-m">${s.words} words${st(s.id) && st(s.id).listened ? ' · ✓ listened' : ''}</span></a>`).join('')}</div>
      <h3>Model conversations from Living in Spain</h3><div class="story-grid">${R.CULTURE.map(m => `<a class="story-card" href="#culture-${m.id}"><span class="sc-k">${m.level} · two voices</span><b>${esc(m.title)}</b><span class="sc-m">Listen and shadow</span></a>`).join('')}</div>
      <h3>Guided podcast listening</h3>
      <form class="panel" id="podf"><p class="muted">For any podcast episode or video: listen once for the gist, then again for detail. Note the words you caught, write two or three sentences of summary in Spanish, and rate how much you understood. It goes into your input log.</p>
        <div class="row wrap"><input id="pt" placeholder="Episode or video title" aria-label="Title" style="flex:2"><input id="pm" type="number" min="1" max="240" value="15" aria-label="Minutes" style="width:90px"> <span class="muted">min</span></div>
        <label>New words you caught (comma-separated; they go to My words)<input id="pw" placeholder="la convocatoria, a raíz de, …" lang="es"></label>
        <label>Summary in Spanish (2–3 sentences)<textarea id="ps" rows="3" lang="es"></textarea></label>
        <div class="row wrap"><label>Understood <select id="pu">${[90, 75, 50, 25].map(p => `<option value="${p}">about ${p}%</option>`).join('')}</select></label><button class="btn primary">Save to my log</button></div>
        <p class="muted">Tip: if you understood less than half, pick something one level easier; above 90%, one level harder. Episode suggestions per level are on the Podcasts tab.</p></form>
      ${(S().input || []).filter(e => e.sum).slice(0, 8).map(e => `<div class="panel small"><b>${esc(e.t)}</b> · ${e.m} min · ${e.u || '?'}% understood<p lang="es">${esc(e.sum)}</p></div>`).join('')}`;
  };
  R.bindLibrary = root => {
    $$('[data-lib-lv]', root).forEach(b => b.onclick = () => { libLv = b.dataset.libLv; G.App.render(); });
    $$('[data-listen-first]', root).forEach(a => a.onclick = () => { storyMode = 'listen'; });
    const f = $('#podf', root); if (f) f.onsubmit = e => {
      e.preventDefault(); const m = +$('#pm').value; if (!m) return;
      const t = $('#pt').value.trim() || 'Podcast';
      ($('#pw').value || '').split(',').map(x => x.trim()).filter(Boolean).forEach(w => R.addMyWord(w.toLowerCase(), '', '', t));
      if (G.App && G.App.logInput) G.App.logInput(m, t, 'listen');
      const e0 = S().input[0]; if (e0) { e0.sum = $('#ps').value.trim(); e0.u = +$('#pu').value; C.save(); }
      G.App.render();
    };
  };

  // ---------- a story page ----------
  let storyMode = 'read';
  R.setMode = m => { storyMode = m; };
  R.storyView = id => {
    const s = R.STORY[id]; if (!s) return `<section class="band"><h1>Not found</h1><p><a href="#library">Back to the library</a></p></section>`;
    const x = st(s.id) || {}; const list = s.series ? R.SERIES[s.series] : null, k = list ? list.indexOf(s) : -1;
    const prev = list && list[k - 1], next = list && list[k + 1];
    const listen = storyMode === 'listen';
    return `<section class="band story-head"><p class="kicker"><a href="#library">Biblioteca</a> · Lecturas · ${s.level}${s.series ? ` · ${esc(s.series)}, capítulo ${s.ch} de ${list.length}` : ''}</p><h1>${esc(s.title)}</h1>
      <p class="muted">${esc(s.genre || '')} · ${s.words} words · about ${s.min} min${x.done ? ' · ✓ read' : ''}</p>${s.blurb ? `<p class="lead">${esc(s.blurb)}</p>` : ''}
      <div class="seg" role="tablist"><button class="${listen ? '' : 'on'}" data-smode="read">Read</button><button class="${listen ? 'on' : ''}" data-smode="listen">Listen first</button></div></section>
      <section class="band story-body" id="sbodyr">${R.playerHtml()}
      ${listen ? `<p class="note">Listen without the text, then answer the questions. <button class="btn small" id="showtext">Show the text</button></p>` : '<p class="muted">Tap any word for its meaning. Double-click a sentence to hear it again.</p>'}
      ${R.textHtml(s.x, { hidden: listen })}<div class="gloss" id="gloss" hidden></div>
      <h2>Comprensión</h2><div class="rq">${s.qs.map((q, qi) => `<div class="q" data-q="${qi}"><p>${qi + 1}. ${esc(q[0])}</p>${shuffle(q[1].map((o, oi) => `<button class="opt" data-a="${oi}">${esc(o)}</button>`)).join('')}</div>`).join('')}</div>
      <div id="sdone" class="row wrap"></div>
      <div class="unit-nav row">${prev ? `<a class="btn ghost" href="#story-${prev.id}">← ${esc(prev.title)}</a>` : '<a class="btn ghost" href="#library">← Library</a>'}${next ? `<a class="btn ${x.done ? 'primary' : 'ghost'}" href="#story-${next.id}">Capítulo ${next.ch}: ${esc(next.title)} →</a>` : ''}</div></section>`;
  };
  R.bindStory = id => {
    const s = R.STORY[id]; if (!s) return;
    const root = $('#sbodyr');
    R.bindPlayer(root, s.x, '', () => { const x = (S().stories[s.id] = S().stories[s.id] || {}); if (!x.listened) { x.listened = Date.now(); R.log(Math.max(1, Math.round(s.words / (140 * rate()))), 'Listening: ' + s.title, 'listen'); } });
    R.bindGloss(root, s);
    $$('[data-smode]').forEach(b => b.onclick = () => { R.stop(); storyMode = b.dataset.smode; G.App.render(); });
    const sh = $('#showtext'); if (sh) sh.onclick = () => { $('.story-text', root).hidden = false; sh.parentNode.remove(); };
    let right = 0, answered = 0;
    $$('.rq .q', root).forEach(q => $$('.opt', q).forEach(b => b.onclick = () => {
      if (q.dataset.done) return; q.dataset.done = 1; answered++;
      const qi = +q.dataset.q, ok = +b.dataset.a === s.qs[qi][2]; if (ok) right++;
      b.classList.add(ok ? 'good' : 'bad'); if (!ok) $(`.opt[data-a="${s.qs[qi][2]}"]`, q).classList.add('good');
      $$('.opt', q).forEach(o => o.disabled = true);
      if (answered === s.qs.length) {
        const x = (S().stories[s.id] = S().stories[s.id] || {}); const first = !x.done;
        x.score = right; x.done = x.done || Date.now(); x.times = (x.times || 0) + 1;
        if (storyMode === 'listen') x.listened = x.listened || Date.now();
        const t = $('.story-text', root); if (t) t.hidden = false;
        if (first) R.log(s.min, (storyMode === 'listen' ? 'Listening: ' : 'Reading: ') + s.title, storyMode === 'listen' ? 'listen' : 'read');
        C.save(); C.checkBadges && C.checkBadges();
        $('#sdone').innerHTML = `<p class="stamp">${right} of ${s.qs.length} correct${first ? ` · ${s.min} min logged as input` : ''}</p>${first ? '' : `<button class="btn" id="relog">Log this re-read (${s.min} min)</button>`}`;
        const rl = $('#relog'); if (rl) rl.onclick = () => { R.log(s.min, 'Re-reading: ' + s.title, 'read'); rl.disabled = true; rl.textContent = 'Logged ✓'; };
      }
    }));
  };

  // ---------- a Living in Spain module ----------
  R.cultureView = id => {
    const m = C.CULT[id]; if (!m) return `<section class="band"><h1>Not found</h1><p><a href="#library">Back to the library</a></p></section>`;
    const learned = m.vids.filter(C.has).length, tasks = (S().cultureTasks || {})[m.id] || {};
    return `<section class="band story-head"><p class="kicker"><a href="#library">Biblioteca</a> · Vivir en España · ${m.level}</p><h1>${esc(m.title)}</h1>${m.blurb ? `<p class="lead">${esc(m.blurb)}</p>` : ''}</section>
      <section class="band story-body" id="sbodyr"><h2>Lectura</h2>${R.playerHtml()}<p class="muted">Tap any word for its meaning.</p>${R.textHtml(m.x)}<div class="gloss" id="gloss" hidden></div>
        <div class="row"><button class="btn" id="cread">${R.isRead('c:' + m.id) ? 'Read ✓' : `I've read it (log ${m.min} min)`}</button></div></section>
      <section class="band"><h2>15 words</h2><p class="muted">${learned} of ${m.vids.length} in your review. Some key words also appear elsewhere in the course; learning them here or there counts once.</p><div class="row wrap">${learned < m.vids.length ? '<button class="btn primary" id="clearn">Learn these words</button>' : ''}${learned ? '<button class="btn" id="cprac">Practise them</button>' : ''}</div>
        <table class="vocab"><tbody>${m.vocab.map((v, i) => { const e = C.exOf(v), src = (C.ITEMS[m.vids[i]] || {}).src, also = src && src !== m && src.title ? `<div class="muted small">Also in «${esc(src.title)}»${C.has(m.vids[i]) ? ' · already in your review' : ''}</div>` : ''; const c = S().cards[m.vids[i]]; return `<tr class="${c ? (c.s >= 21 ? 'k' : 'l') : ''}"><td class="es" lang="es">${esc(v[0])}</td><td>${esc(v[1])}${e ? `<div class="muted" lang="es">${esc(e.es)}</div>` : ''}${also}</td><td>${R.nativeBtn(v[0])}${C.canSpeak() ? `<button class="btn small ghost" data-csay="${esc(v[0])}" aria-label="Listen">🔊</button>` : ''}</td></tr>`; }).join('')}</tbody></table></section>
      <section class="band" id="cmodel"><h2>Model conversation</h2><p class="muted">Listen with two voices, then shadow: play a line, pause, say it aloud.</p>${R.playerHtml('2')}
        <div class="model">${R.textHtml(m.model)}</div><div class="row wrap"><button class="btn" id="cshadow">Shadow it line by line</button></div></section>
      <section class="band"><h2>Role-play</h2><p class="note">${esc(m.talk)}</p><div class="row wrap">${C.ai.available() ? `<a class="btn primary" href="#tutor" id="ctalk">Role-play with the tutor</a>` : '<span class="muted">Without the AI tutor: play the model conversation, pause after each line of the other person and answer in your own words, then compare.</span>'}</div></section>
      <section class="band"><h2>Try it for real</h2><p class="muted">Tick the tasks as you do them in real life (or in a realistic simulation with a friend).</p><ul class="tasks">${m.tasks.map((t, i) => `<li><label><input type="checkbox" data-task="${i}" ${tasks[i] ? 'checked' : ''}> ${esc(t)}</label></li>`).join('')}</ul></section>`;
  };
  R.bindCulture = id => {
    const m = C.CULT[id]; if (!m) return;
    const root = $('#sbodyr');
    R.bindPlayer(root, m.x); R.bindGloss(root, m); R.bindNative(document);
    R.bindPlayer($('#cmodel'), m.model, '2'); $$('[data-csay]').forEach(x => x.onclick = () => C.speak(x.dataset.csay));
    $('#cread').onclick = () => { if (!R.isRead('c:' + m.id)) { S().stories['c:' + m.id] = { done: Date.now() }; R.log(m.min, 'Living in Spain: ' + m.title, 'read'); C.save(); } G.App.render(); };
    const cl = $('#clearn'); if (cl) cl.onclick = () => { const items = EX.learnItems(m); if (items) EX.run({ title: 'Words · ' + m.title, items, onDone: () => G.App.render() }); };
    const cp = $('#cprac'); if (cp) cp.onclick = () => EX.run({ title: 'Word practice · ' + m.title, items: EX.wordPractice(m.vids.filter(C.has), 15), onDone: () => G.App.render() });
    $('#cshadow').onclick = () => EX.run({ title: 'Shadowing · ' + m.title, items: R.paras(m.model).flatMap(p => p.sents.map(s => ({ type: 'speak', es: s, en: p.who ? p.who + ' says…' : '' }))), graded: false, requeue: false, onDone: () => G.App.render() });
    const tk = $('#ctalk'); if (tk) tk.onclick = () => { G.App.tutorScenario = 'c:' + m.id; };
    $$('[data-task]').forEach(c => c.onchange = () => { const t = ((S().cultureTasks = S().cultureTasks || {})[m.id] = S().cultureTasks[m.id] || {}); t[c.dataset.task] = c.checked ? Date.now() : 0; C.save(); });
  };

  // a recommendation for the Today page
  R.todayPick = () => { const l = lvl(); return R.nextFor(LV.slice(0, 5).includes(l) ? l : 'C1') || null; };
})(window);
