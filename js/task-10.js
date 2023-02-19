function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector("input");
const createRef = document.querySelector("input[data-create]");
const destroyRef = document.querySelector("input[data-destroy]");
const divBoxesRef = document.querySelector(".div.boxes");
const amount = document.querySelector("input.number.max");

console.log(inputRef);
console.log(createRef);
console.log(destroyRef);
console.log(divBoxesRef);
console.log(amount);
createRef.addEventListener('input', createBoxes);
destroyRef.addEventListener('input', destroyBoxes);


function createBoxes(amount) {
  for (let i = 1; i <= amount.max; i += 1) {
    const createDivs = [];
    // event.currentTarget.classList.add("valid");
   const createDivs[i] = document.createElement("div");
    divBoxesRef.append(createDivs[i]);
    // createDiv.classList.add(."width", )

  }
}