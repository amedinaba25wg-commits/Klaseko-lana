const botones = document.querySelectorAll(".linea");

botones.forEach(boton => {
    boton.addEventListener("click", (event) => {
        event.currentTarget.style.backgroundColor = "red";
    });

    boton.addEventListener("mouseenter", (event) => {
        event.currentTarget.style.backgroundColor = "green";
    });

    boton.addEventListener("mouseleave", (event) => {
        event.currentTarget.style.backgroundColor = "blue";
    });
});