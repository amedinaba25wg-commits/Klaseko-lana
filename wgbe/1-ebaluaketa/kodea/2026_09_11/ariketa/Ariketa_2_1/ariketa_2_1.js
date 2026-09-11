//1.	Idatzi ezazu erabiltzailearen izena prompt batekin eskatzen duen programa bat eta idatzi "Kaixo, erabiltzailea" dioen testu bat.

let izena = prompt("Ariketa 1: Mesedez zure izena idatzi:");
document.getElementById("ariketa_1").innerHTML = "kaixo, " + izena;

//Ariketa 2:
let zenbakia_1 = prompt("Ariketa 2: Idatzi lehenengo zenbakia");
let zenbakia_2 = prompt("Ariketa 2: idatzi bigarren zenbakia");
zenbakia_1 = parseInt(zenbakia_1);
zenbakia_2 = parseInt(zenbakia_2);
let batuketa = zenbakia_1 + zenbakia_2;

let html_kodea = "<td>" + zenbakia_1 + " + " + "</td>" + "<td>" + zenbakia_2 + " = " + "</td>" + "<td>" + batuketa + "</td>";
document.getElementById("ariketa_2").innerHTML = html_kodea;

//Ariketa 3: Idatzi bi zenbaki eskatzen dituen programa bat eta idatzi pantailan zein den handiena.
zenbakia_1 = parseInt(prompt("Ariketa 3: Idatzi zenbaki bat"));
zenbakia_2 = parseInt(prompt("Ariketa 3: Idatzi beste zenbaki bat"));
let erantzuna = "berdinak";

if(zenbakia_1 > zenbakia_2) {
    erantzuna = zenbakia_1;
}
else if(zenbakia_2 > zenbakia_1){
    erantzuna = zenbakia_2;
}

document.getElementById("ariketa_3").innerHTML = "<td>" + zenbakia_1 + "</td><td>" + zenbakia_2 + "</td><td>" + erantzuna + "</td>";

//Ariketa 4: 4.	Idatz ezazu 3 zenbaki eskatzen dituen programa bat, eta idatz ezazu pantailan hiruretan handiena.
zenbakia_1 = parseInt(prompt("Ariketa 4: Idatzi zenbaki bat:"));
zenbakia_2 = parseInt(prompt("Ariketa 4: Idatzi beste zenbaki bat"));
let zenbakia_3 = parseInt(prompt("Idatzi azkeneko zenbakia"));
erantzuna = "berdinak";
if (zenbakia_1 > zenbakia_2 && zenbakia_1 > zenbakia_3) {
    erantzuna = zenbakia_1;
}
else if (zenbakia_2 > zenbakia_3) {
    erantzuna = zenbakia_2;
}
else if( zenbakia_3 > zenbakia_2) {
    erantzuna = zenbakia_3;
}

document.getElementById("ariketa_4").innerHTML = "<td>" + zenbakia_1 + "</td><td>" + zenbakia_2 + "</td><td>" + zenbakia_3 + "</td><td>" + erantzuna + "</td>";


//Ariketa 5: Idatz ezazu zenbaki bat eskatzen duen programa bat, eta adieraz ezazu zenbaki hori 2-rekin zatigarria den.
zenbakia_1 = parseFloat(prompt("Ariketa 5: Idatzi zenbaki bat"));
erantzuna = "bai";
if(zenbakia_1%2 == 1) {
    erantzuna = "ez";
}
document.getElementById("ariketa_5").innerHTML = zenbakia_1 + " zenbakia " + erantzuna + " da zatigarria 2 zenbakiarekin";