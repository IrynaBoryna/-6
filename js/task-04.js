


const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('span');
  
let counterValue = 0; 

  buttonDecrement.addEventListener('click', function () {
    //  counterValue -=1;
     valueRef.textContent = counterValue -=1;
   
  });

  
  buttonIncrement.addEventListener('click', function () {
    // counterValue +=1;
    valueRef.textContent = counterValue +=1;
    
  });

