

let inputElementuak = document.querySelectorAll("input");

function enterSakatua(event) {
    if(event.key == "enter") {
        let elementuaTarget;
        let elementua = event.target;
        let aurrekoaDa = false;
        for(let elementubat of inputElementuak) {
            if(aurrekoaDa) {
                elementuaTarget = elementubat;
            }
            if(elementua == elementubat) {
                aurrekoaDa = true;
            }
        }
    }
}

for(let inputElementua of inputElementuak) {
    inputElementua.addEventListener("")
}