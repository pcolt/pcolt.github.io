//elementi del DOM che ci servono
var inputLatoOriz = document.querySelector('.inputLatoOriz');
var inputLatoVert = document.querySelector('.inputLatoVert');
var pResult = document.querySelector('#result');

var button = document.querySelector('button');
var inputOrientam = document.querySelector('#inputOrientam');

//quando il pulsante viene cliccato lancio la funzione per calcolare superficie falda, 
//numero pannelli, superficie pannell, potenza e canvas con disegno disposizione pannelli
button.onclick = function() {
  //registro i valori immessi
  var latoOriz = inputLatoOriz.value;
  var latoVert = inputLatoVert.value;
  var orientamento = inputOrientam.value;
  //calcolo area falda
  var area = latoOriz * latoVert;
  //inizializzo variabile lunghezza totale coperta dai moduli
  var ltot = 0;
  var xtot = 0;
  var ytot = 0;
  //inizializzo variabile per conteggio numero moduli
  var count = -1;

  if (orientamento === 'Orizzontale') {
    while (ltot <= latoOriz) {
      let i = 0; 
      xtot += 1.82 * Math.cos(i);
      ytot -= 1.82 * Math.sin(i);
      i += 2;
      count += 1;
      ltot = Math.sqrt((xtot * xtot) + (ytot * ytot))
      console.log(count);
      }
    count = count * (Math.floor(latoVert / 1));
    console.log(count);
  //secondo loop se disposizione dei pannelli selezionata in 'Verticale'
  } else {
    while (ltot <= latoOriz) {
      let i = 0; 
      xtot += 1 * Math.cos(i);
      ytot -= 1 * Math.sin(i);
      i += 2;
      count += 1;
      ltot = Math.sqrt((xtot * xtot) + (ytot * ytot))
      console.log(count);
      }
    count = count * (Math.floor(latoVert / 1.82));
    console.log(count);
  }
  
  //scrivo la superficie, numero pannelli, superficie captante...
  pResult.textContent = 'Superficie da coprire: ' + area + ' metri quadrati \r\n' + 
    'Numero totale pannelli: ' + count + '\r\n' + 
    'Superficie totale captante: ' + count*1.78 + ' metri quadrati \r\n' +
    'Potenza nominale: ' + count*300 + ' Wp';
  
}








