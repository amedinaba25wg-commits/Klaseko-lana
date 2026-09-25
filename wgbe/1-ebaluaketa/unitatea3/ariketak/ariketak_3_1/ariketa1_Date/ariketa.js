
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
        if(Urtebetetzea.getDay() == 0) {
            html_egitura = html_egitura + "<li>" + Gaur.getFullYear + "<li>";
        }
    }
    for(let i = Gaur.getFullYear() + 1; i < 2100; i++) {
        let Data = new Date(i, Urtebetetzea.getMonth(), Urtebetetzea.getDate());
        if(Data.getDay() == 0) {
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