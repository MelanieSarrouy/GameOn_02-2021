function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements _____________________________________________________
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn"); // bouton d'inscription
let goButton = document.getElementById("button"); // bouton validation
const formData = document.querySelectorAll(".formData"); // Toutes les div avec input
const form = document.getElementById("form"); // le formulaire

// launch modal event ________________________________________________
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// launch closeModal event __________________________________________
let close = document.getElementById("close"); // X fermeture de la modale
close.addEventListener("click", closeModal);

// function closeModal
function closeModal() {
  modalbg.style.display = "none";
}

// launch validate event ____________________________________________
goButton.addEventListener("click", validate);

// launch function validate

function validate(event) {  
  const modalBody = document.querySelector(".modal-body");
  const newDiv = document.createElement("div");
  modalBody.appendChild(newDiv);
  modalBody.classList.add("divValidate");
  const message = document.createElement("p");
  newDiv.appendChild(message);
  message.classList.add("pValidate");
  event.preventDefault();
  event.stopPropagation();
  modalBody.replaceChild(newDiv, form);
  message.innerHTML = "Merci, votre réservation a bien été enregistrée !<br/> <br/>The Show Must GameOn !";
  newDiv.appendChild(goButton);
  goButton.classList.add("buttonClose");
  goButton.addEventListener("click", closeModal);
  goButton.value = "Fermer";
}

// launch function validateFirstName ______________________________
function validateFirstName() {
  const firstName = document.getElementById("first");
  if (firstName.length < 2) {
    let error = document.createElement("p");
    firstName.appendChild("error");
    error.innerText = "Vous devez remplir au moins 2 caractères"
  }
}



//

