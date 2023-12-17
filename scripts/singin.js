const emailInput = document.querySelector("#email");
const pwdInput = document.querySelector("#password");
const eyeIcons = document.querySelectorAll(".eye-icon");
const errorMsgs = document.querySelectorAll(".error-message");

const toggleIcon = (element, password) => {
  password.type = password.type === "password" ? "text" : "password";
  element.src =
    password.type === "password" ? "images/eye-off.svg" : "images/eye-on.svg";
};

eyeIcons[0].addEventListener("click", () => toggleIcon(eyeIcons[0], pwdInput));

/* 이메일 유효성 검사 */

const isValidEmail = (element) => {
  const isEmpty = element.value.length === 0;
  const validPattern = !/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(element.value);

  element.classList.toggle("invalid-border", isEmpty || validPattern);

  errorMsgs[0].textContent = isEmpty
    ? "이메일을 입력해주세요."
    : validPattern
    ? "올바른 이메일 주소가 아닙니다."
    : "";
};

emailInput.addEventListener("focusout", () => isValidEmail(emailInput));
