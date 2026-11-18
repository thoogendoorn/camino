/* Practice items · A1 */
(function () {
  const P = CAMINO.prac;

  P('A1', 'transform', 'Ser, estar y tener')(`
Plural | Yo soy estudiante. | Nosotros somos estudiantes.
Plural | Él es de Madrid. | Ellos son de Madrid.
Plural | Tú estás cansado. | Vosotros estáis cansados.
Singular | Ellas tienen un perro. | Ella tiene un perro.
Singular | Nosotras somos profesoras. | Yo soy profesora.
Pregunta (tú) | Tienes hermanos. | ¿Tienes hermanos?
Negativa | Soy de Italia. | No soy de Italia.
Negativa | Tengo coche. | No tengo coche.
Usted | ¿De dónde eres? | ¿De dónde es usted?
Usted | ¿Cómo te llamas? | ¿Cómo se llama usted?
`);
  P('A1', 'transform', 'Presente regular')(`
Nosotros | Yo hablo español. | Nosotros hablamos español.
Ella | Yo vivo en Utrecht. | Ella vive en Utrecht.
Vosotros | Tú comes mucho. | Vosotros coméis mucho.
Ellos | Yo trabajo en un banco. | Ellos trabajan en un banco.
Yo | Ella escribe correos. | Yo escribo correos.
Tú | Nosotros leemos el periódico. | Tú lees el periódico.
Femenino | Mi hermano es alto y simpático. | Mi hermana es alta y simpática.
Plural | El libro es interesante. | Los libros son interesantes.
Plural | La casa es grande. | Las casas son grandes.
Plural | Hay un bar en la plaza. | Hay dos bares en la plaza.
`);
  P('A1', 'errors', 'Ser, estar y tener')(`
Yo soy 25 años. | Yo tengo 25 años. | Age uses tener.
Mi madre es en casa. | Mi madre está en casa. | Location uses estar.
Ella está profesora. | Ella es profesora. | Professions use ser.
Tengo frío y soy cansado. | Tengo frío y estoy cansado. | Temporary states use estar.
Nosotros somos de Holanda y estamos holandeses. | Nosotros somos de Holanda y somos holandeses. | Nationality uses ser.
Madrid está la capital de España. | Madrid es la capital de España. | Identity and definition use ser.
¿Cuántos años eres? | ¿Cuántos años tienes? | Age uses tener.
Yo tengo hambre y tengo sed y soy bien. | Yo tengo hambre y tengo sed y estoy bien. | Bien goes with estar.
`);
  P('A1', 'errors', 'Género y número')(`
La problema es difícil. | El problema es difícil. | Problema is masculine despite the -a.
Tengo un hermana. | Tengo una hermana. | Hermana is feminine: una.
Los casas son bonitas. | Las casas son bonitas. | Casas is feminine plural: las.
El agua está frío. | El agua está fría. | Agua is feminine (el only before stressed a-).
Mis amiga son simpáticas. | Mis amigas son simpáticas. | Noun must be plural too.
Es una ciudad muy bonito. | Es una ciudad muy bonita. | Adjectives agree: ciudad is feminine.
Tengo dos perro. | Tengo dos perros. | Plural after dos.
La mano derecho. | La mano derecha. | Mano is feminine.
El día es largo y la noche es largo. | El día es largo y la noche es larga. | Noche is feminine.
`);
  P('A1', 'errors', 'Presente regular')(`
Yo vivo en Madrid y trabajar en un hotel. | Yo vivo en Madrid y trabajo en un hotel. | Conjugate the second verb too.
Nosotros comemos a las dos y cenan a las nueve. | Nosotros comemos a las dos y cenamos a las nueve. | Same subject, same person.
¿Tú hablo inglés? | ¿Tú hablas inglés? | Tú form ends in -as.
Mi hermano estudian medicina. | Mi hermano estudia medicina. | One person: third person singular.
Me gusta los perros. | Me gustan los perros. | Gustar agrees with what is liked.
Me gustan bailar. | Me gusta bailar. | Infinitives take singular gusta.
A ella le gusto el chocolate. | A ella le gusta el chocolate. | Le gusta + singular noun.
Yo no gusta el café. | A mí no me gusta el café. | Gustar needs me, te, le…
`);
  P('A1', 'contrast', 'Ser o estar')(`
Mi casa [es/está] cerca del centro. | está | Location: estar.
Mi casa [es/está] muy grande. | es | Permanent description: ser.
Hoy [soy/estoy] muy cansada. | estoy | Temporary state: estar.
Pablo [es/está] médico. | es | Profession: ser.
La sopa [es/está] fría, ¿la calientas? | está | Current state of the soup: estar.
Lisboa [es/está] en Portugal. | está | Location of a place: estar.
La reunión [es/está] a las diez. | es | Time of an event: ser.
¿Cómo [eres/estás]? Bien, gracias. | estás | Asking how someone feels: estar.
¿Cómo [eres/estás]? Alto y moreno. | eres | Asking what someone is like: ser.
[Es/Está] la una y media. | Es | Telling the time: ser.
`);
  P('A1', 'contrast', 'Hay o está')(`
[Hay/Está] un supermercado en mi calle. | Hay | Existence of something new or indefinite: hay.
El supermercado [hay/está] en mi calle. | está | Location of something specific: estar.
¿Dónde [hay/está] el baño? | está | Specific thing (el baño): estar.
¿[Hay/Está] una farmacia por aquí? | Hay | Indefinite (una farmacia): hay.
En la mesa [hay/están] tres libros. | hay | Numbers and quantities: hay.
Mis libros [hay/están] en la mesa. | están | Specific things (mis libros): estar.
`);
  P('A1', 'contrast', 'Muy o mucho')(`
Hace [muy/mucho] frío. | mucho | Before a noun (frío): mucho.
Estoy [muy/mucho] cansado. | muy | Before an adjective: muy.
Trabajas [muy/mucho]. | mucho | After a verb: mucho.
Habla [muy/mucho] bien español. | muy | Before an adverb: muy.
Tengo [muchos/muy] amigos. | muchos | Before a noun: mucho agrees.
Es una ciudad [muy/mucha] bonita. | muy | Before an adjective: muy never changes.
`);
  P('A1', 'contrast', 'Qué o cuál')(`
¿[Qué/Cuál] es tu número de teléfono? | Cuál | Before ser asking for one item: cuál.
¿[Qué/Cuál] quieres beber? | Qué | Open question about things: qué.
¿[Qué/Cuál] es la capital de Perú? | Cuál | Identifying one from many: cuál.
¿[Qué/Cuál] es la paella? Es un plato de arroz. | Qué | Asking for a definition: qué es.
¿[Qué/Cuál] hora es? | Qué | Before a noun: qué.
`);
  P('A1', 'colloc', 'Expresiones con tener y hacer')(`
___ hambre | tener | hacer;estar | to be hungry
___ calor | hacer | estar;ser | to be hot (weather)
___ frío (yo) | tener | hacer;estar | to be cold (person)
___ sol | hacer | estar;tener | to be sunny
___ sueño | tener | estar;hacer | to be sleepy
___ los deberes | hacer | tener;dar | to do homework
___ una pregunta | hacer | decir;dar | to ask a question
___ un paseo | dar | hacer;tener | to go for a walk
___ prisa | tener | hacer;estar | to be in a hurry
___ la compra | hacer | tener;comprar | to do the food shopping
___ la cama | hacer | tener;poner | to make the bed
___ la mesa | poner | hacer;dar | to set the table
___ una ducha | darse | hacerse;tenerse | to have a shower
___ miedo | tener | hacer;ser | to be afraid
___ razón | tener | hacer;dar | to be right
___ 20 años | tener | ser;hacer | to be 20 years old
___ deporte | hacer | jugar;tener | to do sport
___ al fútbol | jugar | hacer;tocar | to play football
___ la guitarra | tocar | jugar;hacer | to play the guitar
___ una foto | hacer | tener;tocar | to take a photo
`);
  P('A1', 'wordbuild', 'Familias de palabras')(`
cocinar → la persona | el cocinero|la cocinera|cocinero|cocinera | cook
trabajar → el sustantivo | el trabajo|trabajo | work, job
estudiar → la persona | el estudiante|la estudiante|estudiante | student
vivir → el lugar | la vivienda|vivienda | dwelling, home
comer → el sustantivo | la comida|comida | food, lunch
beber → el sustantivo | la bebida|bebida | drink
viajar → el sustantivo | el viaje|viaje | trip
viajar → la persona | el viajero|la viajera|viajero|viajera | traveller
pintar → la persona | el pintor|la pintora|pintor|pintora | painter
cantar → la persona | el cantante|la cantante|cantante | singer
bailar → el sustantivo | el baile|baile | dance
jugar → el sustantivo | el juego|juego | game
llamar → el sustantivo | la llamada|llamada | call
pagar → el sustantivo | el pago|pago | payment
salir → el sustantivo | la salida|salida | exit, departure
llegar → el sustantivo | la llegada|llegada | arrival
caro → lo contrario | barato | cheap
grande → lo contrario | pequeño | small
abrir → lo contrario | cerrar | to close
empezar → lo contrario | terminar|acabar | to finish
`);
})();
