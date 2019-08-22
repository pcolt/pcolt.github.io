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
  //un rettangolo con le dimensioni del tetto moltiplicate per una scala di 20
  ctx.fillStyle = 'rgb(240,240,240)';
  ctx.fillRect(0,0,latoCorto*20,latoLungo*20);
  //posizione del primo modulo MAS, 6 = 0,3 m x 20
  var x = 6;
  var y = 6;
  //doppio loop per disegnare tutti i moduli con dimensioni scalate di 20 e margine di (0,3m x 20 = 6)
  while (y <= (latoLungo*20 - 2*20 -6)) {
    while (x <= (latoCorto*20 - 1*20 - 6) {
      ctx.strokeStyle = 'rgb(0, 0, 0)';
    	//ctx.lineWidth = 5;
    	ctx.strokeRect(x,y,1*20,2*20);
    	x += 1*20
    	}
   x = 6
   y +=2*20
   }
}







