import {
  emailInput,
  pwdInputs,
  eyeIcons,
  errorMsgs,
  signupForm,
} from "./tags.js";
import toggleIcon from "./toggleIcon.js";
import { isValidEmail, isValidPwd } from "./validation.js";

eyeIcons.forEach((el, idx) =>
  el.addEventListener("click", () => toggleIcon(el, pwdInputs[idx]))
);
emailInput.addEventListener("focusout", () =>
  isValidEmail(emailInput, errorMsgs[0])
);
pwdInputs.forEach((el, idx) =>
  el.addEventListener("focusout", () => isValidPwd(el, errorMsgs[idx + 1]))
);

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const isExistEmail = emailInput.value === "test@codeit.com";
  const isEmptyInput =
    emailInput.value.length === 0 || pwdInputs[0].value.length === 0;
  const isEmptyError = [...errorMsgs].some((el) => el.textContent.length > 0);

  /* "test@codeit.com"로 회원가입 시도 시 오류 메세지 */
  if (isExistEmail) {
    emailInput.classList.toggle("invalid-border", isExistEmail);
    errorMsgs[0].textContent = "이미 사용중인 이메일 입니다.";
  } else if (!isEmptyInput && !isEmptyError) {
    /* input이 비어있지 않으면서 오류 메시지가 없으면 회원가입 성공 */
    window.location.href = "folder.html";
  }
});
