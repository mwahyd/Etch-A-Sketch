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
  box.classList.add("colour-in");
  box.classList.remove("hover-effect");
}

// TODO: colour in a box when clicked
createGrid();
// event listeners
const gridBox = document.querySelectorAll(".box");
gridBox.forEach((box) => {
  box.addEventListener("mousedown", colourBox);
});
