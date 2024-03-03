import shareKakao from "@utils/shareKakao";
import Image from "next/image";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FacebookShareButton } from "react-share";
import styles from "./IconBox.module.css";

type Props = { userId: number; folderId: number; folderName: string };

export default function IconBox({ userId, folderId, folderName }: Props) {
  const [host, setHost] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const currentHost = window.location.origin;
    setHost(currentHost);
  }, []);

  // 아직 shared 경로에서 userId와 folderId에 따라 다른 화면을 보여주고 있지 않아서 sample folder(즐겨찾기)화면만 뜸
  const route = host + `/shared?user=${userId}&folder=${folderId}`;

  return (
    <div className={styles.container}>
      <div
        className={`${styles.wrapper} ${styles.kakao}`}
        onClick={() => shareKakao(route, folderName)}
      >
        <Image
          className={styles.icon}
          src="images/kakao_icon.svg"
          alt="kakao-icon"
          width={18}
          height={18}
          priority
        />
      </div>
      <FacebookShareButton url={route}>
        <div className={`${styles.wrapper} ${styles.facebook}`}>
          <Image
            className={styles.icon}
            src="images/facebook.svg"
            alt="facebook-icon"
            width={18}
            height={18}
            priority
          />
        </div>
      </FacebookShareButton>
      <CopyToClipboard
        text={route}
        onCopy={() => alert("클립보드에 복사되었습니다.")}
      >
        <div className={`${styles.wrapper} ${styles.clipboard}`}>
          <Image
            className={styles.icon}
            src="images/link.svg"
            alt="link-icon"
            width={18}
            height={18}
            priority
          />
        </div>
      </CopyToClipboard>
      <p className={styles.sns}>카카오톡</p>
      <p className={styles.sns}>페이스북</p>
      <p className={styles.sns}>링크복사</p>
    </div>
  );
}