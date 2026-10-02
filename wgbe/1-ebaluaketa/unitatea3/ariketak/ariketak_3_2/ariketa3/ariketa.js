class Orrialdea {
    leihoa;
    constructor() {
        this.leihoa = window.open("", "", "width=200, height=200");
        let html_egitura = "<center><h3>Sortutako leihoa</h3></center><div id='botoiak'>";
        html_egitura += '<button id="botoiaGorantz">^</button>';
        html_egitura += '<button id="ezkerra"><</button>';
        html_egitura += '<button id="eskuinera">></button>';
        html_egitura += '<button id="beherantz">v</button></div>';
        html_egitura += '<div id="behekoBotoiak"><button id="bider2">x2</button>';
        html_egitura += '<button id="zati2">1/2</button></div>';
        let estiloak = "button {background-color: lightblue;}";
        estiloak += "div#botoiak {display: grid; grid-template-columns: repeat(2, 1fr); width: 100px; height: 100px; justify-self: center}";
        estiloak += "#botoiaGorantz, #beherantz {grid-column: 1/-1}";
        estiloak += "#behekoBotoiak {display: grid; grid-template-columns: repeat(2, 1fr); width: 100px; justify-self: center; margin-top: 20px}";
        this.leihoa.document.body.innerHTML = html_egitura;
        let style = this.leihoa.document.createElement("style");
        style.textContent = estiloak;
        this.leihoa.document.head.appendChild(style);
        this.leihoa.document.getElementById("botoiaGorantz").addEventListener("click", () => this.gorantz());
        this.leihoa.document.getElementById("ezkerra").addEventListener("click", () => this.ezkerraldera());
        this.leihoa.document.getElementById("eskuinera").addEventListener("click", () => this.eskuinaldera());
        this.leihoa.document.getElementById("beherantz").addEventListener("click", () => this.beherantz());
        this.leihoa.document.getElementById("bider2").addEventListener("click", () => this.biderBi());
        this.leihoa.document.getElementById("zati2").addEventListener("click", () => this.zatiBi());
    }
    gorantz() {
        this.leihoa.moveBy(0, -10);
    }
    ezkerraldera() {
        this.leihoa.moveBy(-10, 0);
    }
    eskuinaldera() {
        this.leihoa.moveBy(10, 0);
    }
    beherantz() {
        this.leihoa.moveBy(0, 10);
    }
    biderBi() {
        this.leihoa.resizeBy(this.leihoa.innerWidth, this.leihoa.innerHeight);
    }
    zatiBi() {
        this.leihoa.resizeBy(-this.leihoa.innerWidth/2, -this.leihoa.innerHeight/2);
    }


}

function botoiaSakatu() {
    let orrialdea = new Orrialdea();
}