
function koloreaAldatu(event) {
    let x = event.clientX;
    let y = event.clientY;

    let zabalera = window.innerWidth;
    let altuera = window.innerHeight;

    let ezkerra = x;
    let eskuina = zabalera - x;
    let goia = y;
    let behea = altuera - y;

    let distantzia = Math.min(ezkerra, eskuina, goia, behea);

    let portzentajea = distantzia / Math.min(zabalera, altuera) * 100;

    if (portzentajea <= 10) {
        document.body.style.backgroundColor = "red";
    }
    else if (portzentajea <= 20) {
        document.body.style.backgroundColor = "yellow";
    }
    else {
        document.body.style.backgroundColor = "green";
    }
}

document.addEventListener("mousemove", koloreaAldatu);
