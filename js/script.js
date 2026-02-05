const bouton1 = document.getElementById("monBouton");
const bouton2 = document.getElementById("monBouton2");
const bouton3 = document.getElementById("monBoutontest");
const bouton4 = document.getElementById("monBoutonBacktomenu");
const bouton4 = document.getElementById("Icedodolink");
const logo = document.getElementById("logoBtn");
if (bouton1) {
  bouton1.addEventListener("click", function () {
    window.location.href = "page.html";
  });
}

if (bouton2) {
  bouton2.addEventListener("click", function () {
    window.location.href = "pageno.html";
  });
}

if (bouton3) {
  bouton3.addEventListener("click", function () {
    window.location.href = "icedodo.html";
  });
}

if (bouton4) {
  bouton4.addEventListener("click", function () {
    window.location.href = "index.html";
  });
}
if (bouton5) {
  bouton5.addEventListener("click", function () {
    window.location.href = ;
  });
}
logo.addEventListener("click", function () {
  window.location.href = "index.html";
});
