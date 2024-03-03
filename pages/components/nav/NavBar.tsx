import Profile from "pages/components/user/Profile";
import Image from "next/image";
import Link from "next/link";
import styles from "./NavBar.module.css";
import logo from "@public/images/logo.svg";

export default function NavBar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" legacyBehavior>
          <a className={styles.logo}>
            <Image src={logo} alt="logo" width={132} height={24} priority />
          </a>
        </Link>
        <Profile />
      </nav>
    </header>
  );
}
