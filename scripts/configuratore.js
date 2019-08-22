var inputLatoCorto = document.querySelector('.inputLatoCorto');
var inputLatoLungo = document.querySelector('.inputLatoLungo');
var pArea = document.querySelector('p');
var button = document.querySelector('button');

//function draw() {
  
//}

button.onclick = function() {
  var latoCorto = inputLatoCorto.value;
  var latoLungo = inputLatoLungo.value;
  var area = latoCorto * latoLungo;
  pArea.textContent = 'Superficie del tetto: ' + area + ' metri quadrati';
  
  var canvas = document.querySelector('.myCanvas');
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgb(240,240,240)';
  ctx.fillRect(0,0,latoCorto*20,latoLungo*20);
  
  var x = 6;
  var y = 6;
  while (y <= latoLungo*20) {
    		while (x <= latoCorto*20) {
    			ctx.strokeStyle = 'rgb(0, 0, 0)';
    			//ctx.lineWidth = 5;
    			ctx.strokeRect(x,y,1*20,2*20);
    			x += 1*20
    		}
    		x = 6
    		y +=2*20
    	}
  
  
  //ctx.fillStyle = 'rgb(200, 0, 0)';
  //ctx.fillRect(10, 10, latoLungo * 30, latoCorto * 30);
  //ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
  //ctx.fillRect(30, 30, 50, 50);
}







