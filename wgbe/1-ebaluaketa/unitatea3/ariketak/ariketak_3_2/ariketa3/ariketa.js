class Orrialdea {
    leihoa;
    constructor() {
        this.leihoa = window.open("", "", "width=200, height=200");
        let html_egitura = "<center><h1>Sortutako leihoa</h1></center><div id='botoiak'>";
        html_egitura += '<button id="botoiaGorantz" onclick="this.gorantz()">^</button>';
        html_egitura += '<button id="ezkerra"><</button>';
        html_egitura += '<button id="eskuinera">></button>';
        html_egitura += '<button id="beherantz">v</button></div>';
        let estiloak = "button {background-color: lightblue;}";
        estiloak += "div#botoiak {display: grid; grid-template-columns: repeat(2, 1fr); width: 100px; height: 100px; justify-self: center}";
        estiloak += "#botoiaGorantz, #beherantz {grid-column: 1/-1}";
        this.leihoa.document.body.innerHTML = html_egitura;
        let style = this.leihoa.document.createElement("style");
        style.textContent = estiloak;
        this.leihoa.document.head.appendChild(style);
    }
    gorantz() {
        this.leihoa.moveTo(this.leihoa.moveBy(0, 10));
    }
}

function botoiaSakatu() {
    let orrialdea = new Orrialdea();
}