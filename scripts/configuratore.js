var inputLatoCorto = document.querySelector('.inputLatoCorto');
var inputLatoLungo = document.querySelector('.inputLatoLungo');
var pArea = document.querySelector('p');
var button = document.querySelector('button');

//quando il pulsante è premuto scrivo nel paragrafo la superficie del tetto e disegno nel canvas
button.onclick = function() {
  //registro i valori immessi
  var latoCorto = inputLatoCorto.value;
  var latoLungo = inputLatoLungo.value;
  //calcolo l'area
  var area = latoCorto * latoLungo;
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
  ctx.fillRect(0,0,latoCorto*scala,latoLungo*scala);
  ctx.strokeStyle = 'rgb(0,0,0)';
  ctx.strokeRect(0,0,latoCorto*scala,latoLungo*scala);
  //posizione del primo modulo MAS, 6 = 0,3 m x 20
  var x = 6;
  var y = 6;
  //doppio loop per disegnare tutti i moduli con dimensioni scalate di 20 e margine di (0,3m x 20 = 6)
  while (y <= (latoLungo*scala - 2*scala -6)) {
    while (x <= (latoCorto*scala - 1*scala - 6) {
      ctx.strokeStyle = 'rgb(0, 0, 0)';
    	//ctx.lineWidth = 5;
    	ctx.strokeRect(x,y,1*scala,2*scala);
    	x += 1*scala;
    	}
   x = 6;
   y +=2*scala;
   }
}







