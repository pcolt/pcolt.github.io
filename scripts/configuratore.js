var inputLatoOriz = document.querySelector('.inputLatoOriz');
var inputLatoVert = document.querySelector('.inputLatoVert');
var pArea = document.querySelector('p');
var button = document.querySelector('button');
var orientamento = document.querySelector('#orientamento');

//quando il pulsante è premuto scrivo nel paragrafo la superficie del tetto e disegno nel canvas
button.onclick = function() {
  //registro i valori immessi
  var latoOriz = inputLatoOriz.value;
  var latoVert = inputLatoVert.value;
  var orientamento = orientamento.value;
  //calcolo l'area
  var area = latoOriz * latoVert;
  //scrivo la superficie
  pArea.textContent = 'Superficie del tetto: ' + area + ' metri quadrati';
  
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
  //doppio loop per disegnare tutti i moduli con dimensioni scalate di 20 e margine di (0,3m x 20 = 6)
  if (orietamento === verticale) {
  while (y <= (latoVert*scala - 2*scala -6)) {
    while (x <= (latoOriz*scala - 1*scala - 6)) {
      ctx.fillStyle = 'rgb(0,0,200)';
      ctx.fillRect(x,y,1*scala,2*scala);
      ctx.strokeStyle = 'rgb(0, 0, 0)';
    	//ctx.lineWidth = 5;
    	ctx.strokeRect(x,y,1*scala,2*scala);
    	x += 1*scala;
    	}
   x = 6;
   y += 2*scala;
   }
  } else {
    while (y <= (latoVert*scala - 1*scala -6)) {
      while (x <= (latoOriz*scala - 2*scala - 6)) {
        ctx.fillStyle = 'rgb(0,0,200)';
        ctx.fillRect(x,y,2*scala,1*scala);
        ctx.strokeStyle = 'rgb(0, 0, 0)';
    	  //ctx.lineWidth = 5;
    	  ctx.strokeRect(x,y,2*scala,1*scala);
    	  x += 2*scala;
    	 }
    x = 6;
    y += 1*scala;
   }
}







