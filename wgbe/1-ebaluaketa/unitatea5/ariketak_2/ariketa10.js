let karratua = document.getElementById("laukizuzena");

karratua.classList.add("horia");

function clickMantendu() {
    karratua.classList.add("urdina");
    karratua.classList.remove("horia");
}

function clickKendu() {
    karratua.classList.add("horia");
    karratua.classList.remove("urdina");
}

function mugituKarratua(event) {
    if(karratua.classList.contains("urdina")) {
        karratua.style.position = "absolute";
        karratua.style.left = (event.clientX - karratua.offsetWidth / 2) + "px";
        karratua.style.top = (event.clientY - karratua.offsetHeight / 2) + "px";
    }
}

karratua.addEventListener("mousedown", clickMantendu);
karratua.addEventListener("mouseup", clickKendu);
document.addEventListener("mousemove", mugituKarratua);