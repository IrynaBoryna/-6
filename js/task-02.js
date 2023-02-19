const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('ul');

const makeList = options => {
  return options.map(option=> {
    const listEl = document.createElement("li");
    const listElText = document.createElement("span");
listElText.textContent = `${option}`;
listEl.prepend(listElText);
listEl.classList.add('.item');
return listEl;
  });
}

const listElements= makeList(ingredients);
list.append(...listElements);

