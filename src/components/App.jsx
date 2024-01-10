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
      <RouterProvider router={router} />
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

  /* Mobile size */
  @media (max-width: 767px) {
    header {
      padding: 18px 32px;
    }
    nav {
      width: 100%;
    }
    .user-email {
      display: none;
    }
  }

  /* Tablet size */
  @media (min-width: 768px) and (max-width: 1199px) {
    header {
      padding: 32px;
    }
    nav {
      width: 800px;
    }
  }
`;
