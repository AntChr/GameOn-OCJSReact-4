function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const firstNameInput = document.querySelector("#first");
const lastNameInput = document.querySelector("#last");
const emailInput = document.querySelector("#email");
const birthdateInput = document.querySelector("#birthdate");
const tournamentInput= document.querySelector("#quantity");
const locationRadios = document.querySelectorAll('input[type="radio"][name="location"]');
const cguInput = document.querySelector("#checkbox1");
const submitButton = document.querySelector(".btn-submit");
const confirmation = document.querySelector(".confirmation");
const content = document.querySelector(".modal-body");   
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closebtn = document.querySelector(".close")
const formRegister = document.querySelector("#form-register")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  content.style.display = "flex";
  confirmation.style.display = "none";
}

// close modal event
closebtn.addEventListener("click",closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none"
}

// Regex prénom et nom avec un minimum de deux caractères minuscules et majuscules avec tiret
const regExFirstLastName = (value) => {
  return /^([A-Za-z]{2,10})?([-]{0,1})?([A-Za-z]{2,10})$/.test(value);
}
const regExmail = (value) => {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)
}

function controlvisual(x,y,z) {
  if(x) {
    y.removeAttribute("data-error");
    y.removeAttribute("data-error-visible");
    return true
  } else {
    y.setAttribute("data-error", z);
    y.setAttribute("data-error-visible", "true");
    return false
  }
}

/**
 * firstNameControl, contrôle du prénom sur le champ firstNameInput avec le regexFirstLastName
 * Si le regex est respecté rien ne s'affiche et retourne true
 * Si le regex n'est pas respecté alors un message d'erreur s'affiche et retourne false
 * voici une illustration de son fonctionnement :
 * ![Illustration de l'operation](../docs-img/prenom.png)
 */
function firstNameControl() {
  const firstName = firstNameInput.value;
  const formDataFirstName = document.querySelector(".formData:first-child");
  return controlvisual(regExFirstLastName(firstName),formDataFirstName,"Ce champ doit contenir au minimum 2 caractères")}
firstNameInput.addEventListener("input", function () {
  firstNameControl()
})

/**
 * Contrôle du nom dans le formulaire avec un minimum de deux caractères et retourne true si c'est respecté ou false.
 */
function lastNameControl() {
  const lastName = lastNameInput.value;
  const formDataLastName = document.querySelector(".formData:nth-child(2)")
  return controlvisual(regExFirstLastName(lastName),formDataLastName,"Ce champ doit contenir au minimum 2 caractères")
}
lastNameInput.addEventListener("input", function () {
  lastNameControl()
})
/**
 * Contrôle du mail dans le formulaire pour respecter le format d'un mail et retourne true si c'est respecté ou false.
 */
function emailControl() {
  const email = emailInput.value
  const formDataemail = document.querySelector(".formData:nth-child(3)")
  return controlvisual(regExmail(email),formDataemail,"Email invalide")
}
emailInput.addEventListener("input", function () {
  emailControl()
})
/**
 * Contrôle de la date de naissance dans le formulaire toutes les dates sont acceptés sauf celle d'aujourd'hui et retourne true si c'est respecté ou false.
 */
function birthdateControl(){
  const birthdateStr = birthdateInput.value
  const birthdate = new Date(birthdateStr)
  const today = new Date().setHours(0,0,0,0)
  const formDatabirthdate = document.querySelector(".formData:nth-child(4)")
  return controlvisual(birthdate < today,formDatabirthdate,"Vous devez entrer votre date de naissance")
}
birthdateInput.addEventListener("input", function() {
  birthdateControl()
})
/**
 * Contrôle du nombre de tournoi dans le formulaire avec une saisie de chiffre et retourne true si c'est respecté ou false.
 */
function tournamentControl() {
  const quantitytournament = tournamentInput.value
    const isNumeric = /^\d+$/.test(quantitytournament)
    const formDatatournament = document.querySelector(".formData:nth-child(5)")
    return controlvisual(isNumeric,formDatatournament,"Vous devez entrer un nombre")
}
  tournamentInput.addEventListener("input", function() {
    tournamentControl()  
  })


/**
 * Contrôle de localisation dans le formulaire avec la sélection d'une ville et retourne true si c'est respecté ou false.
 */
const formDataLocation = document.querySelector(".formData:nth-child(7)")
function locationControl() {
  for (const radio of locationRadios) {
    radio.addEventListener("input", function() {
      validateLocation()
    });
  }
}

function validateLocation() {
  let isAtLeastOneChecked = false;

  for (const radio of locationRadios) {
    if (radio.checked) {
      isAtLeastOneChecked = true;
      break;
    }
  }

  return controlvisual(isAtLeastOneChecked, formDataLocation, "Vous devez sélectionner un lieu");
}
validateLocation()
locationControl()

/**
 * Contrôle des cgu dans le formulaire avec une case coché et retourne true si c'est respecté ou false.
 */
function cguControl() {
  const formDatacgu = document.querySelector(".formData:nth-child(8)");
  return controlvisual(cguInput.checked,formDatacgu,"Avez-vous lu les conditions générales d'utilisation ?")
  
}
  cguInput.addEventListener("input", function() {
    cguControl()
})
/**
 * Bouton qui envoie vers une nouvelle page si toutes les conditions précédentes sont respectés
 */
formRegister.addEventListener("submit", (e) => {
  e.preventDefault();
  if (firstNameControl() && lastNameControl() && emailControl() && birthdateControl() && tournamentControl() && validateLocation() && cguControl()) {
    content.style.display = "none"
    confirmation.style.display = "flex"
  } else {
    alert("Veuillez bien remplir le formulaire")
  }
})