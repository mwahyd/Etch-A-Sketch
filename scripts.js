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
    // box.addEventListener("mousedown", colourBox);
    box.addEventListener("click", colourBox);
  });
}

createGrid();

// event listeners
const gridBox = document.querySelectorAll(".box");
// const clearButton = document.querySelector("#clear-btn");
// const eraseButton = document.querySelector("#eraser");
//  const drawButton = document.querySelector("#draw");
const tools = document.querySelector(".tools");

// drawButton.addEventListener("click", (e) => {
//   draw();
// });

// clearButton.addEventListener("click", (e) => {
//   clearCanvas(gridBox);
// });

// eraseButton.addEventListener("click", (e) => {
//   boxColoured();
// });

let prevSelected = null;
let selected = false;

tools.addEventListener("click", (e) => {
  let btn = e.target;
  if (prevSelected !== null) {
    console.log(prevSelected);
    prevSelected.className = "";
    console.log(prevSelected);
  }
  if (btn.innerText === "Draw") {
    console.log(btn);
    btn.classList.add("selected");
    draw();
  } else if (btn.innerText === "Eraser") {
    // const drawButton = document.querySelector("#draw");
    btn.classList.add("selected");
    boxColoured();
  } else if (btn.innerText === "Clear") {
    btn.classList.add("selected");
    clearCanvas(gridBox);
  }
  prevSelected = e.target;
});

// let prevSelected = "null";
// tools.addEventListener("click", (event) => {
//   let clickedButton = event.target;

//   if (prevSelected !== "null") {
//     prevSelected.classList.remove("selected");
//   }
//   if (clickedButton.innerText === "Draw") {
//     clickedButton.classList.add("selected");
//     gridBox.forEach((box) => {
//       // box.addEventListener("mousedown", colourBox);
//       box.addEventListener("mousedown", (e) => {
//         colourBox(e, clickedButton);
//       });
//     });
//   }
//   if (clickedButton.innerText === "Eraser") {
//     clickedButton.classList.add("selected");
//   }
//   prevSelected = event.target;
// });

// let prevSelected = "null";
// tools.addEventListener("click", (event) => {
//   let FLAG = true;
//   while (FLAG) {
//     let activeButton = null;
//     let clickedButton = event.target;

//     if (prevSelected !== "null") {
//       prevSelected.classList.remove("selected");
//     }

//     if (clickedButton.innerText === "Draw") {
//       clickedButton.classList.add("selected");
//       console.log("You pressed the draw button");
//       draw();
//     } else if (clickedButton.innerText === "Eraser") {
//       clickedButton.classList.add("selected");
//       console.log("You pressed the eraswer button");
//     } else if (clickedButton.innerText === "Clear") {
//       clickedButton.classList.add("selected");
//       console.log("You pressed the clear button");
//     }
//     prevSelected = event.target;
//     FLAG = false;
//   }
// });

// gridBox.forEach((box) => {
//   // box.addEventListener("mousedown", colourBox);
//   box.addEventListener("mouseover", colourBox);
// });
