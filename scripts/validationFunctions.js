const checkEmptyInput = (value) => {
  const hasContent = value.trim();
  return hasContent === "";
};

const checkInvalidEmailPattern = (email) => {
  return !/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email);
};

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

  return response.status === 409;
};

const checkInvalidPasswordPattern = (password) => {
  return (
    !/^(?=.*[a-zA-Z])(?=.*\d)(?=\S+$)/.test(password) || password.length < 8
  );
};

const checkPasswordsMatch = (password, passwordCheck) => {
  return password !== passwordCheck;
};

export {
  checkEmptyInput,
  checkInvalidEmailPattern,
  checkUsedEmail,
  checkInvalidPasswordPattern,
  checkPasswordsMatch,
};
