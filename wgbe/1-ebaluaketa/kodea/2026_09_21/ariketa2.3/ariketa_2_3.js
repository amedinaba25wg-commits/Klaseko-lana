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
    for(let i = 1; i <= 1000; i++) {
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

//Ariketa 5: Zenbaki lehenen artean
/*
Erabiltzaileari bi zenbaki eskatu eta bien artean dauden zenbaki lehen guztiak bistaratzen dituen programa.
Adibidez: 10 eta 20 → 11, 13, 17, 19. 
*/

function ariketa5() {
    alert("Ariketa 5: Bi zenbaki sartuko dira eta bien artean dauden zenbaki lehenak bistaratuko dira");
    let zenbakia1 = parseInt(prompt("[Ariketa 5] Idatzi zanbaki bat"));
    let zenbakia2 = parseInt(prompt("[Ariketa 5] idatzi beste zenbaki bat"));
    if (zenbakia1 > zenbakia2) {
        let laguntzakoa = zenbakia1;
        zenbakia1 = zenbakia2;
        zenbakia2 = laguntzakoa;
    }
    let zenbaki_lehenak = [];
    for(let i = zenbakia1; i <= zenbakia2; i++) {
        let zenbaki_lehena_da = true;
        for(let j = 2; j < i; j++) {
            if(i % j == 0) {
                zenbaki_lehena_da = false;
            }
        }
        if (zenbaki_lehena_da) {
            zenbaki_lehenak.push(i);
        }
    }
    let html_egitura = "<p>" + zenbakia1 + " - " + zenbakia2 + " zenbakien artean hurrengo zenbaki lehenak daude:<br>";
    for( x in zenbaki_lehenak) {
        html_egitura = html_egitura + zenbaki_lehenak[x] + ", ";
    }
    document.getElementById("erantzuna5").innerHTML = html_egitura;
}

ariketa5();

//Ariketa 6: Zatitzaile gehien dituen zenbakia
/*
Bi zenbaki eskatu eta bien artean zatitzaile gehien dituen zenbakia zein den adierazten duen programa.
Zatitzaile kopurua ere bistaratuko du.
Adibidez: 12 → 6 zatitzaile; 15 → 4 zatitzaile. 
*/

function ariketa6() {
    alert("Ariketa 6: Bi zatitzaile eskatuko dira, eta bien artean zatitzaile gehien dituen zenbakia zein den adieraziko da.");
    let zenbakia1 = parseInt(prompt("[Ariketa 6] Idatzi zenbaki bat"));
    let zenbakia2 = parseInt(prompt("[Ariketa 6] Idatzi beste zenbaki bat"));
    let zatitzaileak1 = new Array();
    let zatitzaileak2 = new Array();
    for(let i = 1; i <= zenbakia1; i++) {
        if(zenbakia1 % i == 0) {
            zatitzaileak1.push(i);
        }
    }
    for (let i = 1; i <= zenbakia2; i++) {
        if(zenbakia2 % i == 0) {
            zatitzaileak2.push(i);
        }
    }
    html_egitura = "<p>" + zenbakia1 + " zenbakia " + zatitzaileak1.length + " zatitzaile ditu, " + zenbakia2 + " zenbakia berriz " + zatitzaileak2.length + " zatitzaile ditu.<br>Beraz ";
    if(zatitzaileak1.length > zatitzaileak2.length == true) {
        html_egitura = html_egitura + zenbakia1 + " zenbakia " + zenbakia2 + " zenbakia baino zatitzaile gehiago ditu.</p>";
    }
    else if(zatitzaileak2.length > zatitzaileak1.length == true) {
        html_egitura = html_egitura + zenbakia2 + " zenbakia " + zenbakia1 + " zenbakia baino zatitzaile gehiago ditu</p>";
    }
    else {
        html_egitura = html_egitura + zenbakia1 + " zenbakia eta " + zenbakia2 + " zenbakia zatitzaile kopuru bera daukate";
    }

    html_egitura = html_egitura + "<ul><li><strong>" + zenbakia1 + " zenbakiaren zatitzaileak dira:</strong> 1";
    for(let x in zatitzaileak1) {
        if(zatitzaileak1[x] != 1) {
            html_egitura = html_egitura + ", " + zatitzaileak1[x];
        }
    }
    html_egitura = html_egitura + ".</li>";
    html_egitura = html_egitura + "<li><strong>" + zenbakia2 + " zenbakiaren zatitzaileak dira:</strong> 1";
    for(let x in zatitzaileak2) {
        if(zatitzaileak2[x] != 1) {
            html_egitura = html_egitura + ", " + zatitzaileak2[x];
        }
    }
    html_egitura = html_egitura + ".</li>";
    document.getElementById("erantzuna6").innerHTML = html_egitura;
}

ariketa6();

//Ariketa 7: Zenbakien sekuentzia
/*
Zenbakiak teklatu bidez eskatu 0 sartu arte. Programak zenbaki hauen batura, batez bestekoa, maximoa eta minimo bistaratuko ditu.
*/
alert("Ariketa 7: Zenbakiak eskatuko dira 0 zenbakia sartu arte, ondoren zenbakien batezbestekoa, maximoa eta minimoa zenbat den jarriko da");
function ariketa7() {
    let batura = 0;
    let minimoa = false;
    let maximoa = false;
    let zero_sartuta = false;
    let kontagailua = 0;
    html_egitura = "Sartutako zenbakiak dira: ";
    while(!zero_sartuta) {
        let zenbakia = parseInt(prompt("[Ariketa 7] Zenbakia bat sartu, 0 zenbakia sartu ezkero programa bukatuko da"));
        if(zenbakia == 0) {
            alert("[Ariketa 7] programan 0 bat sartu da, ondorioz ariketa bukatu da." + html_egitura);
            zero_sartuta = true;
        }
        else {
            batura += zenbakia;
            if(!minimoa) {
                minimoa = zenbakia;
                maximoa = zenbakia;
            }
            else {
                if(zenbakia < minimoa) {
                    minimoa = zenbakia;
                }
                if(zenbakia > maximoa) {
                    maximoa = zenbakia;
                }
            }
            kontagailua++;
            html_egitura = html_egitura + zenbakia + ", ";
            alert("[Ariketa 7] Sartutako zenbakia ez da 0, berez programa segituko du. " + html_egitura);
            let batez_bestekoa = batura / kontagailua;
            alert("[Ariketa 7] Orain arteko datuak: maximoa: " + maximoa + ", minimoa: " + minimoa + ", batez bestekoa: " + batez_bestekoa + ", " + kontagailua + " zenbaki sartu dira orain arte");
        }
    }
    let batez_bestekoa = batura / kontagailua;
    html_egitura = "<p>" + html_egitura + "<br>Zenbakiak sartu ondoren hurrengo datuak dauzkagu:<ul><li><strong>Maximoa:</strong> " + maximoa;
    html_egitura = html_egitura + ".</li><li><strong>Batezbestekoa:</strong> " + batez_bestekoa + ".</li>";
    html_egitura = html_egitura + "<li><strong>Minimoa:</strong> " + minimoa + ".</li>";
    html_egitura = html_egitura + "<li><strong>Sartutako zenbakien kopurua:</strong> " + kontagailua + ".</li></ul>";

    document.getElementById("erantzuna7").innerHTML = html_egitura;
}

ariketa7();

//Ariketa 8: Zenbaki alderantzizkoa
/*
Zenbaki bat eskatu eta zenbaki hori alderantziz bistaratzen duen programa.
Adibidez: 12345 -> 54321
Ez erabili reverse().
*/

function ariketa8() {
    alert("Ariketa 8: Zenbakia bat eskatuko da eta honen alderantzizkoa bistaratuko da");
    let zenbakia = parseInt(prompt("[Ariketa 8] Zenbaki bat sartu alderantzizkoa ikusteko"));
    //Lehendabizi digito kopurua lortu behar dugu
    let digito_kop = 0;
    let alderantzizkoa = 0;
    zenbakia2 = zenbakia;
    for(let i = 1; i <= zenbakia; i *= 10) {
        digito_kop++;
    }
    let j = 1;
    for(let i = 10 ** (--digito_kop); i >= 1; i /= 10) {
        alderantzizkoa += Math.floor(zenbakia / i) % 10 * j;
        j *= 10;
    }
    html_egitura = zenbakia + " zenbakiaren alderantzizkoa " + alderantzizkoa + " zenbakia da.";
    alert(html_egitura);
    html_egitura = "<p>" + html_egitura + "</p>";
    document.getElementById("erantzuna8").innerHTML = html_egitura;
}

ariketa8();

//Ariketa 9: Zenbaki bat beste baten multiploa den
/*
Bi zenbaki eskatu eta lehenengoa bigarrenaren multiploa den adierazi. Ondoren, hala bada, zenbatgarren multiploa den adierazi.
Adibidez: 20 eta 5 → 20 5-en 4. multiploa da. 
*/

function ariketa9() {
    alert("Ariketa 9: Bi zenbaki eskatuko dira, ikusiko da ea lehenengoa bigarrenaren multiplo bat den");
    let zenbakia1 = parseInt(prompt("[Ariketa 9] Lehenengo zenbakia sartu"));
    let zenbakia2 = parseInt(prompt("[Ariketa 9] Bigarren zenbakia sartu"));
    kontagailua = 1;
    if(zenbakia1 % zenbakia2 == 0) {
        for(let i= 1; i < zenbakia2; i++) {
            if(zenbakia1 % i == 0) {
                kontagailua++;
            }
        }
        html_egitura = zenbakia1 + " zenbakia " + zenbakia2 + " zenbakiaren multiplo bat da. " + zenbakia2 + " zenbakia " + zenbakia1 + " zenbakiaren " + kontagailua + ". zatitzailea da.";
    }
    else {
        html_egitura = zenbakia1 + " zenbakia ez da " + zenbakia2 + " zenbakiaren multiploa.";
    }
    alert(html_egitura);
    html_egitura = "<p>" + html_egitura + "</p>";
    document.getElementById("erantzuna9").innerHTML = html_egitura;
}

ariketa9();

//Ariketa 10: Aurreko eta ondorengo zenbaki lehenak.
/*
Programak zenbaki bat eskatuko du, eta zenbaki honen aurretik eta ondoren dauden zenbaki lehenak idatziko ditu. Adibidez, 16 sakatzen bada: Zenbaki lehenak 1,2,3,5,7,11,13,17,… 16ren aurretik 13 dago, eta ondoren 17. Zenbaki lehena baldin bada, 13 adibidez, 11 eta 17 erantzun beharko luke.
*/

function ariketa10() {
    alert("Ariketa 10: Zenbaki bat sartu eta honen aurreko zenbaki lehena eta hurrengo zenbaki lehena bistaratuko dira");
    let zenbakia = parseInt(prompt("[Ariketa 10] Zenbaki bat sartu"));
    let aurrekoa = 1;
    for(let i = 2; i < zenbakia; i++) {
        let lehena_da = true;
        for(let j = 2; j < i; j++) {
            if(i % j == 0) {
                lehena_da = false;
            }
        }
        if(lehena_da) {
            aurrekoa = i;
        }
    }
    let hurrengoa = false;
    let hurrengo_zenbakia = 0;
    for(let i = zenbakia; !hurrengoa; i++) {
        let lehena_da = true;
        for(let j = 2; j < i; j++) {
            if(i % j == 0) {
                lehena_da = false;
            }
        }
        if (lehena_da) {
            hurrengoa = true;
            hurrengo_zenbakia = i;

        }
    }
    html_egitura = zenbakia + " zenbakiaren aurreko lehena " + aurrekoa + " zenbakia da eta hurrengo lehena " + hurrengo_zenbakia + " zenbakia da";
    alert(html_egitura);
    document.getElementById("erantzuna10").innerHTML = "<p>" + html_egitura + "</p>";
}

ariketa10();
