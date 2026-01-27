const bouton = document.getElementById("monBouton");
const message = document.getElementById("message");

bouton.addEventListener("click", function () {
  message.textContent = "Bravo 🎉 Tu viens de cliquer sur le bouton !";
});
