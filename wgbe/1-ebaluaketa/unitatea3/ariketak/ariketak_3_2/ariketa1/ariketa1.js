//Botoaia sortu:
const botoia = {
    koloreak : ["red", "blue", "green", "pink", "orange"],
    sortuDiv : function() {
        let zenbakia = Math.random() * 5;
        zenbakia = Math.floor(zenbakia);
        let divBerria = document.createElement("div");
        divBerria.textContent = "DIV BERRIA NAIZ";

        divBerria.style.backgroundColor = this.koloreak[zenbakia];

        document.body.appendChild(divBerria);
    }
}