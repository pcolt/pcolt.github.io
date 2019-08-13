var input = document.querySelector('.numberInput');
var square = document.querySelector('.square');
var cube = document.querySelector('.cube');
var fact = document.querySelector('.fact');

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

input.onchange = function() {
  var num = input.value;
  if (isNaN(num)) {
    para.textContent = 'You need to enter a number!';
  } else {
    square.textContent = num + ' squared is ' + squared(num) + '.';
    cube.textContent = num + ' cubed is ' + cubed(num) + '. ';
    fact.textContent = num + ' factorial is ' + factorial(num) + '.';
  }
}
