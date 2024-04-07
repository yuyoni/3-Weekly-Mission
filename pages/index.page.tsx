import Link from "next/link";
import Layout from "@components/common/Layout";
import styles from "./styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Linkbrary</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:url"
          content="https://3-weekly-mission-uefr.vercel.app/"
        />
        <meta property="og:image" content="images/description.png" />
        <meta property="og:title" content="Linkbrary" />
        <meta
          property="og:description"
          content="세상의 모든 정보를 쉽게 저장하고 관리해보세요"
        />
      </Head>
      <div className={styles.container}>
        <h1>Home</h1>
        <Link href={"/folder"} legacyBehavior>
          <a className={styles.link}>folder</a>
        </Link>
      </div>
    </Layout>
  );
}
