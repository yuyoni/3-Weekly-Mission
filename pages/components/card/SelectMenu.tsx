import CommonModal from "@components/modal/CommonModal";
import { useState } from "react";
import styles from "./SelectMenu.module.css";

type SelectMenuProps = {
  folders: FolderData[] | null;
  linkUrl: string;
  selectMenuRef: React.RefObject<HTMLDivElement>;
};

export default function SelectMenu({
  folders,
  linkUrl,
  selectMenuRef,
}: SelectMenuProps) {
  const [deleteLinkModal, setDeleteLinkModal] = useState(false);
  const [addLinkModal, setAddLinkModal] = useState(false);

  const openDeleteModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setDeleteLinkModal(true);
  };

  const openAddLinkModal = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setAddLinkModal(true);
  };

  return (
    <div>
      <div ref={selectMenuRef} className={styles.select_menu}>
        <div className={styles.option} onClick={openDeleteModal}>
          삭제하기
        </div>
        <div className={styles.option} onClick={openAddLinkModal}>
          폴더에 추가
        </div>
      </div>
      <CommonModal
        isModalShow={deleteLinkModal}
        setter={setDeleteLinkModal}
        title="링크 삭제"
        subtitle={linkUrl}
        buttonText="삭제하기"
        color="#FF5B56"
      />
      <CommonModal
        isModalShow={addLinkModal}
        setter={setAddLinkModal}
        title="폴더에 추가"
        subtitle={linkUrl}
        buttonText="추가하기"
        folders={folders}
        color="linear-gradient"
      />
    </div>
  );
}
