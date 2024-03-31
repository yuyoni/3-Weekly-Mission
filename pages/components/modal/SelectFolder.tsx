import { useState } from "react";
import styles from "./SelectFolder.module.css";
import Image from "next/image";
import { FolderData, Id } from "type";

type SelectFolderProps = {
  folders: FolderData[];
};

export default function SelectFolder({ folders }: SelectFolderProps) {
  const [checkedFolderId, setCheckedFolderId] = useState<Id | null>(null);

  const handleFolderClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    folderId: Id
  ) => {
    e.stopPropagation();
    setCheckedFolderId(folderId === checkedFolderId ? null : folderId);
  };

  const getFolderClassName = (folderId: Id) => {
    return folderId === checkedFolderId ? styles.checked : "";
  };

  return (
    <div className={styles.wrapper}>
      {folders &&
        folders.map((folder) => {
          return (
            <div
              className={`${styles.container} ${getFolderClassName(folder.id)}`}
              key={folder.id}
              onClick={(e) => handleFolderClick(e, folder.id)}
            >
              <div className={styles.folder_info}>
                <span className={styles.folder_name}>{folder.name}</span>
                <span className={styles.link_count}>
                  {folder.linkCount}개 링크
                </span>
              </div>
              {folder.id === checkedFolderId && (
                <Image
                  className={styles.icon}
                  src="images/check.svg"
                  alt="check-icon"
                  width={14}
                  height={14}
                />
              )}
            </div>
          );
        })}
    </div>
  );
}
