const ikasleak = {
  izenak: ["Ane", "Mikel", "Leire", "Jon", "Nerea", "Iker"],
  adina: [16, 17, 16, 18, 17, 16],
  herria: ["Bilbo", "Donostia", "Gasteiz", "Iruñea", "Bilbo", "Eibar"],
};

const ikasleKopurua = ikasleak.izenak.length;

/*
 * ikasleak objektuko datuekin HTML taula sortu eta orrian erakusten du. [v]
 * Argumentuak: ez du argumenturik. [v]
 * Itzulera: ez du baliorik itzultzen (undefined). [v]
 * Erabilitako metodoak: Object.keys() eta document.querySelector(). [v]
 * ezabatuZutabea() deitzen duten botoiak sortu behar ditu [v]
 */
function sortuTaula() {
  let html = '<table style="border: solid black 1px"><tbody><tr>';
  //Goiburuen array bat lortzen da eta taularen goiburua idazten du
  let goiburuak = Object.keys(ikasleak);
  for(let i = 0; i < goiburuak.length; i++) {
    html += "<th>" + goiburuak[i] +'<button onclick="ezabatuZutabea(' + "'" + goiburuak[i] + "'" + ')">Ezabatu</button></th>';
  }
  for(let i = 0; i < ikasleak[goiburuak[0]].length; i++) {
    html += "<tr>";
    for(let j = 0; j < goiburuak.length; j++) {
      html += "<td>" + ikasleak[goiburuak[j]][i] + '</td>';
    }
  }
  //Taularen informazioa osatzen du ikasle bakoitzaren datuekin
  html += "</tbody></table>";
  // Osatu taula ikasleak objektuko datuekin. Adibide gixa, taula.html
  document.querySelector("#table-container").innerHTML = html;
}

/*
 * Emandako zutabea ikasleak objektutik ezabatu eta taula berriz sortzen du. [v]
 * Argumentuak: zutabea (ezabatu beharreko propietatearen izena). [v]
 * Itzulera: ez du baliorik itzultzen (undefined). [v]
 * Erabilitako metodoak: delete [v]
 */
function ezabatuZutabea(zutabea) {
  // Osatu
  delete ikasleak[zutabea];
  sortuTaula();
}

/*
 * Erabiltzaileak idatzitako izenarekin zutabe berri bat gehitzen du, [v]
 * array huts batekin, eta taula berriz sortzen du. [v]
 * Argumentuak: ez du argumenturik. [v]
 * Itzulera: false (inprimakiak orria berriz kargatzea saihesteko). [v]
 * Erabilitako metodoak: document.querySelector() [v]
 */
function gehituZutabea() {
  const input = document.querySelector("#column-name");
  const zutabea = input.value.trim();
  ikasleak[zutabea] = [];

  // Osatu
  sortuTaula();
  return false;
}

sortuTaula();
