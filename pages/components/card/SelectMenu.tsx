import CommonModal from "@components/modal/CommonModal";
import { useState } from "react";
import styles from "./SelectMenu.module.css";

type Props = {
  folders: FolderData[] | null;
  linkUrl: string;
  selectMenuRef: React.RefObject<HTMLDivElement>;
};

export default function SelectMenu({ folders, linkUrl, selectMenuRef }: Props) {
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

  return (
    <div>
      <div ref={selectMenuRef} className={styles.select_menu}>
        <div className={styles.option} onClick={handleClickDelete}>
          삭제하기
        </div>
        <div className={styles.option} onClick={handleClickAddLink}>
          폴더에 추가
        </div>
      </div>
      {deleteLinkModal ? (
        <CommonModal
          setter={setDeleteLinkModal}
          title="링크 삭제"
          subtitle={linkUrl}
          buttonText="삭제하기"
          color="#FF5B56"
        />
      ) : null}
      {addLinkModal ? (
        <CommonModal
          setter={setAddLinkModal}
          title="폴더에 추가"
          subtitle={linkUrl}
          buttonText="추가하기"
          folders={folders}
          color="linear-gradient"
        />
      ) : null}
    </div>
  );
}
