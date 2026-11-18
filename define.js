/* Camino content loader.
   Unit format (compact text blocks, one item per line, fields separated by " | "):
     V: vocabulary      es | en | example (target in {braces}) | example translation
     D: grammar drills  prompt with ___ | answer (alternatives a|b, no spaces around |) | English
     S: key sentences   es | en
     R: readings        [{ t: title, x: text, q: "question | option ; *correct option ; option" per line }]
   Lines starting with # are comments. */
(function (G) {
  'use strict';
  const C = G.CAMINO = G.CAMINO || { units: [], decks: [] };
  C.mocks = C.mocks || [];
  G.CAMINO_UNITS = C.units; // v1 files push here directly
  const lines = s => String(s || '').split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('#'));
  const fields = l => l.split(' | ').map(f => f.trim());
  C.parseV = s => lines(s).map(fields).filter(f => f.length >= 2);
  C.parseD = s => lines(s).map(fields).filter(f => f.length >= 2 && /_{3}/.test(f[0]));
  C.parseS = s => lines(s).map(fields).filter(f => f.length >= 2);
  C.parseQ = s => lines(s).map(l => {
    const [q, opts] = fields(l); const o = (opts || '').split(' ; ').map(x => x.trim());
    const ans = Math.max(0, o.findIndex(x => x.startsWith('*')));
    return [q, o.map(x => x.replace(/^\*/, '')), ans];
  });
  C.unit = level => u => { u.level = level; C.units.push(u); };
  C.deck = level => d => { d.level = level; C.decks.push(d); };
  C.mock = m => { C.mocks.push(m); };
  // Practice blocks (data/practice-*.js): one block per level, kind and grammar point.
  //   transform: cue | source sentence | answer(a|b)        errors: wrong sentence | correct sentence | why
  //   contrast:  sentence with [a/b] | answer | why          colloc / register: prompt with ___ | answer | distractor;distractor | English
  //   wordbuild: prompt | answer(a|b) | English
  C.practice = C.practice || [];
  C.prac = (level, kind, tag) => items => { C.practice.push({ level, kind, tag, items }); };  // DELE-style mock exams (data/mock-*.js)
})(typeof window !== 'undefined' ? window : globalThis);
