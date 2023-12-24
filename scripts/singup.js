import {
  checkPasswordsMatch,
  isEmpty,
  isInvalidEmail,
  isInvalidPassword,
  isUsedEmail,
} from "./validation.js";
import {
  CHECK_EMAIL,
  CHECK_PASSWORD,
  EMPTY_EMAIL,
  EMPTY_PASSWORD,
  INVALID_EMAIL,
  INVALID_PASSWORD,
  USED_EMAIL,
  WRONG_PASSWORD,
} from "./constant.js";
import {
  emailInput,
  pwdInput,
  eyeIcons,
  signupForm,
  pwdCheckInput,
  emailErrorMsg,
  pwdErrorMsg,
  pwdCheckErrorMsg,
} from "./tags.js";
import toggleIcon from "./toggleIcon.js";

if (localStorage.getItem("accessToken")) {
  signupForm.submit();
}

/* 눈모양 아이콘 누르면 비밀번호 보이기 */
eyeIcons.forEach((el, idx) =>
  el.addEventListener("click", () =>
    toggleIcon(el, idx ? pwdCheckInput : pwdInput)
  )
);

/* 이메일 유효성 검사 */
const isValidEmail = async (email) => {
  const isInputEmpty = isEmpty(email.value);
  const isInputInvalid = isInvalidEmail(email.value);
  const isInputUsed = await isUsedEmail(email.value);

  email.classList.toggle(
    "invalid-border",
    isInputEmpty || isInputInvalid || isInputUsed
  );

  if (isInputEmpty) {
    emailErrorMsg.textContent = EMPTY_EMAIL;
  } else if (isInputInvalid) {
    emailErrorMsg.textContent = INVALID_EMAIL;
  } else if (isInputUsed) {
    emailErrorMsg.textContent = USED_EMAIL;
  } else {
    emailErrorMsg.textContent = "";
  }
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
};

/* 비밀번호 확인 유효성 검사 */
const isValidPasswordCheck = (password, passwordCheck) => {
  const isInputEmpty = isEmpty(passwordCheck.value);
  const isInputInvalid = isInvalidPassword(passwordCheck.value);
  const isPasswordMatch = checkPasswordsMatch(
    password.value,
    passwordCheck.value
  );

  passwordCheck.classList.toggle(
    "invalid-border",
    isInputEmpty || isInputInvalid || isPasswordMatch
  );

  if (isInputEmpty) {
    pwdCheckErrorMsg.textContent = EMPTY_PASSWORD;
  } else if (isInputInvalid) {
    pwdCheckErrorMsg.textContent = INVALID_PASSWORD;
  } else if (isPasswordMatch) {
    pwdCheckErrorMsg.textContent = WRONG_PASSWORD;
  } else {
    pwdCheckErrorMsg.textContent = "";
  }
};

emailInput.addEventListener("focusout", () => isValidEmail(emailInput));
pwdInput.addEventListener("focusout", () => isValidPassword(pwdInput));
pwdCheckInput.addEventListener("focusout", () =>
  isValidPasswordCheck(pwdInput, pwdCheckInput)
);

/* 유효한 회원가입 시도 시 페이지 이동 */
const fetchSignup = async (e) => {
  e.preventDefault();

  const isEmptyInput =
    emailInput.value.length === 0 || pwdInput.value.length === 0;
  const isEmptyError =
    emailErrorMsg.textContent.length > 0 &&
    pwdErrorMsg.textContent.length > 0 &&
    pwdCheckErrorMsg.textContent.length > 0;

  /* input이 비어있지 않으면서 오류 메시지가 없으면 회원가입 성공 */
  if (!isEmptyInput && !isEmptyError) {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInput.value,
        password: pwdInput.value,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      localStorage.setItem("accessToken", result.data.accessToken);
      signupForm.submit();
    } else {
      emailInput.classList.add("invalid-border");
      pwdInput.classList.add("invalid-border");
      pwdCheckInput.classList.add("invalid-border");
      emailErrorMsg.textContent = CHECK_EMAIL;
      pwdErrorMsg.textContent = CHECK_PASSWORD;
      pwdCheckErrorMsg.textContent = CHECK_PASSWORD;
    }
  } else {
    emailInput.classList.add("invalid-border");
    pwdInput.classList.add("invalid-border");
    pwdCheckInput.classList.add("invalid-border");
    emailErrorMsg.textContent = CHECK_EMAIL;
    pwdErrorMsg.textContent = CHECK_PASSWORD;
    pwdCheckErrorMsg.textContent = CHECK_PASSWORD;
  }
};

signupForm.addEventListener("submit", (e) => {
  fetchSignup(e);
});
