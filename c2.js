/* C2 · Maestría — Etapa 6: Ponferrada → Santiago de Compostela */
(function () {
  const R = RES, U = u => { u.level = 'C2'; CAMINO_UNITS.push(u); };

  U({
    id: 'c2-01', title: 'Matices léxicos: ser/estar y falsos amigos', goal: ['Master meaning changes with ser and estar', 'Avoid false friends and confusing pairs', 'Choose precise vocabulary'],
    grammar: {
      t: 'Meaning shifts and precision',
      h: `<p><b>ser / estar + same adjective</b>: <i>ser listo</i> (clever) / <i>estar listo</i> (ready); <i>ser rico</i> (rich) / <i>estar rico</i> (tasty); <i>ser malo</i> (bad, evil) / <i>estar malo</i> (ill); <i>ser vivo</i> (sharp) / <i>estar vivo</i> (alive); <i>ser despierto</i> (alert) / <i>estar despierto</i> (awake); <i>ser atento</i> (considerate) / <i>estar atento</i> (paying attention); <i>ser verde</i> (green; inexperienced) / <i>estar verde</i> (unripe); <i>ser católico</i> / <i>no estar muy católico</i> (unwell).</p>
<p><b>Events take ser</b>: <i>La fiesta <b>es</b> en mi casa</i> (not está).</p>
<p><b>False friends for Dutch/English speakers</b>: <i>embarazada</i> (pregnant), <i>constipado</i> (having a cold), <i>actual</i> (current), <i>actualmente</i> (currently), <i>sensible</i> (sensitive), <i>éxito</i> (success), <i>librería</i> (bookshop), <i>carpeta</i> (folder), <i>asistir</i> (to attend), <i>realizar</i> (to carry out), <i>discutir</i> (to argue), <i>eventualmente</i> (possibly, not "eventually" = <i>finalmente</i>).</p>
<p><b>Confusing pairs</b>: <i>sino / si no, porque / por qué / porqué / por que, demás / de más, haber / a ver, echo / hecho, tuvo / tubo, halla / haya / allá</i>.</p>`
    },
    vocab: [['estar listo', 'to be ready'], ['ser listo', 'to be clever'], ['estar rico', 'to be tasty'], ['estar malo', 'to be ill'], ['ser vivo', 'to be sharp, quick-witted'],
      ['embarazada', 'pregnant'], ['constipado/a', 'having a cold'], ['actual', 'current'], ['sensible', 'sensitive'], ['el éxito', 'success'], ['la librería', 'bookshop'],
      ['discutir', 'to argue'], ['eventualmente', 'possibly, occasionally'], ['sino', 'but rather'], ['a ver', 'let\'s see'], ['de más', 'too much, extra']],
    drills: [['La paella ___ riquísima. (tasty)', 'está', 'The paella is delicious.'], ['Mi sobrina ___ muy lista; siempre saca sobresaliente.', 'es', 'My niece is very clever; she always gets top marks.'],
      ['¿___ listos? Nos vamos ya.', 'estáis', 'Are you ready? We\'re leaving now.'], ['La reunión ___ en la sala 3.', 'es', 'The meeting is in room 3.'],
      ['No es rojo, ___ granate.', 'sino', 'It\'s not red, but maroon.'], ['___ no vienes, me enfado.', 'si', 'If you don\'t come, I\'ll get angry.'],
      ['¿___ qué no viniste?', 'por', 'Why didn\'t you come?'], ['___ si mañana hace sol.', 'a ver', 'Let\'s see if it\'s sunny tomorrow.']],
    sentences: [['Mi abuelo es muy mayor, pero está muy vivo.', 'My grandfather is very old, but he\'s very lively.'], ['No es que sea malo, es que está malo.', 'It\'s not that he\'s bad, it\'s that he\'s ill.'],
      ['Actualmente trabajo en una librería.', 'I currently work in a bookshop.'], ['Estoy constipada, no embarazada.', 'I have a cold, I\'m not pregnant.'],
      ['No quiero té, sino café.', 'I don\'t want tea, but coffee.'], ['Has echado sal de más.', 'You\'ve put in too much salt.']],
    reading: {
      t: 'Malentendidos', x: `Mi amiga Sanne, holandesa, llevaba tres semanas en Madrid cuando le dijo a su jefe que estaba "embarazada" porque tenía vergüenza. El jefe la felicitó efusivamente y ella no entendía nada. Días después, en una cena, comentó que la comida "era muy rica"; la anfitriona sonrió, aunque lo correcto habría sido decir que estaba rica. Ahora Sanne se ríe de aquellos errores: "Al fin y al cabo, equivocarse es parte del éxito", dice. Ella sí que es lista.`,
      q: [['¿Qué quería decir Sanne con "embarazada"?', ['Que tenía vergüenza', 'Que estaba enferma', 'Que estaba embarazada'], 0], ['¿Qué habría sido lo correcto en la cena?', ['La comida es rica', 'La comida está rica', 'La comida es lista'], 1], ['¿Cómo ve Sanne ahora sus errores?', ['Con vergüenza', 'Como parte del éxito', 'Con rabia'], 1]]
    },
    write: 'Write a humorous story (250 words) built around three misunderstandings caused by false friends or ser/estar shifts, then explain each one.',
    talk: 'You are a witty Spanish language columnist. Quiz the learner on ser/estar meaning shifts and false friends through playful example sentences, and discuss tricky words they have met.',
    res: [R.fundeu(), R.elpais(), R.juan()]
  });

  U({
    id: 'c2-02', title: 'Estilo y énfasis', goal: ['Use word order and cleft sentences for emphasis', 'Use lo + adjective, neuter structures and rhetorical devices', 'Write with stylistic control'],
    grammar: {
      t: 'Emphasis, focus and style',
      h: `<p><b>Cleft sentences</b> (ser enfático): <i>Fue Ana <b>quien</b> lo dijo. Es aquí <b>donde</b> nos conocimos. Fue entonces <b>cuando</b> lo entendí. Lo que necesito <b>es</b> tiempo.</i> Agreement: <i>Fueron ellos los que…</i></p>
<p><b>Word order</b>: Spanish moves new information to the end: <i>Ha llegado <b>tu hermano</b></i> (vs Tu hermano ha llegado). Fronting with resumptive pronoun: <i><b>Ese libro</b> ya <b>lo</b> he leído.</i></p>
<p><b>Neuter lo</b>: <i>lo bueno, lo peor de todo, lo de ayer</i> (the business about yesterday), <i>lo + adj./adv. + que</i>: <i>No te imaginas lo lejos que está.</i> <i>A lo grande, a lo loco.</i></p>
<p><b>Intensifying</b>: <i>¡Qué + noun + tan/más + adj.!</i> (¡Qué casa más bonita!), <i>¡Si será…!</i>, <i>de lo más + adj.</i> (de lo más interesante), <i>la mar de</i> (very, colloquial), <i>sí que</i>: <i>Eso sí que es raro.</i></p>
<p><b>Rhetoric</b>: tricolon, anaphora, antithesis, rhetorical questions — used in speeches and columns.</p>`
    },
    vocab: [['lo de', 'the matter of'], ['lo mejor / lo peor', 'the best / worst thing'], ['de lo más', 'extremely'], ['la mar de', 'really, very (colloquial)'], ['sí que', 'really (emphatic)'],
      ['ni siquiera', 'not even'], ['a lo grande', 'in style'], ['recalcar', 'to stress'], ['hacer hincapié en', 'to emphasise'], ['el matiz', 'nuance'], ['la ironía', 'irony'],
      ['el recurso estilístico', 'stylistic device'], ['la anáfora', 'anaphora'], ['la antítesis', 'antithesis']],
    drills: [['Fue María ___ me lo contó.', 'quien|la que', 'It was María who told me.'], ['Es en esta plaza ___ nos conocimos.', 'donde', 'It was in this square that we met.'], ['___ que más me gusta es el silencio.', 'lo', 'What I like most is the silence.'],
      ['No te imaginas lo cansado ___ estoy.', 'que', 'You can\'t imagine how tired I am.'], ['Ese libro ya ___ he leído.', 'lo', 'That book I\'ve already read.'], ['¡Qué día ___ bonito!', 'más|tan', 'What a beautiful day!'],
      ['La conferencia fue de lo ___ interesante.', 'más', 'The lecture was extremely interesting.'], ['Eso ___ que es una buena idea.', 'sí', 'Now that really is a good idea.']],
    sentences: [['Fue entonces cuando me di cuenta de todo.', 'It was then that I realised everything.'], ['Lo de ayer no puede volver a pasar.', 'What happened yesterday can\'t happen again.'],
      ['No sabes lo mucho que te he echado de menos.', 'You don\'t know how much I\'ve missed you.'], ['Lo peor de todo es que nadie se disculpó.', 'The worst thing of all is that nobody apologised.'],
      ['Ni siquiera me saludó.', 'He didn\'t even say hello to me.'], ['Esa película sí que me emocionó.', 'That film really moved me.']],
    reading: {
      t: 'Caminante, no hay camino (Antonio Machado, 1912)', x: `Caminante, son tus huellas
el camino y nada más;
caminante, no hay camino,
se hace camino al andar.
Al andar se hace camino,
y al volver la vista atrás
se ve la senda que nunca
se ha de volver a pisar.
Caminante, no hay camino,
sino estelas en la mar.`,
      q: [['¿Qué es el camino, según el poema?', ['Las huellas del caminante', 'Una carretera', 'El mar'], 0], ['¿Qué recurso se repite ("caminante, no hay camino")?', ['La anáfora / repetición', 'La pregunta retórica', 'La ironía'], 0], ['¿Qué se ve al mirar atrás?', ['Una senda que no se volverá a pisar', 'El mar', 'Otro caminante'], 0]]
    },
    write: 'Write a 250-word speech or column about learning a language as a journey, using at least four cleft sentences, two "lo + adj. + que" and one rhetorical device you can name.',
    talk: 'You are a Spanish literature teacher discussing Machado\'s "Caminante, no hay camino" with the learner. Ask for interpretation, then have them rephrase plain sentences with emphasis (cleft sentences, lo + adj.).',
    res: [R.bvmc('Antonio Machado, Campos de Castilla'), R.ser('podcasts culturales'), R.rtve('Imprescindibles (documentales)')]
  });

  U({
    id: 'c2-03', title: 'Variedades del español', goal: ['Recognise major varieties of Spanish (Spain and the Americas)', 'Understand voseo, seseo, leísmo and regional vocabulary', 'Adapt to different accents'],
    grammar: {
      t: 'Variation across the Spanish-speaking world',
      h: `<p><b>Pronouns</b>: Spain uses <b>vosotros</b>; Latin America and the Canaries use <b>ustedes</b> for all plural "you". <b>Voseo</b> (vos instead of tú) in Argentina, Uruguay, Central America and parts of Colombia: <i>vos tenés, vos sos, vení</i>.</p>
<p><b>Pronunciation</b>: <b>distinción</b> (z/ci = /θ/, as in "think") in most of Spain; <b>seseo</b> (z = s) in the Americas, the Canaries and parts of Andalusia; <b>yeísmo</b> (ll = y) almost everywhere; aspiration of final <b>-s</b> in Andalusia, the Caribbean and elsewhere (<i>lah casah</i>). In Argentina, ll/y sound like "sh".</p>
<p><b>Grammar</b>: Spain prefers the <b>pretérito perfecto</b> for today (<i>he comido</i>); Latin America uses the indefinido (<i>comí</i>). <b>Leísmo</b> (<i>le vi</i> for a man) is typical of central Spain.</p>
<p><b>Vocabulary</b> (Spain / Latin America): <i>coche / carro, auto; ordenador / computadora; móvil / celular; zumo / jugo; conducir / manejar; coger / tomar (avoid "coger" in Mexico/Argentina!); vale / okey, dale; patata / papa; piso / departamento, apartamento; gafas / lentes, anteojos</i>.</p>
<p>Spain's co-official languages: <b>catalán, gallego, euskera</b> (and Valencian, Aranese). You'll see bilingual signs.</p>`
    },
    vocab: [['el voseo', 'use of vos'], ['el seseo', 'pronouncing z/c as s'], ['la distinción', 'z/c vs s distinction'], ['el leísmo', 'using le as direct object'], ['el acento', 'accent'],
      ['el carro / el auto', 'car (Lat. Am.)'], ['la computadora', 'computer (Lat. Am.)'], ['el celular', 'mobile (Lat. Am.)'], ['manejar', 'to drive (Lat. Am.)'], ['el jugo', 'juice (Lat. Am.)'],
      ['la papa', 'potato (Lat. Am. & Canaries)'], ['el departamento', 'flat (Lat. Am.)'], ['dale', 'OK (Rioplatense, Caribbean)'], ['la lengua cooficial', 'co-official language'], ['el euskera', 'Basque'], ['el gallego', 'Galician']],
    drills: [['Spain: el móvil → Latin America: el ___', 'celular', 'mobile phone'], ['Spain: conducir → Mexico: ___', 'manejar', 'to drive'], ['Spain: el ordenador → Latin America: la ___', 'computadora', 'computer'],
      ['Spain: el zumo → Latin America: el ___', 'jugo', 'juice'], ['Argentina: "vos ___ (ser) muy amable" ', 'sos', 'you are very kind (voseo)'], ['Argentina: "¿Vos ___ (tener) hora?"', 'tenés', 'Do you have the time? (voseo)'],
      ['Spain: "Hoy ___ comido paella" (pret. perfecto)', 'he', 'Today I have eaten paella'], ['Latin America: "Hoy ___ (comer, yo) paella" (indefinido)', 'comí', 'Today I ate paella']],
    sentences: [['En Buenos Aires me dijeron: "¿Vos de dónde sos?"', 'In Buenos Aires they said to me: "Where are you from?"'], ['En México se dice "carro" y en España "coche".', 'In Mexico they say "carro" and in Spain "coche".'],
      ['En Canarias usan "ustedes" en lugar de "vosotros".', 'In the Canaries they use "ustedes" instead of "vosotros".'], ['En Andalucía es común aspirar la ese final.', 'In Andalusia it is common to aspirate final s.'],
      ['En Galicia muchas personas hablan gallego y castellano.', 'In Galicia many people speak Galician and Castilian.'], ['Cada variedad es igual de correcta.', 'Every variety is equally correct.']],
    reading: {
      t: 'Un idioma, muchas voces', x: `El español lo hablan casi seiscientos millones de personas, y ninguna variedad es más "correcta" que otra. Un madrileño dice "coge el autobús, que llegamos tarde", mientras que un mexicano diría "toma el camión, que ya es tarde". En Argentina, el voseo y la entonación de influencia italiana sorprenden a muchos estudiantes. En el Caribe, la ese final casi desaparece. Para un estudiante que aprende el español de España, escuchar otras variedades —por ejemplo, con podcasts como Radio Ambulante— es la mejor manera de llegar a entenderlo todo.`,
      q: [['¿Hay una variedad más correcta?', ['Sí, la de España', 'No', 'Sí, la de México'], 1], ['¿Qué rasgo se menciona de Argentina?', ['El voseo', 'El seseo', 'La distinción'], 0], ['¿Qué recomienda el texto?', ['Escuchar otras variedades', 'Aprender solo una', 'Evitar el Caribe'], 0]]
    },
    write: 'Write a 250-word essay comparing the Spanish of Spain with one Latin American variety you\'ve heard (pronunciation, grammar, vocabulary) and explain why exposure to variety matters.',
    talk: 'You are a Spanish-speaking linguist who can imitate accents. Discuss variation across the Spanish-speaking world with the learner; switch briefly to Argentine voseo or Mexican vocabulary and ask them to "translate" into Spain-Spanish.',
    res: [R.ambulante(), R.ds('Advanced (varied accents)'), R.easy('Argentina'), R.easy('México')]
  });

  U({
    id: 'c2-04', title: 'Santiago: el español literario y culto', goal: ['Read literary and academic Spanish with ease', 'Recognise archaic and literary forms (futuro de subjuntivo, -se forms)', 'Plan your lifelong immersion'],
    grammar: {
      t: 'Literary and legal Spanish',
      h: `<p><b>Futuro de subjuntivo</b> (-re): survives in legal texts and set phrases: <i>Adonde fueres, haz lo que vieres</i> (When in Rome…). <i>El que infringiere esta norma será sancionado.</i> Form: ellos indefinido –ron + <b>-re, -res, -re, -remos, -reis, -ren</b>: <i>hablare, tuviere, fuere</i>.</p>
<p><b>-se imperfect subjunctive</b>: <i>hablase, tuviese</i> — interchangeable with -ra in most uses, frequent in literature and in Spain.</p>
<p><b>Literary pluperfect -ra</b>: in journalism and literature, <i>-ra</i> can mean pluperfect indicative: <i>el libro que <b>publicara</b> en 1950</i> (= había publicado).</p>
<p><b>Enclitic pronouns on finite verbs</b> (archaic/literary): <i>díjole, hízose, érase una vez</i>.</p>
<p><b>Formal relatives & connectors</b>: <i>el cual, cuyo, a la sazón, otrosí, por ende, empero</i> (archaic), <i>so pena de, habida cuenta de que</i>.</p>
<p>From here on, the path is <b>input</b>: novels, press, radio, films, conversation. Keep the reviews running, read every day, and you will keep improving for life.</p>`
    },
    vocab: [['adonde fueres, haz lo que vieres', 'when in Rome, do as the Romans do'], ['érase una vez', 'once upon a time'], ['por ende', 'therefore (formal)'], ['a la sazón', 'at that time'],
      ['habida cuenta de que', 'given that'], ['so pena de', 'on pain of'], ['la novela', 'novel'], ['el ensayo', 'essay'], ['el relato', 'short story'], ['la prosa', 'prose'],
      ['el verso', 'verse'], ['el siglo de oro', 'Golden Age'], ['la picaresca', 'picaresque genre'], ['el peregrino', 'pilgrim'], ['la meta', 'finish line, goal'], ['seguir aprendiendo', 'to keep learning']],
    drills: [['Adonde ___ (ir, tú, fut. subj.), haz lo que vieres.', 'fueres', 'When in Rome…'], ['___ una vez un rey… (érase)', 'érase', 'Once upon a time there was a king…'],
      ['Si yo ___ (tener, -se form) tiempo, leería más.', 'tuviese', 'If I had time, I\'d read more.'], ['El que ___ (infringir, fut. subj.) la norma será sancionado.', 'infringiere', 'Whoever breaks the rule will be penalised.'],
      ['El edificio, cuyo arquitecto ___ (ser) Gaudí, …', 'fue', 'The building, whose architect was Gaudí, …'], ['Habida ___ de que no hay fondos, se cancela el proyecto.', 'cuenta', 'Given that there are no funds, the project is cancelled.'],
      ['Llovía; por ___, nadie salió.', 'ende', 'It was raining; therefore nobody went out.'], ['El peregrino llegó por fin a la ___: Santiago.', 'meta', 'The pilgrim finally reached the goal: Santiago.']],
    sentences: [['Adonde fueres, haz lo que vieres.', 'When in Rome, do as the Romans do.'], ['Érase una vez un peregrino que caminaba hacia Santiago.', 'Once upon a time there was a pilgrim walking towards Santiago.'],
      ['El Quijote se publicó en dos partes, en 1605 y 1615.', 'Don Quixote was published in two parts, in 1605 and 1615.'], ['Si tuviese que elegir un libro, elegiría Cien años de soledad.', 'If I had to choose one book, I\'d choose One Hundred Years of Solitude.'],
      ['Leer a diario es la mejor manera de mantener el idioma.', 'Reading daily is the best way to maintain the language.'], ['Llegar a Santiago no es el final del camino.', 'Reaching Santiago is not the end of the road.']],
    reading: {
      t: 'Don Quijote (Cervantes, 1605): el comienzo', x: `En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lentejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda.`,
      q: [['¿Dónde vivía el hidalgo?', ['En un lugar de la Mancha', 'En Madrid', 'En Galicia'], 0], ['¿Qué significa "no ha mucho tiempo"?', ['Hace poco tiempo', 'Hace muchos siglos', 'No tiene tiempo'], 0], ['¿Qué comía los viernes?', ['Lentejas', 'Palomino', 'Carnero'], 0]]
    },
    write: 'Write a 300-word reflection on your journey learning Spanish: where you started, what changed, what you\'ll read and listen to next. Imitate one literary device you\'ve learned.',
    talk: 'You are a well-read Spanish bookseller in Santiago de Compostela. Discuss literature with the learner (Cervantes, Machado, Lorca, contemporary authors), recommend books for their level and help them plan lifelong immersion.',
    res: [R.bvmc('Don Quijote de la Mancha'), R.rtve('Página Dos (programa de libros)'), R.ser('podcasts de literatura'), R.exchange()]
  });
})();
