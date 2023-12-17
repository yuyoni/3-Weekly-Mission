import {
  emailInput,
  pwdInput,
  eyeIcons,
  errorMsgs,
  loginForm,
} from "./tags.js";
import toggleIcon from "./toggleIcon.js";
import { isValidEmail, isValidPwd } from "./validation.js";

eyeIcons[0].addEventListener("click", () => toggleIcon(eyeIcons[0], pwdInput));
emailInput.addEventListener("focusout", () =>
  isValidEmail(emailInput, errorMsgs)
);
pwdInput.addEventListener("focusout", () => isValidPwd(pwdInput, errorMsgs));

/* "test@codeit.com" 이메일과 "codeit101" 비밀번호로 로그인하면 이동, 틀리면 오류메세지 */
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const rightEmail = "test@codeit.com";
  const rightPwd = "codeit101";

  if (emailInput.value === rightEmail && pwdInput.value === rightPwd) {
    window.location.href = "folder.html";
  } else {
    emailInput.classList.add("invalid-border");
    pwdInput.classList.add("invalid-border");
    errorMsgs[0].textContent = "이메일을 확인해주세요.";
    errorMsgs[1].textContent = "비밀번호를 확인해주세요.";
  }
});
