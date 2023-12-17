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
