document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut() {
    let kirjautunut = "kylla";
    if (kirjautunut === "kylla") {
         document.getElementById("Tervetulo_teksti").textContent += "";
    }
}
function kirjaudu(){
    Unimi = document.getElementById("nimi").value;
    Usalasana = document.getElementById("salasana").value;
    console.log(Unimi + " " + Usalasana);
    localStorage.setItem("nimi", Unimi);
    localStorage.setItem("salasana", Usalasana);
    //redirect();
    window.location.href="index.html";
}
function redirect(){
    window.location.href="index.html";
}
function redirect(){
    window.location.href="index.html";
}
