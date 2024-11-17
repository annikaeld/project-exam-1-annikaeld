const form = document.querySelector("#contact");
const name = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error");

function validateForm() {
  let isValid = true;

  if (checkLength(name.value, 5) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
    isValid = false;
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
    isValid = false;
  }

  if (checkLength(subject.value, 15) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
    isValid = false;
  }

  if (checkLength(message.value, 25) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
    isValid = false;
  }

  return isValid
}

export function validateEmail(email) {
  const regEx = /\S+@\S+.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

export function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

export { validateForm };
window.validateForm = validateForm;

form.addEventListener("submit", validateForm);