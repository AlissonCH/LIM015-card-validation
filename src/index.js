import validator from './validator.js';

const payButton = document.getElementById('payButton');
const inputNumber = document.getElementById('inputNumber');
const errorText = document.getElementById('errorMessage');
const validationIcon = document.getElementById('validationIcon');

//icono "x" limpia el Nº de tarjeta
function numberClean () {
  const clean = inputNumber.value = '';
  errorText.style.display = 'none';
  document.getElementById('showMaskify').style='none';
  return clean;
} 
validationIcon.addEventListener('click',numberClean);

/*Captura el Nº de tarjeta como string, validación de espacios y que el N° de tarjeta admita sólo números, 
en caso sea correcto: asigna number como parámetro de validator();
en caso no: aparece un mensaje de error*/

function sendNumber () {
  const cardNumber = inputNumber.value;
  if(/^\d{13,18}$/.test(cardNumber)) {
    errorText.style.display = 'none';
    return alert(`Esta tarjeta ${validator.isValid(cardNumber)}`);
  } else {
    errorText.style.display = 'block';
  }
}
//botón que ejecuta la función sendNumber al dar click
payButton.addEventListener('click',sendNumber);

const runMaskify = () => {
  const cardNumber = inputNumber.value;
  if(/^\d{13,18}$/.test(cardNumber)) {
    errorText.style.display = 'none';
    document.getElementById('showMaskify').style.display= 'block';
    document.getElementById('showMaskify').innerHTML = validator.maskify(cardNumber);
  }  else {
    errorText.style.display = 'block';
  }
}
document.getElementById('inputNumber').addEventListener('blur', runMaskify)




/*function keyupInput () {
  let numberLength = cardNumber.value.length;
  console.log (numberLength);

  if(numberLength<13) {
    return console.log('El número de tarjeta debe contener por lo menos 13 dígitos');
  
  } else(13<numberLength<18)
    return console.log('ok');
  }
cardNumber.addEventListener('keyup', keyupInput);*/