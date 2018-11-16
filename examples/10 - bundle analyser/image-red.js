import style from './image-red.css';

export const addImage = (src, element) => {

  const img = document.createElement("img");
  img.setAttribute("src", src);
  img.setAttribute('class', style.redBorder);
  element.appendChild(img);
};
