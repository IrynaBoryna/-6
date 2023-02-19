
// const inputRef = document.querySelector('input');
// const spanRef = document.querySelector('span');

// inputRef.addEventListener('input', onInputChange);

// function onInputChange (event) {
//     if (event.currentTarget.value === "") {
//         spanRef.textContent = `Anonimus`
//     } else {
        
//     spanRef.textContent = event.currentTarget.value;
//     } 
// }

const inputRef = document.querySelector('input');
const spanRef = document.querySelector('span');

inputRef.addEventListener('input', onInputChange);

function onInputChange (event) {
    event.currentTarget.value === "" ?  spanRef.textContent = `Anonimus`: spanRef.textContent = event.currentTarget.value;
    } 
