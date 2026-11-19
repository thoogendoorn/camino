/* Pronunciation sets for the Speaking studio (Phase 5).
   groups: words that differ in one sound (listen-and-choose + say-it); words: say-it only; twisters: whole phrases. */
(function () {
  const P = CAMINO.pronSet;

  P({ id: 'r-rr', title: 'pero / perro', sound: 'r and rr', level: 'A1',
    tips: `Spanish has two r sounds, and they change the meaning of words. <b>r</b> between vowels is a single quick tap of the tongue tip behind the top teeth, like the <i>tt</i> in American English «butter». <b>rr</b> is a trill: the tongue tip vibrates several times. Words that <i>start</i> with r (rosa, Roma) and r after n, l or s (Enrique, alrededor, Israel) are always trilled, even with a single letter. If you can't trill yet, practise «dr-dr-dr» quickly, then drop the d.`,
    groups: [['pero', 'perro'], ['caro', 'carro'], ['para', 'parra'], ['cero', 'cerro'], ['coro', 'corro'], ['foro', 'forro'], ['pera', 'perra'], ['ahora', 'ahorra']],
    words: ['rosa', 'Roma', 'Enrique', 'alrededor', 'guitarra', 'ferrocarril', 'arriba', 'tierra'] });

  P({ id: 's-z', title: 'casa / caza', sound: 's and z (Castilian distinction)', level: 'A1',
    tips: `In most of Spain, <b>z</b> and <b>c</b> before e or i are pronounced like the <i>th</i> in English «think», with the tongue between the teeth. <b>s</b> is a normal s, often with the tongue tip slightly raised. This is called <i>distinción</i>, and it separates words like casa (house) and caza (hunting). In Andalusia, the Canary Islands and Latin America most people use <i>seseo</i> (both as s), which is equally correct; this course teaches the Castilian norm, so practise the difference.`,
    groups: [['casa', 'caza'], ['coser', 'cocer'], ['sien', 'cien'], ['siervo', 'ciervo'], ['masa', 'maza'], ['sumo', 'zumo'], ['poso', 'pozo'], ['seta', 'zeta'], ['abrasar', 'abrazar']],
    words: ['cerveza', 'cocina', 'Zaragoza', 'gracias', 'zapatos', 'cinco', 'Barcelona', 'azúcar'] });

  P({ id: 'jota', title: 'jamón, gente', sound: 'the jota (j, and g before e, i)', level: 'A1',
    tips: `The Spanish <b>j</b> — and <b>g</b> before e or i — is made at the back of the mouth, like the <i>ch</i> in Scottish «loch» or Dutch «goed», and in Castilian Spanish it is quite strong. Before a, o, u, the g is soft and voiced (gato, gota). Listen to the pairs and feel where the sound is made: hijo has the strong jota, higo the soft g.`,
    groups: [['hijo', 'higo'], ['ajo', 'hago'], ['jota', 'gota'], ['jarra', 'garra']],
    words: ['jamón', 'ojo', 'mujer', 'jueves', 'joven', 'gente', 'girasol', 'trabajo', 'viaje', 'Jorge', 'reloj', 'extranjero'] });

  P({ id: 'enye', title: 'cana / caña', sound: 'n and ñ', level: 'A1',
    tips: `<b>ñ</b> is one sound, made with the middle of the tongue pressed against the roof of the mouth, like the <i>ny</i> in «canyon» or the <i>gn</i> in French «champagne». It is a different letter from n, and the difference matters: cana is a grey hair, caña a reed or a small beer.`,
    groups: [['cana', 'caña'], ['mono', 'moño'], ['pena', 'peña'], ['una', 'uña'], ['sonar', 'soñar']],
    words: ['España', 'mañana', 'niño', 'señora', 'otoño', 'montaña', 'pequeño', 'compañero'] });

  P({ id: 'vocales', title: 'paso, peso, piso, poso, puso', sound: 'the five pure vowels', level: 'A1',
    tips: `Spanish has five vowels, and each has one short, clean sound: a, e, i, o, u. They never glide like English vowels («no» is not «now»), and they don't weaken in unstressed syllables: every vowel in «universidad» is clear. Keep your mouth still while you say each vowel.`,
    groups: [['paso', 'peso', 'piso', 'poso', 'puso'], ['mesa', 'misa', 'musa', 'masa']],
    words: ['universidad', 'oportunidad', 'teléfono', 'Uruguay', 'aeropuerto', 'europeo'] });

  P({ id: 'acentos', title: 'hablo / habló', sound: 'stress and written accents', level: 'A2',
    tips: `In Spanish, which syllable is stressed can change the meaning, and the written accent tells you where the stress goes. Hablo (I speak) is stressed on the first syllable; habló (he spoke) on the last. Término (term), termino (I finish) and terminó (she finished) are three different words. Without an accent, words ending in a vowel, n or s are stressed on the second-to-last syllable; others on the last.`,
    groups: [['hablo', 'habló'], ['papa', 'papá'], ['ingles', 'inglés'], ['este', 'esté'], ['canto', 'cantó'], ['término', 'termino', 'terminó'], ['público', 'publico', 'publicó'], ['ánimo', 'animo', 'animó'], ['célebre', 'celebre', 'celebré']],
    words: ['árbol', 'lápiz', 'café', 'música', 'canción', 'examen', 'exámenes', 'ciudad'] });

  P({ id: 'suaves', title: 'nada, todo, uva', sound: 'soft b, d and g between vowels', level: 'A2',
    tips: `Between vowels, Spanish <b>b/v</b>, <b>d</b> and <b>g</b> become soft: the lips or tongue come close but don't close completely. «Nada» sounds almost like English «natha» (with the th of «this»), «uva» has very soft lips, «lago» has a soft breathy g. At the end of a word, d is very weak in Castilian: Madrid, verdad, usted. And b and v sound exactly the same in Spanish.`,
    words: ['nada', 'todo', 'cada', 'lado', 'verdad', 'Madrid', 'usted', 'abogado', 'uva', 'Sevilla', 'lago', 'agua', 'escribir', 'Córdoba'] });

  P({ id: 'trabalenguas', title: 'Trabalenguas', sound: 'tongue twisters', level: 'A2',
    tips: `Traditional Spanish tongue twisters. Listen first at slow speed, then say each one into the microphone. The checker compares your words with the original, so it tells you which words the microphone couldn't recognise. Speed comes later: clarity first.`,
    twisters: ['Tres tristes tigres tragaban trigo en un trigal.', 'Erre con erre cigarro, erre con erre barril, rápido ruedan los carros cargados de azúcar del ferrocarril.', 'Pablito clavó un clavito. ¿Qué clavito clavó Pablito?', 'Como poco coco como, poco coco compro.', 'El cielo está enladrillado. ¿Quién lo desenladrillará? El desenladrillador que lo desenladrille, buen desenladrillador será.', 'Pancha plancha con cuatro planchas. ¿Con cuántas planchas plancha Pancha?'] });
})();
