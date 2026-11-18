/* C1 · Dominio (part 1): the six original C1 stages at full depth */
(function () {
  const L = window.CAMINO_LEGACY || {}, U = CAMINO.unit('C1');
  const S = (id, o) => U(Object.assign({}, L[id] || {}, { id }, o));

  S('c1-01', {
    title: 'Matices del subjuntivo',
    V: `
por mucho que | however much | {Por mucho que} insistas, no iré. | However much you insist, I won't go.
por más que | no matter how much | {Por más que} lo intento, no me sale. | No matter how hard I try, I can't do it.
a no ser que | unless | Iremos, {a no ser que} llueva. | We'll go, unless it rains.
a menos que | unless | No lo sabrá {a menos que} se lo digas. | He won't know unless you tell him.
siempre y cuando | provided that | Te lo dejo {siempre y cuando} me lo devuelvas. | I'll lend it to you provided you return it.
con tal de que | as long as | Haré lo que sea {con tal de que} estés bien. | I'll do anything as long as you're OK.
en caso de que | in case | {En caso de que} llame, dile que no estoy. | In case he calls, tell him I'm not in.
pase lo que pase | whatever happens | {Pase lo que pase}, te apoyaré. | Whatever happens, I'll support you.
sea como sea | one way or another | {Sea como sea}, hay que terminarlo hoy. | One way or another, it has to be finished today.
cueste lo que cueste | whatever it takes | Lo conseguiré, {cueste lo que cueste}. | I'll get it, whatever it takes.
digan lo que digan | whatever they say | {Digan lo que digan}, yo me caso. | Whatever they say, I'm getting married.
quieras o no | like it or not | {Quieras o no}, mañana vamos al dentista. | Like it or not, we're going to the dentist tomorrow.
el hecho de que | the fact that | {El hecho de que} sea gratis no significa que sea bueno. | The fact that it's free doesn't mean it's good.
si bien | although (formal) | {Si bien} es caro, merece la pena. | Although it's expensive, it's worth it.
aun cuando | even if | No lo haría {aun cuando} me pagaran. | I wouldn't do it even if they paid me.
a sabiendas de que | knowing full well that | Lo hizo {a sabiendas de que} estaba prohibido. | He did it knowing full well it was forbidden.
ni que | as if (ironic) | ¡{Ni que} fuera el rey! | Who does he think he is, the king?
no es que | it's not that | {No es que} no quiera, es que no puedo. | It's not that I don't want to, it's that I can't.
lo de que | the business about | No me creo {lo de que} se vaya a Japón. | I don't believe that business about him moving to Japan.
dicho sea de paso | incidentally | {Dicho sea de paso}, la cena estaba fría. | Incidentally, the dinner was cold.
empeñarse en | to insist on | Se {empeñó en} pagar la cuenta. | He insisted on paying the bill.
la tozudez | stubbornness | Su {tozudez} me saca de quicio. | His stubbornness drives me mad.
así (+ subj.) | even if (literary) | No lo haré, {así} me lo pidan de rodillas. | I won't do it, even if they beg me on their knees.
lamentar que | to regret that | {Lamento que} no hayas podido venir. | I'm sorry you couldn't come.
extrañar que | to surprise that | Me {extraña que} no haya llamado. | I'm surprised he hasn't called.
dar igual que | not to matter that | Me {da igual que} llueva. | I don't care if it rains.
negar que | to deny that | {Negó que} hubiera firmado nada. | He denied having signed anything.
dudar que | to doubt that | {Dudo que} llegue a tiempo. | I doubt he'll arrive on time.
ser lógico que | to be logical that | {Es lógico que} estés cansado. | It's only natural that you're tired.
de no ser por | if it weren't for | {De no ser por} ti, me habría perdido. | If it weren't for you, I'd have got lost.
no vaya a ser que | just in case, lest | Coge el paraguas, {no vaya a ser que} llueva. | Take the umbrella, just in case it rains.
que yo sepa | as far as I know | {Que yo sepa}, no ha llegado nadie. | As far as I know, nobody has arrived.
que yo recuerde | as far as I remember | {Que yo recuerde}, nunca ha estado aquí. | As far as I remember, he's never been here.
y punto | and that's that | Lo haremos así, {y punto}. | We'll do it this way, and that's that.
la condición | condition | Acepto, con una {condición}. | I accept, on one condition.
por poco que | however little | {Por poco que} estudies, aprobarás. | However little you study, you'll pass.
aun a riesgo de | even at the risk of | Lo diré, {aun a riesgo de} equivocarme. | I'll say it, even at the risk of being wrong.
salvo que | unless | Salimos a las ocho, {salvo que} digas lo contrario. | We'll leave at eight, unless you say otherwise.
mientras (+ subj.) | as long as | {Mientras} no me molestes, puedes quedarte. | As long as you don't bother me, you can stay.
como (+ subj.) | if (warning) | {Como} vuelvas a llegar tarde, te quedas fuera. | If you're late again, you stay outside.
`,
    D: `
Por mucho que ___ (insistir, tú), no voy a cambiar de opinión. | insistas | However much you insist, I won't change my mind.
Saldremos a las ocho, a no ser que ___ (llover). | llueva | We'll leave at eight, unless it rains.
Te ayudo con tal de que me ___ (invitar, tú) a cenar. | invites | I'll help you as long as you invite me to dinner.
Pase lo que ___ (pasar), no te rindas. | pase | Whatever happens, don't give up.
Habla como si lo ___ (saber) todo. | supiera|supiese | He talks as if he knew everything.
No es que no ___ (querer, yo), es que no puedo. | quiera | It's not that I don't want to, it's that I can't.
Me extraña que no te ___ (llamar, él) todavía. | haya llamado | I'm surprised he hasn't called you yet.
El hecho de que ___ (ser) famoso no le da derecho a todo. | sea | Being famous doesn't give him the right to everything.
Lamento que no ___ (poder, tú) venir ayer. | hayas podido|pudieras | I'm sorry you couldn't come yesterday.
Si bien ___ (ser) cierto, no es toda la verdad. | es | Although it's true, it's not the whole truth.
Lleva el abrigo, no vaya a ser que ___ (hacer) frío. | haga | Take your coat, in case it's cold.
Que yo ___ (saber), la reunión es mañana. | sepa | As far as I know, the meeting is tomorrow.
¡Ni que ___ (ser) millonario! | fuera|fuese | As if he were a millionaire!
Digan lo que ___ (decir), es un buen proyecto. | digan | Whatever they say, it's a good project.
Negó que ___ (estar) allí aquella noche. | hubiera estado|estuviera | He denied being there that night.
Como ___ (volver, tú) a mentirme, se acabó. | vuelvas | If you lie to me again, it's over.
Mientras ___ (haber) salud, lo demás no importa. | haya | As long as there's health, nothing else matters.
En caso de que ___ (perder, tú) el tren, llámame. | pierdas | In case you miss the train, call me.
Aun cuando me lo ___ (pedir) de rodillas, no aceptaría. | pidiera|pidiese | Even if he begged me on his knees, I wouldn't accept.
Dudo que ___ (terminar, ellos) antes del viernes. | terminen | I doubt they'll finish before Friday.
`,
    S: `
Por mucho que insistas, no voy a cambiar de opinión. | However much you insist, I won't change my mind.
Pase lo que pase, puedes contar conmigo. | Whatever happens, you can count on me.
No es que no me guste, es que no tengo tiempo. | It's not that I don't like it, it's that I don't have time.
El hecho de que sea gratis no significa que sea bueno. | The fact that it's free doesn't mean it's good.
Te lo presto siempre y cuando me lo devuelvas el lunes. | I'll lend it to you as long as you give it back on Monday.
Habla como si fuera el dueño de la empresa. | He talks as if he owned the company.
Que yo sepa, nadie se ha quejado. | As far as I know, nobody has complained.
Coge un jersey, no vaya a ser que refresque por la noche. | Take a jumper, in case it gets cool at night.
`,
    R: [
      { t: 'La terquedad de mi abuelo', x: `Mi abuelo Julián era el hombre más terco que he conocido. Por mucho que el médico le insistiera, no dejaba de tomarse su copita de anís después de comer. «A no ser que me lo prohíba el Papa», decía, «yo no cambio mis costumbres». Y nadie se atrevía a llevarle la contraria.

Cuando cumplió noventa años, la familia quiso organizarle una gran fiesta. Él se negó en redondo: no es que no le gustaran las fiestas, es que no soportaba ser el centro de atención. Al final aceptó, con tal de que no hubiera discursos ni regalos caros. Por supuesto, mi tía Carmen preparó un discurso de diez minutos. El abuelo la escuchó como si estuviera oyendo la radio, sin mover un músculo.

Al terminar, se levantó despacio y dijo: «Digan lo que digan, el secreto de llegar a los noventa es no hacer caso a nadie». Todos nos reímos, aunque, que yo sepa, era la pura verdad.`, q: `¿Qué hacía el abuelo a pesar de los consejos del médico? | Fumaba ; *Tomaba un licor después de comer ; Comía dulces
¿Por qué se negaba al principio a la fiesta? | No le gustaban las fiestas ; *No le gustaba ser el centro de atención ; Era muy cara
¿Qué condición puso para aceptar la fiesta? | Que fuera en su casa ; *Que no hubiera discursos ni regalos caros ; Que viniera el Papa` },
      { t: 'Las condiciones del alquiler', x: `Querida Lucía:

Te escribo para contarte las condiciones del piso que te comenté. El propietario está dispuesto a alquilártelo siempre y cuando firmes un contrato de al menos un año y pagues dos meses de fianza. Si bien el precio es algo alto para la zona, el piso está reformado y tiene mucha luz.

Eso sí, hay un par de cosas que debes saber. No se admiten mascotas, a no ser que sean pequeñas y el propietario dé su permiso por escrito. Además, en caso de que quieras hacer obras, aunque sean pequeñas, tendrás que consultarlo antes.

Yo, que tú, iría a verlo cuanto antes, no vaya a ser que lo alquile otra persona. Que yo sepa, ya hay dos familias interesadas. El hecho de que el dueño sea amigo de mi padre puede ayudarte, pero no hagas como si ya fuera tuyo: él es muy formal y no le gustan las prisas.

Un abrazo,
Elena`, q: `¿Qué tiene que hacer Lucía para alquilar el piso? | Pagar un año por adelantado ; *Firmar al menos un año y pagar dos meses de fianza ; Hacer obras
¿Cuándo se admiten mascotas? | Nunca ; *Si son pequeñas y el dueño lo permite por escrito ; Siempre
¿Por qué le aconseja Elena darse prisa? | Porque el precio va a subir ; *Porque hay otras personas interesadas ; Porque el dueño se va de viaje` },
      { t: '¿Hay que hacer siempre lo que dicen los demás?', x: `Hay personas que viven pendientes de la opinión ajena. Antes de tomar cualquier decisión, preguntan a todo el mundo, como si la vida fuera una votación. Otras, en cambio, hacen lo que creen correcto, digan lo que digan los demás.

Ninguno de los dos extremos parece ideal. Es lógico que tengamos en cuenta los consejos de quienes nos quieren, pero el hecho de que muchos opinen lo mismo no convierte esa opinión en verdadera. Por otro lado, la tozudez tampoco es una virtud: empeñarse en algo cueste lo que cueste puede llevarnos a cometer errores evitables.

Quizá la clave esté en escuchar sin obedecer. Por más que alguien nos aprecie, nadie conoce nuestra vida mejor que nosotros. Ahora bien, que yo recuerde, las peores decisiones de mi vida las tomé sin preguntar a nadie. De ahí que, a mis cuarenta años, haya aprendido a pedir consejo… y a decidir yo después.`, q: `¿Qué critica el autor de quienes preguntan a todo el mundo? | Que nunca deciden nada ; *Que tratan la vida como una votación ; Que no escuchan a nadie
¿Qué opina de la tozudez? | Que es una virtud ; *Que puede llevar a errores evitables ; Que es necesaria para triunfar
¿Cuál es la conclusión del autor? | Hay que obedecer siempre a la familia ; *Escuchar consejos, pero decidir uno mismo ; No hay que pedir consejo nunca` }
    ]
  });

  S('c1-02', {
    title: 'Perífrasis avanzadas y aspecto',
    V: `
ir + gerundio | to be gradually doing | La situación {va mejorando}. | The situation is gradually improving.
venir + gerundio | to have been doing (for a while) | {Vengo diciendo} lo mismo desde hace años. | I've been saying the same thing for years.
andar + gerundio | to go around doing | Siempre {anda quejándose}. | He's always going around complaining.
pasar a | to go on to | Ahora {pasamos a} otro tema. | Now we move on to another topic.
meterse a | to set oneself up as | Se {metió a} fontanero sin saber nada. | He set himself up as a plumber knowing nothing.
acabar + gerundio | to end up doing | {Acabó aceptando} la oferta. | He ended up accepting the offer.
llegar a | to go as far as, manage to | {Llegó a} ser ministra. | She went on to become a minister.
venir a | to amount to, roughly | Eso {viene a} costar mil euros. | That comes to roughly a thousand euros.
liarse a | to launch into | Se {lió a} gritar en plena calle. | He started shouting in the middle of the street.
estar por | to be inclined to; still to be done | {Estoy por} dejarlo todo. | I'm tempted to drop everything.
echarse a | to burst out | Se {echó a} llorar. | She burst into tears.
echar a andar | to get going | El proyecto {echó a andar} en 2020. | The project got going in 2020.
romper a | to burst into | El bebé {rompió a} llorar. | The baby burst into tears.
no llegar a | not quite manage to | {No llegué a} verlo. | I didn't quite get to see it.
ir a parar | to end up (somewhere) | ¿Dónde {fue a parar} el dinero? | Where did the money end up?
tener + participio | to have (done, result) | {Tengo} los deberes {hechos}. | I've got my homework done.
llevar + participio | to have done so far | {Llevo leídas} cien páginas. | I've read a hundred pages so far.
dar por hecho | to take for granted | {Di por hecho} que vendrías. | I took it for granted you'd come.
dar por terminado | to consider finished | {Damos por terminada} la reunión. | We consider the meeting closed.
a trompicones | in fits and starts | El proyecto avanza {a trompicones}. | The project is advancing in fits and starts.
haber de | to have to (formal) | {Has de} saber que no es fácil. | You must know it isn't easy.
las habladurías | gossip, rumours | No hagas caso de {las habladurías}. | Don't listen to gossip.
rácano / rácana | stingy (colloquial) | No seas {rácano} con la propina. | Don't be stingy with the tip.
la prórroga | extension | Pidieron una {prórroga} del plazo. | They asked for an extension of the deadline.
perfectivo / perfectiva | perfective | El pretérito indefinido es {perfectivo}. | The preterite is perfective.
reiterado / reiterada | repeated | Tras {reiteradas} quejas, cambió. | After repeated complaints, he changed.
dar en | to take to (doing) | Ha {dado en} levantarse a las cinco. | He's taken to getting up at five.
de buenas a primeras | all of a sudden | {De buenas a primeras}, se marchó. | All of a sudden, he left.
acostumbrar a | to be used to doing | {Acostumbra a} cenar tarde. | She tends to have dinner late.
empezar por | to begin by | {Empecemos por} el principio. | Let's begin at the beginning.
terminar por | to end up | {Terminó por} darme la razón. | He ended up agreeing with me.
la fase | phase | Entramos en la última {fase}. | We're entering the final phase.
estar al caer | to be imminent | El jefe {está al caer}. | The boss will be here any minute.
cesar de | to cease | No {cesa de} llover. | It won't stop raining.
a lo largo de | throughout | {A lo largo de} los años ha cambiado mucho. | Over the years he has changed a lot.
paulatinamente | gradually | Los precios suben {paulatinamente}. | Prices are gradually rising.
reanudar | to resume | {Reanudaremos} la sesión a las cinco. | We'll resume the session at five.
interrumpir | to interrupt | No me {interrumpas}. | Don't interrupt me.
el proceso | process | Es un {proceso} lento. | It's a slow process.
de un tirón | in one go | Leí la novela {de un tirón}. | I read the novel in one go.
`,
    D: `
La economía ___ (ir, mejorar) poco a poco. | va mejorando | The economy is gradually improving.
___ (llevar + esperar, yo) dos horas. | Llevo esperando|llevo esperando | I've been waiting for two hours.
Mi hermano siempre ___ (andar + quejarse) de su jefe. | anda quejándose | My brother is always complaining about his boss.
Al final ___ (acabar + aceptar, él) el puesto. | acabó aceptando | In the end he ended up accepting the job.
Cuando le dieron la noticia, se ___ a llorar. | echó|puso | When they gave her the news, she burst into tears.
Estábamos ___ punto de salir cuando sonó el teléfono. | a | We were about to leave when the phone rang.
Ya ___ (tener, yo) escritas tres páginas. | tengo | I've already got three pages written.
No vuelvas ___ decirme eso. | a | Don't say that to me again.
Hace un año que dejé ___ comer carne. | de | It's been a year since I stopped eating meat.
Esa casa debe ___ costar una fortuna. | de | That house must cost a fortune.
Di ___ hecho que lo sabías. | por | I took it for granted that you knew.
Esto viene ___ ser lo mismo que te dije ayer. | a | This amounts to the same as I told you yesterday.
Llegó ___ ser presidente del club. | a | He went on to become club president.
Quedamos ___ vernos a las ocho en la plaza. | en | We agreed to meet at eight in the square.
El autobús está al ___; espera un minuto. | caer | The bus is about to arrive; wait a minute.
Desde 2010 ___ (venir + denunciar, nosotros) este problema. | venimos denunciando | Since 2010 we've been reporting this problem.
Se ___ (poner) a llover justo cuando salimos. | puso | It started raining just as we left.
Llevo ___ (leer) la mitad del libro. | leída | I've read half the book so far.
Se suspendió la sesión y se ___ (reanudar) una hora después. | reanudó | The session was suspended and resumed an hour later.
Terminó ___ reconocer que se había equivocado. | por | He ended up admitting he'd been wrong.
`,
    S: `
La situación va mejorando poco a poco. | The situation is gradually improving.
Llevo tres años estudiando español. | I've been studying Spanish for three years.
Vengo diciéndote lo mismo desde hace meses. | I've been telling you the same thing for months.
Estaba a punto de salir cuando llamaste. | I was about to go out when you called.
Al final acabó aceptando nuestra propuesta. | In the end he ended up accepting our proposal.
Ya tengo preparada la presentación. | I've already got the presentation ready.
Debe de ser muy tarde; no hay nadie en la calle. | It must be very late; there's no one in the street.
Damos por terminada la reunión. | We consider the meeting closed.
`,
    R: [
      { t: 'Un pueblo que va despertando', x: `Hace diez años, en Villanueva del Río solo quedaban sesenta vecinos, casi todos jubilados. La escuela había cerrado, el último bar estaba a punto de bajar la persiana y los jóvenes llevaban décadas marchándose a la ciudad.

Hoy el pueblo va recuperando la vida poco a poco. Todo empezó cuando una pareja de Barcelona, que venía pasando los veranos allí desde hacía años, decidió quedarse. Él es diseñador y trabaja a distancia; ella abrió una pequeña tienda de productos locales. Al principio los vecinos los miraban con desconfianza. «Estos se van en seis meses», decían. Sin embargo, la pareja acabó convenciendo a otras familias para que se instalaran.

Ahora el pueblo cuenta con ciento veinte habitantes, la escuela ha vuelto a abrir con nueve alumnos y el bar no ha dejado de llenarse los fines de semana. Eso sí, no todo es idílico: sigue sin haber médico más de dos días por semana y la conexión a internet anda fallando cada dos por tres. «Hemos llegado a pensar que nunca lo arreglarían», cuenta el alcalde, «pero vamos avanzando».`, q: `¿Cómo estaba el pueblo hace diez años? | Lleno de jóvenes ; *Casi vacío y con servicios cerrando ; En plena fiesta
¿Qué hizo la pareja de Barcelona? | Compró el bar ; *Se quedó a vivir y animó a otras familias ; Abrió una escuela
¿Qué problema sigue existiendo? | No hay escuela ; *Faltan médico e internet fiable ; El bar está cerrado` },
      { t: 'El proyecto que nunca terminaba', x: `En la oficina lo llamábamos «el proyecto eterno». Llevábamos dos años trabajando en él y cada vez que estábamos a punto de terminarlo, el cliente pedía un cambio. Primero quiso otro color para el logotipo; luego, que la aplicación funcionara también en relojes inteligentes; más tarde, que volviéramos a la versión anterior.

Al principio aceptábamos todo con una sonrisa. Con el tiempo, el equipo empezó a desesperarse. Marta, la programadora más veterana, andaba diciendo que se iba a ir a vivir a una isla. Rubén, el más joven, se echó a reír en plena reunión cuando el cliente propuso, por tercera vez, cambiar el nombre del producto.

Un lunes, nuestra jefa se puso seria: «O fijamos un plazo de entrega definitivo o lo damos por terminado». Para nuestra sorpresa, el cliente acabó firmando un calendario cerrado. Tres meses después, la aplicación salió al mercado. Viene a tener unos cincuenta mil usuarios, y el cliente sigue llamándonos… para pedirnos la segunda versión.`, q: `¿Por qué el proyecto no se terminaba? | Faltaba dinero ; *El cliente pedía cambios continuamente ; El equipo era muy lento
¿Cómo reaccionó Rubén en una reunión? | Se enfadó ; *Se echó a reír ; Dimitió
¿Qué consiguió la jefa? | Cancelar el proyecto ; *Que el cliente aceptara un calendario cerrado ; Contratar a más personas` },
      { t: 'Hábitos que se van formando', x: `Los psicólogos suelen decir que un hábito tarda unas semanas en formarse, aunque la cifra varía mucho de una persona a otra. Lo que sí parece claro es que los hábitos no se crean de golpe: se van construyendo poco a poco, a base de repetición.

Quien quiere empezar a correr, por ejemplo, no debería ponerse a correr diez kilómetros el primer día. Es mejor empezar por paseos rápidos e ir aumentando la distancia paulatinamente. Del mismo modo, quien intenta dejar de fumar suele tener más éxito si sustituye el cigarrillo por otro gesto, como dar un paseo corto, en lugar de luchar solo contra el deseo.

Otro error frecuente es dar por hecho que la motivación durará siempre. Llega un momento en que la novedad desaparece y uno acaba preguntándose para qué se esfuerza. Es entonces cuando conviene recordar la razón inicial. Los expertos recomiendan apuntarla en un papel y tenerla a la vista: a lo largo de los meses, esa nota puede marcar la diferencia entre volver a empezar y abandonar.`, q: `Según el texto, ¿cómo se forman los hábitos? | De golpe ; *Poco a poco, con repetición ; Solo con fuerza de voluntad
¿Qué consejo da para empezar a correr? | Correr diez kilómetros desde el principio ; *Empezar con paseos y aumentar poco a poco ; Correr solo los fines de semana
¿Qué recomiendan hacer cuando falta la motivación? | Cambiar de objetivo ; *Recordar la razón inicial apuntada ; Descansar unas semanas` }
    ]
  });

  S('c1-03', {
    title: 'Registro formal y escrito',
    V: `
distinguido / distinguida | dear (very formal opening) | {Distinguido} señor: | Dear Sir,
le saluda atentamente | yours faithfully | {Le saluda atentamente}, Ana Ruiz. | Yours faithfully, Ana Ruiz.
remitir | to send, forward | Le {remito} la documentación solicitada. | I am sending you the requested documents.
tramitar | to process | Estamos {tramitando} su solicitud. | We are processing your application.
el expediente | file, record | Su {expediente} está en revisión. | Your file is under review.
le agradecería que | I would be grateful if | {Le agradecería que} me respondiera. | I would be grateful if you replied.
quedo a la espera de | I look forward to | {Quedo a la espera de} su respuesta. | I look forward to your reply.
de igual modo | in the same way | {De igual modo}, le recordamos que debe firmar. | In the same way, we remind you that you must sign.
en virtud de | by virtue of | {En virtud del} artículo 5, se le concede la ayuda. | By virtue of article 5, you are granted the aid.
en lo que respecta a | as regards | {En lo que respecta al} presupuesto, no hay cambios. | As regards the budget, there are no changes.
a raíz de | following, as a result of | {A raíz de} su queja, hemos revisado el caso. | Following your complaint, we have reviewed the case.
cabe destacar | it's worth highlighting | {Cabe destacar} el aumento de ventas. | The rise in sales is worth highlighting.
el currículum (CV) | CV | Envíe su {currículum} antes del día 15. | Send your CV before the 15th.
el escrito | written statement | Presente un {escrito} en el registro. | Submit a written statement at the registry.
me dirijo a usted | I am writing to you | {Me dirijo a usted} para presentar una queja. | I am writing to you to make a complaint.
en relación con | regarding | {En relación con} su pedido, le comunico que… | Regarding your order, I inform you that…
con motivo de | on the occasion of | {Con motivo del} aniversario, habrá descuentos. | On the occasion of the anniversary, there will be discounts.
a la mayor brevedad | as soon as possible | Responda {a la mayor brevedad}. | Reply as soon as possible.
no dude en | do not hesitate to | {No dude en} contactar con nosotros. | Do not hesitate to contact us.
sin otro particular | with nothing further | {Sin otro particular}, le saluda atentamente… | With nothing further, yours sincerely…
el interesado / la interesada | the person concerned | El {interesado} deberá firmar aquí. | The person concerned must sign here.
con copia a | cc | Envíalo {con copia a} la directora. | Send it and cc the director.
en referencia a | with reference to | {En referencia a} su correo del día 5, le informo… | With reference to your email of the 5th, I inform you…
subsanar | to rectify | Deberá {subsanar} el error en diez días. | You must rectify the error within ten days.
el acuse de recibo | acknowledgement of receipt | Le enviaremos un {acuse de recibo}. | We will send you an acknowledgement of receipt.
las molestias | inconvenience | Disculpen las {molestias}. | Sorry for the inconvenience.
tener a bien | to be so kind as to | Le ruego que {tenga a bien} responder. | I kindly ask you to reply.
poner en conocimiento | to bring to someone's attention | Le {pongo en conocimiento} que el plazo ha vencido. | I hereby inform you that the deadline has passed.
vencer | to expire, fall due | El plazo {vence} el día 30. | The deadline expires on the 30th.
el registro | registry office | Entréguelo en el {registro} general. | Hand it in at the general registry.
la documentación | documents | Aporte la {documentación} necesaria. | Provide the necessary documents.
adjunto / adjunta | attached | Le envío el contrato {adjunto}. | I am sending you the attached contract.
pertinente | relevant | Tomaremos las medidas {pertinentes}. | We will take the relevant measures.
dicho / dicha | the aforementioned | {Dicho} documento debe estar firmado. | The aforementioned document must be signed.
el presente escrito | this letter | Mediante el {presente escrito} le informo… | By means of this letter I inform you…
cordial | cordial | Reciba un {cordial} saludo. | Kind regards.
la convocatoria | call (for applications) | Se ha publicado la {convocatoria}. | The call for applications has been published.
la instancia | formal application | Presentó una {instancia} en el registro. | She submitted a formal application at the registry.
ejercer | to practise (a profession) | {Ejerció} como abogada diez años. | She practised as a lawyer for ten years.
la vacante | vacancy | Hay una {vacante} en el departamento. | There's a vacancy in the department.
`,
    D: `
Me ___ a ustedes para solicitar información sobre el curso. | dirijo | I am writing to you to request information about the course.
Le ___ que me enviara el catálogo. | agradecería | I would be grateful if you sent me the catalogue.
Quedo a la ___ de su respuesta. | espera | I look forward to your reply.
Le adjunto mi currículum y la carta de ___. | presentación | I attach my CV and cover letter.
En relación ___ su pedido, le comunicamos que llegará el lunes. | con | Regarding your order, we inform you that it will arrive on Monday.
A raíz ___ su queja, hemos abierto una investigación. | de | Following your complaint, we have opened an investigation.
No ___ en ponerse en contacto con nosotros. | dude | Do not hesitate to contact us.
Le rogamos que responda a la mayor ___. | brevedad | Please reply as soon as possible.
___ destacar que las ventas han crecido un 10 %. | Cabe | It's worth noting that sales have grown by 10%.
En lo que ___ al horario, no habrá cambios. | respecta | As regards the timetable, there will be no changes.
Lamentamos ___ (comunicarle) que su solicitud ha sido rechazada. | comunicarle | We regret to inform you that your application has been rejected.
Sin otro ___, le saluda atentamente. | particular | With nothing further, yours sincerely.
Deberá ___ la documentación antes del día 30. | aportar|presentar | You must provide the documents before the 30th.
___ documento deberá estar firmado por ambas partes. | Dicho | The aforementioned document must be signed by both parties.
Les pedimos ___ por las molestias ocasionadas. | disculpas | We apologise for the inconvenience caused.
He ___ el cargo de coordinadora durante cinco años. | desempeñado | I've held the post of coordinator for five years.
Le ruego que me ___ (informar) del estado de mi solicitud. | informe | Please inform me of the status of my application.
Reciba un ___ saludo. | cordial | Kind regards.
Con ___ del décimo aniversario, organizamos una gala. | motivo | To mark the tenth anniversary, we're holding a gala.
Por ___, no podemos aceptar su devolución. | consiguiente | Consequently, we cannot accept your return.
`,
    S: `
Me dirijo a ustedes para presentar una reclamación. | I am writing to you to file a complaint.
Le agradecería que me respondiera a la mayor brevedad. | I would be grateful for a reply as soon as possible.
Adjunto le envío mi currículum y la carta de presentación. | Attached please find my CV and cover letter.
En relación con su consulta, le informamos de lo siguiente. | Regarding your enquiry, we inform you of the following.
Lamentamos comunicarle que el plazo ha finalizado. | We regret to inform you that the deadline has passed.
No dude en contactar con nosotros si necesita más información. | Do not hesitate to contact us if you need more information.
Quedo a la espera de su respuesta. | I look forward to your reply.
Sin otro particular, reciba un cordial saludo. | With nothing further, kind regards.
`,
    R: [
      { t: 'Carta de presentación', x: `Estimada señora Navarro:

Me dirijo a usted en relación con la vacante de coordinadora de proyectos publicada en su página web el pasado 3 de marzo.

Soy licenciada en Administración de Empresas por la Universidad de Utrecht y cuento con seis años de experiencia en la gestión de proyectos internacionales. Durante los últimos tres años he desempeñado el cargo de responsable de equipo en una empresa de logística, donde he coordinado a doce personas en cuatro países. Cabe destacar que, a raíz de un plan de mejora que diseñé, conseguimos reducir los plazos de entrega en un 15 %.

Asimismo, hablo neerlandés, inglés y español con fluidez, y tengo conocimientos de alemán. Considero que mi perfil se ajusta a los requisitos de la convocatoria y que podría aportar a su equipo tanto experiencia como capacidad de organización.

Le adjunto mi currículum. Le agradecería que me concediera la oportunidad de una entrevista para ampliar esta información.

Quedo a la espera de su respuesta.

Atentamente,
Sanne de Vries`, q: `¿Por qué escribe Sanne? | Para presentar una queja ; *Para solicitar un puesto de trabajo ; Para pedir información sobre un curso
¿Qué logro destaca? | Haber aprendido alemán ; *Haber reducido los plazos de entrega ; Haber trabajado en doce países
¿Qué pide al final de la carta? | Un aumento de sueldo ; *Una entrevista ; Más información sobre la empresa` },
      { t: 'Respuesta a una reclamación', x: `Estimado señor Ortega:

En relación con su reclamación del pasado 12 de mayo, le comunicamos que hemos revisado con detalle el caso de su pedido número 48213.

Tras consultar con el servicio de transporte, hemos podido comprobar que el paquete sufrió daños durante el envío. Lamentamos sinceramente las molestias ocasionadas y le pedimos disculpas en nombre de toda la empresa.

Por consiguiente, procederemos a enviarle un nuevo producto sin coste adicional en un plazo máximo de cinco días laborables. Asimismo, no será necesario que nos devuelva el artículo dañado. Como compensación, le adjuntamos un código de descuento del 20 % válido para su próxima compra.

En caso de que desee cualquier aclaración adicional, no dude en ponerse en contacto con nuestro servicio de atención al cliente.

Sin otro particular, reciba un cordial saludo.

Departamento de Atención al Cliente`, q: `¿Qué le pasó al pedido del señor Ortega? | Se perdió ; *Llegó dañado ; Llegó tarde
¿Qué ofrece la empresa? | Devolver el dinero ; *Enviar un producto nuevo sin coste ; Reparar el artículo
¿Tiene que devolver el producto dañado? | Sí, en cinco días ; *No ; Solo si quiere el descuento` },
      { t: 'Del correo informal al formal', x: `Uno de los errores más frecuentes de los estudiantes avanzados de español es trasladar el tono de la conversación a la escritura formal. Un correo que empieza con «Hola, ¿qué tal?» y termina con «Un beso» puede ser perfecto para un amigo, pero resulta inapropiado si se dirige a una institución o a un posible empleador.

El registro formal se caracteriza, en primer lugar, por el uso de usted y por fórmulas fijas de saludo y despedida: «Estimado señor», «Atentamente», «Reciba un cordial saludo». En segundo lugar, se prefieren verbos más precisos y cultos: «solicitar» en lugar de «pedir», «comunicar» en lugar de «decir», «aportar» en lugar de «dar». Por último, la cortesía se expresa mediante el condicional y el subjuntivo: «Le agradecería que me enviara…» resulta mucho más adecuado que «Envíeme…».

Ahora bien, formal no significa rebuscado. Las frases excesivamente largas o llenas de expresiones pomposas dificultan la lectura. La clave está en la claridad: decir lo necesario, en el orden adecuado y con el tono que exige la situación.`, q: `¿Cuál es un error frecuente de los estudiantes avanzados? | Escribir demasiado corto ; *Usar un tono coloquial en textos formales ; No usar el subjuntivo
¿Cómo se expresa la cortesía en el registro formal? | Con imperativos directos ; *Con condicional y subjuntivo ; Con expresiones coloquiales
¿Qué advierte el autor al final? | Que hay que usar frases largas ; *Que lo formal no debe ser rebuscado ; Que el registro formal ya no se usa` }
    ]
  });

  S('c1-04', {
    title: 'Coloquial: el español de la calle',
    V: `
¡vaya tela! | unbelievable! | Ha suspendido otra vez, {¡vaya tela!} | He's failed again, unbelievable!
tener morro | to have a nerve | {Tiene} un {morro} que se lo pisa. | He's got some nerve.
la peña | people, crowd | Había mucha {peña} en la fiesta. | There were loads of people at the party.
¡manda narices! | can you believe it! | {¡Manda narices!}, otra vez tarde. | Can you believe it, late again!
¡qué palo! | what a bummer! | Tengo que trabajar el sábado, {qué palo}. | I have to work on Saturday, what a bummer.
¡anda ya! | come off it! | ¿Que te ha tocado la lotería? {¡Anda ya!} | You won the lottery? Come off it!
mogollón de | loads of | Había {mogollón de} gente. | There were loads of people.
mazo | loads (Madrid slang) | Me gusta {mazo} esta canción. | I like this song loads.
la bronca | telling-off; row | Me echaron una {bronca} por llegar tarde. | I got told off for being late.
el marrón | nasty job, mess | Me ha tocado a mí el {marrón}. | I've been landed with the nasty job.
currarse | to put real effort into | Te has {currado} mucho la presentación. | You've really put the work into the presentation.
el pringado / la pringada | sucker, mug | Siempre me toca hacer de {pringado}. | I always end up being the mug.
el ligue | fling, date | ¿Quién era ese, tu nuevo {ligue}? | Who was that, your new fling?
estar forrado | to be loaded (rich) | Su familia {está forrada}. | Her family is loaded.
estar pelado | to be skint | Este mes {estoy pelado}. | I'm skint this month.
la birra | beer (slang) | ¿Una {birra} después del curro? | A beer after work?
el garito | bar, joint | Conozco un {garito} con música en directo. | I know a bar with live music.
de tranquis | chilled, low-key | Este finde, plan {de tranquis}. | This weekend, a chilled plan.
flipante | mind-blowing | El final de la serie es {flipante}. | The ending of the series is mind-blowing.
rayarse | to overthink, get worked up | No te {rayes}, que no es para tanto. | Don't stress, it's not a big deal.
comerse el coco | to overthink | Deja de {comerte el coco}. | Stop overthinking it.
estar mosqueado | to be annoyed, suspicious | Mi jefe {está mosqueado} conmigo. | My boss is annoyed with me.
empollar | to cram, swot | Me pasé la noche {empollando}. | I spent the night cramming.
liarla | to mess things up | La {liaste} en la cena. | You messed up at dinner.
pirarse | to clear off | Me {piro}, que es tarde. | I'm off, it's late.
largarse | to leave, clear off | ¡{Lárgate} de aquí! | Get out of here!
el pique | rivalry, needle | Hay {pique} entre los dos equipos. | There's rivalry between the two teams.
la movida | business, fuss | ¡Vaya {movida} se montó! | What a fuss there was!
el madrugón | very early start | Mañana toca {madrugón}. | Tomorrow it's an early start.
de buen rollo | good vibes | Fue una cena {de buen rollo}. | It was a dinner with a good vibe.
chungo / chunga | dodgy, bad | El tiempo está {chungo}. | The weather looks dodgy.
el bajón | slump, downer | Después de las vacaciones me dio el {bajón}. | After the holidays I hit a slump.
dar plantón | to stand someone up | Me {dio plantón} en la primera cita. | He stood me up on the first date.
ni de coña | no way | ¿Saltar en paracaídas? {Ni de coña}. | Skydiving? No way.
venga | come on, OK | ¡{Venga}, vámonos! | Come on, let's go!
vacilar | to tease, kid | No me {vaciles}, que te conozco. | Don't kid me, I know you.
quedarse frito | to nod off | Me {quedé frito} en el sofá. | I nodded off on the sofa.
dar corte | to feel embarrassed | Me {da corte} hablar en público. | I feel awkward speaking in public.
enrollarse | to go on and on | No te {enrolles}, que tenemos prisa. | Don't go on and on, we're in a hurry.
a pachas | going halves | Pagamos la cena {a pachas}. | We went halves on dinner.
`,
    D: `
El concierto de anoche fue una ___. | pasada | Last night's concert was amazing.
No tengo ___ para irme de vacaciones. | pasta | I've got no money to go on holiday.
Mañana tengo que currar todo el día, ¡qué ___! | palo|rollo | I have to work all day tomorrow, what a bummer!
Ese bar es muy ___: sillas rotas y vasos sucios. | cutre | That bar is really shabby: broken chairs and dirty glasses.
Había ___ de gente en la playa. | mogollón | There were loads of people on the beach.
¿Me estás tomando el ___? | pelo | Are you pulling my leg?
Estoy hasta las ___ de tanto ruido. | narices | I'm fed up with so much noise.
Ese examen fue pan ___. | comido | That exam was a piece of cake.
Si quieres aprobar, tienes que ponerte las ___. | pilas | If you want to pass, you need to get your act together.
El piso nuevo me ha costado un ojo de la ___. | cara | The new flat cost me an arm and a leg.
Deja de dar la ___, que estoy trabajando. | lata | Stop pestering me, I'm working.
Mi vecino está como una ___. | cabra | My neighbour is completely bonkers.
¿Quedamos el ___ para ir al cine? | finde | Shall we meet at the weekend to go to the cinema?
Después de la mudanza estoy hecho ___. | polvo | After the move I'm shattered.
—¿Te vienes a correr una maratón? —Ni de ___. | coña | —Coming to run a marathon? —No way.
Este curso es un ___: barato y muy bueno. | chollo | This course is a bargain: cheap and very good.
El camarero fue muy ___ con nosotros. | borde | The waiter was really rude to us.
No te ___, ve al grano. | enrolles | Don't go on and on, get to the point.
Me ___ un montón tu bici nueva. | mola | I really love your new bike.
Paso ___ ir a la reunión de vecinos. | de | I can't be bothered going to the residents' meeting.
`,
    S: `
¿Quedamos el finde para ir de cañas? | Shall we meet at the weekend to go for beers?
Tío, el concierto de ayer fue una pasada. | Mate, yesterday's concert was amazing.
Estoy hasta las narices de este curro. | I'm fed up with this job.
No tengo pasta, así que paso de salir. | I've got no money, so I'm not going out.
¿Me estás tomando el pelo o qué? | Are you pulling my leg or what?
Como no te pongas las pilas, vas a suspender. | If you don't get your act together, you'll fail.
El piso es un chollo, pero el barrio es un poco chungo. | The flat is a bargain, but the area is a bit dodgy.
Venga, vale, pero solo una caña. | Come on, OK, but just one beer.
`,
    R: [
      { t: 'Mensajes del grupo', x: `Laura: Tíos, ¿qué hacemos el finde? Estoy hasta las narices de quedarme en casa.
Dani: Yo curro el sábado por la mañana, qué palo. Pero por la tarde estoy libre.
Laura: ¿Y si vamos a la sierra? Dicen que hace un tiempo que flipas.
Marcos: Paso de madrugar. El último finde me liasteis para salir a las siete y estuve hecho polvo toda la semana.
Laura: Venga, Marcos, no te enrolles. Salimos a las diez, ¿vale?
Marcos: Vale, pero conduces tú, que yo no tengo pasta para gasolina.
Dani: Yo pillo bocadillos en el súper. ¿Alguien sabe de algún bar majo para comer allí?
Laura: Hay uno que mola mogollón, al lado del río. Un poco cutre, pero la tortilla es una pasada.
Marcos: Si es cutre, seguro que está buenísima.`, q: `¿Por qué no puede Dani el sábado por la mañana? | Está enfermo ; *Tiene que trabajar ; Va a la sierra
¿Qué le molestó a Marcos la última vez? | La comida ; *Tener que madrugar mucho ; El precio de la gasolina
¿Cómo es el bar que propone Laura? | Elegante y caro ; *Sencillo pero con muy buena tortilla ; Nuevo y moderno` },
      { t: 'El español de la calle no es «mal español»', x: `Muchos estudiantes llegan a España después de años de clases y descubren, con cierta frustración, que no entienden la mitad de lo que dicen sus compañeros de piso. No es que les falte gramática; es que en la conversación diaria aparece un vocabulario que rara vez se enseña en el aula: «currar», «pasta», «molar», «flipar», «estar hecho polvo».

Este registro coloquial no es un español incorrecto, sino un español adecuado a otra situación. Del mismo modo que nadie escribiría «mogollón de» en una carta al banco, tampoco se diría «le agradecería que me pasara la sal» en una cena entre amigos sin sonar un poco ridículo. Dominar una lengua implica precisamente saber moverse entre registros.

Ahora bien, conviene tener cuidado. Algunas expresiones coloquiales cambian mucho de una región a otra o de una generación a otra, y lo que en Madrid suena natural puede resultar extraño en Sevilla o pasado de moda entre los adolescentes. Por eso los profesores recomiendan aprenderlas primero para entenderlas y, solo después, empezar a usarlas cuando uno esté seguro del contexto.`, q: `¿Por qué se frustran muchos estudiantes al llegar a España? | Porque no saben gramática ; *Porque no entienden el vocabulario coloquial ; Porque la gente habla inglés
Según el texto, ¿qué es el registro coloquial? | Un español incorrecto ; *Un español adecuado a otras situaciones ; Un dialecto regional
¿Qué recomiendan los profesores? | Evitar el lenguaje coloquial ; *Aprender primero a entenderlo y usarlo después con cuidado ; Usarlo desde el primer día` },
      { t: 'Una cena para olvidar', x: `La cena con los padres de mi novia fue un desastre desde el principio. Para empezar, llegué tarde porque pillé un atasco de los que hacen época. Cuando por fin entré, su padre me miró de arriba abajo y dijo: «Hombre, ya era hora».

Intenté arreglarlo con un poco de humor. Conté un chiste que en mi grupo de amigos siempre funciona, pero allí nadie se rio. Silencio total. Mi novia me dio una patada por debajo de la mesa, en plan «para ya».

Luego llegó la peor parte. Su madre había preparado un cocido que tenía una pinta buenísima. Yo, para quedar bien, dije: «¡Qué pasada de cocido! Esto debe de costar un ojo de la cara en un restaurante». Al parecer, la frase sonó fatal. Su madre se quedó muy seria: «Pues aquí es gratis, hijo».

Al final de la noche, mientras nos despedíamos, su padre me dio la mano y me dijo en voz baja: «Tranquilo, yo también la lie en mi primera cena con mis suegros». Desde entonces, nos llevamos genial.`, q: `¿Por qué llegó tarde el narrador? | Se quedó dormido ; *Por un atasco ; Se perdió
¿Cómo reaccionaron al chiste? | Se rieron mucho ; *No se rio nadie ; El padre se enfadó
¿Qué le dijo el padre al final? | Que no volviera ; *Que él también se equivocó en su primera cena con los suegros ; Que el cocido era caro` }
    ]
  });

  S('c1-05', {
    title: 'Argumentar: marcadores del discurso',
    V: `
en pocas palabras | in a few words | {En pocas palabras}, hay que esperar. | In a few words, we have to wait.
esto es | that is (formal) | El plazo vence el día 5, {esto es}, el lunes. | The deadline is the 5th, that is, Monday.
sin ir más lejos | for instance, to take an example close to home | {Sin ir más lejos}, ayer me pasó a mí. | For instance, it happened to me just yesterday.
en efecto | indeed | {En efecto}, los datos lo confirman. | Indeed, the data confirm it.
es más | what's more | No me gusta; {es más}, lo odio. | I don't like it; what's more, I hate it.
ahora bien | however, that said | Es barato. {Ahora bien}, la calidad es mala. | It's cheap. That said, the quality is poor.
con todo | even so | {Con todo}, merece la pena. | Even so, it's worth it.
en síntesis | in summary | {En síntesis}, la propuesta es viable. | In summary, the proposal is viable.
a la postre | in the end (formal) | {A la postre}, tuvo razón. | In the end, he was right.
a mi juicio | in my judgement | {A mi juicio}, es un error. | In my judgement, it's a mistake.
me inclino a pensar | I tend to think | {Me inclino a pensar} que tiene razón. | I tend to think he's right.
no me cabe duda | I have no doubt | {No me cabe duda} de que ganará. | I have no doubt she'll win.
fundamentar | to base, substantiate | Debe {fundamentar} sus afirmaciones. | You must substantiate your claims.
rebatir | to refute | Es difícil {rebatir} sus argumentos. | It's hard to refute her arguments.
de entrada | for a start | {De entrada}, no me convence. | For a start, it doesn't convince me.
la falacia | fallacy | Eso es una {falacia}. | That's a fallacy.
por el contrario | on the contrary | {Por el contrario}, los datos indican lo opuesto. | On the contrary, the data indicate the opposite.
por otra parte | on the other hand | {Por otra parte}, hay que pensar en el coste. | On the other hand, we must think about the cost.
pese a ello | despite that | Era tarde; {pese a ello}, siguieron. | It was late; despite that, they carried on.
así las cosas | that being the case | {Así las cosas}, no queda otra opción. | That being the case, there's no other option.
en otras palabras | in other words | {En otras palabras}, hay que recortar. | In other words, we must cut back.
con respecto a | with regard to | {Con respecto al} horario, no hay cambios. | With regard to the timetable, there are no changes.
más aún | even more so | Es importante y, {más aún}, urgente. | It's important and, even more so, urgent.
cabe señalar | it should be noted | {Cabe señalar} que es la primera vez. | It should be noted that it's the first time.
a fin de cuentas | when all is said and done | {A fin de cuentas}, todos queremos lo mismo. | When all is said and done, we all want the same.
por si fuera poco | to top it all | Y, {por si fuera poco}, empezó a llover. | And, to top it all, it started raining.
por una parte | on the one hand | {Por una parte}, es útil; por otra, es caro. | On the one hand it's useful; on the other, it's expensive.
pues bien | well then | {Pues bien}, pasemos al segundo punto. | Well then, let's move on to the second point.
así pues | so, thus | {Así pues}, todo está claro. | So everything is clear.
en resumidas cuentas | in a nutshell | {En resumidas cuentas}, no vale la pena. | In a nutshell, it's not worth it.
persuadir | to persuade | Logró {persuadir} al jurado. | She managed to persuade the jury.
estar a favor de | to be in favour of | {Estoy a favor de} la propuesta. | I'm in favour of the proposal.
estar en contra de | to be against | {Está en contra de} la medida. | She's against the measure.
discrepar | to disagree | {Discrepo} de esa opinión. | I disagree with that opinion.
coincidir | to agree | {Coincido} contigo en ese punto. | I agree with you on that point.
puntualizar | to make clear, specify | Quisiera {puntualizar} algo. | I'd like to make something clear.
la tesis | thesis, claim | Defiende la {tesis} contraria. | He defends the opposite thesis.
la conclusión | conclusion | Llegamos a la {conclusión} de que… | We reached the conclusion that…
la objeción | objection | ¿Alguna {objeción}? | Any objections?
el contraargumento | counter-argument | Presenta un buen {contraargumento}. | She presents a good counter-argument.
`,
    D: `
No me gusta el plan; es ___, me parece absurdo. | más | I don't like the plan; what's more, I think it's absurd.
Llegaremos el martes, mejor ___, el miércoles. | dicho | We'll arrive on Tuesday, or rather, on Wednesday.
Es una buena oferta. Ahora ___, hay que leer la letra pequeña. | bien | It's a good offer. That said, you have to read the small print.
Muchos jóvenes no pueden independizarse. Sin ir más ___, mi hermano tiene 32 años y vive con mis padres. | lejos | Many young people can't leave home. For instance, my brother is 32 and lives with my parents.
A mi ___, la medida llega tarde. | juicio | In my judgement, the measure comes too late.
No me cabe ___ de que lo conseguirá. | duda | I have no doubt she'll manage it.
Al fin y al ___, es su vida. | cabo | After all, it's his life.
El hotel era caro y, por si fuera ___, la habitación estaba sucia. | poco | The hotel was expensive and, to top it all, the room was dirty.
Llega tarde y ___ se queja de que no le esperamos. | encima | He arrives late and on top of that complains we didn't wait for him.
Dicho de otro ___, no tenemos presupuesto. | modo | In other words, we have no budget.
En ___ a la fecha, la decidiremos más adelante. | cuanto | As for the date, we'll decide later.
Él es muy ordenado; su hermano, en ___, es un desastre. | cambio | He's very tidy; his brother, by contrast, is a disaster.
___ de esa opinión: los datos dicen lo contrario. | Discrepo | I disagree with that opinion: the data say otherwise.
Coincido ___ usted en lo esencial. | con | I agree with you on the essentials.
Me ___ a pensar que el problema es otro. | inclino | I tend to think the problem is something else.
Es difícil ___ un argumento tan bien documentado. | rebatir | It's hard to refute such a well-documented argument.
Decir que algo es bueno porque es caro es una ___. | falacia | Saying something is good because it's expensive is a fallacy.
En ___ cuentas, no merece la pena. | resumidas | In a nutshell, it isn't worth it.
Por un ___, es útil; por otro, es carísimo. | lado | On the one hand it's useful; on the other, it's very expensive.
Con ___, creo que deberíamos intentarlo. | todo | Even so, I think we should try.
`,
    S: `
A mi juicio, la propuesta tiene más ventajas que inconvenientes. | In my judgement, the proposal has more advantages than drawbacks.
Es cierto que es caro; ahora bien, la calidad lo justifica. | It's true that it's expensive; that said, the quality justifies it.
No estoy de acuerdo; es más, creo que es un error grave. | I don't agree; what's more, I think it's a serious mistake.
Sin ir más lejos, ayer me pasó lo mismo. | To take an example, the same thing happened to me yesterday.
Dicho de otro modo, no hay dinero para todo. | In other words, there isn't money for everything.
Coincido contigo en lo esencial, pero quisiera añadir un matiz. | I agree with you on the essentials, but I'd like to add a nuance.
Al fin y al cabo, la decisión es de los vecinos. | After all, the decision belongs to the residents.
En definitiva, merece la pena intentarlo. | In short, it's worth trying.
`,
    R: [
      { t: '¿Debería ser obligatorio el voto?', x: `En algunos países, como Bélgica o Australia, votar es obligatorio y quien no lo hace puede recibir una multa. ¿Debería España adoptar un sistema similar? A mi juicio, la respuesta es no, aunque el debate merece una reflexión matizada.

En primer lugar, sus defensores sostienen que el voto obligatorio aumenta la participación y, por lo tanto, la legitimidad de los gobiernos. Es cierto: en esos países la participación suele superar el ochenta por ciento. Es más, obliga a los partidos a dirigirse a toda la población y no solo a los votantes más movilizados.

Ahora bien, votar es un derecho, y un derecho incluye la libertad de no ejercerlo. Dicho de otro modo, la abstención también puede ser una forma de expresión política. Por otra parte, obligar a votar a quien no se ha informado no mejora necesariamente la calidad de la democracia.

En definitiva, me inclino a pensar que la solución no pasa por la obligación, sino por recuperar la confianza de los ciudadanos. Al fin y al cabo, nadie vota con entusiasmo por miedo a una multa.`, q: `¿Cuál es la postura del autor? | A favor del voto obligatorio ; *En contra del voto obligatorio ; No tiene opinión
¿Qué argumento a favor reconoce? | Que reduce los gastos ; *Que aumenta la participación y la legitimidad ; Que elimina los partidos pequeños
¿Qué propone el autor? | Multas más altas ; *Recuperar la confianza ciudadana ; Votar por internet` },
      { t: 'Un debate en clase', x: `Profesora: Hoy debatimos si las ciudades deberían prohibir los coches en el centro. Marta, empieza tú.
Marta: Estoy a favor. En primer lugar, la contaminación es un problema de salud pública. Sin ir más lejos, en mi barrio hay días en que no se puede respirar. Por otra parte, las calles sin coches son más agradables para pasear y para el comercio.
Jorge: Discrepo. No me cabe duda de que la contaminación es un problema, pero prohibir sin más es injusto. ¿Qué pasa con las personas mayores o con quienes viven lejos del transporte público?
Marta: Nadie dice que haya que hacerlo de un día para otro. Ahora bien, si no se toman medidas, nada cambiará.
Jorge: Coincido contigo en eso. Con todo, me parece más razonable limitar el acceso que prohibirlo totalmente.
Profesora: Muy bien. Dicho de otro modo, estáis de acuerdo en el objetivo, pero no en el método.`, q: `¿Qué argumento usa Marta? | El precio de la gasolina ; *La contaminación y la calidad de vida ; El turismo
¿Qué le preocupa a Jorge? | Que los comercios cierren ; *Que la prohibición sea injusta para algunos ; Que no haya aparcamiento
¿Qué resume la profesora? | Que no están de acuerdo en nada ; *Que coinciden en el objetivo pero no en el método ; Que Jorge tiene razón` },
      { t: 'Cómo detectar una falacia', x: `Una falacia es un razonamiento que parece válido, pero no lo es. Saber reconocerlas es fundamental para participar en cualquier debate, ya sea en una reunión de trabajo o en una cena familiar.

Una de las más comunes es el ataque personal: en lugar de rebatir un argumento, se critica a quien lo defiende. «¿Qué va a saber él de economía, si ni siquiera tiene coche?», por ejemplo. Otra muy frecuente es la falsa disyuntiva, que presenta solo dos opciones cuando en realidad hay más: «O estás conmigo o estás contra mí».

También abunda la generalización apresurada, que saca conclusiones a partir de muy pocos casos. Sin ir más lejos, quien afirma que «los jóvenes no leen» porque su sobrino no abre un libro está cayendo en ella. Por último, la apelación a la mayoría sostiene que algo es verdad porque mucha gente lo cree.

En definitiva, detectar falacias no consiste en ganar discusiones, sino en pensar mejor. Al fin y al cabo, el objetivo de un debate debería ser acercarse a la verdad, no derrotar al otro.`, q: `¿Qué es el ataque personal? | Rebatir un argumento con datos ; *Criticar a la persona en lugar de su argumento ; Presentar dos opciones
¿Qué ejemplo ilustra la generalización apresurada? | O estás conmigo o contra mí ; *Decir que los jóvenes no leen por un solo sobrino ; Creer algo porque lo cree mucha gente
Según el autor, ¿para qué sirve detectar falacias? | Para ganar discusiones ; *Para pensar mejor ; Para hablar más rápido` }
    ]
  });

  S('c1-06', {
    title: 'Probabilidad: futuro y condicional de conjetura',
    V: `
¿dónde estará…? | where can … be? | ¿{Dónde estará} mi móvil? | Where can my phone be?
¿qué habrá pasado? | what can have happened? | No contesta. ¿{Qué habrá pasado}? | He's not answering. What can have happened?
presumiblemente | presumably | {Presumiblemente}, llegará mañana. | Presumably, he'll arrive tomorrow.
lo más probable es que | most likely | {Lo más probable es que} llueva. | Most likely it will rain.
a lo sumo | at most | Tendrá, {a lo sumo}, treinta años. | He's thirty at most.
la conjetura | conjecture | Son solo {conjeturas}. | They're just conjectures.
intuir | to sense | {Intuyo} que algo no va bien. | I sense something isn't right.
la corazonada | hunch | Tengo una {corazonada}. | I have a hunch.
la huella dactilar | fingerprint | Encontraron una {huella dactilar}. | They found a fingerprint.
el misterio | mystery | Es todo un {misterio}. | It's a total mystery.
esfumarse | to vanish | El dinero {se esfumó}. | The money vanished.
la caravana | tailback | Hay diez kilómetros de {caravana}. | There's a ten-kilometre tailback.
pegársele a uno las sábanas | to oversleep | Se me {pegaron las sábanas}. | I overslept.
tener pinta de | to look like | {Tiene pinta de} ser caro. | It looks like it's expensive.
quizá(s) | perhaps | {Quizás} tenga razón. | Perhaps he's right.
tal vez | perhaps | {Tal vez} no lo sepa. | Perhaps she doesn't know.
posiblemente | possibly | {Posiblemente} llegue tarde. | He'll possibly be late.
acaso | perhaps (literary) | {Acaso} no lo sepa. | Perhaps he doesn't know.
cabe la posibilidad de que | there is a chance that | {Cabe la posibilidad de que} se retrase. | There's a chance it will be delayed.
la deducción | deduction | Una {deducción} brillante. | A brilliant deduction.
es probable que | it's likely that | {Es probable que} nieve. | It's likely to snow.
me da que | I have a feeling | {Me da que} no va a venir. | I have a feeling he won't come.
estar convencido de | to be convinced | {Estoy convencida de} que es él. | I'm convinced it's him.
la sospecha | suspicion | Tengo la {sospecha} de que miente. | I suspect he's lying.
sospechar | to suspect | {Sospecho} que algo va mal. | I suspect something is wrong.
el enigma | enigma | Su muerte sigue siendo un {enigma}. | His death remains an enigma.
el indicio | sign, indication | Hay {indicios} de mejora. | There are signs of improvement.
indagar | to inquire, look into | La periodista {indagó} en su pasado. | The journalist looked into his past.
el testigo | witness | Un {testigo} lo vio salir. | A witness saw him leave.
la coartada | alibi | Tiene una {coartada} perfecta. | He has a perfect alibi.
el sospechoso | suspect | El {sospechoso} se negó a declarar. | The suspect refused to make a statement.
esclarecer | to clear up | Hay que {esclarecer} los hechos. | The facts must be cleared up.
estimar | to estimate | Se {estima} que hay mil afectados. | It's estimated there are a thousand people affected.
estar al tanto | to be in the know | ¿{Estás al tanto} de lo que ha pasado? | Do you know what's happened?
a estas horas | by now, at this time | {A estas horas} ya habrá llegado. | By now he'll have arrived.
para entonces | by then | {Para entonces} habremos terminado. | By then we'll have finished.
el paradero | whereabouts | Se desconoce su {paradero}. | His whereabouts are unknown.
rondar | to be around (number) | {Ronda} los cuarenta años. | She's around forty.
a ojo | roughly, by eye | {A ojo}, habría unas doscientas personas. | Roughly, there were about two hundred people.
vete a saber | who knows | {Vete a saber} dónde estará. | Who knows where he is.
`,
    D: `
No contesta al teléfono. ¿Dónde ___ (estar)? | estará | He isn't answering the phone. Where can he be?
Son las diez y no ha llegado. Se ___ (quedar) dormido. | habrá quedado | It's ten and he hasn't arrived. He must have overslept.
Cuando lo conocí, ___ (tener) unos veinte años. | tendría | When I met him, he must have been about twenty.
Ayer no vino a clase. ___ (estar) enfermo. | Estaría | He didn't come to class yesterday. He must have been ill.
Debe ___ estar en un atasco. | de | He must be in a traffic jam.
Puede que ___ (tener, él) razón. | tenga | He may be right.
A lo mejor ___ (venir, ella) mañana. | viene | Maybe she'll come tomorrow.
Quizás no lo ___ (saber, ellos) todavía. | sepan|saben | Perhaps they don't know yet.
¿Qué hora ___ (ser)? No llevo reloj. | será | What time can it be? I'm not wearing a watch.
Para entonces ya ___ (terminar, nosotros). | habremos terminado | By then we'll have finished.
El ladrón ___ (entrar) por la ventana, porque la puerta estaba cerrada. | entraría|habrá entrado | The thief must have got in through the window, because the door was locked.
Ese coche tiene ___ de ser muy caro. | pinta | That car looks like it's very expensive.
Me ___ que no va a aprobar. | da | I have a feeling he won't pass.
___ los cincuenta años, más o menos. | Rondará|Ronda | He must be around fifty, more or less.
Es probable que ___ (llover) esta tarde. | llueva | It's likely to rain this afternoon.
Vete a ___ lo que ha pasado. | saber | Who knows what's happened.
A estas horas ya ___ (llegar) a Madrid. | habrán llegado|habrá llegado | By now they'll have arrived in Madrid.
Seguramente ___ (estar) en la biblioteca. | está|esté|estará | She's most likely in the library.
El sospechoso tenía una ___ perfecta: estaba en el cine. | coartada | The suspect had a perfect alibi: he was at the cinema.
No hay ___ de que él lo hiciera. | pruebas | There's no evidence that he did it.
`,
    S: `
¿Dónde estará Ana? Ya debería haber llegado. | Where can Ana be? She should have arrived by now.
Se habrá quedado dormido otra vez. | He must have overslept again.
Cuando la conocí tendría unos treinta años. | When I met her she must have been about thirty.
Debe de haber un error en la factura. | There must be a mistake in the bill.
A lo mejor está en un atasco. | Maybe he's in a traffic jam.
Puede que no hayan recibido el mensaje. | They may not have received the message.
Para entonces ya habremos terminado. | By then we'll have finished.
Vete a saber qué habrá pasado. | Who knows what can have happened.
`,
    R: [
      { t: 'El vecino del quinto', x: `Hace una semana que no vemos al señor Ramírez, el vecino del quinto. Normalmente baja todas las mañanas a por el periódico y saluda a todo el mundo en el portal. Por eso, cuando el lunes no apareció, los vecinos empezaron a hacer conjeturas.

«Se habrá ido de vacaciones», dijo la portera. «Imposible», respondió doña Pilar, «nunca se va sin avisarme para que le riegue las plantas». El chico del tercero sugirió que estaría en el hospital, porque hacía tiempo que tosía mucho. Otro vecino, más novelero, aseguró que debía de estar metido en algún asunto turbio, porque «siempre recibía paquetes muy raros».

El jueves, por fin, se resolvió el misterio. El señor Ramírez apareció en el portal, moreno y sonriente, con una maleta enorme. Había ganado un viaje a Canarias en un concurso de la radio y, con las prisas, se había olvidado de avisar. «¿Y los paquetes raros?», le preguntaron. «Semillas para mi huerto», contestó. Doña Pilar, eso sí, tardó varios días en perdonarle lo de las plantas.`, q: `¿Por qué se preocuparon los vecinos? | Porque oyeron ruidos ; *Porque el señor Ramírez no bajaba por el periódico ; Porque llegó la policía
¿Qué pensaba el vecino más novelero? | Que estaba enfermo ; *Que estaba metido en algo turbio ; Que se había mudado
¿Dónde había estado el señor Ramírez? | En el hospital ; *De viaje en Canarias ; En casa de su familia` },
      { t: 'Una foto antigua', x: `Ordenando la casa de mi abuela, encontré una foto en blanco y negro que nadie de la familia sabía explicar. En ella aparecen una mujer joven y un hombre con uniforme delante de una estación de tren. Ella tendría unos veinte años; él, algo más. Detrás se lee, a lápiz, «Burgos, 1951».

Mi madre cree que la mujer debe de ser su tía Rosario, que se marchó a Francia muy joven y de la que apenas se hablaba en casa. «Por la nariz y la forma de sonreír, seguramente es ella», me dijo. Sobre el hombre no tenemos ninguna pista. A lo mejor era su novio; quizá un hermano al que nadie recuerda; igual solo un desconocido que pasaba por allí.

Escribí a un archivo militar con la descripción del uniforme. Me respondieron que probablemente se trataba de un soldado de un regimiento de la zona, pero que sin más datos no podían identificarlo. Por ahora, la foto sigue siendo un misterio. Vete a saber qué historia habrá detrás de esas dos sonrisas.`, q: `¿Qué se sabe con seguridad de la foto? | Quién es el hombre ; *El lugar y el año escritos detrás ; Que la mujer es la abuela
¿Por qué cree la madre que la mujer es su tía? | Por el uniforme ; *Por su parecido físico ; Porque lo pone en la foto
¿Qué respondió el archivo militar? | Que conocían al soldado ; *Que sin más datos no podían identificarlo ; Que el uniforme era francés` },
      { t: 'El arte de suponer', x: `En español disponemos de muchos recursos para hablar de lo que no sabemos con certeza. El más sorprendente para los extranjeros es el futuro de probabilidad: «Estará en casa» no habla del futuro, sino de una suposición sobre el presente. Del mismo modo, «Habrá llegado ya» expresa una conjetura sobre algo que acaba de ocurrir, y el condicional sirve para suponer en el pasado: «Tendría unos veinte años cuando se casó».

Junto a estos tiempos verbales, existen adverbios y expresiones que permiten graduar la seguridad. «Seguramente» indica una probabilidad alta; «quizás» y «tal vez», una posibilidad más abierta; «a lo mejor» e «igual», muy frecuentes en la conversación, van siempre con indicativo. «Puede que» y «es probable que», en cambio, exigen el subjuntivo.

Dominar estos matices es una de las señales más claras de un nivel avanzado. Quien los usa bien no solo habla correctamente: transmite con precisión hasta qué punto está seguro de lo que dice, algo esencial en cualquier conversación adulta.`, q: `¿Qué expresa «Estará en casa»? | Un plan futuro ; *Una suposición sobre el presente ; Una orden
¿Qué modo verbal exige «a lo mejor»? | Subjuntivo ; *Indicativo ; Condicional
Según el texto, ¿por qué es importante dominar estos matices? | Para aprobar exámenes ; *Para transmitir el grado de seguridad con precisión ; Para hablar más rápido` }
    ]
  });
})();
