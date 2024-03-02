import useFetchData from "@hooks/useFetchData";
import Link from "next/link";
import styles from "./Profile.module.css";
import { useEffect, useState } from "react";

type UserId = {
  id: number;
};

type UserData = {
  id: number;
  createdAt: string;
  name: string;
  imageSource: string;
  email: string;
};

export default function Profile() {
  const [userId, setUserId] = useState<number>();
  const [userData, setUserData] = useState<UserData>();

  const currentUser = useFetchData<UserId>("users");

  console.log(currentUser);

  if (currentUser) {
    setUserId(currentUser.id);
    const data = useFetchData<UserData[]>(`users/${userId}`);

    if (data) {
      setUserData(data[0]);
    }
  }

  return (
    <div className={styles.wrapper}>
      {userData ? (
        <>
          <img
            className={styles.profile_icon}
            src={userData.imageSource}
            alt="profile-icon"
          />
          <span className={styles.user_email}>{userData.email}</span>
        </>
      ) : (
        <Link href="/signin" legacyBehavior>
          <a className={styles.cta}>로그인</a>
        </Link>
      )}
    </div>
  );
}
