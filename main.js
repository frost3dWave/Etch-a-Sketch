const gridContainer = document.querySelector(".grid_container");
const sliderValue = document.querySelector(".slider_value");
const slider = document.querySelector(".slider");

sliderValue.textContent = `${slider.value}x${slider.value}`;

slider.addEventListener("input", () => {
    sliderValue.textContent = `${slider.value}x${slider.value}`;
});
// console.log(slider.value);

// square grids column creation
for (i=0; i<slider.value; i++){
    const squareGrids = document.createElement("div");
    squareGrids.classList.add("squareGrids");
    squareGrids.style.setProperty("width", `calc(37.5rem / ${slider.value})`);
    squareGrids.style.setProperty("height", `calc(37.5rem / ${slider.value})`);
    gridContainer.appendChild(squareGrids);
}

// square grids row creation
// for (j=1; j<slider.value; i++){
//     const rowGrids = document.createElement("div");
//     rowGrids.classList.add("rowGrids");
//     rowGrids.style.setProperty("width", `calc(37.5rem / ${slider.value})`);
//     rowGrids.style.setProperty("height", `calc(37.5rem / ${slider.value})`);
//     squareGrids.appendChild(rowGrids);
// }
