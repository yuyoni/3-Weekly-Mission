import Link from "next/link";
import Layout from "pages/components/common/Layout";
import styles from "./Home.module.css";

export default function Home({ currentUser }: { currentUser: User | null }) {
  return (
    <>
      <Layout>
        <div className={styles.container}>
          <h1>Home</h1>
          <Link href={`/shared/${14}`} legacyBehavior>
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
