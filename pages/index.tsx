import Layout from "pages/components/common/Layout";
import styles from "./Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout>
        <div className={styles.container}>
          <h1>Home</h1>
          <Link href={"/shared"} legacyBehavior>
            <a className={styles.link}>shared</a>
          </Link>
          <Link href={"/folder"} legacyBehavior>
            <a className={styles.link}>folder</a>
          </Link>
        </div>
      </Layout>
    </>
  );
}
