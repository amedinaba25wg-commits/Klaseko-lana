
function koloreaAldatu(event) {
    let x = event.clientX;
    let y = event.clientY;

    let zabalera = window.innerWidth;
    let altuera = window.innerHeight;

    let ezkerra = x;
    let eskuina = zabalera - x;
    let goia = y;
    let behea = altuera - y;
    
    let distantziax = Math.min(goia, behea);
    let distantziay = Math.min(ezkerra, eskuina);

    let ehunekoax = distantziax / zabalera * 100;
    let ehunekoay = distantziay / altuera * 100;

    if (ehunekoax <= 10 && ehunekoay <= 10) {
        document.body.style.backgroundColor = "red";
    }
    else if (ehunekoax <= 20 && ehunekoay <= 20) {
        document.body.style.backgroundColor = "yellow";
    }
    else {
        document.body.style.backgroundColor = "green";
    }
}

document.addEventListener("mousemove", koloreaAldatu);
