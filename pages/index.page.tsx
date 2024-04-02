import Link from "next/link";
import Layout from "@components/common/Layout";
import styles from "./styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Home</h1>
        <Link href={"/folder"} legacyBehavior>
          <a className={styles.link}>folder</a>
        </Link>
      </div>
    </Layout>
  );
}
