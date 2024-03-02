import Profile from "pages/components/user/Profile";
import Image from "next/image";
import Link from "next/link";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <Image
            src="images/logo.svg"
            alt="logo"
            width={132}
            height={24}
            priority
          />
        </Link>
        <Profile />
      </nav>
    </header>
  );
}
