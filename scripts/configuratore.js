var inputLatoOriz = document.querySelector('.inputLatoOriz');
var inputLatoVert = document.querySelector('.inputLatoVert');
var pResult = document.querySelector('#result');

var button = document.querySelector('button');
var inputOrientam = document.querySelector('#inputOrientam');

//quando il pulsante è premuto scrivo nel paragrafo la superficie del tetto e disegno nel canvas
button.onclick = function() {
  //registro i valori immessi
  var latoOriz = inputLatoOriz.value;
  var latoVert = inputLatoVert.value;
  var orientamento = inputOrientam.value;
  //calcolo l'area
  var area = latoOriz * latoVert;
  
  
  //disego nel canvas
  var canvas = document.querySelector('.myCanvas');
  var ctx = canvas.getContext('2d');
  //ripulisce eventuale precedente disegno con un quadrato bianco
  ctx.fillStyle = 'rgb(255,255,255)';
  ctx.fillRect(0,0,600,600);
  var scala = 20;
  //un rettangolo con le dimensioni del tetto moltiplicate per la scala
  ctx.fillStyle = 'rgb(240,240,240)';
  ctx.fillRect(0,0,latoOriz*scala,latoVert*scala);
  ctx.strokeStyle = 'rgb(0,0,0)';
  ctx.strokeRect(0,0,latoOriz*scala,latoVert*scala);
  //posizione del primo modulo MAS, 6 = 0,3 m x 20
  var x = 6;
  var y = 6;
  var count = 0;
  //doppio loop per disegnare tutti i moduli con dimensioni scalate di 20 e margine di (0,3m x 20 = 6)
  if (orientamento === 'Verticale') {
  while (y <= (latoVert*scala - 1.82*scala -6)) {
    while (x <= (latoOriz*scala - 1*scala - 6)) {
      ctx.fillStyle = 'rgb(0,0,200)';
      ctx.fillRect(x,y,1*scala,1.82*scala);
      ctx.strokeStyle = 'rgb(0, 0, 0)';
    	//ctx.lineWidth = 5;
    	ctx.strokeRect(x,y,1*scala,1.82*scala);
    	x += 1*scala;
      count += 1;
    	}
   x = 6;
   y += 1.82*scala;
   }
  } else {
    while (y <= (latoVert*scala - 1*scala -6)) {
      while (x <= (latoOriz*scala - 1.82*scala - 6)) {
        ctx.fillStyle = 'rgb(0,0,200)';
        ctx.fillRect(x,y,1.82*scala,1*scala);
        ctx.strokeStyle = 'rgb(0, 0, 0)';
    	  //ctx.lineWidth = 5;
    	  ctx.strokeRect(x,y,1.82*scala,1*scala);
    	  x += 1.82*scala;
        count += 1;
    	 }
    x = 6;
    y += 1*scala;
   }
  }
  
  //scrivo la superficie, numero pannelli, superficie captante...
  pResult.textContent = 'Superficie tetto: ' + area + ' metri quadrati \r\n' + 
    'Numero totale pannelli: ' + count + '\r\n' + 
    'Superficie totale captante: ' + count*1.78 + ' metri quadrati \r\n' +
    'Potenza nominale: ' + count*300 + ' Wp';
  
}








