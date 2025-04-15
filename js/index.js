const button_one = document.getElementById('button_one');
const img_one = document.getElementById('img_one');

const button_two = document.getElementById('button_two')
const img_two = document.getElementById('img_two');

const button_three = document.getElementById('button_three')
const img_three = document.getElementById('img_three');

const button_four = document.getElementById('button_four')
const img_four = document.getElementById('img_four');

const button_five = document.getElementById('button_five')
const img_five = document.getElementById('img_five');

const button_six = document.getElementById('button_six')
const img_six = document.getElementById('img_six');

const button_seven = document.getElementById('button_seven')
const img_seven = document.getElementById('img_seven');

const button_eight = document.getElementById('button_eight')
const img_eight = document.getElementById('img_eight');

const button_nine = document.getElementById('button_nine')
const img_nine = document.getElementById('img_nine');


const active = function (button, img) {
  button.addEventListener('click', function () {
    if (button.innerHTML == 'Ocultar') {
      button.innerHTML = 'Mostrar'
      img.style.display = 'none'
    } else {
      button.innerHTML = 'Ocultar'
      img.style.display = 'block'
    }
  })
}

active(button_one, img_one)
active(button_two, img_two)
active(button_three, img_three)
active(button_four, img_four)
active(button_five, img_five)
active(button_six, img_six)
active(button_seven, img_seven)
active(button_eight, img_eight)
active(button_nine, img_nine)
