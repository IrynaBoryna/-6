const inputRef = document.querySelector('input');


inputRef.addEventListener('blur', onInputBlur);


function onInputBlur (event) {
   
   if ( event.currentTarget.value.length === Number(inputRef.dataset.length)) {
      event.currentTarget.classList.remove("invalid");
      event.currentTarget.classList.add("valid");
      
} else {
   event.currentTarget.classList.remove("valid");
   event.currentTarget.classList.add("invalid");
   
}

}

// Чомусь не працює через додавання атрибуту...
// const inputRef = document.querySelector('input');
// inputRef.addEventListener('blur', onInputBlur);

// function onInputBlur (event) {
//       if ( event.currentTarget.value.length === Number(inputRef.dataset.length)) {
//           inputRef.setAttribute("id","validation-input.valid");
// } else {
//     inputRef.setAttribute("id", "validation-input.invalid");
// }
//       console.log(event.currentTarget.value.length);
// }