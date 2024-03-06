document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut() {
    let kirjautunut = "kylla";
    if (kirjautunut === "kylla") {
         document.getElementById("Tervetulo_teksti").textContent += "";
    }
}
function kirjaudu(){
    Localstorage.setItem("nimi");
    Localstorage.setItem("salasana");
}
