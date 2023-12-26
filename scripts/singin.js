import {
  checkEmptyInput,
  checkInvalidEmailPattern,
  checkInvalidPasswordPattern,
} from "./validationFunctions.js";
import { CHECK_EMAIL, CHECK_PASSWORD } from "./errorConstants.js";
import {
  $emailInput,
  $pwdInput,
  $eyeIcons,
  $loginForm,
  $emailErrorMsg,
  $pwdErrorMsg,
} from "./tags.js";
import toggleIcon from "./toggleIcon.js";
import { checkValidEmail, checkValidPassword } from "./validationUtils.js";

let validEmail, validPassword;

if (localStorage.getItem("accessToken")) {
  $loginForm.submit();
}

const eyeIconClickFunction = () => {
  toggleIcon($eyeIcons[0], $pwdInput);
};

const emailFocusoutFunction = () => {
  const isEmailEmpty = checkEmptyInput($emailInput.value);
  const isEmailInvalid = checkInvalidEmailPattern($emailInput.value);
  validEmail = checkValidEmail($emailInput, isEmailEmpty, isEmailInvalid);
};

const passwordFocusoutFunction = () => {
  const isPasswordEmpty = checkEmptyInput($pwdInput.value);
  const isPasswordInvalid = checkInvalidPasswordPattern($pwdInput.value);
  validPassword = checkValidPassword(
    $pwdInput,
    isPasswordEmpty,
    isPasswordInvalid
  );
};

const handleLoginRequest = async (e) => {
  e.preventDefault();

  const allValid = validEmail && validPassword;

  if (allValid) {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: $emailInput.value,
        password: $pwdInput.value,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      localStorage.setItem("accessToken", result.data.accessToken);
      $loginForm.submit();
    }
  } else {
    $emailInput.classList.add("invalid-border");
    $pwdInput.classList.add("invalid-border");

    $emailErrorMsg.textContent = CHECK_EMAIL;
    $pwdErrorMsg.textContent = CHECK_PASSWORD;
  }
};

const loginFormSubmitFunction = (event) => {
  handleLoginRequest(event);
};

$eyeIcons[0].addEventListener("click", eyeIconClickFunction);
$emailInput.addEventListener("focusout", emailFocusoutFunction);
$pwdInput.addEventListener("focusout", passwordFocusoutFunction);
$loginForm.addEventListener("submit", loginFormSubmitFunction);
