/* C2 · Maestría (part 1) */
(function () {
  const R = RES, U = CAMINO.unit('C2'), L = window.CAMINO_LEGACY || {};
  const S = (id, o) => U(Object.assign({}, L[id] || {}, { id }, o));

  S('c2-01', {
    title: 'Matices léxicos: ser/estar y falsos amigos',
    V: `
estar listo / estar lista | to be ready | ¿{Estás lista}? Nos vamos. | Are you ready? We're going.
ser listo / ser lista | to be clever | {Es} muy {lista}; lo entiende todo. | She's very clever; she understands everything.
estar rico / estar rica | to be tasty | Este gazpacho {está riquísimo}. | This gazpacho is delicious.
estar malo / estar mala | to be ill; to taste bad | Hoy no voy; {estoy malo}. | I'm not going today; I'm ill.
ser vivo / ser viva | to be sharp, quick-witted | Ese crío {es} muy {vivo}. | That kid is really sharp.
ser atento / ser atenta | to be considerate | {Es} muy {atento} con sus vecinos. | He's very considerate to his neighbours.
estar atento / estar atenta | to pay attention | {Estad atentos} a la explicación. | Pay attention to the explanation.
estar verde | to be unripe; inexperienced | Todavía {está verde} para ese puesto. | He's still too inexperienced for that post.
no estar muy católico | to feel under the weather | Hoy {no estoy muy católico}. | I'm feeling a bit off today.
estar negro / estar negra | to be fed up, furious | {Estoy negra} con este ordenador. | I'm fed up with this computer.
estar molido / estar molida | to be worn out | Después de la mudanza {estoy molido}. | After the move I'm worn out.
ser orgulloso / ser orgullosa | to be proud, arrogant | {Es} demasiado {orgulloso} para pedir perdón. | He's too proud to apologise.
estar orgulloso de | to be proud of | {Estoy orgullosa de} ti. | I'm proud of you.
ser católico / ser católica | to be Catholic | Su familia {es católica}. | Her family is Catholic.
la injuria | insult (not injury) | Lo denunció por {injurias}. | She sued him for insult.
constipado / constipada | having a cold | Estoy {constipado}; no puedo respirar. | I've got a cold; I can't breathe.
la lesión | injury | Una {lesión} de rodilla. | A knee injury.
actualmente | currently | {Actualmente} vivo en Bilbao. | I currently live in Bilbao.
comprometido / comprometida | committed; awkward | Una situación {comprometida}. | An awkward situation.
sensato / sensata | sensible | Fue una decisión {sensata}. | It was a sensible decision.
el conservante | preservative (not «preservativo») | Sin {conservantes} ni colorantes. | No preservatives or colourings.
la fábrica | factory | Trabaja en una {fábrica} de coches. | He works in a car factory.
la renta | income (not rent) | Declaró una {renta} baja. | He declared a low income.
eventualmente | possibly, occasionally | {Eventualmente} podríamos necesitar ayuda. | We might possibly need help.
el sujeto | subject; guy | Un {sujeto} sospechoso. | A suspicious guy.
a ver | let's see | {A ver}, explícamelo otra vez. | Let's see, explain it to me again.
de más | extra, too many | Me has dado un euro {de más}. | You've given me one euro too many.
pretender | to aim, try to | ¿Qué {pretendes} con eso? | What are you trying to achieve with that?
aplicar | to apply (a rule, a cream) | {Aplica} la crema dos veces al día. | Apply the cream twice a day.
la colisión | crash, collision | Una {colisión} frontal. | A head-on collision.
la desgracia | misfortune | Tuvo la {desgracia} de perderlo todo. | He had the misfortune to lose everything.
la miseria | poverty, pittance | Cobra una {miseria}. | He earns a pittance.
asistir a | to attend | {Asistieron a} la boda doscientas personas. | Two hundred people attended the wedding.
el resfriado | cold (illness) | Pillé un {resfriado}. | I caught a cold.
ultimar | to finalise | Están {ultimando} los detalles. | They're finalising the details.
la conferencia | lecture, talk | Dio una {conferencia} en la universidad. | She gave a lecture at the university.
en absoluto | not at all | —¿Te molesta? —{En absoluto}. | —Does it bother you? —Not at all.
el pariente / la pariente | relative | Es un {pariente} lejano. | He's a distant relative.
embarazoso / embarazosa | awkward, embarrassing | Fue un silencio {embarazoso}. | It was an awkward silence.
el disgusto | upset | Se llevó un {disgusto} enorme. | She was terribly upset.
`,
    D: `
No puedo salir todavía; no ___ lista. | estoy | I can't go out yet; I'm not ready.
Tu hija ___ muy lista: ya sabe leer. | es | Your daughter is very clever: she can already read.
¡Qué bueno ___ este cocido! | está | This stew is delicious!
Hoy no voy a clase; ___ malo. | estoy | I'm not going to class today; I'm ill.
Ese niño ___ muy vivo: no se le escapa nada. | es | That child is very sharp: nothing gets past him.
Mi abuelo, a sus 95 años, todavía ___ vivo. | está | My grandfather, at 95, is still alive.
Todavía ___ verde para dirigir el equipo. | está | He's still too inexperienced to lead the team.
Hoy no ___ muy católico; me duele la cabeza. | estoy | I'm feeling a bit off today; I've got a headache.
Estoy ___ con este ordenador: no funciona nada. | negro|negra | I'm fed up with this computer: nothing works.
No es azul, ___ verde. | sino | It's not blue, but green.
Me has dado dos euros ___ más. | de | You've given me two euros too many.
Tengo un ___: no paro de estornudar. | resfriado | I've got a cold: I can't stop sneezing.
Es una persona muy sensible, pero también muy ___ en sus decisiones. | sensata | She's a very sensitive person, but also very sensible in her decisions.
¿Qué ___ conseguir con esas amenazas? | pretendes | What are you trying to achieve with those threats?
Doscientas personas ___ a la conferencia. | asistieron | Two hundred people attended the lecture.
Lo denunció por ___: le llamó ladrón en público. | injurias | She sued him for insult: he called her a thief in public.
Sufre una ___ en la rodilla y no puede jugar. | lesión | He has a knee injury and can't play.
—¿Te importa que abra la ventana? —En ___. | absoluto | —Do you mind if I open the window? —Not at all.
Fue un silencio muy ___: nadie sabía qué decir. | embarazoso | It was a very awkward silence: nobody knew what to say.
Este yogur no lleva ___ ni colorantes. | conservantes | This yoghurt contains no preservatives or colourings.
`,
    S: `
No estoy lista todavía; dame cinco minutos. | I'm not ready yet; give me five minutes.
Es muy listo, pero a veces no está atento. | He's very clever, but sometimes he doesn't pay attention.
Este pescado está riquísimo. | This fish is delicious.
No estoy muy católico hoy; creo que me voy a casa. | I'm not feeling great today; I think I'll go home.
Estoy constipado y no paro de estornudar. | I've got a cold and can't stop sneezing.
Actualmente trabajo en una fábrica de muebles. | I currently work in a furniture factory.
No es que sea tímida, sino que es muy sensible. | It's not that she's shy, but that she's very sensitive.
¿Te molesta que fume? En absoluto. | Do you mind if I smoke? Not at all.
`,
    R: [
      { t: 'Confesiones de un neerlandés en Madrid', x: `Llevaba tres semanas en Madrid cuando cometí mi primer error memorable. En una cena con compañeros de trabajo, quise explicar que me daba vergüenza hablar en público y dije, muy serio: «Estoy muy embarazado». Hubo un silencio, luego una carcajada general, y una compañera me felicitó con mucha sorna por la buena noticia.

Desde entonces he coleccionado tropiezos. Le dije a mi casera que su hijo «estaba muy listo», cuando quería decir que era inteligente; ella me miró desconcertada, porque el niño estaba en pijama. En la oficina anuncié que «eventualmente» terminaría el informe, y mi jefa entendió que quizá algún día, cuando yo quería decir «al final». Y una vez, en la farmacia, pedí algo «para la constipación», convencido de que hablaba de mi resfriado. La farmacéutica, muy profesional, me dio un laxante.

Con el tiempo he aprendido que los falsos amigos no son solo un problema de vocabulario, sino de confianza. Cuando una palabra se parece tanto a otra que ya conocemos, ni siquiera se nos ocurre comprobarla. Por eso ahora, cada vez que una palabra española me resulta sospechosamente familiar, la busco en el diccionario. Y si no tengo diccionario a mano, a ver, mejor pregunto. Me ha ahorrado más de un disgusto.`, q: `¿Qué quería decir el narrador con «estoy muy embarazado»? | Que estaba esperando un hijo ; *Que le daba vergüenza ; Que estaba enfermo
¿Por qué se desconcertó la casera? | Porque el niño no era inteligente ; *Porque entendió que el niño estaba preparado ; Porque no hablaba español
¿Qué conclusión saca el narrador sobre los falsos amigos? | Que son fáciles de evitar ; *Que el problema es confiar en el parecido sin comprobar ; Que solo afectan a los principiantes` },
      { t: 'Ser o estar: una cuestión de mirada', x: `Los manuales suelen explicar que «ser» expresa características permanentes y «estar», estados pasajeros. La regla funciona como punto de partida, pero pronto choca con la realidad: decimos que alguien «está muerto», que es de lo más permanente, y que una fiesta «es» a las diez, que es de lo más pasajero.

Muchos lingüistas prefieren otra explicación. «Ser» clasifica: sitúa al sujeto en una categoría y lo define. «Estar», en cambio, describe cómo encontramos al sujeto en un momento o en comparación con lo esperado. Por eso «Juan es delgado» describe su complexión, mientras que «Juan está delgado» sugiere que ha adelgazado o que lo vemos así ahora. Del mismo modo, «este pescado es rico» resultaría extraño, mientras que «está rico» expresa nuestra experiencia al probarlo.

Esta perspectiva explica también los adjetivos que cambian de significado. «Ser listo» clasifica a alguien como inteligente; «estar listo» describe que, en este momento, está preparado. «Ser malo» define a una persona; «estar malo» describe su estado de salud. Y «ser verde» atribuye un color, mientras que «estar verde» indica que una fruta, o una persona en su trabajo, todavía no ha alcanzado su punto.

Para un hablante avanzado, la clave no es memorizar listas, sino preguntarse: ¿estoy definiendo o estoy describiendo lo que percibo?`, q: `¿Qué problema tiene la regla «permanente/pasajero»? | Es demasiado complicada ; *Choca con ejemplos como «está muerto» ; Solo sirve para adjetivos de color
Según la explicación alternativa, ¿qué hace «estar»? | Clasifica al sujeto ; *Describe cómo encontramos al sujeto en un momento ; Expresa siempre algo negativo
¿Qué sugiere «Juan está delgado»? | Que siempre ha sido delgado ; *Que ha adelgazado o lo vemos así ahora ; Que está enfermo` },
      { t: 'Palabras traicioneras en la oficina', x: `En una multinacional con sede en Barcelona, el departamento de recursos humanos ha elaborado una guía interna para los empleados extranjeros. No trata de leyes ni de horarios, sino de palabras.

La guía advierte, por ejemplo, de que «asistir a una reunión» significa estar presente en ella, no ayudar; para ayudar se dice «echar una mano» o «colaborar». Recuerda que «actualmente» quiere decir «ahora» y no «en realidad», y que un «compromiso» puede ser una obligación o un acuerdo, pero rara vez una concesión mutua. También señala que «la renta» es lo que uno ingresa, no lo que paga por el piso, y que la «Facultad» es una parte de la universidad, no su profesorado.

El apartado más comentado es el de las palabras que, sin ser falsos amigos, cambian de tono según el contexto. «Discutir», explica la guía, puede significar debatir con calma, pero en la conversación cotidiana suele implicar una pelea. «Pretender» no tiene nada que ver con fingir: indica una intención. Y decir que un proyecto «está verde» no es un comentario ecológico, sino una forma educada de decir que no está preparado.

Los autores de la guía cierran con un consejo sensato: ante la duda, preguntar. En España, concluyen, a nadie le molesta en absoluto explicar una palabra; lo que sí molesta es un malentendido que nadie se atrevió a aclarar.`, q: `¿Qué significa «asistir a una reunión»? | Ayudar en la reunión ; *Estar presente en ella ; Organizarla
¿Qué es «la renta» según la guía? | El alquiler del piso ; *Lo que uno ingresa ; Un impuesto
¿Qué quiere decir que un proyecto «está verde»? | Que es ecológico ; *Que todavía no está preparado ; Que ha sido aprobado` }
    ]
  });

  S('c2-02', {
    title: 'Estilo y énfasis',
    V: `
lo de | the business about | ¿Te has enterado de {lo de} Pedro? | Have you heard about Pedro?
lo mejor / lo peor | the best / worst thing | {Lo peor} fue la espera. | The worst thing was the wait.
de lo más | really, most | Fue una cena {de lo más} agradable. | It was a most pleasant dinner.
la mar de | very (colloquial) | Estaba {la mar de} contenta. | She was ever so happy.
sí que | really, indeed | Eso {sí que} es raro. | Now that really is strange.
ni siquiera | not even | {Ni siquiera} me saludó. | He didn't even say hello.
a lo grande | in style | Lo celebraron {a lo grande}. | They celebrated in style.
recalcar | to stress | Quiero {recalcar} un punto. | I want to stress one point.
hacer hincapié en | to emphasise | {Hizo hincapié en} la seguridad. | She emphasised safety.
la ironía | irony | Lo dijo con {ironía}. | He said it ironically.
el recurso estilístico | stylistic device | La metáfora es un {recurso estilístico}. | Metaphor is a stylistic device.
la anáfora | anaphora | La repetición inicial es una {anáfora}. | Repetition at the start is an anaphora.
la antítesis | antithesis | «Es tan corto el amor y tan largo el olvido»: una {antítesis}. | «Love is so short and forgetting so long»: an antithesis.
la oración escindida | cleft sentence | «Fue Ana quien lo dijo» es una {oración escindida}. | «It was Ana who said it» is a cleft sentence.
el énfasis | emphasis | Pon el {énfasis} en la última palabra. | Put the emphasis on the last word.
enfático / enfática | emphatic | Un tono {enfático}. | An emphatic tone.
la tematización | topicalisation | La {tematización} adelanta el tema: «El libro, lo leí». | Topicalisation brings the topic forward: «The book, I read it».
el foco | focus | La información nueva va al {foco}, al final. | New information goes in focus, at the end.
la hipérbole | hyperbole | «Te lo he dicho mil veces» es una {hipérbole}. | «I've told you a thousand times» is hyperbole.
la enumeración | enumeration, list | Una {enumeración} de tres elementos. | A list of three elements.
la gradación | climax, gradation | Una {gradación} ascendente. | An ascending gradation.
el paralelismo | parallelism | El {paralelismo} da ritmo al texto. | Parallelism gives rhythm to the text.
la pregunta retórica | rhetorical question | ¿Quién no ha soñado con ello? Una {pregunta retórica}. | Who hasn't dreamed of it? A rhetorical question.
el quiasmo | chiasmus | «Ni son todos los que están, ni están todos los que son»: un {quiasmo}. | That line is a chiasmus.
la elipsis | ellipsis | La {elipsis} suprime lo que se sobrentiende. | Ellipsis leaves out what is understood.
sobrentender | to take as understood | Se {sobrentiende} que vendrás. | It goes without saying that you'll come.
rotundo / rotunda | categorical | Un no {rotundo}. | A categorical no.
tajante | categorical, blunt | Fue {tajante}: no habrá prórroga. | She was categorical: there will be no extension.
contundente | forceful, compelling | Un argumento {contundente}. | A compelling argument.
el remate | finishing touch, punchline | El {remate} del discurso fue genial. | The ending of the speech was brilliant.
a todas luces | clearly, by any standards | Es, {a todas luces}, un error. | It's clearly a mistake.
ni mucho menos | far from it | No es fácil, {ni mucho menos}. | It's not easy, far from it.
a más no poder | to the utmost | Comimos {a más no poder}. | We ate as much as we possibly could.
lo que se dice | what you'd call, really | No es {lo que se dice} un experto. | He's not what you'd call an expert.
¡si será…! | how … can he be! | ¡{Si será} tonto! | How stupid can he be!
de lo lindo | a lot, thoroughly | Nos divertimos {de lo lindo}. | We had a whale of a time.
la mismísima | the very (emphatic) | Vino {la mismísima} ministra. | The minister herself came.
cuán | how (literary) | ¡{Cuán} breve es la vida! | How brief life is!
el estilo nominal | nominal style | Evita el {estilo nominal} excesivo. | Avoid excessive nominal style.
la prosa | prose | Escribe una {prosa} limpia. | She writes clean prose.
`,
    D: `
___ Ana quien lo descubrió, no yo. | Fue | It was Ana who discovered it, not me.
Es aquí ___ nos conocimos hace veinte años. | donde | It's here that we met twenty years ago.
Fue entonces ___ lo entendí todo. | cuando | It was then that I understood everything.
Lo que necesito ___ tiempo, no dinero. | es | What I need is time, not money.
Ese libro ya ___ he leído. | lo | That book, I've already read it.
No te imaginas lo ___ que está el pueblo. | lejos | You can't imagine how far away the village is.
Eso sí ___ es una buena noticia. | que | Now that really is good news.
Fue una velada de lo ___ agradable. | más | It was a most pleasant evening.
La niña estaba la ___ de contenta. | mar | The girl was ever so happy.
¡Si ___ tonto! Se ha dejado las llaves dentro otra vez. | será | How silly can he be! He's left the keys inside again.
No es un experto, ni mucho ___. | menos | He's not an expert, far from it.
Quiero hacer ___ en la importancia de la seguridad. | hincapié | I want to stress the importance of safety.
«Es tan corto el amor y tan largo el olvido»: es una ___. | antítesis | «Love is so short and forgetting so long»: it's an antithesis.
Repetir la misma palabra al comienzo de cada verso se llama ___. | anáfora | Repeating the same word at the start of each line is called anaphora.
«¿Quién no ha soñado alguna vez con volar?» es una pregunta ___. | retórica | «Who hasn't dreamt of flying?» is a rhetorical question.
Su respuesta fue ___: «No, y no insistas». | tajante|rotunda | Her answer was categorical: «No, and don't insist».
Es, a todas ___, la mejor candidata. | luces | She's clearly the best candidate.
No es lo que se ___ un genio, pero trabaja mucho. | dice | He's not what you'd call a genius, but he works hard.
Nos divertimos de lo ___ en la boda. | lindo | We had a whale of a time at the wedding.
Lo celebraron a lo ___, con orquesta y fuegos artificiales. | grande | They celebrated in style, with a band and fireworks.
`,
    S: `
Fue precisamente entonces cuando lo entendí. | It was precisely then that I understood.
Lo que más me sorprendió fue su sinceridad. | What surprised me most was her sincerity.
Ese libro ya lo he leído dos veces. | That book, I've already read it twice.
No te imaginas lo difícil que fue. | You can't imagine how hard it was.
Eso sí que no me lo esperaba. | Now that I really didn't expect.
Fue, a todas luces, un error. | It was clearly a mistake.
No es fácil, ni mucho menos. | It's not easy, far from it.
Quiero hacer hincapié en un último punto. | I want to emphasise one last point.
`,
    R: [
      { t: 'El orden de las palabras', x: `Una de las diferencias más sutiles entre un estudiante avanzado y un hablante nativo no está en el vocabulario ni en los tiempos verbales, sino en el orden de las palabras. El español es una lengua de orden relativamente libre, pero esa libertad no es arbitraria: el lugar que ocupa cada elemento indica qué información se da por conocida y cuál es nueva.

Por lo general, la información nueva tiende a ir al final. Si alguien pregunta «¿Quién ha llamado?», lo natural es responder «Ha llamado tu hermana», y no «Tu hermana ha llamado», que suena a respuesta a otra pregunta. Del mismo modo, cuando el tema de la conversación ya está establecido, se adelanta y se recupera con un pronombre: «Ese libro ya lo he leído», «A tu primo no lo soporto».

Las oraciones escindidas permiten marcar el foco de forma todavía más clara. «Fue Ana quien lo dijo» no solo informa de que Ana lo dijo, sino que excluye a otras personas. «Es aquí donde nos conocimos» subraya el lugar frente a cualquier otro.

Dominar estos recursos no es cuestión de corrección, porque las versiones «neutras» no son incorrectas. Es cuestión de naturalidad y de precisión: de decir exactamente lo que queremos destacar. Y es, sin duda, una de las marcas del nivel de maestría.`, q: `¿Qué tiende a ir al final de la oración en español? | La información conocida ; *La información nueva ; El verbo
¿Qué indica «Ese libro ya lo he leído»? | Que el libro es nuevo en la conversación ; *Que el libro es el tema ya establecido ; Que el hablante no ha leído el libro
Según el texto, ¿por qué es importante dominar estos recursos? | Porque las versiones neutras son incorrectas ; *Por naturalidad y precisión ; Porque lo exige el DELE` },
      { t: 'Un discurso de graduación', x: `Queridos compañeros, queridas familias:

Hace cuatro años llegamos a esta facultad con miedo, con ilusión y, sobre todo, con muchas preguntas. Hoy nos vamos con menos miedo, con la misma ilusión y con muchas más preguntas. Y eso, creedme, es lo mejor que nos podía pasar.

Porque no fue en los exámenes donde más aprendimos. Fue en las discusiones interminables de la cafetería, en los trabajos que entregamos a las tres de la mañana, en los errores que nos avergonzaron y en las pequeñas victorias que celebramos a lo grande. Lo que nos llevamos no es solo un título: es una forma de mirar el mundo.

Nos dijeron que éramos una generación sin futuro. Nos dijeron que no leíamos, que no escuchábamos, que no nos importaba nada. ¿Quién no ha oído alguna vez esas frases? Pues bien, hoy estamos aquí para demostrar lo contrario. No somos perfectos, ni mucho menos. Pero sí que somos tenaces.

Quiero hacer hincapié en una última idea. El conocimiento que hemos recibido no es nuestro: es prestado. Lo recibimos de quienes vinieron antes y lo debemos devolver a quienes vendrán después.

Gracias a nuestros profesores, gracias a nuestras familias y, sobre todo, gracias a vosotros. Ha sido un honor.`, q: `¿Dónde dice la oradora que más aprendieron? | En los exámenes ; *En las discusiones, los trabajos y los errores ; En las prácticas en empresas
¿Qué recurso retórico usa al repetir «Nos dijeron que…»? | Antítesis ; *Anáfora ; Elipsis
¿Qué idea quiere subrayar al final? | Que el título es lo más importante ; *Que el conocimiento es prestado y hay que devolverlo ; Que la universidad fue fácil` },
      { t: 'Contra la prosa hinchada', x: `Hay textos que parecen escritos para que nadie los entienda. Abundan en ellos los sustantivos abstractos, las construcciones pasivas y las expresiones de relleno: «procederemos a la realización de una evaluación», en lugar de «evaluaremos»; «en el momento actual», en lugar de «ahora»; «a nivel de», en lugar de casi cualquier otra cosa.

Esta prosa hinchada suele nacer de una confusión: la de creer que escribir con complejidad equivale a escribir con rigor. En realidad, ocurre a menudo lo contrario. Cuanto más se alarga una frase sin necesidad, más fácil es esconder en ella una idea pobre o, peor aún, ninguna idea.

Los buenos escritores en español —y no solo los literarios— comparten algunas costumbres. Prefieren el verbo al sustantivo cuando el verbo basta. Colocan la información nueva al final de la frase, donde el lector la espera. Usan los recursos retóricos con moderación: una anáfora en el momento justo puede ser contundente; diez seguidas resultan agotadoras. Y, sobre todo, se releen con desconfianza.

Nada de esto significa renunciar al estilo. Significa ponerlo al servicio de lo que se quiere decir. Al fin y al cabo, la elegancia de un texto no se mide por las palabras que tiene, sino por las que le sobran… y han sido eliminadas.`, q: `¿Qué es la «prosa hinchada»? | Una prosa poética ; *Una prosa llena de abstracciones y expresiones de relleno ; Una prosa muy breve
¿Qué confusión está en su origen? | Creer que escribir corto es mejor ; *Creer que complejidad equivale a rigor ; Creer que los verbos son vulgares
¿Qué hacen los buenos escritores, según el texto? | Usan muchos recursos retóricos ; *Prefieren el verbo, cuidan el orden y se releen ; Escriben frases muy largas` }
    ]
  });

  U({
    id: 'c2-precision', title: 'Precisión gramatical y norma culta', goal: ['Avoid the errors that even native speakers make (dequeísmo, haber, gerundio…)', 'Replace catch-all verbs with precise ones', 'Use reference works (RAE, DPD, FundéU) to settle doubts'],
    grammar: {
      t: 'Educated standard: common native errors',
      h: `<p><b>Dequeísmo / queísmo</b>: test by replacing the clause with <i>eso</i>. <i>Pienso eso</i> → <b>pienso que</b> (not *pienso de que). <i>Me acuerdo de eso</i> → <b>me acuerdo de que</b> (not *me acuerdo que).</p>
<p><b>Impersonal haber</b> is always singular: <i><b>Hubo</b> muchos problemas, <b>había</b> cien personas, <b>habrá</b> cambios</i> (not *hubieron, *habían).</p>
<p><b>Gerund</b>: not for a later action (*Se cayó, rompiéndose la pierna → <i>y se rompió</i>) nor as an adjective (*una caja conteniendo libros → <i>que contiene</i>).</p>
<p><b>Agreement with collectives</b>: <i>La mayoría <b>votó</b></i> (strict) / <i>La mayoría de los vecinos <b>votaron</b></i> (accepted).</p>
<p><b>Por qué / porque / porqué / por que</b>: question, reason, noun (<i>el porqué</i>), preposition + relative (<i>la razón por (la) que</i>). <b>Sino / si no</b>: correction vs condition.</p>
<p><b>Criticised expressions</b>: <i>en base a → con base en / basándose en; a nivel de → en, en cuanto a; en relación a → en relación con / con relación a.</i> <b>Deber + inf.</b> = obligation, <b>deber de + inf.</b> = probability.</p>
<p><b>Precise verbs</b> instead of <i>hacer, poner, decir, tener</i>: <i>elaborar un plan, formular una pregunta, entablar una conversación, cursar estudios, impartir clase, contraer matrimonio, suscitar críticas.</i></p>`
    },
    V: `
el dequeísmo | adding «de» wrongly before «que» | «Pienso de que» es un caso de {dequeísmo}. | «Pienso de que» is a case of dequeísmo.
el queísmo | dropping a needed «de» | «Me acuerdo que» es {queísmo}. | «Me acuerdo que» is queísmo.
la concordancia | agreement | Error de {concordancia}. | Agreement error.
el haber impersonal | impersonal haber | «Hubo problemas», no «hubieron»: {haber impersonal}. | «Hubo problemas», not «hubieron»: impersonal haber.
el gerundio de posterioridad | gerund of subsequent action (error) | «Chocó, muriendo después» es un {gerundio de posterioridad}. | That sentence misuses the gerund for a later action.
el infinitivo radiofónico | «radio infinitive» (error) | «Decir que…» al inicio es un {infinitivo radiofónico}. | Starting with «Decir que…» is a radio infinitive.
la norma | standard usage | Según la {norma} culta, … | According to educated standard usage, …
normativo / normativa | prescriptive, standard | El uso {normativo}. | The standard usage.
la incorrección | incorrect usage | Es una {incorrección} frecuente. | It's a frequent mistake.
la impropiedad | misuse (of a word) | Usar «álgido» por «culminante» no es una {impropiedad}. | Using «álgido» for «culminating» is not a misuse.
el verbo comodín | catch-all verb | «Hacer» es un {verbo comodín}. | «Hacer» is a catch-all verb.
elaborar | to draw up, produce | {Elaboraron} un plan. | They drew up a plan.
formular | to formulate, put | {Formuló} una pregunta. | She put a question.
entablar | to strike up, start | {Entablaron} conversación en el tren. | They struck up a conversation on the train.
cursar | to study (a course) | {Cursó} Derecho en Salamanca. | She studied Law in Salamanca.
impartir | to teach, give (a class) | {Imparte} clases de ética. | He teaches ethics.
contraer | to contract; to marry | {Contrajo} matrimonio en 1990. | He married in 1990.
conciliar el sueño | to get to sleep | No consigo {conciliar el sueño}. | I can't get to sleep.
acometer | to undertake | {Acometieron} la reforma. | They undertook the reform.
suscitar | to arouse, provoke | La medida {suscitó} críticas. | The measure provoked criticism.
conferir | to confer, give | Le {confiere} autoridad. | It gives him authority.
infundir | to instil | Sus palabras {infunden} respeto. | His words instil respect.
esgrimir | to wield (an argument) | {Esgrimió} razones económicas. | He wielded economic arguments.
desempeñar un papel | to play a role | {Desempeña un papel} clave. | It plays a key role.
proferir | to utter | {Profirió} insultos. | He hurled insults.
en base a | based on (criticised) | «{En base a}» se prefiere «con base en». | «Con base en» is preferred to «en base a».
con base en | on the basis of | {Con base en} los datos, … | On the basis of the data, …
a nivel de | at the level of (overused) | Evita «{a nivel de}» si no hay niveles. | Avoid «a nivel de» if there are no levels.
en relación a | in relation to (criticised) | Mejor «en relación con» que «{en relación a}». | «En relación con» is better than «en relación a».
el porqué | the reason | No entiendo el {porqué} de su decisión. | I don't understand the reason for her decision.
por qué | why | ¿{Por qué} lo hiciste? | Why did you do it?
por que | for which | Esa es la razón {por que} vine (= por la que). | That's the reason why I came.
si no | if not | {Si no} vienes, llámame. | If you're not coming, call me.
la tilde diacrítica | diacritic accent | «Él» lleva {tilde diacrítica}. | «Él» has a diacritic accent.
la RAE | Royal Spanish Academy | Lo recoge la {RAE}. | The RAE includes it.
el Diccionario panhispánico de dudas | Pan-Hispanic Dictionary of Doubts | Consulta el {Diccionario panhispánico de dudas}. | Consult the Pan-Hispanic Dictionary of Doubts.
álgido / álgida | culminating, critical | El momento {álgido} del conflicto. | The peak of the conflict.
el pleonasmo | pleonasm | «Subir arriba» es un {pleonasmo}. | «Go up upstairs» is a pleonasm.
la redundancia | redundancy | Evita las {redundancias}. | Avoid redundancies.
la cacofonía | cacophony | Una rima interna crea {cacofonía}. | An internal rhyme creates cacophony.
`,
    D: `
Pienso ___ deberíamos esperar. (¿que / de que?) | que | I think we should wait.
Me acuerdo ___ aquel verano en la playa. (¿que / de que?) | de que | I remember that summer on the beach.
Estoy seguro ___ vendrá. (¿que / de que?) | de que | I'm sure he'll come.
En la reunión ___ muchos problemas. (haber, pretérito) | hubo | There were many problems at the meeting.
En la fiesta ___ más de cien personas. (haber, imperfecto) | había | There were more than a hundred people at the party.
Mañana ___ cambios en el horario. (haber, futuro) | habrá | There will be changes to the timetable tomorrow.
Tuvo un accidente y ___ la pierna. (no «rompiéndose») | se rompió | He had an accident and broke his leg.
Recibimos una caja ___ libros antiguos. (no «conteniendo») | que contenía | We received a box containing old books.
¿___ no viniste ayer? | Por qué | Why didn't you come yesterday?
No vine ___ estaba enfermo. | porque | I didn't come because I was ill.
Nadie entiende el ___ de su dimisión. | porqué | Nobody understands the reason for his resignation.
No es médico, ___ enfermero. | sino | He's not a doctor, but a nurse.
___ estudias, no aprobarás. | Si no | If you don't study, you won't pass.
Con ___ en los datos, el informe concluye que… | base | On the basis of the data, the report concludes that…
Debe ___ ser tarde; no hay nadie. (probabilidad) | de | It must be late; there's nobody around.
Los empleados deben ___ el uniforme. (obligación) | llevar | Employees must wear the uniform.
___ una conversación con su vecino de asiento. | Entabló | He struck up a conversation with the person sitting next to him.
___ Derecho en la Universidad de Salamanca. | Cursó | She studied Law at the University of Salamanca.
La medida ___ muchas críticas. | suscitó | The measure provoked a lot of criticism.
«Subir arriba» es un ___. | pleonasmo | «Go up upstairs» is a pleonasm.
`,
    S: `
Pienso que deberíamos esperar un poco más. | I think we should wait a little longer.
Me acuerdo de que llovía mucho aquel día. | I remember that it was raining hard that day.
Hubo muchos problemas durante la reunión. | There were many problems during the meeting.
No es médico, sino enfermero. | He's not a doctor, but a nurse.
Nadie entiende el porqué de su decisión. | Nobody understands the reason for her decision.
Con base en estos datos, proponemos una reforma. | On the basis of these data, we propose a reform.
Entablaron conversación en el tren y se hicieron amigos. | They struck up a conversation on the train and became friends.
La propuesta suscitó un intenso debate. | The proposal sparked an intense debate.
`,
    R: [
      { t: 'Los errores de los nativos', x: `Los estudiantes extranjeros suelen pensar que los nativos hablan su lengua sin errores. No es así. Hay incorrecciones muy extendidas entre hablantes cultos de español, y conocerlas es parte del dominio pleno del idioma.

La más frecuente quizá sea el uso del verbo «haber» en plural cuando funciona como impersonal: «habían muchas personas», «hubieron problemas». La norma culta exige el singular, porque el sustantivo que acompaña al verbo no es su sujeto, sino su complemento. Otra incorrección muy común es el dequeísmo, es decir, añadir «de» donde no corresponde: «pienso de que», «me dijo de que». Su contrario, el queísmo, elimina una preposición necesaria: «me acuerdo que», «estoy seguro que».

En el ámbito periodístico abundan otros vicios: el gerundio de posterioridad («el coche chocó contra un árbol, muriendo el conductor»), el llamado infinitivo radiofónico («Por último, decir que…») o expresiones como «a nivel de» y «en base a», que los libros de estilo desaconsejan.

Ahora bien, conviene no confundir corrección con pedantería. Muchos usos censurados en el pasado han acabado aceptándose, y la norma evoluciona. Por eso es útil consultar obras como el Diccionario panhispánico de dudas, que explica no solo qué se recomienda, sino por qué.`, q: `¿Por qué la norma exige «había muchas personas» en singular? | Porque «personas» es femenino ; *Porque el sustantivo no es el sujeto, sino el complemento ; Por una regla del siglo XIX
¿Qué es el queísmo? | Añadir «de» donde no corresponde ; *Eliminar una preposición necesaria antes de «que» ; Usar demasiado «que»
¿Qué advierte el autor al final? | Que la norma nunca cambia ; *Que no hay que confundir corrección con pedantería ; Que los diccionarios no sirven` },
      { t: 'Verbos comodín', x: `«Hacer», «poner», «decir», «tener», «dar», «cosa»… Son palabras imprescindibles, pero cuando se abusa de ellas el texto pierde precisión. Los profesores de escritura las llaman «verbos comodín», porque sirven para casi todo y, precisamente por eso, no dicen casi nada.

Compárense estas dos frases: «La empresa hizo un plan y lo puso en marcha, y eso dio muchas críticas» y «La empresa elaboró un plan y lo puso en marcha, lo que suscitó numerosas críticas». La segunda no es más complicada; simplemente es más exacta. «Elaborar» indica un trabajo cuidadoso; «suscitar» expresa que las críticas surgieron como reacción.

Existen colocaciones fijas que conviene aprender: se «formula» una pregunta, se «entabla» una conversación, se «cursan» estudios, se «imparte» una clase, se «contrae» matrimonio o una deuda, se «concilia» el sueño, se «desempeña» un cargo o un papel. Usarlas no es un adorno: es lo que hace un hablante culto de forma natural.

Eso sí, la precisión no debe convertirse en manía. En la conversación cotidiana, «hacer una pregunta» es perfectamente adecuado. El objetivo es disponer de las dos opciones y elegir la que exige cada situación.`, q: `¿Por qué se llaman «verbos comodín»? | Porque son difíciles ; *Porque sirven para casi todo y dicen poco ; Porque son irregulares
¿Qué aporta «suscitar» en la segunda frase? | Más longitud ; *Que las críticas surgieron como reacción ; Un tono coloquial
¿Qué recomienda el autor? | Eliminar siempre «hacer» ; *Disponer de ambas opciones y elegir según la situación ; Usar solo verbos cultos` },
      { t: 'Una consulta a FundéU', x: `Pregunta: En mi empresa estamos redactando un manual de estilo y no nos ponemos de acuerdo. ¿Es correcto decir «en base a los resultados»? Algunos compañeros dicen que es un error y otros que lo usa todo el mundo.

Respuesta: La expresión «en base a» está muy extendida, sobre todo en textos administrativos y periodísticos, pero las obras normativas la desaconsejan. El Diccionario panhispánico de dudas recomienda sustituirla por alternativas como «con base en», «sobre la base de», «basándose en», «según» o «de acuerdo con», dependiendo del contexto. Así, en lugar de «en base a los resultados, se tomó la decisión», es preferible escribir «sobre la base de los resultados, se tomó la decisión» o, sencillamente, «a la vista de los resultados, se decidió…».

Le recomendamos también revisar otras expresiones habituales en los textos empresariales, como «a nivel de», que solo es adecuada cuando se habla de niveles o alturas («a nivel del mar»), o el uso de «en relación a», para el que se prefieren «en relación con» o «con relación a».

En cualquier caso, un manual de estilo no debe ser una lista de prohibiciones, sino una guía para escribir con claridad. Lo importante es que el texto se entienda y que el registro sea coherente.`, q: `¿Qué opinan las obras normativas de «en base a»? | Que es la única forma correcta ; *Que es preferible evitarla ; Que solo es correcta en textos literarios
¿Cuándo es adecuado «a nivel de», según la respuesta? | Siempre ; *Cuando se habla de niveles o alturas ; Nunca
¿Qué debe ser un manual de estilo? | Una lista de prohibiciones ; *Una guía para escribir con claridad ; Un diccionario` }
    ],
    write: 'Take a short text you wrote in an earlier stage (or write a 200-word report) and produce a revised version: remove dequeísmo/queísmo risks, fix any haber or gerund issues, and replace at least six catch-all verbs with precise ones. Add a short note explaining each change.',
    talk: 'Act as a strict but friendly Spanish style editor. Read sentences the learner produces, point out any non-standard usage (dequeísmo, haber, gerund, en base a…), and ask them to reformulate with precise verbs.',
    res: [R.fundeu(), R.bvmc('Diccionario panhispánico de dudas'), R.slcAdv()]
  });

  U({
    id: 'c2-modismos', title: 'Refranes y sabiduría popular', goal: ['Understand and use the most common Spanish proverbs', 'Recognise proverbs when they are shortened or twisted', 'Know when a proverb sounds natural and when it sounds forced'],
    grammar: {
      t: 'How proverbs work in conversation',
      h: `<p><b>Shortening</b>: native speakers often say only the first half and let the listener complete it: <i>Ya sabes, <b>a quien madruga…</b> / Bueno, <b>a falta de pan…</b></i></p>
<p><b>Introducing a proverb</b>: <i>como dice el refrán, como se suele decir, ya lo dice el refrán, que dicen…</i></p>
<p><b>Grammar inside proverbs</b> is often archaic or elliptical: no articles (<i>perro ladrador, poco mordedor</i>), relative <i>quien</i> without antecedent (<i>quien calla otorga</i>), future-like present, imperative to a generic <i>tú</i> (<i>haz bien y no mires a quién</i>).</p>
<p><b>Twisting</b> a proverb for humour or headlines: <i>A quien madruga… le dan las ocho en el atasco.</i> Recognising the original is key to understanding the joke.</p>
<p><b>Register</b>: proverbs sound folksy or wise; overuse sounds old-fashioned or comic. One well-placed proverb is natural; three in a row sounds like a parody.</p>`
    },
    V: `
más vale pájaro en mano que ciento volando | a bird in the hand is worth two in the bush | Acepta la oferta: {más vale pájaro en mano que ciento volando}. | Take the offer: a bird in the hand is worth two in the bush.
a quien madruga, Dios le ayuda | the early bird catches the worm | Me levanto a las seis: {a quien madruga, Dios le ayuda}. | I get up at six: the early bird catches the worm.
no por mucho madrugar amanece más temprano | rushing won't make it happen sooner | Tranquilo, {no por mucho madrugar amanece más temprano}. | Relax, rushing won't make it happen any sooner.
en casa del herrero, cuchillo de palo | the cobbler's children have no shoes | Es fontanero y le gotea el grifo: {en casa del herrero, cuchillo de palo}. | He's a plumber and his tap drips: the cobbler's children have no shoes.
no hay mal que por bien no venga | every cloud has a silver lining | Perdí el tren y conocí a mi mujer: {no hay mal que por bien no venga}. | I missed the train and met my wife: every cloud has a silver lining.
dime con quién andas y te diré quién eres | you are known by the company you keep | Cuidado con esos amigos: {dime con quién andas y te diré quién eres}. | Careful with those friends: you're known by the company you keep.
perro ladrador, poco mordedor | his bark is worse than his bite | No le tengas miedo: {perro ladrador, poco mordedor}. | Don't be afraid of him: his bark is worse than his bite.
camarón que se duerme se lo lleva la corriente | you snooze, you lose | Hay que reservar ya: {camarón que se duerme se lo lleva la corriente}. | We have to book now: you snooze, you lose.
del dicho al hecho hay mucho trecho | easier said than done | Prometió cambiar, pero {del dicho al hecho hay mucho trecho}. | He promised to change, but it's easier said than done.
ojos que no ven, corazón que no siente | what the eye doesn't see, the heart doesn't grieve over | No se lo cuentes: {ojos que no ven, corazón que no siente}. | Don't tell her: what the eye doesn't see…
a caballo regalado no le mires el diente | don't look a gift horse in the mouth | Es viejo, pero {a caballo regalado no le mires el diente}. | It's old, but don't look a gift horse in the mouth.
cría cuervos y te sacarán los ojos | bite the hand that feeds you | Lo ayudó y ahora la critica: {cría cuervos y te sacarán los ojos}. | She helped him and now he criticises her: raise crows and they'll peck your eyes out.
quien mucho abarca poco aprieta | don't bite off more than you can chew | Deja algún proyecto: {quien mucho abarca poco aprieta}. | Drop a project: don't bite off more than you can chew.
en boca cerrada no entran moscas | silence is golden | No digas nada: {en boca cerrada no entran moscas}. | Don't say anything: silence is golden.
agua pasada no mueve molino | let bygones be bygones | Olvídalo: {agua pasada no mueve molino}. | Forget it: let bygones be bygones.
a falta de pan, buenas son tortas | half a loaf is better than none | No hay tren, pero hay autobús: {a falta de pan, buenas son tortas}. | No train, but there's a bus: half a loaf is better than none.
quien calla otorga | silence gives consent | No dijo nada; {quien calla otorga}. | He said nothing; silence gives consent.
cuando el río suena, agua lleva | there's no smoke without fire | Todos hablan de su dimisión: {cuando el río suena, agua lleva}. | Everyone is talking about his resignation: no smoke without fire.
más sabe el diablo por viejo que por diablo | experience counts for more than cleverness | Mi abuela lo adivinó: {más sabe el diablo por viejo que por diablo}. | My grandmother guessed it: experience beats cleverness.
zapatero, a tus zapatos | stick to what you know | Tú eres pintor; {zapatero, a tus zapatos}. | You're a painter; stick to what you know.
el hábito no hace al monje | clothes don't make the man | Va de traje, pero {el hábito no hace al monje}. | He wears a suit, but clothes don't make the man.
de tal palo, tal astilla | like father, like son | Su hija también es actriz: {de tal palo, tal astilla}. | His daughter is an actress too: like father, like daughter.
Dios los cría y ellos se juntan | birds of a feather flock together | Los dos son igual de vagos: {Dios los cría y ellos se juntan}. | They're both equally lazy: birds of a feather.
a lo hecho, pecho | what's done is done; face the consequences | Me equivoqué; {a lo hecho, pecho}. | I made a mistake; I'll face the consequences.
en todas partes cuecen habas | it's the same everywhere | ¿Corrupción allí también? {En todas partes cuecen habas}. | Corruption there too? It's the same everywhere.
no vender la piel del oso antes de cazarlo | don't count your chickens before they hatch | Aún no has firmado: {no vendas la piel del oso antes de cazarlo}. | You haven't signed yet: don't count your chickens.
mal de muchos, consuelo de tontos | misery loves company (but it's no comfort) | Que todos suspendieran no te ayuda: {mal de muchos, consuelo de tontos}. | Everyone failing doesn't help you: it's cold comfort.
el que avisa no es traidor | you've been warned | Si llegas tarde, me voy. {El que avisa no es traidor}. | If you're late, I'm leaving. You've been warned.
quien bien te quiere te hará llorar | you have to be cruel to be kind | Te lo digo por tu bien: {quien bien te quiere te hará llorar}. | I'm telling you for your own good: cruel to be kind.
a buen entendedor, pocas palabras bastan | a word to the wise | No diré más: {a buen entendedor, pocas palabras bastan}. | I'll say no more: a word to the wise.
poderoso caballero es don Dinero | money talks | Consiguió el permiso enseguida: {poderoso caballero es don Dinero}. | He got the permit at once: money talks.
haz bien y no mires a quién | do good without expecting anything back | Ayúdale: {haz bien y no mires a quién}. | Help him: do good without asking who to.
al que no quiere caldo, taza y media | it never rains but it pours | ¿Odias las reuniones? Pues hoy tienes tres: {al que no quiere caldo, taza y media}. | You hate meetings? Today you've got three: it never rains but it pours.
donde las dan, las toman | what goes around comes around | Te criticó y ahora lo critican a él: {donde las dan, las toman}. | He criticised you and now he's criticised: what goes around comes around.
lo que no mata, engorda | what doesn't kill you makes you stronger | Ha caducado ayer, pero {lo que no mata, engorda}. | It expired yesterday, but what doesn't kill you…
ande yo caliente y ríase la gente | comfort over appearances | Llevo calcetines con sandalias: {ande yo caliente y ríase la gente}. | I wear socks with sandals: comfort comes first.
ver la paja en el ojo ajeno | to see the speck in someone else's eye | Siempre {ve la paja en el ojo ajeno} y no la viga en el propio. | He always sees the speck in others' eyes and not the plank in his own.
el refrán | proverb, saying | Como dice el {refrán}, … | As the saying goes, …
el refranero | collection of proverbs | El {refranero} español es inagotable. | The Spanish proverb collection is endless.
como dice el dicho | as the saying goes | {Como dice el dicho}, más vale tarde que nunca. | As the saying goes, better late than never.
`,
    D: `
Más vale pájaro en mano que ciento ___. | volando | A bird in the hand is worth two in the bush.
A quien madruga, Dios le ___. | ayuda | The early bird catches the worm.
En casa del herrero, cuchillo de ___. | palo | The cobbler's children have no shoes.
No hay mal que por bien no ___. | venga | Every cloud has a silver lining.
Dime con quién andas y te diré quién ___. | eres | You are known by the company you keep.
Perro ladrador, poco ___. | mordedor | His bark is worse than his bite.
Camarón que se duerme se lo lleva la ___. | corriente | You snooze, you lose.
Del dicho al hecho hay mucho ___. | trecho | Easier said than done.
Ojos que no ven, corazón que no ___. | siente | What the eye doesn't see, the heart doesn't grieve over.
A caballo regalado no le mires el ___. | diente | Don't look a gift horse in the mouth.
Quien mucho abarca poco ___. | aprieta | Don't bite off more than you can chew.
En boca cerrada no entran ___. | moscas | Silence is golden.
Agua pasada no mueve ___. | molino | Let bygones be bygones.
A falta de pan, buenas son ___. | tortas | Half a loaf is better than none.
Quien calla ___. | otorga | Silence gives consent.
Cuando el río suena, agua ___. | lleva | There's no smoke without fire.
El hábito no hace al ___. | monje | Clothes don't make the man.
De tal palo, tal ___. | astilla | Like father, like son.
A buen entendedor, pocas palabras ___. | bastan | A word to the wise.
Donde las dan, las ___. | toman | What goes around comes around.
`,
    S: `
Como dice el refrán, más vale pájaro en mano que ciento volando. | As the saying goes, a bird in the hand is worth two in the bush.
Ya sabes: a quien madruga… | You know: the early bird…
No hay mal que por bien no venga. | Every cloud has a silver lining.
Del dicho al hecho hay mucho trecho. | It's easier said than done.
Me equivoqué, pero a lo hecho, pecho. | I made a mistake, but what's done is done.
Su hijo también es músico: de tal palo, tal astilla. | His son is a musician too: like father, like son.
No digas nada; en boca cerrada no entran moscas. | Don't say anything; silence is golden.
Cuando el río suena, agua lleva. | There's no smoke without fire.
`,
    R: [
      { t: 'Mi abuela y el refranero', x: `Mi abuela tenía un refrán para cada ocasión. Si alguien se quejaba del madrugón, le recordaba que a quien madruga, Dios le ayuda. Si yo me empeñaba en hacer tres cosas a la vez, me advertía que quien mucho abarca poco aprieta. Y cuando algo salía mal, se encogía de hombros y sentenciaba: «No hay mal que por bien no venga».

De niño, aquellas frases me parecían misteriosas. ¿Qué tenía que ver un herrero con mi padre, que era electricista y nunca arreglaba los enchufes de casa? «En casa del herrero, cuchillo de palo», decía ella, y todos se reían menos él. Con el tiempo entendí que el refranero era una especie de enciclopedia de la experiencia humana, comprimida en frases fáciles de recordar.

Lo curioso es que muchos refranes se contradicen. Si a quien madruga Dios le ayuda, ¿por qué no por mucho madrugar amanece más temprano? Cuando se lo pregunté, mi abuela me miró con sorna: «Porque la vida también se contradice, hijo. Lo difícil es saber qué refrán toca cada día».

Ahora, cuando me sorprendo diciendo «agua pasada no mueve molino» a mis propios hijos, pienso que más sabe el diablo por viejo que por diablo. Y que mi abuela, a su manera, era una filósofa.`, q: `¿Por qué usaba la abuela el refrán del herrero con el padre? | Porque era herrero ; *Porque era electricista y no arreglaba los enchufes de casa ; Porque no sabía cocinar
¿Qué observó el narrador sobre los refranes? | Que son todos modernos ; *Que algunos se contradicen ; Que solo los usan los mayores
¿Cómo explicó la abuela esa contradicción? | Dijo que los refranes estaban mal ; *Dijo que la vida también se contradice ; No supo responder` },
      { t: 'Refranes que viajan', x: `Muchos refranes españoles tienen un equivalente casi exacto en otras lenguas europeas. «Más vale pájaro en mano que ciento volando» corresponde al inglés «a bird in the hand is worth two in the bush», y su versión neerlandesa también habla de un pájaro en la mano. Esto no es casualidad: buena parte del refranero europeo procede de fuentes comunes, como la Biblia, los autores clásicos o las colecciones medievales de sentencias.

Otros refranes, en cambio, son más locales. «En todas partes cuecen habas» refleja una cultura en la que las habas eran un alimento básico. «Camarón que se duerme se lo lleva la corriente» remite a un paisaje costero. Y «zapatero, a tus zapatos» evoca un mundo de oficios artesanos que apenas existe ya.

Traducir refranes es un ejercicio delicado. Una traducción literal suele resultar incomprensible o cómica, mientras que buscar un equivalente funcional puede hacer perder el color local. Los traductores literarios lo resuelven de diversas formas: a veces mantienen la imagen original y la explican, otras veces adaptan el refrán a la cultura de llegada.

Para el estudiante, aprender refranes ofrece una ventaja adicional: son pequeñas lecciones de gramática y de historia. Detrás de cada uno hay una sintaxis antigua y una forma de vida que ayudan a comprender la cultura que los creó.`, q: `¿Por qué muchos refranes europeos se parecen? | Por casualidad ; *Porque proceden de fuentes comunes como la Biblia o los clásicos ; Porque se tradujeron del español
¿Qué refleja «en todas partes cuecen habas»? | Un paisaje costero ; *Una cultura en la que las habas eran alimento básico ; Un oficio artesano
¿Qué problema plantea la traducción literal de refranes? | Es demasiado larga ; *Puede resultar incomprensible o cómica ; Es siempre perfecta` },
      { t: 'Refranes con un giro', x: `Los titulares de prensa y la publicidad recurren a menudo a refranes retorcidos para llamar la atención. Un artículo sobre los atascos matutinos puede titularse «A quien madruga… le espera la M-30», y una campaña contra el despilfarro alimentario puede proclamar «Ojos que no ven, comida que se tira».

Para entender estos juegos, el lector necesita conocer el refrán original. Por eso resultan tan difíciles para los estudiantes extranjeros: el chiste no está en lo que se dice, sino en la distancia entre lo que se dice y lo que se esperaba oír. Un hablante nativo completa mentalmente el refrán en cuanto lee las primeras palabras y disfruta de la sorpresa; quien no lo conoce, simplemente no entiende nada.

Lo mismo ocurre en la conversación. Cuando alguien dice «Bueno, ya sabes, a falta de pan…», no termina la frase porque da por hecho que el interlocutor lo hará. Y si un amigo comenta, con retranca, que «a caballo regalado, se le mira el diente y la dentadura entera», está jugando con el original para expresar desconfianza ante un regalo sospechoso.

Conocer el refranero, por tanto, no es un ejercicio de nostalgia. Es una herramienta imprescindible para comprender el humor, la publicidad y la ironía del español contemporáneo.`, q: `¿Por qué usan la prensa y la publicidad refranes retorcidos? | Para parecer antiguos ; *Para llamar la atención ; Para enseñar español
¿Qué necesita el lector para entender el juego? | Un diccionario ; *Conocer el refrán original ; Saber inglés
¿Por qué la gente no termina a veces los refranes? | Porque los olvida ; *Porque da por hecho que el interlocutor lo completará ; Porque es de mala educación` }
    ],
    write: 'Write a short anecdote (200–250 words) that leads up to a proverb as its moral. Then write two «twisted» proverb headlines about current topics and explain the original behind each.',
    talk: 'Play a Spanish grandparent who answers everything with proverbs, sometimes cutting them short. The learner must complete them, explain what they mean, and say when they would use them.',
    res: [R.bvmc('Refranero multilingüe'), R.juan(), R.slcAdv()]
  });

  U({
    id: 'c2-ironia', title: 'Ironía, humor y eufemismo', goal: ['Detect irony and sarcasm from context, tone and set phrases', 'Understand and use euphemisms appropriately', 'Talk about humour styles: sorna, retranca, humor negro'],
    grammar: {
      t: 'Saying more (or less) than you say',
      h: `<p><b>Ironic exclamations</b> invert the literal meaning: <i>¡Qué casualidad! ¡No te digo! ¡Hombre, claro! ¡Lo que faltaba! ¡Estaría bueno!</i> The tone and the context do the work.</p>
<p><b>Ironic diminutives and superlatives</b>: <i>Un «detallito» de 3.000 euros. Un plan «buenísimo»: salir a las cinco de la mañana.</i></p>
<p><b>Litotes and understatement</b> (very Spanish): <i>No es precisamente barato</i> (= very expensive), <i>No está nada mal</i> (= it's great), <i>No es tonto</i> (= he's clever).</p>
<p><b>Mitigation</b> with conditional, diminutive and impersonal forms: <i>Yo diría que… un poquito… se ha cometido un error</i> (no culprit).</p>
<p><b>Euphemism</b> replaces taboo or harsh words: death, age, body, money, dismissals, war. Political euphemisms (<i>reajuste de precios, daños colaterales</i>) are often criticised as manipulation.</p>
<p><b>Rhetorical «anda que…»</b>: <i>¡Anda que no te lo dije!</i> = I told you so many times (negation with positive meaning).</p>`
    },
    V: `
el sarcasmo | sarcasm | Lo dijo con {sarcasmo}. | He said it sarcastically.
la sorna | slyness, mocking tone | Me miró con {sorna}. | She gave me a mocking look.
la retranca | dry, sly irony (Galician) | Los gallegos tienen mucha {retranca}. | Galicians have a lot of dry irony.
socarrón / socarrona | wry, sly | Un humor {socarrón}. | A wry sense of humour.
mordaz | biting, scathing | Una crítica {mordaz}. | A scathing review.
irónico / irónica | ironic | ¿Lo dices en serio o eres {irónico}? | Do you mean it or are you being ironic?
el doble sentido | double meaning | Una frase con {doble sentido}. | A sentence with a double meaning.
el juego de palabras | pun, wordplay | Un {juego de palabras} genial. | A brilliant pun.
la guasa | joking, banter | Está de {guasa}. | He's joking.
con segundas | with a hidden meaning | Lo dijo {con segundas}. | He said it with a hidden meaning.
el retintín | sarcastic tone | Con cierto {retintín}. | With a certain sarcastic tone.
la indirecta | hint, dig | Me lanzó una {indirecta}. | She made a dig at me.
la pulla | gibe, dig | No pierde ocasión de soltar una {pulla}. | He never misses a chance to make a dig.
la mofa | mockery | Hacía {mofa} de todo. | He made fun of everything.
la burla | mockery | Fue objeto de {burla}. | He was a target of mockery.
la parodia | parody | Una {parodia} del telediario. | A parody of the news.
la sátira | satire | Una {sátira} política. | A political satire.
el humor negro | black humour | Tiene un {humor negro} feroz. | He has a ferocious black humour.
la ocurrencia | witty remark, idea | ¡Qué {ocurrencia}! | What an idea!
el ingenio | wit, ingenuity | Tiene mucho {ingenio}. | She has a lot of wit.
ingenioso / ingeniosa | witty, clever | Una respuesta {ingeniosa}. | A witty answer.
¡hombre, claro! | oh, sure! (often ironic) | —¿Me lo pagas tú? —{¡Hombre, claro!} | —Will you pay for it? —Oh, sure!
¡no te digo! | you don't say! (ironic) | ¿Que llega tarde? {¡No te digo!} | He's late? You don't say!
¡qué casualidad! | what a coincidence! (ironic) | Siempre enfermo los lunes, {¡qué casualidad!} | Always ill on Mondays, what a coincidence!
¡vaya por Dios! | oh dear!, just my luck! | Se ha roto otra vez, {¡vaya por Dios!} | It's broken again, just my luck!
¡lo que faltaba! | that's all we needed! | Y ahora llueve. {¡Lo que faltaba!} | And now it's raining. That's all we needed!
¡estaría bueno! | that'd be the day! | ¿Pagar yo? {¡Estaría bueno!} | Me pay? That'd be the day!
¡anda que…! | honestly, you…! | {¡Anda que} avisas! | Honestly, you could have warned me!
ni que decir tiene | needless to say | {Ni que decir tiene} que llegó tarde. | Needless to say, he arrived late.
el eufemismo | euphemism | Un {eufemismo} para no decir «despido». | A euphemism to avoid saying «dismissal».
la tercera edad | senior citizens | Descuentos para la {tercera edad}. | Discounts for senior citizens.
pasar a mejor vida | to pass away | Su abuelo {pasó a mejor vida}. | His grandfather passed away.
irse al otro barrio | to kick the bucket | Casi {me voy al otro barrio}. | I nearly kicked the bucket.
entrado en carnes / entrada en carnes | plump | Un señor algo {entrado en carnes}. | A rather plump gentleman.
poco agraciado / poco agraciada | not very attractive | Un actor {poco agraciado}. | A rather plain actor.
faltar a la verdad | to be economical with the truth | El ministro {faltó a la verdad}. | The minister was economical with the truth.
los daños colaterales | collateral damage | Lo llamaron {daños colaterales}. | They called it collateral damage.
el reajuste de precios | price adjustment (= rise) | Un {reajuste de precios} del 15 %. | A 15% «price adjustment».
la lítote | litotes, understatement | «No es tonto» es una {lítote}. | «He's not stupid» is litotes.
la atenuación | mitigation, softening | La {atenuación} suaviza lo que decimos. | Mitigation softens what we say.
`,
    D: `
—Ha vuelto a llegar tarde. —¡Qué ___! (irónico) | casualidad | —He's late again. —What a surprise!
El piso no es precisamente ___: cuesta un millón. | barato | The flat isn't exactly cheap: it costs a million.
La película no está nada ___: me encantó. | mal | The film isn't bad at all: I loved it.
¡Anda que no te lo ___ veces! | dije | I told you so many times!
Y ahora se ha roto la caldera. ¡Lo que ___! | faltaba | And now the boiler has broken. That's all we needed!
¿Pagar yo la cena de todos? ¡Estaría ___! | bueno | Me pay for everyone's dinner? That'd be the day!
Lo dijo con ___, como si fuera una broma, pero iba en serio. | segundas|sorna | He said it with a hidden meaning, as if it were a joke, but he meant it.
Los gallegos son famosos por su ___. | retranca | Galicians are famous for their dry irony.
Su abuelo pasó a mejor ___ el año pasado. | vida | His grandfather passed away last year.
Hay descuentos para personas de la tercera ___. | edad | There are discounts for senior citizens.
El ministro faltó a la ___ en el Parlamento. | verdad | The minister was economical with the truth in Parliament.
Lo que la empresa llama «___ de precios» es una subida del 20 %. | reajuste | What the company calls a «price adjustment» is a 20% increase.
Hizo un juego de ___ con el nombre del político. | palabras | He made a pun on the politician's name.
Ni que ___ tiene que no volvió a llamarme. | decir | Needless to say, he never called me again.
Me lanzó una ___ sobre mi puntualidad delante de todos. | indirecta|pulla | She made a dig about my punctuality in front of everyone.
Tiene un humor ___: se ríe hasta de los entierros. | negro | He has a black sense of humour: he even laughs at funerals.
—Te he traído un detallito. —¿Un ___? ¡Es un coche! | detallito | —I've brought you a little something. —A little something? It's a car!
Es un crítico muy ___: sus reseñas destrozan a los autores. | mordaz | He's a very scathing critic: his reviews tear authors apart.
«No es tonto» es un ejemplo de ___: significa que es listo. | lítote | «He's not stupid» is an example of litotes: it means he's clever.
—¿Me prestas cien euros? —¡Hombre, ___! Y mi coche también. | claro | —Will you lend me a hundred euros? —Oh, sure! And my car too.
`,
    S: `
—Hoy también llueve. —¡Qué casualidad! | —It's raining again today. —What a surprise!
No es precisamente barato, ¿eh? | It isn't exactly cheap, is it?
La comida no estaba nada mal. | The food wasn't bad at all.
¡Anda que no te lo advertí veces! | I warned you so many times!
Lo dijo con mucha retranca. | She said it with a lot of dry irony.
Ni que decir tiene que no volvió. | Needless to say, he didn't come back.
Lo que llaman «reajuste» es, en realidad, un despido. | What they call a «readjustment» is actually a dismissal.
El ministro faltó a la verdad. | The minister was economical with the truth.
`,
    R: [
      { t: 'La retranca gallega', x: `Dicen que si uno se encuentra a un gallego en una escalera, nunca sabrá si sube o si baja. El chiste, repetido hasta la saciedad, resume un tópico: el de la ambigüedad gallega. Pero detrás del tópico hay algo más interesante, una forma de humor que en Galicia tiene nombre propio: la retranca.

La retranca no es exactamente ironía ni sarcasmo. Es una manera de decir las cosas con una doble intención, a menudo con cara seria, que obliga al interlocutor a pensar si lo que acaba de oír era un cumplido, una crítica o ambas cosas. Cuando un vecino comenta, mirando el coche nuevo de otro, «Bonito coche… para quien le guste», está desplegando retranca en estado puro.

Los estudiosos relacionan este rasgo con la historia de una sociedad rural, de pequeños propietarios y emigrantes, en la que la prudencia era una virtud. Decir las cosas a medias protegía de conflictos y permitía expresar desacuerdo sin enfrentarse abiertamente.

Para un extranjero, la retranca puede resultar desconcertante. Ni que decir tiene que una respuesta como «Depende» ante cualquier pregunta no ayuda mucho. Pero quien aprende a reconocerla descubre un humor fino, inteligente y profundamente humano, que se ríe sobre todo de uno mismo.`, q: `¿Qué es la retranca según el texto? | Un tipo de sarcasmo agresivo ; *Una forma de decir las cosas con doble intención y cara seria ; Un baile gallego
¿Con qué relacionan los estudiosos este rasgo? | Con el clima lluvioso ; *Con la historia de una sociedad rural en la que la prudencia era una virtud ; Con la influencia portuguesa
¿Qué descubre quien aprende a reconocerla? | Que los gallegos son antipáticos ; *Un humor fino que se ríe de uno mismo ; Que es imposible de entender` },
      { t: 'El diccionario del eufemismo', x: `Hace unos años, un periodista se propuso recopilar los eufemismos que aparecían en los comunicados de empresas y gobiernos. Al cabo de unos meses, tenía material para un libro.

Los despidos se habían convertido en «ajustes de plantilla», «reestructuraciones» o, con especial imaginación, en «procesos de optimización del talento». Las subidas de precios eran «reajustes» o «actualizaciones tarifarias». Una crisis económica podía describirse como «crecimiento negativo» o «desaceleración». Y en los conflictos armados, las víctimas civiles pasaban a ser «daños colaterales».

El eufemismo, explicaba el autor en el prólogo, no es malo en sí mismo. Forma parte de la cortesía cotidiana: decimos que alguien «nos ha dejado» en lugar de que ha muerto, o que una persona está «entrada en carnes» en lugar de llamarla gorda. En estos casos, el eufemismo protege los sentimientos de los demás.

El problema surge cuando se utiliza para ocultar la realidad o eludir responsabilidades. Una cosa es suavizar una noticia dolorosa y otra muy distinta es disfrazar una decisión para que nadie la entienda. Por eso, concluía, el ciudadano debe aprender a traducir este lenguaje: detrás de cada «proceso de optimización» suele haber personas que se quedan sin trabajo.`, q: `¿Qué recopiló el periodista? | Chistes políticos ; *Eufemismos de empresas y gobiernos ; Refranes antiguos
Según el autor, ¿cuándo es aceptable el eufemismo? | Nunca ; *Cuando protege los sentimientos de los demás ; Solo en política
¿Cuándo es un problema el eufemismo? | Cuando es demasiado largo ; *Cuando sirve para ocultar la realidad o eludir responsabilidades ; Cuando se usa en la conversación` },
      { t: 'Cómo detectar la ironía', x: `La ironía consiste en decir lo contrario de lo que se piensa, o al menos algo distinto, confiando en que el oyente entienda la intención. Pero ¿cómo lo entiende? En la conversación oral hay varias pistas: la entonación exagerada, una pausa antes de la palabra clave, una sonrisa o, al contrario, una cara demasiado seria.

En español, además, existen expresiones que suelen funcionar de forma irónica. «¡Qué casualidad!» rara vez expresa sorpresa sincera: más bien indica que algo era previsible. «¡Hombre, claro!» puede significar exactamente «de ninguna manera». Y «¡No te digo!» se usa para comentar algo evidente con fingido asombro.

La lítote es otro recurso muy frecuente. Decir que algo «no es precisamente barato» o que alguien «no es ningún tonto» atenúa en apariencia la afirmación, pero en realidad la refuerza. Del mismo modo, los diminutivos pueden adquirir un valor irónico: un «favorcito» puede ser una petición enorme.

En la escritura, sin voz ni gestos, la ironía depende por completo del contexto, lo que explica tantos malentendidos en los mensajes de texto. Quizá por eso tantos hablantes añaden un emoji para aclarar que estaban bromeando: el equivalente digital de un guiño.`, q: `¿Qué pista oral de la ironía NO menciona el texto? | La entonación exagerada ; La cara demasiado seria ; *El volumen muy bajo
¿Qué significa normalmente «¡Qué casualidad!» en uso irónico? | Sorpresa sincera ; *Que algo era previsible ; Alegría
¿Por qué hay tantos malentendidos en los mensajes escritos? | Porque se escribe rápido ; *Porque la ironía depende solo del contexto, sin voz ni gestos ; Porque hay faltas de ortografía` }
    ],
    write: 'Write a short satirical column (220–260 words) about an everyday annoyance (bureaucracy, airlines, meetings…). Use at least three ironic expressions, one litotes, two euphemisms and one ironic diminutive. Then underline them.',
    talk: 'Talk to the learner with frequent irony and understatement, without warning. They must spot when you are being ironic and reply in kind. Afterwards, review the ironic expressions together.',
    res: [R.rtve('El intermedio / humor'), R.ser('La vida moderna'), R.slcAdv()]
  });

  U({
    id: 'c2-oral', title: 'Conversación nativa', goal: ['Follow fast, overlapping native conversation full of discourse markers', 'Use fillers, tags and hedges naturally', 'Manage turn-taking: interrupt, hold the floor, change topic'],
    grammar: {
      t: 'The grammar of spontaneous speech',
      h: `<p><b>Discourse markers</b> structure speech: opening (<i>bueno, pues, mira, oye</i>), holding the floor (<i>o sea, es que, digamos, ¿cómo lo diría?</i>), concluding (<i>total, nada, en fin, o sea que</i>), checking (<i>¿sabes?, ¿no?, ¿a que sí?, ¿me explico?</i>).</p>
<p><b>Reported speech in conversation</b> uses <i>y va y dice…, y le digo…, y yo en plan…</i> with the present for vividness.</p>
<p><b>Ellipsis and fragments</b>: <i>—¿Y Juan? —En casa. —¿Malo? —Qué va.</i> Full sentences sound stiff.</p>
<p><b>Phonetic reduction</b> in informal Castilian: <i>-ado → -ao (cansao), para → pa', todo → to', nada → na'</i>. Understand it; use it only with friends.</p>
<p><b>Turn-taking</b>: Spanish conversation tolerates overlap; silence feels awkward. Interrupt politely (<i>perdona, pero…; una cosa…</i>), hold the floor (<i>déjame terminar; espera, espera</i>), change topic (<i>a todo esto…; cambiando de tema…</i>).</p>`
    },
    V: `
pues nada | well, that's that | {Pues nada}, nos vemos mañana. | Well, that's that, see you tomorrow.
bueno, pues | right then | {Bueno, pues} empezamos. | Right then, let's start.
vamos a ver | let's see | {Vamos a ver}, ¿qué ha pasado? | Let's see, what's happened?
mira | look | {Mira}, te voy a ser sincero. | Look, I'll be honest with you.
oye | hey, listen | {Oye}, ¿tienes un momento? | Hey, have you got a minute?
fíjate | just imagine | {Fíjate}, ni siquiera me llamó. | Imagine, he didn't even call me.
¿sabes? | you know? | Es que estoy cansada, {¿sabes?} | It's just that I'm tired, you know?
tipo | like, sort of (young speakers) | Había, {tipo}, cien personas. | There were, like, a hundred people.
es que | it's just that | {Es que} no tengo tiempo. | It's just that I don't have time.
¿a que sí? | isn't it? (tag) | Es precioso, {¿a que sí?} | It's beautiful, isn't it?
ya ves | there you go, you see | Me quedé sin trabajo, {ya ves}. | I lost my job, there you go.
hombre / mujer | come on, well (softener) | {Hombre}, tampoco es para tanto. | Come on, it's not that bad.
anda | go on; wow | {¡Anda!}, ¡qué sorpresa! | Wow, what a surprise!
total | so, anyway | {Total}, que me quedé sin entradas. | So anyway, I ended up without tickets.
y eso | and all that | Fuimos al cine {y eso}. | We went to the cinema and all that.
y tal | and so on | Hablamos de trabajo {y tal}. | We talked about work and so on.
o lo que sea | or whatever | Trae vino, cerveza {o lo que sea}. | Bring wine, beer or whatever.
digamos | let's say | Es, {digamos}, peculiar. | He's, let's say, peculiar.
por así decirlo | so to speak | Es, {por así decirlo}, el jefe en la sombra. | He's, so to speak, the boss behind the scenes.
la verdad es que | the truth is | {La verdad es que} no me apetece. | The truth is, I don't feel like it.
¿me explico? | do you see what I mean? | No es eso, {¿me explico?} | That's not it, do you see what I mean?
¡qué dices! | no way! really? | {¡Qué dices!} ¿En serio? | No way! Seriously?
¡no fastidies! | you're kidding! | ¿Te han despedido? {¡No fastidies!} | They fired you? You're kidding!
¡venga ya! | come off it! | {¡Venga ya!} No me lo creo. | Come off it! I don't believe it.
¿y qué? | so what? | Llegué tarde, ¿{y qué}? | I was late, so what?
a todo esto | by the way, meanwhile | {A todo esto}, ¿qué pasó con Luis? | By the way, what happened with Luis?
dicho sea entre nosotros | between you and me | {Dicho sea entre nosotros}, no me fío. | Between you and me, I don't trust him.
como te decía | as I was saying | {Como te decía}, el problema es el dinero. | As I was saying, the problem is money.
¿cómo lo diría? | how shall I put it? | Es, {¿cómo lo diría?}, un poco raro. | He's, how shall I put it, a bit odd.
o sea que | so (conclusion) | {O sea que} no vienes. | So you're not coming.
el turno de palabra | turn to speak | Respeta el {turno de palabra}. | Wait your turn to speak.
pisar a alguien | to talk over someone | No me {pises}, déjame terminar. | Don't talk over me, let me finish.
la muletilla | verbal tic, filler | «O sea» es su {muletilla}. | «O sea» is his verbal tic.
la coletilla | tag (at the end) | Siempre añade la {coletilla} «¿sabes?». | He always adds the tag «you know?».
el marcador conversacional | discourse marker | «Bueno» es un {marcador conversacional}. | «Bueno» is a discourse marker.
el solapamiento | overlap (in speech) | En español hay mucho {solapamiento}. | There's a lot of overlap in Spanish conversation.
el relleno | filler | Palabras de {relleno}. | Filler words.
comerse las letras | to swallow sounds | En el sur {se comen las letras}. | In the south they swallow sounds.
pa' | for, to (colloquial «para») | Voy {pa'} casa. | I'm heading home.
estar a la que salta | to be ready to pounce | Mi jefe {está a la que salta}. | My boss is ready to pounce on any mistake.
`,
    D: `
—¿Vienes al cine? —___ que no puedo, tengo que trabajar. | Es | —Are you coming to the cinema? —It's just that I can't, I have to work.
___, que al final no fuimos a la playa. | Total|Nada | So anyway, in the end we didn't go to the beach.
Es un poco raro, ¿me ___? | explico | It's a bit strange, do you see what I mean?
Es precioso, ¿a que ___? | sí | It's beautiful, isn't it?
O ___ que no vienes, ¿no? | sea | So you're not coming, right?
—Me han despedido. —¡No ___! | fastidies | —I've been fired. —You're kidding!
A todo ___, ¿qué pasó con tu hermano? | esto | By the way, what happened with your brother?
Fuimos al concierto, cenamos ___ eso. | y | We went to the concert, had dinner and all that.
Trae vino, cerveza o lo que ___. | sea | Bring wine, beer or whatever.
Es, por así ___, el jefe en la sombra. | decirlo | He's, so to speak, the boss behind the scenes.
No me ___, déjame terminar la frase. | pises | Don't talk over me, let me finish my sentence.
«O sea» es su ___: lo dice cada dos frases. | muletilla | «O sea» is his verbal tic: he says it every two sentences.
Estoy muy cansao. (forma estándar: ___) | cansado | I'm really tired.
Voy pa' casa. (forma estándar: ___) | para | I'm heading home.
La verdad es ___ no me apetece salir. | que | The truth is I don't feel like going out.
Me quedé sin trabajo, ya ___. | ves | I lost my job, there you go.
Dicho sea ___ nosotros, no me fío de él. | entre | Between you and me, I don't trust him.
___ a ver, ¿qué ha pasado exactamente? | Vamos | Let's see, what exactly has happened?
Como te ___, el problema es el dinero. | decía | As I was saying, the problem is money.
Mi jefe está a la que ___: no se le escapa ni un error. | salta | My boss is ready to pounce: not a single mistake gets past him.
`,
    S: `
Bueno, pues nada, nos vemos mañana. | Well, that's that, see you tomorrow.
Es que no me da tiempo, ¿sabes? | It's just that I haven't got time, you know?
Total, que al final no fuimos. | So anyway, in the end we didn't go.
Vamos a ver, ¿qué ha pasado exactamente? | Let's see, what exactly has happened?
A todo esto, ¿sabes algo de Luis? | By the way, have you heard anything from Luis?
Perdona que te pise, pero eso no es así. | Sorry to cut in, but that's not how it is.
Es, ¿cómo lo diría?, un poco especial. | He's, how shall I put it, a bit special.
O sea que mañana no trabajas, ¿no? | So you're not working tomorrow, right?
`,
    R: [
      { t: 'Una conversación en el bar', x: `Carmen: Oye, ¿te has enterado de lo de Pablo?
Lucía: No, ¿qué ha pasado?
Carmen: Pues nada, que lo han ascendido. Jefe de departamento, fíjate.
Lucía: ¡No fastidies! ¿Pablo? Si hace dos años estaba en prácticas.
Carmen: Ya, ya. Y encima va y le dice a todo el mundo que no se lo esperaba, en plan humilde, ¿sabes?
Lucía: Hombre, a lo mejor es verdad.
Carmen: ¿Verdad? Si llevaba meses comiendo con la directora todos los viernes. Vamos, que se lo ha currado, pero no precisamente en la oficina.
Lucía: Bueno, mujer, tampoco seas así. Es listo, eso hay que reconocerlo.
Carmen: Listo es, no te digo que no. Pero, ¿cómo lo diría?, sabe estar donde hay que estar.
Lucía: Pues como todos, ¿no? A todo esto, ¿tú no habías pedido el mismo puesto?
Carmen: …Eh… Bueno, sí. Pero eso no tiene nada que ver.
Lucía: Ya. O sea que estás un poquito mosqueada.
Carmen: ¿Yo? Para nada. Total, ni siquiera me interesaba tanto.
Lucía: Claro, claro. Venga, pide otra caña, que invito yo.`, q: `¿Qué noticia da Carmen? | Que Pablo se ha ido de la empresa ; *Que han ascendido a Pablo ; Que la directora ha dimitido
¿Qué insinúa Carmen sobre Pablo? | Que no trabaja nada ; *Que ha conseguido el puesto por estar cerca de la directora ; Que es muy humilde
¿Qué descubre Lucía al final? | Que Carmen es amiga de Pablo ; *Que Carmen había pedido el mismo puesto ; Que Carmen va a dimitir` },
      { t: 'Hablar como un nativo no es hablar deprisa', x: `Muchos estudiantes avanzados se sienten frustrados cuando, después de años de estudio, siguen sin poder seguir una conversación entre amigos españoles. Entienden las noticias, leen novelas, pero en la mesa de un bar se pierden a los diez segundos.

La razón no es solo la velocidad. La conversación espontánea tiene una gramática propia: frases que se interrumpen, palabras que se comen («cansao», «pa'»), saltos de tema, risas, solapamientos. Además, está llena de pequeñas palabras —«pues», «bueno», «o sea», «vamos», «es que», «nada»— que no aparecen en los manuales porque, en apariencia, no significan nada. En realidad, cumplen funciones esenciales: abrir un turno, ganar tiempo para pensar, suavizar un desacuerdo o indicar que se va a cerrar el tema.

Los lingüistas llaman a estas palabras marcadores conversacionales. Aprenderlas no consiste en memorizar una lista, sino en escuchar cómo se usan. Un buen método es ver series españolas con subtítulos en español y fijarse en ellas: cuándo aparecen, con qué entonación, qué hace el interlocutor después.

Y un último consejo: no hay que tener miedo a solapar. En España, quedarse callado esperando un hueco perfecto puede interpretarse como falta de interés. Interrumpir con un «ya, ya» o un «¿en serio?» es, muchas veces, la forma más educada de escuchar.`, q: `¿Cuál es la causa principal de la dificultad, según el texto? | La velocidad únicamente ; *La gramática propia de la conversación espontánea ; El vocabulario técnico
¿Qué funciones cumplen los marcadores conversacionales? | Ninguna ; *Abrir turnos, ganar tiempo, suavizar desacuerdos ; Solo adornar el discurso
¿Qué consejo da sobre los solapamientos? | Evitarlos siempre ; *No tenerles miedo, porque pueden mostrar interés ; Pedir permiso antes de hablar` },
      { t: 'Así me lo contó mi vecina', x: `Mi vecina Encarna tiene un don: es capaz de convertir una visita al ambulatorio en una epopeya. Ayer me la encontré en el ascensor y, entre el primer y el quinto piso, me contó esto:

«Pues nada, hija, que voy esta mañana al médico, ¿no?, porque llevaba yo unos días que no veas con la rodilla. Y llego y está la sala llena, pero llena, llena, ¿eh? Y yo digo, bueno, pues me siento y espero. Total, que a la hora y pico sale la enfermera y va y me dice que el médico se ha ido, que le ha surgido una urgencia. ¡Una urgencia! Y yo, en plan, ¿y la mía qué es, una broma? Bueno, pues nada, que me dan cita para el jueves. El jueves, fíjate tú. A todo esto, ¿tu madre qué tal? Porque la vi el otro día muy desmejorada…»

Para cuando llegamos al quinto, yo sabía más de la sanidad pública que muchos ministros. Lo admirable de Encarna no es lo que cuenta, sino cómo lo cuenta: el ritmo, los «y va y me dice», las repeticiones para dar énfasis, el cambio de tema sin aviso. Es, por así decirlo, una narradora oral de primera. Y lo mejor: nunca necesita que le contestes.`, q: `¿Por qué fue Encarna al médico? | Por un dolor de cabeza ; *Por un problema en la rodilla ; Para acompañar a su marido
¿Qué pasó cuando por fin salió la enfermera? | La llamaron para entrar ; *Le dijo que el médico se había ido por una urgencia ; Le dieron una receta
¿Qué admira la narradora de Encarna? | Lo que sabe de medicina ; *Su forma de contar las cosas ; Su paciencia` }
    ],
    write: 'Transcribe (or invent) a two-minute informal conversation between friends (200–250 words) using at least ten discourse markers, one «y va y dice», one ellipsis exchange and one change of topic. Then rewrite three lines in neutral written Spanish.',
    talk: 'Have a fast, informal chat with the learner as a Madrid friend in a bar. Use fillers, tags, interruptions and topic changes naturally; let the learner practise interrupting and holding the floor.',
    res: [R.rtve('series españolas'), R.ser('La vida moderna'), R.ambulante()]
  });
})();
