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
    let zatitzeko_zenbakia = 10 ** (digitoak -1);
    let batura = 0;
    let html_egitura = "<p>" + zenbakia + " zenbakia sartu da, digitoen batura hurrengoa da:<br>";
    for(let i = zatitzeko_zenbakia; i >= 10; i/=10) {
        let digitoa = Math.floor(zenbakia / i);
        html_egitura += digitoa + " + ";
        batura += digitoa;
        zenbakia %= i;
    }
    batura += zenbakia;
    html_egitura += zenbakia + " = " + batura + "</p>";
    document.getElementById("erantzuna2").innerHTML = html_egitura;
}

ariketa2();

//Ariketa 3: Zenbaki palindromoa
/*
Zenbaki bat eskatu eta atzekoz aurrera eta aurreraka berdina den adierazten duen programa.
Adibidez: 1221 → palindromoa; 1234 → ez da palindromoa. 
*/
function ar3_zifra_kopurua(zenbakia) {
    //funtzio honekin zenbaki baten zifra kopurua neurtuko da
    let digitoak = 1;
    while(zenbakia >= 10) {
        digitoak++;
        zenbakia /= 10;
    }
    return digitoak;
}

function ariketa3() {
    alert("ariketa 3: Zenbaki bat eskatuko zaizu eta palindromoa den edo adierazko da");
    let zenbakia = parseInt(prompt("[Ariketa 3] Zenbaki bat idatzi"));
    let zifra_kopurua = ar3_zifra_kopurua(zenbakia);
    let digitoak = [];
    for(let i = zifra_kopurua; i >= 1; i--) {
        let zatitzailea = 10 ** (i - 1);
        digitoak[zifra_kopurua - i] = Math.floor(zenbakia/zatitzailea);
        zenbakia %= 10;
    }
    let palindromoa = true;
    for(let i = 0; i < zifra_kopurua; i++) {
        if (digitoak[i] != digitoak[zifra_kopurua - i - 1]) {
            palindromoa = false;
        }
    }
    let html_egitura = palindromoa == true ? "<p>Zenbakia palindromoa da</p>" : "<p>Zenbakia ez da palíndromoa</p>";
    document.getElementById("erantzuna3").innerHTML = html_egitura;
}

ariketa3();

//Ariketa 4: Zenbaki perfektuen artean
/*
1etik 1000ra bitarteko zenbaki perfektu guztiak pantailan bistaratzen dituen programa.
*/
function ariketa4() {
    let zenbaki_perfektuak = [];
    let html_egitura = "<ul>";
    for(let i = 1; i <= 100; i++) {
        let zatitzaileak = [];
        for(let j = 1; j < i || j == 1; j++) {
            if(i % j == 0) {
                zatitzaileak.push(j);
            }
        }
        let batura = 0;
        for (let x in zatitzaileak) {
            batura += zatitzaileak[x];
        }
        if (batura == i) {
                html_egitura = html_egitura + "<li>";
            for (let x in zatitzaileak) {
                html_egitura = html_egitura + zatitzaileak[x] + " + ";
            }
            html_egitura = html_egitura + " = " + i + "</li>";
        }
        
    }
    html_egitura = html_egitura + "</ul>";
    document.getElementById("erantzuna4").innerHTML = html_egitura;
}

ariketa4();