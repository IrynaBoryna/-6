
const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);


for (const category of categories) {
   const categoryTitle = category.firstElementChild;
const elements = category.lastElementChild.children;


console.log(`Category: ${categoryTitle.textContent}`);
console.log(`Elements: ${elements.length}`);
};
