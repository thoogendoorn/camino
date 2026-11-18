/* B2 · Avanzado (part 2) */
(function () {
  const R = RES, U = CAMINO.unit('B2');

  U({
    id: 'b2-indirecto', title: 'Estilo indirecto: dijo que…', goal: ['Report what other people said, asked and ordered', 'Shift tenses and time expressions in reported speech', 'Use a range of reporting verbs'],
    grammar: {
      t: 'Reported speech (estilo indirecto)',
      h: `<p>With a present reporting verb (<i>dice que</i>) tenses don't change. With a past one (<i>dijo que, me contó que</i>) they shift:</p>
<table><tr><th>Direct</th><th>Reported (past)</th></tr><tr><td>presente: "Estoy cansado"</td><td>imperfecto: dijo que estaba cansado</td></tr>
<tr><td>pret. perfecto / indefinido: "He / Fui…"</td><td>pluscuamperfecto: dijo que había ido</td></tr><tr><td>futuro: "Vendré"</td><td>condicional: dijo que vendría</td></tr>
<tr><td>imperativo / pres. subj.: "Ven"</td><td>imp. subj.: me dijo que fuera</td></tr><tr><td>imperfecto, condicional, pluscuamperfecto</td><td>no change</td></tr></table>
<p>Questions: <b>me preguntó si</b> (yes/no) / <b>me preguntó dónde, cuándo, qué…</b> <i>Me preguntó si quería café.</i></p>
<p>Time and place shift too: hoy → <b>aquel día</b>, mañana → <b>al día siguiente</b>, ayer → <b>el día anterior</b>, aquí → <b>allí</b>, este → <b>aquel</b>, venir → <b>ir</b>, traer → <b>llevar</b>.</p>
<p>Reporting verbs: <b>comentar, explicar, contar, asegurar, reconocer, prometer, advertir, recomendar, pedir, sugerir, negar, confesar, añadir, insistir en</b>.</p>`
    },
    V: `
comentar | to remark, mention | {Comentó} que estaba cansada. | She mentioned she was tired.
asegurar | to assure | Me {aseguró} que vendría. | He assured me he would come.
reconocer | to admit | {Reconoció} que se había equivocado. | He admitted he had made a mistake.
advertir | to warn | Me {advirtió} que tuviera cuidado. | She warned me to be careful.
negar | to deny | {Negó} haberlo hecho. | He denied having done it.
confesar | to confess | Me {confesó} que estaba enamorado. | He confessed he was in love.
añadir | to add | {Añadió} que no había prisa. | She added that there was no hurry.
explicar | to explain | Nos {explicó} cómo funcionaba. | He explained how it worked.
contar | to tell | Me {contó} que se casaba. | She told me she was getting married.
prometer | to promise | {Prometió} que lo arreglaría. | He promised he would fix it.
sugerir | to suggest | {Sugirió} que fuéramos en tren. | She suggested we go by train.
anunciar | to announce | {Anunció} que dejaba la empresa. | He announced he was leaving the company.
responder | to reply | {Respondió} que no lo sabía. | She replied she didn't know.
preguntar si | to ask whether | Me {preguntó si} quería café. | He asked me if I wanted coffee.
quejarse de que | to complain that | Se {quejó de que} nadie le ayudaba. | She complained that nobody helped her.
al día siguiente | the next day | Dijo que vendría {al día siguiente}. | He said he'd come the next day.
el día anterior | the day before | Me contó que {el día anterior} había llovido. | She told me it had rained the day before.
aquel día | that day | {Aquel día} no fue a trabajar. | That day he didn't go to work.
allí | there | Dijo que {allí} hacía frío. | She said it was cold there.
según | according to | {Según} ella, todo está bien. | According to her, everything is fine.
por lo visto | apparently | {Por lo visto}, se han separado. | Apparently, they've split up.
al parecer | apparently | {Al parecer}, habrá huelga. | Apparently, there'll be a strike.
el chisme / el cotilleo | gossip | Me encantan los {cotilleos}. | I love gossip.
cotillear | to gossip | Les gusta {cotillear} en la oficina. | They like gossiping at the office.
el rumor | rumour | Corre el {rumor} de que cierran. | There's a rumour they're closing.
la declaración | statement | El ministro hizo unas {declaraciones}. | The minister made a statement.
afirmar | to state | {Afirmó} que la economía mejoraría. | He stated the economy would improve.
desmentir | to deny (a report) | El gobierno {desmintió} la noticia. | The government denied the news.
el traslado | transfer | Pidió el {traslado} a Bilbao. | He asked for a transfer to Bilbao.
el mensaje | message | Me dejó un {mensaje} diciendo que llegaría tarde. | She left me a message saying she'd be late.
el portavoz / la portavoz | spokesperson | El {portavoz} dijo que no habría cambios. | The spokesperson said there would be no changes.
la entrevista | interview | En la {entrevista} explicó sus planes. | In the interview she explained her plans.
textualmente | word for word | Me dijo {textualmente}: "no vuelvas". | He told me word for word: "don't come back".
repetir | to repeat | Me {repitió} que no era culpa mía. | She repeated that it wasn't my fault.
recordar | to remind | Me {recordó} que tenía cita. | He reminded me I had an appointment.
`,
    D: `
"Estoy cansada." → Dijo que ___ cansada. | estaba | "I'm tired." → She said she was tired.
"Vendré mañana." → Dijo que ___ al día siguiente. | vendría | He said he would come the next day.
"He perdido las llaves." → Dijo que ___ ___ las llaves. | había perdido | She said she had lost the keys.
"Llámame." → Me pidió que la ___. | llamara|llamase | She asked me to call her.
"¿Tienes hambre?" → Me preguntó ___ tenía hambre. | si | He asked me if I was hungry.
"¿Dónde vives?" → Me preguntó dónde ___. | vivía | She asked me where I lived.
"Fui a Roma." → Me contó que ___ ___ a Roma. | había ido|fue | He told me he had gone to Rome.
"No lo hagas." → Me advirtió que no lo ___. | hiciera|hiciese | She warned me not to do it.
"Lo arreglaré." → Prometió que lo ___. | arreglaría | He promised he would fix it.
"Me he equivocado." → Reconoció que se ___ ___. | había equivocado | He admitted he had made a mistake.
"Id en tren." → Sugirió que ___ en tren. | fuéramos|fuésemos | She suggested we go by train.
"Hoy no puedo." → Dijo que aquel día no ___. | podía | He said he couldn't that day.
"Ayer llovió." → Dijo que el día ___ había llovido. | anterior | She said it had rained the day before.
"Aquí hace frío." → Dijo que ___ hacía frío. | allí | He said it was cold there.
"Estoy cansada." → Dice que ___ cansada. (present report) | está | She says she is tired.
"Trae vino." → Me pidió que ___ vino. | llevara|llevase | He asked me to bring wine.
"¿Has visto a Juan?" → Me preguntó si ___ ___ a Juan. | había visto | She asked me if I had seen Juan.
"Estoy enamorado." → Me confesó que ___ enamorado. | estaba | He confessed he was in love.
Según ___, todo está bien. (her) | ella | According to her, everything is fine.
Al ___, habrá huelga. (apparently) | parecer | Apparently, there will be a strike.
`,
    S: `
Me dijo que llegaría tarde. | He told me he would arrive late.
Le pregunté si quería venir con nosotros. | I asked her if she wanted to come with us.
Por lo visto, se han separado. | Apparently, they've split up.
Me pidió que no se lo contara a nadie. | She asked me not to tell anyone.
Reconoció que se había equivocado. | He admitted he had made a mistake.
Según el periódico, mañana habrá huelga. | According to the newspaper, there will be a strike tomorrow.
Me aseguró que lo tendría listo al día siguiente. | He assured me he'd have it ready the next day.
El portavoz negó que hubiera problemas. | The spokesperson denied there were problems.
`,
    R: [
      { t: 'Cotilleos de la oficina', x: `Ayer en la máquina de café, Lola me contó que Andrés había pedido un traslado a la oficina de Bilbao. Me dijo que se lo había confesado a ella el día anterior y me pidió que no se lo dijera a nadie. Le pregunté por qué quería irse, y me explicó que su pareja había encontrado trabajo allí. Al día siguiente, el propio Andrés anunció en la reunión que se iría en marzo. Por lo visto, ¡ya lo sabía toda la oficina!`, q: `¿Qué había pedido Andrés? | Un aumento ; *Un traslado a Bilbao ; Vacaciones
¿Por qué quería irse? | *Su pareja había encontrado trabajo allí ; No le gustaba Lola ; Hace mejor tiempo
¿Cuándo se irá? | *En marzo ; Mañana ; Nunca` },
      { t: 'La rueda de prensa', x: `En la rueda de prensa de ayer, la ministra de Vivienda anunció que el gobierno construiría cien mil viviendas en los próximos cinco años. Aseguró que la mitad serían de alquiler asequible para jóvenes. Cuando un periodista le preguntó de dónde saldría el dinero, respondió que se usarían fondos europeos. Sin embargo, reconoció que los plazos eran ambiciosos y añadió que dependería de la colaboración de las comunidades autónomas.`, q: `¿Cuántas viviendas anunció? | Diez mil ; *Cien mil ; Un millón
¿Para quién serían la mitad? | Para mayores ; *Para jóvenes, de alquiler asequible ; Para extranjeros
¿Qué reconoció la ministra? | Que no había dinero ; *Que los plazos eran ambiciosos ; Que era imposible` },
      { t: 'Un malentendido', x: `Mi madre me llamó el sábado y me dijo que vendría a comer el domingo con "un amigo". Le pregunté quién era y me contestó que ya lo vería. Me pidió que preparara mi famosa lasaña. El domingo apareció con… ¡su nuevo novio! Más tarde me confesó que no me lo había contado antes porque tenía miedo de mi reacción. Le aseguré que me alegraba mucho por ella. Y era verdad.`, q: `¿Qué le pidió su madre que preparara? | Paella ; *Lasaña ; Nada
¿Quién era "el amigo"? | Un vecino ; *Su nuevo novio ; Un compañero de trabajo
¿Por qué no se lo había contado antes? | Lo había olvidado ; *Tenía miedo de su reacción ; Era un secreto del novio` }
    ],
    write: 'Report a real or invented conversation (at least ten lines) using dijo que, me preguntó si, me pidió que, me contó que, reconoció que, me advirtió que, with the correct tense and time changes.',
    talk: 'You are a gossipy Spanish coworker. Tell the learner some (invented) office news in direct speech, then ask them to report it back to a third person in indirect speech. Correct tense shifts.',
    res: [R.slcAdv(), R.hh('noticias'), R.practica()]
  });

  U({
    id: 'b2-se', title: 'Los usos de "se"', goal: ['Use impersonal se and passive se', 'Express accidents with se me ha…', 'Recognise the passive voice with ser and estar + participle'],
    grammar: {
      t: 'se impersonal, se pasivo, se accidental, and the passive with ser',
      h: `<p><b>Impersonal se</b> (people in general): <i>En España <b>se cena</b> tarde. Aquí <b>se vive</b> bien.</i> With people as object: <i>Se busca a los responsables.</i></p>
<p><b>Passive se</b> — the verb agrees with the thing: <i>Se vende piso. Se venden pisos. Se habla español.</i></p>
<p><b>Accidental se</b> — something happened "to" someone, not on purpose: <b>se + indirect pronoun + verb</b>: <i>Se me ha caído el vaso. Se nos olvidaron las entradas. Se le rompieron las gafas.</i> The verb agrees with the thing.</p>
<p><b>Passive with ser</b> (formal, news, history): <i>El puente <b>fue construido</b> por los romanos.</i> The participle agrees. <b>estar + participle</b> = resulting state: <i>La puerta está cerrada.</i></p>
<p>Also: reflexive (<i>se ducha</i>), reciprocal (<i>se quieren</i>), pronominal verbs (<i>irse, quedarse, morirse</i> — nuance of completion), and <i>se</i> replacing <i>le</i> before lo/la.</p>`
    },
    V: `
se me ha olvidado | I've forgotten | {Se me ha olvidado} tu nombre. | I've forgotten your name.
se me ha caído | I've dropped | {Se me ha caído} el móvil. | I've dropped my phone.
se me ha roto | it's broken on me | {Se me ha roto} la pantalla. | My screen has broken.
se me ha perdido | I've lost | {Se me ha perdido} el pasaporte. | I've lost my passport.
se me ha acabado | I've run out of | {Se me ha acabado} el café. | I've run out of coffee.
se me ha ocurrido | it's occurred to me | {Se me ha ocurrido} una idea. | I've had an idea.
se me ha quemado | I've burned | {Se me ha quemado} la cena. | I've burned the dinner.
se me ha escapado | it's slipped out / escaped | {Se me ha escapado} el perro. | My dog has got out.
se me da bien | I'm good at | {Se me dan bien} los idiomas. | I'm good at languages.
se vende | for sale | {Se vende} piso céntrico. | Central flat for sale.
se alquila | for rent | {Se alquila} habitación. | Room for rent.
se prohíbe | it is forbidden | {Se prohíbe} fumar. | Smoking is forbidden.
se ruega | please (formal notices) | {Se ruega} silencio. | Silence, please.
se necesita | needed | {Se necesita} camarero. | Waiter needed.
construir | to build | Fue {construido} en el siglo XVI. | It was built in the 16th century.
fundar | to found | La ciudad fue {fundada} por los romanos. | The city was founded by the Romans.
descubrir | to discover | América fue {descubierta} por los europeos en 1492. | America was discovered by Europeans in 1492.
inaugurar | to inaugurate | El museo fue {inaugurado} en 1997. | The museum was opened in 1997.
diseñar | to design | Fue {diseñado} por Gaudí. | It was designed by Gaudí.
pintar | to paint | El cuadro fue {pintado} por Velázquez. | The painting was painted by Velázquez.
detener | to arrest | El ladrón fue {detenido}. | The thief was arrested.
el acueducto | aqueduct | El {acueducto} de Segovia es romano. | The Segovia aqueduct is Roman.
la catedral | cathedral | La {catedral} fue construida en tres siglos. | The cathedral was built over three centuries.
el monumento | monument | Es el {monumento} más visitado. | It's the most visited monument.
el siglo | century | En el {siglo} XV. | In the 15th century.
la obra | work (of art); building works | Es una {obra} maestra. | It's a masterpiece.
el patrimonio | heritage | Es {patrimonio} de la humanidad. | It's a World Heritage site.
restaurar | to restore | Está siendo {restaurado}. | It's being restored.
estar cerrado / cerrada | to be closed | El museo {está cerrado}. | The museum is closed.
estar prohibido | to be forbidden | {Está prohibido} hacer fotos. | Taking photos is forbidden.
irse | to leave, go away | Me {voy}. | I'm off.
quedarse | to stay | Me {quedo} en casa. | I'm staying at home.
dormirse | to fall asleep | Me {dormí} en el sofá. | I fell asleep on the sofa.
comerse | to eat up | Se {comió} toda la tarta. | He ate the whole cake.
morirse | to die (emphatic) | Me {muero} de hambre. | I'm starving.
`,
    D: `
En España ___ cena muy tarde. | se | In Spain people have dinner very late.
___ venden coches de segunda mano. | se | Second-hand cars for sale.
Se ___ ha caído el móvil. (a mí) | me | I've dropped my phone.
Se nos ___ (olvidar) las llaves. (indef) | olvidaron | We forgot the keys.
Se ___ rompieron las gafas. (a él) | le | His glasses broke.
El acueducto de Segovia fue ___ (construir) por los romanos. | construido | The aqueduct of Segovia was built by the Romans.
Las obras fueron ___ (inaugurar) en 2010. | inauguradas | The works were inaugurated in 2010.
Se ___ (alquilar) habitaciones. | alquilan | Rooms for rent.
Se me ___ (dar) bien los idiomas. | dan | I'm good at languages.
Se nos ha ___ (acabar) la leche. | acabado | We've run out of milk.
¿Se te ha ___ (ocurrir) algo? | ocurrido | Has anything occurred to you?
La ciudad fue ___ (fundar) por los romanos. | fundada | The city was founded by the Romans.
El cuadro fue ___ (pintar) por Goya. | pintado | The painting was painted by Goya.
Los ladrones fueron ___ (detener). | detenidos | The thieves were arrested.
La puerta ___ cerrada. (state) | está | The door is closed.
Está ___ fumar aquí. (forbidden) | prohibido | Smoking is forbidden here.
Se ___ silencio. (formal notice) | ruega | Silence, please.
Me ___ (dormir) en el sofá. (indef) | dormí | I fell asleep on the sofa.
¿Cómo se ___ "deadline" en español? | dice | How do you say "deadline" in Spanish?
Se ___ (necesitar) camareros con experiencia. | necesitan | Experienced waiters needed.
`,
    S: `
Perdona, se me ha olvidado tu nombre. | Sorry, I've forgotten your name.
¿Cómo se dice "deadline" en español? | How do you say "deadline" in Spanish?
Se nos ha acabado la leche. | We've run out of milk.
Aquí no se puede aparcar. | You can't park here.
La Alhambra fue construida en los siglos XIII y XIV. | The Alhambra was built in the 13th and 14th centuries.
Se me ocurre una idea. | An idea occurs to me.
Se me dan fatal las matemáticas. | I'm terrible at maths.
Me muero de ganas de verte. | I'm dying to see you.
`,
    R: [
      { t: 'Un lunes horrible', x: `El lunes todo salió mal. Primero se me olvidó poner el despertador. Luego, con las prisas, se me cayó el café encima de la camisa. En el metro se me perdió la tarjeta transporte y tuve que comprar un billete sencillo. Al llegar a la oficina, me di cuenta de que se me había quedado el portátil en casa. Por suerte, en mi empresa se trabaja mucho en la nube, así que pude usar el ordenador de una compañera. Por la tarde se me ocurrió una idea brillante para el proyecto. ¡No todo fue malo!`, q: `¿Qué se le cayó encima de la camisa? | El zumo ; *El café ; El agua
¿Qué se le quedó en casa? | El móvil ; *El portátil ; Las llaves
¿Qué fue lo bueno del día? | *Se le ocurrió una idea brillante ; Llegó pronto ; Encontró la tarjeta` },
      { t: 'La Sagrada Familia', x: `La Sagrada Familia fue diseñada por el arquitecto Antoni Gaudí, que trabajó en ella durante más de cuarenta años, hasta su muerte en 1926. Las obras empezaron en 1882 y todavía no han terminado: se calcula que se terminarán en los próximos años. La basílica es financiada por los visitantes y por donaciones. En 2005 parte de ella fue declarada Patrimonio de la Humanidad por la UNESCO. Cada año es visitada por millones de turistas.`, q: `¿Quién la diseñó? | Velázquez ; *Antoni Gaudí ; Picasso
¿Cuándo empezaron las obras? | En 1926 ; *En 1882 ; En 2005
¿Cómo se financia? | Con dinero público ; *Con los visitantes y donaciones ; Con la Iglesia` },
      { t: 'Costumbres que sorprenden', x: `Muchos extranjeros se sorprenden de las costumbres españolas. Aquí se come tarde y se cena todavía más tarde. Se habla alto y se interrumpe mucho, lo cual no se considera de mala educación. Se saluda con dos besos, incluso a desconocidos. En los bares, las servilletas se tiran al suelo en algunos sitios tradicionales. Y los domingos por la tarde, se sale a pasear con toda la familia.`, q: `¿Cómo se considera interrumpir? | De mala educación ; *No se considera de mala educación ; Está prohibido
¿Cómo se saluda? | Con la mano ; *Con dos besos ; Con un abrazo
¿Qué se hace los domingos por la tarde? | Se trabaja ; *Se sale a pasear con la familia ; Se duerme` }
    ],
    write: 'Write about a day when lots of things went wrong (using se me…), then describe customs in the Netherlands with impersonal se, and describe a famous building using the passive (fue construido por…).',
    talk: 'You are a Spanish friend comparing customs between Spain and the Netherlands with the learner using impersonal se (en España se cena tarde…), and then sharing clumsy accidents with se me ha…',
    res: [R.slcAdv(), R.hh('cultura'), R.easy('costumbres españolas')]
  });

  U({
    id: 'b2-sociedad', title: 'Sociedad y política: nominalización y registro', goal: ['Understand and discuss news about politics and society', 'Use nominalisation and the passive in a news register', 'Summarise an article'],
    grammar: {
      t: 'News register: nominalisation, passive, impersonal reporting',
      h: `<p>News Spanish turns verbs into nouns (<b>nominalización</b>) to pack information: <i>El gobierno subió los impuestos → <b>la subida</b> de los impuestos</i>; <i>los precios bajaron → <b>la bajada</b> de los precios</i>; <i>aprobaron la ley → <b>la aprobación</b> de la ley</i>.</p>
<p>Common endings: <b>-ción</b> (aprobación, reducción), <b>-miento</b> (crecimiento, aumento), <b>-da</b> (subida, llegada), <b>-ura</b> (apertura, ruptura), <b>-ida</b> (salida, caída).</p>
<p>Impersonal reporting: <i>Se espera que…, Se calcula que…, Según fuentes oficiales…, Todo apunta a que…</i>. Passive with ser: <i>La ley fue aprobada por el Congreso.</i></p>
<p>The <b>conditional of rumour</b> (journalism): <i>El ministro habría dimitido</i> = reportedly resigned.</p>`
    },
    V: `
el gobierno | government | El {gobierno} aprobó la medida. | The government approved the measure.
el Congreso | Congress (Spanish parliament) | La ley pasa por el {Congreso}. | The law goes through Congress.
el/la diputado/a | member of parliament | Hay 350 {diputados}. | There are 350 MPs.
el partido | (political) party | Es el {partido} más votado. | It's the party with the most votes.
las elecciones | elections | Las {elecciones} son en mayo. | The elections are in May.
votar | to vote | Mucha gente no {vota}. | Many people don't vote.
el voto | vote | Cada {voto} cuenta. | Every vote counts.
la campaña electoral | election campaign | Empieza la {campaña electoral}. | The election campaign begins.
el/la presidente/a | president, prime minister | El {presidente} del Gobierno. | The prime minister.
el ministro / la ministra | minister | La {ministra} de Sanidad. | The health minister.
la comunidad autónoma | autonomous region | España tiene diecisiete {comunidades autónomas}. | Spain has seventeen autonomous regions.
el ayuntamiento | town council | El {ayuntamiento} prohibió los coches. | The council banned cars.
el alcalde / la alcaldesa | mayor | La {alcaldesa} inauguró el parque. | The mayor opened the park.
la ley | law | La nueva {ley} entra en vigor hoy. | The new law comes into force today.
aprobar | to approve, pass | El Congreso {aprobó} la reforma. | Congress passed the reform.
la aprobación | approval | Tras la {aprobación} de la ley… | After the law was passed…
la reforma | reform | Una {reforma} laboral. | A labour reform.
la subida | rise | La {subida} de los precios. | The rise in prices.
la bajada | fall, drop | La {bajada} del paro. | The fall in unemployment.
el aumento | increase | Un {aumento} del cinco por ciento. | A five percent increase.
la reducción | reduction | Una {reducción} de impuestos. | A tax reduction.
el crecimiento | growth | El {crecimiento} económico. | Economic growth.
la crisis | crisis | La {crisis} de la vivienda. | The housing crisis.
la inflación | inflation | La {inflación} ha bajado. | Inflation has fallen.
la encuesta | survey, poll | Según la última {encuesta}… | According to the latest poll…
la manifestación | demonstration | Miles de personas en la {manifestación}. | Thousands of people at the demonstration.
la protesta | protest | Hubo {protestas} en todo el país. | There were protests across the country.
la corrupción | corruption | Un caso de {corrupción}. | A corruption case.
dimitir | to resign | El ministro {dimitió}. | The minister resigned.
la dimisión | resignation | Pidieron su {dimisión}. | They called for his resignation.
el debate | debate | El {debate} fue muy tenso. | The debate was very tense.
la oposición | opposition | La {oposición} votó en contra. | The opposition voted against.
el acuerdo | agreement, deal | Firmaron un {acuerdo}. | They signed a deal.
la medida | measure | Una {medida} polémica. | A controversial measure.
polémico / polémica | controversial | Es una ley {polémica}. | It's a controversial law.
entrar en vigor | to come into force | La ley {entra en vigor} el lunes. | The law comes into force on Monday.
se espera que | it is expected that | {Se espera que} baje el paro. | Unemployment is expected to fall.
se calcula que | it is estimated that | {Se calcula que} hay un millón. | It's estimated there are a million.
según fuentes | according to sources | {Según fuentes} del ministerio… | According to ministry sources…
el titular | headline | El {titular} de hoy. | Today's headline.
`,
    D: `
El gobierno subió los impuestos. → La ___ de los impuestos. | subida | The tax rise.
Los precios bajaron. → La ___ de los precios. | bajada | The fall in prices.
Aprobaron la ley. → La ___ de la ley. | aprobación | The approval of the law.
La economía creció. → El ___ de la economía. | crecimiento | The growth of the economy.
Redujeron el paro. → La ___ del paro. | reducción | The reduction in unemployment.
Abrieron el museo. → La ___ del museo. | apertura | The opening of the museum.
La ley fue ___ (aprobar) por el Congreso. | aprobada | The law was approved by Congress.
Las medidas fueron ___ (anunciar) ayer. | anunciadas | The measures were announced yesterday.
Se ___ que baje el paro. (expect) | espera | Unemployment is expected to fall.
Se ___ que hay un millón de afectados. (estimate) | calcula | It's estimated there are a million people affected.
El ministro habría ___ (dimitir). (reportedly) | dimitido | The minister has reportedly resigned.
La ley entra ___ vigor el lunes. | en | The law comes into force on Monday.
La oposición votó ___ contra. | en | The opposition voted against.
Pidieron la ___ del ministro. (resignation) | dimisión | They called for the minister's resignation.
Según la última ___, ganaría la oposición. (poll) | encuesta | According to the latest poll, the opposition would win.
España tiene diecisiete comunidades ___. | autónomas | Spain has seventeen autonomous regions.
La ___ ha bajado al tres por ciento. (inflation) | inflación | Inflation has fallen to three percent.
Hubo un ___ del cinco por ciento. (increase) | aumento | There was a five percent increase.
Todo ___ a que habrá elecciones. (points) | apunta | Everything points to an election.
Miles de personas salieron a la calle en una ___. | manifestación | Thousands took to the streets in a demonstration.
`,
    S: `
El Congreso aprobó ayer la nueva ley de vivienda. | Congress passed the new housing law yesterday.
Se espera que la medida entre en vigor en enero. | The measure is expected to come into force in January.
Según la última encuesta, el partido perdería votos. | According to the latest poll, the party would lose votes.
La subida de los alquileres preocupa a los jóvenes. | The rise in rents worries young people.
Miles de personas se manifestaron en el centro de Madrid. | Thousands of people demonstrated in central Madrid.
El ministro habría presentado su dimisión. | The minister has reportedly resigned.
España está dividida en diecisiete comunidades autónomas. | Spain is divided into seventeen autonomous regions.
Se calcula que la reforma afectará a dos millones de personas. | It's estimated the reform will affect two million people.
`,
    R: [
      { t: 'Noticia: nueva ley de vivienda', x: `El Congreso de los Diputados aprobó ayer la reforma de la ley de vivienda con los votos del gobierno y de varios partidos aliados. La norma, que entrará en vigor el próximo mes, incluye la limitación de la subida de los alquileres en las zonas más tensionadas y un aumento de las ayudas para jóvenes. La oposición votó en contra y anunció que recurrirá la ley. Según fuentes del ministerio, se espera que la medida beneficie a más de un millón de inquilinos.`, q: `¿Quién votó en contra? | El gobierno ; *La oposición ; Los jóvenes
¿Qué limita la ley? | El número de pisos ; *La subida de los alquileres en zonas tensionadas ; Las hipotecas
¿A cuántas personas se espera que beneficie? | Cien mil ; *Más de un millón de inquilinos ; Diez millones` },
      { t: 'Cómo funciona España', x: `España es una monarquía parlamentaria. El rey es el jefe del Estado, pero tiene funciones sobre todo simbólicas. El poder legislativo está en las Cortes Generales, formadas por el Congreso y el Senado. El presidente del Gobierno es elegido por el Congreso tras las elecciones generales, que se celebran cada cuatro años. Además, el país está dividido en diecisiete comunidades autónomas y dos ciudades autónomas, Ceuta y Melilla, con amplias competencias en sanidad y educación.`, q: `¿Qué tipo de Estado es España? | Una república ; *Una monarquía parlamentaria ; Una federación
¿Quién elige al presidente del Gobierno? | El rey ; *El Congreso ; El Senado
¿En qué tienen competencias las comunidades autónomas? | En defensa ; *En sanidad y educación ; En política exterior` },
      { t: 'Encuesta: lo que preocupa', x: `Según la última encuesta del Centro de Investigaciones Sociológicas, la vivienda se ha convertido en la principal preocupación de los españoles, por delante del paro y de la situación económica. La subida de los precios del alquiler y la dificultad de los jóvenes para acceder a una vivienda explican este cambio. En tercer lugar aparecen los problemas políticos en general. Los expertos señalan que hace diez años la vivienda apenas aparecía en la lista.`, q: `¿Cuál es la principal preocupación? | El paro ; *La vivienda ; La política
¿Qué explica este cambio? | La inmigración ; *La subida de los alquileres y la dificultad de acceso ; El turismo
¿Qué pasaba hace diez años? | La vivienda era lo primero ; *La vivienda apenas aparecía en la lista ; No había encuestas` }
    ],
    write: 'Summarise a recent news story from Spain or the Netherlands (200 words) in a neutral news register: use at least five nominalisations, two passives with ser and two impersonal reporting expressions (se espera que, según…).',
    talk: 'You are a Spanish political journalist explaining a current issue (housing, elections, regional politics) neutrally. Ask the learner to summarise what they understood and to compare with the Netherlands; stay balanced and factual.',
    res: [R.hh('política y sociedad'), R.practica(), R.elpais(), R.rtve('Informe Semanal')]
  });

  U({
    id: 'b2-conectores', title: 'Conectores: aunque, sin embargo, por lo tanto', goal: ['Structure arguments with connectors of contrast, cause and consequence', 'Use aunque with indicative vs subjunctive', 'Write coherent paragraphs'],
    grammar: {
      t: 'Discourse connectors and aunque',
      h: `<p><b>Contrast</b>: pero, sin embargo, no obstante (formal), en cambio, a pesar de (que), aunque, mientras que, sino (que).</p>
<p><b>Cause</b>: porque, como (at the start of a sentence), ya que, puesto que, debido a, a causa de, gracias a, dado que.</p>
<p><b>Consequence</b>: así que, por lo tanto, por eso, de modo que, en consecuencia, por consiguiente.</p>
<p><b>Adding / ordering</b>: además, también, incluso, asimismo, por un lado… por otro, en primer lugar, finalmente, en resumen.</p>
<p><b>aunque</b>: + indicative = a fact (although): <i>Aunque <b>llueve</b>, voy a salir.</i> + subjunctive = hypothetical or not important to the speaker (even if): <i>Aunque <b>llueva</b>, saldré.</i> <i>Aunque <b>sea</b> caro, lo compro.</i> Same with <b>a pesar de que</b>.</p>
<p><b>Como</b> vs <b>porque</b>: <i>Como no tenía dinero, no fui.</i> / <i>No fui porque no tenía dinero.</i> <b>sino</b> after a negative: <i>No es rojo, sino granate.</i></p>`
    },
    V: `
sin embargo | however | Es caro; {sin embargo}, merece la pena. | It's expensive; however, it's worth it.
no obstante | nevertheless | {No obstante}, hay excepciones. | Nevertheless, there are exceptions.
en cambio | on the other hand | Yo soy tímido; mi hermana, {en cambio}, no. | I'm shy; my sister, on the other hand, isn't.
a pesar de | despite | {A pesar de} la lluvia, salimos. | Despite the rain, we went out.
aunque | although / even if | {Aunque} estaba cansada, fui. | Although I was tired, I went.
mientras que | whereas | Él trabaja, {mientras que} ella estudia. | He works, whereas she studies.
sino | but rather | No es inglés, {sino} irlandés. | He's not English, but Irish.
ya que | since, as | {Ya que} estás aquí, ayúdame. | Since you're here, help me.
puesto que | given that | {Puesto que} no hay tiempo, empecemos. | Given that there's no time, let's begin.
dado que | given that | {Dado que} es tarde, me voy. | Given that it's late, I'm leaving.
debido a | due to | Se canceló {debido a} la niebla. | It was cancelled due to fog.
gracias a | thanks to | {Gracias a} ti, aprobé. | Thanks to you, I passed.
por lo tanto | therefore | Hay huelga; {por lo tanto}, no hay trenes. | There's a strike; therefore, there are no trains.
de modo que | so (that) | No llamó, {de modo que} me fui. | He didn't call, so I left.
en consecuencia | consequently | {En consecuencia}, subieron los precios. | Consequently, prices rose.
por consiguiente | consequently (formal) | {Por consiguiente}, se aplaza la reunión. | Consequently, the meeting is postponed.
así que | so | Estaba cansado, {así que} me acosté. | I was tired, so I went to bed.
además | moreover | {Además}, es muy barato. | Moreover, it's very cheap.
incluso | even | {Incluso} mi abuela usa WhatsApp. | Even my grandmother uses WhatsApp.
asimismo | likewise, also (formal) | {Asimismo}, se aprobó el presupuesto. | Likewise, the budget was approved.
en primer lugar | firstly | {En primer lugar}, quiero darte las gracias. | Firstly, I want to thank you.
por último | lastly | {Por último}, hablemos del precio. | Lastly, let's talk about the price.
en resumen | in summary | {En resumen}, fue un éxito. | In summary, it was a success.
es decir | that is | Llega el lunes, {es decir}, pasado mañana. | He arrives on Monday, that is, the day after tomorrow.
por ejemplo | for example | Hay soluciones, {por ejemplo}, el teletrabajo. | There are solutions, for example, remote work.
en cuanto a | as for, regarding | {En cuanto a} los precios, son razonables. | As for the prices, they're reasonable.
el teletrabajo | remote work | El {teletrabajo} tiene ventajas. | Remote work has advantages.
la ventaja | advantage | La principal {ventaja} es la flexibilidad. | The main advantage is flexibility.
la desventaja | disadvantage | Una {desventaja} es el aislamiento. | One disadvantage is isolation.
el aislamiento | isolation | El {aislamiento} afecta a muchos. | Isolation affects many.
conciliar | to reconcile, balance | Es difícil {conciliar} trabajo y familia. | It's hard to balance work and family.
desconectar | to switch off | Me cuesta {desconectar}. | I find it hard to switch off.
la productividad | productivity | La {productividad} no bajó. | Productivity didn't drop.
el modelo híbrido | hybrid model | Prefiero un {modelo híbrido}. | I prefer a hybrid model.
argumentar | to argue (make a case) | Hay que {argumentar} bien. | You have to argue your case well.
`,
    D: `
___ llueve, vamos a la playa. (fact) | aunque | Although it's raining, we're going to the beach.
Aunque ___ (llover) mañana, iremos. (hypothetical) | llueva | Even if it rains tomorrow, we'll go.
___ no tenía dinero, no fui. (start of sentence) | como | As I had no money, I didn't go.
A pesar ___ cansancio, terminó el maratón. | del | Despite the tiredness, he finished the marathon.
El tren tenía retraso; ___, llegamos tarde. | por lo tanto|por eso|así que | The train was late; therefore we arrived late.
Es caro. ___, la calidad es excelente. | sin embargo|no obstante | It's expensive. However, the quality is excellent.
El vuelo se canceló debido ___ la niebla. | a | The flight was cancelled due to the fog.
Mi hermano es tímido; yo, en ___, hablo con todo el mundo. | cambio | My brother is shy; I, on the other hand, talk to everyone.
No es inglés, ___ irlandés. | sino | He's not English, but Irish.
Aunque ___ (ser) caro, lo voy a comprar. (I don't care) | sea | Even if it's expensive, I'm going to buy it.
Aunque ___ (ser) caro, lo compré. (fact) | era | Although it was expensive, I bought it.
A pesar de que ___ (estudiar, ella) mucho, suspendió. (fact) | estudió | Although she studied a lot, she failed.
___ que estás aquí, ayúdame. | ya | Since you're here, help me.
Gracias ___ tu ayuda, lo conseguí. | a | Thanks to your help, I did it.
Él trabaja, ___ que ella estudia. | mientras | He works, whereas she studies.
En ___, fue un éxito. (summary) | resumen | In summary, it was a success.
___ mi abuela usa WhatsApp. (even) | incluso | Even my grandmother uses WhatsApp.
En cuanto ___ los precios, son razonables. | a | As for the prices, they're reasonable.
Llega el lunes, es ___, pasado mañana. | decir | He arrives on Monday, that is, the day after tomorrow.
No llamó, de ___ que me fui. | modo | He didn't call, so I left.
`,
    S: `
Aunque sea difícil, no voy a rendirme. | Even if it's hard, I'm not going to give up.
Como era tarde, decidimos coger un taxi. | As it was late, we decided to take a taxi.
El teletrabajo tiene ventajas; sin embargo, puede aislarte. | Remote work has advantages; however, it can isolate you.
A pesar de que estudió mucho, suspendió. | Despite studying a lot, she failed.
Además de ser barato, está muy bien situado. | Besides being cheap, it is very well located.
En resumen, creo que vale la pena. | In summary, I think it's worth it.
No lo hice por dinero, sino por amor. | I didn't do it for money, but for love.
Dado que nadie ha venido, cancelamos la reunión. | Given that nobody has come, we're cancelling the meeting.
`,
    R: [
      { t: 'El teletrabajo: ¿ventaja o trampa?', x: `Desde la pandemia, muchas empresas españolas han apostado por el teletrabajo. Por un lado, los trabajadores ahorran tiempo y dinero en transporte; además, pueden conciliar mejor la vida familiar. Por otro lado, algunos se sienten aislados y les cuesta desconectar. Aunque la productividad no ha bajado en general, muchos expertos recomiendan un modelo híbrido, ya que combina la flexibilidad con el contacto humano. En resumen, no hay una solución perfecta, de modo que cada empresa debe encontrar su equilibrio.`, q: `¿Cuál es una ventaja del teletrabajo según el texto? | *Se ahorra tiempo y dinero ; Se ve más a los compañeros ; Se trabaja menos
¿Qué recomiendan los expertos? | Volver a la oficina ; *Un modelo híbrido ; Solo teletrabajo
¿Ha bajado la productividad? | Sí, mucho ; *No, en general ; No se sabe` },
      { t: '¿Ciudad o pueblo?', x: `Cada vez más españoles se plantean dejar la ciudad e irse a vivir a un pueblo. En primer lugar, la vivienda es mucho más barata y, además, la calidad de vida es mejor: menos ruido, menos contaminación y más naturaleza. Sin embargo, no todo son ventajas. En muchos pueblos no hay médico todos los días, el transporte público es escaso y, en ocasiones, la conexión a internet es lenta. Por lo tanto, quienes se mudan suelen ser personas que pueden teletrabajar. En cambio, para las familias con hijos, la falta de colegios sigue siendo un problema.`, q: `¿Cuál es una ventaja de vivir en un pueblo? | Hay más trabajo ; *La vivienda es más barata ; Hay más colegios
¿Quiénes suelen mudarse? | Los jubilados ; *Personas que pueden teletrabajar ; Los estudiantes
¿Qué sigue siendo un problema para las familias? | El ruido ; *La falta de colegios ; El precio` },
      { t: 'Carta al director', x: `Señor director: aunque entiendo que el ayuntamiento quiera reducir el tráfico en el centro, no estoy de acuerdo con la forma en que lo ha hecho. En primer lugar, no se ha consultado a los vecinos. En segundo lugar, el transporte público no es suficiente, puesto que los autobuses pasan cada veinte minutos. Por consiguiente, muchos comercios del centro han perdido clientes. No pido que se elimine la medida, sino que se mejore. Atentamente, Pilar Gómez.`, q: `¿Está Pilar en contra de reducir el tráfico? | Sí, totalmente ; *No, pero no le gusta cómo se ha hecho ; No dice nada
¿Cuál es el problema del transporte público? | Es caro ; *Los autobuses pasan cada veinte minutos ; No existe
¿Qué pide Pilar? | Que se elimine la medida ; *Que se mejore la medida ; Que bajen los precios` }
    ],
    write: 'Write a structured argumentative text (250 words) on remote work, city vs village life, or learning languages with apps, using at least ten different connectors and aunque with both indicative and subjunctive.',
    talk: 'You are a Spanish journalist interviewing the learner for an article on remote work and quality of life. Ask for pros and cons and push them to use connectors (sin embargo, aunque, por lo tanto, en cambio).',
    res: [R.slcAdv(), R.practica(), R.elpais()]
  });

  U({
    id: 'b2-cultura', title: 'Cultura y ocio: arte, cine y literatura', goal: ['Talk about films, books, art and music in depth', 'Give detailed reviews and recommendations', 'Use adjective position to change meaning (un gran hombre / un hombre grande)'],
    grammar: {
      t: 'Adjective position and meaning; review language',
      h: `<p>Most adjectives follow the noun (<i>una película aburrida</i>). Placed <b>before</b>, they become subjective or emphatic (<i>una magnífica actuación</i>). Some <b>change meaning</b>:</p>
<table><tr><th>before</th><th>after</th></tr><tr><td>un <b>gran</b> hombre (great)</td><td>un hombre <b>grande</b> (big)</td></tr><tr><td>un <b>viejo</b> amigo (long-standing)</td><td>un amigo <b>viejo</b> (old in age)</td></tr>
<tr><td>el <b>pobre</b> chico (unfortunate)</td><td>el chico <b>pobre</b> (poor, no money)</td></tr><tr><td>un <b>nuevo</b> coche (another, different)</td><td>un coche <b>nuevo</b> (brand new)</td></tr>
<tr><td>el <b>mismo</b> director (the same)</td><td>el director <b>mismo</b> (himself)</td></tr><tr><td><b>cierta</b> información (certain, some)</td><td>información <b>cierta</b> (true)</td></tr>
<tr><td>un <b>único</b> libro (only one)</td><td>un libro <b>único</b> (unique)</td></tr><tr><td><b>diferentes</b> opciones (various)</td><td>opciones <b>diferentes</b> (distinct)</td></tr></table>
<p><b>Grande → gran</b> and <b>bueno → buen, malo → mal</b> before a singular noun.</p>
<p>Reviews: <i>trata de / va de, está ambientada en, el argumento, el guion, la banda sonora, merece la pena, te engancha desde el principio, el final es previsible</i>.</p>`
    },
    V: `
la película | film | Es una {película} de Almodóvar. | It's an Almodóvar film.
el director / la directora | director | La {directora} ganó un Goya. | The director won a Goya.
el actor / la actriz | actor / actress | Es una {actriz} muy conocida. | She's a very well-known actress.
el reparto | cast | El {reparto} es increíble. | The cast is incredible.
el argumento | plot | El {argumento} es complicado. | The plot is complicated.
el guion | script | El {guion} es muy inteligente. | The script is very clever.
la banda sonora | soundtrack | Me encanta la {banda sonora}. | I love the soundtrack.
el estreno | premiere, release | El {estreno} es el viernes. | It's released on Friday.
estrenar | to premiere, release | {Estrenan} la serie en enero. | The series premieres in January.
ir de | to be about (colloquial) | ¿De qué {va} la película? | What's the film about?
tratar de | to be about | La novela {trata de} una familia gallega. | The novel is about a Galician family.
estar ambientado / ambientada en | to be set in | Está {ambientada en} los años cincuenta. | It's set in the fifties.
el personaje | character | El {personaje} principal es una detective. | The main character is a detective.
el/la protagonista | protagonist | La {protagonista} es una niña. | The protagonist is a girl.
la novela | novel | Estoy leyendo una {novela} negra. | I'm reading a crime novel.
el/la novelista | novelist | Es mi {novelista} favorito. | He's my favourite novelist.
el cuento | short story | Escribió un libro de {cuentos}. | She wrote a book of short stories.
la poesía | poetry | Me gusta la {poesía} de Lorca. | I like Lorca's poetry.
el cuadro | painting | Este {cuadro} es de Goya. | This painting is by Goya.
la exposición | exhibition | Hay una {exposición} de Sorolla. | There's a Sorolla exhibition.
el museo | museum | El {museo} del Prado. | The Prado museum.
la obra de teatro | play | Vimos una {obra de teatro}. | We saw a play.
el concierto | concert | Fui a un {concierto} de flamenco. | I went to a flamenco concert.
el/la cantautor/a | singer-songwriter | Es un {cantautor} muy famoso. | He's a very famous singer-songwriter.
la crítica | review; criticism | Tuvo muy buenas {críticas}. | It got very good reviews.
recomendar | to recommend | Te la {recomiendo}. | I recommend it to you.
merecer la pena | to be worth it | {Merece la pena} verla. | It's worth seeing.
enganchar | to hook | La serie te {engancha}. | The series hooks you.
previsible | predictable | El final es muy {previsible}. | The ending is very predictable.
emocionante | exciting, moving | Es una historia {emocionante}. | It's a moving story.
conmovedor / conmovedora | moving | Una película muy {conmovedora}. | A very moving film.
lento / lenta | slow | El principio es un poco {lento}. | The beginning is a bit slow.
gran | great | Es un {gran} director. | He's a great director.
viejo amigo | long-standing friend | Es un {viejo amigo} de la familia. | He's an old friend of the family.
pobre (antes del nombre) | poor (unfortunate) | ¡{Pobre} chico! | Poor boy!
único / única | only; unique | Es un libro {único}. | It's a unique book.
el premio | prize, award | Ganó el {premio} Cervantes. | He won the Cervantes prize.
los Goya | Spanish film awards | Ganó tres {Goya}. | It won three Goyas.
la taquilla | box office | Fue un éxito de {taquilla}. | It was a box-office hit.
subtitulado / subtitulada | subtitled | Prefiero verla {subtitulada}. | I prefer to watch it subtitled.
`,
    D: `
Cervantes fue un ___ escritor. (great) | gran | Cervantes was a great writer.
Vive en una casa ___. (big) | grande | He lives in a big house.
Es un ___ amigo; nos conocemos desde niños. (long-standing) | viejo | He's an old friend; we've known each other since childhood.
¡___ chico! Ha perdido el trabajo. (unfortunate) | pobre | Poor guy! He's lost his job.
Es un barrio ___; la gente no tiene dinero. (poor, money) | pobre | It's a poor neighbourhood; people have no money.
Me he comprado un coche ___. (brand new) | nuevo | I've bought a brand-new car.
Es un ___ día. (good, before noun) | buen | It's a good day.
Fue un ___ momento. (bad, before noun) | mal | It was a bad moment.
¿De qué ___ la película? (to be about, colloquial) | va | What's the film about?
La novela trata ___ una familia gallega. | de | The novel is about a Galician family.
Está ambientada ___ los años cincuenta. | en | It's set in the fifties.
Merece la ___ verla. | pena | It's worth seeing.
El final es muy ___. (predictable) | previsible | The ending is very predictable.
La serie te ___ desde el primer capítulo. (hooks) | engancha | The series hooks you from the first episode.
La ___ sonora es preciosa. | banda | The soundtrack is beautiful.
El ___ es la semana que viene. (release) | estreno | The release is next week.
Es el ___ libro que he leído este año. (only one) | único | It's the only book I've read this year.
Ganó el premio ___ de literatura. | Cervantes | She won the Cervantes literature prize.
Prefiero las películas en versión original ___. (subtitled) | subtitulada | I prefer films in original version with subtitles.
Fue un éxito de ___. (box office) | taquilla | It was a box-office hit.
`,
    S: `
¿De qué va la película? —Va de una familia que hereda un hotel. | What's the film about? —It's about a family who inherit a hotel.
Está ambientada en Madrid en los años ochenta. | It's set in Madrid in the eighties.
El guion es muy inteligente, pero el final es previsible. | The script is very clever, but the ending is predictable.
Te la recomiendo: merece mucho la pena. | I recommend it: it's really worth it.
Almodóvar es un gran director. | Almodóvar is a great director.
La serie te engancha desde el primer capítulo. | The series hooks you from the first episode.
Prefiero ver las series en versión original con subtítulos. | I prefer watching series in the original version with subtitles.
Es un viejo amigo de la familia. | He's an old friend of the family.
`,
    R: [
      { t: 'Crítica: una película española', x: `La nueva película de la directora vasca está ambientada en un pequeño pueblo de Navarra en los años sesenta. Trata de una maestra que llega para dar clase a niños que no han ido nunca a la escuela. El guion es sencillo pero conmovedor, y la protagonista hace una gran interpretación. Quizás el principio sea un poco lento, pero a partir de la mitad la historia te engancha. La banda sonora, con canciones populares de la época, es preciosa. Merece la pena verla en el cine.`, q: `¿Dónde está ambientada? | En Madrid ; *En un pueblo de Navarra ; En el País Vasco
¿De qué trata? | De un niño que se escapa ; *De una maestra que llega a dar clase ; De una familia rica
¿Qué defecto tiene, según la crítica? | El final ; *El principio es un poco lento ; La música` },
      { t: 'El Siglo de Oro', x: `Entre los siglos XVI y XVII, España vivió una época de enorme esplendor cultural conocida como el Siglo de Oro. En literatura destacan Miguel de Cervantes, autor de Don Quijote, considerada la primera novela moderna, y dramaturgos como Lope de Vega y Calderón de la Barca. En pintura, artistas como Velázquez, El Greco y Zurbarán crearon obras maestras que hoy se pueden ver en el Museo del Prado. Paradójicamente, fue también una época de crisis económica.`, q: `¿Cuándo fue el Siglo de Oro? | En el siglo XIX ; *Entre los siglos XVI y XVII ; En la Edad Media
¿Qué se considera Don Quijote? | Una obra de teatro ; *La primera novela moderna ; Un poema
¿Dónde se pueden ver muchas de sus pinturas? | En el Louvre ; *En el Museo del Prado ; En la Sagrada Familia` },
      { t: 'Recomendaciones de un amigo', x: `—¿Me recomiendas alguna serie española? Quiero mejorar mi comprensión.
—Depende de lo que te guste. Si te gustan las historias de crímenes, "La casa de papel" es muy adictiva, aunque hablan rapidísimo. Si prefieres algo más tranquilo, hay una serie sobre una familia en la Transición que es preciosa. Yo empezaría con subtítulos en español, no en inglés.
—¿Y libros?
—Para tu nivel, te recomendaría "Nada", de Carmen Laforet. Es un gran libro, y no es demasiado difícil.`, q: `¿Por qué quiere ver series? | Para pasar el tiempo ; *Para mejorar su comprensión ; Para un trabajo
¿Qué subtítulos recomienda el amigo? | En inglés ; *En español ; Ninguno
¿Qué libro le recomienda? | Don Quijote ; *Nada, de Carmen Laforet ; La casa de papel` }
    ],
    write: 'Write a review (250 words) of a film, series or book you liked: what it\'s about, where it\'s set, characters, strengths and weaknesses, and who you\'d recommend it to. Use at least three adjectives before the noun.',
    talk: 'You are a passionate Spanish film and book lover. Ask the learner about their favourite films, series and books, recommend Spanish ones suited to their level, and discuss them in depth.',
    res: [R.rtve('cine y series españolas'), R.slcAdv(), R.bvmc('literatura española'), R.ser('podcasts de cine')]
  });

  U({
    id: 'b2-cambio', title: 'Cambios: ponerse, volverse, hacerse, quedarse', goal: ['Describe changes in people and situations', 'Choose the right verb of change', 'Talk about emotions and reactions'],
    grammar: {
      t: 'Verbs of change (verbos de cambio)',
      h: `<p>English "become/get" has several Spanish equivalents:</p>
<table><tr><td><b>ponerse</b> + adj.</td><td>sudden, temporary change of mood or appearance</td><td>Se puso rojo / nervioso / triste.</td></tr>
<tr><td><b>quedarse</b> + adj.</td><td>result after an event, often lasting</td><td>Se quedó sorprendido / sordo / embarazada / sin trabajo.</td></tr>
<tr><td><b>volverse</b> + adj.</td><td>deep change of personality, often negative</td><td>Se volvió desconfiado / loco.</td></tr>
<tr><td><b>hacerse</b> + adj./noun</td><td>gradual or voluntary change (profession, ideology, status)</td><td>Se hizo rico / vegetariano / famoso / mayor.</td></tr>
<tr><td><b>convertirse en</b> + noun</td><td>transformation</td><td>Se convirtió en una gran empresa.</td></tr>
<tr><td><b>llegar a ser</b></td><td>achieving after effort</td><td>Llegó a ser ministra.</td></tr></table>
<p>Emotions with <b>dar</b>: <i>me da miedo, me da vergüenza, me da pena, me da igual, me da rabia, me da asco</i>. With <b>poner</b>: <i>me pone nervioso que…, me pone de buen humor…</i> (+ subj. when another subject).</p>`
    },
    V: `
ponerse nervioso / nerviosa | to get nervous | Me {pongo nervioso} antes de los exámenes. | I get nervous before exams.
ponerse rojo / roja | to blush | Se {puso roja} al verlo. | She blushed when she saw him.
ponerse triste | to become sad | Se {puso triste} con la noticia. | He became sad at the news.
ponerse de buen humor | to cheer up | Con el sol me {pongo de buen humor}. | The sun puts me in a good mood.
quedarse sorprendido / sorprendida | to be left surprised | Se {quedó sorprendida}. | She was taken aback.
quedarse sin | to run out of, be left without | Me {quedé sin} batería. | My battery died.
quedarse embarazada | to get pregnant | Se {quedó embarazada} en 2020. | She got pregnant in 2020.
quedarse de piedra | to be stunned | Me {quedé de piedra}. | I was stunned.
volverse loco / loca | to go mad | Me voy a {volver loco}. | I'm going to go mad.
volverse desconfiado / desconfiada | to become distrustful | Se ha {vuelto desconfiado}. | He's become distrustful.
hacerse famoso / famosa | to become famous | Se {hizo famosa} con su primer disco. | She became famous with her first album.
hacerse rico / rica | to get rich | Se {hizo rico} con internet. | He got rich with the internet.
hacerse mayor | to get older | Mis padres se están {haciendo mayores}. | My parents are getting older.
hacerse vegetariano / vegetariana | to become vegetarian | Me {hice vegetariana} hace cinco años. | I became vegetarian five years ago.
convertirse en | to turn into | El bar se {convirtió en} un restaurante. | The bar turned into a restaurant.
llegar a ser | to (eventually) become | {Llegó a ser} directora del hospital. | She became director of the hospital.
me da vergüenza | I'm embarrassed | {Me da vergüenza} hablar en público. | Speaking in public embarrasses me.
me da igual | I don't mind / care | {Me da igual} dónde cenemos. | I don't mind where we have dinner.
me da rabia | it makes me angry | {Me da rabia} que mientan. | It makes me angry when people lie.
me da pena | it's a pity / makes me sad | {Me da pena} que te vayas. | It makes me sad that you're leaving.
me da asco | it disgusts me | {Me da asco} el hígado. | Liver disgusts me.
me pone de los nervios | it gets on my nerves | {Me pone de los nervios} que llegue tarde. | It gets on my nerves when he's late.
agobiarse | to get stressed | No te {agobies}. | Don't stress.
emocionarse | to get emotional | Me {emocioné} en la boda. | I got emotional at the wedding.
el cambio | change | Fue un gran {cambio}. | It was a big change.
transformar | to transform | La experiencia la {transformó}. | The experience transformed her.
madurar | to mature | Ha {madurado} mucho. | He's matured a lot.
la madurez | maturity | Con la {madurez} se ve diferente. | With maturity you see things differently.
arrogante | arrogant | Se ha vuelto muy {arrogante}. | He's become very arrogant.
humilde | humble | Sigue siendo muy {humilde}. | She's still very humble.
el éxito | success | El {éxito} le cambió. | Success changed him.
el fracaso | failure | Aprendió del {fracaso}. | He learned from failure.
superar | to overcome | {Superó} sus miedos. | She overcame her fears.
el miedo | fear | Perdí el {miedo} a hablar. | I lost my fear of speaking.
la timidez | shyness | Superó la {timidez}. | He overcame his shyness.
de la noche a la mañana | overnight | Se hizo famoso {de la noche a la mañana}. | He became famous overnight.
poco a poco | little by little | {Poco a poco} me fui adaptando. | Little by little I adapted.
`,
    D: `
Cuando la vio, se ___ rojo. (sudden) | puso | When he saw her, he blushed.
Después del accidente, se ___ sin trabajo. | quedó | After the accident, he was left without a job.
Con los años se ha ___ muy desconfiado. (personality) | vuelto | Over the years he has become very distrustful.
Se ___ vegetariana hace cinco años. (voluntary) | hizo | She became vegetarian five years ago.
El pequeño bar se convirtió ___ un restaurante famoso. | en | The little bar turned into a famous restaurant.
Me ___ miedo volar. | da | Flying scares me.
Me pone nervioso que la gente ___ (llegar) tarde. | llegue | It makes me nervous when people arrive late.
Con esfuerzo, llegó a ___ directora. | ser | With effort, she became director.
Me ___ (poner, yo) muy nerviosa en las entrevistas. | pongo | I get very nervous in interviews.
Se ___ (quedar) de piedra al oír la noticia. (indef) | quedó | He was stunned when he heard the news.
Mis padres se están haciendo ___. (older) | mayores | My parents are getting older.
Me voy a ___ loco con este ruido. | volver | I'm going to go mad with this noise.
Se hizo famosa de la noche a la ___. | mañana | She became famous overnight.
Me da ___ que mientan. (anger) | rabia | It makes me angry when people lie.
Me ___ (quedar, yo) sin batería. (indef) | quedé | My battery died.
No te ___ (agobiarse, tú). | agobies | Don't stress.
Me ___ (emocionarse) en la boda de mi hermana. (indef) | emocioné | I got emotional at my sister's wedding.
Se ha ___ (hacer) rico con una app. | hecho | He's got rich with an app.
Me pone de buen ___ el sol. | humor | The sun puts me in a good mood.
___ sus miedos con mucho esfuerzo. (overcame, ella) | superó | She overcame her fears with a lot of effort.
`,
    S: `
Me pongo muy nerviosa antes de hablar en público. | I get very nervous before speaking in public.
Se quedó de piedra al oír la noticia. | He was stunned when he heard the news.
Desde que se hizo famoso, se ha vuelto insoportable. | Since he became famous, he's become unbearable.
Me da vergüenza hablar español delante de nativos. | I'm embarrassed to speak Spanish in front of natives.
Me da igual dónde cenemos. | I don't mind where we have dinner.
El pueblo se ha convertido en un destino turístico. | The village has turned into a tourist destination.
Con los años me he vuelto más paciente. | Over the years I've become more patient.
Poco a poco perdí el miedo a equivocarme. | Little by little I lost my fear of making mistakes.
`,
    R: [
      { t: 'De camarero a chef', x: `Cuando Dani llegó a Madrid desde un pueblo de Jaén, trabajaba de camarero y se ponía nervioso cada vez que un cliente se quejaba. Poco a poco aprendió a cocinar viendo a los cocineros. Un día el chef se puso enfermo y Dani tuvo que sustituirlo. Los clientes se quedaron encantados. Años después, abrió su propio restaurante, que se convirtió en uno de los más conocidos de Lavapiés. Se ha hecho famoso, pero no se ha vuelto arrogante: todavía le da vergüenza salir en la tele.`, q: `¿Qué le pasaba a Dani al principio? | *Se ponía nervioso con las quejas ; Se volvía arrogante ; Se quedaba sin trabajo
¿Qué pasó cuando sustituyó al chef? | *Los clientes se quedaron encantados ; Se quemó ; Lo despidieron
¿Cómo es Dani ahora? | Arrogante ; *Famoso pero humilde ; Desconfiado` },
      { t: 'Aprender un idioma te cambia', x: `Muchas personas dicen que aprender un idioma les ha cambiado la personalidad. Al principio, cuando no entendían casi nada, se ponían nerviosas y les daba vergüenza hablar. Con el tiempo, perdieron el miedo y se volvieron más abiertas. Algunas incluso dicen que en español se sienten más expresivas, más espontáneas. Los psicólogos explican que cada lengua va unida a una cultura y que, al aprenderla, uno se convierte un poco en otra persona.`, q: `¿Cómo se sentían al principio? | Seguras ; *Nerviosas y avergonzadas ; Aburridas
¿Cómo se volvieron con el tiempo? | Más tímidas ; *Más abiertas ; Más serias
¿Qué explican los psicólogos? | Que no cambia nada ; *Que cada lengua va unida a una cultura ; Que es imposible` },
      { t: 'El pueblo que se hizo famoso', x: `Hace diez años, nadie conocía este pequeño pueblo de Teruel. Pero se rodó allí una serie de televisión y, de la noche a la mañana, se convirtió en un destino turístico. Los vecinos se quedaron sorprendidos al ver autobuses llenos de turistas cada fin de semana. Algunos se pusieron contentos: abrieron restaurantes y casas rurales. Otros se han vuelto un poco desconfiados con tanta gente. "Me da pena que el pueblo pierda su tranquilidad", dice Pilar, de ochenta años.`, q: `¿Por qué se hizo famoso el pueblo? | Por su comida ; *Porque se rodó allí una serie ; Por un festival
¿Cómo reaccionaron algunos vecinos? | Se fueron del pueblo ; *Abrieron restaurantes y casas rurales ; Prohibieron el turismo
¿Qué le da pena a Pilar? | Que no vengan turistas ; *Que el pueblo pierda su tranquilidad ; Que cierren los bares` }
    ],
    write: 'Tell the story of someone whose life changed a lot (real or invented) using at least eight different verbs of change and three "me da…" expressions. Then describe how learning Spanish has changed you.',
    talk: 'You are a Spanish friend talking about how people change over time: an old friend, a celebrity, the learner themselves. Ask what makes them nervous, embarrassed, happy; elicit ponerse/quedarse/volverse/hacerse.',
    res: [R.slcAdv(), R.juan(), R.rtve('series españolas con subtítulos')]
  });
})();
