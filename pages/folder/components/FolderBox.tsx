import CommonModal from "@components/modal/CommonModal";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/FolderBox.module.css";

type Props = {
  folders: FolderData[];
  id: Id;
  folderId: FolderId;
  updateFolder: (id: FolderId, name: string) => void;
};

export default function FolderBox({
  folders,
  id,
  folderId,
  updateFolder,
}: Props) {
  const [addFolderModal, setAddFolderModal] = useState(false);

  const handleClickFolder = (
    clickedFolderId: Id,
    clickedFolderName: string
  ) => {
    updateFolder(clickedFolderId, clickedFolderName);
  };

  const isFolderSelected =
    folderId === null
      ? styles.selected_folder_color
      : styles.default_folder_color;

  const getFolderColorClassName = (id: FolderId) =>
    folderId === id
      ? styles.selected_folder_color
      : styles.default_folder_color;

  return (
    <div className={styles.wrapper}>
      <div className={styles.folder_list}>
        <div
          className={`${styles.folder_element} ${isFolderSelected}`}
          onClick={() => handleClickFolder(null, "전체")}
        >
          전체
        </div>
        {folders &&
          folders.map(({ id, name }) => (
            <div
              className={`${styles.folder_element} ${getFolderColorClassName(
                id
              )}`}
              key={id}
              onClick={() => handleClickFolder(id, name)}
            >
              {name}
            </div>
          ))}
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
      <CommonModal
        isModalShow={addFolderModal}
        setter={setAddFolderModal}
        title="폴더 추가"
        placeholder="폴더명"
        buttonText="추가하기"
        color="linear-gradient"
      />
    </div>
  );
}
