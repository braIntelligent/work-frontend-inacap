const button_one = document.getElementById('button_one');
const div_one = document.getElementById('div_one');

const button_two = document.getElementById('button_two');
const div_two = document.getElementById('div_two');

const button_three = document.getElementById('button_three');
const div_three = document.getElementById('div_three');

const button_four = document.getElementById('button_four');
const div_four = document.getElementById('div_four');


const active = function (button, div) {
  button.addEventListener('click', function () {
    if (button.innerHTML == 'Ver mas') {
      button.innerHTML = 'Ver menos'
      div.style.display = 'block'
    } else {
      button.innerHTML = 'Ver mas'
      div.style.display = 'none'
    }
  })
}

active(button_one, div_one);
active(button_two, div_two);
active(button_three, div_three);
active(button_four, div_four);