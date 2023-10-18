let img = null;
const inputImage = document.querySelector("#inputFile");
inputImage.addEventListener("change", () => {
  document.getElementById("labelImge").style.display = "none";
  setTimeout(() => {
    img = document.getElementById("img-prueba");
  }, 2000);
  console.log(img);
}, false);

/* -------------------
 * Botones
 * -------------------
 */

const btnMiniRotarIzq = document.getElementsByClassName("btn-mini")[0];
let grados = 0;
btnMiniRotarIzq.addEventListener("click", () => {
  if (grados != 270) grados += 90;
  else grados = 0;
  img.style.rotate = `${grados}deg`;
});

const btnMiniRotarDer = document.getElementsByClassName("btn-mini")[1];
btnMiniRotarDer.addEventListener("click", () => {
  if (grados != 270) grados -= 90;
  else grados = 0;
  img.style.rotate = `${grados}deg`;
});

let size = 0;
const btnSizeMore = document.getElementById("btnSizeMore");
btnSizeMore.addEventListener("click", () => {
  if (size < 5) {
    size++;
    img.style.scale = `${size}`;
  }
});

const btnSizeLows = document.getElementById("btnSizeLows");
btnSizeLows.addEventListener("click", () => {
  if (size > 1) {
    size--;
    img.style.scale = `${size}`;
  }
});

const btnMoveUp = document.getElementById("btnMoveUp");
const btnMoveDown = document.getElementById("btnMoveDown");
const btnMoveLeft = document.getElementById("btnMoveLeft");
const btnMoveRigth = document.getElementById("btnMoveRigth");
const btnMoveCenter = document.getElementById("btnMoveCenter");

let posX = 0;
let posY = 0;
btnMoveUp.addEventListener("click", () => {
  posY++;
  img.style.translate = `${posX}em ${posY}em`;
});

btnMoveDown.addEventListener("click", () => {
  posY--;
  img.style.translate = `${posX}em ${posY}em`;
});

btnMoveLeft.addEventListener("click", () => {
  posX++;
  img.style.translate = `${posX}em ${posY}em`;
});

btnMoveRigth.addEventListener("click", () => {
  posX--;
  img.style.translate = `${posX}em ${posY}em`;
});

btnMoveCenter.addEventListener("click", () => {
  posX = 0;
  posY = 0;
  img.style.translate = `${posX}em ${posY}em`;
  size = 1;
  img.style.scale = `${size}`;

  grados = 0;
  img.style.rotate = `${grados}deg`;
});

const fullscreen = document.getElementById("fullScreen");
fullscreen.addEventListener("click", (e) => {
  open(img.currentSrc);
});

/*
download="img/image.png"
 * -------------------
 * Filtro
 * -------------------
 */

const rangeBlur = document.getElementById("rangeBlur");
rangeBlur.addEventListener("click", refresStyleFilter);

const rangeBrightness = document.getElementById("rangeBrightness");
rangeBrightness.addEventListener("click", refresStyleFilter);

const rangeConstrast = document.getElementById("rangeConstrast");
rangeConstrast.addEventListener("click", refresStyleFilter);

const rangeGrayscale = document.getElementById("rangeGrayscale");
rangeGrayscale.addEventListener("click", refresStyleFilter);

const rangeHueRotate = document.getElementById("rangeHueRotate");
rangeHueRotate.addEventListener("click", refresStyleFilter);

const rangeSaturate = document.getElementById("rangeSaturate");
rangeSaturate.addEventListener("click", refresStyleFilter);

const rangeSepia = document.getElementById("rangeSepia");
rangeSepia.addEventListener("click", refresStyleFilter);

// console.log(rangeBlur);
// console.log(rangeBrightness);
// console.log(rangeConstrast);
// console.log(rangeGrayscale);
// console.log(rangeHueRotate);
// console.log(rangeSaturate);
// console.log(rangeSepia);

function refresStyleFilter() {
  const blur = `blur(${rangeBlur.value / 1000}em)`;
  const brightness = ` brightness(${rangeBrightness.value / 50})`;
  const contrast = `contrast(${rangeConstrast.value / 50})`;
  const grayscale = `grayscale(${rangeGrayscale.value / 100})`;
  const hueRotate = `hue-rotate(${rangeHueRotate.value * 3.6}deg)`;
  const saturate = `saturate(${rangeSaturate.value / 50})`;
  const sepia = `sepia(${rangeSepia.value / 100})`;

  img.style.filter =
    `${blur} ${brightness} ${contrast} ${grayscale} ${hueRotate} ${saturate} ${sepia}`;
}

const resetFilter = document.getElementById("resetFilter");
resetFilter.addEventListener("click", () => {
  console.log("img : " + img);
  rangeBlur.value = 0;
  rangeBrightness.value = 50;
  rangeConstrast.value = 50;
  rangeGrayscale.value = 0;
  rangeHueRotate.value = 0;
  rangeSaturate.value = 50;
  rangeSepia.value = 0;
  refresStyleFilter();
});


const downLoad = document.getElementById("download");
downLoad.addEventListener("click", () => {
  alert("esta funcion esta en desarrollo")
});
