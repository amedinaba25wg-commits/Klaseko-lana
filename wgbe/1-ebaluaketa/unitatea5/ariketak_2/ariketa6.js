
let denbora;
function sortuOrria(event) {
    let orrialdea = window.open("", "orrialdea", "width=200,height=200");

    let titulua = orrialdea.document.createElement("h1");
    titulua.textContent = "Orrialde berria";
    orrialdea.document.body.appendChild(titulua);

    orrialdea.addEventListener("click", () => berrabiarazi(orrialdea));
    orrialdea.addEventListener("mousemove", () => berrabiarazi(orrialdea));

    berrabiarazi(orrialdea);
}

function berrabiarazi(orrialdea1) {
    clearTimeout(denbora);

    denbora = setTimeout(() => {
        orrialdea1.close();
    }, 5000);
}

let botoia = document.getElementById("botoia");
botoia.addEventListener("click", sortuOrria);