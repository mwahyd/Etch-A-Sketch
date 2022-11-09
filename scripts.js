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

createGrid();

// event listeners
const gridBox = document.querySelectorAll(".box");
const clearButton = document.querySelector("#clear-btn");

gridBox.forEach((box) => {
  box.addEventListener("mousedown", colourBox);
  //   box.addEventListener("mouseover", colourBox);
});

clearButton.addEventListener("click", (e) => {
  clearCanvas(gridBox);
});
