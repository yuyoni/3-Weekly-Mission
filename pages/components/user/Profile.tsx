import useFetchData from "@hooks/useFetchData";
import Link from "next/link";
import styles from "./Profile.module.css";
import { useEffect, useState } from "react";
import { fetchData } from "@apis/fetchData";
import camelcaseKeys from "camelcase-keys";

export default function Profile() {
  const [currentUser, setCurrentUser] = useState<User>();
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setAccessToken(token);
    }
  }, []);

  useEffect(() => {
    (async () => {
      if (accessToken) {
        const data = await fetchData("users", "GET", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (data) {
          setCurrentUser(camelcaseKeys(data[0]));
        }
      }
    })();
  }, [accessToken]);

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
