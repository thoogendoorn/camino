/* DELE-style mock exam · B1 · second set (original material, Castilian Spanish) */
CAMINO.mock({
  id: 'mock-b1-2', level: 'B1', title: 'Simulacro B1 · 2', blurb: 'Urban gardens, four volunteer offers, a neighbourhood notice and a gapped email; four listening tasks; a forum reply and a story; three speaking tasks',
  papers: {
    reading: {
      minutes: 50, tasks: [
        {
          id: 'r1', title: 'Huertos en la azotea', instr: 'Lee el artículo y responde a las preguntas.',
          text: `En el barrio de Lavapiés, en Madrid, los vecinos de un edificio de los años sesenta decidieron hace cuatro años convertir su azotea en un huerto. Al principio la idea parecía una locura: había que subir la tierra por la escalera, porque el edificio no tiene ascensor, y nadie sabía si el tejado aguantaría el peso. Un arquitecto que vive en el tercero hizo los cálculos y, tras varios meses de reuniones, consiguieron el permiso del ayuntamiento.

Hoy en la azotea crecen tomates, lechugas, pimientos y hierbas aromáticas. Cada familia se encarga del riego una semana al mes y la cosecha se reparte entre todos. «Lo de menos son los tomates», explica Rosa, de setenta y dos años. «Antes no conocía a los vecinos del cuarto. Ahora cenamos juntos en verano aquí arriba».

El proyecto ha tenido otros efectos. En verano, la azotea verde reduce la temperatura de los pisos del último piso hasta tres grados, según han medido los propios vecinos. Y el colegio del barrio organiza visitas para que los niños vean de dónde vienen las verduras.

No todo ha sido fácil: el primer año, una tormenta destrozó la mitad de las plantas y hubo discusiones sobre quién tenía que pagar el agua. «Ahora lo pagamos entre todos, como la luz de la escalera», resume el presidente de la comunidad.`,
          q: `¿Qué dificultad tenían al principio? | No tenían dinero ; *Subir la tierra sin ascensor ; Los vecinos no querían participar
¿Quién ayudó a resolver el problema del peso? | El ayuntamiento ; *Un vecino arquitecto ; El presidente de la comunidad
¿Cómo se organizan para regar? | Lo hace Rosa ; *Cada familia riega una semana al mes ; Tienen un sistema automático
Según Rosa, ¿qué es lo más importante del huerto? | Los tomates ; *Conocer a los vecinos ; Ahorrar dinero
¿Qué efecto tiene la azotea en verano? | Los pisos son más calurosos ; *Bajan las temperaturas en los últimos pisos ; Hay más mosquitos
¿Cómo resolvieron el problema del agua? | La paga el ayuntamiento ; *La pagan entre todos ; La paga cada familia por separado`
        },
        {
          id: 'r2', title: 'Voluntariado', instr: 'Lee lo que buscan cinco personas y las ofertas de voluntariado. Elige la oferta adecuada para cada persona.',
          text: `OFERTA A. Banco de alimentos. Clasificar comida en el almacén. Sábados por la mañana. No hace falta experiencia.

OFERTA B. Acompañamiento a mayores. Visitar a personas mayores que viven solas, charlar con ellas y acompañarlas al médico. Dos horas a la semana, horario flexible.

OFERTA C. Clases de refuerzo. Ayudar a niños de primaria con los deberes de matemáticas y lengua. Lunes y miércoles de 17:00 a 18:30.

OFERTA D. Protectora de animales. Pasear perros y limpiar las instalaciones. Fines de semana. Imprescindible tener más de 18 años.

OFERTA E. Traducción online. Traducir documentos de una ONG del inglés al español. Desde casa, a tu ritmo.`,
          q: `Julia es profesora jubilada y quiere ayudar a niños por las tardes. | Oferta B ; *Oferta C ; Oferta E
Iván tiene un horario que cambia cada semana y le gusta escuchar historias. | Oferta A ; *Oferta B ; Oferta D
Sofía vive en un pueblo sin transporte y habla inglés perfectamente. | Oferta A ; Oferta C ; *Oferta E
A Marcos le encantan los perros, pero en su piso no puede tener uno. | Oferta B ; *Oferta D ; Oferta A
Lucía y sus amigos quieren hacer algo útil juntos el sábado, aunque nunca han hecho voluntariado. | *Oferta A ; Oferta C ; Oferta E`
        },
        {
          id: 'r3', title: 'Aviso a los vecinos', instr: 'Lee el aviso y responde a las preguntas.',
          text: `COMUNIDAD DE PROPIETARIOS · CALLE MAYOR, 23

Estimados vecinos:

Les informamos de que, a partir del lunes 10 de marzo, comenzarán las obras de rehabilitación de la fachada. Las obras durarán aproximadamente seis semanas y se realizarán de lunes a viernes, de 8:00 a 15:00.

Durante este tiempo:
- Los balcones deberán estar vacíos. Por favor, retiren plantas, bicicletas y tendederos antes del día 10.
- La entrada principal estará cerrada del 10 al 14 de marzo. Durante esos días se accederá al edificio por la puerta del garaje.
- Se recomienda mantener las ventanas cerradas para evitar el polvo.

El coste de las obras se pagará en seis cuotas mensuales, como se acordó en la junta de enero. Si algún vecino tiene dificultades para pagar, puede hablar con el administrador.

Disculpen las molestias.

La Junta de la Comunidad`,
          q: `¿Cuánto tiempo durarán las obras? | Seis días ; *Unas seis semanas ; Seis meses
¿Qué tienen que hacer los vecinos antes del día 10? | Pagar las obras ; *Vaciar los balcones ; Cerrar el garaje
¿Por dónde se entrará al edificio la primera semana? | Por la entrada principal ; *Por la puerta del garaje ; Por la terraza
¿Por qué se recomienda cerrar las ventanas? | Por el ruido ; *Por el polvo ; Por el frío
¿Qué puede hacer un vecino que no puede pagar? | No pagar ; *Hablar con el administrador ; Pedir una reunión urgente`
        },
        {
          id: 'r4', title: 'Completa el correo', instr: 'Elige la opción correcta para cada hueco (1–6).',
          text: `Hola, Marta:

¡Qué alegría recibir tu correo! Perdona que no te (1) ___ antes, pero he estado muy liado con la mudanza. Por fin vivo en Valencia. El piso es más pequeño que el de Madrid, (2) ___ tiene una terraza enorme.

Cuando (3) ___ a Valencia, tienes que venir a verme. Te enseñaré la ciudad: el centro, la Ciudad de las Artes y, por supuesto, te llevaré a comer una paella de verdad. Ayer (4) ___ a un restaurante en la playa con unos compañeros de trabajo y fue increíble.

Me alegro mucho de que (5) ___ el trabajo en la editorial. ¡Te lo mereces! Seguro que te va a ir genial.

Escríbeme pronto y (6) ___ todo.

Un abrazo,
Javier`,
          q: `Hueco 1 | he escrito ; *haya escrito ; escribo
Hueco 2 | porque ; *pero ; por eso
Hueco 3 | vienes ; *vengas ; vendrás
Hueco 4 | *fui ; iba ; he ido
Hueco 5 | has conseguido ; *hayas conseguido ; consigues
Hueco 6 | me cuentas ; *cuéntame ; me cuentes`
        }
      ]
    },
    listening: {
      minutes: 30, tasks: [
        {
          id: 'l1', title: 'Seis mensajes', instr: 'Vas a escuchar seis mensajes. Responde a una pregunta sobre cada uno.',
          script: `Mensaje uno.
Lorena: Hola, Pablo. Soy Lorena. Al final no puedo prestarte el coche este fin de semana porque lo necesita mi hermano. Lo siento mucho.
Mensaje dos.
Megafonía: Se comunica a los clientes que el parking cerrará hoy a las diez de la noche por trabajos de mantenimiento.
Mensaje tres.
Secretaria: Le llamamos de la academia de idiomas. Su prueba de nivel será el lunes a las seis. Traiga su documento de identidad.
Mensaje cuatro.
Abuela: Cariño, soy la abuela. ¿Puedes venir el domingo a ayudarme con el ordenador? No consigo ver las fotos que me mandaste.
Mensaje cinco.
Anuncio: Este verano, aprende a nadar en la piscina municipal. Cursos intensivos de dos semanas para todas las edades. Inscripciones hasta el treinta de mayo.
Mensaje seis.
Jorge: Oye, que el partido de pádel del jueves lo cambiamos al viernes a la misma hora, que Raúl no puede.`,
          q: `Mensaje 1: ¿Por qué no presta Lorena el coche? | Porque está estropeado ; *Porque lo necesita su hermano ; Porque se va de viaje
Mensaje 2: ¿Por qué cierra antes el parking? | Por una fiesta ; *Por trabajos de mantenimiento ; Por falta de personal
Mensaje 3: ¿Qué tiene que llevar a la prueba? | Un libro ; *Su documento de identidad ; Dinero
Mensaje 4: ¿Qué le pide la abuela? | Que le mande más fotos ; *Que le ayude con el ordenador ; Que le compre un ordenador
Mensaje 5: ¿Hasta cuándo se puede inscribir? | Dos semanas ; *Hasta el treinta de mayo ; Todo el verano
Mensaje 6: ¿Qué cambia del partido de pádel? | La hora ; *El día ; El lugar`
        },
        {
          id: 'l2', title: 'Entrevista a un cocinero', instr: 'Vas a escuchar una entrevista. Responde a las preguntas.',
          script: `Periodista: Hoy está con nosotros Daniel Ortega, que tiene un pequeño restaurante en un pueblo de Teruel y que acaba de recibir un premio de cocina. Daniel, ¿cómo empezaste?
Daniel: Por casualidad. Yo estudié Informática y trabajé seis años en Barcelona. Cuando murió mi tía, que tenía una casa de comidas en el pueblo, nadie de la familia quería quedarse con ella. Yo había aprendido a cocinar con ella de pequeño, así que pensé: lo intento un año.
Periodista: ¿Y qué tipo de cocina haces?
Daniel: Las recetas de mi tía y de las abuelas del pueblo, pero más ligeras. Uso productos de aquí: trufa, cordero, aceite del Bajo Aragón. Casi todo lo compro a menos de cincuenta kilómetros.
Periodista: ¿Es difícil tener un restaurante en un pueblo tan pequeño?
Daniel: En invierno, sí. Hay semanas en que vienen muy pocos clientes. Pero desde el premio tenemos reservas hasta mayo. Lo que más me cuesta es encontrar personal; los jóvenes se van a la ciudad.`,
          q: `¿Qué estudió Daniel? | Cocina ; *Informática ; Turismo
¿Por qué empezó con el restaurante? | Siempre había querido ser cocinero ; *Su tía murió y nadie quería el negocio ; Ganó un premio
¿Cómo describe su cocina? | Moderna e internacional ; *Recetas tradicionales más ligeras ; Solo platos de trufa
¿De dónde son sus productos? | De Barcelona ; *De la zona, cerca del pueblo ; De todo el país
¿Cuál es su mayor dificultad ahora? | No tener clientes ; *Encontrar trabajadores ; Conseguir productos`
        },
        {
          id: 'l3', title: '¿Quién lo dice?', instr: 'Vas a escuchar una conversación entre Clara y Óscar sobre un viaje. Indica a quién corresponde cada frase: Clara, Óscar o ninguno de los dos.',
          script: `Clara: Óscar, ¿ya has decidido adónde vamos en Semana Santa?
Óscar: Yo votaría por Portugal. Podríamos ir en coche hasta Oporto y luego bajar a Lisboa.
Clara: ¿En coche? Son muchas horas. Yo prefiero coger un vuelo barato y alquilar un coche allí.
Óscar: Pero así no vemos nada por el camino. Además, a mí me da miedo volar, ya lo sabes.
Clara: Bueno, vale. Pero entonces conduces tú la mitad del tiempo, que la última vez conduje yo todo.
Óscar: De acuerdo. Y el alojamiento lo busco yo: conozco un hotel pequeño en Oporto que está muy bien de precio.
Clara: Perfecto. Yo me encargo de buscar restaurantes.`,
          q: `Propone ir en coche. | Clara ; *Óscar ; Ninguno de los dos
Tiene miedo a volar. | Clara ; *Óscar ; Ninguno de los dos
Condujo todo el viaje la última vez. | *Clara ; Óscar ; Ninguno de los dos
Ya ha reservado el hotel. | Clara ; Óscar ; *Ninguno de los dos
Va a buscar sitios para comer. | *Clara ; Óscar ; Ninguno de los dos`
        },
        {
          id: 'l4', title: 'Consejos para ahorrar', instr: 'Vas a escuchar a una experta en economía doméstica en la radio. Responde a las preguntas.',
          script: `Experta: Muchos oyentes nos escriben porque llegan a final de mes sin dinero. Mi primer consejo es apuntar todos los gastos durante un mes, incluso el café de la mañana. La mayoría de la gente se sorprende al ver cuánto gasta en pequeñas cosas. El segundo consejo es revisar las suscripciones: plataformas de series, gimnasio, aplicaciones… muchas veces pagamos por cosas que no usamos. Tercero: comparar las tarifas de luz y de teléfono una vez al año, porque las compañías suben los precios a los clientes antiguos. Y por último, intentar ahorrar al principio del mes, no al final. Si esperas a ver lo que te sobra, normalmente no sobra nada. Aunque sean cincuenta euros, sepáralos el día que cobras.`,
          q: `¿Qué recomienda hacer durante un mes? | No gastar nada ; *Apuntar todos los gastos ; Dejar de tomar café
¿Qué dice de las suscripciones? | Que son baratas ; *Que a menudo pagamos por cosas que no usamos ; Que hay que tener muchas
¿Por qué hay que comparar las tarifas cada año? | Porque bajan los precios ; *Porque suben los precios a los clientes antiguos ; Porque lo exige la ley
¿Cuándo es mejor ahorrar? | Al final del mes ; *Al principio del mes, al cobrar ; Solo en verano
¿Cuánto hay que ahorrar como mínimo, según ella? | Quinientos euros ; *No da una cantidad mínima, aunque sean cincuenta euros ; El diez por ciento`
        }
      ]
    },
    writing: {
      minutes: 50, tasks: [
        {
          id: 'w1', title: 'Respuesta en un foro', words: [100, 120],
          instr: `En un foro de viajeros, alguien pregunta: «Voy a pasar una semana en tu ciudad en mayo. ¿Qué me recomendáis?» Escribe una respuesta:
- saluda y preséntate brevemente;
- recomienda dos o tres lugares y explica por qué;
- recomienda algo típico para comer;
- da un consejo práctico (transporte, horarios, dinero…).`,
          checklist: ['Greeting and short introduction', '2–3 places with reasons', 'Food recommendation', 'Practical advice (te recomiendo que + subjunctive, imperative)'],
          model: `¡Hola! Soy Mark y vivo en Utrecht desde hace diez años, así que te puedo dar algunas ideas.
Primero, te recomiendo que subas a la torre de la catedral, el Domtoren: hay que reservar, pero las vistas son increíbles. También tienes que pasear por los canales del centro, que tienen terrazas al nivel del agua. Si te gusta el arte, visita la casa Rietveld Schröder.
Para comer, prueba las patatas fritas con mayonesa o un buen queso holandés en el mercado del sábado.
Un consejo práctico: alquila una bicicleta. Es la forma más rápida de moverse, pero ten cuidado, porque aquí la gente va muy rápido.
¡Que disfrutes!`
        },
        {
          id: 'w2', title: 'Un relato', words: [130, 150],
          instr: `Una revista organiza un concurso de relatos breves. El relato tiene que empezar con esta frase: «Cuando abrí la puerta, no podía creer lo que estaba viendo». Escribe el relato.`,
          checklist: ['Starts with the given sentence', 'Clear beginning, middle and end', 'Past tenses: preterite for events, imperfect for description', 'Some dialogue or feelings', 'Connectors of time (de repente, entonces, al final)'],
          model: `Cuando abrí la puerta, no podía creer lo que estaba viendo. Mi salón estaba lleno de globos de colores y en el centro había una mesa con una tarta enorme. Era mi cumpleaños, pero yo pensaba que todos lo habían olvidado.
De repente, mis amigos salieron de la cocina gritando «¡Sorpresa!». Allí estaba también mi hermana, que vivía en Canadá y no venía a España desde hacía tres años. Me puse a llorar como un niño.
Más tarde me contaron que lo habían preparado durante semanas. Mi compañero de piso me había llevado al cine para que ellos pudieran entrar en casa.
Al final, bailamos y cantamos hasta las tres de la mañana. Fue el mejor cumpleaños de mi vida.`
        }
      ]
    },
    speaking: {
      minutes: 14, tasks: [
        {
          id: 's1', title: 'Presentación: un lugar especial', prep: 3, talk: 2.5,
          instr: 'Habla durante dos o tres minutos sobre un lugar que es especial para ti.',
          points: ['Dónde está y cómo es', 'Cuándo lo conociste', 'Qué recuerdos tienes de ese lugar', 'Por qué es especial'],
          checklist: ['Description (ser, estar, hay)', 'When you first went (preterite)', 'Memories (imperfect)', 'Why it matters'],
          model: `Un lugar muy especial para mí es una playa pequeña en la costa de Asturias, cerca de Llanes. Es una playa escondida, entre montañas verdes, y para llegar hay que bajar por un camino de tierra. La conocí cuando tenía doce años, porque mis padres alquilaban una casa cerca todos los veranos. Recuerdo que pasábamos el día allí: mi padre pescaba, mi madre leía y mi hermano y yo buscábamos cangrejos. Hace dos años volví con mi pareja y todo estaba igual. Es especial porque allí me siento tranquilo y me recuerda a mi infancia.`
        },
        {
          id: 's2', title: 'Conversación sobre el tema', prep: 1, talk: 2,
          instr: 'Responde a estas preguntas como si te las hiciera el examinador.',
          points: ['¿Prefieres volver a lugares que conoces o descubrir sitios nuevos?', '¿Crees que el turismo cambia los lugares especiales? ¿Cómo?', '¿Cómo será viajar dentro de veinte años?'],
          checklist: ['Answer every question', 'Reasons and examples', 'Opinion with creo que / no creo que + subjunctive', 'Future tense'],
          model: `Depende. Me encanta descubrir sitios nuevos, pero también necesito volver a algunos lugares, porque me dan tranquilidad. Creo que el turismo cambia mucho los lugares: cuando llegan muchos turistas, suben los precios y cierran las tiendas de toda la vida. No creo que sea malo en sí mismo, pero hay que controlarlo. Dentro de veinte años, creo que viajaremos menos en avión, porque será más caro, y que haremos viajes más largos y más lentos.`
        },
        {
          id: 's3', title: 'Situación: en el médico', prep: 1, talk: 2.5,
          instr: 'Llevas una semana con dolor de espalda y vas al médico. Imagina la conversación y di las dos partes.',
          points: ['Explica qué te pasa y desde cuándo', 'Responde a las preguntas del médico sobre tu trabajo y tus hábitos', 'Pregunta qué tienes que hacer', 'Pide un justificante para el trabajo'],
          checklist: ['Symptoms (me duele, desde hace)', 'Habits (present)', 'Advice understood (tiene que, le recomiendo que)', 'Polite request (¿podría…?)'],
          model: `—Buenos días. ¿Qué le pasa?
—Me duele mucho la espalda desde hace una semana, sobre todo por la mañana.
—¿En qué trabaja?
—Soy diseñadora y paso ocho horas delante del ordenador.
—¿Hace deporte?
—Muy poco, la verdad.
—Bueno, parece una contractura. Le voy a recetar un antiinflamatorio. Además, le recomiendo que se levante cada hora y que empiece a nadar dos veces por semana.
—¿Tengo que dejar de trabajar unos días?
—Si le duele mucho, tómese dos días de descanso.
—¿Me podría dar un justificante para la empresa?
—Claro, aquí lo tiene.`
        }
      ]
    }
  }
});
