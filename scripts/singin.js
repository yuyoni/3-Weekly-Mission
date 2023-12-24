import { isEmpty, isInvalidEmail, isInvalidPassword } from "./validation.js";
import {
  CHECK_EMAIL,
  EMPTY_EMAIL,
  INVALID_EMAIL,
  CHECK_PASSWORD,
  EMPTY_PASSWORD,
  INVALID_PASSWORD,
} from "./constant.js";
import {
  emailInput,
  pwdInput,
  eyeIcons,
  loginForm,
  emailErrorMsg,
  pwdErrorMsg,
} from "./tags.js";
import toggleIcon from "./toggleIcon.js";

/* accessToken 있으면 페이지 이동 */
if (localStorage.getItem("accessToken")) {
  loginForm.submit();
}

/* 눈모양 아이콘 누르면 비밀번호 보였다 숨기기 */
function eyeIconClickFunction() {
  toggleIcon(eyeIcons[0], pwdInput);
}

/* 이메일 유효성 검사 */
const isValidEmail = (email) => {
  const isInputEmpty = isEmpty(email.value);
  const isInputInvalid = isInvalidEmail(email.value);

  email.classList.toggle("invalid-border", isInputEmpty || isInputInvalid);

  if (isInputEmpty) {
    emailErrorMsg.textContent = EMPTY_EMAIL;
  } else if (isInputInvalid) {
    emailErrorMsg.textContent = INVALID_EMAIL;
  } else {
    emailErrorMsg.textContent = "";
  }

  return !(isInputEmpty || isInputInvalid);
};

/* 비밀번호 유효성 검사 */
const isValidPassword = (password) => {
  const isInputEmpty = isEmpty(password.value);
  const isInputInvalid = isInvalidPassword(password.value);

  password.classList.toggle("invalid-border", isInputEmpty || isInputInvalid);

  if (isInputEmpty) {
    pwdErrorMsg.textContent = EMPTY_PASSWORD;
  } else if (isInputInvalid) {
    pwdErrorMsg.textContent = INVALID_PASSWORD;
  } else {
    pwdErrorMsg.textContent = "";
  }

  return !(isInputEmpty || isInputInvalid);
};

function emailFocusoutFunction() {
  isValidEmail(emailInput);
}

function passwordFocusoutFunction() {
  isValidPassword(pwdInput);
}

const isallValid = () => {
  const validEmail = isValidEmail(emailInput);
  const validPassword = isValidPassword(pwdInput);

  return validEmail && validPassword;
};

/* 유효한 로그인 시도 시 페이지 이동 */
const handleLoginRequest = async (e) => {
  e.preventDefault();

  const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: emailInput.value,
      password: pwdInput.value,
    }),
  });

  if (isallValid() && response.ok) {
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

eyeIcons[0].addEventListener("click", eyeIconClickFunction);
emailInput.addEventListener("focusout", emailFocusoutFunction);
pwdInput.addEventListener("focusout", passwordFocusoutFunction);
loginForm.addEventListener("submit", (e) => {
  handleLoginRequest(e);
});
