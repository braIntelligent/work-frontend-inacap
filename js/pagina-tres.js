const input_name = document.getElementById('name');
const input_email = document.getElementById('email');
const input_number = document.getElementById('number');


const button = document.getElementById('submit');

let paragraph = ''

button.addEventListener('click', function (e) {
  const value_name = input_name.value;
  const value_email = input_email.value;
  const value_number = input_number.value;

  if (value_name.length >= 4 && value_email.includes('@gmail.com') || value_email.includes('@hotmail.com') && value_number.length == 9) {
    button.href = "./pagina-cuatro.html"
  } else {
    if (!paragraph) {
      paragraph = document.createElement('p');
      paragraph.style.margin = '0'
      paragraph.textContent = 'Ingresa campos validos.';
      const div = document.getElementById('dive');
      div.appendChild(paragraph);
    };
  }
});



