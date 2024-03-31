import getData from "@apis/getData";
import { useQuery } from "@tanstack/react-query";
import { Id, User } from "type";
import styles from "../styles/UserInfo.module.css";

export default function UserInfo({ userId }: { userId: Id }) {
  const {
    data: userInfo,
    isPending,
    isError,
  } = useQuery<User[]>({
    queryKey: ["userInfo"],
    queryFn: () => getData({ endpoint: `/users/${userId}` }),
  });

  if (isPending) return "loading...";
  if (isError) return "error";

  return userInfo ? (
    <div className={styles.wrapper}>
      <img
        className={styles.user_image}
        src={userInfo[0].imageSource || "images/avatar.svg"}
        alt="avatar"
      />
      <span className={styles.user_name}>@{userInfo[0].name}</span>
    </div>
  ) : (
    <></>
  );
}
