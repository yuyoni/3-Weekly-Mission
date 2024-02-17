import { RouterProvider } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import router from "./router/router";

export default function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <RouterProvider router={router}></RouterProvider>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
