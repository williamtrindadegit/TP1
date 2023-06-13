const form = document.getElementById("form");
const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const courriel = document.getElementById("courriel");
const commentaire = document.getElementById("commentaire");
var noError;

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".errorMessage");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
  noError=false;
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".errorMessage");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
  
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  try {
  noError=true;
  const nomValue = nom.value.trim();
  const prenomValue =prenom.value.trim();
  const commentaireValue =commentaire.value.trim();
  const courrielValue = courriel.value.trim();


  if (nomValue === "") {
    setError(nom, "Nom d'utilisateur est requis");
  } else {
    setSuccess(nom);
  }
  if (prenomValue === "") {
    setError(prenom, "Prenom d'utilisateur est requis");
  } else {
    setSuccess(prenom);
  }

  if (commentaireValue.length<10) {
    setError(commentaire, "Um comentaire de au moins 10 charactères");
  } else {
    setSuccess(commentaire);
  }

  if (courrielValue === "") {
    setError(courriel, "Adresse de courriel est requis");
  } else if (!isValidEmail(courrielValue)) {
    setError(courriel, "Fournissez un adresse de courriel valide.");
  } else {
    setSuccess(courriel);
  }
} catch (error) {
   noError=false;
}

 
  return noError;
};
