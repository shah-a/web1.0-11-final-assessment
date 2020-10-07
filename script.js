const sizeInput = document.querySelector("#input-size");
const fontInput = document.querySelector("#select-font");
const colorInput = document.querySelector("#input-color");
const bgColorInput = document.querySelector("#input-bg-color");
const textInput = document.querySelector("#enter-text");

const showSize = document.querySelector("#show-size");
const showFont = document.querySelector("#show-font");
const showColor = document.querySelector("#show-color");
const showBgColor = document.querySelector("#show-bg-color");
const showText = document.querySelector("#display");

function updateSize() {
  const sizeValue = sizeInput.value;
  showSize.innerHTML = `${sizeValue}`;
  showText.style.fontSize = `${sizeValue}px`;
}

function updateFont() {
  const fontValue = fontInput.value;
  showFont.innerHTML = `${fontValue}`;
  showText.style.fontFamily = `${fontValue}`;
}

function updateColor() {
  const colorValue = colorInput.value;
  showColor.innerHTML = `${colorValue}`;
  showText.style.color = `${colorValue}`;
}

function updateBgColor() {
  const bgColorValue = bgColorInput.value;
  showBgColor.innerHTML = `${bgColorValue}`;
  showText.style.backgroundColor = `${bgColorValue}`;
}

function updateText() {
  const textValue = textInput.value;
  showText.innerHTML = `${textValue}`;
}

sizeInput.addEventListener("input", updateSize);
fontInput.addEventListener("input", updateFont);
colorInput.addEventListener("input", updateColor);
bgColorInput.addEventListener("input", updateBgColor);
textInput.addEventListener("input", updateText);
