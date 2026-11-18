/* A1 · Acceso (part 2) */
(function () {
  const R = RES, U = CAMINO.unit('A1');

  U({
    id: 'a1-bar', title: 'En el bar: ordering and -er/-ir verbs', goal: ['Order food and drinks in a Spanish bar', 'Ask for the bill', 'Conjugate regular -er and -ir verbs'],
    grammar: {
      t: 'Present tense of -er and -ir verbs; quiero / me pones',
      h: `<table><tr><th></th><th>comer</th><th>vivir</th></tr><tr><td>yo</td><td>como</td><td>vivo</td></tr><tr><td>tú</td><td>comes</td><td>vives</td></tr><tr><td>él/ella/usted</td><td>come</td><td>vive</td></tr>
<tr><td>nosotros</td><td>comemos</td><td>vivimos</td></tr><tr><td>vosotros</td><td>coméis</td><td>vivís</td></tr><tr><td>ellos/ustedes</td><td>comen</td><td>viven</td></tr></table>
<p>-er and -ir share endings except <b>nosotros</b> and <b>vosotros</b>.</p>
<p><b>Ordering in Spain</b> is direct and polite at the same time: <b>¿Me pones un café con leche?</b> (lit. "will you put me…?"), <b>Para mí, una caña</b>, <b>Quiero un bocadillo</b>, or <b>Me pone…</b> with usted. "Please" is less frequent than in English, and that's not rude. Ask for the bill: <b>¿Me cobras?</b> or <b>La cuenta, por favor.</b></p>
<p><b>querer</b> (to want) changes e→ie: quiero, quieres, quiere, queremos, queréis, quieren. <b>tomar</b> = to have (food/drink): <i>¿Qué vas a tomar?</i></p>`
    },
    conj: { t: 'pres', v: ['comer', 'beber', 'vivir', 'querer', 'tomar'] },
    V: `
el bar | bar, café | Desayuno en el {bar} de la esquina. | I have breakfast at the bar on the corner.
el café con leche | white coffee | Un {café con leche}, por favor. | A white coffee, please.
el café solo | espresso | Para mí, un {café solo}. | For me, an espresso.
el cortado | espresso with a dash of milk | ¿Me pones un {cortado}? | Can I have a cortado?
el té | tea | Un {té} verde, por favor. | A green tea, please.
la caña | small draught beer | Dos {cañas}, por favor. | Two small beers, please.
la cerveza | beer | Una {cerveza} sin alcohol. | An alcohol-free beer.
el vino tinto | red wine | Una copa de {vino tinto}. | A glass of red wine.
el vino blanco | white wine | ¿Tienen {vino blanco}? | Do you have white wine?
el agua (f) | water | Un {agua} con gas. | A sparkling water.
el zumo de naranja | orange juice | Un {zumo de naranja} natural. | A fresh orange juice.
el refresco | soft drink | ¿Qué {refrescos} tienen? | What soft drinks do you have?
la tostada | toast | Una {tostada} con tomate. | Toast with tomato.
el cruasán | croissant | Un café y un {cruasán}. | A coffee and a croissant.
el bocadillo | baguette sandwich | Un {bocadillo} de jamón. | A ham baguette.
la tortilla | Spanish omelette | Una ración de {tortilla}. | A portion of Spanish omelette.
las patatas bravas | spicy potatoes | Unas {patatas bravas}, por favor. | Some patatas bravas, please.
las aceitunas | olives | Con la caña ponen {aceitunas}. | They serve olives with the beer.
el jamón | cured ham | El {jamón} ibérico es caro. | Iberian ham is expensive.
el queso | cheese | Un plato de {queso} manchego. | A plate of Manchego cheese.
los calamares | squid rings | Un bocadillo de {calamares}. | A squid sandwich.
la tapa | small snack | En Granada la {tapa} es gratis. | In Granada the tapa is free.
la ración | sharing portion | Una {ración} de croquetas. | A portion of croquettes.
la media ración | half portion | Mejor una {media ración}. | Better a half portion.
las croquetas | croquettes | Las {croquetas} de mi abuela son las mejores. | My grandmother's croquettes are the best.
comer | to eat; to have lunch | ¿Dónde {comemos} hoy? | Where shall we eat today?
beber | to drink | No {bebo} alcohol. | I don't drink alcohol.
tomar | to have (food, drink); to take | ¿Qué vas a {tomar}? | What are you going to have?
querer | to want | {Quiero} un agua, por favor. | I'd like a water, please.
¿me pones…? | can I have…? (informal) | {¿Me pones} una caña? | Can I have a small beer?
para mí | for me | {Para mí}, un cortado. | For me, a cortado.
¿algo más? | anything else? | Muy bien. {¿Algo más?} | Very well. Anything else?
nada más | nothing else | No, {nada más}, gracias. | No, nothing else, thanks.
la cuenta | the bill | {La cuenta}, por favor. | The bill, please.
¿me cobras? | can I pay? (informal) | {¿Me cobras}, por favor? | Can I pay, please?
¿cuánto es? | how much is it? | {¿Cuánto es?} —Seis euros. | How much is it? —Six euros.
la propina | tip | En España la {propina} no es obligatoria. | In Spain tipping isn't compulsory.
con hielo | with ice | Una Coca-Cola {con hielo}. | A Coke with ice.
sin azúcar | without sugar | Un café {sin azúcar}. | A coffee without sugar.
la terraza | terrace (outdoor seating) | ¿Nos sentamos en la {terraza}? | Shall we sit on the terrace?
la barra | bar counter | Tomamos algo en la {barra}. | We have something at the counter.
vegetariano / vegetariana | vegetarian | Soy {vegetariana}. | I'm a vegetarian.
`,
    D: `
Yo ___ fruta todos los días. (comer) | como | I eat fruit every day.
¿Tú ___ café? (beber) | bebes | Do you drink coffee?
Nosotros ___ en Málaga. (vivir) | vivimos | We live in Málaga.
¿Vosotros ___ carne? (comer) | coméis | Do you (all) eat meat?
Yo ___ un cortado, por favor. (querer) | quiero | I'd like a cortado, please.
¿Me ___ una caña? (poner, tú) | pones | Can I have a small beer?
¿___ más? —No, nada más. | algo | Anything else? —No, nothing else.
Ellos ___ vino tinto. (beber) | beben | They drink red wine.
¿Qué ___ (querer, vosotros) tomar? | queréis | What would you (all) like?
Mi hermana no ___ (comer) carne. | come | My sister doesn't eat meat.
¿Dónde ___ (vivir) tus padres? | viven | Where do your parents live?
Vosotros ___ (vivir) en el centro, ¿no? | vivís | You (all) live in the centre, right?
¿Qué ___ (tomar, tú)? | tomas | What are you having?
Nosotros ___ (querer) una mesa en la terraza. | queremos | We'd like a table on the terrace.
Usted ___ (beber) agua con gas, ¿verdad? | bebe | You drink sparkling water, right?
___ mí, un zumo de naranja. | para | For me, an orange juice.
La ___, por favor. (the bill) | cuenta | The bill, please.
¿Cuánto ___? | es | How much is it?
Un café ___ azúcar. (without) | sin | A coffee without sugar.
Una ___ de croquetas. (portion) | ración | A portion of croquettes.
`,
    S: `
¿Me pones un café con leche, por favor? | Can I have a white coffee, please?
Para mí, una caña y una tapa de tortilla. | For me, a small beer and a tapa of omelette.
¿Qué queréis tomar? | What would you (all) like?
¿Tenéis algo sin gluten? | Do you have anything gluten-free?
¿Me cobras, por favor? | Can I pay, please?
No como carne, soy vegetariana. | I don't eat meat, I'm a vegetarian.
¿Nos sentamos en la terraza o en la barra? | Shall we sit on the terrace or at the counter?
Ponnos dos cañas y unas bravas. | Give us two small beers and some patatas bravas.
`,
    R: [
      { t: 'Un desayuno en Madrid', x: `—¡Buenos días! ¿Qué os pongo?
—Hola. Para mí, un café con leche y una tostada con tomate.
—Yo quiero un zumo de naranja y un cruasán, por favor.
—Muy bien. ¿Algo más?
—No, nada más, gracias.
(…)
—¿Me cobras, por favor?
—Claro. Son seis euros con cincuenta.`, q: `¿Qué toma la primera persona? | Un zumo y un cruasán ; *Un café con leche y una tostada ; Una caña
¿Cuánto es todo? | *6,50 € ; 5,60 € ; 16 €
¿Quieren algo más? | Sí, agua ; *No ; Sí, otra tostada` },
      { t: 'Ir de tapas', x: `"Ir de tapas" es una costumbre muy española. Los amigos van de un bar a otro y en cada bar toman una bebida y una tapa. En ciudades como Granada, León o Jaén, la tapa es gratis con la bebida. En otras ciudades, como Madrid o Barcelona, normalmente se paga. Las tapas típicas son la tortilla, las croquetas, las patatas bravas y las aceitunas.`, q: `¿Qué significa "ir de tapas"? | Cocinar en casa ; *Ir de bar en bar tomando algo ; Comer en un restaurante caro
¿En qué ciudad es gratis la tapa? | Madrid ; *Granada ; Barcelona
¿Cuál NO es una tapa típica según el texto? | Las croquetas ; Las aceitunas ; *La paella` },
      { t: 'En la terraza', x: `Es viernes por la tarde y hace sol. Lucía y Marcos se sientan en una terraza de la plaza. Marcos pide una caña y Lucía, un vermú. El camarero les pone unas aceitunas. Después piden una ración de calamares y media ración de croquetas para compartir. Comen, beben y hablan durante dos horas. Al final, Marcos paga la cuenta: veintidós euros.`, q: `¿Qué pide Lucía? | Una caña ; *Un vermú ; Un agua
¿Qué piden para compartir? | Tortilla y bravas ; *Calamares y croquetas ; Jamón y queso
¿Quién paga? | Lucía ; *Marcos ; Los dos` }
    ],
    write: 'Write the dialogue for ordering breakfast for you and a friend in a Spanish bar, then ordering tapas in the evening, including asking for the bill.',
    talk: 'You are a busy camarero in a bar in Madrid. Take the learner\'s order (drinks and tapas), ask "¿algo más?", and give them the bill in euros.',
    res: [R.cb1(15), R.cb1(16), R.cb1(34), R.lt(17, 18)]
  });

  U({
    id: 'a1-compra', title: 'La compra: food shopping and quantities', goal: ['Buy food at the market and the supermarket', 'Use quantities, prices and numbers to 1,000', 'Use demonstratives este / ese'],
    grammar: {
      t: 'Numbers 100–1,000, quantities and demonstratives',
      h: `<p><b>100</b> cien, <b>101</b> ciento uno, <b>200</b> doscientos/as, <b>300</b> trescientos, <b>400</b> cuatrocientos, <b>500</b> quinientos, <b>600</b> seiscientos, <b>700</b> setecientos, <b>800</b> ochocientos, <b>900</b> novecientos, <b>1.000</b> mil. Hundreds agree: <i>doscientas personas</i>.</p>
<p><b>Prices</b>: 3,50 € = <i>tres euros con cincuenta (céntimos)</i>. Spain writes decimals with a comma and thousands with a point.</p>
<p><b>Quantities</b>: un kilo de, medio kilo de, un cuarto de kilo, cien gramos de, un litro de, una docena de huevos, una barra de pan, una lata de, un paquete de, una botella de.</p>
<p><b>Demonstratives</b>: <b>este / esta / estos / estas</b> (this, these — near me), <b>ese / esa / esos / esas</b> (that, those — near you). <i>¿Cuánto cuestan estos tomates?</i></p>
<p><b>costar</b> (o→ue): cuesta (singular), cuestan (plural).</p>`
    },
    V: `
la compra | the (food) shopping | Hago la {compra} los sábados. | I do the shopping on Saturdays.
hacer la compra | to do the shopping | Tengo que {hacer la compra}. | I have to do the shopping.
el supermercado | supermarket | El {supermercado} cierra a las diez. | The supermarket closes at ten.
el mercado | market | Compro la fruta en el {mercado}. | I buy fruit at the market.
la panadería | bakery | La {panadería} abre a las siete. | The bakery opens at seven.
la frutería | greengrocer's | En la {frutería} hay fresas. | There are strawberries at the greengrocer's.
la carnicería | butcher's | Compro pollo en la {carnicería}. | I buy chicken at the butcher's.
la pescadería | fishmonger's | La {pescadería} tiene pescado fresco. | The fishmonger's has fresh fish.
el pan | bread | Una barra de {pan}, por favor. | A loaf of bread, please.
la leche | milk | Un litro de {leche}. | A litre of milk.
los huevos | eggs | Una docena de {huevos}. | A dozen eggs.
el arroz | rice | Un paquete de {arroz}. | A packet of rice.
la pasta | pasta | Comemos {pasta} los martes. | We eat pasta on Tuesdays.
el aceite de oliva | olive oil | Una botella de {aceite de oliva}. | A bottle of olive oil.
la sal | salt | Pásame la {sal}, por favor. | Pass me the salt, please.
el azúcar | sugar | No tomo {azúcar}. | I don't take sugar.
la fruta | fruit | Como mucha {fruta}. | I eat a lot of fruit.
la manzana | apple | Un kilo de {manzanas}. | A kilo of apples.
la naranja | orange | Las {naranjas} de Valencia son famosas. | Valencian oranges are famous.
el plátano | banana | Los {plátanos} de Canarias. | Bananas from the Canaries.
las fresas | strawberries | Medio kilo de {fresas}. | Half a kilo of strawberries.
la verdura | vegetables | Compro {verdura} en el mercado. | I buy vegetables at the market.
el tomate | tomato | Estos {tomates} están muy buenos. | These tomatoes are very good.
la patata | potato | Necesito {patatas} para la tortilla. | I need potatoes for the omelette.
la cebolla | onion | Una {cebolla} grande. | A large onion.
el ajo | garlic | Una cabeza de {ajo}. | A head of garlic.
la lechuga | lettuce | Una {lechuga}, por favor. | A lettuce, please.
la carne | meat | No como {carne}. | I don't eat meat.
el pollo | chicken | Un {pollo} entero. | A whole chicken.
el pescado | fish | El {pescado} está fresco. | The fish is fresh.
el kilo | kilo | ¿A cuánto está el {kilo}? | How much is it per kilo?
medio kilo | half a kilo | {Medio kilo} de tomates. | Half a kilo of tomatoes.
la docena | dozen | Una {docena} de huevos. | A dozen eggs.
la botella | bottle | Una {botella} de agua. | A bottle of water.
la bolsa | bag | ¿Quiere {bolsa}? | Do you want a bag?
costar | to cost | ¿Cuánto {cuesta}? | How much does it cost?
el euro | euro | Son tres {euros}. | That's three euros.
el céntimo | cent | Cincuenta {céntimos}. | Fifty cents.
barato / barata | cheap | La fruta aquí es muy {barata}. | Fruit is very cheap here.
caro / cara | expensive | El jamón es {caro}. | Ham is expensive.
este / esta | this | ¿Cuánto cuesta {este} queso? | How much is this cheese?
ese / esa | that | Póngame {esa} lechuga. | Give me that lettuce.
cien / ciento | one hundred | {Ciento} veinte gramos. | A hundred and twenty grams.
doscientos / doscientas | two hundred | {Doscientos} gramos de queso. | Two hundred grams of cheese.
quinientos / quinientas | five hundred | {Quinientos} euros al mes. | Five hundred euros a month.
mil | a thousand | Mil {gracias}. | A thousand thanks.
`,
    D: `
Un kilo ___ naranjas. | de | A kilo of oranges.
___ kilo de fresas. (half) | medio | Half a kilo of strawberries.
Una ___ de huevos. (dozen) | docena | A dozen eggs.
¿Cuánto ___ (costar) este queso? | cuesta | How much is this cheese?
¿Cuánto ___ (costar) estas manzanas? | cuestan | How much are these apples?
¿Cuánto cuesta ___ pan? (this) | este | How much is this bread?
Me gusta ___ camiseta. (that, near you) | esa | I like that t-shirt.
___ tomates están muy buenos. (these) | estos | These tomatoes are very good.
Póngame ___ naranjas. (those) | esas | Give me those oranges.
200 = ___ | doscientos | two hundred
500 = ___ | quinientos | five hundred
700 = ___ | setecientos | seven hundred
900 = ___ | novecientos | nine hundred
1.000 = ___ | mil | one thousand
350 gramos = trescientos ___ gramos | cincuenta | 350 grams
Hay ___ personas. (200, feminine) | doscientas | There are two hundred people.
3,50 € = tres euros ___ cincuenta | con | three euros fifty
Hago la ___ en el mercado. | compra | I do the shopping at the market.
El pan se compra en la ___. | panadería | Bread is bought at the bakery.
El pescado se compra en la ___. | pescadería | Fish is bought at the fishmonger's.
`,
    S: `
¿Quién es el último? | Who's last in the queue?
Póngame un kilo de tomates, por favor. | Give me a kilo of tomatoes, please.
¿A cuánto está el kilo de fresas? | How much is a kilo of strawberries?
¿Algo más? —No, nada más. ¿Cuánto es? | Anything else? —No, nothing else. How much is it?
Son ocho euros con veinte. | That's eight euros twenty.
¿Puedo pagar con tarjeta? | Can I pay by card?
No necesito bolsa, gracias. | I don't need a bag, thanks.
Estas naranjas están muy dulces. | These oranges are very sweet.
`,
    R: [
      { t: 'En el mercado', x: `Los sábados voy al mercado de mi barrio. Primero pregunto: "¿Quién es el último?". Luego espero mi turno. En la frutería compro un kilo de tomates y medio kilo de fresas. Las fresas están muy buenas ahora, en primavera. En la pescadería hay merluza fresca, pero es cara, así que no la compro. Al final tomo un vermú con mis amigos en un bar del mercado.`, q: `¿Qué pregunta primero? | ¿Cuánto cuesta? ; *¿Quién es el último? ; ¿Tiene bolsa?
¿Por qué no compra la merluza? | No está fresca ; *Es cara ; No le gusta
¿Qué hace al final? | *Toma un vermú ; Vuelve a casa ; Compra fresas` },
      { t: 'La lista de la compra', x: `Lista para el fin de semana: una barra de pan, un litro de leche, una docena de huevos, medio kilo de queso, un kilo de patatas, dos cebollas, una lechuga, un paquete de arroz, una botella de aceite de oliva y fruta (plátanos y manzanas). ¡Y no olvidar el café! Para la tortilla del domingo necesitamos huevos, patatas, cebolla y aceite.`, q: `¿Cuántos huevos hay en la lista? | Seis ; *Doce ; Veinte
¿Qué ingredientes son para la tortilla? | Pan, leche y queso ; *Huevos, patatas, cebolla y aceite ; Arroz y lechuga
¿Qué no deben olvidar? | El pan ; *El café ; La sal` },
      { t: 'En el supermercado', x: `—Hola, buenas tardes. ¿Necesita bolsa?
—No, gracias, tengo una.
—Son veintitrés euros con cuarenta.
—¿Puedo pagar con tarjeta?
—Sí, claro. Acerque la tarjeta aquí… Ya está. ¿Quiere el tique?
—No, gracias.
—Muy bien. ¡Que tenga un buen día!
—Igualmente, adiós.`, q: `¿Necesita bolsa el cliente? | Sí ; *No, tiene una ; No dice
¿Cuánto paga? | 13,40 € ; *23,40 € ; 32,40 €
¿Cómo paga? | En efectivo ; *Con tarjeta ; No paga` }
    ],
    write: 'Write your shopping list for a week with quantities, and a short dialogue at a market stall where you ask prices and buy three things.',
    talk: 'You are a friendly stallholder (frutero) at a market in Valencia. Sell the learner fruit and vegetables: quantities, prices, "¿algo más?", and recommend what is in season.',
    res: [R.cb1(26), R.cb1(27), R.lt(19, 20), R.easy('mercado')]
  });

  U({
    id: 'a1-casa', title: 'Mi casa: rooms, furniture and location', goal: ['Describe your home and its rooms', 'Say where things are with estar and prepositions', 'Use hay vs está'],
    grammar: {
      t: 'estar for location, hay vs está, and prepositions of place',
      h: `<p><b>estar</b>: estoy, estás, está, estamos, estáis, están. Use it for <b>where things are</b>: <i>El sofá está en el salón.</i></p>
<p><b>hay</b> introduces something new (with un/una/numbers/no article): <i>En mi habitación hay una cama y un armario.</i> <b>está / están</b> locate something specific (with el/la/mi): <i>La cama está al lado de la ventana.</i></p>
<p>Prepositions: <b>en</b> (in, on), <b>encima de</b> (on top of), <b>debajo de</b> (under), <b>delante de</b> (in front of), <b>detrás de</b> (behind), <b>al lado de</b> (next to), <b>entre</b> (between), <b>dentro de</b> (inside), <b>fuera de</b> (outside), <b>enfrente de</b> (opposite). <b>de + el = del</b>: <i>al lado del sofá</i>.</p>
<p>In Spain, floors: <b>la planta baja</b> (ground floor), <b>el primero, el segundo…</b> An address: <i>Calle Mayor, 12, 3.º B</i> (third floor, door B).</p>`
    },
    conj: { t: 'pres', v: ['estar'] },
    V: `
la casa | house, home | Estoy en {casa}. | I'm at home.
el piso | flat, apartment; floor | Vivo en un {piso} pequeño. | I live in a small flat.
la habitación | room; bedroom | Mi {habitación} es muy luminosa. | My room is very bright.
el dormitorio | bedroom | El piso tiene dos {dormitorios}. | The flat has two bedrooms.
el salón | living room | Vemos la tele en el {salón}. | We watch TV in the living room.
la cocina | kitchen | La {cocina} es pequeña. | The kitchen is small.
el baño | bathroom | El {baño} está al fondo. | The bathroom is at the end.
el pasillo | corridor | El {pasillo} es largo. | The corridor is long.
la terraza | terrace, balcony | Desayunamos en la {terraza}. | We have breakfast on the terrace.
el balcón | balcony | El {balcón} da a la calle. | The balcony looks onto the street.
la ventana | window | Abre la {ventana}, por favor. | Open the window, please.
la puerta | door | Cierra la {puerta}. | Close the door.
la pared | wall | Hay un cuadro en la {pared}. | There's a picture on the wall.
el suelo | floor (ground) | El gato duerme en el {suelo}. | The cat sleeps on the floor.
la cama | bed | La {cama} es muy cómoda. | The bed is very comfortable.
el armario | wardrobe, cupboard | La ropa está en el {armario}. | The clothes are in the wardrobe.
la mesa | table | Las llaves están en la {mesa}. | The keys are on the table.
la silla | chair | Hay seis {sillas}. | There are six chairs.
el sofá | sofa | El {sofá} es nuevo. | The sofa is new.
la estantería | bookshelf | Mis libros están en la {estantería}. | My books are on the shelf.
la lámpara | lamp | Enciende la {lámpara}. | Turn on the lamp.
la nevera | fridge | La leche está en la {nevera}. | The milk is in the fridge.
el horno | oven | El pollo está en el {horno}. | The chicken is in the oven.
la lavadora | washing machine | La {lavadora} está en la cocina. | The washing machine is in the kitchen.
la ducha | shower | La {ducha} no funciona. | The shower doesn't work.
el espejo | mirror | Hay un {espejo} en el baño. | There's a mirror in the bathroom.
las llaves | keys | ¿Dónde están mis {llaves}? | Where are my keys?
el edificio | building | El {edificio} es antiguo. | The building is old.
el ascensor | lift | No hay {ascensor}. | There's no lift.
la planta baja | ground floor | Vivo en la {planta baja}. | I live on the ground floor.
estar | to be (location, state) | El baño {está} a la derecha. | The bathroom is on the right.
encima de | on top of | El móvil está {encima de} la mesa. | The phone is on the table.
debajo de | under | El perro está {debajo de} la cama. | The dog is under the bed.
al lado de | next to | La lámpara está {al lado del} sofá. | The lamp is next to the sofa.
delante de | in front of | La mesa está {delante del} sofá. | The table is in front of the sofa.
detrás de | behind | El jardín está {detrás de} la casa. | The garden is behind the house.
entre | between | El baño está {entre} los dormitorios. | The bathroom is between the bedrooms.
dentro de | inside | Las tazas están {dentro del} armario. | The cups are inside the cupboard.
grande | big | El salón es {grande}. | The living room is big.
pequeño / pequeña | small | Mi cocina es {pequeña}. | My kitchen is small.
luminoso / luminosa | bright, full of light | Es un piso muy {luminoso}. | It's a very bright flat.
cómodo / cómoda | comfortable | El sofá es muy {cómodo}. | The sofa is very comfortable.
nuevo / nueva | new | Tenemos una nevera {nueva}. | We have a new fridge.
viejo / vieja | old (things) | La lavadora es muy {vieja}. | The washing machine is very old.
`,
    D: `
El sofá ___ en el salón. (estar) | está | The sofa is in the living room.
En mi habitación ___ una cama y un armario. | hay | In my room there's a bed and a wardrobe.
¿Dónde ___ (estar) mis llaves? | están | Where are my keys?
Nosotros ___ (estar) en la cocina. | estamos | We are in the kitchen.
¿Dónde ___ (estar, tú)? | estás | Where are you?
Yo ___ (estar) en casa. | estoy | I'm at home.
¿Vosotros ___ (estar) en el salón? | estáis | Are you (all) in the living room?
¿___ un baño en la planta baja? | hay | Is there a bathroom on the ground floor?
El perro está ___ de la cama. (under) | debajo | The dog is under the bed.
El móvil está ___ de la mesa. (on top of) | encima | The phone is on the table.
La lámpara está al lado ___ sofá. | del | The lamp is next to the sofa.
El jardín está ___ de la casa. (behind) | detrás | The garden is behind the house.
El baño está ___ los dos dormitorios. (between) | entre | The bathroom is between the two bedrooms.
La leche está en la ___. (fridge) | nevera | The milk is in the fridge.
La ropa está en el ___. (wardrobe) | armario | The clothes are in the wardrobe.
Mi piso es muy ___; tiene mucha luz. | luminoso | My flat is very bright; it has lots of light.
No hay ___; subo andando. (lift) | ascensor | There's no lift; I walk up.
La mesa está ___ del sofá. (in front of) | delante | The table is in front of the sofa.
La cocina es pequeña, pero el salón es ___. | grande | The kitchen is small, but the living room is big.
Las tazas están ___ del armario. (inside) | dentro | The cups are inside the cupboard.
`,
    S: `
Mi piso tiene dos dormitorios, un salón y una cocina pequeña. | My flat has two bedrooms, a living room and a small kitchen.
¿Dónde está el baño? —Al final del pasillo, a la derecha. | Where's the bathroom? —At the end of the corridor, on the right.
Las llaves están encima de la mesa. | The keys are on the table.
En el salón hay un sofá muy cómodo. | In the living room there's a very comfortable sofa.
Vivo en un tercero sin ascensor. | I live on a third floor without a lift.
El gato siempre está debajo de la cama. | The cat is always under the bed.
La cocina está al lado del salón. | The kitchen is next to the living room.
Mi dirección es calle Mayor, doce, tercero B. | My address is calle Mayor 12, 3rd floor B.
`,
    R: [
      { t: 'Mi piso en Sevilla', x: `Vivo en un piso en el barrio de Triana, en Sevilla. Está en un edificio antiguo, en la segunda planta, y no hay ascensor. El piso no es muy grande, pero es muy luminoso. Tiene un salón con un balcón, una cocina, un baño y dos dormitorios. En mi dormitorio hay una cama, un armario y una mesa para trabajar. Lo mejor es el balcón: desde allí veo el río.`, q: `¿En qué planta está el piso? | En la planta baja ; *En la segunda ; En la quinta
¿Hay ascensor? | Sí ; *No ; No se dice
¿Qué es lo mejor del piso? | La cocina ; *El balcón ; El baño` },
      { t: '¿Dónde están mis llaves?', x: `—Mamá, ¿dónde están mis llaves?
—¿No están en la mesa del salón?
—No, en la mesa hay un libro y el mando de la tele, pero no hay llaves.
—¿Y en la cocina, al lado de la nevera?
—Tampoco.
—Mira en tu chaqueta. Está detrás de la puerta.
—¡Sí! Están dentro del bolsillo. ¡Gracias!`, q: `¿Qué hay en la mesa del salón? | Las llaves ; *Un libro y el mando de la tele ; Nada
¿Dónde está la chaqueta? | En el armario ; *Detrás de la puerta ; En la cocina
¿Dónde están las llaves al final? | Al lado de la nevera ; *En el bolsillo de la chaqueta ; Debajo de la mesa` },
      { t: 'Casas españolas', x: `En España la mayoría de las personas vive en pisos, no en casas. En las ciudades hay muchos edificios de cinco o seis plantas. Muchos pisos tienen balcón o terraza, porque hace buen tiempo. Las casas tienen suelos de baldosas, no de madera, porque son más frescos en verano. En los pueblos hay más casas con patio.`, q: `¿Dónde vive la mayoría de los españoles? | En casas ; *En pisos ; En el campo
¿Por qué muchos pisos tienen balcón? | Porque es barato ; *Porque hace buen tiempo ; Porque es obligatorio
¿Por qué los suelos son de baldosas? | Son más bonitos ; *Son más frescos en verano ; Son más baratos` }
    ],
    write: 'Describe your home: what rooms there are, what furniture there is in each (hay), and where things are (está + preposition). 8–10 sentences.',
    talk: 'You are a Spanish friend visiting the learner\'s new flat by video call. Ask them to describe the rooms and where things are; ask where you could sleep if you visit.',
    res: [R.cb1(22), R.cb1(23), R.lt(21, 22), R.ds('Superbeginner: la casa')]
  });

  U({
    id: 'a1-ciudad', title: 'La ciudad: places and directions', goal: ['Ask where places are and understand simple directions', 'Describe your neighbourhood', 'Use ir a + place'],
    grammar: {
      t: 'Directions, ir a + place, a + el = al',
      h: `<p><b>ir</b> (to go) is irregular: voy, vas, va, vamos, vais, van. <b>ir a + place</b>: <i>Voy a la farmacia. Vamos al cine</i> (<b>a + el = al</b>).</p>
<p>Asking: <b>Perdona, ¿dónde está…?</b> / <b>¿Hay un/una … por aquí?</b> / <b>¿Cómo voy a…?</b> / <b>¿Está lejos?</b></p>
<p>Directions you'll hear (tú forms): <b>sigue todo recto</b> (go straight on), <b>gira a la derecha / a la izquierda</b> (turn right/left), <b>coge la primera / segunda calle</b> (take the first/second street), <b>cruza la plaza</b> (cross the square), <b>al final de la calle</b>, <b>en la esquina</b>. With usted: <i>siga, gire, coja, cruce</i>.</p>
<p>Distances: <i>Está a cinco minutos andando. Está a dos kilómetros. Está cerca / lejos.</i></p>`
    },
    conj: { t: 'pres', v: ['ir', 'girar', 'cruzar', 'seguir'] },
    V: `
la calle | street | Vivo en la {calle} Mayor. | I live on calle Mayor.
la plaza | square | Quedamos en la {plaza}. | Let's meet in the square.
el barrio | neighbourhood | Mi {barrio} es muy tranquilo. | My neighbourhood is very quiet.
el centro | city centre | El hotel está en el {centro}. | The hotel is in the centre.
el museo | museum | El {museo} cierra los lunes. | The museum is closed on Mondays.
la farmacia | pharmacy | ¿Hay una {farmacia} por aquí? | Is there a pharmacy around here?
el banco | bank; bench | El {banco} abre a las ocho y media. | The bank opens at 8:30.
el cajero | cash machine | Necesito un {cajero}. | I need a cash machine.
la estación de tren | train station | La {estación de tren} está lejos. | The train station is far.
la parada de autobús | bus stop | La {parada de autobús} está enfrente. | The bus stop is opposite.
la parada de metro | metro stop | ¿Dónde está la {parada de metro}? | Where is the metro stop?
el ayuntamiento | town hall | El {ayuntamiento} está en la plaza Mayor. | The town hall is on the main square.
la iglesia | church | La {iglesia} es del siglo XV. | The church is from the 15th century.
la catedral | cathedral | La {catedral} de Burgos es preciosa. | Burgos cathedral is beautiful.
el parque | park | Corro en el {parque}. | I run in the park.
el hospital | hospital | El {hospital} está a dos kilómetros. | The hospital is two kilometres away.
el colegio | (primary) school | Los niños van al {colegio}. | The children go to school.
la biblioteca | library | Estudio en la {biblioteca}. | I study at the library.
el restaurante | restaurant | Hay un {restaurante} muy bueno aquí. | There's a very good restaurant here.
el cine | cinema | ¿Vamos al {cine}? | Shall we go to the cinema?
el mercado | market | El {mercado} está al lado de la iglesia. | The market is next to the church.
la oficina de turismo | tourist office | Pregunta en la {oficina de turismo}. | Ask at the tourist office.
el hotel | hotel | Nuestro {hotel} está en el centro. | Our hotel is in the centre.
la esquina | corner | El bar está en la {esquina}. | The bar is on the corner.
el semáforo | traffic light | Gira en el {semáforo}. | Turn at the traffic light.
el puente | bridge | Cruza el {puente}. | Cross the bridge.
ir | to go | {Voy} al centro en metro. | I go to the centre by metro.
girar | to turn | {Gira} a la izquierda. | Turn left.
cruzar | to cross | {Cruza} la calle. | Cross the street.
seguir | to continue, follow | {Sigue} todo recto. | Go straight on.
coger | to take (a street, a bus) | {Coge} la segunda calle. | Take the second street.
todo recto | straight on | Siga {todo recto}. | Keep going straight.
a la derecha | on/to the right | El museo está {a la derecha}. | The museum is on the right.
a la izquierda | on/to the left | Gira {a la izquierda}. | Turn left.
cerca (de) | near | ¿Hay un cajero {cerca}? | Is there a cash machine nearby?
lejos (de) | far (from) | La playa está {lejos de} aquí. | The beach is far from here.
enfrente de | opposite | El banco está {enfrente de} la farmacia. | The bank is opposite the pharmacy.
al final de | at the end of | {Al final de} la calle. | At the end of the street.
andando / a pie | on foot | Vamos {andando}. | Let's walk.
perdona / perdone | excuse me (tú / usted) | {Perdone}, ¿dónde está el museo? | Excuse me, where's the museum?
por aquí | around here | ¿Hay un supermercado {por aquí}? | Is there a supermarket around here?
`,
    D: `
¿Dónde ___ la estación? | está | Where is the station?
¿___ un banco por aquí? | hay | Is there a bank around here?
El museo está al lado ___ ayuntamiento. | del | The museum is next to the town hall.
Yo ___ (ir) a la farmacia. | voy | I'm going to the pharmacy.
¿Adónde ___ (ir, tú)? | vas | Where are you going?
Nosotros ___ (ir) al cine. | vamos | We're going to the cinema.
¿Vosotros ___ (ir) al centro? | vais | Are you (all) going to the centre?
Mis padres ___ (ir) al mercado los sábados. | van | My parents go to the market on Saturdays.
Vamos ___ parque. (a + el) | al | We're going to the park.
Sigue todo ___ y gira a la derecha. | recto | Go straight on and turn right.
La farmacia está ___ el banco. (opposite) | enfrente de | The pharmacy is opposite the bank.
El hotel está muy ___ de aquí; mejor coge un taxi. | lejos | The hotel is very far from here; better take a taxi.
___ la segunda calle a la izquierda. (take, tú) | coge | Take the second street on the left.
___ la plaza. (cross, tú) | cruza | Cross the square.
Gira en el ___. (traffic light) | semáforo | Turn at the traffic light.
Está a cinco minutos ___. (on foot) | andando | It's five minutes on foot.
El bar está en la ___. (corner) | esquina | The bar is on the corner.
___, ¿dónde está la catedral? (excuse me, usted) | perdone | Excuse me, where is the cathedral?
Para sacar dinero necesito un ___. | cajero | To get money I need a cash machine.
Los libros se leen en la ___. | biblioteca | Books are read at the library.
`,
    S: `
Perdona, ¿dónde está la parada de metro? | Excuse me, where is the metro stop?
Sigue todo recto y coge la segunda a la izquierda. | Go straight on and take the second left.
¿Hay una farmacia cerca de aquí? | Is there a pharmacy near here?
El banco está en la esquina, enfrente del bar. | The bank is on the corner, opposite the bar.
¿Está lejos? —No, está a cinco minutos andando. | Is it far? —No, it's five minutes on foot.
Voy al centro en autobús. | I go to the centre by bus.
Cruza el puente y gira a la derecha. | Cross the bridge and turn right.
Mi barrio es tranquilo y tiene muchos parques. | My neighbourhood is quiet and has many parks.
`,
    R: [
      { t: 'Mi barrio', x: `Vivo en Malasaña, un barrio del centro de Madrid. Mi piso está en una calle pequeña, cerca de la plaza del Dos de Mayo. En la plaza hay muchos bares y una biblioteca. Al lado de mi casa hay una panadería y enfrente hay un supermercado. La parada de metro más cercana es Tribunal: está a cinco minutos andando. Para ir al trabajo cojo el metro; es rápido y barato.`, q: `¿Dónde vive la persona? | *En Malasaña ; En Tribunal ; Lejos del centro
¿Qué hay enfrente de su casa? | Una panadería ; *Un supermercado ; Una biblioteca
¿Cómo va al trabajo? | En bici ; Andando ; *En metro` },
      { t: 'Perdone, ¿la catedral?', x: `—Perdone, ¿dónde está la catedral?
—Mire, siga todo recto por esta calle hasta el semáforo. Allí gire a la izquierda y cruce el puente. Después coja la primera calle a la derecha. Al final de la calle está la catedral.
—¿Está lejos?
—No, a unos diez minutos andando.
—Muchas gracias.
—De nada.`, q: `¿Qué hace en el semáforo? | Gira a la derecha ; *Gira a la izquierda ; Sigue recto
¿Qué cruza? | Una plaza ; *Un puente ; Una calle grande
¿Cuánto tarda andando? | Cinco minutos ; *Unos diez minutos ; Media hora` },
      { t: 'Una ciudad para pasear', x: `Salamanca es una ciudad pequeña y muy bonita, perfecta para pasear. Casi todos los monumentos están cerca: la Plaza Mayor, la universidad, las dos catedrales y la Casa de las Conchas. Los estudiantes van andando o en bici a todas partes. Por la noche la Plaza Mayor tiene mucha vida: hay terrazas, música y gente de todo el mundo.`, q: `¿Por qué es Salamanca perfecta para pasear? | Porque es grande ; *Porque los monumentos están cerca ; Porque hay metro
¿Cuántas catedrales tiene? | Una ; *Dos ; Tres
¿Cómo van los estudiantes a todas partes? | En coche ; *Andando o en bici ; En taxi` }
    ],
    write: 'Describe your neighbourhood: what there is, where things are, and give directions from your home to your favourite café or shop.',
    talk: 'You are a local in Seville. The learner, a tourist, asks for directions to the cathedral, a pharmacy and the bus station. Give simple directions and distances.',
    res: [R.cb1(13), R.cb1(14), R.cb1(35), R.lt(23, 24)]
  });

  U({
    id: 'a1-dia', title: 'Mi día: reflexive verbs and the time', goal: ['Describe your daily routine', 'Tell the time and say when you do things', 'Use reflexive verbs and frequency words'],
    grammar: {
      t: 'Reflexive verbs (levantarse) and telling the time',
      h: `<p>Reflexive verbs carry a pronoun that matches the subject: <b>me</b> levanto, <b>te</b> levantas, <b>se</b> levanta, <b>nos</b> levantamos, <b>os</b> levantáis, <b>se</b> levantan. In dictionaries they end in <b>-se</b>: levantarse, ducharse, acostarse.</p>
<p>Some change their stem: <b>acostarse</b> (o→ue): me acuesto; <b>despertarse</b> (e→ie): me despierto; <b>vestirse</b> (e→i): me visto.</p>
<p><b>The time:</b> ¿Qué hora es? — <b>Es la una</b> / <b>Son las dos</b>. Add minutes with <b>y</b> and subtract with <b>menos</b>: son las tres y diez, son las cuatro menos cuarto, son las seis y media. "At" = <b>a</b>: <i>Me levanto a las siete.</i> 24-hour times appear in timetables: <i>las 21:30</i> = las nueve y media de la noche.</p>
<p>Frequency: <b>siempre, normalmente, a menudo, a veces, casi nunca, nunca</b>. <b>Nunca</b> before the verb, or <b>no … nunca</b>: <i>Nunca desayuno / No desayuno nunca.</i></p>
<p>Spanish schedules run late: lunch around 14:00–15:00, dinner 21:00–22:00!</p>`
    },
    conj: { t: 'pres', v: ['levantarse', 'acostarse', 'despertarse', 'vestirse', 'ducharse'] },
    V: `
levantarse | to get up | Me {levanto} a las siete. | I get up at seven.
despertarse | to wake up | Me {despierto} antes del despertador. | I wake up before the alarm.
ducharse | to shower | Me {ducho} por la mañana. | I shower in the morning.
lavarse los dientes | to brush one's teeth | Me {lavo los dientes} después de comer. | I brush my teeth after eating.
peinarse | to comb one's hair | Me {peino} delante del espejo. | I comb my hair in front of the mirror.
afeitarse | to shave | Mi padre se {afeita} cada día. | My father shaves every day.
vestirse | to get dressed | Me {visto} muy rápido. | I get dressed very quickly.
maquillarse | to put on make-up | Se {maquilla} en el metro. | She puts on make-up on the metro.
desayunar | to have breakfast | {Desayuno} café y tostadas. | I have coffee and toast for breakfast.
comer | to have lunch | {Como} a las dos y media. | I have lunch at half past two.
merendar | to have an afternoon snack | Los niños {meriendan} a las seis. | The children have a snack at six.
cenar | to have dinner | {Cenamos} a las nueve. | We have dinner at nine.
acostarse | to go to bed | Me {acuesto} tarde. | I go to bed late.
dormir | to sleep | {Duermo} siete horas. | I sleep seven hours.
salir de casa | to leave home | {Salgo de casa} a las ocho. | I leave home at eight.
volver a casa | to come back home | {Vuelvo a casa} a las seis. | I come back home at six.
empezar | to start | Mi clase {empieza} a las diez. | My class starts at ten.
el despertador | alarm clock | El {despertador} suena a las siete. | The alarm goes off at seven.
¿qué hora es? | what time is it? | Perdona, {¿qué hora es?} | Excuse me, what time is it?
¿a qué hora…? | at what time…? | {¿A qué hora} cenas? | What time do you have dinner?
es la una | it's one o'clock | {Es la una} y cuarto. | It's quarter past one.
son las… | it's … o'clock | {Son las} ocho. | It's eight o'clock.
y media | half past | Son las cinco {y media}. | It's half past five.
y cuarto | quarter past | Son las dos {y cuarto}. | It's quarter past two.
menos cuarto | quarter to | Son las nueve {menos cuarto}. | It's quarter to nine.
en punto | o'clock sharp | Llega a las diez {en punto}. | He arrives at ten sharp.
el mediodía | midday | Como al {mediodía}. | I eat at midday.
la medianoche | midnight | Me acuesto a {medianoche}. | I go to bed at midnight.
por la mañana | in the morning | Trabajo {por la mañana}. | I work in the morning.
por la tarde | in the afternoon/evening | {Por la tarde} voy al gimnasio. | In the afternoon I go to the gym.
por la noche | at night | {Por la noche} leo. | At night I read.
temprano | early | Me levanto muy {temprano}. | I get up very early.
tarde | late | Siempre llegas {tarde}. | You're always late.
pronto | early; soon | Hoy me acuesto {pronto}. | Today I'm going to bed early.
siempre | always | {Siempre} desayuno en casa. | I always have breakfast at home.
normalmente | normally | {Normalmente} ceno a las nueve. | I normally have dinner at nine.
a menudo | often | Voy al cine {a menudo}. | I often go to the cinema.
a veces | sometimes | {A veces} trabajo desde casa. | Sometimes I work from home.
casi nunca | hardly ever | {Casi nunca} veo la tele. | I hardly ever watch TV.
nunca | never | {Nunca} desayuno. | I never have breakfast.
después | afterwards | {Después} me ducho. | Afterwards I shower.
luego | then, later | {Luego} voy a trabajar. | Then I go to work.
primero | first | {Primero} desayuno. | First I have breakfast.
`,
    D: `
Yo ___ levanto a las siete. | me | I get up at seven.
¿A qué hora te ___? (acostarse) | acuestas | What time do you go to bed?
Ella se ___ por la mañana. (duchar) | ducha | She showers in the morning.
Nosotros ___ levantamos tarde los domingos. | nos | We get up late on Sundays.
Son las tres y ___ (30). | media | It's half past three.
___ la una y cuarto. | es | It's quarter past one.
Me ___ (vestirse) muy rápido. | visto | I get dressed very quickly.
¿Vosotros ___ despertáis temprano? | os | Do you (all) wake up early?
Mis hijos se ___ (acostar) a las nueve. | acuestan | My children go to bed at nine.
Yo me ___ (despertar) a las seis. | despierto | I wake up at six.
Mi padre se ___ (afeitar) cada mañana. | afeita | My father shaves every morning.
Yo ___ (dormir) ocho horas. | duermo | I sleep eight hours.
Yo ___ (salir) de casa a las ocho. | salgo | I leave home at eight.
Yo ___ (volver) a casa a las seis. | vuelvo | I come back home at six.
Son las nueve ___ cuarto. (8:45) | menos | It's quarter to nine.
La clase empieza a las diez en ___. (sharp) | punto | The class starts at ten sharp.
___ desayuno; no tengo hambre por la mañana. (never) | nunca | I never have breakfast; I'm not hungry in the morning.
No veo la tele ___. (never, after verb) | nunca | I never watch TV.
¿A qué ___ cenas? | hora | What time do you have dinner?
Por la ___ voy al gimnasio. (afternoon) | tarde | In the afternoon I go to the gym.
`,
    S: `
Normalmente me levanto a las siete y media. | I normally get up at half past seven.
Desayuno un café y una tostada. | I have a coffee and toast for breakfast.
Como a las dos y ceno a las nueve. | I have lunch at two and dinner at nine.
Los fines de semana me acuesto muy tarde. | At weekends I go to bed very late.
¿Qué hora es? —Son las cinco menos cuarto. | What time is it? —It's quarter to five.
Nunca desayuno en casa. | I never have breakfast at home.
Primero me ducho y luego me visto. | First I shower and then I get dressed.
A veces me echo la siesta los domingos. | Sometimes I take a nap on Sundays.
`,
    R: [
      { t: 'Un día normal de Iñaki', x: `Iñaki vive en Bilbao y trabaja en un banco. Se despierta a las seis y media, pero se levanta a las siete menos cuarto. Se ducha, se viste y desayuna un café con leche. Sale de casa a las siete y media y va al trabajo en metro. Come a las dos en un restaurante cerca de la oficina. Por la tarde va al gimnasio. Cena a las nueve y media y se acuesta a las doce. ¡Duerme poco!`, q: `¿A qué hora se levanta Iñaki? | A las 6:30 ; *A las 6:45 ; A las 7:30
¿Cómo va al trabajo? | *En metro ; En coche ; Andando
¿Qué hace por la tarde? | Duerme ; *Va al gimnasio ; Trabaja` },
      { t: 'La siesta', x: `Mucha gente cree que todos los españoles duermen la siesta, pero no es verdad. Hoy en día, la mayoría trabaja por la tarde y no tiene tiempo. La siesta es más común los fines de semana, en vacaciones o en verano, cuando hace mucho calor. Una siesta corta, de veinte minutos, es buena para la salud. Las siestas largas, "de pijama y orinal", son para los domingos.`, q: `¿Todos los españoles duermen la siesta? | Sí ; *No ; Solo los niños
¿Cuándo es más común la siesta? | Los lunes ; *Los fines de semana, en vacaciones o en verano ; Por la mañana
¿Cuánto dura una siesta buena para la salud? | *Unos veinte minutos ; Dos horas ; Toda la tarde` },
      { t: 'El domingo de Carmen', x: `Los domingos Carmen no pone el despertador. Se despierta a las diez y se queda un rato en la cama leyendo. A las once desayuna churros con chocolate con su pareja. Después pasean por el Retiro. A las dos y media comen en casa de sus padres: siempre hay paella. Por la tarde ven una película en el sofá. Cenan algo ligero y se acuestan pronto, porque el lunes empiezan a trabajar a las ocho.`, q: `¿A qué hora se despierta Carmen? | A las ocho ; *A las diez ; A las once
¿Qué desayuna? | Tostadas ; *Churros con chocolate ; Nada
¿Por qué se acuestan pronto? | Están enfermos ; *El lunes trabajan a las ocho ; No hay nada en la tele` }
    ],
    write: 'Describe a typical weekday from waking up to going to bed, with times and frequency words. Then say how your Sunday is different.',
    talk: 'You are a Spanish colleague in Madrid surprised by Dutch schedules. Ask the learner about their daily routine and times, and compare with Spanish times (lunch at 14:30, dinner at 21:30).',
    res: [R.cb2(3), R.lt(25, 26), R.ds('Beginner: rutina')]
  });

  U({
    id: 'a1-libre', title: 'Tiempo libre: hacer, jugar, salir', goal: ['Talk about hobbies and free time', 'Use irregular yo forms: hago, salgo, pongo, veo', 'Invite someone and accept or refuse'],
    grammar: {
      t: 'Irregular presents for free time; jugar vs tocar; querer / poder + infinitive',
      h: `<p>Common verbs with an irregular <b>yo</b> form: <b>hacer → hago</b>, <b>salir → salgo</b>, <b>poner → pongo</b>, <b>ver → veo</b>, <b>saber → sé</b>, <b>conocer → conozco</b>. The other persons are regular: haces, hace, hacemos, hacéis, hacen.</p>
<p><b>jugar</b> (u→ue): juego, juegas, juega, jugamos, jugáis, juegan. <b>jugar al</b> + sport/game: <i>juego al tenis, juego a las cartas</i>. Instruments use <b>tocar</b>: <i>toco la guitarra</i>.</p>
<p><b>hacer</b> + activity: <i>hacer deporte, hacer yoga, hacer senderismo, hacer fotos</i>.</p>
<p><b>querer / poder + infinitive</b>: <i>¿Quieres ir al cine? — No puedo, tengo que trabajar.</i> poder (o→ue): puedo, puedes, puede, podemos, podéis, pueden.</p>
<p>Invitations: <b>¿Te apetece…?</b> (fancy…?), <b>¿Vamos a…?</b> <b>¡Vale! / ¡Genial! / Lo siento, no puedo.</b></p>`
    },
    conj: { t: 'pres', v: ['hacer', 'salir', 'jugar', 'poder', 'ver'] },
    V: `
el tiempo libre | free time | En mi {tiempo libre} leo. | In my free time I read.
la afición | hobby | Mi {afición} es la fotografía. | My hobby is photography.
hacer deporte | to do sport | {Hago deporte} tres veces por semana. | I do sport three times a week.
hacer yoga | to do yoga | {Hago yoga} los martes. | I do yoga on Tuesdays.
hacer senderismo | to go hiking | Los domingos {hacemos senderismo}. | On Sundays we go hiking.
hacer fotos | to take photos | Me gusta {hacer fotos}. | I like taking photos.
jugar al fútbol | to play football | {Juego al fútbol} con mis amigos. | I play football with my friends.
jugar a las cartas | to play cards | Mis abuelos {juegan a las cartas}. | My grandparents play cards.
jugar a los videojuegos | to play video games | Mi hijo {juega a los videojuegos}. | My son plays video games.
tocar la guitarra | to play the guitar | {Toco la guitarra} un poco. | I play the guitar a bit.
tocar el piano | to play the piano | Mi hermana {toca el piano}. | My sister plays the piano.
salir | to go out | Los viernes {salgo} con mis amigos. | On Fridays I go out with my friends.
salir de fiesta | to go out partying | No {salgo de fiesta} mucho. | I don't go out partying much.
quedar con | to meet up with | {Quedo con} Marta esta tarde. | I'm meeting Marta this afternoon.
ver la tele | to watch TV | {Veo la tele} por la noche. | I watch TV at night.
ver una serie | to watch a series | Estamos {viendo una serie} española. | We're watching a Spanish series.
escuchar música | to listen to music | {Escucho música} en el tren. | I listen to music on the train.
ir de compras | to go shopping | Los sábados {voy de compras}. | On Saturdays I go shopping.
ir al gimnasio | to go to the gym | {Voy al gimnasio} por la mañana. | I go to the gym in the morning.
montar en bici | to ride a bike | Me encanta {montar en bici}. | I love riding a bike.
el concierto | concert | Hay un {concierto} el sábado. | There's a concert on Saturday.
el teatro | theatre | ¿Vamos al {teatro}? | Shall we go to the theatre?
la exposición | exhibition | Hay una {exposición} de Sorolla. | There's a Sorolla exhibition.
el partido | match, game | Esta noche hay {partido}. | There's a match tonight.
el equipo | team | ¿De qué {equipo} eres? | Which team do you support?
la entrada | ticket (for an event) | Tengo dos {entradas} para el concierto. | I have two tickets for the concert.
la piscina | swimming pool | Voy a la {piscina} en verano. | I go to the pool in summer.
el gimnasio | gym | El {gimnasio} abre a las siete. | The gym opens at seven.
poder | can, to be able | No {puedo} ir hoy. | I can't go today.
querer + infinitivo | to want to | ¿{Quieres} venir? | Do you want to come?
¿te apetece…? | do you fancy…? | {¿Te apetece} tomar algo? | Do you fancy a drink?
¿vamos a…? | shall we go to…? | {¿Vamos al} cine? | Shall we go to the cinema?
¡vale! | OK! | —¿A las ocho? —¡{Vale}! | —At eight? —OK!
¡genial! | great! | ¡{Genial}, nos vemos allí! | Great, see you there!
otro día | another day | Hoy no puedo, {otro día}. | I can't today, another day.
tener que | to have to | {Tengo que} estudiar. | I have to study.
una vez a la semana | once a week | Voy al cine {una vez a la semana}. | I go to the cinema once a week.
dos veces por semana | twice a week | Nado {dos veces por semana}. | I swim twice a week.
todos los días | every day | Leo {todos los días}. | I read every day.
el fin de semana | the weekend | ¿Qué haces {el fin de semana}? | What are you doing this weekend?
`,
    D: `
Yo ___ (hacer) yoga los martes. | hago | I do yoga on Tuesdays.
Yo ___ (salir) con mis amigos los viernes. | salgo | I go out with my friends on Fridays.
Yo ___ (ver) la tele por la noche. | veo | I watch TV at night.
Yo ___ (poner) música cuando cocino. | pongo | I put on music when I cook.
¿Qué ___ (hacer, tú) el fin de semana? | haces | What do you do at the weekend?
Mi hijo ___ (jugar) al fútbol. | juega | My son plays football.
Nosotros ___ (jugar) a las cartas. | jugamos | We play cards.
¿Vosotros ___ (salir) mucho? | salís | Do you (all) go out a lot?
Yo no ___ (poder) ir hoy. | puedo | I can't go today.
¿___ (poder, tú) venir el sábado? | puedes | Can you come on Saturday?
Juego ___ tenis. | al | I play tennis.
___ la guitarra. (I play an instrument) | toco | I play the guitar.
¿Te ___ ir al cine? (fancy) | apetece | Do you fancy going to the cinema?
Lo siento, no puedo. Tengo ___ trabajar. | que | Sorry, I can't. I have to work.
¿___ venir a la fiesta? (want, tú) | quieres | Do you want to come to the party?
Voy al gimnasio dos ___ por semana. | veces | I go to the gym twice a week.
Leo todos los ___. | días | I read every day.
Mis amigos ___ (hacer) senderismo los domingos. | hacen | My friends go hiking on Sundays.
¿___ (quedar, nosotros) a las ocho? | quedamos | Shall we meet at eight?
Tengo dos ___ para el concierto. (tickets) | entradas | I have two tickets for the concert.
`,
    S: `
¿Qué haces en tu tiempo libre? | What do you do in your free time?
Hago deporte tres veces por semana. | I do sport three times a week.
Los viernes salgo con mis compañeros de trabajo. | On Fridays I go out with my colleagues.
¿Te apetece ir al cine esta noche? | Do you fancy going to the cinema tonight?
Lo siento, no puedo. ¿Otro día? | Sorry, I can't. Another day?
Juego al pádel con mi hermano. | I play padel with my brother.
Toco la guitarra, pero muy mal. | I play the guitar, but very badly.
¿Quedamos el sábado a las siete en la plaza? | Shall we meet on Saturday at seven in the square?
`,
    R: [
      { t: 'El pádel', x: `El pádel es uno de los deportes más populares de España. Se juega en parejas, en una pista con paredes de cristal. Es fácil de aprender y muy social: después del partido, los jugadores normalmente toman algo juntos. Hay pistas en casi todos los barrios y pueblos. Mucha gente juega una o dos veces por semana, por la tarde o el fin de semana.`, q: `¿Cuántas personas juegan en cada equipo? | Una ; *Dos ; Cuatro
¿Cómo son las paredes de la pista? | De madera ; *De cristal ; No hay paredes
¿Qué hacen los jugadores después del partido? | Se van a casa ; *Toman algo juntos ; Juegan otro partido` },
      { t: 'Mensajes', x: `Ana: ¡Hola, Tom! ¿Te apetece ir a un concierto el sábado? Tengo dos entradas.
Tom: ¡Hola! ¿De quién es el concierto?
Ana: De Rosalía. ¡Es en el estadio!
Tom: ¡Genial! Pero el sábado por la tarde juego un partido de fútbol. ¿A qué hora empieza?
Ana: A las diez de la noche.
Tom: Entonces sí puedo. ¿Quedamos a las nueve en la puerta?
Ana: ¡Vale! Nos vemos.`, q: `¿Qué propone Ana? | Ir al cine ; *Ir a un concierto ; Jugar al fútbol
¿Qué hace Tom el sábado por la tarde? | Trabaja ; *Juega un partido de fútbol ; Estudia
¿A qué hora quedan? | A las diez ; *A las nueve ; A las siete` },
      { t: 'Encuesta: tiempo libre', x: `Según una encuesta reciente, las actividades favoritas de los españoles en su tiempo libre son: estar con la familia y los amigos, ver series y películas, escuchar música, pasear y hacer deporte. Los jóvenes juegan mucho a los videojuegos y usan las redes sociales. Las personas mayores prefieren pasear, leer el periódico y jugar a las cartas en el bar del barrio.`, q: `¿Cuál es la actividad favorita de los españoles? | Leer ; *Estar con la familia y los amigos ; Viajar
¿Qué hacen mucho los jóvenes? | Juegan a las cartas ; *Juegan a los videojuegos ; Leen el periódico
¿Dónde juegan a las cartas las personas mayores? | En casa ; *En el bar del barrio ; En el parque` }
    ],
    write: 'Describe what you do in your free time and how often, then write a message inviting a friend to something and their reply refusing politely and suggesting another day.',
    talk: 'You are a new Spanish friend in Madrid. Ask the learner about their hobbies, how often they do them, and invite them to something this weekend; negotiate a time.',
    res: [R.cb2(4), R.lt(27, 28), R.easy('tiempo libre')]
  });

  U({
    id: 'a1-describir', title: 'Describir: ser y estar, adjectives', goal: ['Describe people\'s looks, clothes and personality', 'Say how someone feels', 'Choose between ser and estar'],
    grammar: {
      t: 'ser vs estar; adjective agreement',
      h: `<p><b>ser</b> = what something <i>is</i>: identity, origin, profession, personality, physical description, time. <i>Laura es alta y simpática. Es de Cádiz.</i></p>
<p><b>estar</b> = how or where something <i>is</i>: location, temporary states, feelings. <i>Laura está cansada. Está en casa.</i></p>
<p>Adjectives follow the noun and agree: <b>un chico alto, una chica alta, unos chicos altos, unas chicas altas</b>. Adjectives in -e or a consonant don't change for gender: <i>inteligente, joven, feliz</i> (plural: inteligentes, jóvenes, felices).</p>
<p>Physical description also uses <b>tener</b> and <b>llevar</b>: <i>Tiene el pelo rizado y los ojos verdes. Lleva gafas y una chaqueta azul.</i></p>
<p>Some adjectives change meaning: <b>ser aburrido</b> (to be boring) vs <b>estar aburrido</b> (to be bored); <b>ser listo</b> (clever) vs <b>estar listo</b> (ready).</p>`
    },
    conj: { t: 'pres', v: ['ser', 'estar', 'tener', 'llevar'] },
    V: `
alto / alta | tall | Mi hermano es muy {alto}. | My brother is very tall.
bajo / baja | short | Mi abuela es {baja}. | My grandmother is short.
delgado / delgada | slim | Es {delgada} y alta. | She's slim and tall.
gordo / gorda | fat | El gato está un poco {gordo}. | The cat is a bit fat.
guapo / guapa | good-looking | ¡Qué {guapa} estás hoy! | You look lovely today!
feo / fea | ugly | El edificio es bastante {feo}. | The building is quite ugly.
joven | young | Mis padres son {jóvenes}. | My parents are young.
mayor | old (people, polite) | Mi vecino es una persona {mayor}. | My neighbour is an elderly person.
el pelo | hair | Tiene el {pelo} largo. | She has long hair.
rubio / rubia | blond | Mi hijo es {rubio}. | My son is blond.
moreno / morena | dark-haired; tanned | Es {morena} y tiene los ojos verdes. | She's dark-haired with green eyes.
pelirrojo / pelirroja | red-haired | Su hermana es {pelirroja}. | His sister is red-haired.
rizado / rizada | curly | Tengo el pelo {rizado}. | I have curly hair.
liso / lisa | straight (hair) | Tiene el pelo {liso}. | He has straight hair.
calvo / calva | bald | Mi padre es {calvo}. | My father is bald.
los ojos | eyes | Tiene los {ojos} azules. | He has blue eyes.
la barba | beard | Lleva {barba}. | He has a beard.
las gafas | glasses | Llevo {gafas} para leer. | I wear glasses for reading.
llevar | to wear; to carry | {Lleva} una chaqueta roja. | She's wearing a red jacket.
simpático / simpática | nice, friendly | Tu madre es muy {simpática}. | Your mother is very nice.
antipático / antipática | unfriendly | El vecino es un poco {antipático}. | The neighbour is a bit unfriendly.
divertido / divertida | fun | Mis amigos son muy {divertidos}. | My friends are great fun.
serio / seria | serious | Mi jefe es muy {serio}. | My boss is very serious.
tímido / tímida | shy | De niña era muy {tímida}. | As a girl I was very shy.
abierto / abierta | open, outgoing | Es una persona muy {abierta}. | She's a very outgoing person.
trabajador / trabajadora | hard-working | Es muy {trabajadora}. | She's very hard-working.
vago / vaga | lazy | ¡No seas {vago}! | Don't be lazy!
inteligente | intelligent | Es un niño muy {inteligente}. | He's a very intelligent child.
amable | kind | La recepcionista es muy {amable}. | The receptionist is very kind.
cansado / cansada | tired | Hoy estoy muy {cansado}. | I'm very tired today.
contento / contenta | happy, pleased | Estamos {contentos} con el piso. | We're happy with the flat.
triste | sad | ¿Por qué estás {triste}? | Why are you sad?
enfadado / enfadada | angry | Mi madre está {enfadada}. | My mother is angry.
nervioso / nerviosa | nervous | Estoy {nerviosa} por el examen. | I'm nervous about the exam.
tranquilo / tranquila | calm | {Tranquila}, todo está bien. | Calm down, everything is fine.
enfermo / enferma | ill | Mi hijo está {enfermo}. | My son is ill.
ocupado / ocupada | busy | Esta semana estoy muy {ocupado}. | This week I'm very busy.
aburrido / aburrida | boring; bored | Estoy {aburrida}; no hay nada que hacer. | I'm bored; there's nothing to do.
preocupado / preocupada | worried | Estoy {preocupado} por mi abuelo. | I'm worried about my grandfather.
listo / lista | clever; ready | ¿Estás {lista}? Nos vamos. | Are you ready? We're leaving.
rojo / roja | red | Lleva un vestido {rojo}. | She's wearing a red dress.
azul | blue | Mi coche es {azul}. | My car is blue.
verde | green | Tiene los ojos {verdes}. | She has green eyes.
negro / negra | black | Lleva una camiseta {negra}. | He's wearing a black t-shirt.
blanco / blanca | white | La casa es {blanca}. | The house is white.
amarillo / amarilla | yellow | Las flechas del Camino son {amarillas}. | The arrows of the Camino are yellow.
gris | grey | El cielo está {gris}. | The sky is grey.
marrón | brown | Tiene los ojos {marrones}. | He has brown eyes.
`,
    D: `
Mi hermana ___ muy simpática. | es | My sister is very nice.
Hoy ___ cansado. | estoy | Today I am tired.
Mis amigos ___ en el bar. | están | My friends are in the bar.
Carmen ___ de Cádiz. | es | Carmen is from Cádiz.
Las chicas son muy divertid___. | as | The girls are very fun.
¿Por qué ___ enfadada? (tú) | estás | Why are you angry?
Mis padres son jóven___. | es | My parents are young.
La película ___ aburrida; no me gusta. | es | The film is boring; I don't like it.
Estoy aburrid___ (a woman speaking). | a | I'm bored.
Tiene ___ pelo largo y rizado. | el | She has long curly hair.
Mi padre ___ (llevar) gafas. | lleva | My father wears glasses.
Mi hijo ___ (tener) los ojos azules. | tiene | My son has blue eyes.
¿___ listos? Nos vamos. (vosotros) | estáis | Are you ready? We're leaving.
Mi sobrina es muy ___; siempre saca buenas notas. (clever) | lista | My niece is very clever; she always gets good marks.
Los chicos son muy trabajador___. | es | The boys are very hard-working.
Lleva una camiseta y unos pantalones negr___. | os | He's wearing a t-shirt and black trousers.
Mi abuelo ___ mayor, pero ___ muy bien. | es, está|es está | My grandfather is old, but he's very well.
Estamos ___ con el piso nuevo. (happy) | contentos | We're happy with the new flat.
Mi hijo está ___; tiene fiebre. (ill) | enfermo | My son is ill; he has a fever.
Tiene los ojos ___ (brown). | marrones | He has brown eyes.
`,
    S: `
Mi mejor amiga es alta, morena y muy divertida. | My best friend is tall, dark-haired and very fun.
Hoy estoy un poco triste. | Today I'm a bit sad.
¿Cómo es tu jefe? —Es simpático pero muy serio. | What is your boss like? —He's nice but very serious.
Estamos muy contentos con el piso. | We are very happy with the flat.
Mi abuelo es mayor, pero está muy bien. | My grandfather is old, but he's very well.
¿Estás lista? Nos vamos. | Are you ready? We're leaving.
Lleva gafas y una chaqueta azul. | He wears glasses and a blue jacket.
Tiene el pelo rizado y los ojos verdes. | She has curly hair and green eyes.
`,
    R: [
      { t: 'Mis compañeros de piso', x: `Vivo con dos compañeros. Irene es de Toledo; es baja, tiene el pelo largo y rizado y es muy trabajadora. Ahora está muy nerviosa porque tiene exámenes. Marcos es alto y rubio. Es divertido y un poco desordenado. Hoy está enfermo y está en la cama. Yo estoy contenta en este piso: mis compañeros son geniales.`, q: `¿Cómo es Irene? | Alta y rubia ; *Baja y trabajadora ; Desordenada
¿Por qué está nerviosa Irene? | *Porque tiene exámenes ; Porque está enferma ; Porque no le gusta el piso
¿Dónde está Marcos hoy? | En la universidad ; *En la cama ; En Toledo` },
      { t: 'Busco a mi amiga', x: `—Perdone, estoy buscando a mi amiga. ¿La ha visto?
—¿Cómo es?
—Es alta y delgada, tiene el pelo corto y rubio, y lleva gafas.
—¿Qué ropa lleva?
—Lleva un abrigo verde y una bufanda roja.
—Ah, sí. Está en la cafetería, al lado de la puerta. Está tomando un café… y parece muy tranquila.`, q: `¿Cómo tiene el pelo la amiga? | Largo y moreno ; *Corto y rubio ; Rizado
¿Qué lleva? | Un vestido rojo ; *Un abrigo verde y una bufanda roja ; Una chaqueta negra
¿Dónde está? | En la calle ; *En la cafetería ; En el metro` },
      { t: 'Retrato de mi abuela', x: `Mi abuela Carmen tiene ochenta y cinco años. Es pequeña y delgada, tiene el pelo blanco y unos ojos negros muy vivos. Es muy simpática y muy habladora: conoce a todo el mundo en el pueblo. Siempre está contenta, pero hoy está un poco preocupada porque mi abuelo está enfermo. Ella es la persona más fuerte de mi familia.`, q: `¿Cuántos años tiene la abuela? | 75 ; *85 ; 95
¿Cómo es su carácter? | *Simpática y habladora ; Seria y tímida ; Antipática
¿Por qué está preocupada hoy? | Porque está sola ; *Porque el abuelo está enfermo ; Porque no tiene dinero` }
    ],
    write: 'Describe two people you know: what they look like (ser, tener, llevar), what they are like (ser), and how they are today or where they are now (estar). 10 sentences.',
    talk: 'You are a friend in Madrid helping the learner describe a lost travel companion to the police: appearance, clothing, mood. Ask questions using ser, estar, tener and llevar.',
    res: [R.cb2(6), R.cb2(8), R.cb2(9), R.lt(29, 30), R.lecturas('nivel inicial')]
  });
})();
