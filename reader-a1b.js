/* Graded reader · A1, second set: present tense only (plus hay, gustar and ir a + infinitive) */
(function () {
  const S = CAMINO.story, L = 'A1';

  S({ id: 'a1-mercado', level: L, genre: 'Escena', title: '¿Quién es el último?',
    blurb: 'Saturday morning at a market in Madrid, and the most important question.',
    x: `Es sábado por la mañana. Marta y Lotte van al mercado de San Fernando, en Lavapiés. Es un mercado antiguo, con muchos puestos: fruta, verdura, pescado, carne, pan y queso.

Lotte: ¡Cuánta gente!
Marta: Sí, el sábado siempre hay mucha gente. Primero vamos a la frutería.

En la frutería hay seis o siete personas. No hay números y no hay una fila. Lotte no entiende nada.

Lotte: ¿Y ahora? ¿Quién va primero?
Marta: Mira. Es muy fácil. Preguntas: «¿Quién es el último?».
Señor: Yo. Soy el último.
Marta: Gracias. Ahora nosotras vamos después de este señor.

Lotte mira las frutas. Hay naranjas, plátanos de Canarias, manzanas, uvas y unas frutas pequeñas y naranjas que no conoce.

Lotte: ¿Qué son esas?
Marta: Son nísperos. Son muy buenos. Ahora es su temporada.

Por fin les toca a ellas.

Frutera: Hola, chicas. ¿Qué os pongo?
Marta: Un kilo de naranjas para zumo y medio kilo de nísperos, por favor.
Frutera: ¿Algo más?
Lotte: Sí, unos tomates. Para una ensalada.
Frutera: ¿Cuántos?
Lotte: Cuatro, por favor.
Frutera: Muy bien. Son seis euros con cincuenta.

Lotte paga con el móvil. Después van a la panadería y compran una barra de pan. En el puesto de queso, el quesero les da un trozo de queso manchego para probar.

Quesero: ¿Os gusta?
Lotte: ¡Sí, mucho! Un cuarto, por favor.

En la puerta del mercado hay un bar pequeño. Marta y Lotte toman un café y comen un poco de pan con queso.

Lotte: Me gusta mucho este mercado. En Utrecht también hay mercado, los sábados, pero en la calle.
Marta: ¿Y allí preguntáis «quién es el último»?
Lotte: No. En Holanda hacemos fila.
Marta: Aquí no. Pero nadie se cuela. Bueno… casi nadie.`,
    q: `¿Qué día van al mercado? | El domingo ; *El sábado ; El lunes
¿Por qué Lotte no entiende nada en la frutería? | Porque la frutera habla muy rápido ; *Porque no hay números ni fila ; Porque está cerrada
¿Qué pregunta tienes que hacer? | ¿Cuánto cuesta? ; *¿Quién es el último? ; ¿Qué hora es?
¿Qué fruta no conoce Lotte? | Las naranjas ; *Los nísperos ; Las uvas
¿Qué hacen al final? | Vuelven a casa en taxi ; *Toman un café en el bar del mercado ; Compran pescado`,
    gl: `puestos = stalls
frutería = fruit shop
fila = queue, line
último = last
plátanos = bananas
nísperos = loquats
temporada = season
les toca = it's their turn
os pongo = can I get you (lit. do I put you)
zumo = juice
panadería = bakery
barra = baguette (loaf)
quesero = cheese seller
trozo = piece
probar = to try
cuarto = quarter (kilo)
hacemos fila = we queue
se cuela = jumps the queue`
  });

  S({ id: 'a1-abuela', level: L, genre: 'Retrato', title: 'Mi abuela Carmen',
    blurb: 'A girl from Vigo describes her grandmother, who swims in the sea all year.',
    x: `Me llamo Uxía. Es un nombre gallego. Tengo diez años y vivo en Vigo, en Galicia, con mis padres y mi hermano pequeño, Brais. Hoy quiero hablar de mi abuela Carmen.

Mi abuela tiene setenta y ocho años. Es pequeña y delgada, tiene el pelo blanco y corto y los ojos azules. Lleva siempre un jersey de lana y unas gafas rojas. Es muy simpática, pero también un poco seria.

Mi abuela vive sola en un piso cerca del puerto. Desde su balcón ve el mar y los barcos. Ahora está jubilada, pero en el barrio todo el mundo la conoce: es la antigua pescadera del mercado.

Lo más especial de mi abuela es que nada en el mar todos los días. ¡Todos! En verano y en invierno. El agua en Galicia está muy fría, incluso en agosto. Ella se levanta a las siete, se pone el bañador, va a la playa de Samil y nada media hora. Después toma un café con leche con sus amigas, que también nadan.

Uxía: Abuela, ¿no tienes frío?
Abuela: Un poco. Pero después me siento muy bien. El mar es mi medicina.

Los domingos comemos en su casa. Mi abuela cocina muy bien. Su especialidad es el pulpo, pero también hace empanada, un pan grande con atún o con carne. Mi plato favorito es su tarta de Santiago, una tarta de almendras con una cruz de azúcar.

Después de comer, mi abuela y yo jugamos a las cartas. Ella siempre gana. Mi hermano no juega: prefiere dormir en el sofá, como mi padre.

A veces mi abuela habla en gallego y a veces en castellano. En Galicia mucha gente habla las dos lenguas. Yo también: en el colegio estudio en gallego y en castellano.

El próximo verano voy a nadar con ella en el mar. Mi madre dice que estoy loca. Mi abuela dice que no: dice que soy valiente, como ella.`,
    q: `¿Dónde vive Uxía? | En Madrid ; *En Vigo, en Galicia ; En Valencia
¿Cómo es la abuela? | Alta y morena ; *Pequeña, delgada, con el pelo blanco ; Joven y rubia
¿Qué hace la abuela todos los días? | Trabaja en el mercado ; *Nada en el mar ; Cocina pulpo
¿Qué es la tarta de Santiago? | Una tarta de chocolate ; *Una tarta de almendras con una cruz de azúcar ; Un pan con atún
¿Qué lenguas habla la abuela? | Solo gallego ; *Gallego y castellano ; Castellano e inglés`,
    gl: `gallego = Galician
delgada = slim
lana = wool
gafas = glasses
seria = serious
puerto = port
barcos = boats
antigua = former
pescadera = fishmonger (woman)
jubilada = retired (woman)
nada = swims
incluso = even
bañador = swimsuit
medicina = medicine
pulpo = octopus
empanada = savoury pie
atún = tuna
almendras = almonds
cruz = cross
azúcar = sugar
cartas = cards
gana = wins
lenguas = languages
loca = crazy
valiente = brave`
  });

  S({ id: 'a1-samir', level: L, genre: 'Diario', title: 'La semana de Samir',
    blurb: 'A student in Málaga: classes, work, football and his family\'s Sunday couscous.',
    x: `Hola. Me llamo Samir. Tengo veinte años y estudio Informática en la Universidad de Málaga. Mis padres son de Marruecos, pero yo soy de Málaga: vivo aquí desde los dos años. En casa hablamos árabe y español.

Mi semana es muy completa.

Los lunes, miércoles y viernes tengo clase por la mañana, de nueve a dos. Voy a la universidad en autobús. El viaje dura veinticinco minutos y en el autobús escucho música o repaso los apuntes.

Los martes y los jueves trabajo por la tarde en una tienda de móviles en el centro. Vendo teléfonos, arreglo pantallas y ayudo a los clientes. Muchos clientes son turistas, y a veces hablo en inglés. Me gusta el trabajo, pero termino muy cansado.

Los miércoles por la tarde juego al fútbol con mis amigos en un campo del barrio. Somos un equipo de amigos de la universidad: hay chicos de Málaga, de Sevilla, de Colombia y de Rumanía. No somos muy buenos, pero lo pasamos muy bien.

Los viernes por la noche salgo con mis amigos. Normalmente vamos a la playa de la Malagueta o a un bar del centro. En Málaga hace buen tiempo casi todo el año, y por la noche hay mucha gente en la calle.

Los sábados por la mañana estudio en la biblioteca. Por la tarde ayudo a mi hermana pequeña, Nadia, con los deberes de matemáticas. Ella tiene doce años y es muy inteligente, pero no le gustan nada las matemáticas.

El domingo es mi día favorito. Mi madre prepara cuscús para toda la familia: mis padres, mis hermanos, mis tíos y mis primos. Comemos juntos a las dos y media, como todos los españoles, y después tomamos té con hierbabuena en la terraza.

Mi madre siempre dice: «Samir, ¿cuándo vas a descansar?». Y yo siempre contesto: «En agosto, mamá». Pero en agosto voy a trabajar en la tienda todo el mes.`,
    q: `¿Qué estudia Samir? | Medicina ; *Informática ; Matemáticas
¿Dónde trabaja los martes y los jueves? | En un restaurante ; *En una tienda de móviles ; En la biblioteca
¿Quiénes juegan al fútbol con él? | Su familia ; *Amigos de la universidad de varios países ; Los clientes de la tienda
¿Qué hace los sábados por la tarde? | Va a la playa ; *Ayuda a su hermana con los deberes ; Trabaja en la tienda
¿Qué comen los domingos? | Paella ; *Cuscús ; Pescado frito`,
    gl: `Informática = computer science
Marruecos = Morocco
árabe = Arabic
completa = full
dura = lasts
repaso = I go over, revise
apuntes = notes
Vendo = I sell
arreglo = I repair
pantallas = screens
cansado = tired
campo = pitch
equipo = team
lo pasamos muy bien = we have a great time
salgo = I go out
deberes = homework
cuscús = couscous
juntos = together
hierbabuena = mint
descansar = to rest
contesto = I answer`
  });

  S({ id: 'a1-calor', level: L, genre: 'Noticia fácil', title: 'Mucho calor en España',
    blurb: 'Easy news: a heatwave and simple advice to stay well.',
    x: `Esta semana hace mucho calor en España. En muchas ciudades, como Sevilla, Córdoba, Badajoz o Madrid, las temperaturas son muy altas, de más de cuarenta grados por la tarde. Es una ola de calor.

Las olas de calor son normales en verano, pero ahora son más frecuentes que antes. Muchos científicos dicen que es por el cambio climático.

El calor es peligroso, sobre todo para las personas mayores, los niños pequeños y las personas enfermas. Por eso, los médicos y el Gobierno dan unos consejos sencillos:

Hay que beber mucha agua, también cuando no tienes sed.
Es mejor no salir a la calle en las horas de más calor, de las doce de la mañana a las seis de la tarde.
Es bueno llevar ropa ligera y de colores claros, y una gorra o un sombrero.
Es mejor comer fruta y ensaladas, y no comer mucho ni comidas muy pesadas.
Hay que cerrar las ventanas y las persianas durante el día y abrirlas por la noche, cuando hace menos calor.
Es importante llamar o visitar a los vecinos mayores, sobre todo si viven solos.

En las ciudades, mucha gente busca lugares frescos: las piscinas municipales, los parques con árboles, las bibliotecas y los centros comerciales con aire acondicionado. Algunos ayuntamientos abren «refugios climáticos», lugares públicos con aire acondicionado donde la gente puede descansar.

Por la noche, las calles y las terrazas están llenas de gente. Cuando hace tanto calor, muchos españoles salen tarde, a las diez o a las once de la noche, para pasear y tomar algo.

Los meteorólogos dicen que el calor va a continuar hasta el domingo. El lunes van a bajar un poco las temperaturas.`,
    q: `¿Qué es una ola de calor? | Una tormenta ; *Unos días con temperaturas muy altas ; Un tipo de playa
¿Para quién es especialmente peligroso el calor? | Para los deportistas ; *Para las personas mayores, los niños y los enfermos ; Para los turistas
¿Cuándo es mejor no salir a la calle? | Por la noche ; *De las doce a las seis de la tarde ; Por la mañana temprano
¿Qué es un «refugio climático»? | Una playa ; *Un lugar público con aire acondicionado ; Una casa en el campo
¿Qué va a pasar el lunes? | Va a llover mucho ; *Van a bajar un poco las temperaturas ; Va a hacer más calor`,
    gl: `temperaturas = temperatures
grados = degrees
ola de calor = heatwave
frecuentes = frequent
científicos = scientists
cambio climático = climate change
peligroso = dangerous
mayores = elderly
enfermas = ill
Gobierno = government
consejos = advice, tips
sed = thirst
ligera = light
claros = light (colours)
gorra = cap
abrirlas = to open them
pesadas = heavy
persianas = blinds
frescos = cool
aire acondicionado = air conditioning
refugios = shelters
meteorólogos = weather forecasters
bajar = to go down`
  });
})();
