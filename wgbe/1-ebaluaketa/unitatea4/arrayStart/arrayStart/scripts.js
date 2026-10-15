let games = [
  { title: "The Legend of Zelda", price: 59.99, genre: "Abentura" },
  { title: "Uncharted", price: 19.95, genre: "Abentura" },
  { title: "Tomb Raider", price: 9.99, genre: "Abentura" },
  { title: "Outer Wilds", price: 24.5, genre: "Abentura" },

  { title: "Doom", price: 39.99, genre: "Tiroka" },
  { title: "Halo", price: 29.9, genre: "Tiroka" },
  { title: "Call of Duty", price: 69.99, genre: "Tiroka" },
  { title: "Portal", price: 4.99, genre: "Tiroka" },

  { title: "FIFA 25", price: 79.99, genre: "Kirolak" },
  { title: "NBA 2K", price: 49, genre: "Kirolak" },
  { title: "Rocket League", price: 0, genre: "Kirolak" },
  { title: "Tony Hawk's Pro Skater", price: 14.99, genre: "Kirolak" },

  { title: "Civilization VI", price: 44.99, genre: "Estrategia" },
  { title: "StarCraft", price: 12.5, genre: "Estrategia" },
  { title: "Age of Empires", price: 19.99, genre: "Estrategia" },
  { title: "XCOM 2", price: 54.99, genre: "Estrategia" },
];

const VAT = 0.21; // %21eko BEZa

const table = document.getElementById("gamesTable");
const filterInput = document.getElementById("filter");

/**
 * Jasotzen du: jokoen array bat (list).
 * Egiten du: array berri bat itzultzen du, joko bakoitzaren prezioari BEZa gehituta.
 *            Emaitzak list-en ordena bera du, beraz indizeak bat datoz.
 * Array metodoak: map.
 */
function calculatePricesWithVAT(list) {
  //Aldatu
  return new Array(16).fill(0);
}

/**
 * Jasotzen du: jokoen array bat (list).
 * Egiten du: taula hustu eta berriro marrazten du: goiburua eta joko bakoitzeko
 *            errenkada bat, BEZarekin prezioa eta ezabatzeko botoiarekin.
 * Array metodoak: forEach (goiburua eta jokoak zeharkatzeko).
 *                 calculatePricesWithVAT ere erabiltzen du, eta hark map erabiltzen du.
 */
function createTable(list) {
  table.innerHTML = "";

  const headerRow = document.createElement("tr");
  ["Izena", "Prezioa", "Generoa", "Prezioa BEZarekin", ""].forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  const pricesWithVAT = calculatePricesWithVAT(list);

  list.forEach((game, i) => {
    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = game.title;
    row.appendChild(titleCell);

    const priceCell = document.createElement("td");
    priceCell.textContent = game.price.toFixed(2) + " €";
    row.appendChild(priceCell);

    const genreCell = document.createElement("td");
    genreCell.textContent = game.genre;
    row.appendChild(genreCell);

    const vatCell = document.createElement("td");
    vatCell.textContent = pricesWithVAT[i].toFixed(2) + " €";
    row.appendChild(vatCell);

    const button = document.createElement("button");
    button.textContent = "Ezabatu";
    button.addEventListener("click", () => deleteGame(game));
    const buttonCell = document.createElement("td");
    buttonCell.appendChild(button);
    row.appendChild(buttonCell);

    table.appendChild(row);
  });
}

/**
 * Jasotzen du: ezer ez (iragazkiaren testua irakurtzen du).
 * Egiten du: array berri bat itzultzen du, izenburuak testu hori duten jokoekin soilik,
 *            maiuskulak eta minuskulak bereizi gabe. Ez du games arraya aldatzen.
 * Array metodoak: filter.
 */
function getVisibleGames() {
  //aldatu
  return games;
}

/**
 * Jasotzen du: ezer ez.
 * Egiten du: taula berriro marrazten du, uneko iragazkia gainditzen duten jokoekin.
 * Array metodoak: zuzenean ezer ez (getVisibleGames eta createTable deitzen ditu).
 */
function refresh() {
  createTable(getVisibleGames());
}

/**
 * Jasotzen du: ezabatu nahi den joko objektua (game).
 * Egiten du: bere posizioa bilatzen du eta games arraya berreraikitzen du hura gabe,
 *            aurreko zatia eta ondorengo zatia elkartuz. Gero taula berriro marrazten du.
 * Array metodoak: indexOf, slice eta concat.
 */
function deleteGame(game) {
  //Osatu
  refresh();
}

/**
 * Jasotzen du: title, price eta genre dituen joko objektu berri bat (game).
 * Egiten du: games arrayaren amaieran gehitzen du eta taula berriro marrazten du.
 * Array metodoak: push.
 */
function addGame(game) {
  //Osatu
  refresh();
}

/**
 * Jasotzen du: ordenatzeko propietatearen izena: "title", "genre" edo "price" (field).
 * Egiten du: games arraya propietate horren arabera txikienetik handienera ordenatzen du
 *            eta taula berriro marrazten du. Prezioa zenbaki gisa konparatzen da,
 *            eta testuak localeCompare-rekin.
 * Array metodoak: sort (games array bera aldatzen du).
 */
function sortBy(field) {
  //Osatu
  refresh();
}

/**
 * Jasotzen du: ezer ez.
 * Egiten du: lehenengo jokoa games arrayaren amaierara eramaten du, arraya ezkerrera
 *            biratuz. Arraya hutsik badago, ez du ezer egiten.
 * Array metodoak: shift (lehen elementua kentzeko) eta push (amaieran gehitzeko).
 */
function rotateLeft() {
  //Osatu
  refresh();
}

/**
 * Jasotzen du: ezer ez.
 * Egiten du: azken jokoa games arrayaren hasierara eramaten du, arraya eskuinera
 *            biratuz. Arraya hutsik badago, ez du ezer egiten.
 * Array metodoak: pop (azken elementua kentzeko) eta unshift (hasieran gehitzeko).
 */
function rotateRight() {
  //Osatu
  refresh();
}

document.getElementById("sortTitle").addEventListener("click", () => sortBy("title"));
document.getElementById("sortGenre").addEventListener("click", () => sortBy("genre"));
document.getElementById("sortPrice").addEventListener("click", () => sortBy("price"));
document.getElementById("rotateLeft").addEventListener("click", rotateLeft);
document.getElementById("rotateRight").addEventListener("click", rotateRight);

filterInput.addEventListener("input", refresh);

document.getElementById("addForm").addEventListener("submit", (event) => {
  event.preventDefault();
  addGame({
    title: document.getElementById("newTitle").value.trim(),
    price: parseFloat(document.getElementById("newPrice").value),
    genre: document.getElementById("newGenre").value.trim(),
  });
  event.target.reset();
});

refresh();
