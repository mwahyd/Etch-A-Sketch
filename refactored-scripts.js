let eraserClicked = false;
let drawClicked = false;
let mouseDown = false;
let mouseUp = false;
let defaultGridSize = 16;

const canvas = document.querySelector(".canvas");
const tools = document.querySelector(".tools");
const drawBtn = document.querySelector("#draw");
const eraserBtn = document.querySelector("#eraser");
const gridSlider = document.querySelector("#grid-slider");
const sliderValue = document.querySelector("#slider-value");

function slider() {
  valPercent = (gridSlider.value / gridSlider.max) * 100;
  gridSlider.style.backgroundImage = `linear-gradient(to right, #9b9b15 ${valPercent}%, #efeeee ${valPercent}%)`;
  sliderValue.textContent = `Grid Size: ${gridSlider.value} x ${gridSlider.value} `;
  let newSliderValue = Number(gridSlider.value);
}

function createGrid() {
  // create a 16 x 16 grid
  for (const x of Array(256).keys()) {
    const div = document.createElement("div");
    div.classList.add("block-style", "box", "hover-effect");
    canvas.appendChild(div);
  }
}

function getbuttonClicked() {
  // check which button was clicked
  tools.addEventListener("click", (event) => {
    const isButton = event.target.nodeName === "BUTTON";
    if (!isButton) {
      return;
    }
    if (event.target.id === "draw") {
      drawClicked = true;
      eraserClicked = false;
      drawButton();
      draw();
    } else if (event.target.id === "eraser") {
      eraserClicked = true;
      drawClicked = false;
      eraserButton();
      erase();
    } else if (event.target.id === "clear-btn") {
      clearButton();
    }
  });
}

function drawButton() {
  if (eraserClicked === false) {
    eraserBtn.classList.remove("selected");
  }
  if (drawClicked === true && eraserClicked === false) {
    drawBtn.classList.add("selected");
  }
}

function eraserButton() {
  if (drawClicked === false) {
    drawBtn.classList.remove("selected");
  }
  if (eraserClicked === true && drawClicked === false) {
    eraserBtn.classList.add("selected");
  }
}

function clearButton() {
  console.log("The clear button was clicked");
  clearCanvas();
}

// refactor code
// function getgridBox() {
// }

function draw() {
  // all the created div boxes
  const gridBox = document.querySelectorAll(".box");
  gridBox.forEach((box) => {
    box.classList.remove("eraser-hover");
    box.addEventListener("click", colourBox);
    // continous draw when holding down mouse
    box.addEventListener("mousedown", (event) => {
      mouseDown = true; // toggle mouseDown true/false
    });
    box.addEventListener("mousemove", (event) => {
      if (mouseDown) {
        colourBox(event);
      }
    });
    box.addEventListener("mouseup", (event) => {
      mouseDown = false;
    });
  });
}

function colourBox(event) {
  const box = event.target;
  if (drawClicked === true && eraserClicked === false) {
    box.classList.add("colour-in");
    box.classList.remove("hover-effect");
  }
}

function erase() {
  const gridBox = document.querySelectorAll(".box");
  gridBox.forEach((box) => {
    if (box.classList.contains("colour-in")) {
      box.classList.add("eraser-hover");
    }
    box.addEventListener("click", eraseBox);
  });
}

function eraseBox(event) {
  const box = event.target;
  if (eraserClicked === true && drawClicked === false) {
    box.classList.remove("colour-in", "eraser-hover");
    box.classList.add("hover-effect");
  }
}

function clearCanvas() {
  const gridBox = document.querySelectorAll(".box");
  gridBox.forEach((box) => {
    if (box.classList.contains("colour-in")) {
      box.classList.remove("colour-in", "eraser-hover");
      box.classList.add("hover-effect");
    }
  });
}

createGrid();
getbuttonClicked();
