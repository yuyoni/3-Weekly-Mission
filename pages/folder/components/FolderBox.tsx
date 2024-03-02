import { useState } from "react";
import styles from "../styles/FolderBox.module.css";
import Image from "next/image";

type Props = {
  folderData: FolderData[];
  id: Id;
  folderId: FolderId;
  updateFolderId: (id: FolderId) => void;
  updateFolderName: (name: string) => void;
};

export default function FolderBox({
  folderData,
  id,
  folderId,
  updateFolderId,
  updateFolderName,
}: Props) {
  const [addFolderModal, setAddFolderModal] = useState(false);

  const handleClickFolder = (
    clickedFolderId: Id,
    clickedFolderName: string
  ) => {
    updateFolderId(clickedFolderId);
    updateFolderName(clickedFolderName);
  };

  const folderElementClass =
    folderId === null ? styles.nullFolder : styles.nonNullFolder;

  const isSelected = (id: FolderId) =>
    folderId === id ? styles.folder_selected : styles.folder_nonselected;

  return (
    <div className={styles.wrapper}>
      <div className={styles.folder_list}>
        <div
          className={`${styles.folder_element} ${folderElementClass}`}
          onClick={() => handleClickFolder(id, "전체")}
        >
          전체
        </div>
        {folderData
          ? folderData.map(({ id, name }) => (
              <div
                className={`${styles.folder_element} ${isSelected(id)}`}
                key={id}
                onClick={() => handleClickFolder(id, name)}
              >
                {name}
              </div>
            ))
          : null}
      </div>
      <div className={styles.folder_add}>
        <div
          className={styles.folder_add_text}
          onClick={() => setAddFolderModal(true)}
        >
          <span>폴더 추가</span>
          <Image
            src="images/add.svg"
            alt="add-icon"
            width={16}
            height={16}
            priority
          />
        </div>

        <div
          className={styles.folder_add_button}
          onClick={() => setAddFolderModal(true)}
        >
          추가하기
          <Image
            src="images/white-add.svg"
            alt="add-icon"
            width={16}
            height={16}
            priority
          />
        </div>
      </div>

      {addFolderModal ? <div>모달자리</div> : null}
    </div>
  );
}
