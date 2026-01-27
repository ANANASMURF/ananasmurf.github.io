body {
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #f2f2f2;
}

button {
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
}
const bouton = document.getElementById("monBouton");
const message = document.getElementById("message");

bouton.addEventListener("click", function () {
  message.textContent = "Bravo 🎉 Tu viens de cliquer sur le bouton !";
});
