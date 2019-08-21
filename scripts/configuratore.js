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
  ctx.fillStyle = 'rgb(10,10,10)';
  ctx.fillRect(0,0,600,600);
  
  ctx.fillStyle = 'rgb(200, 0, 0)';
  ctx.fillRect(10, 10, latoLungo * 30, latoCorto * 30);
  ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
  ctx.fillRect(30, 30, 50, 50);
}







