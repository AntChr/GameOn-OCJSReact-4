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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
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

function firstNameControl() {
firstNameInput.addEventListener("input", function () {
  const firstName = firstNameInput.value;
  const formDataFirstName = document.querySelector(".formData:first-child");
  if(regExFirstLastName(firstName)) {
    formDataFirstName.removeAttribute("data-error");
    formDataFirstName.removeAttribute("data-error-visible");
    return true
  } else {
    formDataFirstName.setAttribute("data-error", "Ce champ doit contenir au minimum 2 caractères");
    formDataFirstName.setAttribute("data-error-visible", "true");
    return false
  }
})
}
firstNameControl()

function lastNameControl() {
lastNameInput.addEventListener("input", function () {
  const lastName = lastNameInput.value;
  const formDataLastName = document.querySelector(".formData:nth-child(2)");
  if(regExFirstLastName(lastName)) {
    formDataLastName.removeAttribute("data-error");
    formDataLastName.removeAttribute("data-error-visible");
    return true
  } else {
    formDataLastName.setAttribute("data-error", "Ce champ doit contenir au minimum 2 caractères");
    formDataLastName.setAttribute("data-error-visible", "true");
    return false
  }
})
}
lastNameControl()

function emailControl() {
emailInput.addEventListener("input", function () {
  const email = emailInput.value;
  const formDataemail = document.querySelector(".formData:nth-child(3)");
  if(regExmail(email)) {
    formDataemail.removeAttribute("data-error");
    formDataemail.removeAttribute("data-error-visible");
    return true
  } else {
    formDataemail.setAttribute("data-error", "Email invalide");
    formDataemail.setAttribute("data-error-visible", "true");
    return false
  }
})
}
emailControl()

function birthdateControl(){
birthdateInput.addEventListener("input", function() {
  const birthdateStr = birthdateInput.value;
  const birthdate = new Date(birthdateStr);
  const today = new Date().setHours(0,0,0,0)
  const formDatabirthdate = document.querySelector(".formData:nth-child(4)");
  
   if (birthdate < today) {
    formDatabirthdate.removeAttribute("data-error");
    formDatabirthdate.removeAttribute("data-error-visible");
    return true;
  } else {
    formDatabirthdate.setAttribute("data-error", "Vous devez entrer votre date de naissance");
    formDatabirthdate.setAttribute("data-error-visible", "true");
    return false;
  }
});
}
birthdateControl();

function tournamentControl() {
  tournamentInput.addEventListener("input", function() {
    const quantitytournament = tournamentInput.value
    const isNumeric = /^\d+$/.test(quantitytournament);
    const formDatatournament = document.querySelector(".formData:nth-child(5)");
    if (isNumeric) {
      formDatatournament.removeAttribute("data-error");
      formDatatournament.removeAttribute("data-error-visible");
      return true;
    } else {
      formDatatournament.setAttribute("data-error", "Vous devez entrer un nombre");
      formDatatournament.setAttribute("data-error-visible", "true");
      return false;
    }
    
  })
}
tournamentControl();

function locationControl() {
  for (const radio of locationRadios) {
    radio.addEventListener("input", function() {
      const formDataLocation = document.querySelector(".formData:nth-child(7)");
      let isAtLeastOneChecked = false;

      for (const radio of locationRadios) {
        if (radio.checked) {
          isAtLeastOneChecked = true;
          break;
        }
      }
      if (isAtLeastOneChecked) {
        formDataLocation.removeAttribute("data-error");
        formDataLocation.removeAttribute("data-error-visible");
        return true;
      } else {
        formDataLocation.setAttribute("data-error", "Vous devez sélectionner un lieu");
        formDataLocation.setAttribute("data-error-visible", "true");
        return false;
  }
})
}
}
locationControl()

function cguControl() {
  cguInput.addEventListener("input", function() {
  const formDatacgu = document.querySelector(".formData:nth-child(8)");

  if(cguInput.checked) {
    formDatacgu.removeAttribute("data-error");
    formDatacgu.removeAttribute("data-error-visible");
    return true;
    } else {
    formDatacgu.setAttribute("data-error", "Avez-vous lu les conditions générales d'utilisation ?");
    formDatacgu.setAttribute("data-error-visible", "true");
    return false;
  }
})
}
cguControl()

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (firstNameControl && lastNameControl && emailControl && birthdateControl && tournamentControl && locationControl && cguControl) {
    content.style.display = "none"
    confirmation.style.display = "flex"
  }
})