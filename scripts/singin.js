import {
  CHECK_EMAIL,
  CHECK_PASSWORD,
  RIGHT_EMAIL,
  RIGHT_PASSWORD,
} from "./constant.js";
import {
  emailInput,
  pwdInputs,
  eyeIcons,
  errorMsgs,
  loginForm,
} from "./tags.js";
import toggleIcon from "./toggleIcon.js";
import { isValidEmail, isValidPwd } from "./validation.js";

/* 눈모양 아이콘 누르면 비밀번호 보이기 */
eyeIcons[0].addEventListener("click", () =>
  toggleIcon(eyeIcons[0], pwdInputs[0])
);

/* 이메일 및 비밀번호 유효성 검사 */
emailInput.addEventListener("focusout", () =>
  isValidEmail(emailInput, errorMsgs[0])
);
pwdInputs[0].addEventListener("focusout", () =>
  isValidPwd(pwdInputs[0], errorMsgs[1])
);

/* "test@codeit.com" 이메일과 "codeit101" 비밀번호로 로그인하면 이동, 틀리면 오류메세지 */
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    emailInput.value === RIGHT_EMAIL &&
    pwdInputs[0].value === RIGHT_PASSWORD
  ) {
    window.location.href = "folder.html";
  } else {
    emailInput.classList.add("invalid-border");
    pwdInputs[0].classList.add("invalid-border");
    errorMsgs[0].textContent = CHECK_EMAIL;
    errorMsgs[1].textContent = CHECK_PASSWORD;
  }
});
