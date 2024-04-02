const USED_EMAIL = "이미 사용중인 아이디 입니다";
const INVALID_EMAIL = "올바른 이메일 주소가 아닙니다.";
const WRONG_EMAIL = "아이디를 확인해주세요";
const REQUIRED_EMAIL = "이메일을 입력해 주세요.";

const REQUIRED_PASSWORD = "비밀번호를 입력해 주세요.";
const WRONG_PASSWORD = "비밀번호를 확인해주세요";
const INVALID_PASSWORD = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";

const WRONG_PASSWORD_CHECK = "비밀번호가 일치하지 않습니다.";

const emailRegex = /\S+@\S+\.\S+/;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

export {
  USED_EMAIL,
  INVALID_EMAIL,
  WRONG_EMAIL,
  REQUIRED_EMAIL,
  REQUIRED_PASSWORD,
  WRONG_PASSWORD,
  INVALID_PASSWORD,
  WRONG_PASSWORD_CHECK,
  emailRegex,
  passwordRegex,
};
