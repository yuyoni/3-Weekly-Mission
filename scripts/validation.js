const isEmpty = (value) => {
  const hasContent = value.trim();
  return !hasContent;
};

const isInvalidEmail = (email) => {
  const validation = !/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email);
  return validation;
};

const isUsedEmail = async (email) => {
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

const isInvalidPassword = (password) => {
  const validation =
    !/^(?=.*[a-zA-Z])(?=.*\d)(?=\S+$)/.test(password) || password.length < 8;
  return validation;
};

const checkPasswordsMatch = (password, passwordCheck) => {
  const checkPassword = password !== passwordCheck;
  return checkPassword;
};

export {
  isEmpty,
  isInvalidEmail,
  isUsedEmail,
  isInvalidPassword,
  checkPasswordsMatch,
};
