var inputLatoCorto = document.querySelector('.inputLatoCorto');
var inputLatoLungo = document.querySelector('.inputLatoLungo');
var pArea = document.querySelector('p');
var button = document.querySelector('button');
var canvas = document.querySelector('.myCanvas');

var ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(0,0,255)';
ctx.fillRect = (0,0,300,150);

button.onclick = function() {
  var latoCorto = inputLatoCorto.value;
  var latoLungo = inputLatoLungo.value;
  var area = latoCorto * latoLungo;
  pArea.textContent = 'Superficie del tetto: ' + area + ' metri quadrati';
}







