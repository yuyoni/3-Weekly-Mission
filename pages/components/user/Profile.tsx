import { CurrentUserContext } from "@pages/_app";
import Link from "next/link";
import { useContext } from "react";
import styles from "./Profile.module.css";

export default function Profile() {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className={styles.wrapper}>
      {currentUser ? (
        <div className={styles.profile}>
          <img
            className={styles.profile_icon}
            src={currentUser.imageSource}
            alt="profile-icon"
          />
          <span className={styles.user_email}>{currentUser.email}</span>
        </div>
      ) : (
        <Link href="/signin" legacyBehavior>
          <a className={styles.cta}>로그인</a>
        </Link>
      )}
    </div>
  );
}
