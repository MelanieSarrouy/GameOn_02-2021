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
const formData = document.getElementsByClassName("formData"); // Toutes les div formData avec input
let inputRadioLocation = document.querySelectorAll("form:nth-child(7) .checkbox-input");
let inputCheckBox = document.querySelectorAll("form:nth-child(8) .checkbox-input");
const form = document.getElementById("form"); // le formulaire
const textControl = document.querySelectorAll(".text-control"); //tous les input "text-control"
const modalBody = document.querySelector(".modal-body"); // div du contenu de la modale
let cross = document.getElementById("close"); // X fermeture de la modale
const newDiv = document.createElement("div"); // creation d'une newDiv pour le message de validation
const message = document.createElement("p"); // création d'un paragraphe appelé message
let pErrorFirstName = document.createElement("p"); // creation du p error FirstName
let pErrorLastName = document.createElement("p"); // creation du p error LastName
let pErrorEmail = document.createElement("p"); // creation du p error Email
let pErrorBirthDate = document.createElement("p");// creation du p error BirthDate
let pErrorRadio = document.createElement("p"); // creation du p error Radio
let pErrorCheckbox = document.createElement("p"); // creation du p error Checkbox
let firstName = document.getElementById("firstname"); // ajout input firstname dans le DOM
let lastName = document.getElementById("lastname"); // ajout input lastname dans le DOM
let eMail = document.getElementById("email"); // ajout input lastname dans le DOM
let birthDate = document.getElementById("birthdate"); // ajout input birthdate dans le DOM
const formDataOne = formData[0]; // ciblage 1er element formData - div firstname
const formDataTwo = formData[1]; // ciblage 2eme element formData - div lastname
const formDataThree = formData[2]; // ciblage 3eme element formData - div email
const formDataFour = formData[3]; // ciblage 4eme element formData - div birthdate
const formDataSix = formData[5]; // ciblage 6eme element formData - div location
const formDataSeven = formData[6]; // ciblage 7eme element formData - div checkbox
let erreur = false;


// launch modal event ________________________________________________
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// launch closeModal event __________________________________________
// function closeModal
cross.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
}
// launch thanckYou event ____________________________________________

// function thanckYou

function thanckYou(event) {  
  modalBody.appendChild(newDiv);// newDiv est enfant de modalBody
  modalBody.appendChild(form);
  modalBody.classList.add("divValidate");// attribution de la classe "divValidate" à modalBody
  newDiv.appendChild(message);// message est un enfant de newDiv
  message.classList.add("pValidate");// attribution de la classe "pValidate" à message
  modalBody.replaceChild(newDiv, form);// form est remplacé par newDiv

  message.innerHTML = "Merci, " + firstName.value + " votre réservation a bien été enregistrée !<br/> <br/>The Show Must GameOn !";// contenu de message
  
  newDiv.appendChild(goButton);// goButton est un enfant de newDiv
  goButton.classList.add("buttonClose");// attribution de la classe "buttonClose" à goButton
  goButton.value = "Fermer";// changement de la valeur de l'attr value à goButton
  
  //event.preventDefault();// suppression des "réactions" par défaut du nav
  //event.stopPropagation();// supp de la propagation de l'event aux "parents"

  goButton.addEventListener("click", closeModal);// écoute de l'event "click" sur goButton / action: closeModal
}
// launch testFirstName event ______________________________
formDataOne.appendChild(pErrorFirstName);
pErrorFirstName.classList.add("pError");
let regexFirstName = /^[a-zA-ZéèêëîïÈÉÊËÎÏÀÁÂ][a-zA-ZéèêëîïÈÉÊËÎÏÀÁÂ]+([ -'][a-zA-ZéèêëîïÈÉÊËÎÏÀÁÂ][a-zA-ZéèêëîïÈÉÊËÎÏÀÁÂ]+)?$/;

firstName.addEventListener("blur", testFirstName);

function testFirstName(event) {
  event.preventDefault();
  if ((firstName.value.length < 2) || 
     (firstName.value.length >= 30) ||
     (!regexFirstName.test(firstName.value)) || 
     (firstName.value == "")) {
    firstName.classList.add("inputError"); // attribution de la classe "inputError" à firstName(input)
    pErrorFirstName.innerHTML = "Vous devez remplir au moins 2 caractères"; // message d'erreur sur paragraphe pError;
    erreur = true;
  } else {
    firstName.classList.remove("inputError");
    pErrorFirstName.innerHTML = "";
    erreur = false;
  }
}
// launch testLastName event ______________________________
formDataTwo.appendChild(pErrorLastName);
pErrorLastName.classList.add("pError");
let regexLastName = regexFirstName;

lastName.addEventListener("blur", testLastName);

function testLastName(event) {
  event.preventDefault();
  if ((lastName.value.length < 2) || 
     (lastName.value.length >= 30) ||
     (!regexLastName.test(lastName.value)) || 
     (lastName.value == "")) {
    lastName.classList.add("inputError"); // attribution de la classe "inputError" à firstName(input)
    pErrorLastName.innerHTML = "Vous devez remplir au moins 2 caractères"; // message d'erreur sur paragraphe pError;
    erreur = true;
  } else {
    lastName.classList.remove("inputError");
    pErrorLastName.innerHTML = "";
    erreur = false;
  }
}
// launch testEmail event ______________________________
formDataThree.appendChild(pErrorEmail);
pErrorEmail.classList.add("pError");
let regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;

eMail.addEventListener("blur", testEmail);

function testEmail(event) {
  event.preventDefault();
  if ((eMail.value.length < 5) || 
     (eMail.value.length >= 30) ||
     (!regexEmail.test(eMail.value)) || 
     (eMail.value == "")) {
    eMail.classList.add("inputError"); // attribution de la classe "inputError" à firstName(input)
    pErrorEmail.innerHTML = "Adresse mail incorrecte"; // message d'erreur sur paragraphe pError;
    erreur = true;
  } else {
    eMail.classList.remove("inputError");
    pErrorEmail.innerHTML = "";
    erreur = false;
  }
}
// launch testBirthDate event ______________________________
formDataFour.appendChild(pErrorBirthDate);
pErrorBirthDate.classList.add("pError");

birthDate.addEventListener("blur", testBirthDate);

function testBirthDate(event) {
  event.preventDefault();
  if (birthDate.value == "") {
    birthDate.classList.add("inputError"); // attribution de la classe "inputError" à firstName(input)
    pErrorBirthDate.innerHTML = "Vous devez entrer votre date de naissance"; // message d'erreur sur paragraphe pError;
    erreur = true;
  } else {
    birthDate.classList.remove("inputError");
    pErrorBirthDate.innerHTML = "";
    erreur = false;
  }
}
// launch testRadio event ______________________________
formDataSix.appendChild(pErrorRadio);
pErrorRadio.classList.add("pError");

formDataSix.addEventListener("mouseout", testRadio);

function testRadio(event) {
  event.preventDefault();
  if (!((document.getElementById("location1").checked == true) || 
      (document.getElementById("location2").checked == true) ||
      (document.getElementById("location3").checked == true) ||
      (document.getElementById("location4").checked == true) ||
      (document.getElementById("location5").checked == true) ||
      (document.getElementById("location6").checked == true))) {
    pErrorRadio.innerHTML = "Vous devez choisir une ville"; // message d'erreur sur paragraphe pError;
    erreur = true;
  } else {
    pErrorRadio.innerHTML = "";
    erreur = false;
  }
}
// launch testCheckbox event ______________________________
formDataSeven.appendChild(pErrorCheckbox);
pErrorCheckbox.classList.add("pError");

formDataSeven.addEventListener("mouseout", testCheckbox);

function testCheckbox(event) {
  event.preventDefault();
  if ((document.getElementById("checkbox1").checked !== true) ) {
    pErrorCheckbox.innerHTML = "Vous devez accepter les conditions d'utilisation"; // message d'erreur sur paragraphe pError;
    erreur = true;
  } else {
    pErrorCheckbox.innerHTML = "";
    erreur = false;
  }
}
// launch submit event ______________________________

form.addEventListener("submit", validate);

function validate(event) {
  event.preventDefault();
  event.stopPropagation();
  if (erreur == true) {
    alert("Veuillez saisir correctement les données demandées");
  } else if (erreur == false) {
    goButton.addEventListener("click", thanckYou);    
    thanckYou();
    let request = new XMLHttpRequest();
    request.open("GET", "http://url-service-web.com/api/users");
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(jsonBody));
  }
}




