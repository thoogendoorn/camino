/* C1 · Dominio (part 2): new stages */
(function () {
  const R = RES, U = CAMINO.unit('C1');

  U({
    id: 'c1-pasiva', title: 'Pasiva e impersonalidad', goal: ['Choose between ser-passive, pasiva refleja and impersonal se', 'Recognise the passive in news and formal texts', 'Use impersonal uno, tú and third-person plural naturally'],
    grammar: {
      t: 'Passive and impersonal constructions',
      h: `<p><b>Ser + participle</b> (agreeing): typical of news and formal writing, often with <i>por</i>: <i>El puente <b>fue inaugurado</b> por la alcaldesa.</i> In speech it is rare.</p>
<p><b>Pasiva refleja</b> (<i>se</i> + verb agreeing with the thing): the everyday passive. <i>Se <b>venden</b> pisos. Se <b>ha publicado</b> el informe.</i> No agent with <i>por</i>.</p>
<p><b>Impersonal se</b> (verb always singular): with people (<i>Se <b>busca</b> a los responsables</i>), with intransitive verbs (<i>Aquí se <b>vive</b> bien</i>) and with <i>ser/estar</i> (<i>Se <b>está</b> mejor en casa</i>).</p>
<p><b>Other impersonal options</b>: 3rd person plural (<i>Dicen que va a nevar</i> — someone, not us), <i>uno/una</i> (<i>Uno nunca sabe</i>) and generic <i>tú</i> in speech (<i>Si te esfuerzas, lo consigues</i>).</p>
<p><b>Estar + participle</b> shows the result: <i>La puerta <b>fue cerrada</b> a las ocho</i> (action) vs. <i>La puerta <b>estaba cerrada</b></i> (state).</p>
<p><b>Accidental se</b>: <i>Se me <b>olvidó</b>, se nos <b>rompieron</b> los platos</i> — the thing is the subject, the person is affected.</p>`
    },
    V: `
clausurar | to close (officially) | El congreso fue {clausurado} por el ministro. | The conference was officially closed by the minister.
la inauguración | opening | La {inauguración} será el lunes. | The opening will be on Monday.
el procesado / la procesada | defendant | El {procesado} se declaró inocente. | The defendant pleaded not guilty.
la puesta en libertad | release | Se ordenó su {puesta en libertad}. | His release was ordered.
la absolución | acquittal | La defensa pidió la {absolución}. | The defence asked for an acquittal.
la condena | sentence (punishment) | Cumplió su {condena}. | He served his sentence.
el fallo | ruling, verdict | El {fallo} del tribunal es firme. | The court's ruling is final.
ratificar | to ratify | El acuerdo fue {ratificado} por el Parlamento. | The agreement was ratified by Parliament.
promulgar | to enact | Se {promulgó} la nueva ley. | The new law was enacted.
derribar | to demolish | El edificio será {derribado}. | The building will be demolished.
rehabilitar | to restore | Se {rehabilitará} el casco antiguo. | The old town will be restored.
conceder | to grant, award | Le fue {concedida} una beca. | She was granted a scholarship.
galardonar | to award (a prize) | Fue {galardonada} con el Cervantes. | She was awarded the Cervantes Prize.
el galardón | award | Recibió un {galardón} internacional. | He received an international award.
desvelar | to reveal | Se {desveló} el secreto. | The secret was revealed.
el hallazgo | find, discovery | Un {hallazgo} arqueológico. | An archaeological find.
hallar | to find (formal) | Fue {hallado} sin vida. | He was found dead.
el cadáver | corpse | Se encontró un {cadáver}. | A body was found.
el damnificado / la damnificada | victim (of disaster) | Los {damnificados} recibirán ayudas. | Those affected will receive aid.
trasladar | to transfer, move | Fue {trasladado} a otra prisión. | He was transferred to another prison.
el herido / la herida | injured person | Hubo dos {heridos} leves. | There were two slightly injured people.
el siniestro | accident, disaster | Las causas del {siniestro} se desconocen. | The causes of the accident are unknown.
desconocer | not to know | Se {desconocen} los motivos. | The reasons are unknown.
se rumorea | it's rumoured | {Se rumorea} que dimitirá. | It's rumoured that he'll resign.
se prevé | it's expected | {Se prevé} un aumento del paro. | A rise in unemployment is expected.
se calcula | it's estimated | {Se calcula} que asistieron mil personas. | It's estimated that a thousand people attended.
se aconseja | it is advised | {Se aconseja} no bañarse. | Bathing is not advised.
se precisa | wanted, is required | {Se precisa} camarero con experiencia. | Experienced waiter wanted.
se admiten | are accepted | No {se admiten} devoluciones. | Returns are not accepted.
se traspasa | business for sale | {Se traspasa} bar en el centro. | Bar in the centre for sale.
uno / una | one (impersonal) | {Uno} nunca sabe. | One never knows.
la autoría | authorship | Nadie ha reivindicado la {autoría}. | No one has claimed responsibility.
atribuirse | to claim (responsibility) | Nadie {se ha atribuido} el ataque. | Nobody has claimed responsibility for the attack.
llevarse a cabo | to be carried out | Las obras {se llevarán a cabo} en verano. | The works will be carried out in summer.
someter a | to subject to | Será {sometido a} votación. | It will be put to a vote.
la nota de prensa | press release | Lo anunciaron en una {nota de prensa}. | They announced it in a press release.
comparecer | to appear (before) | El ministro {compareció} ante la prensa. | The minister appeared before the press.
fuentes oficiales | official sources | Según {fuentes oficiales}, no hay víctimas. | According to official sources, there are no victims.
se me olvidó | I forgot (it slipped my mind) | {Se me olvidó} tu cumpleaños. | I forgot your birthday.
se nos rompió | it broke on us | {Se nos rompió} la lavadora. | Our washing machine broke.
`,
    D: `
El museo ___ (inaugurar, pasiva con ser) ayer por los reyes. | fue inaugurado | The museum was opened yesterday by the King and Queen.
Se ___ (vender) pisos en esta calle. | venden | Flats for sale in this street.
Se ___ (buscar) a los responsables del incendio. | busca | The people responsible for the fire are being sought.
En este pueblo se ___ (vivir) muy bien. | vive | People live very well in this village.
La ley ___ (aprobar, pasiva con ser) la semana pasada. | fue aprobada | The law was passed last week.
Se ___ (prever) lluvias para el fin de semana. | prevén | Rain is forecast for the weekend.
Se ___ (desconocer) las causas del accidente. | desconocen | The causes of the accident are unknown.
Los tres sospechosos ___ (detener, pasiva con ser) en Málaga. | fueron detenidos | The three suspects were arrested in Málaga.
Cuando llegué, la tienda ya ___ (cerrar, estado). | estaba cerrada | When I arrived, the shop was already closed.
Se me ___ (caer) las llaves al río. | cayeron | I dropped my keys in the river.
A Juan se le ___ (olvidar) la cartera en casa. | olvidó | Juan left his wallet at home.
___ nunca sabe lo que puede pasar. | Uno | One never knows what may happen.
___ (decir, ellos, impersonal) que van a subir los impuestos. | Dicen | They say taxes are going to rise.
Se ___ (otorgar) el premio a una científica gallega. | otorgó | The prize was awarded to a Galician scientist.
Las obras se llevarán ___ cabo en agosto. | a | The works will be carried out in August.
El proyecto será sometido ___ votación. | a | The project will be put to a vote.
Se ___ (rehabilitar) diez edificios el año pasado. | rehabilitaron | Ten buildings were restored last year.
Fue ___ (galardonar) con el Premio Nacional de Literatura. | galardonado|galardonada | He was awarded the National Literature Prize.
Se ___ (calcular) que hubo más de mil asistentes. | calcula | It's estimated that there were over a thousand attendees.
No se ___ (admitir) perros en el restaurante. | admiten | Dogs are not allowed in the restaurant.
`,
    S: `
El puente fue inaugurado por la alcaldesa el pasado lunes. | The bridge was opened by the mayor last Monday.
Se venden pisos con vistas al mar. | Flats with sea views for sale.
Se busca a los autores del robo. | The perpetrators of the robbery are being sought.
En este país se vive muy bien. | People live very well in this country.
Se desconocen las causas del incendio. | The causes of the fire are unknown.
Se me olvidó por completo tu cumpleaños. | I completely forgot your birthday.
Uno no siempre puede hacer lo que quiere. | One can't always do what one wants.
Dicen que mañana va a nevar en la sierra. | They say it's going to snow in the mountains tomorrow.
`,
    R: [
      { t: 'Noticias breves', x: `Inaugurado el nuevo puente sobre el Ebro. El puente, que une los barrios de La Almozara y el Actur, fue inaugurado ayer por la alcaldesa de Zaragoza. Las obras se llevaron a cabo en dieciocho meses y costaron 12 millones de euros. Se calcula que lo utilizarán unos veinte mil vehículos al día.

Detenidos tres jóvenes por el robo de una joyería. Los tres sospechosos fueron detenidos el martes en Málaga tras una investigación de dos semanas. Según fuentes policiales, se recuperaron la mayoría de las joyas. Los detenidos han sido puestos a disposición judicial.

Hallado un tesoro romano en una finca de Córdoba. Un agricultor descubrió por casualidad un conjunto de monedas de plata mientras araba su campo. El hallazgo, que se compone de más de trescientas piezas, será estudiado por la universidad. Se desconoce todavía su valor exacto.

Se prevén lluvias intensas en el norte. La Agencia Estatal de Meteorología ha activado el aviso naranja en Asturias y Cantabria. Se recomienda evitar los desplazamientos innecesarios.`, q: `¿Cuánto tiempo duraron las obras del puente? | Doce meses ; *Dieciocho meses ; Dos años
¿Quién descubrió las monedas romanas? | Un arqueólogo ; *Un agricultor ; La universidad
¿Qué se recomienda en el norte? | Visitar la costa ; *Evitar desplazamientos innecesarios ; Comprar paraguas` },
      { t: 'Se me olvidó…', x: `En español tenemos una construcción maravillosa para no sentirnos culpables: «se me olvidó», «se me rompió», «se me cayó». Gramaticalmente, el sujeto no soy yo, sino la cosa: el vaso «se cayó», y a mí simplemente me afectó. Es como si los objetos tuvieran vida propia y decidieran, sin consultarnos, romperse o perderse.

Un amigo inglés me decía que esto le parecía una forma elegante de escurrir el bulto. «En inglés digo: I broke the glass. En español, el vaso se rompió solo». Tiene parte de razón, aunque los lingüistas explican que la estructura expresa sobre todo involuntariedad: no lo hice a propósito.

Compárese «rompí el jarrón», que suena casi a confesión de un acto deliberado, con «se me rompió el jarrón», que pide comprensión. Por eso los niños aprenden muy pronto esta construcción. Mi sobrino de cinco años, por ejemplo, nunca ha roto nada en su vida. Eso sí, a él se le han roto ya tres mandos de la tele, dos tazas y las gafas de su abuelo.`, q: `Según el texto, ¿qué expresa sobre todo «se me rompió»? | Que el hablante miente ; *Que la acción fue involuntaria ; Que el objeto era caro
¿Qué opinaba el amigo inglés? | Que era una construcción difícil ; *Que era una forma de evitar la culpa ; Que no existía en inglés
¿Qué ironía hay sobre el sobrino? | Que rompe cosas a propósito ; *Que «nunca ha roto nada», aunque se le han roto muchas cosas ; Que no conoce la construcción` },
      { t: 'Aquí se vive bien', x: `«Aquí se vive bien» es probablemente la frase que más se repite en los pueblos de la costa gallega cuando se pregunta a sus habitantes por qué no se marchan. Se come bien, se duerme bien y se respira aire limpio. Lo que no se encuentra con tanta facilidad es trabajo.

Durante décadas se habló del problema sin que se tomaran medidas. Hoy, sin embargo, se están ensayando soluciones. En algunos municipios se ofrecen alquileres a precio reducido a quienes se comprometan a quedarse al menos cinco años. En otros se han rehabilitado antiguas escuelas como espacios de trabajo compartido, con conexión a internet de alta velocidad.

Los resultados todavía son modestos. Se calcula que en los últimos tres años se han instalado unas doscientas familias en la comarca, una cifra pequeña si se compara con las miles que se fueron. Aun así, se percibe un cambio de mentalidad. Como dice una vecina, «antes uno se iba porque aquí no había futuro; ahora algunos vuelven porque se dan cuenta de que el futuro también se puede construir aquí».`, q: `¿Qué falta en los pueblos de la costa gallega? | Aire limpio ; *Trabajo ; Buena comida
¿Qué medida se menciona? | Construir fábricas ; *Alquileres reducidos para quien se quede cinco años ; Cerrar las escuelas
¿Cómo valora el texto los resultados? | Espectaculares ; *Modestos, pero con un cambio de mentalidad ; Nulos` }
    ],
    write: 'Write a short news article (150–180 words) about an event in your city (an opening, an accident, a discovery or a festival). Use at least three passive or impersonal structures (fue + participle, pasiva refleja, se calcula, se desconoce…).',
    talk: 'You are a radio journalist interviewing the learner about something that happened in their town. Ask follow-up questions and encourage passive and impersonal structures (se dice que, fue construido, se calcula…).',
    res: [R.rtve('Telediario'), R.practica(), R.elpais(), R.hh('noticias')]
  });

  U({
    id: 'c1-relativos', title: 'Relativas complejas', goal: ['Use el cual, quien, cuyo and lo cual with prepositions', 'Distinguish defining and non-defining relative clauses', 'Choose indicative or subjunctive in relative clauses'],
    grammar: {
      t: 'Complex relative clauses',
      h: `<p><b>Preposition + article + que / cual</b>: <i>la empresa <b>para la que</b> trabajo</i>, <i>el motivo <b>por el cual</b> dimitió</i>. <i>El cual</i> is more formal and preferred after long prepositions: <i>las razones <b>a partir de las cuales</b>…</i></p>
<p><b>Quien(es)</b> for people, especially after prepositions and in non-defining clauses: <i>la persona <b>con quien</b> hablé</i>, <i>Mi tío, <b>quien</b> vivía en Lima, …</i></p>
<p><b>Cuyo/a/os/as</b> = whose, agreeing with the thing possessed: <i>el autor <b>cuyas</b> novelas…</i></p>
<p><b>Lo que / lo cual</b> refers to a whole idea: <i>Llegó tarde, <b>lo cual</b> molestó a todos.</i></p>
<p><b>Defining vs non-defining</b>: <i>Los alumnos que estudiaron aprobaron</i> (only those) vs. <i>Los alumnos, que estudiaron, aprobaron</i> (all of them; commas).</p>
<p><b>Mood</b>: known antecedent → indicative (<i>Busco al chico que <b>vive</b> aquí</i>); unknown or non-existent → subjunctive (<i>Busco a alguien que <b>sepa</b> chino. No hay nadie que lo <b>entienda</b>.</i>)</p>`
    },
    V: `
el cual / la cual | which, who (formal) | La razón por {la cual} me fui es personal. | The reason why I left is personal.
cuanto / cuanta | all that | Te daré {cuanto} necesites. | I'll give you all you need.
con lo cual | which means | Perdí el tren, {con lo cual} llegué tarde. | I missed the train, which meant I arrived late.
quienquiera | whoever | {Quienquiera} que sea, que espere. | Whoever it is, let them wait.
dondequiera | wherever | {Dondequiera} que vayas, te encontraré. | Wherever you go, I'll find you.
el antecedente | antecedent | El {antecedente} del relativo es «casa». | The antecedent of the relative is «casa».
la razón de ser | raison d'être | Esa es la {razón de ser} del proyecto. | That's the project's raison d'être.
el propósito | purpose | El {propósito} del viaje es comercial. | The purpose of the trip is business.
la finca | estate, property | Una {finca} en la que crecen olivos. | An estate where olive trees grow.
el arrendatario / la arrendataria | lessee, tenant (legal) | El {arrendatario} cuyo contrato vence. | The tenant whose lease is expiring.
el propietario / la propietaria | owner | El {propietario} con quien hablé. | The owner I spoke to.
el arrendador / la arrendadora | landlord (legal) | La {arrendadora} con quien hablé fue amable. | The landlady I spoke to was kind.
el lugar | place | El {lugar} donde nos conocimos. | The place where we met.
el período | period | Un {período} en el que todo cambió. | A period in which everything changed.
el modo | way, manner | El {modo} en que lo dijo me dolió. | The way he said it hurt me.
la manera | way | No hay {manera} de convencerlo. | There's no way to convince him.
el allegado / la allegada | close friend or relative | Solo asistieron los {allegados}. | Only close family and friends attended.
el socio / la socia | partner, member | Los {socios} cuyas cuotas están pendientes. | Members whose fees are outstanding.
la candidatura | candidacy, application | La {candidatura} por la que apostamos. | The candidacy we backed.
el aspirante / la aspirante | applicant | Busco un {aspirante} que hable alemán. | I'm looking for an applicant who speaks German.
primordial | essential, paramount | Alguien para quien la puntualidad sea {primordial}. | Someone for whom punctuality is paramount.
la herencia | inheritance | La {herencia} de la cual hablamos. | The inheritance we talked about.
el heredero / la heredera | heir | El {heredero} a quien correspondía. | The heir to whom it belonged.
el testamento | will | Un {testamento} según el cual todo es para ella. | A will according to which everything is hers.
el retablo | altarpiece | El {retablo} ante el cual rezaban. | The altarpiece before which they prayed.
el estrado | stand, platform | El {estrado} desde el que habló. | The platform from which she spoke.
el viaducto | viaduct | El {viaducto} bajo el cual dormía. | The viaduct under which he slept.
la cima | peak | La {cima} desde la que se ve el mar. | The peak from which you can see the sea.
la pauta | guideline | Las {pautas} según las cuales se evalúa. | The guidelines by which it's assessed.
el suceso | incident | Un {suceso} cuyas causas se desconocen. | An incident whose causes are unknown.
el hecho | fact, event | Un {hecho} del que nadie habla. | A fact nobody talks about.
mencionar | to mention | El libro que {mencionaste}. | The book you mentioned.
referirse a | to refer to | El artículo al que {te refieres}. | The article you're referring to.
acudir a | to turn to | El abogado al que {acudimos}. | The lawyer we turned to.
apoyarse en | to lean on | La persona en quien me {apoyo}. | The person I lean on.
aferrarse a | to cling to | Los recuerdos a los que se {aferra}. | The memories she clings to.
aspirar a | to aspire to | El puesto al que {aspira}. | The position she aspires to.
explicativo / explicativa | non-defining | Una oración {explicativa} va entre comas. | A non-defining clause goes between commas.
especificativo / especificativa | defining | Una relativa {especificativa} no lleva comas. | A defining relative clause has no commas.
el pronombre | pronoun | El {pronombre} relativo. | The relative pronoun.
`,
    D: `
Esta es la empresa para la ___ trabajo desde 2019. | que|cual | This is the company I've worked for since 2019.
Conozco a un escritor ___ novelas se han traducido a veinte idiomas. | cuyas | I know a writer whose novels have been translated into twenty languages.
No vino a la boda, lo ___ sorprendió a todos. | cual|que | He didn't come to the wedding, which surprised everyone.
La persona con ___ hablé ayer es la directora. | quien|la que|la cual | The person I spoke to yesterday is the director.
Busco a alguien que ___ (saber) programar en Python. | sepa | I'm looking for someone who knows how to program in Python.
Busco al chico que ___ (vivir) en el tercero; ¿lo has visto? | vive | I'm looking for the boy who lives on the third floor; have you seen him?
No hay nadie que ___ (entender) estas instrucciones. | entienda | There's nobody who understands these instructions.
Es una ciudad ___ calles son estrechísimas. | cuyas | It's a city whose streets are very narrow.
Ese es el motivo por el ___ me fui. | cual|que | That's the reason why I left.
El puente bajo el ___ dormía era muy antiguo. | cual|que | The bridge under which he slept was very old.
Mi hermana, ___ vive en Berlín, viene en Navidad. | que|quien | My sister, who lives in Berlin, is coming at Christmas.
Haz lo que ___ (querer, tú). | quieras | Do whatever you want.
Quienquiera que ___ (ser), dile que no estoy. | sea | Whoever it is, tell them I'm not in.
Es la única persona en ___ confío. | quien|la que | She's the only person I trust.
El artículo al ___ te refieres es de 2015. | que|cual | The article you're referring to is from 2015.
Necesitamos un piso que ___ (tener) tres habitaciones. | tenga | We need a flat that has three bedrooms.
Vivimos en un piso que ___ (tener) tres habitaciones. | tiene | We live in a flat that has three bedrooms.
La finca, ___ propietario vive en Madrid, está abandonada. | cuyo | The estate, whose owner lives in Madrid, is abandoned.
Es un problema del ___ nadie quiere hablar. | que|cual | It's a problem nobody wants to talk about.
Dondequiera que ___ (ir, tú), llévate el pasaporte. | vayas | Wherever you go, take your passport.
`,
    S: `
Esta es la empresa para la que trabajo desde hace cinco años. | This is the company I've been working for for five years.
Conozco a una autora cuyos libros me encantan. | I know an author whose books I love.
Llegó dos horas tarde, lo cual nos molestó a todos. | He arrived two hours late, which annoyed us all.
Busco a alguien que sepa hablar ruso. | I'm looking for someone who can speak Russian.
No hay nadie que lo entienda. | There's nobody who understands it.
Es la única persona en quien confío de verdad. | She's the only person I truly trust.
Mi hermano, que vive en Chile, viene este verano. | My brother, who lives in Chile, is coming this summer.
Ese fue el motivo por el cual dimitió. | That was the reason why she resigned.
`,
    R: [
      { t: 'Un anuncio y una respuesta', x: `SE BUSCA COMPAÑERO DE PISO. Somos dos chicas de treinta años que trabajamos en el sector sanitario y buscamos a alguien que sea ordenado, que no fume y que respete los horarios de descanso, ya que a menudo trabajamos de noche. El piso, cuyas ventanas dan a un parque, está en el barrio de Chamberí. La habitación que alquilamos es exterior y tiene un pequeño balcón.

RESPUESTA. Hola: Me llamo Pieter y soy un ingeniero holandés que acaba de mudarse a Madrid por trabajo. Creo que cumplo los requisitos que mencionáis: no fumo y soy bastante ordenado, lo cual, según mi madre, es un milagro. Trabajo en una empresa cuyas oficinas están a diez minutos de Chamberí, de manera que el piso me vendría perfecto. Lo único que me preocupa es mi bicicleta, sin la cual no sé vivir. ¿Habría algún sitio donde guardarla? Quedo a la espera de vuestra respuesta.`, q: `¿Qué tipo de compañero buscan las chicas? | Alguien que trabaje de noche ; *Alguien ordenado, que no fume y respete el descanso ; Un estudiante
¿Por qué le vendría bien el piso a Pieter? | Porque es barato ; *Porque su oficina está cerca ; Porque tiene garaje
¿Qué le preocupa a Pieter? | El ruido del parque ; *Dónde guardar su bicicleta ; El horario de las chicas` },
      { t: 'La casa en la que crecí', x: `La casa en la que crecí ya no existe. En su lugar hay ahora un bloque de pisos cuyas fachadas de cristal reflejan el cielo de Valencia. Cada vez que paso por delante, intento recordar el patio en el que mi abuela tendía la ropa, la higuera bajo la cual hacíamos los deberes en verano y la escalera por la que bajábamos corriendo cuando oíamos el carrito de los helados.

Mi abuela, quien había vivido allí más de sesenta años, se negó durante mucho tiempo a vender. Los constructores, con quienes discutía casi a diario, le ofrecieron cada vez más dinero, lo cual solo aumentaba su desconfianza. «No hay dinero que pague mis recuerdos», decía.

Al final, cuando ya no podía subir las escaleras, aceptó mudarse a un piso con ascensor. No conozco a nadie que haya llorado tanto en una mudanza. Sin embargo, el día en que se instaló, colgó en la pared una foto de la higuera. «Lo importante», nos dijo, «no es el lugar donde vives, sino lo que te llevas de él».`, q: `¿Qué hay ahora donde estaba la casa? | Un parque ; *Un bloque de pisos ; Una higuera
¿Qué aumentaba la desconfianza de la abuela? | Las visitas de la familia ; *Que le ofrecieran cada vez más dinero ; El ruido de las obras
¿Por qué aceptó por fin mudarse? | Le pagaron mucho ; *Ya no podía subir las escaleras ; Quería vivir con su familia` },
      { t: 'Comas que cambian el sentido', x: `En español, una simple coma puede cambiar por completo el significado de una frase con relativo. Compárense estas dos oraciones: «Los estudiantes que viven lejos llegaron tarde» y «Los estudiantes, que viven lejos, llegaron tarde». En la primera, solo llegaron tarde algunos estudiantes: los que viven lejos. En la segunda, llegaron tarde todos, y además se añade la información de que todos viven lejos.

La primera se llama relativa especificativa, porque especifica o restringe; la segunda, explicativa, porque solo añade una explicación. En la lengua escrita, la diferencia se marca con comas; en la oral, con pausas y con la entonación.

Hay otro detalle importante: en las explicativas se puede usar «quien» o «el cual» para personas («Mi tía, quien vive en Lima, …»), pero en las especificativas sin preposición se prefiere «que» («La chica que vive en Lima»). Los errores en este punto no impiden la comprensión, pero delatan enseguida a quien no domina el registro escrito. Por eso, revisar la puntuación de las relativas es uno de los mejores consejos para mejorar un texto formal.`, q: `¿Qué significa «Los estudiantes, que viven lejos, llegaron tarde»? | Que solo algunos llegaron tarde ; *Que todos llegaron tarde y todos viven lejos ; Que nadie llegó tarde
¿Cómo se marca la diferencia en la lengua oral? | Con palabras distintas ; *Con pausas y entonación ; No se marca
¿Qué se prefiere en una especificativa sin preposición? | Quien ; El cual ; *Que` }
    ],
    write: 'Describe a place that was important in your life (a house, a school, a café). Use at least six different relative structures (en el que, cuyo, lo cual, quien, donde, el cual…) and one relative with subjunctive.',
    talk: 'You are a flat-share agent. The learner describes the ideal flatmate and flat they are looking for. Push for relative clauses with subjunctive (busco a alguien que…, un piso que tenga…).',
    res: [R.slcAdv(), R.juan(), R.elpais()]
  });

  U({
    id: 'c1-discurso', title: 'Discurso referido y verbos de habla', goal: ['Report statements, questions and orders with full tense shifts', 'Use precise reporting verbs (afirmar, negar, advertir, reconocer…)', 'Summarise what someone said without repeating it word for word'],
    grammar: {
      t: 'Reported speech at C1',
      h: `<p><b>Tense shifts</b> when the reporting verb is past: present → imperfect, perfect/preterite → pluperfect, future → conditional, present subjunctive → imperfect subjunctive. <i>«Lo haré» → Dijo que lo <b>haría</b>.</i> <i>«Quiero que vengas» → Dijo que quería que <b>fuera</b>.</i></p>
<p>If the content is still true, the present can stay: <i>Me dijo que <b>vive</b> en Lisboa</i> (she still does).</p>
<p><b>Orders and requests</b> → que + subjunctive: <i>«Siéntate» → Me pidió que me <b>sentara</b>.</i></p>
<p><b>Precise verbs</b> carry the speaker's intention: <i>afirmar, asegurar, sostener</i> (claim); <i>negar</i> (deny; + subj. or infinitive: <i>negó haberlo hecho</i>); <i>reconocer, admitir</i> (admit); <i>advertir</i> (warn); <i>sugerir, proponer, recomendar</i> (+ subj.); <i>exigir, ordenar</i> (+ subj.); <i>lamentar</i> (+ subj.); <i>prometer</i> (+ conditional / infinitive).</p>
<p><b>Deictic shifts</b>: <i>hoy → aquel día, mañana → al día siguiente, aquí → allí, este → ese/aquel, venir → ir, traer → llevar.</i></p>`
    },
    V: `
aducir | to cite (as a reason) | {Adujo} motivos personales. | She cited personal reasons.
argüir | to argue, contend | {Arguyó} que la ley no era aplicable. | He argued that the law didn't apply.
objetar | to object | {Objetó} que era demasiado caro. | She objected that it was too expensive.
subrayar | to underline, stress | {Subrayó} la importancia del acuerdo. | He stressed the importance of the agreement.
precisar | to specify | {Precisó} que solo afectaba a Madrid. | She specified that it only affected Madrid.
sentenciar | to pronounce (firmly) | «Esto se acabó», {sentenció}. | «This is over», he pronounced.
zanjar | to settle (a matter) | Quiso {zanjar} la polémica. | She wanted to settle the controversy.
murmurar | to murmur | {Murmuró} algo que no entendí. | He murmured something I didn't understand.
mascullar | to mutter | {Masculló} una disculpa. | He muttered an apology.
balbucear | to stammer | {Balbuceó} una excusa. | He stammered an excuse.
exclamar | to exclaim | «¡Por fin!», {exclamó}. | «At last!», she exclaimed.
espetar | to blurt out | Le {espetó} que era un mentiroso. | She blurted out that he was a liar.
bromear | to joke | {Bromeó} con los periodistas. | He joked with the journalists.
replicar | to retort | {Replicó} que eso no era asunto mío. | He retorted that it was none of my business.
jactarse de | to boast | Se {jacta de} no haber leído nunca un libro. | He boasts that he's never read a book.
lamentarse | to complain, lament | Se {lamentaba} de su mala suerte. | He bemoaned his bad luck.
insinuar | to hint, insinuate | {Insinuó} que yo había mentido. | He hinted that I had lied.
reprochar | to reproach | Le {reprochó} que no la hubiera llamado. | She reproached him for not calling her.
echar en cara | to throw in someone's face | Siempre me {echa en cara} aquel error. | He always throws that mistake in my face.
aclarar | to clarify | {Aclaró} que era una broma. | She clarified that it was a joke.
elogiar | to praise | {Elogió} el trabajo del equipo. | She praised the team's work.
achacar | to put down to | {Achacó} el retraso al tráfico. | He put the delay down to the traffic.
suplicar | to beg | Le {suplicó} que se quedara. | She begged him to stay.
declarar | to declare, testify | {Declaró} ante el juez. | He testified before the judge.
pedir encarecidamente | to urge, earnestly request | Le {pidió encarecidamente} que no fuera. | She earnestly asked him not to go.
instar a | to urge | {Instó a} los ciudadanos a votar. | He urged citizens to vote.
disuadir | to dissuade | Intenté {disuadirla}, pero se fue. | I tried to dissuade her, but she left.
alertar | to warn | Los expertos {alertan} de un aumento de casos. | Experts warn of a rise in cases.
preguntarse | to wonder | Me {pregunto} si vendrá. | I wonder if he'll come.
dar a conocer | to make public | {Dio a conocer} los resultados. | She made the results public.
testificar | to testify | Fue llamado a {testificar}. | He was called to testify.
el interlocutor / la interlocutora | the other party (in a conversation) | Escucha a su {interlocutor}. | He listens to the person he's talking to.
el testimonio | testimony | Su {testimonio} fue clave. | Her testimony was key.
literalmente | literally, word for word | Me dijo, {literalmente}, que me fuera. | He told me, word for word, to leave.
a decir de | according to | {A decir de} los vecinos, era un hombre tranquilo. | According to the neighbours, he was a quiet man.
la víspera | the day before, eve | Me lo contó la {víspera} de la boda. | She told me on the eve of the wedding.
el desmentido | denial (official) | Publicaron un {desmentido}. | They published a denial.
la versión | version | Hay dos {versiones} de los hechos. | There are two versions of the events.
contradecirse | to contradict oneself | Se {contradijo} varias veces. | He contradicted himself several times.
citar | to quote | Me gusta {citar} a Machado. | I like to quote Machado.
`,
    D: `
«Estoy cansada.» → Dijo que ___ cansada. | estaba | «I'm tired.» → She said she was tired.
«He perdido las llaves.» → Me contó que ___ las llaves. | había perdido | «I've lost the keys.» → He told me he had lost the keys.
«Lo terminaré mañana.» → Prometió que lo ___ al día siguiente. | terminaría | «I'll finish it tomorrow.» → She promised she'd finish it the next day.
«Cierra la ventana.» → Me pidió que ___ la ventana. | cerrara|cerrase | «Close the window.» → She asked me to close the window.
«¿Dónde vives?» → Me preguntó dónde ___. | vivía | «Where do you live?» → She asked me where I lived.
«¿Has comido?» → Me preguntó si ___. | había comido | «Have you eaten?» → He asked me whether I had eaten.
«Quiero que vengáis.» → Dijo que quería que ___. | fuéramos|fuésemos | «I want you to come.» → She said she wanted us to go.
«No lo hice yo.» → Negó ___ hecho. | haberlo | «I didn't do it.» → He denied having done it.
«Me equivoqué.» → Reconoció que se ___ equivocado. | había | «I made a mistake.» → She admitted she had made a mistake.
«No salgáis.» → Nos advirtió que no ___. | saliéramos|saliésemos | «Don't go out.» → He warned us not to go out.
«¿Por qué no lo dejamos para mañana?» → Sugirió que lo ___ para el día siguiente. | dejáramos|dejásemos | «Why don't we leave it until tomorrow?» → He suggested we leave it until the next day.
«Aquí hace frío.» → Dijo que ___ hacía frío. | allí | «It's cold here.» → He said it was cold there.
«Traeré el vino.» → Dijo que ___ el vino. | llevaría | «I'll bring the wine.» → He said he'd bring the wine.
El ministerio ___ la noticia: era falsa. | desmintió | The ministry denied the news: it was false.
Insistió ___ que pagaría él. | en | He insisted that he'd pay.
Se quejó ___ que nadie le hacía caso. | de | She complained that nobody paid attention to her.
Le recordé que ___ (tener) cita con el médico. | tenía | I reminded him he had a doctor's appointment.
Lamentó que no ___ (poder, nosotros) asistir. | hubiéramos podido|pudiéramos | She regretted that we couldn't attend.
«Mi hermana vive en Lisboa» (todavía vive allí). → Me dijo que su hermana ___ en Lisboa. | vive|vivía | «My sister lives in Lisbon.» → He told me his sister lives in Lisbon.
Exigieron que se ___ (repetir) la votación. | repitiera|repitiese | They demanded that the vote be repeated.
`,
    S: `
Me dijo que estaba muy cansada y que se iba a casa. | She told me she was very tired and was going home.
Prometió que no volvería a llegar tarde. | He promised he wouldn't be late again.
Me pidió que le ayudara con la mudanza. | She asked me to help her with the move.
Negó haber recibido el correo. | He denied having received the email.
Reconoció que se había equivocado. | She admitted she'd made a mistake.
Nos advirtió que no saliéramos de noche. | He warned us not to go out at night.
Según la portavoz, el acuerdo se firmará mañana. | According to the spokesperson, the agreement will be signed tomorrow.
Me preguntó si había estado alguna vez en México. | She asked me if I had ever been to Mexico.
`,
    R: [
      { t: 'La rueda de prensa', x: `La consejera de Sanidad compareció ayer ante los medios para explicar el cierre temporal del hospital comarcal. Afirmó que la decisión se había tomado «por motivos estrictamente técnicos» y aseguró que el centro volvería a abrir en un plazo máximo de tres meses.

Preguntada por los periodistas, reconoció que la comunicación con los vecinos no había sido la adecuada y lamentó que muchas familias se hubieran enterado por las redes sociales. Sin embargo, negó que existiera un plan para privatizar el servicio, como habían denunciado los sindicatos esa misma mañana.

La consejera añadió que, mientras duraran las obras, los pacientes serían atendidos en el hospital de la capital, a cuarenta kilómetros, y prometió un servicio de autobús gratuito. Al final de su intervención, advirtió que no toleraría «bulos que generen alarma» y pidió a los ciudadanos que se informaran solo a través de los canales oficiales.

Los sindicatos, por su parte, exigieron que se publicaran los informes técnicos que justificaban el cierre.`, q: `¿Qué reconoció la consejera? | Que el cierre sería definitivo ; *Que la comunicación con los vecinos había sido mala ; Que había un plan de privatización
¿Qué negó? | Que el hospital fuera a cerrar ; *Que hubiera un plan para privatizar el servicio ; Que hubiera autobús gratuito
¿Qué exigieron los sindicatos? | La dimisión de la consejera ; *La publicación de los informes técnicos ; Un nuevo hospital` },
      { t: 'Lo que me dijo mi abuela', x: `La última vez que vi a mi abuela con buena salud, me llevó aparte después de comer y me dijo que tenía que contarme algo importante. Me confesó que, de joven, había estado a punto de casarse con otro hombre, un músico de Cádiz que tocaba la guitarra en las fiestas del pueblo. Me explicó que sus padres se habían opuesto y que ella, con diecinueve años, no se había atrevido a desobedecerlos.

Le pregunté si se arrepentía. Se quedó callada un buen rato y luego me contestó que no, que había sido feliz con mi abuelo, pero que a veces se preguntaba cómo habría sido su vida. Me pidió que no se lo contara a nadie mientras ella viviera y me hizo prometer que, si algún día tenía que elegir entre lo que quería y lo que esperaban los demás, pensaría bien en lo que ella me había dicho.

Murió dos años después. Nunca le he contado esta historia a mi madre. Pero hace poco, cuando tuve que decidir si dejaba mi trabajo para estudiar música, me acordé de sus palabras.`, q: `¿Qué le confesó la abuela? | Que no quería a su marido ; *Que casi se casó con otro hombre ; Que tocaba la guitarra
¿Se arrepentía la abuela de su decisión? | Sí, mucho ; *No, aunque a veces imaginaba otra vida ; No lo dijo
¿Qué le pidió al narrador? | Que se lo contara a su madre ; *Que no lo contara mientras ella viviera ; Que estudiara música` },
      { t: 'Citar o resumir', x: `En los medios de comunicación, la forma de transmitir las palabras ajenas nunca es neutral. No es lo mismo escribir que un político «dijo» algo que escribir que lo «admitió», lo «insinuó» o lo «aseguró». Cada verbo añade una interpretación: «admitir» supone que había algo que ocultar; «insinuar» sugiere que no se atrevió a decirlo claramente; «asegurar» transmite firmeza, pero también deja abierta la posibilidad de que no sea cierto.

Por eso los manuales de estilo recomiendan elegir con cuidado los verbos de habla. La cita textual, entre comillas, ofrece mayor fidelidad, pero puede sacar las palabras de su contexto. El estilo indirecto, en cambio, permite resumir y aclarar, aunque obliga al periodista a interpretar.

Para un estudiante de español, dominar estos verbos es un salto cualitativo. Quien solo usa «dijo que» se expresa correctamente; quien distingue entre «reconoció», «advirtió» y «matizó» transmite además matices de intención que hacen su discurso mucho más preciso y natural.`, q: `Según el texto, ¿qué sugiere el verbo «admitir»? | Que la persona habló con firmeza ; *Que había algo que ocultar ; Que fue una broma
¿Qué inconveniente tiene la cita textual? | Es menos fiel ; *Puede sacar las palabras de contexto ; Es demasiado larga
¿Qué recomienda el texto a los estudiantes? | Usar siempre «dijo que» ; *Dominar verbos de habla precisos ; Evitar el estilo indirecto` }
    ],
    write: 'Report a conversation or meeting you had recently (180–220 words) without quoting directly. Use at least eight different reporting verbs (afirmar, reconocer, sugerir, advertir, negar, prometer…) with the right tense shifts.',
    talk: 'Play a journalist who has just attended a press conference. The learner asks you what each person said; you answer, and the learner must then report it back accurately using varied reporting verbs.',
    res: [R.ser('Hoy por hoy'), R.rtve('24 horas'), R.elpais()]
  });

  U({
    id: 'c1-nominal', title: 'Nominalización y prosa académica', goal: ['Turn verbs and adjectives into nouns to write denser, more formal prose', 'Use impersonal academic formulas (cabe señalar, se observa, cabe preguntarse)', 'Structure a short academic paragraph'],
    grammar: {
      t: 'Nominalisation and academic style',
      h: `<p><b>Nominalisation</b> turns an action into a noun, so ideas can become subjects: <i>Los precios subieron → <b>La subida de los precios</b> provocó protestas.</i> Common suffixes: <i>-ción</i> (reducir → reducción), <i>-miento</i> (crecer → crecimiento), <i>-dad</i> (posible → posibilidad), <i>-ez/-eza</i> (escaso → escasez), <i>-aje</i> (aterrizar → aterrizaje), zero (cambiar → cambio).</p>
<p><b>Academic impersonality</b>: avoid <i>yo</i> → <i>se observa, se constata, cabe señalar, cabe preguntarse, conviene destacar, resulta llamativo que + subj.</i>, or the modest plural <i>(como veremos)</i>.</p>
<p><b>Hedging</b>: <i>parece que, todo indica que, cabe la posibilidad de que + subj., en cierta medida, en principio.</i></p>
<p><b>Paragraph structure</b>: topic sentence → development with data or examples → conclusion or link. Connectors: <i>en primer lugar, asimismo, por otra parte, en consecuencia, en suma.</i></p>
<p><b>Careful</b>: too many nouns in a row makes prose heavy (<i>la realización de la evaluación de la implantación</i>). Keep one strong verb per sentence.</p>`
    },
    V: `
la nominalización | nominalisation | La {nominalización} es típica del lenguaje académico. | Nominalisation is typical of academic language.
el repunte | upturn | Un {repunte} de la inflación. | An upturn in inflation.
el retroceso | setback, decline | Un {retroceso} en las ventas. | A decline in sales.
el incremento | increase | Un {incremento} del 5 %. | A 5% increase.
la disminución | decrease | La {disminución} de la natalidad. | The fall in the birth rate.
el descenso | decline | Un {descenso} del consumo. | A decline in consumption.
la implantación | introduction, rollout | La {implantación} de la nueva norma. | The introduction of the new rule.
la puesta en marcha | launch | La {puesta en marcha} del proyecto. | The launch of the project.
la elaboración | drafting, production | La {elaboración} del informe. | The drafting of the report.
la evaluación | assessment | Una {evaluación} rigurosa. | A rigorous assessment.
la ejecución | implementation | La {ejecución} del proyecto. | The implementation of the project.
el análisis | analysis | Un {análisis} detallado. | A detailed analysis.
el encuestado / la encuestada | respondent | El 60 % de los {encuestados}. | 60% of respondents.
el trabajo de campo | fieldwork | El {trabajo de campo} duró un año. | The fieldwork lasted a year.
la evolución | development, trend | La {evolución} de los precios. | The trend in prices.
los resultados | results | Los {resultados} son concluyentes. | The results are conclusive.
concluyente | conclusive | No hay datos {concluyentes}. | There are no conclusive data.
de ello se deduce | it follows | {De ello se deduce} que el plan falló. | It follows that the plan failed.
al alza | rising | Los precios siguen {al alza}. | Prices keep rising.
a la baja | falling | Una tendencia {a la baja}. | A downward trend.
conviene destacar | it is worth stressing | {Conviene destacar} la calidad de los datos. | The quality of the data is worth stressing.
cabe preguntarse | one may ask | {Cabe preguntarse} si es suficiente. | One may ask whether it is enough.
se constata | it is found | {Se constata} un aumento del uso. | An increase in use is found.
se observa | it is observed | {Se observa} una mejora. | An improvement is observed.
resulta llamativo | it is striking | {Resulta llamativo} que nadie lo haya estudiado. | It is striking that nobody has studied it.
en cierta medida | to some extent | {En cierta medida}, es comprensible. | To some extent, it's understandable.
en suma | in sum | {En suma}, los datos confirman la hipótesis. | In sum, the data confirm the hypothesis.
el agotamiento | depletion, exhaustion | El {agotamiento} de los recursos. | The depletion of resources.
la escasez | shortage | La {escasez} de agua. | Water shortage.
la viabilidad | viability | Se estudia la {viabilidad} del plan. | The plan's viability is being studied.
la equidad | equity, fairness | La {equidad} del sistema fiscal. | The fairness of the tax system.
la longevidad | longevity | La {longevidad} de la población. | The longevity of the population.
la esfera | sphere | En la {esfera} pública. | In the public sphere.
el abandono | abandonment, dropout | El {abandono} escolar. | School dropout.
la brecha | gap | La {brecha} digital. | The digital divide.
la cuantificación | quantification | La {cuantificación} de los daños. | The quantification of the damage.
la variable | variable | Una {variable} clave. | A key variable.
el marco teórico | theoretical framework | El {marco teórico} del trabajo. | The theoretical framework of the paper.
la bibliografía | bibliography, references | Consulte la {bibliografía}. | Check the references.
el resumen | abstract, summary | Lee primero el {resumen}. | Read the abstract first.
`,
    D: `
Los precios subieron. → La ___ de los precios. | subida | Prices rose. → The rise in prices.
El paro aumentó. → El ___ del paro. | aumento | Unemployment increased. → The increase in unemployment.
La población envejece. → El ___ de la población. | envejecimiento | The population is ageing. → Population ageing.
Reducir los gastos. → La ___ de los gastos. | reducción | To reduce spending. → The reduction of spending.
Analizar los datos. → El ___ de los datos. | análisis | To analyse the data. → The analysis of the data.
Escaso → la ___ de recursos. | escasez | Scarce → the shortage of resources.
Posible → la ___ de un acuerdo. | posibilidad | Possible → the possibility of an agreement.
Elaborar el informe → la ___ del informe. | elaboración | To draft the report → the drafting of the report.
Implantar una norma → la ___ de una norma. | implantación | To introduce a rule → the introduction of a rule.
Desigual → la ___ social. | desigualdad | Unequal → social inequality.
Abandonar los estudios → el ___ escolar. | abandono | To drop out of school → school dropout.
Cabe ___ si las medidas son suficientes. | preguntarse | One may ask whether the measures are sufficient.
Se ___ una ligera mejora respecto al año anterior. | observa|constata | A slight improvement on the previous year is observed.
Resulta llamativo que nadie lo ___ (estudiar) antes. | haya estudiado | It is striking that nobody has studied it before.
En ___, los resultados confirman la hipótesis inicial. | suma | In sum, the results confirm the initial hypothesis.
Los precios mantienen una tendencia ___ alza. | al | Prices maintain an upward trend.
No hay datos ___ que lo demuestren. | concluyentes | There are no conclusive data to prove it.
Cabe ___ que la muestra es reducida. | señalar|destacar | It should be noted that the sample is small.
La brecha ___ afecta sobre todo a los mayores. | digital | The digital divide mainly affects older people.
En el ___ laboral, la situación es distinta. | ámbito | In the work sphere, the situation is different.
`,
    S: `
La subida de los precios provocó numerosas protestas. | The rise in prices caused numerous protests.
Cabe señalar que la muestra es reducida. | It should be noted that the sample is small.
Se observa una tendencia al alza en el consumo. | An upward trend in consumption is observed.
Resulta llamativo que el fenómeno no se haya estudiado antes. | It is striking that the phenomenon has not been studied before.
Los resultados no son concluyentes. | The results are not conclusive.
El envejecimiento de la población plantea nuevos retos. | Population ageing poses new challenges.
En suma, los datos confirman nuestra hipótesis. | In sum, the data confirm our hypothesis.
Cabe preguntarse si estas medidas serán suficientes. | One may ask whether these measures will be sufficient.
`,
    R: [
      { t: 'Resumen de un estudio', x: `El presente estudio analiza la relación entre el uso de dispositivos móviles y el rendimiento académico en estudiantes de secundaria. Para ello, se ha trabajado con una muestra de 1.200 alumnos de quince centros públicos de la Comunidad de Madrid.

Los resultados indican que el uso intensivo del teléfono móvil durante el horario de estudio se asocia a una disminución de las calificaciones en matemáticas y lengua. Cabe señalar, no obstante, que dicha asociación no implica necesariamente una relación de causalidad: es posible que otras variables, como el nivel socioeconómico o la motivación previa, influyan en ambos factores.

Resulta llamativo, asimismo, que el efecto sea mayor entre los alumnos de menor edad. Se observa también una diferencia significativa entre quienes utilizan el móvil para actividades académicas y quienes lo emplean con fines de ocio.

En suma, el estudio confirma parcialmente la hipótesis inicial y plantea la necesidad de profundizar en la investigación mediante estudios longitudinales que permitan establecer relaciones causales.`, q: `¿Qué analiza el estudio? | El uso de ordenadores en la universidad ; *La relación entre el uso del móvil y el rendimiento académico ; Las notas de los profesores
¿Qué advierte el texto sobre los resultados? | Que demuestran una causa clara ; *Que la asociación no implica necesariamente causalidad ; Que la muestra es demasiado grande
¿Qué propone al final? | Prohibir el móvil ; *Hacer estudios longitudinales ; Repetir el estudio en otra ciudad` },
      { t: 'El mismo contenido, dos estilos', x: `Versión coloquial: «Como cada vez nacen menos niños y la gente vive más años, en España hay cada vez más jubilados y menos personas trabajando. Por eso mucha gente se pregunta si en el futuro se van a poder pagar las pensiones».

Versión académica: «La disminución de la natalidad y el aumento de la esperanza de vida han provocado un progresivo envejecimiento de la población española. En consecuencia, se ha reducido la proporción entre población activa y población jubilada, lo cual plantea serios interrogantes sobre la sostenibilidad del sistema de pensiones».

La diferencia no está en la información, que es prácticamente la misma, sino en la forma de presentarla. En la versión académica, los procesos se convierten en sustantivos («disminución», «aumento», «envejecimiento»), lo que permite condensar las ideas y relacionarlas mediante verbos como «provocar» o «plantear». Además, desaparecen las referencias a «la gente» y se sustituyen por conceptos más precisos.

Ninguna versión es mejor en términos absolutos. La primera es ideal para una conversación; la segunda, para un informe o un trabajo universitario. Saber pasar de una a otra es una de las competencias que definen el nivel C1.`, q: `¿Cuál es la diferencia principal entre las dos versiones? | La información ; *La forma de presentar la información ; La longitud
¿Qué ocurre con los procesos en la versión académica? | Desaparecen ; *Se convierten en sustantivos ; Se repiten
¿Qué opina el autor de las dos versiones? | La académica es siempre mejor ; *Cada una es adecuada para un contexto ; La coloquial es incorrecta` },
      { t: 'Cómo escribir un buen párrafo', x: `Un párrafo académico eficaz suele seguir una estructura sencilla. Comienza con una oración temática que presenta la idea principal; continúa con un desarrollo en el que se aportan datos, ejemplos o argumentos; y termina con una oración que resume lo dicho o enlaza con el párrafo siguiente.

Uno de los errores más frecuentes es acumular sustantivos abstractos sin verbos que los relacionen. Frases como «la realización de la evaluación de la implantación del programa» resultan pesadas y difíciles de entender. Es preferible escribir «evaluamos cómo se ha implantado el programa» o, en un registro más impersonal, «se ha evaluado la implantación del programa».

Otro problema habitual es la falta de matices. En el ámbito académico, rara vez se puede afirmar algo con absoluta certeza. Por eso conviene utilizar expresiones como «parece indicar», «todo apunta a que» o «en cierta medida», que muestran prudencia sin restar claridad.

En suma, escribir bien no consiste en complicar el lenguaje, sino en organizar las ideas de manera que el lector pueda seguirlas sin esfuerzo.`, q: `¿Con qué debe empezar un párrafo académico? | Con un ejemplo ; *Con una oración temática ; Con una cita
¿Qué error se menciona? | Usar demasiados verbos ; *Acumular sustantivos abstractos sin verbos ; Escribir frases cortas
¿Por qué conviene usar expresiones como «todo apunta a que»? | Para alargar el texto ; *Para mostrar prudencia sin perder claridad ; Para sonar coloquial` }
    ],
    write: 'Write an academic paragraph (180–220 words) on a social trend in your country (ageing, housing, remote work, tourism…). Include a topic sentence, at least five nominalisations, two impersonal formulas (cabe señalar, se observa…) and one hedge.',
    talk: 'Act as a university tutor reviewing the learner\'s research idea. Ask them to explain their hypothesis, sample, method and expected results, and model academic phrasing.',
    res: [R.bvmc('artículos académicos'), R.slcAdv(), R.fundeu()]
  });

  U({
    id: 'c1-trabajo', title: 'El mundo profesional: reuniones y negociación', goal: ['Lead and take part in meetings: propose, interrupt, disagree politely', 'Negotiate terms and reach agreements', 'Write a concise internal report or email'],
    grammar: {
      t: 'Softening, proposing and negotiating',
      h: `<p><b>Softening with conditional and imperfect</b>: <i>¿Podríamos…? Quería comentaros… Yo diría que… Sería conveniente que + imperf. subj.</i></p>
<p><b>Proposals</b>: <i>¿Qué os parece si + present? Propongo que + subj. ¿Y si + imperf. subj.? Lo ideal sería que + imperf. subj.</i></p>
<p><b>Polite disagreement</b>: <i>Entiendo tu postura, pero… No acabo de verlo claro. Yo no lo plantearía así. Hasta cierto punto sí, pero…</i></p>
<p><b>Interrupting and taking the floor</b>: <i>Perdona que te interrumpa… Si me permites… Antes de seguir… Volviendo a lo que decía…</i></p>
<p><b>Conditions in negotiation</b>: <i>siempre que, siempre y cuando, a condición de que, con tal de que</i> + subj.; <i>en caso de que</i> + subj.; <i>de lo contrario</i> + indicative.</p>`
    },
    V: `
la junta | board; meeting | La {junta} directiva se reúne mañana. | The board meets tomorrow.
ruegos y preguntas | any other business | Pasamos al punto de {ruegos y preguntas}. | We move on to any other business.
convocar | to call (a meeting) | La directora {convocó} una reunión urgente. | The director called an urgent meeting.
la partida presupuestaria | budget item | No hay {partida presupuestaria} para eso. | There's no budget line for that.
pujar | to bid | Varias empresas {pujan} por el contrato. | Several firms are bidding for the contract.
tomar la palabra | to take the floor | Si me permitís, {tomo la palabra}. | If you'll allow me, I'll take the floor.
el calendario | schedule | Un {calendario} cerrado. | A fixed schedule.
el tira y afloja | give and take | Tras un largo {tira y afloja}, firmaron. | After a lot of give and take, they signed.
el margen | margin, leeway | No tenemos mucho {margen}. | We don't have much leeway.
hacer concesiones | to make concessions | Ambas partes {hicieron concesiones}. | Both sides made concessions.
cerrar un trato | to close a deal | Por fin {cerramos el trato}. | We finally closed the deal.
la bonificación | bonus; discount | Una {bonificación} por pronto pago. | A discount for early payment.
la contraoferta | counter-offer | Nos hicieron una {contraoferta}. | They made us a counter-offer.
el distribuidor / la distribuidora | distributor | Buscamos un {distribuidor} en Francia. | We're looking for a distributor in France.
el punto de partida | starting point | Es un buen {punto de partida}. | It's a good starting point.
las condiciones | terms | Aceptamos las {condiciones}. | We accept the terms.
la cartera de clientes | client portfolio | Ampliamos la {cartera de clientes}. | We're expanding our client portfolio.
la cláusula | clause | Hay una {cláusula} de rescisión. | There's a termination clause.
el hito | milestone | Es un {hito} para la empresa. | It's a milestone for the company.
el volumen de negocio | turnover | El {volumen de negocio} se ha duplicado. | Turnover has doubled.
el balance | assessment; balance sheet | Hacemos {balance} del año. | We take stock of the year.
la puesta al día | update | Necesito una {puesta al día} del proyecto. | I need an update on the project.
la rentabilidad | profitability | Hay que mejorar la {rentabilidad}. | Profitability must be improved.
encomendar | to entrust | Le {encomendaron} la dirección del equipo. | She was entrusted with leading the team.
hacerse cargo de | to take charge of | Yo {me hago cargo de} los proveedores. | I'll take charge of the suppliers.
a medio plazo | in the medium term | {A medio plazo}, abriremos otra sede. | In the medium term, we'll open another office.
de cara a | with a view to, looking ahead to | {De cara al} próximo año, hay que crecer. | Looking ahead to next year, we must grow.
la tarea pendiente | pending task | Quedan tres {tareas pendientes}. | There are three pending tasks.
la reestructuración | restructuring | Anunciaron una {reestructuración}. | They announced a restructuring.
la jornada intensiva | continuous working day | En verano hacemos {jornada intensiva}. | In summer we work a continuous day.
el equipo directivo | management team | El {equipo directivo} lo aprobó. | The management team approved it.
el organigrama | org chart | Consulta el {organigrama}. | Check the org chart.
la flexibilidad horaria | flexible working hours | Ofrecemos {flexibilidad horaria}. | We offer flexible working hours.
la baja por paternidad | paternity leave | Se cogió la {baja por paternidad}. | He took paternity leave.
la modalidad híbrida | hybrid working | Trabajamos en {modalidad híbrida}. | We work a hybrid model.
la eficiencia | efficiency | La {eficiencia} del equipo ha mejorado. | The team's efficiency has improved.
la retribución | pay, remuneration | Una {retribución} variable. | Variable pay.
el incentivo | incentive | Un {incentivo} por objetivos. | A performance incentive.
de lo contrario | otherwise | Firmad hoy; {de lo contrario}, perderemos la oferta. | Sign today; otherwise, we'll lose the offer.
a condición de que | on condition that | Acepto, {a condición de que} se revise en junio. | I accept, on condition that it's reviewed in June.
`,
    D: `
¿___ (poder, nosotros) empezar ya la reunión? | Podríamos | Could we start the meeting now?
Perdona que te ___ (interrumpir), pero no estoy de acuerdo. | interrumpa | Sorry to interrupt, but I don't agree.
Propongo que ___ (dejar, nosotros) este punto para la próxima reunión. | dejemos | I propose we leave this point for the next meeting.
¿Y si ___ (cambiar, nosotros) de proveedor? | cambiáramos|cambiásemos | What if we changed supplier?
Lo ideal sería que el informe ___ (estar) listo el lunes. | estuviera|estuviese | Ideally the report would be ready on Monday.
¿Qué os parece si ___ (empezar, nosotros) por el presupuesto? | empezamos | How about we start with the budget?
Aceptamos, a condición de que el precio se ___ (revisar) en junio. | revise | We accept, on condition that the price is reviewed in June.
Firmad hoy; de lo ___, perderemos la oferta. | contrario | Sign today; otherwise, we'll lose the offer.
Entiendo tu postura, ___ creo que hay otra opción. | pero | I understand your position, but I think there's another option.
Sería conveniente que todos ___ (leer) el documento antes. | leyeran|leyesen | It would be advisable for everyone to read the document beforehand.
La directora ___ (convocar) una reunión de urgencia ayer. | convocó | The director called an emergency meeting yesterday.
¿Quién levanta ___ de la reunión? | acta | Who's taking the minutes of the meeting?
El primer punto del orden del ___ es el presupuesto. | día | The first item on the agenda is the budget.
Al final llegamos ___ un acuerdo. | a | In the end we reached an agreement.
Ninguna de las dos partes quería ___. | ceder | Neither side wanted to give way.
A largo ___, el proyecto será rentable. | plazo | In the long term, the project will be profitable.
Tienes que aprender a ___ tareas en tu equipo. | delegar | You need to learn to delegate tasks to your team.
No acabo de ___ claro el plan. | verlo|ver | I'm not entirely convinced by the plan.
Si me ___ (permitir, tú), añadiría un punto. | permites | If you'll allow me, I'd add a point.
En caso de que el cliente ___ (rechazar) la oferta, tenemos un plan B. | rechace | In case the client rejects the offer, we have a plan B.
`,
    S: `
Si os parece, empezamos por el primer punto del orden del día. | If it's OK with you, we'll start with the first item on the agenda.
Perdona que te interrumpa, pero quería añadir algo. | Sorry to interrupt, but I wanted to add something.
Entiendo tu postura, pero no acabo de verlo claro. | I understand your position, but I'm not entirely convinced.
¿Y si dejáramos esta decisión para la semana que viene? | What if we left this decision until next week?
Aceptamos, siempre que se revise el precio en seis meses. | We accept, provided the price is reviewed in six months.
Lo ideal sería que el informe estuviera listo el viernes. | Ideally the report would be ready on Friday.
Después de dos horas de negociación, llegamos a un acuerdo. | After two hours of negotiation, we reached an agreement.
Haremos un seguimiento semanal de las tareas pendientes. | We'll do a weekly follow-up of the pending tasks.
`,
    R: [
      { t: 'Acta de una reunión', x: `ACTA DE LA REUNIÓN DEL DEPARTAMENTO DE MARKETING
Asistentes: Laura Gil (directora), Pablo Sanz, Irene Mora, Tom Visser.

1. Presupuesto del segundo semestre. La directora informa de que el presupuesto se reducirá un 15 %. Pablo plantea que se recorten primero los gastos de publicidad en papel, cuyo rendimiento ha sido bajo. Irene se muestra de acuerdo, pero matiza que conviene mantener los anuncios en revistas especializadas.

2. Campaña de otoño. Tom propone que la campaña se centre en redes sociales y que se contrate a dos creadores de contenido. Laura considera la idea interesante, aunque pide que se presente un análisis de costes antes de tomar una decisión.

3. Teletrabajo. Se acuerda mantener dos días de teletrabajo semanales, siempre que se garantice la presencia de al menos dos personas en la oficina cada día.

Tareas pendientes: Tom elaborará el análisis de costes antes del día 20. Irene revisará los contratos con las revistas.
Próxima reunión: 25 de septiembre.`, q: `¿Qué propone Pablo? | Contratar creadores de contenido ; *Recortar primero la publicidad en papel ; Aumentar el presupuesto
¿Qué pide la directora antes de decidir sobre la campaña de Tom? | Una reunión con los creadores ; *Un análisis de costes ; La opinión del cliente
¿Qué se acuerda sobre el teletrabajo? | Eliminarlo ; *Mantener dos días con presencia mínima en la oficina ; Ampliarlo a toda la semana` },
      { t: 'Una negociación difícil', x: `Llevábamos tres horas negociando con el proveedor y no había manera de llegar a un acuerdo. Ellos querían subir los precios un 12 % por el aumento del coste de las materias primas; nosotros no podíamos asumir más de un 5 %.

En un momento dado, la directora comercial del proveedor se levantó y dijo que, en esas condiciones, no tenía sentido seguir. Mi jefa, que es una negociadora excelente, mantuvo la calma. «Entiendo vuestra postura», dijo, «pero antes de levantarnos, ¿qué os parecería si habláramos de volumen en lugar de precio?».

Les propuso firmar un contrato de tres años, en lugar de uno, a cambio de una subida del 7 %. Para el proveedor, la estabilidad de un cliente a largo plazo compensaba la diferencia. Añadió una cláusula según la cual el precio se revisaría cada año en función de un índice público.

Tras una breve pausa para consultar, aceptaron. Al salir, le pregunté a mi jefa cómo lo había conseguido. «Cuando una negociación se bloquea en un punto», me contestó, «hay que cambiar de terreno».`, q: `¿Qué querían inicialmente el proveedor y la empresa? | Ambos un 5 % ; *El proveedor subir un 12 % y la empresa solo un 5 % ; Ambos un 12 %
¿Qué ofreció la jefa a cambio de una subida del 7 %? | Un pago por adelantado ; *Un contrato de tres años ; Más publicidad
¿Qué consejo da la jefa? | No ceder nunca ; *Cambiar de terreno cuando la negociación se bloquea ; Levantarse de la mesa` },
      { t: 'Reuniones que podrían haber sido un correo', x: `Según diversas encuestas, los trabajadores de oficina pasan una parte considerable de su jornada en reuniones, y muchos consideran que buena parte de ellas resultan improductivas. El problema no son las reuniones en sí, sino la manera de organizarlas.

Los expertos en gestión coinciden en varias recomendaciones. En primer lugar, toda reunión debería tener un objetivo claro y un orden del día que se envíe con antelación. En segundo lugar, conviene limitar el número de asistentes a las personas que realmente tienen algo que aportar o decidir. En tercer lugar, es fundamental terminar con un acta breve que recoja los acuerdos, los responsables y los plazos; de lo contrario, es frecuente que nadie recuerde quién debía hacer qué.

Algunas empresas han ido más allá y han establecido días sin reuniones o un límite máximo de treinta minutos. Los resultados, según sus responsables, son alentadores: los empleados afirman concentrarse mejor y las reuniones que se mantienen son más eficaces. Al fin y al cabo, como dice un conocido directivo, «una reunión sin decisiones es solo una conversación cara».`, q: `Según el texto, ¿cuál es el problema de las reuniones? | Que existan ; *La forma de organizarlas ; Que sean demasiado cortas
¿Qué recomiendan hacer al final de una reunión? | Tomar un café ; *Redactar un acta breve con acuerdos, responsables y plazos ; Convocar otra reunión
¿Qué medida han tomado algunas empresas? | Prohibir el correo electrónico ; *Días sin reuniones o un límite de treinta minutos ; Reuniones diarias obligatorias` }
    ],
    write: 'Write an internal email (170–200 words) to your team summarising a meeting: the decisions taken, who does what by when, and one open issue. Use at least three softened proposals or conditions (sería conveniente que, siempre que, de lo contrario…).',
    talk: 'Negotiate with the learner: you are a supplier who wants to raise prices by 10%; the learner represents the client. Push back, make counter-offers and see if you can reach an agreement with conditions.',
    res: [R.slcAdv(), R.ser('Hora 25 de los negocios'), R.elpais()]
  });

  U({
    id: 'c1-salud', title: 'Salud y divulgación científica', goal: ['Understand popular-science texts on health and medicine', 'Talk about symptoms, treatments and research precisely', 'Express degrees of certainty about scientific claims'],
    grammar: {
      t: 'Certainty, causality and hedging in science',
      h: `<p><b>Degrees of certainty</b>: <i>está demostrado que</i> + ind. › <i>todo indica que</i> + ind. › <i>es probable que</i> + subj. › <i>no está claro que / no se ha demostrado que</i> + subj.</p>
<p><b>Cause and effect</b>: <i>provocar, causar, desencadenar, favorecer, estar relacionado con, asociarse a, deberse a</i> (<i>El aumento se debe a…</i>). <i>Correlación no implica causalidad.</i></p>
<p><b>Purpose and result</b>: <i>para que / a fin de que</i> + subj.; <i>de modo que / de ahí que</i> (+ subj. for <i>de ahí que</i>).</p>
<p><b>Conditional of reported information</b> (journalistic): <i>El fármaco <b>reduciría</b> el riesgo en un 30 %, según el estudio</i> — signals the claim is not yet confirmed.</p>
<p><b>Precise quantity</b>: <i>uno de cada cinco, el doble, la mitad, un tercio, multiplicarse por tres, reducirse a la mitad.</i></p>`
    },
    V: `
el ensayo clínico | clinical trial | Participó en un {ensayo clínico}. | She took part in a clinical trial.
el fármaco | drug, medicine | Un nuevo {fármaco} contra la migraña. | A new drug against migraine.
el efecto secundario | side effect | No tiene {efectos secundarios} graves. | It has no serious side effects.
la dosis | dose | No supere la {dosis} recomendada. | Do not exceed the recommended dose.
el diagnóstico | diagnosis | Un {diagnóstico} precoz salva vidas. | An early diagnosis saves lives.
diagnosticar | to diagnose | Le {diagnosticaron} diabetes. | He was diagnosed with diabetes.
precoz | early | Detección {precoz}. | Early detection.
la sintomatología | symptoms (overall) | Presenta una {sintomatología} leve. | He shows mild symptoms.
crónico / crónica | chronic | Una enfermedad {crónica}. | A chronic illness.
contagioso / contagiosa | contagious | Es muy {contagioso}. | It's very contagious.
la pauta de vacunación | vaccination schedule | Completó la {pauta de vacunación}. | She completed the vaccination schedule.
la inmunidad | immunity | La {inmunidad} dura meses. | Immunity lasts months.
la prevención | prevention | Más vale {prevención} que cura. | Prevention is better than cure.
el factor de riesgo | risk factor | El tabaco es un {factor de riesgo}. | Smoking is a risk factor.
desencadenar | to trigger | El estrés puede {desencadenar} una crisis. | Stress can trigger an attack.
favorecer | to promote, encourage | El ejercicio {favorece} el sueño. | Exercise promotes sleep.
estar asociado a | to be associated with | {Está asociado a} un mayor riesgo. | It's associated with a higher risk.
deberse a | to be due to | El aumento {se debe a} varios factores. | The increase is due to several factors.
la esperanza de vida | life expectancy | La {esperanza de vida} supera los 83 años. | Life expectancy exceeds 83.
la línea de investigación | line of research | Abrieron una nueva {línea de investigación}. | They opened a new line of research.
el epidemiólogo / la epidemióloga | epidemiologist | Según una {epidemióloga}, el riesgo es bajo. | According to an epidemiologist, the risk is low.
la revista científica | scientific journal | Publicado en una {revista científica}. | Published in a scientific journal.
revisado por pares | peer-reviewed | Un artículo {revisado por pares}. | A peer-reviewed article.
la evidencia científica | scientific evidence | No hay {evidencia científica}. | There's no scientific evidence.
el placebo | placebo | El grupo que tomó {placebo}. | The group that took a placebo.
el grupo de control | control group | Comparado con el {grupo de control}. | Compared with the control group.
la correlación | correlation | Una {correlación} débil. | A weak correlation.
la causalidad | causality | Correlación no implica {causalidad}. | Correlation does not imply causality.
la pseudociencia | pseudoscience | La homeopatía es una {pseudociencia}. | Homeopathy is a pseudoscience.
la automedicación | self-medication | Los riesgos de la {automedicación}. | The risks of self-medication.
la cobertura sanitaria | healthcare coverage | La {cobertura sanitaria} es universal. | Healthcare coverage is universal.
la atención primaria | primary care | La {atención primaria} está saturada. | Primary care is overwhelmed.
la demora | delay | Hay mucha {demora} en las consultas. | There are long delays for appointments.
el especialista / la especialista | specialist | Me derivaron al {especialista}. | They referred me to the specialist.
derivar | to refer | El médico me {derivó} al dermatólogo. | The doctor referred me to the dermatologist.
el bienestar emocional | emotional wellbeing | Cuida tu {bienestar emocional}. | Look after your emotional wellbeing.
el sedentarismo | sedentary lifestyle | El {sedentarismo} es un problema. | A sedentary lifestyle is a problem.
la obesidad | obesity | La {obesidad} infantil. | Childhood obesity.
el sistema inmunitario | immune system | Refuerza el {sistema inmunitario}. | It strengthens the immune system.
la divulgación | popularisation, outreach | La {divulgación} científica. | Science communication.
`,
    D: `
Está demostrado que el ejercicio ___ (reducir) el estrés. | reduce | It has been shown that exercise reduces stress.
No está claro que este fármaco ___ (ser) eficaz. | sea | It's not clear that this drug is effective.
Es probable que la vacuna ___ (estar) lista en otoño. | esté | The vaccine is likely to be ready in autumn.
Según el estudio, el café ___ (reducir, condicional de rumor) el riesgo de diabetes. | reduciría | According to the study, coffee may reduce the risk of diabetes.
El aumento de casos se ___ a varios factores. | debe | The rise in cases is due to several factors.
El estrés puede ___ una crisis de ansiedad. | desencadenar | Stress can trigger an anxiety attack.
Correlación no implica ___. | causalidad | Correlation does not imply causality.
No supere la ___ recomendada. | dosis | Do not exceed the recommended dose.
Uno de cada cinco adultos ___ (sufrir) hipertensión. | sufre | One in five adults suffers from high blood pressure.
El número de casos se ha multiplicado ___ tres. | por | The number of cases has tripled.
El tiempo de espera se ha reducido ___ la mitad. | a | Waiting time has been halved.
El médico de cabecera me ___ al especialista. | derivó | My GP referred me to the specialist.
Le ___ una enfermedad crónica a los cuarenta años. | diagnosticaron | She was diagnosed with a chronic illness at forty.
Se compararon los resultados con el grupo de ___. | control | The results were compared with the control group.
El ensayo se publicó en una revista ___ por pares. | revisada | The trial was published in a peer-reviewed journal.
Todo indica que el tabaco ___ (ser) el principal factor de riesgo. | es | Everything indicates that smoking is the main risk factor.
Lo explican para que la población ___ (entender) los riesgos. | entienda | They explain it so that the public understands the risks.
Duerme mal; de ahí que ___ (estar) siempre cansado. | esté | He sleeps badly; hence he's always tired.
Un diagnóstico ___ puede salvar vidas. | precoz | An early diagnosis can save lives.
El sedentarismo está ___ a numerosas enfermedades. | asociado | A sedentary lifestyle is associated with many diseases.
`,
    S: `
Está demostrado que el ejercicio regular mejora la salud mental. | It has been shown that regular exercise improves mental health.
No hay evidencia científica de que este remedio funcione. | There is no scientific evidence that this remedy works.
Según el estudio, el fármaco reduciría el riesgo en un treinta por ciento. | According to the study, the drug could reduce the risk by thirty percent.
Correlación no implica causalidad. | Correlation does not imply causality.
Uno de cada cinco adultos padece hipertensión. | One in five adults suffers from high blood pressure.
El médico de cabecera me derivó al especialista. | My GP referred me to the specialist.
El aumento de casos se debe a varios factores. | The rise in cases is due to several factors.
Un diagnóstico precoz puede salvar vidas. | An early diagnosis can save lives.
`,
    R: [
      { t: '¿Dormir ocho horas?', x: `Durante años se ha repetido que un adulto necesita dormir ocho horas. La realidad, según los especialistas en medicina del sueño, es algo más matizada. La mayoría de los adultos necesita entre siete y nueve horas, pero existen diferencias individuales importantes que dependen, entre otros factores, de la genética y de la edad.

Lo que sí parece demostrado es que dormir de forma habitual menos de seis horas está asociado a un mayor riesgo de obesidad, hipertensión y problemas de memoria. Ahora bien, los investigadores advierten de que la mayoría de estos estudios son observacionales: detectan una correlación, pero no siempre pueden establecer una relación de causa y efecto. Es posible, por ejemplo, que las personas con más estrés duerman menos y, a la vez, enfermen más por culpa del propio estrés.

En cualquier caso, los expertos coinciden en algunos consejos: mantener horarios regulares, evitar las pantallas antes de acostarse y no recurrir a la automedicación con pastillas para dormir sin consultar al médico. Más que obsesionarse con una cifra exacta, recomiendan prestar atención a cómo nos sentimos durante el día.`, q: `¿Qué dicen los especialistas sobre las ocho horas? | Que es una cifra exacta para todos ; *Que la mayoría necesita entre siete y nueve, con diferencias individuales ; Que basta con seis horas
¿Qué limitación tienen muchos estudios? | Son demasiado caros ; *Son observacionales y no siempre demuestran causalidad ; Tienen muestras muy pequeñas
¿Qué recomiendan los expertos al final? | Tomar pastillas para dormir ; *Fijarse en cómo nos sentimos durante el día ; Dormir siempre ocho horas exactas` },
      { t: 'Cómo leer una noticia de salud', x: `«Un estudio revela que el chocolate previene el infarto.» Titulares como este aparecen con frecuencia y suelen compartirse miles de veces en las redes. Antes de cambiar nuestra dieta, conviene hacerse algunas preguntas.

La primera: ¿dónde se ha publicado el estudio? No es lo mismo un artículo revisado por pares en una revista científica que una nota de prensa de una empresa que vende chocolate. La segunda: ¿con quién se ha hecho? Muchos resultados prometedores proceden de estudios con ratones o en laboratorio, que no siempre se confirman en personas. La tercera: ¿cuántos participantes había y existía un grupo de control? Un estudio con veinte personas puede ser interesante, pero difícilmente concluyente.

Por último, hay que fijarse en el lenguaje. Cuando un periodista escribe que el chocolate «reduciría» el riesgo, el condicional indica que se trata de una afirmación que todavía no está confirmada. Los bulos sanitarios aprovechan precisamente nuestra prisa por encontrar soluciones sencillas a problemas complejos. Leer con espíritu crítico es, en sí mismo, una forma de prevención.`, q: `¿Qué primera pregunta propone el texto? | Cuánto cuesta el chocolate ; *Dónde se ha publicado el estudio ; Quién es el periodista
¿Por qué hay que desconfiar de algunos estudios con ratones? | Porque son caros ; *Porque los resultados no siempre se confirman en personas ; Porque son ilegales
¿Qué indica el condicional «reduciría»? | Que es una orden ; *Que la afirmación no está confirmada ; Que el estudio es falso` },
      { t: 'La atención primaria, en el centro', x: `La atención primaria es la puerta de entrada al sistema sanitario. Los médicos de cabecera atienden la mayor parte de las consultas, deciden cuándo derivar a un paciente al especialista y realizan un seguimiento continuado de las enfermedades crónicas. Sin embargo, en muchas comunidades autónomas los centros de salud sufren desde hace años una falta de personal que se traduce en listas de espera de varios días para una cita.

Los profesionales denuncian que dedican a cada paciente apenas unos minutos y que gran parte de su tiempo se va en tareas administrativas. Algunos expertos proponen soluciones como ampliar las competencias de la enfermería, reducir la burocracia mediante la digitalización o crear incentivos para trabajar en zonas rurales, donde es especialmente difícil cubrir las plazas.

La cuestión no es menor. Una atención primaria fuerte permite detectar enfermedades de forma precoz, evita urgencias innecesarias y, a largo plazo, ahorra dinero al sistema. De ahí que muchos especialistas consideren que reforzarla debería ser una prioridad de cualquier política sanitaria.`, q: `¿Qué función tiene la atención primaria? | Solo atiende urgencias ; *Es la puerta de entrada al sistema y hace el seguimiento de enfermedades ; Realiza operaciones
¿Qué denuncian los profesionales? | Que ganan poco ; *Que tienen poco tiempo por paciente y mucha burocracia ; Que hay demasiados médicos
¿Por qué es importante reforzarla? | Porque es más moderna ; *Porque detecta enfermedades a tiempo y ahorra dinero ; Porque lo exige Europa` }
    ],
    write: 'Write a short popular-science article (180–220 words) on a health habit (sleep, sugar, screens, exercise). Distinguish what is proven from what is only likely, using at least four certainty expressions and one journalistic conditional.',
    talk: 'Play a GP. The learner describes a health problem that has lasted some time; ask precise questions about symptoms, habits and history, then explain options and referral to a specialist.',
    res: [R.ser('podcasts de ciencia y salud'), R.rtve('Órbita Laika (ciencia)'), R.slcAdv()]
  });
})();
