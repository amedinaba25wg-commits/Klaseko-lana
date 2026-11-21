const laukia = document.getElementById("laukizuzena");

let x = window.innerWidth / 2 - 107; // Ajuste txiki bat bestela desplazatuta gelditzen da
let y = window.innerHeight / 2 - 60; //Ajuste hori egin behar da laukiak azalera duelako orduan kentzen zaio zentratuta gelditzeko
let pausoa = 10;
function laukiaMugitu(event) {
    switch(event.key) {
        case "ArrowUp":
            y -= pausoa;
            break
        case "ArrowDown":
            y += pausoa;
            break
        case "ArrowLeft":
            x -= pausoa;
            break
        case "ArrowRight":
            x += pausoa;
            break;
    }

    laukia.style.left = x + "px";
    laukia.style.top = y + "px";
    event.preventDefault();
}

document.addEventListener("keydown", laukiaMugitu);