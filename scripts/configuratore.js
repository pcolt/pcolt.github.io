var inputLatoCorto = document.querySelector('.inputLatoCorto');
var inputLatoLungo = document.querySelector('.inputLatoLungo');
var pNumPannelli = document.querySelector('p');

var latoCorto = inputLatoCorto.value;
var latoLungo = inputLatoLungo.value;

var nTotPannelli = latoCorto * latoLungo;

pNumPannelli.textContent = 'Numero totale pannelli: ' + nTotPannelli;

