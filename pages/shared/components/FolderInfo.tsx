import getData from "@apis/getData";
import { useQuery } from "@tanstack/react-query";
import { FolderInfo, User } from "type";
import styles from "../styles/FolderInfo.module.css";
import UserInfo from "./UserInfo";

type FolderInfoProps = {
  folderId: number | null;
  userInfo: User;
};

export default function FolderInfo({ folderId, userInfo }: FolderInfoProps) {
  const {
    data: folderData,
    isPending,
    isError,
  } = useQuery<FolderInfo[]>({
    queryKey: ["folderData", folderId],
    queryFn: () => getData({ endpoint: `/folders/${folderId}` }),
  });

  if (isPending) return "loading...";
  if (isError) return "error";

  return (
    folderData && (
      <div className={styles.wrapper}>
        <div className={styles.folder_info}>
          <UserInfo userInfo={userInfo} />
          <span className={styles.name}>{folderData[0].name}</span>
        </div>
      </div>
    )
  );
}
