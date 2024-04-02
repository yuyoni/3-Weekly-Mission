import deleteData from "@apis/deleteData";
import putData from "@apis/putData";
import CommonModal from "@components/modal/CommonModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Image from "next/image";
import { useState } from "react";
import { FolderInfo } from "type";
import styles from "../styles/EditBox.module.css";

type EditBoxProps = {
  userId: number | null;
  folderId: number | null;
  currentFolderName: string;
};

export default function EditBox({
  userId,
  folderId,
  currentFolderName,
}: EditBoxProps) {
  const queryClient = useQueryClient();
  const [editFolderModal, setEditFolderModal] = useState(false);
  const [shareFolderModal, setShareFolderModal] = useState(false);
  const [deleteFolderModal, setDeleteFolderModal] = useState(false);

  const isInVisible = (folderId: number | null) =>
    folderId === null ? styles.isInVisible : "";

  const editMutation = useMutation<FolderInfo[], AxiosError, { name: string }>({
    mutationFn: (requestData) =>
      putData({
        endpoint: `/folders/${folderId}`,
        requestData,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries();
      setEditFolderModal(false);
    },
    onError: (error) => {
      throw new Error(`수정 실패 : ${error.message}`);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: () => deleteData({ endpoint: `/folders/${folderId}` }),
    onSuccess: () => {
      queryClient.invalidateQueries();
      setDeleteFolderModal(false);
    },
    onError: (error) => {
      throw new Error(`삭제 실패 : ${error.message}`);
    },
  });

  return (
    <div className={styles.wrapper}>
      <div>{currentFolderName}</div>
      <div className={`${styles.edit} ${isInVisible(folderId)}`}>
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
      <CommonModal
        isModalShow={shareFolderModal}
        setter={setShareFolderModal}
        title="폴더 공유"
        subtitle={currentFolderName}
        icon={true}
        folderId={folderId}
        userId={userId}
      />
      <CommonModal
        isModalShow={editFolderModal}
        setter={setEditFolderModal}
        title="폴더 이름 변경"
        placeholder={currentFolderName}
        buttonText="변경하기"
        color="linear-gradient"
        handleClickButton={(value) => {
          const requestData = { name: value as string };
          editMutation.mutate(requestData);
        }}
      />
      <CommonModal
        isModalShow={deleteFolderModal}
        setter={setDeleteFolderModal}
        title="폴더 삭제"
        subtitle={currentFolderName}
        buttonText="삭제하기"
        color="#FF5B56"
        handleClickButton={() => {
          deleteMutation.mutate();
        }}
      />
    </div>
  );
}
