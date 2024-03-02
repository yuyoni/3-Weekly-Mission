import Image from "next/image";
import "./NavBar.module.css";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="header">
      <nav className="nav">
        <Link href="/">
          <Image src="images/logo.svg" alt="logo" width={132} height={24} />
        </Link>
      </nav>
    </header>
  );
}
