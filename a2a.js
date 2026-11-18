/* A2 · Plataforma (part 1) */
(function () {
  const R = RES, U = CAMINO.unit('A2');

  U({
    id: 'a2-restaurante', title: 'En el restaurante: stem-changing verbs', goal: ['Order a full menú del día', 'Use o→ue, e→ie and e→i verbs (poder, pedir, preferir)', 'Make polite requests and complaints'],
    grammar: {
      t: 'Stem-changing verbs in the present',
      h: `<p>In many verbs the stressed vowel of the stem changes in all persons <b>except nosotros and vosotros</b> (the "boot").</p>
<table><tr><th></th><th>e→ie preferir</th><th>o→ue poder</th><th>e→i pedir</th></tr>
<tr><td>yo</td><td>prefiero</td><td>puedo</td><td>pido</td></tr><tr><td>tú</td><td>prefieres</td><td>puedes</td><td>pides</td></tr><tr><td>él/usted</td><td>prefiere</td><td>puede</td><td>pide</td></tr>
<tr><td>nosotros</td><td>preferimos</td><td>podemos</td><td>pedimos</td></tr><tr><td>vosotros</td><td>preferís</td><td>podéis</td><td>pedís</td></tr><tr><td>ellos</td><td>prefieren</td><td>pueden</td><td>piden</td></tr></table>
<p>Common ones: e→ie <i>querer, pensar, empezar, cerrar, entender, recomendar</i>; o→ue <i>poder, volver, dormir, costar, encontrar, probar</i>; e→i <i>pedir, servir, repetir, seguir</i>.</p>
<p><b>El menú del día</b>: a fixed-price lunch with <b>primer plato</b>, <b>segundo plato</b>, <b>postre</b>, bread and a drink. Polite requests: <b>¿Puedo…?</b> / <b>¿Me puede traer…?</b> Complaints: <i>Perdone, la sopa está fría. Esto no es lo que he pedido.</i></p>`
    },
    conj: { t: 'pres', v: ['poder', 'pedir', 'preferir', 'volver', 'servir', 'probar'] },
    V: `
el menú del día | set lunch menu | El {menú del día} cuesta catorce euros. | The set menu costs fourteen euros.
la carta | the menu (à la carte) | ¿Nos trae la {carta}, por favor? | Could you bring us the menu, please?
el primer plato | first course | De {primer plato}, gazpacho. | For the first course, gazpacho.
el segundo plato | main course | De {segundo plato}, merluza. | For the main course, hake.
el postre | dessert | ¿Qué hay de {postre}? | What's for dessert?
la bebida | drink | La {bebida} está incluida. | The drink is included.
pedir | to order, ask for | ¿Qué vas a {pedir}? | What are you going to order?
recomendar | to recommend | ¿Qué nos {recomienda}? | What do you recommend?
probar | to try, taste | ¿Puedo {probar} el vino? | Can I taste the wine?
servir | to serve | Aquí {sirven} el mejor cocido. | They serve the best stew here.
traer | to bring | ¿Me {trae} un poco más de pan? | Could you bring me a bit more bread?
reservar | to book | Quiero {reservar} una mesa para cuatro. | I want to book a table for four.
la reserva | reservation | Tengo una {reserva} a nombre de Visser. | I have a reservation under Visser.
la mesa | table | Una {mesa} para dos, por favor. | A table for two, please.
el plato | dish, plate | Es un {plato} típico de Galicia. | It's a typical Galician dish.
la sopa | soup | La {sopa} está muy caliente. | The soup is very hot.
la ensalada | salad | Una {ensalada} mixta. | A mixed salad.
las lentejas | lentils | Las {lentejas} de mi madre son las mejores. | My mother's lentils are the best.
el gazpacho | cold tomato soup | En verano tomo {gazpacho}. | In summer I have gazpacho.
la paella | paella | La {paella} es de Valencia. | Paella is from Valencia.
el cordero | lamb | El {cordero} asado es típico de Segovia. | Roast lamb is typical of Segovia.
el cerdo | pork | No como {cerdo}. | I don't eat pork.
la ternera | beef, veal | Un filete de {ternera}. | A beef steak.
la merluza | hake | {Merluza} a la plancha. | Grilled hake.
el marisco | seafood | Me encanta el {marisco}. | I love seafood.
las gambas | prawns | {Gambas} al ajillo. | Prawns in garlic.
a la plancha | grilled | Pescado {a la plancha}. | Grilled fish.
frito / frita | fried | Calamares {fritos}. | Fried squid.
asado / asada | roast | Pollo {asado} con patatas. | Roast chicken with potatoes.
al horno | baked | Dorada {al horno}. | Baked sea bream.
poco hecho / muy hecho | rare / well done | El filete, {poco hecho}, por favor. | The steak, rare, please.
el flan | crème caramel | De postre, un {flan}. | For dessert, a crème caramel.
el helado | ice cream | Un {helado} de chocolate. | A chocolate ice cream.
la fruta del tiempo | seasonal fruit | ¿Tienen {fruta del tiempo}? | Do you have seasonal fruit?
el pan | bread | ¿Nos trae más {pan}? | Could you bring us more bread?
rico / rica | tasty | ¡Qué {rico} está todo! | Everything is so tasty!
picante | spicy | ¿Es muy {picante}? | Is it very spicy?
salado / salada | salty | La sopa está un poco {salada}. | The soup is a bit salty.
frío / fría | cold | La comida está {fría}. | The food is cold.
caliente | hot (temperature) | El café está muy {caliente}. | The coffee is very hot.
sin gluten | gluten-free | ¿Tienen platos {sin gluten}? | Do you have gluten-free dishes?
la alergia | allergy | Tengo {alergia} a los frutos secos. | I'm allergic to nuts.
¡que aproveche! | enjoy your meal! | Aquí tienen. ¡{Que aproveche}! | Here you are. Enjoy your meal!
la cuenta | bill | ¿Nos trae {la cuenta}? | Could you bring us the bill?
pagar a medias | to split the bill | ¿{Pagamos a medias}? | Shall we split the bill?
invitar | to treat, pay for someone | Hoy te {invito} yo. | Today it's on me.
`,
    D: `
¿___ (poder, yo) ver la carta? | puedo | Can I see the menu?
Yo ___ (pedir) la sopa de primero. | pido | I'll have the soup as a starter.
¿Qué ___ (preferir, tú), carne o pescado? | prefieres | What do you prefer, meat or fish?
Nosotros ___ (pedir) dos menús. | pedimos | We order two set menus.
¿Cuánto ___ (costar) el menú? | cuesta | How much is the set menu?
¿Vosotros ___ (querer) postre? | queréis | Do you (all) want dessert?
El restaurante ___ (cerrar) a las once. | cierra | The restaurant closes at eleven.
Mis amigos ___ (volver) a casa en taxi. | vuelven | My friends go home by taxi.
¿Qué nos ___ (recomendar, usted)? | recomienda | What do you recommend?
¿Puedo ___ (try) el vino? | probar | Can I taste the wine?
En este bar ___ (servir) tapas gratis. | sirven | In this bar they serve free tapas.
El camarero ___ (repetir) la pregunta. | repite | The waiter repeats the question.
Yo no ___ (entender) la carta. | entiendo | I don't understand the menu.
¿___ (poder, vosotros) esperar un momento? | podéis | Can you (all) wait a moment?
Mi hija siempre ___ (pedir) patatas fritas. | pide | My daughter always orders chips.
De ___ plato, quiero merluza. (main) | segundo | For the main course, I want hake.
El filete, poco ___, por favor. | hecho | The steak, rare, please.
¡Que ___! | aproveche | Enjoy your meal!
Hoy te ___ yo. (treat) | invito | Today it's on me.
Tengo ___ al marisco. | alergia | I'm allergic to seafood.
`,
    S: `
Una mesa para dos, por favor. | A table for two, please.
De primero quiero la ensalada y de segundo el pescado a la plancha. | For starters I want the salad and for main the grilled fish.
¿Qué lleva este plato? | What's in this dish?
¿Me puede traer más pan, por favor? | Could you bring me more bread, please?
Está todo riquísimo. | Everything is delicious.
¿Podemos pagar con tarjeta? | Can we pay by card?
Perdone, la sopa está fría. | Excuse me, the soup is cold.
¿Pagamos a medias o te invito yo? | Shall we split it or is it on me?
`,
    R: [
      { t: 'Menú del día — Casa Pepa (14 €)', x: `PRIMEROS: Gazpacho andaluz · Ensalada mixta · Lentejas con chorizo.
SEGUNDOS: Merluza a la plancha · Pollo asado con patatas · Albóndigas en salsa.
POSTRES: Flan casero · Fruta del tiempo · Arroz con leche.
Incluye pan y bebida (agua, vino o cerveza). Café: 1,50 € extra. De lunes a viernes, de 13:30 a 16:00.`, q: `¿Cuánto cuesta el menú? | *14 € ; 15,50 € ; 1,50 €
¿Qué incluye? | El café ; *Pan y bebida ; Solo el postre
¿Cuándo sirven el menú? | Todos los días ; *De lunes a viernes al mediodía ; Por la noche` },
      { t: 'Una cena complicada', x: `Anoche fuimos a cenar a un restaurante nuevo. El camarero era muy amable, pero la cocina era muy lenta. Pedimos croquetas y una ensalada para compartir. Después yo pedí un filete poco hecho y me lo trajeron muy hecho. Mi amiga pidió pescado y estaba frío. Al final, el encargado nos invitó al postre y nos pidió perdón. La comida no fue perfecta, pero el servicio fue muy bueno.`, q: `¿Cómo era el camarero? | Antipático ; *Muy amable ; Lento
¿Qué problema tuvo el filete? | Estaba frío ; *Estaba muy hecho ; Era pequeño
¿Qué hizo el encargado? | Nada ; *Les invitó al postre ; Les cobró más` },
      { t: 'Los horarios de comer', x: `En España se come tarde. El desayuno es pequeño: un café y una tostada. A media mañana mucha gente toma otro café o un bocadillo. La comida, entre las dos y las cuatro, es la comida principal del día. Por la tarde, a las seis, los niños meriendan. Y la cena es entre las nueve y las once. Muchos restaurantes no abren para cenar antes de las ocho y media.`, q: `¿Cuál es la comida principal del día? | El desayuno ; *La comida ; La cena
¿Quién merienda a las seis? | Los mayores ; *Los niños ; Los turistas
¿Cuándo abren muchos restaurantes para cenar? | A las seis ; *A las ocho y media ; A las once` }
    ],
    write: 'You are at Casa Pepa with a vegetarian friend. Write what each of you orders and why (prefiero…, no puedo comer…), and a polite complaint about one dish.',
    talk: 'You are a waiter at a traditional restaurant in Madrid serving the menú del día. Explain the options, take the learner\'s order for each course and handle a special request or complaint.',
    res: [R.cb1(17), R.cb1(18), R.cb1(20), R.lt(31, 32), R.easy('comida española')]
  });

  U({
    id: 'a2-compras', title: 'De compras: demonstratives and object pronouns', goal: ['Shop in different kinds of shops', 'Point things out with este/ese/aquel', 'Avoid repetition with lo/la/los/las'],
    grammar: {
      t: 'Demonstratives and direct object pronouns',
      h: `<p><b>este/esta/estos/estas</b> (this, near me), <b>ese/esa/esos/esas</b> (that, near you), <b>aquel/aquella/aquellos/aquellas</b> (that over there). Neuter <b>esto, eso, aquello</b> for unknown things: <i>¿Qué es esto?</i></p>
<p>Direct object pronouns replace a noun: <b>lo</b> (him, it m.), <b>la</b> (her, it f.), <b>los</b>, <b>las</b>; also <b>me, te, nos, os</b>. They go <b>before</b> a conjugated verb or <b>attached</b> to an infinitive:</p>
<p><i>¿Te gusta esta lámpara? — Sí, <b>la</b> compro.</i> / <i>Voy a comprar<b>la</b>.</i> / <i>¿El regalo? Ya <b>lo</b> tengo.</i></p>
<p>Shopping phrases: <b>¿Cuánto cuesta / cuestan?</b>, <b>¿Lo tiene en otro color?</b>, <b>¿Se puede devolver?</b>, <b>Me lo llevo</b> (I'll take it), <b>Solo estoy mirando</b> (just looking).</p>`
    },
    V: `
la tienda | shop | Hay muchas {tiendas} en el centro. | There are many shops in the centre.
el centro comercial | shopping centre | Vamos al {centro comercial}. | Let's go to the shopping centre.
la librería | bookshop | Compro libros en la {librería}. | I buy books at the bookshop.
la zapatería | shoe shop | La {zapatería} está cerrada. | The shoe shop is closed.
la ferretería | hardware shop | Necesito una bombilla de la {ferretería}. | I need a light bulb from the hardware shop.
el estanco | tobacconist (stamps too) | Los sellos se compran en el {estanco}. | Stamps are bought at the tobacconist's.
el quiosco | kiosk, newsstand | Compro el periódico en el {quiosco}. | I buy the newspaper at the kiosk.
la floristería | florist | Compro rosas en la {floristería}. | I buy roses at the florist.
el regalo | present | Busco un {regalo} para mi madre. | I'm looking for a present for my mother.
el dependiente / la dependienta | shop assistant | La {dependienta} es muy amable. | The shop assistant is very kind.
el precio | price | El {precio} es razonable. | The price is reasonable.
las rebajas | the sales | En enero hay {rebajas}. | In January there are sales.
el descuento | discount | Tiene un veinte por ciento de {descuento}. | It has a twenty percent discount.
la oferta | special offer | Está en {oferta}. | It's on offer.
el tique | receipt | Guarda el {tique}. | Keep the receipt.
devolver | to return (an item) | ¿Puedo {devolver} esto? | Can I return this?
cambiar | to exchange | Quiero {cambiar} este jersey. | I want to exchange this jumper.
pagar en efectivo | to pay in cash | ¿Puedo {pagar en efectivo}? | Can I pay in cash?
pagar con tarjeta | to pay by card | {Pago con tarjeta}. | I'm paying by card.
el probador | fitting room | ¿Dónde está el {probador}? | Where is the fitting room?
probarse | to try on | ¿Me lo puedo {probar}? | Can I try it on?
llevarse | to take (buy) | Me lo {llevo}. | I'll take it.
mirar | to look | Solo estoy {mirando}, gracias. | I'm just looking, thanks.
envolver | to wrap | ¿Me lo puede {envolver} para regalo? | Can you gift-wrap it?
abierto / abierta | open | La tienda está {abierta} hasta las nueve. | The shop is open until nine.
cerrado / cerrada | closed | Los domingos está {cerrado}. | It's closed on Sundays.
el horario | opening hours | ¿Cuál es el {horario}? | What are the opening hours?
este / esta | this | {Este} bolso es precioso. | This bag is beautiful.
ese / esa | that (near you) | ¿Cuánto cuesta {esa} taza? | How much is that cup?
aquel / aquella | that (over there) | Me gusta {aquella} lámpara. | I like that lamp over there.
esto / eso | this / that (thing) | ¿Qué es {esto}? | What is this?
lo / la | it, him / it, her | ¿El libro? {Lo} compro. | The book? I'll buy it.
los / las | them | ¿Las flores? {Las} quiero rojas. | The flowers? I want them red.
el bolso | handbag | Busco un {bolso} negro. | I'm looking for a black handbag.
la cartera | wallet | He perdido la {cartera}. | I've lost my wallet.
el perfume | perfume | Este {perfume} huele muy bien. | This perfume smells very good.
la taza | mug, cup | Una {taza} de recuerdo. | A souvenir mug.
el recuerdo | souvenir; memory | Compro un {recuerdo} de Toledo. | I'm buying a souvenir of Toledo.
la talla | size (clothes) | ¿Qué {talla} usa? | What size are you?
el número | size (shoes) | Calzo el {número} 42. | I take a size 42.
caro / cara | expensive | Es demasiado {caro}. | It's too expensive.
barato / barata | cheap | Es muy {barato}. | It's very cheap.
demasiado | too (much) | Es {demasiado} grande. | It's too big.
`,
    D: `
¿Cuánto cuesta ___ chaqueta? (this) | esta | How much is this jacket?
Me gustan ___ zapatos de ahí. (those near you) | esos | I like those shoes there.
¿Ves ___ edificio al fondo? (that over there) | aquel | Do you see that building in the distance?
—¿Compras el vino? —Sí, ___ compro. | lo | —Are you buying the wine? —Yes, I'm buying it.
—¿Y las naranjas? —___ compro también. | las | —And the oranges? —I'm buying them too.
¿Me ___ puedo probar? (la camisa) | la | Can I try it on?
¿Qué es ___? No lo sé. | esto|eso | What is this? I don't know.
Voy a comprar___. (los pantalones) | los | I'm going to buy them.
—¿Tienes el tique? —Sí, ___ tengo aquí. | lo | —Do you have the receipt? —Yes, I have it here.
—¿Dónde están mis gafas? —No ___ veo. | las | —Where are my glasses? —I can't see them.
¿___ ayudo? (you, tú) | te | Can I help you?
Me lo ___. (take, buy) | llevo | I'll take it.
Solo estoy ___, gracias. | mirando | I'm just looking, thanks.
Quiero ___ este jersey por otro. | cambiar | I want to exchange this jumper for another.
¿Puedo pagar ___ efectivo? | en | Can I pay in cash?
¿Puedo pagar ___ tarjeta? | con | Can I pay by card?
Es ___ caro para mí. (too) | demasiado | It's too expensive for me.
¿Me lo puede envolver para ___? | regalo | Can you gift-wrap it?
En enero hay ___. | rebajas | In January there are sales.
Los sellos se compran en el ___. | estanco | Stamps are bought at the tobacconist's.
`,
    S: `
Perdone, ¿tiene este bolso en negro? | Excuse me, do you have this bag in black?
Solo estoy mirando, gracias. | I'm just looking, thanks.
¿Me lo puede envolver para regalo? | Can you gift-wrap it for me?
¿Se puede devolver si no le gusta? | Can it be returned if she doesn't like it?
Vale, me lo llevo. | OK, I'll take it.
¿Las flores? Las quiero para el sábado. | The flowers? I want them for Saturday.
Esta taza es muy bonita, pero aquella es más barata. | This mug is very pretty, but that one is cheaper.
¿Hasta qué hora está abierto? | Until what time are you open?
`,
    R: [
      { t: 'Un regalo para mamá', x: `Mañana es el cumpleaños de mi madre y todavía no tengo regalo. Primero entro en una librería. Hay una novela que le encanta, pero ya la tiene. Después voy a una tienda de cerámica. Hay unas tazas preciosas, pintadas a mano. La dependienta me enseña una azul y otra verde. "Me llevo la azul", le digo. "¿Me la puede envolver para regalo?". Cuesta dieciocho euros. ¡Perfecto!`, q: `¿Por qué no compra la novela? | Es cara ; *Su madre ya la tiene ; No hay
¿Qué compra al final? | Un libro ; *Una taza azul ; Una taza verde
¿Cuánto cuesta? | Ocho euros ; *Dieciocho euros ; Ochenta euros` },
      { t: 'Horarios comerciales', x: `En España, muchas tiendas pequeñas abren de diez a dos y de cinco a ocho y media. Entre las dos y las cinco cierran para comer. Los grandes almacenes y los centros comerciales abren todo el día, de diez a diez. Los domingos casi todo está cerrado, excepto en zonas turísticas y en algunas ciudades como Madrid. En verano, en el sur, muchas tiendas cierran por la tarde por el calor.`, q: `¿Cuándo cierran muchas tiendas pequeñas? | Por la mañana ; *Entre las dos y las cinco ; A las siete
¿Qué abre todo el día? | Las tiendas pequeñas ; *Los centros comerciales ; Las librerías
¿Qué pasa los domingos? | Todo está abierto ; *Casi todo está cerrado ; Hay rebajas` },
      { t: 'Una devolución', x: `—Buenas tardes. Quería devolver estos auriculares. No funcionan bien.
—¿Tiene el tique?
—Sí, aquí lo tiene. Los compré el sábado.
—Muy bien. ¿Quiere cambiarlos por otros o prefiere el dinero?
—Prefiero el dinero, por favor.
—De acuerdo. ¿Pagó con tarjeta?
—Sí.
—Entonces le devuelvo el dinero en la tarjeta. Firme aquí, por favor.`, q: `¿Qué quiere devolver? | Una chaqueta ; *Unos auriculares ; Un libro
¿Qué prefiere? | Cambiarlos ; *El dinero ; Otros más caros
¿Cómo le devuelven el dinero? | En efectivo ; *En la tarjeta ; Con un vale` }
    ],
    write: 'Write a dialogue in a shop: you look for a present, ask about colours and prices, choose one (using lo/la), ask for gift wrapping and the return policy.',
    talk: 'You are a shop assistant in a ceramics shop in Toledo. Help the learner choose a present: show items with este/ese/aquel, discuss prices and returns, and use lo/la naturally.',
    res: [R.cb1(25), R.cb1(36), R.lt(33, 34)]
  });

  U({
    id: 'a2-ropa', title: 'La ropa: clothes and comparisons', goal: ['Talk about clothes, sizes and style', 'Compare things: más/menos… que, tan… como', 'Use superlatives: el más…, -ísimo'],
    grammar: {
      t: 'Comparatives and superlatives',
      h: `<p><b>Superiority / inferiority</b>: <b>más / menos + adjective + que</b>: <i>Esta camisa es más cara que esa.</i> With numbers: <b>más de</b>: <i>Cuesta más de cien euros.</i></p>
<p><b>Equality</b>: <b>tan + adjective + como</b> (<i>tan alto como yo</i>); <b>tanto/a/os/as + noun + como</b> (<i>tantos zapatos como tú</i>); verb + <b>tanto como</b> (<i>No gasto tanto como tú</i>).</p>
<p>Irregular: <b>bueno → mejor</b>, <b>malo → peor</b>, <b>grande → mayor</b> (age) / más grande (size), <b>pequeño → menor</b> (age) / más pequeño.</p>
<p><b>Superlative</b>: <b>el/la/los/las más + adjective (+ de)</b>: <i>Es la tienda más barata del barrio. Es el mejor de todos.</i></p>
<p><b>Absolute superlative -ísimo</b>: <i>caro → carísimo, bonita → bonitísima, fácil → facilísimo</i> (= very, very).</p>
<p><b>llevar</b> = to wear; <b>ponerse</b> = to put on; <b>quedar</b> = to fit/suit: <i>Esta falda me queda bien / grande / pequeña. Te queda genial.</i></p>`
    },
    V: `
la ropa | clothes | Me gusta la {ropa} cómoda. | I like comfortable clothes.
la camisa | shirt | Lleva una {camisa} blanca. | He's wearing a white shirt.
la camiseta | t-shirt | Una {camiseta} de algodón. | A cotton t-shirt.
el jersey | jumper | Este {jersey} es muy calentito. | This jumper is very warm.
la sudadera | sweatshirt, hoodie | Llevo una {sudadera} gris. | I'm wearing a grey hoodie.
los pantalones | trousers | Necesito unos {pantalones} negros. | I need some black trousers.
los vaqueros | jeans | Siempre llevo {vaqueros}. | I always wear jeans.
la falda | skirt | Una {falda} larga. | A long skirt.
el vestido | dress | Un {vestido} para la boda. | A dress for the wedding.
el traje | suit | Lleva {traje} y corbata. | He's wearing a suit and tie.
la corbata | tie | No me gusta llevar {corbata}. | I don't like wearing a tie.
la chaqueta | jacket | Una {chaqueta} de cuero. | A leather jacket.
el abrigo | coat | Hace frío; ponte el {abrigo}. | It's cold; put your coat on.
la bufanda | scarf | Una {bufanda} de lana. | A woollen scarf.
el gorro | woolly hat | En invierno llevo {gorro}. | In winter I wear a hat.
los guantes | gloves | ¿Dónde están mis {guantes}? | Where are my gloves?
los zapatos | shoes | Estos {zapatos} me hacen daño. | These shoes hurt me.
las zapatillas | trainers; slippers | Unas {zapatillas} de deporte. | Some trainers.
las botas | boots | {Botas} para la nieve. | Boots for the snow.
las sandalias | sandals | En verano llevo {sandalias}. | In summer I wear sandals.
los calcetines | socks | {Calcetines} de colores. | Colourful socks.
el bañador | swimsuit, trunks | No olvides el {bañador}. | Don't forget your swimsuit.
el pijama | pyjamas | Me pongo el {pijama}. | I put my pyjamas on.
el algodón | cotton | Es cien por cien {algodón}. | It's a hundred percent cotton.
la lana | wool | Un jersey de {lana}. | A woollen jumper.
el cuero | leather | Un bolso de {cuero}. | A leather bag.
de rayas | striped | Una camisa {de rayas}. | A striped shirt.
de cuadros | checked | Una falda {de cuadros}. | A checked skirt.
liso / lisa | plain (one colour) | Prefiero las camisetas {lisas}. | I prefer plain t-shirts.
ancho / ancha | wide, loose | Los pantalones son muy {anchos}. | The trousers are very loose.
estrecho / estrecha | tight, narrow | Esta falda es muy {estrecha}. | This skirt is very tight.
largo / larga | long | Un abrigo {largo}. | A long coat.
corto / corta | short | Pantalones {cortos}. | Shorts.
quedar bien / mal | to suit / not suit, fit | Ese color te {queda} muy bien. | That colour really suits you.
ponerse | to put on | Me {pongo} el abrigo. | I put on my coat.
quitarse | to take off | {Quítate} los zapatos. | Take off your shoes.
la moda | fashion | Esta chaqueta está de {moda}. | This jacket is in fashion.
elegante | elegant | Vas muy {elegante}. | You look very elegant.
cómodo / cómoda | comfortable | Estos zapatos son muy {cómodos}. | These shoes are very comfortable.
más … que | more … than | Es {más} caro {que} el otro. | It's more expensive than the other one.
menos … que | less … than | Es {menos} bonito que el azul. | It's less pretty than the blue one.
tan … como | as … as | Es {tan} cómodo {como} el otro. | It's as comfortable as the other one.
mejor | better, best | Este es {mejor}. | This one is better.
peor | worse, worst | Es la {peor} tienda del barrio. | It's the worst shop in the area.
carísimo / carísima | extremely expensive | ¡Es {carísimo}! | It's incredibly expensive!
`,
    D: `
Esta camisa es ___ cara que esa. (more) | más | This shirt is more expensive than that one.
Mi abrigo es ___ largo que el tuyo. (less) | menos | My coat is less long than yours.
Este jersey es tan cómodo ___ el otro. | como | This jumper is as comfortable as the other one.
Este vestido es ___ bonito como aquel. | tan | This dress is as pretty as that one.
Tengo ___ zapatos como mi hermana. (as many) | tantos | I have as many shoes as my sister.
Esta tienda es ___ que la otra. (better) | mejor | This shop is better than the other one.
Este restaurante es el ___ del barrio. (worst) | peor | This restaurant is the worst in the area.
Mi hermano es ___ que yo. (older) | mayor | My brother is older than me.
Es la tienda más barata ___ barrio. | del | It's the cheapest shop in the neighbourhood.
Cuesta más ___ cien euros. | de | It costs more than a hundred euros.
Esta camiseta es carísim___. | a | This t-shirt is extremely expensive.
El examen fue facilísim___. | o | The exam was super easy.
Esa falda te ___ muy bien. (suits) | queda | That skirt suits you very well.
Estos pantalones me ___ grandes. (fit) | quedan | These trousers are too big on me.
Hace frío. ___ el abrigo. (put on, tú) | ponte | It's cold. Put on your coat.
Me ___ (poner) el pijama a las diez. | pongo | I put on my pyjamas at ten.
Una camisa ___ rayas. | de | A striped shirt.
Un jersey de ___. (wool) | lana | A woollen jumper.
En verano llevo pantalones ___. (short) | cortos | In summer I wear shorts.
No gasto ___ como tú. (as much) | tanto | I don't spend as much as you.
`,
    S: `
¿Qué talla usas? —La M, normalmente. | What size do you wear? —M, usually.
Esta chaqueta me queda un poco pequeña. ¿La tiene en una talla más? | This jacket is a bit small. Do you have it one size up?
El azul te queda mejor que el negro. | The blue one suits you better than the black one.
Estos zapatos son más cómodos que los otros. | These shoes are more comfortable than the others.
Es la tienda más barata de la ciudad. | It's the cheapest shop in the city.
Mi hermana tiene tanta ropa como una tienda. | My sister has as many clothes as a shop.
¡Qué vestido tan bonito! ¿Es nuevo? | What a pretty dress! Is it new?
Ponte algo elegante; vamos a una boda. | Put on something smart; we're going to a wedding.
`,
    R: [
      { t: 'En el probador', x: `—¿Qué tal te queda?
—No sé… Los pantalones me quedan un poco largos y la camisa es más estrecha que la otra.
—A ver… Sí, la camisa de rayas te queda mejor. Es más elegante.
—Pero es más cara: cuesta cuarenta y cinco euros y la otra treinta.
—Bueno, pero es de algodón y la calidad es mucho mejor.
—Vale, me la llevo. Los pantalones no.`, q: `¿Cómo le quedan los pantalones? | Pequeños ; *Un poco largos ; Perfectos
¿Cuánto cuesta la camisa de rayas? | 30 € ; *45 € ; 54 €
¿Qué compra al final? | Los pantalones ; *La camisa de rayas ; Nada` },
      { t: 'La moda española', x: `España es un país importante en el mundo de la moda. Zara, la marca más famosa, es de Galicia y tiene tiendas en casi cien países. Otras marcas españolas conocidas son Mango, Desigual y Massimo Dutti. Muchas de estas tiendas cambian su ropa cada pocas semanas. La moda rápida es barata, pero muchas personas piensan que es peor para el medio ambiente que la ropa de segunda mano.`, q: `¿De dónde es Zara? | De Madrid ; *De Galicia ; De Barcelona
¿Qué hacen muchas tiendas cada pocas semanas? | Cierran ; *Cambian su ropa ; Hacen rebajas
¿Qué piensan muchas personas de la moda rápida? | Que es cara ; *Que es peor para el medio ambiente ; Que es mejor` },
      { t: 'La maleta', x: `Lucía va a pasar una semana en Asturias en octubre. Allí llueve más y hace más frío que en Sevilla, donde vive. En su maleta pone un abrigo, dos jerséis de lana, unos vaqueros, unas botas y un paraguas. Su madre le dice: "¡Llévate también un gorro y una bufanda!". Lucía no quiere: "Mamá, no es Siberia". Al final, mete la bufanda, por si acaso.`, q: `¿Dónde vive Lucía? | En Asturias ; *En Sevilla ; En Siberia
¿Qué tiempo hace en Asturias, comparado con Sevilla? | Más calor ; *Más frío y más lluvia ; Igual
¿Qué mete al final? | El gorro ; *La bufanda ; Nada más` }
    ],
    write: 'Describe what you usually wear for work, at the weekend and to a party. Then compare three items of clothing you own using más/menos… que, tan… como and a superlative.',
    talk: 'You are a personal shopper in a clothes shop in Barcelona. Help the learner choose an outfit for a Spanish wedding; compare options with comparatives and tell them what suits them.',
    res: [R.cb1(25), R.lt(35, 36), R.easy('ropa')]
  });

  U({
    id: 'a2-piso', title: 'Buscar piso: irregular yo forms and obligation', goal: ['Look for and rent a flat in Spain', 'Use tengo/hago/pongo/salgo/conozco/sé', 'Express obligation with tener que, hay que and deber'],
    grammar: {
      t: 'Verbs irregular in the yo form; tener que / hay que / deber',
      h: `<p>Some verbs are only irregular in <b>yo</b>: <b>hacer → hago</b>, <b>poner → pongo</b>, <b>salir → salgo</b>, <b>traer → traigo</b>, <b>conocer → conozco</b>, <b>saber → sé</b>, <b>dar → doy</b>, <b>ver → veo</b>. Others combine yo-irregular with a stem change: <b>tener</b> (tengo, tienes…), <b>venir</b> (vengo, vienes…), <b>decir</b> (digo, dices…).</p>
<p><b>saber</b> = know a fact / how to; <b>conocer</b> = know a person or place: <i>Sé cocinar. Conozco a tu hermano.</i> (Note <b>a</b> before people: the "personal a".)</p>
<p>Obligation: <b>tener que + infinitive</b> (personal): <i>Tengo que pagar el alquiler.</i> <b>hay que + infinitive</b> (general rule): <i>Hay que separar la basura.</i> <b>deber + infinitive</b> (should, must): <i>Debes avisar con un mes de antelación.</i> Absence of obligation: <b>no hace falta + infinitive</b>.</p>
<p>Renting in Spain: <i>el alquiler</i> (rent), <i>la fianza</i> (deposit, usually one or two months), <i>la agencia</i> may charge a fee, <i>los gastos</i> (bills: luz, agua, gas, internet) are often separate.</p>`
    },
    conj: { t: 'pres', v: ['hacer', 'poner', 'salir', 'conocer', 'saber', 'venir', 'decir', 'traer'] },
    V: `
alquilar | to rent | Quiero {alquilar} un piso en el centro. | I want to rent a flat in the centre.
el alquiler | rent; rental | El {alquiler} es de novecientos euros. | The rent is nine hundred euros.
compartir piso | to share a flat | {Comparto piso} con dos chicas. | I share a flat with two girls.
el anuncio | advert | Vi el {anuncio} en internet. | I saw the advert online.
la agencia inmobiliaria | estate agency | La {agencia inmobiliaria} cobra un mes. | The agency charges a month's rent.
el casero / la casera | landlord / landlady | El {casero} vive en el segundo. | The landlord lives on the second floor.
el inquilino / la inquilina | tenant | Los {inquilinos} anteriores eran estudiantes. | The previous tenants were students.
el compañero de piso | flatmate | Mi {compañero de piso} es italiano. | My flatmate is Italian.
la fianza | deposit | Hay que pagar dos meses de {fianza}. | You have to pay two months' deposit.
el contrato | contract | Firmamos el {contrato} mañana. | We sign the contract tomorrow.
los gastos | bills, utilities | Los {gastos} no están incluidos. | Bills are not included.
la luz | electricity; light | La factura de la {luz} es muy cara. | The electricity bill is very expensive.
el gas | gas | La cocina es de {gas}. | The cooker is gas.
la calefacción | heating | El piso tiene {calefacción} central. | The flat has central heating.
el aire acondicionado | air conditioning | Sin {aire acondicionado} no se puede dormir. | You can't sleep without air conditioning.
amueblado / amueblada | furnished | Es un piso {amueblado}. | It's a furnished flat.
exterior | facing the street | Es un piso {exterior}, con mucha luz. | It's a street-facing flat with lots of light.
interior | facing the inner courtyard | Las habitaciones {interiores} son más tranquilas. | Interior rooms are quieter.
reformado / reformada | renovated | La cocina está {reformada}. | The kitchen is renovated.
la mudanza | move (house) | La {mudanza} es el sábado. | The move is on Saturday.
mudarse | to move (house) | Me {mudo} a Valencia en marzo. | I'm moving to Valencia in March.
el vecino / la vecina | neighbour | Mis {vecinos} son muy ruidosos. | My neighbours are very noisy.
la comunidad | residents' association; service charge | La {comunidad} cuesta cincuenta euros al mes. | The service charge is fifty euros a month.
la basura | rubbish | Hay que bajar la {basura} por la noche. | You have to take the rubbish down at night.
reciclar | to recycle | En casa {reciclamos} todo. | At home we recycle everything.
empadronarse | to register at the town hall | Tengo que {empadronarme} en el ayuntamiento. | I have to register at the town hall.
avisar | to notify, warn | Hay que {avisar} con un mes de antelación. | You have to give a month's notice.
arreglar | to fix | El casero tiene que {arreglar} la ducha. | The landlord has to fix the shower.
estropeado / estropeada | broken, out of order | La lavadora está {estropeada}. | The washing machine is broken.
hacer | to do, make | {Hago} la limpieza los sábados. | I do the cleaning on Saturdays.
poner | to put; to put on (appliance) | {Pongo} la lavadora por la noche. | I put the washing machine on at night.
traer | to bring | {Traigo} mis muebles de Holanda. | I'm bringing my furniture from Holland.
saber | to know (facts, how to) | No {sé} dónde está el contador. | I don't know where the meter is.
conocer | to know (people, places) | No {conozco} a mis vecinos. | I don't know my neighbours.
tener que | to have to | {Tengo que} pagar el alquiler. | I have to pay the rent.
hay que | one must, you have to | {Hay que} separar la basura. | You have to separate the rubbish.
deber | must, should | {Debes} firmar aquí. | You must sign here.
no hace falta | there's no need | {No hace falta} traer sábanas. | There's no need to bring sheets.
el metro cuadrado | square metre | Tiene sesenta {metros cuadrados}. | It's sixty square metres.
la mascota | pet | No se admiten {mascotas}. | Pets are not allowed.
`,
    D: `
Yo ___ (hacer) la compra los sábados. | hago | I do the shopping on Saturdays.
Yo no ___ (conocer) este barrio. | conozco | I don't know this neighbourhood.
Siempre ___ (poner) la mesa yo. | pongo | I always set the table.
¿A qué hora ___ (salir, yo) mañana? | salgo | What time do I leave tomorrow?
Yo ___ (traer) el vino. | traigo | I'll bring the wine.
Yo no ___ (saber) dónde está. | sé | I don't know where it is.
Yo ___ (venir) de Utrecht. | vengo | I come from Utrecht.
Yo siempre ___ (decir) la verdad. | digo | I always tell the truth.
Tengo ___ pagar la fianza. | que | I have to pay the deposit.
___ que reciclar el plástico. | hay | You have to recycle plastic.
¿___ (saber, tú) dónde está el contador? | sabes | Do you know where the meter is?
¿___ (conocer, tú) a mi casera? | conoces | Do you know my landlady?
Conozco ___ tu hermano. (personal a) | a | I know your brother.
Me ___ (mudarse) en marzo. | mudo | I'm moving in March.
No hace ___ traer toallas. | falta | There's no need to bring towels.
___ (deber, tú) avisar con un mes de antelación. | debes | You must give a month's notice.
La lavadora está ___. (broken) | estropeada | The washing machine is broken.
Hay que pagar dos meses de ___. (deposit) | fianza | You have to pay two months' deposit.
Los ___ no están incluidos. (bills) | gastos | Bills are not included.
Tengo que ___ en el ayuntamiento. (register) | empadronarme | I have to register at the town hall.
`,
    S: `
Busco un piso de dos dormitorios en el centro. | I'm looking for a two-bedroom flat in the centre.
¿Los gastos están incluidos? | Are bills included?
El piso es muy luminoso, pero no tiene ascensor. | The flat is very bright, but it has no lift.
Tenemos que pagar dos meses de fianza. | We have to pay two months' deposit.
Hay que empadronarse en el ayuntamiento. | You have to register at the town hall.
No conozco a nadie en el edificio. | I don't know anyone in the building.
¿Se admiten mascotas? | Are pets allowed?
La ducha está estropeada; ¿la puede arreglar? | The shower is broken; can you fix it?
`,
    R: [
      { t: 'Anuncio: piso en Valencia', x: `Se alquila piso exterior en Ruzafa, tercera planta con ascensor. Dos dormitorios, salón con balcón, cocina equipada y un baño. Amueblado, con aire acondicionado y calefacción. 950 €/mes, gastos aparte. Fianza de dos meses. Contrato mínimo de un año. No se admiten mascotas. Disponible desde el 1 de marzo.`, q: `¿Tiene ascensor? | *Sí ; No ; No se dice
¿Están incluidos los gastos? | Sí ; *No ; Solo el agua
¿Puedes vivir allí con un perro? | Sí ; *No ; Solo con un gato` },
      { t: 'Las normas del piso', x: `Bienvenida al piso, Anna. Aquí tienes nuestras normas: hay que limpiar la cocina después de cocinar. Cada semana una persona limpia el baño (tienes el calendario en la nevera). La basura se baja por la noche, después de las ocho. No hace falta pedir permiso para invitar a amigos, pero hay que avisar si alguien duerme aquí. Y por favor: silencio después de las doce. ¡Bienvenida!`, q: `¿Cuándo hay que limpiar la cocina? | Una vez a la semana ; *Después de cocinar ; Los domingos
¿Dónde está el calendario de limpieza? | En el baño ; *En la nevera ; En el salón
¿Qué hay que hacer si un amigo duerme en el piso? | Pagar ; *Avisar ; Nada` },
      { t: 'Problemas con el casero', x: `Hace tres semanas que la calefacción de nuestro piso está estropeada. Llamo al casero cada día, pero siempre dice lo mismo: "Mañana viene el técnico". Nadie viene. Ahora es enero y en Madrid hace mucho frío por la noche. Mi compañera dice que tenemos que mirar el contrato: según la ley, el casero debe hacer las reparaciones necesarias. Esta tarde le escribo un correo formal.`, q: `¿Qué está estropeado? | La ducha ; *La calefacción ; La lavadora
¿Qué dice siempre el casero? | Que no tiene dinero ; *Que mañana viene el técnico ; Que no es su problema
¿Qué va a hacer el narrador? | Mudarse ; *Escribir un correo formal ; Arreglarlo él` }
    ],
    write: 'Write an email to a landlord asking about a flat: size, bills, deposit, pets, contract and when you can visit it. Use tener que, hay que and saber/conocer.',
    talk: 'You are a landlord showing a flat in Valencia to the learner. Answer and ask questions about the rooms, rent, deposit, bills and contract; mention empadronarse and the house rules.',
    res: [R.cb1(22), R.cb1(33), R.lt(37, 38), R.slcFalse()]
  });

  U({
    id: 'a2-planes', title: 'Planes y el tiempo: ir a + infinitive', goal: ['Talk about plans and intentions', 'Describe the weather and seasons in detail', 'Make, accept and decline invitations'],
    grammar: {
      t: 'ir a + infinitive; weather with hace, hay, está',
      h: `<p>The near future: <b>ir a + infinitive</b>: <i>Voy a visitar Toledo el sábado. ¿Qué vas a hacer esta noche?</i> Also <b>pensar + infinitive</b> (to intend): <i>Pienso viajar en verano.</i></p>
<p>Weather: <b>hace</b> + noun: <i>hace calor, hace frío, hace sol, hace viento, hace buen/mal tiempo</i>. <b>hay</b> + noun: <i>hay niebla, hay tormenta, hay nubes</i>. <b>está</b> + adjective: <i>está nublado, está despejado</i>. Verbs: <b>llueve</b> (llover, o→ue), <b>nieva</b> (nevar, e→ie). Temperatures: <i>Estamos a 30 grados. Hace cinco grados bajo cero.</i></p>
<p>Invitations: <b>¿Te apetece…?</b>, <b>¿Quedamos…?</b>, <b>¿Por qué no…?</b>, <b>¿Te vienes?</b> Accept: <b>¡Vale! ¡Genial! ¡Me apunto!</b> Decline politely: <b>Lo siento, no puedo, es que…</b> / <b>Me encantaría, pero…</b></p>
<p>Time expressions: <i>esta tarde, esta noche, mañana por la mañana, pasado mañana, el próximo fin de semana, la semana que viene, dentro de dos días</i>.</p>`
    },
    conj: { t: 'pres', v: ['ir', 'quedar', 'pensar', 'llover', 'nevar'] },
    V: `
el tiempo | weather; time | ¿Qué {tiempo} hace hoy? | What's the weather like today?
el pronóstico | forecast | Según el {pronóstico}, mañana llueve. | According to the forecast, it'll rain tomorrow.
hace calor | it's hot | En Sevilla {hace} mucho {calor}. | It's very hot in Seville.
hace frío | it's cold | Hoy {hace frío}. | It's cold today.
hace sol | it's sunny | {Hace sol}, vamos a la playa. | It's sunny, let's go to the beach.
hace viento | it's windy | En Tarifa siempre {hace viento}. | In Tarifa it's always windy.
hace buen tiempo | the weather is nice | Si {hace buen tiempo}, comemos fuera. | If the weather is nice, we'll eat outside.
hace mal tiempo | the weather is bad | {Hace mal tiempo} para ir a la montaña. | The weather is bad for going to the mountains.
llover | to rain | Mañana va a {llover}. | It's going to rain tomorrow.
la lluvia | rain | Me gusta el sonido de la {lluvia}. | I like the sound of rain.
nevar | to snow | En la sierra {nieva} en invierno. | In the mountains it snows in winter.
la nieve | snow | Los niños juegan en la {nieve}. | The children play in the snow.
la tormenta | storm | Hay {tormenta} esta noche. | There's a storm tonight.
la niebla | fog | Hay mucha {niebla} en la autopista. | There's a lot of fog on the motorway.
las nubes | clouds | Hay {nubes}, pero no llueve. | It's cloudy, but it isn't raining.
nublado / nublada | cloudy | El cielo está {nublado}. | The sky is cloudy.
despejado / despejada | clear (sky) | Hoy está {despejado}. | Today it's clear.
el grado | degree | Estamos a treinta {grados}. | It's thirty degrees.
la temperatura | temperature | La {temperatura} baja por la noche. | The temperature drops at night.
húmedo / húmeda | humid | En Valencia el aire es muy {húmedo}. | In Valencia the air is very humid.
seco / seca | dry | El clima de Madrid es {seco}. | Madrid's climate is dry.
el paraguas | umbrella | Coge el {paraguas}. | Take your umbrella.
el plan | plan | ¿Tienes {planes} para el sábado? | Do you have plans for Saturday?
quedar | to meet up, arrange to meet | ¿A qué hora {quedamos}? | What time shall we meet?
¿te apetece…? | do you fancy…? | {¿Te apetece} dar un paseo? | Do you fancy a walk?
¿te vienes? | are you coming? | Vamos al cine. {¿Te vienes?} | We're going to the cinema. Are you coming?
¡me apunto! | count me in! | ¿Una barbacoa? ¡{Me apunto}! | A barbecue? Count me in!
me encantaría, pero… | I'd love to, but… | {Me encantaría, pero} tengo que trabajar. | I'd love to, but I have to work.
es que… | the thing is… | No puedo, {es que} estoy enfermo. | I can't, the thing is I'm ill.
pensar + infinitivo | to intend to | {Pienso} ir a la playa en agosto. | I'm planning to go to the beach in August.
esta tarde | this afternoon / evening | {Esta tarde} voy al médico. | This afternoon I'm going to the doctor.
esta noche | tonight | ¿Qué haces {esta noche}? | What are you doing tonight?
pasado mañana | the day after tomorrow | Nos vemos {pasado mañana}. | See you the day after tomorrow.
la semana que viene | next week | {La semana que viene} empiezo un curso. | Next week I'm starting a course.
el próximo… | next… | {El próximo} verano voy a Cuba. | Next summer I'm going to Cuba.
dentro de | in (time from now) | Llego {dentro de} diez minutos. | I'll arrive in ten minutes.
la excursión | day trip, outing | Hacemos una {excursión} a Segovia. | We're doing a day trip to Segovia.
el picnic | picnic | Si hace sol, hacemos un {picnic}. | If it's sunny, we'll have a picnic.
la barbacoa | barbecue | El domingo hay {barbacoa} en casa de Luis. | On Sunday there's a barbecue at Luis's.
quizás | maybe | {Quizás} vamos a la playa. | Maybe we'll go to the beach.
`,
    D: `
Mañana ___ a llover. | va | It's going to rain tomorrow.
¿Qué ___ a hacer el fin de semana? (tú) | vas | What are you going to do at the weekend?
Nosotros ___ a ir a la playa. | vamos | We are going to go to the beach.
¿Vosotros ___ a venir a la fiesta? | vais | Are you (all) going to come to the party?
Mis padres ___ a visitarnos en mayo. | van | My parents are going to visit us in May.
En agosto ___ mucho calor en Sevilla. | hace | In August it's very hot in Seville.
Hoy ___ nublado. | está | Today it's cloudy.
___ niebla en la carretera. | hay | There's fog on the road.
En los Pirineos ___ (nevar) en invierno. | nieva | It snows in the Pyrenees in winter.
En Galicia ___ (llover) mucho. | llueve | It rains a lot in Galicia.
¿Te ___ ir al cine? | apetece | Do you fancy going to the cinema?
¿A qué hora ___ (quedar, nosotros)? | quedamos | What time shall we meet?
¿Una excursión? ¡Me ___! | apunto | A trip? Count me in!
Lo siento, no puedo. Es ___ tengo que trabajar. | que | Sorry, I can't. The thing is I have to work.
___ (pensar, yo) viajar a México en verano. | pienso | I'm planning to travel to Mexico in summer.
Llego ___ diez minutos. (in) | dentro de | I'll arrive in ten minutes.
Estamos a treinta ___. | grados | It's thirty degrees.
Coge el ___; va a llover. | paraguas | Take your umbrella; it's going to rain.
Nos vemos ___ mañana. (the day after) | pasado | See you the day after tomorrow.
La semana que ___ empiezo un curso. | viene | Next week I'm starting a course.
`,
    S: `
¿Qué vas a hacer este fin de semana? | What are you going to do this weekend?
Voy a ir a la sierra con unos amigos. | I'm going to go to the mountains with some friends.
¿Te apetece tomar algo esta tarde? | Do you fancy a drink this afternoon?
Lo siento, no puedo. Es que tengo que trabajar. | Sorry, I can't. The thing is I have to work.
¿Quedamos a las ocho en la puerta del cine? | Shall we meet at eight at the cinema entrance?
Hace un tiempo estupendo para pasear. | It's great weather for a walk.
Según el pronóstico, el domingo va a nevar en la sierra. | According to the forecast, it's going to snow in the mountains on Sunday.
Me encantaría, pero ya tengo planes. | I'd love to, but I already have plans.
`,
    R: [
      { t: 'El pronóstico del fin de semana', x: `El sábado va a hacer sol en casi toda España, con temperaturas de hasta 28 grados en Andalucía. En el norte, en Galicia y Asturias, va a estar nublado y por la tarde va a llover. El domingo llega una tormenta desde el Atlántico: va a hacer mucho viento en la costa y va a nevar en las montañas por encima de 1.500 metros.`, q: `¿Qué tiempo va a hacer el sábado en Andalucía? | Va a llover ; *Va a hacer sol ; Va a nevar
¿Dónde va a llover el sábado? | *En el norte ; En Andalucía ; En Madrid
¿Qué pasa el domingo en las montañas? | Hace calor ; *Va a nevar ; Está despejado` },
      { t: 'Planes para el puente', x: `Marta: ¡Hola, chicos! El lunes es fiesta. ¿Hacemos algo?
Javi: Yo pienso ir a la sierra el sábado. ¿Os venís?
Laura: ¡Me apunto! Pero el pronóstico dice que va a hacer frío.
Marta: Yo no puedo el sábado, es que tengo una boda. ¿Y el domingo?
Javi: El domingo va a llover. ¿Qué tal un museo y luego comer en La Latina?
Marta: ¡Genial! Quedamos el domingo a las doce en la puerta del Prado.`, q: `¿Por qué hay puente? | Porque es sábado ; *Porque el lunes es fiesta ; Porque es verano
¿Por qué no puede ir Marta el sábado? | Trabaja ; *Tiene una boda ; Está enferma
¿Dónde quedan el domingo? | En la sierra ; *En la puerta del Prado ; En La Latina` },
      { t: 'El clima de España', x: `España tiene climas muy diferentes. En el norte, el clima es atlántico: llueve mucho, los veranos son suaves y los inviernos no son muy fríos. En el centro, el clima es continental: los veranos son muy calurosos y los inviernos fríos y secos. En la costa mediterránea, el clima es suave todo el año. Y en las islas Canarias, la temperatura es agradable incluso en enero.`, q: `¿Cómo es el clima del norte? | Seco y caluroso ; *Lluvioso, con veranos suaves ; Muy frío
¿Dónde son muy calurosos los veranos? | *En el centro ; En el norte ; En Canarias
¿Dónde hace buena temperatura en enero? | En Madrid ; En el norte ; *En Canarias` }
    ],
    write: 'Write a WhatsApp message inviting two friends to do something this weekend, mentioning the weather forecast. Then write their replies: one accepts, one declines politely and suggests another plan.',
    talk: 'You are a Spanish friend in Madrid trying to make plans with the learner for a long weekend. Propose activities, discuss the weather forecast and agree a time and place to meet.',
    res: [R.cb1(21), R.cb2(4), R.cb2(5), R.cb2(11), R.hhb('el tiempo')]
  });

  U({
    id: 'a2-viajar', title: 'De viaje: transport and travel', goal: ['Buy tickets and use public transport', 'Book and check in to accommodation', 'Ask about timetables, platforms and delays'],
    grammar: {
      t: 'Prepositions of movement; para + infinitive; tardar',
      h: `<p>Means of transport: <b>en</b> tren, en autobús, en metro, en coche, en bici, en avión — but <b>a pie</b> / <b>andando</b>.</p>
<p>Destination with <b>a</b> (movement): <i>Voy <b>a</b> Toledo. Llego <b>a</b> la estación.</i> Location with <b>en</b>: <i>Estoy <b>en</b> Toledo.</i> Origin with <b>de / desde</b>: <i>El tren sale <b>de</b> Atocha.</i></p>
<p><b>de… a…</b> / <b>desde… hasta…</b> for routes. <b>tardar</b> = to take (time): <i>Tarda dos horas y media. ¿Cuánto se tarda?</i></p>
<p>Purpose: <b>para + infinitive</b>: <i>Cojo el metro para ir al trabajo.</i></p>
<p>In Spain <b>coger</b> = to take (a bus, a train). Tickets: <b>un billete de ida</b> (single), <b>de ida y vuelta</b> (return). Polite request with the imperfect: <b>Quería un billete para…</b> (I'd like…).</p>`
    },
    V: `
el billete | ticket (transport) | Un {billete} para Sevilla, por favor. | A ticket to Seville, please.
de ida | single (ticket) | Un billete {de ida}. | A single ticket.
de ida y vuelta | return (ticket) | ¿Es {de ida y vuelta}? | Is it a return?
el andén | platform | Espere en el {andén} tres. | Wait on platform three.
la vía | track, platform number | El tren sale de la {vía} doce. | The train leaves from platform twelve.
el horario | timetable | Mira el {horario} en la web. | Check the timetable online.
salir | to leave, depart | El tren {sale} a las ocho. | The train leaves at eight.
llegar | to arrive | El avión {llega} a las diez. | The plane arrives at ten.
tardar | to take (time) | El viaje {tarda} tres horas. | The journey takes three hours.
coger | to take (transport) | {Cojo} el autobús cada día. | I take the bus every day.
subir (a) | to get on | {Sube} al autobús por delante. | Get on the bus at the front.
bajarse (de) | to get off | Me {bajo} en la próxima parada. | I'm getting off at the next stop.
hacer transbordo | to change (lines/trains) | Hay que {hacer transbordo} en Sol. | You have to change at Sol.
el retraso | delay | El tren lleva una hora de {retraso}. | The train is an hour late.
cancelar | to cancel | Han {cancelado} el vuelo. | They've cancelled the flight.
la taquilla | ticket office | Compro el billete en la {taquilla}. | I buy the ticket at the ticket office.
la máquina | (ticket) machine | Puedes comprarlo en la {máquina}. | You can buy it from the machine.
el asiento | seat | ¿Está libre este {asiento}? | Is this seat free?
la ventanilla | window (vehicle); counter | Prefiero un asiento de {ventanilla}. | I prefer a window seat.
el pasillo | aisle; corridor | Un asiento de {pasillo}, por favor. | An aisle seat, please.
el aeropuerto | airport | Voy al {aeropuerto} en metro. | I go to the airport by metro.
el vuelo | flight | El {vuelo} sale de la terminal cuatro. | The flight leaves from terminal four.
la tarjeta de embarque | boarding pass | Su {tarjeta de embarque}, por favor. | Your boarding pass, please.
la puerta de embarque | boarding gate | La {puerta de embarque} es la B23. | The boarding gate is B23.
la maleta | suitcase | Mi {maleta} no ha llegado. | My suitcase hasn't arrived.
el equipaje de mano | hand luggage | Solo llevo {equipaje de mano}. | I only have hand luggage.
facturar | to check in (luggage) | Tengo que {facturar} la maleta. | I have to check in my suitcase.
el pasaporte | passport | No olvides el {pasaporte}. | Don't forget your passport.
el DNI | national ID card | Enseñe su {DNI}, por favor. | Show your ID, please.
el AVE | Spanish high-speed train | El {AVE} es rápido pero caro. | The AVE is fast but expensive.
el cercanías | commuter train | Cojo el {cercanías} para ir a Alcalá. | I take the commuter train to Alcalá.
la estación de autobuses | bus station | La {estación de autobuses} está en Méndez Álvaro. | The bus station is at Méndez Álvaro.
el taxi | taxi | Cogemos un {taxi} al hotel. | We'll take a taxi to the hotel.
alquilar un coche | to hire a car | Vamos a {alquilar un coche}. | We're going to hire a car.
el carné de conducir | driving licence | ¿Tienes {carné de conducir}? | Do you have a driving licence?
la gasolinera | petrol station | Paramos en una {gasolinera}. | We stop at a petrol station.
la autopista | motorway | Vamos por la {autopista}. | We go on the motorway.
el hotel | hotel | El {hotel} está cerca de la playa. | The hotel is near the beach.
el albergue | hostel | Dormimos en un {albergue} del Camino. | We sleep in a Camino hostel.
la habitación doble | double room | Una {habitación doble} para tres noches. | A double room for three nights.
la recepción | reception | Las llaves están en {recepción}. | The keys are at reception.
el viaje | trip, journey | ¡Buen {viaje}! | Have a good trip!
`,
    D: `
Voy al trabajo ___ bici. | en | I go to work by bike.
Vamos ___ pie. | a | We're going on foot.
¿Cuánto ___ el tren a Sevilla? (tardar) | tarda | How long does the train to Seville take?
Un billete de ida y ___, por favor. | vuelta | A return ticket, please.
¿De qué ___ sale el tren? | andén|vía | Which platform does the train leave from?
Tienes que hacer ___ en Sol. | transbordo | You have to change at Sol.
¿Dónde me ___ (bajarse) para el museo? | bajo | Where do I get off for the museum?
Cojo el autobús ___ ir a la universidad. | para | I take the bus to go to university.
El tren sale ___ Atocha. (from) | de | The train leaves from Atocha.
Llego ___ Madrid a las diez. (to) | a | I arrive in Madrid at ten.
El vuelo lleva una hora de ___. | retraso | The flight is an hour late.
Tengo que ___ la maleta. (check in) | facturar | I have to check in my suitcase.
Solo llevo equipaje de ___. | mano | I only have hand luggage.
Prefiero un asiento de ___. (window) | ventanilla | I prefer a window seat.
___ un billete para Toledo. (I'd like, polite) | quería | I'd like a ticket to Toledo.
¿Cuánto se ___ en coche? | tarda | How long does it take by car?
Nosotros ___ (coger) un taxi. | cogemos | We'll take a taxi.
Yo ___ (coger) el metro cada día. | cojo | I take the metro every day.
Una habitación ___ para dos noches. (double) | doble | A double room for two nights.
Su tarjeta de ___, por favor. | embarque | Your boarding pass, please.
`,
    S: `
Quería un billete de ida y vuelta para Segovia. | I'd like a return ticket to Segovia.
¿A qué hora sale el próximo tren? | What time does the next train leave?
El AVE tarda dos horas y media de Madrid a Barcelona. | The AVE takes two and a half hours from Madrid to Barcelona.
El vuelo tiene una hora de retraso. | The flight is delayed by an hour.
Tienes que bajarte en la tercera parada. | You have to get off at the third stop.
¿Este autobús va al aeropuerto? | Does this bus go to the airport?
Tengo una reserva a nombre de De Vries. | I have a reservation under De Vries.
¿A qué hora hay que dejar la habitación? | What time do we have to check out?
`,
    R: [
      { t: 'Un viaje a Granada', x: `Para ir de Madrid a Granada, Lucas coge el tren en la estación de Atocha. El tren sale a las 8:05 de la vía 12 y llega a Granada a las 11:25, así que tarda unas tres horas y veinte minutos. Compra el billete de ida y vuelta por internet porque es más barato. En Granada no necesita coche: va andando a todas partes o coge el autobús para subir al Albaicín.`, q: `¿De qué estación sale Lucas? | Chamartín ; *Atocha ; Granada
¿Cuánto tarda el tren? | Unas dos horas ; *Unas tres horas y veinte ; Once horas
¿Por qué compra el billete por internet? | Es más rápido ; *Es más barato ; No hay taquilla` },
      { t: 'En la recepción del hotel', x: `—Buenas noches. Tengo una reserva a nombre de Anna Smit.
—Sí, aquí está: una habitación doble para tres noches, con desayuno. ¿Me deja su pasaporte?
—Aquí tiene. ¿A qué hora es el desayuno?
—De siete y media a diez y media, en la primera planta.
—¿Y a qué hora hay que dejar la habitación?
—A las doce. Su habitación es la 305. El ascensor está a la derecha. ¡Que disfrute de su estancia!`, q: `¿Para cuántas noches es la reserva? | Una ; Dos ; *Tres
¿Dónde es el desayuno? | En la habitación ; *En la primera planta ; En la terraza
¿A qué hora hay que dejar la habitación? | A las diez y media ; *A las doce ; A las siete y media` },
      { t: 'El Camino de Santiago', x: `Cada año, más de cuatrocientas mil personas hacen el Camino de Santiago. La ruta más famosa es el Camino Francés: empieza en los Pirineos y tiene casi ochocientos kilómetros. Los peregrinos caminan unos veinticinco kilómetros al día y duermen en albergues. Para recibir la "Compostela", el certificado oficial, hay que caminar por lo menos los últimos cien kilómetros. Las flechas amarillas indican el camino.`, q: `¿Cuántos kilómetros tiene el Camino Francés? | Unos cien ; Unos cuatrocientos ; *Casi ochocientos
¿Dónde duermen los peregrinos? | En hoteles ; *En albergues ; En tiendas de campaña
¿Qué hay que hacer para recibir la Compostela? | Caminar todo el Camino ; *Caminar al menos los últimos cien kilómetros ; Pagar` }
    ],
    write: 'Describe how you would travel from your home to a city in Spain: transport, times, changes, luggage and where you\'d stay. Then write the dialogue for checking in.',
    talk: 'You are a ticket clerk at a Renfe station in Madrid. Sell the learner a train ticket: destination, single or return, time, seat, platform, price; then announce a delay.',
    res: [R.cb1(31), R.cb1(32), R.cb1(37), R.cb2(27), R.cb2(28), R.cb2(29)]
  });

  U({
    id: 'a2-intereses', title: 'Me interesa: indirect objects and verbs like gustar', goal: ['Use indirect object pronouns (me, te, le, nos, os, les)', 'Express opinions and feelings with interesar, parecer, molestar, importar, doler', 'Give and ask for things: dar, regalar, prestar'],
    grammar: {
      t: 'Indirect object pronouns and verbs like gustar',
      h: `<p>Indirect object pronouns say <b>to / for whom</b>: <b>me, te, le, nos, os, les</b>. <i>Le doy el libro a Ana. Te escribo mañana. Les regalo flores a mis padres.</i></p>
<p>Spanish usually repeats the pronoun even when the person is named: <i><b>Le</b> digo la verdad <b>a mi madre</b>.</i></p>
<p>Many verbs work like <b>gustar</b> (the thing is the subject, the person is the indirect object):</p>
<table><tr><td><b>interesar</b></td><td>Me interesa la política.</td></tr><tr><td><b>parecer</b></td><td>¿Qué te parece el plan? — Me parece genial.</td></tr>
<tr><td><b>molestar</b></td><td>Me molesta el ruido.</td></tr><tr><td><b>importar</b></td><td>¿Te importa si abro la ventana? — No me importa.</td></tr>
<tr><td><b>doler</b></td><td>Me duelen los pies.</td></tr><tr><td><b>quedar</b> (have left)</td><td>Nos quedan dos días.</td></tr><tr><td><b>faltar</b> (be missing)</td><td>Me falta un euro.</td></tr>
<tr><td><b>apetecer</b></td><td>¿Te apetece un café?</td></tr><tr><td><b>caer bien/mal</b></td><td>Tu hermano me cae muy bien.</td></tr></table>
<p>Emphasis or clarity with <b>a + person</b>: <i>A mí me interesa, pero a él no.</i></p>`
    },
    V: `
interesar | to interest | Me {interesa} mucho la historia. | History interests me a lot.
parecer | to seem; to think of | ¿Qué te {parece} el piso? | What do you think of the flat?
molestar | to bother | Me {molesta} el humo. | Smoke bothers me.
importar | to matter, mind | ¿Te {importa} esperar? | Do you mind waiting?
apetecer | to fancy | No me {apetece} salir. | I don't feel like going out.
caer bien | to like (a person) | Tu novio me {cae bien}. | I like your boyfriend.
caer mal | to dislike (a person) | Me {cae mal} el nuevo jefe. | I don't like the new boss.
quedar | to have left | Nos {quedan} diez euros. | We have ten euros left.
faltar | to be missing, lack | Me {falta} tiempo. | I'm short of time.
encantar | to love | Nos {encanta} esta ciudad. | We love this city.
dar | to give | Te {doy} mi número. | I'll give you my number.
regalar | to give (as a present) | Le {regalo} un libro a mi padre. | I'm giving my father a book.
prestar | to lend | ¿Me {prestas} tu bici? | Will you lend me your bike?
dejar | to lend; to leave; to let | ¿Me {dejas} un boli? | Can I borrow a pen?
enviar / mandar | to send | Te {mando} las fotos por WhatsApp. | I'll send you the photos on WhatsApp.
escribir | to write | Le {escribo} un correo a mi jefa. | I'm writing an email to my boss.
contar | to tell (a story) | Te {cuento} un secreto. | I'll tell you a secret.
explicar | to explain | ¿Me lo puedes {explicar}? | Can you explain it to me?
preguntar | to ask (a question) | Le {pregunto} la hora. | I ask him the time.
pedir | to ask for | Le {pido} ayuda a mi vecino. | I ask my neighbour for help.
contestar | to answer | No me {contesta} los mensajes. | She doesn't answer my messages.
enseñar | to show; to teach | Te {enseño} mi barrio. | I'll show you my neighbourhood.
recomendar | to recommend | Te {recomiendo} esta serie. | I recommend this series to you.
la política | politics | No me interesa la {política}. | Politics doesn't interest me.
la historia | history; story | Me encanta la {historia} de España. | I love the history of Spain.
la ciencia | science | Le interesa la {ciencia}. | She's interested in science.
la tecnología | technology | Trabajo en {tecnología}. | I work in technology.
la economía | economy | La {economía} española crece. | The Spanish economy is growing.
el medio ambiente | environment | Me preocupa el {medio ambiente}. | I'm worried about the environment.
el ruido | noise | Me molesta el {ruido} de la calle. | The street noise bothers me.
el humo | smoke | No soporto el {humo}. | I can't stand smoke.
la gente | people | Me cae bien la {gente} de aquí. | I like the people here.
interesante | interesting | El libro me parece muy {interesante}. | I find the book very interesting.
genial | great | Me parece {genial}. | I think it's great.
fatal | terrible | El servicio me parece {fatal}. | I think the service is terrible.
raro / rara | strange | Me parece {raro}. | It seems strange to me.
injusto / injusta | unfair | Me parece {injusto}. | I think it's unfair.
estupendo / estupenda | wonderful | ¡Me parece {estupendo}! | Sounds wonderful!
a mí | to me (emphasis) | {A mí} me encanta, pero a ella no. | I love it, but she doesn't.
a ti | to you (emphasis) | ¿Y {a ti}? | And you?
por cierto | by the way | {Por cierto}, te mando las fotos. | By the way, I'll send you the photos.
`,
    D: `
___ doy el libro a Ana. | le | I give the book to Ana.
¿___ escribes un mensaje? (to me) | me | Will you write me a message?
___ regalo flores a mis padres. | les | I give my parents flowers.
¿Qué ___ parece el plan? (to you, tú) | te | What do you think of the plan?
Me ___ (molestar) el ruido. | molesta | The noise bothers me.
Me ___ (molestar) los mosquitos. | molestan | Mosquitoes bother me.
Nos ___ (interesar) mucho la historia. | interesa | History interests us a lot.
¿Os ___ (importar) esperar cinco minutos? | importa | Do you (all) mind waiting five minutes?
A mi madre le ___ (doler) la espalda. | duele | My mother's back hurts.
Tu hermano me ___ muy bien. (caer) | cae | I really like your brother.
Nos ___ (quedar) dos días de vacaciones. | quedan | We have two days of holiday left.
Me ___ (faltar) un euro. | falta | I'm one euro short.
¿Te ___ un café? (fancy) | apetece | Do you fancy a coffee?
Le ___ (preguntar, yo) la hora al señor. | pregunto | I ask the man the time.
¿Me ___ (prestar, tú) tu bici? | prestas | Will you lend me your bike?
___ mí me encanta, pero a él no. | a | I love it, but he doesn't.
Les ___ (contar, yo) un cuento a los niños. | cuento | I tell the children a story.
Me ___ genial la idea. (parecer) | parece | I think the idea is great.
Le ___ (pedir, yo) ayuda a mi vecino. | pido | I ask my neighbour for help.
¿Me ___ (dejar, tú) un boli? | dejas | Can I borrow a pen?
`,
    S: `
¿Qué te parece si vamos a la playa? | How about going to the beach?
Me interesa mucho la cultura española. | I'm very interested in Spanish culture.
¿Te importa si abro la ventana? | Do you mind if I open the window?
Me molesta mucho el ruido de las motos. | The noise of motorbikes really bothers me.
Tus amigos me caen genial. | I really like your friends.
Le he mandado un mensaje a Pedro, pero no me contesta. | I sent Pedro a message, but he isn't answering.
Nos quedan solo diez minutos. | We only have ten minutes left.
Te recomiendo esta serie; me parece buenísima. | I recommend this series; I think it's really good.
`,
    R: [
      { t: 'Nuevos vecinos', x: `Hace un mes que tenemos vecinos nuevos en el cuarto. Son una pareja joven con un bebé. Me caen muy bien: son simpáticos y siempre saludan. El problema es su perro: ladra mucho por la noche y me molesta muchísimo porque me levanto a las seis. Ayer les escribí una nota. Hoy me han contestado: "Lo sentimos mucho. Le vamos a comprar un collar especial". ¡Me parece una buena solución!`, q: `¿Qué le parecen los vecinos? | *Le caen bien ; Le caen mal ; No los conoce
¿Qué le molesta? | El bebé ; *El perro ; La música
¿Qué le parece la solución? | Mala ; *Buena ; Injusta` },
      { t: 'Encuesta: ¿qué te preocupa?', x: `Una encuesta preguntó a los jóvenes españoles qué les preocupa. A la mayoría le preocupa el precio de la vivienda: muchos no pueden independizarse antes de los treinta años. También les preocupa el trabajo y el medio ambiente. A muchos les interesa la política, pero no les gustan los políticos. Y les molesta que las personas mayores piensen que solo miran el móvil.`, q: `¿Qué preocupa a la mayoría? | La política ; *El precio de la vivienda ; El móvil
¿Qué les pasa a muchos jóvenes antes de los treinta? | Se casan ; *No pueden independizarse ; Viajan
¿Qué les molesta? | La música ; *Que piensen que solo miran el móvil ; El trabajo` },
      { t: 'Un regalo difícil', x: `—¿Qué le regalamos a papá por su cumpleaños?
—No sé. Siempre le regalamos libros…
—Pues a él le encantan los libros.
—Sí, pero ya tiene muchísimos. ¿Qué te parece una experiencia? Por ejemplo, una cena en un restaurante bueno.
—¡Me parece estupendo! Y a mamá también le apetece salir.
—Perfecto. Les reservamos una mesa para dos.`, q: `¿Qué le regalan normalmente a su padre? | Ropa ; *Libros ; Comida
¿Qué le van a regalar esta vez? | Un libro ; *Una cena en un restaurante ; Un viaje
¿Para cuántas personas reservan? | Una ; *Dos ; Cuatro` }
    ],
    write: 'Write about what interests you, what bothers you about city life, and what you think of three things (me parece…). Then describe a present you gave to someone and why.',
    talk: 'You are a Spanish flatmate. Ask the learner what they think of different things (the flat, the city, a plan), what bothers them and what they fancy doing; use indirect objects naturally.',
    res: [R.lt(39, 40), R.slcFalse(), R.hhb()]
  });

  U({
    id: 'a2-perfecto', title: '¿Qué has hecho hoy? Pretérito perfecto', goal: ['Talk about what you have done today or this week', 'Talk about life experiences', 'Use irregular participles and ya / todavía no'],
    grammar: {
      t: 'The pretérito perfecto (he hablado)',
      h: `<p>Form: <b>haber</b> (he, has, ha, hemos, habéis, han) + participle (<b>-ar → -ado</b>, <b>-er/-ir → -ido</b>): <i>he hablado, has comido, ha vivido</i>.</p>
<p>In <b>Spain</b> it is used for actions in a time period that hasn't finished yet — <b>hoy, esta mañana, esta semana, este año</b> — and for very recent events: <i>Hoy <b>he desayunado</b> tarde. Esta semana <b>hemos trabajado</b> mucho.</i> (In most of Latin America people use the preterite here.)</p>
<p>Also for life experience: <b>¿Has estado alguna vez en Cuba?</b> — <b>Nunca he estado</b>. With <b>ya</b> (already) and <b>todavía no</b> (not yet): <i>¿Ya has comido? — Todavía no.</i></p>
<p>Irregular participles: hacer → <b>hecho</b>, decir → <b>dicho</b>, ver → <b>visto</b>, escribir → <b>escrito</b>, poner → <b>puesto</b>, volver → <b>vuelto</b>, abrir → <b>abierto</b>, romper → <b>roto</b>, morir → <b>muerto</b>, descubrir → <b>descubierto</b>, resolver → <b>resuelto</b>.</p>
<p>Pronouns go before haber, never between: <i>Me he levantado. Lo he visto.</i></p>`
    },
    conj: { t: 'pperf', v: ['hablar', 'comer', 'hacer', 'ver', 'volver', 'escribir', 'decir', 'poner'] },
    V: `
hoy | today | {Hoy} he trabajado mucho. | Today I've worked a lot.
esta mañana | this morning | {Esta mañana} he ido al médico. | This morning I went to the doctor.
esta semana | this week | {Esta semana} he dormido poco. | This week I've slept little.
este año | this year | {Este año} he viajado mucho. | This year I've travelled a lot.
alguna vez | ever | ¿Has estado {alguna vez} en Cuba? | Have you ever been to Cuba?
nunca | never | {Nunca} he visto la nieve. | I've never seen snow.
ya | already | {Ya} he terminado. | I've already finished.
todavía no | not yet | {Todavía no} he comido. | I haven't eaten yet.
últimamente | lately | {Últimamente} he leído mucho. | Lately I've read a lot.
varias veces | several times | He estado en Roma {varias veces}. | I've been to Rome several times.
hecho | done, made | ¿Qué has {hecho} hoy? | What have you done today?
dicho | said | ¿Qué te ha {dicho}? | What did he say to you?
visto | seen | No he {visto} esa película. | I haven't seen that film.
escrito | written | He {escrito} tres correos. | I've written three emails.
puesto | put | ¿Dónde has {puesto} las llaves? | Where have you put the keys?
vuelto | returned | Ha {vuelto} de vacaciones. | She's come back from holiday.
abierto | opened | Han {abierto} un bar nuevo. | They've opened a new bar.
roto | broken | Se me ha {roto} el móvil. | My phone has broken.
muerto | died, dead | Ha {muerto} un actor famoso. | A famous actor has died.
descubierto | discovered | He {descubierto} un restaurante genial. | I've discovered a great restaurant.
olvidar | to forget | He {olvidado} las llaves. | I've forgotten my keys.
perder | to lose; to miss | He {perdido} el autobús. | I've missed the bus.
encontrar | to find | Por fin he {encontrado} piso. | I've finally found a flat.
probar | to try (taste) | ¿Has {probado} el pulpo? | Have you tried octopus?
conocer a alguien | to meet someone (first time) | He {conocido} a tu hermana. | I've met your sister.
acabar de + inf. | to have just done | {Acabo de} llegar. | I've just arrived.
terminar | to finish | ¿Has {terminado} el informe? | Have you finished the report?
empezar | to start | He {empezado} un curso de cocina. | I've started a cooking course.
cambiar | to change | La ciudad ha {cambiado} mucho. | The city has changed a lot.
aprender | to learn | He {aprendido} mucho este año. | I've learned a lot this year.
ganar | to win | ¡Ha {ganado} el Real Madrid! | Real Madrid has won!
suspender | to fail (exam) | He {suspendido} el examen. | I've failed the exam.
aprobar | to pass (exam) | ¡He {aprobado}! | I've passed!
el examen | exam | Hoy he tenido un {examen}. | Today I had an exam.
la noticia | news item | ¿Has oído la {noticia}? | Have you heard the news?
la experiencia | experience | Ha sido una {experiencia} increíble. | It's been an incredible experience.
increíble | incredible | ¡Ha sido {increíble}! | It's been incredible!
el paracaidismo | skydiving | Nunca he hecho {paracaidismo}. | I've never done skydiving.
montar a caballo | to ride a horse | ¿Has {montado a caballo} alguna vez? | Have you ever ridden a horse?
`,
    D: `
Hoy ___ trabajado mucho. (yo) | he | Today I've worked a lot.
¿___ estado alguna vez en Galicia? (tú) | has | Have you ever been to Galicia?
Esta mañana hemos ___ (ver) a Carlos. | visto | This morning we saw Carlos.
¿Qué has ___ (hacer) este fin de semana? | hecho | What have you done this weekend?
Mis padres han ___ (volver) de vacaciones. | vuelto | My parents have come back from holiday.
Todavía no he ___ (escribir) el correo. | escrito | I haven't written the email yet.
Se me ha ___ (romper) el móvil. | roto | My phone has broken.
¿Vosotros ___ probado el pulpo? | habéis | Have you (all) tried octopus?
¿Dónde has ___ (poner) mis gafas? | puesto | Where have you put my glasses?
¿Qué te ha ___ (decir) el médico? | dicho | What did the doctor tell you?
Han ___ (abrir) una tienda nueva. | abierto | They've opened a new shop.
Ellos ___ llegado tarde. | han | They've arrived late.
Mi hermana ___ aprobado el examen. | ha | My sister has passed the exam.
Me ___ levantado a las seis. | he | I got up at six.
¿___ has comido? —Todavía no. | ya | Have you eaten yet? —Not yet.
Nunca ___ estado en América. (yo) | he | I've never been to America.
Acabo ___ hablar con tu madre. | de | I've just spoken to your mother.
Hemos ___ (descubrir) un bar genial. | descubierto | We've discovered a great bar.
Esta semana he ___ (leer) dos libros. | leído | This week I've read two books.
¿Has ___ (oír) la noticia? | oído | Have you heard the news?
`,
    S: `
Hoy me he levantado muy temprano. | Today I got up very early.
¿Has estado alguna vez en Santiago de Compostela? | Have you ever been to Santiago de Compostela?
Nunca he probado los percebes. | I've never tried goose barnacles.
Esta semana hemos visto tres películas. | This week we've seen three films.
¿Ya has hecho los deberes? —Todavía no. | Have you done your homework yet? —Not yet.
Acabo de llegar a casa. | I've just got home.
Este año he aprendido muchísimo español. | This year I've learned loads of Spanish.
¿Qué te ha pasado? —Se me ha roto el móvil. | What happened to you? —My phone broke.
`,
    R: [
      { t: 'Un día de locos', x: `¡Qué día! Esta mañana no ha sonado el despertador y me he levantado tarde. He perdido el autobús y he llegado al trabajo a las diez. Mi jefa no ha dicho nada, pero no está contenta. A mediodía he comido un bocadillo delante del ordenador. Por la tarde he tenido tres reuniones. Ahora acabo de llegar a casa y he visto que mi compañero de piso ha hecho la cena. ¡Por fin una buena noticia!`, q: `¿Por qué se ha levantado tarde? | *Porque no ha sonado el despertador ; Porque está enfermo ; Porque es domingo
¿Qué ha comido? | Paella ; *Un bocadillo ; Nada
¿Cuál es la buena noticia? | El jefe está contento ; *Su compañero ha hecho la cena ; Ha llegado a las diez` },
      { t: 'Experiencias', x: `—Oye, ¿tú has hecho alguna vez algo peligroso?
—Pues sí. He hecho paracaidismo dos veces y una vez he nadado con tiburones en México.
—¡Qué valiente! Yo nunca he hecho nada así. Bueno, he montado en globo en Segovia.
—¿Y te ha gustado?
—Me ha encantado. Pero nunca he probado el paracaidismo… ¡me da mucho miedo!`, q: `¿Cuántas veces ha hecho paracaidismo? | Una ; *Dos ; Nunca
¿Dónde ha montado en globo la otra persona? | En México ; *En Segovia ; En Madrid
¿Qué le da miedo? | Los tiburones ; *El paracaidismo ; El globo` },
      { t: 'Balance del año', x: `Este año ha sido muy importante para mí. Me he mudado a Valencia, he empezado un trabajo nuevo y he conocido a mucha gente. También he aprendido mucho español: ya entiendo casi todo en las reuniones. Todavía no he hecho el Camino de Santiago, pero lo voy a hacer el año que viene. Lo peor: he echado de menos a mi familia y mis amigos de Holanda.`, q: `¿Adónde se ha mudado? | A Madrid ; *A Valencia ; A Holanda
¿Qué todavía no ha hecho? | Aprender español ; *El Camino de Santiago ; Conocer gente
¿Qué ha sido lo peor? | El trabajo ; *Echar de menos a su familia y amigos ; El idioma` }
    ],
    write: 'Write about everything you have done today and this week. Then list five things you have never done (nunca he…), three you have already done (ya he…) and two you haven\'t done yet.',
    talk: 'You are a Spanish friend calling the learner in the evening. Ask what they have done today and this week, and about life experiences (¿has estado alguna vez…?). Use the pretérito perfecto as people in Spain do.',
    res: [R.cb2(24), R.cb2(25), R.cb2(26), R.lt(41, 44), R.hhb()]
  });
})();
