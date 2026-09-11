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

//Ariketa 6: Idatzi esaldi bat eskatzen duen programa bat non agertzen diren bokalak idazten dituen 
let esaldia = prompt("Ariketa 6: Idatzi esaldi bat");
let bokalak = "";
let bokalKopurua = 0;
for(i of esaldia) {
  if(i == "a" || i == "A" || i == "e" || i == "E" || i == "i" || i == "I" || i == "o" || i == "O" || i == "u" || i == "U") {
    bokalKopurua++;
  }
}

document.getElementById("ariketa_6").innerHTML = "<td>" + esaldia + "</td><td>" + bokalKopurua + "</td>";

//Ariketa 7: 7.	Idatzi zenbaki bat eskatzen duen programa bat, eta esan ea 2, 3, 5 edo 7 zenbakiz zatigarria den (lauretako batengatik bada, egiaztatu besterik ez da egin behar).
zenbakia_1 = parseInt(prompt("Ariketa 7: Idatzi zenbaki bat"));
let zatitzaile_array = ["Bai", "Bai", "Bai", "Bai"];
if(zenbakia_1%2 != 0) {
    zatitzaile_array[0] = "Ez";
}
if(zenbakia_1%3 != 0) {
    zatitzaile_array[1] = "Ez";
}
if(zenbakia_1%5 != 0) {
    zatitzaile_array[2] = "Ez";
}
if(zenbakia_1%7 != 0) {
    zatitzaile_array[3] = "Ez";
}
html_kodea = "<td>" + zenbakia_1 + "</td>";
for(i of zatitzaile_array) {
    html_kodea += "<td>" + i + "</td>";
}

document.getElementById("ariketa_7").innerHTML = html_kodea;

//Ariketa 8: 8.	Gehitu aurreko programari: esan diezagula zein zebakirengatik den zatigarria (zatigarriak diren zenbaki guztiak esan behar dira)
//Jadanik eginda 7-arekin

//Ariketa 9: zenbaki jakin baten zatitzaileak pantailan idatziko dituen programa bat
zenbakia_1 = parseInt(prompt("Ariketa 9: Idatzi zenbaki bat"));
let zatitzaileak = [];
