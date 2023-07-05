function getPin(){
    const pin = generatePin();
    const pinString = pin+'';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generatePin').addEventListener('click',function(){
   const displayPin = document.getElementById('display-pin');
   displayPin.value = getPin();
});

document.getElementById('calculator').addEventListener('click', function(event){
    const typedNumber = event.target.innerText;
    const typedNumberInput = document.getElementById('typedNumber');
    const previousTypedNumber = typedNumberInput.value;
    
    if(isNaN(typedNumber)){
        if(typedNumber == 'C'){
            typedNumberInput.value = '';
        }
        else if(typedNumber == '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigit = digits.join('');
            typedNumberInput.value =remainingDigit;
        }
    }
    else{
    const newTypedNumber = previousTypedNumber + typedNumber;
    typedNumberInput.value = newTypedNumber;
}

});

document.getElementById('submitBTN').addEventListener('click', function(){
    const generatePinNumber = document.getElementById('display-pin');
    const typedpinNumber = document.getElementById('typedNumber');
    const success =  document.getElementById('success');
    const wrong =  document.getElementById('wrong');

    if(generatePinNumber.value == typedpinNumber.value){
      success.style.display ='block';
      wrong.style.display ='none';
    
    }
    else{
      success.style.display ='none';
      wrong.style.display ='block';
    }
});
const product = 5; 
const price = "7"; 
const subTotal = product * price; 
const tax = subTotal/10; 
const total = subTotal + tax; 


        