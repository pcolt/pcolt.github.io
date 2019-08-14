var inputLatoCorto = document.querySelector('.inputLatoCorto');
var inputLatoLungo = document.querySelector('.inputLatoLungo');
var pNumPannelli = document.querySelector('.pNumPanelli');

function squared(num) {
  return num * num;
}

function cubed(num) {
  return num * num * num;
}

function factorial(num) {
  var x = num;
  while (x > 1) {
    num *= x-1;
    x--;
  }
  return num;
}

inputLatoCorto.onchange = function() {
  var latoCorto = inputLatoCorto.value;
  }

alert(latoCorto);

}
