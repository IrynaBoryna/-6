const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



const list = document.querySelector("ul");
// .gallery {
//   display: flex;
//   flex-wrap: wrap;
//   gap: 10px;
// }
// h2 {
//   font-size: 20px;
// }


const makeListImages = 
images.map(image => {
    const listImages = document.createElement("li");

     const  imageElTitle = `<h2>${image.alt}</h2>`;
    listImages.insertAdjacentHTML("afterbegin", imageElTitle);
  
     const imageEl =  `<img src = ${image.url}, alt = ${image.alt}, width = 450>`;
    
  
     listImages.insertAdjacentHTML("beforeend", imageEl);

     console.log(listImages);
     return listImages;

    });
   
    list.append(...makeListImages);
    // list.insertAdjacentHTML("afterbegin", makeListImages);
    //   list.innerHTML = makeListImages;





    // const list = document.querySelector('ul');

// const makeListElem = options => {
//   return options.map(option => {
    
// const listEl = document.createElement("li");

// const imageElTitle = document.createElement("h2");
// //  imageElTitle.textContent = `${option.alt}`;

// const imageEl = document.createElement("img");
// imageEl.src = option.url;
// imageEl.alt = option.alt;
// imageEl.width = 520;

// imageElTitle.insertAdjacentHTML("beforeend",`${option.alt}`);
// listEl.appendChild(imageElTitle);
// listEl.appendChild(imageEl);
// return listEl;

//   });
// }
// console.log(list);

// const listElements= makeListElem(images);
// list.append(...listElements);