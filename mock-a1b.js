/* DELE-style mock exam · A1 · second set (original material, Castilian Spanish) */
CAMINO.mock({
  id: 'mock-a1-2', level: 'A1', title: 'Simulacro A1 · 2', blurb: 'A note from a flatmate, shop signs, class timetables and a postcard; four listening tasks; a message and a description; three speaking tasks',
  papers: {
    reading: {
      minutes: 30, tasks: [
        {
          id: 'r1', title: 'Una nota en la nevera', instr: 'Lee la nota y responde a las preguntas.',
          text: `Hola, Tom:

Hoy vuelvo tarde porque tengo clase de baile hasta las nueve. En la nevera hay tortilla y ensalada para cenar. Por favor, compra pan y leche, que no hay. El dinero está en la mesa de la cocina.

Mañana viene mi madre a comer. Llega a las dos. ¿Puedes limpiar el baño por la mañana? Yo limpio la cocina.

¡Gracias!
Paula`,
          q: `¿Por qué vuelve tarde Paula? | Porque trabaja ; *Porque tiene clase de baile ; Porque va al médico
¿Qué hay para cenar? | *Tortilla y ensalada ; Pan y leche ; Pescado
¿Qué tiene que comprar Tom? | Tortilla ; *Pan y leche ; Ensalada
¿Quién viene mañana? | El padre de Paula ; *La madre de Paula ; Un amigo de Tom
¿Qué tiene que limpiar Tom? | La cocina ; *El baño ; La nevera`
        },
        {
          id: 'r2', title: 'En el centro comercial', instr: 'Lee los carteles y responde a una pregunta sobre cada uno.',
          text: `A. ZAPATERÍA PASO. Rebajas: todos los zapatos al 30 %. Del 7 de enero al 28 de febrero.

B. CAFETERÍA. Desayuno: café + tostada, 2,50 €. De 8:00 a 12:00.

C. ASCENSOR AVERIADO. Por favor, usen la escalera mecánica.

D. ÓPTICA VISTA. Revisión de la vista gratis. Pida cita en la tienda.

E. APARCAMIENTO. Las dos primeras horas son gratis con tu compra.`,
          q: `Cartel A: ¿Cuándo terminan las rebajas? | El 7 de enero ; *El 28 de febrero ; En marzo
Cartel B: ¿Hasta qué hora hay desayuno? | Hasta las ocho ; *Hasta las doce ; Todo el día
Cartel C: ¿Qué problema hay? | La escalera no funciona ; *El ascensor no funciona ; La tienda está cerrada
Cartel D: ¿Qué es gratis en la óptica? | Las gafas ; *Revisar la vista ; Las lentillas
Cartel E: ¿Cuándo no pagas el aparcamiento? | *Las dos primeras horas si compras algo ; Todo el día ; Los domingos`
        },
        {
          id: 'r3', title: 'Clases en el centro cívico', instr: 'Lee el horario de clases. Después lee lo que quiere cada persona y elige la clase adecuada.',
          text: `CLASE A. Natación para adultos. Lunes y miércoles, 7:30–8:30. Piscina municipal.

CLASE B. Pintura. Sábados, 11:00–13:00. Para todas las edades.

CLASE C. Inglés para viajar. Martes y jueves, 19:00–20:30.

CLASE D. Cocina vegetariana. Viernes, 18:00–20:00. Hay que traer delantal.

CLASE E. Yoga para mayores de 60 años. Lunes, miércoles y viernes, 10:00–11:00.`,
          q: `Rosa tiene 68 años y quiere hacer ejercicio por la mañana. | Clase A ; *Clase E ; Clase B
Marcos trabaja de 9 a 18 y quiere hacer deporte antes del trabajo. | *Clase A ; Clase D ; Clase E
Lucía no come carne y quiere aprender recetas nuevas. | Clase B ; Clase C ; *Clase D
Andrés y su hijo de diez años quieren hacer algo juntos el fin de semana. | *Clase B ; Clase A ; Clase C
Elena va a ir a Londres en verano. | Clase B ; *Clase C ; Clase E`
        },
        {
          id: 'r4', title: 'Una postal desde Sevilla', instr: 'Lee la postal y responde a las preguntas.',
          text: `¡Hola, abuela!

Estoy en Sevilla con mis amigos de la universidad. La ciudad es preciosa y hace mucho calor: ¡treinta y ocho grados! Estamos en un hotel pequeño en el barrio de Santa Cruz, cerca de la catedral.

Por las mañanas visitamos monumentos. Hoy hemos visto el Alcázar. Por las tardes dormimos la siesta, como los sevillanos, y por la noche salimos a cenar tapas. Mi tapa favorita es el salmorejo.

El domingo volvemos a Bilbao en avión. Te llamo el lunes.

Un beso muy grande,
Íker`,
          q: `¿Con quién está Íker en Sevilla? | Con su familia ; *Con amigos de la universidad ; Solo
¿Qué tiempo hace? | Llueve ; *Hace mucho calor ; Hace frío
¿Dónde está el hotel? | *Cerca de la catedral ; En el centro comercial ; Al lado del río
¿Qué hacen por las tardes? | Visitan monumentos ; *Duermen la siesta ; Cenan tapas
¿Cómo vuelve a Bilbao? | En tren ; En autobús ; *En avión`
        }
      ]
    },
    listening: {
      minutes: 15, tasks: [
        {
          id: 'l1', title: 'Cinco diálogos', instr: 'Vas a escuchar cinco diálogos breves. Responde a una pregunta sobre cada uno.',
          script: `Diálogo uno.
Hombre: ¿Qué hora es?
Mujer: Son las cinco y media.
Diálogo dos.
Mujer: ¿Dónde está el baño, por favor?
Camarero: Al fondo, a la derecha.
Diálogo tres.
Chico: ¿Cuántos hermanos tienes?
Chica: Tengo dos hermanas y un hermano.
Diálogo cuatro.
Cliente: Un kilo de manzanas y medio kilo de fresas, por favor.
Frutero: Muy bien. Son cuatro euros.
Diálogo cinco.
Mujer: ¿Vienes a la playa mañana?
Hombre: No puedo, tengo que trabajar.`,
          q: `Diálogo 1: ¿Qué hora es? | Las cinco ; *Las cinco y media ; Las seis y media
Diálogo 2: ¿Dónde está el baño? | A la izquierda ; *Al fondo a la derecha ; Arriba
Diálogo 3: ¿Cuántos hermanos tiene la chica? | Dos ; *Tres ; Uno
Diálogo 4: ¿Cuánto paga el cliente? | *Cuatro euros ; Un euro ; Cinco euros
Diálogo 5: ¿Por qué no va a la playa? | Porque llueve ; *Porque trabaja ; Porque está enfermo`
        },
        {
          id: 'l2', title: 'Mensajes en el contestador', instr: 'Vas a escuchar cinco mensajes. Responde a una pregunta sobre cada uno.',
          script: `Mensaje uno.
Ana: Hola, Luis, soy Ana. ¿Quedamos a las ocho en la puerta del cine?
Mensaje dos.
Dentista: Le llamamos de la clínica Sonrisa. Su cita es el jueves a las diez.
Mensaje tres.
Pedro: Mamá, estoy en casa de Javi. Ceno aquí, vuelvo a las once.
Mensaje cuatro.
Tienda: Su pedido ya está en la tienda. Puede recogerlo de lunes a sábado.
Mensaje cinco.
Marta: Hola, soy Marta. Mi nuevo número de teléfono es el seis, uno, cinco, cuarenta y dos, treinta, diecinueve.`,
          q: `Mensaje 1: ¿Dónde quedan? | En casa de Ana ; *En la puerta del cine ; En un bar
Mensaje 2: ¿Cuándo es la cita? | *El jueves a las diez ; El martes a las diez ; El jueves a las dos
Mensaje 3: ¿Dónde cena Pedro? | En su casa ; *En casa de Javi ; En un restaurante
Mensaje 4: ¿Qué puede hacer el cliente? | *Recoger su pedido ; Pagar por teléfono ; Cambiar el pedido
Mensaje 5: ¿Qué cambia Marta? | Su dirección ; *Su número de teléfono ; Su correo`
        },
        {
          id: 'l3', title: 'En el restaurante', instr: 'Vas a escuchar una conversación en un restaurante. Responde a las preguntas.',
          script: `Camarero: Buenas noches. ¿Cuántos son?
Cliente: Somos dos.
Camarero: Muy bien, siéntense aquí, al lado de la ventana. ¿Qué quieren beber?
Cliente: Una botella de agua y dos copas de vino tinto.
Camarero: ¿Y de primero?
Clienta: Para mí, sopa de pescado.
Cliente: Yo, ensalada mixta.
Camarero: ¿Y de segundo?
Clienta: Pollo asado con patatas.
Cliente: Yo quiero el filete, pero sin patatas, con verduras.
Camarero: Perfecto. ¿Postre?
Clienta: Después pedimos el postre, gracias.`,
          q: `¿Cuántas personas son? | Una ; *Dos ; Tres
¿Dónde se sientan? | En la terraza ; *Al lado de la ventana ; En la barra
¿Qué pide la clienta de primero? | Ensalada mixta ; *Sopa de pescado ; Verduras
¿Con qué quiere el filete el cliente? | Con patatas ; *Con verduras ; Con ensalada
¿Qué pasa con el postre? | Piden fruta ; *Lo piden después ; No quieren postre`
        },
        {
          id: 'l4', title: 'Mi ciudad', instr: 'Vas a escuchar a un chico hablando de su ciudad. Responde a las preguntas.',
          script: `Álvaro: Me llamo Álvaro y vivo en Santander, en el norte de España. Es una ciudad pequeña, de unos ciento setenta mil habitantes, al lado del mar. Me gusta mucho porque tiene playas muy bonitas y la gente es simpática. En invierno llueve bastante, pero en verano el tiempo es muy agradable. Yo vivo en el centro, cerca del ayuntamiento, y trabajo en un hotel. Los fines de semana hago surf con mis amigos. Lo único malo es que no hay tren rápido a Madrid.`,
          q: `¿Dónde está Santander? | En el sur ; *En el norte ; En el centro
¿Cómo es la ciudad? | Grande ; *Pequeña ; Muy antigua
¿Qué tiempo hace en invierno? | Hace mucho calor ; *Llueve bastante ; Nieva mucho
¿Dónde trabaja Álvaro? | En el ayuntamiento ; *En un hotel ; En una escuela de surf
¿Qué es lo malo de la ciudad? | La gente ; Las playas ; *No hay tren rápido a Madrid`
        }
      ]
    },
    writing: {
      minutes: 25, tasks: [
        {
          id: 'w1', title: 'Un mensaje a tu profesora', words: [30, 50],
          instr: `Mañana no puedes ir a la clase de español. Escribe un mensaje a tu profesora, Carmen:
- saluda;
- explica por qué no puedes ir;
- pregunta qué tienes que estudiar;
- despídete.`,
          checklist: ['Greeting', 'Reason you can\'t come', 'Question about homework', 'Goodbye'],
          model: `Hola, Carmen:
Mañana no puedo ir a clase porque tengo una cita con el médico a las seis. ¿Qué tengo que estudiar para el jueves? ¿Hay deberes?
Muchas gracias y hasta el jueves.
Un saludo,
Mark`
        },
        {
          id: 'w2', title: 'Tu mejor amigo', words: [50, 70],
          instr: `Escribe un texto para una página web de intercambio de idiomas sobre tu mejor amigo o amiga:
- cómo se llama, cuántos años tiene y de dónde es;
- cómo es físicamente y de carácter;
- qué hacéis juntos;
- por qué es tu mejor amigo o amiga.`,
          checklist: ['Name, age, where from', 'Physical description and personality (ser, tener)', 'What you do together', 'Why they are your best friend'],
          model: `Mi mejor amiga se llama Eva. Tiene veintiocho años y es de Utrecht, como yo. Es alta y delgada, tiene el pelo rubio y los ojos verdes. Es muy simpática, divertida y un poco despistada. Los fines de semana vamos en bicicleta, tomamos café o vamos al cine. Es mi mejor amiga porque siempre me escucha y me ayuda cuando tengo problemas.`
        }
      ]
    },
    speaking: {
      minutes: 10, tasks: [
        {
          id: 's1', title: 'Mi familia', prep: 1, talk: 1.5,
          instr: 'Habla de tu familia durante un minuto y medio.',
          points: ['¿Cuántas personas sois?', '¿Cómo se llaman y qué hacen?', '¿Dónde viven?', '¿Qué hacéis juntos?'],
          checklist: ['Family members', 'Names and jobs', 'Where they live', 'What you do together'],
          model: `En mi familia somos cinco: mis padres, mi hermano, mi hermana y yo. Mi padre se llama Jan y es profesor. Mi madre se llama Anke y trabaja en un hospital. Mi hermano tiene veinticinco años y es estudiante, y mi hermana es arquitecta. Mis padres viven en un pueblo cerca de Groninga. Mis hermanos y yo vivimos en Ámsterdam. Los domingos comemos todos juntos en casa de mis padres.`
        },
        {
          id: 's2', title: 'Un día normal', prep: 1, talk: 1.5,
          instr: 'Describe un día normal de tu vida.',
          points: ['¿A qué hora te levantas?', '¿Qué haces por la mañana y por la tarde?', '¿Dónde y cuándo comes?', '¿Qué haces por la noche?'],
          checklist: ['Times (a las…)', 'Morning and afternoon routine (reflexive verbs)', 'Meals', 'Evening'],
          model: `Me levanto a las siete. Me ducho, desayuno un café y voy al trabajo en bicicleta. Trabajo en una oficina de nueve a cinco. Como a las doce y media con mis compañeros, normalmente un bocadillo. Por la tarde voy al gimnasio o hago la compra. Ceno a las siete, veo una serie y me acuesto a las once.`
        },
        {
          id: 's3', title: 'En la estación', prep: 1, talk: 2,
          instr: 'Estás en una estación de tren en España y quieres comprar un billete. Imagina la conversación con el empleado y di las dos partes.',
          points: ['Saluda y di adónde quieres ir', 'Pregunta los horarios', 'Pregunta el precio de ida y vuelta', 'Compra el billete'],
          checklist: ['Destination', 'Times', 'Return ticket price', 'Buy and thank'],
          model: `—Buenos días. Quiero un billete para Toledo.
—¿Para hoy?
—Sí. ¿A qué hora sale el próximo tren?
—A las once y media. Y hay otro a la una.
—El de las once y media, por favor. ¿Cuánto cuesta ida y vuelta?
—Veinte euros.
—Vale. ¿Puedo pagar con tarjeta?
—Sí, claro. Aquí tiene su billete. Sale de la vía cuatro.
—Muchas gracias.`
        }
      ]
    }
  }
});
