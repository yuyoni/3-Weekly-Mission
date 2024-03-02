import Image from "next/image";
import { useState } from "react";
import styles from "../styles/EditBox.module.css";

type Props = {
  folderId: number | null;
  currentFolderName: string;
};

export default function EditBox({ folderId, currentFolderName }: Props) {
  const [editFolderModal, setEditFolderModal] = useState(false);
  const [shareFolderModal, setShareFolderModal] = useState(false);
  const [deleteFolderModal, setDeleteFolderModal] = useState(false);

  const isVisible = (id: number | null) => (id ? styles.isVisible : "");

  return (
    <div className={styles.wrapper}>
      <div>{currentFolderName}</div>
      <div className={`${styles.edit} ${isVisible(folderId)}`}>
        <div
          className={styles.share_icon}
          onClick={() => setShareFolderModal(true)}
        >
          <Image
            src="images/share.svg"
            alt="share-icon"
            width={18}
            height={18}
            priority
          />
          <span className={styles.button_text}>공유</span>
        </div>
        <div onClick={() => setEditFolderModal(true)}>
          <Image
            src="images/pen.svg"
            alt="edit-icon"
            width={18}
            height={18}
            priority
          />
          <span className={styles.button_text}>수정</span>
        </div>
        <div onClick={() => setDeleteFolderModal(true)}>
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
      {editFolderModal ? <div>모달자리</div> : null}
      {shareFolderModal ? <div>모달자리</div> : null}
      {deleteFolderModal ? <div>모달자리</div> : null}
    </div>
  );
}
