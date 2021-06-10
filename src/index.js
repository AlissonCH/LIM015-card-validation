import validator from './validator.js';

const payButton = document.getElementById('payButton');
const inputNumber = document.getElementById('inputNumber');
const errorText = document.getElementById('errorMessage');
const validationIcon = document.getElementById('validationIcon');
//Muestra ventana PopUp
const overLay = document.getElementById('overLay');
const popUp = document.getElementById('popUp');
const closePopUp = document.getElementById('btnCerrarPopUp');
function overLayFx(){
  overLay.classList.add('active');
  popUp.classList.add('active');
}
//cierra venta PopUp
closePopUp.addEventListener('click',function(){
  overLay.classList.remove('active')
  popUp.classList.remove('active');
});
//función que muestra el validador y el maskify
function validateAndMaskify() {
  const cardNumber = inputNumber.value;
  if(/^\d{13,18}$/.test(cardNumber)) {
    errorText.style.display = 'none';
    overLayFx();
    document.getElementById('showMaskify').innerHTML =`La tarjeta que termina en: ${validator.maskify(cardNumber)}`;
    if(validator.isValid(cardNumber)){
      document.getElementById('resultCardValidation').style.color = 'rgb(0,128,0)';
      document.getElementById('resultCardValidation').innerHTML= `ES VÁLIDA`;
    }else{
      document.getElementById('resultCardValidation').style.color = 'rgb(255,99,71)';
      document.getElementById('resultCardValidation').innerHTML= `NO ES VÁLIDA`;
    }
  } else {
    inputNumber.style.borderColor = 'rgb(255,99,71)';
    errorText.style.display = 'block';
  }
}
payButton.addEventListener('click',validateAndMaskify);

//mensaje de error
const showErrorText = () => {
  const cardNumber = inputNumber.value;
  if(/^\d{13,18}$/.test(cardNumber)) {
    inputNumber.style.borderColor = '#3f8585'
    errorText.style.display = 'none';
  }  else {
    inputNumber.style.borderColor = 'rgb(255,99,71)';
    errorText.style.display = 'block';
  }
}
document.getElementById('inputNumber').addEventListener('blur', showErrorText);

//icono "x" limpia el Nº de tarjeta
function numberClean () {
  const errorTextDisplay = errorText.style.display='block';
  const showMaskifyDisplay= document.getElementById('showMaskify').style='block';
  if(errorTextDisplay===true){
    errorText.style.display = 'none';
  } else if(showMaskifyDisplay===true){
    return document.getElementById('showMaskify').style='none';
  } else { 
    const clean = inputNumber.value = '';
    inputNumber.style.borderColor = '#3f8585'
    errorText.style.display = 'none';
    return clean;
  } 
} 
validationIcon.addEventListener('click',numberClean);

//Que muestre el logo cambiado cuando se escriba la primera letra
function showLogo() {
const imgLogo = document.getElementById('logo');
const cardNumber = inputNumber.value;
imgLogo.src = 'img/logos/' + (validator.changeLogo(cardNumber) || 'something')+ '.png';// cambiar la imagen del logo en el DOM
}
inputNumber.addEventListener('change', showLogo);

//Mostrar el input de cardNumber en la tarjeta de imagen
const imageCardNumber = document.getElementById('imageCardNumber');
function showCardNumberImage(e) {
  imageCardNumber.textContent = e.target.value;
}
inputNumber.addEventListener('keyup',showCardNumberImage);





