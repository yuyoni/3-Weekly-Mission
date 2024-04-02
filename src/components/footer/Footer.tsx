import Image from "next/image";
import styles from "./Footer.module.css";
import facebook from "@public/images/facebook.svg";
import instagram from "@public/images/instagram.svg";
import twitter from "@public/images/twitter.svg";
import youtube from "@public/images/youtube.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.copyright}>©codeit - 2023</span>
        <div className={styles.link_box}>
          <Link href="/privacy" legacyBehavior>
            <a className={styles.privacy}>Privacy Policy</a>
          </Link>
          <Link href="/faq" legacyBehavior>
            <a className={styles.faq}>FAQ</a>
          </Link>
        </div>
        <div className={styles.sns_logo_box}>
          <Link href="https://www.facebook.com" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <Image src={facebook} alt="facebook" width={20} height={20} />
            </a>
          </Link>
          <Link href="https://www.twitter.com" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <Image src={twitter} alt="twitter" width={20} height={20} />
            </a>
          </Link>
          <Link href="https://www.youtube.com" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <Image src={youtube} alt="youtube" width={20} height={20} />
            </a>
          </Link>
          <Link href="https://www.instagram.com" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <Image src={instagram} alt="instagram" width={20} height={20} />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
