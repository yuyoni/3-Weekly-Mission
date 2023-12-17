/* 이메일 유효성 검사 */
const isValidEmail = (element, message) => {
  const isEmpty = element.value.length === 0;
  const isInvalidPattern = !/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(
    element.value
  );

  element.classList.toggle("invalid-border", isEmpty || isInvalidPattern);

  message[0].textContent = isEmpty
    ? "이메일을 입력해주세요."
    : isInvalidPattern
    ? "올바른 이메일 주소가 아닙니다."
    : "";
};

/* 비밀번호 유효성 검사 */
const isValidPwd = (element, message) => {
  const isEmpty = element.value.length === 0;
  const isInvalidPattern =
    !/(?=.*[a-zA-Z])(?=.*\d).*/.test(element.value) || element.value.length < 8;

  element.classList.toggle("invalid-border", isEmpty || isInvalidPattern);

  message[1].textContent = isEmpty
    ? "비밀번호를 입력해주세요."
    : isInvalidPattern
    ? "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
    : "";
};

export { isValidEmail, isValidPwd };
