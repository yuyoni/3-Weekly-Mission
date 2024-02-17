import { createBrowserRouter } from "react-router-dom";
import Folder from "../pages/Folder";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Shared from "../pages/Shared";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

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

export default router;
