/* Practice items · C1, written for the Phase 3 stages (4th argument = the stage they belong to) */
(function () {
  const P = CAMINO.prac;

  P('C1', 'transform', 'Pasiva e impersonalidad', 'c1-pasiva')(`
Pasiva con ser | La alcaldesa inauguró el puente ayer. | El puente fue inaugurado ayer por la alcaldesa.|El puente fue inaugurado por la alcaldesa ayer.
Pasiva con ser | La policía detuvo a tres sospechosos. | Tres sospechosos fueron detenidos por la policía.
Pasiva refleja | Alquilan habitaciones para estudiantes. | Se alquilan habitaciones para estudiantes.
Pasiva refleja | Han publicado los resultados. | Se han publicado los resultados.
Se impersonal | Buscan a los responsables del incendio. | Se busca a los responsables del incendio.
Se impersonal | La gente vive muy bien en este pueblo. | En este pueblo se vive muy bien.|Se vive muy bien en este pueblo.
Uno impersonal | Nunca sabes lo que puede pasar. | Uno nunca sabe lo que puede pasar.
Se accidental | Olvidé las llaves sin querer. | Se me olvidaron las llaves.
Estar + participio (resultado) | Cerraron la tienda a las ocho; cuando llegué… | Cuando llegué, la tienda estaba cerrada.
Se calcula que… | Calculan que asistieron mil personas. | Se calcula que asistieron mil personas.
`);
  P('C1', 'errors', 'Pasiva e impersonalidad', 'c1-pasiva')(`
Se venden piso en el centro. | Se venden pisos en el centro. | Pasiva refleja: the verb agrees with the plural noun.
Se buscan a los autores del robo. | Se busca a los autores del robo. | With people (a + persona), se is impersonal and the verb stays singular.
El museo fue inaugurada por el rey. | El museo fue inaugurado por el rey. | The participle agrees with the subject: el museo → inaugurado.
Se desconoce las causas del accidente. | Se desconocen las causas del accidente. | Pasiva refleja: las causas → desconocen.
Se me olvidó las gafas en casa. | Se me olvidaron las gafas en casa. | Accidental se: the verb agrees with the thing (las gafas).
Se prevé lluvias para mañana. | Se prevén lluvias para mañana. | Lluvias is plural: se prevén.
`);
  P('C1', 'transform', 'Relativas complejas', 'c1-relativos')(`
Une con «cuyo» | Conozco a una autora. Sus novelas son famosas. | Conozco a una autora cuyas novelas son famosas.
Une con «cuyo» | Es un pueblo. Sus calles son estrechas. | Es un pueblo cuyas calles son estrechas.
Une con «lo cual» | Llegó tarde. Eso nos molestó a todos. | Llegó tarde, lo cual nos molestó a todos.|Llegó tarde, lo que nos molestó a todos.
Preposición + relativo | Trabajo para esta empresa desde 2019. → Esta es la empresa… | Esta es la empresa para la que trabajo desde 2019.|Esta es la empresa para la cual trabajo desde 2019.
Preposición + relativo | Confío en esta persona. → Es la única persona… | Es la única persona en quien confío.|Es la única persona en la que confío.
Explicativa | Mi hermana vive en Berlín. Viene en Navidad. | Mi hermana, que vive en Berlín, viene en Navidad.|Mi hermana, quien vive en Berlín, viene en Navidad.
Antecedente desconocido | Busco a alguien. Esa persona tiene que hablar ruso. | Busco a alguien que hable ruso.
Antecedente inexistente | Nadie entiende estas instrucciones. → No hay nadie… | No hay nadie que entienda estas instrucciones.
`);
  P('C1', 'errors', 'Relativas complejas', 'c1-relativos')(`
Conozco a un autor cuyo novelas leo siempre. | Conozco a un autor cuyas novelas leo siempre. | Cuyo agrees with the thing possessed: novelas → cuyas.
Busco a alguien que sabe chino. | Busco a alguien que sepa chino. | Unknown antecedent: subjunctive.
No hay nadie que lo entiende. | No hay nadie que lo entienda. | Non-existent antecedent: subjunctive.
Es la empresa en que trabajo para. | Es la empresa para la que trabajo. | The preposition goes before the relative, never at the end.
Llegó tarde, el cual nos molestó. | Llegó tarde, lo cual nos molestó. | A whole idea is picked up by neuter lo cual.
La chica quien vive enfrente es médica. | La chica que vive enfrente es médica. | Defining clause without preposition: que, not quien.
`);
  P('C1', 'transform', 'Discurso referido', 'c1-discurso')(`
Afirmó que… | «No sé nada del asunto», dijo el ministro. | El ministro afirmó que no sabía nada del asunto.
Prometió que… | «Lo terminaré mañana», dijo Ana. | Ana prometió que lo terminaría al día siguiente.
Me pidió que… | «Cierra la ventana», me dijo. | Me pidió que cerrara la ventana.|Me pidió que cerrase la ventana.
Negó… (infinitivo) | «Yo no lo hice», dijo él. | Negó haberlo hecho.
Reconoció que… | «Me equivoqué», admitió la directora. | La directora reconoció que se había equivocado.
Me preguntó si… | «¿Has estado en México?», me preguntó. | Me preguntó si había estado en México.
Nos advirtió que… | «No salgáis de noche», nos dijo. | Nos advirtió que no saliéramos de noche.|Nos advirtió que no saliésemos de noche.
Sugirió que… | «¿Por qué no lo dejamos para mañana?», dijo. | Sugirió que lo dejáramos para el día siguiente.|Sugirió que lo dejásemos para el día siguiente.
`);
  P('C1', 'errors', 'Discurso referido', 'c1-discurso')(`
Me dijo que vendrá al día siguiente. | Me dijo que vendría al día siguiente. | Future → conditional after a past reporting verb.
Me pidió que le ayudo con la mudanza. | Me pidió que le ayudara con la mudanza. | Pedir que + subjunctive, shifted to the past.
Negó de haberlo visto. | Negó haberlo visto. | Negar takes the infinitive directly.
Insistió que lo pagaría él. | Insistió en que lo pagaría él. | Insistir en que.
Se quejó que nadie la escuchaba. | Se quejó de que nadie la escuchaba. | Quejarse de que.
Dijo que aquí hacía mucho frío. | Dijo que allí hacía mucho frío. | Shift the place: aquí → allí.
`);
  P('C1', 'wordbuild', 'Nominalización', 'c1-nominal')(`
subir (los precios) → el sustantivo | la subida|subida | rise
envejecer → el sustantivo | el envejecimiento|envejecimiento | ageing
rehabilitar → el sustantivo | la rehabilitación|rehabilitación | restoration
sostenible → el sustantivo | la sostenibilidad|sostenibilidad | sustainability
implantar → el sustantivo | la implantación|implantación | introduction, rollout
repuntar → el sustantivo | el repunte|repunte | upturn
abandonar (los estudios) → el sustantivo | el abandono|abandono | dropout
retroceder → el sustantivo | el retroceso|retroceso | decline
desigual → el sustantivo | la desigualdad|desigualdad | inequality
evaluar → el sustantivo | la evaluación|evaluación | assessment
incrementar → el sustantivo | el incremento|incremento | increase
agotar → el sustantivo | el agotamiento|agotamiento | depletion
`);
  P('C1', 'transform', 'Nominalización', 'c1-nominal')(`
Nominaliza el sujeto | Los precios subieron y hubo protestas. | La subida de los precios provocó protestas.|La subida de precios provocó protestas.
Fórmula impersonal | Yo observo una mejora en los datos. | Se observa una mejora en los datos.
Fórmula impersonal | Quiero señalar que la muestra es pequeña. | Cabe señalar que la muestra es pequeña.
Nominaliza | La población envejece, y eso plantea retos. | El envejecimiento de la población plantea retos.
`);
  P('C1', 'register', 'Reuniones y negociación', 'c1-trabajo')(`
«Empecemos.» (más cortés) | Si os parece, empezamos | Venga, empezad ya;A ver, empezad | Shall we start?
«No estoy de acuerdo.» (suavizado) | Entiendo tu postura, pero no acabo de verlo claro | Eso es una tontería;Te equivocas totalmente | Polite disagreement
«Hazlo para el viernes.» (suavizado) | Lo ideal sería que estuviera listo el viernes | Lo quiero el viernes y punto;Ni se te ocurra retrasarlo | Softened request
«Cállate, que hablo yo.» (cortés) | Si me permites, termino la idea | Calla un momento;Déjame hablar, hombre | Holding the floor politely
«Cambiemos de proveedor.» (propuesta) | ¿Y si cambiáramos de proveedor? | Cambiamos de proveedor ya;O cambiamos o me voy | Making a proposal
«Si no firmáis hoy, se acaba la oferta.» (formal) | Firmen hoy; de lo contrario, perderán la oferta | Firmad o nada;Si no firmáis, allá vosotros | Formal warning
`);
  P('C1', 'colloc', 'Negocios y negociación', 'c1-trabajo')(`
___ un acuerdo | llegar a|alcanzar | hacer;tomar | to reach an agreement
___ una reunión | convocar | llamar;hacer | to call a meeting
___ acta | levantar | escribir;tomar | to take the minutes
___ concesiones | hacer | dar;poner | to make concessions
___ un trato | cerrar | hacer;terminar | to close a deal
___ el plazo | cumplir | hacer;llegar | to meet the deadline
`);
  P('C1', 'transform', 'Condiciones avanzadas', 'c1-condicional')(`
De + infinitivo | Si seguimos así, cerraremos. | De seguir así, cerraremos.
De + infinitivo compuesto | Si lo hubiera sabido, no habría venido. | De haberlo sabido, no habría venido.
Como + subjuntivo (amenaza) | Si no me llamas, me enfado. | Como no me llames, me enfado.
A poco que | Si te esfuerzas un poco, aprobarás. | A poco que te esfuerces, aprobarás.
Condicional mixta | No estudié Medicina, por eso no soy médica. | Si hubiera estudiado Medicina, ahora sería médica.|Si hubiese estudiado Medicina, ahora sería médica.
Condicional mixta | No soy valiente, por eso no se lo dije. | Si fuera valiente, se lo habría dicho.|Si fuese valiente, se lo habría dicho.
Gerundio | Si sales ahora, llegarás a tiempo. | Saliendo ahora, llegarás a tiempo.
En caso de que | Si pierdes el tren, llámame. | En caso de que pierdas el tren, llámame.
`);
  P('C1', 'errors', 'Condiciones avanzadas', 'c1-condicional')(`
Si lo habría sabido, te lo habría dicho. | Si lo hubiera sabido, te lo habría dicho. | Si never takes the conditional: use the pluperfect subjunctive.
Como no vienes, me voy sin ti. (amenaza) | Como no vengas, me voy sin ti. | Conditional como takes the subjunctive.
De haber lo sabido, no habría venido. | De haberlo sabido, no habría venido. | The pronoun attaches to the infinitive: haberlo.
A poco que estudias, aprobarás. | A poco que estudies, aprobarás. | A poco que + subjunctive.
En caso de que llueve, nos quedamos en casa. | En caso de que llueva, nos quedamos en casa. | En caso de que + subjunctive.
`);
  P('C1', 'colloc', 'Economía', 'c1-economia')(`
___ los tipos de interés | subir|bajar | poner;hacer | to raise / lower interest rates
la inflación se ___ | dispara|modera | corre;salta | inflation soars / eases
___ en negro | cobrar | estar;tener | to be paid cash in hand
___ a la Seguridad Social | cotizar | cobrar;ahorrar | to pay social security
la burbuja ___ | estalló | se partió;se cayó | the bubble burst
___ una subvención | conceder|otorgar | hacer;poner | to grant a subsidy
`);
  P('C1', 'colloc', 'Derecho y administración', 'c1-derecho')(`
___ una demanda | presentar|interponer | hacer;dar | to file a lawsuit
___ recurso | presentar|interponer | hacer;dar | to lodge an appeal
___ un contrato | incumplir | fallar;perder | to breach a contract
___ un derecho | vulnerar | herir;dañar | to violate a right
___ un veredicto | emitir | soltar;hacer | to return a verdict
entrar en ___ | vigor | fuerza;marcha | to come into force
`);
  P('C1', 'contrast', 'Medios: afirmar o negar', 'c1-medios')(`
Es cierto que el vídeo [es/sea] falso. | es | Affirming truth: indicative.
No es cierto que el gobierno [ha/haya] prohibido las manifestaciones. | haya | Denying truth: subjunctive.
Está comprobado que la foto [está/esté] manipulada. | está | Está comprobado que + indicative.
No hay pruebas de que el dato [es/sea] falso. | sea | No hay pruebas de que + subjunctive.
Nada indica que la noticia [es/sea] cierta. | sea | Nada indica que + subjunctive.
Según la oposición, el ministro [habría/hubiera] recibido dinero. | habría | Journalistic conditional for unconfirmed claims.
`);
  P('C1', 'transform', 'Urgencia y propuestas', 'c1-medioambiente')(`
Es imprescindible que… | Tenemos que reducir las emisiones. | Es imprescindible que reduzcamos las emisiones.
Antes de que… | Hay que actuar ya, porque después será tarde. | Hay que actuar antes de que sea tarde.
Me preocupa que… | Los embalses están muy bajos. | Me preocupa que los embalses estén muy bajos.
Era urgente que… | No tomaron medidas a tiempo. | Era urgente que se tomaran medidas.|Era urgente que tomaran medidas.
Abogar por | Los expertos defienden una transición más rápida. | Los expertos abogan por una transición más rápida.
`);
  P('C1', 'register', 'Coloquial y neutro', 'c1-04')(`
«No tengo pasta.» (neutro) | No tengo dinero | No tengo pan;No tengo tiempo | I've got no money
«Estoy hecho polvo.» (neutro) | Estoy agotado | Estoy sucio;Estoy roto | I'm exhausted
«Ese bar es muy cutre.» (neutro) | Ese bar es muy descuidado | Ese bar es muy pequeño;Ese bar es muy caro | shabby
«Mañana curro.» (neutro) | Mañana trabajo | Mañana corro;Mañana descanso | I'm working tomorrow
«El examen fue pan comido.» (neutro) | El examen fue muy fácil | El examen fue muy largo;El examen fue en la cafetería | very easy
«Mola mucho tu chaqueta.» (neutro) | Me gusta mucho tu chaqueta | Tu chaqueta es muy cara;Tu chaqueta es muy vieja | I really like it
«Me piro.» (neutro) | Me voy | Me caigo;Me enfado | I'm off
«Tiene un morro…» (neutro) | Es muy descarado | Es muy feo;Es muy alto | he's very cheeky
`);
  P('C1', 'errors', 'Tradiciones y cultura', 'c1-cultura')(`
La fiesta se remonta del siglo XVI. | La fiesta se remonta al siglo XVI. | Remontarse a.
El conjunto fue declarada Patrimonio de la Humanidad. | El conjunto fue declarado Patrimonio de la Humanidad. | El conjunto → declarado.
Por muy arraigada que está, la tradición puede cambiar. | Por muy arraigada que esté, la tradición puede cambiar. | Por muy… que + subjunctive.
El santo en cuya honor se celebra la fiesta es San Roque. | El santo en cuyo honor se celebra la fiesta es San Roque. | Cuyo agrees with honor (masculine).
La sardana consiste de un baile en círculo. | La sardana consiste en un baile en círculo. | Consistir en.
`);
  P('C1', 'colloc', 'Salud y ciencia', 'c1-salud')(`
___ una enfermedad | diagnosticar | descubrir;hacer | to diagnose an illness
___ al especialista | derivar | pasar;cambiar | to refer to the specialist
___ un ensayo clínico | realizar|llevar a cabo | jugar;tener | to carry out a clinical trial
___ la dosis recomendada | superar|exceder | subir;crecer | to exceed the recommended dose
___ una crisis | desencadenar | encender;abrir | to trigger an attack
`);
})();
