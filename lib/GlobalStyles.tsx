import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset};
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: "Pretendard";
  font-weight: 400;
  font-size: 14px;
  font-style: normal;
  line-height: normal;
}
a {
  text-decoration: none;
  cursor: pointer;
}
button {
  border: none;
  cursor: pointer;
}
input {
  background-color: transparent;
  border: none;
  outline: none;
}
`;

export default GlobalStyles;
