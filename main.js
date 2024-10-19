const gridContainer = document.querySelector(".grid_container");
const sliderValue = document.querySelector(".slider_value");
const slider = document.querySelector(".slider");

let gridSize = slider.value;
sliderValue.textContent = `${gridSize}x${gridSize}`;

createGrid(gridSize); //Initial grid creation

slider.addEventListener("input", () => {
    gridSize = slider.value;
    sliderValue.textContent = `${gridSize}x${gridSize}`;
    createGrid(gridSize); 
});

// function to create the grid
function createGrid(gridSize){
    gridContainer.innerHTML = ""; // clears the existing grid

    for(let i = 0; i < gridSize; i++){ // for creating the column
        for(let j = 0; j < gridSize; j++){ // for creating the rows
            const squareGrids = document.createElement("div");
            squareGrids.classList.add("squareGrids");
            squareGrids.style.setProperty("width", `calc(100% / ${gridSize})`);
            squareGrids.style.setProperty("height", `calc(100% / ${gridSize})`);
            gridContainer.appendChild(squareGrids);
        }
    }
}
