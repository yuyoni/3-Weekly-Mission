import Link from "next/link";
import styles from "@styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <Link href={"/shared"} legacyBehavior>
        <a className={styles.link}>shared</a>
      </Link>
      <Link href={"/folder"} legacyBehavior>
        <a className={styles.link}>folder</a>
      </Link>
    </div>
  );
}
