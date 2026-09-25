//Ariketa 1:
function berretzaileak() {
    let berretzailea = document.getElementById("zenbakiaBerretzaile").value;
    let berreketa = Math.pow(Math.E, berretzailea);
    let eZenbakia = new Number(Math.E);
    let berreketa4 = eZenbakia.toPrecision(4);
    let html_egitura = "<p>Sarutako berretzailea: " + berretzailea + " da.</p>";
    html_egitura = html_egitura + "<ul><li>e ber " + berretzailea + " = " + berreketa + "</li>";
    html_egitura = html_egitura + "<ul><li>e ber " + berretzailea + " = " + berreketa4 + "</li>";
    document.getElementById("erantzuna1").innerHTML = html_egitura;
}

//Ariketa 2
function zenbakiSistemak() {
    let zenbakia1Bit = document.getElementById("bitarra").value;
    let zenbakia2oktal = document.getElementById("oktala").value;
    let zenbakia3Hexa = document.getElementById("hexadezimala").value;
    
    //Lehenengo zenbakia
    let zenbakia1 = parseInt(zenbakia1Bit, 2);
    let zenbakia1oktal = zenbakia1.toString(8);
    let zenbakia1Hexa = zenbakia1.toString(16);
    let zenbakia1Tamaina = "";

    //Bigarre zenbakia
    let zenbakia2 = parseInt(zenbakia2oktal, 8);
    let zenbakia2Bit = zenbakia2.toString(2);
    let zenbakia2Hexa = zenbakia2.toString(16);
    let zenbakia2Tamaina = "";

    //Hirugarren zenbakia
    let zenbakia3 = parseInt(zenbakia3Hexa, 16);
    let zenbakia3Bit = zenbakia3.toString(2);
    let zenbakia3oktal = zenbakia3.toString(8);
    let zenbakia3Tamaina = "";

    if (zenbakia1 > zenbakia2 && zenbakia3 > zenbakia1) {
            zenbakia3Tamaina = "HANDIENA";
            zenbakia1Tamaina = "Ertaina";
            zenbakia2Tamaina = "txikiena";
    }
    else if(zenbakia1 > zenbakia3 && zenbakia3 > zenbakia2) {
        zenbakia1Tamaina = "HANDIENA";
        zenbakia3Tamaina = "Ertaina";
        zenbakia2Tamaina = "txikiena";
    }
    else if(zenbakia1 > zenbakia3 && zenbakia2 > zenbakia1) {
        zenbakia1Tamaina = "HANDIENA";
        zenbakia2Tamaina = "Ertaina";
        zenbakia3Tamaina = "txikiena";
    }
    else if (zenbakia1 > zenbakia3) {
        zenbakia2Tamaina = "HANDIENA";
        zenbakia1Tamaina = "Ertaina";
        zenbakia3Tamaina = "txikiena";
    }
    else if(zenbakia2 > zenbakia3) {
        zenbakia2Tamaina = "HANDIENA";
        zenbakia3Tamaina = "Ertaina";
        zenbakia1Tamaina = "txikiena";
    }
    else {
        zenbakia3Tamaina = "HANDIENA";
        zenbakia2Tamaina = "ertaina";
        zenbakia1Tamaina = "txikiena";
    }

    let html_egitura = '<table border="1px"><tr><td>Sartutako zenbakia</td><td>Formatua</td><td>Bitarrean</td><td>oktalean</td><td>Hexadezimalean</td><td>Ordena</td></tr>';
    html_egitura = html_egitura + "<tr><td>" + zenbakia1 + "</td><td>Bitarrean</td><td>" + zenbakia1Bit + "</td><td>" + zenbakia1oktal + "</td><td>#" + zenbakia1Hexa + "</td><td>" + zenbakia1Tamaina + "</td></tr>";
    html_egitura = html_egitura + "<tr><td>" + zenbakia2 + "</td><td>Oktalean</td><td>" + zenbakia2Bit + "</td><td>" + zenbakia2oktal + "</td><td>#" + zenbakia2Hexa + "</td><td>" + zenbakia2Tamaina + "</td></tr>";
    html_egitura = html_egitura + "<tr><td>" + zenbakia3 + "</td><td>Hexadezimalean</td><td>" + zenbakia3Bit + "</td><td>" + zenbakia3oktal + "</td><td>#" + zenbakia3Hexa + "</td><td>" + zenbakia3Tamaina + "</td></tr>";
    document.getElementById("erantzuna2").innerHTML = html_egitura;
}

function baieztatu() {
    let pasahitza = document.getElementById("pasahitza").value;
    
    let letraLarri = false;
    let letraTxiki = false;
    let zenbakia = false;
    let karaktereBerezia = false;
    let erantzuna = "";

    if (pasahitza.length >= 8 && pasahitza.length <= 16) {

        for (let i = 0; i < pasahitza.length; i++) {
            let karakterea = pasahitza[i];

            // Letra larria
            if (karakterea >= "A" && karakterea <= "Z") {
                letraLarri = true;
            }

            // Letra txikia
            if (karakterea >= "a" && karakterea <= "z") {
                letraTxiki = true;
            }

            // Zenbakia
            if (Number(karakterea) >= 0 && Number(karakterea) <= 9) {
                zenbakia = true;
            }

            // Karaktere berezia
            if (karakterea == "-" || karakterea == "_" ||
                karakterea == "@" || karakterea == "#" ||
                karakterea == "$" || karakterea == "%" ||
                karakterea == "&") {
                karaktereBerezia = true;
            }
        }

        if (letraLarri && letraTxiki && zenbakia && karaktereBerezia) {
            erantzuna = "baliozkoa da";
            document.getElementById("erantzuna3").style = "color: green";
        }
        else {
            erantzuna = "ez da baliozkoa";
            document.getElementById("erantzuna3").style = "color: red;";
        }
    }
    else {
        erantzuna = "ez da baliozkoa";
        document.getElementById("erantzuna3").style = "color: red;";
    }

    let html_egitura = "<p>pasahitza " + erantzuna + "</p>";
    document.getElementById("erantzuna3").innerHTML = html_egitura;
}
