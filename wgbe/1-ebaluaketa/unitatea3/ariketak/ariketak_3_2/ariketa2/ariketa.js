class Orrialdea {
    url;
    html_egitura;
    nabigatzailea;
    izenburua;
    formKopurua;
    altuera;
    zabalera;
    sakatu() {
        let html_egitura = "<div><ul><li>Orrialdearen URL: <strong>" + this.url + "</strong></li>";
        html_egitura += "<li>Nabigatzailea: <strong>" + this.nabigatzailea + "</strong></li>";
        html_egitura += "<li>Izenburua: <strong>" + this.izenburua + "</strong></li>";
        html_egitura += "<li>Lehioaren tamaina:<ul><li>Altuera: <strong>" + this.altuera + "px</strong></li>";
        html_egitura += "<li>Zabalera: <strong>" + this.zabalera + "px</strong></li></ul></ul>";
        if (window.history.length > 5) {
            html_egitura += "<li>Nabigatzeari uzteko mezua: <strong>Utzi nabigatzen!</strong></li>";
        }
        document.getElementById("kontainer-a").innerHTML = html_egitura;
    }

    constructor() {
        this.url = document.URL;
        this.nabigatzailea = Navigator.platform;
        this.izenburua = document.title;
        this.formKopurua = document.forms.length;
        this.altuera = window.innerHeight;
        this.zabalera = window.innerWidth;
    }
}

let orrialdea1 = new Orrialdea();