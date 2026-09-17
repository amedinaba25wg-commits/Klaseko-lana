//Egitura sortu html-an

html_egitura = "<h1>Ariketak 2.2</h1>";

for(let i = 1; i <= 9; i++) {
    html_egitura += '<div id="ariketa' + i + '"><h1>Ariketa ' + i + "</h1></div>";
}

document.getElementById("ariketak").innerHTML = html_egitura;

//Ariketa 1: 1.	100etik beherako zenbaki bikoitiak bistaratzen dituena

function bistaratu_bikoitiak(hasiera, bukaera, id) {
    let katea = "<p>Zenbaki bikoitiak " + hasiera + "tik " +  bukaera + "ra: ";
    for(let i = hasiera; i <= bukaera; i++) {
        if (i % 2 == 0) {
            katea += i + ", ";
        }
    }
    katea += ";</p>";
    document.getElementById(id).innerHTML = katea;
}

bistaratu_bikoitiak(1, 100, "ariketa1");

