/* A1 · Acceso (part 1) */
(function () {
  const R = RES, U = CAMINO.unit('A1');

  U({
    id: 'a1-sonidos', title: 'Sonidos: pronunciation and the alphabet', goal: ['Pronounce Spanish vowels and tricky consonants', 'Spell your name with the Spanish alphabet', 'Use basic classroom phrases'],
    grammar: {
      t: 'How Spanish sounds (Castilian pronunciation)',
      h: `<p>Spanish is written almost exactly as it is pronounced. Learn the sounds once and you can read anything aloud.</p>
<p><b>Five pure vowels</b>, always short and clear: <b>a</b> (casa), <b>e</b> (mesa), <b>i</b> (sí), <b>o</b> (todo), <b>u</b> (luna). They never become "uh".</p>
<table><tr><th>Letters</th><th>Sound</th><th>Examples</th></tr>
<tr><td>c + e/i, z</td><td>"th" as in <i>think</i> (Castilian)</td><td>cero, cine, zapato</td></tr>
<tr><td>c + a/o/u, qu</td><td>k</td><td>casa, queso, quince</td></tr>
<tr><td>g + e/i, j</td><td>throaty h (like Dutch g)</td><td>gente, jamón, Juan</td></tr>
<tr><td>g + a/o/u, gu + e/i</td><td>hard g</td><td>gato, guitarra</td></tr>
<tr><td>h</td><td>silent</td><td>hola, hotel</td></tr>
<tr><td>ll, y</td><td>y as in <i>yes</i></td><td>calle, yo</td></tr>
<tr><td>ñ</td><td>ny as in <i>canyon</i></td><td>España, mañana</td></tr>
<tr><td>r (single, between vowels)</td><td>one tap</td><td>pero, caro</td></tr>
<tr><td>rr, initial r</td><td>rolled r</td><td>perro, rojo</td></tr>
<tr><td>b, v</td><td>same sound</td><td>vino, bien</td></tr></table>
<p><b>Stress:</b> words ending in a vowel, -n or -s stress the second-to-last syllable (<i>ca</i>sa, <i>ha</i>blan); other words stress the last (ha<i>blar</i>, ciu<i>dad</i>). A written accent breaks the rule: <i>café, música, inglés</i>.</p>
<p><b>Alphabet:</b> a, be, ce, de, e, efe, ge, hache, i, jota, ka, ele, eme, ene, eñe, o, pe, cu, erre, ese, te, u, uve, uve doble, equis, i griega (ye), zeta.</p>`
    },
    V: `
hola | hello | ¡{Hola}, Marta! | Hello, Marta!
adiós | goodbye | {Adiós}, hasta mañana. | Goodbye, see you tomorrow.
sí | yes | {Sí}, claro. | Yes, of course.
no | no, not | {No}, gracias. | No, thanks.
gracias | thank you | Muchas {gracias}. | Thank you very much.
por favor | please | Un café, {por favor}. | A coffee, please.
perdón | sorry, excuse me | {Perdón}, ¿cómo se dice "book"? | Sorry, how do you say "book"?
¿cómo se dice…? | how do you say…? | {¿Cómo se dice} "window" en español? | How do you say "window" in Spanish?
¿qué significa…? | what does … mean? | {¿Qué significa} "mañana"? | What does "mañana" mean?
¿cómo se escribe? | how is it spelled? | {¿Cómo se escribe} tu apellido? | How do you spell your surname?
más despacio | more slowly | ¿Puedes hablar {más despacio}? | Can you speak more slowly?
otra vez | again | ¿Puedes repetirlo {otra vez}? | Can you repeat it again?
repetir | to repeat | ¿Puedes {repetir}, por favor? | Can you repeat, please?
no entiendo | I don't understand | Lo siento, {no entiendo}. | Sorry, I don't understand.
no lo sé | I don't know | —¿Dónde está? —{No lo sé}. | —Where is it? —I don't know.
entiendo | I understand | Ah, vale, ya {entiendo}. | Ah, OK, now I understand.
la letra | letter (of alphabet) | La {letra} ñ es muy española. | The letter ñ is very Spanish.
la palabra | word | Esta {palabra} es difícil. | This word is difficult.
la frase | sentence, phrase | Lee la {frase} en voz alta. | Read the sentence aloud.
el nombre | first name | Mi {nombre} es Daan. | My first name is Daan.
el apellido | surname | Mi {apellido} es De Vries. | My surname is De Vries.
el libro | book | Abre el {libro}, por favor. | Open the book, please.
el cuaderno | notebook | Escribe en el {cuaderno}. | Write in the notebook.
el bolígrafo | pen | ¿Tienes un {bolígrafo}? | Do you have a pen?
el lápiz | pencil | Necesito un {lápiz}. | I need a pencil.
la pregunta | question | Tengo una {pregunta}. | I have a question.
la respuesta | answer | La {respuesta} es correcta. | The answer is correct.
el ejemplo | example | Un {ejemplo}, por favor. | An example, please.
escuchar | to listen | {Escucha} el audio. | Listen to the audio.
leer | to read | {Lee} el texto. | Read the text.
escribir | to write | {Escribe} tu nombre aquí. | Write your name here.
hablar | to speak | Me gusta {hablar} español. | I like speaking Spanish.
el español | Spanish (language) | Estudio {español}. | I study Spanish.
fácil | easy | El español es {fácil} de pronunciar. | Spanish is easy to pronounce.
difícil | difficult | La erre es {difícil}. | The rolled r is difficult.
bien | well, right | ¡Muy {bien}! | Very good!
mal | badly, wrong | Está {mal} escrito. | It's spelled wrong.
correcto | correct | ¡{Correcto}! | Correct!
vale | OK (Spain) | —¿Empezamos? —{Vale}. | —Shall we start? —OK.
claro | of course, sure | ¡{Claro}! | Of course!
`,
    D: `
"Hola" se escribe con ___ (silent letter). | h | "Hola" is spelled with h.
La letra ñ se llama ___. | eñe | The letter ñ is called eñe.
La letra j se llama ___. | jota | The letter j is called jota.
La letra h se llama ___. | hache | The letter h is called hache.
La letra z se llama ___. | zeta | The letter z is called zeta.
La letra v se llama ___. | uve | The letter v is called uve.
La letra g se llama ___. | ge | The letter g is called ge.
La letra ll se pronuncia como la letra ___. | y | ll sounds like y.
¿Cómo se ___ "pen" en español? | dice | How do you say "pen" in Spanish?
¿Qué ___ "libro"? | significa | What does "libro" mean?
¿Cómo se ___ tu nombre? | escribe | How is your name spelled?
Lo siento, no ___. | entiendo | Sorry, I don't understand.
¿Puedes hablar más ___? | despacio | Can you speak more slowly?
¿Puedes repetir otra ___? | vez | Can you repeat again?
Muchas ___. | gracias | Thank you very much.
Un té, por ___. | favor | A tea, please.
"Café" lleva acento en la letra ___. | e | "Café" has an accent on the e.
"Inglés" lleva acento en la letra ___. | e | "Inglés" has an accent on the e.
"Música" lleva acento en la letra ___. | u | "Música" has an accent on the u.
En España, "zapato" empieza con el sonido ___ (English). | th | In Spain, "zapato" starts with a th sound.
`,
    S: `
¿Cómo se escribe tu apellido? | How do you spell your surname?
Perdón, no entiendo. ¿Puedes repetir? | Sorry, I don't understand. Can you repeat?
¿Cómo se dice "thank you" en español? | How do you say "thank you" in Spanish?
¿Qué significa "despacio"? | What does "despacio" mean?
Más despacio, por favor. | More slowly, please.
Mi nombre se escribe con uve doble. | My name is spelled with a w.
La erre es difícil, pero la practico. | The rolled r is difficult, but I practise it.
Vale, ya entiendo. | OK, now I get it.
`,
    R: [
      { t: 'En la clase', x: `—Hola, buenos días. Me llamo Carmen. Soy la profesora.
—Hola, Carmen. Me llamo Sanne.
—¿Cómo se escribe "Sanne"?
—Ese, a, ene, ene, e.
—Muy bien. ¿Y tu apellido?
—Bakker: be, a, ka, ka, e, erre.
—¡Perfecto! Gracias, Sanne.`, q: `¿Quién es Carmen? | Una estudiante ; *La profesora ; Una amiga
¿Cuántas enes tiene "Sanne"? | Una ; *Dos ; Tres
¿Con qué letra empieza "Bakker"? | Con ka ; Con a ; *Con be` },
      { t: 'Palabras famosas', x: `Muchas palabras españolas son internacionales: "paella", "tapas", "fiesta", "siesta", "chocolate", "patata". En español todas se pronuncian como se escriben. La "ll" de "paella" suena como "y". La "j" de "jamón" suena fuerte, como la "g" holandesa. Y la "h" de "hola" no suena nunca.`, q: `¿Cómo suena la "ll" de "paella"? | *Como "y" ; Como "l" ; No suena
¿Qué letra no suena nunca? | La j ; *La h ; La ñ
¿Cómo suena la "j" de "jamón"? | Como la j inglesa ; *Fuerte, como la g holandesa ; No suena` },
      { t: 'Preguntas útiles', x: `En clase, Tom no entiende una palabra. Levanta la mano y pregunta: "Perdón, ¿qué significa 'despacio'?". La profesora responde: "Significa 'slowly'". Después Tom pregunta: "¿Cómo se dice 'window' en español?". "Ventana", dice la profesora. "¿Puedes repetir, por favor?". "Ven-ta-na". "¡Gracias!".`, q: `¿Qué palabra no entiende Tom? | Ventana ; *Despacio ; Gracias
¿Cómo se dice "window" en español? | Despacio ; *Ventana ; Palabra
¿Qué hace Tom antes de preguntar? | *Levanta la mano ; Escribe ; Sale de clase` }
    ],
    write: 'Spell your full name and the name of your city letter by letter, in Spanish (e.g. "be, a, ka…"). Then write five classroom questions you will use often.',
    talk: 'You are a friendly Spanish teacher on the first day of class. Ask the learner how to spell their name and city; help with pronunciation tips and classroom phrases.',
    res: [R.lt(1, 2), R.ds('Superbeginner'), { t: 'Forvo: hear any word pronounced in Spain', u: 'https://forvo.com/languages/es/', k: 'listen', m: 10 }]
  });

  U({
    id: 'a1-hola', title: '¡Hola! Greetings and names', goal: ['Greet people at any time of day', 'Say your name and ask someone\'s', 'Say how you are'],
    grammar: {
      t: 'Subject pronouns and ser (to be): soy, eres, es',
      h: `<p>Spanish verbs change their ending for each person, so the pronoun is usually dropped: <b>Soy Ana</b> = I am Ana.</p>
<table><tr><th>Pronoun</th><th>ser</th><th>llamarse</th></tr>
<tr><td>yo (I)</td><td>soy</td><td>me llamo</td></tr><tr><td>tú (you, informal)</td><td>eres</td><td>te llamas</td></tr>
<tr><td>él / ella / usted (he, she, you formal)</td><td>es</td><td>se llama</td></tr><tr><td>nosotros/as (we)</td><td>somos</td><td>nos llamamos</td></tr>
<tr><td>vosotros/as (you all, Spain)</td><td>sois</td><td>os llamáis</td></tr><tr><td>ellos / ellas / ustedes (they, you all formal)</td><td>son</td><td>se llaman</td></tr></table>
<p><b>Tú vs usted:</b> in Spain <i>tú</i> is used with almost everyone your age or younger, colleagues and shop staff. Use <i>usted</i> with older strangers or in very formal settings. <b>Vosotros</b> is the normal plural "you" in Spain.</p>
<p>Questions start with an upside-down mark: <b>¿Cómo te llamas?</b> <b>¡Hola!</b></p>`
    },
    conj: { t: 'pres', v: ['ser', 'llamarse'] },
    V: `
buenos días | good morning | {Buenos días}, ¿qué tal? | Good morning, how are you?
buenas tardes | good afternoon / evening | {Buenas tardes}, señora López. | Good afternoon, Mrs López.
buenas noches | good night / evening | {Buenas noches}, hasta mañana. | Good night, see you tomorrow.
hasta luego | see you later | {Hasta luego}, Pablo. | See you later, Pablo.
hasta mañana | see you tomorrow | ¡{Hasta mañana}! | See you tomorrow!
hasta pronto | see you soon | Adiós, {hasta pronto}. | Bye, see you soon.
nos vemos | see you | {Nos vemos} el lunes. | See you on Monday.
¿qué tal? | how are things? | Hola, ¿{qué tal}? | Hi, how's it going?
¿cómo estás? | how are you? (informal) | Hola, Ana, {¿cómo estás?} | Hi Ana, how are you?
¿cómo está usted? | how are you? (formal) | Buenos días, {¿cómo está usted?} | Good morning, how are you?
muy bien | very well | Estoy {muy bien}, gracias. | I'm very well, thanks.
regular | so-so | —¿Qué tal? —{Regular}. | —How are you? —So-so.
fatal | terrible | Hoy estoy {fatal}. | Today I feel terrible.
genial | great | ¡Estoy {genial}! | I'm great!
cansado / cansada | tired | Estoy un poco {cansada}. | I'm a bit tired.
¿y tú? | and you? | Bien, gracias. {¿Y tú?} | Fine, thanks. And you?
encantado / encantada | pleased to meet you | {Encantada}, Javier. | Pleased to meet you, Javier.
mucho gusto | nice to meet you | {Mucho gusto}, señor Ruiz. | Nice to meet you, Mr Ruiz.
igualmente | likewise | —Encantado. —{Igualmente}. | —Pleased to meet you. —Likewise.
me llamo… | my name is… | {Me llamo} Laura. | My name is Laura.
¿cómo te llamas? | what's your name? | Hola, {¿cómo te llamas?} | Hi, what's your name?
¿cómo se llama? | what's his/her/your (formal) name? | {¿Cómo se llama} tu amiga? | What's your friend's name?
ser | to be (identity) | Yo {soy} Tom. | I am Tom.
llamarse | to be called | Mi perro {se llama} Rufo. | My dog is called Rufo.
el señor | Mr, gentleman | El {señor} García es mi vecino. | Mr García is my neighbour.
la señora | Mrs, lady | Buenos días, {señora}. | Good morning, madam.
el chico / la chica | boy, guy / girl | La {chica} nueva se llama Eva. | The new girl is called Eva.
el amigo / la amiga | friend | Este es mi {amigo} Luis. | This is my friend Luis.
este / esta | this (is) | {Esta} es Marta. | This is Marta.
yo | I | {Yo} soy Daan, ¿y tú? | I'm Daan, and you?
tú | you (informal) | ¿{Tú} eres Lucía? | Are you Lucía?
usted | you (formal) | ¿Es {usted} el señor Gómez? | Are you Mr Gómez?
nosotros / nosotras | we | {Nosotros} somos estudiantes. | We are students.
vosotros / vosotras | you all (Spain) | ¿{Vosotros} sois de aquí? | Are you all from here?
ellos / ellas | they | {Ellos} son mis amigos. | They are my friends.
bienvenido / bienvenida | welcome | ¡{Bienvenida} a Madrid! | Welcome to Madrid!
un beso | a kiss (goodbye) | Adiós, {un beso}. | Bye, love (a kiss).
dos besos | two kisses (greeting in Spain) | En España se saluda con {dos besos}. | In Spain people greet with two kisses.
de nada | you're welcome | —Gracias. —{De nada}. | —Thanks. —You're welcome.
lo siento | I'm sorry | {Lo siento}, no puedo. | I'm sorry, I can't.
`,
    D: `
Yo ___ Ana. | soy | I am Ana.
Tú ___ Pablo, ¿no? | eres | You are Pablo, right?
Ella ___ profesora. | es | She is a teacher.
Nosotros ___ estudiantes. | somos | We are students.
Vosotros ___ de Madrid. | sois | You (all) are from Madrid.
Ellos ___ Juan y Marta. | son | They are Juan and Marta.
¿Cómo te ___? | llamas | What is your name?
Me ___ Lucía. | llamo | My name is Lucía.
Mi hermano se ___ Óscar. | llama | My brother is called Óscar.
Nosotros nos ___ Ana y Luis. | llamamos | We are called Ana and Luis.
¿Cómo os ___? (vosotros) | llamáis | What are your names?
¿Usted ___ la señora Pérez? | es | Are you Mrs Pérez?
Buenos ___, ¿qué tal? | días | Good morning, how are you?
Buenas ___, hasta mañana. (night) | noches | Good night, see you tomorrow.
—Encantado. —___. | igualmente | —Pleased to meet you. —Likewise.
—Gracias. —De ___. | nada | —Thanks. —You're welcome.
Hasta ___ (tomorrow). | mañana | See you tomorrow.
¿Cómo ___ usted? | está | How are you? (formal)
Bien, gracias. ¿Y ___? | tú | Fine, thanks. And you?
___ es mi amiga Elena. (this) | esta | This is my friend Elena.
`,
    S: `
Hola, me llamo Pablo. ¿Y tú? | Hi, my name is Pablo. And you?
Buenos días, ¿cómo está usted? | Good morning, how are you (formal)?
Muy bien, gracias. ¿Y tú? | Very well, thanks. And you?
Encantada, soy Lucía. | Pleased to meet you, I'm Lucía.
Hasta luego, Marta. | See you later, Marta.
¿Qué tal? ¿Todo bien? | How's it going? All good?
Este es mi amigo Tom. | This is my friend Tom.
Bienvenidos a España. | Welcome to Spain.
`,
    R: [
      { t: 'En la residencia', x: `Son las nueve de la mañana. Lucía entra en la cocina de la residencia de estudiantes. Hay un chico nuevo.
—¡Hola! Buenos días. Me llamo Lucía. ¿Y tú, cómo te llamas?
—Hola, Lucía. Me llamo Tom. Encantado.
—Encantada. ¿Qué tal, Tom?
—Bien, gracias. Un poco cansado. ¿Y tú?
—Muy bien. Bueno, hasta luego, Tom.
—Hasta luego.`, q: `¿Cómo se llama el chico nuevo? | Pablo ; *Tom ; Lucía
¿Cómo está Tom? | Muy bien ; Mal ; *Bien, un poco cansado
¿Qué hora es? | *Las nueve de la mañana ; Las nueve de la noche ; La una` },
      { t: 'Dos besos', x: `En España, cuando dos personas se conocen, normalmente se dan dos besos: uno en cada mejilla. Entre dos hombres es más normal dar la mano. En el trabajo, muchas personas también dan la mano. Para decir adiós, los amigos dicen "hasta luego", "nos vemos" o "un beso". "Adiós" es un poco más definitivo.`, q: `¿Cuántos besos se dan en España? | Uno ; *Dos ; Tres
¿Qué es más normal entre dos hombres? | Dos besos ; *Dar la mano ; Nada
¿Qué dicen los amigos para decir adiós? | Buenos días ; *Hasta luego ; Encantado` },
      { t: 'Una presentación', x: `—Buenas tardes. Usted es el señor Martín, ¿verdad?
—Sí, soy yo. ¿Y usted?
—Me llamo Anna Visser. Soy la nueva vecina del tercero.
—¡Ah, bienvenida! Mucho gusto.
—Igualmente.
—Esta es mi mujer, Rosa.
—Encantada, Rosa.
—Encantada. ¡Bienvenida al edificio!`, q: `¿Quién es Anna? | La mujer del señor Martín ; *La nueva vecina ; Una profesora
¿Cómo se llama la mujer del señor Martín? | Anna ; *Rosa ; Lucía
¿Usan "tú" o "usted"? | Tú ; *Usted ; Vosotros` }
    ],
    write: 'Write a short dialogue (6–8 lines) where you meet someone new in a café in Madrid: greet them, give your name, ask theirs and how they are, introduce a friend, then say goodbye.',
    talk: 'You are a friendly Spaniard meeting the learner at a party in Madrid. Greet them, ask their name and how they are. Keep it to greetings and names.',
    res: [R.cb1(1), R.cb1(2), R.lt(3, 4), R.ds('Superbeginner')]
  });

  U({
    id: 'a1-pais', title: '¿De dónde eres? Countries and languages', goal: ['Say where you are from and where you live', 'Talk about nationalities and languages you speak'],
    grammar: {
      t: 'ser de + place; adjectives of nationality agree in gender',
      h: `<p>Origin uses <b>ser de</b>: <b>Soy de Ámsterdam.</b> ¿De dónde eres? Where you live uses <b>vivir en</b>: <b>Vivo en Utrecht.</b></p>
<p>Nationality adjectives agree with the person: <b>holandés → holandesa</b>, <b>español → española</b>, <b>inglés → inglesa</b>, <b>alemán → alemana</b>. Ending in -o changes to -a: <b>italiano → italiana</b>. Ending in -e or -a stays the same: <b>belga, estadounidense</b>. Plural: holandeses, españolas…</p>
<p>Nationalities and languages are <b>not capitalised</b> in Spanish: <i>Hablo inglés y neerlandés.</i> Languages are masculine: <i>el español</i>.</p>
<p>In Spain people say <b>holandés</b> colloquially, <b>neerlandés</b> for the language in careful speech, and <b>Países Bajos</b> or <b>Holanda</b> for the country.</p>
<p><b>Regular -ir verb vivir</b>: vivo, vives, vive, vivimos, vivís, viven.</p>`
    },
    conj: { t: 'pres', v: ['vivir', 'hablar', 'ser'] },
    V: `
España | Spain | Vivo en {España} desde 2024. | I've lived in Spain since 2024.
español / española | Spanish (m/f) | Mi novia es {española}. | My girlfriend is Spanish.
los Países Bajos | the Netherlands | Soy de {los Países Bajos}. | I'm from the Netherlands.
Holanda | Holland (colloquial) | ¿Hace frío en {Holanda}? | Is it cold in Holland?
holandés / holandesa | Dutch (m/f) | Soy {holandesa}, de Leiden. | I'm Dutch, from Leiden.
neerlandés | Dutch (language) | Hablo {neerlandés} e inglés. | I speak Dutch and English.
Bélgica | Belgium | Mi madre es de {Bélgica}. | My mother is from Belgium.
belga | Belgian | Es {belga}, de Gante. | He's Belgian, from Ghent.
Alemania | Germany | Trabajo en {Alemania}. | I work in Germany.
alemán / alemana | German (m/f) | Mi jefe es {alemán}. | My boss is German.
Francia | France | {Francia} está al norte de España. | France is north of Spain.
francés / francesa | French (m/f) | Sophie es {francesa}. | Sophie is French.
Inglaterra | England | Estudié en {Inglaterra}. | I studied in England.
inglés / inglesa | English (m/f) | Hablo {inglés} muy bien. | I speak English very well.
Italia | Italy | {Italia} es muy bonita. | Italy is very beautiful.
italiano / italiana | Italian (m/f) | Me gusta la comida {italiana}. | I like Italian food.
Portugal | Portugal | {Portugal} está al lado de España. | Portugal is next to Spain.
portugués / portuguesa | Portuguese (m/f) | El {portugués} es parecido al español. | Portuguese is similar to Spanish.
Estados Unidos | United States | Mi primo vive en {Estados Unidos}. | My cousin lives in the US.
estadounidense | American (US) | Es una empresa {estadounidense}. | It's an American company.
México | Mexico | Quiero viajar a {México}. | I want to travel to Mexico.
mexicano / mexicana | Mexican (m/f) | La comida {mexicana} es picante. | Mexican food is spicy.
Marruecos | Morocco | {Marruecos} está muy cerca de España. | Morocco is very close to Spain.
¿de dónde eres? | where are you from? | Hola, {¿de dónde eres?} | Hi, where are you from?
soy de… | I'm from… | {Soy de} Rotterdam. | I'm from Rotterdam.
vivir | to live | {Vivo} en el centro. | I live in the centre.
hablar | to speak | ¿{Hablas} francés? | Do you speak French?
el idioma | language | Hablo tres {idiomas}. | I speak three languages.
la lengua | language, tongue | El catalán es una {lengua} oficial. | Catalan is an official language.
un poco | a little | Hablo {un poco} de español. | I speak a little Spanish.
bastante bien | quite well | Hablo inglés {bastante bien}. | I speak English quite well.
el país | country | ¿De qué {país} eres? | What country are you from?
la ciudad | city | Utrecht es una {ciudad} bonita. | Utrecht is a pretty city.
el pueblo | village, small town | Mis abuelos viven en un {pueblo}. | My grandparents live in a village.
la capital | capital city | Madrid es la {capital} de España. | Madrid is the capital of Spain.
el norte | north | Bilbao está en el {norte}. | Bilbao is in the north.
el sur | south | Sevilla está en el {sur}. | Seville is in the south.
el este / el oeste | east / west | Valencia está en el {este}. | Valencia is in the east.
también | also, too | Yo {también} soy holandés. | I'm Dutch too.
pero | but | Soy belga, {pero} vivo en Madrid. | I'm Belgian, but I live in Madrid.
¿dónde vives? | where do you live? | {¿Dónde vives?} —En Gràcia. | Where do you live? —In Gràcia.
extranjero / extranjera | foreign, foreigner | Hay muchos {extranjeros} en Málaga. | There are many foreigners in Málaga.
`,
    D: `
Soy ___ Ámsterdam. | de | I'm from Amsterdam.
Ella es holand___. | esa | She is Dutch.
Él es españ___. | ol | He is Spanish.
¿De dónde ___ (tú)? | eres | Where are you from?
Vivo ___ Madrid. | en | I live in Madrid.
Marta es ingl___. | esa | Marta is English.
Hablo un ___ de español. | poco | I speak a little Spanish.
¿Dónde ___? (vivir, tú) | vives | Where do you live?
Nosotros ___ (vivir) en Utrecht. | vivimos | We live in Utrecht.
¿Vosotros ___ (hablar) inglés? | habláis | Do you (all) speak English?
Mis padres ___ (vivir) en Bélgica. | viven | My parents live in Belgium.
Sophie y Claire son frances___. | as | Sophie and Claire are French.
Los chicos son aleman___. | es | The boys are German.
Luca es italian___. | o | Luca is Italian.
Giulia es italian___. | a | Giulia is Italian.
Mi amigo es belg___. | a | My friend is Belgian.
Sevilla está en el ___ de España. | sur | Seville is in the south of Spain.
Madrid es la ___ de España. | capital | Madrid is the capital of Spain.
Yo ___ hablo neerlandés. (also) | también | I also speak Dutch.
Soy holandés, ___ vivo en Málaga. | pero | I'm Dutch, but I live in Málaga.
`,
    S: `
Soy holandés, pero vivo en Madrid. | I'm Dutch, but I live in Madrid.
¿De dónde eres? | Where are you from?
Hablo inglés, neerlandés y un poco de español. | I speak English, Dutch and a little Spanish.
Mi amiga es española, de Sevilla. | My friend is Spanish, from Seville.
¿Vives en el centro? | Do you live in the centre?
No, vivo en un barrio tranquilo. | No, I live in a quiet neighbourhood.
Mis abuelos viven en un pueblo del norte. | My grandparents live in a village in the north.
¿Cuántos idiomas hablas? | How many languages do you speak?
`,
    R: [
      { t: 'Un grupo internacional', x: `En la clase de español hay estudiantes de muchos países. Anna es alemana, de Berlín, pero vive en Ámsterdam. Luca es italiano y habla italiano, inglés y un poco de español. Sophie es francesa. Y Daan es holandés, de Utrecht. La profesora, Carmen, es española, de Valencia. Todos hablan español en clase. Fuera de clase hablan inglés... ¡pero también un poco de español!`, q: `¿De dónde es Anna? | De Ámsterdam ; *De Berlín ; De Valencia
¿Qué lenguas habla Luca? | *Italiano, inglés y un poco de español ; Solo italiano ; Francés e inglés
¿De dónde es la profesora? | De Utrecht ; De Sevilla ; *De Valencia` },
      { t: 'Las lenguas de España', x: `En España se habla español, también llamado castellano. Pero hay otras lenguas oficiales: el catalán en Cataluña, Valencia y las islas Baleares, el gallego en Galicia y el euskera en el País Vasco y en parte de Navarra. Muchas personas en estas regiones son bilingües. Por ejemplo, en Barcelona la gente habla catalán y castellano.`, q: `¿Cómo se llama también el español? | *Castellano ; Catalán ; Gallego
¿Dónde se habla gallego? | En Cataluña ; *En Galicia ; En Madrid
¿Qué significa "bilingüe"? | *Que habla dos lenguas ; Que no habla ; Que es extranjero` },
      { t: 'Mensaje de Emma', x: `¡Hola! Me llamo Emma y soy holandesa, de Haarlem. Tengo veintiocho años. Ahora vivo en Valencia porque trabajo en una empresa de turismo. Hablo neerlandés, inglés, alemán y un poco de español. Busco un intercambio de idiomas: tú me ayudas con el español y yo te ayudo con el inglés o el neerlandés. ¿Quedamos para tomar un café?`, q: `¿De dónde es Emma? | De Valencia ; *De Haarlem ; De Alemania
¿Por qué vive en Valencia? | Por su novio ; *Por su trabajo ; Por la playa
¿Qué busca Emma? | Un piso ; *Un intercambio de idiomas ; Un trabajo` }
    ],
    write: 'Introduce yourself: your name, where you are from, where you live now, which languages you speak and how well (5–6 sentences).',
    talk: 'You are a Spanish student called Carlos from Salamanca, chatting with the learner at a language exchange in Amsterdam. Ask where they are from, where they live and what languages they speak.',
    res: [R.cb1(3), R.cb1(4), R.lt(5, 6), R.easy('where are you from')]
  });

  U({
    id: 'a1-familia', title: 'La familia: nouns, articles and possessives', goal: ['Introduce your family', 'Use el/la/los/las and un/una', 'Say my, your, his/her'],
    grammar: {
      t: 'Gender, number, articles and possessive adjectives',
      h: `<p>Every noun is masculine or feminine. Usually <b>-o → masculine</b> (el hermano), <b>-a → feminine</b> (la hermana). Learn each noun <i>with its article</i>.</p>
<table><tr><th></th><th>masc.</th><th>fem.</th></tr><tr><td>the (sg.)</td><td>el</td><td>la</td></tr><tr><td>the (pl.)</td><td>los</td><td>las</td></tr><tr><td>a / some</td><td>un / unos</td><td>una / unas</td></tr></table>
<p>Plural: add <b>-s</b> after a vowel (hermano → hermanos, padre → padres) and <b>-es</b> after a consonant (ciudad → ciudades, país → países). A mixed group is masculine: <b>mis hermanos</b> can mean "my brothers and sisters"; <b>los padres</b> = parents.</p>
<p>Possessives: <b>mi / mis</b> (my), <b>tu / tus</b> (your), <b>su / sus</b> (his, her, its, your formal, their), <b>nuestro/a/os/as</b> (our), <b>vuestro/a/os/as</b> (your, plural). They agree with the thing owned: <i>mis padres, tu hermana, nuestra casa</i>.</p>
<p><b>tener</b> (to have): tengo, tienes, tiene, tenemos, tenéis, tienen.</p>`
    },
    conj: { t: 'pres', v: ['tener'] },
    V: `
la familia | family | Mi {familia} es pequeña. | My family is small.
el padre | father | Mi {padre} se llama Kees. | My father is called Kees.
la madre | mother | Mi {madre} es médica. | My mother is a doctor.
los padres | parents | Mis {padres} viven en Delft. | My parents live in Delft.
el hermano | brother | Tengo un {hermano} mayor. | I have an older brother.
la hermana | sister | Mi {hermana} estudia en Leiden. | My sister studies in Leiden.
los hermanos | brothers and sisters | ¿Tienes {hermanos}? | Do you have siblings?
el hijo | son | Su {hijo} tiene cinco años. | Her son is five.
la hija | daughter | Tienen una {hija}. | They have a daughter.
los hijos | children (sons and daughters) | No tengo {hijos}. | I don't have children.
el abuelo | grandfather | Mi {abuelo} tiene noventa años. | My grandfather is ninety.
la abuela | grandmother | Mi {abuela} cocina muy bien. | My grandmother cooks very well.
los abuelos | grandparents | Mis {abuelos} viven en el campo. | My grandparents live in the countryside.
el nieto / la nieta | grandson / granddaughter | Es su primera {nieta}. | She's their first granddaughter.
el tío / la tía | uncle / aunt | Mi {tía} vive en Barcelona. | My aunt lives in Barcelona.
el primo / la prima | cousin (m/f) | Mi {primo} es muy divertido. | My cousin is very funny.
el sobrino / la sobrina | nephew / niece | Tengo dos {sobrinos}. | I have two nephews.
el marido | husband | Su {marido} es de Bilbao. | Her husband is from Bilbao.
la mujer | wife; woman | Esta es mi {mujer}, Inés. | This is my wife, Inés.
el novio / la novia | boyfriend / girlfriend | Mi {novio} es español. | My boyfriend is Spanish.
la pareja | partner, couple | Vivo con mi {pareja}. | I live with my partner.
el bebé | baby | El {bebé} duerme mucho. | The baby sleeps a lot.
el niño / la niña | child, boy / girl | Los {niños} juegan en el parque. | The children play in the park.
el suegro / la suegra | father-in-law / mother-in-law | Mi {suegra} es muy simpática. | My mother-in-law is very nice.
el cuñado / la cuñada | brother-in-law / sister-in-law | Mi {cuñado} es profesor. | My brother-in-law is a teacher.
el perro | dog | Tenemos un {perro}. | We have a dog.
el gato | cat | El {gato} se llama Misi. | The cat is called Misi.
la mascota | pet | ¿Tienes {mascota}? | Do you have a pet?
tener | to have | {Tengo} dos hermanas. | I have two sisters.
mayor | older | Mi hermano {mayor} vive en Londres. | My older brother lives in London.
menor | younger | Mi hermana {menor} tiene veinte años. | My younger sister is twenty.
pequeño / pequeña | small, little; youngest | Clara es la {pequeña} de la familia. | Clara is the youngest in the family.
hijo único / hija única | only child | Soy {hija única}. | I'm an only child.
casado / casada | married | Mis padres están {casados}. | My parents are married.
soltero / soltera | single | Mi hermano está {soltero}. | My brother is single.
separado / separada | separated | Sus padres están {separados}. | His parents are separated.
mi / mis | my | {Mis} abuelos son de Galicia. | My grandparents are from Galicia.
tu / tus | your (informal) | ¿Cómo se llama {tu} madre? | What's your mother called?
su / sus | his, her, their, your (formal) | Ana y {su} marido viven aquí. | Ana and her husband live here.
nuestro / nuestra | our | {Nuestra} familia es grande. | Our family is big.
vuestro / vuestra | your (plural, Spain) | ¿Dónde está {vuestra} casa? | Where is your house?
`,
    D: `
___ madre se llama Elena. (my) | mi | My mother is called Elena.
___ hermanos viven en Bilbao. (my) | mis | My brothers live in Bilbao.
¿Cómo se llama ___ padre? (your) | tu | What is your father called?
Tengo ___ hermana. (a) | una | I have a sister.
___ abuelos son de Galicia. (the) | los | The grandparents are from Galicia.
Tengo dos ___ (gato). | gatos | I have two cats.
Ana y ___ marido viven en Málaga. (her) | su | Ana and her husband live in Málaga.
___ casa es grande. (our) | nuestra | Our house is big.
¿Dónde viven ___ padres? (your, vosotros) | vuestros | Where do your parents live?
Yo ___ (tener) un hermano. | tengo | I have a brother.
¿Tú ___ (tener) hijos? | tienes | Do you have children?
Mi tía ___ (tener) tres hijos. | tiene | My aunt has three children.
Nosotros ___ (tener) un perro. | tenemos | We have a dog.
¿Vosotros ___ (tener) mascotas? | tenéis | Do you (all) have pets?
Mis primos ___ (tener) una casa en la playa. | tienen | My cousins have a house on the beach.
Tengo dos ___ (ciudad) favoritas. | ciudades | I have two favourite cities.
___ niña se llama Lola. (the) | la | The girl is called Lola.
Tengo ___ primos en México. (some) | unos | I have some cousins in Mexico.
La madre de mi madre es mi ___. | abuela | My mother's mother is my grandmother.
El hermano de mi padre es mi ___. | tío | My father's brother is my uncle.
`,
    S: `
Tengo un hermano mayor y una hermana menor. | I have an older brother and a younger sister.
Mis padres viven en Rotterdam. | My parents live in Rotterdam.
¿Tienes hermanos? | Do you have brothers and sisters?
No, soy hija única. | No, I'm an only child.
Mi abuela tiene noventa años. | My grandmother is ninety.
Esta es mi pareja, Sam. | This is my partner, Sam.
Mi primo y su novia viven juntos. | My cousin and his girlfriend live together.
Nuestro perro se llama Toby. | Our dog is called Toby.
`,
    R: [
      { t: 'La familia de Javier', x: `Me llamo Javier y soy de Zaragoza. Tengo una familia bastante grande. Mis padres se llaman Luis y Pilar. Tengo dos hermanas: Sara es mayor que yo y vive en Barcelona con su novio; Clara es la pequeña y todavía vive con mis padres. Mis abuelos viven en un pueblo cerca de Huesca. También tenemos un perro, Toby. ¡Es parte de la familia!`, q: `¿Cuántas hermanas tiene Javier? | Una ; *Dos ; Tres
¿Dónde vive Sara? | En Zaragoza ; En Huesca ; *En Barcelona
¿Quién es Toby? | El hermano ; *El perro ; El abuelo` },
      { t: 'Los apellidos españoles', x: `En España cada persona tiene dos apellidos: el primero del padre y el primero de la madre. Por ejemplo, si el padre se llama Juan García López y la madre se llama Ana Martín Ruiz, su hija se llama Lucía García Martín. Las mujeres no cambian sus apellidos cuando se casan. Desde 2017, los padres pueden elegir el orden de los apellidos.`, q: `¿Cuántos apellidos tiene cada persona en España? | Uno ; *Dos ; Tres
¿Cómo se llama la hija del ejemplo? | Lucía López Ruiz ; *Lucía García Martín ; Lucía Martín García
¿Cambian las mujeres sus apellidos al casarse? | Sí ; *No ; Solo el segundo` },
      { t: 'Una foto de familia', x: `—¿Quiénes son estas personas?
—Es una foto de mi familia. Esta es mi madre y este es mi padre.
—¿Y el chico alto?
—Es mi hermano Pieter. Tiene treinta años y está casado. Esta es su mujer, Lotte, y estos son sus hijos, Bram y Fien.
—¡Qué guapos! Entonces tú eres tía.
—Sí, ¡y me encanta!`, q: `¿Quién es Pieter? | El padre ; *El hermano ; El sobrino
¿Cómo se llaman los hijos de Pieter? | Lotte y Bram ; *Bram y Fien ; Pieter y Fien
¿Qué es la narradora para Bram y Fien? | Su madre ; Su prima ; *Su tía` }
    ],
    write: 'Describe your family or the people you live with: names, ages, where they live, older/younger, pets (6–8 sentences).',
    talk: 'You are a curious Spanish neighbour in Valencia. Ask the learner about their family: brothers and sisters, parents, where they live, pets.',
    res: [R.cb1(5), R.lt(7, 8), R.ds('Superbeginner: la familia')]
  });

  U({
    id: 'a1-numeros', title: 'Números, edad y "hay"', goal: ['Count from 0 to 100', 'Say and ask ages and phone numbers', 'Say what there is with hay'],
    grammar: {
      t: 'Numbers, tener … años, and hay (there is / there are)',
      h: `<p><b>0–15:</b> cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce, trece, catorce, quince.<br><b>16–29</b> are one word: dieciséis, diecisiete, dieciocho, diecinueve, veinte, veintiuno, veintidós, veintitrés…<br><b>30+</b> use <i>y</i>: treinta y uno, cuarenta y dos, cincuenta, sesenta, setenta, ochenta, noventa, <b>cien</b> (100).</p>
<p>Age uses <b>tener</b>, not ser: <b>Tengo treinta años.</b> ¿Cuántos años tienes?</p>
<p><b>Hay</b> = there is / there are (never changes): <i>Hay un bar en la plaza. Hay tres habitaciones.</i> Ask: <b>¿Hay…?</b> / <b>¿Cuántos/as … hay?</b> <b>¿cuántos</b> + masculine, <b>¿cuántas</b> + feminine.</p>
<p><b>Uno</b> becomes <b>un</b> before a masculine noun (veintiún años) and <b>una</b> before a feminine one (veintiuna personas).</p>
<p>Spanish phone numbers are read in pairs or groups: 612 48 97 30 → seis, doce, cuarenta y ocho, noventa y siete, treinta.</p>`
    },
    V: `
cero | zero | El {cero} y el uno. | Zero and one.
uno | one | Tengo {un} hermano. | I have one brother.
dos | two | {Dos} cafés, por favor. | Two coffees, please.
tres | three | Somos {tres}. | There are three of us.
cuatro | four | Vivo en el piso {cuatro}. | I live on the fourth floor.
cinco | five | Son {cinco} euros. | It's five euros.
seis | six | Me levanto a las {seis}. | I get up at six.
siete | seven | Una semana tiene {siete} días. | A week has seven days.
ocho | eight | Trabajo {ocho} horas. | I work eight hours.
nueve | nine | Hay {nueve} estudiantes. | There are nine students.
diez | ten | Tengo {diez} minutos. | I have ten minutes.
once | eleven | Mi hijo tiene {once} años. | My son is eleven.
doce | twelve | Un año tiene {doce} meses. | A year has twelve months.
trece | thirteen | El número {trece}. | Number thirteen.
catorce | fourteen | Vivo en el número {catorce}. | I live at number fourteen.
quince | fifteen | {Quince} minutos. | Fifteen minutes.
dieciséis | sixteen | Tiene {dieciséis} años. | She's sixteen.
diecisiete | seventeen | El autobús {diecisiete}. | Bus seventeen.
dieciocho | eighteen | En España se vota a los {dieciocho}. | In Spain you vote at eighteen.
diecinueve | nineteen | {Diecinueve} euros. | Nineteen euros.
veinte | twenty | Tengo {veinte} años. | I'm twenty.
veintiuno | twenty-one | Tiene {veintiún} años. | He's twenty-one.
treinta | thirty | Mi hermana tiene {treinta} años. | My sister is thirty.
cuarenta | forty | {Cuarenta} y dos. | Forty-two.
cincuenta | fifty | Cuesta {cincuenta} euros. | It costs fifty euros.
sesenta | sixty | Una hora tiene {sesenta} minutos. | An hour has sixty minutes.
setenta | seventy | Mi padre tiene {setenta} años. | My father is seventy.
ochenta | eighty | Hay {ochenta} personas. | There are eighty people.
noventa | ninety | Mi abuela tiene {noventa} años. | My grandmother is ninety.
cien | a hundred | {Cien} por cien. | A hundred percent.
¿cuántos años tienes? | how old are you? | Hola, {¿cuántos años tienes?} | Hi, how old are you?
el año | year | Tengo treinta {años}. | I'm thirty years old.
hay | there is / there are | {Hay} un bar en la esquina. | There's a bar on the corner.
¿cuántos? / ¿cuántas? | how many? | {¿Cuántas} personas hay? | How many people are there?
el número | number | ¿Cuál es tu {número} de teléfono? | What's your phone number?
el teléfono | phone | Mi {teléfono} es el 612 33 44 55. | My phone is 612 33 44 55.
el móvil | mobile phone (Spain) | ¿Tienes el {móvil} aquí? | Do you have your mobile here?
el correo electrónico | email | Mi {correo electrónico} es ana@mail.com. | My email is ana@mail.com.
la arroba | @ sign | Ana {arroba} mail punto com. | Ana at mail dot com.
la persona | person | Hay tres {personas} en la cola. | There are three people in the queue.
más | plus, more | Dos {más} dos son cuatro. | Two plus two is four.
menos | minus, less | Diez {menos} tres son siete. | Ten minus three is seven.
`,
    D: `
Tengo veinte ___ (years). | años | I'm twenty.
¿Cuántos años ___ (tú)? | tienes | How old are you?
___ dos bares en mi calle. | hay | There are two bars in my street.
Mi abuelo tiene ochenta y ___ (5) años. | cinco | My grandfather is 85.
15 = ___ | quince | fifteen
16 = ___ | dieciséis | sixteen
22 = ___ | veintidós | twenty-two
31 = treinta y ___ | uno | thirty-one
47 = cuarenta y ___ | siete | forty-seven
58 = ___ y ocho | cincuenta | fifty-eight
70 = ___ | setenta | seventy
100 = ___ | cien | one hundred
¿Cuántas personas ___ en tu familia? | hay | How many people are there in your family?
¿___ hermanos tienes? (how many) | cuántos | How many siblings do you have?
¿___ habitaciones hay? (how many) | cuántas | How many rooms are there?
Mi hermana ___ (tener) diecinueve años. | tiene | My sister is nineteen.
Tiene veinti___ años. (21, before años) | ún | He's twenty-one.
Dos más dos son ___. | cuatro | Two plus two is four.
Diez menos tres son ___. | siete | Ten minus three is seven.
¿Cuál es tu número de ___? | teléfono | What's your phone number?
`,
    S: `
Tengo treinta y dos años. | I am thirty-two.
¿Cuántos años tiene tu hermana? | How old is your sister?
Mi número es el seis, cuarenta y cinco, doce, treinta y ocho. | My number is 6 45 12 38.
En mi clase hay doce estudiantes. | There are twelve students in my class.
¿Hay un supermercado cerca? | Is there a supermarket nearby?
Son quince euros, por favor. | That's fifteen euros, please.
¿Me das tu correo electrónico? | Can you give me your email?
No hay leche en la nevera. | There's no milk in the fridge.
`,
    R: [
      { t: 'Un piso para compartir', x: `Se alquila habitación en piso compartido en Lavapiés, Madrid. El piso tiene cuatro habitaciones, dos baños y una cocina grande. Hay tres compañeros: Irene (veinticinco años), Marcos (veintiocho) y Yuki (treinta y uno). El precio es de cuatrocientos cincuenta euros al mes. Teléfono: 612 48 97 30.`, q: `¿Cuántas habitaciones tiene el piso? | Dos ; Tres ; *Cuatro
¿Cuántos años tiene Marcos? | 25 ; *28 ; 31
¿Cuántos baños hay? | Uno ; *Dos ; Cuatro` },
      { t: 'La lotería de Navidad', x: `El 22 de diciembre, en España, hay un sorteo muy famoso: la Lotería de Navidad. Los niños del colegio de San Ildefonso cantan los números en la televisión. El premio más grande se llama "El Gordo". Muchas familias y compañeros de trabajo compran un número juntos. ¡Todo el país escucha los números!`, q: `¿Qué día es la Lotería de Navidad? | El 24 de diciembre ; *El 22 de diciembre ; El 31 de diciembre
¿Quién canta los números? | Los presentadores ; *Niños de un colegio ; Los ganadores
¿Cómo se llama el premio más grande? | El Grande ; *El Gordo ; La Suerte` },
      { t: 'Datos personales', x: `—Buenos días. Necesito sus datos, por favor. ¿Nombre?
—Daan Visser.
—¿Edad?
—Treinta y cuatro años.
—¿Teléfono?
—Seis, cuarenta y uno, veintidós, cero ocho, cincuenta.
—¿Y correo electrónico?
—daan punto visser arroba mail punto com.
—Perfecto. Gracias.`, q: `¿Cuántos años tiene Daan? | 24 ; *34 ; 44
¿Qué es "arroba"? | El punto ; *El símbolo @ ; El número cero
¿Cómo empieza su teléfono? | *Seis, cuarenta y uno ; Seis, catorce ; Dieciséis` }
    ],
    write: 'Write a short message to a new flatmate: your age, your phone number written out in words, how many people live in your home, and what there is in your neighbourhood (use hay).',
    talk: 'You are a landlord in Madrid on the phone with the learner, who wants to rent a room. Ask their age and phone number, say the price and what there is in the flat.',
    res: [R.cb1(6), R.lt(9, 10), R.rayuela()]
  });

  U({
    id: 'a1-calendario', title: 'El calendario: days, months and dates', goal: ['Say the date, days of the week and months', 'Ask question words: qué, cuándo, cuál, quién', 'Talk about birthdays and seasons'],
    grammar: {
      t: 'Dates and question words',
      h: `<p><b>Days</b> (lowercase, masculine): lunes, martes, miércoles, jueves, viernes, sábado, domingo. "On Monday" = <b>el lunes</b>; "on Mondays" = <b>los lunes</b> (no preposition!).</p>
<p><b>Months</b> (lowercase): enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre.</p>
<p><b>Dates</b>: <i>Hoy es lunes, 3 de marzo.</i> "On 3 March" = <b>el 3 de marzo</b>. The first of the month: <b>el uno</b> (or <i>el primero</i>) <b>de mayo</b>. Years: <i>dos mil veintiséis</i> (2026).</p>
<p><b>Question words</b> always have an accent: <b>¿qué?</b> (what), <b>¿cuál?</b> (which / what, from options), <b>¿quién?</b> (who), <b>¿cuándo?</b> (when), <b>¿dónde?</b> (where), <b>¿cómo?</b> (how), <b>¿cuánto?</b> (how much), <b>¿por qué?</b> (why) — answer <b>porque</b> (because).</p>
<p>¿Cuál es la fecha de hoy? ¿Qué día es hoy? ¿Cuándo es tu cumpleaños? — <i>Es el 12 de julio.</i></p>`
    },
    V: `
el lunes | Monday | {El lunes} tengo clase. | On Monday I have class.
el martes | Tuesday | Los {martes} voy al gimnasio. | On Tuesdays I go to the gym.
el miércoles | Wednesday | Hoy es {miércoles}. | Today is Wednesday.
el jueves | Thursday | Nos vemos el {jueves}. | See you on Thursday.
el viernes | Friday | ¡Por fin es {viernes}! | It's Friday at last!
el sábado | Saturday | El {sábado} hay una fiesta. | There's a party on Saturday.
el domingo | Sunday | Los {domingos} como con mi familia. | On Sundays I eat with my family.
el fin de semana | weekend | ¿Qué haces el {fin de semana}? | What do you do at the weekend?
la semana | week | Trabajo cinco días a la {semana}. | I work five days a week.
el mes | month | Pago el alquiler cada {mes}. | I pay the rent every month.
enero | January | En {enero} hace frío. | In January it's cold.
febrero | February | {Febrero} tiene veintiocho días. | February has 28 days.
marzo | March | Mi cumpleaños es en {marzo}. | My birthday is in March.
abril | April | En {abril} llueve mucho. | It rains a lot in April.
mayo | May | El uno de {mayo} es fiesta. | The first of May is a holiday.
junio | June | Las clases terminan en {junio}. | Classes end in June.
julio | July | En {julio} voy a la playa. | In July I go to the beach.
agosto | August | En {agosto} muchas tiendas cierran. | In August many shops close.
septiembre | September | El curso empieza en {septiembre}. | The school year starts in September.
octubre | October | El doce de {octubre} es fiesta nacional. | The 12th of October is a national holiday.
noviembre | November | {Noviembre} es un mes tranquilo. | November is a quiet month.
diciembre | December | En {diciembre} es Navidad. | In December it's Christmas.
la fecha | date | ¿Cuál es la {fecha} de hoy? | What's today's date?
hoy | today | {Hoy} es martes. | Today is Tuesday.
mañana | tomorrow | {Mañana} es miércoles. | Tomorrow is Wednesday.
ayer | yesterday | {Ayer} fue lunes. | Yesterday was Monday.
el cumpleaños | birthday | ¡Feliz {cumpleaños}! | Happy birthday!
la primavera | spring | En {primavera} hay muchas flores. | In spring there are many flowers.
el verano | summer | El {verano} en Sevilla es muy caluroso. | Summer in Seville is very hot.
el otoño | autumn | Me gusta el {otoño}. | I like autumn.
el invierno | winter | En {invierno} esquiamos. | In winter we ski.
la estación | season; station | ¿Cuál es tu {estación} favorita? | What's your favourite season?
¿qué? | what? | {¿Qué} día es hoy? | What day is it today?
¿cuál? | which? what? | {¿Cuál} es tu número? | What is your number?
¿quién? | who? | {¿Quién} es ese chico? | Who is that boy?
¿cuándo? | when? | {¿Cuándo} es tu cumpleaños? | When is your birthday?
¿dónde? | where? | {¿Dónde} vives? | Where do you live?
¿cómo? | how? | {¿Cómo} se dice "week"? | How do you say "week"?
¿por qué? | why? | {¿Por qué} estudias español? | Why do you study Spanish?
porque | because | Estudio español {porque} me gusta. | I study Spanish because I like it.
la fiesta | party; public holiday | El lunes es {fiesta}. | Monday is a public holiday.
las vacaciones | holidays, vacation | En agosto estoy de {vacaciones}. | In August I'm on holiday.
`,
    D: `
Hoy es ___, 5 de mayo. (Monday) | lunes | Today is Monday, 5 May.
___ sábados no trabajo. (on Saturdays) | los | On Saturdays I don't work.
Nos vemos ___ viernes. (on Friday) | el | See you on Friday.
Mi cumpleaños es el 3 ___ junio. | de | My birthday is on 3 June.
El primer mes del año es ___. | enero | The first month of the year is January.
El último mes del año es ___. | diciembre | The last month of the year is December.
Después de marzo viene ___. | abril | After March comes April.
El día después del jueves es el ___. | viernes | The day after Thursday is Friday.
El día antes del lunes es el ___. | domingo | The day before Monday is Sunday.
¿___ es tu cumpleaños? (when) | cuándo | When is your birthday?
¿___ vives? (where) | dónde | Where do you live?
¿___ es esa chica? (who) | quién | Who is that girl?
¿___ estudias español? (why) | por qué | Why do you study Spanish?
Estudio español ___ vivo en España. (because) | porque | I study Spanish because I live in Spain.
¿___ es tu color favorito? (which/what) | cuál | What's your favourite colour?
¿___ significa "fecha"? (what) | qué | What does "fecha" mean?
En ___ hace calor. (summer) | verano | In summer it's hot.
Hoy es martes; ___ es miércoles. | mañana | Today is Tuesday; tomorrow is Wednesday.
Hoy es martes; ___ fue lunes. | ayer | Today is Tuesday; yesterday was Monday.
¡Feliz ___! | cumpleaños | Happy birthday!
`,
    S: `
¿Qué día es hoy? —Hoy es jueves. | What day is it today? —Today is Thursday.
¿Cuál es la fecha de hoy? | What's today's date?
Mi cumpleaños es el doce de julio. | My birthday is on the 12th of July.
Los lunes tengo clase de español. | On Mondays I have Spanish class.
En agosto muchas tiendas cierran. | In August many shops close.
¿Por qué te gusta el otoño? —Porque es tranquilo. | Why do you like autumn? —Because it's quiet.
El fin de semana voy a la sierra. | At the weekend I go to the mountains.
¿Cuándo empiezan tus vacaciones? | When do your holidays start?
`,
    R: [
      { t: 'Fiestas en España', x: `En España hay muchas fiestas. El 6 de enero es el Día de Reyes: los niños reciben regalos de los Reyes Magos. En marzo o abril es Semana Santa. El 1 de mayo es el Día del Trabajador. El 12 de octubre es la Fiesta Nacional. Y el 25 de diciembre es Navidad. Además, cada ciudad tiene sus propias fiestas, como San Fermín en Pamplona, en julio.`, q: `¿Qué pasa el 6 de enero? | Es Navidad ; *Los niños reciben regalos de los Reyes Magos ; Es la Fiesta Nacional
¿Cuándo es San Fermín? | En enero ; *En julio ; En octubre
¿Qué fiesta es el 1 de mayo? | Navidad ; *El Día del Trabajador ; Semana Santa` },
      { t: 'La agenda de Marta', x: `Marta tiene una semana muy ocupada. El lunes tiene una reunión a las nueve. El martes y el jueves va a clase de yoga. El miércoles es el cumpleaños de su madre: cena con la familia. El viernes sale con sus amigos. El sábado trabaja por la mañana y el domingo... ¡el domingo no hace nada!`, q: `¿Qué día es el cumpleaños de su madre? | El lunes ; *El miércoles ; El viernes
¿Cuándo va a yoga? | El lunes y el miércoles ; *El martes y el jueves ; El sábado
¿Qué hace el domingo? | Trabaja ; Sale con amigos ; *Nada` },
      { t: 'El tiempo y las estaciones', x: `España es un país de contrastes. En verano, en el sur, hace mucho calor: en Sevilla o Córdoba hay más de cuarenta grados en julio y agosto. En invierno, en el centro, hace frío por la noche. En el norte llueve mucho en otoño y en invierno, y por eso es muy verde. La primavera es la estación favorita de muchos españoles: no hace ni frío ni calor.`, q: `¿Dónde hace mucho calor en verano? | En el norte ; *En el sur ; En todas partes igual
¿Por qué es verde el norte? | Porque hace calor ; *Porque llueve mucho ; Porque hay montañas
¿Cuál es la estación favorita de muchos españoles? | El verano ; El invierno ; *La primavera` }
    ],
    write: 'Describe your typical week day by day (one sentence per day), say when your birthday is and what your favourite season is and why (porque…).',
    talk: 'You are a Spanish coworker planning the team calendar with the learner. Ask about their birthday, which days they work, when their holidays are and their favourite season.',
    res: [R.cb1(12), R.lt(11, 12), R.ds('Superbeginner: el calendario')]
  });

  U({
    id: 'a1-trabajo', title: 'El trabajo: regular -ar verbs', goal: ['Say what you do for a living or study', 'Conjugate regular -ar verbs in the present', 'Make sentences negative'],
    grammar: {
      t: 'Present tense of regular -ar verbs',
      h: `<p>Remove <b>-ar</b> and add the endings: <b>hablar → habl-</b></p>
<table><tr><th></th><th>hablar</th><th>trabajar</th></tr><tr><td>yo</td><td>hablo</td><td>trabajo</td></tr><tr><td>tú</td><td>hablas</td><td>trabajas</td></tr>
<tr><td>él/ella/usted</td><td>habla</td><td>trabaja</td></tr><tr><td>nosotros</td><td>hablamos</td><td>trabajamos</td></tr><tr><td>vosotros</td><td>habláis</td><td>trabajáis</td></tr><tr><td>ellos/ustedes</td><td>hablan</td><td>trabajan</td></tr></table>
<p>Jobs drop the article after ser: <b>Soy ingeniera</b> (not "una ingeniera"). Ask <b>¿A qué te dedicas?</b> (what do you do?) or <b>¿En qué trabajas?</b></p>
<p>Many job nouns change for gender: <i>el profesor / la profesora, el camarero / la camarera</i>; nouns in -ista and -nte usually don't: <i>el/la periodista, el/la estudiante</i>.</p>
<p>Negation: put <b>no</b> before the verb: <i>No trabajo los lunes.</i></p>`
    },
    conj: { t: 'pres', v: ['hablar', 'trabajar', 'estudiar', 'necesitar', 'buscar'] },
    V: `
trabajar | to work | {Trabajo} en una oficina. | I work in an office.
estudiar | to study | {Estudio} Derecho. | I study law.
ganar | to earn; to win | {Gana} mucho dinero. | She earns a lot of money.
necesitar | to need | {Necesito} un ordenador nuevo. | I need a new computer.
buscar | to look for | {Busco} trabajo. | I'm looking for work.
llegar | to arrive | {Llego} a la oficina a las nueve. | I get to the office at nine.
terminar | to finish | {Termino} a las cinco. | I finish at five.
ayudar | to help | {Ayudo} a los clientes. | I help the customers.
enseñar | to teach; to show | {Enseño} inglés en una academia. | I teach English at a language school.
usar | to use | {Uso} el ordenador todo el día. | I use the computer all day.
llamar | to call | {Llamo} a clientes por teléfono. | I call customers on the phone.
el trabajo | job, work | Me gusta mi {trabajo}. | I like my job.
la oficina | office | La {oficina} está en el centro. | The office is in the centre.
la empresa | company | Trabajo en una {empresa} pequeña. | I work at a small company.
el jefe / la jefa | boss | Mi {jefa} es muy simpática. | My boss is very nice.
el compañero / la compañera | colleague, classmate | Mis {compañeros} son de muchos países. | My colleagues are from many countries.
el cliente / la clienta | customer, client | Hablo con {clientes} de toda Europa. | I talk to customers from all over Europe.
el sueldo | salary | El {sueldo} no es muy alto. | The salary isn't very high.
el profesor / la profesora | teacher | Mi madre es {profesora}. | My mother is a teacher.
el médico / la médica | doctor | El {médico} trabaja en el hospital. | The doctor works at the hospital.
el enfermero / la enfermera | nurse | Soy {enfermera}. | I'm a nurse.
el ingeniero / la ingeniera | engineer | Es {ingeniero} de software. | He's a software engineer.
el programador / la programadora | programmer | Busco un trabajo de {programador}. | I'm looking for a job as a programmer.
el camarero / la camarera | waiter / waitress | El {camarero} es muy rápido. | The waiter is very fast.
el cocinero / la cocinera | cook, chef | Mi tío es {cocinero}. | My uncle is a cook.
el abogado / la abogada | lawyer | Mi hermana es {abogada}. | My sister is a lawyer.
el / la periodista | journalist | Es {periodista} en un periódico. | She's a journalist at a newspaper.
el / la dependiente | shop assistant | La {dependienta} es muy amable. | The shop assistant is very kind.
el / la estudiante | student | Soy {estudiante} de español. | I'm a student of Spanish.
el autónomo / la autónoma | self-employed | Trabajo como {autónoma}. | I work as a freelancer.
jubilado / jubilada | retired | Mi padre está {jubilado}. | My father is retired.
en paro | unemployed (Spain) | Mi primo está {en paro}. | My cousin is unemployed.
la universidad | university | Estudio en la {universidad} de Granada. | I study at the University of Granada.
el hospital | hospital | Trabaja en un {hospital}. | She works in a hospital.
la tienda | shop | Trabajo en una {tienda} de ropa. | I work in a clothes shop.
¿a qué te dedicas? | what do you do (for a living)? | Oye, {¿a qué te dedicas?} | Hey, what do you do?
¿en qué trabajas? | what's your job? | {¿En qué trabajas?} —Soy profesor. | What's your job? —I'm a teacher.
a tiempo completo | full-time | Trabajo {a tiempo completo}. | I work full-time.
a tiempo parcial | part-time | Trabaja {a tiempo parcial}. | She works part-time.
desde casa | from home | Los viernes trabajo {desde casa}. | On Fridays I work from home.
mucho | a lot | Trabajas {mucho}. | You work a lot.
`,
    D: `
Yo ___ en una oficina. (trabajar) | trabajo | I work in an office.
¿Tú ___ medicina? (estudiar) | estudias | Do you study medicine?
Ella ___ tres idiomas. (hablar) | habla | She speaks three languages.
Nosotros ___ un piso. (buscar) | buscamos | We are looking for a flat.
¿Vosotros ___ en Madrid? (trabajar) | trabajáis | Do you (all) work in Madrid?
Mis padres no ___ (trabajar); están jubilados. | trabajan | My parents don't work; they're retired.
Soy ___ (engineer, f). | ingeniera | I'm an engineer.
¿A qué te ___? | dedicas | What do you do?
Yo ___ (llegar) a las nueve. | llego | I arrive at nine.
¿A qué hora ___ (terminar, tú)? | terminas | What time do you finish?
Mi jefa ___ (ganar) mucho. | gana | My boss earns a lot.
Nosotros ___ (necesitar) ayuda. | necesitamos | We need help.
¿Usted ___ (enseñar) inglés? | enseña | Do you teach English?
Los camareros ___ (ayudar) a los clientes. | ayudan | The waiters help the customers.
Yo ___ trabajo los domingos. (negative) | no | I don't work on Sundays.
Mi hermano está en ___; busca trabajo. | paro | My brother is unemployed; he's looking for work.
Ella es ___. (journalist) | periodista | She's a journalist.
Trabajo a tiempo ___; solo por las mañanas. | parcial | I work part-time; only in the mornings.
Vosotros ___ (usar) mucho el móvil. | usáis | You (all) use your phones a lot.
Ellos ___ (llamar) a sus clientes. | llaman | They call their clients.
`,
    S: `
Trabajo en una empresa de tecnología. | I work at a tech company.
¿A qué te dedicas? | What do you do?
Soy enfermero y trabajo en un hospital. | I'm a nurse and I work in a hospital.
Mi hermana estudia Derecho en Granada. | My sister studies law in Granada.
No trabajo los fines de semana. | I don't work at weekends.
Necesito un trabajo nuevo. | I need a new job.
Los viernes trabajo desde casa. | On Fridays I work from home.
Mi jefe habla cuatro idiomas. | My boss speaks four languages.
`,
    R: [
      { t: 'Tres trabajos', x: `Rosa es médica y trabaja en un centro de salud en Sevilla. Trabaja mucho, pero le encanta su trabajo. Su marido, Andrés, es camarero en un bar del centro; trabaja por la noche y los fines de semana. Su hijo, Pablo, estudia informática en la universidad y busca un trabajo de programador para el verano. En casa hablan español y, con la abuela, un poco de inglés: ¡es de Londres!`, q: `¿Dónde trabaja Rosa? | En un bar ; *En un centro de salud ; En la universidad
¿Cuándo trabaja Andrés? | Por la mañana ; *Por la noche y los fines de semana ; Los lunes
¿Qué busca Pablo? | Un piso ; *Un trabajo de programador ; Una novia` },
      { t: 'El horario español', x: `En muchas oficinas españolas la gente empieza a trabajar a las ocho o a las nueve. A media mañana muchos toman un café. Comen entre las dos y las tres, y a veces trabajan hasta las seis o las siete. En verano, muchas empresas tienen "jornada intensiva": trabajan de ocho a tres y no trabajan por la tarde.`, q: `¿A qué hora comen muchos españoles? | A las doce ; *Entre las dos y las tres ; A las cinco
¿Qué es la "jornada intensiva"? | Trabajar los fines de semana ; *Trabajar de ocho a tres, sin tarde ; Trabajar de noche
¿Cuándo tienen jornada intensiva muchas empresas? | En invierno ; *En verano ; Siempre` },
      { t: 'Una entrevista corta', x: `—Hola, ¿cómo te llamas?
—Me llamo Jorge. Soy cocinero.
—¿Dónde trabajas?
—En un restaurante del barrio de Salamanca.
—¿Trabajas mucho?
—Sí, bastante. Llego a las once de la mañana y termino a medianoche.
—¿Te gusta tu trabajo?
—Me encanta. Cocinar es mi pasión, pero el sueldo no es muy alto.`, q: `¿Qué es Jorge? | Camarero ; *Cocinero ; Periodista
¿A qué hora termina? | A las once ; *A medianoche ; A las cinco
¿Qué problema tiene su trabajo? | Es aburrido ; *El sueldo no es muy alto ; Está lejos` }
    ],
    write: 'Describe your job or studies: what you do, where, your hours, your colleagues, and one thing you like and one you don\'t (8 sentences).',
    talk: 'You are a recruiter in Barcelona making small talk with the learner. Ask what they do, where they work or study, their hours and which languages they speak.',
    res: [R.cb1(7), R.lt(13, 14), R.easy('trabajo')]
  });

  U({
    id: 'a1-gustos', title: 'Me gusta: likes and dislikes', goal: ['Say what you like and dislike', 'Agree and disagree with también / tampoco / a mí sí / a mí no'],
    grammar: {
      t: 'gustar and encantar',
      h: `<p><b>Gustar</b> works backwards: the thing liked is the subject. <b>Me gusta el café</b> = coffee pleases me.</p>
<p>Singular noun or a verb → <b>gusta</b>: <i>Me gusta la música. Me gusta bailar.</i> Plural noun → <b>gustan</b>: <i>Me gustan los perros.</i></p>
<table><tr><th>(a mí)</th><td>me gusta(n)</td></tr><tr><th>(a ti)</th><td>te gusta(n)</td></tr><tr><th>(a él/ella/usted)</th><td>le gusta(n)</td></tr>
<tr><th>(a nosotros)</th><td>nos gusta(n)</td></tr><tr><th>(a vosotros)</th><td>os gusta(n)</td></tr><tr><th>(a ellos/ustedes)</th><td>les gusta(n)</td></tr></table>
<p><b>Encantar</b> (to love) works the same way: <i>Me encanta el jamón.</i> Use the article with nouns: <i>Me gusta <b>el</b> fútbol</i>.</p>
<p>Degrees: <i>me encanta › me gusta mucho › me gusta › no me gusta mucho › no me gusta nada</i>. <b>Odiar</b> (to hate) and <b>preferir</b> are normal verbs: <i>odio, prefiero</i>.</p>
<p>Reacting: to a positive — <b>a mí también</b> (me too) / <b>a mí no</b>. To a negative — <b>a mí tampoco</b> (me neither) / <b>a mí sí</b>.</p>`
    },
    V: `
gustar | to like (to please) | Me {gusta} mucho Madrid. | I really like Madrid.
encantar | to love (things) | Me {encanta} el chocolate. | I love chocolate.
odiar | to hate | {Odio} madrugar. | I hate getting up early.
preferir | to prefer | {Prefiero} el té. | I prefer tea.
interesar | to interest | Me {interesa} la historia. | History interests me.
la música | music | Me encanta la {música} latina. | I love Latin music.
el cine | cinema | Los sábados voy al {cine}. | On Saturdays I go to the cinema.
la película | film | Es una {película} muy buena. | It's a very good film.
la serie | TV series | Veo una {serie} española. | I'm watching a Spanish series.
el libro | book | Me gustan los {libros} de historia. | I like history books.
el deporte | sport | No me gusta el {deporte}. | I don't like sport.
el fútbol | football | Mi padre ve el {fútbol} los domingos. | My father watches football on Sundays.
el baloncesto | basketball | Juego al {baloncesto}. | I play basketball.
el tenis | tennis | ¿Te gusta el {tenis}? | Do you like tennis?
leer | to read | Me encanta {leer} en la cama. | I love reading in bed.
bailar | to dance | ¿Te gusta {bailar} salsa? | Do you like dancing salsa?
cantar | to sing | Me gusta {cantar} en la ducha. | I like singing in the shower.
viajar | to travel | Nos encanta {viajar}. | We love travelling.
cocinar | to cook | A mi novio le gusta {cocinar}. | My boyfriend likes cooking.
nadar | to swim | En verano me gusta {nadar} en el mar. | In summer I like swimming in the sea.
correr | to run | {Corro} tres veces por semana. | I run three times a week.
pasear | to go for a walk | Me gusta {pasear} por el parque. | I like walking in the park.
dibujar | to draw | De niña me gustaba {dibujar}. | As a girl I liked drawing.
la playa | beach | Prefiero la {playa}. | I prefer the beach.
la montaña | mountains | Me encanta la {montaña} en otoño. | I love the mountains in autumn.
el campo | countryside | Los fines de semana vamos al {campo}. | At weekends we go to the countryside.
la naturaleza | nature | Me gusta mucho la {naturaleza}. | I really like nature.
los animales | animals | Me encantan los {animales}. | I love animals.
el arte | art | Me interesa el {arte} moderno. | I'm interested in modern art.
la comida | food | La {comida} española es buenísima. | Spanish food is great.
el café | coffee | No me gusta el {café} solo. | I don't like black coffee.
el chocolate | chocolate | ¿Te gusta el {chocolate}? | Do you like chocolate?
el frío | the cold | Odio el {frío}. | I hate the cold.
el calor | the heat | No me gusta el {calor}. | I don't like the heat.
también | also, too | —Me gusta leer. —A mí {también}. | —I like reading. —Me too.
tampoco | neither, not either | —No me gusta el fútbol. —A mí {tampoco}. | —I don't like football. —Me neither.
mucho | a lot | Me gusta {mucho} viajar. | I like travelling a lot.
nada | not at all; nothing | No me gusta {nada} el frío. | I don't like the cold at all.
favorito / favorita | favourite | Mi película {favorita} es "Volver". | My favourite film is "Volver".
divertido / divertida | fun | Bailar es muy {divertido}. | Dancing is great fun.
aburrido / aburrida | boring | El golf es {aburrido}. | Golf is boring.
`,
    D: `
Me ___ el chocolate. | gusta | I like chocolate.
Me ___ los gatos. | gustan | I like cats.
¿Te ___ bailar? | gusta | Do you like dancing?
A Marta ___ gusta el cine. | le | Marta likes cinema.
A nosotros ___ encanta viajar. | nos | We love travelling.
¿___ gustan las películas de terror? (vosotros) | os | Do you (all) like horror films?
A mis padres ___ gusta la montaña. | les | My parents like the mountains.
—No me gusta el fútbol. —A mí ___. | tampoco | —I don't like football. —Me neither.
—Me encanta la playa. —A mí ___. | también | —I love the beach. —Me too.
—No me gusta el café. —A mí ___ (I do). | sí | —I don't like coffee. —I do.
—Me gusta correr. —A mí ___ (I don't). | no | —I like running. —I don't.
Me ___ (encantar) las series españolas. | encantan | I love Spanish series.
No me gusta ___ el frío. (at all) | nada | I don't like the cold at all.
Yo ___ (preferir) la playa. | prefiero | I prefer the beach.
Mi hermano ___ (odiar) madrugar. | odia | My brother hates getting up early.
A ti te ___ (interesar) la historia, ¿no? | interesa | You're interested in history, right?
¿Te gusta ___ (to swim)? | nadar | Do you like swimming?
Mi película ___ es "Volver". (favourite) | favorita | My favourite film is "Volver".
A Luis y a mí ___ gusta cocinar. | nos | Luis and I like cooking.
¿A usted ___ gusta el vino? | le | Do you like wine?
`,
    S: `
Me encanta la comida española. | I love Spanish food.
No me gusta nada el frío. | I don't like the cold at all.
¿Te gustan los deportes? | Do you like sports?
A mi novio le gusta mucho cocinar. | My boyfriend really likes cooking.
Prefiero la montaña a la playa. | I prefer the mountains to the beach.
—Me gusta leer. —¡A mí también! | —I like reading. —Me too!
A mis padres les encanta viajar. | My parents love travelling.
¿Qué te gusta hacer los fines de semana? | What do you like doing at weekends?
`,
    R: [
      { t: 'Gustos diferentes', x: `Elena y su hermano Rubén son muy diferentes. A Elena le encanta el deporte: nada todos los días y los domingos juega al fútbol. A Rubén no le gusta nada el deporte; prefiere leer y ver películas. Pero a los dos les gusta mucho cocinar. Los sábados preparan una paella para toda la familia. ¿Y a sus padres? A sus padres les gusta comer, ¡claro!`, q: `¿Qué le gusta a Elena? | Leer ; *El deporte ; Ver películas
¿Qué les gusta a los dos hermanos? | *Cocinar ; Nadar ; El fútbol
¿Cuándo preparan la paella? | Los domingos ; Todos los días ; *Los sábados` },
      { t: 'Busco compañero de viaje', x: `Hola, soy Martina, de Valencia. Busco un compañero o una compañera para viajar por el norte de España en septiembre. Me encanta la naturaleza y la montaña: me gusta caminar muchas horas. También me gusta la comida local. No me gustan los hoteles caros; prefiero los albergues. ¡Ah! Y odio madrugar, así que no empiezo a caminar antes de las nueve.`, q: `¿Qué le encanta a Martina? | La playa ; *La naturaleza y la montaña ; Los hoteles
¿Dónde prefiere dormir? | En hoteles caros ; *En albergues ; En casa de amigos
¿Qué odia? | Caminar ; *Madrugar ; La comida local` },
      { t: 'En una aplicación de intercambio', x: `—Hola, Sanne. ¿Qué te gusta hacer?
—Me gusta mucho leer y escuchar música. ¿Y a ti?
—A mí también me gusta la música. Me encanta el flamenco. ¿Te gusta?
—No mucho, la verdad. Prefiero el pop.
—¿Y el cine?
—¡Me encanta! Mis películas favoritas son las de Almodóvar.
—¡A mí también!`, q: `¿Qué música le encanta al chico? | El pop ; *El flamenco ; El rock
¿Le gusta el flamenco a Sanne? | Sí, mucho ; *No mucho ; No dice
¿Qué tienen en común? | El flamenco ; *Las películas de Almodóvar ; El deporte` }
    ],
    write: 'Write about eight things you like or love and four you don\'t like. Add what two people you know like (le gusta / les gusta) and react to them (a mí también / a mí tampoco).',
    talk: 'You are Marta, a Spanish friend in Granada planning a weekend with the learner. Ask what they like doing (music, sport, food, films) and react with también/tampoco.',
    res: [R.cb1(8), R.cb1(9), R.lt(15, 16), R.easy('qué te gusta')]
  });
})();
