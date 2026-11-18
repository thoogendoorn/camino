/* DELE-style mock exam · A1 (original material, Castilian Spanish) */
CAMINO.mock({
  id: 'mock-a1-1', level: 'A1', title: 'Simulacro A1 · 1', blurb: 'Messages, notices, a flat advert and a short story; four listening tasks; a form and an email; three speaking tasks',
  papers: {
    reading: {
      minutes: 30, tasks: [
        {
          id: 'r1', title: 'Un correo de Lucía', instr: 'Lee el correo y responde a las preguntas. Elige la opción correcta.',
          text: `Hola, Marta:

¿Qué tal? Yo estoy muy bien en Valencia. Vivo en un piso pequeño cerca de la playa con dos chicas: Julia es de Sevilla y Ana es de Bilbao. Las dos son estudiantes.

Trabajo en una tienda de ropa de lunes a viernes, de nueve a dos. Por la tarde estudio inglés en una academia. Los sábados por la mañana voy al mercado con Julia y por la tarde voy a la playa.

El domingo es el cumpleaños de Ana. Vamos a cenar a un restaurante italiano. ¿Quieres venir? Hay un tren de Madrid a Valencia a las once.

Un beso,
Lucía`,
          q: `¿Dónde vive Lucía? | En el centro de Madrid ; *Cerca de la playa ; En Sevilla
¿De dónde es Ana? | De Sevilla ; De Valencia ; *De Bilbao
¿Cuándo trabaja Lucía? | *Por la mañana ; Por la tarde ; Los sábados
¿Qué hace Lucía los sábados por la mañana? | Estudia inglés ; *Va al mercado ; Va a la playa
¿Qué celebran el domingo? | *Un cumpleaños ; Una boda ; El fin de las clases`
        },
        {
          id: 'r2', title: 'Carteles y avisos', instr: 'Lee los cinco avisos. Responde a una pregunta sobre cada aviso.',
          text: `A. FARMACIA LÓPEZ. Abierto de lunes a sábado de 9:00 a 21:00. Domingos cerrado.

B. BIBLIOTECA MUNICIPAL. Prohibido comer y beber en la sala de lectura. Por favor, silencio.

C. SE BUSCA CAMARERO para el verano. Horario de tarde. Llamar al 654 223 118 (Pedro).

D. PISCINA: los niños menores de 12 años deben entrar con un adulto.

E. CLASES DE GUITARRA para principiantes. Martes y jueves a las 19:00. Primera clase gratis.`,
          q: `Aviso A: ¿Cuándo está cerrada la farmacia? | Los sábados ; *Los domingos ; Por la mañana
Aviso B: ¿Qué no puedes hacer en la sala de lectura? | Leer periódicos ; Estudiar ; *Tomar un café
Aviso C: ¿Qué busca el bar? | Un cocinero ; *Un camarero ; Un cliente
Aviso D: ¿Quién no puede entrar solo en la piscina? | *Un niño de ocho años ; Un chico de quince años ; Un adulto
Aviso E: ¿Cuánto cuesta la primera clase? | Diez euros ; *Nada ; No dice el precio`
        },
        {
          id: 'r3', title: 'Pisos en alquiler', instr: 'Lee los anuncios de pisos. Después lee lo que necesita cada persona y elige el anuncio adecuado.',
          text: `ANUNCIO A. Piso de 3 habitaciones en el centro. Muy luminoso, con terraza. 1.100 € al mes. No se aceptan animales.

ANUNCIO B. Estudio pequeño cerca de la universidad. Con wifi y muebles. 480 € al mes. Ideal para estudiantes.

ANUNCIO C. Casa con jardín a 15 km de la ciudad. 2 habitaciones. Se aceptan perros y gatos. 750 € al mes.

ANUNCIO D. Habitación en piso compartido con dos chicas. Cocina y baño compartidos. 350 € al mes, gastos incluidos.`,
          q: `Tomás es estudiante y quiere vivir solo, cerca de las clases. | Anuncio A ; *Anuncio B ; Anuncio D
La familia Ruiz tiene dos hijos y un perro grande. | Anuncio A ; Anuncio B ; *Anuncio C
Sara solo puede pagar 400 euros y no le importa compartir. | Anuncio B ; Anuncio C ; *Anuncio D
Los señores García quieren vivir en el centro y tomar el sol en casa. | *Anuncio A ; Anuncio C ; Anuncio D
¿Qué piso tiene los gastos incluidos? | Anuncio A ; Anuncio C ; *Anuncio D`
        },
        {
          id: 'r4', title: 'Un día de Javier', instr: 'Lee el texto y responde a las preguntas.',
          text: `Javier tiene treinta y cinco años y es médico en un hospital de Zaragoza. Está casado con Elena, que es profesora de música. Tienen una hija de seis años, Carla.

Javier se levanta todos los días a las seis y media. Desayuna un café con leche y una tostada con tomate. Va al hospital en bicicleta porque no está lejos de casa. Come en el hospital con sus compañeros a las dos.

Por la tarde, cuando vuelve a casa, juega con Carla en el parque. Por la noche cenan los tres juntos y ven una película. A Javier le gustan mucho las películas de ciencia ficción, pero a Elena no. Ella prefiere las comedias.`,
          q: `¿Qué es Javier? | Profesor ; *Médico ; Músico
¿Cuántos años tiene su hija? | *Seis ; Treinta y cinco ; Dos
¿Cómo va Javier al trabajo? | En coche ; En autobús ; *En bicicleta
¿Dónde come Javier? | En casa ; *En el hospital ; En un restaurante
¿Qué películas prefiere Elena? | De ciencia ficción ; *Comedias ; De terror`
        }
      ]
    },
    listening: {
      minutes: 15, tasks: [
        {
          id: 'l1', title: 'Cinco diálogos', instr: 'Vas a escuchar cinco diálogos breves. Responde a una pregunta sobre cada diálogo.',
          script: `Diálogo uno.
Cliente: Perdone, ¿cuánto cuesta esta camiseta?
Dependienta: Doce euros. Y los pantalones, veinticinco.
Cliente: Vale, solo la camiseta, gracias.
Diálogo dos.
Chica: ¿A qué hora sale el autobús para Toledo?
Empleado: A las diez y cuarto. Y el siguiente, a las doce.
Diálogo tres.
Madre: Pablo, ¿dónde están tus zapatos?
Niño: Debajo de la cama, mamá.
Diálogo cuatro.
Camarero: ¿Qué van a tomar?
Mujer: Para mí, un zumo de naranja.
Hombre: Y para mí, una cerveza sin alcohol.
Diálogo cinco.
Hombre: ¿Qué tiempo hace hoy en Santander?
Mujer: Llueve y hace un poco de frío. Coge el paraguas.`,
          q: `Diálogo 1: ¿Qué compra el cliente? | Unos pantalones ; *Una camiseta ; Las dos cosas
Diálogo 2: ¿A qué hora sale el primer autobús? | A las diez ; *A las diez y cuarto ; A las doce
Diálogo 3: ¿Dónde están los zapatos? | Encima de la cama ; En la mesa ; *Debajo de la cama
Diálogo 4: ¿Qué pide el hombre? | Un zumo ; *Una cerveza sin alcohol ; Un café
Diálogo 5: ¿Qué tiempo hace en Santander? | Hace sol ; *Llueve ; Hace mucho calor`
        },
        {
          id: 'l2', title: 'Mensajes y anuncios', instr: 'Vas a escuchar cinco mensajes y anuncios. Responde a una pregunta sobre cada uno.',
          script: `Mensaje uno.
Rosa: Hola, Pedro, soy Rosa. Hoy no puedo ir al cine, estoy enferma. ¿Vamos el viernes?
Mensaje dos.
Megafonía: Señores clientes, el supermercado cierra en quince minutos. Gracias por su visita.
Mensaje tres.
Doctor: Buenos días, es la consulta del doctor Martín. Su cita es el martes a las cinco de la tarde.
Mensaje cuatro.
Megafonía: El tren con destino a Barcelona sale por la vía tres.
Mensaje cinco.
Luis: Mamá, soy Luis. Llego a casa a las nueve. No tengo llaves, ¿vale?`,
          q: `Mensaje 1: ¿Por qué no va Rosa al cine? | Porque trabaja ; *Porque está enferma ; Porque no le gusta la película
Mensaje 2: ¿Cuándo cierra el supermercado? | *En quince minutos ; A las cinco ; Mañana
Mensaje 3: ¿Cuándo es la cita con el médico? | El lunes ; *El martes por la tarde ; El martes por la mañana
Mensaje 4: ¿Por qué vía sale el tren a Barcelona? | Por la vía uno ; Por la vía dos ; *Por la vía tres
Mensaje 5: ¿Qué problema tiene Luis? | Llega tarde ; *No tiene llaves ; Está cansado`
        },
        {
          id: 'l3', title: 'En la oficina de turismo', instr: 'Vas a escuchar una conversación en una oficina de turismo. Responde a las preguntas.',
          script: `Turista: Buenos días. ¿Tiene un plano de la ciudad?
Empleada: Sí, claro. Aquí tiene. Es gratis.
Turista: Gracias. ¿Qué puedo visitar hoy?
Empleada: El museo de arte está abierto hasta las ocho. Y la catedral, hasta las seis.
Turista: ¿Está lejos la catedral?
Empleada: No, está a diez minutos andando. Siga esta calle todo recto y gire a la izquierda en la plaza.
Turista: ¿Y dónde puedo comer bien?
Empleada: En la plaza Mayor hay muchos restaurantes. Le recomiendo La Bodega, tiene un menú del día de catorce euros.
Turista: Perfecto. Muchas gracias.`,
          q: `¿Cuánto cuesta el plano? | Dos euros ; *Nada ; Catorce euros
¿Hasta qué hora está abierta la catedral? | Hasta las ocho ; *Hasta las seis ; Hasta las dos
¿Cómo va a la catedral? | En autobús ; En taxi ; *Andando
¿Dónde está el restaurante La Bodega? | En la catedral ; *En la plaza Mayor ; Al lado del museo
¿Cuánto cuesta el menú del día? | *Catorce euros ; Diez euros ; Cuatro euros`
        },
        {
          id: 'l4', title: 'Me presento', instr: 'Vas a escuchar a una chica que habla de ella. Responde a las preguntas.',
          script: `Irene: Hola, me llamo Irene y tengo veintidós años. Soy de Granada, pero vivo en Madrid porque estudio Medicina en la universidad. Vivo con mi hermano Daniel, que trabaja en un banco. Me gusta mucho el deporte: nado tres días a la semana y los domingos juego al tenis con mis amigos. No me gusta nada cocinar, así que mi hermano prepara la cena. En verano siempre vuelvo a Granada para estar con mis padres.`,
          q: `¿De dónde es Irene? | De Madrid ; *De Granada ; De Sevilla
¿Qué estudia Irene? | Economía ; *Medicina ; Música
¿Dónde trabaja Daniel? | En la universidad ; En un hospital ; *En un banco
¿Cuándo juega al tenis? | *Los domingos ; Tres días a la semana ; En verano
¿Quién prepara la cena? | Irene ; *Su hermano ; Sus padres`
        }
      ]
    },
    writing: {
      minutes: 25, tasks: [
        {
          id: 'w1', title: 'Formulario de inscripción', words: [30, 50],
          instr: `Quieres hacer un curso de cocina española en una escuela de Madrid. Escribe un texto corto para el formulario de inscripción:
- tu nombre, tu edad y tu nacionalidad;
- dónde vives y cuál es tu trabajo o tus estudios;
- por qué quieres hacer el curso;
- qué días y a qué hora puedes ir.`,
          checklist: ['Name, age and nationality', 'Where you live and your job or studies', 'Why you want to do the course', 'Which days and times you can come'],
          model: `Me llamo Daan de Vries, tengo veintinueve años y soy holandés. Vivo en Utrecht y trabajo en una empresa de informática. Quiero hacer el curso porque me encanta la comida española y quiero cocinar paella para mis amigos. Puedo ir los martes y los jueves por la tarde, a partir de las seis.`
        },
        {
          id: 'w2', title: 'Un correo a un amigo', words: [50, 70],
          instr: `Estás de vacaciones en una ciudad de España. Escribe un correo a un amigo español. Cuéntale:
- dónde estás y con quién;
- cómo es la ciudad;
- qué haces normalmente durante el día;
- qué comida te gusta.`,
          checklist: ['A greeting and a goodbye', 'Where you are and who with', 'What the city is like', 'What you usually do in the day', 'Food you like'],
          model: `Hola, Pablo:
¿Qué tal estás? Estoy en Málaga con mi novia. La ciudad es muy bonita y tiene muchas playas. Hace mucho calor y hay mucha gente en la calle. Por la mañana visitamos museos y por la tarde vamos a la playa. Por la noche cenamos en una terraza. Me gusta mucho el pescado frito y el gazpacho.
Un abrazo,
Tom`
        }
      ]
    },
    speaking: {
      minutes: 10, tasks: [
        {
          id: 's1', title: 'Presentación personal', prep: 1, talk: 1.5,
          instr: 'Preséntate. Habla durante un minuto y medio.',
          points: ['Nombre, edad y nacionalidad', 'Dónde vives y con quién', 'Trabajo o estudios', 'Lenguas que hablas', 'Tus aficiones'],
          checklist: ['Name, age, nationality', 'Where and who you live with', 'Work or studies', 'Languages', 'Hobbies'],
          model: `Hola, me llamo Sanne y tengo treinta años. Soy holandesa, de Róterdam, pero ahora vivo en Ámsterdam con mi pareja y nuestro gato. Soy enfermera y trabajo en un hospital grande. Hablo neerlandés, inglés y un poco de español. Estudio español porque me gusta mucho España y quiero viajar allí. En mi tiempo libre corro, leo novelas y cocino con mis amigos.`
        },
        {
          id: 's2', title: 'Mi casa y mi barrio', prep: 1, talk: 1.5,
          instr: 'Describe tu casa y tu barrio.',
          points: ['¿Es una casa o un piso? ¿Cómo es?', '¿Cuántas habitaciones tiene?', '¿Qué hay en tu barrio?', '¿Qué te gusta y qué no te gusta?'],
          checklist: ['House or flat, what it is like', 'Rooms', 'What there is in the neighbourhood', 'Likes and dislikes'],
          model: `Vivo en un piso en el tercer piso de un edificio antiguo. Es pequeño pero muy luminoso. Tiene dos habitaciones, un salón, una cocina y un baño. En mi barrio hay un supermercado, una panadería, un parque y muchos bares. También hay una parada de tranvía al lado de mi casa. Me gusta mucho el parque, pero no me gusta el ruido de los coches por la noche.`
        },
        {
          id: 's3', title: 'En una tienda de ropa', prep: 1, talk: 2,
          instr: 'Estás en una tienda de ropa. Quieres comprar un regalo para un amigo. Imagina la conversación con el dependiente: di las dos partes en voz alta.',
          points: ['Saluda y di qué buscas', 'Pregunta por tallas y colores', 'Pregunta el precio', 'Decide y paga'],
          checklist: ['Greeting and what you want', 'Size and colour', 'Price', 'Decision and payment'],
          model: `—Buenos días. Busco un jersey para un amigo.
—¿De qué talla?
—Talla mediana. ¿Lo tiene en azul?
—Sí, en azul y en gris.
—El azul, por favor. ¿Cuánto cuesta?
—Treinta y cinco euros.
—Vale, me lo llevo. ¿Puedo pagar con tarjeta?
—Claro que sí.`
        }
      ]
    }
  }
});
