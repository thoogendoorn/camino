/* C1 · Dominio (part 3): new stages */
(function () {
  const R = RES, U = CAMINO.unit('C1');

  U({
    id: 'c1-condicional', title: 'Condiciones avanzadas e hipótesis', goal: ['Use mixed conditionals (past condition, present result and vice versa)', 'Replace si with de + infinitive, gerund, como, a poco que, con que…', 'Talk about decisions, risks and alternative pasts'],
    grammar: {
      t: 'Advanced conditional structures',
      h: `<p><b>Mixed conditionals</b>: past condition → present result: <i>Si <b>hubiera estudiado</b> Medicina, ahora <b>sería</b> médica.</i> Present condition → past result: <i>Si no <b>fuera</b> tan tímido, se lo <b>habría dicho</b>.</i></p>
<p><b>De + infinitive</b> replaces <i>si</i> in written and careful speech: <i><b>De seguir</b> así, cerraremos</i> (= si seguimos). <i><b>De haberlo sabido</b>, no habría venido</i> (= si lo hubiera sabido).</p>
<p><b>Gerund</b>: <i><b>Siendo</b> así, no hay nada que hacer. <b>Saliendo</b> ahora, llegarás a tiempo.</i></p>
<p><b>Other conditional links + subjunctive</b>: <i>como</i> (threat/warning: <i>Como no vengas, me enfado</i>), <i>a poco que</i> (if only a little), <i>con que</i> (as long as), <i>en el supuesto de que, en caso de que, caso de que, excepto/salvo que</i>.</p>
<p><b>Pluperfect subjunctive in both halves</b> is common in Spain: <i>Si me lo <b>hubieras</b> dicho, te <b>hubiera</b> ayudado</i> (= habría ayudado).</p>
<p><b>Short answers</b>: <i>De ser así…, En tal caso…, En caso contrario…, Si acaso…</i></p>`
    },
    V: `
en el supuesto de que | in the event that | {En el supuesto de que} no llegue, empezaremos sin él. | In the event that he doesn't arrive, we'll start without him.
a poco que | if only a little | {A poco que} te esfuerces, aprobarás. | If you make even a little effort, you'll pass.
con que | as long as, if only | {Con que} me llames, me basta. | As long as you call me, that's enough.
de seguir así | if things go on like this | {De seguir así}, cerraremos en un año. | If things go on like this, we'll close within a year.
de no haber sido por | had it not been for | {De no haber sido por} ella, no estaría aquí. | Had it not been for her, I wouldn't be here.
excepto que | except that, unless | Iré, {excepto que} me necesites aquí. | I'll go, unless you need me here.
caso de que | in case (formal) | {Caso de que} surja algún problema, avíseme. | Should any problem arise, let me know.
en tal caso | in that case | {En tal caso}, cancelaremos el viaje. | In that case, we'll cancel the trip.
si acaso | if anything; if need be | {Si acaso}, te llamo luego. | If need be, I'll call you later.
por si las moscas | just in case | Llévate el paraguas, {por si las moscas}. | Take the umbrella, just in case.
de ser así | if so | {De ser así}, habría que repetir la prueba. | If so, the test would have to be repeated.
en caso contrario | otherwise | Firme aquí; {en caso contrario}, no podremos tramitarlo. | Sign here; otherwise, we won't be able to process it.
siendo así | that being so | {Siendo así}, no tengo nada que objetar. | That being so, I have no objection.
la salvedad | proviso, exception | Acepto, con una {salvedad}. | I accept, with one proviso.
la encrucijada | crossroads | Estoy en una {encrucijada}. | I'm at a crossroads.
el dilema | dilemma | Me planteó un {dilema}. | It posed a dilemma for me.
la disyuntiva | choice between two options | Nos encontramos ante una {disyuntiva}. | We're faced with a choice.
sopesar | to weigh up | Hay que {sopesar} las opciones. | We have to weigh up the options.
los pros y los contras | pros and cons | Analicemos {los pros y los contras}. | Let's look at the pros and cons.
arriesgarse | to take the risk | Si no {te arriesgas}, no ganas. | If you don't take risks, you don't win.
jugársela | to risk it | No quiero {jugármela}. | I don't want to risk it.
la apuesta | bet | Fue una {apuesta} arriesgada. | It was a risky bet.
salir rana | to turn out a flop | El negocio {salió rana}. | The business turned out to be a flop.
el azar | chance | Todo fue fruto del {azar}. | It was all down to chance.
el porvenir | the future (formal) | Nadie conoce el {porvenir}. | Nobody knows the future.
la trayectoria | career, track record | Tiene una larga {trayectoria} profesional. | She has a long professional track record.
replantearse | to reconsider | Me estoy {replanteando} mi carrera. | I'm reconsidering my career.
dar marcha atrás | to backtrack | El gobierno {dio marcha atrás}. | The government backtracked.
a toro pasado | with hindsight | {A toro pasado}, es fácil opinar. | With hindsight, it's easy to judge.
a posteriori | in retrospect | {A posteriori}, entendí sus motivos. | In retrospect, I understood his reasons.
vaticinar | to predict | Nadie {vaticinó} la crisis. | Nobody predicted the crisis.
imprevisible | unpredictable | El tiempo es {imprevisible}. | The weather is unpredictable.
el imprevisto | unforeseen event | Surgió un {imprevisto}. | Something unexpected came up.
el desenlace | outcome | Nadie sabe cuál será el {desenlace}. | Nobody knows what the outcome will be.
el supuesto | assumption, scenario | Partamos del {supuesto} de que acepta. | Let's assume she accepts.
hipotético / hipotética | hypothetical | Es un caso {hipotético}. | It's a hypothetical case.
determinante | decisive | Su apoyo fue {determinante}. | Her support was decisive.
el efecto mariposa | butterfly effect | Un pequeño cambio, un {efecto mariposa}. | A small change, a butterfly effect.
torcerse | to go wrong | Todo se {torció} en el último momento. | Everything went wrong at the last moment.
la historia contrafactual | counterfactual history | La {historia contrafactual} imagina otros pasados. | Counterfactual history imagines other pasts.
`,
    D: `
Si ___ (estudiar, yo) Medicina, ahora sería médica. | hubiera estudiado|hubiese estudiado | If I had studied medicine, I'd be a doctor now.
Si no ___ (ser) tan tímido, se lo habría dicho. | fuera|fuese | If he weren't so shy, he'd have told her.
De ___ (seguir) así, tendremos que cerrar. | seguir | If things go on like this, we'll have to close.
De ___ (saberlo) antes, no habría venido. | haberlo sabido | Had I known before, I wouldn't have come.
Como no ___ (llegar, tú) a tiempo, me voy sin ti. | llegues | If you don't arrive on time, I'm leaving without you.
A poco que ___ (estudiar, tú), aprobarás. | estudies | If you study even a little, you'll pass.
Con que me ___ (avisar, tú) un día antes, es suficiente. | avises | As long as you let me know a day before, that's enough.
En el supuesto de que no ___ (haber) acuerdo, iremos a juicio. | haya | In the event there's no agreement, we'll go to court.
Si me lo hubieras dicho, te ___ (ayudar, yo). | habría ayudado|hubiera ayudado|hubiese ayudado | If you'd told me, I'd have helped you.
___ (salir, gerundio) ahora, llegarás a tiempo. | Saliendo | If you leave now, you'll get there in time.
Si ___ (aceptar, yo) aquel trabajo, ahora viviría en Londres. | hubiera aceptado|hubiese aceptado | If I'd accepted that job, I'd be living in London now.
De no haber sido ___ ella, me habría perdido. | por | Had it not been for her, I'd have got lost.
Iré, excepto que ___ (llover). | llueva | I'll go, unless it rains.
Siendo ___, no tengo nada que objetar. | así | That being so, I have nothing to object to.
Llévate el paraguas, por si las ___. | moscas | Take the umbrella, just in case.
El negocio salió ___: perdimos todo. | rana | The business was a flop: we lost everything.
A toro ___, es fácil criticar. | pasado | With hindsight, it's easy to criticise.
Si ___ (tener, yo) más paciencia, no habría discutido con él. | tuviera|tuviese | If I were more patient, I wouldn't have argued with him.
Firme aquí; en caso ___, no podremos tramitarlo. | contrario | Sign here; otherwise, we can't process it.
Hay que ___ los pros y los contras antes de decidir. | sopesar | You have to weigh up the pros and cons before deciding.
`,
    S: `
Si hubiera estudiado Medicina, ahora sería médica. | If I'd studied medicine, I'd be a doctor now.
De haberlo sabido, no habría venido. | Had I known, I wouldn't have come.
De seguir así, tendremos que cerrar la tienda. | If things go on like this, we'll have to close the shop.
Como no me llames, me enfado. | If you don't call me, I'll be cross.
A poco que te esfuerces, lo conseguirás. | If you make even a little effort, you'll manage it.
Siendo así, no tengo nada que objetar. | That being so, I have nothing to object to.
A toro pasado, todo parece evidente. | With hindsight, everything looks obvious.
Estoy en una encrucijada y tengo que sopesar las opciones. | I'm at a crossroads and have to weigh up the options.
`,
    R: [
      { t: 'La carta que nunca envié', x: `Hace veinte años me ofrecieron una beca para estudiar música en Viena. Tenía veintidós años, una novia en Valladolid y un contrato de prácticas en un banco. Pasé dos semanas sopesando los pros y los contras. Al final escribí una carta aceptando la beca… y nunca la envié.

A toro pasado, es fácil inventar historias. Si hubiera ido a Viena, quizá ahora sería violinista en una orquesta; o, más probablemente, daría clases en una academia y viviría con la sensación de no haber llegado a nada. De no haber sido por aquella decisión, no habría conocido a mi mujer, que entró en el banco un año después. Y si no la hubiera conocido, mis dos hijos no existirían.

Durante mucho tiempo me torturé con la pregunta de qué habría pasado si. Hoy creo que esa pregunta es una trampa. Toda vida está hecha de encrucijadas, y cada camino que elegimos cierra otros cien. Siendo así, lo único razonable es dejar de compararse con un yo imaginario que, por definición, siempre gana.

Eso sí, no he dejado de tocar. A poco que tengo un rato libre, saco el violín. Mis hijos dicen que no lo hago mal.`, q: `¿Qué decidió el narrador hace veinte años? | Irse a Viena ; *No enviar la carta y quedarse ; Dejar el banco
¿Qué consecuencia positiva tuvo su decisión? | Ganó mucho dinero ; *Conoció a su mujer ; Se hizo violinista profesional
¿Qué opina hoy de la pregunta «qué habría pasado si»? | Que es muy útil ; *Que es una trampa ; Que hay que hacérsela a menudo` },
      { t: 'Historia contrafactual', x: `¿Qué habría ocurrido si la Armada Invencible hubiera triunfado en 1588? ¿Y si Colón no hubiera conseguido financiación para su viaje? Estas preguntas, que durante mucho tiempo se consideraron un simple juego de salón, han dado lugar a un género con cierto prestigio: la historia contrafactual.

Sus defensores sostienen que imaginar otros pasados posibles ayuda a comprender mejor el real. De no plantearnos qué factores fueron determinantes, tenderíamos a pensar que la historia era inevitable, que las cosas no podían haber sucedido de otro modo. La historia contrafactual nos recuerda el peso del azar y de las decisiones individuales: el efecto mariposa aplicado al pasado.

Sus críticos, en cambio, advierten de que es un terreno resbaladizo. A poco que se cambie una variable, las consecuencias se multiplican de forma imprevisible, y cualquier conclusión resulta imposible de comprobar. En el mejor de los casos, dicen, es literatura; en el peor, una forma de proyectar nuestros deseos sobre el pasado.

Quizá ambos tengan parte de razón. Como ejercicio intelectual, con una base documental sólida, puede ser muy fértil. Como sustituto de la investigación, en cambio, no sirve. En cualquier caso, pocas preguntas resultan tan irresistibles como ese pequeño «¿y si…?».`, q: `¿Qué es la historia contrafactual? | La historia oficial de un país ; *Imaginar cómo habría sido el pasado si algo hubiera cambiado ; Una novela histórica
¿Qué ventaja le atribuyen sus defensores? | Que es fácil de comprobar ; *Que muestra el peso del azar y de las decisiones ; Que sustituye a la investigación
¿Qué critican sus detractores? | Que es aburrida ; *Que sus conclusiones son imposibles de comprobar ; Que solo trata de España` },
      { t: 'Cláusulas de un seguro de viaje', x: `CONDICIONES GENERALES (extracto)

1. Cancelación. En el supuesto de que el asegurado tuviera que cancelar el viaje por enfermedad grave, accidente o fallecimiento de un familiar directo, la compañía reembolsará el importe pagado, siempre que la cancelación se comunique con al menos 48 horas de antelación. En caso contrario, solo se reembolsará el 50 %.

2. Equipaje. Caso de que el equipaje se perdiera o sufriera daños durante el transporte, el asegurado deberá presentar la reclamación correspondiente ante la compañía aérea antes de dirigirse a la aseguradora. De no presentarse dicha reclamación, la compañía quedará exenta de toda responsabilidad.

3. Asistencia médica. La póliza cubre los gastos médicos en el extranjero hasta un máximo de 30.000 euros, excepto que el asegurado viaje a una zona desaconsejada por el Ministerio de Asuntos Exteriores. En tal caso, la cobertura quedará anulada.

4. Exclusiones. No estarán cubiertos los daños producidos como consecuencia de la práctica de deportes de riesgo, salvo que se haya contratado la ampliación correspondiente.

Le recomendamos leer atentamente la letra pequeña antes de firmar.`, q: `¿Qué pasa si se cancela el viaje con menos de 48 horas de antelación? | Se reembolsa todo ; *Solo se reembolsa la mitad ; No se reembolsa nada
¿Qué debe hacer primero el asegurado si pierde el equipaje? | Llamar a la aseguradora ; *Reclamar a la compañía aérea ; Comprar ropa nueva
¿Cuándo se anula la cobertura médica? | Si el viaje dura más de un mes ; *Si se viaja a una zona desaconsejada por Exteriores ; Si se practica deporte` }
    ],
    write: 'Write about a decision that changed your life (180–220 words): what you chose, what would have happened otherwise and what you think now. Use at least two mixed conditionals, one de + infinitive and one a poco que / con que / como + subjunctive.',
    talk: 'Ask the learner about turning points in their life and «what if» scenarios (other studies, another country, another job). Push for mixed conditionals and de + infinitive, and challenge their hypotheses.',
    res: [R.slcAdv(), R.juan(), R.practica()]
  });

  U({
    id: 'c1-economia', title: 'Economía y finanzas', goal: ['Follow economic news: inflation, interest rates, employment, housing', 'Explain causes and consequences of economic trends', 'Discuss economic policy with appropriate hedging'],
    grammar: {
      t: 'Cause, consequence and comparison in economic texts',
      h: `<p><b>Cause</b>: <i>debido a, a causa de, como consecuencia de, a raíz de, dado que, puesto que, ya que</i> + indicative; <i>no porque</i> + subj. (<i>No subió porque <b>hubiera</b> más demanda, sino por…</i>).</p>
<p><b>Consequence</b>: <i>por lo que, de modo que, lo que se ha traducido en, lo cual ha provocado, de ahí que</i> + subj.</p>
<p><b>Change and degree</b>: <i>dispararse, desplomarse, estancarse, repuntar, moderarse, tocar techo/fondo; un X % más que, el doble de, cada vez más, tanto… como…</i></p>
<p><b>Comparative proportion</b>: <i>cuanto más… más / menos: <b>Cuanto más</b> suben los tipos, <b>menos</b> se invierte.</i></p>
<p><b>Numbers in speech</b>: <i>un 3,5 % (tres coma cinco por ciento), mil millones (= a billion), un billón (= a trillion!), la décima, el punto porcentual.</i></p>`
    },
    V: `
la desaceleración | slowdown | Se prevé una {desaceleración} económica. | An economic slowdown is expected.
la estanflación | stagflation | El riesgo de {estanflación} preocupa. | The risk of stagflation is worrying.
la prima de riesgo | risk premium | La {prima de riesgo} se disparó. | The risk premium soared.
el tipo de interés | interest rate | El BCE subió los {tipos de interés}. | The ECB raised interest rates.
la política monetaria | monetary policy | La {política monetaria} la decide el BCE. | Monetary policy is decided by the ECB.
la política fiscal | fiscal policy | Una {política fiscal} expansiva. | An expansionary fiscal policy.
la presión fiscal | tax burden | La {presión fiscal} ha aumentado. | The tax burden has increased.
el fraude fiscal | tax fraud | Persiguen el {fraude fiscal}. | They're cracking down on tax fraud.
el paraíso fiscal | tax haven | Tenía cuentas en un {paraíso fiscal}. | He had accounts in a tax haven.
la economía sumergida | black economy | La {economía sumergida} es difícil de medir. | The black economy is hard to measure.
cobrar en negro | to be paid cash in hand | Muchos trabajadores {cobran en negro}. | Many workers are paid cash in hand.
la temporalidad | job insecurity (temporary contracts) | La {temporalidad} afecta a los jóvenes. | Temporary employment affects young people.
la estabilidad laboral | job security | Busca {estabilidad laboral}. | She's looking for job security.
la prestación por desempleo | unemployment benefit | Cobra la {prestación por desempleo}. | He's on unemployment benefit.
el ingreso mínimo vital | minimum income scheme | Solicitó el {ingreso mínimo vital}. | She applied for the minimum income scheme.
el salario medio | average salary | El {salario medio} ha subido poco. | The average salary has risen little.
la cesta de la compra | shopping basket | La {cesta de la compra} se ha encarecido. | The shopping basket has become more expensive.
encarecerse | to become more expensive | La vivienda se ha {encarecido}. | Housing has become more expensive.
abaratar | to make cheaper | Quieren {abaratar} el transporte. | They want to make transport cheaper.
la burbuja inmobiliaria | housing bubble | La {burbuja inmobiliaria} estalló en 2008. | The housing bubble burst in 2008.
la especulación | speculation | La {especulación} disparó los precios. | Speculation sent prices soaring.
el impago | non-payment, default | Desahuciados por {impago}. | Evicted for non-payment.
la vivienda asequible | affordable housing | Falta {vivienda asequible}. | There's a lack of affordable housing.
la oferta y la demanda | supply and demand | Depende de {la oferta y la demanda}. | It depends on supply and demand.
el monopolio | monopoly | Es casi un {monopolio}. | It's almost a monopoly.
la subvención | subsidy | Recibieron una {subvención}. | They received a subsidy.
los fondos europeos | EU funds | Financiado con {fondos europeos}. | Funded with EU funds.
el rescate | bailout | El {rescate} de la banca. | The bank bailout.
la austeridad | austerity | Años de {austeridad}. | Years of austerity.
el recorte | cut | {Recortes} en sanidad. | Cuts in healthcare.
la deslocalización | offshoring | La {deslocalización} de fábricas. | The offshoring of factories.
el arancel | tariff | Subieron los {aranceles}. | They raised tariffs.
el inversor / la inversora | investor | Buscan un {inversor} extranjero. | They're looking for a foreign investor.
el capital riesgo | venture capital | Financiada con {capital riesgo}. | Funded with venture capital.
la financiación | funding | Buscan {financiación}. | They're looking for funding.
la liquidez | liquidity | La empresa tiene problemas de {liquidez}. | The company has liquidity problems.
la deuda pública | public debt | La {deuda pública} supera el PIB. | Public debt exceeds GDP.
la renta per cápita | per capita income | La {renta per cápita} ha crecido. | Per capita income has grown.
el tipo impositivo | tax rate | Bajaron el {tipo impositivo}. | They lowered the tax rate.
cotizar | to pay social security; to be listed | Lleva treinta años {cotizando}. | He's been paying in for thirty years.
`,
    D: `
El BCE subió los tipos de ___ para frenar la inflación. | interés | The ECB raised interest rates to curb inflation.
Cuanto más suben los tipos, ___ se invierte. | menos | The more rates rise, the less is invested.
Los precios se ___ (disparar) el año pasado. | dispararon | Prices soared last year.
La inflación ha subido, de ahí que el BCE ___ (subir) los tipos. | haya subido|suba | Inflation has risen, hence the ECB has raised rates.
No bajaron los precios porque ___ (haber) menos demanda, sino por la competencia. | hubiera|hubiese | Prices didn't fall because there was less demand, but because of competition.
La vivienda se ha ___ un 10 % en un año. | encarecido | Housing has become 10% more expensive in a year.
Mil ___ de euros equivalen a a billion euros. | millones | A thousand million euros is a billion euros.
El paro se ha reducido en dos ___ porcentuales. | puntos | Unemployment has fallen by two percentage points.
Muchos trabajadores cobran en ___ y no cotizan. | negro | Many workers are paid cash in hand and don't pay contributions.
Tenía el dinero escondido en un paraíso ___. | fiscal | He had the money hidden in a tax haven.
La burbuja ___ estalló en 2008. | inmobiliaria | The housing bubble burst in 2008.
El precio depende de la oferta y la ___. | demanda | The price depends on supply and demand.
Lleva treinta años ___ a la Seguridad Social. | cotizando | He's been paying into Social Security for thirty years.
El gobierno quiere ___ el transporte público. | abaratar | The government wants to make public transport cheaper.
Debido ___ la crisis, muchas empresas cerraron. | a | Due to the crisis, many companies closed.
El consumo se ha ___ (estancar) en los últimos meses. | estancado | Consumption has stagnated in recent months.
Hubo años de ___ y recortes en servicios públicos. | austeridad | There were years of austerity and cuts in public services.
La empresa tiene problemas de ___: no puede pagar a sus proveedores. | liquidez | The company has liquidity problems: it can't pay its suppliers.
La subida de precios se ha traducido ___ una pérdida de poder adquisitivo. | en | The price rise has translated into a loss of purchasing power.
Recibieron una ___ de los fondos europeos. | subvención | They received a subsidy from EU funds.
`,
    S: `
El Banco Central Europeo ha vuelto a subir los tipos de interés. | The European Central Bank has raised interest rates again.
La cesta de la compra se ha encarecido mucho este año. | The shopping basket has become much more expensive this year.
Cuanto más suben los alquileres, más difícil es independizarse. | The more rents rise, the harder it is to leave home.
La economía sumergida es muy difícil de medir. | The black economy is very hard to measure.
La subida de precios se ha traducido en una pérdida de poder adquisitivo. | The rise in prices has translated into a loss of purchasing power.
Muchos jóvenes encadenan años de temporalidad. | Many young people go through years of temporary jobs.
Falta vivienda asequible en las grandes ciudades. | There's a lack of affordable housing in the big cities.
La empresa busca financiación con capital riesgo. | The company is looking for venture-capital funding.
`,
    R: [
      { t: 'Por qué sube todo', x: `«Todo está más caro» es probablemente la frase que más se ha repetido en los últimos años en cualquier mercado español. Detrás de esa sensación hay un fenómeno con nombre propio: la inflación, es decir, el aumento generalizado y sostenido de los precios.

Sus causas pueden ser muy diversas. A veces sube la demanda más deprisa que la capacidad de producir; otras, se encarecen las materias primas o la energía, y ese aumento se traslada a toda la cadena. En los episodios recientes se combinaron varios factores: la recuperación tras la pandemia, los problemas en las cadenas de suministro y la subida del precio del gas y del petróleo.

Para frenar la inflación, los bancos centrales suelen subir los tipos de interés. Cuanto más caro es el dinero, menos se pide prestado y menos se consume, lo que en teoría reduce la presión sobre los precios. Ahora bien, la medida tiene efectos secundarios: las hipotecas variables se encarecen y la economía puede entrar en una fase de desaceleración.

El gran temor de los economistas es la estanflación: una situación en la que los precios siguen subiendo mientras la economía se estanca y crece el paro. De ahí que los bancos centrales caminen siempre sobre una cuerda floja.`, q: `¿Qué es la inflación según el texto? | Una bajada de salarios ; *El aumento generalizado y sostenido de los precios ; Una crisis bancaria
¿Por qué suben los tipos de interés los bancos centrales? | Para que la gente ahorre menos ; *Para reducir el consumo y frenar los precios ; Para abaratar las hipotecas
¿Qué es la estanflación? | Una fase de crecimiento rápido ; *Precios al alza con economía estancada y más paro ; La bajada del precio del petróleo` },
      { t: 'El problema de la vivienda', x: `Para muchos jóvenes españoles, independizarse se ha convertido en una carrera de obstáculos. Los salarios han crecido poco en la última década, mientras que el precio del alquiler en las grandes ciudades se ha disparado. El resultado es que destinar más de la mitad del sueldo al alquiler ha dejado de ser excepcional.

Las explicaciones varían según a quién se pregunte. Unos señalan la escasez de vivienda pública, que en España es muy inferior a la de otros países europeos. Otros apuntan al auge de los pisos turísticos, que retiran viviendas del mercado residencial en los barrios céntricos. También se menciona la entrada de grandes fondos de inversión que compran edificios enteros, así como la lentitud en la construcción de nueva vivienda.

Las soluciones propuestas son igualmente diversas y, a menudo, enfrentadas: limitar el precio de los alquileres en zonas tensionadas, construir más vivienda asequible, restringir los pisos turísticos o aplicar incentivos fiscales a los propietarios que alquilen por debajo del mercado. Los partidarios del control de precios destacan su efecto inmediato; sus detractores advierten de que puede reducir la oferta a medio plazo.

Lo que nadie discute es que se trata de uno de los grandes debates económicos y sociales del país.`, q: `¿Cuál es el problema principal de los jóvenes según el texto? | No encuentran trabajo ; *Los alquileres han subido mucho más que los salarios ; No quieren independizarse
¿Qué causa NO se menciona? | Los pisos turísticos ; Los fondos de inversión ; *La subida del IVA
¿Qué critican los detractores del control de precios? | Que es muy caro ; *Que puede reducir la oferta a medio plazo ; Que tarda mucho en aplicarse` },
      { t: 'Emprender en España', x: `Lucía Ferrer tenía treinta y un años y un contrato estable en una consultora cuando decidió dejarlo todo para montar una empresa emergente de software para pequeños comercios. «Mis padres pensaron que me había vuelto loca», recuerda.

Los primeros dos años fueron duros. Vivió de sus ahorros, trabajó desde la cocina de su piso y se presentó a todas las convocatorias de ayudas que encontró. Finalmente consiguió una pequeña subvención de un programa financiado con fondos europeos y, poco después, el apoyo de un inversor que había conocido en un evento del sector.

Según Lucía, el mayor obstáculo no fue la falta de ideas, sino la burocracia y la fiscalidad. «Durante el primer año pagas cuotas a la Seguridad Social aunque no factures nada. En otros países es más fácil empezar», afirma. También echa de menos una mayor cultura del riesgo: «Aquí, si fracasas, se te juzga más que si nunca lo intentas».

Hoy su empresa tiene doce empleados y clientes en tres países. Cuando le preguntan si volvería a hacerlo, no duda: «Sí, pero con más colchón económico y sabiendo que los plazos siempre son el doble de lo que calculas».`, q: `¿Qué hacía Lucía antes de emprender? | Era estudiante ; *Trabajaba en una consultora con contrato estable ; Tenía una tienda
¿Qué considera su mayor obstáculo? | La falta de ideas ; *La burocracia y la fiscalidad ; La competencia
¿Qué consejo da al final? | No emprender nunca ; *Tener más colchón económico y calcular plazos con margen ; Buscar siempre un socio` }
    ],
    write: 'Write an opinion article (200–240 words) on a current economic problem in your country (housing, prices, wages, pensions). Explain causes and consequences, mention two possible policies and give your view with appropriate hedging.',
    talk: 'You are a radio host on an economy programme. Ask the learner to explain a recent price rise they have noticed, its causes and what the government should do. Introduce counter-arguments.',
    res: [R.rtve('Informe Semanal economía'), R.ser('Hora 25 de los negocios'), R.elpais()]
  });

  U({
    id: 'c1-derecho', title: 'Derecho y administración', goal: ['Understand legal and administrative texts (contracts, by-laws, rulings)', 'Explain rights, obligations and procedures', 'Recognise typical formulas of legal Spanish'],
    grammar: {
      t: 'The language of law and administration',
      h: `<p><b>Future subjunctive</b> survives in legal texts: <i>El que <b>infringiere</b> esta norma será sancionado. Si no <b>hubiere</b> acuerdo, …</i> Recognise it; in your own writing use the present subjunctive (<i>quien infrinja, si no hay</i>).</p>
<p><b>Obligation and permission</b>: <i>deberá + inf., estará obligado a, queda prohibido, se permite, podrá + inf., tendrá derecho a, será requisito indispensable.</i></p>
<p><b>Impersonal and passive</b> style: <i>se entenderá por, se considerará, será sancionado, queda derogado.</i></p>
<p><b>Fixed connectors</b>: <i>a efectos de (for the purposes of), conforme a / de conformidad con (in accordance with), sin perjuicio de (without prejudice to), en su caso (where applicable), lo dispuesto en (the provisions of).</i></p>
<p><b>Relative clauses with el cual / quien</b> and long noun phrases are typical: <i>la persona física o jurídica a la cual se refiere el artículo anterior.</i></p>`
    },
    V: `
la demanda | lawsuit | Presentó una {demanda} contra la empresa. | She filed a lawsuit against the company.
demandar | to sue | Lo {demandaron} por difamación. | They sued him for defamation.
el demandante / la demandante | plaintiff | El {demandante} pide una indemnización. | The plaintiff is seeking compensation.
el pleito | lawsuit, dispute | Un {pleito} que duró diez años. | A lawsuit that lasted ten years.
el litigio | litigation | El {litigio} sigue abierto. | The litigation is still ongoing.
la querella | criminal complaint | Interpusieron una {querella}. | They filed a criminal complaint.
el recurso | appeal | Presentaremos {recurso}. | We will appeal.
la apelación | appeal | El tribunal de {apelación}. | The court of appeal.
el Tribunal Supremo | Supreme Court | Lo decidirá el {Tribunal Supremo}. | The Supreme Court will decide.
la jurisprudencia | case law | Según la {jurisprudencia}, … | According to case law, …
el código penal | criminal code | Lo prohíbe el {código penal}. | The criminal code prohibits it.
la normativa | regulations | La nueva {normativa} entra en vigor mañana. | The new regulations come into force tomorrow.
el reglamento | regulation, rules | El {reglamento} interno del edificio. | The building's internal rules.
el BOE | official state gazette | Se ha publicado en el {BOE}. | It has been published in the official gazette.
la ordenanza municipal | by-law | Una {ordenanza municipal} prohíbe el ruido. | A by-law prohibits noise.
vulnerar | to violate (a right) | Se {vulneró} su derecho a la intimidad. | His right to privacy was violated.
incumplir | to breach | La empresa {incumplió} el contrato. | The company breached the contract.
el incumplimiento | breach | {Incumplimiento} de contrato. | Breach of contract.
el resarcimiento | redress, compensation | Exigen el {resarcimiento} de los daños. | They demand compensation for the damage.
indemnizar | to compensate | Deberán {indemnizar} a los afectados. | They must compensate those affected.
la cláusula abusiva | unfair clause | Anularon la {cláusula abusiva}. | The unfair clause was struck down.
la letra pequeña | small print | Lee la {letra pequeña}. | Read the small print.
el notario / la notaria | notary | Firmaron ante {notario}. | They signed before a notary.
la escritura | deed | La {escritura} de la casa. | The deed to the house.
el registro de la propiedad | land registry | Consulta el {registro de la propiedad}. | Check the land registry.
el padrón | municipal register | Inscríbete en el {padrón}. | Sign up on the municipal register.
la compulsa | certified copy | Necesita una {compulsa} del título. | She needs a certified copy of the degree.
prescribir | to lapse (legal); to prescribe | El delito ya ha {prescrito}. | The offence has already lapsed.
la presunción de inocencia | presumption of innocence | Respetemos la {presunción de inocencia}. | Let's respect the presumption of innocence.
el abogado de oficio | legal aid lawyer | Le asignaron un {abogado de oficio}. | He was assigned a legal aid lawyer.
la asistencia jurídica gratuita | free legal aid | Tiene derecho a {asistencia jurídica gratuita}. | She's entitled to free legal aid.
el procedimiento | proceedings, procedure | El {procedimiento} judicial. | The court proceedings.
la vista oral | hearing | La {vista oral} será en marzo. | The hearing will be in March.
el jurado | jury | El {jurado} lo declaró culpable. | The jury found him guilty.
el veredicto | verdict | El {veredicto} fue unánime. | The verdict was unanimous.
la libertad condicional | parole | Salió en {libertad condicional}. | He was released on parole.
la orden de alejamiento | restraining order | Tiene una {orden de alejamiento}. | He has a restraining order.
el permiso de residencia | residence permit | Renovó su {permiso de residencia}. | She renewed her residence permit.
la tarjeta de residencia | residence card | Recogió su {tarjeta de residencia}. | He collected his residence card.
la nacionalidad | nationality, citizenship | Obtuvo la {nacionalidad} española. | He obtained Spanish citizenship.
`,
    D: `
El que ___ esta norma será sancionado (futuro de subjuntivo de infringir). | infringiere | Whoever infringes this rule will be penalised.
Queda ___ fumar en todo el recinto. | prohibido | Smoking is prohibited throughout the premises.
El arrendatario ___ (deber, futuro) pagar la renta antes del día 5. | deberá | The tenant must pay the rent before the 5th.
De conformidad ___ el artículo 12, se le impone una multa. | con | In accordance with article 12, a fine is imposed.
Sin perjuicio ___ lo anterior, podrá presentar recurso. | de | Without prejudice to the above, you may appeal.
A efectos ___ este contrato, se entenderá por «vivienda» el inmueble descrito. | de | For the purposes of this contract, «dwelling» means the property described.
La empresa ___ (incumplir) el contrato y tuvo que indemnizar al cliente. | incumplió | The company breached the contract and had to compensate the client.
El jurado emitió un ___ de culpabilidad. | veredicto | The jury returned a guilty verdict.
El delito ya ha ___; no se puede juzgar. | prescrito | The offence has lapsed; it can't be tried.
Firmaron la escritura ante ___. | notario | They signed the deed before a notary.
Si no tienes recursos, te asignan un abogado de ___. | oficio | If you have no means, you're assigned a legal aid lawyer.
La sentencia se puede ___ ante el Tribunal Supremo. | recurrir | The ruling can be appealed to the Supreme Court.
Lo ___ por difamación y perdió el juicio. | demandaron | They sued him for defamation and he lost the case.
Toda persona tiene derecho ___ la presunción de inocencia. | a | Everyone has the right to the presumption of innocence.
La nueva normativa entra en ___ el lunes. | vigor | The new regulations come into force on Monday.
Se ha ___ su derecho a la intimidad. | vulnerado | His right to privacy has been violated.
Anularon la cláusula ___ de la hipoteca. | abusiva | The unfair clause in the mortgage was struck down.
Lee bien la letra ___ antes de firmar. | pequeña | Read the small print carefully before signing.
En ___ caso, el interesado deberá aportar un certificado. | su | Where applicable, the person concerned must provide a certificate.
Salió de prisión en libertad ___. | condicional | He left prison on parole.
`,
    S: `
El arrendatario deberá abonar la renta dentro de los cinco primeros días de cada mes. | The tenant must pay the rent within the first five days of each month.
Queda prohibido el uso de este espacio sin autorización. | Use of this space without authorisation is prohibited.
De conformidad con lo dispuesto en el artículo 3, se le impone una sanción. | In accordance with article 3, a penalty is imposed on you.
Toda persona tiene derecho a la presunción de inocencia. | Everyone has the right to the presumption of innocence.
La empresa fue condenada por incumplimiento de contrato. | The company was found liable for breach of contract.
Presentaremos recurso ante el Tribunal Supremo. | We will appeal to the Supreme Court.
Si no dispone de recursos, tiene derecho a asistencia jurídica gratuita. | If you have no means, you're entitled to free legal aid.
Lea con atención la letra pequeña antes de firmar. | Read the small print carefully before signing.
`,
    R: [
      { t: 'Un contrato de alquiler (extracto)', x: `CLÁUSULA PRIMERA. Objeto. El arrendador cede en arrendamiento al arrendatario la vivienda situada en la calle Mayor, número 14, 3.º B, de Salamanca, que este acepta en el estado en que se encuentra.

CLÁUSULA SEGUNDA. Duración. El contrato tendrá una duración de un año a contar desde la fecha de su firma, prorrogable conforme a lo dispuesto en la Ley de Arrendamientos Urbanos.

CLÁUSULA TERCERA. Renta. El arrendatario abonará una renta mensual de 750 euros, que deberá ingresarse dentro de los cinco primeros días de cada mes en la cuenta bancaria designada por el arrendador. La renta se actualizará anualmente conforme al índice de referencia que establezca la ley.

CLÁUSULA CUARTA. Fianza. A la firma del presente contrato, el arrendatario entrega la cantidad de 750 euros en concepto de fianza, que le será devuelta a la finalización del arrendamiento, sin perjuicio de los descuentos que procedan por desperfectos.

CLÁUSULA QUINTA. Obras. Queda prohibida la realización de obras que modifiquen la configuración de la vivienda sin el consentimiento previo y por escrito del arrendador.

CLÁUSULA SEXTA. Animales. Se permite la tenencia de animales domésticos, siendo el arrendatario responsable de los daños que estos pudieren ocasionar.`, q: `¿Cuándo debe pagarse la renta? | El último día del mes ; *En los cinco primeros días de cada mes ; Cada tres meses
¿Cuándo se puede descontar dinero de la fianza? | Si se paga tarde ; *Si hay desperfectos ; Nunca
¿Qué dice el contrato sobre los animales? | Están prohibidos ; *Se permiten, pero el inquilino responde de los daños ; Solo se permiten perros pequeños` },
      { t: 'Mi primer juicio como jurado', x: `Cuando recibí la carta en la que se me comunicaba que había sido seleccionada como miembro de un jurado popular, mi primera reacción fue buscar la forma de librarme. No la encontré: salvo causas muy concretas, participar es una obligación legal.

El juicio duró cinco días. Se trataba de un caso de homicidio y, durante la vista oral, escuchamos a testigos, peritos, al fiscal y al abogado defensor. Lo que más me impresionó fue la responsabilidad. El magistrado nos recordó varias veces que el acusado gozaba de la presunción de inocencia y que solo podíamos declararlo culpable si las pruebas no dejaban lugar a dudas razonables.

Las deliberaciones fueron largas y, en algunos momentos, tensas. Nueve personas muy distintas —una enfermera, un taxista, un estudiante, una jubilada, yo misma— intentando ponernos de acuerdo sobre hechos que ninguno había presenciado. Al final, el veredicto fue unánime.

No puedo contar los detalles de nuestras deliberaciones; es secreto. Pero sí puedo decir que salí de allí con un respeto nuevo por la justicia y por la gente corriente. Y con la convicción de que, a pesar de sus defectos, el sistema funciona mejor de lo que solemos creer.`, q: `¿Cómo reaccionó al principio la narradora? | Con entusiasmo ; *Intentó librarse ; Llamó a un abogado
¿Qué le recordaba el magistrado al jurado? | Que debían terminar pronto ; *La presunción de inocencia ; Que el acusado era culpable
¿Qué conclusión saca la narradora? | Que el sistema no funciona ; *Que funciona mejor de lo que solemos creer ; Que los jurados deberían ser profesionales` },
      { t: 'Hacerse español: la nacionalidad', x: `Obtener la nacionalidad española es, para muchos extranjeros residentes, la culminación de un largo proceso. La vía más habitual es la residencia legal y continuada en España durante un número determinado de años, que varía según el país de origen: los nacionales de países iberoamericanos, por ejemplo, disfrutan de un plazo más corto que el general.

Además del tiempo de residencia, la ley exige acreditar «buena conducta cívica» y un «suficiente grado de integración en la sociedad española». En la práctica, esto se traduce en presentar un certificado de antecedentes penales y superar dos pruebas: un examen de conocimientos constitucionales y socioculturales y, para quienes no proceden de países de habla hispana, un examen de español de nivel A2.

El procedimiento puede resultar lento. Una vez presentada la solicitud, es frecuente que la resolución tarde bastante tiempo, y los solicitantes deben aportar una documentación abundante, a veces traducida y legalizada. Por ello, muchos recurren a gestorías o abogados especializados.

Cuando la resolución es favorable, el último paso es la jura o promesa de fidelidad al Rey y obediencia a la Constitución y a las leyes. Para muchos, es un momento muy emotivo.`, q: `¿Cuál es la vía más habitual para obtener la nacionalidad? | El matrimonio ; *La residencia legal y continuada ; La inversión
¿Qué examen de español se exige a quienes no vienen de países hispanohablantes? | B2 ; *A2 ; C1
¿Cuál es el último paso del proceso? | Un examen oral ; *La jura o promesa de fidelidad ; Una entrevista con el alcalde` }
    ],
    write: 'Write a formal complaint (180–220 words) to a landlord, company or administration about a breach of contract or of your rights. Refer to a clause or regulation, explain the facts and state what you require, using at least four legal/administrative formulas.',
    talk: 'Play a lawyer giving a first free consultation. The learner explains a problem (deposit not returned, faulty product, noisy neighbour). Ask for facts and documents and explain options in plain but precise language.',
    res: [R.fundeu(), R.rtve('Justicia'), R.slcAdv()]
  });

  U({
    id: 'c1-medios', title: 'Medios y desinformación', goal: ['Analyse how news is framed and spread', 'Talk about bias, polarisation and fact-checking', 'Evaluate sources critically in Spanish'],
    grammar: {
      t: 'Distancing and evaluating claims',
      h: `<p><b>Distancing from a claim</b>: <i>supuestamente, presuntamente, al parecer, según X, X asegura que</i>; journalistic conditional: <i>El ministro <b>habría</b> recibido sobornos</i> (unconfirmed).</p>
<p><b>Denying a claim</b> → subjunctive: <i>No es cierto que…, Es falso que…, Nada indica que…, No hay pruebas de que… <b>+ subj.</b></i> Affirming → indicative: <i>Es cierto que, Está comprobado que + ind.</i></p>
<p><b>Lo + adjective / lo que</b> to focus: <i><b>Lo preocupante</b> no es el bulo, sino su difusión. <b>Lo que</b> me llama la atención es…</i></p>
<p><b>Emphatic cleft sentences</b>: <i><b>Fue</b> un bot <b>quien</b> lo difundió. <b>Es</b> en las redes <b>donde</b> se polariza el debate.</i></p>
<p><b>Ser/estar + participle</b> for evaluation: <i>La noticia <b>está sacada</b> de contexto. El dato <b>está manipulado</b>.</i></p>`
    },
    V: `
la desinformación | disinformation | Una campaña de {desinformación}. | A disinformation campaign.
la posverdad | post-truth | Vivimos en la era de la {posverdad}. | We live in the post-truth era.
la verificación de datos | fact-checking | Un servicio de {verificación de datos}. | A fact-checking service.
el verificador / la verificadora | fact-checker | Según los {verificadores}, es falso. | According to fact-checkers, it's false.
contrastar | to cross-check | Hay que {contrastar} la información. | Information must be cross-checked.
el sesgo | bias | Un {sesgo} ideológico. | An ideological bias.
sesgado / sesgada | biased | Una información {sesgada}. | Biased reporting.
la polarización | polarisation | La {polarización} política crece. | Political polarisation is growing.
la cámara de eco | echo chamber | Las redes crean {cámaras de eco}. | Social media create echo chambers.
el filtro burbuja | filter bubble | Vivimos en un {filtro burbuja}. | We live in a filter bubble.
la viralidad | virality | La {viralidad} no garantiza la verdad. | Going viral doesn't guarantee truth.
el ciberanzuelo | clickbait | Ese titular es puro {ciberanzuelo}. | That headline is pure clickbait.
la manipulación | manipulation | Denuncian {manipulación} informativa. | They denounce news manipulation.
manipular | to manipulate | {Manipularon} las imágenes. | They manipulated the images.
la propaganda | propaganda | Es pura {propaganda}. | It's pure propaganda.
el discurso de odio | hate speech | Combatir el {discurso de odio}. | Fighting hate speech.
la moderación de contenidos | content moderation | Fallos en la {moderación de contenidos}. | Failures in content moderation.
el troll | troll | No alimentes al {troll}. | Don't feed the troll.
la granja de bots | bot farm | Una {granja de bots} difundió el mensaje. | A bot farm spread the message.
el ultrafalso | deepfake | Un vídeo {ultrafalso} del presidente. | A deepfake video of the president.
la suplantación de identidad | identity theft, impersonation | Fue víctima de {suplantación de identidad}. | She was a victim of identity theft.
la alfabetización mediática | media literacy | La {alfabetización mediática} en las escuelas. | Media literacy in schools.
el pensamiento crítico | critical thinking | Fomentar el {pensamiento crítico}. | Encouraging critical thinking.
la línea editorial | editorial line | La {línea editorial} del periódico. | The newspaper's editorial line.
la imparcialidad | impartiality | Se cuestiona su {imparcialidad}. | Its impartiality is being questioned.
el amarillismo | yellow journalism | Critican el {amarillismo} de la cadena. | They criticise the channel's sensationalism.
la agenda mediática | media agenda | El tema domina la {agenda mediática}. | The topic dominates the media agenda.
la cobertura | coverage | Una {cobertura} exhaustiva. | Exhaustive coverage.
viralizarse | to go viral | El vídeo se {viralizó} en horas. | The video went viral in hours.
difundir | to spread | {Difundieron} un bulo. | They spread a hoax.
la difusión | spread, circulation | La rápida {difusión} de rumores. | The rapid spread of rumours.
desacreditar | to discredit | Intentaron {desacreditar} a la periodista. | They tried to discredit the journalist.
la hemeroteca | newspaper archive | Lo encontré en la {hemeroteca}. | I found it in the newspaper archive.
la noticia falsa | fake news | Compartió una {noticia falsa}. | He shared fake news.
el periodismo de investigación | investigative journalism | Un premio al {periodismo de investigación}. | An award for investigative journalism.
el medio de comunicación | media outlet | Un {medio de comunicación} independiente. | An independent media outlet.
la credibilidad | credibility | El periódico perdió {credibilidad}. | The newspaper lost credibility.
la rectificación | correction | El diario publicó una {rectificación}. | The paper published a correction.
el tertuliano / la tertuliana | pundit | Los {tertulianos} opinan de todo. | Pundits have an opinion on everything.
el encuadre | framing | El {encuadre} de una noticia. | The framing of a news story.
`,
    D: `
No es cierto que el gobierno ___ (prohibir) las manifestaciones. | haya prohibido|prohíba | It isn't true that the government has banned demonstrations.
Es cierto que el vídeo ___ (ser) falso. | es | It's true that the video is fake.
Según la oposición, el ministro ___ (recibir, condicional de rumor compuesto) dinero. | habría recibido | According to the opposition, the minister allegedly received money.
No hay pruebas de que la vacuna ___ (causar) ese efecto. | cause|causara | There's no evidence that the vaccine causes that effect.
Lo ___ no es el bulo, sino su difusión. | preocupante | What's worrying isn't the hoax, but how it spreads.
Fue una granja de bots ___ difundió el mensaje. | la que|quien | It was a bot farm that spread the message.
Es en las redes ___ se polariza el debate. | donde | It's on social media that the debate gets polarised.
La foto está sacada de ___. | contexto | The photo has been taken out of context.
Hay que ___ la información con varias fuentes. | contrastar | You have to cross-check information with several sources.
Los verificadores ___ (desacreditar) el bulo en pocas horas. | desacreditaron | The fact-checkers debunked the hoax in a few hours.
El vídeo se ___ (viralizar) en cuestión de minutos. | viralizó | The video went viral in a matter of minutes.
Ese titular es puro ___: no dice nada. | ciberanzuelo | That headline is pure clickbait: it says nothing.
El periódico publicó una ___ tras el error. | rectificación | The newspaper published a correction after the mistake.
La línea ___ del diario es conservadora. | editorial | The newspaper's editorial line is conservative.
Las redes sociales favorecen las cámaras de ___. | eco | Social media encourage echo chambers.
Nada indica que el dato ___ (estar) manipulado. | esté | Nothing indicates the figure has been manipulated.
___, el alcalde habría ocultado el informe. | Presuntamente|Supuestamente | Allegedly, the mayor concealed the report.
Lo que me llama la ___ es la falta de fuentes. | atención | What strikes me is the lack of sources.
Fomentar el pensamiento ___ es clave en las escuelas. | crítico | Encouraging critical thinking is key in schools.
Lo encontré buscando en la ___ del periódico. | hemeroteca | I found it searching the newspaper archive.
`,
    S: `
No es cierto que el gobierno haya prohibido las manifestaciones. | It isn't true that the government has banned demonstrations.
Lo preocupante no es el bulo, sino la velocidad a la que se difunde. | What's worrying isn't the hoax but the speed at which it spreads.
Según fuentes no confirmadas, el ministro habría dimitido. | According to unconfirmed sources, the minister has resigned.
Antes de compartir una noticia, contrasta la información. | Before sharing a news story, cross-check the information.
Es en las redes sociales donde se polariza el debate. | It's on social media that the debate becomes polarised.
La imagen está sacada de contexto. | The image has been taken out of context.
Los algoritmos refuerzan nuestras cámaras de eco. | Algorithms reinforce our echo chambers.
El periódico publicó una rectificación al día siguiente. | The newspaper published a correction the following day.
`,
    R: [
      { t: 'Anatomía de un bulo', x: `El mensaje llegó un martes por la tarde a cientos de grupos de WhatsApp: «Urgente: el ayuntamiento va a cortar el agua en toda la ciudad durante tres días. Llenad garrafas». Iba acompañado de un logotipo municipal y de una supuesta firma del concejal de Medio Ambiente.

En menos de dos horas, los supermercados se quedaron sin agua embotellada. Las redes se llenaron de fotos de estanterías vacías, lo cual, a su vez, sirvió para dar credibilidad al rumor: si todo el mundo compra agua, algo pasará. Fue un ejemplo perfecto de cómo un bulo se alimenta de sus propias consecuencias.

El ayuntamiento tardó cuatro horas en desmentirlo. Para entonces, el mensaje había alcanzado a buena parte de la población. Los verificadores descubrieron más tarde que el logotipo estaba copiado de una web antigua y que el concejal mencionado ni siquiera seguía en el cargo.

Lo preocupante, según los expertos, no es tanto el origen del bulo —que nunca se aclaró— como la facilidad con la que se difundió. La mayoría de quienes lo reenviaron no tenía mala intención: solo querían avisar a sus seres queridos. Precisamente por eso, concluyen, la mejor vacuna contra la desinformación no es la censura, sino el hábito de detenerse un minuto antes de compartir.`, q: `¿Qué decía el bulo? | Que iba a subir el precio del agua ; *Que iban a cortar el agua durante tres días ; Que el agua estaba contaminada
¿Cómo se reforzó el rumor? | Con un vídeo del alcalde ; *Con fotos de estanterías vacías ; Con un artículo de prensa
Según los expertos, ¿cuál es la mejor solución? | La censura ; *Detenerse antes de compartir ; Cerrar los grupos de WhatsApp` },
      { t: 'Cada uno en su burbuja', x: `Hace veinte años, la mayoría de la gente se informaba a través de un número limitado de periódicos, radios y cadenas de televisión. Cada medio tenía su línea editorial, pero los ciudadanos compartían, al menos, un conjunto básico de noticias. Hoy, buena parte de la información nos llega a través de las redes sociales, y lo que vemos depende en gran medida de algoritmos diseñados para mantener nuestra atención.

Estos sistemas tienden a mostrarnos contenidos parecidos a los que ya nos han interesado. El resultado, según muchos investigadores, es el llamado filtro burbuja: cada usuario recibe una versión del mundo hecha a su medida, que confirma lo que ya piensa. Cuando estos usuarios se agrupan con otros de opiniones similares, se forman cámaras de eco en las que los argumentos contrarios apenas penetran.

No todos los expertos están de acuerdo con este diagnóstico. Algunos estudios sugieren que el efecto de los algoritmos es menor de lo que se cree y que la polarización tiene causas más profundas, como la desigualdad o la desconfianza en las instituciones. Lo que sí parece claro es que el contenido que provoca indignación se comparte más que el que invita a la reflexión.

Ante este panorama, la alfabetización mediática se ha convertido en una prioridad educativa.`, q: `¿Qué ha cambiado en los últimos veinte años? | Hay menos noticias ; *Mucha información nos llega a través de redes y algoritmos ; Los periódicos ya no tienen línea editorial
¿Qué es una cámara de eco? | Un estudio de radio ; *Un grupo de personas con opiniones similares donde apenas entran argumentos contrarios ; Un tipo de algoritmo
¿Qué dicen algunos expertos críticos con ese diagnóstico? | Que los algoritmos no existen ; *Que la polarización tiene causas más profundas ; Que las redes reducen la polarización` },
      { t: 'Cómo trabaja un verificador', x: `Marta trabaja en una pequeña organización dedicada a la verificación de datos. Su jornada empieza revisando las afirmaciones más compartidas en redes y las declaraciones de los políticos del día anterior. «No podemos comprobarlo todo, así que priorizamos lo que más se difunde y lo que puede causar más daño», explica.

El proceso sigue siempre los mismos pasos. Primero, identificar con exactitud qué se afirma. Después, buscar la fuente original: un informe, una estadística oficial, un vídeo completo. «Muchas veces el dato es real, pero está sacado de contexto», señala Marta. Un tercer paso es consultar a expertos independientes y, si procede, a la persona o institución aludida. Por último, se redacta una pieza en la que se explica el resultado con la máxima transparencia: qué se ha consultado y por qué se llega a esa conclusión.

Las calificaciones van de «verdadero» a «falso», pasando por categorías intermedias como «engañoso» o «sin pruebas». Marta reconoce que el trabajo genera desconfianza en algunos sectores, que los acusan de parcialidad. «Por eso es fundamental publicar el método y corregir rápidamente nuestros propios errores. La credibilidad se gana con transparencia».`, q: `¿Qué afirmaciones prioriza Marta? | Las de los periódicos más grandes ; *Las más difundidas y las que pueden causar más daño ; Solo las de los políticos
Según Marta, ¿qué ocurre muchas veces con los datos? | Son inventados ; *Son reales pero están sacados de contexto ; Son imposibles de comprobar
¿Cómo responde a las acusaciones de parcialidad? | Ignorándolas ; *Publicando su método y corrigiendo errores ; Dejando de verificar a ciertos políticos` }
    ],
    write: 'Analyse a news story or viral post (200–240 words): how it is framed, what sources it uses, what is proven and what is not. Use distancing expressions, the journalistic conditional, one cleft sentence and lo + adjective.',
    talk: 'Show the learner a dubious viral claim (invent one) and ask them to evaluate it like a fact-checker: what to check, which sources to consult, and what verdict they would give.',
    res: [R.rtve('Verifica RTVE'), R.fundeu(), R.elpais()]
  });

  U({
    id: 'c1-medioambiente', title: 'Clima, agua y territorio', goal: ['Discuss climate change in the Spanish context: drought, heat, fires, depopulation', 'Compare mitigation and adaptation policies', 'Express concern, urgency and proposals'],
    grammar: {
      t: 'Urgency, necessity and proposals',
      h: `<p><b>Necessity + subjunctive</b>: <i>Es urgente / imprescindible / fundamental que + subj.: Es imprescindible que <b>reduzcamos</b> las emisiones.</i> In the past: <i>Era urgente que se <b>tomaran</b> medidas.</i></p>
<p><b>Proposal verbs</b>: <i>proponer, plantear, abogar por (advocate), apostar por, reclamar, exigir que + subj.</i></p>
<p><b>Time limits</b>: <i>de aquí a 2030, para 2050, a más tardar, antes de que + subj. (Hay que actuar antes de que <b>sea</b> tarde).</i></p>
<p><b>Concern and fear</b>: <i>me preocupa que, temo que, es alarmante que + subj.; corre el riesgo de + inf.</i></p>
<p><b>Unreal past with consequences now</b>: <i>Si se <b>hubiera actuado</b> antes, ahora no <b>estaríamos</b> así.</i></p>`
    },
    V: `
la huella hídrica | water footprint | La {huella hídrica} de la carne. | The water footprint of meat.
el estrés hídrico | water stress | Zonas con {estrés hídrico}. | Areas under water stress.
la reserva hídrica | water reserves | La {reserva hídrica} está bajo mínimos. | Water reserves are at a record low.
el acuífero | aquifer | El {acuífero} está sobreexplotado. | The aquifer is overexploited.
la canícula | dog days, height of summer | En plena {canícula}, 44 grados. | In the dog days of summer, 44 degrees.
las lluvias torrenciales | torrential rain | {Lluvias torrenciales} en Valencia. | Torrential rain in Valencia.
la gota fría | cold drop (autumn storm) | La {gota fría} trajo lluvias torrenciales. | The cold drop brought torrential rain.
la masa forestal | woodland | La {masa forestal} ha crecido. | Woodland has expanded.
el cortafuegos | firebreak | Abrieron un {cortafuegos}. | They cleared a firebreak.
la reforestación | reforestation | Un plan de {reforestación}. | A reforestation plan.
el sumidero de carbono | carbon sink | Los bosques son {sumideros de carbono}. | Forests are carbon sinks.
la neutralidad climática | climate neutrality | Alcanzar la {neutralidad climática} en 2050. | Reaching climate neutrality by 2050.
la descarbonización | decarbonisation | La {descarbonización} de la industria. | The decarbonisation of industry.
el hidrógeno verde | green hydrogen | Una planta de {hidrógeno verde}. | A green hydrogen plant.
las renovables | renewables | Las {renovables} ya superan al carbón. | Renewables already exceed coal.
el autoconsumo | self-consumption (solar) | Instalaron placas para {autoconsumo}. | They installed panels for self-consumption.
la eficiencia energética | energy efficiency | Mejorar la {eficiencia energética}. | Improving energy efficiency.
la economía circular | circular economy | Apostar por la {economía circular}. | Backing the circular economy.
la obsolescencia programada | planned obsolescence | Denuncian la {obsolescencia programada}. | They denounce planned obsolescence.
el ecopostureo | greenwashing | Eso es puro {ecopostureo}. | That's pure greenwashing.
la movilidad sostenible | sustainable mobility | Planes de {movilidad sostenible}. | Sustainable mobility plans.
la zona de bajas emisiones | low-emission zone | No puedes entrar en la {zona de bajas emisiones}. | You can't enter the low-emission zone.
el éxodo rural | rural exodus | El {éxodo rural} de los años sesenta. | The rural exodus of the sixties.
la sobrepesca | overfishing | La {sobrepesca} amenaza las especies. | Overfishing threatens species.
los microplásticos | microplastics | Hay {microplásticos} en el agua. | There are microplastics in the water.
la acidificación | acidification | La {acidificación} de los océanos. | Ocean acidification.
la mitigación | mitigation | Medidas de {mitigación}. | Mitigation measures.
la adaptación | adaptation | La {adaptación} al cambio climático. | Adapting to climate change.
el negacionismo | denialism | El {negacionismo} climático. | Climate denialism.
el activismo | activism | El {activismo} juvenil. | Youth activism.
el refugiado climático / la refugiada climática | climate refugee | Millones de {refugiados climáticos}. | Millions of climate refugees.
la cumbre del clima | climate summit | La próxima {cumbre del clima}. | The next climate summit.
el punto de no retorno | point of no return | Estamos cerca del {punto de no retorno}. | We're close to the point of no return.
irreversible | irreversible | Daños {irreversibles}. | Irreversible damage.
el umbral | threshold | Superamos el {umbral} de 1,5 grados. | We exceeded the 1.5-degree threshold.
el caudal | flow (of a river) | El {caudal} del río ha bajado. | The river's flow has fallen.
el regadío | irrigated land | El {regadío} consume mucha agua. | Irrigated farming uses a lot of water.
la desalinizadora | desalination plant | Construirán una {desalinizadora}. | They'll build a desalination plant.
el entorno natural | natural environment | Respeta el {entorno natural}. | Respect the natural environment.
la fauna y la flora | wildlife | Protegen {la fauna y la flora}. | They protect wildlife.
`,
    D: `
Es imprescindible que ___ (reducir, nosotros) las emisiones. | reduzcamos | It's essential that we reduce emissions.
Era urgente que se ___ (tomar) medidas. | tomaran|tomasen | It was urgent that measures be taken.
Hay que actuar antes de que ___ (ser) demasiado tarde. | sea | We must act before it's too late.
Me preocupa que los embalses ___ (estar) tan bajos. | estén | It worries me that the reservoirs are so low.
Si se hubiera actuado antes, ahora no ___ (estar, nosotros) así. | estaríamos | If action had been taken earlier, we wouldn't be in this situation now.
Los ecologistas abogan ___ una transición más rápida. | por | Environmentalists advocate a faster transition.
Los bosques actúan como sumideros de ___. | carbono | Forests act as carbon sinks.
La UE aspira a la neutralidad ___ en 2050. | climática | The EU aims for climate neutrality by 2050.
Construirán una ___ para convertir agua de mar en potable. | desalinizadora | They'll build a desalination plant to turn seawater into drinking water.
El ___ del río ha bajado por la sequía. | caudal | The river's flow has dropped because of the drought.
Denuncian la obsolescencia ___ de los móviles. | programada | They denounce the planned obsolescence of mobile phones.
Ese anuncio «verde» es puro ___. | ecopostureo | That «green» advert is pure greenwashing.
No puedes entrar con ese coche en la zona de bajas ___. | emisiones | You can't drive that car into the low-emission zone.
Hay ___ en el agua del grifo y en los peces. | microplásticos | There are microplastics in tap water and in fish.
La ___ de los océanos amenaza los corales. | acidificación | Ocean acidification threatens corals.
Temo que el daño ___ (ser) irreversible. | sea | I fear the damage is irreversible.
Ya hemos superado el ___ de 1,5 grados algunos años. | umbral | We've already exceeded the 1.5-degree threshold in some years.
Instalaron placas solares para ___. | autoconsumo | They installed solar panels for self-consumption.
El regadío corre el riesgo ___ agotar el acuífero. | de | Irrigated farming runs the risk of exhausting the aquifer.
Las medidas de ___ reducen emisiones; las de adaptación nos preparan para los impactos. | mitigación | Mitigation measures reduce emissions; adaptation ones prepare us for impacts.
`,
    S: `
Es imprescindible que reduzcamos las emisiones de aquí a 2030. | It's essential that we reduce emissions by 2030.
Me preocupa que los embalses estén por debajo del treinta por ciento. | It worries me that reservoirs are below thirty percent.
Hay que actuar antes de que sea demasiado tarde. | We have to act before it's too late.
Los bosques son sumideros de carbono fundamentales. | Forests are vital carbon sinks.
Si se hubiera actuado antes, ahora no estaríamos en esta situación. | If action had been taken earlier, we wouldn't be in this situation now.
Muchos expertos abogan por combinar mitigación y adaptación. | Many experts advocate combining mitigation and adaptation.
Ese anuncio es puro ecopostureo. | That advert is pure greenwashing.
El éxodo rural dejó miles de pueblos casi vacíos. | The rural exodus left thousands of villages almost empty.
`,
    R: [
      { t: 'El agua, un bien escaso', x: `España es uno de los países europeos más expuestos al estrés hídrico. Gran parte de su territorio recibe pocas precipitaciones, y los episodios de sequía, que siempre han formado parte de su historia, se están volviendo más frecuentes e intensos con el cambio climático.

En los últimos años, varias regiones han vivido restricciones de agua que antes parecían impensables: cortes nocturnos en algunos municipios, prohibición de llenar piscinas o de regar jardines, y barcos cisterna para abastecer a ciudades enteras. Las imágenes de embalses con el fondo agrietado y campanarios de pueblos sumergidos que vuelven a asomar se han convertido en un símbolo.

El gran consumidor de agua es la agricultura, en particular el regadío, que ocupa una parte relativamente pequeña de la superficie cultivada pero genera una gran proporción del valor agrícola. De ahí que cualquier debate sobre el agua sea también un debate económico y territorial.

Las soluciones propuestas incluyen modernizar los sistemas de riego, reutilizar las aguas residuales depuradas, construir desalinizadoras y proteger los acuíferos sobreexplotados. Ninguna, por sí sola, resulta suficiente. Muchos expertos insisten en que es imprescindible que la gestión del agua se planifique pensando en un clima más seco, y no en el del siglo pasado.`, q: `¿Por qué la sequía es un problema creciente en España? | Por el aumento del turismo ; *Porque el cambio climático la hace más frecuente e intensa ; Porque hay más piscinas
¿Cuál es el principal consumidor de agua? | Las ciudades ; *La agricultura de regadío ; La industria
¿Qué insisten los expertos? | Que basta con desalinizadoras ; *Que hay que planificar pensando en un clima más seco ; Que el problema desaparecerá` },
      { t: 'Un pueblo contra el fuego', x: `Cada verano, cuando llega la canícula, los vecinos de un pequeño pueblo de la sierra de Gredos miran al monte con inquietud. Hace unos años, un incendio arrasó buena parte de la masa forestal que rodea el municipio y estuvo a punto de alcanzar las casas.

Desde entonces, el pueblo ha cambiado su relación con el bosque. Los vecinos recuperaron una práctica casi olvidada: el pastoreo de cabras para limpiar el sotobosque, que es el combustible de los grandes incendios. También se abrieron cortafuegos y se creó una pequeña cooperativa que aprovecha la leña y la biomasa para calefacción.

«El problema no es solo el calor», explica la alcaldesa. «Es que, con el éxodo rural, el monte se quedó sin nadie que lo cuidara. Antes había rebaños, se recogía leña, se cultivaban los bancales. Ahora todo eso se ha convertido en matorral». Los expertos coinciden: el abandono del campo y el cambio climático forman una combinación explosiva.

El proyecto ha atraído a algunas familias jóvenes, que ven en él una oportunidad de trabajo. «No vamos a evitar todos los incendios», reconoce la alcaldesa, «pero si se hubiera hecho esto hace treinta años, ahora no tendríamos tanto miedo».`, q: `¿Qué práctica recuperaron los vecinos? | La caza ; *El pastoreo de cabras para limpiar el monte ; La pesca
Según la alcaldesa, ¿cuál es la otra causa del problema? | El turismo ; *El abandono del campo ; La falta de bomberos
¿Qué efecto positivo ha tenido el proyecto? | Ha bajado la temperatura ; *Ha atraído a familias jóvenes ; Ha eliminado todos los incendios` },
      { t: 'Mitigar y adaptarse', x: `En los debates sobre el cambio climático se usan dos palabras que conviene distinguir: mitigación y adaptación. La mitigación consiste en reducir las emisiones de gases de efecto invernadero para limitar el calentamiento: sustituir los combustibles fósiles por renovables, mejorar la eficiencia energética, electrificar el transporte o proteger los sumideros de carbono. La adaptación, en cambio, busca prepararnos para los impactos que ya son inevitables: olas de calor más intensas, lluvias torrenciales, subida del nivel del mar.

Durante años, la mitigación acaparó la atención, en parte por temor a que hablar de adaptación pareciera una forma de resignación. Hoy, sin embargo, la mayoría de los científicos considera que ambas estrategias son complementarias. Aunque las emisiones se redujeran drásticamente mañana, el clima seguiría cambiando durante décadas.

En las ciudades españolas, la adaptación ya es visible: refugios climáticos en bibliotecas y escuelas, más árboles en las calles, toldos en las plazas, cambios en los horarios laborales durante los meses de más calor. En el campo, se ensayan cultivos más resistentes a la sequía.

El reto es que ninguna de las dos estrategias se convierta en excusa para olvidar la otra. Como resume una investigadora, «adaptarse sin mitigar es como achicar agua sin tapar el agujero».`, q: `¿Qué es la mitigación? | Prepararse para las olas de calor ; *Reducir las emisiones para limitar el calentamiento ; Plantar árboles en las ciudades
¿Por qué se habló poco de adaptación durante años? | Porque era muy cara ; *Por miedo a que pareciera resignación ; Porque no era necesaria
¿Qué significa la frase final de la investigadora? | Que hay que adaptarse primero ; *Que adaptarse sin reducir emisiones no resuelve el problema ; Que la mitigación es inútil` }
    ],
    write: 'Write a letter to your local council (200–240 words) proposing three measures against heat, drought or pollution in your town. Justify each with causes and consequences, and use at least four structures of urgency or necessity + subjunctive.',
    talk: 'Debate with the learner: you argue that climate policies hurt farmers and rural jobs; the learner defends faster action. Then swap sides. Push for concession and proposal language.',
    res: [R.rtve('El escarabajo verde'), R.ser('A vivir que son dos días'), R.elpais()]
  });

  U({
    id: 'c1-cultura', title: 'Fiestas, tradiciones e industria cultural', goal: ['Describe Spanish festivals and traditions with precision and nuance', 'Discuss controversies around tradition (bullfighting, tourism, identity)', 'Talk about the cultural industry: books, film, music, copyright'],
    grammar: {
      t: 'Describing and evaluating traditions',
      h: `<p><b>Impersonal description</b> of customs: <i>se celebra, se suele, es costumbre + inf., tiene lugar, consiste en, se remonta a (dates back to).</i></p>
<p><b>Concessive evaluation</b>: <i>Por muy arraigada que <b>esté</b>, … / Aunque se <b>trate</b> de una tradición, … / Por más que <b>digan</b>, …</i></p>
<p><b>Relative clauses with prepositions</b> for precise description: <i>la plaza <b>en la que</b> se baila, la cofradía <b>a la que</b> pertenece, el santo <b>en cuyo honor</b> se celebra.</i></p>
<p><b>Lo + adjective + es que</b>: <i>Lo curioso es que…, Lo que más me impresionó fue…</i></p>
<p><b>Passive with ser</b> in heritage contexts: <i>fue declarado Patrimonio de la Humanidad en…, fue fundada en…</i></p>`
    },
    V: `
el bien de interés cultural | listed heritage site | Es {bien de interés cultural}. | It's a listed heritage site.
el Patrimonio de la Humanidad | World Heritage | Declarado {Patrimonio de la Humanidad}. | Declared World Heritage.
la tradición oral | oral tradition | Cuentos de {tradición oral}. | Stories from oral tradition.
el folclore | folklore | El {folclore} gallego. | Galician folklore.
la romería | pilgrimage festival | La {romería} del Rocío. | The El Rocío pilgrimage.
la cofradía | religious brotherhood | Pertenece a una {cofradía}. | He belongs to a brotherhood.
el costalero / la costalera | float bearer | Los {costaleros} cargan el paso. | The bearers carry the float.
la saeta | saeta (Holy Week song) | Alguien cantó una {saeta} desde un balcón. | Someone sang a saeta from a balcony.
el nazareno / la nazarena | hooded penitent | Miles de {nazarenos} desfilan. | Thousands of penitents parade.
la caseta | (fair) marquee | Nos vemos en la {caseta}. | See you at the marquee.
las fiestas patronales | patron saint festivities | Vuelve a su pueblo para las {fiestas patronales}. | He goes back to his village for the patron saint festivities.
el santo patrón / la santa patrona | patron saint | San Isidro es el {santo patrón} de Madrid. | San Isidro is Madrid's patron saint.
la tauromaquia | bullfighting | El debate sobre la {tauromaquia}. | The debate about bullfighting.
el encierro | bull run | Los {encierros} de San Fermín. | The San Fermín bull runs.
los castellers | human towers | Los {castellers} de Tarragona. | The human towers of Tarragona.
la jota | jota (folk dance) | Bailaron una {jota} aragonesa. | They danced an Aragonese jota.
la sardana | sardana (Catalan dance) | Bailan la {sardana} en la plaza. | They dance the sardana in the square.
el cante jondo | deep flamenco song | El {cante jondo} es puro sentimiento. | Cante jondo is pure feeling.
el tablao | flamenco venue | Fuimos a un {tablao} en Sevilla. | We went to a flamenco venue in Seville.
el duende | magic, soul (in art) | Esa bailaora tiene {duende}. | That dancer has real soul.
la Movida madrileña | 1980s Madrid scene | La {Movida madrileña} cambió la cultura. | The Movida changed culture.
el esperpento | grotesque (Valle-Inclán) | Una situación digna de un {esperpento}. | A situation worthy of a grotesque farce.
la Generación del 27 | Generation of '27 | Lorca pertenece a la {Generación del 27}. | Lorca belongs to the Generation of '27.
el mecenas / la mecenas | patron (of the arts) | Un {mecenas} financió la obra. | A patron funded the work.
el mecenazgo | patronage | Leyes de {mecenazgo}. | Patronage laws.
la industria cultural | cultural industry | La {industria cultural} genera empleo. | The cultural industry creates jobs.
el consumo cultural | cultural consumption | Ha crecido el {consumo cultural}. | Cultural consumption has grown.
los derechos de autor | copyright | Respeta los {derechos de autor}. | Respect copyright.
la propiedad intelectual | intellectual property | Ley de {propiedad intelectual}. | Intellectual property law.
la piratería | piracy | La {piratería} perjudica a los autores. | Piracy harms authors.
la plataforma de streaming | streaming platform | Se estrena en una {plataforma de streaming}. | It premieres on a streaming platform.
el doblaje | dubbing | España tiene tradición de {doblaje}. | Spain has a dubbing tradition.
el certamen | competition, contest | Ganó el {certamen} de poesía. | She won the poetry competition.
la Feria del Libro | Book Fair | Firmó ejemplares en la {Feria del Libro}. | He signed copies at the Book Fair.
la editorial | publisher | Una pequeña {editorial} independiente. | A small independent publisher.
la tirada | print run | Una {tirada} de cinco mil ejemplares. | A print run of five thousand copies.
el superventas | bestseller | Su novela es un {superventas}. | Her novel is a bestseller.
el ejemplar | copy | Vendió un millón de {ejemplares}. | It sold a million copies.
la cocina de autor | signature cuisine | Un restaurante de {cocina de autor}. | A signature-cuisine restaurant.
la identidad cultural | cultural identity | Defienden su {identidad cultural}. | They defend their cultural identity.
`,
    D: `
La fiesta se ___ al siglo XVI. | remonta | The festival dates back to the 16th century.
Es ___ comer doce uvas en Nochevieja. | costumbre | It's customary to eat twelve grapes on New Year's Eve.
Por muy arraigada que ___ (estar), no todos la defienden. | esté | However deep-rooted it is, not everyone defends it.
La sardana ___ (consistir) en un baile en círculo. | consiste | The sardana consists of a circle dance.
Pertenece a una cofradía ___ la que también perteneció su abuelo. | a | He belongs to a brotherhood his grandfather also belonged to.
El santo en ___ honor se celebra la fiesta es San Roque. | cuyo | The saint in whose honour the festival is held is San Roque.
El conjunto fue ___ (declarar) Patrimonio de la Humanidad en 1985. | declarado | The site was declared World Heritage in 1985.
Los ___ cargan el paso durante horas. | costaleros | The bearers carry the float for hours.
Lo ___ es que nadie sabe exactamente cuándo empezó. | curioso | The curious thing is that nobody knows exactly when it started.
La novela tuvo una ___ de diez mil ejemplares. | tirada | The novel had a print run of ten thousand copies.
La ___ perjudica gravemente a músicos y escritores. | piratería | Piracy seriously harms musicians and writers.
España tiene una larga tradición de ___: casi todo se ve en castellano. | doblaje | Spain has a long dubbing tradition: almost everything is watched in Spanish.
Esa bailaora tiene ___: te pone la piel de gallina. | duende | That dancer has real soul: she gives you goosebumps.
Ganó el ___ de poesía de su ciudad. | certamen | She won her town's poetry competition.
Los ___ de Tarragona levantan torres humanas de nueve pisos. | castellers | The Tarragona castellers build human towers nine levels high.
Una ley de ___ incentivaría la financiación privada de la cultura. | mecenazgo | A patronage law would encourage private funding of culture.
Aunque se ___ (tratar) de una tradición, debe respetar a los animales. | trate | Even if it's a tradition, it must respect animals.
Durante la Semana Santa, alguien cantó una ___ desde un balcón. | saeta | During Holy Week, someone sang a saeta from a balcony.
Respetar los derechos de ___ es esencial. | autor | Respecting copyright is essential.
Las fiestas ___ se celebran en honor al santo del pueblo. | patronales | Patron saint festivities are held in honour of the village's saint.
`,
    S: `
La fiesta se remonta a la Edad Media. | The festival dates back to the Middle Ages.
Es costumbre que los vecinos decoren los balcones. | It's customary for residents to decorate their balconies.
Por muy arraigada que esté, la tradición también puede cambiar. | However deep-rooted it is, tradition can also change.
Fue declarado Patrimonio de la Humanidad hace más de treinta años. | It was declared World Heritage more than thirty years ago.
Lo que más me impresionó fue el silencio de la procesión. | What impressed me most was the silence of the procession.
La novela se ha convertido en un superventas. | The novel has become a bestseller.
La piratería perjudica a los autores. | Piracy harms authors.
Esa cantaora tiene un duende increíble. | That singer has incredible soul.
`,
    R: [
      { t: 'Una noche de Semana Santa en Sevilla', x: `Nunca he sido creyente, pero la primera vez que viví la Semana Santa en Sevilla entendí por qué tanta gente la espera durante todo el año. Era la madrugada del Viernes Santo y la ciudad, lejos de dormir, estaba abarrotada.

Lo primero que me sorprendió fue el silencio. Miles de personas en las calles y, sin embargo, cuando el paso doblaba la esquina, solo se oía el roce de las zapatillas de los costaleros sobre el suelo. Avanzaban con una lentitud casi irreal, guiados por la voz del capataz, cargando sobre los hombros una estructura de madera y plata que pesa muchísimo.

Delante desfilaban los nazarenos, con sus capirotes y sus cirios encendidos. Un amigo sevillano me explicó que muchos pertenecen a la misma cofradía desde hace generaciones y que, para ellos, salir en la procesión es una forma de mantener vivo el vínculo con su familia y su barrio, más allá de la fe.

De repente, desde un balcón, una mujer empezó a cantar una saeta. Todo se detuvo. No entendí todas las palabras, pero la emoción era tan intensa que se me puso la piel de gallina. Por muy escéptico que uno sea, hay momentos que no admiten explicación.`, q: `¿Qué fue lo que más sorprendió al narrador al principio? | El ruido ; *El silencio ; La música
Según el amigo sevillano, ¿qué significa para muchos salir en la procesión? | Una obligación religiosa ; *Mantener el vínculo con la familia y el barrio ; Una actividad turística
¿Qué ocurrió cuando la mujer cantó la saeta? | La gente aplaudió ; *Todo se detuvo y el narrador se emocionó ; El paso se cayó` },
      { t: 'Tradición y polémica', x: `Pocas cuestiones dividen tanto a la sociedad española como la tauromaquia. Para sus defensores, las corridas de toros son una manifestación artística con siglos de historia, un elemento de identidad cultural y una actividad económica que sostiene a ganaderías, profesionales y pueblos enteros. Además, argumentan, la cría del toro bravo contribuye a conservar ecosistemas como la dehesa.

Para sus detractores, en cambio, ninguna tradición justifica el sufrimiento de un animal como espectáculo. Señalan, además, que el interés por los toros ha disminuido de forma notable, sobre todo entre los jóvenes, y que muchas plazas sobreviven gracias a las subvenciones públicas.

El debate tiene también una dimensión política y territorial. Algunas comunidades autónomas han intentado prohibir las corridas, mientras que otras las han protegido como patrimonio cultural. Los tribunales han tenido que pronunciarse en más de una ocasión sobre quién tiene competencia para decidir.

Más allá de los toros, la polémica plantea una pregunta de fondo: ¿qué hacemos con las tradiciones que chocan con la sensibilidad actual? Algunas desaparecen, otras se transforman —como los encierros con medidas de seguridad cada vez más estrictas— y otras se mantienen a pesar de las críticas. La respuesta, probablemente, no será la misma en todos los casos.`, q: `¿Qué argumento ecológico usan los defensores? | Que los toros comen poco ; *Que la cría del toro bravo conserva la dehesa ; Que las plazas son edificios históricos
¿Qué señalan los detractores sobre el público? | Que es cada vez más numeroso ; *Que el interés ha disminuido, sobre todo entre jóvenes ; Que solo va la gente mayor
¿Qué pregunta de fondo plantea el texto? | Si hay que prohibir todas las fiestas ; *Qué hacer con tradiciones que chocan con la sensibilidad actual ; Si los toros son arte` },
      { t: 'El negocio de los libros', x: `España es una de las grandes potencias editoriales del mundo. Grandes grupos con sede en Madrid y Barcelona publican cada año miles de títulos que se distribuyen tanto en España como en América Latina, un mercado de cientos de millones de lectores potenciales en español.

Sin embargo, detrás de las cifras globales hay realidades muy distintas. Unos pocos superventas concentran gran parte de las ventas, mientras que la mayoría de los libros apenas supera unos cientos de ejemplares. Muchas pequeñas editoriales independientes sobreviven gracias al entusiasmo de sus fundadores, a las ayudas públicas y a una relación muy cercana con las librerías de barrio.

La Feria del Libro de Madrid, que se celebra cada primavera en el Retiro, es un buen termómetro del sector. Durante varias semanas, autores consagrados y debutantes firman ejemplares en las casetas, y las colas para conseguir la dedicatoria de un escritor famoso pueden durar horas.

Los retos son numerosos: la piratería digital, la competencia de las plataformas audiovisuales por el tiempo libre y la concentración del mercado. Aun así, el sector ha demostrado una notable capacidad de adaptación, desde el auge del audiolibro hasta el fenómeno de los lectores jóvenes que descubren novelas a través de las redes sociales.`, q: `¿Por qué es importante el mercado latinoamericano para las editoriales españolas? | Porque los libros son más baratos ; *Porque ofrece cientos de millones de lectores potenciales ; Porque allí no hay piratería
¿Cómo sobreviven muchas editoriales pequeñas? | Con superventas ; *Con entusiasmo, ayudas públicas y relación con librerías de barrio ; Vendiendo en el extranjero
¿Qué ejemplo de adaptación del sector menciona el texto? | La desaparición de las librerías ; *El auge del audiolibro y los lectores jóvenes en redes ; La subida de precios` }
    ],
    write: 'Describe a festival or tradition from your country or one you have seen in Spain (200–240 words): origin, what happens, what it means to people and any controversy. Use se remonta a, consiste en, a relative with cuyo or a preposition, and one concessive with subjunctive.',
    talk: 'Ask the learner to explain a tradition from their country to a Spanish friend who knows nothing about it, then discuss whether traditions should change when they clash with modern values.',
    res: [R.rtve('Días de cine / Página Dos'), R.bvmc('Generación del 27'), R.ser('La ventana')]
  });
})();
