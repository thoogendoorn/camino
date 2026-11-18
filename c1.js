/* C1 · Dominio — Etapa 5: León → Ponferrada */
(function () {
  const R = RES, U = u => { u.level = 'C1'; CAMINO_UNITS.push(u); };

  U({
    id: 'c1-01', title: 'Matices del subjuntivo', goal: ['Use the subjunctive after concessive and modal expressions (por mucho que, como si, a no ser que)', 'Understand reduplicated forms (sea como sea, pase lo que pase)'],
    grammar: {
      t: 'Advanced subjunctive triggers',
      h: `<p><b>Concession</b>: <i>por mucho que / por más que + subj.</i> (however much): <i>Por mucho que insistas, no iré.</i> <b>Aun cuando</b>, <b>si bien</b> (+ ind., formal).</p>
<p><b>Condition</b>: <i>a no ser que, a menos que, siempre que, siempre y cuando, con tal de que, en caso de que</i> + subj.: <i>Iremos, a no ser que llueva.</i> <i>Te lo dejo siempre que me lo devuelvas.</i></p>
<p><b>Purpose</b>: <i>para que, a fin de que, de modo que</i> (purpose) + subj.: <i>Lo explico despacio para que lo entendáis.</i> (<i>de modo que</i> + ind. = consequence.)</p>
<p><b>Reduplication</b> (whatever, come what may): <i>pase lo que pase, sea como sea, digan lo que digan, cueste lo que cueste, quieras o no</i>.</p>
<p><b>Emotional/value verbs in the past</b>: <i>Me molestó que no me <b>hubieras avisado</b>.</i> <b>El hecho de que</b> + subj. (usually): <i>El hecho de que sea gratis no significa que sea bueno.</i></p>
<p><b>Lo + adjective + que</b>: <i>No sabes lo difícil que es.</i></p>`
    },
    vocab: [['por mucho que', 'however much'], ['a no ser que', 'unless'], ['siempre y cuando', 'provided that'], ['con tal de que', 'as long as / so that'], ['en caso de que', 'in case'],
      ['pase lo que pase', 'whatever happens'], ['sea como sea', 'one way or another'], ['cueste lo que cueste', 'at all costs'], ['el hecho de que', 'the fact that'], ['si bien', 'although (formal)'],
      ['quieras o no', 'whether you like it or not'], ['dicho sea de paso', 'incidentally'], ['empeñarse en', 'to insist on'], ['la tozudez', 'stubbornness']],
    drills: [['Por mucho que ___ (insistir, tú), no voy a cambiar de opinión.', 'insistas', 'However much you insist, I won\'t change my mind.'], ['Saldremos a las ocho, a no ser que ___ (llover).', 'llueva', 'We\'ll leave at eight, unless it rains.'],
      ['Te lo presto siempre que me lo ___ (devolver, tú) mañana.', 'devuelvas', 'I\'ll lend it to you provided you give it back tomorrow.'], ['Pase lo que ___, te apoyaré.', 'pase', 'Whatever happens, I\'ll support you.'],
      ['Lo digo para que todos lo ___ (saber).', 'sepan|sepáis', 'I\'m saying it so that everyone knows.'], ['Me molestó que no me ___ ___ (avisar, tú).', 'hubieras avisado|hubieses avisado', 'It annoyed me that you hadn\'t warned me.'],
      ['El hecho de que ___ (ser) famoso no le da derecho a todo.', 'sea', 'The fact that he\'s famous doesn\'t give him the right to everything.'], ['No sabes lo cansada que ___ (estar, yo).', 'estoy', 'You don\'t know how tired I am.']],
    sentences: [['Lo conseguiré, cueste lo que cueste.', 'I\'ll achieve it, whatever it costs.'], ['Llévate el paraguas, en caso de que llueva.', 'Take the umbrella in case it rains.'],
      ['Por más que lo intento, no me sale.', 'However much I try, I can\'t do it.'], ['Te ayudo con tal de que me invites a cenar.', 'I\'ll help you as long as you buy me dinner.'],
      ['Digan lo que digan, yo sé lo que vi.', 'Whatever they say, I know what I saw.'], ['El hecho de que no conteste no significa que esté enfadado.', 'The fact that he doesn\'t answer doesn\'t mean he\'s angry.']],
    reading: {
      t: 'La tozudez de mi abuelo', x: `Mi abuelo tiene noventa y dos años y se empeña en seguir cuidando su huerto, por mucho que le digamos que descanse. "Mientras pueda andar, iré al huerto, quieras o no", le dice a mi madre. Acepta que le acompañemos, siempre y cuando no le digamos cómo tiene que plantar los tomates. Si bien a veces nos preocupa, el hecho de que siga tan activo es, sin duda, lo que le mantiene tan lúcido. Pase lo que pase, ese huerto es su vida.`,
      q: [['¿Qué se empeña en hacer el abuelo?', ['Cuidar su huerto', 'Conducir', 'Viajar'], 0], ['¿Con qué condición acepta compañía?', ['Que le lleven en coche', 'Que no le digan cómo plantar', 'Que le paguen'], 1], ['Según el texto, ¿qué le mantiene lúcido?', ['Seguir activo', 'Los tomates', 'La medicina'], 0]]
    },
    write: 'Write a persuasive paragraph (200 words) about something you\'re determined to do, using at least six of this unit\'s structures (por mucho que, siempre que, pase lo que pase…).',
    talk: 'You are a stubborn but charming Spanish uncle negotiating holiday plans with the learner. Set conditions (siempre que, a no ser que) and make them counter-argue with concessive structures. Correct subtly.',
    res: [R.slcAdv(), R.ser('Hoy por hoy / La Ventana'), R.elpais()]
  });

  U({
    id: 'c1-02', title: 'Perífrasis avanzadas y aspecto', goal: ['Express nuances of aspect: progression, approximation, culmination and repetition', 'Use andar/ir/venir + gerundio, llegar a, venir a, estar por, tener + participio'],
    grammar: {
      t: 'Advanced verbal periphrases',
      h: `<p><b>ir + gerundio</b>: gradual progression: <i>Poco a poco voy entendiendo el sistema.</i></p>
<p><b>venir + gerundio</b>: action repeated from the past up to now: <i>Vengo diciéndotelo desde hace meses.</i></p>
<p><b>andar + gerundio</b>: going around doing (often negative): <i>Anda diciendo que soy un tacaño.</i></p>
<p><b>llegar a + inf.</b>: culmination / extreme: <i>Llegó a ganar tres premios. Llegué a pensar que no vendrías.</i></p>
<p><b>venir a + inf.</b>: approximation: <i>Viene a costar unos mil euros. Esto viene a decir que…</i></p>
<p><b>estar a punto de</b> (about to), <b>estar por</b> (inclined to / still to be done: <i>la casa está por limpiar</i>), <b>echarse a</b> (burst into: <i>se echó a reír</i>).</p>
<p><b>tener + participio</b> (agreeing): accumulated result: <i>Tengo leídos tres capítulos.</i> <b>dar por + participle</b>: consider as: <i>Lo doy por terminado.</i></p>`
    },
    vocab: [['ir + gerundio', 'gradually do'], ['venir + gerundio', 'have been doing (repeatedly)'], ['andar + gerundio', 'go around doing'], ['llegar a', 'to go as far as'], ['venir a', 'to roughly amount to'],
      ['estar a punto de', 'to be about to'], ['echarse a', 'to burst into'], ['dar por hecho', 'to take for granted'], ['dar por terminado', 'to consider finished'], ['tener + participio', 'to have (done, accumulated)'],
      ['poco a poco', 'little by little'], ['el rumor', 'rumour'], ['tacaño/a', 'stingy'], ['el plazo de entrega', 'delivery deadline']],
    drills: [['Poco a poco ___ ___ (ir, yo / mejorar).', 'voy mejorando', 'Little by little I\'m getting better.'], ['___ diciéndotelo desde enero. (venir, yo)', 'vengo', 'I\'ve been telling you since January.'],
      ['Anda ___ (contar) a todo el mundo que se va a casar.', 'contando', 'He\'s going around telling everyone he\'s getting married.'], ['Llegué ___ pensar que no vendrías.', 'a', 'I even started to think you wouldn\'t come.'],
      ['El arreglo viene ___ costar unos 300 euros.', 'a', 'The repair comes to about 300 euros.'], ['Estábamos a punto ___ salir cuando llamaste.', 'de', 'We were about to leave when you called.'],
      ['Cuando lo vio, se echó ___ reír.', 'a', 'When she saw it, she burst out laughing.'], ['Tengo ___ (corregir) veinte exámenes de cuarenta.', 'corregidos', 'I\'ve corrected twenty exams out of forty.']],
    sentences: [['Voy acostumbrándome al ritmo de la ciudad.', 'I\'m gradually getting used to the pace of the city.'], ['La empresa viene perdiendo dinero desde hace años.', 'The company has been losing money for years.'],
      ['Llegó a trabajar dieciséis horas al día.', 'He went as far as working sixteen hours a day.'], ['Lo que dice viene a ser lo mismo.', 'What she says amounts to the same thing.'],
      ['No des por hecho que te van a ayudar.', 'Don\'t take it for granted that they\'ll help you.'], ['El proyecto está por terminar.', 'The project is yet to be finished.']],
    reading: {
      t: 'El rumor', x: `Hace semanas que alguien anda diciendo por la oficina que van a cerrar la sede de Zaragoza. Al principio nadie le daba importancia, pero el rumor ha ido creciendo y algunos compañeros han llegado a buscar otro trabajo. La dirección viene negándolo desde el principio, aunque sus explicaciones vienen a confirmar que habrá cambios. Ayer, cuando la directora estaba a punto de empezar la reunión, alguien preguntó directamente. Ella se echó a reír y dijo: "Dad por hecho que nadie va a perder su puesto".`,
      q: [['¿Qué dice el rumor?', ['Que van a cerrar la sede de Zaragoza', 'Que suben los sueldos', 'Que cambia la directora'], 0], ['¿Qué han llegado a hacer algunos compañeros?', ['Buscar otro trabajo', 'Hacer huelga', 'Mudarse'], 0], ['¿Cómo reaccionó la directora?', ['Se enfadó', 'Se echó a reír', 'No dijo nada'], 1]]
    },
    write: 'Describe a long process in your life (learning Spanish, a project, a move) with ir/venir/andar + gerundio, llegar a, tener + participio (200 words).',
    talk: 'You are a Spanish colleague discussing a long, troubled project at work. Use and elicit advanced periphrases (venimos arrastrando…, vamos avanzando…, llegué a pensar…).',
    res: [R.slcAdv(), R.ser('podcasts de actualidad'), R.notes('Advanced')]
  });

  U({
    id: 'c1-03', title: 'Registro formal y escrito', goal: ['Write formal emails, applications and reports', 'Use nominalisation, impersonal structures and formal connectors', 'Switch between registers'],
    grammar: {
      t: 'Formal register: structures and conventions',
      h: `<p><b>Openings</b>: <i>Estimado/a Sr./Sra. García:</i> (colon, not comma), <i>Muy señores míos:</i> <b>Closings</b>: <i>Atentamente, Un cordial saludo, Quedo a la espera de su respuesta.</i></p>
<p><b>Usted / ustedes</b> throughout; avoid contractions of tone (<i>vale, guay</i>).</p>
<p><b>Nominalisation</b>: verbs → nouns for density: <i>Cuando llegó el director → A la llegada del director</i>; <i>porque subieron los precios → debido a la subida de los precios</i>.</p>
<p><b>Impersonal / distancing</b>: <i>se ruega, se recomienda, cabe destacar que, conviene señalar que, resulta imprescindible</i>.</p>
<p><b>Formal connectors</b>: <i>no obstante, asimismo, por consiguiente, en lo que respecta a, en relación con, a raíz de, con motivo de, a tenor de</i>.</p>
<p><b>Conditional of politeness</b> and <b>imperfect</b>: <i>Le agradecería que me enviara…, Quería solicitar…</i></p>`
    },
    vocab: [['estimado/a', 'dear (formal)'], ['atentamente', 'yours faithfully'], ['adjuntar', 'to attach'], ['solicitar', 'to apply for, request'], ['la solicitud', 'application'],
      ['le agradecería que', 'I would be grateful if you'], ['quedo a la espera de', 'I look forward to'], ['asimismo', 'likewise, also'], ['por consiguiente', 'consequently'],
      ['en lo que respecta a', 'with regard to'], ['a raíz de', 'as a result of'], ['cabe destacar', 'it should be noted'], ['el currículum (CV)', 'CV'], ['la carta de presentación', 'cover letter']],
    drills: [['___ Sra. López: (formal opening)', 'estimada', 'Dear Mrs López:'], ['Le ___ (agradecer) que me enviara la información.', 'agradecería', 'I would be grateful if you sent me the information.'],
      ['Le ___ (adjuntar, yo) mi currículum.', 'adjunto', 'I attach my CV.'], ['Quedo a la ___ de su respuesta.', 'espera', 'I look forward to your reply.'],
      ['Porque subieron los precios → Debido a la ___ de los precios', 'subida', 'Due to the rise in prices'], ['Cuando llegó el ministro → A la ___ del ministro', 'llegada', 'On the minister\'s arrival'],
      ['___ destacar que el plazo termina el lunes.', 'cabe', 'It should be noted that the deadline ends on Monday.'], ['Le escribo en relación ___ la oferta publicada.', 'con', 'I am writing in relation to the published offer.']],
    sentences: [['Me dirijo a ustedes para solicitar información sobre el máster.', 'I am writing to you to request information about the master\'s.'],
      ['Le agradecería que me confirmara la recepción de este correo.', 'I would be grateful if you could confirm receipt of this email.'], ['Adjunto le envío la documentación solicitada.', 'Please find attached the requested documents.'],
      ['A raíz de la reunión del martes, le propongo lo siguiente.', 'Following Tuesday\'s meeting, I propose the following.'], ['Sin otro particular, reciba un cordial saludo.', 'With nothing further, kind regards.'],
      ['En lo que respecta al presupuesto, cabe señalar que es insuficiente.', 'With regard to the budget, it should be noted that it is insufficient.']],
    reading: {
      t: 'Carta de presentación', x: `Estimada Sra. Ruiz:
Me dirijo a usted con motivo de la oferta de empleo de responsable de producto publicada en su página web. Cuento con seis años de experiencia en el sector tecnológico, en los que he liderado equipos internacionales y gestionado proyectos de lanzamiento en el mercado europeo. Asimismo, domino el inglés y el neerlandés, y poseo un nivel avanzado de español. Considero que mi perfil se ajusta a los requisitos del puesto. Le adjunto mi currículum y quedo a su disposición para una entrevista.
Atentamente,
Marieke de Vries`,
      q: [['¿Por qué escribe Marieke?', ['Para quejarse', 'Por una oferta de empleo', 'Para pedir información de un máster'], 1], ['¿Cuántos años de experiencia tiene?', ['Seis', 'Dos', 'Diez'], 0], ['¿Qué adjunta?', ['Su currículum', 'Una foto', 'Un certificado'], 0]]
    },
    write: 'Write a formal cover letter or a formal complaint (220 words) using at least two nominalisations, three formal connectors and correct opening/closing formulas.',
    talk: 'You are an HR manager at a Spanish company conducting a formal job interview with the learner, using usted. Ask about experience, strengths and motivation; correct register slips politely.',
    res: [R.slcAdv(), R.fundeu(), R.elpais()]
  });

  U({
    id: 'c1-04', title: 'Coloquial: el español de la calle', goal: ['Understand and use colloquial Spain-Spanish expressions', 'Recognise slang, intensifiers and fillers', 'Know when not to use them'],
    grammar: {
      t: 'Colloquial Spanish from Spain',
      h: `<p><b>Fillers & discourse markers</b>: <i>pues, bueno, o sea, en plan, vale, venga, vamos, es que, ¿sabes?, ¿no?, tío/tía</i> (among friends).</p>
<p><b>Intensifiers</b>: <i>súper, mogollón (de), un montón (de), cantidad de, re-/requete- (rare in Spain), -ísimo, de narices, de la leche</i> (vulgar-ish).</p>
<p><b>Approval / disapproval</b>: <i>¡Qué guay! ¡Mola! ¡Qué pasada! ¡Flipante! / ¡Qué rollo! ¡Qué palo! ¡Qué cutre!</i></p>
<p><b>Idioms</b>: <i>estar hasta las narices</i> (fed up), <i>ser pan comido</i> (a piece of cake), <i>tomar el pelo</i> (pull someone's leg), <i>estar como una cabra</i> (crazy), <i>no tener ni idea</i>, <i>costar un ojo de la cara</i>, <i>meter la pata</i>, <i>ponerse las pilas</i> (get one's act together), <i>estar en las nubes</i>, <i>dar la lata</i> (pester).</p>
<p><b>Register warning</b>: some words are vulgar but extremely common in Spain (<i>joder, coño, hostia</i>). Recognise them; avoid them in formal settings.</p>`
    },
    vocab: [['¡qué guay!', 'how cool!'], ['mola', 'it\'s cool'], ['¡qué pasada!', 'amazing!'], ['¡qué rollo!', 'how boring / what a drag'], ['¡qué palo!', 'what a pain'], ['cutre', 'tacky, shabby'],
      ['mogollón de', 'loads of'], ['el curro', 'job, work (colloquial)'], ['currar', 'to work (colloquial)'], ['la pasta', 'money (colloquial)'], ['el finde', 'weekend'], ['flipar', 'to be amazed'],
      ['estar hasta las narices', 'to be fed up'], ['ser pan comido', 'to be a piece of cake'], ['tomar el pelo', 'to pull someone\'s leg'], ['estar como una cabra', 'to be crazy'],
      ['costar un ojo de la cara', 'to cost an arm and a leg'], ['ponerse las pilas', 'to get one\'s act together'], ['dar la lata', 'to pester'], ['en plan', 'like (filler)']],
    drills: [['Estoy hasta las ___ de este ruido.', 'narices', 'I\'m fed up with this noise.'], ['El examen fue pan ___.', 'comido', 'The exam was a piece of cake.'], ['No me tomes el ___.', 'pelo', 'Don\'t pull my leg.'],
      ['Este piso cuesta un ojo de la ___.', 'cara', 'This flat costs an arm and a leg.'], ['Tienes que ponerte las ___ si quieres aprobar.', 'pilas', 'You need to get your act together if you want to pass.'],
      ['Mañana tengo que ___ (work, colloquial) a las siete.', 'currar', 'Tomorrow I have to work at seven.'], ['¿Qué haces este ___? (weekend)', 'finde', 'What are you doing this weekend?'], ['El concierto fue una ___. (amazing)', 'pasada', 'The concert was amazing.']],
    sentences: [['¡Qué pasada de vistas!', 'What amazing views!'], ['Tío, estoy flipando con lo que me cuentas.', 'Mate, I can\'t believe what you\'re telling me.'], ['Me ha costado un ojo de la cara.', 'It cost me an arm and a leg.'],
      ['O sea, en plan, no sé qué decirle.', 'I mean, like, I don\'t know what to tell him.'], ['¡Qué rollo de reunión!', 'What a boring meeting!'], ['Venga, ponte las pilas, que llegamos tarde.', 'Come on, get moving, we\'re going to be late.']],
    reading: {
      t: 'Audio de WhatsApp', x: `"¡Tía! ¿Qué pasa? Oye, que el finde que viene hay un concierto en Las Ventas que va a ser una pasada. Las entradas cuestan un ojo de la cara, pero vamos, merece la pena. El problema es que el curro me tiene hasta las narices y no sé si me van a dar el viernes libre. Bueno, tú dime algo, ¿vale? Y no me tomes el pelo como la última vez, que me dijiste que venías y al final nada. ¡Venga, un beso!"`,
      q: [['¿Qué hay el fin de semana?', ['Un concierto', 'Una boda', 'Un partido'], 0], ['¿Cómo son las entradas?', ['Baratas', 'Muy caras', 'Gratis'], 1], ['¿Qué pasó la última vez?', ['Su amiga no fue', 'Llovió', 'Perdieron las entradas'], 0]]
    },
    write: 'Write the same message twice: a WhatsApp audio transcript to a close friend using colloquial Spain-Spanish, and a polite email to a colleague with the same content.',
    talk: 'You are a young madrileño friend chatting very colloquially (tío, en plan, mola, qué pasada). Use idioms and slang naturally, ask the learner to use them too, and explain any they don\'t know.',
    res: [R.easy('expresiones españolas'), R.juan(), R.ser('La Vida Moderna / comedy'), R.rtve('series')]
  });

  U({
    id: 'c1-05', title: 'Argumentar: marcadores del discurso', goal: ['Build, reformulate and conclude complex arguments', 'Use reformulators, concessive and conclusive markers', 'Participate in debates and presentations'],
    grammar: {
      t: 'Discourse markers for argumentation',
      h: `<p><b>Reformulating</b>: <i>es decir, o sea, mejor dicho, dicho de otro modo, en otras palabras</i>.</p>
<p><b>Exemplifying</b>: <i>por ejemplo, pongamos por caso, sin ir más lejos, tal es el caso de</i>.</p>
<p><b>Conceding then countering</b>: <i>Es cierto que… pero; Si bien es verdad que… no es menos cierto que…; Admito que… ahora bien…; Con todo, …</i></p>
<p><b>Reinforcing</b>: <i>de hecho, en realidad, es más, encima, hasta</i>.</p>
<p><b>Concluding</b>: <i>en definitiva, en conclusión, en suma, a fin de cuentas, al fin y al cabo, en resumidas cuentas</i>.</p>
<p><b>Opinion nuances</b>: <i>a mi juicio, desde mi punto de vista, me inclino a pensar que, no me cabe duda de que (+ ind.), no es que + subj. sino que + ind.</i>: <i>No es que no quiera, sino que no puedo.</i></p>`
    },
    vocab: [['es decir', 'that is'], ['mejor dicho', 'or rather'], ['sin ir más lejos', 'to take a recent/close example'], ['de hecho', 'in fact'], ['es más', 'what\'s more'],
      ['ahora bien', 'however, that said'], ['con todo', 'even so'], ['en definitiva', 'ultimately'], ['al fin y al cabo', 'after all'], ['a mi juicio', 'in my judgement'],
      ['me inclino a pensar', 'I tend to think'], ['no me cabe duda', 'I have no doubt'], ['la postura', 'position, stance'], ['rebatir', 'to refute'], ['el argumento', 'argument'], ['la falacia', 'fallacy']],
    drills: [['No es que no ___ (querer, yo), sino que no puedo.', 'quiera', 'It\'s not that I don\'t want to, it\'s that I can\'t.'], ['Es caro; es ___, no podemos pagarlo.', 'decir', 'It\'s expensive; that is, we can\'t afford it.'],
      ['Admito que tienes razón; ahora ___, hay otros factores.', 'bien', 'I admit you\'re right; that said, there are other factors.'], ['No me cabe duda de que ___ (ser) la mejor opción.', 'es', 'I have no doubt it is the best option.'],
      ['Al fin y al ___, todos queremos lo mismo.', 'cabo', 'After all, we all want the same.'], ['Sin ir más ___, ayer pasó lo mismo.', 'lejos', 'Just yesterday, the same thing happened.'],
      ['Es un buen jugador; ___ más, es el mejor del equipo.', 'es', 'He\'s a good player; what\'s more, he\'s the best in the team.'], ['En ___, la propuesta no convence.', 'definitiva|resumen|conclusión', 'Ultimately, the proposal isn\'t convincing.']],
    sentences: [['Si bien es cierto que el turismo genera empleo, no es menos cierto que encarece la vivienda.', 'While it is true that tourism creates jobs, it is equally true that it makes housing more expensive.'],
      ['De hecho, los datos lo confirman.', 'In fact, the data confirm it.'], ['A mi juicio, la medida llega tarde.', 'In my view, the measure comes too late.'],
      ['No es que esté en contra, sino que necesito más información.', 'It\'s not that I\'m against it, but that I need more information.'], ['En definitiva, hay que buscar un equilibrio.', 'Ultimately, we need to find a balance.'],
      ['Dicho de otro modo, el problema no es el dinero.', 'In other words, the problem isn\'t the money.']],
    reading: {
      t: 'La semana laboral de cuatro días', x: `Cada vez más voces defienden en España la semana laboral de cuatro días. Sus defensores sostienen que mejora la salud mental y, de hecho, varios experimentos piloto apuntan a que la productividad se mantiene. Ahora bien, sus detractores advierten de que no todos los sectores pueden aplicarla: sin ir más lejos, la hostelería o la sanidad funcionan con turnos. Si bien es cierto que el modelo tiene ventajas, no es menos cierto que su implantación exigiría cambios profundos. En definitiva, el debate está lejos de cerrarse.`,
      q: [['¿Qué sostienen los defensores?', ['Que mejora la salud mental', 'Que baja la productividad', 'Que es ilegal'], 0], ['¿Qué ejemplo dan los detractores?', ['La hostelería y la sanidad', 'La banca', 'La educación'], 0], ['¿Cuál es la conclusión del texto?', ['El debate sigue abierto', 'Se aprobará pronto', 'Es una mala idea'], 0]]
    },
    write: 'Write a 250-word opinion column on a current debate in Spain or the Netherlands, using at least ten discourse markers from this unit.',
    talk: 'You are a moderator in a Spanish TV debate (tertulia). Present a controversial topic and debate with the learner, playing devil\'s advocate. Push them to concede, counter and conclude using discourse markers.',
    res: [R.ser('tertulias'), R.rtve('debates y documentales'), R.elpais(), R.slcAdv()]
  });

  U({
    id: 'c1-06', title: 'Probabilidad: futuro y condicional de conjetura', goal: ['Make guesses about present and past with the future and conditional', 'Use the futuro compuesto and condicional compuesto for conjecture'],
    grammar: {
      t: 'Tenses of probability (conjecture)',
      h: `<p>Spanish uses tenses to show you are <b>guessing</b>:</p>
<table><tr><th>Certain</th><th>Guess</th><th>Meaning</th></tr><tr><td>Son las tres.</td><td><b>Serán</b> las tres.</td><td>It's probably three.</td></tr>
<tr><td>Ha salido.</td><td><b>Habrá salido.</b></td><td>He's probably gone out.</td></tr><tr><td>Eran las tres / Fueron…</td><td><b>Serían</b> las tres.</td><td>It was probably three.</td></tr>
<tr><td>Había salido.</td><td><b>Habría salido.</b></td><td>He had probably gone out.</td></tr></table>
<p>Also in questions of wonder: <i>¿Dónde <b>estará</b> mi móvil?</i> (I wonder where…). <i>¿Qué <b>habrá pasado</b>?</i></p>
<p>Concessive future: <i><b>Será</b> muy listo, pero no sabe escuchar.</i> (He may be clever, but…)</p>
<p>Other ways: <i>deber de + inf.</i> (must be, probability): <i>Debe de tener unos cuarenta años.</i> (<i>deber + inf.</i> = obligation.) <i>A lo mejor + ind., quizás/tal vez + ind./subj., igual + ind.</i> (colloquial Spain).</p>`
    },
    vocab: [['¿dónde estará…?', 'I wonder where… is'], ['¿qué habrá pasado?', 'I wonder what\'s happened'], ['deber de', 'must (probability)'], ['a lo mejor', 'maybe'], ['igual', 'maybe (colloquial)'],
      ['la conjetura', 'conjecture'], ['suponer', 'to suppose'], ['imaginarse', 'to imagine'], ['la pista', 'clue'], ['el misterio', 'mystery'], ['desaparecer', 'to disappear'],
      ['el atasco', 'traffic jam'], ['quedarse dormido', 'to oversleep'], ['tener pinta de', 'to look like']],
    drills: [['No sé qué hora es; ___ (ser) las cinco.', 'serán', 'I don\'t know what time it is; it\'s probably five.'], ['No contesta; ___ ___ (salir, él).', 'habrá salido', 'He\'s not answering; he must have gone out.'],
      ['¿Dónde ___ (estar) mis llaves?', 'estarán', 'Where can my keys be?'], ['Cuando llegó, ___ (ser) las doce.', 'serían', 'When he arrived, it must have been about twelve.'],
      ['Debe ___ tener unos treinta años.', 'de', 'She must be about thirty.'], ['___ (ser) muy guapo, pero es antipático. (concessive)', 'será', 'He may be handsome, but he\'s unpleasant.'],
      ['Ya se ___ ___ (ir) cuando llamamos.', 'habrían ido', 'They had probably already left when we called.'], ['A lo mejor ___ (estar, ella) en un atasco.', 'está', 'Maybe she\'s in a traffic jam.']],
    conj: { t: 'futperf', v: ['salir', 'pasar', 'hacer', 'decir', 'irse'] },
    sentences: [['¿Qué le pasará a Marta? Está muy rara.', 'I wonder what\'s up with Marta. She\'s acting very strange.'], ['Habrá perdido el autobús.', 'He must have missed the bus.'],
      ['Serían las tres de la mañana cuando oí el ruido.', 'It must have been about three in the morning when I heard the noise.'], ['Debe de haber un error en la factura.', 'There must be a mistake on the bill.'],
      ['Igual se ha quedado dormido.', 'Maybe he\'s overslept.'], ['Tendrá mucho dinero, pero no es feliz.', 'He may have a lot of money, but he isn\'t happy.']],
    reading: {
      t: '¿Dónde está Pablo?', x: `Son las diez y Pablo todavía no ha llegado a la oficina. Él siempre es puntual. "Se habrá quedado dormido", dice Lucía. "O habrá un atasco en la M-30, como siempre", añade Jorge. "¿Y si le ha pasado algo?", pregunta la jefa, preocupada. Lucía lo llama, pero no contesta: "Tendrá el móvil sin batería". A las diez y media aparece Pablo con una caja enorme: "¡Feliz cumpleaños, jefa! Los churros estarán todavía calientes".`,
      q: [['¿Qué piensa Lucía al principio?', ['Que Pablo se habrá quedado dormido', 'Que está enfermo', 'Que ha dejado el trabajo'], 0], ['¿Qué supone Jorge?', ['Que hay un atasco', 'Que está de vacaciones', 'Que se ha perdido'], 0], ['¿Por qué llegó tarde Pablo en realidad?', ['Fue a comprar churros para la jefa', 'Perdió el metro', 'Se quedó dormido'], 0]]
    },
    write: 'Look at an imagined scene (an empty, messy flat with a half-eaten breakfast) and write ten guesses about what has happened, using futuro, futuro compuesto, condicional and deber de.',
    talk: 'You are a detective in a Madrid mystery game. Describe clues about a disappeared person and ask the learner to make conjectures with the future and conditional of probability. Reveal the solution at the end.',
    res: [R.slcAdv(), R.rtve('series policiacas'), R.ser('podcasts de misterio')]
  });
})();
