function potentziaKalkulatu() {
    alert("[Potentzia] 2 zenbaki eskatuko zaizkizu oinarria eta berretzailea kalkuloa egiteko");
    let oinarria = parseInt(prompt("Oinarria:"));
    let berretzailea = parseInt(prompt("Berretzailea:"));
    let html_egitura = "<ul><li>Oinarria: " + oinarria + "</li><li>Berretzailea: " + berretzailea + "</li><li>Erantzuna: " + Math.pow(oinarria, berretzailea) + "</li></ul>";
    document.getElementById("erantzuna1").innerHTML = html_egitura;
}

function erroKarratua() {
    alert("[Errokarratua] Zenbaki bat eskatuko zaizu eta bere errokarratua bistaratuko Da");
    let zenbakia = parseInt(prompt("Zenbakia:"));
    let html_egitura = "<p>Sartutako zenbakia " + zenbakia + " da, eta bere errokarratua " + Math.sqrt(zenbakia) + " da.</p>";
    document.getElementById("erantzuna1").innerHTML = html_egitura;
}

function biribildu() {
    alert("[Biribilketa] Zenbaki bat sartu, ondoren zenbat hamartar kopuru nahi dituzun borobiltzea");
    let zenbakia = parseFloat(prompt("Zenbaki bat sartu '.'-rekin hamartarra non dagoen ezberdinduko da."));
    let hamartarKopurua = parseInt(prompt("Hamartar kopurua sartu"));
    zenbakia_borobiltzeko = zenbakia * 10 ** hamartarKopurua;
    zenbakia_borobiltzeko = Math.floor(zenbakia_borobiltzeko);
    zenbakia = zenbakia_borobiltzeko / parseFloat(10 ** hamartarKopurua);
    html_egitura = "<p>Zenbakia " + hamartarKopurua + " hamartarrekin borobildu da eta " + zenbakia + " zenbakia lortu da</p>";
    document.getElementById("erantzuna1").innerHTML = html_egitura;
}

function trigonometria() {
    alert("[Trigonometria] Angelu bat sartu eta sinu, kosinu eta targentea bueltatuko zaizkizu");
    //Angulo bakarra eskatzen dugunez pentsatuko dugu hirukia angulo batean 90º edukiko dituela hau da aldezuzena dela.
    //Gatazka egon daiteke 90 sartzen bada, hor jarriko da errorre bat
    let anguloa = parseInt(prompt("Anguloa:"));
    let sinua = Math.sin(anguloa);
    let cosinua = Math.cos(anguloa);
    let tangentea = Math.tan(anguloa);
}

function erradioaFuntzioa() {
    let r = document.getElementById("erradioa").value;
    let diametroa = Math.pow(r, 2);
    let zirkunferentzia = r * Math.PI;
    let azalera = Math.PI * Math.pow(r, 2);
    let bolumena = 4/3 * Math.PI * Math.pow(r, 2);
    html_egitura = "<p>Sarutako diametroa: " + r + " da, eta hurrengoa kalkulatu zaio:</p>";
    html_egitura = html_egitura + "<ul><li>Diametroa: " + diametroa + "</li><li>Zirkunferentzia: " + zirkunferentzia + "</li>";
    html_egitura = html_egitura + "<li>Azalera: " + azalera + "</li><li>Bolumena: " + bolumena + "</li></ul>";
    document.getElementById("erantzuna2").innerHTML = html_egitura;
}