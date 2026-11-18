/* B1 · Umbral (part 1) */
(function () {
  const R = RES, U = CAMINO.unit('B1');

  U({
    id: 'b1-historias', title: 'Contar historias: indefinido vs imperfecto', goal: ['Narrate a story with background and events', 'Choose between indefinido and imperfecto', 'Use storytelling connectors'],
    grammar: {
      t: 'Indefinido (events) vs imperfecto (background)',
      h: `<p>Think of a film: the <b>imperfecto</b> is the scenery and ongoing situation; the <b>indefinido</b> is what happens — the plot moving forward.</p>
<table><tr><th>Imperfecto</th><th>Indefinido</th></tr><tr><td>description, time, age, weather: <i>Eran las once, llovía</i></td><td>completed actions: <i>Llamé a la policía</i></td></tr>
<tr><td>an action in progress: <i>Mientras cenábamos…</i></td><td>an action that interrupts it: <i>…sonó el teléfono</i></td></tr><tr><td>habits: <i>Siempre iba en bici</i></td><td>a single occasion: <i>Ese día fui en taxi</i></td></tr></table>
<p>Some verbs shift meaning: <b>conocía</b> (I knew) vs <b>conocí</b> (I met); <b>sabía</b> (I knew) vs <b>supe</b> (I found out); <b>quería</b> (I wanted) vs <b>no quise</b> (I refused); <b>tenía que</b> (I was supposed to) vs <b>tuve que</b> (I had to, and did).</p>
<p>Storytelling connectors: <b>un día, de repente, en ese momento, mientras, entonces, al cabo de un rato, al final, total que</b> (so anyway).</p>
<p>Ongoing action interrupted: <b>estaba + gerundio</b>: <i>Estaba durmiendo cuando sonó el teléfono.</i></p>`
    },
    V: `
de repente | suddenly | {De repente} se fue la luz. | Suddenly the power went out.
mientras | while | {Mientras} cocinaba, escuchaba la radio. | While I was cooking, I was listening to the radio.
en ese momento | at that moment | {En ese momento} entró mi jefe. | At that moment my boss came in.
entonces | then, so | {Entonces} decidimos volver. | Then we decided to go back.
al cabo de | after (a time) | {Al cabo de} una hora llegó la policía. | After an hour the police arrived.
al principio | at first | {Al principio} no entendía nada. | At first I didn't understand anything.
al final | in the end | {Al final} todo salió bien. | In the end everything turned out fine.
total, que | so anyway | {Total, que} perdimos el avión. | So anyway, we missed the plane.
resulta que | it turns out that | {Resulta que} era su cumpleaños. | It turns out it was his birthday.
darse cuenta de | to realise | Me {di cuenta de} que no tenía el móvil. | I realised I didn't have my phone.
ocurrir | to happen | ¿Qué {ocurrió}? | What happened?
pasar | to happen | ¿Qué te {pasó}? | What happened to you?
suceder | to happen (formal) | Todo {sucedió} muy rápido. | It all happened very fast.
el ladrón / la ladrona | thief | El {ladrón} huyó en moto. | The thief fled on a motorbike.
robar | to steal, rob | Me {robaron} la cartera. | They stole my wallet.
denunciar | to report (to police) | Fuimos a {denunciar} el robo. | We went to report the theft.
la comisaría | police station | La {comisaría} estaba cerrada. | The police station was closed.
el susto | fright | ¡Qué {susto}! | What a fright!
asustarse | to get scared | Los niños se {asustaron}. | The children got scared.
la anécdota | anecdote | Te cuento una {anécdota} graciosa. | I'll tell you a funny anecdote.
gracioso / graciosa | funny | Fue muy {gracioso}. | It was very funny.
vergonzoso / vergonzosa | embarrassing | Fue una situación muy {vergonzosa}. | It was a very embarrassing situation.
menos mal | thank goodness | {Menos mal} que llevaba paraguas. | Thank goodness I had an umbrella.
caerse | to fall over | Me {caí} en la calle. | I fell over in the street.
romperse | to break | Se {rompió} el vaso. | The glass broke.
olvidarse de | to forget | Me {olvidé de} su cumpleaños. | I forgot her birthday.
enterarse de | to find out about | Me {enteré de} la noticia por la radio. | I found out about the news on the radio.
sonar | to ring | {Sonó} el teléfono. | The phone rang.
gritar | to shout | Alguien {gritó} "¡fuego!". | Someone shouted "fire!".
correr | to run | {Corrimos} hasta la estación. | We ran to the station.
huir | to flee | El ladrón {huyó}. | The thief fled.
el apagón | power cut | Hubo un {apagón} en todo el barrio. | There was a power cut in the whole area.
la vela | candle | Encendimos unas {velas}. | We lit some candles.
la tormenta | storm | Había una {tormenta} terrible. | There was a terrible storm.
el ruido | noise | Oímos un {ruido} raro. | We heard a strange noise.
raro / rara | strange | Pasó algo muy {raro}. | Something very strange happened.
de golpe | all at once | La puerta se cerró {de golpe}. | The door slammed shut.
afortunadamente | fortunately | {Afortunadamente}, nadie se hizo daño. | Fortunately, nobody got hurt.
desgraciadamente | unfortunately | {Desgraciadamente}, era demasiado tarde. | Unfortunately, it was too late.
¿y qué pasó? | and what happened? | ¡No me digas! {¿Y qué pasó?} | You don't say! And what happened?
`,
    D: `
Mientras ___ (ducharse, yo), sonó el timbre. | me duchaba | While I was showering, the doorbell rang.
___ (ser) las tres de la mañana cuando oímos un ruido. | eran | It was three in the morning when we heard a noise.
Ayer ___ (conocer, yo) a tu hermano en la fiesta. | conocí | Yesterday I met your brother at the party.
De niño ___ (ir, yo) al colegio andando. | iba | As a child I walked to school.
Estábamos en la playa y de repente ___ (empezar) a llover. | empezó | We were at the beach and suddenly it started to rain.
No ___ (saber, yo) la verdad hasta ayer, cuando la supe. | sabía | I didn't know the truth until yesterday, when I found out.
Como ___ (estar, yo) cansada, me acosté pronto. | estaba | As I was tired, I went to bed early.
El ladrón ___ (entrar) por la ventana. | entró | The thief came in through the window.
___ (hacer) mucho frío y no había nadie en la calle. | hacía | It was very cold and there was nobody in the street.
Cuando llegué, mis amigos ya ___ (estar) cenando. | estaban | When I arrived, my friends were already having dinner.
Me ___ (dar) cuenta de que no tenía las llaves. | di | I realised I didn't have my keys.
Estaba ___ (dormir) cuando sonó el teléfono. | durmiendo | I was sleeping when the phone rang.
De repente se ___ (ir) la luz. | fue | Suddenly the power went out.
Ella no ___ (querer) venir, así que fui solo. (refused) | quiso | She refused to come, so I went alone.
___ (tener, yo) que ir al hospital esa noche. (had to, did) | tuve | I had to go to the hospital that night.
Mi abuela ___ (tener) ochenta años cuando aprendió a nadar. | tenía | My grandmother was eighty when she learned to swim.
Me ___ (robar, ellos) el móvil en el metro. | robaron | They stole my phone on the metro.
Al ___ de una hora, llegó la ambulancia. | cabo | After an hour, the ambulance arrived.
___ mal que llevaba paraguas. | menos | Thank goodness I had an umbrella.
Total, ___ perdimos el avión. | que | So anyway, we missed the plane.
`,
    S: `
Hacía un día precioso y decidimos ir a la playa. | It was a beautiful day and we decided to go to the beach.
Mientras esperaba el autobús, me robaron la cartera. | While I was waiting for the bus, they stole my wallet.
Cuando llegué, ya no había nadie. | When I arrived, there was no one there any more.
Me di cuenta de que había perdido las llaves. | I realised that I had lost my keys.
¡Qué susto me di! | What a fright I got!
Al final todo salió bien, menos mal. | In the end everything turned out fine, thank goodness.
Estábamos cenando cuando de repente se fue la luz. | We were having dinner when suddenly the power went out.
Resulta que el ladrón era el vecino de arriba. | It turns out the thief was the upstairs neighbour.
`,
    R: [
      { t: 'La noche del apagón', x: `Era una noche de agosto y hacía muchísimo calor en Sevilla. Mis amigos y yo estábamos en una terraza, charlando y tomando algo, cuando de repente se fue la luz en todo el barrio. Al principio nadie sabía qué pasaba. Algunos se asustaron, otros empezaron a reírse. Entonces el camarero sacó unas velas y puso música con su móvil. Al cabo de una hora volvió la luz, pero nadie quería irse. Fue una de las noches más bonitas de aquel verano.`, q: `¿Qué tiempo hacía? | Hacía frío ; *Hacía mucho calor ; Llovía
¿Qué hizo el camarero? | Cerró el bar ; *Sacó velas y puso música ; Llamó a la policía
¿Cuánto tiempo duró el apagón? | Unos minutos ; *Una hora ; Toda la noche` },
      { t: 'El robo en el metro', x: `El lunes por la mañana iba al trabajo en metro, como siempre. El vagón estaba lleno y yo estaba leyendo un libro. En la estación de Sol subió un grupo de chicos que hablaban muy alto. Cuando bajé, me di cuenta de que no tenía la cartera. ¡Qué rabia! Fui a la comisaría a denunciarlo. Dos días después me llamaron: alguien había encontrado mi cartera en una papelera. Faltaba el dinero, pero estaban todos mis documentos.`, q: `¿Qué estaba haciendo en el metro? | Dormía ; *Leía un libro ; Hablaba por teléfono
¿Cuándo se dio cuenta del robo? | En Sol ; *Cuando bajó del metro ; En la oficina
¿Qué faltaba en la cartera? | Los documentos ; *El dinero ; Nada` },
      { t: 'Una cita a ciegas', x: `Mi amiga Paula me organizó una cita a ciegas con un amigo suyo. Quedamos en un restaurante a las nueve. Yo llegué puntual; él llegó media hora tarde porque se había perdido. Era alto, simpático y muy hablador… demasiado hablador: no paró de hablar de su exnovia en toda la noche. Al final, cuando llegó la cuenta, me di cuenta de que se había dejado la cartera en casa. Pagué yo. No hubo segunda cita.`, q: `¿Por qué llegó tarde él? | Por el tráfico ; *Se había perdido ; Se olvidó de la cita
¿De qué habló toda la noche? | De su trabajo ; *De su exnovia ; De fútbol
¿Quién pagó la cena? | Él ; *La narradora ; Paula` }
    ],
    write: 'Tell a real or invented anecdote (something funny, scary or embarrassing) in about 180 words, mixing description (imperfecto) and events (indefinido), with at least four connectors.',
    talk: 'You are a Spanish friend in a bar who loves anecdotes. Tell a short story of your own, then ask the learner to tell you one, reacting naturally (¡no me digas!, ¿y qué pasó?). Gently correct tense choices.',
    res: [R.cb2(19), R.cb2(37), R.lt(62, 63), R.slcFalse(), R.lecturas('nivel intermedio')]
  });

  U({
    id: 'b1-porpara', title: 'Por y para', goal: ['Use por and para correctly in everyday situations', 'Express purpose, cause, exchange, deadlines and routes', 'Use fixed expressions with por'],
    grammar: {
      t: 'por vs para',
      h: `<table><tr><th>para → goal, destination, endpoint</th><th>por → cause, means, route, exchange</th></tr>
<tr><td><b>purpose</b>: Estudio <i>para</i> trabajar en España.</td><td><b>cause</b>: Lo hice <i>por</i> ti. Cerrado <i>por</i> vacaciones.</td></tr>
<tr><td><b>recipient</b>: Este regalo es <i>para</i> ti.</td><td><b>exchange / price</b>: Lo compré <i>por</i> 20 euros. Gracias <i>por</i> todo.</td></tr>
<tr><td><b>destination</b>: Salgo <i>para</i> Madrid.</td><td><b>movement through</b>: Paseamos <i>por</i> el parque.</td></tr>
<tr><td><b>deadline</b>: Lo necesito <i>para</i> el lunes.</td><td><b>approximate time / part of day</b>: <i>por</i> la mañana, <i>por</i> Navidad</td></tr>
<tr><td><b>opinion</b>: <i>Para</i> mí, es demasiado caro.</td><td><b>means</b>: <i>por</i> teléfono, <i>por</i> correo</td></tr>
<tr><td><b>comparison with expectation</b>: <i>Para</i> ser enero, hace calor.</td><td><b>frequency / rate</b>: dos veces <i>por</i> semana, 100 km <i>por</i> hora</td></tr></table>
<p>Fixed expressions with <b>por</b>: por fin, por supuesto, por ejemplo, por cierto, por eso, por favor, por lo menos, por si acaso, por lo visto, por suerte, por desgracia, por casualidad.</p>`
    },
    V: `
por fin | finally | {Por fin} es viernes. | It's Friday at last.
por supuesto | of course | {Por supuesto} que te ayudo. | Of course I'll help you.
por ejemplo | for example | Frutas de verano, {por ejemplo} la sandía. | Summer fruit, for example watermelon.
por cierto | by the way | {Por cierto}, ¿has visto a Luis? | By the way, have you seen Luis?
por eso | that's why | Estaba cansado; {por eso} no vine. | I was tired; that's why I didn't come.
por lo menos | at least | Cuesta {por lo menos} cien euros. | It costs at least a hundred euros.
por si acaso | just in case | Lleva paraguas {por si acaso}. | Take an umbrella just in case.
por lo visto | apparently | {Por lo visto}, va a nevar. | Apparently it's going to snow.
por suerte | luckily | {Por suerte}, no pasó nada. | Luckily, nothing happened.
por desgracia | unfortunately | {Por desgracia}, no hay entradas. | Unfortunately, there are no tickets.
por casualidad | by chance | Nos conocimos {por casualidad}. | We met by chance.
por culpa de | because of (blame) | Llegué tarde {por culpa del} tráfico. | I was late because of the traffic.
gracias a | thanks to | {Gracias a} ti, lo he conseguido. | Thanks to you, I've done it.
para siempre | forever | Te querré {para siempre}. | I'll love you forever.
para nada | not at all | No me molesta {para nada}. | It doesn't bother me at all.
para colmo | to top it all | Y {para colmo}, empezó a llover. | And to top it all, it started to rain.
el regalo | present | Este {regalo} es para ti. | This present is for you.
el plazo | deadline, period | El {plazo} termina el viernes. | The deadline ends on Friday.
entregar | to hand in, deliver | Tengo que {entregar} el trabajo para el lunes. | I have to hand in the work by Monday.
cambiar por | to exchange for | Lo {cambié por} uno más grande. | I exchanged it for a bigger one.
el motivo | reason | ¿Cuál es el {motivo} de su visita? | What is the reason for your visit?
la razón | reason | No sé la {razón}. | I don't know the reason.
a causa de | because of | Cerraron {a causa de} la lluvia. | They closed because of the rain.
con el fin de | in order to | Ahorro {con el fin de} comprar un piso. | I'm saving in order to buy a flat.
el objetivo | aim, goal | Mi {objetivo} es hablar con fluidez. | My goal is to speak fluently.
la meta | goal, finish line | Mi {meta} es el nivel C1. | My goal is level C1.
gratis | free (of charge) | La entrada es {gratis}. | Entry is free.
agradecer | to thank, appreciate | Te {agradezco} la ayuda. | I appreciate your help.
dar las gracias | to say thank you | Quiero {dar las gracias} a todos. | I want to thank everyone.
el favor | favour | ¿Me haces un {favor}? | Will you do me a favour?
votar por | to vote for | ¿Por quién vas a {votar}? | Who are you going to vote for?
luchar por | to fight for | Hay que {luchar por} tus sueños. | You have to fight for your dreams.
preocuparse por | to worry about | No te {preocupes por} mí. | Don't worry about me.
servir para | to be used for | ¿Para qué {sirve} esto? | What is this for?
la semana | week | Voy al gimnasio tres veces {por semana}. | I go to the gym three times a week.
el kilómetro por hora | km per hour | A cien {kilómetros por hora}. | At a hundred km per hour.
mandar por correo | to send by post | Te lo {mando por correo}. | I'll send it to you by post.
de camino | on the way | Está {de camino} a casa. | It's on the way home.
`,
    D: `
Gracias ___ tu ayuda. | por | Thanks for your help.
Este libro es ___ mi madre. | para | This book is for my mother.
Estudio español ___ vivir en Valencia. | para | I study Spanish in order to live in Valencia.
Caminamos ___ el centro histórico. | por | We walked through the historic centre.
Necesito el informe ___ el viernes. | para | I need the report by Friday.
Compré la bici ___ cien euros. | por | I bought the bike for a hundred euros.
El tren ___ Barcelona sale a las seis. | para | The train for Barcelona leaves at six.
Cancelaron el concierto ___ la lluvia. | por | They cancelled the concert because of the rain.
Te llamo ___ teléfono esta tarde. | por | I'll call you by phone this afternoon.
___ mí, el mejor barrio es Gràcia. | para | For me, the best neighbourhood is Gràcia.
___ ser enero, hace mucho calor. | para | For January, it's very hot.
Voy al gimnasio dos veces ___ semana. | por | I go to the gym twice a week.
Nos vemos ___ la tarde. | por | See you in the afternoon.
¿___ qué sirve este botón? | para | What is this button for?
Lo hago ___ mis hijos. (for their sake) | por | I do it for my children.
Llegué tarde por ___ del tráfico. | culpa | I was late because of the traffic.
Lleva paraguas por si ___. | acaso | Take an umbrella just in case.
___ fin he encontrado piso. | por | I've finally found a flat.
Salimos ___ Sevilla mañana. (destination) | para | We're leaving for Seville tomorrow.
Ahorro con el ___ de comprar un piso. | fin | I'm saving in order to buy a flat.
`,
    S: `
Por fin he encontrado piso. | I've finally found a flat.
¿Me lo puedes enviar por correo electrónico? | Can you send it to me by email?
Para mí, el mejor barrio es Gràcia. | For me, the best neighbourhood is Gràcia.
Lleva un paraguas por si acaso. | Take an umbrella just in case.
Lo hago por mis hijos. | I do it for my children's sake.
Tienes que terminarlo para mañana. | You have to finish it by tomorrow.
Para ser extranjero, hablas muy bien. | For a foreigner, you speak very well.
Por lo visto, cierran el bar por vacaciones. | Apparently, they're closing the bar for the holidays.
`,
    R: [
      { t: 'Correo a una amiga', x: `¡Hola, Nuria! Por fin tengo un momento para escribirte. Gracias por el regalo de cumpleaños: el libro es perfecto para mis viajes en tren. Por cierto, la semana que viene salgo para Barcelona por trabajo. Tengo que presentar un proyecto para el jueves, pero el viernes estoy libre. ¿Quedamos para cenar? Podemos pasear por el Born como la última vez. Llámame por teléfono o mándame un mensaje. ¡Un abrazo!`, q: `¿Por qué da las gracias? | Por la cena ; *Por el regalo ; Por el viaje
¿Para cuándo tiene que presentar el proyecto? | *Para el jueves ; Para el viernes ; Para la semana que viene
¿Por dónde quiere pasear? | *Por el Born ; Por Gràcia ; Por la playa` },
      { t: 'Un viaje accidentado', x: `Salimos para Granada el viernes por la tarde. Por culpa de un accidente en la autopista, tardamos dos horas más de lo normal. Para colmo, por la noche no encontrábamos el hotel: el GPS nos mandaba por calles estrechísimas del Albaicín. Por suerte, un señor muy amable nos acompañó hasta la puerta. Al día siguiente, por la mañana, visitamos la Alhambra. Para mí, vale la pena por lo menos una vez en la vida.`, q: `¿Por qué tardaron más? | Por la lluvia ; *Por un accidente en la autopista ; Por el GPS
¿Quién les ayudó a encontrar el hotel? | La policía ; *Un señor muy amable ; El recepcionista
¿Qué opina el narrador de la Alhambra? | Es cara ; *Vale la pena al menos una vez ; Es aburrida` },
      { t: '¿Para qué estudias español?', x: `Le preguntamos a cuatro estudiantes por qué y para qué estudian español. Lars, sueco: "Para trabajar en una empresa en Madrid". Emma, holandesa: "Por mi pareja, que es de Málaga". Hiroshi, japonés: "Por el flamenco. Me encanta y quiero entender las letras". Y Claire, francesa: "Para viajar por Latinoamérica el año que viene. Por eso estudio cuatro horas por semana".`, q: `¿Por qué estudia Emma? | Para trabajar ; *Por su pareja ; Por el flamenco
¿Para qué estudia Lars? | *Para trabajar en Madrid ; Para viajar ; Por su familia
¿Cuántas horas por semana estudia Claire? | Dos ; *Cuatro ; Diez` }
    ],
    write: 'Write an email thanking someone for something and making travel plans, using at least six uses of por and five of para (and three fixed expressions).',
    talk: 'You are a Spanish colleague organising a work trip with the learner. Discuss reasons, deadlines, routes, prices and who things are for, so that por and para come up naturally. Correct mistakes briefly.',
    res: [R.cb2(21), R.cb2(22), R.cb2(23), R.lt(64, 65)]
  });

  U({
    id: 'b1-relaciones', title: 'Relaciones y emociones', goal: ['Talk about friendships, relationships and feelings', 'Use reciprocal verbs (nos queremos) and emotion verbs', 'Express feelings with me pone, me da, estar + adjective'],
    grammar: {
      t: 'Reciprocal se/nos/os; emotion verbs; ponerse + adjective',
      h: `<p><b>Reciprocal actions</b> use the plural reflexive pronouns: <i>Nos conocimos en 2019. Se quieren mucho. ¿Os habláis todos los días?</i> Add <b>el uno al otro</b> for clarity.</p>
<p><b>Relationship verbs</b>: conocerse, enamorarse (de), salir con (to date), llevarse bien/mal (con), pelearse, enfadarse, reconciliarse, casarse (con), separarse, romper (con).</p>
<p><b>Emotions</b>: <i>estar</i> + adjective (estoy contento, nervioso, harto); <i>sentirse</i> + adjective (me siento solo); <b>ponerse</b> + adjective for a sudden change (me pongo nervioso, se puso rojo); <b>dar</b> + noun (me da miedo, me da vergüenza, me da pena, me da igual); <b>poner</b> + adjective (me pone triste la lluvia).</p>
<p><b>tener celos</b> (to be jealous), <b>echar de menos</b> (to miss), <b>hacer ilusión</b> (to be excited/thrilled): <i>Me hace mucha ilusión verte.</i></p>`
    },
    V: `
la amistad | friendship | Nuestra {amistad} es muy fuerte. | Our friendship is very strong.
el mejor amigo / la mejor amiga | best friend | Es mi {mejor amiga} desde el colegio. | She's been my best friend since school.
conocerse | to meet (each other) | Nos {conocimos} en la universidad. | We met at university.
llevarse bien / mal | to get on well / badly | Me {llevo bien} con mis compañeros. | I get on well with my colleagues.
enamorarse (de) | to fall in love (with) | Se {enamoró de} su profesora. | He fell in love with his teacher.
salir con | to go out with, date | {Sale con} un chico de Bilbao. | She's going out with a guy from Bilbao.
la relación | relationship | Tienen una {relación} muy sana. | They have a very healthy relationship.
la pareja | couple; partner | Son una {pareja} muy simpática. | They're a very nice couple.
pelearse | to fight, argue | Mis hermanos se {pelean} mucho. | My siblings fight a lot.
discutir | to argue | {Discutimos} por tonterías. | We argue about silly things.
enfadarse | to get angry | No te {enfades} conmigo. | Don't get angry with me.
reconciliarse | to make up | Al final se {reconciliaron}. | In the end they made up.
romper (con) | to break up (with) | {Rompió con} su novio. | She broke up with her boyfriend.
separarse | to separate | Sus padres se {separaron}. | His parents separated.
confiar en | to trust | {Confío en} ti. | I trust you.
la confianza | trust | La {confianza} es lo más importante. | Trust is the most important thing.
apoyar | to support | Mi familia siempre me {apoya}. | My family always supports me.
quererse | to love each other | Se {quieren} mucho. | They love each other a lot.
echar de menos | to miss | Te {echo de menos}. | I miss you.
tener celos | to be jealous | Mi novio {tiene celos} de mi ex. | My boyfriend is jealous of my ex.
celoso / celosa | jealous | No seas tan {celoso}. | Don't be so jealous.
hacer ilusión | to be excited about | Me {hace} mucha {ilusión} el viaje. | I'm really excited about the trip.
la ilusión | excitement, hope | Empecé con mucha {ilusión}. | I started full of enthusiasm.
el sentimiento | feeling | Es difícil expresar los {sentimientos}. | It's hard to express feelings.
sentirse | to feel | Me {siento} un poco solo. | I feel a bit lonely.
solo / sola | alone, lonely | A veces me siento {sola}. | Sometimes I feel lonely.
harto / harta | fed up | Estoy {harto} de esperar. | I'm fed up with waiting.
orgulloso / orgullosa | proud | Estoy muy {orgullosa} de ti. | I'm very proud of you.
agradecido / agradecida | grateful | Estoy muy {agradecido}. | I'm very grateful.
decepcionado / decepcionada | disappointed | Me siento {decepcionada}. | I feel disappointed.
avergonzado / avergonzada | ashamed, embarrassed | Estaba muy {avergonzado}. | He was very embarrassed.
ponerse nervioso / nerviosa | to get nervous | Me {pongo nervioso} en los exámenes. | I get nervous in exams.
me da miedo | it scares me | {Me da miedo} la oscuridad. | The dark scares me.
me da vergüenza | it embarrasses me | {Me da vergüenza} hablar en público. | Speaking in public embarrasses me.
me da pena | it makes me sad | {Me da pena} que te vayas. | It makes me sad that you're leaving.
me da igual | I don't mind | {Me da igual} dónde comamos. | I don't mind where we eat.
me pone triste | it makes me sad | La lluvia {me pone triste}. | Rain makes me sad.
el abrazo | hug | Dame un {abrazo}. | Give me a hug.
abrazar | to hug | La {abracé} muy fuerte. | I hugged her very tight.
el apoyo | support | Gracias por tu {apoyo}. | Thanks for your support.
cariñoso / cariñosa | affectionate | Mi abuela es muy {cariñosa}. | My grandmother is very affectionate.
`,
    D: `
Nos ___ (conocerse) en la universidad. (indef) | conocimos | We met at university.
Me ___ (llevarse) muy bien con mi hermana. | llevo | I get on very well with my sister.
Se ___ (enamorarse) en un viaje a Italia. (indef) | enamoraron | They fell in love on a trip to Italy.
¿Os ___ (hablar) todos los días? | habláis | Do you talk to each other every day?
Mis padres se ___ (querer) mucho. | quieren | My parents love each other a lot.
___ de menos a mi familia. (echar) | echo | I miss my family.
Me ___ (poner) nervioso cuando hablo en público. | pongo | I get nervous when I speak in public.
Me da ___ hablar en público. (embarrassment) | vergüenza | Speaking in public embarrasses me.
Me ___ igual. (I don't mind) | da | I don't mind.
Me hace mucha ___ verte. | ilusión | I'm really looking forward to seeing you.
Estoy ___ de esperar. (fed up) | harto|harta | I'm fed up with waiting.
Estoy muy orgulloso ___ ti. | de | I'm very proud of you.
Confío ___ ti. | en | I trust you.
Ana sale ___ un chico de Bilbao. | con | Ana is going out with a guy from Bilbao.
Rompió ___ su novio. | con | She broke up with her boyfriend.
Se ___ (enamorarse) de su vecino. (pres) | enamora | She falls in love with her neighbour.
Mis hermanos se ___ (pelear) por todo. | pelean | My siblings fight about everything.
No te ___ (enfadarse) conmigo. (neg. command) | enfades | Don't get angry with me.
Mi novio tiene ___ de mi ex. (jealousy) | celos | My boyfriend is jealous of my ex.
La lluvia me ___ triste. | pone | Rain makes me sad.
`,
    S: `
Nos conocimos en una fiesta hace diez años. | We met at a party ten years ago.
Me llevo genial con mis suegros. | I get on great with my in-laws.
Me hace mucha ilusión tu visita. | I'm really looking forward to your visit.
Te echo mucho de menos. | I miss you a lot.
Me pongo muy nerviosa antes de una entrevista. | I get very nervous before an interview.
Estoy muy orgulloso de lo que has conseguido. | I'm very proud of what you've achieved.
Discutimos, pero luego nos reconciliamos. | We argued, but then we made up.
Me da pena que te vayas tan pronto. | It makes me sad that you're leaving so soon.
`,
    R: [
      { t: 'Cómo nos conocimos', x: `Lucas y yo nos conocimos por casualidad en un tren de Madrid a Lisboa. Yo no tenía asiento y él me dejó el suyo. Empezamos a hablar y no paramos durante siete horas. Al llegar, nos dimos los teléfonos, pero él lo apuntó mal y no pudo llamarme. Un mes después, nos volvimos a encontrar en un concierto en Madrid. Desde entonces no nos hemos separado. Llevamos cinco años juntos y este verano nos casamos.`, q: `¿Dónde se conocieron? | En un concierto ; *En un tren ; En Lisboa
¿Por qué no la llamó? | No quería ; *Apuntó mal el número ; Perdió el móvil
¿Qué van a hacer este verano? | Separarse ; *Casarse ; Viajar a Lisboa` },
      { t: 'Consultorio sentimental', x: `"Mi mejor amiga y yo nos conocemos desde los seis años. Antes nos lo contábamos todo, pero desde que tiene novio casi no me llama. Me da pena y a veces me enfado, pero no quiero perderla. ¿Qué hago?" — Marta, 27.
Respuesta: Querida Marta: es normal sentirse así. Las amistades cambian, pero no tienen que terminar. Habla con ella con sinceridad, sin reproches: dile que la echas de menos. Seguro que ella también valora vuestra amistad.`, q: `¿Desde cuándo se conocen? | Desde la universidad ; *Desde los seis años ; Desde hace un año
¿Qué ha cambiado? | Su amiga se ha mudado ; *Su amiga casi no la llama desde que tiene novio ; Se pelearon
¿Qué le aconsejan? | Olvidarla ; *Hablar con ella con sinceridad ; Buscar otra amiga` },
      { t: 'Emociones de un expatriado', x: `Cuando llegué a Madrid hace dos años me sentía muy solo. No conocía a nadie y me daba vergüenza hablar español porque cometía muchos errores. Me ponía nervioso en el supermercado. Pero poco a poco hice amigos en un grupo de intercambio de idiomas. Ahora me siento en casa. Todavía echo de menos a mi familia y la comida holandesa, pero estoy muy orgulloso de lo que he conseguido.`, q: `¿Cómo se sentía al principio? | Feliz ; *Muy solo ; Orgulloso
¿Dónde hizo amigos? | En el trabajo ; *En un grupo de intercambio de idiomas ; En el supermercado
¿Qué echa de menos todavía? | El tiempo ; *A su familia y la comida holandesa ; Madrid` }
    ],
    write: 'Write about an important relationship in your life (a friend, partner or relative): how you met, how you get on, a disagreement you had, and how you feel about them now.',
    talk: 'You are a warm Spanish friend talking about relationships over coffee. Ask the learner how they met their friends or partner, how they get on, what makes them nervous or excited; use emotion expressions.',
    res: [R.lt(66, 67), R.slcInt(), R.hh('relaciones')]
  });

  U({
    id: 'b1-futuro', title: 'El futuro: planes, promesas y predicciones', goal: ['Talk about the future with the futuro simple', 'Make predictions and promises', 'Use conditional sentences type 1 (si + present)'],
    grammar: {
      t: 'Futuro simple and si + presente',
      h: `<p>Add endings to the <b>whole infinitive</b>: <b>-é, -ás, -á, -emos, -éis, -án</b>: <i>hablaré, comerás, vivirá</i>.</p>
<p>Irregular stems (same endings): <b>tendr-</b> (tener), <b>pondr-</b>, <b>saldr-</b>, <b>vendr-</b>, <b>podr-</b>, <b>sabr-</b>, <b>habr-</b>, <b>querr-</b>, <b>har-</b> (hacer), <b>dir-</b> (decir), <b>cabr-</b>, <b>valdr-</b>.</p>
<p>Use: predictions (<i>Mañana lloverá</i>), promises (<i>Te llamaré</i>), more distant or uncertain future. <i>Ir a + inf.</i> is more common for concrete plans; the present for scheduled events (<i>El tren sale a las 8</i>).</p>
<p><b>First conditional:</b> <b>si + presente</b>, <b>futuro / presente / imperativo</b>: <i>Si tengo tiempo, iré. Si llueve, nos quedamos en casa. Si puedes, llámame.</i> Never use the future after <i>si</i>.</p>
<p>Future of probability (guessing about now): <i>¿Dónde está Ana? — Estará en casa.</i></p>`
    },
    conj: { t: 'fut', v: ['hablar', 'tener', 'hacer', 'decir', 'poder', 'salir', 'venir', 'saber', 'querer', 'poner'] },
    V: `
dentro de | in (time from now) | {Dentro de} cinco años viviré en España. | In five years I'll live in Spain.
algún día | some day | {Algún día} escribiré un libro. | Some day I'll write a book.
el año que viene | next year | {El año que viene} cambiaré de trabajo. | Next year I'll change jobs.
en el futuro | in the future | {En el futuro} los coches volarán. | In the future cars will fly.
seguramente | probably, surely | {Seguramente} lloverá. | It'll probably rain.
probablemente | probably | {Probablemente} llegaré tarde. | I'll probably arrive late.
quizás / tal vez | perhaps | {Quizás} vaya a la fiesta. | Perhaps I'll go to the party.
prometer | to promise | Te {prometo} que te llamaré. | I promise I'll call you.
la promesa | promise | Cumplió su {promesa}. | He kept his promise.
predecir | to predict | Nadie puede {predecir} el futuro. | Nobody can predict the future.
la predicción | prediction | Mis {predicciones} nunca se cumplen. | My predictions never come true.
el objetivo | goal | Mi {objetivo} es aprobar el DELE. | My goal is to pass the DELE.
el sueño | dream | Mi {sueño} es vivir junto al mar. | My dream is to live by the sea.
cumplirse | to come true | Espero que se {cumpla} tu sueño. | I hope your dream comes true.
ahorrar | to save (money) | Este año {ahorraré} más. | This year I'll save more.
jubilarse | to retire | Me {jubilaré} a los sesenta y cinco. | I'll retire at sixty-five.
montar un negocio | to start a business | Quiero {montar un negocio}. | I want to start a business.
aprobar | to pass (exam) | Si estudias, {aprobarás}. | If you study, you'll pass.
suspender | to fail (exam) | Si no estudias, {suspenderás}. | If you don't study, you'll fail.
el cambio climático | climate change | El {cambio climático} es un gran reto. | Climate change is a big challenge.
la inteligencia artificial | artificial intelligence | La {inteligencia artificial} cambiará muchos trabajos. | AI will change many jobs.
el robot | robot | Los {robots} harán las tareas de casa. | Robots will do the housework.
el coche eléctrico | electric car | Todos tendremos {coche eléctrico}. | We'll all have an electric car.
desaparecer | to disappear | Muchas profesiones {desaparecerán}. | Many professions will disappear.
mejorar | to improve | La situación {mejorará}. | The situation will improve.
empeorar | to get worse | El tiempo {empeorará} mañana. | The weather will get worse tomorrow.
aumentar | to increase | Los precios {aumentarán}. | Prices will increase.
disminuir | to decrease | El paro {disminuirá}. | Unemployment will fall.
el reto | challenge | Es un {reto} enorme. | It's a huge challenge.
la vida | life | La {vida} cambiará mucho. | Life will change a lot.
el planeta | planet | Tenemos que cuidar el {planeta}. | We have to look after the planet.
la población | population | La {población} será más mayor. | The population will be older.
te lo prometo | I promise | No se lo diré a nadie, {te lo prometo}. | I won't tell anyone, I promise.
ya veremos | we'll see | ¿Iremos? {Ya veremos}. | Will we go? We'll see.
si | if | {Si} tengo tiempo, te ayudaré. | If I have time, I'll help you.
la bola de cristal | crystal ball | No tengo una {bola de cristal}. | I don't have a crystal ball.
el horóscopo | horoscope | Según mi {horóscopo}, tendré suerte. | According to my horoscope, I'll be lucky.
la suerte | luck | ¡Buena {suerte}! | Good luck!
`,
    D: `
Mañana ___ (llover) en el norte. | lloverá | Tomorrow it will rain in the north.
Te ___ (llamar, yo) cuando llegue. | llamaré | I'll call you when I arrive.
El año que viene ___ (tener, nosotros) más tiempo. | tendremos | Next year we'll have more time.
¿Qué ___ (hacer, tú) después de la universidad? | harás | What will you do after university?
Si ___ (estudiar, tú), aprobarás. | estudias | If you study, you'll pass.
Si hace buen tiempo, ___ (salir, nosotros) a la montaña. | saldremos | If the weather is good, we'll go to the mountains.
No ___ (decir, yo) nada a nadie, te lo prometo. | diré | I won't tell anyone, I promise.
Dentro de diez años, ¿dónde ___ (vivir, vosotros)? | viviréis | In ten years, where will you (all) live?
Mis padres ___ (venir) en Navidad. | vendrán | My parents will come at Christmas.
¿___ (poder, tú) ayudarme mañana? | podrás | Will you be able to help me tomorrow?
Nunca ___ (saber, ellos) la verdad. | sabrán | They'll never know the truth.
___ (haber) más coches eléctricos. | habrá | There will be more electric cars.
¿Dónde está Ana? —___ (estar) en casa. (guess) | estará | Where's Ana? —She's probably at home.
Si me llamas, te lo ___ (explicar, yo). | explicaré | If you call me, I'll explain it to you.
¿Dónde ___ (poner, yo) las maletas? | pondré | Where shall I put the suitcases?
Si no te das prisa, ___ (perder, tú) el tren. | perderás | If you don't hurry, you'll miss the train.
Si tienes dudas, ___ (preguntar, tú) a la profesora. (imperative) | pregunta | If you have questions, ask the teacher.
Algún ___ viviré junto al mar. | día | Some day I'll live by the sea.
Ya ___. (we'll see) | veremos | We'll see.
Los robots ___ (hacer) muchos trabajos. | harán | Robots will do many jobs.
`,
    S: `
Algún día viviré en una casa cerca del mar. | Some day I'll live in a house near the sea.
Si consigo el trabajo, me mudaré a Madrid. | If I get the job, I'll move to Madrid.
Seguramente lloverá este fin de semana. | It will probably rain this weekend.
Te prometo que no volverá a pasar. | I promise it won't happen again.
Dentro de cinco años hablaré español con fluidez. | In five years I'll speak Spanish fluently.
Si tienes dudas, pregúntame. | If you have questions, ask me.
¿Dónde estará Pedro? No contesta. | I wonder where Pedro is. He's not answering.
Habrá que esperar para saberlo. | We'll have to wait to find out.
`,
    R: [
      { t: '¿Cómo será la vida en 2050?', x: `Según muchos expertos, en 2050 la mayoría de la población vivirá en ciudades. Los coches serán eléctricos y muchos no tendrán conductor. Trabajaremos menos horas, pero tendremos que aprender cosas nuevas durante toda la vida. El cambio climático será el gran desafío: en el sur de España hará más calor y habrá menos agua. Si no cambiamos nuestros hábitos ahora, los problemas serán mucho más graves.`, q: `¿Dónde vivirá la mayoría de la gente? | En el campo ; *En ciudades ; En la costa
¿Qué pasará en el sur de España? | *Hará más calor y habrá menos agua ; Lloverá más ; Habrá más coches
¿Qué pasará si no cambiamos nuestros hábitos? | Nada ; *Los problemas serán más graves ; Trabajaremos más` },
      { t: 'Propósitos de Año Nuevo', x: `Como cada enero, Sergio ha escrito su lista de propósitos: "Este año iré al gimnasio tres veces por semana, dejaré de fumar, leeré un libro al mes y aprenderé a cocinar. También ahorraré para un viaje a Japón". Su novia se ríe: "Es la misma lista del año pasado". Sergio responde: "Ya, pero este año lo cumpliré. Si no voy al gimnasio, te pagaré una cena". Ya veremos.`, q: `¿Qué quiere dejar de hacer Sergio? | Comer carne ; *Fumar ; Trabajar
¿Por qué se ríe su novia? | Porque es imposible ; *Porque es la misma lista del año pasado ; Porque no sabe cocinar
¿Qué hará si no va al gimnasio? | Irá a Japón ; *Le pagará una cena ; Dejará de fumar` },
      { t: 'El horóscopo de la semana', x: `ARIES: Esta semana tendrás mucha energía. En el trabajo recibirás una propuesta interesante; si la aceptas, no te arrepentirás. En el amor, alguien de tu pasado volverá a aparecer. TAURO: Será una semana tranquila. Tendrás tiempo para descansar, pero cuidado con los gastos: si compras demasiado, tendrás problemas a final de mes. GÉMINIS: Harás un viaje inesperado y conocerás a gente nueva.`, q: `¿Qué pasará en el amor de Aries? | Se casará ; *Volverá alguien de su pasado ; Conocerá a alguien en un viaje
¿Con qué debe tener cuidado Tauro? | Con la salud ; *Con los gastos ; Con el trabajo
¿Qué hará Géminis? | Descansará ; *Un viaje inesperado ; Cambiará de trabajo` }
    ],
    write: 'Write about your life in ten years (work, home, Spanish), your New Year\'s resolutions, and three predictions for the world. Include at least four "si" sentences.',
    talk: 'You are a fortune teller (vidente) at a fair in Spain, playfully predicting the learner\'s future. Use the futuro and si-clauses; ask them about their plans and dreams.',
    res: [R.cb2(11), R.lt(68, 69), R.slcInt(), R.hh('el futuro')]
  });

  U({
    id: 'b1-condicional', title: 'Consejos y cortesía: el condicional', goal: ['Give advice (yo que tú…, deberías…)', 'Make polite requests', 'Talk about hypothetical wishes (me gustaría…)'],
    grammar: {
      t: 'Condicional simple',
      h: `<p>Same stems as the future + <b>-ía, -ías, -ía, -íamos, -íais, -ían</b>: <i>hablaría, tendría, haría, diría, podría, saldría</i>.</p>
<p><b>Advice</b>: <i>Deberías dormir más. Yo que tú, hablaría con ella. Yo en tu lugar, no lo haría. Podrías probar…</i></p>
<p><b>Politeness</b>: <i>¿Podría ayudarme? ¿Te importaría cerrar la ventana? Querría / Me gustaría reservar una mesa.</i> (In Spain shops also use the imperfect: <i>Quería un billete…</i>)</p>
<p><b>Wishes and hypotheses</b>: <i>Me encantaría vivir en Cádiz. ¿Qué harías con un millón de euros?</i></p>
<p><b>Probability in the past</b>: <i>Serían las diez cuando llegó</i> (it must have been about ten).</p>
<p><b>Future in the past</b> (reported): <i>Dijo que vendría.</i></p>`
    },
    conj: { t: 'cond', v: ['hablar', 'deber', 'poder', 'hacer', 'tener', 'decir', 'gustar', 'salir'] },
    V: `
deberías | you should | {Deberías} descansar más. | You should rest more.
yo que tú | if I were you | {Yo que tú}, aceptaría. | If I were you, I'd accept.
en tu lugar | in your place | Yo {en tu lugar} no diría nada. | In your place I wouldn't say anything.
podrías | you could | {Podrías} pedir ayuda. | You could ask for help.
me gustaría | I would like | {Me gustaría} vivir en Cádiz. | I'd like to live in Cádiz.
me encantaría | I would love | {Me encantaría} ir contigo. | I'd love to go with you.
¿te importaría…? | would you mind…? | {¿Te importaría} bajar la música? | Would you mind turning the music down?
¿podría…? | could you…? (formal) | {¿Podría} repetirlo? | Could you repeat it?
aconsejar | to advise | Te {aconsejo} hablar con él. | I advise you to talk to him.
el consejo | piece of advice | Te doy un {consejo}. | Let me give you some advice.
sugerir | to suggest | Te {sugiero} otra opción. | I suggest another option.
la sugerencia | suggestion | Gracias por la {sugerencia}. | Thanks for the suggestion.
recomendar | to recommend | Te {recomendaría} este hotel. | I'd recommend this hotel.
la cortesía | politeness | Es una cuestión de {cortesía}. | It's a matter of politeness.
amable | kind | Sería muy {amable} de su parte. | It would be very kind of you.
el estrés | stress | Tengo mucho {estrés}. | I'm very stressed.
agobiado / agobiada | overwhelmed | Me siento {agobiada}. | I feel overwhelmed.
relajarse | to relax | Necesitas {relajarte}. | You need to relax.
desconectar | to switch off | En vacaciones no consigo {desconectar}. | On holiday I can't switch off.
dejar el trabajo | to quit one's job | Yo no {dejaría el trabajo}. | I wouldn't quit the job.
tomarse un tiempo | to take some time off | Deberías {tomarte un tiempo}. | You should take some time off.
la lotería | lottery | Si me tocara la {lotería}… | If I won the lottery…
tocar (la lotería) | to win (the lottery) | ¿Qué harías si te {tocara} la lotería? | What would you do if you won the lottery?
hacerse rico | to get rich | No quiero {hacerme rico}. | I don't want to get rich.
donar | to donate | {Donaría} la mitad. | I'd donate half.
dar la vuelta al mundo | to go round the world | {Daría la vuelta al mundo}. | I'd go round the world.
valer la pena | to be worth it | {Valdría la pena} intentarlo. | It would be worth trying.
el problema | problem | Tengo un {problema} con mi vecino. | I have a problem with my neighbour.
la solución | solution | No veo ninguna {solución}. | I don't see any solution.
la opción | option | Es la mejor {opción}. | It's the best option.
el vecino ruidoso | noisy neighbour | Tengo un {vecino ruidoso}. | I have a noisy neighbour.
quejarse | to complain | Deberías {quejarte} al casero. | You should complain to the landlord.
probar | to try | Yo {probaría} otra cosa. | I'd try something else.
intentar | to try, attempt | {Intentaría} hablar con él. | I'd try to talk to him.
evitar | to avoid | Yo {evitaría} el centro en hora punta. | I'd avoid the centre at rush hour.
la duda | doubt | Tengo una {duda}. | I have a question.
el favor | favour | ¿Me harías un {favor}? | Would you do me a favour?
sería | it would be | {Sería} genial verte. | It would be great to see you.
habría | there would be | {Habría} menos problemas. | There would be fewer problems.
`,
    D: `
Yo que tú, ___ (hablar) con tu jefe. | hablaría | If I were you, I'd speak to your boss.
¿___ (poder, usted) repetirlo, por favor? | podría | Could you repeat it, please?
Me ___ (gustar) vivir en el sur. | gustaría | I'd like to live in the south.
___ (deber, tú) descansar más. | deberías | You should rest more.
¿Qué ___ (hacer, tú) con un millón de euros? | harías | What would you do with a million euros?
Nosotros nunca ___ (decir) eso. | diríamos | We would never say that.
¿Te ___ (importar) bajar la música? | importaría | Would you mind turning the music down?
___ (ser) las dos cuando volvió a casa. | serían | It must have been about two when he got home.
Yo ___ (tener) más paciencia. | tendría | I'd have more patience.
Dijo que ___ (venir) a las ocho. | vendría | He said he'd come at eight.
¿___ (poder, tú) ayudarme? | podrías | Could you help me?
Yo en tu ___, no lo haría. | lugar | In your place, I wouldn't do it.
Yo no ___ (salir) con este tiempo. | saldría | I wouldn't go out in this weather.
Mis padres ___ (querer) vivir en la costa. | querrían | My parents would like to live on the coast.
¿Qué ___ (decir, vosotros) en mi situación? | diríais | What would you (all) say in my situation?
___ (valer) la pena intentarlo. | valdría | It would be worth trying.
Me ___ (encantar) ir contigo. | encantaría | I'd love to go with you.
Con más tiempo, ___ (haber) menos problemas. | habría | With more time, there'd be fewer problems.
Yo ___ (poner) la mesa ahí. | pondría | I'd put the table there.
Deberías quejarte ___ casero. | al | You should complain to the landlord.
`,
    S: `
¿Podría decirme dónde está la estación? | Could you tell me where the station is?
Yo que tú, aceptaría la oferta. | If I were you, I'd accept the offer.
Me encantaría ir contigo, pero no puedo. | I'd love to go with you, but I can't.
Deberías tomarte unos días libres. | You should take a few days off.
¿Te importaría ayudarme con la mudanza? | Would you mind helping me with the move?
No sé qué haría sin ti. | I don't know what I'd do without you.
Si me tocara la lotería, daría la vuelta al mundo. | If I won the lottery, I'd travel round the world.
Sería genial vernos el fin de semana. | It would be great to see each other at the weekend.
`,
    R: [
      { t: 'Consultorio: "No puedo más"', x: `Querida Ana: trabajo diez horas al día, no duermo bien y no tengo tiempo para mis amigos. Me siento agobiada. ¿Qué harías tú? — Laura, 34 años.
Querida Laura: yo en tu lugar, hablaría primero con tu jefe: quizás podríais organizar mejor el trabajo. También deberías reservar tiempo para ti cada día, aunque solo sean treinta minutos. Yo apagaría el móvil a las nueve de la noche. Y, si nada cambia, me plantearía buscar otro trabajo: tu salud es lo más importante.`, q: `¿Cuál es el problema de Laura? | No tiene trabajo ; *Trabaja demasiado y está agobiada ; No le gusta su ciudad
¿Qué haría Ana primero? | Dejaría el trabajo ; *Hablaría con el jefe ; Se iría de vacaciones
¿Qué haría a las nueve de la noche? | *Apagaría el móvil ; Cenaría ; Llamaría a una amiga` },
      { t: '¿Qué harías con un millón?', x: `Preguntamos en la calle: ¿qué harías si te tocara un millón de euros? Carmen, 45 años: "Pagaría la hipoteca y ayudaría a mis hijos a comprar un piso". Javi, 23: "Daría la vuelta al mundo durante un año". Rosa, 70: "Lo daría casi todo a una ONG; yo ya no necesito mucho". Y Pedro, 38: "Seguiría trabajando, porque me gusta mi trabajo, pero me compraría una casa en la playa".`, q: `¿Qué haría Carmen? | Viajaría ; *Pagaría la hipoteca y ayudaría a sus hijos ; Lo donaría todo
¿Quién lo daría casi todo a una ONG? | Javi ; *Rosa ; Pedro
¿Qué haría Pedro con su trabajo? | Lo dejaría ; *Seguiría trabajando ; Montaría un negocio` },
      { t: 'Una petición formal', x: `Estimado señor Martínez: le escribo porque me gustaría pedirle un favor. El mes que viene tengo que viajar a Holanda por un asunto familiar. ¿Sería posible trabajar en remoto durante esas dos semanas? Podría conectarme a todas las reuniones y estaría disponible por teléfono. Le agradecería mucho su comprensión. Si prefiere, podríamos hablarlo en persona. Un cordial saludo, Anna de Boer.`, q: `¿Qué pide Anna? | Vacaciones ; *Trabajar en remoto dos semanas ; Un aumento
¿Por qué viaja a Holanda? | Por trabajo ; *Por un asunto familiar ; De vacaciones
¿Qué ofrece hacer? | Trabajar más horas ; *Conectarse a las reuniones y estar disponible ; Volver antes` }
    ],
    write: 'Reply to an advice column letter of your choice (stress, moving abroad, a difficult flatmate) giving six pieces of advice with the conditional. Then write a polite formal request email.',
    talk: 'You are a friend in Madrid who has a problem (a noisy neighbour and a stressful job). Ask the learner for advice; respond to it and ask "¿y tú qué harías?". Encourage the conditional.',
    res: [R.cb2(34), R.lt(70, 71), R.slcInt(), R.notes('Intermediate')]
  });

  U({
    id: 'b1-imperativo', title: 'Instrucciones: el imperativo', goal: ['Give instructions, directions and recipes', 'Use affirmative and negative imperatives for tú, vosotros and usted', 'Attach pronouns to imperatives'],
    grammar: {
      t: 'Imperativo afirmativo y negativo',
      h: `<table><tr><th></th><th>affirmative</th><th>negative</th></tr><tr><td>tú</td><td>habla / come / escribe (= él form)</td><td>no hables / no comas / no escribas</td></tr>
<tr><td>vosotros</td><td>hablad / comed / escribid (inf. -r +d)</td><td>no habléis / no comáis / no escribáis</td></tr><tr><td>usted</td><td>hable / coma / escriba</td><td>no hable / no coma</td></tr><tr><td>ustedes</td><td>hablen / coman</td><td>no hablen / no coman</td></tr></table>
<p>Irregular <b>tú</b>: di (decir), haz (hacer), ve (ir), pon (poner), sal (salir), sé (ser), ten (tener), ven (venir).</p>
<p>The <b>negative</b> and all <b>usted</b> forms are the present subjunctive (built from the yo form: tengo → tenga, no tengas).</p>
<p><b>Pronouns</b> attach to affirmatives (with an accent to keep the stress) and go before negatives: <i>Dímelo / No me lo digas. Siéntate / No te sientes. Levantaos</i> (vosotros reflexive drops the -d).</p>
<p>Softening: <i>Pasa, pasa. Oye, ¿me pasas la sal? Venga, siéntate.</i> Imperatives are not rude in Spanish when the tone is friendly.</p>`
    },
    conj: { t: 'imp', v: ['hablar', 'comer', 'hacer', 'decir', 'ir', 'poner', 'tener', 'venir', 'sentarse'] },
    V: `
añadir | to add | {Añade} una pizca de sal. | Add a pinch of salt.
cortar | to cut | {Corta} la cebolla en trozos. | Cut the onion into pieces.
pelar | to peel | {Pela} las patatas. | Peel the potatoes.
mezclar | to mix | {Mezcla} bien los ingredientes. | Mix the ingredients well.
batir | to beat (eggs) | {Bate} los huevos. | Beat the eggs.
freír | to fry | {Fríe} las patatas a fuego lento. | Fry the potatoes over a low heat.
hervir | to boil | {Hierve} el agua. | Boil the water.
calentar | to heat | {Calienta} el aceite. | Heat the oil.
echar | to pour, put in | {Echa} el arroz. | Put in the rice.
remover | to stir | {Remueve} de vez en cuando. | Stir from time to time.
servir | to serve | {Sirve} la sopa caliente. | Serve the soup hot.
el horno | oven | Mételo en el {horno}. | Put it in the oven.
la sartén | frying pan | Pon la {sartén} al fuego. | Put the pan on the heat.
la olla | pot | Llena la {olla} de agua. | Fill the pot with water.
el fuego lento | low heat | Cocina a {fuego lento}. | Cook over a low heat.
la cucharada | spoonful | Dos {cucharadas} de azúcar. | Two spoonfuls of sugar.
la pizca | pinch | Una {pizca} de sal. | A pinch of salt.
el aceite de oliva | olive oil | Un chorro de {aceite de oliva}. | A splash of olive oil.
la receta | recipe | Te paso la {receta}. | I'll send you the recipe.
el ingrediente | ingredient | ¿Qué {ingredientes} lleva? | What ingredients does it have?
apagar | to switch off | {Apaga} la luz. | Turn off the light.
encender | to switch on | {Enciende} el horno. | Turn on the oven.
rellenar | to fill in | {Rellene} este formulario. | Fill in this form.
firmar | to sign | {Firme} aquí, por favor. | Sign here, please.
pulsar | to press (button) | {Pulse} el botón verde. | Press the green button.
introducir | to insert | {Introduzca} su tarjeta. | Insert your card.
esperar | to wait | {Espere} su turno. | Wait your turn.
tener cuidado | to be careful | {Ten cuidado}, quema. | Careful, it's hot.
no te preocupes | don't worry | {No te preocupes}, no pasa nada. | Don't worry, it's fine.
¡venga! | come on! | ¡{Venga}, vamos! | Come on, let's go!
¡fíjate! | look! / imagine! | ¡{Fíjate} qué casualidad! | Just imagine, what a coincidence!
¡oye! | hey! listen! | ¡{Oye}, ven un momento! | Hey, come here a moment!
¡mira! | look! | ¡{Mira}, allí está! | Look, there he is!
pasa | come in | {Pasa}, estás en tu casa. | Come in, make yourself at home.
sentarse | to sit down | {Siéntate}, por favor. | Sit down, please.
callarse | to be quiet | ¡{Callaos}, que no oigo! | Be quiet, I can't hear!
darse prisa | to hurry | ¡{Date prisa}! | Hurry up!
ponerse | to put on | {Ponte} el abrigo. | Put your coat on.
quitarse | to take off | {Quítate} los zapatos. | Take your shoes off.
acordarse de | to remember | {Acuérdate de} comprar pan. | Remember to buy bread.
olvidarse de | to forget | {No te olvides de} llamarme. | Don't forget to call me.
`,
    D: `
___ (cortar, tú) las patatas en trozos pequeños. | corta | Cut the potatoes into small pieces.
No ___ (añadir, tú) más sal. | añadas | Don't add more salt.
___ (venir, tú) aquí, por favor. | ven | Come here, please.
___ (hacer, tú) los deberes ahora. | haz | Do your homework now.
___ (rellenar, usted) este formulario. | rellene | Fill in this form.
Chicos, ___ (sentarse, vosotros), por favor. | sentaos | Guys, sit down please.
No ___ (preocuparse, tú). | te preocupes | Don't worry.
Si ves a Pedro, ___ (decírselo, tú). | díselo | If you see Pedro, tell him.
___ (ponerse, tú) el abrigo. | ponte | Put your coat on.
No ___ (salir, tú) sin paraguas. | salgas | Don't go out without an umbrella.
___ (ir, tú) a la farmacia, por favor. | ve | Go to the pharmacy, please.
___ (decir, tú) la verdad. | di | Tell the truth.
No me ___ (decir, tú) eso. | digas | Don't tell me that.
___ (tener, tú) cuidado con la sartén. | ten | Be careful with the pan.
Niños, ___ (comer, vosotros) la fruta. | comed | Kids, eat the fruit.
No ___ (hablar, vosotros) tan alto. | habléis | Don't talk so loudly.
___ (pulsar, usted) el botón verde. | pulse | Press the green button.
No ___ (fumar, ustedes) aquí. | fumen | Don't smoke here.
___ (darse, tú) prisa, que llegamos tarde. | date | Hurry up, we're late.
No te ___ (olvidar) de llamarme. | olvides | Don't forget to call me.
`,
    S: `
Pela las patatas y córtalas en rodajas finas. | Peel the potatoes and cut them into thin slices.
No abras la puerta a nadie. | Don't open the door to anyone.
Siga todo recto y gire en la segunda calle. | Go straight on and turn at the second street.
Pasad, pasad, estáis en vuestra casa. | Come in, come in, make yourselves at home.
Dímelo cuando lo sepas. | Tell me when you know.
Ten cuidado con la sartén, quema. | Be careful with the pan, it's hot.
No te olvides de apagar el horno. | Don't forget to turn off the oven.
Introduzca su tarjeta y pulse "aceptar". | Insert your card and press "accept".
`,
    R: [
      { t: 'Receta: tortilla de patatas', x: `Ingredientes: 4 huevos, 3 patatas, 1 cebolla, aceite de oliva y sal.
1. Pela las patatas y la cebolla y córtalas en trozos finos.
2. Calienta mucho aceite en una sartén y fríe las patatas y la cebolla a fuego lento unos veinte minutos.
3. Bate los huevos en un bol grande con una pizca de sal.
4. Escurre bien las patatas y mézclalas con el huevo.
5. Pon un poco de aceite en la sartén, echa la mezcla y cuájala dos o tres minutos.
6. Dale la vuelta con un plato. ¡No tengas miedo! Cocínala un minuto más y sírvela.`, q: `¿Cuánto tiempo se fríen las patatas? | Dos minutos ; *Unos veinte minutos ; Una hora
¿Con qué se le da la vuelta a la tortilla? | Con un tenedor ; *Con un plato ; Con las manos
¿Qué ingrediente NO lleva? | Cebolla ; *Leche ; Huevos` },
      { t: 'Normas de la piscina', x: `NORMAS DE USO: Dúchese antes de entrar en el agua. No corra alrededor de la piscina. No coma ni beba dentro del recinto. Los menores de doce años deben estar acompañados por un adulto. Use gorro de baño. No deje objetos personales sin vigilancia: la piscina no se hace responsable de las pérdidas. En caso de emergencia, avise al socorrista.`, q: `¿Qué hay que hacer antes de entrar en el agua? | Comer ; *Ducharse ; Pagar
¿Quién debe acompañar a los menores de doce años? | Un socorrista ; *Un adulto ; Nadie
¿A quién hay que avisar en caso de emergencia? | A la policía ; *Al socorrista ; A recepción` },
      { t: 'Consejos para un recién llegado', x: `Mi amigo Tom llega a Madrid la semana que viene. Le he escrito una lista: "Sácate la tarjeta de transporte, es mucho más barata. No cenes antes de las nueve: estarás solo en el restaurante. Prueba el bocadillo de calamares, pero no lo pidas en verano a las tres de la tarde: hace demasiado calor. Ve al Retiro un domingo por la mañana. Y sobre todo, no tengas miedo de hablar español: la gente es muy paciente".`, q: `¿Qué debe sacarse Tom? | El pasaporte ; *La tarjeta de transporte ; Una tarjeta de crédito
¿Cuándo no debe cenar? | Después de las diez ; *Antes de las nueve ; A medianoche
¿Qué es lo más importante según el amigo? | Ir al Retiro ; *No tener miedo de hablar español ; Probar los calamares` }
    ],
    write: 'Write a recipe you know well with at least eight imperatives, then write ten pieces of advice for a newcomer to your city (five affirmative, five negative, tú form).',
    talk: 'You are a Spanish grandmother teaching the learner to make a tortilla de patatas by phone. Give instructions with imperatives, then ask them to explain a recipe from their country back to you.',
    res: [R.cb2(35), R.lt(72, 73), R.easy('recetas'), R.slcInt()]
  });

  U({
    id: 'b1-pronombres', title: 'Pronombres: se lo, me la, te los', goal: ['Use indirect and direct object pronouns together', 'Understand le → se', 'Place pronouns correctly with infinitives, gerunds and imperatives'],
    grammar: {
      t: 'Indirect + direct object pronouns',
      h: `<p>Indirect object pronouns (to/for whom): <b>me, te, le, nos, os, les</b>. Direct (what): <b>me, te, lo/la, nos, os, los/las</b>.</p>
<p>Order: <b>indirect before direct</b>: <i>Me lo das. Te la traigo.</i></p>
<p><b>le / les + lo/la/los/las → se lo / se la / se los / se las</b>: <i>Le doy el libro → <b>Se lo</b> doy</i> (not "le lo"). Clarify with <i>a él / a ella / a usted</i>: <i>Se lo doy a ella.</i></p>
<p>Position: before a conjugated verb, or attached to infinitives, gerunds and affirmative imperatives: <i>Te lo voy a dar = Voy a dártelo. Estoy explicándoselo. Dámelo.</i> Add a written accent to keep the stress.</p>
<p>In Spain you'll also hear <b>leísmo</b> with people: <i>A Juan le vi ayer</i> (standard: lo vi). It's accepted by the RAE for masculine singular people.</p>
<p>Doubling is normal with indirect objects: <i><b>Le</b> he dicho la verdad <b>a mi madre</b>.</i></p>`
    },
    V: `
prestar | to lend | ¿Me {prestas} tu coche? | Will you lend me your car?
devolver | to give back | Te lo {devuelvo} mañana. | I'll give it back to you tomorrow.
regalar | to give (as a present) | Se lo {regalé} por su cumpleaños. | I gave it to her for her birthday.
enseñar | to show; to teach | ¿Me {enseñas} las fotos? | Will you show me the photos?
explicar | to explain | Te lo {explico} otra vez. | I'll explain it to you again.
mandar | to send | Se lo {mando} por correo. | I'll send it to him by post.
contar | to tell | ¿Quién te lo ha {contado}? | Who told you?
pedir prestado | to borrow | Le {pedí prestado} el coche a mi padre. | I borrowed the car from my father.
dejar | to lend, let have | ¿Me {dejas} el cargador? | Can I borrow your charger?
pasar | to pass, hand | ¿Me {pasas} la sal? | Can you pass me the salt?
traer | to bring | ¿Me lo {traes}? | Will you bring it to me?
llevar | to take (to someone) | Se las {llevo} esta tarde. | I'll take them to her this afternoon.
recordar | to remind | ¿Me lo puedes {recordar} mañana? | Can you remind me tomorrow?
las llaves | keys | ¿Me dejas las {llaves}? | Can you leave me the keys?
el cargador | charger | No encuentro mi {cargador}. | I can't find my charger.
el paquete | parcel | El {paquete} llegó ayer. | The parcel arrived yesterday.
el repartidor / la repartidora | delivery person | El {repartidor} me lo dio a mí. | The delivery man gave it to me.
el recado | message; errand | Le dejé un {recado}. | I left her a message.
de parte de | on behalf of | Llamo {de parte de} Ana. | I'm calling on behalf of Ana.
ahora mismo | right now | Te lo doy {ahora mismo}. | I'll give it to you right now.
enseguida | straight away | {Enseguida} te lo traigo. | I'll bring it right away.
no hace falta | there's no need | {No hace falta} que me lo devuelvas. | There's no need to give it back.
hacer un favor | to do a favour | ¿Me haces un {favor}? | Will you do me a favour?
el secreto | secret | Te cuento un {secreto}. | I'll tell you a secret.
la noticia | news item | ¿Quién te ha dado la {noticia}? | Who gave you the news?
el mensaje | message | Te mando un {mensaje}. | I'll send you a message.
la contraseña | password | No se la des a nadie. Es tu {contraseña}. | Don't give it to anyone. It's your password.
el documento | document | Firme el {documento}, por favor. | Sign the document, please.
el libro | book | ¿El {libro}? Te lo dejo. | The book? I'll lend it to you.
la factura | bill, invoice | Envíeme la {factura}. | Send me the invoice.
el correo | email; post | Se lo mando por {correo}. | I'll send it to you by email.
la foto | photo | Pásame las {fotos}. | Send me the photos.
olvidar | to forget | Se me {olvidó} dárselo. | I forgot to give it to him.
entregar | to deliver, hand over | Se lo {entregué} en mano. | I handed it to him in person.
vender | to sell | Se lo {vendí} a un amigo. | I sold it to a friend.
comprar | to buy | Se lo {compré} a mi hermana. | I bought it for my sister.
quitar | to take away | Me {quitaron} la cartera. | They took my wallet.
`,
    D: `
—¿Me dejas tu bici? —Sí, te ___ dejo. | la | —Will you lend me your bike? —Yes, I'll lend it to you.
Le doy el regalo a Ana. → ___ lo doy. | se | I give her the present.
—¿Les has enviado las fotos? —Sí, ___ he enviado. | se las | Yes, I've sent them to them.
¿Las llaves? Te ___ traigo ahora mismo. | las | The keys? I'll bring them to you right now.
Voy a explicár___. (to you + it) | telo | I'm going to explain it to you.
Dá___, por favor. (to me + it) | melo | Give it to me, please.
No ___ digas a tu madre. (to her + it) | se lo | Don't tell your mother (it).
¿Nos ___ prestas? (el coche) | lo | Will you lend it to us?
—¿Le has dicho la verdad? —Sí, ___ he dicho. | se la | Yes, I've told it to him.
Estoy explicándo___. (to them + it) | selo | I'm explaining it to them.
—¿Me pasas la sal? —Sí, ahora te ___ paso. | la | Yes, I'll pass it to you now.
¿El paquete? Se ___ di a tu vecino. | lo | The parcel? I gave it to your neighbour.
Mándame las fotos. → Mánda___. | melas | Send them to me.
No me ___ devuelvas. (los libros) | los | Don't give them back to me.
Te ___ prometo. (it) | lo | I promise you (it).
¿Quién te ___ ha contado? (it) | lo | Who told you?
Pásaselo a Juan. → ___ lo paso. | se | I'm passing it to Juan.
—¿Os han dado las entradas? —No, no ___ han dado. | nos las | No, they haven't given them to us.
Recuérda___ mañana. (to me + it) | melo | Remind me tomorrow.
Se ___ olvidó dárselo. (to me) | me | I forgot to give it to him.
`,
    S: `
¿Me puedes prestar el cargador? Te lo devuelvo mañana. | Can you lend me the charger? I'll give it back tomorrow.
Se lo he dicho mil veces. | I've told him a thousand times.
¿Quién te lo ha contado? | Who told you?
Te lo explico otra vez, no te preocupes. | I'll explain it to you again, don't worry.
Dáselo a tu hermana. | Give it to your sister.
No hace falta que me lo devuelvas. | There's no need to give it back to me.
¿Las fotos? Te las mando esta noche. | The photos? I'll send them to you tonight.
Se lo compré a mi madre por su cumpleaños. | I bought it for my mother for her birthday.
`,
    R: [
      { t: 'El paquete', x: `Ayer llegó un paquete para mi vecina, pero ella no estaba en casa, así que el repartidor me lo dio a mí. Por la noche llamé a su puerta para dárselo, pero tampoco estaba. Esta mañana la he visto en el ascensor y se lo he contado. "¡Ay, gracias! ¿Me lo puedes subir luego? Es que ahora llego tarde al trabajo." Claro, se lo subiré esta tarde. Por cierto, todavía no sé qué hay dentro… y no se lo voy a preguntar.`, q: `¿A quién le dio el paquete el repartidor? | A la vecina ; *Al narrador ; A nadie
¿Cuándo se lo va a subir? | Esta mañana ; *Esta tarde ; Mañana
¿Sabe qué hay en el paquete? | Sí ; *No ; Un libro` },
      { t: 'El coche de papá', x: `—Papá, ¿me dejas el coche este fin de semana?
—¿Otra vez? Te lo dejé hace dos semanas y me lo devolviste sin gasolina.
—Ya, lo siento. Esta vez te lo devuelvo con el depósito lleno, te lo prometo.
—¿Y para qué lo necesitas?
—Para llevar a la abuela al pueblo. Me lo pidió ella.
—Bueno, si es para la abuela, te lo dejo. Pero las llaves te las doy el sábado por la mañana.`, q: `¿Qué problema hubo la última vez? | Tuvo un accidente ; *Lo devolvió sin gasolina ; Lo devolvió tarde
¿Para qué lo necesita? | Para ir a la playa ; *Para llevar a la abuela al pueblo ; Para una fiesta
¿Cuándo le dará las llaves? | Ahora ; *El sábado por la mañana ; El domingo` },
      { t: 'La sorpresa', x: `El cumpleaños de Marta es el viernes y sus amigos le están preparando una fiesta sorpresa. Laura ha comprado la tarta y se la va a dar a Pablo el jueves, porque él tiene la llave del local. Los regalos los tiene Ana: se los compraron entre todos. Lo más difícil es el secreto: Marta sospecha algo y no para de hacer preguntas. "Si te lo pregunta, no se lo digas", le ha dicho Laura a Pablo, que es incapaz de guardar un secreto.`, q: `¿A quién le dará Laura la tarta? | A Marta ; *A Pablo ; A Ana
¿Quién tiene los regalos? | Pablo ; *Ana ; Laura
¿Por qué está preocupada Laura? | Marta no vendrá ; *Pablo no sabe guardar secretos ; No hay tarta` }
    ],
    write: 'Write a short note to a flatmate about things you borrowed, gave back or will send to people, replacing every repeated noun with two pronouns (se lo, te la…). At least eight double pronouns.',
    talk: 'You are a flatmate in Madrid organising who borrowed and returned what (keys, charger, books, money). Ask the learner questions they must answer with double pronouns; correct gently.',
    res: [R.lt(74, 75), R.slcInt(), R.juan()]
  });

  U({
    id: 'b1-tramites', title: 'Trámites y dinero: living abroad', goal: ['Deal with Spanish bureaucracy: NIE, empadronamiento, bank, Social Security', 'Talk about money, banking and bills', 'Make formal requests and complaints by phone and email'],
    grammar: {
      t: 'Formal register: usted, querría/quería, se + verb for procedures, hay que / es necesario',
      h: `<p>Official situations use <b>usted / ustedes</b>. Polite requests: <i>Quería pedir cita. ¿Podría decirme qué documentos necesito? Me gustaría abrir una cuenta.</i></p>
<p>Procedures are often described with <b>se + verb</b>: <i>La solicitud <b>se presenta</b> en la oficina de extranjería. Los documentos <b>se envían</b> por correo.</i></p>
<p>Requirements: <b>hay que</b> + inf., <b>es necesario / obligatorio</b> + inf., <b>hace falta</b> + noun/inf.: <i>Hace falta el pasaporte y una foto.</i></p>
<p>Key procedures in Spain: <b>el NIE</b> (foreigner ID number), <b>el empadronamiento</b> (town-hall registration), <b>el número de la Seguridad Social</b>, <b>la tarjeta sanitaria</b>, <b>la cita previa</b> (appointment, almost always online), <b>la declaración de la renta</b> (tax return).</p>`
    },
    V: `
el trámite | (bureaucratic) procedure | Tengo que hacer muchos {trámites}. | I have to do a lot of paperwork.
la cita previa | (official) appointment | Hay que pedir {cita previa} por internet. | You have to book an appointment online.
el NIE | foreigner identity number | Necesito el {NIE} para trabajar. | I need the NIE to work.
el empadronamiento | town-hall registration | El {empadronamiento} es gratuito. | Registration is free.
la Seguridad Social | Social Security | Me di de alta en la {Seguridad Social}. | I registered with Social Security.
la oficina de extranjería | immigration office | Fui a la {oficina de extranjería}. | I went to the immigration office.
el ayuntamiento | town hall | El {ayuntamiento} abre a las nueve. | The town hall opens at nine.
la solicitud | application form | Rellene esta {solicitud}. | Fill in this application.
el formulario | form | El {formulario} está en la web. | The form is on the website.
el requisito | requirement | ¿Cuáles son los {requisitos}? | What are the requirements?
la fotocopia | photocopy | Traiga una {fotocopia} del pasaporte. | Bring a photocopy of your passport.
el certificado | certificate | Necesito un {certificado} de empadronamiento. | I need a registration certificate.
caducar | to expire | Mi pasaporte {caduca} en mayo. | My passport expires in May.
renovar | to renew | Tengo que {renovar} el DNI. | I have to renew my ID.
la cola | queue | Había una {cola} enorme. | There was a huge queue.
el funcionario / la funcionaria | civil servant | El {funcionario} fue muy amable. | The civil servant was very kind.
el banco | bank | Abrí una cuenta en el {banco}. | I opened an account at the bank.
la cuenta corriente | current account | ¿Tiene comisiones la {cuenta corriente}? | Does the current account have fees?
la comisión | (bank) fee | Me cobran una {comisión} cada mes. | They charge me a fee every month.
la transferencia | bank transfer | Le hice una {transferencia}. | I made him a transfer.
el recibo | bill, receipt | Pago los {recibos} por domiciliación. | I pay the bills by direct debit.
domiciliar | to set up a direct debit | Puedes {domiciliar} el alquiler. | You can pay the rent by direct debit.
la tarjeta de crédito | credit card | Perdí la {tarjeta de crédito}. | I lost my credit card.
el cajero automático | cash machine | El {cajero automático} no funciona. | The cash machine isn't working.
sacar dinero | to withdraw money | Tengo que {sacar dinero}. | I have to withdraw money.
ingresar | to deposit (money) | {Ingresé} quinientos euros. | I deposited five hundred euros.
el préstamo | loan | Pedí un {préstamo} para el coche. | I asked for a car loan.
la hipoteca | mortgage | Pagamos una {hipoteca} de 800 euros. | We pay an 800-euro mortgage.
los impuestos | taxes | Los {impuestos} son altos. | Taxes are high.
la declaración de la renta | tax return | Hago la {declaración de la renta} en mayo. | I do my tax return in May.
ahorrar | to save | Intento {ahorrar} cada mes. | I try to save every month.
gastar | to spend | {Gasto} mucho en restaurantes. | I spend a lot on restaurants.
el gasto | expense | Tengo muchos {gastos} este mes. | I have a lot of expenses this month.
deber dinero | to owe money | Me {debes} veinte euros. | You owe me twenty euros.
el presupuesto | budget; quote | ¿Me puede dar un {presupuesto}? | Can you give me a quote?
la factura | invoice, bill | La {factura} de la luz ha subido. | The electricity bill has gone up.
reclamar | to make a claim, complain | Voy a {reclamar} a la compañía. | I'm going to complain to the company.
la reclamación | complaint (formal) | Presenté una {reclamación}. | I filed a complaint.
la hoja de reclamaciones | official complaint form | ¿Me da la {hoja de reclamaciones}? | Can you give me the complaint form?
atención al cliente | customer service | Llamé a {atención al cliente}. | I called customer service.
el plazo | deadline; instalment | El {plazo} termina el día 30. | The deadline ends on the 30th.
`,
    D: `
___ (querer, yo) pedir cita para el NIE. (polite, imperfect) | quería | I'd like to book an appointment for the NIE.
¿___ (poder, usted) decirme qué documentos necesito? | podría | Could you tell me what documents I need?
La solicitud ___ presenta en extranjería. | se | The application is submitted at the immigration office.
Los documentos se ___ (enviar) por correo. | envían | The documents are sent by post.
Hace ___ el pasaporte y una foto. | falta | You need your passport and a photo.
Es ___ pedir cita previa. (necessary) | necesario | It's necessary to book an appointment.
Mi pasaporte ___ (caducar) en mayo. | caduca | My passport expires in May.
Tengo que ___ el DNI. (renew) | renovar | I have to renew my ID.
Quiero ___ una cuenta corriente. (open) | abrir | I want to open a current account.
Me cobran una ___ cada mes. (fee) | comisión | They charge me a fee every month.
Tengo que ___ dinero del cajero. | sacar | I have to withdraw money from the cash machine.
Le ___ (hacer, yo) una transferencia ayer. | hice | I made him a transfer yesterday.
Me ___ (deber, tú) veinte euros. | debes | You owe me twenty euros.
Intento ___ (save) cien euros al mes. | ahorrar | I try to save a hundred euros a month.
___ (gastar, nosotros) demasiado en comida. | gastamos | We spend too much on food.
¿Me da la hoja de ___? | reclamaciones | Can you give me the complaint form?
Llamé a atención ___ cliente. | al | I called customer service.
Me di de ___ en la Seguridad Social. | alta | I registered with Social Security.
El ___ termina el día 30. (deadline) | plazo | The deadline is the 30th.
¿Cuáles son los ___? (requirements) | requisitos | What are the requirements?
`,
    S: `
Quería pedir cita previa para el NIE. | I'd like to book an appointment for the NIE.
¿Qué documentos hacen falta? | What documents are needed?
Traiga el pasaporte original y una fotocopia. | Bring your original passport and a photocopy.
Para empadronarse hay que ir al ayuntamiento con el contrato de alquiler. | To register you have to go to the town hall with your rental contract.
Quiero abrir una cuenta sin comisiones. | I want to open an account with no fees.
Me han cobrado dos veces el mismo recibo. | They've charged me twice for the same bill.
Voy a presentar una reclamación. | I'm going to file a complaint.
Llevo una hora esperando en la cola. | I've been waiting in the queue for an hour.
`,
    R: [
      { t: 'Guía para recién llegados', x: `Si te mudas a España, estos son los primeros trámites. Primero, el NIE: se solicita en la oficina de extranjería o en la policía, con cita previa. Después, el empadronamiento en el ayuntamiento: hace falta el pasaporte y el contrato de alquiler. Con el padrón puedes pedir la tarjeta sanitaria en tu centro de salud. Si vas a trabajar, tu empresa te dará de alta en la Seguridad Social. Consejo: haz siempre fotocopias de todo y ten paciencia.`, q: `¿Dónde se solicita el NIE? | En el banco ; *En extranjería o la policía ; En el centro de salud
¿Qué hace falta para empadronarse? | Una foto ; *El pasaporte y el contrato de alquiler ; El NIE y la tarjeta sanitaria
¿Qué consejo da el texto? | Ir sin cita ; *Hacer fotocopias y tener paciencia ; Contratar un abogado` },
      { t: 'Una llamada al banco', x: `—Banco Ibérico, buenos días. ¿En qué puedo ayudarle?
—Buenos días. Llamo porque este mes me han cobrado una comisión de doce euros y mi cuenta no debería tener comisiones.
—Déjeme ver… Sí, es porque este mes no ha domiciliado ninguna nómina.
—Es que he cambiado de trabajo y la empresa me paga el día cinco.
—Entiendo. En ese caso, le devolvemos la comisión. Lo verá en su cuenta en dos o tres días.
—Muchas gracias.`, q: `¿Por qué llama? | Quiere un préstamo ; *Le han cobrado una comisión ; Ha perdido la tarjeta
¿Por qué le cobraron la comisión? | No pagó un recibo ; *No domicilió ninguna nómina ese mes ; Sacó dinero de otro banco
¿Qué solución le dan? | Ninguna ; *Le devuelven la comisión ; Le cambian de cuenta` },
      { t: 'La factura de la luz', x: `Este invierno nuestra factura de la luz se ha duplicado. Al principio pensábamos que era por la calefacción, pero luego vimos que nos habían cambiado la tarifa sin avisarnos. Llamé a atención al cliente tres veces; cada vez me pasaban con otra persona. Al final escribí una reclamación formal por correo electrónico y adjunté las facturas. Dos semanas después me contestaron: reconocían el error y nos devolvían el dinero.`, q: `¿Por qué subió la factura? | Por la calefacción ; *Les cambiaron la tarifa sin avisar ; Usaron más luz
¿Qué pasaba cuando llamaba? | No contestaban ; *Le pasaban con otra persona ; Le colgaban
¿Cómo se solucionó? | No se solucionó ; *Con una reclamación formal por correo ; Cambiando de compañía` }
    ],
    write: 'Write a formal email to a company (bank, electricity, internet) complaining about a wrong charge: explain the problem, what you have already done and what you want them to do.',
    talk: 'You are a slightly bored civil servant at a Spanish town hall (ayuntamiento). The learner wants to register (empadronarse). Ask for documents, find a missing paper and explain the next steps. Use usted.',
    res: [R.lt(76, 77), R.slcInt(), R.hh('trámites'), R.practica()]
  });
})();
