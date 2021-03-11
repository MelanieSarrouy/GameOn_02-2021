// Function editNav __________________________________________________
function editNav() {
  var x = document.getElementById("mainNavBar");
  if (x.className === "main-navbar") {
    x.className += " navVisible";
  } else {
    x.className = "main-navbar";
  }
}
// DOM Elements _____________________________________________________
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn"); // boutons de lancement de la modale
let goButton = document.getElementById("button"); // bouton validation

const form = document.getElementById("form"); // le formulaire
const formData = document.getElementsByClassName("formData"); // Toutes les div formData avec input
let inputRadioLocation = document.getElementsByName("location"); // Tous les inputs type radio
const agree = document.getElementById("checkbox1"); // input agree

const cross = document.getElementById("close"); // X fermeture de la modale

const modalBody = document.querySelector(".modal-body"); // div du contenu de la modale
const newDiv = document.createElement("div"); // creation d'une newDiv pour le message de validation
const message = document.createElement("p"); // création d'un paragraphe appelé message

const pErrorFirstName = document.createElement("p"); // creation du p error FirstName
const pErrorLastName = document.createElement("p"); // creation du p error LastName
const pErrorEmail = document.createElement("p"); // creation du p error Email
const pErrorBirthDate = document.createElement("p");// creation du p error BirthDate
const pErrorRadio = document.createElement("p"); // creation du p error Radio
const pErrorCheckbox = document.createElement("p"); // creation du p error Checkbox

const firstName = document.getElementById("firstname"); // ajout input firstname dans le DOM
const lastName = document.getElementById("lastname"); // ajout input lastname dans le DOM
const eMail = document.getElementById("email"); // ajout input email dans le DOM
const birthDate = document.getElementById("birthdate"); // ajout input birthdate dans le DOM

// function launchModal ________________________________________________
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
  modalbg.style.display = "block";
}
// function closeModal _________________________________________________
cross.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
}
// function thanckYou __________________________________________________
function thanckYou() {  
  modalBody.appendChild(newDiv); // newDiv est enfant de modalBody
  modalBody.appendChild(form); // form est enfant de modalBody
  modalBody.classList.add("divValidate");// attribution de la classe "divValidate" à modalBody
  newDiv.appendChild(message);// message est un enfant de newDiv
  message.classList.add("pValidate");// attribution de la classe "pValidate" à message
  modalBody.replaceChild(newDiv, form);// form est remplacé par newDiv
  message.innerHTML = "Merci " + firstName.value + ", votre réservation a bien été enregistrée !<br/> <br/>The Show Must GameOn !";// contenu de message
  newDiv.appendChild(goButton);// goButton est un enfant de newDiv
  goButton.classList.add("buttonClose");// attribution de la classe "buttonClose" à goButton
  goButton.value = "Fermer";// changement de la valeur de l'attr value de goButton

  goButton.addEventListener("click", closeModal);// écoute de l'event "click" sur goButton / action: closeModal
}
// function testFirstName ______________________________________________
formData[0].appendChild(pErrorFirstName);
pErrorFirstName.classList.add("pError");
let regexFirstName = /^[a-zA-ZéèêëîïÈÉÊËÎÏÀÁÂ][a-zA-ZéèêëîïÈÉÊËÎÏÀÁÂ]+([ \-'][a-zA-ZéèêëîïÈÉÊËÎÏÀÁÂ][a-zA-ZéèêëîïÈÉÊËÎÏÀÁÂ]+)?$/;

firstName.addEventListener("blur", testFirstName);
goButton.addEventListener("mousedown", testFirstName);

function testFirstName() {
  if ((firstName.value.length < 2) || 
     (firstName.value.length >= 30) ||
     (!regexFirstName.test(firstName.value)) || 
     (firstName.value == "")) {
    firstName.classList.add("inputError"); // attribution de la classe "inputError" à firstName(input)
    pErrorFirstName.textContent = "Veuillez saisir votre prénom (min 2 caractères)"; // message d'erreur sur paragraphe pError;
    firstName.addEventListener("input", testFirstName);
    return false;
  } else {
    firstName.classList.remove("inputError");
    pErrorFirstName.textContent = "";
    return true;
  }
}
// function testLastName _______________________________________________
formData[1].appendChild(pErrorLastName);
pErrorLastName.classList.add("pError");
let regexLastName = regexFirstName;

lastName.addEventListener("blur", testLastName);
goButton.addEventListener("mousedown", testLastName);

function testLastName() {
  if ((lastName.value.length < 2) || 
     (lastName.value.length >= 30) ||
     (!regexLastName.test(lastName.value)) || 
     (lastName.value == "")) {
    lastName.classList.add("inputError"); // attribution de la classe "inputError" à firstName(input)
    pErrorLastName.textContent = "Veuillez saisir votre nom (min 2 caractères)"; // message d'erreur sur paragraphe pError;
    lastName.addEventListener("input", testLastName);
    return false;
  } else {
    lastName.classList.remove("inputError");
    pErrorLastName.textContent = "";
    return true;
  }
}
// function testEmail __________________________________________________
formData[2].appendChild(pErrorEmail);
pErrorEmail.classList.add("pError");
let regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eMail.addEventListener("blur", testEmail);
goButton.addEventListener("mousedown", testEmail);

function testEmail() {
  if ((eMail.value.length < 5) || 
     (eMail.value.length >= 30) ||
     (!regexEmail.test(eMail.value)) || 
     (eMail.value == "")) {
    eMail.classList.add("inputError"); // attribution de la classe "inputError" à firstName(input)
    pErrorEmail.textContent = "Adresse mail incorrecte"; // message d'erreur sur paragraphe pError;
    eMail.addEventListener("input", testEmail);
    return false;
  } else {
    eMail.classList.remove("inputError");
    pErrorEmail.textContent = "";
    return true;
  }
}
// function testBirthDate _____________________________________________
formData[3].appendChild(pErrorBirthDate);
pErrorBirthDate.classList.add("pError");

birthDate.addEventListener("blur", testBirthDate);
goButton.addEventListener("mousedown", testBirthDate);

function testBirthDate() {
  year = birthDate.value.substring(0,4);
  var today = new Date();	// Récupération de la date actuelle
  var age = today.getFullYear() - year;	// Calcul de l'âge
  if (birthDate.value == "") {
    birthDate.classList.add("inputError"); // attribution de la classe "inputError" à firstName(input)
    pErrorBirthDate.textContent = "Veuillez saisir votre date de naissance"; // message d'erreur sur paragraphe pError;
    birthDate.addEventListener("input", testBirthDate);
    return false;
  } else  if (age < 12) {
    birthDate.classList.add("inputError"); // attribution de la classe "inputError" à firstName(input)
    pErrorBirthDate.textContent = "Vous n'avez pas l'âge minimum requis (12 ans)"; // message d'erreur sur paragraphe pError;
    return false;
  } else if (age < 18) {
    pErrorBirthDate.textContent = "Vous n'êtes pas majeur, une autorisation parentale vous sera demandé"; // message d'erreur sur paragraphe pError;
    return true;
  } else {
    birthDate.classList.remove("inputError");
    pErrorBirthDate.textContent = "";
    return true;
  }
}
// function testRadio _______________________________________________
formData[5].appendChild(pErrorRadio);
pErrorRadio.classList.add("pError");
formData[5].addEventListener("click", testRadio);
goButton.addEventListener("mousedown", testRadio);

function testRadio() {
  let chosen = "";
  let len = inputRadioLocation.length;
  for (i=0; i < len; i++) {
    if (inputRadioLocation[i].checked) {
      chosen = inputRadioLocation[i].value;
      pErrorRadio.textContent = "";
      return true;
    }
  }
  if (chosen == "") {
    pErrorRadio.textContent = "Veuillez choisir une ville"; // message d'erreur sur paragraphe pError;
    return false;
  }
}
// function testCheckbox _____________________________________________
formData[6].appendChild(pErrorCheckbox);
pErrorCheckbox.classList.add("pError");

formData[6].addEventListener("click", testCheckbox);
goButton.addEventListener("mousedown", testCheckbox);

function testCheckbox() {
  let chosen = "";
  if (agree.checked) {
      chosen = agree.value;
      pErrorCheckbox.textContent = "";
      return true;
  } else if (chosen == "") {
    pErrorCheckbox.textContent = "Vous devez accepter les conditions d'utilisation"; // message d'erreur sur paragraphe pError;
    return false;
  }
}
// function submit __________________________________________________

form.addEventListener("submit", validate);

function validate(event) {
  event.preventDefault();
  if ((testFirstName() == true) && 
      (testLastName() == true) &&
      (testEmail() == true) &&
      (testBirthDate() == true) &&
      (testRadio() == true) &&
      (testCheckbox() == true)) {
    goButton.addEventListener("click", thanckYou);    
    thanckYou();
    let request = new XMLHttpRequest();
    request.open("GET", "http://url-service-web.com/api/users");
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(jsonBody));
  }
}