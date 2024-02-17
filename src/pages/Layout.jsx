import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navigator from "../components/nav/Navigator";

export default function Layout() {
  return (
    <>
      <Navigator />
      <Outlet />
      <Footer />
    </>
  );
}
