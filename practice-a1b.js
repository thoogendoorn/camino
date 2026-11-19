/* Practice items · A1, second set. Every block is tied to the stage that teaches its rule (rule first). */
(function () {
  const P = CAMINO.prac;

  // ---------- transform (50) ----------
  P('A1', 'transform', 'Ser y nacionalidad', 'a1-pais')(`
Femenino | Él es holandés. | Ella es holandesa.
Femenino | Mi amigo es alemán. | Mi amiga es alemana.
Plural | Ella es española. | Ellas son españolas.
Plural | Yo soy belga. | Nosotros somos belgas.|Nosotras somos belgas.|Somos belgas.
Femenino | El profesor es inglés. | La profesora es inglesa.
Plural | Tú eres francés. | Vosotros sois franceses.|Sois franceses.
Negativa | Somos de Portugal. | No somos de Portugal.
Ella | Él es de Marruecos y es marroquí. | Ella es de Marruecos y es marroquí.
`);
  P('A1', 'transform', 'Artículos y posesivos', 'a1-familia')(`
Plural | Mi hermano es alto. | Mis hermanos son altos.
Plural | Tu casa es bonita. | Tus casas son bonitas.
Singular | Nuestras primas son simpáticas. | Nuestra prima es simpática.
Plural | El libro es nuevo. | Los libros son nuevos.
Femenino | Su abuelo es muy mayor. | Su abuela es muy mayor.
Plural | Es un chico guapo. | Son unos chicos guapos.|Son chicos guapos.
Vosotros | Tu madre es profesora. | Vuestra madre es profesora.
Singular | Las mesas son blancas. | La mesa es blanca.
`);
  P('A1', 'transform', 'Presente regular', 'a1-trabajo')(`
Él | Yo trabajo en una tienda. | Él trabaja en una tienda.
Nosotros | Ella estudia inglés. | Nosotros estudiamos inglés.|Estudiamos inglés.
Vosotros | Tú hablas muy bien. | Vosotros habláis muy bien.|Habláis muy bien.
Yo | Ellos escuchan la radio. | Yo escucho la radio.|Escucho la radio.
Ella | Nosotras compramos pan. | Ella compra pan.
Tú | Usted llega tarde. | Tú llegas tarde.|Llegas tarde.
Negativa | Mi hermano cocina los domingos. | Mi hermano no cocina los domingos.
Pregunta (tú) | ¿Dónde trabaja usted? | ¿Dónde trabajas?|¿Dónde trabajas tú?
`);
  P('A1', 'transform', 'Presente regular', 'a1-bar')(`
Ellos | Yo como en casa. | Ellos comen en casa.
Tú | Él bebe agua. | Tú bebes agua.|Bebes agua.
Nosotros | Ella vive en el centro. | Nosotros vivimos en el centro.|Vivimos en el centro.
Yo | Vosotros leéis el periódico. | Yo leo el periódico.|Leo el periódico.
Vosotros | Ellos escriben correos. | Vosotros escribís correos.|Escribís correos.
Usted | ¿Qué quieres tomar? | ¿Qué quiere tomar?|¿Qué quiere tomar usted?
`);
  P('A1', 'transform', 'Verbos reflexivos', 'a1-dia')(`
Yo | Él se levanta a las siete. | Yo me levanto a las siete.|Me levanto a las siete.
Nosotros | Ella se ducha por la mañana. | Nosotros nos duchamos por la mañana.|Nos duchamos por la mañana.
Tú | Yo me acuesto tarde. | Tú te acuestas tarde.|Te acuestas tarde.
Ellos | Tú te vistes rápido. | Ellos se visten rápido.
Vosotros | Nosotros nos llamamos Ana y Luis. | Vosotros os llamáis Ana y Luis.|Os llamáis Ana y Luis.
Ella | Yo me lavo los dientes. | Ella se lava los dientes.
Ella (pregunta) | Tú te despiertas pronto. | ¿Se despierta pronto?|¿Ella se despierta pronto?|¿Se despierta ella pronto?
Negativa | Me afeito todos los días. | No me afeito todos los días.
`);
  P('A1', 'transform', 'Presente irregular', 'a1-libre')(`
Yo | Tú haces deporte. | Yo hago deporte.|Hago deporte.
Yo | Él sale los viernes. | Yo salgo los viernes.|Salgo los viernes.
Nosotros | Yo quiero un café. | Nosotros queremos un café.|Queremos un café.
Él | Yo puedo venir mañana. | Él puede venir mañana.
Ellos | Ella juega al tenis. | Ellos juegan al tenis.
Tú | Yo prefiero la playa. | Tú prefieres la playa.|Prefieres la playa.
Yo | Ella pone la música. | Yo pongo la música.|Pongo la música.
Vosotros | Ellos pueden aparcar aquí. | Vosotros podéis aparcar aquí.|Podéis aparcar aquí.
`);
  P('A1', 'transform', 'Ir a un lugar', 'a1-ciudad')(`
Nosotros | Yo voy al cine. | Nosotros vamos al cine.|Vamos al cine.
Tú | Ella va a la playa. | Tú vas a la playa.|Vas a la playa.
Ellos | Yo voy al mercado. | Ellos van al mercado.
Vosotros | Nosotros vamos al centro. | Vosotros vais al centro.|Vais al centro.
`);

  // ---------- errors (60) ----------
  P('A1', 'errors', 'Ser y nacionalidad', 'a1-pais')(`
Ella es holandés. | Ella es holandesa. | Nationality adjectives agree: holandesa.
Mis padres son italiano. | Mis padres son italianos. | Plural subject, plural adjective.
Yo estoy de Bélgica. | Yo soy de Bélgica. | Origin uses ser de.
Ana es españa. | Ana es española. | España is the country; the adjective is español/española.
Nosotras somos alemanes. | Nosotras somos alemanas. | Nosotras: feminine plural.
¿De dónde están ustedes? | ¿De dónde son ustedes? | Origin: ser de.
Somos de la Holanda. | Somos de Holanda. | No article before most country names.
Él es inglesa. | Él es inglés. | Él: masculine form inglés.
`);
  P('A1', 'errors', 'Género y número', 'a1-familia')(`
Mi hermanas son altas. | Mis hermanas son altas. | Plural noun: mis.
Tu padres son simpáticos. | Tus padres son simpáticos. | Plural noun: tus.
La día es largo. | El día es largo. | Día is masculine.
Tengo un tía en Sevilla. | Tengo una tía en Sevilla. | Tía is feminine: una.
Los problemas son difíciles y la solución es fácil, pero el sistema es complicada. | Los problemas son difíciles y la solución es fácil, pero el sistema es complicado. | Sistema is masculine.
Su casa es muy grandes. | Su casa es muy grande. | One house: singular adjective.
Mis amigos son muy simpáticas. | Mis amigos son muy simpáticos. | Amigos (masculine): simpáticos.
Las chicas son altos. | Las chicas son altas. | Chicas: feminine plural adjective.
El foto es bonita. | La foto es bonita. | Foto (fotografía) is feminine.
Nuestro madre es médica. | Nuestra madre es médica. | Nuestra agrees with madre.
`);
  P('A1', 'errors', 'Presente regular', 'a1-bar')(`
Yo comen a las dos. | Yo como a las dos. | Yo: -o.
Ellos vive en Granada. | Ellos viven en Granada. | Ellos: -en.
¿Tú bebe cerveza? | ¿Tú bebes cerveza? | Tú: -es.
Nosotros escribimos y leen mucho. | Nosotros escribimos y leemos mucho. | Same subject: leemos.
Mi hermana trabajan en un hotel. | Mi hermana trabaja en un hotel. | One person: trabaja.
Vosotros habláis y escuchan. | Vosotros habláis y escucháis. | Vosotros: escucháis.
Ella abro la ventana. | Ella abre la ventana. | Ella: abre.
¿Usted vives aquí? | ¿Usted vive aquí? | Usted takes the third person: vive.
Los niños aprendemos rápido. | Los niños aprenden rápido. | Los niños = ellos: aprenden.
Yo estudiar español todos los días. | Yo estudio español todos los días. | Conjugate the verb: estudio.
`);
  P('A1', 'errors', 'Gustar', 'a1-gustos')(`
Me gusta las películas. | Me gustan las películas. | Plural thing liked: gustan.
A mí me gustan el café. | A mí me gusta el café. | Singular thing liked: gusta.
¿Te gusta los perros? | ¿Te gustan los perros? | Perros is plural: gustan.
Nos gustan cocinar. | Nos gusta cocinar. | An infinitive takes gusta.
A Juan les gusta el fútbol. | A Juan le gusta el fútbol. | One person: le.
A mis padres le gusta viajar. | A mis padres les gusta viajar. | Several people: les.
Me encanto la música. | Me encanta la música. | Encantar works like gustar: encanta.
A ella te gusta leer. | A ella le gusta leer. | A ella → le.
`);
  P('A1', 'errors', 'Hay o está', 'a1-casa')(`
Hay el baño al fondo. | El baño está al fondo. | A specific thing (el): está.
¿Dónde hay la farmacia? | ¿Dónde está la farmacia? | Location of a known place: está.
En mi calle está un bar. | En mi calle hay un bar. | Existence with un: hay.
El libro es encima de la mesa. | El libro está encima de la mesa. | Location: estar.
Las llaves están en la mesa y hay tu móvil. | Las llaves están en la mesa y está tu móvil. | Tu móvil is specific: está.
El sofá está enfrente a la tele. | El sofá está enfrente de la tele. | Enfrente de.
Hay muchas personas en la plaza y hay está la iglesia. | Hay muchas personas en la plaza y ahí está la iglesia. | Ahí (there), not hay.
El gato está debajo en la cama. | El gato está debajo de la cama. | Debajo de.
`);
  P('A1', 'errors', 'Verbos reflexivos', 'a1-dia')(`
Yo se levanto a las siete. | Yo me levanto a las siete. | Yo: me levanto.
Ella me ducha por la noche. | Ella se ducha por la noche. | Ella: se ducha.
Nosotros se acostamos tarde. | Nosotros nos acostamos tarde. | Nosotros: nos.
¿A qué hora te levantas tú y a qué hora se levanta Pedro? Pedro te levanta pronto. | ¿A qué hora te levantas tú y a qué hora se levanta Pedro? Pedro se levanta pronto. | Pedro: se.
Mis hijos se visto solos. | Mis hijos se visten solos. | Ellos: visten.
Me llamo Ana y mi hermano me llama Luis. | Me llamo Ana y mi hermano se llama Luis. | Mi hermano: se llama.
Son las ocho y cuarto y Elena se despierto. | Son las ocho y cuarto y Elena se despierta. | Ella: despierta.
¿Vosotros os acostáis a las once y se levantáis a las siete? | ¿Vosotros os acostáis a las once y os levantáis a las siete? | Vosotros: os.
`);
  P('A1', 'errors', 'Presente irregular', 'a1-libre')(`
Yo hace la comida. | Yo hago la comida. | Hacer: yo hago.
Yo sale con mis amigos. | Yo salgo con mis amigos. | Salir: yo salgo.
Nosotros queremos ir y ellos quieremos también. | Nosotros queremos ir y ellos quieren también. | Ellos: quieren.
¿Puedes tú venir? Sí, podo. | ¿Puedes tú venir? Sí, puedo. | Poder: yo puedo.
Ella juga al baloncesto. | Ella juega al baloncesto. | Jugar: u → ue.
Yo poner la mesa. | Yo pongo la mesa. | Poner: yo pongo.
¿Qué preferes, té o café? | ¿Qué prefieres, té o café? | Preferir: e → ie.
Mi padre toca al fútbol. | Mi padre juega al fútbol. | Sports: jugar.
`);

  // ---------- contrast (28) ----------
  P('A1', 'contrast', 'Ser o estar', 'a1-describir')(`
La sopa [es/está] fría. | está | A temporary state: estar.
Mi hermano [es/está] muy alto. | es | Physical description: ser.
Mi abuela [es/está] enferma hoy. | está | A temporary condition: estar.
La fiesta [es/está] en mi casa. | es | An event takes place: ser.
Madrid [es/está] en el centro de España. | está | Location of a place: estar.
Mis padres [son/están] simpáticos. | son | Personality: ser.
¿Qué hora [es/está]? | es | Time: ser.
El café [es/está] muy bueno hoy. | está | Tastes good (this one): estar.
`);
  P('A1', 'contrast', 'Hay o está', 'a1-casa')(`
[Hay/Está] una farmacia en la esquina. | Hay | Existence (una): hay.
La estación [hay/está] cerca. | está | Location of a specific place: está.
En la nevera [hay/está] leche. | hay | Existence, no article: hay.
¿[Hay/Está] el profesor en clase? | Está | A specific person: está.
No [hay/está] sillas en la terraza. | hay | Existence: hay.
Tu chaqueta [hay/está] en el armario. | está | Specific thing (tu): está.
`);
  P('A1', 'contrast', 'Jugar o tocar', 'a1-libre')(`
Mi hijo [juega/toca] el piano. | toca | Instruments: tocar.
Los sábados [juego/toco] al pádel. | juego | Sports and games: jugar.
¿[Juegas/Tocas] a las cartas? | Juegas | Games: jugar.
Ella [juega/toca] la batería en un grupo. | toca | Instruments: tocar.
Los niños [juegan/tocan] en el parque. | juegan | To play (children): jugar.
¿Quién [juega/toca] mejor al fútbol? | juega | Sports: jugar.
`);
  P('A1', 'contrast', 'A + el = al, de + el = del', 'a1-ciudad')(`
Voy [al/a el] supermercado. | al | a + el = al.
Vengo [del/de el] trabajo. | del | de + el = del.
Vamos [a la/al] playa. | a la | Feminine: a la (no contraction).
La casa [de él/del] es grande. | de él | Él (pronoun) never contracts.
`);
  P('A1', 'contrast', 'Este, ese, aquel', 'a1-compra')(`
¿Cuánto cuesta [este/esta] camiseta? | esta | Camiseta is feminine: esta.
Quiero [esos/esas] tomates de ahí. | esos | Tomates is masculine plural: esos.
[Este/Aquel] edificio de allí, al fondo, es el museo. | Aquel | Far away (allí): aquel.
[Estas/Estos] manzanas de aquí son muy buenas. | Estas | Near you (aquí), feminine plural: estas.
`);

  // ---------- colloc (40) ----------
  P('A1', 'colloc', 'Rutina diaria', 'a1-dia')(`
(yo) ___ los dientes | me lavo | me pongo;me hago | I brush my teeth
(yo) ___ a las siete | me levanto | me lavo;me pongo | I get up at seven
(yo) ___ la ropa | me pongo | me lavo;me hago | I put on my clothes
(ella) ___ el pelo | se peina | se pone;se hace | she combs her hair
(yo) ___ pronto los domingos | me acuesto | me peino;me lavo | I go to bed early on Sundays
___ el desayuno | preparar|hacer|tomar | jugar;tocar | to make breakfast
___ el autobús de las ocho | coger | llevar;subir | to catch the eight o'clock bus
___ a casa a las seis | volver|llegar|ir | estar;salir | to come back home at six
___ de casa a las ocho | salir | ir;estar | to leave home at eight
___ las noticias | ver|escuchar|leer | jugar;tocar | to watch/hear the news
`);
  P('A1', 'colloc', 'En el bar y en la tienda', 'a1-bar')(`
¿Me ___ un café con leche? | pones | haces;das | Can I have a white coffee?
¿Cuánto ___? | es|cuesta | hay;tiene | How much is it?
¿Me ___ la cuenta, por favor? | trae | hace;pone | Can you bring me the bill?
___ con tarjeta | pagar | comprar;dar | to pay by card
¿Qué ___ tomar? | quieres|queréis | eres;estás | What would you like?
¿Nos ___ la carta, por favor? | trae|traes | hace;pone | Can you bring us the menu?
___ una mesa para dos | reservar | coger;poner | to book a table for two
Para ___, una cerveza | beber | comer;cenar | to drink, a beer
De primero ___ una ensalada | quiero | pongo;soy | For starters I'd like a salad
___ una tapa de tortilla | pedir | preguntar;hacer | to order a tapa of tortilla
`);
  P('A1', 'colloc', 'La casa y la ciudad', 'a1-ciudad')(`
___ a la derecha | girar|torcer | ser;tener | to turn right
___ todo recto | seguir|ir | estar;ser | to go straight on
___ la calle | cruzar | llevar;poner | to cross the street
___ en metro | ir | ser;tener | to go by metro
___ un taxi | coger|tomar|pedir | hacer;llevar | to take a taxi
___ el piso | alquilar | vivir;estar | to rent the flat
___ la puerta | abrir | poner;tener | to open the door
___ la ventana | cerrar | tocar;terminar | to close the window
___ en la tercera planta | vivir | ser;tener | to live on the third floor
___ el ascensor | coger|tomar | poner;hacer | to take the lift
`);
  P('A1', 'colloc', 'Tiempo libre', 'a1-libre')(`
___ una novela | leer | ver;jugar | to read a novel
___ música | escuchar|tocar | ver;jugar | to listen to music
___ una serie | ver | mirar a;leer | to watch a series
___ con amigos | quedar|salir | jugar a;tocar | to meet up with friends
___ en bicicleta | montar|ir | jugar;tocar | to ride a bike
___ a la montaña | ir|subir | hacer;jugar | to go to the mountains
___ al ajedrez | jugar | tocar;hacer | to play chess
___ a un concierto | ir | jugar;estar | to go to a concert
___ cien metros | nadar|correr | jugar;tocar | to swim/run a hundred metres
___ fotos | sacar|hacer | tocar;poner | to take photos
`);

  // ---------- wordbuild (40) ----------
  P('A1', 'wordbuild', 'Nacionalidades', 'a1-pais')(`
Francia → él es… | francés | French
Francia → ella es… | francesa | French
Alemania → él es… | alemán | German
Italia → ella es… | italiana | Italian
Inglaterra → ellos son… | ingleses | English
Portugal → ella es… | portuguesa | Portuguese
Bélgica → él es… | belga | Belgian
Suecia → ella es… | sueca | Swedish
Grecia → él es… | griego | Greek
Japón → ella es… | japonesa | Japanese
China → ellos son… | chinos | Chinese
Estados Unidos → ella es… | estadounidense|norteamericana | American
Marruecos → él es… | marroquí | Moroccan
Países Bajos → ellas son… | neerlandesas|holandesas | Dutch
`);
  P('A1', 'wordbuild', 'Plurales', 'a1-familia')(`
el lápiz → plural | los lápices|lápices | pencils
el autobús → plural | los autobuses|autobuses | buses
la ciudad → plural | las ciudades|ciudades | cities
el hotel → plural | los hoteles|hoteles | hotels
el país → plural | los países|países | countries
la nariz → plural | las narices|narices | noses
el examen → plural | los exámenes|exámenes | exams
la canción → plural | las canciones|canciones | songs
el sofá → plural | los sofás|sofás | sofas
el lunes → plural | los lunes|lunes | Mondays
el jardín → plural | los jardines|jardines | gardens
la luz → plural | las luces|luces | lights
`);
  P('A1', 'wordbuild', 'Familias de palabras', 'a1-trabajo')(`
escribir → la persona | el escritor|la escritora|escritor|escritora | writer
enseñar → la persona | el profesor|la profesora|profesor|profesora | teacher
conducir → la persona | el conductor|la conductora|conductor|conductora | driver
nadar → el sustantivo | la natación|natación | swimming
correr → la persona | el corredor|la corredora|corredor|corredora | runner
leer → la persona | el lector|la lectora|lector|lectora | reader
el pan → la tienda | la panadería|panadería | bakery
la fruta → la tienda | la frutería|frutería | fruit shop
el libro → la tienda | la librería|librería | bookshop
la carne → la tienda | la carnicería|carnicería | butcher's
el zapato → la tienda | la zapatería|zapatería | shoe shop
el pescado → la persona que lo vende | el pescadero|la pescadera|pescadero|pescadera | fishmonger
el piano → la persona | el pianista|la pianista|pianista | pianist
el arte → la persona | el artista|la artista|artista | artist
`);
})();
