
let textArea = document.getElementById("descripcion");

function kontatu_karaktereak(event) {
    let zenbakia = parseInt(textArea.value.length);
    let kontagailua = document.getElementById("letras");
    kontagailua.textContent = zenbakia + "/140 caracteres";
}

document.getElementById("descripcion").addEventListener("input", kontatu_karaktereak);