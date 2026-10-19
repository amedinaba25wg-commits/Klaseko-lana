let htmlEgitura = "";
for(let i = 1; i <= 5; i++) {
    htmlEgitura = htmlEgitura + '<div id="ariketa' + i + '"><h2>Ariketa ' + i + '</h2>';
    htmlEgitura = htmlEgitura + '<a href="ariketa' + i + '/ariketa.html"><button>Ikusi Ariketa</button></a></div>';
}

document.getElementById("ariketak").innerHTML = htmlEgitura;