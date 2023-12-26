import {
  EMPTY_EMAIL,
  EMPTY_PASSWORD,
  INVALID_EMAIL,
  INVALID_PASSWORD,
  USED_EMAIL,
  WRONG_PASSWORD,
} from "./constant.js";
import { $emailErrorMsg, $pwdCheckErrorMsg, $pwdErrorMsg } from "./tags.js";

/* 이메일 유효성 검사 */
const checkValidEmail = async (
  email,
  isInputEmpty,
  isInputInvalid,
  isInputUsed = false
) => {
  email.classList.toggle(
    "invalid-border",
    isInputEmpty || isInputInvalid || isInputUsed
  );

  if (isInputEmpty) {
    $emailErrorMsg.textContent = EMPTY_EMAIL;
  } else if (isInputInvalid) {
    $emailErrorMsg.textContent = INVALID_EMAIL;
  } else if (isInputUsed) {
    $emailErrorMsg.textContent = USED_EMAIL;
  } else {
    $emailErrorMsg.textContent = "";
  }

  return !(isInputEmpty || isInputInvalid || isInputUsed);
};

/* 비밀번호 유효성 검사 */
const checkValidPassword = (password, isInputEmpty, isInputInvalid) => {
  password.classList.toggle("invalid-border", isInputEmpty || isInputInvalid);

  if (isInputEmpty) {
    $pwdErrorMsg.textContent = EMPTY_PASSWORD;
  } else if (isInputInvalid) {
    $pwdErrorMsg.textContent = INVALID_PASSWORD;
  } else {
    $pwdErrorMsg.textContent = "";
  }

  return !(isInputEmpty || isInputInvalid);
};

/* 비밀번호 확인 유효성 검사 */
const checkValidPasswordCheck = (
  passwordCheck,
  isInputEmpty,
  isInputInvalid,
  isPasswordMatch
) => {
  passwordCheck.classList.toggle(
    "invalid-border",
    isInputEmpty || isInputInvalid || isPasswordMatch
  );

  if (isInputEmpty) {
    $pwdCheckErrorMsg.textContent = EMPTY_PASSWORD;
  } else if (isInputInvalid) {
    $pwdCheckErrorMsg.textContent = INVALID_PASSWORD;
  } else if (isPasswordMatch) {
    $pwdCheckErrorMsg.textContent = WRONG_PASSWORD;
  } else {
    $pwdCheckErrorMsg.textContent = "";
  }

  return !(isInputEmpty || isInputInvalid || isPasswordMatch);
};

export { checkValidEmail, checkValidPassword, checkValidPasswordCheck };
