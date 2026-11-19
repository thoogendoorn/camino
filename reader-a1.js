/* Graded reader · A1: present tense only (plus hay, gustar and ir a + infinitive) */
(function () {
  const S = CAMINO.story, L = 'A1';

  S({ id: 'a1-madrid-1', level: L, series: 'Un año en Madrid', ch: 1, genre: 'Serial', title: 'Llegada a Madrid',
    blurb: 'Lotte, from Utrecht, arrives in Madrid for a year of work.',
    x: `Me llamo Lotte. Soy holandesa, de Utrecht. Tengo veintiocho años y soy diseñadora. Hoy es lunes y estoy en el aeropuerto de Madrid. Es septiembre y hace mucho calor.

Mi empresa tiene una oficina en Madrid. Voy a trabajar aquí un año. Estoy un poco nerviosa, pero también estoy muy contenta.

En el aeropuerto hay mucha gente. Busco el metro. Una señora me ayuda.

Señora: ¿Adónde vas?
Lotte: Voy a Lavapiés. Es un barrio del centro, ¿no?
Señora: Sí, es muy bonito. Tomas la línea ocho y después la línea uno. Es fácil.
Lotte: Muchas gracias.
Señora: De nada. ¡Bienvenida a Madrid!

El viaje en metro es largo, pero no es difícil. Miro a la gente. Hay estudiantes, familias y turistas con maletas grandes, como yo.

Mi piso está en una calle pequeña y antigua. El edificio es viejo y no tiene ascensor. Mi piso está en el cuarto piso. ¡Uf! La maleta pesa mucho.

Abro la puerta. El piso es pequeño, pero tiene mucha luz. Hay un salón, una cocina, un baño y tres dormitorios. Mi dormitorio tiene una cama, un armario y una ventana. Desde la ventana veo los tejados de Madrid.

Vivo con dos personas, pero hoy no están en casa. En la mesa de la cocina hay una nota: «¡Hola, Lotte! Bienvenida. Estamos en el trabajo. Hay agua y fruta en la nevera. Hasta la noche. Marta y Andrés».

Abro la nevera. Hay agua, naranjas y una tortilla. Como un poco de tortilla. Está muy buena. Después llamo a mi madre.

Lotte: Hola, mamá. Estoy en Madrid. El piso es pequeño, pero bonito.
Madre: ¿Y los compañeros de piso?
Lotte: No sé. Esta noche voy a conocer a Marta y a Andrés.

Ahora estoy en la ventana. Son las ocho de la tarde, pero todavía hay sol. En la calle hay mucha gente: niños, vecinos y perros. Mañana empiezo a trabajar. Un año en Madrid… ¡Qué aventura!`,
    q: `¿De dónde es Lotte? | De Madrid ; *De Utrecht ; De Valencia
¿Cuánto tiempo va a trabajar en Madrid? | Un mes ; Dos años ; *Un año
¿Cómo va Lotte al barrio de Lavapiés? | En taxi ; *En metro ; A pie
¿Cómo es el piso? | Grande y oscuro ; *Pequeño, pero con mucha luz ; Moderno y con ascensor
¿Quién escribe la nota? | La madre de Lotte ; La señora del metro ; *Marta y Andrés`,
    gl: `holandesa = Dutch (woman)
diseñadora = designer (woman)
aeropuerto = airport
calor = heat
empresa = company
nerviosa = nervous
Busco = I look for
ayuda = helps
línea = (metro) line
maletas = suitcases
maleta = suitcase
edificio = building
ascensor = lift
pesa = weighs
tejados = rooftops
nota = note
nevera = fridge
conocer = to meet
todavía = still
aventura = adventure`
  });

  S({ id: 'a1-madrid-2', level: L, series: 'Un año en Madrid', ch: 2, genre: 'Serial', title: 'Marta y Andrés',
    blurb: 'Lotte meets her two flatmates.',
    x: `Son las nueve y media de la noche. Lotte está en su dormitorio. Escucha la puerta. ¡Son sus compañeros de piso!

Marta: ¡Hola! Tú eres Lotte, ¿verdad? Yo soy Marta.
Lotte: Sí, hola, Marta. Encantada.
Andrés: Y yo soy Andrés. ¡Bienvenida!

Marta tiene treinta años. Es de Sevilla y es enfermera. Trabaja en un hospital grande. Es morena, alta y muy simpática. Habla muy rápido, con acento andaluz.

Andrés tiene veinticinco años. Es de un pueblo de Asturias, en el norte de España. Es estudiante de música y toca la guitarra. Es rubio, tiene barba y lleva gafas. Es tranquilo y un poco tímido.

Marta: ¿Tienes hambre? Vamos a cenar.
Lotte: ¿Ahora? ¿A las diez?
Andrés: Sí, en España cenamos tarde. Normalmente entre las nueve y las diez.
Lotte: En Holanda cenamos a las seis.
Marta: ¡A las seis! A las seis yo meriendo.

Andrés prepara una ensalada y Marta pone la mesa. Lotte corta el pan. Cenan en la cocina y hablan mucho.

Marta: ¿Hablas bien español, Lotte?
Lotte: Un poco. Estudio español desde hace un año, pero vosotros habláis muy rápido.
Andrés: Marta habla rápido. Yo no.
Marta: ¡Oye! Es verdad, pero… es mi acento.

Después de cenar, Andrés toca la guitarra. Marta canta. Lotte escucha y sonríe. Sus compañeros son muy simpáticos.

Hay unas reglas en el piso. Están en un papel en la puerta de la nevera:

1. Los lunes Marta limpia el baño.
2. Los miércoles Andrés limpia la cocina.
3. Los viernes Lotte limpia el salón.
4. ¡No hay música después de las doce!

Lotte: ¿Y la regla número cuatro?
Marta: Es para Andrés. Toca la guitarra a las dos de la mañana.
Andrés: Solo a veces…

Lotte se ríe. A las doce, todos van a la cama. Mañana es su primer día de trabajo. Lotte está cansada, pero contenta.`,
    q: `¿De dónde es Marta? | De Asturias ; *De Sevilla ; De Madrid
¿Qué estudia Andrés? | Medicina ; *Música ; Español
¿A qué hora cenan normalmente en España, según Andrés? | A las seis ; *Entre las nueve y las diez ; A las doce
¿Qué día limpia Lotte el salón? | El lunes ; El miércoles ; *El viernes
¿Para quién es la regla número cuatro? | Para Lotte ; Para Marta ; *Para Andrés`,
    gl: `Escucha = hears, listens to
enfermera = nurse (woman)
morena = dark-haired
acento = accent
andaluz = Andalusian
pueblo = village
toca = plays (an instrument)
barba = beard
tímido = shy
meriendo = I have an afternoon snack
pone = sets (the table)
corta = cuts
reglas = rules
regla = rule
limpia = cleans
sonríe = smiles
ríe = laughs
cansada = tired (woman)`
  });

  S({ id: 'a1-madrid-3', level: L, series: 'Un año en Madrid', ch: 3, genre: 'Serial', title: 'Un día normal',
    blurb: 'Lotte\'s new routine: work, lunch at three and a walk in the Retiro.',
    x: `Lotte se levanta a las siete y media. Se ducha, se viste y desayuna en la cocina: un café con leche y una tostada con tomate y aceite. Es un desayuno muy español. A Lotte le gusta mucho.

A las ocho y media sale de casa. Va a la oficina en metro. El viaje dura veinte minutos. En el metro, Lotte lee o escucha un podcast en español.

La oficina está en un edificio moderno, cerca de la calle Alcalá. Lotte trabaja en un equipo de cinco personas. Sus compañeros son simpáticos. Su jefa se llama Pilar. Es seria, pero muy amable.

Por la mañana, Lotte diseña páginas web y tiene reuniones. Habla en español todo el día. Es difícil, pero aprende mucho. A las once, todos toman un café en el bar de enfrente.

Lotte: ¿Siempre tomáis café a las once?
Pilar: Sí, es sagrado. Y a las dos, la comida.
Lotte: ¿A las dos? En mi país comemos a las doce y media.
Pilar: Aquí no. Aquí comemos a las dos o a las tres.

A las dos, Lotte come con sus compañeros en un restaurante pequeño. Hay un menú del día: primer plato, segundo plato, postre, pan y bebida por trece euros. Hoy Lotte come lentejas, pollo con patatas y fruta. Es mucha comida.

Por la tarde, Lotte trabaja hasta las seis. Después, a veces va al gimnasio y a veces pasea por el parque del Retiro. El Retiro es un parque muy grande y muy bonito. Hay un lago, árboles, fuentes y mucha gente: corredores, músicos, familias con niños.

Lotte vuelve a casa a las ocho. Marta está en el hospital por la noche esta semana. Andrés estudia en su habitación. Lotte llama a su hermano por videollamada, lee un poco y prepara la cena.

A las once y media, Lotte se acuesta. Está cansada. Los días en Madrid son largos, pero le gustan. Todavía no entiende todo, pero cada día entiende un poco más.`,
    q: `¿Qué desayuna Lotte? | Cereales y zumo ; *Café con leche y una tostada con tomate ; Nada
¿Cómo se llama su jefa? | Marta ; *Pilar ; Ana
¿Qué incluye el menú del día? | Solo un plato ; *Primer plato, segundo plato, postre, pan y bebida ; Café y tostada
¿Qué hace Lotte a veces después del trabajo? | Va al cine ; *Pasea por el Retiro o va al gimnasio ; Trabaja más
¿Dónde está Marta por la noche esta semana? | En casa ; *En el hospital ; En Sevilla`,
    gl: `se levanta = gets up
se ducha = has a shower
se viste = gets dressed
tostada = toast
aceite = (olive) oil
sale = leaves, goes out
dura = lasts
equipo = team
jefa = boss (woman)
seria = serious
amable = kind
diseña = designs
reuniones = meetings
enfrente = opposite
sagrado = sacred
lentejas = lentils
lago = lake
fuentes = fountains
corredores = runners
videollamada = video call
se acuesta = goes to bed
entiende = understands`
  });

  S({ id: 'a1-madrid-4', level: L, series: 'Un año en Madrid', ch: 4, genre: 'Serial', title: 'El Rastro',
    blurb: 'A Sunday at Madrid\'s famous flea market.',
    x: `Es domingo. Lotte no trabaja. Andrés entra en la cocina con una sonrisa.

Andrés: Lotte, ¿quieres ir al Rastro?
Lotte: ¿Qué es el Rastro?
Andrés: Es un mercado. Está aquí al lado, en La Latina. Hay de todo: ropa, libros, discos, muebles viejos…
Lotte: ¡Me encantan los mercados! Vamos.

El Rastro está abierto los domingos por la mañana. Las calles están llenas de puestos y de gente. Hay mucho ruido. Los vendedores gritan: «¡Tres camisetas, diez euros!», «¡Mira, mira, todo barato!».

Lotte mira los puestos. Ve una lámpara antigua, unos platos de colores y muchos libros. Andrés busca discos de vinilo. Es su pasión.

Lotte: ¿Cuánto cuesta este libro?
Vendedor: Cinco euros.
Lotte: ¿Y estos dos?
Vendedor: Los dos, ocho euros.
Lotte: ¿Seis euros?
Vendedor: ¡Uf! Siete, y es mi último precio.
Lotte: Vale, siete.

Andrés se ríe.

Andrés: ¡Muy bien! En el Rastro hay que regatear.
Lotte: En Holanda también regateamos en los mercados. A veces.

Andrés compra dos discos de un grupo de los años ochenta. Lotte compra los dos libros y una taza azul para el café. Después tienen hambre.

Cerca del Rastro hay muchos bares. Los domingos la gente toma el aperitivo: una caña o un vermú con unas tapas. Andrés y Lotte entran en un bar muy pequeño. Está lleno.

Andrés: Dos vermús y una ración de patatas bravas, por favor.
Camarero: Marchando.

Las patatas bravas son patatas fritas con una salsa un poco picante. A Lotte le gustan mucho, pero pica… ¡mucho!

Lotte: ¡Agua, por favor!
Andrés: Ja, ja. Son bravas, Lotte. Bravas.

Por la tarde, Lotte lee uno de sus libros nuevos en el salón. Es un libro de cuentos para niños. Es fácil, pero no entiende todas las palabras. Busca algunas en el diccionario. Afuera, en la calle, alguien toca la guitarra. Es domingo en Madrid.`,
    q: `¿Cuándo está abierto el Rastro? | Todos los días ; *Los domingos por la mañana ; Los sábados por la noche
¿Qué busca Andrés en el Rastro? | Libros ; Ropa ; *Discos de vinilo
¿Cuánto paga Lotte por los dos libros? | Cinco euros ; *Siete euros ; Ocho euros
¿Qué toman en el bar? | Café y churros ; *Vermú y patatas bravas ; Zumo y bocadillos
¿Qué libro lee Lotte por la tarde? | Una novela difícil ; *Un libro de cuentos para niños ; Un libro de cocina`,
    gl: `sonrisa = smile
mercado = market
discos = records
muebles = furniture
puestos = (market) stalls
ruido = noise
vendedores = sellers
vendedor = seller
gritan = shout
barato = cheap
lámpara = lamp
vinilo = vinyl
último = last
regatear = to haggle
regateamos = we haggle
taza = mug, cup
aperitivo = pre-lunch drink and snack
vermú = vermouth
ración = portion
picante = spicy
pica = it's spicy
cuentos = stories, tales
Afuera = outside`
  });

  S({ id: 'a1-familia-pablo', level: L, genre: 'Retrato', title: 'La familia de Pablo',
    blurb: 'A nine-year-old from Zaragoza introduces his family.',
    x: `Hola, me llamo Pablo y tengo nueve años. Vivo en Zaragoza con mi familia. Zaragoza es una ciudad grande, en el noreste de España. Tiene un río muy largo, el Ebro, y una basílica muy famosa, el Pilar.

Mi familia no es muy grande. Somos cuatro: mi padre, mi madre, mi hermana y yo. Bueno, cinco con Tula. Tula es nuestra perra. Es pequeña, negra y muy nerviosa.

Mi padre se llama Javier. Tiene cuarenta y dos años y es cocinero. Trabaja en un restaurante del centro. Cocina muy bien, pero en casa no cocina mucho, porque llega tarde y está cansado. Le gusta el fútbol y es del Real Zaragoza. Siempre está triste los domingos, porque su equipo pierde mucho.

Mi madre se llama Elena. Tiene cuarenta años y es profesora de matemáticas en un instituto. Es muy organizada. En la puerta de la nevera tiene un calendario con todas las actividades de la familia. Le gusta leer y correr. Los sábados por la mañana corre diez kilómetros. ¡Diez!

Mi hermana se llama Irene y tiene catorce años. Estudia en el instituto de mi madre, pero no en su clase. Irene es simpática, pero a veces no. Pasa mucho tiempo en su habitación con el móvil. Le gusta la música coreana y bailar. Dice que yo soy pesado. No es verdad. Bueno, a veces.

Yo estudio cuarto de primaria. Mi asignatura favorita es Ciencias Naturales, porque me gustan los animales. No me gusta Lengua, porque hay muchas reglas. Juego al baloncesto los martes y los jueves.

Mis abuelos viven en un pueblo de Teruel, a dos horas de Zaragoza. El pueblo es muy pequeño: solo tiene doscientas personas. Mi abuelo tiene un huerto con tomates, pimientos y calabacines. Mi abuela hace las mejores croquetas del mundo. Vamos al pueblo en verano y en Navidad. Allí juego en la calle con mis primos hasta muy tarde.

Los domingos comemos todos juntos en casa. Mi padre cocina paella o pollo asado. Hablamos, reímos y a veces discutimos. Mi hermana dice que somos una familia normal. Yo creo que somos una familia un poco especial.`,
    q: `¿Dónde vive Pablo? | En Teruel ; *En Zaragoza ; En Madrid
¿Qué es Tula? | Su hermana ; *Su perra ; Su abuela
¿Por qué está triste el padre los domingos? | Porque trabaja ; *Porque su equipo pierde ; Porque no cocina
¿Qué hace la madre los sábados por la mañana? | Cocina ; Lee ; *Corre diez kilómetros
¿Qué hace la abuela muy bien? | Paella ; *Croquetas ; Tortilla`,
    gl: `noreste = north-east
río = river
basílica = basilica
perra = dog (female)
nerviosa = nervous, hyper
cocinero = cook
pierde = loses
instituto = secondary school
organizada = organised
correr = to run
pesado = annoying (person)
asignatura = (school) subject
Lengua = Spanish (school subject)
huerto = vegetable garden
pimientos = peppers
calabacines = courgettes
croquetas = croquettes
primos = cousins
asado = roast
discutimos = we argue`
  });

  S({ id: 'a1-bar', level: L, genre: 'Escena', title: 'En el bar de la esquina',
    blurb: 'Breakfast, a misunderstanding and the regulars of a Spanish bar.',
    x: `Son las nueve de la mañana. El bar Casa Paco está en la esquina de una calle de Valladolid. Es un bar pequeño y antiguo, con una barra larga, cinco mesas y una televisión. Paco, el dueño, tiene sesenta años y trabaja aquí desde hace treinta.

Por la mañana, el bar está lleno. Hay obreros, oficinistas, jubilados y estudiantes. Todos desayunan rápido.

Paco: Buenos días, Luis. ¿Lo de siempre?
Luis: Sí, Paco. Un café solo y una tostada.

Luis viene todos los días. No necesita pedir. Paco sabe qué toma cada cliente: la señora Carmen toma un descafeinado con leche y un cruasán; los obreros toman café con leche y un pincho de tortilla; el estudiante de la mesa dos toma un colacao.

Hoy entra una chica nueva. Es turista. Lleva una mochila y un mapa.

Chica: Hola. Un café, por favor.
Paco: ¿Cómo lo quieres? ¿Solo, cortado, con leche…?
Chica: Eh… ¿Cortado? ¿Qué es un cortado?
Paco: Es un café solo con un poco de leche.
Chica: Vale, un cortado. Y… ¿tiene algo para comer?
Paco: Tenemos tostadas, cruasanes, bollos y tortilla.
Chica: Una tostada, por favor.
Paco: ¿Con tomate, con mantequilla y mermelada…?
Chica: ¡Uf, cuántas preguntas! Con tomate.

Todos en la barra se ríen, pero con simpatía. La señora Carmen habla con la chica.

Carmen: ¿De dónde eres, guapa?
Chica: Soy de Irlanda. Me llamo Siobhan.
Carmen: ¿Cómo? ¿Chivon?
Siobhan: Más o menos. Es un nombre difícil.
Carmen: Bueno, para mí eres Juana.

Siobhan se ríe. Le gusta el ambiente del bar: el ruido de la cafetera, la televisión con las noticias, la gente que habla alto. En su país los cafés son más tranquilos.

Siobhan: ¿Cuánto es?
Paco: Dos con cuarenta.
Siobhan: ¿Solo dos euros cuarenta? ¡Qué barato!
Paco: Esto es Valladolid, no Londres.

Siobhan paga y sale. En la puerta, mira el bar otra vez. Mañana vuelve. Ahora Paco sabe qué toma: un cortado y una tostada con tomate. Siobhan ya es una clienta de Casa Paco.`,
    q: `¿Cuánto tiempo lleva Paco trabajando en el bar? | Diez años ; *Treinta años ; Sesenta años
¿Qué toma Luis todos los días? | Un cortado ; *Un café solo y una tostada ; Un colacao
¿Qué es un cortado? | Un café con mucha leche ; *Un café solo con un poco de leche ; Un té
¿De dónde es la chica? | De Inglaterra ; *De Irlanda ; De Holanda
¿Cuánto paga Siobhan? | Cuatro euros ; *Dos euros cuarenta ; Dos euros`,
    gl: `esquina = corner
barra = bar counter
dueño = owner
obreros = (manual) workers
oficinistas = office workers
jubilados = pensioners
pedir = to order
descafeinado = decaf
pincho = small portion, snack
colacao = chocolate milk drink (brand)
mochila = backpack
bollos = buns, pastries
mantequilla = butter
mermelada = jam
simpatía = friendliness
guapa = dear (friendly address)
ambiente = atmosphere
cafetera = coffee machine
alto = loudly
clienta = customer (woman)`
  });

  S({ id: 'a1-farmacia', level: L, genre: 'Escena', title: '¿Dónde está la farmacia?',
    blurb: 'Asking the way in Seville when you feel ill.',
    x: `Tom es inglés y está de vacaciones en Sevilla. Es julio y hace muchísimo calor: cuarenta grados. Tom no está bien. Le duele la cabeza y tiene la cara roja. Necesita una farmacia.

Está en una plaza con muchos naranjos. Hay un señor mayor en un banco, a la sombra.

Tom: Perdone, ¿hay una farmacia cerca?
Señor: Sí, hay una en la calle Feria. No está lejos.
Tom: ¿Cómo voy?
Señor: Mire, sigue todo recto por esta calle hasta la iglesia. Allí gira a la derecha. Después toma la segunda calle a la izquierda. Esa es la calle Feria. La farmacia está al lado de un bar, enfrente de una frutería.
Tom: Todo recto hasta la iglesia, a la derecha y la segunda a la izquierda.
Señor: Eso es. Son cinco minutos.
Tom: Muchas gracias.
Señor: De nada, hijo. Y beba agua, ¿eh? Con este calor…

Tom camina despacio. Ve la iglesia: es grande y blanca, con una torre alta. Gira a la derecha. Cuenta las calles: una, dos. Gira a la izquierda. Ve un bar, una frutería… y una cruz verde. ¡La farmacia!

Dentro hay aire acondicionado. ¡Qué alivio! Hay una farmacéutica joven con una bata blanca.

Farmacéutica: Buenas tardes. ¿Qué le pasa?
Tom: Me duele mucho la cabeza y estoy cansado. Creo que es el sol.
Farmacéutica: ¿Tiene fiebre?
Tom: No sé. Creo que no.
Farmacéutica: ¿Bebe mucha agua?
Tom: Eh… no mucha.
Farmacéutica: Es un golpe de calor leve. Tiene que beber mucha agua, descansar en un sitio fresco y no salir entre las dos y las seis de la tarde. Para el dolor de cabeza, tome esto: un comprimido cada ocho horas.
Tom: ¿Cuánto es?
Farmacéutica: Tres euros con cincuenta. Y una botella de agua: un euro.

Tom paga, bebe toda la botella y descansa en el hotel. Por la noche está mucho mejor. Sale a cenar a las diez, como los sevillanos. Las calles están llenas de gente. Ahora entiende: en Sevilla, en verano, la vida empieza cuando el sol se va.`,
    q: `¿Qué le pasa a Tom? | Le duele el estómago ; *Le duele la cabeza y tiene calor ; Tiene un accidente
¿Dónde está la farmacia? | Al lado de la iglesia ; *Al lado de un bar, enfrente de una frutería ; En la plaza
¿Qué símbolo tienen las farmacias? | Una cruz roja ; *Una cruz verde ; Un sol
¿Qué recomienda la farmacéutica? | Ir al hospital ; *Beber agua, descansar y no salir con el sol fuerte ; Tomar un café
¿Por qué sale Tom a cenar a las diez? | Porque trabaja ; *Porque en verano los sevillanos viven por la noche ; Porque el restaurante abre a las diez`,
    gl: `grados = degrees
duele = hurts
naranjos = orange trees
banco = bench
sombra = shade
recto = straight on
iglesia = church
gira = turn
frutería = greengrocer's
beba = drink (formal command)
torre = tower
Cuenta = counts
cruz = cross
alivio = relief
farmacéutica = pharmacist (woman)
bata = white coat
fiebre = fever
golpe = blow, stroke
leve = mild
fresco = cool
comprimido = tablet`
  });

  S({ id: 'a1-valencia', level: L, genre: 'Retrato de ciudad', title: 'Valencia: sol, arroz y bicicletas',
    blurb: 'A short portrait of Spain\'s third city.',
    x: `Valencia es la tercera ciudad de España, después de Madrid y Barcelona. Está en el este del país, en la costa del mar Mediterráneo. Tiene unos ochocientos mil habitantes.

En Valencia hace buen tiempo casi todo el año. Los inviernos son suaves y los veranos son largos y calurosos. Hay muchas horas de sol. Por eso, mucha gente va a la playa de la Malvarrosa, muy cerca del centro.

En Valencia hablan dos lenguas: el castellano y el valenciano. El valenciano es una lengua muy parecida al catalán. En la calle, en las tiendas y en los colegios hay carteles en las dos lenguas.

Valencia tiene un centro histórico muy bonito, con calles estrechas, iglesias antiguas y mercados. El Mercado Central es enorme y precioso. Allí hay frutas, verduras, pescado, carne y especias de muchos colores.

Pero Valencia también es moderna. La Ciudad de las Artes y las Ciencias tiene edificios blancos y futuristas, con agua alrededor. Hay un museo de ciencias, un acuario y una ópera.

Una cosa especial de Valencia es el antiguo río Turia. Hoy no tiene agua: es un parque largo, de nueve kilómetros, que cruza la ciudad. Allí la gente pasea, corre, juega al fútbol y va en bicicleta. Valencia es una ciudad muy plana, perfecta para la bici.

La comida típica de Valencia es la paella. La paella valenciana auténtica lleva arroz, pollo, conejo, judías verdes y garrofón, un tipo de alubia blanca y grande. No lleva marisco. Los valencianos comen paella normalmente los domingos, a mediodía, en familia.

Otra bebida típica es la horchata. Es una bebida blanca, dulce y fresca, hecha con chufas. Los valencianos toman horchata con fartons, unos bollos largos y dulces.

En marzo, Valencia celebra las Fallas, su fiesta más importante. Durante varios días, hay figuras enormes de cartón y madera en las calles. Se llaman fallas. Hay música, fuegos artificiales y mucho ruido. La última noche, el diecinueve de marzo, queman las fallas. Es un espectáculo impresionante.

¿Te gusta el sol, la comida y la vida en la calle? Entonces, Valencia es tu ciudad.`,
    q: `¿Dónde está Valencia? | En el norte ; *En la costa mediterránea, en el este ; En el centro de España
¿Qué lenguas hablan en Valencia? | Solo castellano ; *Castellano y valenciano ; Castellano e inglés
¿Qué es hoy el antiguo río Turia? | Un río con mucha agua ; *Un parque largo ; Una autopista
¿Qué NO lleva la paella valenciana auténtica? | Pollo ; Conejo ; *Marisco
¿Qué pasa la última noche de las Fallas? | Comen paella ; *Queman las figuras ; Van a la playa`,
    gl: `tercera = third
costa = coast
habitantes = inhabitants
suaves = mild
calurosos = hot
parecida = similar
carteles = signs
estrechas = narrow
especias = spices
futuristas = futuristic
alrededor = around (it)
cruza = crosses
plana = flat
auténtica = authentic
conejo = rabbit
judías = beans
alubia = bean
marisco = seafood
dulce = sweet
chufas = tiger nuts
cartón = cardboard
madera = wood
fuegos = fireworks (fuegos artificiales)
queman = they burn
espectáculo = show, spectacle`
  });

  S({ id: 'a1-tomatina', level: L, genre: 'Noticia fácil', title: 'La Tomatina: una fiesta de tomates',
    blurb: 'Easy news-style explainer about Buñol\'s famous food fight.',
    x: `Buñol es un pueblo pequeño de la provincia de Valencia. Tiene unos diez mil habitantes. Pero un día al año, Buñol es famoso en todo el mundo. Ese día es la Tomatina.

La Tomatina es una fiesta muy especial: la gente tira tomates. Es una batalla, pero una batalla divertida. Se celebra el último miércoles de agosto.

¿Cómo es el día? Por la mañana, miles de personas llegan al centro del pueblo. Muchas son turistas de otros países. Llevan ropa vieja, gafas para nadar y zapatillas. A las once, empieza la fiesta. Unos camiones grandes entran en la calle principal. Llevan toneladas de tomates maduros. Las personas en los camiones tiran tomates a la gente. Después, todos tiran tomates a todos.

La batalla dura solo una hora. Al final, las calles están rojas. La gente está roja. ¡Todo está rojo! Después, los bomberos limpian las calles con agua. Y los vecinos ayudan a limpiar.

Hay unas normas importantes. Hay que aplastar los tomates antes de tirarlos, para no hacer daño. No se puede romper la ropa de otras personas. Y no se pueden tirar botellas ni otros objetos. Cuando suena la señal final, la batalla termina.

¿Por qué existe esta fiesta? Su origen es de mediados del siglo veinte. Según la historia más conocida, unos jóvenes empiezan una pelea con tomates durante un desfile. Al año siguiente, repiten la pelea. Y así nace una tradición.

Hoy, para participar, es necesario comprar una entrada. Así el ayuntamiento controla el número de personas, porque el pueblo es pequeño.

Muchos vecinos de Buñol están orgullosos de su fiesta. Otros prefieren salir del pueblo ese día. Y algunas personas critican la fiesta, porque usa mucha comida. El ayuntamiento explica que los tomates no son buenos para comer: son tomates especiales para la fiesta.

¿Y tú? ¿Quieres ir a la Tomatina, o prefieres comer los tomates en una ensalada?`,
    q: `¿Cuándo se celebra la Tomatina? | El primer domingo de agosto ; *El último miércoles de agosto ; En marzo
¿Cuánto tiempo dura la batalla? | Todo el día ; *Una hora ; Diez minutos
¿Qué hay que hacer con los tomates antes de tirarlos? | Lavarlos ; *Aplastarlos ; Cortarlos
¿Por qué hay que comprar una entrada? | Para pagar los tomates ; *Para controlar el número de personas ; Para comer después
¿Por qué critican algunas personas la fiesta? | Por el ruido ; *Porque usa mucha comida ; Porque es muy cara`,
    gl: `tira = throws
tiran = throw
batalla = battle
divertida = fun
gafas = goggles, glasses
nadar = to swim
zapatillas = trainers
camiones = lorries
toneladas = tonnes
maduros = ripe
bomberos = firefighters
normas = rules
aplastar = to squash
daño = harm
romper = to tear, break
suena = sounds
señal = signal
mediados = the middle of
pelea = fight
desfile = parade
entrada = ticket
ayuntamiento = town council
orgullosos = proud
critican = criticise`
  });
})();
