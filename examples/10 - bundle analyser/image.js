export const addImage = (src, element) => {

  const img = document.createElement("img");
  img.setAttribute("src", src);
  element.appendChild(img);
};
