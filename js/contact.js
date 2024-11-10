import { validateEmail } from "./ui/formValidation.js";
import { checkLength } from "./ui/formValidation.js";

const form = document.querySelector("#contact");
const name = document.querySelector("#name");
const name-error = document.querySelector("#name-error");
const email = document.querySelector("#email");
const email-error = document.querySelector("#email-error");
const subject = document.querySelector("#subject");
const subject-error = document.querySelector("#subject-error");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

function validateForm(event) {
  let isValid = true;

  if (checkLength(name.value, 5) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
    isValid = false;
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
    isValid = false;
  }

  if (checkLength(subject.value, 15) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
    isValid = false;
  }

  if (checkLength(message.value, 25) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
    isValid = false;
  }

  // If the form is not valid, prevent it from being submitted
  if (!isValid) {
    event.preventDefault();
  }
}