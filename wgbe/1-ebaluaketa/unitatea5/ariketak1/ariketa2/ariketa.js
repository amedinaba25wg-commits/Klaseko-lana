let kodea = `<!DOCTYPE html>
\n\t<html>
\n\t\t<head>
  \n\t\t\t<title>Eventos</title>
\n\t\t</head>
\n\t\t<body>
   \n\t\t\t<p>Este texto debe aumentar de tamaño</p>
   \n\t\t\t<p>Este texto debe aumentar de tamaño</p>
   \n\t\t\t<p>Este texto debe aumentar de tamaño</p>
\n\t\t</body>
\n\t</html>`;

document.getElementById("kodea").textContent = kodea;

// Erantzuna:
const body1 = document.querySelector("body");
body1.addEventListener("onclick", tamainaHanditu);

function tamainaHanditu() {
    let elementua = document.querySelector("p");
    let tamaina = parseInt(getComputedStyle(elementua).fontSize);
    elementua.style.fontSize = (tamaina + 2) + "px";
}