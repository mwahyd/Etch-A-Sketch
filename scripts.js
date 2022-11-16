// query selectors
const gridContainer = document.querySelector(".canvas");

// elements created
function createGrid() {
  // create a 16x16 grid
  for (const x of Array(256).keys()) {
    const div = document.createElement("div");
    div.classList.add("block-style", "box", "hover-effect");
    gridContainer.appendChild(div);
  }
}

function colourBox(event) {
  const box = event.target;
  console.log(box);
  box.classList.add("colour-in");
  box.classList.remove("hover-effect");
}

function clearCanvas(list) {
  list.forEach((item) => {
    if (item.classList.contains("colour-in")) {
      item.classList.remove("colour-in");
    }
  });
}
function boxColoured(event) {
  console.log("You clicked the erase button");
  gridBox.forEach((box) => {
    box.addEventListener("mouseenter", (e) => {
      if (box.classList.contains("colour-in")) {
        console.log("This box is coloured");
        console.log(e.target);
        box.classList.add("eraser-hover");

        box.addEventListener("click", (e) => {
          erase(e.target);
        });
      }
    });
  });
}

function erase(targetBox) {
  targetBox.classList.remove("colour-in", "eraser-hover");
  targetBox.classList.add("box", "hover-effect");
}

function draw() {
  gridBox.forEach((box) => {
    box.addEventListener("mousedown", colourBox);
    // box.addEventListener("mouseover", colourBox);
  });
}

createGrid();

// event listeners
const gridBox = document.querySelectorAll(".box");
const clearButton = document.querySelector("#clear-btn");
const eraseButton = document.querySelector("#eraser");
const drawButton = document.querySelector("#draw");

drawButton.addEventListener("click", (e) => {
  draw();
});

clearButton.addEventListener("click", (e) => {
  clearCanvas(gridBox);
});

eraseButton.addEventListener("click", (e) => {
  boxColoured();
});
