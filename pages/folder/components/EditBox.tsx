import Image from "next/image";
import { useState } from "react";
import styles from "../styles/EditBox.module.css";
import CommonModal from "@components/modal/CommonModal";

type Props = {
  id: Id;
  folderId: number | null;
  currentFolderName: string;
};

export default function EditBox({ id, folderId, currentFolderName }: Props) {
  const [editFolderModal, setEditFolderModal] = useState(false);
  const [shareFolderModal, setShareFolderModal] = useState(false);
  const [deleteFolderModal, setDeleteFolderModal] = useState(false);

  const isVisible = (folderId: number | null) =>
    folderId ? styles.isVisible : "";

  return (
    <div className={styles.wrapper}>
      <div>{currentFolderName}</div>
      <div className={`${styles.edit} ${isVisible(folderId)}`}>
        <div className={styles.icon} onClick={() => setShareFolderModal(true)}>
          <Image
            src="images/share.svg"
            alt="share-icon"
            width={18}
            height={18}
            priority
          />
          <span className={styles.button_text}>공유</span>
        </div>
        <div className={styles.icon} onClick={() => setEditFolderModal(true)}>
          <Image
            src="images/pen.svg"
            alt="edit-icon"
            width={18}
            height={18}
            priority
          />
          <span className={styles.button_text}>수정</span>
        </div>
        <div className={styles.icon} onClick={() => setDeleteFolderModal(true)}>
          <Image
            src="images/trashcan.svg"
            alt="delete-icon"
            width={18}
            height={18}
            priority
          />
          <span className={styles.button_text}>삭제</span>
        </div>
      </div>
      {editFolderModal ? (
        <CommonModal
          setter={setEditFolderModal}
          title="폴더 이름 변경"
          placeholder={currentFolderName}
          buttonText="변경하기"
          color="linear-gradient"
        />
      ) : null}
      {shareFolderModal ? (
        <CommonModal
          setter={setShareFolderModal}
          title="폴더 공유"
          subtitle={currentFolderName}
          icon={true}
          folderId={folderId}
          userId={id}
        />
      ) : null}
      {deleteFolderModal ? (
        <CommonModal
          setter={setDeleteFolderModal}
          title="폴더 삭제"
          subtitle={currentFolderName}
          buttonText="삭제하기"
          color="#FF5B56"
        />
      ) : null}
    </div>
  );
}
