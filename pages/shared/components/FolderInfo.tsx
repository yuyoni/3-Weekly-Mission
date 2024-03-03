import useFetchData from "@hooks/useFetchData";
import { useEffect, useState } from "react";
import styles from "../styles/FolderInfo.module.css";
import UserInfo from "./UserInfo";

type Props = {
  id: Id;
  folderId: Id;
};

export default function FolderInfo({ id, folderId }: Props) {
  const [folderInfo, setFolderInfo] = useState<FolderInfo | null>(null);

  const data = useFetchData<FolderInfo[]>(`folders/${folderId}`);

  useEffect(() => {
    if (data) {
      setFolderInfo(data[0]);
    }
  }, [data, folderInfo]);

  return folderInfo ? (
    <div className={styles.wrapper}>
      <div className={styles.folder_info}>
        <UserInfo userId={id} />
        <span className={styles.name}>{folderInfo.name}</span>
      </div>
    </div>
  ) : (
    <></>
  );
}
