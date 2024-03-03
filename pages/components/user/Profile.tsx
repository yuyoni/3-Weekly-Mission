import useFetchData from "@hooks/useFetchData";
import Link from "next/link";
import styles from "./Profile.module.css";
import { useEffect, useState } from "react";

export default function Profile() {
  const [currentUser, setCurrentUser] = useState<User>();

  // const data = useFetchData<User[]>("users");
  const data = useFetchData<User[]>("sample/users");
  console.log(data);

  useEffect(() => {
    if (data) {
      setCurrentUser(data[0]);
    }
  }, [data]);

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
