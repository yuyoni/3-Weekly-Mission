import { ReactNode } from "react";
import NavBar from "pages/components/nav/NavBar";

type Children = {
  children: ReactNode;
};

export default function Layout({ children }: Children) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
