/* Practice items · A2 */
(function () {
  const P = CAMINO.prac;

  P('A2', 'transform', 'Pretérito perfecto')(`
Hoy… | Ayer comí paella. | Hoy he comido paella.
Esta semana… | La semana pasada fui al cine. | Esta semana he ido al cine.
Hoy… | Ayer vimos una película. | Hoy hemos visto una película.
Este año… | El año pasado viajé a México. | Este año he viajado a México.
Hoy… | Ayer no hice los deberes. | Hoy no he hecho los deberes.
Esta mañana… | Ayer por la mañana escribí tres correos. | Esta mañana he escrito tres correos.
Ya… | Todavía no he terminado el libro. | Ya he terminado el libro.
Todavía no… | Ya hemos comprado los billetes. | Todavía no hemos comprado los billetes.
Nunca… | He estado en Sevilla muchas veces. | Nunca he estado en Sevilla.
Pregunta (vosotros) | Habéis abierto la tienda. | ¿Habéis abierto la tienda?
`);
  P('A2', 'transform', 'Pretérito indefinido')(`
Ayer… | Hoy he trabajado mucho. | Ayer trabajé mucho.
El sábado pasado… | Este sábado hemos ido a la playa. | El sábado pasado fuimos a la playa.
En 2019… | Este año ella ha tenido un hijo. | En 2019 ella tuvo un hijo.
Anoche… | Esta noche no he dormido bien. | Anoche no dormí bien.
Ayer… | Hoy han venido mis padres. | Ayer vinieron mis padres.
Ayer… | Hoy he hecho una tarta. | Ayer hice una tarta.
El lunes… | Hoy mi hermano ha estado enfermo. | El lunes mi hermano estuvo enfermo.
Ayer… | Hoy ¿qué has dicho? | Ayer ¿qué dijiste?
Ayer… | Hoy hemos podido salir pronto. | Ayer pudimos salir pronto.
Hace dos años… | Este año he puesto un negocio. | Hace dos años puse un negocio.
Ayer… | Hoy Ana se ha levantado tarde. | Ayer Ana se levantó tarde.
Ayer… | Hoy los niños han leído un cuento. | Ayer los niños leyeron un cuento.
`);
  P('A2', 'transform', 'Pretérito imperfecto')(`
Cuando era pequeño… | Ahora vivo en Madrid. | Cuando era pequeño vivía en Madrid.
Antes… | Ahora no como carne. | Antes comía carne.
De niña… | Ahora no veo la tele. | De niña veía la tele.
Antes… | Ahora vamos al trabajo en coche. | Antes íbamos al trabajo en coche.
Antes… | Ahora soy muy tranquilo. | Antes era muy tranquilo.
En los años 80… (no) | Ahora la gente tiene móvil. | En los años 80 la gente no tenía móvil.
`);
  P('A2', 'transform', 'Pronombres de objeto directo')(`
Usa un pronombre | Compro el pan. | Lo compro.
Usa un pronombre | Llamo a mi madre. | La llamo.
Usa un pronombre | Vemos las películas en versión original. | Las vemos en versión original.
Usa un pronombre | No conozco a tus amigos. | No los conozco.
Usa un pronombre | Voy a comprar las entradas. | Voy a comprarlas.|Las voy a comprar.
Usa un pronombre | Estoy leyendo el periódico. | Estoy leyéndolo.|Lo estoy leyendo.
Usa un pronombre | ¿Tienes las llaves? | ¿Las tienes?
Usa un pronombre | He visto a Marta. | La he visto.
`);
  P('A2', 'transform', 'Ir a + infinitivo')(`
Mañana… (ir a) | Hoy estudio. | Mañana voy a estudiar.
El fin de semana… (ir a) | Hoy no salgo. | El fin de semana no voy a salir.
El año que viene… (ir a) | Este año vivimos en Lisboa. | El año que viene vamos a vivir en Lisboa.
Esta noche… (ir a) | Ahora ceno en casa. | Esta noche voy a cenar en casa.
`);
  P('A2', 'errors', 'Pretérito perfecto o indefinido')(`
Ayer he ido al médico. | Ayer fui al médico. | Ayer is a finished time: indefinido.
Esta mañana desayuné con mi hermana y ahora estoy en clase. | Esta mañana he desayunado con mi hermana y ahora estoy en clase. | In Spain, today's events usually take the pretérito perfecto.
En 2015 he vivido en Berlín. | En 2015 viví en Berlín. | A specific past year: indefinido.
¿Alguna vez estuviste en Cuba? | ¿Alguna vez has estado en Cuba? | Experiences up to now: pretérito perfecto.
Hace tres años he empezado a estudiar. | Hace tres años empecé a estudiar. | Hace + time: indefinido.
Ellos han llegado anoche. | Ellos llegaron anoche. | Anoche is finished: indefinido.
`);
  P('A2', 'errors', 'Pretérito indefinido')(`
Ayer yo hací la cena. | Ayer yo hice la cena. | Hacer is irregular: hice.
Ella estó en casa todo el día. | Ella estuvo en casa todo el día. | Estar: estuve, estuvo.
Nosotros fuemos al concierto. | Nosotros fuimos al concierto. | Ir/ser: fuimos.
¿Qué dijistes? | ¿Qué dijiste? | The tú form never ends in -s in the indefinido.
Ellos tenieron un accidente. | Ellos tuvieron un accidente. | Tener: tuvieron.
Yo empezé a trabajar en marzo. | Yo empecé a trabajar en marzo. | z becomes c before e.
Yo llegé tarde. | Yo llegué tarde. | g becomes gu before e.
Él durmió poco y yo dormí menos. Los niños dormieron mucho. | Él durmió poco y yo dormí menos. Los niños durmieron mucho. | Dormir: durmieron.
Ayer ella pidió una pizza y yo pedí una ensalada; ellos pedieron pasta. | Ayer ella pidió una pizza y yo pedí una ensalada; ellos pidieron pasta. | Pedir: pidieron.
`);
  P('A2', 'errors', 'Pretérito imperfecto')(`
Cuando era niño, iba a la playa y jugé con mi hermano. | Cuando era niño, iba a la playa y jugaba con mi hermano. | Habits in the past: imperfecto.
Antes nosotros íbamos al cine y vimos dos películas cada semana. | Antes nosotros íbamos al cine y veíamos dos películas cada semana. | Repeated past action: imperfecto.
Mi abuela fue muy simpática y siempre nos contaba historias. | Mi abuela era muy simpática y siempre nos contaba historias. | Description in the past: imperfecto.
Cuando tuve diez años, vivía en Sevilla. | Cuando tenía diez años, vivía en Sevilla. | Age in the past: imperfecto.
`);
  P('A2', 'errors', 'Pronombres')(`
A mí me gusta, y a él gusta también. | A mí me gusta, y a él le gusta también. | Gustar always needs le with él.
El libro lo tengo y la leo cada noche. | El libro lo tengo y lo leo cada noche. | Libro is masculine: lo.
¿Las flores? Ya los he comprado. | ¿Las flores? Ya las he comprado. | Flores is feminine plural: las.
Este regalo es para tú. | Este regalo es para ti. | After para: ti.
¿Vienes con mí? | ¿Vienes conmigo? | Con + mí = conmigo.
`);
  P('A2', 'errors', 'Comparativos')(`
Madrid es más grande que Toledo, pero Toledo es más bonito que Madrid y más antiguo de Madrid. | Madrid es más grande que Toledo, pero Toledo es más bonito que Madrid y más antiguo que Madrid. | Comparisons use más… que.
Mi hermano es más bueno que yo jugando al tenis. | Mi hermano es mejor que yo jugando al tenis. | Más bueno → mejor.
Esta película es tan aburrida que la otra. | Esta película es tan aburrida como la otra. | Tan… como.
Tengo tanto amigos como tú. | Tengo tantos amigos como tú. | Tanto agrees with the noun.
Es el restaurante más caro de la ciudad y más malo. | Es el restaurante más caro de la ciudad y el peor. | Más malo → peor.
`);
  P('A2', 'contrast', 'Pretérito perfecto o indefinido')(`
Esta mañana [he desayunado/desayuné] muy poco. | he desayunado | Today, in Spain: pretérito perfecto.
El verano pasado [hemos estado/estuvimos] en Grecia. | estuvimos | Finished period: indefinido.
¿[Has visto/Viste] alguna vez una corrida? | Has visto | Life experience up to now: perfecto.
En 1992 [se han celebrado/se celebraron] los Juegos Olímpicos en Barcelona. | se celebraron | A specific year: indefinido.
Todavía no [he terminado/terminé] el informe. | he terminado | Todavía no links to now: perfecto.
Anoche [hemos cenado/cenamos] en un restaurante chino. | cenamos | Anoche is finished: indefinido.
`);
  P('A2', 'contrast', 'Indefinido o imperfecto')(`
Cuando [era/fue] pequeña, vivía en un pueblo. | era | Background, age, description: imperfecto.
Ayer [llovía/llovió] todo el día. | llovió | A closed period (todo el día): indefinido.
[Eran/Fueron] las ocho cuando llegué. | Eran | Time as background: imperfecto.
De niño [jugaba/jugué] al fútbol todos los días. | jugaba | Habit: imperfecto.
Un día [conocía/conocí] a mi mejor amigo en el parque. | conocí | A single event: indefinido.
Mientras [cocinaba/cociné], sonó el teléfono. | cocinaba | Action in progress interrupted: imperfecto.
`);
  P('A2', 'contrast', 'Por o para')(`
Este regalo es [por/para] ti. | para | Recipient: para.
Gracias [por/para] la ayuda. | por | Gracias por.
Estudio español [por/para] vivir en España. | para | Purpose: para.
Paseamos [por/para] el parque. | por | Movement through: por.
Te llamo [por/para] la tarde. | por | Part of the day: por la tarde.
Tengo que terminarlo [por/para] el lunes. | para | Deadline: para.
`);
  P('A2', 'contrast', 'Saber o conocer')(`
¿[Sabes/Conoces] a mi hermana? | Conoces | People: conocer.
No [sé/conozco] nadar. | sé | Ability: saber + infinitive.
¿[Sabes/Conoces] dónde está la estación? | Sabes | Information: saber.
[Sé/Conozco] muy bien Barcelona. | Conozco | Places: conocer.
No [sé/conozco] su número de teléfono. | sé | Facts and data: saber.
`);
  P('A2', 'contrast', 'Pedir o preguntar')(`
Voy a [pedir/preguntar] un café. | pedir | To order or request something: pedir.
Le voy a [pedir/preguntar] la hora. | preguntar | To ask for information: preguntar.
Mi hijo siempre me [pide/pregunta] dinero. | pide | Asking for a thing: pedir.
¿Puedo [pedirte/preguntarte] una cosa? ¿Dónde vives? | preguntarte | A question follows: preguntar.
`);
  P('A2', 'colloc', 'Verbos y sustantivos frecuentes')(`
___ una cita con el médico | pedir | hacer;dar | to make a doctor's appointment
___ la maleta | hacer | poner;tener | to pack
___ un examen | hacer | tomar;dar | to take an exam
___ un examen (con buena nota) | aprobar | pasar;ganar | to pass an exam
___ un examen (mal) | suspender | perder;caer | to fail an exam
___ una fiesta | dar|hacer | tener;poner | to throw a party
___ la siesta | echar|dormir | hacer;tener | to take a nap
___ el autobús | coger|tomar | subir;llevar | to catch the bus
___ el tren (llegar tarde) | perder | faltar;dejar | to miss the train
___ una película | ver | mirar;asistir | to watch a film
___ la televisión | ver | mirar;oír | to watch TV
___ dinero (ahorrar o gastar) | gastar | pasar;usar | to spend money
___ el tiempo (entretenido) | pasar | gastar;hacer | to spend time
___ una vuelta | dar | hacer;tener | to go for a stroll
___ un café | tomar | beber;hacer | to have a coffee
___ las vacaciones | pasar | hacer;estar | to spend the holidays
___ la luz | encender | abrir;poner | to turn on the light
___ la tele (no ver más) | apagar | cerrar;quitar | to turn off the TV
___ ejercicio | hacer | tener;jugar | to exercise
___ un mensaje | mandar|enviar | dar;hacer | to send a message
`);
  P('A2', 'wordbuild', 'Familias de palabras')(`
nacer → el sustantivo | el nacimiento|nacimiento | birth
morir → el sustantivo | la muerte|muerte | death
casarse → la celebración | la boda|boda | wedding
vender → el sustantivo | la venta|venta | sale
comprar → el sustantivo | la compra|compra | purchase, shopping
enfermo → la enfermedad | la enfermedad|enfermedad | illness
feliz → el sustantivo | la felicidad|felicidad | happiness
triste → el sustantivo | la tristeza|tristeza | sadness
limpio → el verbo | limpiar | to clean
sucio → el verbo | ensuciar | to make dirty
caliente → el verbo | calentar | to heat
frío → el verbo | enfriar | to cool
lento → el adverbio | lentamente|despacio | slowly
fácil → el adverbio | fácilmente | easily
rápido → el adverbio | rápidamente|rápido | quickly
cansar → el adjetivo | cansado|cansada | tired
aburrir → el adjetivo (persona aburrida) | aburrido|aburrida | bored, boring
preocupar → el sustantivo | la preocupación|preocupación | worry
explicar → el sustantivo | la explicación|explicación | explanation
recordar → el sustantivo | el recuerdo|recuerdo | memory, souvenir
amable → lo contrario | antipático|maleducado | unkind
útil → lo contrario | inútil | useless
posible → lo contrario | imposible | impossible
ordenado → lo contrario | desordenado | messy
`);
})();
