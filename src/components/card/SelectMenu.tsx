import deleteData from "@apis/deleteData";
import postData from "@apis/postData";
import CommonModal from "@components/modal/CommonModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { FolderData, LinkList } from "type";
import styles from "./SelectMenu.module.css";

type SelectMenuProps = {
  isKebabClicked: boolean;
  folders: FolderData[] | null;
  link: LinkList;
  selectMenuRef: React.RefObject<HTMLDivElement>;
};

export default function SelectMenu({
  isKebabClicked,
  folders,
  link,
  selectMenuRef,
}: SelectMenuProps) {
  const queryClient = useQueryClient();
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

  const addMutate = useMutation<
    any,
    AxiosError,
    { url: string; folderId: number | null }
  >({
    mutationFn: (requestData) => postData({ endpoint: "/links", requestData }),
    onSuccess: () => {
      queryClient.invalidateQueries();
      setAddLinkModal(false);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: () => deleteData({ endpoint: `/links/${link.id}` }),
    onSuccess: () => {
      queryClient.invalidateQueries();
      setDeleteLinkModal(false);
    },
    onError: (error) => {
      throw new Error(`삭제 실패 : ${error.message}`);
    },
  });

  return (
    isKebabClicked && (
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
          subtitle={link.url}
          buttonText="삭제하기"
          color="#FF5B56"
          handleClickButton={() => {
            deleteMutation.mutate();
          }}
        />
        <CommonModal
          isModalShow={addLinkModal}
          setter={setAddLinkModal}
          title="폴더에 추가"
          subtitle={link.url}
          buttonText="추가하기"
          folders={folders}
          color="linear-gradient"
          handleClickButton={(value) => {
            const requestData = { url: link.url, folderId: value as number };
            addMutate.mutate(requestData);
          }}
        />
      </div>
    )
  );
}
