import { useEffect, useState } from "react";
import styles from "../styles/UserInfo.module.css";
import useFetchData from "@hooks/useFetchData";

export default function UserInfo({ userId }: { userId: Id }) {
  const [userInfo, setUserInfo] = useState<User>();

  const data = useFetchData<User[]>(`users/${userId}`);

  useEffect(() => {
    if (data) {
      setUserInfo(data[0]);
    }
  }, [data]);

  return userInfo ? (
    <div className={styles.wrapper}>
      <img
        className={styles.user_image}
        src={userInfo.imageSource || "images/avatar.svg"}
        alt="avatar"
      />
      <span className={styles.user_name}>@{userInfo.name}</span>
    </div>
  ) : (
    <></>
  );
}
