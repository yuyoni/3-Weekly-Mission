import getData from "@apis/getData";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { User } from "type";
import styles from "./Profile.module.css";

export default function Profile() {
  const {
    data: userInfo,
    isPending,
    isError,
  } = useQuery<User[]>({
    queryKey: ["userInfo"],
    queryFn: () => getData({ endpoint: "/users" }),
  });

  if (isPending) return "loading...";
  if (isError) return "error";

  return (
    <div className={styles.wrapper}>
      {userInfo ? (
        <div className={styles.profile}>
          <img
            className={styles.profile_icon}
            src={userInfo[0].imageSource}
            alt="profile-icon"
          />
          <span className={styles.user_email}>{userInfo[0].email}</span>
        </div>
      ) : (
        <Link href="/signin" legacyBehavior>
          <a className={styles.cta}>로그인</a>
        </Link>
      )}
    </div>
  );
}
