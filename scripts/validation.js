import {
  EMPTY_EMAIL,
  EMPTY_PASSWORD,
  INVALID_PASSWORD,
  INVALID_EMAIL,
} from "./constant.js";

/* 이메일 유효성 검사 */
const isValidEmail = (element, message) => {
  const isEmpty = element.value.length === 0;
  const isInvalidPattern = !/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(
    element.value
  );

  element.classList.toggle("invalid-border", isEmpty || isInvalidPattern);

  if (isEmpty) {
    message.textContent = EMPTY_EMAIL;
  } else if (isInvalidPattern) {
    message.textContent = INVALID_EMAIL;
  } else {
    message.textContent = "";
  }
};

/* 비밀번호 유효성 검사 */
const isValidPwd = (element, message) => {
  const isEmpty = element.value.length === 0;
  const isInvalidPattern =
    !/(?=.*[a-zA-Z])(?=.*\d).*/.test(element.value) || element.value.length < 8;

  element.classList.toggle("invalid-border", isEmpty || isInvalidPattern);

  if (isEmpty) {
    message.textContent = EMPTY_PASSWORD;
  } else if (isInvalidPattern) {
    message.textContent = INVALID_PASSWORD;
  } else {
    message.textContent = "";
  }
};

export { isValidEmail, isValidPwd };
