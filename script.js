const bouton1 = document.getElementById("monBouton");
const message = document.getElementById("message");
const bouton2 = document.getElementById("monBouton2");

bouton1.addEventListener("click", function () {
  window.location.href = "page.html";
});
bouton2.addEventListener("click", function () {
  window.location.href = "pageNO.html";
});

