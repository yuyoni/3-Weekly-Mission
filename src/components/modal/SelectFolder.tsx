import { useState } from "react";
import styles from "./SelectFolder.module.css";
import Image from "next/image";
import { FolderData } from "type";

type SelectFolderProps = {
  folders: FolderData[];
  onFolderSelect: (folderId: number | null) => void;
};

export default function SelectFolder({
  folders,
  onFolderSelect,
}: SelectFolderProps) {
  const [checkedFolderId, setCheckedFolderId] = useState<number | null>(null);

  const handleFolderClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    folderId: number | null
  ) => {
    e.stopPropagation();
    const newCheckedFolderId = folderId === checkedFolderId ? null : folderId;
    setCheckedFolderId(newCheckedFolderId);
    onFolderSelect(newCheckedFolderId);
  };

  const getFolderClassName = (folderId: number | null) => {
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
                  {folder.link_count}개 링크
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
