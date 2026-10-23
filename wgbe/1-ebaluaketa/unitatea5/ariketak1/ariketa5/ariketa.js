const linkak = document.querySelectorAll(".linka");

linkak.forEach((linka) => {
    linka.addEventListener("mouseover", (event) => {
        let url = event.currentTarget.href;

        document.getElementById("laukia").value = url;
    });

    linka.addEventListener("mouseleave", (event) => {
        document.getElementById("laukia").value = "";
    })
})
