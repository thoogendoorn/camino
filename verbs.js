/* Camino — Spanish (Castilian) conjugation engine.
   conj(inf, tense) -> array of 6 forms [yo, tú, él/ella/usted, nosotros, vosotros, ellos/ustedes]
   Tenses: pres, indef, impf, fut, cond, pperf, plusc, futperf, condperf, subj, impsubj, pperfsubj, pluscsubj,
           imp (affirmative: [-, tú, usted, nosotros, vosotros, ustedes]), impneg; plus gerund(inf), participle(inf). */
(function (G) {
  'use strict';
  const PERS = ['yo', 'tú', 'él / ella / usted', 'nosotros', 'vosotros', 'ellos / ustedes'];
  const REFL = ['me', 'te', 'se', 'nos', 'os', 'se'];
  const ACC = { a: 'á', e: 'é', i: 'í', o: 'ó', u: 'ú' };
  const UNACC = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u' };

  // Irregular base verbs (prefixed compounds such as mantener, componer, deshacer inherit these).
  const IRR = {
    ser: {
      pres: ['soy', 'eres', 'es', 'somos', 'sois', 'son'], indef: ['fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron'],
      impf: ['era', 'eras', 'era', 'éramos', 'erais', 'eran'], subj: ['sea', 'seas', 'sea', 'seamos', 'seáis', 'sean'], tu: 'sé'
    },
    estar: {
      pres: ['estoy', 'estás', 'está', 'estamos', 'estáis', 'están'], strong: 'estuv',
      subj: ['esté', 'estés', 'esté', 'estemos', 'estéis', 'estén'], tu: 'está'
    },
    ir: {
      pres: ['voy', 'vas', 'va', 'vamos', 'vais', 'van'], indef: ['fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron'],
      impf: ['iba', 'ibas', 'iba', 'íbamos', 'ibais', 'iban'], subj: ['vaya', 'vayas', 'vaya', 'vayamos', 'vayáis', 'vayan'],
      tu: 've', ger: 'yendo', nosImp: 'vamos'
    },
    haber: {
      pres: ['he', 'has', 'ha', 'hemos', 'habéis', 'han'], strong: 'hub', fut: 'habr',
      subj: ['haya', 'hayas', 'haya', 'hayamos', 'hayáis', 'hayan']
    },
    dar: {
      pres: ['doy', 'das', 'da', 'damos', 'dais', 'dan'], indef: ['di', 'diste', 'dio', 'dimos', 'disteis', 'dieron'],
      subj: ['dé', 'des', 'dé', 'demos', 'deis', 'den']
    },
    ver: {
      pres: ['veo', 'ves', 've', 'vemos', 'veis', 'ven'], indef: ['vi', 'viste', 'vio', 'vimos', 'visteis', 'vieron'],
      impf: ['veía', 'veías', 'veía', 'veíamos', 'veíais', 'veían'], part: 'visto'
    },
    saber: { yo: 'sé', strong: 'sup', fut: 'sabr', subj: ['sepa', 'sepas', 'sepa', 'sepamos', 'sepáis', 'sepan'] },
    caber: { yo: 'quepo', strong: 'cup', fut: 'cabr' },
    tener: { yo: 'tengo', sc: 'ie', strong: 'tuv', fut: 'tendr', tu: 'ten' },
    venir: { yo: 'vengo', sc: 'ie', strong: 'vin', fut: 'vendr', tu: 'ven', ger: 'viniendo' },
    poner: { yo: 'pongo', strong: 'pus', fut: 'pondr', tu: 'pon', part: 'puesto' },
    salir: { yo: 'salgo', fut: 'saldr', tu: 'sal' },
    valer: { yo: 'valgo', fut: 'valdr' },
    hacer: { yo: 'hago', strong: 'hic', fut: 'har', tu: 'haz', part: 'hecho' },
    decir: { yo: 'digo', sc: 'i', strong: 'dij', fut: 'dir', tu: 'di', part: 'dicho', ger: 'diciendo' },
    traer: { yo: 'traigo', strong: 'traj' },
    caer: { yo: 'caigo' },
    oír: { pres: ['oigo', 'oyes', 'oye', 'oímos', 'oís', 'oyen'], yo: 'oigo' },
    poder: { sc: 'ue', strong: 'pud', fut: 'podr', ger: 'pudiendo' },
    querer: { sc: 'ie', strong: 'quis', fut: 'querr' },
    andar: { strong: 'anduv' },
    conducir: { strong: 'conduj' }, traducir: { strong: 'traduj' }, producir: { strong: 'produj' }, reducir: { strong: 'reduj' },
    abrir: { part: 'abierto' }, cubrir: { part: 'cubierto' }, escribir: { part: 'escrito' }, morir: { sc: 'ue', part: 'muerto' },
    romper: { part: 'roto' }, volver: { sc: 'ue', part: 'vuelto' }, resolver: { sc: 'ue', part: 'resuelto' },
    freír: { sc: 'i', part: 'frito' }, imprimir: { part: 'impreso' },
    reír: {
      pres: ['río', 'ríes', 'ríe', 'reímos', 'reís', 'ríen'], indef: ['reí', 'reíste', 'rio', 'reímos', 'reísteis', 'rieron'],
      subj: ['ría', 'rías', 'ría', 'riamos', 'riais', 'rían'], ger: 'riendo', part: 'reído'
    },
    oler: { pres: ['huelo', 'hueles', 'huele', 'olemos', 'oléis', 'huelen'], subj: ['huela', 'huelas', 'huela', 'olamos', 'oláis', 'huelan'] },
    jugar: { sc: 'ue' },
    adquirir: { sc: 'ie' }
  };
  // Stem-changing verbs (base forms; prefixed compounds inherit).
  const SC = {
    ie: 'pensar empezar comenzar cerrar despertar sentar recomendar entender perder encender defender preferir sentir mentir divertir convertir sugerir advertir referir nevar calentar atravesar confesar gobernar negar regar fregar tender ascender descender requerir hervir invertir',
    ue: 'volver dormir contar encontrar costar mostrar recordar almorzar acostar probar soñar sonar volar llover mover doler soler torcer colgar rogar aprobar demostrar renovar forzar morder',
    i: 'pedir servir repetir seguir conseguir elegir corregir vestir medir sonreír despedir impedir competir perseguir'
  };
  const SCMAP = {};
  for (const k in SC) SC[k].split(' ').forEach(v => SCMAP[v] = k);
  const STRESS_IU = new Set('enviar esquiar confiar guiar fiar variar ampliar desconfiar continuar actuar graduar situar evaluar acentuar reunir prohibir'.split(' '));
  const ZCO_EXC = new Set(['hacer', 'cocer', 'mecer', 'decir']);
  const PREFIXES = ['des', 're', 'com', 'con', 'pro', 'su', 'sos', 'man', 'ob', 'de', 'dis', 'ex', 'im', 'in', 'pre', 'inter', 'super', 'tra', 'con', 'entre', 'a', 'e', 'o', 'ab', 'sub', 'contra', 'pos', 'retro', 're'];

  function strip(s) { return s.replace(/[áéíóú]/g, c => UNACC[c]); }

  // Find base irregular / stem-change verb, possibly behind a prefix.
  function lookup(inf) {
    if (IRR[inf] || SCMAP[inf]) return { base: inf, pre: '' };
    const keys = Object.keys(IRR).concat(Object.keys(SCMAP)).sort((a, b) => b.length - a.length);
    for (const k of keys) {
      if (k.length < 3 || k === 'ir' || k === 'ser' || k === 'ver' || k === 'dar' || k === 'reír' && inf !== 'sonreír') continue;
      if (inf.length > k.length && inf.endsWith(k)) {
        const pre = inf.slice(0, inf.length - k.length);
        if (PREFIXES.includes(pre)) return { base: k, pre };
      }
    }
    if (inf === 'prever') return { base: 'ver', pre: 'pre' };
    return { base: inf, pre: '' };
  }

  function info(inf0) {
    let inf = inf0.trim().toLowerCase(), refl = false;
    if (/(ar|er|ir|ír)se$/.test(inf)) { refl = true; inf = inf.slice(0, -2); }
    const L = lookup(inf);
    const ir = IRR[L.base] || {};
    const end = inf.slice(-2);
    const cls = end === 'ír' ? 'ir' : end;
    const stem = inf.slice(0, -2);
    const sc = ir.sc || SCMAP[L.base] || null;
    const pfx = (x) => x == null ? x : (Array.isArray(x) ? x.map(f => L.pre + f) : L.pre + x);
    return { inf, inf0, refl, cls, stem, sc, ir, base: L.base, pre: L.pre, pfx };
  }

  // Apply stem change to the last matching vowel of the stem.
  function change(stem, sc) {
    const map = { ie: ['e', 'ie'], ue: ['o', 'ue'], i: ['e', 'i'] };
    if (!sc) return stem;
    if (stem.endsWith('jug')) return stem.replace(/jug$/, 'jueg');
    if (stem.endsWith('adquir')) return stem.replace(/adquir$/, 'adquier');
    const [from, to] = map[sc];
    const i = stem.lastIndexOf(from);
    if (i < 0) return stem;
    let out = stem.slice(0, i) + to + stem.slice(i + 1);
    if (sc === 'ue' && /(^|[^a-z])?ue/.test(out) && out.startsWith('ue')) out = 'h' + out; // oler-type
    return out;
  }
  // Weakening e->i / o->u for -ir stem changers (preterite 3rd persons, gerund, subj 1pl/2pl).
  function weaken(stem, sc) {
    if (!sc) return stem;
    if (sc === 'ue') { const i = stem.lastIndexOf('o'); return i < 0 ? stem : stem.slice(0, i) + 'u' + stem.slice(i + 1); }
    const i = stem.lastIndexOf('e'); return i < 0 ? stem : stem.slice(0, i) + 'i' + stem.slice(i + 1);
  }
  function stressIU(stem) { // envi -> enví, continu -> continú, reun -> reún, prohib -> prohíb
    const m = stem.match(/^(.*)([iu])([^aeiouáéíóú]*)$/);
    if (!m) return stem;
    return m[1] + ACC[m[2]] + m[3];
  }

  const PRES_END = { ar: ['o', 'as', 'a', 'amos', 'áis', 'an'], er: ['o', 'es', 'e', 'emos', 'éis', 'en'], ir: ['o', 'es', 'e', 'imos', 'ís', 'en'] };

  function presente(v) {
    const { ir, cls, stem, sc, base } = v;
    if (ir.pres) return v.pfx(ir.pres);
    const e = PRES_END[cls];
    const changed = change(stem, sc);
    let s = [changed, changed, changed, stem, stem, changed];
    if (STRESS_IU.has(v.inf)) { const t = stressIU(stem); s = [t, t, t, stem, stem, t]; }
    let out = s.map((st, i) => st + e[i]);
    // spelling / -uir
    if (/[^g]uir$/.test(v.inf) || v.inf === 'huir') {
      out = out.map((f, i) => (i === 3 || i === 4) ? f : f.replace(/u(o|es|e|en)$/, 'uy$1'));
    }
    if (/guir$/.test(v.inf)) out[0] = out[0].replace(/guo$/, 'go');
    if (/(ger|gir)$/.test(v.inf)) out[0] = out[0].replace(/go$/, 'jo');
    if (/[aeiou](cer|cir)$/.test(v.inf) && !ZCO_EXC.has(base)) out[0] = out[0].replace(/co$/, 'zco');
    else if (/[^aeiou](cer|cir)$/.test(v.inf)) out[0] = out[0].replace(/co$/, 'zo');
    if (ir.yo) out[0] = v.pre + ir.yo;
    if (v.inf === 'huir') out[4] = 'huis';
    return out;
  }

  function subjStems(v) {
    const pres = presente(v);
    const yo = pres[0];
    if (!/o$/.test(yo) || v.ir.subj) return null;
    const yoStem = yo.slice(0, -1);
    const yoIrreg = !!v.ir.yo || /zc$|y$/.test(yoStem) || /(ger|gir|guir)$/.test(v.inf) || /[^aeiou](cer|cir)$/.test(v.inf);
    const changed = change(v.stem, v.sc);
    let nosStem;
    if (yoIrreg) nosStem = yoStem;
    else if (v.sc && v.cls === 'ir') nosStem = weaken(v.stem, v.sc === 'i' ? 'i' : v.sc);
    else nosStem = v.stem;
    if (v.sc === 'i' && !yoIrreg) nosStem = weaken(v.stem, 'i');
    const main = yoIrreg ? yoStem : (STRESS_IU.has(v.inf) ? stressIU(v.stem) : changed);
    if (/(ger|gir)$/.test(v.inf) && v.sc) nosStem = yoStem; // elegir -> elijamos
    return [main, main, main, nosStem, nosStem, main];
  }
  function spellSubj(stem, cls) { // add -e (ar) or -a (er/ir) with orthographic changes
    if (cls === 'ar') {
      if (/gu$/.test(stem)) return stem.replace(/gu$/, 'gü');
      if (/c$/.test(stem)) return stem.replace(/c$/, 'qu');
      if (/g$/.test(stem)) return stem + 'u';
      if (/z$/.test(stem)) return stem.replace(/z$/, 'c');
    }
    return stem;
  }
  function subjuntivo(v) {
    if (v.ir.subj) return v.pfx(v.ir.subj);
    const st = subjStems(v);
    const e = v.cls === 'ar' ? ['e', 'es', 'e', 'emos', 'éis', 'en'] : ['a', 'as', 'a', 'amos', 'áis', 'an'];
    return st.map((s, i) => spellSubj(s, v.cls) + e[i]);
  }

  function indefinido(v) {
    const { ir, cls, stem, sc, inf } = v;
    if (ir.indef) return v.pfx(ir.indef);
    if (ir.strong) {
      const s = v.pre + ir.strong;
      const j = /j$/.test(s);
      const out = [s + 'e', s + 'iste', s + 'o', s + 'imos', s + 'isteis', s + (j ? 'eron' : 'ieron')];
      if (/hic$/.test(s)) out[2] = s.replace(/hic$/, 'hizo');
      return out;
    }
    if (cls === 'ar') {
      const out = ['é', 'aste', 'ó', 'amos', 'asteis', 'aron'].map(e => stem + e);
      out[0] = spellSubj(stem, 'ar') + 'é';
      return out;
    }
    const vowelStem = /[aeo]$/.test(stem);
    const uir = /[^g]u$/.test(stem) || stem === 'hu';
    if (vowelStem || uir) {
      const acc = uir ? ['í', 'iste', 'yó', 'imos', 'isteis', 'yeron'] : ['í', 'íste', 'yó', 'ímos', 'ísteis', 'yeron'];
      return acc.map(e => stem + e);
    }
    const w = (cls === 'ir' && sc) ? weaken(stem, sc) : stem;
    // ñ / ll stems drop the i: reñir -> riñó (rare) ; skip
    return [stem + 'í', stem + 'iste', w + 'ió', stem + 'imos', stem + 'isteis', w + 'ieron'];
  }

  function imperfecto(v) {
    if (v.ir.impf) return v.pfx(v.ir.impf);
    const s = v.stem;
    return v.cls === 'ar' ? ['aba', 'abas', 'aba', 'ábamos', 'abais', 'aban'].map(e => s + e) : ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'].map(e => s + e);
  }
  function futStem(v) { return v.ir.fut ? v.pre + v.ir.fut : strip(v.inf); }
  function futuro(v) { const s = futStem(v); return ['é', 'ás', 'á', 'emos', 'éis', 'án'].map(e => s + e); }
  function condicional(v) { const s = futStem(v); return ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'].map(e => s + e); }
  function impSubj(v) {
    const p = indefinido(v)[5];
    const s = p.slice(0, -3);
    const sAcc = s.slice(0, -1) + (ACC[s.slice(-1)] || s.slice(-1));
    return [s + 'ra', s + 'ras', s + 'ra', sAcc + 'ramos', s + 'rais', s + 'ran'];
  }
  function participle(inf0) {
    const v = info(inf0);
    if (v.ir.part) return v.pre + v.ir.part;
    if (v.cls === 'ar') return v.stem + 'ado';
    if (/[aeo]$/.test(v.stem)) return v.stem + 'ído';
    return v.stem + 'ido';
  }
  function gerund(inf0) {
    const v = info(inf0);
    let g;
    if (v.ir.ger) g = v.pre + v.ir.ger;
    else if (v.cls === 'ar') g = v.stem + 'ando';
    else if (/[aeou]$/.test(v.stem) && !/gu$/.test(v.stem)) g = v.stem + 'yendo';
    else g = ((v.cls === 'ir' && v.sc) ? weaken(v.stem, v.sc) : v.stem) + 'iendo';
    return g;
  }
  const HABER = ['he', 'has', 'ha', 'hemos', 'habéis', 'han'];
  const HABIA = ['había', 'habías', 'había', 'habíamos', 'habíais', 'habían'];
  const HABRE = ['habré', 'habrás', 'habrá', 'habremos', 'habréis', 'habrán'];
  const HABRIA = ['habría', 'habrías', 'habría', 'habríamos', 'habríais', 'habrían'];
  const HAYA = ['haya', 'hayas', 'haya', 'hayamos', 'hayáis', 'hayan'];
  const HUBIERA = ['hubiera', 'hubieras', 'hubiera', 'hubiéramos', 'hubierais', 'hubieran'];

  function imperativo(v) {
    const subj = subjuntivo(v), pres = presente(v);
    let tu = v.ir.tu ? v.ir.tu : pres[2];
    if (v.ir.tu && v.pre) { tu = v.pre + v.ir.tu; if (/^[^aeiou]*[aeiou]n$/.test(v.ir.tu)) tu = tu.replace(/([aeiou])n$/, (m, a) => ACC[a] + 'n'); }
    const vos = strip(v.inf).slice(0, -1) + 'd';
    const nos = v.ir.nosImp || subj[3];
    return [null, tu, subj[2], nos, vos, subj[5]];
  }

  // ---------- accent placement for enclitics (levántate, dímelo) ----------
  const V = 'aeiouáéíóúü';
  function nuclei(w) { // returns array of [start,end) of vowel nuclei
    const res = []; let i = 0;
    while (i < w.length) {
      if (V.includes(w[i])) {
        let j = i + 1;
        while (j < w.length && V.includes(w[j])) {
          const a = w[j - 1], b = w[j];
          const strong = c => 'aeoáéó'.includes(c) || 'íú'.includes(c);
          if (strong(a) && strong(b)) break;
          // qu / gu + e/i: u is silent, treat as part of nucleus
          j++;
        }
        res.push([i, j]); i = j;
      } else i++;
    }
    // drop silent u in que/qui/gue/gui
    return res.map(([s, e]) => {
      if (e - s > 1 && (w[s] === 'u') && s > 0 && 'qg'.includes(w[s - 1]) && 'eiéí'.includes(w[s + 1])) return [s + 1, e];
      return [s, e];
    });
  }
  function stressIndex(w) { // index into nuclei of stressed syllable
    const n = nuclei(w);
    for (let k = 0; k < n.length; k++) for (let i = n[k][0]; i < n[k][1]; i++) if ('áéíóú'.includes(w[i])) return k;
    if (n.length < 2) return n.length - 1;
    return /[aeiouns]$/.test(w) ? n.length - 2 : n.length - 1;
  }
  function accentNucleus(w, k) {
    const n = nuclei(w)[k]; if (!n) return w;
    let pos = -1;
    for (let i = n[0]; i < n[1]; i++) if ('aeo'.includes(w[i])) { pos = i; break; }
    if (pos < 0) pos = n[1] - 1;
    return w.slice(0, pos) + (ACC[w[pos]] || w[pos]) + w.slice(pos + 1);
  }
  function attach(form, clitics) {
    const k = stressIndex(form);
    const plain = strip(form) === form ? form : form; // keep existing
    let w = form.replace(/[áéíóú]/g, c => UNACC[c]) + clitics;
    const n = nuclei(w);
    const natural = stressIndex(w);
    if (natural !== k) w = accentNucleus(w, k);
    void plain; void n;
    return w;
  }

  function conj(inf0, tense) {
    const v = info(inf0);
    let out;
    switch (tense) {
      case 'pres': out = presente(v); break;
      case 'indef': out = indefinido(v); break;
      case 'impf': out = imperfecto(v); break;
      case 'fut': out = futuro(v); break;
      case 'cond': out = condicional(v); break;
      case 'subj': out = subjuntivo(v); break;
      case 'impsubj': out = impSubj(v); break;
      case 'pperf': out = HABER.map(h => h + ' ' + participle(v.inf)); break;
      case 'plusc': out = HABIA.map(h => h + ' ' + participle(v.inf)); break;
      case 'futperf': out = HABRE.map(h => h + ' ' + participle(v.inf)); break;
      case 'condperf': out = HABRIA.map(h => h + ' ' + participle(v.inf)); break;
      case 'pperfsubj': out = HAYA.map(h => h + ' ' + participle(v.inf)); break;
      case 'pluscsubj': out = HUBIERA.map(h => h + ' ' + participle(v.inf)); break;
      case 'imp': {
        out = imperativo(v);
        if (v.refl) {
          const cl = [null, 'te', 'se', 'nos', 'os', 'se'];
          out = out.map((f, i) => {
            if (!f) return f;
            let base = f;
            if (i === 3) base = base.replace(/s$/, '');
            if (i === 4) return v.base === 'ir' ? 'idos' : (v.cls === 'ir' ? v.stem + 'íos' : strip(v.inf).slice(0, -1) + 'os');
            return attach(base, cl[i]);
          });
        }
        return out;
      }
      case 'impneg': {
        const s = subjuntivo(v);
        const cl = v.refl ? [null, 'te ', 'se ', 'nos ', 'os ', 'se '] : ['', '', '', '', '', ''];
        return [null, 'no ' + cl[1] + s[1], 'no ' + cl[2] + s[2], 'no ' + cl[3] + s[3], 'no ' + cl[4] + s[4], 'no ' + cl[5] + s[5]];
      }
      default: throw new Error('Unknown tense ' + tense);
    }
    if (v.refl) out = out.map((f, i) => REFL[i] + ' ' + f);
    return out;
  }

  const TENSES = [
    { id: 'pres', es: 'Presente', en: 'Present', level: 'A1' },
    { id: 'pperf', es: 'Pretérito perfecto', en: 'Present perfect (he hablado)', level: 'A2' },
    { id: 'indef', es: 'Pretérito indefinido', en: 'Preterite (hablé)', level: 'A2' },
    { id: 'impf', es: 'Pretérito imperfecto', en: 'Imperfect (hablaba)', level: 'A2' },
    { id: 'fut', es: 'Futuro simple', en: 'Future (hablaré)', level: 'B1' },
    { id: 'cond', es: 'Condicional', en: 'Conditional (hablaría)', level: 'B1' },
    { id: 'imp', es: 'Imperativo afirmativo', en: 'Affirmative imperative', level: 'B1' },
    { id: 'impneg', es: 'Imperativo negativo', en: 'Negative imperative', level: 'B1' },
    { id: 'subj', es: 'Presente de subjuntivo', en: 'Present subjunctive', level: 'B1' },
    { id: 'plusc', es: 'Pluscuamperfecto', en: 'Pluperfect (había hablado)', level: 'B1' },
    { id: 'impsubj', es: 'Imperfecto de subjuntivo', en: 'Imperfect subjunctive (hablara)', level: 'B2' },
    { id: 'pperfsubj', es: 'Pretérito perfecto de subjuntivo', en: 'Perfect subjunctive (haya hablado)', level: 'B2' },
    { id: 'condperf', es: 'Condicional compuesto', en: 'Conditional perfect (habría hablado)', level: 'B2' },
    { id: 'pluscsubj', es: 'Pluscuamperfecto de subjuntivo', en: 'Pluperfect subjunctive (hubiera hablado)', level: 'B2' },
    { id: 'futperf', es: 'Futuro compuesto', en: 'Future perfect (habré hablado)', level: 'C1' }
  ];

  // Core verbs for the trainer, roughly by frequency, with English meaning.
  const VERBS = [
    ['ser', 'to be (identity)'], ['estar', 'to be (state, place)'], ['tener', 'to have'], ['hacer', 'to do, make'], ['poder', 'can, be able'],
    ['decir', 'to say, tell'], ['ir', 'to go'], ['ver', 'to see'], ['dar', 'to give'], ['saber', 'to know (facts)'], ['querer', 'to want, love'],
    ['llegar', 'to arrive'], ['pasar', 'to pass, happen'], ['deber', 'must, should, owe'], ['poner', 'to put'], ['parecer', 'to seem'],
    ['quedar', 'to stay, remain, meet'], ['creer', 'to believe'], ['hablar', 'to speak'], ['llevar', 'to carry, wear'], ['dejar', 'to leave, let'],
    ['seguir', 'to follow, continue'], ['encontrar', 'to find'], ['llamar', 'to call'], ['venir', 'to come'], ['pensar', 'to think'],
    ['salir', 'to go out, leave'], ['volver', 'to return'], ['tomar', 'to take, drink'], ['conocer', 'to know (people, places)'],
    ['vivir', 'to live'], ['sentir', 'to feel'], ['tratar', 'to try, treat'], ['mirar', 'to look'], ['contar', 'to count, tell'],
    ['empezar', 'to begin'], ['esperar', 'to wait, hope'], ['buscar', 'to look for'], ['entrar', 'to enter'], ['trabajar', 'to work'],
    ['escribir', 'to write'], ['perder', 'to lose'], ['entender', 'to understand'], ['pedir', 'to ask for, order'], ['recibir', 'to receive'],
    ['recordar', 'to remember'], ['terminar', 'to finish'], ['permitir', 'to allow'], ['aparecer', 'to appear'], ['conseguir', 'to get, achieve'],
    ['comenzar', 'to begin'], ['servir', 'to serve'], ['sacar', 'to take out'], ['necesitar', 'to need'], ['mantener', 'to maintain'],
    ['resultar', 'to turn out'], ['leer', 'to read'], ['caer', 'to fall'], ['cambiar', 'to change'], ['presentar', 'to present, introduce'],
    ['crear', 'to create'], ['abrir', 'to open'], ['considerar', 'to consider'], ['oír', 'to hear'], ['acabar', 'to finish'],
    ['convertir', 'to convert'], ['ganar', 'to win, earn'], ['traer', 'to bring'], ['realizar', 'to carry out'], ['suponer', 'to suppose'],
    ['comprender', 'to understand'], ['explicar', 'to explain'], ['dormir', 'to sleep'], ['jugar', 'to play'], ['comer', 'to eat'],
    ['beber', 'to drink'], ['pagar', 'to pay'], ['conducir', 'to drive'], ['construir', 'to build'], ['elegir', 'to choose'],
    ['morir', 'to die'], ['preferir', 'to prefer'], ['repetir', 'to repeat'], ['enviar', 'to send'], ['continuar', 'to continue'],
    ['levantarse', 'to get up'], ['acostarse', 'to go to bed'], ['vestirse', 'to get dressed'], ['divertirse', 'to have fun'],
    ['sentarse', 'to sit down'], ['irse', 'to leave, go away'], ['ponerse', 'to put on, become'], ['quedarse', 'to stay'],
    ['estudiar', 'to study'], ['aprender', 'to learn'], ['comprar', 'to buy'], ['viajar', 'to travel'], ['cocinar', 'to cook'],
    ['reír', 'to laugh'], ['caber', 'to fit'], ['haber', 'to have (auxiliary)'], ['andar', 'to walk'], ['traducir', 'to translate'],
    ['almorzar', 'to have lunch'], ['cerrar', 'to close'], ['costar', 'to cost'], ['llover', 'to rain'], ['oler', 'to smell'],
    ['obtener', 'to obtain'], ['proponer', 'to propose'], ['devolver', 'to give back'], ['descubrir', 'to discover'], ['romper', 'to break'],
    ['huir', 'to flee'], ['corregir', 'to correct'], ['vencer', 'to defeat'], ['coger', 'to take, catch'], ['reunirse', 'to meet']
  ];

  G.Verbs = { conj, gerund, participle, PERS, TENSES, VERBS, attach };
})(typeof window !== 'undefined' ? window : globalThis);
