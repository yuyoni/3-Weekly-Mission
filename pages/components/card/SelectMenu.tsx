import { useState } from "react";
import styles from "./SelectMenu.module.css";

type Props = {
  handleClickKebab: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    isOpen: boolean
  ) => void;
  folders: FolderData[];
  linkUrl: string;
};

export default function SelectMenu({
  handleClickKebab,
  folders,
  linkUrl,
}: Props) {
  const [deleteLinkModal, setDeleteLinkModal] = useState(false);
  const [addLinkModal, setAddLinkModal] = useState(false);

  const handleClickDelete = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setDeleteLinkModal(true);
  };

  const handleClickAddLink = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setAddLinkModal(true);
  };

  const handleClickOutside = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.currentTarget === e.target) {
      handleClickKebab(e, false);
    }
  };

  return (
    <div onClick={handleClickOutside}>
      <div className={styles.select_menu}>
        <div className={styles.option} onClick={handleClickDelete}>
          삭제하기
        </div>
        <div className={styles.option} onClick={handleClickAddLink}>
          폴더에 추가
        </div>
      </div>
      {deleteLinkModal ? <div>모달자리</div> : null}
      {addLinkModal ? <div>모달자리</div> : null}
    </div>
  );
}
