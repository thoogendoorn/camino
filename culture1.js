/* Living in Spain · part 1: health, housing, paperwork, money and work */
(function () {
  const M = CAMINO.culture;

  M({ id: 'medico', level: 'A2', title: 'El médico de cabecera y la tarjeta sanitaria',
    blurb: 'How public healthcare works: your health card, your GP and making an appointment.',
    x: `En España, la sanidad pública es universal y está gestionada por cada comunidad autónoma. Para usarla necesitas la tarjeta sanitaria individual, que se pide en el centro de salud de tu barrio o por internet. Normalmente te piden el documento de identidad o el NIE, el certificado de empadronamiento y estar dado de alta en la Seguridad Social, por ejemplo porque trabajas.

Con la tarjeta te asignan un médico de familia, también llamado médico de cabecera, en tu centro de salud. Es la puerta de entrada al sistema: si necesitas un especialista, primero tienes que ir a tu médico, que te hace un volante para el especialista. Los niños tienen pediatra hasta los catorce años, más o menos.

Para pedir cita, lo más rápido suele ser la aplicación de salud de tu comunidad o la página web; también puedes llamar por teléfono o ir al mostrador del centro. Muchas consultas sencillas se hacen hoy por teléfono: el médico te llama a una hora aproximada.

Si es algo urgente pero no grave, puedes ir a urgencias del centro de salud. Si es grave, ve a urgencias del hospital o llama al 112.

Las recetas son electrónicas: el médico las carga en tu tarjeta y en cualquier farmacia te dan el medicamento con tu tarjeta. Pagas solo una parte del precio, según tus ingresos. Si eres ciudadano de la Unión Europea y estás de visita, la Tarjeta Sanitaria Europea te cubre la atención necesaria.`,
    V: `
la tarjeta sanitaria | health card | Sin la {tarjeta sanitaria} no puedes pedir cita. | Without the health card you can't book an appointment.
el médico de familia | family doctor, GP | Mi {médico de familia} me conoce desde hace años. | My GP has known me for years.
estar dado de alta | to be registered (social security) | Tienes que {estar dado de alta} en la Seguridad Social. | You have to be registered with Social Security.
asignar | to assign | Me han {asignado} una médica muy maja. | They've assigned me a very nice doctor.
derivar | to refer (to a specialist) | Mi médica me ha {derivado} al dermatólogo. | My doctor has referred me to the dermatologist.
pedir cita | to book an appointment | ¿Cómo puedo {pedir cita} con el médico? | How can I book an appointment with the doctor?
la consulta telefónica | phone appointment | Me han dado {consulta telefónica} para mañana. | I've got a phone appointment for tomorrow.
el mostrador | front desk, counter | Pregunta en el {mostrador} del centro de salud. | Ask at the health centre's front desk.
las urgencias | A&E, emergency department | Fuimos a {urgencias} a las tres de la mañana. | We went to A&E at three in the morning.
el justificante | (doctor's) note, proof | ¿Me puede dar un {justificante} para el trabajo? | Could you give me a note for work?
la Tarjeta Sanitaria Europea | European Health Insurance Card | Lleva la {Tarjeta Sanitaria Europea} cuando viajes. | Take your European Health Insurance Card when you travel.
la cartilla de vacunación | vaccination record | Trae la {cartilla de vacunación} del niño. | Bring the child's vaccination record.
el análisis de sangre | blood test | Mañana me hacen un {análisis de sangre} en ayunas. | Tomorrow I'm having a fasting blood test.
en ayunas | fasting, on an empty stomach | Hay que venir {en ayunas}. | You have to come without eating.
la enfermera de referencia | named nurse | Mi {enfermera de referencia} me toma la tensión. | My named nurse takes my blood pressure.
`,
    model: `Recepcionista: Buenos días. ¿En qué le puedo ayudar?
Paciente: Hola, buenos días. Quería pedir cita con mi médico de familia.
Recepcionista: ¿Me da su tarjeta sanitaria, por favor?
Paciente: Sí, aquí tiene. Es que llevo una semana con tos y un poco de fiebre.
Recepcionista: La doctora Jiménez tiene hueco el jueves a las diez y veinte, o puede llamarle por teléfono mañana por la mañana.
Paciente: Prefiero ir en persona. El jueves me viene bien.
Recepcionista: Perfecto. Jueves a las diez y veinte, consulta seis. Si empeora antes, venga a urgencias del centro.
Paciente: ¿Necesito traer algo más?
Recepcionista: No, con la tarjeta es suficiente. Ah, y si necesita un justificante para el trabajo, pídaselo a la doctora.
Paciente: Muchas gracias.`,
    talk: 'You are the receptionist at a Spanish health centre. The learner wants an appointment with their GP for a problem that has lasted a few days. Ask for the health card, offer two options (in person or phone), and explain what to do if they get worse.',
    tasks: ['Find out which centro de salud corresponds to your address.', 'Request your tarjeta sanitaria (or check that yours is active).', 'Install your region\'s health app and find where to book an appointment.', 'Book an appointment and go to it, speaking only Spanish at the desk.', 'Save 112 and your health centre\'s phone number in your phone.'],
    gl: `gestionada = managed
universal = universal
especialista = specialist
volante = referral slip
pediatra = paediatrician
aproximada = approximate
recetas = prescriptions
ingresos = income
cubre = covers
hueco = free slot
empeora = gets worse` });

  M({ id: 'farmacia', level: 'A2', title: 'En la farmacia',
    blurb: 'Pharmacists in Spain give a lot of advice. What you can buy without a prescription, and the farmacia de guardia.',
    x: `En España, las farmacias son mucho más que tiendas. Los farmacéuticos tienen una formación universitaria de cinco años y la gente les pide consejo para problemas pequeños: un resfriado, una picadura, una alergia, una quemadura del sol. Muchas veces te recomiendan un producto o te dicen que vayas al médico.

Las farmacias se reconocen por una cruz verde, normalmente con luz. Solo en las farmacias se venden medicamentos; no los encontrarás en el supermercado, ni siquiera el ibuprofeno o el paracetamol. Algunos medicamentos se pueden comprar sin receta, pero muchos otros, como los antibióticos, solo se dan con receta médica.

Por la noche y los fines de semana siempre hay alguna farmacia abierta: es la farmacia de guardia. En la puerta de cada farmacia hay una lista con las farmacias de guardia del barrio y su horario. A veces tienes que llamar a un timbre y te atienden por una ventanilla.

En la farmacia también puedes tomarte la tensión, comprar productos para bebés, cremas, protector solar o pedir que te preparen un medicamento especial. En muchas te piden la tarjeta sanitaria si tienes receta electrónica.

Un consejo práctico: cuando expliques lo que te pasa, sé concreto. Di desde cuándo tienes los síntomas, si tienes alergias y si tomas otros medicamentos. El farmacéutico te lo agradecerá.`,
    V: `
la farmacia de guardia | duty pharmacy (open at night) | Busca la {farmacia de guardia} más cercana. | Look for the nearest duty pharmacy.
sin receta | over the counter | El ibuprofeno se puede comprar {sin receta}. | You can buy ibuprofen without a prescription.
la receta médica | doctor's prescription | Los antibióticos solo se dan con {receta médica}. | Antibiotics are only given with a prescription.
la picadura | (insect) bite, sting | Tengo una {picadura} de mosquito que me pica mucho. | I've got a mosquito bite that itches a lot.
la quemadura | burn | Esta crema es para la {quemadura} del sol. | This cream is for sunburn.
el protector solar | sunscreen | Ponte {protector solar} antes de ir a la playa. | Put on sunscreen before going to the beach.
el medicamento genérico | generic medicine | El {medicamento genérico} es igual de eficaz y más barato. | The generic medicine is just as effective and cheaper.
la cruz verde | green cross (pharmacy sign) | Busca una {cruz verde} encendida. | Look for a lit green cross.
el jarabe | syrup | Un {jarabe} para la tos, por favor. | A cough syrup, please.
las pastillas | pills | Tome dos {pastillas} al día. | Take two pills a day.
el farmacéutico / la farmacéutica | pharmacist | Pregúntale a la {farmacéutica}, sabe mucho. | Ask the pharmacist, she knows a lot.
tomarse la tensión | to have one's blood pressure taken | En la farmacia puedes {tomarte la tensión}. | You can have your blood pressure taken at the pharmacy.
cada ocho horas | every eight hours | Tómelo {cada ocho horas}. | Take it every eight hours.
en el estómago vacío | on an empty stomach | No lo tome {en el estómago vacío}. | Don't take it on an empty stomach.
caducado / caducada | expired, out of date | Este jarabe está {caducado}. | This syrup is out of date.
`,
    model: `Farmacéutica: Hola, buenas tardes. ¿Qué necesitaba?
Cliente: Buenas tardes. Tengo dolor de garganta desde ayer y un poco de tos.
Farmacéutica: ¿Tiene fiebre?
Cliente: No, creo que no.
Farmacéutica: ¿Es alérgico a algún medicamento? ¿Toma algo más?
Cliente: No, a nada.
Farmacéutica: Le doy unas pastillas para chupar, para la garganta, y un jarabe para la tos. El jarabe, una cucharada cada ocho horas.
Cliente: ¿Puede producir sueño?
Farmacéutica: Este no. Si en tres o cuatro días no mejora, o si le sube la fiebre, vaya al médico.
Cliente: Perfecto. ¿Cuánto es?
Farmacéutica: Son nueve euros con cuarenta.`,
    talk: 'You are a pharmacist in Madrid. The learner comes in with a minor problem (sore throat, insect bites or sunburn). Ask about symptoms, allergies and other medicines, recommend something and explain how to take it, and when to see a doctor.',
    tasks: ['Find the list of farmacias de guardia on the door of your nearest pharmacy.', 'Ask a pharmacist for advice on a minor problem, in Spanish.', 'Learn how to say your allergies (or «no tengo alergias») by heart.', 'Buy a product and ask how and when to take or use it.'],
    gl: `formación = training
consejo = advice
síntomas = symptoms
concreto = specific
agradecerá = will be grateful
garganta = throat
timbre = doorbell
ventanilla = small service window
chupar = to suck
cucharada = spoonful
sueño = drowsiness` });

  M({ id: 'alquilar', level: 'B1', title: 'Alquilar un piso',
    blurb: 'Searching, visiting, the fianza and what a Spanish rental contract usually includes.',
    x: `Buscar piso en las grandes ciudades españolas puede ser una carrera de obstáculos. La mayoría de los anuncios están en portales inmobiliarios de internet, aunque en algunos barrios todavía se ven carteles de «Se alquila» en los balcones. Conviene reaccionar rápido: los pisos buenos y a buen precio vuelan.

Antes de visitar un piso, fíjate en lo que incluye el precio: si está amueblado, si los gastos de comunidad están incluidos, qué certificado energético tiene y cómo es la calefacción. En la visita, pregunta por la orientación, el ruido, el estado de los electrodomésticos y quién paga las reparaciones.

Para alquilar, es habitual que el propietario o la agencia te pida documentación: el DNI o NIE, las últimas nóminas o el contrato de trabajo y, a veces, un aval. Por ley, el inquilino paga una fianza equivalente a un mes de renta en los alquileres de vivienda, que se deposita en un organismo de la comunidad autónoma y se devuelve al final del contrato si todo está bien. Además, algunos propietarios piden garantías adicionales.

La ley de vivienda establece que los gastos de gestión de la agencia inmobiliaria los paga el propietario, no el inquilino. Infórmate bien en tu comunidad, porque las normas pueden variar y cambiar.

Lee el contrato con calma antes de firmar. Debe indicar la duración, la renta, cómo se actualiza cada año, quién paga cada gasto y el inventario de muebles. Haz fotos del piso el día que entres: te serán útiles cuando te vayas.`,
    V: `
el portal inmobiliario | property website | Encontré el piso en un {portal inmobiliario}. | I found the flat on a property website.
vuelan | (they) go fast, get snapped up | Los pisos baratos {vuelan}. | Cheap flats get snapped up.
amueblado / amueblada | furnished | Busco un piso {amueblado}. | I'm looking for a furnished flat.
los gastos de comunidad | service charges | ¿Los {gastos de comunidad} están incluidos? | Are the service charges included?
el propietario / la propietaria | owner, landlord | El {propietario} vive en el piso de abajo. | The landlord lives downstairs.
la renta mensual | monthly rent | La {renta mensual} es de ochocientos euros. | The monthly rent is eight hundred euros.
depositar | to deposit, lodge | La fianza se {deposita} en un organismo público. | The deposit is lodged with a public body.
las garantías adicionales | extra guarantees | Me pidieron {garantías adicionales}. | They asked me for extra guarantees.
los gastos de gestión | agency fees | Los {gastos de gestión} los paga el propietario. | The agency fees are paid by the owner.
la duración del contrato | length of the contract | ¿Cuál es la {duración del contrato}? | How long is the contract?
actualizar la renta | to update the rent | Cada año se puede {actualizar la renta}. | The rent can be updated each year.
el inventario | inventory | Revisa el {inventario} de muebles. | Check the furniture inventory.
la visita | viewing | Tenemos una {visita} a las seis. | We have a viewing at six.
el estado | condition | ¿En qué {estado} está la cocina? | What condition is the kitchen in?
las reparaciones | repairs | ¿Quién paga las {reparaciones}? | Who pays for repairs?
`,
    model: `Agente: Hola, ¿eres Sofía? Pasa, pasa. Este es el piso.
Sofía: Hola. Es muy luminoso. ¿Cuántos metros tiene?
Agente: Sesenta y cinco. Dos habitaciones, salón, cocina independiente y un baño.
Sofía: ¿Los gastos de comunidad están incluidos en el precio?
Agente: Sí, la comunidad la paga el propietario. Tú pagas luz, agua, gas e internet.
Sofía: ¿Y la calefacción? ¿Es de gas o eléctrica?
Agente: Es de gas natural, con caldera individual. Se revisó el año pasado.
Sofía: ¿Qué documentación necesitáis?
Agente: El NIE, las tres últimas nóminas y el contrato de trabajo. La fianza es de un mes.
Sofía: Vale. ¿Y la duración del contrato?
Agente: Cinco años, con actualización anual de la renta según la ley. Si te interesa, te mando el contrato para que lo leas con calma.
Sofía: Sí, por favor. Me interesa mucho.`,
    talk: 'You are an estate agent showing a flat in Valencia. The learner is a prospective tenant. Answer questions about size, bills, heating, documents and the deposit, and try to get them to decide quickly. Let them negotiate or ask for time.',
    tasks: ['Compare three real flat ads and note what each price includes.', 'Write a message in Spanish to an advertiser asking for a viewing.', 'Prepare the list of documents you would need, with copies.', 'Read a model rental contract and find the clauses on duration, rent update and deposit.', 'On move-in day, photograph every room and the inventory.'],
    gl: `obstáculos = obstacles
anuncios = ads
reaccionar = to react
equivalente = equivalent
organismo = (public) body
establece = establishes
infórmate = find out (for yourself)
caldera = boiler
actualización = update` });

  M({ id: 'empadronarse', level: 'B1', title: 'Empadronarse en el ayuntamiento',
    blurb: 'The padrón: why almost every procedure starts at the town hall.',
    x: `Una de las primeras cosas que debes hacer al llegar a vivir a un municipio español es inscribirte en el padrón municipal, el registro de los habitantes del municipio. Este trámite se llama empadronarse y es obligatorio para todas las personas que residen en España, sean españolas o extranjeras.

¿Para qué sirve? Para casi todo. El certificado de empadronamiento te lo pedirán para obtener la tarjeta sanitaria, para matricular a tus hijos en el colegio, para algunos trámites de extranjería, para pedir ayudas sociales y, a menudo, para votar en las elecciones municipales si tienes derecho. Además, el número de habitantes empadronados determina parte del dinero que recibe cada ayuntamiento, así que a tu municipio también le interesa que te inscribas.

El trámite se hace en el ayuntamiento o en una junta de distrito, normalmente con cita previa, aunque muchos ayuntamientos ya permiten hacerlo por internet. Necesitarás un documento de identidad (pasaporte, NIE o el documento de tu país) y un documento que demuestre que vives en esa dirección: el contrato de alquiler, la escritura de la vivienda o una autorización firmada por el propietario o por la persona con la que vives.

El empadronamiento es gratuito y en muchos casos te dan el volante en el momento. Cuando te mudes, tienes que empadronarte en tu nueva dirección: no hace falta darte de baja en el municipio anterior, porque se hace automáticamente.

Un detalle importante: el padrón es un registro de residencia, no de situación legal. Las personas extranjeras pueden empadronarse aunque no tengan todavía los papeles en regla, y eso les da acceso a algunos derechos básicos.`,
    V: `
el padrón municipal | municipal register of residents | Estoy inscrito en el {padrón municipal}. | I'm on the municipal register.
el certificado de empadronamiento | certificate of registration | Me piden el {certificado de empadronamiento}. | They're asking me for the registration certificate.
el volante de empadronamiento | proof of registration | Te dan el {volante de empadronamiento} en el momento. | They give you proof of registration on the spot.
inscribirse | to register | Hay que {inscribirse} en el ayuntamiento. | You have to register at the town hall.
residir | to reside | {Resido} en Málaga desde marzo. | I've been residing in Málaga since March.
matricular | to enrol | Quiero {matricular} a mi hija en el colegio. | I want to enrol my daughter at school.
la junta de distrito | district council office | Puedes ir a la {junta de distrito}. | You can go to the district office.
la cita previa | (prior) appointment | Sin {cita previa} no te atienden. | Without an appointment they won't see you.
la autorización | authorisation | Una {autorización} firmada por el propietario. | An authorisation signed by the owner.
gratuito / gratuita | free of charge | El trámite es {gratuito}. | The procedure is free of charge.
darse de baja | to deregister, cancel | No hace falta {darse de baja}. | There's no need to deregister.
mudarse | to move house | Cuando te {mudes}, avisa. | When you move, let them know.
los trámites de extranjería | immigration procedures | Lo necesitas para los {trámites de extranjería}. | You need it for immigration procedures.
en regla | in order | Tengo los papeles {en regla}. | My papers are in order.
determinar | to determine | La población {determina} el presupuesto. | The population determines the budget.
`,
    model: `Funcionaria: Buenos días. ¿Tiene cita?
Usuario: Sí, a las diez y cuarto. Vengo a empadronarme.
Funcionaria: Muy bien. ¿Es su primera inscripción en Madrid?
Usuario: Sí. Llegué hace dos semanas.
Funcionaria: Necesito su pasaporte o NIE y el contrato de alquiler.
Usuario: Aquí tiene el NIE. El contrato está a mi nombre.
Funcionaria: Perfecto. Rellene esta hoja de inscripción y fírmela abajo.
Usuario: ¿Tengo que poner el teléfono?
Funcionaria: Es opcional, pero recomendable. Ya está. Aquí tiene su volante de empadronamiento.
Usuario: ¿Ya? ¿No tengo que volver?
Funcionaria: No. Si necesita el certificado más adelante, lo puede descargar por internet.`,
    talk: 'You are a civil servant at a town hall registration desk. The learner wants to register (empadronarse). Ask for documents; one is missing (for example the landlord\'s authorisation) — explain what they need and how to come back.',
    tasks: ['Find your town hall\'s padrón page and check whether you can do it online.', 'Book a cita previa (or check how to get one).', 'Gather your ID and proof of address.', 'Get your volante or certificado de empadronamiento.'],
    gl: `obligatorio = compulsory
sean = whether they are · present subjunctive
ayudas = benefits, grants
demuestre = (that) proves · present subjunctive
escritura = deeds
automáticamente = automatically
residencia = residence
acceso = access
Rellene = fill in (formal command)
recomendable = advisable
descargar = to download` });

  M({ id: 'nie', level: 'B1', title: 'El NIE, el TIE y la temida cita previa',
    blurb: 'Your foreigner identity number, the card, and how not to despair over appointments.',
    x: `Si eres extranjero y vas a vivir, trabajar o hacer casi cualquier trámite en España —abrir una cuenta bancaria, firmar un contrato, comprar un coche—, necesitarás un NIE, el Número de Identidad de Extranjero. Es un número personal que te acompañará siempre, aunque cambie tu situación.

La forma de obtenerlo depende de tu nacionalidad. Los ciudadanos de la Unión Europea que van a residir más de tres meses deben inscribirse en el Registro Central de Extranjeros; reciben un certificado de registro con su NIE. Los ciudadanos de fuera de la Unión con permiso de residencia reciben el TIE, la Tarjeta de Identidad de Extranjero, una tarjeta física con foto y huellas.

Los trámites se hacen en las oficinas de extranjería o en comisarías de la Policía Nacional, siempre con cita previa. Y aquí empieza el problema: en algunas ciudades conseguir cita es tan difícil que se ha convertido en una broma nacional. Las citas se publican en una web oficial y desaparecen en minutos. La gente se levanta de madrugada para intentarlo.

Algunos consejos: entra en la web a primera hora de la mañana; prueba en oficinas de otros municipios de tu provincia; ten todos los documentos preparados antes de la cita, porque si falta uno tendrás que volver a empezar; y desconfía de quien te ofrezca citas a cambio de dinero, porque suele ser un fraude.

Para la cita, lleva el formulario oficial correspondiente relleno, el pasaporte o documento de identidad con fotocopia, el justificante de pago de la tasa (que se paga en el banco o por internet) y los documentos que justifiquen tu situación: contrato de trabajo, matrícula de estudios o seguro médico, según el caso.`,
    V: `
el NIE | foreigner identity number | Para trabajar necesitas el {NIE}. | To work you need your foreigner ID number.
el TIE | foreigner identity card | Recogí mi {TIE} en la comisaría. | I collected my identity card at the police station.
el certificado de registro | EU registration certificate | Los europeos reciben un {certificado de registro}. | Europeans receive a registration certificate.
la oficina de extranjería | immigration office | Fui a la {oficina de extranjería} a las ocho. | I went to the immigration office at eight.
la comisaría | police station | La cita es en la {comisaría} del centro. | The appointment is at the central police station.
las huellas | fingerprints | Te toman las {huellas} para la tarjeta. | They take your fingerprints for the card.
la tasa | fee | Hay que pagar la {tasa} en el banco. | You have to pay the fee at the bank.
el justificante de pago | proof of payment | Lleva el {justificante de pago}. | Bring the proof of payment.
el formulario | form | Rellena el {formulario} oficial. | Fill in the official form.
la fotocopia | photocopy | Una {fotocopia} del pasaporte, por favor. | A photocopy of your passport, please.
el seguro médico | health insurance | Los estudiantes necesitan {seguro médico}. | Students need health insurance.
la matrícula | enrolment | Adjunta la {matrícula} de la universidad. | Attach your university enrolment.
el fraude | fraud, scam | Vender citas es un {fraude}. | Selling appointments is a scam.
a primera hora | first thing (in the morning) | Entra en la web {a primera hora}. | Go on the website first thing.
correspondiente | relevant, corresponding | Lleva el formulario {correspondiente}. | Bring the relevant form.
`,
    model: `Lena: Oye, Pablo, ¿tú cómo conseguiste la cita para el NIE?
Pablo: Uf, me costó tres semanas. Al final la saqué un martes a las ocho de la mañana.
Lena: Yo llevo diez días intentándolo y nada. Siempre sale «no hay citas disponibles».
Pablo: Prueba en otra comisaría de la provincia. A veces en los pueblos hay más huecos.
Lena: ¿Y qué tengo que llevar?
Pablo: El formulario relleno, el pasaporte con una fotocopia, el justificante de la tasa y el contrato de trabajo.
Lena: ¿La tasa se paga allí?
Pablo: No, antes, en el banco o por internet. Si no llevas el justificante, no te atienden.
Lena: Vale. Ah, un compañero me ha dicho que hay gente que vende citas.
Pablo: Ni se te ocurra. Muchas veces es un timo, y además es ilegal.`,
    talk: 'You are a police officer at an immigration appointment (cita de extranjería). The learner has come for their NIE/TIE. Check each document; one is missing or wrong (for example the fee receipt). Explain politely what they need to do.',
    tasks: ['Find out which procedure applies to you (EU certificate or TIE).', 'Download and fill in the official form.', 'Pay the fee and keep the receipt.', 'Get an appointment and attend it.', 'Learn your NIE by heart, letters included.'],
    gl: `acompañará = will accompany
física = physical
desaparecen = disappear
desconfía = distrust (command)
ofrezca = (who) offers · present subjunctive
relleno = filled in
justifiquen = (that) prove · present subjunctive
disponibles = available
Ni se te ocurra = don't even think about it
timo = con, scam` });

  M({ id: 'banco', level: 'B1', title: 'Abrir una cuenta en el banco',
    blurb: 'Accounts, cards, fees and the instant payments everybody uses.',
    x: `Para cobrar tu sueldo, pagar el alquiler o domiciliar los recibos de la luz, en España casi siempre necesitarás una cuenta bancaria española, con un IBAN que empieza por ES. Puedes abrirla en una oficina de un banco tradicional o, cada vez más, desde una aplicación, en un banco digital.

Para abrir una cuenta te pedirán un documento de identidad (pasaporte o NIE) y, a menudo, información sobre tu trabajo o tus ingresos. Las leyes contra el blanqueo de dinero obligan a los bancos a conocer a sus clientes, así que no te sorprendas si te hacen preguntas sobre el origen de tu dinero.

Fíjate bien en las comisiones. Muchos bancos cobran por mantener la cuenta, por la tarjeta o por las transferencias, salvo que cumplas ciertas condiciones, como domiciliar tu nómina o hacer un número mínimo de pagos con tarjeta al mes. Pregunta siempre por la cuenta sin comisiones y lee la letra pequeña.

En España se paga mucho con tarjeta y con el móvil, incluso pequeñas cantidades en el bar. Entre amigos, para pagar una cena a medias o devolver dinero, es muy común usar un sistema de pago instantáneo entre móviles al que están adheridos casi todos los bancos. Basta con tener el número de teléfono de la otra persona.

Un consejo de seguridad: tu banco nunca te pedirá tus claves por SMS, correo o teléfono. Si recibes un mensaje urgente que dice que tu cuenta está bloqueada y te pide que pulses un enlace, es casi seguro un intento de estafa.`,
    V: `
la cuenta bancaria | bank account | Necesito abrir una {cuenta bancaria}. | I need to open a bank account.
domiciliar | to set up a direct debit | Quiero {domiciliar} el recibo del gas. | I want to set up a direct debit for the gas bill.
el recibo | bill | Ha llegado el {recibo} de la luz. | The electricity bill has arrived.
el banco digital | online bank | Abrí la cuenta en un {banco digital}. | I opened the account with an online bank.
el blanqueo de dinero | money laundering | Las leyes contra el {blanqueo de dinero}. | Anti-money-laundering laws.
las comisiones | (bank) fees | Esta cuenta no tiene {comisiones}. | This account has no fees.
la transferencia | bank transfer | Te hago una {transferencia} mañana. | I'll make you a transfer tomorrow.
domiciliar la nómina | to have your salary paid into the account | Sin comisiones si {domicilias la nómina}. | No fees if you have your salary paid in.
la letra pequeña | small print | Lee bien la {letra pequeña}. | Read the small print carefully.
pagar a medias | to split the bill | Pagamos la cena {a medias}. | We split the dinner bill.
el pago instantáneo | instant payment | Te lo mando por {pago instantáneo}. | I'll send it as an instant payment.
estar adherido | to be signed up, a member | Mi banco {está adherido} al sistema. | My bank is signed up to the system.
las claves | passwords, access codes | Nunca des tus {claves} a nadie. | Never give your passwords to anyone.
pulsar un enlace | to click a link | No {pulses} ese {enlace}. | Don't click that link.
el intento de estafa | scam attempt | Ese SMS es un {intento de estafa}. | That text message is a scam attempt.
`,
    model: `Empleado: Buenos días. ¿En qué puedo ayudarle?
Cliente: Hola. Quería abrir una cuenta. Acabo de empezar a trabajar en Madrid.
Empleado: Muy bien. ¿Tiene NIE?
Cliente: Sí, aquí lo tengo, y el pasaporte.
Empleado: Perfecto. Tenemos una cuenta sin comisiones si domicilia la nómina.
Cliente: ¿Y si no la domicilio?
Empleado: Entonces son tres euros al mes de mantenimiento.
Cliente: Vale, la domiciliaré. ¿La tarjeta de débito también es gratis?
Empleado: Sí, con esta cuenta, sí. Le llega a casa en una semana. Mientras tanto, puede usar la tarjeta en el móvil.
Cliente: ¿Y puedo hacer pagos instantáneos con el número de teléfono?
Empleado: Claro. Se activa desde la aplicación en un minuto.`,
    talk: 'You are a bank employee in Spain. The learner wants to open an account. Explain the options and fees, ask about income and the origin of funds (anti-money-laundering), and help them set up the card and instant payments.',
    tasks: ['Compare the fees of two Spanish bank accounts, reading the small print.', 'Open an account (or simulate the process online up to the last step).', 'Set up a direct debit for a bill.', 'Split a bill with a friend using an instant payment.'],
    gl: `cobrar = to receive (pay)
obligan = oblige
salvo que = unless
cumplas = (that) you meet · present subjunctive
cantidades = amounts
Basta con = all you need is
bloqueada = blocked
mantenimiento = maintenance (fee)
débito = debit` });

  M({ id: 'renta', level: 'B1', title: 'Hacienda y la declaración de la renta',
    blurb: 'The yearly income tax return, the draft and the deadlines.',
    x: `Cada primavera, millones de personas en España hacen la declaración de la renta, es decir, la declaración del Impuesto sobre la Renta de las Personas Físicas (IRPF) correspondiente al año anterior. Los españoles suelen llamar «Hacienda» a la Agencia Tributaria, el organismo que gestiona los impuestos.

La campaña de la renta empieza normalmente a principios de abril y termina a finales de junio. No todo el mundo está obligado a presentar la declaración: depende de cuánto y de cómo hayas ganado durante el año. Si tus ingresos son bajos y proceden de un solo pagador, es posible que no tengas que hacerla. Pero a veces conviene hacerla aunque no sea obligatoria, porque puede salirte a devolver.

Durante el año, tu empresa te retiene una parte del sueldo cada mes como pago adelantado del impuesto. En la declaración se calcula lo que realmente te corresponde pagar. Si te han retenido más de la cuenta, Hacienda te devuelve la diferencia; si te han retenido menos, tienes que pagar.

La Agencia Tributaria prepara un borrador con los datos que ya tiene: tu sueldo, tus cuentas, tus retenciones. Puedes consultarlo en su página web o en su aplicación, identificándote con un sistema digital. Es muy importante revisarlo antes de confirmarlo, porque puede faltar información: deducciones por alquiler, por donativos o por tu comunidad autónoma.

Si tienes dudas, puedes pedir ayuda en una oficina de la Agencia Tributaria con cita previa, a un gestor o a una asesoría. Y recuerda: si te mudas a España a mitad de año, tu situación fiscal puede ser especial. Infórmate bien antes de presentar nada.`,
    V: `
Hacienda | the tax office (colloquial) | {Hacienda} me ha devuelto doscientos euros. | The tax office has refunded me two hundred euros.
la Agencia Tributaria | Spanish Tax Agency | Lo explica la web de la {Agencia Tributaria}. | The Tax Agency's website explains it.
la declaración de la renta | income tax return | ¿Ya has hecho la {declaración de la renta}? | Have you done your tax return yet?
la campaña de la renta | tax return season | La {campaña de la renta} empieza en abril. | Tax return season starts in April.
salir a devolver | to result in a refund | Este año me {sale a devolver}. | This year I'm getting a refund.
salir a pagar | to result in a payment | A mi pareja le {sale a pagar}. | My partner has to pay.
el pagador | payer (employer) | Tuve dos {pagadores} el año pasado. | I had two employers last year.
retener | to withhold | La empresa me {retiene} un quince por ciento. | The company withholds fifteen percent.
el pago adelantado | advance payment | Es un {pago adelantado} del impuesto. | It's an advance payment of the tax.
consultar | to check, look up | Puedes {consultar} el borrador en la aplicación. | You can check the draft in the app.
identificarse | to identify oneself | Hay que {identificarse} con un sistema digital. | You have to identify yourself with a digital system.
el donativo | donation | Los {donativos} a ONG desgravan. | Donations to NGOs are tax-deductible.
desgravar | to be tax-deductible | ¿El alquiler {desgrava}? | Is rent tax-deductible?
el gestor / la gestora | agent who handles paperwork | Mi {gestor} me hace la renta. | My agent does my tax return.
la asesoría | consultancy, advisory firm | Pregunta en una {asesoría} fiscal. | Ask at a tax advisory firm.
`,
    model: `Marta: ¿Ya has hecho la renta?
Tom: No, es mi primer año en España. No sé ni por dónde empezar.
Marta: Es más fácil de lo que parece. Entra en la web de la Agencia Tributaria y mira el borrador.
Tom: ¿Hacienda ya tiene mis datos?
Marta: Casi todos: tu sueldo, lo que te han retenido, tu cuenta del banco. Pero revísalo bien.
Tom: ¿Qué puede faltar?
Marta: Deducciones. Por ejemplo, en algunas comunidades hay deducciones por alquiler para jóvenes.
Tom: ¿Y si me sale a pagar?
Marta: Puedes pagar en dos plazos. Pero si solo has tenido un pagador, lo normal es que te salga a devolver.
Tom: ¿Y hasta cuándo tengo?
Marta: Hasta finales de junio. No lo dejes para el último día, que la web se colapsa.`,
    talk: 'You are a friend who has lived in Spain for years. The learner is doing their first Spanish tax return and is nervous. Explain the draft, withholding, refunds and deductions in simple terms, and answer their questions.',
    tasks: ['Find the dates of this year\'s campaña de la renta on the Agencia Tributaria website.', 'Look at your payslip and find the IRPF withholding percentage.', 'Find out whether you are obliged to file a return this year.', 'Check which deductions your comunidad autónoma offers.'],
    gl: `Físicas = natural (persons)
gestiona = manages
obligado = obliged
hayas ganado = (that) you have earned · perfect subjunctive
proceden = come from
conviene = it's advisable
corresponde = is due
más de la cuenta = too much
deducciones = deductions
fiscal = tax
plazos = instalments
se colapsa = crashes` });

  M({ id: 'contrato', level: 'B1', title: 'El contrato de trabajo y la nómina',
    blurb: 'Types of contract, the trial period and how to read your payslip.',
    x: `Desde la reforma laboral de 2021, en España el contrato indefinido es la regla general. Los contratos temporales solo se permiten en casos concretos, como sustituir a un trabajador o atender un aumento puntual de la producción. Existe también el contrato fijo discontinuo, muy común en sectores como el turismo o la agricultura, para trabajos que se repiten cada año en ciertas temporadas.

Al principio de un contrato suele haber un periodo de prueba, durante el cual tanto la empresa como el trabajador pueden terminar la relación laboral sin indemnización. Su duración depende del convenio colectivo, el acuerdo entre sindicatos y empresarios que regula las condiciones de cada sector: salarios mínimos, vacaciones, horarios.

Cada mes recibirás una nómina, el documento que detalla tu salario. Arriba aparecen los datos de la empresa y los tuyos, incluido tu número de afiliación a la Seguridad Social. Después, los devengos: el salario base, los complementos y, en su caso, las pagas extraordinarias. Muchas empresas pagan catorce pagas al año, dos de ellas en verano y en Navidad; otras las prorratean, es decir, las reparten en doce mensualidades.

A continuación vienen las deducciones: tus cotizaciones a la Seguridad Social, que financian las pensiones, el desempleo y la sanidad, y la retención del IRPF. La diferencia entre el total devengado y las deducciones es el líquido a percibir: lo que realmente llega a tu cuenta.

Si algo no te cuadra, pregunta en el departamento de recursos humanos o en un sindicato. Y guarda tus nóminas: te harán falta para alquilar un piso, pedir un préstamo o hacer la declaración de la renta.`,
    V: `
el contrato indefinido | permanent contract | Por fin tengo un {contrato indefinido}. | At last I have a permanent contract.
el fijo discontinuo | seasonal permanent contract | Trabajo como {fijo discontinuo} en un hotel. | I work on a seasonal permanent contract in a hotel.
el periodo de prueba | probation period | El {periodo de prueba} es de dos meses. | The probation period is two months.
la relación laboral | employment relationship | Terminaron la {relación laboral}. | They ended the employment relationship.
el convenio colectivo | collective agreement | Lo dice el {convenio colectivo} de hostelería. | The hospitality collective agreement says so.
el sindicato | trade union | Me he afiliado a un {sindicato}. | I've joined a trade union.
la afiliación | membership, registration | Mi número de {afiliación} a la Seguridad Social. | My Social Security number.
los devengos | earnings (on a payslip) | Los {devengos} incluyen el salario base. | The earnings include basic pay.
el salario base | basic salary | El {salario base} es bajo, pero hay complementos. | The basic salary is low, but there are extras.
los complementos | salary supplements | Cobro {complementos} por turnos de noche. | I get supplements for night shifts.
las pagas extraordinarias | extra salary payments | Tengo dos {pagas extraordinarias} al año. | I get two extra payments a year.
prorratear | to spread out (payments) | Prefiero {prorratear} las pagas. | I prefer to have the extra payments spread out.
las cotizaciones | (social security) contributions | Las {cotizaciones} financian las pensiones. | Contributions fund pensions.
el líquido a percibir | net pay | El {líquido a percibir} es lo que llega a tu cuenta. | Net pay is what reaches your account.
los recursos humanos | human resources | Pregunta en {recursos humanos}. | Ask in human resources.
`,
    model: `Ana: ¿Puedo preguntarte una cosa sobre la nómina? Es la primera que recibo aquí.
Javier: Claro. A ver, déjame verla.
Ana: Mira, el salario base es de mil ochocientos, pero me han ingresado mil cuatrocientos y pico.
Javier: Es normal. Aquí abajo están las deducciones: la cotización a la Seguridad Social y la retención del IRPF.
Ana: ¿Y esto de «prorrata pagas extras»?
Javier: Que tu empresa te reparte las dos pagas extra en doce meses. Por eso no cobrarás nada especial en julio ni en diciembre.
Ana: Ah, vale. ¿Y el periodo de prueba? Mi contrato dice seis meses. ¿No es mucho?
Javier: Depende del convenio y del puesto. Para técnicos titulados a veces es así. Si tienes dudas, pregunta al sindicato.
Ana: Gracias. Aquí todo es nuevo para mí.
Javier: Tranquila, a todos nos ha pasado.`,
    talk: 'You are an experienced colleague. The learner shows you their first Spanish payslip and contract and asks questions. Explain gross and net pay, deductions, extra payments and the probation period clearly, and suggest where to get more help.',
    tasks: ['Identify on your payslip: salario base, cotizaciones, IRPF, líquido a percibir.', 'Find the collective agreement (convenio) for your sector and check your holidays.', 'Check whether your extra payments are paid separately or spread out.', 'Find the nearest office of a trade union, just to know where it is.'],
    gl: `reforma laboral = labour reform
regla = rule
sustituir = to replace
puntual = one-off, specific
temporadas = seasons
indemnización = severance pay
regula = regulates
detalla = details
mensualidades = monthly payments
financian = fund
desempleo = unemployment
devengado = earned
cuadra = adds up
préstamo = loan
ingresado = paid in
y pico = and a bit
titulados = qualified (graduates)` });

  M({ id: 'colegio', level: 'B1', title: 'El colegio y el sistema educativo',
    blurb: 'From infantil to bachillerato: stages, types of school and enrolment.',
    x: `El sistema educativo español se divide en varias etapas. La Educación Infantil va de los cero a los seis años; el segundo ciclo, de los tres a los seis, no es obligatorio, pero es gratuito en los centros públicos y casi todos los niños lo cursan. La escolarización obligatoria empieza a los seis años con la Educación Primaria, que dura seis cursos, y continúa con la ESO, la Educación Secundaria Obligatoria, de los doce a los dieciséis años.

Después, los estudiantes pueden elegir entre el Bachillerato, de dos años, que prepara para la universidad, o la Formación Profesional, con ciclos de grado medio y superior orientados a un oficio. Para entrar en la universidad, la mayoría de los alumnos hacen una prueba de acceso al final del Bachillerato, conocida popularmente como «la selectividad».

Hay tres tipos de centros. Los públicos dependen de la comunidad autónoma y son gratuitos. Los concertados son de titularidad privada, a menudo religiosa, pero están financiados en gran parte con dinero público. Los privados se financian con las cuotas de las familias.

Para matricular a un niño en un centro público o concertado hay que participar en el proceso de admisión, que suele abrirse en primavera. Las familias eligen varios colegios por orden de preferencia, y si hay más solicitudes que plazas, se aplica un baremo con puntos por la cercanía del domicilio, por tener hermanos en el centro o por la renta familiar, entre otros criterios. Por eso es importante estar empadronado.

En algunas comunidades, la enseñanza se imparte en dos lenguas: castellano y la lengua cooficial, como el catalán, el gallego o el euskera. Infórmate bien si te mudas con hijos a esas comunidades.`,
    V: `
la Educación Infantil | pre-school education | Mi hija empieza {Educación Infantil} en septiembre. | My daughter starts pre-school in September.
la Educación Primaria | primary education | La {Educación Primaria} dura seis cursos. | Primary education lasts six years.
la ESO | compulsory secondary education | Mi hijo está en segundo de la {ESO}. | My son is in the second year of secondary school.
el Bachillerato | upper secondary (pre-university) | Hace el {Bachillerato} de ciencias. | She's doing the science baccalaureate.
la Formación Profesional | vocational training | Estudia {Formación Profesional} de electricidad. | He's doing vocational training in electricity.
la selectividad | university entrance exam (colloquial) | Mañana empieza la {selectividad}. | The university entrance exam starts tomorrow.
el colegio concertado | state-funded private school | Va a un {colegio concertado} religioso. | She goes to a state-funded religious school.
el centro público | state school | Prefiero un {centro público} cerca de casa. | I prefer a state school near home.
el proceso de admisión | admissions process | El {proceso de admisión} abre en marzo. | The admissions process opens in March.
el orden de preferencia | order of preference | Pon los colegios por {orden de preferencia}. | List the schools in order of preference.
el baremo | points system, scale | Con el {baremo} tenemos doce puntos. | With the points system we have twelve points.
la cercanía | proximity | La {cercanía} del domicilio da puntos. | Living nearby gives points.
la escolarización | schooling | La {escolarización} es obligatoria desde los seis años. | Schooling is compulsory from age six.
el ciclo formativo | vocational course | Hizo un {ciclo formativo} de grado superior. | He did a higher vocational course.
la tutoría | meeting with the class tutor | Tenemos {tutoría} con la profesora el jueves. | We have a meeting with the teacher on Thursday.
`,
    model: `Madre: Hola, buenas tardes. Acabamos de llegar a Zaragoza y queremos matricular a nuestro hijo.
Secretaria: Buenas tardes. ¿Qué edad tiene el niño?
Madre: Ocho años. En Holanda estaba en el cuarto año de primaria.
Secretaria: Aquí le correspondería tercero de Primaria. ¿Están empadronados en el barrio?
Madre: Sí, desde la semana pasada.
Secretaria: Perfecto. Como estamos a mitad de curso, no hay proceso de admisión: se hace una solicitud fuera de plazo en la comisión de escolarización.
Madre: ¿Y habrá plaza en este colegio?
Secretaria: Ahora mismo, en tercero, sí nos queda alguna. Necesito el libro de familia o los pasaportes, el certificado de empadronamiento y la cartilla de vacunación.
Madre: ¿Tienen apoyo para niños que no hablan bien español?
Secretaria: Sí, tenemos un programa de acogida y refuerzo de lengua. La tutora les explicará todo.`,
    talk: 'You are a school secretary in a Spanish state school. A parent who has just arrived from abroad wants to enrol a child mid-year. Ask about age, previous schooling, padrón and documents, and explain support for children who are learning Spanish.',
    tasks: ['Find your nearest state and concertado schools and their websites.', 'Find out the dates of the admissions process in your region.', 'Calculate your points under your region\'s baremo.', 'Ask a parent at the school gate one question about the school, in Spanish.'],
    gl: `etapas = stages
ciclo = cycle, stage
cursan = attend
cursos = school years
oficio = trade
titularidad = ownership
financiados = funded
cuotas = fees
solicitudes = applications
plazas = places
criterios = criteria
imparte = is taught
cooficial = co-official
correspondería = would correspond · conditional
fuera de plazo = after the deadline
libro de familia = family book (official record)
acogida = welcome, reception
refuerzo = extra support` });

  M({ id: 'trato', level: 'A2', title: '¿Tú o usted? Formas de tratamiento',
    blurb: 'When to use tú, when usted, and other small rules of Spanish politeness.',
    x: `En España se tutea mucho más que en otros países de habla hispana. Entre jóvenes, compañeros de trabajo, vecinos de edad parecida e incluso en muchas tiendas y bares, lo normal es hablar de tú desde el primer momento. Si hablas de usted a alguien de tu edad en un ambiente informal, puede parecer frío o distante.

Sin embargo, el usted sigue vivo. Se usa con personas mayores que no conoces, en situaciones formales, con autoridades, en algunos comercios elegantes, en el médico o en una entrevista de trabajo, al menos al principio. Una regla práctica: si dudas, empieza con usted y espera a que la otra persona te diga «puedes tutearme» o «háblame de tú».

Al escribir correos de trabajo, el primer mensaje suele ser más formal: «Estimado señor García», «Estimada Laura». Pero en cuanto la otra persona responde con un tono más cercano, se suele pasar al tú.

Otras normas de cortesía también sorprenden a los extranjeros. Al saludar a alguien en un contexto informal, es habitual dar dos besos, uno en cada mejilla, sobre todo entre mujeres y entre hombres y mujeres. Entre hombres, lo normal es darse la mano o un abrazo si hay confianza. En el trabajo, la primera vez, un apretón de manos suele ser lo más seguro.

Y una curiosidad: en España se dice «por favor» y «gracias» menos que en otros idiomas, sobre todo en bares y tiendas. No es mala educación: el tono amable y un «¿me pones un café?» bastan. La cortesía está en la entonación, más que en las fórmulas.`,
    V: `
tutear | to address as tú | Puedes {tutearme}, no soy tan mayor. | You can use tú with me, I'm not that old.
hablar de usted | to address as usted | Al abuelo de mi novia le {hablo de usted}. | I use usted with my girlfriend's grandfather.
de habla hispana | Spanish-speaking | En los países {de habla hispana} cambia mucho. | It varies a lot across Spanish-speaking countries.
distante | distant | Usar usted puede sonar {distante}. | Using usted can sound distant.
las autoridades | authorities | Con las {autoridades}, mejor de usted. | With the authorities, better to use usted.
háblame de tú | use tú with me | Por favor, {háblame de tú}. | Please, use tú with me.
la cortesía | politeness | La {cortesía} está en el tono. | Politeness is in the tone.
dar dos besos | to kiss on both cheeks | En España se suelen {dar dos besos}. | In Spain people usually kiss on both cheeks.
la mejilla | cheek | Un beso en cada {mejilla}. | A kiss on each cheek.
darse la mano | to shake hands | Los compañeros se {dieron la mano}. | The colleagues shook hands.
el apretón de manos | handshake | Un {apretón de manos} firme. | A firm handshake.
la confianza | familiarity, trust | Con {confianza}, un abrazo. | If you know each other well, a hug.
la mala educación | rudeness | No es {mala educación}, es costumbre. | It isn't rude, it's custom.
la entonación | intonation | Cuida la {entonación} cuando pides algo. | Watch your intonation when you ask for something.
cercano / cercana | friendly, close | Su tono es muy {cercano}. | Her tone is very friendly.
`,
    model: `Lotte: Buenos días, señora. ¿Usted vive en el tercero?
Doña Rosario: Sí, hija, sí. Pero no me llames señora, que me haces mayor. Llámame Rosario.
Lotte: Vale… Rosario. ¿Y le puedo hablar de tú?
Doña Rosario: ¡Claro! Aquí en el edificio nos tuteamos todos. Bueno, menos al presidente de la comunidad, que es muy serio.
Lotte: En Holanda también nos tuteamos mucho, pero con los vecinos mayores no sé.
Doña Rosario: Mira, una regla sencilla: si no sabes, empieza con usted. Ya te dirá la otra persona.
Lotte: ¿Y los dos besos? Me lío siempre: no sé por qué lado empezar.
Doña Rosario: Por la derecha. Bueno, por tu derecha… ¡Ay, no sé! Tú acércate y ya está.`,
    talk: 'Play several characters, one after another: an elderly neighbour, a young colleague and a job interviewer. The learner has to choose tú or usted with each and greet appropriately. Comment on their choices at the end.',
    tasks: ['Notice in a shop or bar whether staff use tú or usted with you.', 'Greet a neighbour with the appropriate formula.', 'In a formal email, use usted, then switch to tú when the other person does.', 'Ask someone «¿te puedo tutear?» or «¿le puedo tutear?».'],
    gl: `se tutea = people use tú
parecida = similar
comercios = shops
dudas = you're unsure
correos = emails
contexto = context
fórmulas = formulas, set phrases
me lío = I get confused
acércate = come closer (command)` });
})();
