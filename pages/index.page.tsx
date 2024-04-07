import MainDescriptionUI from "@components/MainDescriptionUI";
import Metatag from "@components/Metatag";
import Layout from "@components/common/Layout";
import Head from "next/head";
import Link from "next/link";
import styles from "./styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <Metatag />
      </Head>
      <main className={styles.container}>
        <div className={styles.title}>
          <span className={`${styles.backgroundClipText} ${styles.subtitle}`}>
            세상의 모든 정보
          </span>
          를<br />
          쉽게 저장하고 관리해 보세요
        </div>
        <Link href="/folder" className={`${styles.cta} ${styles.ctaLong}`}>
          링크 추가하기
        </Link>
        <img
          src="/images/example_main.svg"
          className={styles.mainImg}
          alt="메인 이미지"
        />
      </main>
      <MainDescriptionUI
        sloganHead=""
        highlightedText="원하는 링크"
        sloganTail="를 저장하세요"
        smallText="나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다."
        imgUrl="/images/example1.svg"
        imgAlt="폴더 이름 변경 가능"
        contentClass="content2"
      />
      <MainDescriptionUI
        sloganHead="링크를 폴더로 "
        highlightedText="관리"
        sloganTail="하세요"
        smallText="나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다."
        imgUrl="/images/example2.svg"
        imgAlt="폴더 이름 변경 가능"
        contentClass="content2"
      />
      <MainDescriptionUI
        sloganHead="저장한 링크를 "
        highlightedText="공유"
        sloganTail="해 보세요"
        smallText="여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게 쉽고 빠르게 링크를 공유해 보세요."
        imgUrl="/images/example3.svg"
        imgAlt="링크 공유 가능"
        contentClass="content3"
      />
      <MainDescriptionUI
        sloganHead="저장한 링크를 "
        highlightedText="검색"
        sloganTail="해 보세요"
        smallText="중요한 정보들을 검색으로 쉽게 찾아보세요."
        imgUrl="/images/example4.svg"
        imgAlt="링크 검색 가능"
        contentClass="content4"
      />
    </Layout>
  );
}
