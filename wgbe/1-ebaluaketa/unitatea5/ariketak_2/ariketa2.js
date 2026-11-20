function zenbakia_idatzi(event) {
    let non = document.getElementById("resultado");
    let zenbakia = event.target.value;
    console.log(zenbakia);
    non.textContent = "" +  non.textContent + zenbakia;
}

let botoiak = document.querySelectorAll("input");
for(let botoia of botoiak) {
    botoia.addEventListener("click", zenbakia_idatzi);
}