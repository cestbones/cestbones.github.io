const fuckingSlowImage = new Image();

fuckingSlowImage.src = 'tim.jpg';
fuckingSlowImage.onload = () => {
  document.body.appendChild(fuckingSlowImage);
};
