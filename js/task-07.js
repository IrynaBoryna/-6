const inputRef = document.querySelector('input');
const spanRef = document.querySelector('span');


inputRef.addEventListener('input', onInputFocus);

function onInputFocus () {
        spanRef.style.fontSize = Number(inputRef.value)+"px";

// console.log(inputRef.value);
// console.log(spanRef.style.fontSize);
// console.log(Number(inputRef.value)+"px");
 }


