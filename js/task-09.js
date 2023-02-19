function getRandomHexColor() {
  return  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

}

const btnRef = document.querySelector(".widget button");
const spanRef = document.querySelector("span.color");
const bodyRef = document.querySelector("body");

btnRef.addEventListener("click", ()  => {

  let colorChange = getRandomHexColor();

  spanRef.textContent = colorChange;
  bodyRef.style.backgroundColor = colorChange;
  
  });

