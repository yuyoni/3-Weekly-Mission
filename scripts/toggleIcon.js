const toggleIcon = (element, password) => {
  password.type = password.type === "password" ? "text" : "password";
  element.src =
    password.type === "password" ? "images/eye-off.svg" : "images/eye-on.svg";
};

export default toggleIcon;
