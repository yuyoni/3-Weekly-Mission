import { User } from "type";
import styles from "../styles/UserInfo.module.css";

interface UserInfoProps {
  userInfo: User;
}

export default function UserInfo({ userInfo }: UserInfoProps) {
  return (
    userInfo && (
      <div className={styles.wrapper}>
        <img
          className={styles.user_image}
          src={userInfo.image_source || "images/avatar.svg"}
          alt="avatar"
        />
        <span className={styles.user_name}>@{userInfo.name}</span>
      </div>
    )
  );
}
