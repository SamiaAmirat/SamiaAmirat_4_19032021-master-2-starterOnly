function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeMod = document.querySelector(".close");
const form = document.querySelector("#form");
const submit = document.querySelector(".button");

// selection input
const prenom = document.querySelector("#first");
const nom = document.querySelector("#last");
const email = document.querySelector("#email");
const DateDeNaissance = document.querySelector("#birthdate");
const nbreTournois = document.querySelector("#quantity");
const villes = document.querySelector(".text-label");
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.([a-zA-Z0-9-])+$/;
const checkBox = document.querySelectorAll('[name="location"]');
const agree = document.querySelector("#checkbox");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// closeMod.forEach((croix) => croix.addEventListener("click", closeModal));
closeMod.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const errors = {
  prenom: {
    error: false,
    message: "Veuillez entrer au moins 2 caractères",
  },
  nom: {
    error: false,
    message: "Veuillez entrer au moins 2 caractères",
  },
  email: {
    error: false,
    message: "Veuillez entrer un email valide.",
  },
  birthdate: {
    error: false,
    message: "Veuillez entrer une date de naissance",
  },
  quantity: {
    error: false,
    message: "Veuillez entrer une quantité",
  },
  checkbox: {
    error: false,
    message: "Veuillez choisir une ville",
  },
  accord: {
    error: false,
    message: "Vous devez accepter les conditions d'utilisation.",
  },
};

const setError = (key, error, htmlElement) => {
  htmlElement.innerHTML = error ? errors[key].message : "";
  errors[key].error = error;
};

function validate() {
  let error1 = document.querySelector("#error1");
  if (prenom.value == "" && prenom.value.length < 2) {
    setError("prenom", true, error1);
  } else {
    setError("prenom", false, error1);
  }

  let error2 = document.querySelector("#error2");
  if (nom.value == "" && nom.value.length < 2) {
    setError("nom", true, error2);
  } else {
    setError("nom", false, error2);
  }

  let error3 = document.querySelector("#error3");
  if (!emailRegex.test(email.value)) {
    setError("email", true, error3);
  } else {
    setError("email", false, error3);
  }

  let error4 = document.querySelector("#error4");
  if (DateDeNaissance.value == "") {
    setError("birthdate", true, error4);
  } else {
    setError("birthdate", false, error4);
  }

  let error5 = document.querySelector("#error5");
  if (nbreTournois.value == "") {
    setError("quantity", true, error5);
  } else {
    setError("quantity", false, error5);
  }

  let error6 = document.querySelector("#error6");
  let check = false;
  checkBox.forEach((elt) => {
    if (elt.checked) check = true;
  });
  if (!check) {
    setError("checkbox", true, error6);
  } else {
    setError("checkbox", false, error6);
  }

  let error7 = document.querySelector("#error7");

  if (!agree.checked) {
    setError("accord", true, error7);
  } else {
    setError("accord", false, error7);
  }

  let error = false;

  for (let key in errors) {
    if (errors[key].error) error = true;
  }

  if (!error) {
    document.querySelector(".success").style.display = "block";
    form.style.display = "none";
    setInterval(() => form.submit(), 3000);
    window.addEventListener("click", () => form.submit());
  }
  return false;
}
