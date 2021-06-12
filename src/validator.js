const validator = {
  isValid: function (cardNumber) {
    let arrayCardNUmber = Array.from(cardNumber).map(i=>Number(i));// esperado string de números[1,2,3,4,....]
    //algoritmo de luhn
    arrayCardNUmber = arrayCardNUmber.reverse(); // array con elementos en orden invertido
    let sum = 0;
    for(let i=0; i<arrayCardNUmber.length; i++){
      if(i%2===1){//posición par
        if((arrayCardNUmber[i]*2)>=10){
          arrayCardNUmber[i] = arrayCardNUmber[i]*2-9;
        }else{
          arrayCardNUmber[i] = arrayCardNUmber[i]*2;
        }
      }
      else{  //posición impar
        arrayCardNUmber[i];
      }
      sum = sum + arrayCardNUmber[i];
    }
    return sum%10===0;
  }, 

  maskify: function(cardNumber){
    let acum = '';
    for(let i = 0; i<(cardNumber.length-4); i++){
        acum = acum + cardNumber[i].replace(/./,'#');
    }
    return acum + cardNumber.slice(cardNumber.length-4);
  },
  
  changeLogo: function(cardNumber){
    if(cardNumber[0]==='4'){
      return 'visa';
    } else if (cardNumber[0]==='5'){
      return 'mastercard';
    } else if (cardNumber[0]==='6'){
      return 'discoveryCard';
    } else if (cardNumber[0]==='3'){
      return 'americanExpress';
    }else{
      return 'something';
    }
  }
};
export default validator;

/*isValid: function (cardNumber) {
    let arrayCardNUmber = Array.from(cardNumber).map(i=>Number(i));
    //Algoritmo de Luhn
    const reverseNumbers = toNumbers.reverse(); // revierto el orden de los numeros del array
    const parElements = reverseNumbers.filter((number, index) => index%2===1); // filtro los numeros con posicion par en un nuevo array
    const parElementsx2 = parElements.map(number => number*2); // duplico cada uno de los elementos*2 del array
    const digitsLessThan10 = parElementsx2.filter(element=>element<10); // filtro los numeros < 10 del array
    const digitsGreaterThan10 = parElementsx2.filter(number => number>=10).map(number => number-9);// filtro los números >= 10 y le resto 9 a cada uno
    const imparElements = reverseNumbers.filter((number, index) => index%2===0); // filtro los numeros con posicion impar en un array
    const sumTotalImparElements = imparElements.reduce(((acum, number) => acum + number),0); //sumo el total de los numeros en posicion impar y redusco el array a un sólo numero  
    const newParElementsGreaterThan10 = digitsGreaterThan10.reduce(((acum,number) => acum + number),0); //sumo los numeros que eran mayores a 10 y redusco el array a un sólo numero
    const newParElementsLessThan10 = digitsLessThan10.reduce(((acum,number) => acum + number),0);// sumo los numeros menores a 10 y lo redusco a un sólo array
    const sumTotalElements = newParElementsGreaterThan10 + newParElementsLessThan10 + sumTotalImparElements; // suma total de los numeros posicion par menores y mayores a 10, y posición impar
    return sumTotalElements%10===0;//en caso el residuo de esa suma sea igual a 0 entonces la tarjeta es valida
  }
  maskify: function(cardNumber){
    const lastFourDigits = cardNumber.slice((cardNumber.length)-4); //string con los últimos 4 digitos
    const firstDigits =cardNumber.slice(0,-4);//string con los primeros digitos - los ultimos 4
    const regExp = /./g;
    const maskifyFirstDigits = firstDigits.replace(regExp,'#'); // reemplazando los primeros digitos por '#'
    const newNumber = maskifyFirstDigits + lastFourDigits; // string final con la enmascaración menos de los últimos 4.
    return newNumber; // string final con la enmascaración menos de los últimos 4.
  }*/