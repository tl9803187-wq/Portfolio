const canvas = document.getElementById("quadro");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "Biblioteca.png";

img.onload = () => {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};


