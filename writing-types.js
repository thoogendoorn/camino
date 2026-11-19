/* Writing portfolio: text types by level (Phase 5).
   Each type has a checklist (self-review without AI), useful phrases, one model text and six tasks. */
(function () {
  const W = CAMINO.wtype;

  W({ id: 'postal', level: 'A1', title: 'Postal', en: 'Postcard', words: [30, 50],
    checklist: ['Saludo al principio (Hola, Querida…, Querido…)', 'Dónde estás y con quién', 'Qué tiempo hace', 'Qué haces o qué te gusta', 'Despedida (Un beso, Un abrazo) y tu nombre', 'Verbos en presente bien conjugados', 'Concordancia: la playa es bonita, los días son largos'],
    phrases: ['Querida… / Querido…', 'Estoy en… con…', 'Hace sol / Hace calor / Llueve', 'El hotel está cerca de…', 'Por la mañana… y por la tarde…', 'Me gusta mucho…', 'La comida es…', 'Mañana voy a…', 'Un beso / Un abrazo', 'Hasta pronto'],
    model: { task: 'Escribe una postal a una amiga desde tus vacaciones.', text: `Querida Marta:

¡Hola! Estoy en Cádiz con mi hermano. Hace mucho sol y la playa es preciosa. El hotel está cerca del mar. Por la mañana nadamos y por la tarde paseamos por el centro. ¡La comida es buenísima! Mañana vamos a Sevilla.

Un abrazo,
Ana` },
    tasks: [
      { id: 'postal-playa', es: 'Estás de vacaciones en la playa. Escribe una postal a un amigo.', points: ['dónde estás', 'con quién', 'qué tiempo hace', 'qué haces cada día'] },
      { id: 'postal-ciudad', es: 'Estás de visita en una ciudad española. Escribe una postal a tu familia.', points: ['qué ciudad es', 'cómo es', 'qué te gusta', 'qué vas a hacer mañana'] },
      { id: 'postal-montana', es: 'Estás en un pueblo de montaña. Escribe una postal a una compañera de clase.', points: ['dónde está el pueblo', 'cómo es la casa o el hotel', 'qué tiempo hace', 'qué comes'] },
      { id: 'postal-curso', es: 'Estás haciendo un curso de español en Salamanca. Escribe una postal a tu profesor o profesora.', points: ['dónde vives', 'cómo son las clases', 'qué haces por la tarde', 'una cosa que te gusta mucho'] },
      { id: 'postal-fiesta', es: 'Estás en una fiesta popular en España. Escribe una postal a tu hermano o hermana.', points: ['qué fiesta es', 'dónde estás', 'qué hay en la calle', 'qué te gusta'] },
      { id: 'postal-isla', es: 'Estás en una isla (Mallorca, Tenerife…). Escribe una postal a tus abuelos.', points: ['con quién estás', 'qué tiempo hace', 'qué haces por la mañana y por la tarde', 'cuándo vuelves'] }
    ] });

  W({ id: 'mensaje', level: 'A2', title: 'Mensaje o nota', en: 'Message or note', words: [60, 80],
    checklist: ['Saludo adecuado (Hola, ¿qué tal?)', 'El motivo del mensaje, claro al principio', 'Todos los puntos de la tarea', 'Pasado bien usado: perfecto (hoy, esta semana) o indefinido (ayer, el sábado)', 'Una pregunta o propuesta para la otra persona', 'Despedida y firma', 'Conectores sencillos: y, pero, porque, entonces'],
    phrases: ['Te escribo porque…', '¿Qué tal estás?', 'Esta semana he…', 'Ayer / El sábado fui…', 'Lo siento, pero…', '¿Te apetece…?', '¿Quedamos el… a las…?', '¿Me puedes…?', 'Muchas gracias por…', 'Hasta luego / Nos vemos'],
    model: { task: 'Escribe un mensaje a un amigo para cancelar una cita y proponer otro día.', text: `¡Hola, Javi! ¿Qué tal?

Te escribo porque no puedo ir al cine el viernes. Lo siento mucho. Esta semana he tenido mucho trabajo y ayer me llamó mi jefa: tengo que viajar a Valencia el viernes por la tarde. ¿Te apetece ir el domingo? Hay una sesión a las siete. Después podemos cenar en el bar de la plaza. Yo invito, ¿vale?

Un abrazo,
Laura` },
    tasks: [
      { id: 'msg-cancelar', es: 'No puedes ir a la cena de cumpleaños de un amigo. Escríbele un mensaje.', points: ['pide perdón', 'explica por qué no puedes ir', 'felicítale', 'propón otro plan'] },
      { id: 'msg-vecino', es: 'Vas a hacer una fiesta en tu piso el sábado. Escribe una nota para tus vecinos.', points: ['preséntate', 'explica qué vas a hacer y cuándo', 'pide perdón por el ruido', 'invítales a pasar'] },
      { id: 'msg-finde', es: 'Escribe un mensaje a una amiga contándole tu fin de semana.', points: ['adónde fuiste', 'con quién', 'qué hiciste', 'qué tal lo pasaste'] },
      { id: 'msg-piso', es: 'Tu compañero de piso está de viaje. Escríbele una nota sobre lo que ha pasado en casa.', points: ['qué ha pasado (un problema)', 'qué has hecho', 'qué necesitas que haga él', 'una buena noticia'] },
      { id: 'msg-agradecer', es: 'Has pasado unos días en casa de una familia española. Escribe un mensaje para darles las gracias.', points: ['da las gracias', 'qué te gustó más', 'una cosa divertida que pasó', 'invítales a tu ciudad'] },
      { id: 'msg-recomendar', es: 'Un amigo va a visitar tu ciudad. Escríbele un mensaje con recomendaciones.', points: ['qué lugares tiene que ver', 'dónde comer', 'cómo moverse', 'qué tiempo hace en esa época'] }
    ] });

  W({ id: 'correo', level: 'B1', title: 'Correo electrónico', en: 'Email (informal or semi-formal)', words: [100, 120],
    checklist: ['Saludo y despedida adecuados al destinatario (tú o usted)', 'Primer párrafo: motivo del correo', 'Todos los puntos de la tarea, en párrafos', 'Conectores: además, sin embargo, por eso, así que', 'Al menos una frase con subjuntivo (espero que…, me alegro de que…)', 'Tiempos del pasado bien combinados', 'Revisión de acentos y signos ¿ ¡'],
    phrases: ['Estimado/a… (formal) / Querido/a… (informal)', 'Te escribo para…', 'Me alegro mucho de que…', 'Siento no haberte escrito antes, pero…', 'Te cuento que…', 'Por un lado… por otro…', 'Me gustaría saber si…', 'Espero que todo vaya bien', 'Un saludo cordial / Un fuerte abrazo', 'Quedo a la espera de tu respuesta'],
    model: { task: 'Escribe un correo a una amiga española que conociste en un curso: cuéntale tus novedades y proponle un plan.', text: `Querida Elena:

¡Cuánto tiempo! Siento no haberte escrito antes, pero estos meses han sido una locura. Te cuento: en septiembre empecé un trabajo nuevo en una empresa de diseño y estoy muy contenta, aunque trabajo muchas horas. Además, me he mudado a un piso más grande, cerca del centro, y por fin tengo una habitación para invitados. Por cierto, sigo con las clases de flamenco: ¡ya sé bailar sevillanas!

Te escribo también porque en abril tengo una semana de vacaciones y me encantaría ir a Sevilla. ¿Estarás allí? Si te apetece, podríamos vernos y visitar juntas la feria. Me alegro mucho de que tu nuevo proyecto vaya bien.

Espero que me contestes pronto.

Un fuerte abrazo,
Sanne` },
    tasks: [
      { id: 'correo-novedades', es: 'Escribe un correo a un amigo que no ves desde hace un año.', points: ['saluda y explica por qué no has escrito', 'cuenta dos novedades importantes', 'pregúntale por su vida', 'propón veros'] },
      { id: 'correo-curso', es: 'Escribe un correo a una academia de idiomas para pedir información sobre un curso de verano.', points: ['preséntate', 'di qué tipo de curso buscas', 'pregunta por precios, horarios y alojamiento', 'despídete formalmente'] },
      { id: 'correo-recomendar', es: 'Un compañero de trabajo quiere aprender tu idioma. Escríbele un correo con consejos.', points: ['cómo aprendiste tú otra lengua', 'tres consejos concretos', 'recursos que recomiendas', 'ofrécete a ayudarle'] },
      { id: 'correo-viaje', es: 'Escribe a un amigo contándole un viaje reciente que salió mal.', points: ['adónde fuiste y con quién', 'qué problemas tuvisteis', 'cómo los resolvisteis', 'qué aprendiste'] },
      { id: 'correo-voluntario', es: 'Escribe a una ONG porque quieres hacer voluntariado.', points: ['preséntate', 'explica por qué te interesa', 'qué sabes hacer y cuánto tiempo tienes', 'pide información'] },
      { id: 'correo-felicitar', es: 'Una amiga ha conseguido el trabajo de sus sueños. Escríbele para felicitarla.', points: ['felicítala', 'recuerda una anécdota de cuando lo buscaba', 'dale un consejo para empezar', 'propón celebrarlo'] }
    ] });

  W({ id: 'relato', level: 'B1', title: 'Relato', en: 'Story', words: [130, 150],
    checklist: ['Título', 'Situación inicial: cuándo, dónde, quién (imperfecto para describir)', 'Acciones principales en indefinido', 'Un problema o momento inesperado', 'Un final claro', 'Marcadores temporales: aquel día, de repente, al final, unos minutos después', 'Variedad de verbos y adjetivos (no repetir «muy bonito»)'],
    phrases: ['Aquel día…', 'Era un… de… y hacía…', 'Estaba… cuando de repente…', 'En ese momento…', 'Al principio… pero luego…', 'No me lo podía creer', 'Unos minutos después…', 'Por suerte…', 'Al final…', 'Desde entonces…'],
    model: { task: 'Escribe un relato que empiece así: «Aquel día perdí el último tren».', text: `El último tren

Aquel día perdí el último tren. Era una noche de diciembre y hacía mucho frío en la estación de Burgos. Estaba solo, con el móvil sin batería y diez euros en el bolsillo.

Al principio me puse muy nervioso, pero luego vi una luz en la cafetería de la estación. Entré y una señora mayor estaba cerrando. Le expliqué lo que me pasaba y, para mi sorpresa, me preparó un chocolate caliente y me dejó cargar el móvil.

Mientras esperaba, hablamos durante horas. Me contó que llevaba cuarenta años trabajando allí y que había visto pasar miles de viajeros con prisa. A las seis de la mañana llegó el primer tren. Al final, aquella noche fue una de las más bonitas de mi vida.

Desde entonces, cada vez que paso por Burgos, me bajo a tomar un chocolate.` },
    tasks: [
      { id: 'relato-tren', es: 'Escribe un relato que empiece así: «Cuando abrí la puerta, no podía creer lo que veía».', points: ['describe la situación inicial', 'explica qué viste', 'cuenta qué hiciste', 'termina la historia'] },
      { id: 'relato-error', es: 'Cuenta una historia real o inventada sobre un malentendido por culpa del idioma.', points: ['dónde y cuándo pasó', 'cuál fue el malentendido', 'cómo reaccionó la gente', 'qué aprendiste'] },
      { id: 'relato-encuentro', es: 'Escribe un relato sobre un encuentro inesperado con alguien del pasado.', points: ['dónde estabas y qué hacías', 'a quién viste', 'qué os dijisteis', 'cómo terminó'] },
      { id: 'relato-viaje', es: 'Escribe la historia de un viaje en el que todo salió mal, pero que terminó bien.', points: ['adónde ibas', 'qué problemas surgieron', 'quién te ayudó', 'el final'] },
      { id: 'relato-objeto', es: 'Escribe un relato a partir de un objeto que encuentras en la calle: una llave antigua.', points: ['dónde la encontraste', 'qué decidiste hacer', 'qué descubriste', 'el final'] },
      { id: 'relato-primera', es: 'Cuenta la primera vez que hiciste algo importante (conducir, vivir solo, trabajar…).', points: ['cuántos años tenías y cómo te sentías', 'qué pasó', 'algo que salió mal o bien', 'qué significó para ti'] }
    ] });

  W({ id: 'opinion', level: 'B2', title: 'Texto de opinión', en: 'Opinion essay', words: [150, 180],
    checklist: ['Introducción que presenta el tema', 'Tu opinión clara (En mi opinión…)', 'Dos o tres argumentos, cada uno en su párrafo', 'Un contraargumento y tu respuesta', 'Conclusión que no repite literalmente la introducción', 'Subjuntivo tras expresiones de valoración (es importante que…, no creo que…)', 'Conectores variados: no obstante, en cambio, por consiguiente, además'],
    phrases: ['Hoy en día se discute mucho si…', 'En mi opinión / Desde mi punto de vista…', 'Por un lado… por otro…', 'Hay quien piensa que…; sin embargo…', 'No creo que… (+ subjuntivo)', 'Es fundamental que… (+ subjuntivo)', 'Un ejemplo claro es…', 'Por consiguiente…', 'Si bien es cierto que…, también…', 'En definitiva / En conclusión…'],
    model: { task: '¿Deberían los ayuntamientos limitar los pisos turísticos en el centro de las ciudades?', text: `En los últimos años, el número de pisos turísticos en los centros de las ciudades españolas ha crecido de forma espectacular. Desde mi punto de vista, los ayuntamientos deberían limitarlos, aunque sin prohibirlos por completo.

Por un lado, los pisos turísticos reducen la oferta de alquiler para quienes viven y trabajan en la ciudad, y eso contribuye a que los precios suban. Por otro lado, cuando un barrio se llena de visitantes, desaparecen las tiendas de toda la vida y el barrio pierde su identidad.

Hay quien sostiene que el turismo genera empleo y que muchos propietarios dependen de esos ingresos. Es cierto, pero no creo que la solución sea dejar que el mercado decida solo: es fundamental que existan normas claras y licencias limitadas por zonas.

En definitiva, el turismo es una riqueza, pero una ciudad no puede convertirse en un parque temático. Regular es la mejor manera de que vecinos y visitantes puedan convivir.` },
    tasks: [
      { id: 'op-teletrabajo', es: '¿Debería el teletrabajo ser un derecho para todos los trabajadores que puedan hacerlo?', points: ['presenta el tema', 'da tu opinión con dos argumentos', 'menciona un argumento contrario', 'concluye'] },
      { id: 'op-redes', es: '¿Habría que prohibir las redes sociales a los menores de dieciséis años?', points: ['presenta el debate', 'argumenta tu postura', 'responde a un argumento contrario', 'propón una alternativa'] },
      { id: 'op-coches', es: '¿Es buena idea cerrar el centro de las ciudades al tráfico privado?', points: ['ventajas', 'inconvenientes', 'tu opinión', 'un ejemplo de alguna ciudad'] },
      { id: 'op-deberes', es: '¿Tienen sentido los deberes en la educación primaria?', points: ['presenta el tema', 'dos argumentos', 'un contraargumento', 'conclusión'] },
      { id: 'op-semana', es: '¿Debería implantarse la semana laboral de cuatro días?', points: ['beneficios posibles', 'riesgos', 'tu postura', 'una condición para que funcione'] },
      { id: 'op-turismo', es: '¿El turismo masivo hace más bien que mal a las ciudades?', points: ['efectos positivos', 'efectos negativos', 'tu opinión', 'una propuesta'] }
    ] });

  W({ id: 'reclamacion', level: 'B2', title: 'Carta de reclamación', en: 'Formal complaint', words: [150, 180],
    checklist: ['Datos del asunto (Asunto: Reclamación por…)', 'Saludo formal (Estimados señores:) y tratamiento de usted', 'Hechos en orden: qué compraste o contrataste, cuándo, qué pasó', 'Qué has hecho ya para resolverlo', 'Qué pides exactamente (reembolso, cambio, compensación)', 'Plazo y qué harás si no responden', 'Despedida formal (Atentamente) y firma'],
    phrases: ['Me dirijo a ustedes para…', 'El pasado día… adquirí / contraté…', 'Sin embargo, al recibir…, comprobé que…', 'A pesar de haber llamado en varias ocasiones…', 'Les adjunto…', 'Por todo ello, les solicito que… (+ subjuntivo)', 'Les ruego que me informen…', 'En caso de no recibir respuesta en un plazo de…', 'me veré obligado/a a…', 'Quedo a la espera de su respuesta. Atentamente,'],
    model: { task: 'Escribe una reclamación a una tienda online: el sofá que compraste llegó dañado y no te contestan.', text: `Asunto: Reclamación por sofá dañado – pedido 48213

Estimados señores:

Me dirijo a ustedes para presentar una reclamación por el sofá que adquirí en su tienda online el pasado 2 de marzo. El producto se entregó el día 12, pero al desembalarlo comprobé que uno de los brazos estaba roto y la tela, manchada.

Ese mismo día les envié un correo con fotografías, que les adjunto de nuevo. A pesar de haber llamado en tres ocasiones a su servicio de atención al cliente, todavía no he recibido ninguna solución, y han pasado ya dos semanas.

Por todo ello, les solicito que retiren el sofá dañado y me envíen uno nuevo en perfecto estado o, en su defecto, que me devuelvan el importe íntegro de la compra. Les ruego que me respondan en un plazo de diez días. En caso contrario, me veré obligado a acudir a los servicios de consumo de mi comunidad.

Quedo a la espera de su respuesta.

Atentamente,
Daniel Ortega` },
    tasks: [
      { id: 'rec-vuelo', es: 'Tu vuelo se canceló y la compañía no te ha dado ninguna explicación. Escribe una reclamación.', points: ['datos del vuelo y qué pasó', 'consecuencias para ti', 'qué gestiones has hecho', 'qué pides y en qué plazo'] },
      { id: 'rec-gimnasio', es: 'Te has dado de baja de un gimnasio, pero te siguen cobrando la cuota. Escribe a la empresa.', points: ['cuándo y cómo te diste de baja', 'qué cobros han hecho', 'qué pides', 'qué harás si no responden'] },
      { id: 'rec-hotel', es: 'El hotel que reservaste no se parecía nada a las fotos de la web. Escribe una reclamación.', points: ['datos de la reserva', 'diferencias con lo anunciado', 'cómo reaccionó la recepción', 'qué compensación pides'] },
      { id: 'rec-internet', es: 'Llevas tres semanas sin internet en casa y la compañía no lo arregla. Escribe una reclamación.', points: ['desde cuándo y qué pasa', 'cuántas veces has llamado', 'cómo te afecta (teletrabajo, estudios)', 'qué solicitas'] },
      { id: 'rec-curso', es: 'Pagaste un curso que no ha cumplido lo prometido. Escribe a la academia.', points: ['qué se prometía', 'qué ha ocurrido en realidad', 'qué intentaste hacer', 'qué pides'] },
      { id: 'rec-casero', es: 'El propietario de tu piso no arregla una avería importante. Escríbele formalmente.', points: ['qué avería hay y desde cuándo', 'qué gestiones has hecho', 'qué dice el contrato', 'qué pides y en qué plazo'] }
    ] });

  W({ id: 'informe', level: 'C1', title: 'Informe', en: 'Report', words: [220, 250],
    checklist: ['Título y destinatario o propósito claros', 'Introducción: objetivo del informe y fuentes (encuesta, datos, observación)', 'Apartados con subtítulos o párrafos bien delimitados', 'Datos presentados con precisión y lenguaje impersonal (se observa, cabe destacar)', 'Valoración de los datos, no solo descripción', 'Recomendaciones concretas y justificadas', 'Registro formal y conectores de texto académico (en lo que respecta a, cabe señalar, por último)'],
    phrases: ['El presente informe tiene como objetivo…', 'Para su elaboración se ha…', 'Según los datos obtenidos…', 'Cabe destacar que…', 'En lo que respecta a…', 'Un porcentaje significativo de…', 'Llama la atención que… (+ subjuntivo)', 'A la luz de estos resultados…', 'Se recomienda…', 'En síntesis…'],
    model: { task: 'Escribe un informe para el ayuntamiento sobre el uso de la biblioteca municipal, a partir de una encuesta a usuarios.', text: `Informe sobre el uso de la Biblioteca Municipal Miguel Delibes

El presente informe tiene como objetivo analizar el uso de la biblioteca municipal y proponer mejoras. Para su elaboración se ha realizado una encuesta a 320 usuarios durante el mes de octubre.

Perfil de los usuarios. Según los datos obtenidos, la mayoría de los usuarios son estudiantes de entre 16 y 25 años, que acuden sobre todo a la sala de estudio. Cabe destacar que solo un 12 % de los encuestados tiene más de 65 años, a pesar de que este grupo representa casi una cuarta parte de la población del barrio.

Servicios más valorados. En lo que respecta a los servicios, los usuarios valoran especialmente el préstamo de libros y la conexión wifi. Llama la atención, sin embargo, que muchos desconozcan la existencia del préstamo de libros electrónicos y de los clubes de lectura.

Principales quejas. Las críticas se concentran en el horario, que no se amplía en época de exámenes, y en la falta de enchufes en la sala de estudio.

Recomendaciones. A la luz de estos resultados, se recomienda ampliar el horario durante los periodos de exámenes, renovar la instalación eléctrica de la sala de estudio y diseñar una campaña de difusión dirigida a las personas mayores, con talleres de iniciación a los recursos digitales.

En síntesis, la biblioteca cumple una función esencial para los jóvenes, pero tiene margen para llegar a otros sectores de la población.` },
    tasks: [
      { id: 'inf-transporte', es: 'Escribe un informe para tu empresa sobre cómo llegan los empleados al trabajo y cómo fomentar la movilidad sostenible.', points: ['objetivo y fuente de los datos', 'situación actual', 'problemas detectados', 'recomendaciones'] },
      { id: 'inf-festival', es: 'Escribe un informe para la organización de un festival cultural sobre la edición de este año.', points: ['objetivo', 'datos de asistencia y satisfacción', 'aspectos positivos y negativos', 'propuestas para el próximo año'] },
      { id: 'inf-teletrabajo', es: 'Escribe un informe para la dirección sobre los resultados de un año de teletrabajo parcial en tu departamento.', points: ['metodología', 'productividad y bienestar', 'problemas surgidos', 'recomendación final'] },
      { id: 'inf-comedor', es: 'Escribe un informe para la asociación de familias sobre el comedor escolar.', points: ['objetivo y encuesta', 'calidad y precio', 'quejas más frecuentes', 'propuestas de mejora'] },
      { id: 'inf-turismo', es: 'Escribe un informe para el ayuntamiento de un pueblo sobre el impacto del turismo rural en los últimos cinco años.', points: ['fuentes', 'efectos económicos', 'efectos sobre los vecinos y el entorno', 'recomendaciones'] },
      { id: 'inf-idiomas', es: 'Escribe un informe para un centro de idiomas sobre por qué los alumnos abandonan los cursos.', points: ['datos de abandono', 'causas detectadas', 'comparación entre grupos', 'medidas propuestas'] }
    ] });

  W({ id: 'argumentativo', level: 'C1', title: 'Ensayo argumentativo', en: 'Argumentative essay', words: [220, 250],
    checklist: ['Tesis clara al final de la introducción', 'Argumentos desarrollados con ejemplos o datos, no solo enumerados', 'Refutación de la postura contraria con matices', 'Progresión lógica entre párrafos', 'Variedad de estructuras complejas: oraciones concesivas, condicionales, pasivas', 'Léxico preciso y sin repeticiones', 'Conclusión que abre una reflexión o propuesta'],
    phrases: ['Cabe preguntarse si…', 'Partiendo de la base de que…', 'Conviene no perder de vista que…', 'Si bien…, no es menos cierto que…', 'Aun admitiendo que…, …', 'Lejos de…, …', 'Este argumento, sin embargo, pasa por alto…', 'De ahí que… (+ subjuntivo)', 'En última instancia…', 'Todo ello invita a pensar que…'],
    model: { task: '¿Debe la universidad formar ante todo para el mercado laboral?', text: `Cada vez que se publican las cifras de paro juvenil, resurge la misma pregunta: ¿debe la universidad formar ante todo para el mercado laboral? A mi juicio, la respuesta es no, aunque la universidad no puede permitirse ignorar el empleo de sus egresados.

Es innegable que las familias y los estudiantes invierten tiempo y dinero esperando una salida profesional, y que algunas titulaciones han tardado demasiado en adaptarse a profesiones nuevas. De ahí que sea razonable exigir prácticas en empresas, orientación laboral y planes de estudio actualizados.

Sin embargo, subordinar la universidad al mercado plantea un problema de fondo: el mercado cambia mucho más deprisa que los planes de estudio. Las competencias más demandadas hoy pueden quedar obsoletas en una década, mientras que la capacidad de razonar, investigar y aprender por cuenta propia no caduca. Una universidad concebida como mera fábrica de perfiles profesionales correría el riesgo de formar especialistas en problemas que ya no existirán.

Además, conviene no perder de vista que la universidad cumple funciones que el mercado no retribuye directamente: la investigación básica, el pensamiento crítico o la preservación del conocimiento humanístico. Lejos de ser un lujo, son la base sobre la que se construyen las innovaciones del futuro.

En última instancia, la cuestión no es elegir entre empleo y saber, sino evitar que lo urgente desplace a lo importante.` },
    tasks: [
      { id: 'arg-ia', es: '¿Debería regularse el uso de la inteligencia artificial en la educación secundaria?', points: ['tesis', 'dos argumentos desarrollados', 'refutación', 'conclusión con propuesta'] },
      { id: 'arg-meritocracia', es: '¿Es la meritocracia un ideal justo o una ficción que legitima la desigualdad?', points: ['define el concepto', 'argumentos a favor', 'críticas', 'tu postura matizada'] },
      { id: 'arg-turismo', es: '¿Deben las ciudades poner límites al número de visitantes?', points: ['tesis', 'argumentos económicos y sociales', 'objeciones', 'conclusión'] },
      { id: 'arg-lectura', es: '¿Está en crisis la lectura o solo han cambiado las formas de leer?', points: ['planteamiento', 'argumentos con ejemplos', 'contraargumento', 'conclusión'] },
      { id: 'arg-consumo', es: '¿Puede el consumo responsable cambiar el sistema, o la responsabilidad es de los gobiernos?', points: ['tesis', 'papel del individuo', 'papel de las instituciones', 'síntesis'] },
      { id: 'arg-memoria', es: '¿Es necesario cambiar los nombres de calles y monumentos que recuerdan el pasado conflictivo de un país?', points: ['planteamiento equilibrado', 'argumentos de un lado', 'argumentos del otro', 'tu conclusión razonada'] }
    ] });

  W({ id: 'resena', level: 'C2', title: 'Reseña', en: 'Review', words: [250, 300],
    checklist: ['Datos de la obra (título, autor, género, año) integrados con naturalidad', 'Resumen breve sin desvelar el final', 'Análisis: estructura, estilo, personajes o puesta en escena', 'Valoración argumentada, con matices (lo que funciona y lo que no)', 'Comparación o contextualización con otras obras', 'Registro periodístico culto, con léxico evaluativo preciso', 'Recomendación final dirigida a un tipo de lector o espectador'],
    phrases: ['Con su nueva novela, X confirma…', 'La trama gira en torno a…', 'Sin desvelar demasiado…', 'Lo más logrado es, sin duda…', 'Cabe reprocharle, no obstante…', 'La prosa, de una sobriedad casi…', 'A ratos peca de…', 'Quienes disfrutaron de… encontrarán aquí…', 'Se trata, en suma, de…', 'Imprescindible para… / Prescindible si…'],
    model: { task: 'Escribe una reseña de una película, serie, libro o exposición que hayas visto recientemente (puede ser inventada).', text: `«La casa del acantilado»: el silencio como argumento

Con «La casa del acantilado», su tercer largometraje, la directora Lucía Aranda confirma que es una de las voces más personales del cine español reciente, aunque también que su gusto por la contención puede convertirse en un arma de doble filo.

La trama gira en torno a tres hermanas que regresan a la casa familiar, en la costa de Lugo, para venderla tras la muerte de su madre. Sin desvelar demasiado, basta decir que el inventario de muebles acaba convirtiéndose en un inventario de reproches.

Lo más logrado es, sin duda, el trabajo con las actrices, que sostienen planos larguísimos con una naturalidad desarmante, y una fotografía que hace del mar una presencia casi amenazante. Aranda filma lo que no se dice: miradas, puertas que se cierran, un plato que nadie recoge. La banda sonora, apenas un piano y el rumor constante del oleaje, acompaña sin subrayar, y el montaje respeta los tiempos muertos con una paciencia poco habitual en el cine comercial, que tiende a desconfiar del silencio.

Cabe reprocharle, no obstante, que esa misma contención la lleve a resolver con prisa el conflicto central, como si temiera el melodrama más que la frialdad. El último tercio, a ratos, peca de previsible.

Quienes disfrutaron de los dramas familiares de la directora encontrarán aquí su obra más madura y también la más exigente. Se trata, en suma, de una película imperfecta pero valiente, que confía en la inteligencia del espectador. Imprescindible para quien no tema el silencio.` },
    tasks: [
      { id: 'res-novela', es: 'Escribe la reseña de una novela que te haya impresionado, para el suplemento cultural de un periódico.', points: ['datos y contexto', 'resumen sin desvelar el final', 'análisis del estilo y los personajes', 'valoración y recomendación'] },
      { id: 'res-serie', es: 'Escribe la reseña de una serie que todo el mundo recomienda y que a ti no te convenció.', points: ['contexto del éxito', 'qué funciona', 'qué no y por qué', 'a quién se la recomendarías'] },
      { id: 'res-exposicion', es: 'Escribe la reseña de una exposición de arte para una revista cultural.', points: ['museo, artista y propuesta', 'recorrido y obras destacadas', 'montaje y discurso', 'valoración'] },
      { id: 'res-restaurante', es: 'Escribe una reseña gastronómica de un restaurante para una guía exigente.', points: ['ambiente y concepto', 'platos', 'servicio y precio', 'veredicto'] },
      { id: 'res-teatro', es: 'Escribe la reseña de una obra de teatro clásica en una versión moderna.', points: ['obra original y propuesta', 'interpretación', 'puesta en escena', 'si la adaptación tiene sentido'] },
      { id: 'res-disco', es: 'Escribe la reseña del nuevo disco de un artista consagrado.', points: ['trayectoria', 'sonido y letras', 'canciones destacadas', 'lugar en su carrera'] }
    ] });

  W({ id: 'articulo', level: 'C2', title: 'Artículo', en: 'Feature article', words: [300, 400],
    checklist: ['Titular y entradilla que captan la atención', 'Arranque con una escena, dato o pregunta', 'Desarrollo con fuentes, datos o testimonios bien integrados', 'Equilibrio entre información y voz propia', 'Recursos estilísticos: preguntas retóricas, ironía, metáforas, sin exceso', 'Cohesión: el final retoma el arranque o abre una reflexión', 'Corrección y riqueza léxica de nivel nativo culto'],
    phrases: ['Basta con… para…', 'No es casualidad que…', 'Detrás de… se esconde…', 'Según cuenta…, …', 'Lo paradójico es que…', 'Cabría preguntarse…', 'Dicho de otro modo…', 'Ni que decir tiene que…', 'Quizá la clave esté en…', 'Al fin y al cabo…'],
    model: { task: 'Escribe un artículo para una revista sobre un cambio en los hábitos cotidianos de tu ciudad.', text: `El último quiosco

Cada mañana, a las siete en punto, Antonio levanta la persiana del último quiosco de prensa de la calle Mayor. Hace veinte años había cuatro.

Basta con pasear un rato por cualquier ciudad española para comprobar que los quioscos están desapareciendo. Según las asociaciones del sector, en las dos últimas décadas han cerrado miles en todo el país. La explicación parece obvia: leemos las noticias en el móvil, gratis o casi, y el periódico de papel se ha convertido en un objeto de nostalgia.

Lo paradójico es que nunca se ha consumido tanta información como ahora. Detrás del cierre de los quioscos se esconde, más que una crisis de la lectura, un cambio en la forma de leer: fragmentaria, acelerada, solitaria. El quiosco era también un lugar de conversación, donde el vecino comentaba el titular del día con el quiosquero y con quien hiciera cola detrás.

Antonio lo resume a su manera: «Antes la gente venía a por el periódico y se quedaba diez minutos hablando. Ahora vienen a por el pan… porque también vendo pan». Su quiosco sobrevive diversificándose: vende lotería, recargas de transporte, chucherías, y hace de punto de recogida de paquetes. Los jubilados del barrio siguen siendo su clientela más fiel; algunos jóvenes, curiosamente, han empezado a comprar revistas en papel como quien compra un disco de vinilo: por el objeto, más que por la información.

Cabría preguntarse si merece la pena lamentar la desaparición de un negocio que el mercado ya ha sentenciado. Quizá la clave esté en lo que perdemos con él: no tanto un lugar donde comprar papel como uno de esos espacios mínimos donde una ciudad se encuentra consigo misma.

A las nueve, Antonio ya ha vendido once periódicos. Dice que cerrará el día que se jubile. Al fin y al cabo, alguien tiene que contarle al barrio lo que pasa en el mundo.` },
    tasks: [
      { id: 'art-barrio', es: 'Escribe un artículo sobre cómo ha cambiado un barrio que conoces bien en los últimos diez años.', points: ['arranque con una escena', 'datos o testimonios', 'causas del cambio', 'reflexión final'] },
      { id: 'art-idioma', es: 'Escribe un artículo para una revista sobre lo que se gana y lo que se pierde al vivir en otra lengua.', points: ['experiencia o anécdota', 'aspectos positivos', 'pérdidas o dificultades', 'conclusión'] },
      { id: 'art-tiempo', es: 'Escribe un artículo de opinión sobre la sensación generalizada de falta de tiempo.', points: ['titular y entradilla', 'diagnóstico con ejemplos', 'posibles causas', 'propuesta o reflexión'] },
      { id: 'art-oficio', es: 'Escribe un reportaje breve sobre un oficio tradicional que está desapareciendo.', points: ['presenta a una persona (puede ser inventada)', 'historia del oficio', 'causas de su declive', 'qué se pierde'] },
      { id: 'art-fiesta', es: 'Escribe un artículo sobre una fiesta popular vista con ojos de alguien de fuera.', points: ['escena inicial', 'qué ocurre y por qué', 'contradicciones o sorpresas', 'cierre'] },
      { id: 'art-pantallas', es: 'Escribe un artículo sobre la relación de los niños con las pantallas, evitando tanto el alarmismo como la complacencia.', points: ['dato o escena inicial', 'posturas enfrentadas', 'tu análisis', 'conclusión'] }
    ] });
})();
