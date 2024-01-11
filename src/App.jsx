import { RouterProvider, createBrowserRouter } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Folder from "./routes/Folder";
import Home from "./routes/Home";
import Layout from "./routes/Layout";
import Shared from "./routes/Shared";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";

export default function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <RouterProvider router={router}></RouterProvider>
    </Wrapper>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "shared",
        element: <Shared />,
      },
      {
        path: "folder",
        element: <Folder />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

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
`;
