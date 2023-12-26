import {
  checkEmptyInput,
  checkInvalidEmailPattern,
  checkInvalidPasswordPattern,
  checkPasswordsMatch,
  checkUsedEmail,
} from "./validationFunctions.js";
import { CHECK_EMAIL, CHECK_PASSWORD } from "./constant.js";
import {
  $emailInput,
  $pwdInput,
  $pwdCheckInput,
  $eyeIcons,
  $signupForm,
  $emailErrorMsg,
  $pwdErrorMsg,
  $pwdCheckErrorMsg,
} from "./tags.js";
import toggleIcon from "./toggleIcon.js";
import {
  checkValidEmail,
  checkValidPassword,
  checkValidPasswordCheck,
} from "./validation.js";

let validEmail, validPassword, validPasswordCheck;

if (localStorage.getItem("accessToken")) {
  $signupForm.submit();
}

const emailFocusoutFunction = async () => {
  const isEmailEmpty = checkEmptyInput($emailInput.value);
  const isEmailInvalid = checkInvalidEmailPattern($emailInput.value);
  const isEmailUsed = await checkUsedEmail($emailInput.value);

  validEmail = await checkValidEmail(
    $emailInput,
    isEmailEmpty,
    isEmailInvalid,
    isEmailUsed
  ).then((response) => response);
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

const passwordCheckFocusoutFunction = () => {
  const isPasswordEmpty = checkEmptyInput($pwdCheckInput.value);
  const isPasswordInvalid = checkInvalidPasswordPattern($pwdCheckInput.value);
  const isPasswordMatch = checkPasswordsMatch(
    $pwdInput.value,
    $pwdCheckInput.value
  );
  validPasswordCheck = checkValidPasswordCheck(
    $pwdCheckInput,
    isPasswordEmpty,
    isPasswordInvalid,
    isPasswordMatch
  );
};

const handleSignupRequest = async (e) => {
  e.preventDefault();

  const allValid = validEmail && validPassword && validPasswordCheck;

  if (allValid) {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
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
      $signupForm.submit();
    }
  } else {
    $emailInput.classList.add("invalid-border");
    $pwdInput.classList.add("invalid-border");
    $pwdCheckInput.classList.add("invalid-border");

    $emailErrorMsg.textContent = CHECK_EMAIL;
    $pwdErrorMsg.textContent = CHECK_PASSWORD;
    $pwdCheckErrorMsg.textContent = CHECK_PASSWORD;
  }
};

const singupFormSubmitFunction = (event) => {
  handleSignupRequest(event);
};

$eyeIcons.forEach((el, idx) =>
  el.addEventListener("click", () =>
    toggleIcon(el, idx ? $pwdCheckInput : $pwdInput)
  )
);
$emailInput.addEventListener("focusout", emailFocusoutFunction);
$pwdInput.addEventListener("focusout", passwordFocusoutFunction);
$pwdCheckInput.addEventListener("focusout", passwordCheckFocusoutFunction);
$signupForm.addEventListener("submit", singupFormSubmitFunction);
