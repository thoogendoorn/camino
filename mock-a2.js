/* DELE-style mock exam · A2 (original material, Castilian Spanish) */
CAMINO.mock({
  id: 'mock-a2-1', level: 'A2', title: 'Simulacro A2 · 1', blurb: 'A blog post, short ads, a weekend programme and an email about a move; four listening tasks; two texts; three speaking tasks',
  papers: {
    reading: {
      minutes: 40, tasks: [
        {
          id: 'r1', title: 'Mi primer mes en Salamanca', instr: 'Lee esta entrada de un blog y responde a las preguntas.',
          text: `Hace un mes que llegué a Salamanca para estudiar español y todavía no me lo creo. El primer día fue un poco difícil: el tren llegó tarde, perdí el autobús y llegué a la residencia a las once de la noche. Pero la directora, Carmen, me esperó con una sopa caliente.

Ahora vivo en un piso con dos estudiantes, una italiana y un alemán. Hablamos en español en casa, aunque a veces, cuando estamos cansados, hablamos en inglés. Por las mañanas tengo clase de nueve a una y por las tardes hago intercambio de idiomas con Álvaro, un chico de aquí que quiere mejorar su inglés.

Lo que más me ha gustado hasta ahora es la Plaza Mayor por la noche, con todas las luces. Lo que menos me gusta son los horarios: aquí se cena a las diez y yo siempre tengo hambre a las siete. El fin de semana pasado fuimos de excursión a Ávila y vimos la muralla. Este sábado queremos ir a Segovia.`,
          q: `¿Qué pasó el primer día? | Llegó en autobús a las siete ; *Llegó a la residencia muy tarde ; La directora no estaba
¿En qué lengua hablan normalmente en el piso? | En inglés ; En italiano ; *En español
¿Qué hace por las tardes? | Va a clase ; *Practica idiomas con un chico español ; Trabaja en la residencia
¿Qué no le gusta mucho? | La Plaza Mayor ; *La hora de la cena ; Sus compañeros de piso
¿Adónde fueron el fin de semana pasado? | A Segovia ; *A Ávila ; A Madrid
¿Qué van a hacer este sábado? | *Ir a Segovia ; Volver a Ávila ; Quedarse en Salamanca`
        },
        {
          id: 'r2', title: 'Anuncios breves', instr: 'Lee los anuncios y responde a una pregunta sobre cada uno.',
          text: `A. Vendo bicicleta de montaña, casi nueva, por cambio de ciudad. 150 €. Solo por las tardes. Tel. 611 402 337.

B. Profesora nativa da clases de francés a domicilio. Todos los niveles. Primera clase, 50 % de descuento.

C. Se ha perdido un gato blanco con una mancha negra en la cabeza, en la zona del parque del Retiro. Responde al nombre de Nube. Se gratifica.

D. Busco compañero para compartir coche de Logroño a Pamplona de lunes a viernes. Salgo a las 7:30. Gastos a medias.

E. Gimnasio Activa: este mes, matrícula gratis y la primera semana sin pagar. Abierto todos los días de 7 a 23.`,
          q: `Anuncio A: ¿Por qué vende la bicicleta? | Porque es vieja ; *Porque se va a otra ciudad ; Porque se ha comprado un coche
Anuncio B: ¿Dónde son las clases? | En una academia ; *En casa del alumno ; En la universidad
Anuncio C: ¿Qué ha pasado? | Alguien ha encontrado un gato ; *Alguien ha perdido un gato ; Regalan un gato
Anuncio D: ¿Qué busca la persona? | Un coche barato ; *Alguien para viajar juntos al trabajo ; Un trabajo en Pamplona
Anuncio E: ¿Qué ofrece el gimnasio este mes? | Clases gratis todo el mes ; *No pagar la inscripción ; Abrir por la noche`
        },
        {
          id: 'r3', title: 'Fin de semana en Cuenca', instr: 'Lee el programa de actividades y responde a las preguntas.',
          text: `VIERNES
18:00 Visita guiada a las Casas Colgadas (1 hora y media). Punto de encuentro: oficina de turismo. 8 €.
21:00 Concierto de música clásica en la catedral. Entrada libre hasta completar aforo.

SÁBADO
10:00 Ruta a pie por la Hoz del Huécar (12 km, nivel medio). Llevar agua y calzado cómodo. Gratis, con inscripción previa.
14:00 Comida típica en el restaurante Mesón del Río: morteruelo y zarajos. 22 €.
19:00 Taller de cerámica para niños y adultos en el Museo de Arte Abstracto. 5 €.

DOMINGO
11:00 Mercado de artesanía en la Plaza Mayor.
12:30 Excursión en bicicleta a la Ciudad Encantada (salida desde la plaza). Alquiler de bicicleta: 15 €.`,
          q: `¿Dónde empieza la visita a las Casas Colgadas? | En la catedral ; *En la oficina de turismo ; En la Plaza Mayor
¿Cuánto cuesta el concierto? | Ocho euros ; *Nada ; Cinco euros
¿Qué hay que hacer antes de la ruta del sábado? | Pagar doce euros ; *Inscribirse ; Alquilar una bicicleta
¿Qué actividad pueden hacer los niños? | La ruta a pie ; *El taller de cerámica ; El concierto
¿Qué pasa el domingo a las doce y media? | Abre el mercado ; *Sale una excursión en bicicleta ; Hay una comida típica`
        },
        {
          id: 'r4', title: 'Nueva casa, nueva vida', instr: 'Lee el correo de Andrés a su tía y responde a las preguntas.',
          text: `Querida tía Pilar:

¡Por fin tenemos casa nueva! Nos mudamos el sábado pasado. Fue un día muy largo: empezamos a las ocho de la mañana y terminamos a medianoche. Mis amigos nos ayudaron con las cajas, pero el sofá no entraba por la puerta y tuvimos que subirlo por la ventana con una cuerda. ¡Qué miedo!

La casa está en un pueblo a veinte kilómetros de Bilbao. Es más grande que el piso de antes y tiene un pequeño jardín, donde Lucas, el niño, juega toda la tarde. Ahora tardo cuarenta minutos en llegar a la oficina, pero voy en tren y aprovecho para leer.

Lo malo es que en el pueblo no hay muchas tiendas y el supermercado cierra a las ocho. Lo bueno es que los vecinos son muy simpáticos: el primer día nos trajeron un bizcocho.

¿Por qué no vienes a vernos en Semana Santa? Hay una habitación para ti.

Un abrazo muy fuerte,
Andrés`,
          q: `¿Cuándo se mudaron? | Ayer ; *El sábado pasado ; En Semana Santa
¿Qué problema hubo con el sofá? | Se rompió ; *No pasaba por la puerta ; No les gustaba
¿Cómo es la casa nueva? | *Más grande que el piso anterior ; Igual que el piso anterior ; En el centro de Bilbao
¿Cómo va Andrés al trabajo ahora? | En coche ; *En tren ; Andando
¿Qué hicieron los vecinos el primer día? | Ayudaron con las cajas ; *Les llevaron un dulce ; Les invitaron a cenar
¿Qué le propone Andrés a su tía? | Ayudar con la mudanza ; *Visitarles ; Comprar la casa`
        }
      ]
    },
    listening: {
      minutes: 25, tasks: [
        {
          id: 'l1', title: 'Seis conversaciones breves', instr: 'Vas a escuchar seis conversaciones breves. Responde a una pregunta sobre cada una.',
          script: `Conversación uno.
Elena: ¿Has visto mis gafas? No las encuentro.
Jorge: Las dejaste en la cocina, al lado de la nevera.
Conversación dos.
Cliente: Quería reservar una mesa para cuatro personas para el sábado.
Camarero: Lo siento, el sábado está completo. ¿Le va bien el domingo a mediodía?
Cliente: Sí, perfecto.
Conversación tres.
Paciente: Me duele mucho la garganta desde ayer.
Farmacéutica: Tome estas pastillas tres veces al día, después de comer.
Conversación cuatro.
Marta: ¿Qué tal el examen de conducir?
Iván: Fatal. He suspendido otra vez. La próxima vez, seguro que apruebo.
Conversación cinco.
Hombre: ¿Cómo vas a ir a Sevilla, en avión o en tren?
Mujer: En tren. Es más caro, pero llego al centro y no tengo que ir al aeropuerto.
Conversación seis.
Recepcionista: Su habitación es la doscientos catorce, en la segunda planta. El desayuno es de siete a diez.`,
          q: `Conversación 1: ¿Dónde están las gafas? | En el salón ; *En la cocina ; En el coche
Conversación 2: ¿Cuándo va a cenar el cliente? | El sábado por la noche ; *El domingo a mediodía ; El viernes
Conversación 3: ¿Qué le pasa al paciente? | Le duele la cabeza ; *Le duele la garganta ; Tiene fiebre
Conversación 4: ¿Cómo le fue el examen a Iván? | *Suspendió ; Aprobó ; No se presentó
Conversación 5: ¿Por qué prefiere el tren? | Porque es más barato ; *Porque llega al centro ; Porque tiene miedo al avión
Conversación 6: ¿En qué planta está la habitación? | En la primera ; *En la segunda ; En la catorce`
        },
        {
          id: 'l2', title: 'Avisos en la radio', instr: 'Vas a escuchar cuatro noticias breves de una radio local. Responde a las preguntas.',
          script: `Locutor: Buenos días. Empezamos con el tiempo: hoy por la mañana tendremos nubes, pero por la tarde va a salir el sol. Las temperaturas, entre doce y veinte grados.
Locutor: Tráfico. Hay un accidente en la carretera de Burgos, a la altura del kilómetro catorce. Les recomendamos usar la autovía.
Locutor: Cultura. Este fin de semana se celebra la feria del libro en el parque. Más de cincuenta autores firmarán sus libros. La feria abre de diez de la mañana a nueve de la noche.
Locutor: Y deportes. El equipo de baloncesto de la ciudad ganó ayer su partido por ochenta y siete a ochenta y dos. El próximo partido es el miércoles en casa.`,
          q: `¿Qué tiempo va a hacer por la tarde? | Va a llover ; *Va a hacer sol ; Va a nevar
¿Qué recomienda la radio a los conductores? | Ir más despacio ; *Ir por la autovía ; No salir de casa
¿Dónde es la feria del libro? | En la biblioteca ; *En el parque ; En la plaza
¿Qué resultado tuvo el equipo de baloncesto? | Perdió ; *Ganó ; Empató
¿Cuándo es el próximo partido? | El sábado ; El domingo ; *El miércoles`
        },
        {
          id: 'l3', title: 'Buscando piso', instr: 'Vas a escuchar una conversación entre una chica y un agente inmobiliario. Responde a las preguntas.',
          script: `Agente: Inmobiliaria Sol, buenas tardes.
Laura: Hola, buenas tardes. Llamo por el piso de la calle Alcalá, el del anuncio.
Agente: Ah, sí. Es un piso de dos habitaciones, en un cuarto sin ascensor. Tiene cocina nueva y un balcón pequeño.
Laura: ¿Sin ascensor? Mmm. ¿Y cuánto es el alquiler?
Agente: Ochocientos cincuenta euros al mes, más la comunidad, que son cuarenta.
Laura: ¿Hay que pagar fianza?
Agente: Sí, dos meses.
Laura: Vale. ¿Puedo verlo esta semana? Trabajo hasta las seis.
Agente: ¿Le va bien el jueves a las siete?
Laura: Sí, perfecto. Me llamo Laura Gómez.
Agente: Muy bien, Laura. El jueves a las siete en el portal.`,
          q: `¿Cuántas habitaciones tiene el piso? | Una ; *Dos ; Cuatro
¿Qué no le gusta mucho a Laura? | El balcón ; *Que no tiene ascensor ; La cocina
¿Cuánto paga en total cada mes? | Ochocientos cincuenta ; *Ochocientos noventa ; Novecientos cuarenta
¿Cuánto es la fianza? | Un mes ; *Dos meses ; Cuarenta euros
¿Cuándo va a ver el piso? | *El jueves a las siete ; El jueves a las seis ; Hoy por la tarde`
        },
        {
          id: 'l4', title: 'Las vacaciones de Ramón', instr: 'Vas a escuchar a Ramón hablando de sus últimas vacaciones. Responde a las preguntas.',
          script: `Ramón: El verano pasado fui con mi mujer a Asturias. Normalmente vamos a la playa en el sur, pero esta vez queríamos hacer algo diferente. Alquilamos una casa rural en un pueblo pequeño, al lado de las montañas. Hicimos rutas a pie casi todos los días y un día subimos a los lagos de Covadonga. Hacía bastante fresco, incluso en agosto, y llovió tres días. Comimos muy bien: fabada, queso de Cabrales y mucha sidra. Lo mejor fue la tranquilidad. Lo peor, que perdimos el móvil de mi mujer en la montaña. El año que viene queremos volver, pero en septiembre, cuando hay menos turistas.`,
          q: `¿Adónde van normalmente de vacaciones? | *A la playa en el sur ; A Asturias ; A la montaña
¿Dónde se alojaron? | En un hotel ; *En una casa rural ; En un camping
¿Qué tiempo hizo? | Mucho calor ; *Fresco y algunos días de lluvia ; Nevó
¿Qué fue lo peor del viaje? | La comida ; La lluvia ; *Perder un móvil
¿Cuándo quieren volver? | En agosto ; *En septiembre ; En Navidad`
        }
      ]
    },
    writing: {
      minutes: 40, tasks: [
        {
          id: 'w1', title: 'Respuesta a una invitación', words: [60, 80],
          instr: `Has recibido este mensaje de tu amiga Clara: «¡Hola! El sábado 14 hago una fiesta en mi casa para celebrar mi nuevo trabajo. ¿Vienes? Empieza a las nueve.»
Escríbele un correo:
- dale las gracias y felicítala por el trabajo;
- dile que no puedes ir y explica por qué;
- propón quedar otro día;
- pregúntale por su nuevo trabajo.`,
          checklist: ['Thanks and congratulations', 'You can\'t come, with a reason', 'Suggest another day', 'A question about her new job'],
          model: `¡Hola, Clara!
Muchas gracias por la invitación y ¡enhorabuena por el nuevo trabajo! Me alegro muchísimo por ti. Lo siento mucho, pero el sábado 14 no puedo ir: es la boda de mi primo en Valencia y voy a estar allí todo el fin de semana. ¿Por qué no quedamos el miércoles siguiente para tomar algo y celebrarlo? Cuéntame, ¿qué vas a hacer en la empresa? ¿Cuándo empiezas?
Un beso,
Marta`
        },
        {
          id: 'w2', title: 'Un recuerdo de la infancia', words: [70, 90],
          instr: `Escribe un texto para una revista sobre las vacaciones de verano cuando eras pequeño o pequeña. Cuenta:
- adónde ibas y con quién;
- cómo era el lugar;
- qué hacías normalmente;
- algo especial que pasó un verano.`,
          checklist: ['Where and who with (imperfect)', 'What the place was like', 'What you usually did (imperfect)', 'One special event (preterite)'],
          model: `Cuando era pequeño, todos los veranos iba con mis padres y mis hermanos a casa de mis abuelos, en un pueblo de Galicia. Era un pueblo pequeño, verde y tranquilo, cerca del mar. Por las mañanas íbamos a la playa y por las tardes jugábamos en el campo con otros niños. Mi abuela hacía unas tartas buenísimas. Un verano, cuando tenía nueve años, mi hermano y yo encontramos un perro perdido en la playa. Al final, mis abuelos se lo quedaron y lo llamamos Verano.`
        }
      ]
    },
    speaking: {
      minutes: 12, tasks: [
        {
          id: 's1', title: 'Monólogo: tu fin de semana ideal', prep: 2, talk: 2,
          instr: 'Habla durante dos minutos sobre tu fin de semana ideal y sobre lo que hiciste el fin de semana pasado.',
          points: ['Qué te gusta hacer los fines de semana', 'Con quién', 'Qué hiciste el último fin de semana', 'Qué vas a hacer el próximo'],
          checklist: ['Likes (present)', 'Who with', 'Last weekend (past)', 'Next weekend (ir a + infinitive)'],
          model: `Mi fin de semana ideal es tranquilo. Me gusta dormir hasta tarde, desayunar en una cafetería y pasear por la ciudad. Normalmente quedo con mis amigos el sábado por la noche para cenar. El fin de semana pasado fue diferente: fui a la montaña con mi hermana. Hicimos una ruta de quince kilómetros y comimos en un restaurante del pueblo. Estaba muy cansada, pero me gustó mucho. El próximo fin de semana voy a quedarme en casa porque tengo que estudiar para un examen.`
        },
        {
          id: 's2', title: 'Describe una situación', prep: 2, talk: 2,
          instr: 'Imagina esta escena y descríbela: es domingo por la mañana en un mercado al aire libre en una ciudad española. Hay mucha gente.',
          points: ['¿Qué personas hay y qué hacen?', '¿Qué venden en los puestos?', '¿Qué tiempo hace?', '¿Te gustan los mercados? ¿Por qué?'],
          checklist: ['People and actions (estar + gerund)', 'What is sold', 'Weather', 'Your opinion with a reason'],
          model: `Es domingo por la mañana y hace sol. En el mercado hay mucha gente: una pareja mayor está comprando fruta, unos niños están comiendo churros y un chico joven está tocando la guitarra. En los puestos venden verduras, queso, ropa de segunda mano y libros viejos. Una vendedora está hablando con una clienta sobre el precio de unos tomates. A mí me encantan los mercados porque los productos son frescos y el ambiente es muy agradable.`
        },
        {
          id: 's3', title: 'Conversación en la farmacia', prep: 1, talk: 2,
          instr: 'No te encuentras bien y vas a una farmacia. Imagina la conversación con el farmacéutico y di las dos partes.',
          points: ['Explica qué te pasa y desde cuándo', 'Responde a sus preguntas', 'Pregunta cómo tomar el medicamento', 'Pregunta el precio y despídete'],
          checklist: ['Symptoms and since when', 'Answers to questions', 'How to take the medicine', 'Price and goodbye'],
          model: `—Buenos días. ¿Qué le pasa?
—Me duele mucho la cabeza y tengo un poco de fiebre desde ayer.
—¿Tiene tos?
—No, solo me duele la cabeza y estoy muy cansado.
—Tome este paracetamol, una pastilla cada ocho horas. Si mañana no está mejor, vaya al médico.
—¿Lo tomo antes o después de comer?
—Mejor después de comer.
—Muy bien. ¿Cuánto es?
—Tres euros con cincuenta.
—Aquí tiene. Muchas gracias, adiós.`
        }
      ]
    }
  }
});
