function getRandomHexColor() {
  return  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

}

const btnRef = document.querySelector(".widget button");
const spanRef = document.querySelector("span.color");

btnRef.addEventListener("click", ()  => {

  let colorChange = getRandomHexColor();
  spanRef.textContent = colorChange;
  btnRef.style.backgroundColor = colorChange;
  // console.log(spanRef.textContent, btnRef.style.backgroundColor);
  });

