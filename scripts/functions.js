/* input 비어있는지 검사 */
const checkEmptyInput = (value) => {
  const hasContent = value.trim();
  return !hasContent;
};

/* email 패턴 유효하지 않은지 검사 */
const checkInvalidEmailPattern = (email) => {
  const validation = !/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email);
  return validation;
};

/* email 사용중인지 검사 */
const checkUsedEmail = async (email) => {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/check-email",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
      }),
    }
  );

  const isInUse = response.status === 409;

  return isInUse;
};

/* 비밀번호 패턴 유효하지 않은지 검사 */
const checkInvalidPasswordPattern = (password) => {
  const validation =
    !/^(?=.*[a-zA-Z])(?=.*\d)(?=\S+$)/.test(password) || password.length < 8;
  return validation;
};

/* 비밀번호와 비밀번호 확인 일치하지 않는지 검사 */
const checkPasswordsMatch = (password, passwordCheck) => {
  const checkPassword = password !== passwordCheck;
  return checkPassword;
};

export {
  checkEmptyInput,
  checkInvalidEmailPattern,
  checkUsedEmail,
  checkInvalidPasswordPattern,
  checkPasswordsMatch,
};
