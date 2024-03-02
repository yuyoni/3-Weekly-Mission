import { ReactNode } from "react";
import NavBar from "@components/nav/NavBar";

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
