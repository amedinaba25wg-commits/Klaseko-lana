//Egitura sortu html-an

html_egitura = "<h1>Ariketak 2.2</h1>";

for(let i = 1; i <= 9; i++) {
    html_egitura += '<div id="ariketa' + i + '"><h1>Ariketa ' + i + '</h1><div id="erantzuna' + i + '"></div></div>';
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

//Ariketa 2: 2.	Lehenengo 10 zenbaki osoen batura egiten duena

function lehenengo_10_zenbakiak_batura() {
    let batura = 0;
    for(let i = 1; i <= 10; i++) {
        batura += i;
    }
    var html_katea = "<p>Lehenengo 10 zenbakien batura da:<br>1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 =";
    html_katea += batura + "</p>";
    document.getElementById("erantzuna2").innerHTML = html_katea;
}

lehenengo_10_zenbakiak_batura();

//Ariketa 3: 3.	Eskatu karaktereak teklatu bidez sartzeko ($, amaitzeko) eta bistaratu sartutako a kopurua (letra larriak edo xeheak)

let katea = prompt("Ariketa 3: Idatzi zerbait A hizkiak idazteko");

function a_kopurua(katea) {
    katea = katea.toUpperCase();
    kopurua = 0;
    for (let i = 0; i < katea.length; i++) {
        if (katea.charAt(i) == 'A') {
            kopurua++;
        }
    }
    document.getElementById("erantzuna3").innerHTML = "<p>katea: '" + katea + "', katean 'A' hizkia " + kopurua + " aldiz ateratzen da.</p>";
}

a_kopurua(katea);

//Ariketa 4: 4.	Pisuak sartzeko eskatzen duen programa, batura 200 kg-tik gorakoa izan arte
