
//Ariketa 1: Kurtsokoa
/*
function gaurtik_noiz_arte(data) {
    //data aldagaia hartuko du noiz arteko data.
    let gaur = data;
    let kurtsoBukaera = new Date(2027, 6, 25);
    //Definituko dugu array bat hilabete bakoitzak dauzkan egunekin
    let hilabeteen_egunak = new [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    //Lehenango begiratuko da ea urte berdinean dauden biak
    let urteberean = (gaur.getFullYear() == kurtsoBukaera.getFullYear()) ? true : false;
    let egunKopuru = 0;
    //Urte berean baldinbagaude:
    if(urteberean) {
        for(let i = gaur.getMonth(); i < kurtsoBukaera.getMonth(); i++) {
            egunKopuru += hilabeteen_egunak[i];
        }
    }
    

    let html_egitura = "<p>" + egunKopuru + " Egun daude</p>";
    return html_egitura;
}

function ariketa1() {
    let data = new Date();
    document.getElementById("erantzuna1").innerHTML = gaurtik_noiz_arte(data);
}
ariketa1();
*/

//Ariketa 2: urtebetetzea kalkulatzea 2100 zenbat aldiz izango den igandea.
function zenbat_falta_urtebetetzea(hilabetea, eguna) {
    let Aurten = new Date()
    let Urtebetetzea = new Date(Aurten.getFullYear(), hilabetea, eguna);
    let Gaur = new Date();
    html_egitura = "<p>Zure urtebetetzea igandean da hurrengo urteetan:</p><ul>";
    if(Urtebetetzea.getMonth() > Gaur.getMonth() || Urtebetetzea.getMonth() == Gaur.getMonth() && Urtebetetzea.getDate() >= Gaur.getDate()) {
        if(Urtebetetzea.getDay() == 6) {
            html_egitura = html_egitura + "<li>" + Gaur.getFullYear + "<li>";
        }
    }
    for(let i = Gaur.getFullYear() + 1; i < 2100; i++) {
        let Data = new Date(i, Urtebetetzea.getMonth(), Urtebetetzea.getDate());
        if(Data.getDay() == 6) {
            html_egitura = html_egitura + "<li>" + Data.getFullYear() + "</li>";
        }
    }
    html_egitura = html_egitura + "</ul>";
    return html_egitura;
}

function inprimatu_urtebetetzeak() {
    let hilabetea = document.getElementById("urtebetetze_hilabetea").value;
    hilabetea--;
    let eguna = document.getElementById("urtebetetze_eguna").value;
    eguna--;
    let html_egitura = zenbat_falta_urtebetetzea(hilabetea, eguna);
    document.getElementById("erantzuna2").innerHTML = html_egitura;
}

//Ariketa 3: Gaurko data formatu ezberdinetan:
function gaurko_data() {
    Data = new Date();
    return Data;
}

function data_formatua1(Data) {
    return Data.getFullYear() + "/" + (Data.getMonth() + 1) + "/" + Data.getDate();
}

function data_formatua2(Data) {
        let hilabeteak = ['urtarrila', 'otsaila', 'martxoa', 'apirila', 'maiatza', 'ekaina',
        'uztaila', 'abuztua', 'iraila', 'urria', 'azaroa', 'abendua'];
        let hilabetea = hilabeteak[Data.getMonth()];
    return Data.getFullYear() + "-eko " + hilabetea + " " + Data.getDate() + "a";
}

function data_formatua3(Data) {
        let hilabeteak = ['urtarrila', 'otsaila', 'martxoa', 'apirila', 'maiatza', 'ekaina',
        'uztaila', 'abuztua', 'iraila', 'urria', 'azaroa', 'abendua'];
        let hilabetea = hilabeteak[Data.getMonth()];
    return Data.getFullYear() + "-eko " + Data.getDate() + ". " + hilabetea;
}

function inprimatu_data(Data) {
    let balioa = document.querySelector('input[name="formatua"]:checked').value;
    let html_egitura = "<p>";
    if(balioa == "formatua1") {
        html_egitura = html_egitura + data_formatua1(Data);
    }
    else if (balioa == "formatua2") {
        html_egitura = html_egitura + data_formatua2(Data);
    }
    else if (balioa == "formatua3") {
        html_egitura = html_egitura + data_formatua3(Data);
    }
    else {
        html_egitura = html_egitura + "Errore bat egon da";
    }
    html_egitura = html_egitura + "</p>";
    document.getElementById("erantzuna3").innerHTML = html_egitura;
}
function ariketa3_funtzioa() {
    inprimatu_data(gaurko_data());
}