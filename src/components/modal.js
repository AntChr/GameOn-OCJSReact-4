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

emailInput.addEventListener("input", function () {
  const email = emailInput.value;
  const formDataemail = document.querySelector(".formData:nth-child(3)");
  if(regExFirstLastName(email)) {
    formDataemail.removeAttribute("data-error");
    formDataemail.removeAttribute("data-error-visible");
    return true
  } else {
    formDataemail.setAttribute("data-error", "Email invalide");
    formDataemail.setAttribute("data-error-visible", "true");
    return false
  }
})