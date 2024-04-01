import CommonModal from "@components/modal/CommonModal";
import { useEffect, useState } from "react";
import styles from "./SelectMenu.module.css";
import { FolderData, Id } from "type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteData from "@apis/deleteData";
import postData from "@apis/postData";
import { AxiosError } from "axios";
import { getCookie } from "cookies-next";

type SelectMenuProps = {
  isKebabClicked: boolean;
  folders: FolderData[] | null;
  linkId: Id;
  linkUrl: string;
  selectMenuRef: React.RefObject<HTMLDivElement>;
};

export default function SelectMenu({
  isKebabClicked,
  folders,
  linkId,
  linkUrl,
  selectMenuRef,
}: SelectMenuProps) {
  const queryClient = useQueryClient();
  const [deleteLinkModal, setDeleteLinkModal] = useState(false);
  const [addLinkModal, setAddLinkModal] = useState(false);

  const token = getCookie("accessToken");

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

  const addMutate = useMutation<any, AxiosError, { url: string; folderId: Id }>(
    {
      mutationFn: (requestData) =>
        postData({ endpoint: "/links", requestData, token }),
      onSuccess: () => {
        queryClient.invalidateQueries();
        setAddLinkModal(false);
      },
    }
  );

  const deleteMutation = useMutation({
    mutationFn: () => deleteData({ endpoint: `/links/${linkId}`, token }),
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
          subtitle={linkUrl}
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
          subtitle={linkUrl}
          buttonText="추가하기"
          folders={folders}
          color="linear-gradient"
          handleClickButton={(value) => {
            const requestData = { url: linkUrl, folderId: value as number };
            addMutate.mutate(requestData);
          }}
        />
      </div>
    )
  );
}
