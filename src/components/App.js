import "../css/App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../routes/Layout";
import Shared from "../routes/Shared";
import Home from "../routes/Home";
import Folder from "../routes/Folder";
import SignIn from "../routes/SignIn";
import SignUp from "../routes/SignUp";
import styled from "styled-components";

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

export default function App() {
  return (
    <Wrapper>
      <RouterProvider router={router} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
