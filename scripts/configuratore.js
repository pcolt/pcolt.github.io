var inputLatoCorto = document.querySelector('.inputLatoCorto');
var inputLatoLungo = document.querySelector('.inputLatoLungo');
var pArea = document.querySelector('p');
var button = document.queryselector('button');

button.onclick = function() {
  var latoCorto = inputLatoCorto.value;
  var latoLungo = inputLatoLungo.value;
  var area = latoCorto * latoLungo;
  pArea.textContent = 'Superficie del tetto in metri: ' + area;
}





