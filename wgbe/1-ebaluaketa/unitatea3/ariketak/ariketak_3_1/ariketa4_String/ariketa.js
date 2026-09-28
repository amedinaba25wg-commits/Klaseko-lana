function sortu() {
    let izena = new String(document.getElementById("izena").value);
    let abizena = new String(document.getElementById("abizena").value);
    let abizenak = abizena.split(" ");
    let erabiltzailea = izena.charAt(0) + abizenak[0].charAt(0).toUpperCase() + abizenak[0].slice(1).toLowerCase();
    if(abizenak.length > 1) {
        erabiltzailea = erabiltzailea + abizenak[1].charAt(0).toUpperCase();
    }
    erabiltzailea = erabiltzailea + izena.length + abizenak[0].length;
    if (abizenak.length > 1) {
        erabiltzailea = erabiltzailea + abizenak[1].length;
    }
    document.getElementById("erantzuna").innerHTML = "<p>Sortutako erabiltzailearen izena: <strong>" + erabiltzailea + "</strong> da.</p>";
}