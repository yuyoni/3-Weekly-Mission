import { ReactNode } from "react";
import NavBar from "src/components/nav/NavBar";
import Footer from "../footer/Footer";

type Children = {
  children: ReactNode;
};

export default function Layout({ children }: Children) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </>
  );
}
