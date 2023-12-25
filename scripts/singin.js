import {
  checkEmptyInput,
  checkInvalidEmailPattern,
  checkInvalidPasswordPattern,
} from "./functions.js";
import { CHECK_EMAIL, CHECK_PASSWORD } from "./constant.js";
import {
  emailInput,
  pwdInput,
  eyeIcons,
  loginForm,
  emailErrorMsg,
  pwdErrorMsg,
} from "./tags.js";
import toggleIcon from "./toggleIcon.js";
import { checkValidEmail, checkValidPassword } from "./validation.js";

let validEmail, validPassword;

/* accessToken 있으면 페이지 이동 */
if (localStorage.getItem("accessToken")) {
  loginForm.submit();
}

/* 눈모양 아이콘 누르면 비밀번호 보였다 숨기기 */
function eyeIconClickFunction() {
  toggleIcon(eyeIcons[0], pwdInput);
}

function emailFocusoutFunction() {
  const isEmailEmpty = checkEmptyInput(emailInput.value);
  const isEmailInvalid = checkInvalidEmailPattern(emailInput.value);
  validEmail = checkValidEmail(emailInput, isEmailEmpty, isEmailInvalid);
}

function passwordFocusoutFunction() {
  const isPasswordEmpty = checkEmptyInput(pwdInput.value);
  const isPasswordInvalid = checkInvalidPasswordPattern(pwdInput.value);
  validPassword = checkValidPassword(
    pwdInput,
    isPasswordEmpty,
    isPasswordInvalid
  );
}

/* 유효한 로그인 시도 시 페이지 이동 */
const handleLoginRequest = async (e) => {
  e.preventDefault();

  const allValid = validEmail && validPassword;

  const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: emailInput.value,
      password: pwdInput.value,
    }),
  });

  if (allValid && response.ok) {
    const result = await response.json();
    localStorage.setItem("accessToken", result.data.accessToken);
    loginForm.submit();
  } else {
    emailInput.classList.add("invalid-border");
    pwdInput.classList.add("invalid-border");
    emailErrorMsg.textContent = CHECK_EMAIL;
    pwdErrorMsg.textContent = CHECK_PASSWORD;
  }
};

function loginFormSubmitFunction(event) {
  handleLoginRequest(event);
}

eyeIcons[0].addEventListener("click", eyeIconClickFunction);
emailInput.addEventListener("focusout", emailFocusoutFunction);
pwdInput.addEventListener("focusout", passwordFocusoutFunction);
loginForm.addEventListener("submit", loginFormSubmitFunction);
