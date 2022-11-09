// query selectors
const gridContainer = document.querySelector(".canvas");

// elements created
function createGrid() {
  // create a 16x16 grid
  for (const x of Array(256).keys()) {
    const div = document.createElement("div");
    div.classList.add("block-style");
    console.log(div);
    gridContainer.appendChild(div);
  }
}

createGrid();
