
function koloreaAldatu(event) {
    if(event.type == 'click') {
        event.target.style.color = "blue";
    }
    if(event.type == "dblclick") {
        event.target.style.color = "green";
    }
}

document.querySelector("p").addEventListener("click", koloreaAldatu);
document.querySelector("p").addEventListener("dblclick", koloreaAldatu);