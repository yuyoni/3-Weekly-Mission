import {
  EMPTY_EMAIL,
  EMPTY_PASSWORD,
  VALID_PASSWORD,
  WRONG_EMAIL,
} from "./constant";

/* 이메일 유효성 검사 */
const isValidEmail = (element, message) => {
  const isEmpty = element.value.length === 0;
  const isInvalidPattern = !/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(
    element.value
  );

  element.classList.toggle("invalid-border", isEmpty || isInvalidPattern);

  message.textContent = isEmpty
    ? EMPTY_EMAIL
    : isInvalidPattern
    ? WRONG_EMAIL
    : "";
};

/* 비밀번호 유효성 검사 */
const isValidPwd = (element, message) => {
  const isEmpty = element.value.length === 0;
  const isInvalidPattern =
    !/(?=.*[a-zA-Z])(?=.*\d).*/.test(element.value) || element.value.length < 8;

  element.classList.toggle("invalid-border", isEmpty || isInvalidPattern);

  message.textContent = isEmpty
    ? EMPTY_PASSWORD
    : isInvalidPattern
    ? VALID_PASSWORD
    : "";
};

export { isValidEmail, isValidPwd };
