const ikasleak = {
  izenak: ["Ane", "Mikel", "Leire", "Jon", "Nerea", "Iker"],
  adina: [16, 17, 16, 18, 17, 16],
  herria: ["Bilbo", "Donostia", "Gasteiz", "Iruñea", "Bilbo", "Eibar"],
};

const ikasleKopurua = ikasleak.izenak.length;

/*
 * ikasleak objektuko datuekin HTML taula sortu eta orrian erakusten du. []
 * Argumentuak: ez du argumenturik. [v]
 * Itzulera: ez du baliorik itzultzen (undefined). [v]
 * Erabilitako metodoak: Object.keys() eta document.querySelector().
 * ezabatuZutabea() deitzen duten botoiak sortu behar ditu
 */
function sortuTaula() {
  let html = '<table style="border: solid black 1px"><tbody><tr>';
  let goiburuak = Object.keys(ikasleak);
  for(let i = 0; i < goiburuak.length; i++) {
    html += "<th>" + goiburuak[i] +'<button onclick="ezabatuZutabea(' + "'" + goiburuak[i] + "'" + ')">Ezabatu</button></th>';
  }
  html += "</tbody></table>";
  // Osatu taula ikasleak objektuko datuekin. Adibide gixa, taula.html
  document.querySelector("#table-container").innerHTML = html;
}

/*
 * Emandako zutabea ikasleak objektutik ezabatu eta taula berriz sortzen du.
 * Argumentuak: zutabea (ezabatu beharreko propietatearen izena).
 * Itzulera: ez du baliorik itzultzen (undefined).
 * Erabilitako metodoak: delete
 */
function ezabatuZutabea(zutabea) {
  // Osatu
  sortuTaula();
}

/*
 * Erabiltzaileak idatzitako izenarekin zutabe berri bat gehitzen du,
 * array huts batekin, eta taula berriz sortzen du.
 * Argumentuak: ez du argumenturik.
 * Itzulera: false (inprimakiak orria berriz kargatzea saihesteko).
 * Erabilitako metodoak: document.querySelector()
 */
function gehituZutabea() {
  const input = document.querySelector("#column-name");
  const zutabea = input.value.trim();
  // Osatu
  sortuTaula();
  return false;
}

sortuTaula();
