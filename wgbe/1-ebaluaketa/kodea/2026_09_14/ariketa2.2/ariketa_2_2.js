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

alert("4. Ariketa, pisuak sartu kg-etan batura 200kg izan arte");

function pisuak_200_arte () {
    pisua = 0;
    while(pisua < 200) {
        pisua += parseInt(prompt("[Ariketa 4] Orain arteko pisua: " + pisua + "kg-koa da, mesedez sartu pisu gehiago"));
        if(pisua >= 200) {
            alert("[Ariketa 4] oraingo pisua " + pisua + "kg-koa da, 200kg-tik pasa denez ariketa bukatu da");
        }
        else {
            alert("[Ariketa 4] orain arte pisua ez da 200kg-ra iritsi, segi pisua gehitzen");
        }
    }
    document.getElementById("erantzuna4").innerHTML = "<p>Ariketa bukatuta 200kg baino gehiago lortu dira</p>";
}

pisuak_200_arte();

//Ariketa 5: 5.	Teklatutik zenbakiak onartu 0 sartu arte, eta bistaratu sekuentzian zenbat zenbaki bikoiti eta bakoiti sartu diren.
alert("Ariketa 5: Sartu zenbakiak 0 arte, gero kontatzeko zenbat bakoiti eta bikoiti");

function zenbat_bakoiti_bikoiti() {
    let zero_da = false;
    let bakoiti = 0;
    let bikoiti = 0;
    while(!zero_da) {
        let zenbakia = parseInt(prompt("[Ariketa 5] Sartu zenbaki bat:"));
        if (zenbakia == 0) {
            zero_da = true;
        }
        else {
            if (zenbakia % 2 == 0) {
                bikoiti++;
            }
            else {
                bakoiti++;
            }
        }
    }
    document.getElementById("erantzuna5").innerHTML = "<p>Zenbaki bikoiti eta bakoitien kopurua:</p><ul><li>Bakoitiak: " + bakoiti + "</li><li>Bikoitiak: " + bikoiti + "</li></ul>";
}

zenbat_bakoiti_bikoiti();

//Ariketa 6: 6.	Teklatu bidez zenbaki positiboak irakurri eta maximoa eta minimoa idatzi. Gelditu zero edo zenbaki negatibo bat irakurtzean.

alert("Ariketa 6: Zenbaki positiboak sartu zero edo zenbaki negatibo bat sartu ezkero bukatzen da eta bistaratzen da maximoa eta minimoa");

function zenbakiak_maximoak_minimoak () {
    let maximoa = 0;
    let minimoa = "ez";
    let segi = true;
    while(segi) {
        zenbakia = parseInt(prompt("[Ariketa 6] Zenbaki bat sartu"));
        if(zenbakia <= 0) {
            segi = false;
        }
        else {
            if(zenbakia > maximoa) {
                maximoa = zenbakia;
            }
            if (minimoa == "ez") {
                minimoa = zenbakia;
            }
            else {
                if (minimoa > zenbakia) {
                    minimoa = zenbakia;
                }
            }
        }
    }

    document.getElementById("erantzuna6").innerHTML = "<p>Sartutako zenbakietatik minimoak eta maximoak:</p><ul><li>Minimoa: " + minimoa + "</li><li>Maximoa: " + maximoa + "</li></ul>";
}
zenbakiak_maximoak_minimoak();