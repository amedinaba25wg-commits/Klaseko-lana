// Erantzuna:
const body1 = document.querySelector("body");
body1.addEventListener("click", tamainaHanditu);

function tamainaHanditu() {
    let elementua = document.querySelector("body");
    let tamaina = parseInt(getComputedStyle(elementua).fontSize);
    elementua.style.fontSize = (tamaina + 2) + "px";
}