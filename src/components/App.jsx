import { RouterProvider, createBrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Folder from "../routes/Folder";
import Home from "../routes/Home";
import Layout from "../routes/Layout";
import Shared from "../routes/Shared";
import SignIn from "../routes/SignIn";
import SignUp from "../routes/SignUp";

export default function App() {
  return (
    <Wrapper>
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
