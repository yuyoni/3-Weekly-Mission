const emailInput = document.querySelector(".email");
const pwdInput = document.querySelectorAll(".password")[0];
const pwdCheckInput = document.querySelectorAll(".password")[1];
const eyeIcons = document.querySelectorAll(".eye-icon");
const emailErrorMsg = document.querySelectorAll(".error-message")[0];
const pwdErrorMsg = document.querySelectorAll(".error-message")[1];
const pwdCheckErrorMsg = document.querySelectorAll(".error-message")[2];
const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");

export {
  emailInput,
  pwdInput,
  pwdCheckInput,
  eyeIcons,
  emailErrorMsg,
  pwdErrorMsg,
  pwdCheckErrorMsg,
  loginForm,
  signupForm,
};
