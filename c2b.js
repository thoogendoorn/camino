/* C2 · Maestría (part 2) */
(function () {
  const R = RES, U = CAMINO.unit('C2'), L = window.CAMINO_LEGACY || {};
  const S = (id, o) => U(Object.assign({}, L[id] || {}, { id }, o));

  S('c2-03', {
    title: 'Variedades del español',
    V: `
el voseo | use of «vos» for «tú» | El {voseo} es general en Argentina. | Voseo is universal in Argentina.
el seseo | pronouncing z/c as s | El {seseo} es típico de Canarias. | Seseo is typical of the Canary Islands.
la distinción | distinguishing s and z sounds | La {distinción} entre «casa» y «caza» es propia del centro y norte de España. | Distinguishing «casa» and «caza» is typical of central and northern Spain.
el ceceo | pronouncing s as z | El {ceceo} se oye en partes de Andalucía. | Ceceo is heard in parts of Andalusia.
el yeísmo | merging ll and y | El {yeísmo} es mayoritario. | Yeísmo is the majority pronunciation.
el leísmo | using «le» for masculine direct objects | «Le vi ayer» es un caso de {leísmo}. | «Le vi ayer» is a case of leísmo.
el laísmo | using «la» for indirect objects | «La dije que viniera» es {laísmo}. | «La dije que viniera» is laísmo.
la aspiración | aspiration (of s) | La {aspiración} de la -s final. | The aspiration of final -s.
el andaluz | Andalusian Spanish | El {andaluz} tiene mucha musicalidad. | Andalusian Spanish is very musical.
el canario | Canary Islands Spanish | El {canario} se parece al español del Caribe. | Canarian Spanish resembles Caribbean Spanish.
el rioplatense | River Plate Spanish | El acento {rioplatense} es inconfundible. | The River Plate accent is unmistakable.
el lunfardo | Buenos Aires slang | «Laburo» es una palabra del {lunfardo}. | «Laburo» is a lunfardo word.
la lengua cooficial | co-official language | El catalán es {lengua cooficial} en Cataluña. | Catalan is a co-official language in Catalonia.
el aranés | Aranese (Occitan of the Val d'Aran) | El {aranés} es oficial en el Valle de Arán. | Aranese is official in the Val d'Aran.
el valenciano | Valencian | El {valenciano} es cooficial en la Comunidad Valenciana. | Valencian is co-official in the Valencian Community.
el bilingüismo | bilingualism | El {bilingüismo} es normal en Galicia. | Bilingualism is normal in Galicia.
el carro | car (Latin America) | En México dicen «{carro}» y en España «coche». | In Mexico they say «carro» and in Spain «coche».
la computadora | computer (Latin America) | Dejé la {computadora} en la oficina. | I left the computer at the office.
el celular | mobile phone (Latin America) | Se me descargó el {celular}. | My mobile phone ran out of battery.
manejar | to drive (Latin America) | No sé {manejar}. | I can't drive.
el jugo | juice (Latin America) | Un {jugo} de naranja. | An orange juice.
la papa | potato (Latin America) | Puré de {papas}. | Mashed potatoes.
el aguacate / la palta | avocado (Spain / Southern Cone) | En Chile el {aguacate} se llama palta. | In Chile avocados are called palta.
dale | OK, go on (Latin America) | —¿Vamos? —{Dale}. | —Shall we go? —OK.
la guita | money (Argentina, colloquial) | No tengo {guita} para el viaje. | I've got no cash for the trip.
el boleto | ticket (Latin America) | Compré el {boleto} de autobús. | I bought the bus ticket.
la cuadra | block (Latin America) | Está a dos {cuadras}. | It's two blocks away.
el durazno | peach (Latin America) | Un {durazno} maduro. | A ripe peach.
la frutilla | strawberry (Southern Cone) | Helado de {frutilla}. | Strawberry ice cream.
chévere | great (Caribbean, Andes) | ¡Qué {chévere}! | How great!
ahorita | right now / in a bit (Mexico) | {Ahorita} vengo. | I'll be right back.
¿mande? | pardon? (Mexico) | —Oye. —¿{Mande}? | —Hey. —Yes?
la guagua | bus (Canaries, Caribbean) | Cogí la {guagua} en Las Palmas. | I took the bus in Las Palmas.
el colectivo | bus (Argentina) | Tomé el {colectivo} 60. | I took the number 60 bus.
el pibe / la piba | kid (Argentina) | Un {pibe} del barrio. | A kid from the neighbourhood.
el cuate / la cuata | mate (Mexico) | Es mi {cuate}. | He's my mate.
la chamba | job (Mexico, Peru) | Encontré {chamba}. | I found a job.
platicar | to chat (Mexico, Central America) | Nos quedamos {platicando}. | We stayed chatting.
recién | just (Latin America) | {Recién} llegué. | I've just arrived.
la ASALE | Association of Spanish Language Academies | La {ASALE} reúne a veintitrés academias. | ASALE brings together twenty-three academies.
`,
    D: `
En Argentina dicen «vos ___» en lugar de «tú tienes». | tenés | In Argentina they say «vos tenés» instead of «tú tienes».
En Argentina dicen «vos ___» en lugar de «tú eres». | sos | In Argentina they say «vos sos» instead of «tú eres».
Pronunciar «caza» igual que «casa» se llama ___. | seseo | Pronouncing «caza» like «casa» is called seseo.
«Le vi ayer» (a Juan) es un caso de ___. | leísmo | «Le vi ayer» (Juan) is a case of leísmo.
«La dije que viniera» es un caso de ___. | laísmo | «La dije que viniera» is a case of laísmo.
Pronunciar igual «pollo» y «poyo» se llama ___. | yeísmo | Pronouncing «pollo» and «poyo» the same is called yeísmo.
En México, para conducir se dice ___. | manejar | In Mexico, «to drive» is «manejar».
En gran parte de América, el móvil se llama ___. | celular | In much of Latin America, a mobile phone is called «celular».
En Canarias y el Caribe, el autobús es la ___. | guagua | In the Canaries and the Caribbean, the bus is the «guagua».
En Argentina, el autobús es el ___. | colectivo | In Argentina, the bus is the «colectivo».
En España decimos «zumo»; en América, ___. | jugo | In Spain we say «zumo»; in Latin America, «jugo».
En España decimos «patata»; en América, ___. | papa | In Spain we say «patata»; in Latin America, «papa».
En España decimos «melocotón»; en gran parte de América, ___. | durazno | In Spain we say «melocotón»; in much of Latin America, «durazno».
En Argentina, «fresa» se dice ___. | frutilla | In Argentina, «fresa» is «frutilla».
—¿Vamos al cine? —___, vamos. (Río de la Plata) | Dale | —Shall we go to the cinema? —OK, let's go.
En España: «Hoy he comido paella». En gran parte de América: «Hoy ___ paella». | comí | In Spain: «Hoy he comido paella». In much of Latin America: «Hoy comí paella».
En América no se usa «vosotros», sino «___». | ustedes | In Latin America «vosotros» isn't used, but «ustedes».
«Laburo» (trabajo) es una palabra del ___ porteño. | lunfardo | «Laburo» (work) is a word from Buenos Aires lunfardo.
El catalán, el gallego y el euskera son lenguas ___ en sus comunidades. | cooficiales | Catalan, Galician and Basque are co-official languages in their regions.
En México, si no oyes bien, preguntas: «¿___?» | Mande | In Mexico, if you didn't hear properly, you ask: «¿Mande?»
`,
    S: `
En Argentina y Uruguay se usa el voseo: vos tenés, vos sos. | In Argentina and Uruguay voseo is used: vos tenés, vos sos.
En Canarias y en América no se usa vosotros, sino ustedes. | In the Canaries and Latin America vosotros isn't used, but ustedes.
En México dicen carro, celular y computadora. | In Mexico they say carro, celular and computadora.
El seseo es típico de Andalucía occidental, Canarias y América. | Seseo is typical of western Andalusia, the Canaries and the Americas.
Muchos madrileños dicen «le vi» en lugar de «lo vi». | Many people from Madrid say «le vi» instead of «lo vi».
No hay un español mejor que otro, sino variedades distintas. | There's no better Spanish, only different varieties.
El gallego y el euskera son lenguas cooficiales. | Galician and Basque are co-official languages.
Recién llegué y ya me quiero quedar. | I've just arrived and I already want to stay.
`,
    R: [
      { t: 'Un madrileño en Buenos Aires', x: `Cuando Álvaro aterrizó en Buenos Aires para un trabajo de seis meses, pensaba que el idioma no sería un problema. Al fin y al cabo, hablaba español. La primera sorpresa llegó en el taxi: «¿Vos sos de España? ¿Y qué tal el laburo allá?». Álvaro tardó unos segundos en entender que «laburo» era trabajo y que aquel «vos» no era un error, sino la forma normal de tratarse entre la mayoría de los argentinos.

En las semanas siguientes fue completando su diccionario. El autobús era el «colectivo»; las fresas, «frutillas»; el dinero, «plata» o, entre amigos, «guita». Aprendió a decir «dale» para aceptar cualquier propuesta y a no usar en público ciertos verbos que en España son inocentes y en Argentina tienen un significado vulgar. La pronunciación también le costó: aquella «ll» que sonaba casi como «sh», en «sho me shamo», le resultaba fascinante.

Lo que más le llamó la atención, sin embargo, fue la reacción de los demás ante su propio acento. Sus compañeros imitaban divertidos su «vosotros» y su pronunciación de la «z», que les parecía de película antigua. «Hablás como un libro», le decía una compañera.

Al volver a Madrid, Álvaro se sorprendió diciendo «dale» por teléfono. Su madre no entendió nada.`, q: `¿Qué fue lo primero que sorprendió a Álvaro? | El precio del taxi ; *El uso de «vos» y la palabra «laburo» ; Que el taxista hablara inglés
¿Cómo pronuncian muchos argentinos la «ll»? | Como una «l» ; *Casi como «sh» ; Como una «j»
¿Qué les llamaba la atención a sus compañeros argentinos? | Su vocabulario técnico ; *Su «vosotros» y su pronunciación de la «z» ; Que hablara muy deprisa` },
      { t: '¿Existe un español correcto?', x: `Durante siglos, muchos hablantes de América Latina sintieron que su español era una versión de segunda frente al de España. En los colegios se corregían usos locales perfectamente legítimos, y en el doblaje y los medios se buscaba un acento «neutro» que no perteneciera a ningún lugar.

Hoy esa visión ha cambiado. Las veintitrés academias de la lengua, reunidas en la ASALE, defienden una norma panhispánica: no existe un único español correcto, sino varias normas cultas igualmente válidas. La de Bogotá, la de Ciudad de México, la de Buenos Aires o la de Madrid son modelos de prestigio en sus respectivas zonas. El voseo culto argentino, el uso general de «ustedes» en América o el pretérito indefinido para acciones recientes no son errores, sino rasgos de esas normas.

Esto no significa que todo valga. Hay usos considerados incorrectos en todas partes —como el dequeísmo— y otros que solo se aceptan en registros informales. Pero el criterio ya no es la distancia respecto a Madrid, sino el uso de las personas cultas de cada comunidad.

Para un estudiante que ha aprendido español de España, la conclusión es tranquilizadora: no tiene que cambiar su forma de hablar. Pero sí conviene que aprenda a entender las demás, porque la mayoría de los hispanohablantes no vive en la península.`, q: `¿Cómo se sentían muchos latinoamericanos en el pasado? | Superiores a los españoles ; *Que su español era de segunda ; Indiferentes
¿Qué defiende la ASALE? | Que el español de Madrid es el modelo ; *Que hay varias normas cultas igualmente válidas ; Que todo uso es correcto
¿Qué consejo da el texto al estudiante de español de España? | Cambiar su acento ; *Mantener su forma de hablar y aprender a entender las demás ; Aprender solo español de México` },
      { t: 'Lenguas de España', x: `Aunque fuera de sus fronteras se asocie España con una sola lengua, la Constitución de 1978 reconoce que el castellano es la lengua oficial del Estado y que las demás lenguas españolas serán también oficiales en sus respectivas comunidades autónomas, de acuerdo con sus estatutos.

Así, el catalán es cooficial en Cataluña y en las Islas Baleares, y en la Comunidad Valenciana recibe el nombre de valenciano. El gallego lo es en Galicia y el euskera en el País Vasco y en parte de Navarra. En el Valle de Arán, en el Pirineo catalán, también es oficial el aranés, una variedad del occitano. Otras lenguas, como el asturiano o el aragonés, gozan de distintos grados de protección.

El bilingüismo forma parte de la vida diaria de millones de personas. En Galicia, por ejemplo, es habitual que una conversación pase del gallego al castellano y viceversa sin que nadie lo note. En Cataluña, la escuela funciona mayoritariamente en catalán, un modelo que genera debates políticos recurrentes.

Para el estudiante de español, esta diversidad tiene consecuencias prácticas: encontrará carteles, menús y anuncios en otras lenguas, oirá palabras catalanas o gallegas en medio del castellano y, sobre todo, descubrirá que en España la cuestión lingüística está íntimamente ligada a la identidad.`, q: `¿Qué establece la Constitución de 1978? | Que solo el castellano es oficial ; *Que el castellano es oficial en todo el Estado y las otras lenguas en sus comunidades ; Que todas las lenguas son oficiales en todo el país
¿Dónde es oficial el aranés? | En el País Vasco ; *En el Valle de Arán ; En Asturias
¿Qué se dice del modelo escolar catalán? | Que es en castellano ; *Que funciona mayoritariamente en catalán y genera debates ; Que es trilingüe` }
    ]
  });

  U({
    id: 'c2-historia', title: 'Historia de la lengua y etimología', goal: ['Explain the origin and evolution of Spanish', 'Recognise Arabic, Germanic, American and English loanwords', 'Use etymology to understand and remember vocabulary'],
    grammar: {
      t: 'Patterns from Latin to Spanish',
      h: `<p><b>Sound changes</b> that help you guess meanings: Latin f- → h- (silent): <i>facere → hacer, filium → hijo, folia → hoja</i>. Short e/o → ie/ue: <i>terra → tierra, porta → puerta</i>. -ct- → -ch-: <i>noctem → noche, lactem → leche</i>. pl-/cl-/fl- → ll-: <i>plorare → llorar, clamare → llamar</i>.</p>
<p><b>Doublets</b>: the same Latin word entered twice — once by natural evolution (patrimonial), once later from books (cultismo): <i>llamar / clamar, hijo / filial, ojo / ocular, noche / nocturno.</i> That's why adjectives often look less «Spanish» than nouns.</p>
<p><b>Arabic layer</b> (711–1492): about 4,000 words, many with <i>al-</i>: <i>aceite, almohada, alcalde, azúcar, ojalá, hasta</i>; place names with <i>Guad-</i> (river).</p>
<p><b>Other layers</b>: Germanic (<i>guerra, guardar, blanco</i>), American (<i>chocolate, tomate, patata, huracán, canoa</i>), French (<i>chaqueta, jardín</i>), English (<i>fútbol, wifi, líder</i>), calques (<i>rascacielos, baloncesto</i>).</p>
<p><b>Historical milestones</b>: Glosas Emilianenses (10th–11th c.), Alfonso X (13th c.), Nebrija's grammar (1492), RAE (1713), expansion to the Americas.</p>`
    },
    V: `
el latín vulgar | Vulgar Latin | El castellano procede del {latín vulgar}. | Spanish comes from Vulgar Latin.
la lengua romance | Romance language | El español es una {lengua romance}. | Spanish is a Romance language.
las Glosas Emilianenses | Emilian Glosses | Las {Glosas Emilianenses} contienen anotaciones en romance. | The Emilian Glosses contain notes in Romance.
el romance | early Romance vernacular | Escrito en {romance} y no en latín. | Written in Romance and not in Latin.
el castellano antiguo | Old Spanish | El Cantar de mio Cid está en {castellano antiguo}. | The Poem of the Cid is in Old Spanish.
Alfonso X el Sabio | Alfonso X the Wise | {Alfonso X el Sabio} impulsó la prosa en castellano. | Alfonso X the Wise promoted prose in Castilian.
Nebrija | Nebrija | {Nebrija} publicó su Gramática en 1492. | Nebrija published his Grammar in 1492.
la gramática | grammar | La primera {gramática} de una lengua europea moderna. | The first grammar of a modern European language.
el arabismo | Arabic loanword | «Almohada» es un {arabismo}. | «Almohada» is an Arabic loanword.
el germanismo | Germanic loanword | «Guerra» es un {germanismo}. | «Guerra» is a Germanic loanword.
el americanismo | word from American languages | «Chocolate» es un {americanismo}. | «Chocolate» comes from an American language.
el anglicismo | anglicism | «Wifi» es un {anglicismo}. | «Wifi» is an anglicism.
el galicismo | gallicism | «Chaqueta» es un {galicismo}. | «Chaqueta» is a gallicism.
el préstamo léxico | loanword | Un {préstamo léxico} del árabe. | A loanword from Arabic.
el cultismo | learned word | «Fiscal» es un {cultismo}. | «Fiscal» is a learned word.
la palabra patrimonial | inherited word | «Hijo» es una {palabra patrimonial}. | «Hijo» is an inherited word.
el doblete | doublet | «Llamar» y «clamar» forman un {doblete}. | «Llamar» and «clamar» form a doublet.
la etimología | etymology | La {etimología} de «trabajar» es curiosa. | The etymology of «trabajar» is curious.
etimológico / etimológica | etymological | Un diccionario {etimológico}. | An etymological dictionary.
la evolución fonética | sound change | La {evolución fonética} de la f- inicial. | The sound change of initial f-.
la diptongación | diphthongisation | La {diptongación} de «porta» en «puerta». | The diphthongisation of «porta» into «puerta».
el étimo | etymon, source word | El {étimo} latino de «hablar» es «fabulari». | The Latin source of «hablar» is «fabulari».
el neologismo | neologism | «Tuitear» es un {neologismo}. | «Tuitear» is a neologism.
el calco | calque | «Rascacielos» es un {calco} del inglés. | «Rascacielos» is a calque from English.
la Reconquista | the Reconquest | El castellano avanzó hacia el sur con la {Reconquista}. | Castilian spread south with the Reconquest.
al-Ándalus | al-Andalus | La influencia de {al-Ándalus} en el léxico. | The influence of al-Andalus on the lexicon.
el mozárabe | Mozarabic | El {mozárabe} se hablaba en al-Ándalus. | Mozarabic was spoken in al-Andalus.
las jarchas | kharjas (early lyric) | Las {jarchas} son los primeros versos en romance. | The kharjas are the earliest verses in Romance.
el judeoespañol | Judaeo-Spanish | El {judeoespañol} se habla aún en algunas comunidades sefardíes. | Judaeo-Spanish is still spoken in some Sephardic communities.
el sefardí / la sefardí | Sephardic Jew | Los {sefardíes} fueron expulsados en 1492. | The Sephardim were expelled in 1492.
el Diccionario de autoridades | Dictionary of Authorities | El {Diccionario de autoridades} se publicó en el siglo XVIII. | The Dictionary of Authorities was published in the 18th century.
limpia, fija y da esplendor | cleans, fixes and gives splendour (RAE motto) | El lema de la RAE es «{limpia, fija y da esplendor}». | The RAE's motto is «cleans, fixes and gives splendour».
la ortografía | spelling | La {ortografía} del español es bastante fonética. | Spanish spelling is fairly phonetic.
la hache muda | silent h | La {hache muda} viene a menudo de una f latina. | The silent h often comes from a Latin f.
el topónimo | place name | «Guadalajara» es un {topónimo} de origen árabe. | «Guadalajara» is a place name of Arabic origin.
el patronímico | patronymic | «Fernández» es un {patronímico}. | «Fernández» is a patronymic.
el sufijo | suffix | El {sufijo} -ez indicaba filiación. | The suffix -ez indicated parentage.
el artículo árabe al- | Arabic article al- | El {artículo árabe al-} se ve en «alcalde» o «algodón». | The Arabic article al- can be seen in «alcalde» or «algodón».
la lengua franca | lingua franca | El español fue {lengua franca} en América. | Spanish was a lingua franca in the Americas.
la koiné | koine, common dialect | En América se formó una {koiné}. | A koine developed in the Americas.
`,
    D: `
Del latín «facere» viene el verbo ___. | hacer | From Latin «facere» comes the verb «hacer».
Del latín «filium» viene la palabra ___. | hijo | From Latin «filium» comes «hijo».
Del latín «noctem» viene ___. | noche | From Latin «noctem» comes «noche».
Del latín «porta» viene ___. | puerta | From Latin «porta» comes «puerta».
Del latín «plorare» viene ___. | llorar | From Latin «plorare» comes «llorar».
«Llamar» y «clamar» forman un ___. | doblete | «Llamar» and «clamar» form a doublet.
«Ocular» es un ___; «ojo» es una palabra patrimonial. | cultismo | «Ocular» is a learned word; «ojo» is an inherited word.
«Almohada», «aceite» y «azúcar» son ___. | arabismos | «Almohada», «aceite» and «azúcar» are Arabic loanwords.
«Chocolate», «tomate» y «huracán» son ___. | americanismos | «Chocolate», «tomate» and «huracán» are words from American languages.
«Rascacielos» es un ___ del inglés «skyscraper». | calco | «Rascacielos» is a calque of English «skyscraper».
Nebrija publicó su ___ en 1492. | Gramática|gramática | Nebrija published his Grammar in 1492.
El lema de la RAE es «Limpia, fija y da ___». | esplendor | The RAE's motto is «Cleans, fixes and gives splendour».
Los topónimos que empiezan por «Guad-» suelen ser de origen ___. | árabe | Place names beginning with «Guad-» are usually of Arabic origin.
La hache de «hijo» procede de una ___ latina. | f | The h in «hijo» comes from a Latin f.
El español procede del latín ___, no del clásico. | vulgar | Spanish comes from Vulgar Latin, not Classical Latin.
Las Glosas ___ contienen algunas de las primeras palabras escritas en romance. | Emilianenses | The Emilian Glosses contain some of the earliest words written in Romance.
El ___ es la lengua de los sefardíes expulsados en 1492. | judeoespañol | Judaeo-Spanish is the language of the Sephardim expelled in 1492.
«Tuitear» es un ___. | neologismo | «Tuitear» is a neologism.
La ___ de «trabajar» se relaciona con un instrumento de tortura. | etimología | The etymology of «trabajar» is related to an instrument of torture.
«Fernández» es un ___: significa «hijo de Fernando». | patronímico | «Fernández» is a patronymic: it means «son of Fernando».
`,
    S: `
El español procede del latín vulgar. | Spanish comes from Vulgar Latin.
Muchas palabras con «al-» son de origen árabe. | Many words with «al-» are of Arabic origin.
La hache de «hacer» procede de una efe latina. | The h in «hacer» comes from a Latin f.
«Llamar» y «clamar» forman un doblete. | «Llamar» and «clamar» form a doublet.
Nebrija publicó la primera gramática del castellano en 1492. | Nebrija published the first grammar of Castilian in 1492.
«Chocolate» y «tomate» son palabras de origen americano. | «Chocolate» and «tomate» are words of American origin.
La etimología ayuda a recordar el vocabulario. | Etymology helps you remember vocabulary.
El judeoespañol aún se habla en algunas comunidades sefardíes. | Judaeo-Spanish is still spoken in some Sephardic communities.
`,
    R: [
      { t: 'De Cantabria al mundo', x: `El castellano nació como un modesto dialecto romance en una pequeña zona del norte de la península, entre Cantabria, el norte de Burgos y La Rioja. Allí, durante la Alta Edad Media, el latín hablado fue transformándose hasta convertirse en algo distinto. Algunos de los primeros testimonios escritos de esa nueva forma de hablar son las Glosas Emilianenses, anotaciones que un monje escribió en los márgenes de un códice latino para aclarar su significado.

Con la Reconquista, el castellano avanzó hacia el sur junto a los reinos cristianos, absorbiendo por el camino rasgos de otros romances peninsulares y miles de palabras árabes. En el siglo XIII, el rey Alfonso X el Sabio impulsó su uso en la prosa histórica, jurídica y científica, algo excepcional en una época en que el latín dominaba la cultura escrita.

El año 1492 resume simbólicamente su expansión: Nebrija publica la primera gramática de una lengua europea moderna, se produce la expulsión de los judíos —que llevarán consigo el judeoespañol— y Colón llega a América. En los siglos siguientes, el castellano se convertiría en lengua de un imperio y, después, en la lengua oficial de una veintena de países.

Hoy, aquel dialecto del norte es la lengua materna de cientos de millones de personas. No está mal para un idioma que empezó en los márgenes de un libro.`, q: `¿Dónde nació el castellano? | En Andalucía ; *En una pequeña zona del norte de la península ; En Toledo
¿Qué hizo Alfonso X? | Expulsó a los árabes ; *Impulsó la prosa en castellano ; Escribió la primera gramática
¿Qué acontecimientos de 1492 menciona el texto? | La fundación de la RAE ; *La gramática de Nebrija, la expulsión de los judíos y la llegada a América ; La muerte de Alfonso X` },
      { t: 'La huella árabe', x: `Durante casi ocho siglos, buena parte de la península ibérica formó parte de al-Ándalus. Esta larga convivencia dejó una huella profunda en el español, que conserva varios miles de palabras de origen árabe, más que ninguna otra lengua europea con excepción del portugués.

Muchos arabismos se reconocen por el artículo «al-», que el castellano incorporó como parte de la palabra: «alcalde», «almohada», «algodón», «aldea», «alfombra». Otros no lo llevan, pero son igualmente árabes: «aceite», «azúcar», «arroz», «naranja», «limón», «ojalá» —literalmente, «si Dios quiere»— e incluso la preposición «hasta».

Los campos semánticos son reveladores. Abundan los arabismos relacionados con la agricultura y el regadío («acequia», «noria», «aljibe»), con la administración («aduana», «tarifa»), con la ciencia («álgebra», «cifra», «cero») y con la vida doméstica. Esto refleja los ámbitos en los que la cultura andalusí resultaba más avanzada o influyente.

La toponimia también conserva esa memoria. Los ríos que empiezan por «Guad-» —Guadalquivir, Guadiana, Guadalajara— contienen la palabra árabe para «río», y nombres como «Alcalá» o «Medina» remiten a castillos y ciudades. Cada vez que un hispanohablante dice «ojalá», sin saberlo, pronuncia una pequeña oración en árabe.`, q: `¿Por qué muchos arabismos empiezan por «al-»? | Por casualidad ; *Porque el castellano incorporó el artículo árabe a la palabra ; Porque son nombres de ciudades
¿Qué revelan los campos semánticos de los arabismos? | Que el árabe solo influyó en la comida ; *Los ámbitos en que la cultura andalusí era más influyente ; Que los arabismos son recientes
¿Qué significa literalmente «ojalá»? | Buena suerte ; *Si Dios quiere ; Hasta luego` },
      { t: 'Palabras con historia', x: `Algunas palabras cotidianas esconden historias sorprendentes. «Trabajar», por ejemplo, procede probablemente de «tripalium», un instrumento de tortura formado por tres palos. La idea de esfuerzo doloroso que acompañaba al trabajo en la Edad Media quedó así fijada en el vocabulario.

«Salario» se relaciona con la sal, que en la Antigüedad era un bien muy valioso. «Candidato» viene del latín «candidus», blanco, porque en Roma quienes aspiraban a un cargo público vestían una toga blanqueada. Y «compañero» es, literalmente, quien comparte el pan con otro.

Hay también palabras que han cambiado mucho de significado. «Siniestro» significaba originalmente «izquierdo», y la asociación entre la izquierda y lo negativo explica su sentido actual. «Embarazada» procede de una raíz que significaba «estorbada» o «impedida», de ahí su falso parentesco con el inglés «embarrassed».

Conocer la etimología no es solo una curiosidad. Para un estudiante avanzado, es una herramienta poderosa: permite relacionar palabras de la misma familia, deducir el significado de términos desconocidos y recordar mejor el vocabulario. Quien sabe que «noche» viene de «noctem» entiende sin esfuerzo «nocturno», «pernoctar» o «noctámbulo».`, q: `¿De dónde procede probablemente «trabajar»? | De «trabajo» en árabe ; *De un instrumento de tortura de tres palos ; Del latín «tractare»
¿Por qué «candidato» viene de «candidus» (blanco)? | Porque eran personas honradas ; *Porque los aspirantes vestían una toga blanqueada ; Porque votaban con piedras blancas
¿Qué significaba originalmente «siniestro»? | Peligroso ; *Izquierdo ; Oscuro` }
    ],
    write: 'Choose ten Spanish words you use every day and research their origin (Latin, Arabic, Germanic, American, English…). Write a 220–260 word text explaining what their histories reveal about Spain\'s past.',
    talk: 'Play an enthusiastic historian of the Spanish language. Give the learner Latin words and ask them to guess the Spanish result using sound-change rules; then discuss Arabic and American loanwords.',
    res: [R.bvmc('historia de la lengua española'), R.rtve('Historia de la lengua'), R.fundeu()]
  });

  U({
    id: 'c2-ensayo', title: 'El ensayo y la argumentación culta', goal: ['Read and write academic and literary essays', 'Build arguments with premises, concessions, refutations and conclusions', 'Use formal connectors and high-register vocabulary precisely'],
    grammar: {
      t: 'Structuring an essay at C2',
      h: `<p><b>Structure</b>: hook and thesis → development (arguments with evidence) → concession and refutation → conclusion that opens a new question.</p>
<p><b>Concession + refutation</b>: <i>Es cierto que… ; no obstante… / Cabe admitir que…, pero ello no implica que + subj. / Aun concediendo que + subj., …</i></p>
<p><b>High-register connectors</b>: <i>en aras de, a tenor de, con arreglo a, en lo tocante a, en detrimento de, merced a, no en vano, dicho lo cual, huelga decir que, de suerte que.</i></p>
<p><b>Impersonal and modest voice</b>: <i>cabe pensar, se diría que, no parece aventurado afirmar que, a nuestro juicio, permítaseme…</i></p>
<p><b>Subjunctive after negated opinion and evaluation</b>: <i>No parece que…, No cabe duda de que + ind., Es significativo que + subj., El hecho de que + subj. / ind.</i></p>
<p><b>Rhythm</b>: alternate long and short sentences; end paragraphs with a strong, short sentence.</p>`
    },
    V: `
el ensayo | essay | Un {ensayo} sobre la soledad. | An essay on loneliness.
el ensayista / la ensayista | essayist | Ortega y Gasset fue un gran {ensayista}. | Ortega y Gasset was a great essayist.
la premisa | premise | Partir de una {premisa} falsa. | Starting from a false premise.
el silogismo | syllogism | Un {silogismo} impecable. | An impeccable syllogism.
la refutación | refutation | Una {refutación} brillante. | A brilliant refutation.
la concesión | concession | Hacer una {concesión} al adversario. | Making a concession to the opponent.
la digresión | digression | Perdonen la {digresión}. | Forgive the digression.
el corolario | corollary | Como {corolario}, … | As a corollary, …
inferir | to infer | De ello se puede {inferir} que… | From this one can infer that…
colegir | to deduce (formal) | De sus palabras cabe {colegir} que… | From his words one may deduce that…
soslayar | to sidestep | {Soslayó} la cuestión. | He sidestepped the question.
dilucidar | to elucidate | Intentaremos {dilucidar} el problema. | We'll try to elucidate the problem.
aseverar | to assert | {Asevera} que es imposible. | He asserts that it's impossible.
ponderar | to weigh; to praise | Hay que {ponderar} los argumentos. | The arguments must be weighed.
cotejar | to compare, collate | {Cotejar} dos versiones. | To collate two versions.
en aras de | for the sake of | {En aras de} la claridad, … | For the sake of clarity, …
so pretexto de | under the pretext of | {So pretexto de} protegerlo, … | Under the pretext of protecting him, …
a tenor de | in view of | {A tenor de} los datos, … | In view of the data, …
no en vano | not for nothing | {No en vano}, es el autor más leído. | Not for nothing is he the most read author.
dicho lo cual | having said that | {Dicho lo cual}, pasemos al segundo punto. | Having said that, let's move to the second point.
huelga decir | it goes without saying | {Huelga decir} que no estoy de acuerdo. | It goes without saying that I don't agree.
de suerte que | so that, in such a way that | Lo dispuso {de suerte que} nadie lo viera. | He arranged it so that nobody saw it.
con arreglo a | in accordance with | {Con arreglo a} la ley. | In accordance with the law.
en lo tocante a | as regards | {En lo tocante a} la economía, … | As regards the economy, …
en detrimento de | to the detriment of | {En detrimento de} la calidad. | To the detriment of quality.
en pro de | in favour of | Una campaña {en pro de} la lectura. | A campaign in favour of reading.
merced a | thanks to (literary) | {Merced a} su esfuerzo, triunfó. | Thanks to her effort, she succeeded.
sin ambages | without beating about the bush | Lo dijo {sin ambages}. | He said it plainly.
el sofisma | sophism | Su razonamiento es un {sofisma}. | His reasoning is a sophism.
la tesitura | situation, predicament | En esta {tesitura}, … | In this situation, …
el paradigma | paradigm | Un cambio de {paradigma}. | A paradigm shift.
la dicotomía | dichotomy | Una falsa {dicotomía}. | A false dichotomy.
la paradoja | paradox | Es una {paradoja}. | It's a paradox.
subyacente | underlying | La idea {subyacente}. | The underlying idea.
inherente | inherent | Un riesgo {inherente}. | An inherent risk.
ineludible | unavoidable | Una pregunta {ineludible}. | An unavoidable question.
la cuestión de fondo | the underlying issue | La {cuestión de fondo} es otra. | The underlying issue is something else.
plantearse | to ask oneself, consider | Cabe {plantearse} si… | One may ask oneself whether…
el razonamiento | reasoning | Un {razonamiento} riguroso. | Rigorous reasoning.
la conclusión provisional | tentative conclusion | Llegamos a una {conclusión provisional}. | We reach a tentative conclusion.
`,
    D: `
Es cierto que la tecnología nos conecta; no ___, también nos aísla. | obstante | It's true that technology connects us; nevertheless, it also isolates us.
Aun concediendo que ___ (tener) razón, su método es discutible. | tenga | Even granting that he's right, his method is questionable.
Cabe admitir el problema, pero ello no implica que no ___ (haber) solución. | haya | One can admit the problem, but that doesn't mean there's no solution.
En ___ de la claridad, dividiré el ensayo en tres partes. | aras | For the sake of clarity, I'll divide the essay into three parts.
A ___ de los datos disponibles, la hipótesis parece sólida. | tenor | In view of the available data, the hypothesis seems sound.
___ decir que no comparto esa opinión. | Huelga | It goes without saying that I don't share that view.
No en ___, es el autor más traducido del siglo. | vano | Not for nothing is he the most translated author of the century.
Dicho lo ___, pasemos a las objeciones. | cual | Having said that, let's move on to the objections.
La reforma se hizo en ___ de la calidad educativa. | detrimento | The reform was carried out to the detriment of educational quality.
___ a su tenacidad, logró publicar el libro. | Merced | Thanks to her tenacity, she managed to publish the book.
Es significativo que nadie lo ___ (mencionar) antes. | haya mencionado|mencionara | It's significant that nobody mentioned it before.
No parece aventurado ___ que la crisis cambiará el sector. | afirmar | It doesn't seem rash to state that the crisis will change the sector.
De sus palabras cabe ___ que no piensa dimitir. | colegir|inferir | From his words one may deduce that he doesn't intend to resign.
El ministro ___ la pregunta y habló de otra cosa. | soslayó | The minister sidestepped the question and talked about something else.
Presentar solo dos opciones cuando hay más es una falsa ___. | dicotomía | Presenting only two options when there are more is a false dichotomy.
Su razonamiento parece válido, pero es un ___. | sofisma | His reasoning seems valid, but it's a sophism.
Lo dijo sin ___: «Este proyecto es un fracaso». | ambages | He said it plainly: «This project is a failure».
Como ___ de lo anterior, se deduce que… | corolario | As a corollary of the above, it follows that…
Perdonen la ___; vuelvo al tema principal. | digresión | Forgive the digression; I'll return to the main topic.
Es una pregunta ___: tarde o temprano habrá que responderla. | ineludible | It's an unavoidable question: sooner or later it will have to be answered.
`,
    S: `
Es cierto que la tecnología nos conecta; no obstante, también puede aislarnos. | It's true that technology connects us; nevertheless, it can also isolate us.
Aun concediendo que tenga razón, su argumento presenta lagunas. | Even granting that he's right, his argument has gaps.
Huelga decir que no comparto esa conclusión. | It goes without saying that I don't share that conclusion.
En aras de la claridad, distinguiré tres aspectos. | For the sake of clarity, I'll distinguish three aspects.
No parece aventurado afirmar que estamos ante un cambio de paradigma. | It doesn't seem rash to say we're facing a paradigm shift.
De ello cabe inferir que el problema es más profundo. | From this one may infer that the problem runs deeper.
Dicho lo cual, conviene matizar algunos puntos. | Having said that, some points should be qualified.
La cuestión de fondo es otra. | The underlying issue is something else.
`,
    R: [
      { t: 'Elogio de la lentitud', x: `Vivimos instalados en la prisa. Respondemos correos mientras caminamos, escuchamos audios a doble velocidad y leemos resúmenes de libros que nunca abriremos. Se diría que la rapidez se ha convertido en un valor en sí mismo, independiente de aquello que se hace rápidamente.

Es cierto que la velocidad ha traído beneficios innegables. Huelga recordar lo que supone poder hablar al instante con alguien al otro lado del mundo o recibir un diagnóstico médico en horas en lugar de semanas. Nadie sensato propondría volver a la carta manuscrita como único medio de comunicación.

Ahora bien, aun concediendo todo ello, cabe preguntarse si no hemos confundido el medio con el fin. Hay actividades cuyo valor reside precisamente en el tiempo que exigen: una conversación sin reloj, la relectura de un poema, la elaboración paciente de un guiso o de una idea. Acelerarlas no las mejora; las destruye. No en vano, muchas de las experiencias que recordamos con más intensidad son aquellas en las que perdimos la noción del tiempo.

La lentitud no es pereza ni nostalgia. Es una forma de atención. Y la atención, en una época que la convierte en mercancía, es quizá el último lujo verdaderamente subversivo. Dicho lo cual, me temo que este ensayo ya les ha robado demasiados minutos.`, q: `¿Qué critica el autor? | La tecnología en sí ; *Que la rapidez se haya convertido en un valor en sí mismo ; Las cartas manuscritas
¿Qué concesión hace? | Que la lentitud es pereza ; *Que la velocidad ha traído beneficios innegables ; Que hay que volver al pasado
¿Cómo define la lentitud al final? | Como nostalgia ; *Como una forma de atención ; Como un lujo para ricos` },
      { t: 'Cómo se construye un ensayo', x: `El ensayo es un género difícil de definir. Montaigne, que le dio nombre, lo concebía como un intento, una prueba: el autor ensaya su pensamiento ante el lector, sin pretensión de agotar el tema. En la tradición hispánica, figuras como Unamuno, Ortega y Gasset o María Zambrano cultivaron un ensayo personal, a medio camino entre la filosofía y la literatura.

Sin embargo, el ensayo académico que se exige en la universidad tiene una estructura más definida. Suele comenzar con una introducción que despierta el interés del lector y formula una tesis clara. Sigue un desarrollo en el que se presentan los argumentos, apoyados en datos, ejemplos o autoridades. Un buen ensayo no ignora las objeciones: las expone con honestidad y las refuta, o bien admite sus límites. Por último, la conclusión no debe limitarse a repetir lo dicho, sino abrir una nueva perspectiva.

Entre los errores más frecuentes figuran las falsas dicotomías, las generalizaciones sin base y los sofismas que, bajo una apariencia lógica, esconden un razonamiento defectuoso. También es habitual confundir la complejidad de la prosa con la profundidad de las ideas.

En suma, escribir un buen ensayo exige pensar con claridad antes de escribir. Como decía Ortega, la claridad es la cortesía del filósofo.`, q: `¿Cómo concebía Montaigne el ensayo? | Como un tratado exhaustivo ; *Como un intento o prueba del pensamiento ; Como un género poético
¿Qué debe hacer un buen ensayo con las objeciones? | Ignorarlas ; *Exponerlas con honestidad y refutarlas o admitir límites ; Ponerlas al final sin comentarlas
¿Qué no debe hacer la conclusión? | Abrir una nueva perspectiva ; *Limitarse a repetir lo dicho ; Ser breve` },
      { t: '¿Debe la universidad ser útil?', x: `En las últimas décadas se ha extendido la idea de que la universidad debe, ante todo, formar profesionales para el mercado laboral. A tenor de este planteamiento, los estudios se evalúan por su empleabilidad, y las carreras con menos salidas —filosofía, historia del arte, filología clásica— se ven cuestionadas.

No cabe duda de que la universidad tiene una responsabilidad social, y sería ingenuo ignorar las preocupaciones de los estudiantes por su futuro. Ahora bien, reducir su misión a la empleabilidad entraña un riesgo: confundir lo útil con lo inmediatamente rentable. Muchas de las ideas que han transformado la sociedad nacieron de investigaciones que, en su momento, parecían no servir para nada.

Además, la universidad cumple funciones que no se miden en salarios: transmite una tradición crítica, forma ciudadanos capaces de dudar y conserva saberes que, de otro modo, desaparecerían. Que esas funciones sean difíciles de cuantificar no significa que carezcan de valor.

La cuestión de fondo, por tanto, no es si la universidad debe ser útil, sino qué entendemos por utilidad. En aras de la honestidad, admitamos que no tenemos una respuesta definitiva. Pero una sociedad que solo valora lo que puede medir corre el riesgo de olvidar por qué merece la pena medirlo.`, q: `¿Qué idea critica el autor? | Que la universidad sea gratuita ; *Reducir la misión de la universidad a la empleabilidad ; Que existan carreras de ciencias
¿Qué argumento usa sobre las investigaciones «inútiles»? | Que son caras ; *Que muchas ideas transformadoras parecían inútiles al principio ; Que deberían eliminarse
¿Cuál es, según el autor, la cuestión de fondo? | El precio de las matrículas ; *Qué entendemos por utilidad ; El número de universidades` }
    ],
    write: 'Write an essay (300–350 words) on a debatable question («¿Nos hace más libres la tecnología?», «¿Debe la universidad ser útil?» or your own). Include a clear thesis, two arguments, one concession with refutation, and at least five high-register connectors.',
    talk: 'Act as a demanding essay examiner. The learner defends a thesis orally; you raise objections, point out fallacies and ask for evidence, and finally ask them to summarise their argument in three sentences.',
    res: [R.bvmc('Ortega y Gasset ensayo'), R.bvmc('María Zambrano'), R.elpais()]
  });

  U({
    id: 'c2-politica', title: 'Retórica y discurso político', goal: ['Understand parliamentary and campaign language', 'Analyse political rhetoric: framing, fallacies, euphemism', 'Discuss politics neutrally and precisely'],
    grammar: {
      t: 'The rhetoric of power',
      h: `<p><b>Inclusive «nosotros» vs excluding «ellos»</b>: building a community and an opponent. <i>Nosotros, los ciudadanos de bien… / Ellos solo piensan en…</i></p>
<p><b>Tricolon and anaphora</b>: <i>Más empleo, más igualdad, más futuro. / Hemos venido a…, hemos venido a…, hemos venido a…</i></p>
<p><b>Agentless constructions</b> to avoid responsibility: <i>Se han cometido errores. / Se tomaron decisiones difíciles.</i> Compare <i>Me equivoqué.</i></p>
<p><b>Presupposition</b>: a question that assumes something: <i>¿Cuándo va a dejar de mentir a los ciudadanos?</i></p>
<p><b>Hedged commitment</b>: <i>Trabajaremos para que + subj. / Haremos todo lo posible por… / En la medida de lo posible…</i> — promises that promise little.</p>
<p><b>Parliamentary formulas</b>: <i>Señorías, con la venia de la Presidencia, tiene la palabra, se somete a votación, queda aprobada/rechazada.</i></p>`
    },
    V: `
la retórica | rhetoric | Pura {retórica}. | Pure rhetoric.
la oratoria | oratory | Su {oratoria} es brillante. | His oratory is brilliant.
el mitin | rally | Un {mitin} electoral. | An election rally.
el argumentario | talking points | Repiten el {argumentario} del partido. | They repeat the party's talking points.
el eslogan | slogan | Un {eslogan} pegadizo. | A catchy slogan.
la consigna | slogan; instruction | Corearon {consignas}. | They chanted slogans.
la demagogia | demagoguery | Eso es pura {demagogia}. | That's pure demagoguery.
el populismo | populism | El auge del {populismo}. | The rise of populism.
el electoralismo | electioneering | Medidas de puro {electoralismo}. | Measures of pure electioneering.
el bipartidismo | two-party system | El fin del {bipartidismo}. | The end of the two-party system.
la investidura | investiture (vote) | Perdió la votación de {investidura}. | He lost the investiture vote.
la moción de censura | motion of no confidence | Presentaron una {moción de censura}. | They tabled a motion of no confidence.
la cuestión de confianza | vote of confidence | Se sometió a una {cuestión de confianza}. | He submitted to a vote of confidence.
el gobierno en funciones | caretaker government | Un {gobierno en funciones}. | A caretaker government.
la legislatura | parliamentary term | Al final de la {legislatura}. | At the end of the parliamentary term.
el hemiciclo | chamber | Aplausos en el {hemiciclo}. | Applause in the chamber.
la bancada | benches (of a party) | La {bancada} de la oposición. | The opposition benches.
el pleno | plenary session | El {pleno} del Congreso. | The plenary session of Congress.
la sesión de control | question time | En la {sesión de control} al Gobierno. | In government question time.
el voto de castigo | protest vote | Un {voto de castigo}. | A protest vote.
el voto útil | tactical vote | Pedir el {voto útil}. | Calling for tactical voting.
la abstención | abstention | La {abstención} fue alta. | Abstention was high.
el sondeo | poll | Según los {sondeos}, … | According to the polls, …
la batalla del relato | battle of the narrative | Ganar {la batalla del relato}. | Winning the battle of the narrative.
el marco | frame | Imponer el {marco} del debate. | Setting the frame of the debate.
el tacticismo | short-term tactics | Acusan al gobierno de {tacticismo}. | They accuse the government of short-term tactics.
el tránsfuga / la tránsfuga | defector (politics) | Un concejal {tránsfuga}. | A defecting councillor.
el cordón sanitario | cordon sanitaire | Un {cordón sanitario} a la extrema derecha. | A cordon sanitaire against the far right.
la gobernabilidad | governability | Garantizar la {gobernabilidad}. | Ensuring governability.
el clientelismo | clientelism | Denuncian {clientelismo}. | They denounce clientelism.
el caciquismo | caciquismo (local bossism) | El {caciquismo} del siglo XIX. | 19th-century caciquismo.
el adversario / la adversaria | opponent | Respetar al {adversario}. | Respecting the opponent.
la promesa electoral | election promise | Incumplió su {promesa electoral}. | He broke his election promise.
el programa electoral | manifesto | Lee el {programa electoral}. | Read the manifesto.
la falacia del hombre de paja | straw man fallacy | Eso es una {falacia del hombre de paja}. | That's a straw man fallacy.
la apelación al miedo | appeal to fear | Un discurso basado en la {apelación al miedo}. | A speech based on appealing to fear.
el tono conciliador | conciliatory tone | Habló en {tono conciliador}. | She spoke in a conciliatory tone.
la crispación | tension, rancour | La {crispación} política. | Political rancour.
el consenso | consensus | Buscar el {consenso}. | Seeking consensus.
la regeneración democrática | democratic renewal | Prometió {regeneración democrática}. | He promised democratic renewal.
`,
    D: `
El Gobierno perdió la votación de ___ y no pudo formar gobierno. | investidura | The government lost the investiture vote and couldn't form a government.
La oposición presentó una moción de ___ contra el presidente. | censura | The opposition tabled a motion of no confidence against the president.
Hasta que se forme un nuevo gobierno, el actual sigue en ___. | funciones | Until a new government is formed, the current one remains in a caretaker role.
«Se han cometido errores» evita decir quién los ___. | cometió | «Mistakes have been made» avoids saying who made them.
Trabajaremos para que nadie se ___ (quedar) atrás. | quede | We will work so that nobody is left behind.
Los diputados repiten el ___ que les envía el partido. | argumentario | The MPs repeat the talking points the party sends them.
Muchos votantes castigaron al gobierno con un voto de ___. | castigo | Many voters punished the government with a protest vote.
«¿Cuándo va a dejar de mentir?» es una pregunta con ___. | presuposición | «When will you stop lying?» is a question with a presupposition.
Atribuir al rival una postura que no defiende es la falacia del hombre de ___. | paja | Attributing to your opponent a position they don't hold is the straw man fallacy.
El debate estuvo marcado por la ___: insultos y gritos en el hemiciclo. | crispación | The debate was marked by rancour: insults and shouting in the chamber.
Los partidos acordaron un cordón ___ para aislar a los extremistas. | sanitario | The parties agreed a cordon sanitaire to isolate the extremists.
Un concejal ___ cambió de partido y dio la alcaldía a la oposición. | tránsfuga | A defecting councillor switched parties and handed the mayoralty to the opposition.
Señorías, se somete a ___ la propuesta. | votación | Honourable members, the proposal is put to a vote.
El candidato prometió «más empleo, más igualdad, más ___». | futuro | The candidate promised «more jobs, more equality, more future».
Acusan al gobierno de ___: medidas pensadas solo para ganar votos. | electoralismo | They accuse the government of electioneering: measures designed only to win votes.
El presidente se sometió a una cuestión de ___ y la superó. | confianza | The president submitted to a vote of confidence and won it.
La ___ fue muy alta: votó menos de la mitad del censo. | abstención | Abstention was very high: less than half the electorate voted.
Los ___ dan ventaja a la oposición. | sondeos | The polls give the opposition the lead.
Habló en tono ___, tendiendo la mano a todos los grupos. | conciliador | He spoke in a conciliatory tone, reaching out to all groups.
Ganar la batalla del ___ es tan importante como ganar votos. | relato | Winning the battle of the narrative is as important as winning votes.
`,
    S: `
La oposición ha presentado una moción de censura. | The opposition has tabled a motion of no confidence.
El gobierno sigue en funciones hasta la investidura. | The government remains in a caretaker role until the investiture.
Se han cometido errores, reconoció el ministro, sin decir quién. | Mistakes have been made, the minister admitted, without saying by whom.
Trabajaremos para que nadie se quede atrás. | We will work so that nobody is left behind.
Eso es una falacia del hombre de paja. | That's a straw man fallacy.
La crispación política aleja a los ciudadanos. | Political rancour drives citizens away.
Los sondeos anticipan una alta abstención. | The polls anticipate high abstention.
Señorías, se somete a votación la propuesta. | Honourable members, the proposal is put to a vote.
`,
    R: [
      { t: 'Anatomía de un discurso', x: `«Ciudadanos y ciudadanas: hoy no hemos venido a pedir vuestro voto. Hemos venido a devolveros la esperanza. Hemos venido a recuperar lo que nunca debieron arrebataros. Hemos venido a construir, juntos, el país que merecéis».

Este fragmento, de un mitin imaginario, reúne en pocas líneas varios recursos clásicos de la retórica política. El primero es la anáfora: la repetición de «hemos venido a» crea un ritmo que facilita el aplauso. El segundo es la construcción de un «nosotros» inclusivo («juntos») frente a un adversario implícito, esos «otros» que «arrebataron» algo a los ciudadanos sin que se diga exactamente quiénes ni qué.

Llama también la atención la vaguedad del contenido. «Devolver la esperanza» o «construir el país que merecéis» son fórmulas emotivas que no comprometen a nada concreto. Los analistas las llaman «significantes vacíos»: cada oyente puede llenarlas con sus propios deseos.

Nada de esto es exclusivo de una ideología. Las mismas técnicas se encuentran en discursos de partidos muy distintos, porque responden a una lógica común: movilizar emociones más que transmitir información. Reconocerlas no obliga a desconfiar de toda la política, pero sí ayuda a escuchar con más atención lo que se dice… y lo que se calla.`, q: `¿Qué recurso crea la repetición de «hemos venido a»? | Una antítesis ; *Una anáfora ; Una elipsis
¿Qué son los «significantes vacíos»? | Palabras sin sentido gramatical ; *Fórmulas emotivas que cada oyente llena con sus deseos ; Promesas concretas
¿Qué dice el texto sobre estas técnicas? | Que son propias de una sola ideología ; *Que se encuentran en partidos muy distintos ; Que están prohibidas` },
      { t: 'Una sesión de control', x: `Los miércoles por la mañana, el Congreso de los Diputados celebra la sesión de control al Gobierno. Durante un par de horas, los portavoces de la oposición formulan preguntas al presidente y a los ministros, que disponen de un tiempo tasado para responder.

En teoría, se trata de un mecanismo esencial de la democracia parlamentaria: el Ejecutivo rinde cuentas ante los representantes de los ciudadanos. En la práctica, las sesiones se han convertido a menudo en un intercambio de reproches preparados de antemano, pensados más para los cortes de los informativos que para el debate.

Un ejemplo típico: un diputado pregunta «¿Cuándo piensa el Gobierno dejar de engañar a los españoles?». La pregunta no busca información, sino imponer un marco: presupone que el Gobierno engaña. El ministro, por su parte, rara vez responde directamente; suele recordar los errores del partido del interrogador cuando gobernaba. Ambos saben que la batalla no se libra en el hemiciclo, sino en las redes sociales y en las tertulias de la tarde.

Muchos ciudadanos dicen sentirse alejados de esta crispación. Algunos expertos proponen reformas del reglamento, como permitir repreguntas o reducir el tiempo de las réplicas, para recuperar el control parlamentario como herramienta de rendición de cuentas real.`, q: `¿Qué ocurre en la sesión de control? | Se votan las leyes ; *La oposición pregunta al Gobierno ; Se elige al presidente
¿Qué busca la pregunta «¿Cuándo piensa el Gobierno dejar de engañar…?» | Obtener información ; *Imponer un marco que presupone el engaño ; Felicitar al Gobierno
¿Qué reforma proponen algunos expertos? | Eliminar las sesiones ; *Permitir repreguntas o reducir réplicas ; Celebrarlas en secreto` },
      { t: 'El arte de no prometer', x: `Un ejercicio interesante consiste en leer un programa electoral con lápiz rojo y subrayar solo los compromisos verificables: cifras, plazos, medidas concretas. El resultado suele ser sorprendente. Entre decenas de páginas de buenas intenciones, los compromisos que podrían comprobarse al final de la legislatura ocupan a veces apenas unas líneas.

La razón es comprensible desde el punto de vista estratégico. Una promesa concreta incumplida se convierte en munición para el adversario; una declaración vaga, en cambio, es imposible de desmentir. De ahí la abundancia de fórmulas como «trabajaremos para que…», «impulsaremos…», «apostaremos por…» o «en la medida de lo posible». Gramaticalmente son impecables; políticamente, comprometen muy poco.

Algunos partidos han intentado diferenciarse con programas cuantificados y calendarios precisos, e incluso con organismos independientes que evalúan su coste. Los resultados electorales de esta estrategia han sido desiguales: la concreción da credibilidad, pero también ofrece flancos a la crítica.

Para el lector atento, la lección es clara. Ante cada promesa, conviene preguntarse: ¿qué exactamente?, ¿cuándo?, ¿con qué dinero?, ¿cómo sabré si se ha cumplido? Si ninguna de estas preguntas tiene respuesta, probablemente no estamos ante una promesa, sino ante un deseo bien redactado.`, q: `¿Qué suele descubrirse al subrayar los compromisos verificables? | Que son la mayoría del programa ; *Que ocupan muy poco espacio ; Que no existen nunca
¿Por qué prefieren los partidos declaraciones vagas? | Porque son más cortas ; *Porque son imposibles de desmentir ; Porque lo exige la ley
¿Qué preguntas recomienda el texto ante una promesa? | ¿Quién la dice? ; *¿Qué exactamente, cuándo, con qué dinero y cómo sabré si se cumple? ; ¿Qué partido la propone?` }
    ],
    write: 'Analyse a real or invented political speech (250–300 words): identify the frame, the «nosotros/ellos», two rhetorical devices, one possible fallacy and any vague promises. Keep a neutral analytical tone throughout.',
    talk: 'Play a moderator of a TV debate. Present a political claim; the learner must identify its rhetorical strategies and reformulate it as a neutral, verifiable statement. Stay strictly neutral between parties.',
    res: [R.rtve('Parlamento'), R.ser('Hoy por hoy'), R.elpais()]
  });

  U({
    id: 'c2-traduccion', title: 'Traducción y mediación', goal: ['Translate and mediate between Spanish and English (or Dutch) with sensitivity to register', 'Handle culture-bound words, idioms and false friends', 'Paraphrase and summarise for different audiences'],
    grammar: {
      t: 'Translating with judgement',
      h: `<p><b>Literal vs functional equivalence</b>: translate meaning and effect, not words. <i>It's raining cats and dogs → Llueve a cántaros.</i></p>
<p><b>Structural shifts English → Spanish</b>: English nouns often become Spanish verbs or clauses (<i>after his arrival → después de que llegara</i>); English passives often become pasiva refleja or active (<i>It is said that → Se dice que / Dicen que</i>); English -ing often becomes infinitive (<i>Swimming is healthy → Nadar es sano</i>).</p>
<p><b>Possessives and articles</b>: Spanish uses the article with body parts and clothes (<i>He raised his hand → Levantó la mano</i>).</p>
<p><b>Register and address</b>: decide tú/usted and keep it consistent; English «you» hides the choice.</p>
<p><b>Culture-bound terms (realia)</b>: keep and explain (<i>la sobremesa, the leisurely after-lunch chat</i>), adapt, or generalise. Never invent false equivalents.</p>
<p><b>Mediation</b> (DELE C2 task type): summarise or reformulate a text for a specific reader and purpose — choose what to keep, simplify and explain.</p>`
    },
    V: `
traducir | to translate | {Traducir} es elegir. | Translating is choosing.
la traducción literal | literal translation | Una {traducción literal} resulta rara. | A literal translation sounds strange.
la traducción libre | free translation | Prefiero una {traducción libre}. | I prefer a free translation.
la equivalencia | equivalence | Buscar la {equivalencia} funcional. | Looking for functional equivalence.
intraducible | untranslatable | Una palabra {intraducible}. | An untranslatable word.
la lengua de origen | source language | La {lengua de origen} es el inglés. | The source language is English.
la lengua meta | target language | Traducir a la {lengua meta}. | Translating into the target language.
la connotación | connotation | Una {connotación} negativa. | A negative connotation.
la denotación | denotation | La {denotación} es el significado básico. | Denotation is the basic meaning.
la polisemia | polysemy | La {polisemia} de «banco». | The polysemy of «banco».
la ambigüedad | ambiguity | Una {ambigüedad} deliberada. | A deliberate ambiguity.
la nota del traductor | translator's note | Lo explica en una {nota del traductor}. | She explains it in a translator's note.
el subtitulado | subtitling | El {subtitulado} obliga a resumir. | Subtitling forces you to condense.
la mediación | mediation | La {mediación} lingüística. | Linguistic mediation.
parafrasear | to paraphrase | Intenta {parafrasearlo}. | Try to paraphrase it.
la paráfrasis | paraphrase | Una {paráfrasis} fiel. | A faithful paraphrase.
la fidelidad | faithfulness | {Fidelidad} al original. | Faithfulness to the original.
traicionar | to betray | Traducir es {traicionar}, dice el refrán italiano. | To translate is to betray, says the Italian saying.
los realia | culture-bound terms | «Tapa» y «sobremesa» son {realia} difíciles de traducir. | «Tapa» and «sobremesa» are culture-bound terms that are hard to translate.
la morriña | homesickness (Galician) | Siento {morriña} de mi tierra. | I'm homesick for my homeland.
la vergüenza ajena | second-hand embarrassment | Me da {vergüenza ajena}. | It makes me cringe for him.
el cuñadismo | know-it-all attitude | Eso es puro {cuñadismo}. | That's pure know-it-all talk.
el desvelo | sleeplessness; dedication | Gracias por tus {desvelos}. | Thank you for all your care.
la querencia | attachment, fondness for a place | Tiene {querencia} por su pueblo. | He's very attached to his village.
el arraigo | rootedness | El {arraigo} a la tierra. | Rootedness in the land.
el sobreentendido | implicit meaning | Hay muchos {sobreentendidos} en el diálogo. | There's a lot left implicit in the dialogue.
madrugador / madrugadora | early riser | No soy nada {madrugadora}. | I'm not an early riser at all.
el compadreo | cronyism; chumminess | El {compadreo} entre políticos. | Cronyism among politicians.
el tuteo | using «tú» | En España el {tuteo} es muy común. | In Spain using «tú» is very common.
tutear | to address as «tú» | ¿Puedo {tutearte}? | May I call you «tú»?
el ustedeo | using «usted» | El {ustedeo} marca distancia. | Using «usted» marks distance.
la adaptación cultural | cultural adaptation | Hace falta una {adaptación cultural}. | A cultural adaptation is needed.
el lector meta | target reader | Piensa en el {lector meta}. | Think of the target reader.
el traductor automático | machine translator | El {traductor automático} no capta la ironía. | Machine translation doesn't catch irony.
la posedición | post-editing | La {posedición} de textos automáticos. | Post-editing machine-translated texts.
la jerga | jargon | La {jerga} jurídica. | Legal jargon.
el sentido figurado | figurative sense | En {sentido figurado}. | In a figurative sense.
el sentido literal | literal sense | En {sentido literal} no tiene lógica. | Literally it makes no sense.
la locución | set phrase, idiom | Una {locución} adverbial. | An adverbial phrase.
la colocación | collocation | «Cometer un error» es una {colocación}. | «Cometer un error» is a collocation.
`,
    D: `
It's raining cats and dogs. → Llueve a ___. | cántaros | It's raining cats and dogs.
He raised his hand. → Levantó ___ mano. | la | He raised his hand.
Swimming is healthy. → ___ es sano. | Nadar | Swimming is healthy.
After his arrival, everything changed. → Después de que ___ (llegar, él), todo cambió. | llegara|llegase | After he arrived, everything changed.
It is said that he's rich. → ___ dice que es rico. | Se | It is said that he's rich.
A word with no equivalent in another language is ___. | intraducible | A word with no equivalent in another language is untranslatable.
The language you translate from is la lengua de ___. | origen | The language you translate from is the source language.
The language you translate into is la lengua ___. | meta | The language you translate into is the target language.
The basic meaning of a word is its ___; the associations are its connotation. | denotación | The basic meaning of a word is its denotation.
«Banco» (bench / bank) is an example of ___. | polisemia | «Banco» is an example of polysemy.
When she can't find an equivalent, the translator adds a nota del ___. | traductor | When she can't find an equivalent, the translator adds a translator's note.
«Me da ___ ajena» is hard to translate: second-hand embarrassment. | vergüenza | «Me da vergüenza ajena» is hard to translate: second-hand embarrassment.
Galicians feel ___ when they're far from home. | morriña | Galicians feel homesick when they're far from home.
Using «tú» with someone is ___. | tutear | Using «tú» with someone is «tutear».
Machine translation needs ___: a human checks and corrects it. | posedición | Machine translation needs post-editing: a human checks and corrects it.
«Cometer un error» is a fixed combination, a ___. | colocación | «Cometer un error» is a fixed combination, a collocation.
To translate is to betray: «Traducir es ___». | traicionar | To translate is to betray.
Saying the same thing in other words is ___. | parafrasear | Saying the same thing in other words is paraphrasing.
I put on my coat. → Me puse ___ abrigo. | el | I put on my coat.
Think of who will read it: el lector ___. | meta | Think of who will read it: the target reader.
`,
    S: `
Traducir no es cambiar palabras, sino transmitir sentido. | Translating isn't swapping words, but conveying meaning.
Esta palabra es prácticamente intraducible. | This word is practically untranslatable.
Hace falta una nota del traductor para explicar el juego de palabras. | A translator's note is needed to explain the pun.
El traductor automático no capta la ironía. | Machine translation doesn't catch irony.
¿Nos tuteamos o prefieres que te trate de usted? | Shall we use «tú», or would you prefer «usted»?
Me da vergüenza ajena verlo. | It makes me cringe to watch it.
Siento morriña de mi tierra. | I'm homesick for my homeland.
Piensa siempre en el lector meta. | Always think about the target reader.
`,
    R: [
      { t: 'Palabras que no viajan', x: `Todo traductor conoce la frustración de encontrarse con una palabra que se resiste a cruzar la frontera. En español abundan: «sobremesa», ese rato de conversación sin prisa que sigue a la comida; «madrugar», que en inglés exige una perífrasis; «vergüenza ajena», la incomodidad que sentimos por lo que hace otra persona; «morriña», la nostalgia gallega de la tierra.

Que una palabra no tenga equivalente exacto no significa que el concepto no exista en otras culturas. Los ingleses también se quedan charlando después de comer, y los neerlandeses también sienten nostalgia. Lo que ocurre es que cada lengua decide qué experiencias merecen una etiqueta propia, y esa decisión dice algo sobre la cultura que la toma.

Ante estos «realia», el traductor dispone de varias estrategias. Puede mantener la palabra original y explicarla, en el texto o en una nota; puede buscar una expresión aproximada en la lengua meta, aunque pierda matices; o puede describir el concepto con una paráfrasis. Ninguna es perfecta. Cada una sacrifica algo: el color local, la naturalidad o la brevedad.

Quizá por eso se repite el viejo juego de palabras italiano: «traduttore, traditore». Traducir es, inevitablemente, traicionar un poco. El buen traductor no es el que nunca traiciona, sino el que sabe elegir qué traicionar en cada caso.`, q: `¿Qué es la «sobremesa»? | Un postre típico ; *La conversación sin prisa después de comer ; Una mesa auxiliar
Según el texto, ¿qué significa que una palabra no tenga equivalente? | Que el concepto no existe en otras culturas ; *Que cada lengua decide qué experiencias etiquetar ; Que la palabra es incorrecta
¿Qué es un buen traductor, según la conclusión? | El que nunca traiciona ; *El que sabe elegir qué traicionar en cada caso ; El que traduce palabra por palabra` },
      { t: 'Tú o usted: una decisión invisible', x: `Para quien traduce del inglés, uno de los retos más constantes es invisible en el original: la elección entre «tú» y «usted». El inglés «you» sirve para todo, mientras que el español obliga a decidir en cada frase qué relación existe entre los interlocutores.

En una novela, la decisión puede ser delicada. ¿Cómo se hablan dos amantes en el siglo XIX? ¿Y un detective y un sospechoso? ¿En qué momento pasan dos personajes del «usted» al «tú», y qué significa ese cambio para la historia? El traductor debe interpretar matices que el autor nunca tuvo que plantearse.

En los textos comerciales y administrativos, la elección es estratégica. Muchas marcas jóvenes tutean al cliente para transmitir cercanía; los bancos, las aseguradoras y la administración suelen mantener el «usted». En España el tuteo está más extendido que en buena parte de América Latina, donde el «usted» es frecuente incluso entre familiares en algunos países. Una campaña publicitaria que funciona en Madrid puede resultar irrespetuosa en Bogotá.

La regla básica es la coherencia: una vez elegido el tratamiento, debe mantenerse en todo el texto, salvo que el cambio sea intencionado. Nada delata tanto una mala traducción como un cliente al que se tutea en un párrafo y se le trata de usted en el siguiente.`, q: `¿Por qué la elección tú/usted es «invisible» en el original inglés? | Porque el inglés no tiene pronombres ; *Porque «you» sirve para ambos ; Porque los autores ingleses no la piensan
¿Qué tratamiento suelen usar los bancos y la administración? | El tuteo ; *El usted ; El voseo
¿Cuál es la regla básica según el texto? | Usar siempre «usted» ; *La coherencia en todo el texto ; Usar siempre «tú» con los jóvenes` },
      { t: 'Traductores y máquinas', x: `Los traductores automáticos han mejorado de forma espectacular en los últimos años. Para un correo sencillo, una noticia o un manual técnico, ofrecen hoy resultados que hace una década habrían parecido imposibles. Muchos profesionales de la traducción se dedican ya a la posedición: revisar y corregir textos producidos por una máquina.

Sin embargo, hay terrenos en los que la máquina sigue tropezando. La ironía, los juegos de palabras, los refranes retorcidos y las alusiones culturales exigen una comprensión del contexto que va más allá de las palabras. Un sistema automático puede traducir correctamente cada oración y, aun así, producir un texto que suena extraño, porque no capta el registro, el ritmo o la intención del original.

También plantea problemas la coherencia en textos largos: cambiar de tratamiento, traducir de forma distinta un mismo término o perder el hilo de una referencia. Y, por supuesto, la responsabilidad: en un contrato o un prospecto médico, un error puede tener consecuencias graves.

Lejos de desaparecer, el papel del traductor humano parece desplazarse hacia lo que las máquinas hacen peor: decidir, interpretar y garantizar la calidad. Paradójicamente, cuanto mejores son las máquinas, más valiosa resulta la mirada humana capaz de detectar sus errores sutiles.`, q: `¿Qué es la posedición? | Traducir sin ayuda de máquinas ; *Revisar y corregir textos traducidos por una máquina ; Editar libros antes de publicarlos
¿En qué terrenos tropiezan aún las máquinas? | En los manuales técnicos ; *En la ironía, los juegos de palabras y las alusiones culturales ; En los correos sencillos
¿Qué paradoja señala el texto? | Que las máquinas empeoran ; *Que cuanto mejores son las máquinas, más valiosa es la mirada humana ; Que los traductores ya no son necesarios` }
    ],
    write: 'Choose a short English (or Dutch) text of about 150 words — an ad, a news item or a personal email — and translate it into natural Spanish. Then write a 120-word commentary explaining three decisions you made (register, a culture-bound term, a structural change).',
    talk: 'Act as a client who needs help communicating with a Spanish landlord or colleague. Give the learner messages in English; they must mediate in Spanish, choosing the right register, and explain their choices.',
    res: [R.fundeu(), R.bvmc('traducción'), R.slcAdv()]
  });

  S('c2-04', {
    title: 'Santiago: el español literario y culto',
    V: `
adonde fueres, haz lo que vieres | when in Rome, do as the Romans do | Ya sabes: {adonde fueres, haz lo que vieres}. | You know: when in Rome, do as the Romans do.
érase una vez | once upon a time | {Érase una vez} un rey muy triste. | Once upon a time there was a very sad king.
por ende | therefore (literary) | Llovía; {por ende}, no salimos. | It was raining; therefore, we didn't go out.
a la sazón | at that time (literary) | El ministro, {a la sazón} joven abogado, … | The minister, at that time a young lawyer, …
habida cuenta de que | given that | {Habida cuenta de que} no hay fondos, … | Given that there are no funds, …
so pena de | on pain of | {So pena de} multa. | On pain of a fine.
el relato | short story, tale | Un {relato} de Borges. | A story by Borges.
el verso | verse, line | Un {verso} de Machado. | A line by Machado.
el Siglo de Oro | Golden Age | El teatro del {Siglo de Oro}. | Golden Age theatre.
la picaresca | picaresque | El Lazarillo inaugura la {picaresca}. | Lazarillo begins the picaresque.
el peregrino / la peregrina | pilgrim | Miles de {peregrinos} llegan a Santiago. | Thousands of pilgrims reach Santiago.
la ruta jacobea | the Way of St James | La {ruta jacobea} atraviesa el norte de España. | The Way of St James crosses northern Spain.
seguir aprendiendo | to keep learning | Lo importante es {seguir aprendiendo}. | What matters is to keep learning.
el botafumeiro | giant censer (Santiago) | El {botafumeiro} vuela sobre los peregrinos. | The giant censer swings over the pilgrims.
la credencial | pilgrim passport | Sellan la {credencial} en cada albergue. | They stamp the pilgrim passport at each hostel.
la Compostela | Compostela certificate | Recibió la {Compostela} en la oficina del peregrino. | She received the Compostela at the pilgrim office.
la vieira | scallop shell | La {vieira} es el símbolo del Camino. | The scallop shell is the symbol of the Way.
el hórreo | raised granary | Un {hórreo} gallego de piedra. | A stone Galician granary.
el canon | canon | Las obras del {canon} literario. | The works of the literary canon.
la obra cumbre | masterpiece, crowning work | Su {obra cumbre} es el Quijote. | His crowning work is Don Quixote.
la narrativa | fiction, narrative | La {narrativa} contemporánea. | Contemporary fiction.
el narrador omnisciente | omniscient narrator | Un {narrador omnisciente} lo sabe todo. | An omniscient narrator knows everything.
la metáfora | metaphor | «Nuestras vidas son los ríos» es una {metáfora}. | «Our lives are the rivers» is a metaphor.
el soneto | sonnet | Un {soneto} de Quevedo. | A sonnet by Quevedo.
la estrofa | stanza | La segunda {estrofa}. | The second stanza.
la rima | rhyme | {Rima} asonante. | Assonant rhyme.
el romancero | ballad tradition | El {romancero} viejo. | The old ballads.
el Quijote | Don Quixote | Releí el {Quijote} este verano. | I reread Don Quixote this summer.
el Lazarillo | Lazarillo de Tormes | El {Lazarillo} es anónimo. | Lazarillo is anonymous.
La Celestina | La Celestina | {La Celestina} se publicó en 1499. | La Celestina was published in 1499.
el realismo mágico | magic realism | García Márquez y el {realismo mágico}. | García Márquez and magic realism.
el boom latinoamericano | Latin American Boom | Los autores del {boom latinoamericano}. | The writers of the Latin American Boom.
la Generación del 98 | Generation of '98 | Unamuno pertenece a la {Generación del 98}. | Unamuno belongs to the Generation of '98.
el modernismo | modernismo | Rubén Darío y el {modernismo}. | Rubén Darío and modernismo.
la relectura | rereading | Cada {relectura} descubre algo nuevo. | Each rereading reveals something new.
el lector / la lectora | reader | Una {lectora} voraz. | A voracious reader.
el club de lectura | book club | Me apunté a un {club de lectura}. | I joined a book club.
la inmersión | immersion | Un mes de {inmersión} en Salamanca. | A month of immersion in Salamanca.
el intercambio de idiomas | language exchange | Voy a un {intercambio de idiomas} los jueves. | I go to a language exchange on Thursdays.
el aprendizaje permanente | lifelong learning | El {aprendizaje permanente} no tiene meta. | Lifelong learning has no finish line.
`,
    D: `
Adonde ___, haz lo que vieres. (futuro de subjuntivo de ir) | fueres | When in Rome, do as the Romans do.
___ una vez un rey que tenía tres hijas. | Érase | Once upon a time there was a king who had three daughters.
Llovía sin cesar; por ___, decidimos quedarnos. | ende | It was raining non-stop; therefore, we decided to stay.
El ministro, a la ___ joven abogado, firmó el acuerdo. | sazón | The minister, then a young lawyer, signed the agreement.
Habida ___ de que no hay fondos, se suspende el proyecto. | cuenta | Given that there are no funds, the project is suspended.
Queda prohibido el paso, so ___ de multa. | pena | No entry, on pain of a fine.
El libro que el autor ___ (publicar, -ra literario) en 1950 fue un éxito. | publicara | The book the author had published in 1950 was a success.
Si ___ (tener, -se) tiempo, leería más. | tuviese | If I had time, I'd read more.
El Lazarillo inaugura la novela ___. | picaresca | Lazarillo begins the picaresque novel.
Cervantes y Quevedo son autores del Siglo de ___. | Oro | Cervantes and Quevedo are Golden Age writers.
Un poema de catorce versos endecasílabos es un ___. | soneto | A poem of fourteen hendecasyllabic lines is a sonnet.
El símbolo del Camino de Santiago es la ___. | vieira | The symbol of the Way of St James is the scallop shell.
Al llegar a Santiago, los peregrinos reciben la ___. | Compostela | On arriving in Santiago, pilgrims receive the Compostela.
En cada albergue sellan la ___ del peregrino. | credencial | At each hostel they stamp the pilgrim's passport.
García Márquez es el gran nombre del realismo ___. | mágico | García Márquez is the great name of magic realism.
Unamuno y Machado pertenecen a la Generación del ___. | 98 | Unamuno and Machado belong to the Generation of '98.
Un narrador que lo sabe todo es un narrador ___. | omnisciente | A narrator who knows everything is an omniscient narrator.
Cada ___ de un clásico revela algo nuevo. | relectura | Each rereading of a classic reveals something new.
El aprendizaje ___ no tiene meta: siempre se puede seguir. | permanente | Lifelong learning has no finish line: you can always go on.
Me he apuntado a un club de ___ para leer en español. | lectura | I've joined a book club to read in Spanish.
`,
    S: `
Adonde fueres, haz lo que vieres. | When in Rome, do as the Romans do.
Érase una vez un peregrino que caminó hasta Santiago. | Once upon a time there was a pilgrim who walked to Santiago.
Habida cuenta de que no hay fondos, se suspende el proyecto. | Given that there are no funds, the project is suspended.
El Quijote es la obra cumbre de Cervantes. | Don Quixote is Cervantes's crowning work.
Cada relectura de un clásico descubre algo nuevo. | Each rereading of a classic reveals something new.
Caminante, no hay camino: se hace camino al andar. | Traveller, there is no road: the road is made by walking.
La meta no es Santiago, sino el camino. | The goal isn't Santiago, but the way.
Lo importante es seguir aprendiendo. | What matters is to keep learning.
`,
    R: [
      { t: 'Llegada a Santiago', x: `Después de treinta y dos días de camino, Ingrid entró en la plaza del Obradoiro un martes de septiembre, poco antes del mediodía. Había salido de Roncesvalles con una mochila demasiado pesada, unas botas nuevas y un español de manual que apenas le servía para pedir un café. Llegaba con la mochila más ligera, los pies llenos de ampollas y la sensación de haber vivido un año en un mes.

Durante el camino había conversado con peregrinos de medio mundo y, sobre todo, con la gente de los pueblos: la dueña de un albergue en la Rioja que le enseñó a hacer tortilla, un pastor leonés que hablaba con una lentitud majestuosa, una anciana gallega que le respondía a todo con un «depende» lleno de retranca. Cada uno le regaló palabras nuevas que fue apuntando en un cuaderno.

En la oficina del peregrino recibió la Compostela, escrita en latín, con su nombre latinizado. Al día siguiente asistió a la misa y vio volar el botafumeiro sobre las cabezas de cientos de personas. No era creyente, pero se emocionó.

Esa noche, en un bar de la rúa do Franco, alguien le preguntó qué había aprendido. Ingrid pensó un momento y contestó: «Que la meta no era Santiago. Y que el español, como el camino, se hace al andar».`, q: `¿Cuánto duró el camino de Ingrid? | Un año ; *Treinta y dos días ; Una semana
¿Con quién aprendió más palabras? | Con otros peregrinos extranjeros ; *Con la gente de los pueblos ; En clases de español
¿Qué contestó Ingrid sobre lo que había aprendido? | Que Santiago era la meta ; *Que la meta no era Santiago y que el español se hace al andar ; Que no volvería a caminar` },
      { t: 'Leer a los clásicos', x: `Para muchos estudiantes, la palabra «clásico» evoca lecturas obligatorias, ediciones con notas a pie de página y una prosa que parece escrita para otra especie. Sin embargo, llegar al nivel de maestría en una lengua abre una puerta que antes estaba cerrada: la de leer a sus grandes autores sin intermediarios.

No hace falta empezar por el Quijote, aunque tarde o temprano conviene afrontarlo. Hay caminos más suaves. El Lazarillo de Tormes, breve y lleno de humor negro, es una puerta de entrada excelente al Siglo de Oro. Los Campos de Castilla de Machado o el Romancero gitano de Lorca permiten acercarse a la poesía con textos de una belleza inmediata. Y entre los contemporáneos, autores de España y de América ofrecen una prosa accesible y exigente a la vez.

Conviene, eso sí, aceptar algunas dificultades. Los textos antiguos contienen formas que ya no se usan: el futuro de subjuntivo («si así no lo hiciereis»), pronombres pegados al verbo («díjole»), vocabulario desaparecido. Una buena edición anotada y cierta paciencia bastan para superarlas.

La recompensa es enorme. Leer a los clásicos no es solo practicar el idioma: es conversar con quienes le dieron forma. Y descubrir, a menudo con sorpresa, que sus preguntas siguen siendo las nuestras.`, q: `¿Qué obra recomienda el texto como entrada al Siglo de Oro? | El Quijote ; *El Lazarillo de Tormes ; La Celestina
¿Qué dificultades menciona en los textos antiguos? | Que son demasiado largos ; *Formas en desuso como el futuro de subjuntivo o pronombres pegados al verbo ; Que no hay traducciones
¿Qué recompensa ofrece leer a los clásicos según el texto? | Aprobar exámenes ; *Conversar con quienes dieron forma a la lengua ; Aprender latín` },
      { t: 'Carta a quien empieza', x: `Querido estudiante que acabas de abrir tu primer libro de español:

Te escribo desde el otro extremo del camino, o al menos desde un lugar desde el que se ve bien el recorrido. Hubo un día en que «hola» y «gracias» eran todo mi vocabulario y en que la diferencia entre «ser» y «estar» me parecía una crueldad gratuita. Hoy leo novelas, discuto de política en tertulias improvisadas y, de vez en cuando, alguien me pregunta de qué parte de España soy. No lo cuento para presumir, sino para que sepas que es posible.

Habida cuenta de mi experiencia, permíteme tres consejos. El primero: no confundas avanzar con no equivocarte. Me equivoqué miles de veces y cada error me enseñó algo que ningún manual explicaba. El segundo: busca a las personas, no solo los libros. El idioma vive en las conversaciones de los bares, en las sobremesas, en las bromas que al principio no entenderás. El tercero: sé constante. Media hora al día durante años vale más que un mes heroico seguido de un abandono.

Y una última cosa. Llegará un momento en que creas haber terminado. No es así. Una lengua no se termina nunca; solo se aprende a seguir aprendiendo. Esa es, en realidad, la mejor noticia.

Buen camino.`, q: `¿Por qué cuenta el autor sus logros? | Para presumir ; *Para mostrar que es posible ; Para vender un curso
¿Cuál es el segundo consejo? | Estudiar muchas horas seguidas ; *Buscar a las personas, no solo los libros ; No equivocarse nunca
¿Qué dice sobre el final del aprendizaje? | Que se termina en el nivel C2 ; *Que una lengua no se termina nunca ; Que hay que dejarlo cuando uno se cansa` }
    ]
  });
})();
