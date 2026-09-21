//Html egitura sortu:
let html_egitura = "<h1>Java Script - Errepasoa III</h1>";
for(let i = 1; i <= 10; i++) {
    html_egitura += '<div id="ariketa' + i + ' ariketa"><h2>Ariketa ' + i + '</h2><div id="erantzuna' + i + '"></div></div>';
}
document.getElementById("ariketak").innerHTML = html_egitura;

//Ariketa 1: Zenbaki baten zifra kopurua:
/*
Teklatu bidez zenbaki bat eskatu eta zenbaki horrek zenbat zifra dituen adierazten duen programa.
Adibidez: 4582 → 4 zifra. 
*/

alert("Ariketa 1: Zenbaki bat eskatuko zaizu eta honek zenbat zifra dituen esango zaizu");

function ariketa1() {
    let zenbakia = parseInt(prompt("[Ariketa 1] Idatzi zenbaki bat"));
    zifra_kopurua = 1;
    while( zenbakia >= 10) {
        zifra_kopurua++;
        zenbakia /= 10
    }
    document.getElementById("erantzuna1").innerHTML = "<p>" + zenbakia + " zenbakiak " + zifra_kopurua + " zifra dauzka</p>";
}

ariketa1();

//Ariketa 2: Zenbaki baten zifren batura:
/*
Zenbaki bat eskatu eta haren zifren batura kalkulatu eta pantailan bistaratzen duen programa.
Adibidez: 583 → 5 + 8 + 3 = 16. 
*/

alert("Ariketa 2: Zenbaki bat eskatuko zaizu eta honen zifren batura egingo da");

function ar2_zifra_kopurua(zenbakia) {
    //funtzio honekin zenbaki baten zifra kopurua neurtuko da
    let digitoak = 1;
    while(zenbakia >= 10) {
        digitoak++;
        zenbakia /= 10;
    }
    return digitoak;
}

function ariketa2() {
    let zenbakia = parseInt(prompt("[Ariketa 2] Zenbaki bat sartu eta honen zifra kopuruak batu egingo dira"));
    let digitoak = ar2_zifra_kopurua(zenbakia);
    let zatitzeko_zenbakia = 10 ^ (digitoak -1);
    let batura = 0;
    let html_egitura = "<p>" + zenbakia + " zenbakia sartu da, digitoen batura hurrengoa da:<br>";
    for(let i = zatitzeko_zenbakia; i >= 10; i/10) {
        let digitoa = zenbakia / zatitzeko_zenbakia;
        html_egitura += digitoa + " + ";
        batura += digitoa;
        zenbakia %= zatitzeko_zenbakia;
    }
    batura += zenbakia;
    html_egitura += zenbakia + " = " + batura + "</p>";
    document.getElementById("erantzuna2").innerHTML = html_egitura;
}

ariketa2();
