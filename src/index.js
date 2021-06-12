import validator from './validator.js';
const payButton = document.getElementById('payButton');
const inputNumber = document.getElementById('inputNumber');
const errorText = document.getElementById('errorMessage');
const validationIcon = document.getElementById('validationIcon');
const imageCardNumber = document.getElementById('imageCardNumber');
const imageDate = document.getElementById('imageDate');
const imgLogo = document.getElementById('logo');

//Muestra ventana PopUp
const overLay = document.getElementById('overLay');
const popUp = document.getElementById('popUp');
const closePopUp = document.getElementById('btnCerrarPopUp');
const buyText=document.getElementById('buy');
function overLayFx(){
  overLay.classList.add('active');
  popUp.classList.add('active');
}

//cierra venta PopUp
closePopUp.addEventListener('click',function(){
  overLay.classList.remove('active')
  popUp.classList.remove('active');
});

//función que muestra el validador y el maskify en el popUp
function validateAndMaskify() {
  const cardNumber = inputNumber.value;
  if(/^\d{13,18}$/.test(cardNumber)) {
    errorText.style.display = 'none';
    overLayFx();
    document.getElementById('showMaskify').innerHTML =`La tarjeta que termina en: ${validator.maskify(cardNumber)}`;
    if(validator.isValid(cardNumber)){
      document.getElementById('resultCardValidation').style.color = 'rgb(0,128,0)';
      document.getElementById('resultCardValidation').innerHTML= `ES VÁLIDA`;
      buyText.innerText = 'Su compra se está procesando...';
    }else{
      document.getElementById('resultCardValidation').style.color = 'rgb(255,99,71)';
      document.getElementById('resultCardValidation').innerHTML= `NO ES VÁLIDA`;
      buyText.innerText = 'Por favor vuelva a intentarlo';
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
  if((/^\d{13,18}$/.test(cardNumber))===false) {
    inputNumber.style.borderColor = 'rgb(255,99,71)';
    errorText.style.display = 'block';
    imgLogo.src = 'img/logos/something.png';
  }  else {
    inputNumber.style.borderColor = '#3f8585'
    errorText.style.display = 'none';
  }
}
inputNumber.addEventListener('blur', showErrorText);

//icono "x" limpia el Nº de tarjeta y el mensaje de error
function inputClean () {
  errorText.style.display='none';
  inputNumber.value = '';
  inputNumber.style.borderColor = '#3f8585';
  imageCardNumber.textContent = '';
  imgLogo.src = 'img/logos/something.png';
} 
validationIcon.addEventListener('click',inputClean);

//Que muestre el logo cambiado cuando se escriba la primera letra
function showLogo() {
const cardNumber = inputNumber.value;
imgLogo.src = 'img/logos/' + (validator.changeLogo(cardNumber))+ '.png';// cambiar la imagen del logo en el DOM
}
inputNumber.addEventListener('change', showLogo);

//Mostrar el input Nº de tarjeta en cardImage
function showImageCardNumber(e) {
  imageCardNumber.textContent = e.target.value;
}
inputNumber.addEventListener('keyup',showImageCardNumber);
//Mostrar la fecha en cardImage
function showImageDate(e) {
  imageDate.textContent = e.target.value;
}
const inputDate = document.getElementById('date');
inputDate.addEventListener('keyup',showImageDate);