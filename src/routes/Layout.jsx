import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navigator from "../components/Navigator";

export default function Layout() {
  return (
    <>
      <Navigator />
      <Outlet />
      <Footer />
    </>
  );
}
