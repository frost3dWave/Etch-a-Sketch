const gridContainer = document.querySelector(".grid_container");
const colorPallete = document.querySelector(".color_wheel");
const buttons = document.querySelectorAll("button");
const sliderValue = document.querySelector(".slider_value");
const slider = document.querySelector(".slider");

let gridSize = slider.value;
sliderValue.textContent = `${gridSize}x${gridSize}`;
let currentColor = colorPallete.value;

createGrid(gridSize); //Initial grid creation

slider.addEventListener("input", () => {
    gridSize = slider.value;
    sliderValue.textContent = `${gridSize}x${gridSize}`;
    createGrid(gridSize); 
});

let isDrawing = false;
// function to create the grid
function createGrid(gridSize){
    gridContainer.innerHTML = ""; // clears the existing grid

    for(let i = 0; i < gridSize; i++){ // for creating the column
        for(let j = 0; j < gridSize; j++){ // for creating the rows
            const squareGrids = document.createElement("div");
            squareGrids.classList.add("squareGrids");
            squareGrids.style.setProperty("width", `calc(100% / ${gridSize})`);
            squareGrids.style.setProperty("height", `calc(100% / ${gridSize})`);

            squareGrids.addEventListener("mousedown", () => isDrawing = true);
            squareGrids.addEventListener("mousemove", paint);
            squareGrids.addEventListener("mouseup", () => isDrawing = false);
            gridContainer.appendChild(squareGrids);
        }
        gridContainer.addEventListener("mouseleave", () => isDrawing = false);
    }
}

function paint(e){
    if (isDrawing){
        if (document.querySelector(".active").textContent==="Rainbow mode"){ // check to see if rainbow mode is currently active
            let red = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            let blue = Math.floor(Math.random() * 255);
            e.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
        }else if (document.querySelector(".active").textContent==="Color mode"){ // check to see if color mode is currently active
            currentColor = colorPallete.value;
            e.target.style.backgroundColor = currentColor;
        }else if(document.querySelector(".active").textContent==="Eraser"){ // check to see if eraser mode is currently active
            e.target.style.backgroundColor = `#fefefe`;
        }
    }
}

// making color mode active on default
buttons.forEach(button => {
    if (button.textContent === "Color mode"){
        button.classList.add("active");
    }
});

// to change active mode upon clicking between color & rainbow & eraser buttons
buttons.forEach(button => {
    if (button.textContent !== `Clear`) {
        button.addEventListener("click", () => {
            buttons.forEach(button => {button.classList.remove("active")});
            button.classList.add("active");
        });
    }else{
        button.addEventListener("click", clearGrid);
    }
});

// for clearing the grid 
function clearGrid(){
    const squareGrids = document.querySelectorAll(".squareGrids");
    squareGrids.forEach(cell => {
        cell.style.backgroundColor = "white";
    })

}