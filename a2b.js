/* A2 · Plataforma (part 2) */
(function () {
  const R = RES, U = CAMINO.unit('A2');

  U({
    id: 'a2-indefinido', title: 'El fin de semana pasado: el indefinido', goal: ['Tell what you did last weekend, last year, on a given date', 'Conjugate regular preterite verbs including spelling changes', 'Sequence events: primero, después, luego, al final'],
    grammar: {
      t: 'Pretérito indefinido, regular verbs',
      h: `<table><tr><th></th><th>hablar</th><th>comer</th><th>vivir</th></tr><tr><td>yo</td><td>hablé</td><td>comí</td><td>viví</td></tr><tr><td>tú</td><td>hablaste</td><td>comiste</td><td>viviste</td></tr>
<tr><td>él/usted</td><td>habló</td><td>comió</td><td>vivió</td></tr><tr><td>nosotros</td><td>hablamos</td><td>comimos</td><td>vivimos</td></tr><tr><td>vosotros</td><td>hablasteis</td><td>comisteis</td><td>vivisteis</td></tr><tr><td>ellos</td><td>hablaron</td><td>comieron</td><td>vivieron</td></tr></table>
<p>Use it for <b>completed actions in a finished time</b>: <b>ayer, anoche, el sábado pasado, la semana pasada, en 2019, hace dos años</b>. Compare: <i>Hoy he comido paella</i> (unfinished period) vs <i>Ayer comí paella</i> (finished).</p>
<p>Spelling in <b>yo</b>: -car → <b>-qué</b> (buscar: busqué), -gar → <b>-gué</b> (llegar: llegué), -zar → <b>-cé</b> (empezar: empecé). Vowel stems: leer → <b>leyó, leyeron</b>; oír → oyó; caer → cayó.</p>
<p><b>hace + time</b> = ago: <i>Llegué hace tres meses.</i> Duration of a finished period: <i>Viví en Londres dos años.</i></p>`
    },
    conj: { t: 'indef', v: ['hablar', 'comer', 'vivir', 'llegar', 'buscar', 'empezar', 'leer'] },
    V: `
ayer | yesterday | {Ayer} fui al cine. | Yesterday I went to the cinema.
anteayer | the day before yesterday | {Anteayer} llovió mucho. | The day before yesterday it rained a lot.
anoche | last night | {Anoche} cenamos fuera. | Last night we ate out.
el sábado pasado | last Saturday | {El sábado pasado} visité a mis abuelos. | Last Saturday I visited my grandparents.
la semana pasada | last week | {La semana pasada} trabajé mucho. | Last week I worked a lot.
el mes pasado | last month | {El mes pasado} empecé un curso. | Last month I started a course.
el año pasado | last year | {El año pasado} viajé a Perú. | Last year I travelled to Peru.
hace dos años | two years ago | Llegué a España {hace dos años}. | I arrived in Spain two years ago.
en 2020 | in 2020 | {En 2020} todo cambió. | In 2020 everything changed.
primero | first | {Primero} desayunamos. | First we had breakfast.
después | afterwards | {Después} fuimos al museo. | Afterwards we went to the museum.
luego | then | {Luego} tomamos algo. | Then we had a drink.
más tarde | later | {Más tarde} llegó Ana. | Later Ana arrived.
al final | in the end | {Al final} volvimos en taxi. | In the end we came back by taxi.
visitar | to visit | {Visitamos} el Prado. | We visited the Prado.
pasear | to stroll | {Paseamos} por el Retiro. | We strolled through the Retiro.
quedar con | to meet up with | {Quedé con} unos amigos. | I met up with some friends.
salir de fiesta | to go out partying | El viernes {salimos de fiesta}. | On Friday we went out partying.
bailar | to dance | {Bailamos} toda la noche. | We danced all night.
tomar algo | to have a drink | {Tomamos algo} en una terraza. | We had a drink on a terrace.
cenar fuera | to eat out (dinner) | {Cenamos fuera} el sábado. | We ate out on Saturday.
llegar | to arrive | {Llegué} a casa a las tres. | I got home at three.
volver | to come back | {Volví} muy cansado. | I came back very tired.
empezar | to start | La película {empezó} tarde. | The film started late.
terminar | to finish | La fiesta {terminó} a las cuatro. | The party ended at four.
conocer | to meet (first time) | {Conocí} a mi pareja en Erasmus. | I met my partner on Erasmus.
nacer | to be born | {Nací} en 1992. | I was born in 1992.
vivir | to live | {Viví} en Londres dos años. | I lived in London for two years.
trabajar | to work | {Trabajé} en un hotel. | I worked in a hotel.
estudiar | to study | {Estudié} Económicas. | I studied economics.
comprar | to buy | {Compré} un regalo. | I bought a present.
leer | to read | {Leí} un libro entero. | I read a whole book.
escribir | to write | Le {escribí} una carta. | I wrote her a letter.
abrir | to open | {Abrieron} un bar nuevo. | They opened a new bar.
decidir | to decide | {Decidimos} quedarnos. | We decided to stay.
perder | to lose; to miss | {Perdí} el tren. | I missed the train.
encontrar | to find | {Encontré} un piso precioso. | I found a lovely flat.
pasarlo bien | to have a good time | Lo {pasamos} genial. | We had a great time.
pasarlo mal | to have a bad time | Lo {pasé} fatal. | I had an awful time.
el concierto | concert | El {concierto} fue increíble. | The concert was incredible.
la boda | wedding | Fuimos a una {boda}. | We went to a wedding.
`,
    D: `
Ayer ___ (trabajar, yo) hasta las ocho. | trabajé | Yesterday I worked until eight.
¿Qué ___ (comer, tú) anoche? | comiste | What did you eat last night?
El sábado ___ (salir, nosotros) de fiesta. | salimos | On Saturday we went out partying.
Mis padres ___ (vivir) en Bélgica en los noventa. | vivieron | My parents lived in Belgium in the nineties.
___ (llegar, yo) a Madrid hace un año. | llegué | I arrived in Madrid a year ago.
¿___ (visitar, vosotros) el Prado? | visitasteis | Did you (all) visit the Prado?
Ella ___ (leer) el libro en dos días. | leyó | She read the book in two days.
___ (empezar, yo) a estudiar español en octubre. | empecé | I started studying Spanish in October.
___ (buscar, yo) las llaves por toda la casa. | busqué | I looked for the keys all over the house.
Ana ___ (nacer) en Cádiz. | nació | Ana was born in Cádiz.
Nosotros ___ (bailar) toda la noche. | bailamos | We danced all night.
Ellos ___ (escribir) un correo. | escribieron | They wrote an email.
¿Tú ___ (comprar) el pan? | compraste | Did you buy the bread?
Vosotros ___ (volver) muy tarde. | volvisteis | You (all) came back very late.
El concierto ___ (terminar) a medianoche. | terminó | The concert ended at midnight.
___ (pagar, yo) con tarjeta. | pagué | I paid by card.
Llegué a España ___ tres años. (ago) | hace | I arrived in Spain three years ago.
Lo ___ (pasar, nosotros) genial. | pasamos | We had a great time.
El año ___ viajé a Perú. | pasado | Last year I travelled to Peru.
Hoy he comido paella; ___ comí pasta. (yesterday) | ayer | Today I had paella; yesterday I had pasta.
`,
    S: `
El fin de semana pasado visité a mis abuelos. | Last weekend I visited my grandparents.
Anoche cenamos en un restaurante japonés. | Last night we had dinner at a Japanese restaurant.
¿A qué hora llegaste a casa? | What time did you get home?
Conocí a mi pareja hace cinco años. | I met my partner five years ago.
Primero paseamos por el Retiro y luego tomamos algo. | First we walked through the Retiro and then had a drink.
Lo pasé genial. | I had a great time.
Viví en Londres dos años y luego volví a Holanda. | I lived in London for two years and then went back to Holland.
Perdí el último metro y volví andando. | I missed the last metro and walked home.
`,
    R: [
      { t: 'Un sábado en Madrid', x: `El sábado pasado Sara y yo nos levantamos tarde. Primero desayunamos churros con chocolate en San Ginés. Después paseamos por el Retiro y alquilamos una barca en el lago. A mediodía comimos en La Latina con unos amigos. Por la tarde visitamos el museo Reina Sofía y vimos el Guernica. Por la noche Sara volvió a casa, pero yo salí con mis amigos y llegué a casa a las tres. ¡Lo pasamos genial!`, q: `¿Qué desayunaron? | Tostadas ; *Churros con chocolate ; Nada
¿Qué hicieron en el Retiro? | Comieron ; *Alquilaron una barca ; Vieron el Guernica
¿Quién salió por la noche? | Sara ; *El narrador ; Los dos` },
      { t: 'La biografía de Frida', x: `Frida Kahlo nació en Coyoacán, México, en 1907. A los dieciocho años sufrió un accidente de autobús muy grave y pasó mucho tiempo en la cama. Allí empezó a pintar. En 1929 se casó con el pintor Diego Rivera. Pintó muchos autorretratos y viajó a Estados Unidos y a Francia. Murió en 1954. Hoy su casa, la Casa Azul, es un museo muy famoso.`, q: `¿Dónde nació Frida Kahlo? | En España ; *En Coyoacán, México ; En París
¿Cuándo empezó a pintar? | De niña ; *Después de un accidente ; En Francia
¿Qué es hoy la Casa Azul? | Un hotel ; *Un museo ; Una escuela` },
      { t: 'Un fin de semana desastroso', x: `El viernes por la noche cogí el último tren a Valencia para visitar a mi amigo Pau. Pero el tren llegó con dos horas de retraso. El sábado llovió todo el día y no salimos de casa. Por la noche cocinamos una paella… y se nos quemó. El domingo por fin salió el sol, pero yo tuve que volver a Madrid por la tarde. Aun así, lo pasamos bien: ¡hablamos y reímos mucho!`, q: `¿Cuánto retraso tuvo el tren? | Una hora ; *Dos horas ; Ninguno
¿Qué pasó con la paella? | Estaba buenísima ; *Se quemó ; No la hicieron
¿Qué tiempo hizo el domingo? | Llovió ; *Salió el sol ; Nevó` }
    ],
    write: 'Tell the story of your last weekend in at least ten sentences using primero, después, luego and al final. Then write a short biography (5 sentences) of someone in your family.',
    talk: 'You are a Spanish coworker on Monday morning. Ask the learner what they did at the weekend; ask follow-up questions in the indefinido.',
    res: [R.cb2(13), R.cb2(14), R.cb2(16), R.lt(45, 47), R.hhb()]
  });

  U({
    id: 'a2-historias', title: 'Historias: irregular preterites', goal: ['Narrate past events with irregular verbs (fui, tuve, hice, estuve)', 'Talk about holidays and life events', 'React to stories'],
    grammar: {
      t: 'Irregular pretérito indefinido',
      h: `<p><b>ser</b> and <b>ir</b> share the same forms: <b>fui, fuiste, fue, fuimos, fuisteis, fueron</b>. Context tells you which: <i>Fui a Cádiz</i> (went) / <i>Fue increíble</i> (was).</p>
<p>"Strong" stems with unstressed endings <b>-e, -iste, -o, -imos, -isteis, -ieron</b> (no accents!):</p>
<table><tr><td>tener → tuv-</td><td>estar → estuv-</td><td>poder → pud-</td><td>poner → pus-</td></tr><tr><td>saber → sup-</td><td>querer → quis-</td><td>venir → vin-</td><td>hacer → hic- (hizo)</td></tr>
<tr><td>andar → anduv-</td><td>decir → dij- (dijeron)</td><td>traer → traj- (trajeron)</td><td>conducir → conduj-</td></tr></table>
<p>Also <b>dar</b>: di, diste, dio, dimos, disteis, dieron; <b>ver</b>: vi, viste, vio…</p>
<p>-ir stem changers change in 3rd persons: pedir → <b>pidió, pidieron</b>; dormir → <b>durmió, durmieron</b>; sentir → <b>sintió</b>; preferir → <b>prefirió</b>.</p>
<p>Reacting to stories: <i>¿En serio? ¡No me digas! ¡Qué suerte! ¡Qué mala suerte! ¡Qué horror! ¿Y qué pasó después?</i></p>`
    },
    conj: { t: 'indef', v: ['ser', 'ir', 'tener', 'estar', 'hacer', 'poder', 'decir', 'venir', 'pedir', 'dormir'] },
    V: `
las vacaciones | holidays | En {vacaciones} fuimos a Menorca. | On holiday we went to Menorca.
el viaje | trip | El {viaje} fue increíble. | The trip was incredible.
la costa | coast | Estuvimos en la {costa} gallega. | We were on the Galician coast.
la isla | island | Fuimos a una {isla} pequeña. | We went to a small island.
el pueblo | village | Pasamos una semana en el {pueblo}. | We spent a week in the village.
nacer | to be born | {Nací} en Ámsterdam. | I was born in Amsterdam.
crecer | to grow up | {Crecí} en un pueblo. | I grew up in a village.
mudarse | to move (house) | Nos {mudamos} a Madrid en 2023. | We moved to Madrid in 2023.
casarse | to get married | Se {casaron} en junio. | They got married in June.
divorciarse | to get divorced | Se {divorciaron} hace años. | They got divorced years ago.
tener un hijo | to have a child | {Tuvieron un hijo} el año pasado. | They had a child last year.
graduarse | to graduate | Me {gradué} en 2015. | I graduated in 2015.
jubilarse | to retire | Mi padre se {jubiló} en marzo. | My father retired in March.
morir | to die | Mi abuelo {murió} en 2010. | My grandfather died in 2010.
estar de vacaciones | to be on holiday | {Estuve de vacaciones} en Italia. | I was on holiday in Italy.
hacer turismo | to go sightseeing | {Hicimos turismo} por el centro. | We went sightseeing in the centre.
hacer una foto | to take a photo | {Hice} muchas {fotos}. | I took lots of photos.
dar una vuelta | to go for a stroll / drive | {Dimos una vuelta} por el puerto. | We went for a stroll round the harbour.
tener suerte | to be lucky | {Tuvimos suerte} con el tiempo. | We were lucky with the weather.
tener un accidente | to have an accident | {Tuvo un accidente} con la bici. | He had an accident on his bike.
ponerse enfermo | to get ill | Me {puse enfermo} el primer día. | I got ill on the first day.
perder el vuelo | to miss the flight | Casi {perdemos el vuelo}. | We almost missed the flight.
¿qué tal fue? | how was it? | ¿{Qué tal fue} el viaje? | How was the trip?
fue increíble | it was amazing | ¡{Fue increíble}! | It was amazing!
fue un desastre | it was a disaster | La boda {fue un desastre}. | The wedding was a disaster.
de repente | suddenly | {De repente} empezó a llover. | Suddenly it started to rain.
por fin | finally | {Por fin} llegamos al hotel. | We finally got to the hotel.
durante | during, for | Estuve allí {durante} un mes. | I was there for a month.
el puente | long weekend | En el {puente} fuimos a Asturias. | On the long weekend we went to Asturias.
el recuerdo | memory; souvenir | Es un buen {recuerdo}. | It's a good memory.
¿en serio? | really? | {¿En serio?} ¡No me lo creo! | Really? I don't believe it!
¡no me digas! | you don't say! | {¡No me digas!} ¿Y qué pasó? | You don't say! And what happened?
¡qué suerte! | how lucky! | ¿Te tocó la lotería? ¡{Qué suerte}! | You won the lottery? How lucky!
¡qué mala suerte! | what bad luck! | ¡{Qué mala suerte}! | What bad luck!
¡qué horror! | how awful! | ¿Os robaron? ¡{Qué horror}! | You got robbed? How awful!
contar | to tell | Te {cuento} lo que pasó. | I'll tell you what happened.
pasar | to happen; to spend (time) | ¿Qué te {pasó}? | What happened to you?
traer | to bring | Te {traje} un recuerdo. | I brought you a souvenir.
conducir | to drive | {Conduje} seis horas. | I drove for six hours.
andar | to walk | {Anduvimos} veinte kilómetros. | We walked twenty kilometres.
`,
    D: `
El verano pasado ___ (ir, yo) a Asturias. | fui | Last summer I went to Asturias.
El viaje ___ (ser) increíble. | fue | The trip was amazing.
¿Dónde ___ (estar, tú) ayer? | estuviste | Where were you yesterday?
No ___ (poder, nosotros) entrar en el museo. | pudimos | We couldn't get into the museum.
¿Qué ___ (hacer) Ana el domingo? | hizo | What did Ana do on Sunday?
Mis amigos ___ (venir) a la fiesta. | vinieron | My friends came to the party.
Ella me ___ (decir) la verdad. | dijo | She told me the truth.
El niño ___ (dormir) diez horas. | durmió | The child slept ten hours.
Yo ___ (tener) un accidente. | tuve | I had an accident.
¿Vosotros ___ (hacer) muchas fotos? | hicisteis | Did you (all) take many photos?
Mi padre ___ (pedir) la cuenta. | pidió | My father asked for the bill.
Ellos ___ (traer) vino. | trajeron | They brought wine.
Yo ___ (conducir) seis horas. | conduje | I drove for six hours.
¿Dónde ___ (poner, tú) las llaves? | pusiste | Where did you put the keys?
Nosotros ___ (andar) veinte kilómetros. | anduvimos | We walked twenty kilometres.
No ___ (querer, ella) venir. | quiso | She refused to come.
Ellos ___ (dar) una vuelta por el puerto. | dieron | They went for a stroll round the harbour.
Yo ___ (ver) el partido en un bar. | vi | I watched the match in a bar.
Mi abuelo ___ (morir) en 2010. | murió | My grandfather died in 2010.
Ellas ___ (preferir) quedarse en casa. | prefirieron | They preferred to stay at home.
`,
    S: `
En 2023 fuimos de vacaciones a Mallorca. | In 2023 we went on holiday to Mallorca.
¿Qué tal fue el viaje? | How was the trip?
Tuvimos un problema con el hotel. | We had a problem with the hotel.
Estuve tres semanas en Andalucía. | I was in Andalusia for three weeks.
Nació en Burgos y se mudó a Madrid en 2010. | She was born in Burgos and moved to Madrid in 2010.
De repente empezó a llover. | Suddenly it started to rain.
¡No me digas! ¿Y qué hiciste? | You don't say! And what did you do?
Te traje un recuerdo de Toledo. | I brought you a souvenir from Toledo.
`,
    R: [
      { t: 'El puente de diciembre', x: `En el puente de diciembre Marta y su novio fueron a Asturias en coche. Condujeron seis horas desde Madrid. El primer día estuvieron en Oviedo e hicieron turismo por el centro. El segundo día quisieron subir a los Lagos de Covadonga, pero no pudieron porque nevó mucho y la carretera estuvo cerrada. Así que fueron a una sidrería y probaron la fabada. "Fue un viaje un poco caótico, pero lo pasamos genial", dijo Marta.`, q: `¿Cómo fueron a Asturias? | En tren ; *En coche ; En avión
¿Por qué no subieron a los lagos? | *Porque nevó ; Porque estaban cansados ; Porque cerró la sidrería
¿Qué tal fue el viaje, según Marta? | Un desastre ; *Caótico pero genial ; Aburrido` },
      { t: '¿Qué te pasó?', x: `—¿Qué te pasó en el brazo?
—Pues que el sábado fui a montar en bici con mis primos. Hicimos una ruta por la montaña. Todo fue bien hasta que, de repente, apareció un perro y me caí.
—¡Qué horror! ¿Fuiste al hospital?
—Sí, mi primo me llevó a urgencias. Estuvimos allí cuatro horas. El médico me dijo que no está roto, menos mal.
—¡Qué suerte!`, q: `¿Qué hizo el sábado? | Fue a la playa ; *Montó en bici ; Trabajó
¿Por qué se cayó? | Por la lluvia ; *Apareció un perro ; Iba muy rápido
¿Cuánto tiempo estuvieron en urgencias? | Una hora ; *Cuatro horas ; Toda la noche` },
      { t: 'La vida de mi abuela', x: `Mi abuela nació en un pueblo de Jaén en 1940. De niña no pudo ir mucho al colegio porque tuvo que trabajar en el campo. A los veinte años se fue a Barcelona, donde trabajó en una fábrica de ropa. Allí conoció a mi abuelo. Se casaron en 1963 y tuvieron cuatro hijos. Cuando se jubiló, volvió al pueblo. Siempre dice que tuvo una vida difícil, pero feliz.`, q: `¿Por qué no fue mucho al colegio? | Estaba enferma ; *Tuvo que trabajar en el campo ; Vivía lejos
¿Dónde conoció a su marido? | En Jaén ; *En Barcelona ; En el pueblo
¿Qué hizo cuando se jubiló? | Viajó ; *Volvió al pueblo ; Se quedó en Barcelona` }
    ],
    write: 'Write about your best (or worst) holiday ever: where you went, with whom, what you did and what happened. Use at least eight irregular preterites and react like a listener would.',
    talk: 'You are a Spanish friend who wants to hear about the learner\'s last holiday. Ask where they went, how they travelled, what they did, and whether anything went wrong; react with ¡no me digas!, ¡qué suerte!',
    res: [R.cb2(15), R.cb2(17), R.lt(48, 50), R.slcFalse()]
  });

  U({
    id: 'a2-fiestas', title: 'Fiestas y tradiciones', goal: ['Talk about celebrations and traditions in Spain', 'Describe what people do at festivals (se + verb)', 'Congratulate and wish people well'],
    grammar: {
      t: 'Impersonal se; dates and celebrations; set phrases for wishes',
      h: `<p>To describe what people <b>generally</b> do, Spanish uses <b>se + verb (3rd person)</b>: <i>En Navidad <b>se come</b> turrón. En Valencia <b>se queman</b> las fallas.</i> The verb agrees with the plural thing: <i>se comen doce uvas</i>.</p>
<p>Dates: <i>La Nochevieja es el 31 de diciembre. San Fermín se celebra del 6 al 14 de julio.</i></p>
<p>Wishes and congratulations: <b>¡Feliz cumpleaños! ¡Feliz Navidad! ¡Feliz Año Nuevo! ¡Felicidades! ¡Enhorabuena!</b> (for an achievement), <b>¡Que cumplas muchos más!</b>, <b>¡Que lo pases bien!</b>, <b>¡Salud!</b> (cheers).</p>
<p><b>celebrar</b> = to celebrate; <b>se celebra</b> = is celebrated. <b>disfrazarse</b> = to dress up; <b>el disfraz</b> = costume.</p>`
    },
    V: `
la fiesta | party; festival; public holiday | Hoy es {fiesta} en Madrid. | Today is a holiday in Madrid.
celebrar | to celebrate | {Celebramos} mi cumpleaños en casa. | We celebrated my birthday at home.
la tradición | tradition | Es una {tradición} muy antigua. | It's a very old tradition.
típico / típica | typical | Es un plato {típico} de Navidad. | It's a typical Christmas dish.
la Navidad | Christmas | En {Navidad} nos reunimos todos. | At Christmas we all get together.
la Nochebuena | Christmas Eve | En {Nochebuena} cenamos en casa de mis padres. | On Christmas Eve we have dinner at my parents'.
la Nochevieja | New Year's Eve | En {Nochevieja} se comen doce uvas. | On New Year's Eve twelve grapes are eaten.
el Año Nuevo | New Year | ¡Feliz {Año Nuevo}! | Happy New Year!
las uvas | grapes | Las doce {uvas} de la suerte. | The twelve lucky grapes.
las campanadas | bell chimes (at midnight) | Comemos una uva con cada {campanada}. | We eat a grape with each chime.
los Reyes Magos | the Three Wise Men | Los {Reyes Magos} traen regalos el 6 de enero. | The Three Wise Men bring presents on 6 January.
la cabalgata | parade (of the Kings) | Los niños van a la {cabalgata}. | The children go to the parade.
el roscón de Reyes | Epiphany ring cake | Desayunamos {roscón de Reyes}. | We have roscón for breakfast.
el turrón | nougat (Christmas sweet) | El {turrón} es típico de Navidad. | Turrón is typical of Christmas.
la Semana Santa | Holy Week, Easter | En {Semana Santa} hay procesiones. | At Easter there are processions.
la procesión | procession | La {procesión} pasa por la calle. | The procession goes down the street.
el carnaval | carnival | El {carnaval} de Cádiz es famoso. | Cádiz carnival is famous.
disfrazarse | to dress up (costume) | Me {disfracé} de pirata. | I dressed up as a pirate.
el disfraz | costume | Mi {disfraz} es de vampiro. | My costume is a vampire.
la feria | fair | La {Feria} de Abril es en Sevilla. | The April Fair is in Seville.
los fuegos artificiales | fireworks | Hay {fuegos artificiales} a medianoche. | There are fireworks at midnight.
la hoguera | bonfire | En San Juan se encienden {hogueras}. | On Saint John's night bonfires are lit.
el desfile | parade | El {desfile} empieza a las seis. | The parade starts at six.
los encierros | bull runs | Los {encierros} de San Fermín son peligrosos. | The San Fermín bull runs are dangerous.
el patrón / la patrona | patron saint | La {patrona} del pueblo es la Virgen del Carmen. | The village's patron saint is Our Lady of Carmen.
las fiestas del pueblo | village festival | En agosto son las {fiestas del pueblo}. | In August it's the village festival.
la verbena | open-air dance party | Hay {verbena} en la plaza. | There's a street dance in the square.
el regalo | present | Me hicieron muchos {regalos}. | They gave me lots of presents.
la tarta | cake | Una {tarta} de chocolate. | A chocolate cake.
las velas | candles | Sopla las {velas}. | Blow out the candles.
el brindis | toast (drink) | Hagamos un {brindis}. | Let's make a toast.
brindar | to toast | {Brindamos} por los novios. | We toasted the couple.
¡salud! | cheers! | ¡{Salud}! | Cheers!
¡felicidades! | congratulations! / happy birthday! | ¡{Felicidades}, Marta! | Happy birthday, Marta!
¡enhorabuena! | congratulations (achievement) | ¿Has aprobado? ¡{Enhorabuena}! | You passed? Congratulations!
¡feliz Navidad! | Merry Christmas! | ¡{Feliz Navidad} a todos! | Merry Christmas everyone!
invitar | to invite | Te {invito} a mi fiesta. | I invite you to my party.
el invitado / la invitada | guest | Hay cien {invitados} en la boda. | There are a hundred guests at the wedding.
la boda | wedding | La {boda} es en junio. | The wedding is in June.
los novios | bride and groom; couple | ¡Vivan los {novios}! | Long live the bride and groom!
el santo | saint's day | Hoy es mi {santo}. | Today is my saint's day.
`,
    D: `
En Nochevieja ___ comen doce uvas. | se | On New Year's Eve twelve grapes are eaten.
En Navidad se ___ (comer) turrón. | come | At Christmas turrón is eaten.
En Valencia se ___ (quemar) las fallas. | queman | In Valencia the fallas are burned.
San Fermín se ___ (celebrar) en julio. | celebra | San Fermín is celebrated in July.
¡Feliz ___! (Christmas) | Navidad | Merry Christmas!
¿Has aprobado? ¡___! | enhorabuena | You passed? Congratulations!
Hoy es tu cumpleaños. ¡___! | felicidades | It's your birthday. Happy birthday!
¡Que ___ (cumplir, tú) muchos más! | cumplas | Many happy returns!
El 6 de enero llegan los ___ Magos. | Reyes | On 6 January the Three Kings arrive.
En carnaval me ___ (disfrazarse, yo) de pirata. (pres) | disfrazo | At carnival I dress up as a pirate.
Sopla las ___. | velas | Blow out the candles.
¡___! (cheers) | salud | Cheers!
Brindamos ___ los novios. | por | We toasted the bride and groom.
La ___ de Abril es en Sevilla. | Feria | The April Fair is in Seville.
En San Juan se encienden ___. (bonfires) | hogueras | On Saint John's night bonfires are lit.
Te ___ (invitar, yo) a mi fiesta. | invito | I invite you to my party.
La Nochebuena es el 24 ___ diciembre. | de | Christmas Eve is on 24 December.
El año pasado ___ (celebrar, nosotros) la Navidad en Sevilla. | celebramos | Last year we celebrated Christmas in Seville.
En Semana Santa hay ___. (processions) | procesiones | At Easter there are processions.
En agosto son las fiestas del ___. | pueblo | In August it's the village festival.
`,
    S: `
En España los niños reciben regalos el 6 de enero. | In Spain children get presents on 6 January.
En Nochevieja se come una uva con cada campanada. | On New Year's Eve you eat a grape with each chime.
¿Cómo se celebra la Navidad en tu país? | How is Christmas celebrated in your country?
¡Feliz cumpleaños! ¡Que cumplas muchos más! | Happy birthday! Many happy returns!
Me disfracé de bruja para el carnaval. | I dressed up as a witch for carnival.
Las fiestas de mi pueblo duran una semana. | My village festival lasts a week.
Hagamos un brindis por los novios. ¡Salud! | Let's make a toast to the couple. Cheers!
¡Enhorabuena por el nuevo trabajo! | Congratulations on the new job!
`,
    R: [
      { t: 'Las Fallas de Valencia', x: `Las Fallas se celebran en Valencia del 15 al 19 de marzo. Durante todo el año, los artistas construyen enormes figuras de cartón y madera: las fallas. Algunas tienen más de veinte metros. Durante la fiesta hay música, petardos, fuegos artificiales y paella en la calle. La última noche, la "cremà", se queman todas las fallas. Solo se salva una, el "ninot indultat", que va a un museo.`, q: `¿Cuándo se celebran las Fallas? | En enero ; *Del 15 al 19 de marzo ; En julio
¿Qué pasa en la "cremà"? | Se come paella ; *Se queman las fallas ; Se construyen las fallas
¿Qué pasa con el "ninot indultat"? | Se quema primero ; *Va a un museo ; Se vende` },
      { t: 'La Nochevieja', x: `En Nochevieja, millones de españoles miran la televisión a medianoche. En la Puerta del Sol de Madrid, el reloj da doce campanadas y con cada una se come una uva. Dicen que trae buena suerte para el año nuevo. Es difícil: ¡hay que comer muy rápido! Después, la gente brinda con cava, se abraza y muchos jóvenes salen de fiesta hasta la mañana. El 1 de enero, muchos desayunan chocolate con churros.`, q: `¿Dónde está el reloj más famoso? | En Barcelona ; *En la Puerta del Sol ; En Sevilla
¿Qué se come con cada campanada? | Un churro ; *Una uva ; Un turrón
¿Qué desayunan muchos el 1 de enero? | Roscón ; *Chocolate con churros ; Nada` },
      { t: 'Mi primera Feria de Abril', x: `El año pasado fui a la Feria de Abril de Sevilla con unos amigos sevillanos. Fue increíble. Hay más de mil casetas, pequeñas carpas donde la gente come, bebe y baila sevillanas. Mis amigas llevaron trajes de flamenca y los chicos, traje corto. Yo no sabía bailar, pero una señora mayor me enseñó los primeros pasos. Bebimos rebujito (vino fino con refresco) y volvimos a casa a las seis de la mañana.`, q: `¿Qué son las casetas? | Tiendas de ropa ; *Carpas donde la gente come, bebe y baila ; Hoteles
¿Quién le enseñó a bailar? | Sus amigas ; *Una señora mayor ; Un profesor
¿Qué es el rebujito? | Un baile ; *Vino fino con refresco ; Un traje` }
    ],
    write: 'Describe how a festival or holiday is celebrated in your country (use se + verb), then tell the story of a celebration you went to last year (indefinido).',
    talk: 'You are a Spaniard from Valencia telling the learner about Fallas, Christmas and New Year traditions in Spain. Ask how they celebrate in the Netherlands and react; use se + verb.',
    res: [R.cb1(10), R.cb2(33), R.lt(51, 52), R.easy('fiestas España')]
  });

  U({
    id: 'a2-imperfecto', title: 'Cuando era pequeño: el imperfecto', goal: ['Describe the past: how things were and used to be', 'Talk about your childhood', 'Contrast past habits with the present'],
    grammar: {
      t: 'Pretérito imperfecto',
      h: `<table><tr><th></th><th>-ar (jugar)</th><th>-er/-ir (vivir)</th></tr><tr><td>yo</td><td>jugaba</td><td>vivía</td></tr><tr><td>tú</td><td>jugabas</td><td>vivías</td></tr><tr><td>él/usted</td><td>jugaba</td><td>vivía</td></tr>
<tr><td>nosotros</td><td>jugábamos</td><td>vivíamos</td></tr><tr><td>vosotros</td><td>jugabais</td><td>vivíais</td></tr><tr><td>ellos</td><td>jugaban</td><td>vivían</td></tr></table>
<p>Only three irregulars: <b>ser</b> (era, eras, era, éramos, erais, eran), <b>ir</b> (iba, ibas…), <b>ver</b> (veía…). <b>hay → había</b>.</p>
<p>Use it for: <b>habits</b> in the past (<i>Cada verano íbamos al pueblo</i>), <b>descriptions</b> of people, places, time and age (<i>Era una casa grande. Tenía diez años. Eran las ocho.</i>) and <b>ongoing background</b> (<i>Llovía…</i>).</p>
<p>Signal words: <b>antes, de pequeño/a, cuando era niño, todos los días, siempre, a menudo, normalmente</b>. Compare: <i>Antes vivía en Utrecht; ahora vivo en Madrid.</i> <b>soler</b> + infinitive in the imperfect: <i>Solía leer mucho</i> (I used to read a lot).</p>`
    },
    conj: { t: 'impf', v: ['jugar', 'vivir', 'ser', 'ir', 'ver', 'tener', 'haber'] },
    V: `
de pequeño / de pequeña | as a child | {De pequeña} vivía en el campo. | As a child I lived in the country.
cuando era niño / niña | when I was a child | {Cuando era niño} quería ser bombero. | When I was a boy I wanted to be a firefighter.
la infancia | childhood | Tuve una {infancia} feliz. | I had a happy childhood.
antes | before, in the past | {Antes} no había internet. | Before there was no internet.
ahora | now | {Ahora} todo es diferente. | Now everything is different.
a menudo | often | Íbamos a la playa {a menudo}. | We often went to the beach.
cada verano | every summer | {Cada verano} visitábamos a los abuelos. | Every summer we visited our grandparents.
soler | to usually do | {Solíamos} cenar a las nueve. | We used to have dinner at nine.
el colegio | (primary) school | Iba al {colegio} andando. | I walked to school.
el instituto | secondary school | En el {instituto} estudiaba francés. | At secondary school I studied French.
el/la maestro/a | primary teacher | Mi {maestra} era muy buena. | My teacher was very good.
el recreo | break (school) | En el {recreo} jugábamos al fútbol. | At break we played football.
los deberes | homework | Hacía los {deberes} después de merendar. | I did my homework after my snack.
el juguete | toy | Mi {juguete} favorito era un tren. | My favourite toy was a train.
la muñeca | doll | Mi hermana tenía muchas {muñecas}. | My sister had lots of dolls.
el columpio | swing | Me encantaban los {columpios}. | I loved the swings.
jugar al escondite | to play hide and seek | {Jugábamos al escondite} en el parque. | We played hide and seek in the park.
saltar a la comba | to skip (rope) | Las niñas {saltaban a la comba}. | The girls skipped rope.
montar en bici | to ride a bike | {Montaba en bici} todos los días. | I rode my bike every day.
los dibujos animados | cartoons | Veía {dibujos animados} los sábados. | I watched cartoons on Saturdays.
la merienda | afternoon snack | Mi {merienda} era pan con chocolate. | My snack was bread and chocolate.
el barrio | neighbourhood | En mi {barrio} había muchos niños. | There were many children in my neighbourhood.
travieso / traviesa | naughty | Era un niño muy {travieso}. | I was a very naughty boy.
obediente | obedient | Mi hermana era más {obediente}. | My sister was more obedient.
tímido / tímida | shy | De pequeña era muy {tímida}. | As a girl I was very shy.
tranquilo / tranquila | calm, quiet | El pueblo era muy {tranquilo}. | The village was very quiet.
echar de menos | to miss | {Echo de menos} aquellos veranos. | I miss those summers.
acordarse de | to remember | No me {acuerdo} de su nombre. | I don't remember his name.
crecer | to grow up | {Crecí} en Haarlem. | I grew up in Haarlem.
contar cuentos | to tell stories | Mi abuelo nos {contaba cuentos}. | My grandfather told us stories.
había | there was / were | {Había} un parque enfrente. | There was a park opposite.
era | was (ser) | La casa {era} enorme. | The house was huge.
tenía | had; was (age) | {Tenía} ocho años. | I was eight years old.
iba | went, used to go | {Iba} a nadar los martes. | I used to go swimming on Tuesdays.
veía | saw, used to watch | {Veía} a mis primos cada domingo. | I used to see my cousins every Sunday.
el móvil | mobile phone | No teníamos {móvil}. | We didn't have mobile phones.
la tele | TV | La {tele} tenía dos canales. | The TV had two channels.
el vecino / la vecina | neighbour | Los {vecinos} se conocían todos. | The neighbours all knew each other.
`,
    D: `
De pequeño ___ (jugar, yo) al fútbol todos los días. | jugaba | As a child I played football every day.
Mi abuela ___ (vivir) en un pueblo de Teruel. | vivía | My grandmother lived in a village in Teruel.
Cuando ___ (ser, yo) niña, tenía un perro. | era | When I was a girl, I had a dog.
Cada verano ___ (ir, nosotros) a la playa. | íbamos | Every summer we went to the beach.
Antes no ___ (haber) tantos turistas. | había | Before there weren't so many tourists.
¿Qué ___ (ver, vosotros) en la tele? | veíais | What did you (all) watch on TV?
Mis padres ___ (trabajar) mucho. | trabajaban | My parents worked a lot.
Echo de ___ mi ciudad. | menos | I miss my city.
___ (tener, yo) diez años cuando nos mudamos. | tenía | I was ten when we moved.
¿Dónde ___ (vivir, tú) de pequeño? | vivías | Where did you live as a child?
Mi hermano y yo ___ (ser) muy traviesos. | éramos | My brother and I were very naughty.
Los niños ___ (jugar) en la calle. | jugaban | The children played in the street.
Mi abuelo nos ___ (contar) cuentos. | contaba | My grandfather told us stories.
Yo ___ (soler) leer antes de dormir. | solía | I used to read before going to sleep.
No me ___ (acordarse) de su nombre. (pres) | acuerdo | I don't remember his name.
¿Vosotros ___ (ir) al colegio en autobús? | ibais | Did you (all) go to school by bus?
La casa ___ (ser) muy grande. | era | The house was very big.
Yo ___ (ver) a mis primos los domingos. | veía | I used to see my cousins on Sundays.
Antes ___ (vivir, yo) en Utrecht; ahora vivo en Madrid. | vivía | I used to live in Utrecht; now I live in Madrid.
En el recreo ___ (jugar, nosotros) al escondite. | jugábamos | At break we played hide and seek.
`,
    S: `
Cuando era pequeña vivía en un pueblo cerca del mar. | When I was little I lived in a village near the sea.
Mi abuelo siempre nos contaba historias. | My grandfather always told us stories.
Antes trabajaba en un banco; ahora soy profesor. | I used to work in a bank; now I'm a teacher.
No me acuerdo de su nombre. | I don't remember his name.
Los domingos solíamos comer en casa de mis tíos. | On Sundays we used to eat at my aunt and uncle's.
¡Cómo echo de menos aquellos veranos! | How I miss those summers!
En mi barrio había un parque con columpios. | In my neighbourhood there was a park with swings.
De niño era muy tímido, pero ahora hablo con todo el mundo. | As a child I was very shy, but now I talk to everyone.
`,
    R: [
      { t: 'Los veranos en el pueblo', x: `Cuando era niño, pasaba todos los veranos en el pueblo de mis abuelos, en Extremadura. Era un pueblo pequeño y muy tranquilo. No había internet y la tele solo tenía dos canales. Por las mañanas mis primos y yo íbamos a la piscina; por las tardes, cuando hacía menos calor, jugábamos en la plaza hasta la hora de cenar. Mi abuela siempre preparaba la merienda: pan con chocolate. Ahora el pueblo tiene menos gente, pero yo todavía voy cada agosto.`, q: `¿Dónde pasaba los veranos? | En la playa ; *En el pueblo de sus abuelos ; En Madrid
¿Qué hacían por las tardes? | Iban a la piscina ; Veían la tele ; *Jugaban en la plaza
¿Qué es diferente ahora? | *El pueblo tiene menos gente ; Hay más canales ; Ya no va` },
      { t: 'Antes y ahora', x: `Mi madre siempre dice que la vida antes era muy diferente. Cuando ella era joven, en los años setenta, no había móviles y la gente se llamaba por teléfono desde casa o desde una cabina. Los niños jugaban en la calle hasta la noche. Las tiendas cerraban los domingos y casi nadie viajaba en avión. Ahora todo es más rápido, dice ella, pero antes la gente tenía más tiempo para hablar.`, q: `¿Cuándo era joven la madre? | En los años noventa ; *En los años setenta ; En los años cincuenta
¿Dónde jugaban los niños? | En casa ; *En la calle ; En el colegio
¿Qué tenía la gente antes, según ella? | Más dinero ; *Más tiempo para hablar ; Más móviles` },
      { t: 'Mi maestra', x: `Mi maestra de primaria se llamaba doña Pilar. Era bajita, llevaba gafas redondas y siempre tenía una sonrisa. Era muy paciente con los niños más traviesos, como yo. Todas las mañanas nos leía un cuento antes de empezar la clase. Los viernes, si nos portábamos bien, nos dejaba jugar en el patio media hora más. Creo que por ella me encanta leer.`, q: `¿Cómo era doña Pilar? | Alta y seria ; *Bajita, con gafas y sonriente ; Muy estricta
¿Qué hacía todas las mañanas? | Les daba deberes ; *Les leía un cuento ; Les cantaba
¿Qué pasaba los viernes si se portaban bien? | No había clase ; *Jugaban media hora más ; Comían tarta` }
    ],
    write: 'Describe your childhood: where you lived, what your house and school were like, a teacher you remember, what you used to do after school and in summer. Then compare with now.',
    talk: 'You are an older Spanish woman from a village in Castile talking with the learner about the past. Ask about their childhood and share how life used to be in Spain; use the imperfecto.',
    res: [R.cb2(18), R.cb2(19), R.lt(53, 55), R.hhb('historias')]
  });

  U({
    id: 'a2-laboral', title: 'El mundo laboral: work and careers', goal: ['Talk about your career and work experience', 'Contrast pretérito perfecto, indefinido and imperfecto in a CV', 'Handle a simple job interview'],
    grammar: {
      t: 'Talking about experience: three past tenses together; llevar + time; desde / desde hace',
      h: `<p>In a work context the past tenses divide the work:</p>
<table><tr><td><b>Pretérito perfecto</b></td><td>experience up to now, unfinished period</td><td><i>He trabajado en tres empresas. Este año he dirigido un equipo.</i></td></tr>
<tr><td><b>Indefinido</b></td><td>finished jobs and dated events</td><td><i>Trabajé en Philips de 2016 a 2020. Me licencié en 2015.</i></td></tr>
<tr><td><b>Imperfecto</b></td><td>descriptions and routines of a past job</td><td><i>Allí organizaba eventos y viajaba mucho.</i></td></tr></table>
<p>Duration up to now: <b>llevar + time</b>: <i>Llevo tres años en esta empresa.</i> <b>desde hace + time</b>: <i>Trabajo aquí desde hace tres años.</i> <b>desde + date</b>: <i>desde 2023</i>.</p>
<p>Job interview: <i>¿Por qué quiere este puesto? ¿Cuáles son sus puntos fuertes? ¿Qué experiencia tiene?</i> (often usted).</p>`
    },
    V: `
el puesto | position, post | Solicito el {puesto} de diseñadora. | I'm applying for the designer position.
la oferta de trabajo | job offer, vacancy | Vi la {oferta de trabajo} en LinkedIn. | I saw the job offer on LinkedIn.
solicitar | to apply for | {Solicité} el puesto la semana pasada. | I applied for the job last week.
el currículum | CV | Le envío mi {currículum}. | I'm sending you my CV.
la carta de presentación | cover letter | Escribí una {carta de presentación}. | I wrote a cover letter.
la entrevista | interview | Mañana tengo una {entrevista}. | Tomorrow I have an interview.
la experiencia | experience | Tengo cinco años de {experiencia}. | I have five years' experience.
la empresa | company | Es una {empresa} internacional. | It's an international company.
contratar | to hire | Me {contrataron} en mayo. | They hired me in May.
despedir | to fire | Lo {despidieron} sin motivo. | They fired him for no reason.
dimitir | to resign | {Dimitió} el mes pasado. | She resigned last month.
cambiar de trabajo | to change jobs | Quiero {cambiar de trabajo}. | I want to change jobs.
el contrato indefinido | permanent contract | Por fin tengo un {contrato indefinido}. | I finally have a permanent contract.
el contrato temporal | temporary contract | Es un {contrato temporal} de seis meses. | It's a six-month temporary contract.
las prácticas | internship | Hice unas {prácticas} en un periódico. | I did an internship at a newspaper.
el sueldo / el salario | salary | El {sueldo} es bueno. | The salary is good.
la jornada | working day / hours | Tengo {jornada} completa. | I work full-time.
el horario flexible | flexible hours | Me gusta el {horario flexible}. | I like the flexible hours.
el teletrabajo | remote work | Hago {teletrabajo} dos días. | I work remotely two days a week.
la reunión | meeting | Tengo una {reunión} a las diez. | I have a meeting at ten.
el equipo | team | Dirijo un {equipo} de seis personas. | I lead a team of six.
el proyecto | project | Terminamos el {proyecto} a tiempo. | We finished the project on time.
el cliente | client | Atiendo a {clientes} internacionales. | I deal with international clients.
el jefe / la jefa | boss | Mi {jefa} anterior era muy exigente. | My previous boss was very demanding.
el compañero / la compañera | colleague | Mis {compañeros} son muy majos. | My colleagues are really nice.
el departamento | department | Trabajo en el {departamento} de ventas. | I work in the sales department.
las ventas | sales | Llevo diez años en {ventas}. | I've been in sales for ten years.
los recursos humanos | human resources | Hablé con {recursos humanos}. | I spoke to HR.
licenciarse | to graduate (degree) | Me {licencié} en 2015. | I graduated in 2015.
el máster | master's degree | Hice un {máster} en Barcelona. | I did a master's in Barcelona.
dirigir | to manage, direct | {Dirijo} un pequeño equipo. | I manage a small team.
organizar | to organise | {Organizaba} eventos y congresos. | I used to organise events and conferences.
encargarse de | to be in charge of | Me {encargo de} las redes sociales. | I'm in charge of social media.
los puntos fuertes | strengths | Mis {puntos fuertes} son la organización y la comunicación. | My strengths are organisation and communication.
responsable | responsible | Soy una persona muy {responsable}. | I'm a very responsible person.
llevar + tiempo | to have been (time) | {Llevo} dos años en esta empresa. | I've been at this company for two years.
desde hace | for (since) | Trabajo aquí {desde hace} tres años. | I've worked here for three years.
el autónomo / la autónoma | self-employed person | Soy {autónomo} desde 2022. | I've been self-employed since 2022.
la jubilación | retirement | Mi padre está pensando en la {jubilación}. | My father is thinking about retirement.
soler | to usually | {Suelo} empezar a las nueve. | I usually start at nine.
`,
    D: `
He trabajado ___ tres empresas. | en | I've worked at three companies.
___ (trabajar, yo) en Philips de 2016 a 2020. | trabajé | I worked at Philips from 2016 to 2020.
Allí ___ (organizar, yo) eventos y viajaba mucho. | organizaba | There I organised events and travelled a lot.
Este año ___ ___ (dirigir, yo) un equipo. | he dirigido | This year I've led a team.
Me ___ (licenciarse) en 2015. | licencié | I graduated in 2015.
___ (llevar, yo) tres años en esta empresa. | llevo | I've been at this company for three years.
Trabajo aquí desde ___ tres años. | hace | I've worked here for three years.
Soy autónoma ___ 2022. | desde | I've been self-employed since 2022.
Me ___ (contratar, ellos) en mayo. | contrataron | They hired me in May.
Lo ___ (despedir, ellos) el año pasado. | despidieron | They fired him last year.
Le envío mi ___. (CV) | currículum | I'm sending you my CV.
Mañana tengo una ___ de trabajo. | entrevista | Tomorrow I have a job interview.
Me ___ (encargarse) de las redes sociales. | encargo | I'm in charge of social media.
¿Por qué quiere este ___? (position) | puesto | Why do you want this position?
Tengo un contrato ___; es fijo. | indefinido | I have a permanent contract; it's fixed.
Hice unas ___ en un periódico. (internship) | prácticas | I did an internship at a newspaper.
Mi jefe anterior ___ (ser) muy exigente. | era | My previous boss was very demanding.
Yo ___ (soler) empezar a las nueve. | suelo | I usually start at nine.
Mis puntos ___ son la comunicación y el orden. | fuertes | My strengths are communication and organisation.
Hago ___ dos días a la semana. (remote work) | teletrabajo | I work remotely two days a week.
`,
    S: `
Llevo cinco años trabajando en marketing. | I've been working in marketing for five years.
Me licencié en Economía en 2016 y después hice un máster. | I graduated in economics in 2016 and then did a master's.
En mi trabajo anterior organizaba eventos internacionales. | In my previous job I organised international events.
¿Por qué quiere trabajar con nosotros? | Why do you want to work with us?
Mis puntos fuertes son la organización y los idiomas. | My strengths are organisation and languages.
Este año he dirigido un equipo por primera vez. | This year I've led a team for the first time.
Tengo un contrato temporal de seis meses. | I have a six-month temporary contract.
Trabajo desde casa dos días a la semana. | I work from home two days a week.
`,
    R: [
      { t: 'Una entrevista de trabajo', x: `—Buenos días, señora Visser. Siéntese, por favor. Háblenos de su experiencia.
—Pues me licencié en Comunicación en 2015. Después hice unas prácticas en una agencia de Ámsterdam y allí me contrataron. Durante cinco años organizaba campañas para clientes internacionales.
—¿Y ahora?
—Desde 2021 trabajo en una empresa de turismo en Valencia. Llevo tres años dirigiendo el equipo de redes sociales.
—¿Por qué quiere cambiar de trabajo?
—Busco un proyecto nuevo y su empresa trabaja con toda Latinoamérica. Me encantaría usar mi español.`, q: `¿Dónde hizo las prácticas? | En Valencia ; *En una agencia de Ámsterdam ; En Latinoamérica
¿Desde cuándo trabaja en Valencia? | Desde 2015 ; *Desde 2021 ; Desde hace un año
¿Por qué quiere cambiar de trabajo? | Gana poco ; *Busca un proyecto nuevo y quiere usar su español ; No le gusta su jefe` },
      { t: 'El trabajo en España', x: `El mercado laboral español ha cambiado mucho en los últimos años. Hoy hay más contratos indefinidos que antes, pero los sueldos todavía son más bajos que en el norte de Europa. Muchos jóvenes cualificados trabajan en el extranjero, aunque cada vez más vuelven. El teletrabajo se ha hecho muy popular, sobre todo en las empresas de tecnología, y muchos extranjeros vienen a vivir a España y trabajan en remoto.`, q: `¿Qué tipo de contrato es más común hoy que antes? | Temporal ; *Indefinido ; Autónomo
¿Cómo son los sueldos comparados con el norte de Europa? | Más altos ; *Más bajos ; Iguales
¿Qué hacen muchos extranjeros? | Buscan trabajo en bares ; *Viven en España y trabajan en remoto ; Vuelven a su país` },
      { t: 'Mi primer trabajo', x: `Mi primer trabajo fue en una heladería de la playa, cuando tenía dieciséis años. Trabajaba seis horas al día, todos los días de julio y agosto. El sueldo era muy bajo y el jefe era un poco antipático, pero me lo pasaba bien con mis compañeros. Aprendí a hablar con todo tipo de personas y a trabajar rápido. Ese verano también conocí a mi mejor amiga, Nuria, que trabajaba en el bar de al lado.`, q: `¿Cuántos años tenía en su primer trabajo? | 14 ; *16 ; 18
¿Cómo era el jefe? | Muy simpático ; *Un poco antipático ; No había jefe
¿A quién conoció ese verano? | A su novio ; *A su mejor amiga, Nuria ; A su jefe actual` }
    ],
    write: 'Write your professional profile in Spanish (150 words): studies, previous jobs (indefinido), what you did there (imperfecto), what you\'ve achieved (perfecto) and how long you\'ve been in your current job.',
    talk: 'You are an HR manager at a company in Madrid doing a job interview with the learner in usted. Ask about studies, experience, strengths and why they want the job; ask follow-up questions.',
    res: [R.cb1(7), R.lt(56, 57), R.slcFalse(), R.hhb('trabajo')]
  });

  U({
    id: 'a2-salud', title: 'La salud: me duele', goal: ['Explain symptoms at the pharmacy or doctor', 'Use doler and parts of the body', 'Give and understand advice'],
    grammar: {
      t: 'doler (like gustar), tener + symptoms, advice with tienes que / deberías / es mejor',
      h: `<p><b>doler</b> (o→ue) works like gustar: <b>Me duele la cabeza.</b> <b>Me duelen los pies.</b> ¿Te duele algo? Use the article, not the possessive: <i>Me duele <b>la</b> espalda</i> (not "mi espalda").</p>
<p><b>tener</b> + noun: <i>tengo fiebre, tengo tos, tengo gripe, tengo dolor de estómago, tengo náuseas, tengo alergia</i>. <b>estar</b> + adjective: <i>estoy resfriado/a, estoy mareado/a, estoy constipado/a</i>.</p>
<p>Advice: <b>tienes que</b> + inf. (strong), <b>deberías</b> + inf. (you should), <b>es mejor</b> + inf., <b>¿por qué no…?</b> In formal contexts the doctor uses usted: <i>Tiene que descansar. Tome este jarabe.</i></p>
<p>In Spain you visit your <b>médico de cabecera</b> (GP) at the <b>centro de salud</b>; you need your <b>tarjeta sanitaria</b>. For emergencies, <b>urgencias</b> or call <b>112</b>. The <b>farmacia de guardia</b> is open all night.</p>`
    },
    conj: { t: 'pres', v: ['doler', 'sentirse', 'tener'] },
    V: `
la cabeza | head | Me duele la {cabeza}. | My head hurts.
la cara | face | Tienes la {cara} roja. | Your face is red.
los ojos | eyes | Me pican los {ojos}. | My eyes are itchy.
el oído | (inner) ear | Me duele el {oído}. | I have an earache.
la nariz | nose | Tengo la {nariz} tapada. | My nose is blocked.
la boca | mouth | Abra la {boca}, por favor. | Open your mouth, please.
la garganta | throat | Me duele la {garganta}. | I have a sore throat.
la muela | molar tooth | Me duele una {muela}. | I have toothache.
el cuello | neck | Tengo dolor de {cuello}. | I have a neck ache.
la espalda | back | Me duele la {espalda}. | My back hurts.
el pecho | chest | Siento presión en el {pecho}. | I feel pressure in my chest.
el estómago | stomach | Me duele el {estómago}. | My stomach hurts.
el brazo | arm | Me rompí el {brazo}. | I broke my arm.
la mano | hand | Me corté la {mano}. | I cut my hand.
el dedo | finger, toe | Me duele el {dedo}. | My finger hurts.
la pierna | leg | Tengo la {pierna} hinchada. | My leg is swollen.
la rodilla | knee | Me duele la {rodilla} al correr. | My knee hurts when I run.
el pie | foot | Me duelen los {pies}. | My feet hurt.
el tobillo | ankle | Me torcí el {tobillo}. | I twisted my ankle.
doler | to hurt | ¿Te {duele} mucho? | Does it hurt a lot?
la fiebre | fever | Tengo {fiebre}. | I have a fever.
la tos | cough | Tengo mucha {tos}. | I have a bad cough.
la gripe | flu | Tengo la {gripe}. | I have the flu.
estar resfriado / resfriada | to have a cold | Estoy {resfriada}. | I have a cold.
mareado / mareada | dizzy | Estoy un poco {mareado}. | I'm a bit dizzy.
las náuseas | nausea | Tengo {náuseas}. | I feel sick.
la alergia | allergy | Tengo {alergia} al polen. | I'm allergic to pollen.
sentirse | to feel | No me {siento} bien. | I don't feel well.
la receta | prescription | Necesita {receta} para este antibiótico. | You need a prescription for this antibiotic.
el jarabe | syrup | Tome este {jarabe}. | Take this syrup.
la pastilla | pill | Una {pastilla} cada ocho horas. | One pill every eight hours.
el antibiótico | antibiotic | No tome {antibióticos} sin receta. | Don't take antibiotics without a prescription.
la tirita | plaster (band-aid) | ¿Tienes una {tirita}? | Do you have a plaster?
la cita | appointment | Quería pedir {cita} con el médico. | I'd like to make an appointment with the doctor.
el centro de salud | health centre | Voy al {centro de salud}. | I'm going to the health centre.
el médico de cabecera | GP | Mi {médico de cabecera} es muy amable. | My GP is very kind.
urgencias | A&E / ER | Fuimos a {urgencias}. | We went to A&E.
la farmacia de guardia | duty (all-night) pharmacy | ¿Dónde está la {farmacia de guardia}? | Where is the duty pharmacy?
la tarjeta sanitaria | health card | Traiga su {tarjeta sanitaria}. | Bring your health card.
descansar | to rest | Tienes que {descansar}. | You have to rest.
deberías | you should | {Deberías} ir al médico. | You should go to the doctor.
¡que te mejores! | get well soon! | ¡{Que te mejores}! | Get well soon!
`,
    D: `
Me ___ la cabeza. | duele | My head hurts.
Me ___ los ojos. | duelen | My eyes hurt.
¿Qué te ___? (doler) | duele | What hurts?
Tengo ___ y tos. (fever) | fiebre | I have a fever and a cough.
Deberías ___ (rest) un par de días. | descansar | You should rest for a couple of days.
A mi hijo le duele la ___ (throat). | garganta | My son has a sore throat.
Quería pedir una ___ con el médico. | cita | I'd like to make an appointment with the doctor.
¡Que te ___! | mejores | Get well soon!
A mis padres les ___ (doler) las rodillas. | duelen | My parents' knees hurt.
No me ___ (sentirse) bien. | siento | I don't feel well.
Estoy ___; tengo mocos. (have a cold, m) | resfriado | I have a cold; I have a runny nose.
Ayer me ___ (torcer, yo) el tobillo. | torcí | Yesterday I twisted my ankle.
___ (tomar, usted) una pastilla cada ocho horas. | tome | Take one pill every eight hours.
Tiene ___ descansar. (usted) | que | You have to rest.
Es ___ no salir hoy. (better) | mejor | It's better not to go out today.
Tengo alergia ___ polen. | al | I'm allergic to pollen.
¿Necesito ___ para este medicamento? (prescription) | receta | Do I need a prescription for this medicine?
Por la noche hay una farmacia de ___. | guardia | At night there's a duty pharmacy.
Me ___ (doler) la muela desde ayer. | duele | My tooth has hurt since yesterday.
¿___ (doler) mucho? —No, solo un poco. | duele | Does it hurt a lot? —No, just a little.
`,
    S: `
Me duele mucho la garganta desde ayer. | My throat has hurt a lot since yesterday.
¿Tiene algo para la tos? | Do you have anything for a cough?
Creo que tengo gripe: tengo fiebre y me duele todo. | I think I have flu: I have a fever and everything hurts.
Tome una pastilla cada ocho horas. | Take one pill every eight hours.
Deberías ir al médico. | You should go to the doctor.
¿Necesito receta para esto? | Do I need a prescription for this?
Quería pedir cita para mañana, si es posible. | I'd like an appointment for tomorrow, if possible.
Me torcí el tobillo jugando al pádel. | I twisted my ankle playing padel.
`,
    R: [
      { t: 'En la farmacia', x: `—Buenas tardes. ¿Qué le pasa?
—Hola. Desde ayer me duele mucho la garganta y tengo un poco de fiebre.
—¿Tiene tos?
—Sí, un poco, sobre todo por la noche.
—Mire, le doy este jarabe para la tos y estas pastillas para la garganta. Tome una pastilla cada ocho horas. Si en tres días no está mejor, tiene que ir al médico.
—Muchas gracias. ¿Cuánto es?
—Son once euros con veinte. ¡Que se mejore!`, q: `¿Desde cuándo le duele la garganta? | Desde hace una semana ; *Desde ayer ; Desde esta mañana
¿Cada cuántas horas tiene que tomar la pastilla? | Cada 3 ; *Cada 8 ; Cada 11
¿Qué tiene que hacer si no mejora? | Volver a la farmacia ; *Ir al médico ; Tomar más jarabe` },
      { t: 'En el médico', x: `—Buenos días, doctora. Llevo tres días con dolor de estómago y náuseas.
—¿Ha comido algo raro?
—El sábado comí marisco en un restaurante.
—Vamos a ver… Túmbese aquí. ¿Le duele aquí?
—Sí, un poco.
—Parece una intoxicación leve. Tiene que beber mucha agua y comer arroz blanco, pollo a la plancha y nada de alcohol ni café durante unos días. Si tiene fiebre, vuelva.`, q: `¿Qué le pasa al paciente? | Le duele la cabeza ; *Tiene dolor de estómago y náuseas ; Tiene tos
¿Qué comió el sábado? | Paella ; *Marisco ; Pollo
¿Qué NO debe tomar? | Agua ; Arroz ; *Café y alcohol` },
      { t: 'El sistema sanitario', x: `En España la sanidad pública es universal y casi gratuita. Para usarla hay que tener la tarjeta sanitaria, que se pide en el centro de salud después de empadronarse. Cada persona tiene un médico de cabecera. Para ver a un especialista, primero hay que ir al médico de cabecera. Muchas personas también tienen un seguro privado para no esperar tanto. En caso de emergencia, se llama al 112.`, q: `¿Cómo es la sanidad pública? | Muy cara ; *Universal y casi gratuita ; Solo para españoles
¿Qué hay que hacer antes de pedir la tarjeta sanitaria? | Pagar un seguro ; *Empadronarse ; Ir a urgencias
¿Por qué tienen muchos un seguro privado? | Es obligatorio ; *Para no esperar tanto ; Es más barato` }
    ],
    write: 'Write a message to your boss saying you are ill: symptoms, what the doctor said, and when you think you\'ll be back. Then write advice for a friend with a cold (deberías, tienes que, es mejor).',
    talk: 'You are a GP (médica de cabecera) in a centro de salud in Madrid. Ask the learner about their symptoms, examine them verbally and give advice and a prescription. Use usted.',
    res: [R.cb1(28), R.cb1(29), R.cb1(38), R.lt(58, 59)]
  });

  U({
    id: 'a2-naturaleza', title: 'La naturaleza: landscapes and animals', goal: ['Describe landscapes, regions and nature', 'Talk about animals', 'Use superlatives and comparisons for geography'],
    grammar: {
      t: 'Superlatives and comparisons in description; prepositions of place in geography',
      h: `<p>Superlatives: <b>el/la + más/menos + adjective + de</b>: <i>El Teide es la montaña más alta de España. El Tajo es el río más largo de la península.</i></p>
<p><b>-ísimo</b> for emphasis: <i>un paisaje bonitísimo, un lago tranquilísimo, muchísimos pájaros</i>. Spelling: rico → <b>riquísimo</b>, largo → <b>larguísimo</b>, feliz → <b>felicísimo</b>.</p>
<p>Geography: <i>en el norte de, al sur de, cerca de la costa, en el interior, a orillas del río, en lo alto de la montaña</i>. <b>al norte de</b> = north of (outside); <b>en el norte de</b> = in the north of (inside).</p>
<p>Numbers above 1,000: <i>3.718 metros = tres mil setecientos dieciocho metros; un millón de habitantes</i>.</p>`
    },
    V: `
la naturaleza | nature | Me encanta la {naturaleza}. | I love nature.
el paisaje | landscape | ¡Qué {paisaje} tan bonito! | What a beautiful landscape!
la montaña | mountain | Subimos a la {montaña}. | We climbed the mountain.
la sierra | mountain range | La {sierra} de Guadarrama está cerca de Madrid. | The Guadarrama range is near Madrid.
el valle | valley | El pueblo está en un {valle}. | The village is in a valley.
el río | river | El {río} Ebro pasa por Zaragoza. | The Ebro river flows through Zaragoza.
el lago | lake | Nadamos en el {lago}. | We swam in the lake.
el mar | sea | Vivo cerca del {mar}. | I live near the sea.
la playa | beach | Una {playa} de arena blanca. | A white sand beach.
la isla | island | Mallorca es la {isla} más grande de Baleares. | Mallorca is the biggest Balearic island.
el bosque | forest, woods | Paseamos por el {bosque}. | We walked through the woods.
el campo | countryside; field | Vivo en el {campo}. | I live in the countryside.
el desierto | desert | En Almería hay un {desierto}. | There's a desert in Almería.
el volcán | volcano | El Teide es un {volcán}. | The Teide is a volcano.
la cueva | cave | Visitamos una {cueva} con pinturas. | We visited a cave with paintings.
la costa | coast | La {costa} gallega es salvaje. | The Galician coast is wild.
el acantilado | cliff | Los {acantilados} son altísimos. | The cliffs are extremely high.
el árbol | tree | Hay muchos {árboles} en el parque. | There are many trees in the park.
la flor | flower | En primavera hay {flores} por todas partes. | In spring there are flowers everywhere.
el cielo | sky | El {cielo} está azul. | The sky is blue.
la estrella | star | De noche se ven las {estrellas}. | At night you can see the stars.
el animal | animal | Me encantan los {animales}. | I love animals.
el pájaro | bird | Los {pájaros} cantan por la mañana. | The birds sing in the morning.
el caballo | horse | Montamos a {caballo}. | We rode horses.
la vaca | cow | En Asturias hay muchas {vacas}. | There are many cows in Asturias.
la oveja | sheep | Las {ovejas} comen hierba. | The sheep eat grass.
el cerdo | pig | El {cerdo} ibérico come bellotas. | The Iberian pig eats acorns.
el toro | bull | El {toro} es un símbolo de España. | The bull is a symbol of Spain.
el lobo | wolf | Hay {lobos} en la montaña. | There are wolves in the mountains.
el oso | bear | El {oso} pardo vive en Asturias. | The brown bear lives in Asturias.
el águila | eagle | Vimos un {águila}. | We saw an eagle.
el pez | fish (alive) | Hay {peces} en el río. | There are fish in the river.
el insecto | insect | Hay muchos {insectos} en verano. | There are many insects in summer.
el mosquito | mosquito | Me picó un {mosquito}. | A mosquito bit me.
el parque nacional | national park | Doñana es un {parque nacional}. | Doñana is a national park.
la ruta | route, trail | Hicimos una {ruta} de diez kilómetros. | We did a ten-kilometre trail.
caminar | to walk | Me gusta {caminar} por el campo. | I like walking in the countryside.
alto / alta | high, tall | Es la montaña más {alta} de España. | It's the highest mountain in Spain.
largo / larga | long | Es el río más {largo}. | It's the longest river.
profundo / profunda | deep | El lago es muy {profundo}. | The lake is very deep.
salvaje | wild | Es una playa {salvaje}. | It's a wild beach.
precioso / preciosa | beautiful | El valle es {precioso}. | The valley is beautiful.
`,
    D: `
El Teide es la montaña más alta ___ España. | de | The Teide is the highest mountain in Spain.
El Tajo es el río ___ largo de la península. | más | The Tajo is the longest river on the peninsula.
Es un paisaje bonit___. (very, -ísimo) | ísimo | It's an extremely beautiful landscape.
La paella está riqu___. (-ísima) | ísima | The paella is delicious.
Hay much___ pájaros. (very many, -ísimos) | ísimos | There are loads of birds.
Galicia está ___ norte de Portugal. (north of, outside) | al | Galicia is north of Portugal.
Asturias está ___ el norte de España. (inside) | en | Asturias is in the north of Spain.
El pueblo está a orillas ___ río. | del | The village is on the banks of the river.
Mallorca es la isla más grande ___ Baleares. | de | Mallorca is the largest island in the Balearics.
El lago es muy ___. (deep) | profundo | The lake is very deep.
Me ___ (picar) un mosquito. (indef) | picó | A mosquito bit me.
Ayer ___ (ver, nosotros) un águila. | vimos | Yesterday we saw an eagle.
Hicimos una ___ de diez kilómetros. (trail) | ruta | We did a ten-kilometre trail.
Doñana es un parque ___. | nacional | Doñana is a national park.
El oso ___ vive en Asturias. (brown) | pardo | The brown bear lives in Asturias.
Sevilla es más calurosa ___ Bilbao. | que | Seville is hotter than Bilbao.
Madrid tiene más de tres ___ de habitantes. (millions) | millones | Madrid has more than three million inhabitants.
3.718 = tres ___ setecientos dieciocho | mil | three thousand seven hundred and eighteen
El río más ___ de España es el Tajo. (long) | largo | The longest river in Spain is the Tajo.
Por la noche se ven las ___. (stars) | estrellas | At night you can see the stars.
`,
    S: `
El Teide, en Tenerife, es la montaña más alta de España. | The Teide, in Tenerife, is the highest mountain in Spain.
Los Picos de Europa son bonitísimos en otoño. | The Picos de Europa are beautiful in autumn.
En los Pirineos viven osos y águilas. | Bears and eagles live in the Pyrenees.
Hicimos una ruta de quince kilómetros por el bosque. | We did a fifteen-kilometre trail through the forest.
La costa de Galicia es más salvaje que la del Mediterráneo. | The Galician coast is wilder than the Mediterranean one.
Desde el pueblo se ve todo el valle. | From the village you can see the whole valley.
Me encanta dormir al aire libre y ver las estrellas. | I love sleeping outdoors and looking at the stars.
España es uno de los países más montañosos de Europa. | Spain is one of the most mountainous countries in Europe.
`,
    R: [
      { t: 'La España verde', x: `El norte de España, desde Galicia hasta el País Vasco, se llama la "España verde". Aquí llueve mucho y por eso los paisajes son verdísimos. Hay montañas altas, como los Picos de Europa, bosques, ríos y una costa con acantilados y playas salvajes. En los pueblos hay vacas y caballos, y en las montañas todavía viven osos y lobos. Es una zona perfecta para hacer senderismo, pero hay que llevar siempre un paraguas.`, q: `¿Por qué se llama "España verde"? | Por la bandera ; *Porque llueve mucho y es muy verde ; Por los árboles de Navidad
¿Qué animales salvajes viven en las montañas? | Tigres y leones ; *Osos y lobos ; Vacas y caballos
¿Qué hay que llevar siempre? | Bañador ; *Un paraguas ; Gafas de sol` },
      { t: 'Doñana', x: `El Parque Nacional de Doñana está en Andalucía, entre Huelva y Sevilla, donde el río Guadalquivir llega al mar. Es uno de los espacios naturales más importantes de Europa. Allí viven miles de aves, como flamencos y águilas, y también el lince ibérico, uno de los felinos más amenazados del mundo. Hoy Doñana tiene un problema grave: cada año tiene menos agua por la sequía y la agricultura.`, q: `¿Dónde está Doñana? | En el norte ; *En Andalucía, entre Huelva y Sevilla ; En una isla
¿Qué felino vive allí? | El tigre ; *El lince ibérico ; El león
¿Cuál es su problema? | Hay demasiados turistas ; *Cada año tiene menos agua ; Hace mucho frío` },
      { t: 'Una ruta por la sierra', x: `El domingo hicimos una ruta por la sierra de Guadarrama, a una hora de Madrid. Empezamos a caminar a las nueve, cuando todavía hacía fresco. Subimos por un bosque de pinos hasta un lago pequeño, a dos mil metros. El agua estaba friísima, pero mi hermano se bañó. Vimos un águila y muchas vacas. Comimos unos bocadillos al lado del lago y volvimos por la tarde, cansadísimos pero felices.`, q: `¿Dónde está la sierra de Guadarrama? | En Galicia ; *A una hora de Madrid ; En Andalucía
¿Quién se bañó en el lago? | Nadie ; *El hermano ; Todos
¿Cómo volvieron? | Tristes ; *Cansadísimos pero felices ; En autobús` }
    ],
    write: 'Describe a natural place you love (in Spain or the Netherlands): where it is, what the landscape is like, which animals live there, and compare it with another place using superlatives.',
    talk: 'You are a Spanish park ranger in the Picos de Europa. Tell the learner about the landscape and animals, recommend a route and ask about nature in the Netherlands; use comparisons and superlatives.',
    res: [R.lt(60, 61), R.ds('Beginner: naturaleza'), R.hhb('naturaleza')]
  });
})();
