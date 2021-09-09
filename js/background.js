const images = ["0", "1", "2", "3", "4"];

const chosenImage =
  images[Math.floor(Math.random() * images.length)].concat(".jpg");

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
