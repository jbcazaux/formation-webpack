import style from './image-green.css';

export const addImage = (src, element) => {

  const img = document.createElement("img");
  img.setAttribute("src", src);
  img.setAttribute('class', style.greenBorder);
  element.appendChild(img);
};
