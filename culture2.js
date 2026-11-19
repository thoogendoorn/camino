/* Living in Spain · part 2: daily life, food, festivals, getting around and the neighbourhood */
(function () {
  const M = CAMINO.culture;

  M({ id: 'horarios', level: 'A2', title: 'Horarios y comer fuera',
    blurb: 'Late lunches, later dinners, the menú del día and how to ask for the bill.',
    x: `Lo primero que sorprende a muchos extranjeros en España son los horarios. Se desayuna pronto y poco, a menudo un café con una tostada. A media mañana mucha gente toma algo en el bar del trabajo: un café, un bocadillo pequeño. La comida, que es la comida principal del día, se hace normalmente entre las dos y las tres y media de la tarde. Por la tarde, sobre todo los niños, toman la merienda. Y la cena llega tarde: entre las nueve y las diez de la noche, o incluso más tarde en verano.

Por eso, si llegas a un restaurante a las doce y media para comer, es posible que la cocina todavía no esté abierta. Y si quieres cenar a las siete, quizá solo encuentres bares con tapas.

Entre semana, muchos restaurantes ofrecen el menú del día: por un precio fijo tienes un primer plato, un segundo plato, postre o café, pan y bebida. Es una forma barata y muy española de comer bien. Normalmente puedes elegir entre tres o cuatro opciones para cada plato.

En los bares, es muy normal pedir en la barra y pagar al final, cuando te vas. Para llamar al camarero basta con levantar un poco la mano o decir «perdona» cuando pasa. Para pagar, se dice «¿me cobras?» o «la cuenta, por favor». La propina no es obligatoria: si el servicio ha sido bueno, se suele dejar algo de suelto o redondear la cuenta.

Y no tengas prisa. Después de comer, los españoles se quedan un buen rato hablando en la mesa. Eso tiene un nombre: la sobremesa.`,
    V: `
el menú del día | set lunch menu | El {menú del día} cuesta doce euros. | The set menu costs twelve euros.
el primer plato | first course, starter | De {primer plato}, ensalada mixta. | For the first course, mixed salad.
el segundo plato | main course | De {segundo plato}, merluza a la plancha. | For the main course, grilled hake.
a media mañana | mid-morning | {A media mañana} tomo un café con mis compañeros. | Mid-morning I have a coffee with my colleagues.
la merienda | afternoon snack | Los niños toman la {merienda} a las seis. | The children have their snack at six.
la sobremesa | after-meal conversation at the table | La {sobremesa} duró dos horas. | The chat after lunch lasted two hours.
¿me cobras? | can I pay? (informal) | Perdona, ¿{me cobras}? | Excuse me, can I pay?
la propina | tip | La {propina} no es obligatoria. | The tip isn't compulsory.
el suelto | small change | Dejamos el {suelto} en el platito. | We left the small change on the little plate.
redondear | to round up | {Redondeamos} a veinte euros. | We rounded it up to twenty euros.
la barra | bar counter | Comimos de pie en la {barra}. | We ate standing at the counter.
¿qué lleva? | what's in it? | ¿{Qué lleva} el salmorejo? | What's in the salmorejo?
para picar | to nibble, to share | Pedimos algo {para picar}. | We ordered something to share.
la ración / la media ración | full / half portion (to share) | Una {media ración} de croquetas. | A half portion of croquettes.
para llevar | to take away | ¿Me lo pones {para llevar}? | Can you make it to take away?
`,
    model: `Camarero: Hola, ¿qué tal? ¿Qué os pongo?
Mara: Hola. ¿Tenéis menú del día?
Camarero: Sí. De primero hay lentejas, ensalada mixta o gazpacho. De segundo, pollo asado, merluza a la plancha o albóndigas.
Mara: Yo, de primero, el gazpacho, y de segundo, la merluza.
Jonas: Para mí, lentejas y albóndigas, por favor.
Camarero: ¿Y para beber?
Jonas: Agua. Y una caña.
Camarero: Muy bien. El postre o el café van incluidos.
Mara: Perfecto. ¿El gazpacho qué lleva? Es que soy alérgica al pimiento.
Camarero: Lleva pimiento, sí. Te recomiendo la ensalada.
Mara: Vale, entonces la ensalada. Gracias por avisar.`,
    talk: 'You are a waiter in a busy Madrid restaurant at lunchtime. Offer the menú del día with three choices for each course, take the order, answer a question about ingredients, and later bring the bill. Use tú, as is normal in Spain.',
    tasks: ['Eat a menú del día and order every course in Spanish.', 'Ask what a dish contains («¿qué lleva?»).', 'Order raciones to share at a bar and pay at the end with «¿me cobras?».', 'Try having dinner at Spanish time (after nine).'],
    gl: `tostada = toast
bocadillo = sandwich (baguette)
principal = main
cocina = kitchen
fijo = fixed
camarero = waiter
lentejas = lentils
albóndigas = meatballs
caña = small draught beer
pimiento = pepper
avisar = to warn` });

  M({ id: 'mercado', level: 'A2', title: 'En el mercado y en el súper',
    blurb: 'Who\'s last in the queue, ordering by weight and the habits of Spanish food shopping.',
    x: `Muchos barrios españoles todavía tienen su mercado municipal: un edificio con decenas de puestos de fruta, verdura, carne, pescado, embutidos o pan. Los precios no siempre son más bajos que en el supermercado, pero la calidad suele ser muy buena y los vendedores te aconsejan: qué fruta está en su punto, cómo se prepara un pescado o qué está de temporada.

En el mercado hay una regla de oro. Cuando llegas a un puesto con gente, preguntas: «¿Quién es el último?» o «¿Quién da la vez?». Alguien te contesta «yo», y ya sabes que vas después de esa persona. No hay número ni fila clara, pero todo el mundo sabe a quién le toca.

Se compra por peso o por unidades: un kilo de tomates, medio kilo de gambas, cuarto y mitad de jamón, una docena de huevos. En la pescadería te limpian el pescado si se lo pides: «¿Me lo limpias?», «¿Me lo cortas en rodajas?».

En el supermercado, las cosas son más impersonales, pero también hay costumbres. En la sección de fruta, a veces tienes que pesarla tú y pegar la etiqueta con el precio; otras veces la pesa el cajero. Las bolsas de plástico se pagan, así que mucha gente lleva sus propias bolsas o un carrito de la compra.

Cuidado con los horarios: los domingos muchas tiendas y supermercados cierran, aunque depende mucho de la comunidad y de la ciudad. Los mercados municipales suelen abrir por la mañana y, algunos días, también por la tarde.`,
    V: `
el mercado municipal | municipal market | Compro el pescado en el {mercado municipal}. | I buy fish at the municipal market.
el puesto de fruta | fruit stall | El {puesto de fruta} está al fondo. | The fruit stall is at the back.
¿quién es el último? | who's last (in the queue)? | Buenos días, ¿{quién es el último}? | Good morning, who's last?
dar la vez | to tell someone they're after you (queue) | ¿Quién {da la vez}? | Who's last in the queue?
estar en su punto | to be just right (ripe) | Estos melocotones {están en su punto}. | These peaches are just right.
de temporada | in season | Las fresas ya son {de temporada}. | Strawberries are in season now.
cuarto y mitad | 375 grams (a quarter and a half) | {Cuarto y mitad} de jamón serrano. | 375 grams of serrano ham.
la docena | dozen | Una {docena} de huevos camperos. | A dozen free-range eggs.
la pescadería | fishmonger's | En la {pescadería} te lo limpian. | At the fishmonger's they clean it for you.
en rodajas | in slices (round) | La merluza, cortada {en rodajas}. | The hake, cut into steaks.
pesar | to weigh | Tienes que {pesar} la fruta tú. | You have to weigh the fruit yourself.
la etiqueta | label, sticker | Pega la {etiqueta} en la bolsa. | Stick the label on the bag.
el carrito de la compra | shopping trolley (personal) | Mi abuela va al mercado con su {carrito de la compra}. | My grandmother goes to the market with her shopping trolley.
¿algo más? | anything else? | —¿{Algo más}? —No, nada más, gracias. | —Anything else? —No, that's all, thanks.
me toca | it's my turn | Perdone, ahora {me toca} a mí. | Excuse me, it's my turn now.
`,
    model: `Lotte: Buenos días. ¿Quién es el último?
Señor: Yo, guapa. Vas detrás de mí.
Lotte: Gracias.
Frutera: ¡Siguiente! ¿Qué te pongo, bonita?
Lotte: Hola. Un kilo de tomates de ensalada, por favor.
Frutera: ¿Para hoy o para dentro de unos días?
Lotte: Para hoy.
Frutera: Pues estos, que están en su punto. ¿Algo más?
Lotte: Sí, ¿qué fruta está buena ahora?
Frutera: Las mandarinas están buenísimas, son de temporada. Prueba una.
Lotte: Mmm, qué dulce. Pues un kilo de mandarinas también.
Frutera: Muy bien. Son cuatro euros con veinte.`,
    talk: 'You are a friendly stallholder in a Spanish municipal market. The learner is buying food. Ask what they need and for when, recommend what is in season, use quantities (kilo, medio kilo, cuarto y mitad) and say the price.',
    tasks: ['Go to a municipal market and ask «¿quién es el último?».', 'Buy something by weight using Spanish quantities.', 'Ask a stallholder what is in season or how to cook something.', 'Find out your nearest supermarket\'s Sunday opening rules.'],
    gl: `decenas = dozens
embutidos = cured meats
aconsejan = advise
regla de oro = golden rule
fila = line, queue
gambas = prawns
impersonales = impersonal
cajero = cashier
guapa = love (friendly term)
bonita = love (friendly term)
mandarinas = tangerines` });

  M({ id: 'comida-regional', level: 'B1', title: 'Una vuelta a España en platos',
    blurb: 'Gazpacho, fabada, pulpo, paella, pintxos: regional food and a few fierce debates.',
    x: `Decir «comida española» es simplificar mucho. Cada región tiene su cocina, ligada a su clima, a su paisaje y a su historia. Viajar por España es, en buena parte, ir comiendo de un sitio a otro.

En Andalucía, el calor explica muchos platos fríos: el gazpacho, una sopa fría de tomate, pimiento, pepino, ajo, aceite y vinagre, o el salmorejo cordobés, más espeso, que se sirve con huevo duro y jamón. En la costa se fríe el pescado con una maestría que no se encuentra en otras partes: el «pescaíto frito».

En el norte, el clima es más frío y la cocina, más contundente. En Asturias, la fabada, un guiso de alubias blancas con chorizo, morcilla y lacón, se acompaña con sidra, que se escancia desde lo alto para que haga espuma. En Galicia, el pulpo a la gallega, cocido y servido con aceite, sal gorda y pimentón, se come en las ferias de los pueblos. En el País Vasco, la cultura de los pintxos, pequeñas elaboraciones que se toman en la barra, convierte cualquier salida en una ruta de bar en bar.

En Madrid, el plato tradicional es el cocido madrileño, que se sirve en varios «vuelcos»: primero la sopa, después los garbanzos con las verduras y, por último, las carnes. En Cataluña, algo tan sencillo como el pan con tomate —pan untado con tomate, aceite y sal— acompaña casi cualquier comida.

Y luego está la paella, el plato español más famoso fuera de España. En Valencia, de donde viene, la paella valenciana tradicional lleva pollo, conejo, judías verdes y garrofó, una alubia grande y plana; nada de chorizo. Ponerle chorizo es, para muchos valencianos, casi una ofensa.

Las discusiones gastronómicas son un deporte nacional. La más famosa es la de la tortilla de patatas: ¿con cebolla o sin cebolla? Hay familias divididas por menos.`,
    V: `
ligado / ligada a | linked to | Una cocina {ligada al} clima. | A cuisine linked to the climate.
el pepino | cucumber | El gazpacho lleva {pepino}. | Gazpacho has cucumber in it.
espeso / espesa | thick | El salmorejo es más {espeso} que el gazpacho. | Salmorejo is thicker than gazpacho.
freír | to fry | En Cádiz saben {freír} el pescado como nadie. | In Cádiz they know how to fry fish like no one else.
la sidra | cider | En Asturias la {sidra} se escancia desde lo alto. | In Asturias cider is poured from a height.
el guiso | stew | Mi abuela hace un {guiso} de lentejas buenísimo. | My grandmother makes a great lentil stew.
las alubias | beans | La fabada lleva {alubias} blancas. | Fabada has white beans in it.
escanciar | to pour (cider, from a height) | El camarero sabe {escanciar} la sidra. | The waiter knows how to pour cider from a height.
la sal gorda | coarse salt | Pulpo con aceite y {sal gorda}. | Octopus with oil and coarse salt.
el pintxo | Basque bar snack | Tomamos un {pintxo} en cada bar. | We had a pintxo in every bar.
los garbanzos | chickpeas | El cocido lleva {garbanzos}. | Cocido has chickpeas in it.
untar | to spread, rub | Hay que {untar} el tomate en el pan. | You have to rub the tomato on the bread.
las judías verdes | green beans | La paella valenciana lleva {judías verdes}. | Valencian paella has green beans in it.
la ofensa | offence, insult | Para un valenciano, eso es una {ofensa}. | For a Valencian, that's an insult.
la tortilla de patatas | Spanish omelette | ¿Te gusta la {tortilla de patatas} con cebolla? | Do you like Spanish omelette with onion?
`,
    model: `Iñaki: Bueno, ¿y qué tal tu viaje por el norte?
Grace: Increíble. Pero creo que he engordado tres kilos.
Iñaki: ¡Normal! ¿Qué has probado?
Grace: En Oviedo, fabada y sidra. El camarero la escanciaba desde muy alto. Yo lo intenté y me mojé entera.
Iñaki: Ja, ja. Eso le pasa a todo el mundo la primera vez.
Grace: En Galicia comí pulpo en una feria, con pimentón. Y aquí en San Sebastián, pintxos, claro.
Iñaki: ¿Cuál te gustó más?
Grace: Uno de bacalao con pimientos… no recuerdo el bar.
Iñaki: Mañana te llevo a mi sitio favorito. Pero una pregunta importante: ¿tortilla con cebolla o sin cebolla?
Grace: Con cebolla, por supuesto.
Iñaki: Bien. Podemos seguir siendo amigos.`,
    talk: 'You are a Spanish friend who loves food. Ask the learner about Spanish dishes they have tried, explain one regional dish in detail (ingredients and how it is eaten), and playfully argue about the onion in the tortilla.',
    tasks: ['Try one dish from a region you have not visited, and ask what it contains.', 'Cook a simple Spanish dish (pan con tomate, gazpacho or tortilla) following a recipe in Spanish.', 'Ask a Spanish person for their regional dish and its correct recipe.', 'Take a side in the onion debate, in Spanish.'],
    gl: `simplificar = to simplify
maestría = mastery
pescaíto = little fish (Andalusian «pescadito»)
chorizo = chorizo
morcilla = black pudding
lacón = cured pork shoulder
espuma = foam
ferias = fairs
contundente = hearty
elaboraciones = preparations
vuelcos = courses (of cocido)
garrofó = large Valencian butter bean
gastronómicas = culinary
engordado = put on weight
mojé = got soaked
bacalao = cod` });

  M({ id: 'fiestas', level: 'B1', title: 'Un calendario de fiestas',
    blurb: 'Fallas, San Fermín, Semana Santa, Reyes and the bank-holiday puente.',
    x: `En España siempre hay una fiesta en algún sitio. Además de los festivos nacionales, como el 12 de octubre, Fiesta Nacional, o el 6 de diciembre, Día de la Constitución, cada comunidad autónoma y cada municipio tienen sus propios días de fiesta. Por eso conviene mirar el calendario laboral de tu ciudad al principio del año.

El año empieza con las doce uvas: en Nochevieja, a medianoche, se come una uva con cada campanada. Pocos días después, el 5 de enero por la tarde, los Reyes Magos recorren las calles en la cabalgata, tirando caramelos, y por la noche dejan los regalos a los niños. El 6 de enero, día de Reyes, se come el roscón.

En marzo, Valencia celebra las Fallas: durante días se exponen enormes figuras satíricas de cartón y madera, los ninots, que se queman la noche del 19 de marzo, en la cremà. La Semana Santa, entre marzo y abril, se vive con procesiones en muchas ciudades; las de Sevilla, Málaga o Valladolid son especialmente conocidas. Poco después, Sevilla celebra la Feria de Abril, con casetas, trajes de flamenca y sevillanas.

En verano, del 6 al 14 de julio, Pamplona celebra San Fermín, famoso en todo el mundo por los encierros, en los que los toros corren por las calles detrás de los corredores. La noche de San Juan, el 23 de junio, se encienden hogueras en muchas playas y pueblos, sobre todo en la costa mediterránea y en Galicia. Y casi cada pueblo tiene en verano sus fiestas patronales, con verbenas, orquestas y comidas populares.

Un truco práctico: cuando un festivo cae en martes o en jueves, mucha gente se coge el lunes o el viernes libre. Eso se llama hacer puente. Si el puente es largo, las carreteras se llenan y los trenes se agotan.`,
    V: `
el festivo | public holiday | El lunes es {festivo} en Madrid. | Monday is a public holiday in Madrid.
el calendario laboral | official calendar of working days | Mira el {calendario laboral} de tu ciudad. | Check your city's working calendar.
las doce uvas | the twelve grapes (New Year's Eve) | Nos comimos {las doce uvas} en la Puerta del Sol. | We ate the twelve grapes at the Puerta del Sol.
la campanada | stroke of the bell | Una uva con cada {campanada}. | One grape with each stroke.
la cabalgata | parade | Los niños esperan la {cabalgata} de Reyes. | The children wait for the Kings' parade.
el roscón | ring cake (for Epiphany) | El {roscón} lleva una sorpresa dentro. | The ring cake has a surprise inside.
satírico / satírica | satirical | Una figura {satírica} de un político. | A satirical figure of a politician.
la procesión | procession | La {procesión} sale de la iglesia a medianoche. | The procession leaves the church at midnight.
la caseta | marquee, stand (at a fair) | Nos invitaron a una {caseta} de la Feria. | We were invited into a marquee at the Fair.
el encierro | bull run | El {encierro} empieza a las ocho. | The bull run starts at eight.
la hoguera | bonfire | Saltamos la {hoguera} de San Juan. | We jumped over the Midsummer bonfire.
las fiestas patronales | patron saint's festival | En agosto son las {fiestas patronales} del pueblo. | The village festival is in August.
la verbena | open-air dance | Bailamos en la {verbena} hasta las cuatro. | We danced at the open-air party until four.
hacer puente | to take a long weekend (bridge) | Este año podemos {hacer puente} en diciembre. | This year we can take a long weekend in December.
agotarse | to sell out | Los billetes se {agotan} muy rápido. | Tickets sell out very quickly.
`,
    model: `Rocío: ¿Qué vas a hacer en el puente de diciembre?
Daan: ¿Qué puente?
Rocío: El de la Constitución. Este año el 6 cae en viernes y el 8 en domingo, pero aquí el lunes también es festivo.
Daan: ¿Y eso?
Rocío: Cuando un festivo cae en domingo, a veces la comunidad lo pasa al lunes. Tienes que mirar el calendario laboral.
Daan: No tenía ni idea. ¿Y tú adónde vas?
Rocío: A Valencia, a ver a mi familia. Pero en marzo vuelvo para las Fallas. ¿Te vienes?
Daan: ¿Las Fallas son las de los muñecos que se queman?
Rocío: ¡Los ninots! Y la mascletà, y los fuegos… Es una locura. Eso sí, reserva ya, que todo se agota.
Daan: Vale, me apunto.`,
    talk: 'You are a Spanish friend planning the year. Ask the learner which fiestas they want to see, explain one in detail (when, where, what happens) and give practical advice (booking, crowds, what to wear). Mention a puente.',
    tasks: ['Download your city\'s calendario laboral and mark the local holidays.', 'Go to a local fiesta, cabalgata or verbena.', 'Taste a seasonal festive food (roscón, torrijas, buñuelos…).', 'Plan a puente trip and book early.'],
    gl: `Nochevieja = New Year's Eve
exponen = are displayed
cartón = cardboard
ninots = (Valencian) Falla figures
cremà = (Valencian) burning of the Fallas
trajes de flamenca = flamenco dresses
sevillanas = (a folk dance from Seville)
corredores = runners
orquestas = bands
cae = falls (on a day)
muñecos = figures, dolls
mascletà = (Valencian) daytime firecracker display
me apunto = I'm in` });

  M({ id: 'transporte', level: 'A2', title: 'Moverse en transporte público',
    blurb: 'Metro, buses, Cercanías and long-distance trains: cards, validating and asking the way.',
    x: `Las grandes ciudades españolas tienen buen transporte público. Madrid, Barcelona, Valencia, Bilbao, Sevilla o Málaga tienen metro, y casi todas las ciudades tienen una red de autobuses urbanos. Alrededor de las grandes ciudades funcionan los trenes de Cercanías (en Cataluña se llaman Rodalies), que unen el centro con los pueblos y los barrios de las afueras.

Para viajar, lo más práctico suele ser una tarjeta de transporte recargable, que puedes cargar con viajes sueltos o con un abono mensual. Muchas ciudades tienen abonos con descuento para jóvenes y mayores. En muchos autobuses y metros ya se puede pagar también con la tarjeta bancaria o el móvil.

Una regla importante: el billete hay que validarlo al entrar, pasándolo por la máquina. En los autobuses urbanos normalmente subes por la puerta delantera y bajas por la de en medio o la de atrás. Para bajar, aprieta el botón de parada un poco antes de llegar. Si viajas sin billete validado, te pueden multar.

Para viajes largos, el tren es muy cómodo. Los trenes de alta velocidad, como el AVE, unen Madrid con muchas capitales de provincia en pocas horas. Es buena idea comprar los billetes con antelación: cuanto antes los compras, más baratos suelen ser. También hay muchas líneas de autobús de largo recorrido, que llegan a sitios donde no hay tren.

Y si te pierdes, pregunta. La gente suele ayudar con gusto: «Perdona, ¿para ir a la estación de Atocha?», «¿Este autobús para en la plaza Mayor?», «¿Dónde tengo que hacer transbordo?».`,
    V: `
la tarjeta de transporte | travel card | He recargado la {tarjeta de transporte}. | I've topped up my travel card.
recargable | rechargeable, top-up | Es una tarjeta {recargable}. | It's a top-up card.
recargar | to top up | ¿Dónde puedo {recargar} la tarjeta? | Where can I top up the card?
el abono mensual | monthly pass | Con el {abono mensual} viajas todo lo que quieras. | With the monthly pass you can travel as much as you like.
validar | to validate (a ticket) | No te olvides de {validar} el billete. | Don't forget to validate the ticket.
la puerta delantera | front door | Se sube por la {puerta delantera}. | You get on through the front door.
el botón de parada | stop button | Aprieta el {botón de parada}. | Press the stop button.
multar | to fine | Si no validas, te pueden {multar}. | If you don't validate, they can fine you.
los Cercanías | commuter trains | Cojo el {Cercanías} para ir a Alcalá. | I take the commuter train to Alcalá.
las afueras | outskirts | Vivo en las {afueras} de Sevilla. | I live on the outskirts of Seville.
la alta velocidad | high-speed (rail) | El tren de {alta velocidad} tarda dos horas y media. | The high-speed train takes two and a half hours.
con antelación | in advance | Compra los billetes {con antelación}. | Buy the tickets in advance.
de largo recorrido | long-distance | Un autobús {de largo recorrido}. | A long-distance coach.
hacer transbordo | to change (lines/trains) | Tienes que {hacer transbordo} en Sol. | You have to change at Sol.
¿para ir a…? | how do I get to…? | Perdona, ¿{para ir a} la catedral? | Excuse me, how do I get to the cathedral?
`,
    model: `Kofi: Perdona, ¿este autobús va a la estación de tren?
Conductora: No, este va al hospital. Tienes que coger el 12, en la parada de enfrente.
Kofi: ¿Y puedo pagar con tarjeta?
Conductora: Sí, con la tarjeta del banco o con el móvil. Acércala a la máquina.
Kofi: Gracias. ¿Y cuánto tarda en llegar a la estación?
Conductora: Unos quince minutos, si no hay tráfico. Son ocho paradas.
Kofi: ¿Me avisa cuando lleguemos?
Conductora: Mejor mira la pantalla: ahí aparece el nombre de cada parada. Cuando veas «Estación», aprieta el botón.
Kofi: Perfecto. Muchas gracias.
Conductora: De nada. ¡Buen viaje!`,
    talk: 'You are a bus driver or a passer-by in a Spanish city. The learner asks how to get somewhere by public transport. Give directions with line numbers, changes and stops, and explain how to pay and validate.',
    tasks: ['Get your city\'s travel card and top it up.', 'Ask a stranger how to get somewhere by public transport.', 'Take a Cercanías train to a town nearby.', 'Compare the price of a long-distance train ticket bought a month ahead and a week ahead.'],
    gl: `red = network
urbanos = city (buses)
unen = connect
sueltos = single (journeys)
descuento = discount
aprieta = press
cómodo = comfortable
capitales = capitals
con gusto = gladly
coger = to take (a bus)
enfrente = opposite
pantalla = screen` });

  M({ id: 'emergencias', level: 'B1', title: 'Emergencias: el 112',
    blurb: 'The single emergency number, what to say on the phone and other useful numbers.',
    x: `El 112 es el número de emergencias en España y en toda la Unión Europea. Es gratuito, funciona las veinticuatro horas y se puede llamar desde cualquier teléfono, fijo o móvil, incluso sin saldo. En muchas comunidades atienden en varias lenguas, entre ellas el inglés, pero saber explicar lo básico en español puede ahorrar segundos importantes.

Desde el 112 coordinan a los servicios que hagan falta: ambulancias, bomberos, policía o protección civil. Por eso, cuando llames, es importante mantener la calma y responder a las preguntas del operador. Lo primero que necesitan saber es dónde estás: la dirección exacta, el pueblo, un punto de referencia o el kilómetro de la carretera. Después, qué ha pasado, cuántas personas están afectadas y si están conscientes y respiran. No cuelgues hasta que te lo digan.

Además del 112, hay otros números útiles. El 091 es la Policía Nacional y el 062, la Guardia Civil, que se ocupa sobre todo de las zonas rurales y de las carreteras. Muchas ciudades tienen también Policía Local o Municipal. El 016 es el número de atención a las víctimas de violencia de género, y ofrece información y asesoramiento.

Para problemas de salud que no son urgentes, es mejor llamar a tu centro de salud o al teléfono de información sanitaria de tu comunidad. Las urgencias de los hospitales están para lo que es realmente urgente.

Desde hace unos años, además, el sistema ES-Alert puede enviar avisos a todos los móviles de una zona en caso de catástrofe o de riesgo grave, como inundaciones o incendios. Si recibes uno, léelo con atención y sigue las instrucciones de las autoridades.`,
    V: `
el número de emergencias | emergency number | El {número de emergencias} es el 112. | The emergency number is 112.
el saldo | (phone) credit, balance | Puedes llamar aunque no tengas {saldo}. | You can call even with no credit.
los bomberos | fire brigade | Llamamos a los {bomberos} por el humo. | We called the fire brigade because of the smoke.
mantener la calma | to keep calm | Lo importante es {mantener la calma}. | The important thing is to keep calm.
el operador / la operadora | (emergency) operator | La {operadora} me hizo muchas preguntas. | The operator asked me a lot of questions.
el punto de referencia | landmark | Estoy junto a una gasolinera, es el {punto de referencia}. | I'm next to a petrol station, that's the landmark.
consciente | conscious | El hombre está {consciente} pero sangra. | The man is conscious but bleeding.
respirar | to breathe | ¿La persona {respira}? | Is the person breathing?
colgar | to hang up | No {cuelgue}, por favor. | Don't hang up, please.
herido / herida | injured | Hay dos personas {heridas}. | There are two injured people.
la Guardia Civil | Civil Guard (police force) | La {Guardia Civil} vigila las carreteras. | The Civil Guard patrols the roads.
la violencia de género | gender-based violence | El 016 atiende casos de {violencia de género}. | 016 handles cases of gender-based violence.
el asesoramiento | advice, counselling | Ofrecen {asesoramiento} gratuito. | They offer free advice.
el aviso | warning, alert | He recibido un {aviso} en el móvil. | I've received an alert on my phone.
la inundación | flood | Hay riesgo de {inundación} en la zona. | There's a risk of flooding in the area.
`,
    model: `Operadora: Emergencias 112, ¿dígame?
Llamante: Hola. Ha habido un accidente. Un ciclista se ha caído y está en el suelo.
Operadora: ¿Dónde está usted exactamente?
Llamante: En la calle Alfonso Primero, número veinte, en Zaragoza. Delante de una farmacia.
Operadora: ¿El ciclista está consciente? ¿Respira?
Llamante: Sí, está consciente y respira, pero le sangra mucho la cabeza.
Operadora: Muy bien. Ya le envío una ambulancia. No lo mueva. Si puede, apriete la herida con un pañuelo limpio.
Llamante: Vale. ¿Tardará mucho?
Operadora: Unos diez minutos. No cuelgue. ¿Hay alguien más herido?
Llamante: No, solo él.
Operadora: Perfecto. Quédese con él hasta que llegue la ambulancia.`,
    talk: 'You are a 112 emergency operator. The learner calls about an emergency (a fall, a fire smell, a car accident). Ask for the exact location first, then what happened, the number of people, whether they are conscious and breathing, and give simple instructions. Keep calm and concise.',
    tasks: ['Save 112, 091 and 062 in your phone.', 'Practise saying your full address and a landmark aloud, in Spanish, without reading it.', 'Find your region\'s non-urgent health information phone number.', 'Check that ES-Alert (emergency alerts) is enabled on your phone.'],
    gl: `fijo = landline
ahorrar = to save
coordinan = coordinate
hagan falta = (that) are needed · present subjunctive
ambulancias = ambulances
protección civil = civil protection
afectadas = affected
cuelgues = (that) you hang up · present subjunctive
rurales = rural
catástrofe = disaster
incendios = fires
dígame = hello (on the phone)
ciclista = cyclist
sangra = is bleeding
pañuelo = handkerchief` });

  M({ id: 'correos', level: 'B1', title: 'Correos, cartas certificadas y paquetes',
    blurb: 'The yellow post office, the dreaded aviso de llegada and why you should collect registered letters.',
    x: `Correos, el servicio postal público español, se reconoce por su color amarillo. Sus buzones, también amarillos, están en muchas calles, y sus oficinas sirven para mucho más que enviar cartas: puedes mandar paquetes, recoger envíos, hacer giros, pagar algunos recibos o comprar sellos.

Para mucha gente, la experiencia más típica con Correos es encontrar en el buzón un aviso de llegada. Eso significa que el cartero ha intentado entregarte una carta certificada o un paquete y no estabas en casa. El aviso indica en qué oficina puedes recogerlo, a partir de cuándo y hasta qué fecha. Para recogerlo tienes que llevar el aviso y tu documento de identidad; si va otra persona en tu nombre, necesita una autorización firmada y tu documento.

Es muy importante no ignorar las cartas certificadas. Las administraciones —Hacienda, la Seguridad Social, la DGT, el ayuntamiento— envían muchas notificaciones oficiales por este medio, aunque cada vez más se hacen de forma electrónica. Si no recoges una notificación, el procedimiento puede seguir adelante igualmente, y podrías perder un plazo o quedarte sin la oportunidad de recurrir una multa.

Para enviar un paquete, puedes ir a la oficina o prepararlo por internet y dejarlo en una oficina o en una taquilla automática. Si es algo de valor, conviene enviarlo certificado o con seguro. Y si compras por internet, muchas veces puedes elegir que te lo dejen en una oficina o en un punto de recogida, para no depender de estar en casa.

Un último consejo: pon tu nombre en el buzón. Parece obvio, pero muchos envíos se devuelven porque el cartero no sabe quién vive en cada piso.`,
    V: `
el buzón | letterbox, postbox | Hay un aviso en el {buzón}. | There's a notice in the letterbox.
el aviso de llegada | delivery notice | El cartero me dejó un {aviso de llegada}. | The postman left me a delivery notice.
el cartero / la cartera | postman, postwoman | La {cartera} pasa por la mañana. | The postwoman comes in the morning.
la carta certificada | registered letter | Me ha llegado una {carta certificada} de Hacienda. | I've received a registered letter from the tax office.
entregar | to deliver | No pudieron {entregar} el paquete. | They couldn't deliver the parcel.
el envío | shipment, delivery | Tu {envío} está en camino. | Your delivery is on its way.
el sello | stamp | Necesito un {sello} para Alemania. | I need a stamp for Germany.
la notificación | (official) notification | He recibido una {notificación} del ayuntamiento. | I've received a notification from the town hall.
en tu nombre | on your behalf | Puede ir otra persona {en tu nombre}. | Someone else can go on your behalf.
recurrir | to appeal | Tienes un mes para {recurrir} la multa. | You have one month to appeal the fine.
el plazo | deadline, time limit | Se te puede pasar el {plazo}. | You might miss the deadline.
la taquilla automática | parcel locker | Lo recogí en una {taquilla automática}. | I picked it up from a parcel locker.
el punto de recogida | collection point | Elige un {punto de recogida} cerca de casa. | Choose a collection point near home.
de valor | valuable | Si es algo {de valor}, mándalo certificado. | If it's something valuable, send it registered.
devolver al remitente | to return to sender | El paquete se {devolvió al remitente}. | The parcel was returned to sender.
`,
    model: `Empleado: Buenos días. ¿Qué necesita?
Clienta: Hola. Vengo a recoger una carta certificada. Aquí tengo el aviso.
Empleado: ¿Me deja su documento de identidad?
Clienta: Sí, el NIE. Tome.
Empleado: Un momento… Aquí está. Es de la Dirección General de Tráfico. Firme aquí, por favor.
Clienta: ¿De Tráfico? ¡Ay, no! Seguro que es una multa.
Empleado: Eso ya no lo sé. ¿Algo más?
Clienta: Sí, quería enviar este paquete a Polonia. Son libros.
Empleado: ¿Lo quiere ordinario o certificado?
Clienta: Certificado, por favor, para poder seguirlo.
Empleado: Muy bien. Póngalo en la báscula… Son doce euros con cincuenta. Con este número lo puede seguir por internet.`,
    talk: 'You are a post office clerk. The learner comes to collect a registered letter (with a notice) and to send a parcel abroad. Ask for ID, explain the options (ordinary, registered, insured) and prices.',
    tasks: ['Put your name on your letterbox.', 'Find your nearest Correos office and its opening hours.', 'Send a letter or parcel and ask for the tracking number.', 'If you get an aviso de llegada, collect the item before the deadline.'],
    gl: `postal = postal
giros = money orders
intentado = tried
a partir de = from
ignorar = to ignore
electrónica = electronic
procedimiento = procedure
seguro = insurance
obvio = obvious
Tráfico = traffic department (DGT)
ordinario = standard (post)
seguirlo = to track it
báscula = scales` });

  M({ id: 'comunidad', level: 'B1', title: 'La comunidad de vecinos',
    blurb: 'Living in a block of flats: the president, the meeting, the fees and good neighbourliness.',
    x: `La mayoría de los españoles vive en pisos, y eso significa formar parte de una comunidad de propietarios, que todo el mundo llama comunidad de vecinos. La comunidad se ocupa de las zonas comunes: el portal, la escalera, el ascensor, el tejado, la fachada y, si los hay, el jardín o la piscina.

Cada propietario paga una cuota mensual o trimestral para los gastos ordinarios: la limpieza, la luz de la escalera, el mantenimiento del ascensor, el seguro del edificio. Si hay que hacer una obra importante, como cambiar el ascensor o arreglar la fachada, la comunidad puede aprobar una derrama, un pago extraordinario. Si vives de alquiler, normalmente es el propietario quien paga la comunidad, pero conviene comprobarlo en el contrato.

La comunidad tiene un presidente, que suele ser uno de los propietarios elegido por turno o por sorteo, y a menudo contrata a un administrador de fincas, un profesional que lleva las cuentas y los asuntos legales. Las decisiones importantes se toman en la junta de propietarios, que se celebra al menos una vez al año. Las juntas tienen fama de ser largas y, a veces, acaloradas: discutir sobre el color de la fachada o el horario de la piscina es casi un clásico de la vida española.

Hay también normas de convivencia: no hacer ruido a ciertas horas, no dejar bicicletas o carritos en el portal, sacar la basura a la hora indicada. Algunos edificios antiguos tienen portero o conserje, que vigila la entrada, recoge paquetes y conoce a todo el mundo.

Y una costumbre que se agradece: al llegar a un edificio nuevo, preséntate a los vecinos de tu planta. En España las relaciones de vecindad son importantes: un buen vecino te riega las plantas en agosto, te guarda un paquete o te presta sal en el último momento.`,
    V: `
la comunidad de vecinos | residents' association (block of flats) | La {comunidad de vecinos} paga la limpieza. | The residents' association pays for the cleaning.
las zonas comunes | communal areas | La piscina es una de las {zonas comunes}. | The pool is one of the communal areas.
el portal | entrance hall (of a building) | Te espero en el {portal}. | I'll wait for you in the entrance hall.
la fachada | façade | Van a pintar la {fachada}. | They're going to paint the façade.
la cuota | fee, subscription | La {cuota} de la comunidad es de cincuenta euros al mes. | The community fee is fifty euros a month.
trimestral | quarterly | Pagamos la comunidad de forma {trimestral}. | We pay the community fees quarterly.
la derrama | special levy | Han aprobado una {derrama} para el ascensor. | They've approved a special levy for the lift.
por turno | by rotation | El presidente se elige {por turno}. | The president is chosen by rotation.
el sorteo | draw (lottery) | Me tocó la presidencia en el {sorteo}. | I got the presidency in the draw.
el administrador de fincas | property manager | El {administrador de fincas} envía las actas. | The property manager sends the minutes.
la junta de propietarios | owners' meeting | La {junta de propietarios} es el martes. | The owners' meeting is on Tuesday.
acalorado / acalorada | heated | Fue una reunión muy {acalorada}. | It was a very heated meeting.
el portero / la portera | porter, concierge | El {portero} me ha guardado el paquete. | The porter kept the parcel for me.
el rellano | landing | Nos vimos en el {rellano} y nos presentamos. | We met on the landing and introduced ourselves.
regar | to water | ¿Me puedes {regar} las plantas en agosto? | Can you water my plants in August?
`,
    model: `Vecina: Hola, ¿eres el nuevo del segundo?
Samir: Sí, hola. Me llamo Samir. Me mudé la semana pasada.
Vecina: Yo soy Pilar, del segundo B. Bienvenido. ¿Ya conoces a Manolo, el portero?
Samir: Sí, muy majo. Me ha explicado lo de la basura.
Vecina: Muy bien. Oye, el jueves hay junta de vecinos. Como estás de alquiler, la propietaria tiene que venir, pero tú también puedes asistir si quieres.
Samir: ¿De qué se va a hablar?
Vecina: De la derrama del ascensor. Lleva meses estropeado y hay que cambiarlo. Prepárate, que estas juntas duran horas.
Samir: Ja, ja. Vale. Oye, si necesitas algo, estoy en el segundo A.
Vecina: Lo mismo te digo. Y si te vas en agosto, te riego las plantas.`,
    talk: 'Play two roles in turn: first a friendly neighbour meeting the learner on the stairs, then the president of the residents\' association at a meeting where the learner wants to complain about bicycles in the entrance hall. Be realistic and a little talkative.',
    tasks: ['Introduce yourself to a neighbour on your floor, in Spanish.', 'Find out who the president or administrador of your building is.', 'Read your building\'s noticeboard and understand one notice.', 'Check your contract to see who pays the community fees.'],
    gl: `tejado = roof
ordinarios = ordinary, regular
planta = floor
mantenimiento = maintenance
obra = building work
comprobarlo = to check it
asuntos = matters
se celebra = is held
clásico = classic
conserje = caretaker
vigila = watches over
vecindad = neighbourliness
presta = lends
majo = nice
asistir = to attend
estropeado = broken` });

  M({ id: 'carne', level: 'B2', title: 'El carné de conducir y la DGT',
    blurb: 'Driving with a foreign licence, exchanging it, the points system and the ITV.',
    x: `Si vas a vivir en España y quieres conducir, la primera pregunta es qué hacer con tu permiso de conducir. La respuesta depende del país que lo expidió.

Los permisos expedidos en un país de la Unión Europea o del Espacio Económico Europeo son válidos en España y no es obligatorio canjearlos, aunque sí hay que respetar su fecha de caducidad y, al renovarlo, se hace ya con las normas españolas. Los permisos de otros países sirven solo durante un tiempo limitado: normalmente, seis meses desde que obtienes la residencia legal. Después, si España tiene un convenio de canje con tu país, puedes cambiar tu permiso por uno español sin examen; si no lo tiene, tendrás que sacarte el carné en España, con examen teórico y práctico. Todo esto se tramita en la Dirección General de Tráfico, la DGT, con cita previa. Infórmate en su web, porque la lista de países y los requisitos cambian.

El carné español funciona con un sistema de puntos. Los conductores empiezan con ocho puntos durante los primeros años y, si no cometen infracciones, llegan a tener doce o más. Las infracciones graves, como conducir hablando por el móvil, no llevar el cinturón o superar mucho el límite de velocidad, restan puntos además de la multa. Si pierdes todos los puntos, te retiran el carné.

Los coches, por su parte, tienen que pasar la ITV, la Inspección Técnica de Vehículos, una revisión periódica obligatoria que comprueba los frenos, las luces, las emisiones y otros elementos de seguridad. La frecuencia depende de la antigüedad del coche.

Por último, cuidado con el alcohol. Los límites son estrictos, y para los conductores noveles y profesionales, todavía más bajos. Los controles de alcoholemia en carretera son frecuentes, sobre todo en fiestas y fines de semana. La regla más sencilla es también la más segura: si bebes, no conduzcas.`,
    V: `
el permiso de conducir | driving licence (official) | Mi {permiso de conducir} es holandés. | My driving licence is Dutch.
el carné de conducir | driving licence (everyday) | Me saqué el {carné de conducir} a los dieciocho. | I got my driving licence at eighteen.
expedir | to issue | El permiso fue {expedido} en Marruecos. | The licence was issued in Morocco.
canjear | to exchange | Tengo que {canjear} mi permiso por uno español. | I have to exchange my licence for a Spanish one.
el convenio de canje | exchange agreement | España tiene {convenio de canje} con ese país. | Spain has an exchange agreement with that country.
la fecha de caducidad | expiry date | Mira la {fecha de caducidad} del carné. | Check the licence's expiry date.
tramitar | to process (paperwork) | El canje se {tramita} en la DGT. | The exchange is processed at the DGT.
los requisitos | requirements | Lee bien los {requisitos} antes de ir. | Read the requirements carefully before going.
la infracción | (traffic) offence | Hablar por el móvil es una {infracción} grave. | Talking on the phone is a serious offence.
restar puntos | to take points off | Saltarse un semáforo {resta puntos}. | Jumping a red light takes points off.
el cinturón de seguridad | seat belt | Ponte el {cinturón de seguridad}. | Put your seat belt on.
la ITV | MOT, vehicle inspection | Mañana llevo el coche a pasar la {ITV}. | Tomorrow I'm taking the car for its inspection.
los frenos | brakes | Le fallaban los {frenos}. | The brakes were failing.
el conductor novel | new driver | Los {conductores noveles} llevan una L. | New drivers display an L.
el control de alcoholemia | breathalyser checkpoint | Nos pararon en un {control de alcoholemia}. | We were stopped at a breathalyser checkpoint.
`,
    model: `Emma: Oye, Luis, tú que sabes de estas cosas: tengo un carné de Canadá. ¿Puedo conducir aquí?
Luis: Depende. ¿Cuánto tiempo llevas con la residencia?
Emma: Me dieron la tarjeta hace cuatro meses.
Luis: Entonces te quedan unos dos meses, si no me equivoco. Después tienes que canjearlo o sacarte el carné aquí.
Emma: ¿Y con Canadá hay convenio?
Luis: Eso tendrías que mirarlo en la web de la DGT, que la lista cambia. Y pide cita cuanto antes, que tardan.
Emma: ¿Y si no hay convenio?
Luis: Pues autoescuela, examen teórico y examen práctico. Como todo el mundo.
Emma: ¡Qué pereza! Yo conduzco desde hace quince años.
Luis: Ya, pero la DGT no hace excepciones. Al menos el teórico lo puedes hacer en inglés en algunos centros, creo. Pregúntalo.`,
    talk: 'You are a DGT clerk. The learner has a foreign driving licence and wants to know whether they can drive and how to exchange it. Ask where it was issued and since when they are resident, and explain the options. Be precise but say that the official list should be checked.',
    tasks: ['Check on the DGT website what applies to your licence.', 'Book a cita previa at the DGT if you need to exchange your licence.', 'Learn the points system and the three most common offences.', 'If you have a car, find out when its ITV is due.'],
    gl: `expidió = issued
válidos = valid
renovarlo = to renew it
residencia legal = legal residence
examen teórico = written test
cometen = commit
superar = to exceed
retiran = take away
periódica = periodic
emisiones = emissions
antigüedad = age
estrictos = strict
autoescuela = driving school
Qué pereza = what a drag
excepciones = exceptions` });

  M({ id: 'reciclaje', level: 'A2', title: 'Reciclar: los colores de los contenedores',
    blurb: 'Yellow, blue, green, brown and the punto limpio for everything else.',
    x: `En España la basura se separa en casa y se tira en contenedores de distintos colores que están en la calle. Los colores son casi iguales en todo el país, aunque cada ayuntamiento tiene sus propias normas.

El contenedor amarillo es para los envases: botellas de plástico, latas, briks de leche o de zumo, bandejas de corcho blanco y papel de aluminio. El contenedor azul es para el papel y el cartón: periódicos, cajas, folios. Las cajas grandes hay que plegarlas antes de tirarlas. El contenedor verde, con forma de iglú en muchas ciudades, es para el vidrio: botellas y tarros, pero sin tapones. Los vasos, los platos y los espejos rotos no van en el verde.

En muchas ciudades hay también un contenedor marrón para los residuos orgánicos: restos de comida, posos de café, servilletas usadas. Y en el contenedor gris o verde oscuro, el del resto, va todo lo demás.

Hay cosas que no se pueden tirar en ningún contenedor: los aparatos eléctricos, las pilas, las bombillas, el aceite usado, la pintura o los muebles. Para eso existen los puntos limpios, centros donde se recogen estos residuos especiales. Las pilas también se pueden dejar en muchas tiendas y supermercados. Para los muebles y los colchones, muchos ayuntamientos tienen un servicio gratuito de recogida: llamas, te dan un día y lo dejas en la calle esa noche, junto al portal.

Otra norma importante es el horario: en muchas ciudades la basura se baja por la noche, a partir de cierta hora, porque los camiones pasan de madrugada. Dejar bolsas fuera del contenedor puede costar una multa.`,
    V: `
el contenedor | (large) bin, container | El {contenedor} amarillo está lleno. | The yellow bin is full.
los envases | packaging | Los {envases} van al amarillo. | Packaging goes in the yellow bin.
la lata | can, tin | Una {lata} de refresco. | A can of fizzy drink.
el brik | carton (drinks) | El {brik} de leche va al amarillo. | The milk carton goes in the yellow bin.
el cartón | cardboard | Pliega las cajas de {cartón}. | Fold the cardboard boxes.
plegar | to fold | Hay que {plegar} las cajas grandes. | You have to fold big boxes.
el vidrio | glass | Las botellas de {vidrio}, al verde. | Glass bottles, in the green bin.
el tarro | jar | Lava el {tarro} antes de tirarlo. | Wash the jar before throwing it away.
el tapón | cap, lid | Quita el {tapón} de la botella. | Take the cap off the bottle.
los residuos orgánicos | organic waste | El marrón es para los {residuos orgánicos}. | The brown bin is for organic waste.
los posos de café | coffee grounds | Los {posos de café} son orgánicos. | Coffee grounds are organic waste.
las pilas | batteries | Deja las {pilas} en el supermercado. | Leave the batteries at the supermarket.
la bombilla | light bulb | Se ha fundido la {bombilla}. | The light bulb has gone.
el punto limpio | recycling centre | Llevé la tele vieja al {punto limpio}. | I took the old TV to the recycling centre.
bajar la basura | to take the rubbish down | Me toca {bajar la basura}. | It's my turn to take the rubbish down.
`,
    model: `Lars: Perdona, Carmen, una pregunta tonta: ¿el brik de leche va al azul, porque es de cartón?
Carmen: No, no, al amarillo. Es un envase, tiene plástico y aluminio por dentro.
Lars: ¡Vaya! Llevo un mes haciéndolo mal. ¿Y las cajas de pizza?
Carmen: Si están limpias, al azul. Si tienen mucha grasa, al resto.
Lars: Entendido. ¿Y esta lámpara rota?
Carmen: Eso, al punto limpio. Hay uno al lado del polideportivo.
Lars: ¿Y el sofá viejo? No cabe en el coche.
Carmen: Llama al ayuntamiento. Te dan un día y lo dejas junto al portal por la noche. Es gratis.
Lars: Qué bien organizado está todo.
Carmen: Bueno… si todos lo hiciéramos bien, sí.`,
    talk: 'You are a Spanish neighbour. The learner holds up items one by one and asks which bin they go in. Answer, explain why, and correct common mistakes (cartons, broken glasses, pizza boxes, batteries, furniture).',
    tasks: ['Find the five types of container nearest your home.', 'Find the times when you may take rubbish down in your town.', 'Take batteries or a small appliance to a collection point or punto limpio.', 'Look up how to request a free furniture collection in your town.'],
    gl: `separa = is separated
bandejas = trays
corcho blanco = polystyrene
aluminio = aluminium
folios = sheets of paper
iglú = igloo
espejos = mirrors
servilletas = napkins
resto = general waste
aparatos = appliances
colchones = mattresses
camiones = lorries
tonta = silly
grasa = grease
polideportivo = sports centre
hiciéramos = (if) we did · past subjunctive` });

  M({ id: 'telefono', level: 'A2', title: 'Móvil e internet en casa',
    blurb: 'Contracts, prepaid SIMs, fibre installation and calling customer service.',
    x: `Uno de los primeros trámites al llegar a España es conseguir un número de teléfono español. Tienes dos opciones principales: una tarjeta de prepago o un contrato. Con el prepago, compras una tarjeta SIM en una tienda o un supermercado, la activas con tu pasaporte o NIE y la recargas cuando se acaba el saldo. Por ley, todas las tarjetas tienen que estar registradas con un documento de identidad. Con un contrato pagas una cuota mensual y normalmente necesitas una cuenta bancaria española.

Para internet en casa, en España está muy extendida la fibra óptica, que llega a la mayoría de las viviendas de las ciudades. Muchas compañías ofrecen paquetes que incluyen fibra, una o varias líneas de móvil y, a veces, televisión. Antes de firmar, compara precios y lee la letra pequeña: algunas ofertas tienen permanencia, es decir, si te das de baja antes de cierto tiempo, tienes que pagar una penalización. Pregunta también si el precio es para siempre o solo durante los primeros meses.

Después de contratar la fibra, un técnico viene a casa para hacer la instalación. Te darán una franja horaria —por ejemplo, de nueve a dos— y tendrás que estar en casa para abrirle.

Si algo no funciona, tendrás que llamar al servicio de atención al cliente. Prepárate: muchas veces te responde primero una máquina que te pide que digas o marques el motivo de tu llamada. Ten a mano tu DNI o NIE y el número de contrato. Y si quieres cambiar de compañía, puedes hacer la portabilidad: te quedas con tu número de siempre y la nueva compañía se encarga de todo.`,
    V: `
la tarjeta de prepago | prepaid SIM | Compré una {tarjeta de prepago} en el aeropuerto. | I bought a prepaid SIM at the airport.
activar | to activate | Hay que {activar} la tarjeta con el pasaporte. | You have to activate the card with your passport.
la fibra óptica | fibre-optic broadband | Tenemos {fibra óptica} en casa. | We have fibre broadband at home.
la tarifa | (price) plan | Una {tarifa} con fibra y dos móviles. | A plan with fibre and two mobile lines.
la línea móvil | mobile line | Quiero añadir una {línea móvil} para mi hija. | I want to add a mobile line for my daughter.
la permanencia | minimum contract period | Esta oferta tiene doce meses de {permanencia}. | This offer has a twelve-month minimum term.
la penalización | penalty, fee | Si te vas antes, pagas una {penalización}. | If you leave early, you pay a penalty.
el router | router | Reinicia el {router} y espera un minuto. | Restart the router and wait a minute.
el técnico / la técnica | technician | El {técnico} viene el martes. | The technician is coming on Tuesday.
la franja horaria | time slot | Me dieron una {franja horaria} de nueve a dos. | They gave me a time slot from nine to two.
la atención al cliente | customer service | Llamé a {atención al cliente} tres veces. | I called customer service three times.
la avería | fault, breakdown | Llamé para avisar de una {avería}. | I called to report a fault.
el motivo | reason | ¿Cuál es el {motivo} de su llamada? | What's the reason for your call?
tener a mano | to have to hand | {Ten a mano} el número de contrato. | Have your contract number to hand.
la portabilidad | number transfer (switching provider) | Hice la {portabilidad} y no perdí mi número. | I switched provider and kept my number.
`,
    model: `Máquina: Bienvenido. Por favor, diga en pocas palabras el motivo de su llamada.
Hugo: Avería de internet.
Máquina: Le paso con un agente.
Agente: Buenas tardes, le atiende Nerea. ¿En qué puedo ayudarle?
Hugo: Hola, buenas tardes. Desde esta mañana no tengo internet en casa.
Agente: ¿Me dice su DNI o NIE, por favor?
Hugo: Sí, es equis, uno, dos, tres, cuatro, cinco, seis, siete, ele.
Agente: Gracias. ¿Las luces del router están encendidas?
Hugo: Hay una luz roja que parpadea.
Agente: Vamos a reiniciarlo. Apáguelo, espere treinta segundos y vuelva a encenderlo.
Hugo: Vale… Ya está. Ahora la luz está verde.
Agente: Perfecto. ¿Puede comprobar si tiene conexión?
Hugo: Sí, ya funciona. ¡Muchas gracias!`,
    talk: 'You are a customer service agent for a Spanish phone company. The learner calls because their internet does not work or because they want to sign up for fibre. Ask for their ID number, troubleshoot or explain the offer (price, minimum term, installation slot).',
    tasks: ['Get a Spanish phone number (prepaid or contract).', 'Compare two fibre offers and find the permanencia in the small print.', 'Practise spelling your NIE or passport number aloud in Spanish.', 'Call a customer service line and get through the automatic menu in Spanish.'],
    gl: `principales = main
paquetes = bundles
contratar = to sign up for
marques = (that) you dial · present subjunctive
línea = line
registradas = registered
extendida = widespread
viviendas = homes
ofertas = offers
te das de baja = you cancel
instalación = installation
encarga = takes care
Avería = fault, breakdown
agente = agent
parpadea = is flashing
reiniciarlo = to restart it
conexión = connection` });
})();
