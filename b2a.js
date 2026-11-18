/* B2 · Avanzado (part 1) */
(function () {
  const R = RES, U = CAMINO.unit('B2');

  U({
    id: 'b2-cuando', title: 'Cuando llegues: subjuntivo temporal', goal: ['Talk about future events with cuando, en cuanto, hasta que, antes de que', 'Distinguish habitual/past (indicative) from future (subjunctive) in time clauses', 'Plan life stages'],
    grammar: {
      t: 'Time clauses: indicative vs subjunctive',
      h: `<p>After <b>cuando, en cuanto, tan pronto como, hasta que, mientras, después de que, una vez que, cada vez que, siempre que</b>:</p>
<ul><li><b>future / not yet happened → subjunctive</b>: <i>Cuando <b>llegues</b>, llámame. En cuanto <b>sepa</b> algo, te aviso.</i></li>
<li><b>habitual or past → indicative</b>: <i>Cuando <b>llego</b> a casa, ceno. Cuando <b>llegué</b>, ya era tarde.</i></li></ul>
<p><b>antes de que</b> always takes the subjunctive: <i>Vete antes de que <b>empiece</b> a llover.</i> With the same subject use the infinitive: <i>antes de salir, después de comer, hasta terminar</i>.</p>
<p>Never use the future after cuando: ✗ <s>cuando llegarás</s> → ✓ <b>cuando llegues</b>. But in questions, <b>¿cuándo?</b> takes the future: <i>¿Cuándo llegarás?</i></p>
<p>In the past with a future-in-the-past meaning → imperfect subjunctive: <i>Me dijo que me llamaría cuando <b>llegara</b>.</i></p>`
    },
    V: `
en cuanto | as soon as | {En cuanto} llegue, te llamo. | As soon as I arrive, I'll call you.
tan pronto como | as soon as | {Tan pronto como} pueda, lo haré. | As soon as I can, I'll do it.
hasta que | until | Espera {hasta que} vuelva. | Wait until I come back.
antes de que | before | Vete {antes de que} llueva. | Leave before it rains.
después de que | after | {Después de que} se vayan, limpiamos. | After they leave, we'll clean up.
mientras | while; as long as | {Mientras} vivas aquí, ayudarás en casa. | As long as you live here, you'll help at home.
una vez que | once | {Una vez que} firmes, no hay vuelta atrás. | Once you sign, there's no going back.
cada vez que | every time | {Cada vez que} la veo, sonríe. | Every time I see her, she smiles.
siempre que | whenever | {Siempre que} puedo, voy a la playa. | Whenever I can, I go to the beach.
avisar | to let know, warn | Avísame cuando {llegues}. | Let me know when you arrive.
jubilarse | to retire | Cuando me {jubile}, viajaré. | When I retire, I'll travel.
independizarse | to move out (become independent) | Se {independizó} a los treinta. | She moved out at thirty.
emanciparse | to become independent | Los jóvenes tardan en {emanciparse}. | Young people take a long time to leave home.
ahorrar | to save | Cuando {ahorre} lo suficiente, me compraré un piso. | When I've saved enough, I'll buy a flat.
la hipoteca | mortgage | Firmamos la {hipoteca} el mes que viene. | We sign the mortgage next month.
la entrada | down payment | Necesitamos el veinte por ciento de {entrada}. | We need a twenty percent down payment.
el ascenso | promotion | Cuando me den el {ascenso}, celebraremos. | When I get the promotion, we'll celebrate.
la etapa | stage (of life) | Es una nueva {etapa} de mi vida. | It's a new stage of my life.
la meta | goal | Mi {meta} es vivir del arte. | My goal is to live from art.
el plazo | deadline; term | A largo {plazo}, quiero volver. | In the long term, I want to go back.
a largo plazo | in the long term | {A largo plazo} será rentable. | In the long term it will pay off.
a corto plazo | in the short term | {A corto plazo} no hay cambios. | In the short term there are no changes.
de momento | for the moment | {De momento} vivo de alquiler. | For the moment I rent.
cuanto antes | as soon as possible | Respóndeme {cuanto antes}. | Answer me as soon as possible.
ponerse en contacto | to get in touch | Nos {pondremos en contacto} cuando tengamos noticias. | We'll get in touch when we have news.
el resultado | result | Te llamo en cuanto tenga los {resultados}. | I'll call you as soon as I have the results.
la decisión | decision | Cuando tomes una {decisión}, dímelo. | When you make a decision, tell me.
tomar una decisión | to make a decision | Tengo que {tomar una decisión}. | I have to make a decision.
asentarse | to settle down | Cuando nos {asentemos}, tendremos hijos. | When we settle down, we'll have children.
el futuro | future | No sé qué me deparará el {futuro}. | I don't know what the future holds.
deparar | to hold in store | ¿Qué nos {deparará} el futuro? | What will the future hold for us?
la incertidumbre | uncertainty | Vivo con mucha {incertidumbre}. | I live with a lot of uncertainty.
planificar | to plan | Me gusta {planificar} todo. | I like to plan everything.
la jubilación | retirement | Ahorra para la {jubilación}. | He saves for retirement.
el traslado | transfer (job) | Cuando me concedan el {traslado}, me mudaré. | When they grant my transfer, I'll move.
la oposición | competitive public exam | Cuando apruebe las {oposiciones}, seré funcionaria. | When I pass the public exams, I'll be a civil servant.
el contrato fijo | permanent contract | Cuando tenga un {contrato fijo}, pediré la hipoteca. | When I have a permanent contract, I'll apply for a mortgage.
`,
    D: `
Cuando ___ (terminar, yo) la carrera, viajaré por Sudamérica. | termine | When I finish my degree, I'll travel round South America.
Cuando ___ (ser, yo) pequeño, vivía en Cádiz. | era | When I was little, I lived in Cádiz.
En cuanto ___ (saber, yo) algo, te aviso. | sepa | As soon as I know anything, I'll let you know.
No me iré hasta que me ___ (pagar, ellos). | paguen | I won't leave until they pay me.
Siempre me llama cuando ___ (llegar, él) a casa. | llega | He always calls me when he gets home.
Ven antes de que ___ (cerrar, ellos) la tienda. | cierren | Come before they close the shop.
¿Cuándo ___ (volver, tú)? (question) | volverás|vuelves | When will you come back?
Después de ___ (cenar), vimos una película. | cenar | After dinner, we watched a film.
Cuando ___ (llegar, tú), llámame. | llegues | When you arrive, call me.
Cuando ___ (llegar, yo) ayer, no había nadie. | llegué | When I arrived yesterday, there was no one there.
Tan pronto como ___ (tener, nosotros) los resultados, os llamamos. | tengamos | As soon as we have the results, we'll call you.
Mientras ___ (vivir, tú) aquí, ayudarás en casa. | vivas | As long as you live here, you'll help at home.
Una vez que ___ (firmar, usted), no podrá cambiarlo. | firme | Once you sign, you can't change it.
Cada vez que ___ (ir, yo) a Madrid, visito el Prado. | voy | Every time I go to Madrid, I visit the Prado.
Antes de ___ (salir, nosotros), cierra las ventanas. | salir | Before we leave, close the windows.
Después de que ___ (irse) los invitados, limpiaremos. | se vayan | After the guests leave, we'll clean up.
Me dijo que me llamaría cuando ___ (llegar, ella). | llegara|llegase | She said she would call me when she arrived.
Esperaré hasta que ___ (dejar) de llover. | deje | I'll wait until it stops raining.
Cuando me ___ (jubilar), me iré a vivir al campo. | jubile | When I retire, I'll go and live in the countryside.
Respóndeme ___ antes. (as soon as possible) | cuanto | Answer me as soon as possible.
`,
    S: `
Cuando tenga más tiempo, aprenderé a tocar el piano. | When I have more time, I'll learn to play the piano.
Avísame en cuanto llegues. | Let me know as soon as you arrive.
No pienso firmar hasta que lea el contrato. | I'm not going to sign until I read the contract.
Tenemos que irnos antes de que empiece el atasco. | We need to leave before the traffic jam starts.
Mientras vivas en mi casa, harás tu cama. | As long as you live in my house, you'll make your bed.
Cuando me jubile, me iré a vivir a un pueblo. | When I retire, I'll go and live in a village.
Siempre que voy a Sevilla, como en el mismo bar. | Whenever I go to Seville, I eat at the same bar.
Una vez que tengas el NIE, podrás abrir una cuenta. | Once you have your NIE, you'll be able to open an account.
`,
    R: [
      { t: 'Planes con condiciones', x: `Mi hermana Carla tiene treinta años y todavía vive con nuestros padres, como muchos jóvenes en España. "Me independizaré cuando encuentre un trabajo estable", dice siempre. De momento trabaja con contratos temporales. Ahorra todo lo que puede y, en cuanto tenga suficiente para la fianza, buscará un piso compartido. Mis padres le dicen que no hay prisa, pero ella quiere irse antes de que suban más los alquileres.`, q: `¿Cuándo se independizará Carla? | Cuando se case ; *Cuando encuentre un trabajo estable ; El año que viene
¿Qué hará en cuanto tenga suficiente dinero? | Comprar un piso ; *Buscar un piso compartido ; Viajar
¿Por qué quiere irse pronto? | *Antes de que suban los alquileres ; Porque sus padres quieren ; Porque se aburre` },
      { t: 'La edad de emancipación', x: `Los jóvenes españoles se independizan, de media, a los treinta años, una de las edades más altas de Europa. En los Países Bajos o en los países nórdicos, muchos lo hacen antes de los veintitrés. Las razones son económicas: los salarios de los jóvenes son bajos y los alquileres, muy altos. Muchos expertos advierten de que mientras no se construya más vivienda asequible, la situación no cambiará. Además, cuando por fin se emancipan, muchos lo hacen compartiendo piso.`, q: `¿A qué edad se independizan de media los jóvenes españoles? | A los veintitrés ; *A los treinta ; A los veinticinco
¿Cuáles son las razones? | Culturales ; *Económicas: salarios bajos y alquileres altos ; Familiares
¿Qué advierten los expertos? | Que todo mejorará pronto ; *Que no cambiará mientras no haya más vivienda asequible ; Que hay que subir los alquileres` },
      { t: 'Correo al casero', x: `Estimado Sr. López: le escribo para informarle de que dejaré el piso a finales de junio. Como dice el contrato, le aviso con dos meses de antelación. Antes de que me vaya, me gustaría que revisáramos juntos el estado del piso. En cuanto me confirme una fecha, organizaré la mudanza. Le agradecería que me devolviera la fianza tan pronto como sea posible después de la entrega de llaves. Un cordial saludo, Anna Visser.`, q: `¿Cuándo dejará el piso? | En abril ; *A finales de junio ; En septiembre
¿Qué quiere hacer antes de irse? | Pintar el piso ; *Revisar juntos el estado del piso ; Firmar otro contrato
¿Qué pide sobre la fianza? | Que se la quede ; *Que se la devuelva lo antes posible ; Que la reduzca` }
    ],
    write: 'Write about your plans for the next five to ten years with conditions: cuando…, en cuanto…, hasta que…, antes de que…, una vez que… (200 words).',
    talk: 'You are a Spanish career coach talking with the learner about their medium- and long-term plans. Ask "¿y cuándo…?" questions so they must answer with cuando + subjuntivo. Correct gently.',
    res: [R.slcInt(), R.hh(), R.juan(), R.practica()]
  });

  U({
    id: 'b2-preposiciones', title: 'Verbos con preposición', goal: ['Use verbs that require a fixed preposition (pensar en, soñar con, depender de…)', 'Ask questions with the preposition in front (¿En qué piensas?)', 'Avoid typical English/Dutch interference'],
    grammar: {
      t: 'Verbs with fixed prepositions',
      h: `<p>Many Spanish verbs need a specific preposition, often different from English or Dutch. Learn them as chunks:</p>
<table><tr><th>a</th><td>aprender a, empezar a, ayudar a, atreverse a, acostumbrarse a, oler a, saber a, dedicarse a, negarse a</td></tr>
<tr><th>de</th><td>depender de, acordarse de, olvidarse de, enamorarse de, darse cuenta de, tratar de (try), quejarse de, alegrarse de, despedirse de, dejar de, encargarse de</td></tr>
<tr><th>en</th><td>pensar en, confiar en, insistir en, tardar en, fijarse en, consistir en, convertirse en, quedar en (agree to), entrar en</td></tr>
<tr><th>con</th><td>soñar con, casarse con, contar con (rely on), quedar con (meet), tener que ver con, conformarse con, enfadarse con</td></tr>
<tr><th>por</th><td>preocuparse por, interesarse por, luchar por, optar por, decidirse por</td></tr></table>
<p>In questions and relative clauses the preposition goes <b>first</b>: <i>¿<b>En</b> qué piensas? ¿<b>Con</b> quién sueñas? La persona <b>de</b> la que me enamoré…</i></p>
<p>With a clause: <i>Me alegro <b>de que</b> vengas. Insisto <b>en que</b> te quedes.</i> (+ subjunctive with emotion/influence.)</p>`
    },
    V: `
pensar en | to think about | Siempre {pienso en} ti. | I always think about you.
soñar con | to dream of | {Sueño con} vivir junto al mar. | I dream of living by the sea.
depender de | to depend on | {Depende del} tiempo. | It depends on the weather.
confiar en | to trust | {Confío en} tu criterio. | I trust your judgement.
contar con | to count on, rely on | Puedes {contar conmigo}. | You can count on me.
acordarse de | to remember | ¿Te {acuerdas de} mí? | Do you remember me?
olvidarse de | to forget | Me {olvidé de} llamarte. | I forgot to call you.
darse cuenta de | to realise | No me {di cuenta de} la hora. | I didn't realise the time.
tratar de | to try to | {Trato de} hablar solo en español. | I try to speak only Spanish.
tratarse de | to be about | ¿De qué {se trata}? | What's it about?
quejarse de | to complain about | Siempre se {queja del} ruido. | He always complains about the noise.
alegrarse de | to be glad about | Me {alegro de} verte. | I'm glad to see you.
despedirse de | to say goodbye to | Me {despedí de} mis compañeros. | I said goodbye to my colleagues.
encargarse de | to be in charge of | Yo me {encargo de} la comida. | I'll take care of the food.
enamorarse de | to fall in love with | Se {enamoró de} Sevilla. | She fell in love with Seville.
aprender a | to learn to | Estoy {aprendiendo a} cocinar. | I'm learning to cook.
atreverse a | to dare to | No me {atrevo a} hablar en público. | I don't dare speak in public.
acostumbrarse a | to get used to | Me he {acostumbrado al} calor. | I've got used to the heat.
dedicarse a | to work as, devote oneself to | ¿A qué te {dedicas}? | What do you do for a living?
negarse a | to refuse to | Se {negó a} pagar. | He refused to pay.
oler a | to smell of | La casa {huele a} pan. | The house smells of bread.
saber a | to taste of | Esto {sabe a} limón. | This tastes of lemon.
insistir en | to insist on | {Insiste en} pagar. | He insists on paying.
tardar en | to take time to | {Tardé} una hora {en} llegar. | It took me an hour to get there.
fijarse en | to notice, pay attention to | ¿Te has {fijado en} su acento? | Have you noticed her accent?
consistir en | to consist of | El trabajo {consiste en} atender clientes. | The job consists of dealing with customers.
convertirse en | to become, turn into | Se {convirtió en} un éxito. | It became a success.
quedar en | to agree to | {Quedamos en} vernos el lunes. | We agreed to meet on Monday.
casarse con | to marry | Se {casó con} un italiano. | She married an Italian.
quedar con | to meet up with | He {quedado con} Marta. | I've arranged to meet Marta.
tener que ver con | to have to do with | Eso no {tiene nada que ver con} esto. | That has nothing to do with this.
conformarse con | to settle for | No me {conformo con} poco. | I don't settle for little.
enfadarse con | to get angry with | Se {enfadó con} su hermano. | He got angry with his brother.
preocuparse por | to worry about | No te {preocupes por} eso. | Don't worry about that.
interesarse por | to take an interest in | Se {interesa por} la política. | She takes an interest in politics.
luchar por | to fight for | {Luchan por} sus derechos. | They fight for their rights.
optar por | to opt for | {Optamos por} el tren. | We opted for the train.
decidirse por | to decide on | Al final me {decidí por} el azul. | In the end I decided on the blue one.
ayudar a | to help to | Te {ayudo a} mover el sofá. | I'll help you move the sofa.
invitar a | to invite to | Me {invitó a} cenar. | She invited me to dinner.
`,
    D: `
Siempre pienso ___ ti. | en | I always think about you.
Sueño ___ vivir en Cádiz. | con | I dream of living in Cádiz.
Todo depende ___ ti. | de | It all depends on you.
¿Te acuerdas ___ mí? | de | Do you remember me?
Puedes contar ___ nosotros. | con | You can count on us.
Confío ___ tu criterio. | en | I trust your judgement.
Me he acostumbrado ___ calor. (a + el) | al | I've got used to the heat.
No me atrevo ___ decírselo. | a | I don't dare tell him.
La casa huele ___ café. | a | The house smells of coffee.
¿___ qué piensas? | en | What are you thinking about?
¿___ quién te casaste? | con | Who did you marry?
Me alegro ___ que vengas. | de | I'm glad you're coming.
Insisto ___ que te quedes. | en | I insist that you stay.
Se casó ___ un chico de Bilbao. | con | She married a guy from Bilbao.
No te preocupes ___ mí. | por | Don't worry about me.
Tardé dos horas ___ llegar. | en | It took me two hours to get there.
¿De qué se ___? (to be about) | trata | What's it about?
Me olvidé ___ comprar pan. | de | I forgot to buy bread.
Quedamos ___ vernos el viernes. (agreed to) | en | We agreed to meet on Friday.
El trabajo consiste ___ traducir documentos. | en | The job consists of translating documents.
`,
    S: `
¿En qué estás pensando? | What are you thinking about?
Me alegro mucho de que hayas venido. | I'm really glad you came.
No me di cuenta de que era tan tarde. | I didn't realise it was so late.
Depende de lo que diga el médico. | It depends on what the doctor says.
Siempre he soñado con vivir en el sur. | I've always dreamed of living in the south.
Puedes contar conmigo para lo que necesites. | You can count on me for whatever you need.
Mi hermana se casó con un chico de Cádiz. | My sister married a guy from Cádiz.
Todavía no me he acostumbrado a cenar a las diez. | I still haven't got used to having dinner at ten.
`,
    R: [
      { t: 'Me enamoré de Sevilla', x: `Hace cinco años vine a Sevilla para un curso de verano de tres semanas. Nunca me imaginé que me quedaría. Me enamoré de la ciudad desde el primer día: de su luz, de sus patios y de la manera de vivir en la calle. Al principio me costó acostumbrarme al calor de agosto, que es brutal. Pero aprendí a vivir como los sevillanos: salgo temprano, me escondo a mediodía y vuelvo a la calle cuando el sol se pone. Hoy me dedico a la traducción y sueño en español.`, q: `¿Para qué vino a Sevilla? | Para trabajar ; *Para un curso de verano ; Para casarse
¿A qué le costó acostumbrarse? | A la comida ; *Al calor de agosto ; Al idioma
¿A qué se dedica hoy? | A la enseñanza ; *A la traducción ; Al turismo` },
      { t: 'Errores típicos', x: `Los estudiantes holandeses e ingleses cometen a menudo los mismos errores con las preposiciones. Dicen "pienso de ti" en lugar de "pienso en ti", o "depende en" en lugar de "depende de", porque traducen directamente de su lengua. También olvidan la preposición en las preguntas: en español no se puede terminar una frase con una preposición, así que hay que decir "¿Con quién hablas?" y no "¿Quién hablas con?". La única solución es aprender los verbos con su preposición, como si fueran una sola palabra.`, q: `¿Por qué cometen estos errores? | Por pereza ; *Porque traducen directamente de su lengua ; Porque no estudian
¿Qué no se puede hacer en español? | Usar preposiciones ; *Terminar una frase con una preposición ; Hacer preguntas
¿Cuál es la solución, según el texto? | Leer más ; *Aprender los verbos con su preposición ; No usar esos verbos` },
      { t: 'Una despedida', x: `El viernes me despedí de mis compañeros de la oficina de Madrid. Insistieron en organizarme una cena sorpresa y no me di cuenta de nada hasta que entré en el restaurante. Me alegré muchísimo de ver a todos, incluso a los que se habían ido de la empresa. Mi jefa me dijo que siempre podría contar con ellos. Me cuesta despedirme de la gente que quiero, pero me consuela pensar que Madrid está a solo dos horas de avión.`, q: `¿Qué organizaron sus compañeros? | Una fiesta en la oficina ; *Una cena sorpresa ; Un viaje
¿Cuándo se dio cuenta? | Una semana antes ; *Cuando entró en el restaurante ; Nunca
¿Qué le dijo su jefa? | Que volviera pronto ; *Que siempre podría contar con ellos ; Que estaba enfadada` }
    ],
    write: 'Write about your dreams, worries and what you rely on (200 words) using at least twelve verbs with prepositions, including two questions with the preposition in front.',
    talk: 'You are a curious Spanish interviewer for a podcast about people who changed countries. Ask the learner what they dream of, what they worry about, what they had to get used to, who they rely on; correct preposition errors.',
    res: [R.slcInt(), R.juan(), R.hh('gramática')]
  });

  U({
    id: 'b2-relativos', title: 'Relativos: que, quien, lo que, donde, cuyo', goal: ['Join ideas with relative pronouns, including after prepositions', 'Use the subjunctive in relative clauses for unknown or non-existent things', 'Write precise descriptions'],
    grammar: {
      t: 'Relative clauses and the subjunctive',
      h: `<p><b>que</b> (who, which, that) — the default: <i>El chico que vive arriba es músico.</i></p>
<p>After prepositions use <b>el que / la que / los que / las que</b> or <b>el cual / la cual…</b> (more formal): <i>La empresa en la que trabajo… El amigo con el que viajé… La razón por la cual…</i> For people also <b>quien(es)</b>: <i>la persona con quien hablé</i>.</p>
<p><b>lo que / lo cual</b> = what / which (an idea): <i>Lo que necesito es dormir. Llegó tarde, lo cual me molestó.</i> <b>donde</b> = where; <b>como</b> = the way; <b>cuando</b> = when. <b>cuyo/a/os/as</b> = whose, agrees with the thing owned: <i>una autora cuyas novelas…</i></p>
<p><b>Indicative vs subjunctive</b>: known, existing antecedent → indicative; unknown, hypothetical or non-existent → subjunctive:<br><i>Tengo un compañero que <b>habla</b> chino.</i> vs <i>Busco un compañero que <b>hable</b> chino.</i> <i>No hay nadie que lo <b>sepa</b>.</i> <i>Haz lo que <b>quieras</b>.</i> <i>¿Conoces a alguien que <b>arregle</b> bicis?</i></p>
<p>Free relatives: <i>quien quiera venir, que venga; el que llegue primero gana; donde quieras; como prefieras.</i></p>`
    },
    V: `
lo que | what, that which | {Lo que} más me gusta es la gente. | What I like most is the people.
lo cual | which (refers to an idea) | No vino, {lo cual} me sorprendió. | He didn't come, which surprised me.
el que / la que | the one that / which | La empresa en {la que} trabajo es alemana. | The company I work for is German.
quien / quienes | who (after prepositions) | La persona con {quien} hablé fue amable. | The person I spoke to was kind.
cuyo / cuya | whose | Es una autora {cuyos} libros adoro. | She's an author whose books I love.
donde | where | El barrio {donde} vivo es tranquilo. | The neighbourhood where I live is quiet.
como | how, the way | Hazlo {como} quieras. | Do it however you like.
cualquiera | anyone; any | {Cualquiera} puede aprender. | Anyone can learn.
cualquier cosa | anything | Haría {cualquier cosa} por ti. | I'd do anything for you.
lo que sea | whatever | Pide {lo que sea}. | Order whatever you like.
donde sea | wherever | Te sigo {donde sea}. | I'll follow you wherever.
quien sea | whoever | {Quien sea}, que espere. | Whoever it is, they can wait.
el compañero de piso | flatmate | Busco un {compañero de piso} que no fume. | I'm looking for a flatmate who doesn't smoke.
el requisito | requirement | El único {requisito} es hablar inglés. | The only requirement is speaking English.
la oferta de empleo | job offer | Vi una {oferta de empleo} interesante. | I saw an interesting job offer.
imprescindible | essential | Es {imprescindible} tener carné. | Having a driving licence is essential.
valorar | to value | Se {valorará} la experiencia. | Experience will be valued.
el/la candidato/a | candidate | Buscamos un {candidato} que sepa francés. | We're looking for a candidate who knows French.
disponible | available | Necesito a alguien que esté {disponible} ya. | I need someone who is available now.
la plaza | vacancy, place | Hay una {plaza} libre. | There's a vacancy.
el perfil | profile | Su {perfil} encaja perfectamente. | Your profile fits perfectly.
la convivencia | living together | La {convivencia} es lo más importante. | Getting on at home is the most important thing.
ordenado / ordenada | tidy | Busco a alguien {ordenado}. | I'm looking for someone tidy.
respetuoso / respetuosa | respectful | Buscamos a alguien {respetuoso}. | We're looking for someone respectful.
fiable | reliable | Necesito un mecánico {fiable}. | I need a reliable mechanic.
arreglar | to repair | ¿Conoces a alguien que {arregle} lavadoras? | Do you know anyone who repairs washing machines?
el fontanero / la fontanera | plumber | Busco un {fontanero} que venga hoy. | I'm looking for a plumber who can come today.
el electricista | electrician | El {electricista} que vino era muy bueno. | The electrician who came was very good.
el presupuesto | quote; budget | Pide un {presupuesto} que incluya todo. | Ask for a quote that includes everything.
exigente | demanding | Es un jefe muy {exigente}. | He's a very demanding boss.
la razón por la que | the reason why | Esa es la {razón por la que} me fui. | That's the reason why I left.
el momento en que | the moment when | Recuerdo el {momento en que} la vi. | I remember the moment I saw her.
la manera en que | the way in which | Me gusta la {manera en que} habla. | I like the way she talks.
encajar | to fit | Tu perfil {encaja} con el puesto. | Your profile fits the job.
el anuncio | advert | Pon un {anuncio} en internet. | Put an ad online.
la experiencia previa | previous experience | No se necesita {experiencia previa}. | No previous experience needed.
`,
    D: `
Busco un piso que ___ (tener) terraza. | tenga | I'm looking for a flat that has a terrace.
Vivo en un piso que ___ (tener) terraza. | tiene | I live in a flat that has a terrace.
No hay nadie que ___ (saber) la respuesta. | sepa | There is nobody who knows the answer.
___ que más me gusta de Madrid es la gente. | lo | What I like most about Madrid is the people.
La empresa en ___ que trabajo es alemana. | la | The company I work for is German.
Es un escritor ___ libros se han traducido a veinte idiomas. | cuyos | He's a writer whose books have been translated into twenty languages.
Haz lo que ___ (querer, tú). | quieras | Do whatever you want.
Ese es el bar ___ nos conocimos. | donde|en el que | That's the bar where we met.
¿Conoces a alguien que ___ (arreglar) bicis? | arregle | Do you know anyone who repairs bikes?
Tengo un amigo que ___ (arreglar) bicis. | arregla | I have a friend who repairs bikes.
Necesitamos a alguien que ___ (hablar) alemán. | hable | We need someone who speaks German.
El chico con ___ salgo es de Cádiz. | quien|el que | The guy I'm going out with is from Cádiz.
Es una ciudad ___ historia me fascina. | cuya | It's a city whose history fascinates me.
Llegó tarde, lo ___ me molestó mucho. | cual | He arrived late, which annoyed me a lot.
Quien ___ (querer) venir, que venga. | quiera | Whoever wants to come can come.
El que ___ (llegar) primero, gana. | llegue | Whoever arrives first wins.
Esa es la razón por ___ que me fui. | la | That's the reason why I left.
No conozco a nadie que ___ (vivir) en Murcia. | viva | I don't know anyone who lives in Murcia.
Los estudiantes ___ aprobaron recibirán el título. | que | The students who passed will receive the diploma.
Siéntate donde ___ (querer, tú). | quieras | Sit wherever you like.
`,
    S: `
Necesitamos a alguien que tenga experiencia en ventas. | We need someone who has sales experience.
Lo que más echo de menos es el mar. | What I miss most is the sea.
¿Conoces algún restaurante que abra los lunes? | Do you know any restaurant that opens on Mondays?
La persona con quien hablé fue muy amable. | The person I spoke to was very kind.
Puedes sentarte donde quieras. | You can sit wherever you want.
Es una ciudad cuya historia me fascina. | It's a city whose history fascinates me.
No hay nadie que cocine como mi abuela. | There's nobody who cooks like my grandmother.
Esa es la razón por la que decidí mudarme. | That's the reason why I decided to move.
`,
    R: [
      { t: 'Se busca compañero de piso', x: `Somos dos chicas de 28 y 31 años que vivimos en un piso luminoso en el barrio de Gràcia, en Barcelona. Buscamos a alguien que sea ordenado, que no fume y que respete el descanso de los demás. Lo que más valoramos es la buena convivencia. No es imprescindible que hables catalán, pero sí que tengas ganas de aprenderlo. La habitación que ofrecemos es exterior y tiene un armario grande. El piso, cuyo propietario vive en el edificio, tiene calefacción.`, q: `¿Qué tipo de persona buscan? | Alguien que fume ; *Alguien ordenado y respetuoso ; Alguien que hable catalán perfectamente
¿Es imprescindible hablar catalán? | Sí ; *No, pero deben querer aprenderlo ; No se dice
¿Dónde vive el propietario? | *En el mismo edificio ; En Madrid ; En el piso` },
      { t: 'Oferta de empleo', x: `Empresa tecnológica con sede en Málaga busca desarrollador/a que tenga al menos tres años de experiencia y que domine JavaScript. Valoraremos a los candidatos que hablen inglés y alemán y que hayan trabajado en equipos internacionales. Ofrecemos un contrato indefinido, horario flexible y la posibilidad de trabajar desde donde quieras dos días a la semana. Lo que más nos importa es que seas una persona curiosa y con ganas de aprender.`, q: `¿Cuánta experiencia piden? | Ninguna ; *Al menos tres años ; Cinco años
¿Qué idiomas se valoran? | Francés e italiano ; *Inglés y alemán ; Solo español
¿Qué es lo que más les importa? | La experiencia ; *Que la persona sea curiosa y con ganas de aprender ; El título` },
      { t: 'El pueblo donde nací', x: `El pueblo donde nací tiene trescientos habitantes, la mayoría de los cuales son mayores. Es un lugar donde todos se conocen y donde nadie cierra la puerta con llave. La plaza, en la que está la iglesia, es el centro de todo. El bar, cuyo dueño es mi tío, es el único sitio donde hay wifi. No hay ningún joven que quiera quedarse a vivir allí, lo cual me da mucha pena, porque es el lugar más tranquilo que conozco.`, q: `¿Cuántos habitantes tiene el pueblo? | Tres mil ; *Trescientos ; Treinta
¿Quién es el dueño del bar? | El alcalde ; *El tío del narrador ; Un joven
¿Qué le da pena al narrador? | Que no haya wifi ; *Que ningún joven quiera quedarse ; Que la iglesia esté cerrada` }
    ],
    write: 'Write an ad looking for something or someone (a flatmate, an employee, a language partner, a tradesperson), with at least five relative clauses with subjunctive and four with indicative, plus lo que and cuyo.',
    talk: 'You are a recruiter in Valencia describing the ideal candidate and the company. Ask the learner what they are looking for in a job, a flat and a partner; elicit relative clauses with subjunctive.',
    res: [R.slcInt(), R.hh(), R.easy('vivir en España')]
  });

  U({
    id: 'b2-impsubj', title: 'Imperfecto de subjuntivo', goal: ['Report past wishes, requests and feelings', 'Form the imperfect subjunctive (-ra and -se)', 'Make very polite requests (quisiera…) and unlikely wishes'],
    grammar: {
      t: 'Pretérito imperfecto de subjuntivo',
      h: `<p>Take the <b>ellos</b> form of the indefinido, remove <b>-ron</b>, add <b>-ra, -ras, -ra, -ramos, -rais, -ran</b> (accent on nosotros): <i>hablaron → hablara, hablaras… habláramos</i>; <i>tuvieron → tuviera</i>; <i>fueron → fuera</i>; <i>dijeron → dijera</i>; <i>pidieron → pidiera</i>; <i>leyeron → leyera</i>.</p>
<p>The alternative ending <b>-se</b> (<i>hablase, tuviese</i>) means the same and is common in Spain, especially in writing.</p>
<p>Use it when the main verb is in a <b>past or conditional</b> tense and requires the subjunctive: <i>Quiero que vengas → Quería que <b>vinieras</b>. Me pidió que lo <b>ayudara</b>. Era importante que <b>llegáramos</b> pronto. No creí que <b>fuera</b> verdad. Me gustaría que <b>vinieras</b>.</i></p>
<p>Also: <b>como si + imp. subj.</b> (as if): <i>Habla como si lo <b>supiera</b> todo.</i> <b>Ojalá + imp. subj.</b> = unlikely or impossible wish: <i>Ojalá <b>tuviera</b> más tiempo.</i> Politeness: <b>Quisiera</b> hablar con el director.</p>`
    },
    conj: { t: 'impsubj', v: ['hablar', 'tener', 'ser', 'ir', 'hacer', 'decir', 'poder', 'pedir', 'saber', 'venir'] },
    V: `
quisiera | I would like (very polite) | {Quisiera} hablar con el director. | I would like to speak to the director.
como si | as if | Actúa {como si} no pasara nada. | She acts as if nothing were happening.
ojalá + imp. subj. | I wish (unlikely) | {Ojalá} tuviera más tiempo. | I wish I had more time.
pedir que | to ask that | Me {pidió que} lo ayudara. | He asked me to help him.
exigir | to demand | {Exigió} que le devolvieran el dinero. | She demanded they give her money back.
aconsejar | to advise | Me {aconsejó} que descansara. | She advised me to rest.
rogar | to beg, request | Le {rogué} que no se fuera. | I begged him not to leave.
me extrañó que | it surprised me that | {Me extrañó que} no llamaras. | It surprised me that you didn't call.
me dio pena que | I was sad that | {Me dio pena que} te fueras. | I was sad that you left.
me molestó que | it bothered me that | {Me molestó que} llegaran tarde. | It bothered me that they arrived late.
no creí que | I didn't think that | {No creí que} fuera verdad. | I didn't think it was true.
era necesario que | it was necessary that | {Era necesario que} lo supieras. | It was necessary for you to know.
la sorpresa | surprise | Fue una {sorpresa} que vinieras. | It was a surprise that you came.
el malentendido | misunderstanding | Fue todo un {malentendido}. | It was all a misunderstanding.
la reclamación | complaint (formal) | Presenté una {reclamación}. | I made a complaint.
el/la encargado/a | manager (shop, hotel) | Pedí hablar con el {encargado}. | I asked to speak to the manager.
reembolsar | to refund | Me {reembolsaron} el dinero. | They refunded my money.
el reembolso | refund | Pedí el {reembolso}. | I asked for a refund.
quejarse | to complain | Me {quejé} del servicio. | I complained about the service.
la indemnización | compensation | Exigimos una {indemnización}. | We demanded compensation.
la estancia | stay | Durante nuestra {estancia} hubo ruido. | During our stay there was noise.
las vistas | view | Pedí una habitación con {vistas} al mar. | I asked for a room with a sea view.
la queja | complaint | Recibieron muchas {quejas}. | They received many complaints.
atender | to attend to, serve | Nadie nos {atendió}. | Nobody attended to us.
la disculpa | apology | Nos pidieron {disculpas}. | They apologised to us.
disculparse | to apologise | El hotel se {disculpó}. | The hotel apologised.
compensar | to make up for | Para {compensar}, nos invitaron a cenar. | To make up for it, they invited us to dinner.
esperar que | to hope / expect that | {Esperaba que} fuera mejor. | I expected it to be better.
la expectativa | expectation | No cumplió mis {expectativas}. | It didn't meet my expectations.
decepcionante | disappointing | Fue una experiencia {decepcionante}. | It was a disappointing experience.
el trato | treatment (of people) | El {trato} fue excelente. | The treatment was excellent.
amable | kind | El personal fue muy {amable}. | The staff were very kind.
a pesar de que | despite | {A pesar de que} lo pedí, no lo hicieron. | Even though I asked, they didn't do it.
por escrito | in writing | Lo quiero {por escrito}. | I want it in writing.
la factura | invoice | Les pedí que me enviaran la {factura}. | I asked them to send me the invoice.
`,
    D: `
Mi madre quería que ___ (estudiar, yo) medicina. | estudiara|estudiase | My mother wanted me to study medicine.
Te pedí que me ___ (llamar, tú). | llamaras|llamases | I asked you to call me.
No creía que ___ (ser) tan difícil. | fuera|fuese | I didn't think it would be so hard.
Ojalá ___ (tener, yo) más vacaciones. | tuviera|tuviese | I wish I had more holidays.
Habla como si ___ (saber) todo. | supiera|supiese | He talks as if he knew everything.
Era necesario que ___ (venir, vosotros). | vinierais|vinieseis | It was necessary for you (all) to come.
___ (querer, yo) hablar con el encargado. | quisiera | I would like to speak to the manager.
Me extrañó que no ___ (decir, ellos) nada. | dijeran|dijesen | It surprised me that they didn't say anything.
Me gustaría que ___ (venir, tú) a la boda. | vinieras|vinieses | I'd like you to come to the wedding.
El médico me aconsejó que ___ (hacer, yo) más ejercicio. | hiciera|hiciese | The doctor advised me to do more exercise.
Les pedí que ___ (bajar) la música. | bajaran|bajasen | I asked them to turn the music down.
No esperaba que ___ (llegar, vosotros) tan pronto. | llegarais|llegaseis | I didn't expect you to arrive so soon.
Exigió que le ___ (devolver, ellos) el dinero. | devolvieran|devolviesen | She demanded they give her money back.
Me trató como si ___ (ser, yo) un niño. | fuera|fuese | He treated me as if I were a child.
Ojalá ___ (poder, nosotros) vivir en la playa. | pudiéramos|pudiésemos | I wish we could live by the beach.
Me dio pena que te ___ (ir, tú). | fueras|fueses | I was sad that you left.
Queríamos que ___ (haber) más opciones. | hubiera|hubiese | We wanted there to be more options.
Le rogué que no se lo ___ (contar) a nadie. | contara|contase | I begged him not to tell anyone.
Fue una sorpresa que ___ (ganar) nuestro equipo. | ganara|ganase | It was a surprise that our team won.
Si yo ___ (ser) tú, lo aceptaría. | fuera|fuese | If I were you, I'd accept it.
`,
    S: `
El médico me aconsejó que hiciera más ejercicio. | The doctor advised me to do more exercise.
Quisiera presentar una reclamación. | I would like to make a complaint.
Ojalá estuvieras aquí. | I wish you were here.
Me trató como si fuera un niño. | He treated me as if I were a child.
Les pedí que bajaran la música. | I asked them to turn the music down.
No esperaba que vinierais todos. | I didn't expect you all to come.
Me extrañó que no me avisaras. | It surprised me that you didn't let me know.
Me gustaría que pasáramos más tiempo juntos. | I'd like us to spend more time together.
`,
    R: [
      { t: 'Una reclamación', x: `El verano pasado reservé una habitación con vistas al mar en un hotel de Alicante. Cuando llegué, me dieron una habitación interior. Pedí que me cambiaran de habitación, pero el recepcionista me dijo que no quedaba ninguna libre. Me extrañó que no me hubieran avisado antes. Exigí que me devolvieran la diferencia de precio y les pedí que lo pusieran por escrito. Al final, el encargado me ofreció una noche gratis. No fue lo que yo esperaba, pero acepté.`, q: `¿Qué había reservado? | Una habitación interior ; *Una habitación con vistas al mar ; Un apartamento
¿Qué pidió primero? | *Que le cambiaran de habitación ; Una noche gratis ; Hablar con la policía
¿Qué le ofreció el encargado? | *Una noche gratis ; Todo el dinero ; Nada` },
      { t: 'Lo que mis padres querían', x: `Mis padres querían que fuera médica, como mi abuelo. Me pedían que estudiara ciencias y que sacara buenas notas para entrar en la facultad. Yo, en cambio, soñaba con que me dejaran estudiar Bellas Artes. Durante años hice lo que esperaban de mí, como si mi opinión no importara. A los veinticinco años, dejé Medicina en tercero. Al principio no lo entendieron, pero hoy mi padre tiene uno de mis cuadros en su despacho.`, q: `¿Qué querían sus padres que fuera? | Pintora ; *Médica ; Profesora
¿Qué quería estudiar ella? | Ciencias ; *Bellas Artes ; Medicina
¿Qué pasó al final? | Terminó Medicina ; *Dejó Medicina y su padre tiene uno de sus cuadros ; Sus padres no le hablan` },
      { t: 'Ojalá', x: `Ojalá tuviera más tiempo para leer. Ojalá viviera más cerca de mis padres. Ojalá supiera tocar la guitarra como mi hermano. A veces pienso en todo lo que me gustaría que fuera diferente y me doy cuenta de que muchas cosas dependen de mí. Así que este año me he propuesto una cosa: dejar de decir "ojalá" y empezar a hacer. Ya me he apuntado a clases de guitarra.`, q: `¿Qué le gustaría saber hacer? | Cocinar ; *Tocar la guitarra ; Bailar
¿De qué se da cuenta? | De que no tiene tiempo ; *De que muchas cosas dependen de él ; De que es feliz
¿Qué ha hecho este año? | Mudarse cerca de sus padres ; *Apuntarse a clases de guitarra ; Leer más` }
    ],
    write: 'Write a formal complaint email about a bad experience (hotel, flight, rental) explaining what you asked for and what you expected (pedí que…, esperaba que…, quisiera que…). Then write five "ojalá" wishes with the imperfect subjunctive.',
    talk: 'You are the manager (encargado) of a hotel in Alicante receiving a complaint from the learner. Be polite but defensive; make them use the imperfect subjunctive to explain what they asked for and expected.',
    res: [R.slcInt(), R.juan(), R.notes('Advanced')]
  });

  U({
    id: 'b2-hipotesis', title: 'Si tuviera…: hipótesis', goal: ['Make hypotheses about the present and the past', 'Use second and third conditional sentences', 'Express regret and imagine alternatives'],
    grammar: {
      t: 'Conditional sentences (types 2 and 3)',
      h: `<table><tr><th>Type</th><th>si-clause</th><th>result</th></tr>
<tr><td>1 real</td><td>si + presente: <i>Si tengo tiempo,</i></td><td>futuro / presente: <i>te ayudo / ayudaré.</i></td></tr>
<tr><td>2 unlikely / unreal present</td><td>si + imp. subj.: <i>Si tuviera tiempo,</i></td><td>condicional: <i>te ayudaría.</i></td></tr>
<tr><td>3 unreal past</td><td>si + pluscuamperfecto de subj.: <i>Si hubiera tenido tiempo,</i></td><td>condicional compuesto: <i>te habría ayudado.</i></td></tr></table>
<p><b>Pluscuamperfecto de subjuntivo</b>: hubiera/hubiese + participle. <b>Condicional compuesto</b>: habría + participle. In speech, Spaniards often use <i>hubiera</i> in both halves: <i>Si lo hubiera sabido, no hubiera venido.</i></p>
<p>Mixed: past condition, present result: <i>Si hubiera estudiado medicina, ahora sería médico.</i></p>
<p>Never use the conditional after si: ✗ <s>si tendría</s>. Alternatives: <b>de + infinitive</b> (<i>De haberlo sabido…</i>), <b>en caso de que + subj.</b>, <b>a no ser que</b>. Regret: <i>Ojalá no hubiera dicho eso. ¡Quién lo hubiera dicho!</i></p>`
    },
    conj: { t: 'pluscsubj', v: ['tener', 'hacer', 'decir', 'saber', 'ir'] },
    V: `
la hipótesis | hypothesis | Es solo una {hipótesis}. | It's only a hypothesis.
suponer | to suppose | {Supongamos} que ganas la lotería. | Let's suppose you win the lottery.
imaginarse | to imagine | {Imagínate} que vivieras en una isla. | Imagine you lived on an island.
arrepentirse de | to regret | Me {arrepiento de} no haber estudiado más. | I regret not having studied more.
el arrepentimiento | regret | No siento ningún {arrepentimiento}. | I feel no regret.
la oportunidad | opportunity | Perdí una gran {oportunidad}. | I missed a great opportunity.
aprovechar | to make the most of | Si hubiera {aprovechado} el tiempo… | If I had made the most of the time…
el destino | fate; destination | Fue el {destino}. | It was fate.
la casualidad | coincidence | ¡Qué {casualidad}! | What a coincidence!
de haberlo sabido | had I known | {De haberlo sabido}, no habría venido. | Had I known, I wouldn't have come.
en ese caso | in that case | {En ese caso}, te llamaría. | In that case, I'd call you.
a lo mejor | maybe | {A lo mejor} me habría ido mejor. | Maybe it would have gone better for me.
tomar una decisión | to make a decision | Fue difícil {tomar una decisión}. | It was hard to make a decision.
cambiar de rumbo | to change course | Decidí {cambiar de rumbo}. | I decided to change course.
el remordimiento | remorse | Tengo {remordimientos}. | I have regrets.
¡quién lo hubiera dicho! | who would have thought! | ¡{Quién lo hubiera dicho}! | Who would have thought it!
meter la pata | to put your foot in it | {Metí la pata} con mi jefe. | I put my foot in it with my boss.
si fuera tú | if I were you | {Si fuera tú}, lo pensaría. | If I were you, I'd think about it.
si pudiera | if I could | {Si pudiera}, viajaría más. | If I could, I'd travel more.
si tuviera | if I had | {Si tuviera} dinero, me compraría una casa. | If I had money, I'd buy a house.
habría | would have | {Habría} aceptado el trabajo. | I would have accepted the job.
hubiera | had (subj.) | Si {hubiera} sabido… | If I had known…
la lotería | lottery | Si me tocara la {lotería}… | If I won the lottery…
el millonario / la millonaria | millionaire | Si fuera {millonario}, donaría mucho. | If I were a millionaire, I'd donate a lot.
viajar en el tiempo | to time-travel | Si pudiera {viajar en el tiempo}… | If I could travel in time…
el superpoder | superpower | ¿Qué {superpoder} elegirías? | Which superpower would you choose?
invisible | invisible | Si fuera {invisible}, me colaría en conciertos. | If I were invisible, I'd sneak into concerts.
la vida | life | Mi {vida} sería muy distinta. | My life would be very different.
distinto / distinta | different | Todo habría sido {distinto}. | Everything would have been different.
el camino | path, way | Elegí otro {camino}. | I chose another path.
perder el tren | to miss the train | Si no hubiera {perdido el tren}… | If I hadn't missed the train…
conocer a alguien | to meet someone | No te habría {conocido}. | I wouldn't have met you.
la carrera | degree; career | Si hubiera estudiado otra {carrera}… | If I had studied another degree…
la elección | choice | Fue la mejor {elección} de mi vida. | It was the best choice of my life.
elegir | to choose | Si pudiera {elegir}, viviría en Cádiz. | If I could choose, I'd live in Cádiz.
`,
    D: `
Si ___ (tener, yo) dinero, me compraría una casa en la playa. | tuviera|tuviese | If I had money, I would buy a house on the beach.
Si fuera tú, no lo ___ (hacer). | haría | If I were you, I wouldn't do it.
Si ___ (estudiar, tú) más, habrías aprobado. | hubieras estudiado|hubieses estudiado | If you had studied more, you would have passed.
Si me lo hubieras dicho, te ___ ___ (ayudar, yo). | habría ayudado|hubiera ayudado | If you had told me, I would have helped you.
Si llueve mañana, ___ (quedarse, nosotros) en casa. | nos quedaremos|nos quedamos | If it rains tomorrow, we'll stay at home.
Si hubiera aceptado aquel trabajo, ahora ___ (vivir, yo) en Chile. | viviría | If I had accepted that job, I would now be living in Chile.
Ojalá no ___ ___ (decir, yo) eso. | hubiera dicho|hubiese dicho | I wish I hadn't said that.
¿Qué harías si ___ (poder) viajar en el tiempo? | pudieras|pudieses | What would you do if you could travel in time?
Si ___ (saber, yo) cocinar, abriría un restaurante. | supiera|supiese | If I knew how to cook, I'd open a restaurant.
Si no ___ ___ (perder, yo) el tren, no te habría conocido. | hubiera perdido|hubiese perdido | If I hadn't missed the train, I wouldn't have met you.
___ haberlo sabido, no habría venido. | de | Had I known, I wouldn't have come.
Si ___ (ser, yo) invisible, me colaría en el cine. | fuera|fuese | If I were invisible, I'd sneak into the cinema.
Si hubiéramos salido antes, ___ ___ (llegar) a tiempo. | habríamos llegado|hubiéramos llegado | If we had left earlier, we would have arrived on time.
Si ___ (vivir, vosotros) en España, ¿dónde viviríais? | vivierais|vivieseis | If you lived in Spain, where would you live?
Si ___ (haber) más trenes, usaría menos el coche. | hubiera|hubiese | If there were more trains, I'd use the car less.
Me ___ (gustar) vivir en el campo si tuviera trabajo allí. | gustaría | I'd like to live in the countryside if I had work there.
Si hubieras venido, te lo ___ ___ (pasar) genial. | habrías pasado|hubieras pasado | If you had come, you would have had a great time.
Si me ___ (tocar) la lotería, dejaría de trabajar. | tocara|tocase | If I won the lottery, I'd stop working.
Me arrepiento ___ no haber viajado más. | de | I regret not having travelled more.
Si ___ ___ (estudiar, yo) medicina, ahora sería médico. | hubiera estudiado|hubiese estudiado | If I had studied medicine, I'd be a doctor now.
`,
    S: `
Si tuviera más tiempo, haría un voluntariado. | If I had more time, I'd volunteer.
Si hubiera sabido que venías, habría hecho una paella. | If I had known you were coming, I'd have made a paella.
¿Qué harías si te tocara la lotería? | What would you do if you won the lottery?
Si no hubiera perdido el tren, no te habría conocido. | If I hadn't missed the train, I wouldn't have met you.
Ojalá hubiera aprendido español de niño. | I wish I had learned Spanish as a child.
De haberlo sabido, no habría venido. | Had I known, I wouldn't have come.
Si hubiera estudiado medicina, ahora sería médica. | If I had studied medicine, I'd be a doctor now.
No me arrepiento de nada. | I don't regret anything.
`,
    R: [
      { t: 'El tren perdido', x: `Hace diez años perdí un tren en la estación de Chamartín. Si no lo hubiera perdido, no habría tenido que esperar dos horas en la cafetería, y no habría conocido a Elena, que también había perdido el suyo. Si aquel día hubiera llegado cinco minutos antes, mi vida sería completamente diferente: seguramente no viviría en Madrid ni tendría dos hijos madrileños. A veces pienso: ¿y si hubiera cogido un taxi? Pero no me arrepiento de nada.`, q: `¿Dónde perdió el tren? | En Atocha ; *En Chamartín ; En Sevilla
¿A quién conoció? | A un taxista ; *A Elena ; A su jefe
¿Se arrepiente? | Sí, mucho ; *No, de nada ; Un poco` },
      { t: 'Encuesta: ¿qué cambiarías?', x: `Preguntamos a varias personas qué cambiarían de su vida si pudieran. Teresa, 52: "Si pudiera volver atrás, habría estudiado lo que me gustaba, no lo que me dijeron mis padres". Óscar, 34: "Si tuviera valor, dejaría mi trabajo y abriría un bar en la playa". Nuria, 70: "No cambiaría nada. Si no hubiera cometido mis errores, no sería quien soy". Y Leo, 19: "Si hubiera sabido lo difícil que era la carrera, habría estudiado más en el instituto".`, q: `¿Qué habría hecho Teresa? | Viajar más ; *Estudiar lo que le gustaba ; Casarse antes
¿Qué haría Óscar si tuviera valor? | Volvería a estudiar ; *Abriría un bar en la playa ; Se mudaría
¿Qué opina Nuria? | Que cambiaría todo ; *Que sus errores la hicieron quien es ; Que tuvo mala suerte` },
      { t: 'Si los animales hablaran', x: `¿Qué pasaría si los animales pudieran hablar? Probablemente, los perros nos dirían que los dejáramos salir más a menudo y los gatos se quejarían de todo. Las vacas nos preguntarían por qué nos bebemos su leche. Si los animales hablaran, seguramente cambiaríamos nuestra forma de comer y de tratar la naturaleza. Quizás, si los hubiéramos escuchado antes, no habríamos destruido tantos bosques.`, q: `¿Qué dirían los perros? | Que tienen hambre ; *Que los dejáramos salir más ; Que quieren dormir
¿Qué harían los gatos? | Dormirían ; *Se quejarían de todo ; Cantarían
¿Qué cambiaríamos si los animales hablaran? | Nada ; *Nuestra forma de comer y de tratar la naturaleza ; El idioma` }
    ],
    write: 'Write about a decision or coincidence that changed your life, and how things would be different now if it hadn\'t happened (si no hubiera…, ahora…). Then answer: what would you do if you could live anywhere?',
    talk: 'You are a philosophical Spanish friend late at night on a terrace. Ask the learner hypothetical questions (¿qué harías si…?, ¿qué habría pasado si…?) and answer some yourself. Correct conditional structures.',
    res: [R.slcInt(), R.juan(), R.hh()]
  });

  U({
    id: 'b2-empresa', title: 'El mundo profesional', goal: ['Discuss work, companies and the economy in depth', 'Run meetings: propose, agree, disagree, negotiate', 'Use deber vs deber de, tener que, haber que and their tenses'],
    grammar: {
      t: 'Obligation and probability verbs in all tenses; negotiation language',
      h: `<p><b>tener que</b> (strong personal obligation), <b>deber</b> (moral obligation, advice), <b>haber que</b> (impersonal: hay que, habrá que, habría que, hubo que), <b>deber de</b> (probability): <i>Debe de estar en una reunión</i> = he's probably in a meeting.</p>
<p>In all tenses: <i>Tuvimos que despedir a dos personas. Habría que revisar el presupuesto. Deberíamos haberlo previsto</i> (we should have…).</p>
<p><b>Meetings</b>: proposing (<i>Propongo que…, ¿Qué os parece si…?, Sería conveniente…</i>), agreeing (<i>Estoy totalmente de acuerdo, Sin duda</i>), disagreeing politely (<i>Entiendo tu punto de vista, pero…, No lo veo claro</i>), negotiating (<i>Estaríamos dispuestos a… siempre que…, ¿Y si…?</i>), concluding (<i>Entonces, quedamos en que…</i>).</p>`
    },
    V: `
la reunión | meeting | La {reunión} empieza a las diez. | The meeting starts at ten.
el orden del día | agenda | ¿Qué hay en el {orden del día}? | What's on the agenda?
el acta | minutes | ¿Quién redacta el {acta}? | Who's taking the minutes?
el presupuesto | budget | Hemos superado el {presupuesto}. | We've gone over budget.
los beneficios | profits | Los {beneficios} han aumentado. | Profits have increased.
las pérdidas | losses | La empresa tuvo {pérdidas}. | The company made losses.
la facturación | turnover | La {facturación} creció un diez por ciento. | Turnover grew by ten percent.
el/la cliente/a | client | Es nuestro mejor {cliente}. | He's our best client.
el proveedor / la proveedora | supplier | Cambiamos de {proveedor}. | We changed supplier.
la competencia | competition | La {competencia} es feroz. | The competition is fierce.
el mercado | market | Queremos entrar en el {mercado} latinoamericano. | We want to enter the Latin American market.
la estrategia | strategy | Necesitamos otra {estrategia}. | We need another strategy.
el objetivo | target | Hemos cumplido los {objetivos}. | We've met our targets.
la plantilla | staff, workforce | La {plantilla} es de cien personas. | The workforce is a hundred people.
el despido | dismissal | Hubo varios {despidos}. | There were several dismissals.
contratar | to hire | Vamos a {contratar} a dos personas. | We're going to hire two people.
el sindicato | trade union | El {sindicato} convocó una huelga. | The union called a strike.
la negociación | negotiation | La {negociación} fue difícil. | The negotiation was difficult.
negociar | to negotiate | Hay que {negociar} el precio. | We have to negotiate the price.
el acuerdo | agreement | Llegamos a un {acuerdo}. | We reached an agreement.
llegar a un acuerdo | to reach an agreement | Por fin {llegamos a un acuerdo}. | We finally reached an agreement.
la propuesta | proposal | Te envío la {propuesta}. | I'm sending you the proposal.
dispuesto / dispuesta a | willing to | Estamos {dispuestos a} bajar el precio. | We're willing to lower the price.
el plazo de entrega | delivery time | El {plazo de entrega} es de un mes. | The delivery time is one month.
la fecha límite | deadline | La {fecha límite} es el viernes. | The deadline is Friday.
el informe | report | Tengo que terminar el {informe}. | I have to finish the report.
la empresa emergente | start-up | Trabajo en una {empresa emergente}. | I work at a start-up.
el emprendedor / la emprendedora | entrepreneur | Es una {emprendedora} de éxito. | She's a successful entrepreneur.
invertir | to invest | Van a {invertir} un millón. | They're going to invest a million.
la inversión | investment | Es una buena {inversión}. | It's a good investment.
rentable | profitable | El proyecto no es {rentable}. | The project isn't profitable.
la crisis | crisis | La {crisis} afectó a muchas empresas. | The crisis affected many companies.
la productividad | productivity | Queremos mejorar la {productividad}. | We want to improve productivity.
el teletrabajo | remote work | Ofrecemos {teletrabajo}. | We offer remote work.
la conciliación | work–life balance | La {conciliación} es difícil en España. | Work–life balance is difficult in Spain.
deber de | must (probability) | {Debe de} estar en una reunión. | He must be in a meeting.
habría que | one would have to | {Habría que} revisar los costes. | We'd have to review the costs.
deberíamos haber | we should have | {Deberíamos haber} empezado antes. | We should have started earlier.
quedar en | to agree to | {Quedamos en} enviar el informe el lunes. | We agreed to send the report on Monday.
la videoconferencia | video conference | Tenemos una {videoconferencia} con Londres. | We have a video call with London.
`,
    D: `
No contesta; ___ de estar en una reunión. (probability) | debe | He's not answering; he must be in a meeting.
El año pasado ___ que despedir a dos personas. (tener, nosotros) | tuvimos | Last year we had to lay off two people.
___ que revisar el presupuesto. (haber, conditional) | habría | We'd have to review the budget.
___ haberlo previsto. (should have, nosotros) | deberíamos | We should have foreseen it.
El mes que viene ___ que contratar a alguien. (haber, future) | habrá | Next month we'll have to hire someone.
Estamos dispuestos ___ bajar el precio. | a | We're willing to lower the price.
Llegamos ___ un acuerdo. | a | We reached an agreement.
Quedamos ___ enviar el informe el lunes. | en | We agreed to send the report on Monday.
Propongo que ___ (aplazar, nosotros) la reunión. | aplacemos | I propose we postpone the meeting.
¿Qué os parece si ___ (empezar, nosotros) ya? | empezamos | How about we start now?
Sería conveniente que ___ (revisar, vosotros) los números. | revisarais|revisaseis | It would be advisable for you to check the numbers.
Estaríamos dispuestos a firmar siempre que ___ (bajar, ustedes) el precio. | bajen | We'd be willing to sign as long as you lower the price.
El proyecto no es ___. (profitable) | rentable | The project isn't profitable.
La ___ es de cien personas. (workforce) | plantilla | The workforce is a hundred people.
La empresa tuvo ___ este año. (losses) | pérdidas | The company made losses this year.
Han aumentado los ___. (profits) | beneficios | Profits have increased.
La fecha ___ es el viernes. | límite | The deadline is Friday.
Hubo que ___ (cancelar) el proyecto. | cancelar | The project had to be cancelled.
Entiendo tu punto de ___, pero no estoy de acuerdo. | vista | I understand your point of view, but I disagree.
Entonces, quedamos ___ que tú llamas al cliente. | en | So, we agreed that you'll call the client.
`,
    S: `
Entiendo tu punto de vista, pero no lo veo claro. | I understand your point of view, but I'm not convinced.
¿Qué os parece si aplazamos la reunión al jueves? | How about we postpone the meeting to Thursday?
Estaríamos dispuestos a bajar el precio siempre que el pedido sea mayor. | We'd be willing to lower the price as long as the order is larger.
Deberíamos haber previsto este problema. | We should have foreseen this problem.
Habría que revisar los costes antes de decidir. | We'd have to review the costs before deciding.
Entonces quedamos en que tú envías la propuesta el lunes. | So we agreed that you'll send the proposal on Monday.
El jefe no contesta; debe de estar reunido. | The boss isn't answering; he must be in a meeting.
La conciliación sigue siendo un reto en España. | Work–life balance is still a challenge in Spain.
`,
    R: [
      { t: 'Reunión de equipo', x: `—Bueno, empezamos. El primer punto del orden del día es el presupuesto del proyecto de Valencia. Hemos gastado un veinte por ciento más de lo previsto.
—Deberíamos haberlo previsto. Los costes de material subieron mucho en primavera.
—De acuerdo, pero ahora hay que buscar una solución. Propongo que negociemos con el proveedor.
—Me parece bien, aunque dudo que acepten bajar el precio.
—¿Y si les ofrecemos un contrato más largo a cambio?
—Podría funcionar. Entonces quedamos en que Laura llama al proveedor esta semana.`, q: `¿Cuánto más han gastado? | Un diez por ciento ; *Un veinte por ciento ; El doble
¿Por qué subieron los costes? | Por los sueldos ; *Por el material ; Por el transporte
¿En qué quedan al final? | En cancelar el proyecto ; *En que Laura llamará al proveedor ; En pedir más dinero` },
      { t: 'La conciliación en España', x: `En España, muchas empresas todavía tienen jornada partida: se trabaja por la mañana, se para dos horas para comer y se vuelve por la tarde hasta las siete o las ocho. Para muchas familias esto hace muy difícil conciliar la vida laboral y familiar. Cada vez más empresas ofrecen jornada continua, horarios flexibles o teletrabajo. Los expertos creen que habría que adaptar los horarios a los del resto de Europa, aunque reconocen que es un cambio cultural profundo.`, q: `¿Qué es la jornada partida? | Trabajar solo por la mañana ; *Trabajar mañana y tarde con una pausa larga para comer ; Trabajar desde casa
¿Por qué es un problema? | Se gana menos ; *Hace difícil conciliar la vida laboral y familiar ; Es ilegal
¿Qué creen los expertos? | Que todo está bien ; *Que habría que adaptar los horarios a los de Europa ; Que hay que trabajar más` },
      { t: 'De la idea a la empresa', x: `Hace cuatro años, Irene y Pau dejaron sus trabajos en Barcelona para montar una empresa emergente de bicicletas eléctricas de alquiler. Al principio tuvieron que invertir todos sus ahorros y durante dos años no tuvieron beneficios. "Hubo momentos en que pensamos en dejarlo", confiesa Irene. Hoy tienen una plantilla de treinta personas y están en seis ciudades. Su consejo: "Si tienes una idea, pruébala, pero ten un plan B".`, q: `¿Qué tipo de empresa crearon? | Una tienda de ropa ; *Bicicletas eléctricas de alquiler ; Un restaurante
¿Cuánto tiempo tardaron en tener beneficios? | Seis meses ; *Más de dos años ; Nunca
¿Cuál es su consejo? | No arriesgarse ; *Probar la idea pero tener un plan B ; Pedir un préstamo` }
    ],
    write: 'Write the minutes (acta) of an imagined meeting: the problems discussed, the proposals made, who disagreed and what was agreed (quedamos en que…). Use tener que, hay que / habría que, deber and deber de.',
    talk: 'You are a tough but fair supplier negotiating a contract with the learner (a buyer for a Dutch company) by video call. Negotiate price, delivery dates and conditions; use polite disagreement and siempre que.',
    res: [R.slcAdv(), R.hh('economía'), R.elpais()]
  });
})();
