/* B1 · Umbral (part 2) */
(function () {
  const R = RES, U = CAMINO.unit('B1');

  U({
    id: 'b1-deseos', title: 'Deseos: el presente de subjuntivo', goal: ['Express wishes, hopes and requests (quiero que, espero que, ojalá)', 'Form the present subjunctive', 'Give recommendations (te recomiendo que…)'],
    grammar: {
      t: 'Present subjunctive (I): wishes, requests, recommendations',
      h: `<p>Form: take the <b>yo</b> present, drop <b>-o</b>, and swap the vowel: <b>-ar → -e</b>, <b>-er/-ir → -a</b>. <i>hablo → hable, como → coma, tengo → tenga, conozco → conozca, pido → pida</i>.</p>
<table><tr><td>hable, hables, hable, hablemos, habléis, hablen</td><td>tenga, tengas, tenga, tengamos, tengáis, tengan</td></tr></table>
<p>Irregular: <b>ser</b> sea, <b>estar</b> esté, <b>ir</b> vaya, <b>saber</b> sepa, <b>haber</b> haya, <b>dar</b> dé. Spelling: buscar → busque, llegar → llegue, empezar → empiece. Stem changers keep the boot pattern; -ir verbs also change in nosotros: <i>durmamos, sintamos, pidamos</i>.</p>
<p>Use it after <b>verbs of wish/influence + que</b> when the subject changes: <i>Quiero <b>que vengas</b>.</i> (Same subject → infinitive: <i>Quiero venir.</i>) Also <b>espero que, prefiero que, te pido que, te recomiendo que, necesito que, deseo que</b> and <b>ojalá (que)</b>.</p>
<p>Wishes for others: <i>¡Que te mejores! ¡Que lo paséis bien! ¡Que tengas suerte! ¡Que aproveche! ¡Que descanses!</i></p>`
    },
    conj: { t: 'subj', v: ['hablar', 'comer', 'vivir', 'tener', 'ser', 'estar', 'ir', 'hacer', 'poder', 'saber'] },
    V: `
ojalá | I hope / if only | {Ojalá} haga sol mañana. | I hope it's sunny tomorrow.
esperar que | to hope that | {Espero que} estés bien. | I hope you're well.
querer que | to want (someone) to | {Quiero que} vengas. | I want you to come.
pedir que | to ask (someone) to | Te {pido que} me escuches. | I'm asking you to listen to me.
recomendar que | to recommend that | Te {recomiendo que} pruebes el pulpo. | I recommend you try the octopus.
preferir que | to prefer that | {Prefiero que} me llames. | I'd rather you called me.
necesitar que | to need (someone) to | {Necesito que} me ayudes. | I need you to help me.
desear | to wish | Te {deseo} lo mejor. | I wish you all the best.
aconsejar que | to advise that | Te {aconsejo que} descanses. | I advise you to rest.
permitir que | to allow | No {permiten que} entremos. | They don't allow us to come in.
prohibir que | to forbid | Mis padres me {prohíben que} salga. | My parents forbid me to go out.
dejar que | to let | {Deja que} te ayude. | Let me help you.
¡que aproveche! | enjoy your meal! | ¡{Que aproveche}! | Enjoy your meal!
¡que tengas suerte! | good luck! | ¡{Que tengas suerte} mañana! | Good luck tomorrow!
¡que lo pases bien! | have a good time! | ¡{Que lo pases bien} en la fiesta! | Have fun at the party!
¡que descanses! | rest well! | Buenas noches, ¡{que descanses}! | Good night, rest well!
¡que te vaya bien! | all the best! | ¡{Que te vaya bien} en el nuevo trabajo! | All the best in your new job!
¡que cumplas muchos más! | many happy returns! | ¡Feliz cumpleaños y {que cumplas muchos más}! | Happy birthday and many happy returns!
el deseo | wish | Pide un {deseo}. | Make a wish.
cumplirse | to come true | Ojalá se {cumplan} tus sueños. | I hope your dreams come true.
el brindis | toast | Hagamos un {brindis}. | Let's make a toast.
la entrevista | interview | Que te vaya bien en la {entrevista}. | Good luck with the interview.
el examen | exam | Espero que apruebes el {examen}. | I hope you pass the exam.
la despedida | farewell | Mañana es su {despedida}. | Tomorrow is her farewell.
despedirse | to say goodbye | Vine a {despedirme}. | I came to say goodbye.
mudarse | to move (house) | Espero que te guste tu nuevo piso cuando te {mudes}. | I hope you like your new flat when you move.
echar de menos | to miss | Te vamos a {echar de menos}. | We're going to miss you.
mantener el contacto | to keep in touch | Espero que {mantengamos el contacto}. | I hope we keep in touch.
la felicidad | happiness | Te deseo mucha {felicidad}. | I wish you much happiness.
la salud | health | Lo importante es la {salud}. | What matters is health.
el éxito | success | ¡Mucho {éxito}! | Lots of success!
la paciencia | patience | Te pido {paciencia}. | I'm asking you for patience.
el permiso | permission; leave | Necesito que me des {permiso}. | I need you to give me permission.
insistir en que | to insist that | {Insiste en que} vayamos. | She insists that we go.
exigir que | to demand that | {Exigen que} paguemos ya. | They demand that we pay now.
sugerir que | to suggest that | {Sugiero que} salgamos pronto. | I suggest we leave early.
el ruido | noise | Les pido que no hagan {ruido}. | I ask them not to make noise.
la sinceridad | honesty | Te pido {sinceridad}. | I'm asking you for honesty.
`,
    D: `
Quiero que ___ (venir, tú) a mi fiesta. | vengas | I want you to come to my party.
Espero que ___ (estar, vosotros) bien. | estéis | I hope you (all) are well.
Ojalá ___ (hacer) sol mañana. | haga | I hope it's sunny tomorrow.
Te recomiendo que ___ (ir) al Museo del Prado. | vayas | I recommend that you go to the Prado.
Mis padres prefieren que ___ (vivir, yo) cerca. | viva | My parents prefer me to live nearby.
¡Que lo ___ (pasar, vosotros) bien! | paséis | Have a good time!
Necesito que me ___ (ayudar, tú) con esto. | ayudes | I need you to help me with this.
Quiero ___ (aprender) a bailar flamenco. (same subject) | aprender | I want to learn to dance flamenco.
Espero que ___ (aprobar, tú) el examen. | apruebes | I hope you pass the exam.
Ojalá ___ (poder, nosotros) vernos pronto. | podamos | I hope we can see each other soon.
Te pido que ___ (ser) sincero. | seas | I'm asking you to be honest.
El médico me aconseja que ___ (dormir, yo) más. | duerma | The doctor advises me to sleep more.
Prefiero que no se lo ___ (decir, tú) a nadie. | digas | I'd rather you didn't tell anyone.
Mi jefe quiere que ___ (llegar, nosotros) a las ocho. | lleguemos | My boss wants us to arrive at eight.
Espero que ___ (haber) sitio en el tren. | haya | I hope there's room on the train.
¡Que ___ (tener, tú) suerte! | tengas | Good luck!
Ojalá ___ (saber, ellos) la respuesta. | sepan | I hope they know the answer.
Sugiero que ___ (empezar, nosotros) ya. | empecemos | I suggest we start now.
Deja que te ___ (ayudar, yo). | ayude | Let me help you.
¡Que te ___ (ir) bien! | vaya | All the best!
`,
    S: `
Espero que tengas un buen viaje. | I hope you have a good trip.
Ojalá podamos vernos pronto. | I hope we can see each other soon.
Mi jefe quiere que trabaje el sábado. | My boss wants me to work on Saturday.
Te recomiendo que pruebes el pulpo a la gallega. | I recommend you try Galician-style octopus.
¡Que te vaya muy bien en la entrevista! | I hope the interview goes really well!
Te pido que no se lo digas a nadie. | I'm asking you not to tell anyone.
Espero que mantengamos el contacto. | I hope we keep in touch.
Deja que te invite a un café. | Let me buy you a coffee.
`,
    R: [
      { t: 'Deseos de Año Nuevo', x: `En España, a medianoche del 31 de diciembre, se comen doce uvas, una con cada campanada del reloj de la Puerta del Sol. Cada uva es un deseo para el año nuevo. Este año, mi familia escribió sus deseos en un papel. Mi madre: "Ojalá estemos todos juntos el año que viene." Mi hermano: "Quiero que mi equipo gane la Liga." Mi abuela: "Espero que no me duelan tanto las rodillas." ¿Y yo? Yo deseo que mi español mejore mucho… ¡y que no me atragante con las uvas!`, q: `¿Cuántas uvas se comen? | *Doce ; Diez ; Una
¿Qué quiere el hermano? | Estar con la familia ; *Que su equipo gane la Liga ; Hablar español
¿Qué espera la abuela? | *Que no le duelan las rodillas ; Viajar ; Comer uvas` },
      { t: 'Carta de despedida', x: `Querida Lucía: mañana te vas a Buenos Aires y quiero que sepas lo mucho que te vamos a echar de menos en la oficina. Espero que el nuevo trabajo sea todo lo que deseas y que encuentres un piso bonito pronto. Te recomiendo que pruebes el asado y que vayas a un partido de fútbol en La Bombonera. Y te pido una cosa: que no te olvides de nosotros. ¡Que te vaya muy bien! Un abrazo enorme, tus compañeros.`, q: `¿Adónde se va Lucía? | A Madrid ; *A Buenos Aires ; A México
¿Qué le recomiendan probar? | La paella ; *El asado ; El mate
¿Qué le piden? | Que vuelva pronto ; *Que no se olvide de ellos ; Que les escriba cada día` },
      { t: 'Normas de convivencia', x: `Queridos vecinos: la comunidad os pide que respetéis las siguientes normas. Os rogamos que no hagáis ruido después de las once de la noche. Es importante que bajéis la basura solo por la noche y que la separéis correctamente. Pedimos a los dueños de perros que no los dejen solos en la terraza. Y, por favor, os recomendamos que cerréis bien la puerta del portal. Gracias por vuestra colaboración. El presidente de la comunidad.`, q: `¿Hasta qué hora se puede hacer ruido? | Las diez ; *Las once ; Medianoche
¿Qué piden a los dueños de perros? | Que los saquen tres veces ; *Que no los dejen solos en la terraza ; Que no tengan perros
¿Quién escribe la nota? | Un vecino enfadado ; *El presidente de la comunidad ; El casero` }
    ],
    write: 'Write ten wishes for the next year (for you, family, friends, the world) and a farewell card for a colleague who is moving abroad, using ojalá, espero que, quiero que, te recomiendo que and ¡que…!',
    talk: 'You are a Spanish friend at a farewell dinner for the learner, who is moving to a new city. Exchange wishes and recommendations using the subjunctive (espero que, te recomiendo que, ¡que…!).',
    res: [R.cb2(38), R.cb2(39), R.cb2(40), R.lt(78, 80)]
  });

  U({
    id: 'b1-opinar', title: 'Opinar: creo que / no creo que', goal: ['Give and justify opinions', 'Express doubt and certainty', 'Use es + adjective + que with the subjunctive'],
    grammar: {
      t: 'Present subjunctive (II): opinion, doubt and value judgements',
      h: `<p>Affirmative opinion → <b>indicative</b>: <i>Creo que <b>tienes</b> razón. Pienso que <b>es</b> caro. Me parece que <b>va</b> a llover.</i></p>
<p>Negative opinion → <b>subjunctive</b>: <i>No creo que <b>tengas</b> razón. No pienso que <b>sea</b> caro.</i></p>
<p>Doubt: <b>dudo que, no estoy seguro de que, es posible que, puede que, quizás / tal vez</b> (+ subj. usually) → <i>Puede que llegue tarde.</i></p>
<p>Certainty → indicative: <b>es verdad que, es evidente que, está claro que, estoy seguro de que</b>.</p>
<p>Value judgements → subjunctive: <b>es importante / necesario / normal / mejor / una pena / increíble que</b>; <b>me molesta / me encanta / me sorprende que</b>: <i>Es importante que <b>reciclemos</b>. Me molesta que <b>hables</b> tan alto.</i> (General statement without a subject → infinitive: <i>Es importante reciclar.</i>)</p>`
    },
    V: `
en mi opinión | in my opinion | {En mi opinión}, es demasiado caro. | In my opinion, it's too expensive.
desde mi punto de vista | from my point of view | {Desde mi punto de vista}, tienes razón. | From my point of view, you're right.
tener razón | to be right | Creo que {tienes razón}. | I think you're right.
estar de acuerdo | to agree | No {estoy de acuerdo} contigo. | I don't agree with you.
estar en contra | to be against | {Estoy en contra} de esa ley. | I'm against that law.
estar a favor | to be in favour | {Estoy a favor} del teletrabajo. | I'm in favour of remote work.
dudar | to doubt | {Dudo} que venga. | I doubt he'll come.
puede que | it may be that | {Puede que} llueva. | It may rain.
es posible que | it's possible that | {Es posible que} lleguemos tarde. | We may arrive late.
es una pena que | it's a shame that | {Es una pena que} no puedas venir. | It's a shame you can't come.
me molesta que | it bothers me that | {Me molesta que} lleguen tarde. | It bothers me that they're late.
me sorprende que | it surprises me that | {Me sorprende que} no lo sepas. | It surprises me that you don't know.
está claro que | it's clear that | {Está claro que} necesitamos cambios. | It's clear we need changes.
es evidente que | it's obvious that | {Es evidente que} hay un problema. | It's obvious there's a problem.
es verdad que | it's true that | {Es verdad que} es caro. | It's true that it's expensive.
el turismo | tourism | El {turismo} es importante para España. | Tourism is important for Spain.
la vivienda | housing | El precio de la {vivienda} es altísimo. | The price of housing is extremely high.
el alquiler turístico | holiday rental | Hay demasiados {alquileres turísticos}. | There are too many holiday rentals.
la contaminación | pollution | La {contaminación} es un problema grave. | Pollution is a serious problem.
el medio ambiente | environment | Hay que proteger el {medio ambiente}. | We have to protect the environment.
el debate | debate | Es un {debate} muy polémico. | It's a very controversial debate.
polémico / polémica | controversial | Es un tema {polémico}. | It's a controversial subject.
la ventaja | advantage | Tiene muchas {ventajas}. | It has many advantages.
el inconveniente | disadvantage | El único {inconveniente} es el precio. | The only drawback is the price.
por un lado… por otro… | on one hand… on the other… | {Por un lado} es cómodo; {por otro}, es caro. | On one hand it's convenient; on the other, it's expensive.
sin embargo | however | Es barato; {sin embargo}, la calidad es mala. | It's cheap; however, the quality is poor.
además | moreover | {Además}, es muy cómodo. | Moreover, it's very convenient.
depende | it depends | —¿Te gusta? —{Depende}. | —Do you like it? —It depends.
el argumento | argument (reason) | No me convence tu {argumento}. | Your argument doesn't convince me.
convencer | to convince | No me {convence}. | It doesn't convince me.
opinar | to think, have an opinion | ¿Qué {opinas} del tema? | What do you think about the topic?
la opinión | opinion | Respeto tu {opinión}. | I respect your opinion.
el punto de vista | point of view | Entiendo tu {punto de vista}. | I understand your point of view.
justo / justa | fair | No me parece {justo}. | I don't think it's fair.
absurdo / absurda | absurd | Es {absurdo} que cueste tanto. | It's absurd that it costs so much.
lógico / lógica | logical | Es {lógico} que estés enfadado. | It's logical that you're angry.
la ley | law | La nueva {ley} entra en vigor mañana. | The new law comes into force tomorrow.
el gobierno | government | El {gobierno} ha aprobado la medida. | The government has approved the measure.
la medida | measure | Es una {medida} necesaria. | It's a necessary measure.
`,
    D: `
Creo que ___ (tener, tú) razón. | tienes | I think you're right.
No creo que ___ (tener, tú) razón. | tengas | I don't think you're right.
Es importante que ___ (dormir, tú) bien. | duermas | It's important that you sleep well.
Dudo que ___ (venir, ellos) hoy. | vengan | I doubt they'll come today.
Está claro que el turismo ___ (ser) importante. | es | It's clear that tourism is important.
Me molesta que la gente ___ (hablar) tan alto. | hable | It bothers me that people talk so loudly.
Puede que ___ (llover) esta tarde. | llueva | It may rain this afternoon.
Es necesario ___ (reciclar). (general) | reciclar | It's necessary to recycle.
Pienso que ___ (ser) una buena idea. | es | I think it's a good idea.
No pienso que ___ (ser) una buena idea. | sea | I don't think it's a good idea.
Es una pena que no ___ (poder, tú) venir. | puedas | It's a shame you can't come.
Estoy seguro de que ___ (aprobar, tú). | aprobarás|apruebas | I'm sure you'll pass.
No estoy seguro de que ___ (aprobar, tú). | apruebes | I'm not sure you'll pass.
Me sorprende que no lo ___ (saber, vosotros). | sepáis | It surprises me that you don't know.
Es evidente que ___ (haber) un problema. | hay | It's obvious there's a problem.
Es normal que ___ (estar, tú) nervioso. | estés | It's normal for you to be nervous.
Es verdad que la vivienda ___ (ser) cara. | es | It's true that housing is expensive.
Me parece que ___ (ir) a nevar. | va | I think it's going to snow.
No me parece que ___ (ir) a nevar. | vaya | I don't think it's going to snow.
Es mejor que ___ (salir, nosotros) temprano. | salgamos | It's better that we leave early.
`,
    S: `
No creo que sea buena idea. | I don't think it's a good idea.
Estoy de acuerdo contigo en parte. | I partly agree with you.
Es una pena que no puedas venir. | It's a shame you can't come.
Está claro que necesitamos más viviendas. | It's clear we need more housing.
Por un lado es cómodo; por otro, es muy caro. | On one hand it's convenient; on the other, it's very expensive.
Me sorprende que nadie diga nada. | It surprises me that nobody says anything.
Puede que tengas razón, pero no me convence. | You may be right, but I'm not convinced.
Es importante que todos participemos. | It's important that we all take part.
`,
    R: [
      { t: 'Debate: los pisos turísticos', x: `En muchas ciudades españolas, como Barcelona, Málaga o Palma, hay un gran debate sobre los pisos turísticos. Algunos vecinos piensan que suben los precios del alquiler y que el centro pierde su vida de barrio. "No creo que sea justo que no podamos vivir donde hemos nacido", dice Montse, de Barcelona. Otros creen que el turismo es necesario para la economía. "Es normal que la gente quiera ganar dinero con su piso", opina Javier, propietario. Muchos ayuntamientos ya limitan las nuevas licencias.`, q: `¿Qué piensan algunos vecinos? | *Que los pisos turísticos suben los alquileres ; Que no hay turistas ; Que el centro es aburrido
¿Qué opina Javier? | Que es injusto ; *Que es normal querer ganar dinero ; Que hay que prohibirlos
¿Qué hacen muchos ayuntamientos? | Nada ; *Limitan las licencias ; Construyen hoteles` },
      { t: '¿Deberían prohibirse los coches en el centro?', x: `Madrid y otras ciudades han creado zonas de bajas emisiones donde los coches más contaminantes no pueden entrar. Ana, ciclista: "Me parece fantástico. Es evidente que el aire está más limpio". Pedro, taxista: "No creo que sea la solución. Es injusto que paguen siempre los mismos". Lucía, comerciante: "Dudo que la gente venga a comprar si no puede aparcar". Puede que todos tengan algo de razón.`, q: `¿Qué opina Ana? | Que es injusto ; *Que es fantástico porque el aire está más limpio ; Que no funciona
¿Qué le preocupa a Lucía? | La contaminación ; *Que la gente no venga a comprar ; Los taxis
¿Qué dice el texto al final? | Que Ana tiene razón ; *Que puede que todos tengan algo de razón ; Que hay que prohibir los coches` },
      { t: 'La siesta en el trabajo', x: `Algunas empresas tecnológicas en España han creado salas para dormir la siesta. Su director de recursos humanos opina que es importante que los trabajadores descansen: "Está demostrado que una siesta de veinte minutos mejora la productividad". Sin embargo, no todos están de acuerdo. "No creo que sea profesional dormir en la oficina", dice una abogada. "Prefiero que me dejen salir antes". ¿Y tú qué opinas?`, q: `¿Qué han creado algunas empresas? | Gimnasios ; *Salas para dormir la siesta ; Cafeterías
¿Qué mejora una siesta de veinte minutos? | El humor ; *La productividad ; El sueldo
¿Qué prefiere la abogada? | Dormir más ; *Que la dejen salir antes ; Trabajar desde casa` }
    ],
    write: 'Write an opinion text (200 words) on tourist flats, cars in city centres, or a topic you care about. Use creo que / no creo que, es importante que, dudo que, por un lado… por otro…, sin embargo.',
    talk: 'You are a Spanish friend with strong (but friendly) opinions about tourism, housing and city life. Debate with the learner, ask for their opinion and push them to justify it. Model and gently correct indicative vs subjunctive.',
    res: [R.lt(81, 82), R.hh('debates'), R.practica(), R.juan()]
  });

  U({
    id: 'b1-medios', title: 'Medios y tecnología: relative clauses', goal: ['Talk about media, the internet and technology', 'Join sentences with que, donde, lo que, quien', 'Describe apps, devices and news'],
    grammar: {
      t: 'Relative pronouns (basic): que, donde, lo que, quien, el que',
      h: `<p><b>que</b> = who / which / that (people and things): <i>Tengo una amiga <b>que</b> trabaja en la tele. Es una app <b>que</b> uso mucho.</i> Unlike English, it can never be left out: <i>el libro <b>que</b> leí</i> (the book I read).</p>
<p><b>donde</b> = where: <i>Es la ciudad <b>donde</b> nací.</i></p>
<p><b>lo que</b> = what (the thing that): <i><b>Lo que</b> más me gusta es la radio. No entiendo <b>lo que</b> dices.</i></p>
<p>After a preposition: <b>el que / la que / los que / las que</b>, and for people also <b>quien(es)</b>: <i>la web <b>en la que</b> compro, el amigo <b>con quien</b> vivo</i>.</p>
<p>Media verbs: <i>publicar, compartir, subir (una foto), descargar, buscar en internet, conectarse, seguir (a alguien en redes)</i>.</p>`
    },
    V: `
los medios de comunicación | the media | Los {medios de comunicación} influyen mucho. | The media are very influential.
la noticia | news item | Leí la {noticia} en el periódico. | I read the news in the paper.
las noticias | the news | Veo las {noticias} cada noche. | I watch the news every night.
el periódico | newspaper | Leo el {periódico} en el móvil. | I read the newspaper on my phone.
la revista | magazine | Compré una {revista} de viajes. | I bought a travel magazine.
el/la periodista | journalist | Es una {periodista} muy conocida. | She's a very well-known journalist.
el titular | headline | El {titular} es muy exagerado. | The headline is very exaggerated.
el artículo | article | Escribió un {artículo} interesante. | He wrote an interesting article.
la radio | radio | Escucho la {radio} en el coche. | I listen to the radio in the car.
el programa | programme | Es mi {programa} favorito. | It's my favourite programme.
la cadena | (TV) channel | ¿En qué {cadena} lo ponen? | Which channel is it on?
el anuncio | advert | Hay demasiados {anuncios}. | There are too many adverts.
las redes sociales | social media | Paso mucho tiempo en las {redes sociales}. | I spend a lot of time on social media.
seguir | to follow | Te {sigo} en Instagram. | I follow you on Instagram.
el seguidor / la seguidora | follower | Tiene un millón de {seguidores}. | She has a million followers.
publicar | to publish, post | {Publicó} una foto de la playa. | She posted a photo of the beach.
compartir | to share | {Comparte} el enlace conmigo. | Share the link with me.
subir | to upload | {Subí} el vídeo a YouTube. | I uploaded the video to YouTube.
descargar | to download | {Descarga} la aplicación. | Download the app.
la aplicación / la app | app | Es una {aplicación} muy útil. | It's a very useful app.
la contraseña | password | He olvidado la {contraseña}. | I've forgotten my password.
el enlace | link | Te mando el {enlace}. | I'll send you the link.
la página web | website | La {página web} no funciona. | The website isn't working.
el buscador | search engine | Lo busqué en el {buscador}. | I looked it up on the search engine.
el ordenador | computer (Spain) | Mi {ordenador} es muy lento. | My computer is very slow.
el portátil | laptop | Trabajo con el {portátil}. | I work on my laptop.
la pantalla | screen | La {pantalla} está rota. | The screen is broken.
el teclado | keyboard | El {teclado} es español, con ñ. | The keyboard is Spanish, with ñ.
la batería | battery | Me queda poca {batería}. | I have little battery left.
cargar | to charge | Tengo que {cargar} el móvil. | I have to charge my phone.
la wifi | wifi | ¿Cuál es la contraseña de la {wifi}? | What's the wifi password?
conectarse | to connect, go online | No puedo {conectarme}. | I can't connect.
el bulo | fake news, hoax | Eso es un {bulo}. | That's fake news.
la fuente | source | ¿Cuál es la {fuente}? | What's the source?
fiable | reliable | No es una fuente {fiable}. | It's not a reliable source.
la privacidad | privacy | Me preocupa la {privacidad}. | I'm worried about privacy.
enganchado / enganchada | hooked, addicted | Estoy {enganchado} al móvil. | I'm addicted to my phone.
lo que | what (the thing that) | {Lo que} necesito es descansar. | What I need is to rest.
donde | where | Es el bar {donde} nos conocimos. | It's the bar where we met.
quien | who (after preposition) | Es la chica con {quien} vivo. | She's the girl I live with.
`,
    D: `
Tengo una amiga ___ trabaja en la radio. | que | I have a friend who works on the radio.
Es la ciudad ___ nací. | donde | It's the city where I was born.
___ más me gusta es el podcast de la mañana. | lo que | What I like most is the morning podcast.
No entiendo ___ dices. | lo que | I don't understand what you're saying.
La web en ___ compro es muy fiable. | la que | The website I buy on is very reliable.
El chico con ___ hablé era periodista. | quien|el que | The guy I spoke to was a journalist.
Es una app ___ uso todos los días. | que | It's an app I use every day.
El libro ___ leí era buenísimo. | que | The book I read was really good.
Te mando el ___. (link) | enlace | I'll send you the link.
He olvidado la ___. (password) | contraseña | I've forgotten my password.
___ la aplicación. (download, tú) | descarga | Download the app.
Te ___ en Instagram. (follow) | sigo | I follow you on Instagram.
Me queda poca ___. | batería | I have little battery left.
Eso es un ___; no es verdad. (fake news) | bulo | That's fake news; it's not true.
No es una fuente ___. (reliable) | fiable | It's not a reliable source.
Ayer ___ (publicar, ella) una foto. | publicó | Yesterday she posted a photo.
Estoy ___ al móvil. (addicted) | enganchado|enganchada | I'm addicted to my phone.
El bar ___ nos conocimos ha cerrado. | donde|en el que | The bar where we met has closed.
Los periodistas ___ trabajan aquí son muy jóvenes. | que | The journalists who work here are very young.
Las personas con ___ trabajo son de muchos países. | quienes|las que | The people I work with are from many countries.
`,
    S: `
Tengo un amigo que trabaja en la tele. | I have a friend who works in TV.
Lo que más me preocupa es la privacidad. | What worries me most is privacy.
¿Me mandas el enlace del artículo? | Can you send me the link to the article?
Antes de compartir una noticia, comprueba la fuente. | Before sharing a news story, check the source.
Es la aplicación que uso para aprender español. | It's the app I use to learn Spanish.
Paso demasiado tiempo en las redes sociales. | I spend too much time on social media.
El pueblo donde vive mi abuela no tiene cobertura. | The village where my grandmother lives has no signal.
No me queda batería; ¿me dejas tu cargador? | I've got no battery left; can I borrow your charger?
`,
    R: [
      { t: 'La radio en España', x: `En España la radio es muy popular: millones de personas la escuchan cada mañana, en casa o en el coche. Los programas que más se escuchan son los magacines matinales, donde se mezclan noticias, entrevistas y tertulias. Lo que más gusta a los oyentes es la sensación de compañía. Hoy, además, muchos programas se escuchan como pódcast, lo que permite escucharlos cuando y donde quieras.`, q: `¿Cuándo escuchan muchos la radio? | Por la noche ; *Por la mañana ; A mediodía
¿Qué es lo que más gusta a los oyentes? | La música ; *La sensación de compañía ; Los anuncios
¿Qué permiten los pódcast? | Ver vídeos ; *Escuchar cuando y donde quieras ; Hablar con el presentador` },
      { t: 'Cómo detectar un bulo', x: `Los bulos son noticias falsas que se comparten por redes sociales y WhatsApp. Para detectarlos, mira primero la fuente: ¿es un medio que conoces? Lee la noticia completa, no solo el titular. Busca la información en otros medios fiables. Desconfía de los mensajes que te piden que los reenvíes "a todos tus contactos". Y recuerda: lo que parece demasiado sorprendente, muchas veces no es verdad.`, q: `¿Qué hay que mirar primero? | La foto ; *La fuente ; Los comentarios
¿De qué mensajes hay que desconfiar? | De los cortos ; *De los que piden reenviarlos a todos ; De los de familiares
¿Qué dice el texto sobre lo muy sorprendente? | Que siempre es verdad ; *Que muchas veces no es verdad ; Que hay que compartirlo` },
      { t: 'Mi abuela y el móvil', x: `Mi abuela tiene ochenta y dos años y el año pasado se compró su primer móvil inteligente. Al principio solo lo usaba para llamar. Después le enseñé a usar WhatsApp y ahora es la persona que más mensajes manda en el grupo de la familia. Lo que más le gusta es hacer videollamadas con mis primos, que viven en Alemania. Eso sí, todavía no entiende por qué la gente se hace tantas fotos a sí misma.`, q: `¿Cuántos años tiene la abuela? | 72 ; *82 ; 92
¿Qué es lo que más le gusta? | Las fotos ; *Las videollamadas con los primos ; Los juegos
¿Qué no entiende todavía? | Cómo llamar ; *Por qué la gente se hace tantas fotos ; WhatsApp` }
    ],
    write: 'Describe your relationship with technology and media (200 words): apps you use, how you get your news, what worries you. Use at least six relative clauses (que, donde, lo que, con quien…).',
    talk: 'You are a Spanish journalist researching how foreigners use media and apps. Ask the learner how they get their news, which apps they use, what they think of social media; elicit relative clauses.',
    res: [R.lt(83, 84), R.hh('tecnología'), R.slcInt(), R.practica()]
  });

  U({
    id: 'b1-perifrasis', title: 'Acciones en curso: perífrasis', goal: ['Describe actions in progress (estar + gerundio)', 'Express duration (llevar + gerundio)', 'Use common verb phrases: acabar de, volver a, seguir, dejar de, empezar a'],
    grammar: {
      t: 'estar + gerundio and other verbal periphrases',
      h: `<p><b>Gerundio</b>: -ar → <b>-ando</b>, -er/-ir → <b>-iendo</b>; vowel stems → <b>-yendo</b> (leyendo, oyendo, cayendo); -ir stem changers e→i, o→u (pidiendo, durmiendo, diciendo, viniendo). Ir → <b>yendo</b>.</p>
<p><b>estar + gerundio</b>: in progress now: <i>Estoy trabajando.</i> Unlike English, don't use it for the future (<i>Mañana voy</i>, not "estoy yendo").</p>
<p><b>llevar + time + gerundio</b>: duration up to now: <i>Llevo dos años estudiando español</i> (I've been studying for two years). Negative: <b>llevar + time + sin + infinitive</b>: <i>Llevo un mes sin fumar.</i></p>
<p><b>seguir + gerundio</b> (still doing): <i>Sigue lloviendo.</i> <b>acabar de + inf.</b> (just did): <i>Acabo de comer.</i> <b>volver a + inf.</b> (do again): <i>No vuelvas a hacerlo.</i> <b>dejar de + inf.</b> (stop doing): <i>Dejé de fumar.</i> <b>empezar a / ponerse a + inf.</b> (start): <i>Se puso a llorar.</i> <b>estar a punto de + inf.</b> (be about to).</p>`
    },
    V: `
estar + gerundio | to be doing | {Estoy} cocinando. | I'm cooking.
llevar + gerundio | to have been doing | {Llevo} un año viviendo aquí. | I've been living here for a year.
seguir + gerundio | to still be doing | {Sigo} trabajando en la misma empresa. | I'm still working at the same company.
acabar de | to have just | {Acabo de} llegar. | I've just arrived.
volver a | to do again | {Vuelve a} llover. | It's raining again.
dejar de | to stop doing | {Dejé de} fumar hace un año. | I stopped smoking a year ago.
empezar a | to start to | {Empecé a} correr en enero. | I started running in January.
ponerse a | to start (suddenly) | Se {puso a} llorar. | She burst into tears.
estar a punto de | to be about to | {Estoy a punto de} salir. | I'm about to leave.
tardar en | to take time to | {Tardo} diez minutos {en} llegar. | It takes me ten minutes to get there.
soler | to usually | {Suelo} levantarme pronto. | I usually get up early.
desde hace | for (since) | Vivo aquí {desde hace} dos años. | I've lived here for two years.
fumar | to smoke | Llevo un mes sin {fumar}. | I haven't smoked for a month.
el gimnasio | gym | Sigo yendo al {gimnasio}. | I'm still going to the gym.
hacer ejercicio | to exercise | Estoy {haciendo ejercicio} cada día. | I'm exercising every day.
el hábito | habit | Es un mal {hábito}. | It's a bad habit.
la costumbre | custom, habit | Tengo la {costumbre} de leer antes de dormir. | I'm in the habit of reading before bed.
charlar | to chat | Estábamos {charlando} en la terraza. | We were chatting on the terrace.
reírse | to laugh | Se {puso a} reír. | He started laughing.
llorar | to cry | El bebé está {llorando}. | The baby is crying.
dormir | to sleep | Los niños están {durmiendo}. | The children are sleeping.
leer | to read | ¿Qué estás {leyendo}? | What are you reading?
oír | to hear | ¿Me estás {oyendo}? | Can you hear me?
decir | to say | ¿Qué estás {diciendo}? | What are you saying?
pedir | to ask for | Están {pidiendo} ayuda. | They're asking for help.
la dieta | diet | Estoy a {dieta}. | I'm on a diet.
adelgazar | to lose weight | Estoy intentando {adelgazar}. | I'm trying to lose weight.
engordar | to put on weight | He {engordado} tres kilos. | I've put on three kilos.
mejorar | to improve | Mi español está {mejorando}. | My Spanish is improving.
el progreso | progress | Estás haciendo mucho {progreso}. | You're making a lot of progress.
la videollamada | video call | Estamos en una {videollamada}. | We're on a video call.
la obra | building works | Están haciendo {obras} en la calle. | They're doing works in the street.
todavía | still | {Todavía} estoy esperando. | I'm still waiting.
ya no | not any more | {Ya no} fumo. | I don't smoke any more.
otra vez | again | Lo he perdido {otra vez}. | I've lost it again.
cada vez más | more and more | Hablo {cada vez más} español. | I speak more and more Spanish.
poco a poco | little by little | {Poco a poco} voy entendiendo. | Little by little I'm understanding.
últimamente | lately | {Últimamente} estoy durmiendo mal. | Lately I've been sleeping badly.
`,
    D: `
Ahora mismo ___ (trabajar, yo). (estar + ger.) | estoy trabajando | Right now I'm working.
Llevo tres años ___ (vivir) en España. | viviendo | I've been living in Spain for three years.
¿Qué estás ___ (leer)? | leyendo | What are you reading?
El bebé está ___ (dormir). | durmiendo | The baby is sleeping.
Acabo ___ llegar. | de | I've just arrived.
¿Sigues ___ (estudiar) alemán? | estudiando | Are you still studying German?
Mi padre dejó ___ fumar hace diez años. | de | My father stopped smoking ten years ago.
No vuelvas ___ llegar tarde. | a | Don't be late again.
Llevo un mes ___ fumar. (without) | sin | I haven't smoked for a month.
De repente se puso ___ llorar. | a | Suddenly she started crying.
Estoy a punto ___ salir. | de | I'm about to leave.
¿Qué están ___ (decir)? | diciendo | What are they saying?
Están ___ (pedir) ayuda. | pidiendo | They're asking for help.
¿Me estás ___ (oír)? | oyendo | Can you hear me?
Mañana ___ (ir, yo) al médico. (not estar + ger.) | voy | Tomorrow I'm going to the doctor.
Tardo media hora ___ llegar al trabajo. | en | It takes me half an hour to get to work.
Vivo aquí desde ___ dos años. | hace | I've lived here for two years.
Empecé ___ correr en enero. | a | I started running in January.
Sigue ___ (llover). | lloviendo | It's still raining.
Ya ___ fumo. (not any more) | no | I don't smoke any more.
`,
    S: `
¿Qué estás haciendo? —Estoy preparando la cena. | What are you doing? —I'm making dinner.
Llevo media hora esperándote. | I've been waiting for you for half an hour.
Sigue lloviendo, así que nos quedamos en casa. | It's still raining, so we're staying home.
Acabo de hablar con tu madre. | I've just spoken to your mother.
He vuelto a empezar el curso de guitarra. | I've started the guitar course again.
De repente se puso a llorar. | Suddenly she started crying.
Llevo dos semanas sin dormir bien. | I haven't slept well for two weeks.
Poco a poco voy entendiendo mejor a la gente. | Little by little I'm understanding people better.
`,
    R: [
      { t: 'Videollamada con mi madre', x: `—¡Hola, hijo! ¿Qué estás haciendo?
—Nada, acabo de volver del trabajo. Estoy preparando algo de cena.
—¿Sigues yendo al gimnasio?
—Sí, llevo dos meses yendo tres veces por semana. Y he dejado de comer tanta comida rápida.
—¡Qué bien! ¿Y el español?
—Bien, sigo estudiando todos los días. Llevo un año aprendiendo y ya entiendo casi todo en el trabajo.
—¡Estoy muy orgullosa de ti!`, q: `¿Qué acaba de hacer el hijo? | *Volver del trabajo ; Ir al gimnasio ; Cenar
¿Cuánto tiempo lleva yendo al gimnasio? | Un año ; *Dos meses ; Tres semanas
¿Qué ha dejado de hacer? | Estudiar ; *Comer tanta comida rápida ; Ir al gimnasio` },
      { t: 'Dejar de fumar', x: `Javier llevaba quince años fumando un paquete al día. Había intentado dejarlo muchas veces, pero siempre volvía a fumar. Hace seis meses, cuando nació su hija, decidió dejarlo de verdad. Los primeros días fueron horribles: estaba nervioso y no paraba de comer. Ahora lleva medio año sin fumar, ha empezado a correr y dice que está durmiendo mejor que nunca. "Lo más difícil fue el café de la mañana sin cigarro", confiesa.`, q: `¿Cuánto tiempo fumó Javier? | Seis meses ; *Quince años ; Un año
¿Por qué decidió dejarlo? | Por su médico ; *Cuando nació su hija ; Por el precio
¿Qué fue lo más difícil? | Correr ; *El café de la mañana sin cigarro ; Dormir` },
      { t: 'Obras en casa', x: `Llevamos tres semanas de obras en el piso y estoy a punto de volverme loca. Los albañiles empiezan a trabajar a las ocho de la mañana y no paran hasta las seis. Cada día descubren un problema nuevo: primero las tuberías, luego la electricidad. Mientras tanto, estamos viviendo en casa de mis suegros. Mi marido dice que la cocina va a quedar preciosa. Yo solo espero que terminen antes de Navidad.`, q: `¿Cuánto tiempo llevan de obras? | Tres días ; *Tres semanas ; Tres meses
¿Dónde están viviendo? | En un hotel ; *En casa de los suegros ; En el piso
¿Qué espera la narradora? | Que la cocina sea grande ; *Que terminen antes de Navidad ; Mudarse` }
    ],
    write: 'Describe your current life: what you are doing these days, how long you\'ve been doing things (llevo…), what you have stopped, started again or still do, and what you are about to do.',
    talk: 'You are a Spanish friend you haven\'t seen for a year, catching up by video call. Ask what the learner is doing these days, how long they\'ve been doing it, what they\'ve stopped or started.',
    res: [R.cb2(36), R.lt(85, 86), R.slcInt(), R.hh()]
  });

  U({
    id: 'b1-estudios', title: 'Estudios y aprendizaje: para que', goal: ['Talk about education and learning', 'Express purpose with para + infinitive and para que + subjunctive', 'Describe the Spanish education system'],
    grammar: {
      t: 'Purpose: para / para que / a fin de que; cuando + subjunctive (preview)',
      h: `<p>Same subject → <b>para + infinitive</b>: <i>Estudio <b>para</b> aprobar.</i> Different subject → <b>para que + subjunctive</b>: <i>Te lo explico <b>para que</b> lo entiendas.</i></p>
<p>Formal equivalents: <b>con el fin de (que)</b>, <b>a fin de (que)</b>, <b>con el objetivo de</b>: <i>Se ha creado una beca a fin de que más estudiantes puedan estudiar fuera.</i></p>
<p>Question: <b>¿Para qué…?</b> (what for?) vs <b>¿Por qué…?</b> (why, cause).</p>
<p>Preview: future time with <b>cuando + subjunctive</b>: <i>Cuando termine la carrera, buscaré trabajo.</i> (More at B2.)</p>
<p>Spanish education: <b>la guardería</b> (0–3), <b>Educación Infantil</b> (3–6), <b>Primaria</b> (6–12, el colegio), <b>la ESO</b> (12–16, el instituto), <b>el Bachillerato</b> (16–18), <b>la PAU / selectividad</b> (university entrance exam), <b>la carrera</b> (degree), <b>el máster</b>, <b>la FP</b> (vocational training).</p>`
    },
    V: `
la educación | education | La {educación} pública es gratuita. | State education is free.
el colegio | (primary) school | Mis hijos van a un {colegio} público. | My children go to a state school.
el instituto | secondary school | En el {instituto} estudié francés. | At secondary school I studied French.
la universidad | university | Estudié en la {universidad} de Leiden. | I studied at Leiden University.
la carrera | (university) degree | Hice la {carrera} de Derecho. | I did a law degree.
el máster | master's degree | Estoy haciendo un {máster}. | I'm doing a master's.
la FP | vocational training | Hizo una {FP} de electricidad. | He did vocational training in electricity.
la beca | scholarship, grant | Me dieron una {beca} Erasmus. | They gave me an Erasmus grant.
la asignatura | (school) subject | Mi {asignatura} favorita era Historia. | My favourite subject was history.
la matrícula | enrolment; fees | La {matrícula} cuesta mil euros. | Enrolment costs a thousand euros.
matricularse | to enrol | Me {matriculé} en un curso de español. | I enrolled in a Spanish course.
el curso | course; school year | El {curso} empieza en septiembre. | The school year starts in September.
aprobar | to pass | {Aprobé} todas las asignaturas. | I passed all subjects.
suspender | to fail | {Suspendí} Matemáticas. | I failed maths.
la nota | mark, grade | Saqué buena {nota}. | I got a good mark.
sacar buena nota | to get a good mark | Quiero {sacar buena nota}. | I want to get a good mark.
el sobresaliente | top mark (9–10) | Saqué un {sobresaliente}. | I got top marks.
el suspenso | fail mark | Tengo un {suspenso} en inglés. | I have a fail in English.
estudiar de memoria | to learn by heart | No me gusta {estudiar de memoria}. | I don't like learning by heart.
repasar | to revise | Tengo que {repasar} para el examen. | I have to revise for the exam.
los apuntes | (class) notes | ¿Me dejas tus {apuntes}? | Can you lend me your notes?
la biblioteca | library | Estudio en la {biblioteca}. | I study in the library.
el título | qualification, diploma | Tengo el {título} de ingeniera. | I have an engineering degree.
licenciarse / graduarse | to graduate | Me {gradué} en 2018. | I graduated in 2018.
el profesorado | teaching staff | El {profesorado} está en huelga. | The teachers are on strike.
el alumno / la alumna | pupil, student | Tiene treinta {alumnos} en clase. | She has thirty pupils in class.
el tutor / la tutora | tutor; form teacher | Hablé con la {tutora} de mi hijo. | I spoke to my son's form teacher.
los deberes | homework | Los niños tienen demasiados {deberes}. | The children have too much homework.
la selectividad | university entrance exam | Aprobó la {selectividad} con un nueve. | She passed the entrance exam with a nine.
el método | method | Este {método} funciona muy bien. | This method works very well.
aprender | to learn | {Aprendo} mejor escuchando. | I learn better by listening.
memorizar | to memorise | Es difícil {memorizar} tantas palabras. | It's hard to memorise so many words.
practicar | to practise | Hay que {practicar} cada día. | You have to practise every day.
el error | mistake | Aprendemos de los {errores}. | We learn from our mistakes.
equivocarse | to make a mistake | Me {equivoco} mucho con el subjuntivo. | I make a lot of mistakes with the subjunctive.
para que | so that | Te lo explico {para que} lo entiendas. | I'll explain it so that you understand.
con el fin de | in order to | Estudio {con el fin de} trabajar en España. | I study in order to work in Spain.
¿para qué? | what for? | {¿Para qué} sirve esto? | What is this for?
el idioma | language | Hablar un {idioma} abre puertas. | Speaking a language opens doors.
la fluidez | fluency | Quiero hablar con {fluidez}. | I want to speak fluently.
`,
    D: `
Estudio ___ aprobar el examen. (same subject) | para | I study to pass the exam.
Te lo explico para que lo ___ (entender, tú). | entiendas | I'll explain it so that you understand.
Hablo despacio para que me ___ (entender, ellos). | entiendan | I speak slowly so that they understand me.
Mis padres trabajan mucho para que yo ___ (poder) estudiar. | pueda | My parents work hard so that I can study.
Te dejo mis apuntes para que ___ (repasar, tú). | repases | I'll lend you my notes so that you can revise.
¿___ qué sirve este libro? (what for) | para | What is this book for?
¿___ qué estudias español? (why) | por | Why do you study Spanish?
Cuando ___ (terminar, yo) la carrera, buscaré trabajo. | termine | When I finish my degree, I'll look for work.
Ayer ___ (aprobar, yo) el examen de conducir. | aprobé | Yesterday I passed my driving test.
Saqué un ___ en Historia. (top mark) | sobresaliente | I got top marks in history.
Me ___ (matricularse) en un curso de cocina. (indef) | matriculé | I enrolled in a cooking course.
Tengo que ___ para el examen. (revise) | repasar | I have to revise for the exam.
¿Me dejas tus ___? (notes) | apuntes | Can you lend me your notes?
Me dieron una ___ para estudiar en Madrid. | beca | They gave me a grant to study in Madrid.
Me ___ (equivocarse) mucho con los tiempos. | equivoco | I make a lot of mistakes with tenses.
Mi asignatura favorita ___ (ser) la Historia. (impf) | era | My favourite subject was history.
Se ha creado una beca a fin de que más jóvenes ___ (estudiar) fuera. | estudien | A grant has been created so that more young people study abroad.
Quiero hablar con ___. (fluency) | fluidez | I want to speak fluently.
Pongo subtítulos para ___ (entender) mejor. | entender | I put subtitles on to understand better.
Grabo las clases para que mi compañero las ___ (escuchar). | escuche | I record the classes so that my classmate can listen to them.
`,
    S: `
Estudio español para poder trabajar en España. | I study Spanish to be able to work in Spain.
Te mando el audio para que practiques la pronunciación. | I'm sending you the audio so that you can practise pronunciation.
Hice la carrera de Económicas en Rotterdam. | I did an economics degree in Rotterdam.
Me dieron una beca Erasmus para estudiar en Salamanca. | They gave me an Erasmus grant to study in Salamanca.
Cuando termine el máster, buscaré trabajo en Madrid. | When I finish my master's, I'll look for work in Madrid.
Aprendo mejor escuchando que leyendo. | I learn better by listening than by reading.
No tengas miedo de equivocarte. | Don't be afraid of making mistakes.
Los niños españoles tienen muchos deberes. | Spanish children have a lot of homework.
`,
    R: [
      { t: 'El sistema educativo español', x: `En España, la educación es obligatoria de los seis a los dieciséis años. Los niños van al colegio durante seis años de Primaria y después al instituto, donde hacen cuatro años de ESO. Luego pueden hacer Bachillerato, que dura dos años y prepara para la universidad, o una Formación Profesional (FP), que prepara directamente para trabajar. Para entrar en la universidad hay que aprobar un examen llamado PAU, aunque mucha gente todavía lo llama "selectividad".`, q: `¿Hasta qué edad es obligatoria la educación? | Hasta los doce ; *Hasta los dieciséis ; Hasta los dieciocho
¿Para qué prepara la FP? | Para la universidad ; *Para trabajar ; Para la ESO
¿Cómo llama mucha gente a la PAU? | Bachillerato ; *Selectividad ; Carrera` },
      { t: 'Mi Erasmus en Salamanca', x: `Hice mi Erasmus en Salamanca hace ocho años. Llegué con un español básico y muchísimo miedo. Para que me resultara más fácil, mi universidad me buscó un "compañero lingüístico", Álvaro, que quería mejorar su inglés. Quedábamos dos veces por semana: una hora en español y otra en inglés. Al final del año yo hablaba español con bastante fluidez y Álvaro había aprobado su examen de inglés. Seguimos siendo amigos.`, q: `¿Cómo era su español al llegar? | Perfecto ; *Básico ; Inexistente
¿Por qué quería Álvaro quedar con ella? | Para salir de fiesta ; *Para mejorar su inglés ; Porque era su profesor
¿Qué pasó al final del año? | Volvió a casa sin hablar español ; *Hablaba con fluidez y Álvaro aprobó inglés ; Dejaron de ser amigos` },
      { t: 'Consejos para aprender idiomas', x: `Una profesora de idiomas comparte sus consejos: "Primero, escucha mucho, incluso cosas que no entiendes del todo, para que tu oído se acostumbre. Segundo, repasa el vocabulario en pocos minutos cada día; es mejor que estudiar tres horas el domingo. Tercero, no tengas miedo de equivocarte: los errores son parte del proceso. Y por último, busca un motivo personal para aprender: una persona, un viaje, una serie. Sin motivación, nada funciona".`, q: `¿Por qué hay que escuchar mucho? | Para aprobar ; *Para que el oído se acostumbre ; Para no hablar
¿Qué es mejor que estudiar tres horas el domingo? | No estudiar ; *Repasar unos minutos cada día ; Ver una serie
¿Qué es necesario según el último consejo? | Un buen libro ; *Un motivo personal, la motivación ; Un profesor nativo` }
    ],
    write: 'Describe your education (school, studies, what you liked and didn\'t), and explain how you learn languages best. Use para + infinitive and para que + subjunctive at least four times each.',
    talk: 'You are a Spanish secondary-school teacher chatting with the learner about education in Spain and the Netherlands and how they learn Spanish. Elicit para / para que and past-tense descriptions.',
    res: [R.lt(87, 88), R.slcInt(), R.hh('educación'), R.juan()]
  });

  U({
    id: 'b1-pluscuamperfecto', title: 'Experiencias: el pluscuamperfecto', goal: ['Talk about what had happened before another past event', 'Report experiences and results', 'Combine all four past tenses'],
    grammar: {
      t: 'Pretérito pluscuamperfecto (había hecho)',
      h: `<p>Form: <b>había, habías, había, habíamos, habíais, habían</b> + participle: <i>había comido, habías visto</i>.</p>
<p>Use it for an action that happened <b>before</b> another past action: <i>Cuando llegué a la estación, el tren <b>ya había salido</b>.</i> <i>Nunca <b>había visto</b> el mar hasta los veinte años.</i></p>
<p>The four past tenses together:</p>
<table><tr><td>Hoy <b>he visto</b> a Juan</td><td>finished action, unfinished time (Spain)</td></tr><tr><td>Ayer <b>vi</b> a Juan</td><td>finished action, finished time</td></tr>
<tr><td><b>Veía</b> a Juan cada día</td><td>habit / description</td></tr><tr><td>Ya <b>había visto</b> a Juan</td><td>before another past point</td></tr></table>
<p>Time phrases: <b>antes de + inf.</b> (before doing), <b>después de + inf.</b> (after doing), <b>ya</b> (already), <b>todavía / aún no</b> (not yet), <b>hasta entonces</b> (until then), <b>nunca antes</b> (never before).</p>`
    },
    conj: { t: 'plusc', v: ['hablar', 'comer', 'hacer', 'ver', 'decir', 'volver', 'ser', 'ir'] },
    V: `
ya | already | Cuando llegué, {ya} había empezado. | When I arrived, it had already started.
todavía no / aún no | not yet | {Todavía no} había llegado nadie. | Nobody had arrived yet.
hasta entonces | until then | {Hasta entonces} nunca había salido de Holanda. | Until then I had never left Holland.
nunca antes | never before | {Nunca antes} había visto algo así. | I'd never seen anything like it before.
antes de | before | {Antes de} salir, cierra la puerta. | Before leaving, close the door.
después de | after | {Después de} comer, dimos un paseo. | After eating, we went for a walk.
la experiencia | experience | Fue una {experiencia} inolvidable. | It was an unforgettable experience.
la primera vez | the first time | Era la {primera vez} que viajaba sola. | It was the first time I'd travelled alone.
el extranjero | abroad | Nunca había vivido en el {extranjero}. | I had never lived abroad.
el intercambio | exchange | Hice un {intercambio} en Sevilla. | I did an exchange in Seville.
adaptarse | to adapt | Me {adapté} muy rápido. | I adapted very quickly.
el choque cultural | culture shock | Sufrí un pequeño {choque cultural}. | I had a little culture shock.
acostumbrarse a | to get used to | No me he {acostumbrado a} cenar tan tarde. | I haven't got used to having dinner so late.
madrugar | to get up early | En Holanda {madrugaba} mucho. | In Holland I used to get up very early.
trasnochar | to stay up late | En España {trasnochamos} mucho. | In Spain we stay up very late.
sorprender | to surprise | Me {sorprendió} el horario. | The schedule surprised me.
darse cuenta de | to realise | Me {di cuenta de} que había perdido el pasaporte. | I realised I had lost my passport.
olvidarse de | to forget | Me {había olvidado de} su cumpleaños. | I had forgotten his birthday.
perderse | to get lost | Me {perdí} el primer día. | I got lost on the first day.
apuntar | to note down | Había {apuntado} mal la dirección. | I had written down the address wrong.
avisar | to warn, let know | Nadie me había {avisado}. | Nobody had warned me.
el vuelo | flight | El {vuelo} ya había salido. | The flight had already left.
la reserva | reservation | Habían cancelado la {reserva}. | They had cancelled the reservation.
la sorpresa | surprise | Fue una {sorpresa} total. | It was a total surprise.
inolvidable | unforgettable | Fue un viaje {inolvidable}. | It was an unforgettable trip.
el recuerdo | memory | Tengo muy buenos {recuerdos}. | I have very good memories.
la anécdota | anecdote | Te cuento una {anécdota}. | I'll tell you an anecdote.
arrepentirse de | to regret | No me {arrepiento de} nada. | I don't regret anything.
probar | to try | Nunca había {probado} el pulpo. | I had never tried octopus.
conocer | to meet; to get to know | Ya nos habíamos {conocido} antes. | We had already met before.
cambiar | to change | El barrio había {cambiado} mucho. | The neighbourhood had changed a lot.
crecer | to grow | Los niños habían {crecido} muchísimo. | The children had grown so much.
mudarse | to move | Ya se habían {mudado}. | They had already moved.
ocurrir | to happen | ¿Qué había {ocurrido}? | What had happened?
romper | to break | Alguien había {roto} la ventana. | Someone had broken the window.
volver | to return | Cuando {volví}, todo había cambiado. | When I came back, everything had changed.
despegar | to take off (plane) | El avión ya había {despegado}. | The plane had already taken off.
`,
    D: `
Cuando llegamos, la película ya ___ empezado. | había | When we arrived, the film had already started.
Nunca ___ ___ (estar, yo) en España antes de 2020. | había estado | I had never been to Spain before 2020.
Me dijo que ya ___ ___ (comer, ella). | había comido | She told me she had already eaten.
Antes de ___ (salir), cierra la ventana. | salir | Before leaving, close the window.
Hoy ___ ___ (ver, yo) a Marta en el mercado. | he visto | Today I saw Marta at the market.
El año pasado ___ (viajar, nosotros) a Perú. | viajamos | Last year we travelled to Peru.
Todavía no me he acostumbrado ___ cenar tan tarde. | a | I still haven't got used to having dinner so late.
Los niños ya se ___ ___ (dormir) cuando volvimos. | habían dormido | The children had already fallen asleep when we got back.
Cuando llegué al aeropuerto, el avión ya ___ ___ (despegar). | había despegado | When I got to the airport, the plane had already taken off.
Nadie me ___ ___ (avisar). | había avisado | Nobody had warned me.
¿Qué ___ ___ (ocurrir)? | había ocurrido | What had happened?
Me di cuenta de que ___ ___ (perder, yo) las llaves. | había perdido | I realised I had lost my keys.
Nunca antes ___ ___ (probar, nosotros) el pulpo. | habíamos probado | We had never tried octopus before.
Cuando volví, el barrio ___ ___ (cambiar) mucho. | había cambiado | When I came back, the neighbourhood had changed a lot.
Después de ___ (cenar), vimos una película. | cenar | After having dinner, we watched a film.
¿Vosotros ya ___ ___ (estar) en Galicia? | habíais estado | Had you (all) already been to Galicia?
De niño ___ (ir, yo) a la playa cada verano. | iba | As a child I went to the beach every summer.
Ellos ya ___ ___ (hacer) la reserva. | habían hecho | They had already made the reservation.
Era la primera vez que ___ ___ (viajar, ella) sola. | había viajado | It was the first time she had travelled alone.
Alguien ___ ___ (romper) la ventana. | había roto | Someone had broken the window.
`,
    S: `
Cuando llegué al aeropuerto, el vuelo ya había salido. | When I got to the airport, the flight had already left.
Nunca había probado nada tan picante. | I had never tried anything so spicy.
Me di cuenta de que me había dejado las llaves dentro. | I realised I had left my keys inside.
Después de comer, nos fuimos a dar una vuelta. | After eating, we went for a stroll.
Aún no me he acostumbrado al horario español. | I still haven't got used to the Spanish schedule.
Hasta entonces, no había vivido nunca en el extranjero. | Until then, I had never lived abroad.
Era la primera vez que veía la nieve. | It was the first time I'd seen snow.
Cuando volví a mi pueblo, todo había cambiado. | When I went back to my village, everything had changed.
`,
    R: [
      { t: 'Mi primer mes en Salamanca', x: `Cuando llegué a Salamanca para mi Erasmus, nunca había vivido fuera de casa. El primer día me perdí: había apuntado mal la dirección de la residencia. Al principio todo me sorprendía: la gente cenaba a las diez, las tiendas cerraban a mediodía y todo el mundo hablaba muy rápido. Pero después de unas semanas me acostumbré. Hoy he cenado a las diez sin pensarlo y me he dado cuenta de que ya no echo tanto de menos mi país.`, q: `¿Había vivido fuera de casa antes? | Sí ; *No ; Solo un mes
¿Por qué se perdió el primer día? | *Había apuntado mal la dirección ; No había mapas ; Llegó de noche
¿Qué ha hecho hoy? | *Ha cenado a las diez ; Ha vuelto a su país ; Se ha perdido` },
      { t: 'El regreso', x: `Después de diez años en Australia, Carmen volvió a su pueblo de Teruel. Todo había cambiado: la escuela, donde había estudiado de niña, había cerrado porque ya no había niños. El bar de su tío se había convertido en una casa rural para turistas. Muchos de sus amigos se habían ido a Zaragoza o a Madrid. Pero la plaza seguía igual, y su abuela, con noventa y cinco años, todavía la estaba esperando en la puerta de casa.`, q: `¿Cuánto tiempo había estado en Australia? | Cinco años ; *Diez años ; Un año
¿Por qué había cerrado la escuela? | Por obras ; *Porque ya no había niños ; Por la crisis
¿Qué seguía igual? | El bar ; *La plaza ; La escuela` },
      { t: 'Un viaje lleno de imprevistos', x: `Habíamos planeado el viaje a Lisboa durante meses. Pero cuando llegamos al aeropuerto, nos dijeron que el vuelo había sido cancelado. Cogimos un autobús nocturno. Al llegar, descubrimos que el hotel había perdido nuestra reserva. Por suerte, un señor que habíamos conocido en el autobús nos recomendó una pensión. Fue un viaje caótico, pero nunca antes nos habíamos reído tanto.`, q: `¿Qué había pasado con el vuelo? | Llevaba retraso ; *Había sido cancelado ; Había salido antes
¿Qué problema tenía el hotel? | Estaba lleno ; *Había perdido la reserva ; Era muy caro
¿Quién les recomendó una pensión? | El hotel ; *Un señor que habían conocido en el autobús ; Un taxista` }
    ],
    write: 'Write about your first experience living or travelling abroad (or imagine one): what you had never done before, what surprised you, what you got used to. Use all four past tenses, at least five pluscuamperfectos.',
    talk: 'You are a Spanish university student who did Erasmus in the Netherlands. Swap experiences with the learner about living abroad; use and encourage the pluscuamperfecto and contrast past tenses.',
    res: [R.lt(89, 90), R.slcInt(), R.notes('Intermediate'), R.lecturas('nivel intermedio')]
  });

  U({
    id: 'b1-sociedad', title: 'Sociedad y medio ambiente: se, deber, hay que', goal: ['Discuss social and environmental issues', 'Use impersonal se, hay que, deber and se debería', 'Propose solutions'],
    grammar: {
      t: 'Impersonal structures for general statements and proposals',
      h: `<p><b>Impersonal se</b>: <i><b>Se recicla</b> poco. <b>Se usan</b> demasiadas bolsas de plástico.</i> (verb agrees with plural noun)</p>
<p><b>hay que + infinitive</b> (one must), <b>se debe / se debería + infinitive</b> (one should), <b>es necesario + infinitive / que + subj.</b>: <i>Hay que reducir el consumo. Se debería usar más el transporte público. Es necesario que todos colaboremos.</i></p>
<p><b>la gente</b> is singular: <i>La gente <b>tira</b> mucha comida.</i> <b>uno</b> = one, you (general): <i>Uno no sabe qué hacer.</i></p>
<p>Proposals: <i>Propongo que…, Una solución sería…, Lo ideal sería…, ¿Por qué no…?</i></p>`
    },
    V: `
el medio ambiente | environment | Hay que proteger el {medio ambiente}. | We must protect the environment.
el cambio climático | climate change | El {cambio climático} nos afecta a todos. | Climate change affects us all.
el calentamiento global | global warming | El {calentamiento global} es evidente. | Global warming is evident.
la contaminación | pollution | La {contaminación} del aire es grave. | Air pollution is serious.
contaminar | to pollute | Los coches {contaminan} mucho. | Cars pollute a lot.
reciclar | to recycle | En casa {reciclamos} todo. | At home we recycle everything.
el reciclaje | recycling | El {reciclaje} es obligatorio. | Recycling is compulsory.
el contenedor | (recycling) bin | El vidrio va al {contenedor} verde. | Glass goes in the green bin.
los residuos | waste | Hay que reducir los {residuos}. | We must reduce waste.
el plástico | plastic | Usamos demasiado {plástico}. | We use too much plastic.
la sequía | drought | La {sequía} afecta al sur de España. | Drought affects the south of Spain.
el incendio | fire (wildfire) | Hubo un {incendio} forestal. | There was a forest fire.
las energías renovables | renewable energy | España invierte en {energías renovables}. | Spain invests in renewable energy.
la energía solar | solar energy | Tenemos placas de {energía solar}. | We have solar panels.
ahorrar energía | to save energy | Apaga la luz para {ahorrar energía}. | Turn off the light to save energy.
el consumo | consumption | Hay que reducir el {consumo}. | We must reduce consumption.
sostenible | sustainable | Es un modelo más {sostenible}. | It's a more sustainable model.
el transporte público | public transport | Uso el {transporte público}. | I use public transport.
la desigualdad | inequality | La {desigualdad} ha aumentado. | Inequality has increased.
la pobreza | poverty | Hay que luchar contra la {pobreza}. | We must fight poverty.
el paro | unemployment | El {paro} juvenil es alto. | Youth unemployment is high.
la inmigración | immigration | La {inmigración} es un tema importante. | Immigration is an important topic.
la sociedad | society | Vivimos en una {sociedad} diversa. | We live in a diverse society.
el ciudadano / la ciudadana | citizen | Los {ciudadanos} tienen derechos. | Citizens have rights.
los derechos | rights | Defendemos los {derechos} humanos. | We defend human rights.
la igualdad | equality | La {igualdad} de género. | Gender equality.
la manifestación | demonstration | Hubo una {manifestación} en el centro. | There was a demonstration in the centre.
la huelga | strike | Mañana hay {huelga} de transportes. | Tomorrow there's a transport strike.
el voluntario / la voluntaria | volunteer | Trabajo de {voluntaria} en un comedor social. | I volunteer at a soup kitchen.
la ONG | NGO | Colaboro con una {ONG}. | I collaborate with an NGO.
colaborar | to collaborate | Todos debemos {colaborar}. | We must all collaborate.
proponer | to propose | {Propongo} que reciclemos más. | I propose that we recycle more.
la solución | solution | La {solución} no es fácil. | The solution isn't easy.
el problema | problem | Es un {problema} global. | It's a global problem.
reducir | to reduce | Hay que {reducir} el plástico. | We must reduce plastic.
evitar | to avoid | Se debe {evitar} el desperdicio. | Waste should be avoided.
tirar | to throw away | No {tires} la comida. | Don't throw food away.
el desperdicio de alimentos | food waste | El {desperdicio de alimentos} es enorme. | Food waste is huge.
hay que | one must | {Hay que} actuar ya. | We must act now.
se debería | one should | {Se debería} usar más la bici. | People should use bikes more.
`,
    D: `
En España se ___ (reciclar) cada vez más. | recicla | In Spain more and more is recycled.
Se ___ (usar) demasiadas bolsas de plástico. | usan | Too many plastic bags are used.
___ que reducir el consumo de energía. | hay | We must reduce energy consumption.
Se ___ (deber) usar más el transporte público. (conditional) | debería | People should use public transport more.
Es necesario que todos ___ (colaborar, nosotros). | colaboremos | It's necessary that we all collaborate.
La gente ___ (tirar) mucha comida. | tira | People throw away a lot of food.
Propongo que ___ (reducir, nosotros) el plástico. | reduzcamos | I propose that we reduce plastic.
El vidrio va al ___ verde. | contenedor | Glass goes in the green bin.
La ___ afecta mucho al sur de España. (drought) | sequía | Drought greatly affects the south of Spain.
Mañana hay ___ de transportes. (strike) | huelga | Tomorrow there's a transport strike.
Trabajo de ___ en una ONG. | voluntaria|voluntario | I volunteer at an NGO.
Hay que luchar ___ la pobreza. | contra | We must fight against poverty.
Lo ideal ___ (ser) usar energías renovables. | sería | The ideal would be to use renewable energy.
No ___ (tirar, tú) la comida. | tires | Don't throw food away.
Los coches ___ (contaminar) mucho. | contaminan | Cars pollute a lot.
Es un modelo más ___. (sustainable) | sostenible | It's a more sustainable model.
Una solución ___ (ser) bajar los impuestos. | sería | One solution would be to lower taxes.
Hubo un ___ forestal en verano. (fire) | incendio | There was a forest fire in summer.
Se ___ (necesitar) más viviendas. | necesitan | More housing is needed.
Uno no ___ (saber) qué hacer. | sabe | You don't know what to do.
`,
    S: `
Hay que reducir el consumo de plástico. | We must reduce plastic consumption.
Se debería usar más la bicicleta en las ciudades. | People should use bicycles more in cities.
Es necesario que todos colaboremos. | It's necessary for us all to collaborate.
En España se recicla cada vez más. | In Spain more and more is recycled.
La sequía es uno de los mayores problemas del sur. | Drought is one of the biggest problems in the south.
Propongo que pongamos placas solares en el edificio. | I propose we put solar panels on the building.
La gente tira demasiada comida. | People throw away too much food.
Lo ideal sería tener mejor transporte público. | The ideal would be better public transport.
`,
    R: [
      { t: 'España y el agua', x: `España es uno de los países europeos más afectados por el cambio climático. En los últimos años, las sequías han sido cada vez más largas y los veranos más calurosos. En algunas zonas de Andalucía y Cataluña se ha tenido que limitar el uso del agua. Los expertos dicen que hay que modernizar la agricultura, que consume casi el ochenta por ciento del agua, y que se debería invertir más en desalinizadoras y en reutilizar el agua.`, q: `¿Cómo han sido las sequías últimamente? | Más cortas ; *Cada vez más largas ; No ha habido
¿Quién consume casi el ochenta por ciento del agua? | Las casas ; *La agricultura ; El turismo
¿Qué proponen los expertos? | Prohibir el turismo ; *Modernizar la agricultura y reutilizar el agua ; Construir más piscinas` },
      { t: 'Reciclar en España', x: `En España se recicla con contenedores de colores en la calle: el amarillo es para plásticos y latas, el azul para papel y cartón, el verde para el vidrio y el marrón para los restos orgánicos. Lo demás va al contenedor gris. Las medicinas se llevan a la farmacia y las pilas a puntos especiales. Muchos extranjeros se sorprenden de que no haya que separar tantos tipos de residuos como en su país.`, q: `¿Para qué es el contenedor azul? | Vidrio ; *Papel y cartón ; Plástico
¿Dónde se llevan las medicinas? | Al contenedor gris ; *A la farmacia ; Al ayuntamiento
¿Qué sorprende a muchos extranjeros? | Que no se recicle ; *Que no haya que separar tantos tipos de residuos ; Que los contenedores sean de colores` },
      { t: 'Voluntariado en el barrio', x: `Desde hace dos años, Elena dedica los sábados por la mañana a un banco de alimentos de su barrio, en Valencia. Allí recogen la comida que los supermercados no venden y la reparten entre las familias que lo necesitan. "Al principio pensaba que no tenía tiempo", cuenta. "Ahora es la mejor parte de mi semana". Elena cree que se debería hablar más de la pobreza: "Hay mucha gente que trabaja y aun así no llega a fin de mes".`, q: `¿Qué hace Elena los sábados? | Trabaja en un supermercado ; *Colabora en un banco de alimentos ; Va al mercado
¿De dónde viene la comida? | De donaciones particulares ; *De lo que los supermercados no venden ; Del ayuntamiento
¿Qué cree Elena? | Que hay poca pobreza ; *Que se debería hablar más de la pobreza ; Que no hace falta ayudar` }
    ],
    write: 'Write a proposal (200 words) to your town hall or neighbours to solve one social or environmental problem. Use hay que, se debería, es necesario que, propongo que and lo ideal sería.',
    talk: 'You are a Spanish environmental activist at a neighbourhood meeting. Discuss problems (recycling, heat, traffic, housing) with the learner and ask for proposals; elicit hay que, se debería and propongo que + subjunctive.',
    res: [R.hh('medio ambiente'), R.slcInt(), R.practica(), R.juan()]
  });
})();
